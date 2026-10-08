require('dotenv').config();
const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const db = new Database(process.env.DB_FILE || 'data.db');
db.exec(`CREATE TABLE IF NOT EXISTS quotes(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL, company TEXT, email TEXT NOT NULL, phone TEXT,
  services TEXT NOT NULL, location TEXT, details TEXT, lang TEXT,
  email_status TEXT DEFAULT 'pending',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP)`);

const mailer = process.env.SMTP_HOST ? nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT || 465,
  secure: (+process.env.SMTP_PORT || 465) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
}) : null;

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ALLOWED = ['ILL','MetroWAN','OfficeWAN','Dark fiber','MPLS','IT support','Equipment leasing','IDC rack'];

// Render free chặn cổng SMTP -> ưu tiên gửi qua Brevo HTTP API (HTTPS), fallback SMTP khi chạy local
async function send({ to, subject, html, replyTo }) {
  if (process.env.BREVO_API_KEY) {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: process.env.MAIL_FROM_NAME || 'NIS INTEGRATION SOLUTIONS', email: process.env.MAIL_FROM_EMAIL },
        to: to.split(',').map(e => ({ email: e.trim() })),
        ...(replyTo ? { replyTo: { email: replyTo } } : {}),
        subject, htmlContent: html
      })
    });
    if (!r.ok) throw new Error('Brevo ' + r.status + ' ' + await r.text());
    return;
  }
  if (!mailer) throw new Error('No mail provider configured');
  return mailer.sendMail({ from: process.env.MAIL_FROM, to, subject, html, replyTo });
}

async function sendMails(q) {
  const vi = q.lang === 'vi';
  const rows = [['Name',q.name],['Company',q.company],['Email',q.email],['Phone',q.phone],
    ['Services',q.services.join(', ')],['Location',q.location],['Details',q.details],['Language',q.lang]]
    .map(([k,v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('');
  await send({
    from: process.env.MAIL_FROM, to: process.env.SALES_TO, replyTo: q.email,
    subject: `[Quote #${q.id}] ${q.company || q.name} - ${q.services.join(', ')}`,
    html: `<table cellpadding="6">${rows}</table>`
  });
  await send({
    from: process.env.MAIL_FROM, to: q.email,
    subject: vi ? `Đã nhận yêu cầu báo giá #${q.id}` : `We received your quote request #${q.id}`,
    html: vi
      ? `<p>Chào ${esc(q.name)},</p><p>Cảm ơn bạn đã liên hệ. Đội ngũ kinh doanh sẽ phản hồi trong vòng 1 ngày làm việc.</p><p>Dịch vụ quan tâm: ${esc(q.services.join(', '))}</p>`
      : `<p>Hi ${esc(q.name)},</p><p>Thanks for reaching out. Our sales team will reply within 1 business day.</p><p>Services requested: ${esc(q.services.join(', '))}</p>`
  });
}

const app = express();
app.use(express.json({ limit: '50kb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/quote', rateLimit({ windowMs: 15*60*1000, max: 10 }), async (req, res) => {
  const b = req.body || {};
  if (b.website) return res.json({ ok: true }); // honeypot: bot
  const clean = (v, n) => String(v ?? '').trim().slice(0, n);
  const q = {
    name: clean(b.name, 100), company: clean(b.company, 150), email: clean(b.email, 150),
    phone: clean(b.phone, 30), location: clean(b.location, 200), details: clean(b.details, 2000),
    lang: b.lang === 'vi' ? 'vi' : 'en',
    services: (Array.isArray(b.services) ? b.services : []).filter(s => ALLOWED.includes(s))
  };
  if (!q.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q.email) || !q.services.length)
    return res.status(400).json({ ok: false, error: 'invalid' });

  const info = db.prepare(`INSERT INTO quotes(name,company,email,phone,services,location,details,lang)
    VALUES(?,?,?,?,?,?,?,?)`).run(q.name,q.company,q.email,q.phone,q.services.join(', '),q.location,q.details,q.lang);
  q.id = info.lastInsertRowid;
  res.json({ ok: true, id: q.id }); // dữ liệu đã lưu; gửi mail chạy nền

  sendMails(q)
    .then(() => db.prepare('UPDATE quotes SET email_status=? WHERE id=?').run('sent', q.id))
    .catch(e => { console.error('Mail error:', e.message); db.prepare('UPDATE quotes SET email_status=? WHERE id=?').run('failed', q.id); });
});

app.listen(process.env.PORT || 3000, () => console.log('Running on http://localhost:' + (process.env.PORT || 3000)));
