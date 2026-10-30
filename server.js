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

db.exec(`CREATE TABLE IF NOT EXISTS contacts(
  id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, subject TEXT NOT NULL,
  message TEXT, lang TEXT, email_status TEXT DEFAULT 'pending',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP)`);
db.exec(`CREATE TABLE IF NOT EXISTS subscribers(
  id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE NOT NULL, lang TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP)`);

const mailer = process.env.SMTP_HOST ? nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT || 465,
  secure: (+process.env.SMTP_PORT || 465) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
}) : null;

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

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

async function sendContactMails(c) {
  const vi = c.lang === 'vi';
  const rows = [['Name',c.name],['Email',c.email],['Subject',c.subject],['Message',c.message],['Language',c.lang]]
    .map(([k,v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('');
  await send({ to: process.env.SALES_TO, replyTo: c.email, subject: `[Contact #${c.id}] ${c.subject}`, html: `<table cellpadding="6">${rows}</table>` });
  await send({
    to: c.email,
    subject: vi ? `Đã nhận liên hệ #${c.id}` : `We received your message #${c.id}`,
    html: vi
      ? `<p>Chào ${esc(c.name)},</p><p>Cảm ơn bạn đã liên hệ NIS INTEGRATION SOLUTIONS. Đội ngũ của chúng tôi sẽ phản hồi trong vòng 1 ngày làm việc.</p><p>Chủ đề: ${esc(c.subject)}</p>`
      : `<p>Hi ${esc(c.name)},</p><p>Thanks for contacting NIS INTEGRATION SOLUTIONS. Our team will reply within 1 business day.</p><p>Subject: ${esc(c.subject)}</p>`
  });
}

const app = express();
app.use(express.json({ limit: '50kb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/contact', rateLimit({ windowMs: 15*60*1000, max: 10 }), (req, res) => {
  const b = req.body || {};
  if (b.website) return res.json({ ok: true }); // honeypot: bot
  const clean = (v, n) => String(v ?? '').trim().slice(0, n);
  const c = { name: clean(b.name, 100), email: clean(b.email, 150), subject: clean(b.subject, 150), message: clean(b.message, 2000), lang: b.lang === 'vi' ? 'vi' : 'en' };
  if (!c.name || !c.subject || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) return res.status(400).json({ ok: false, error: 'invalid' });
  c.id = db.prepare('INSERT INTO contacts(name,email,subject,message,lang) VALUES(?,?,?,?,?)').run(c.name, c.email, c.subject, c.message, c.lang).lastInsertRowid;
  res.json({ ok: true, id: c.id }); // saved first; mail runs in the background
  sendContactMails(c)
    .then(() => db.prepare('UPDATE contacts SET email_status=? WHERE id=?').run('sent', c.id))
    .catch(e => { console.error('Mail error:', e.message); db.prepare('UPDATE contacts SET email_status=? WHERE id=?').run('failed', c.id); });
});

app.post('/api/subscribe', rateLimit({ windowMs: 15*60*1000, max: 10 }), (req, res) => {
  const em = String(req.body?.email ?? '').trim().slice(0, 150);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) return res.status(400).json({ ok: false });
  db.prepare('INSERT OR IGNORE INTO subscribers(email,lang) VALUES(?,?)').run(em, req.body.lang === 'vi' ? 'vi' : 'en');
  res.json({ ok: true });
});

app.listen(process.env.PORT || 3000, () => console.log('Running on http://localhost:' + (process.env.PORT || 3000)));
