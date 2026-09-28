const OPTS = ['ILL','MetroWAN','OfficeWAN','Dark fiber','MPLS','IT support','Equipment leasing','IDC rack'];
const T = {
en: {
 nav:['Home','About us','Services','Contact','Get a quote'],
 heroT:'Dependable connectivity for businesses that cannot afford downtime',
 heroP:'Dedicated internet, private networks, IT support and data center space from one provider, backed by a 24/7 network operations team.',
 heroB1:'Get a quote', heroB2:'Explore services',
 svcT:'Our services', svcP:'Three service lines that cover your network, your people and your infrastructure.',
 svc:[
  {t:'Connectivity',d:'Dedicated links designed around your sites and SLA.',l:['ILL (Internet Leased Line)','MetroWAN','OfficeWAN','Dark fiber','MPLS VPN and other private links']},
  {t:'IT support',d:'Hands-on help so your team stays productive.',l:['Helpdesk and on-site support','Network and server maintenance','Monitoring and incident response','Security and backup setup']},
  {t:'Equipment leasing & IDC rack',d:'Skip the capital cost and host in a certified facility.',l:['Router, switch and firewall leasing','Server and rack hosting','Power, cooling and cross-connect','Remote hands']}],
 whyT:'Why teams choose us',
 why:[['SLA-backed uptime','Written availability and repair-time commitments for every link.'],['24/7 NOC','Engineers monitor your services around the clock.'],['One contact','A single account team for links, support and hosting.']],
 aboutT:'About us',
 aboutP1:'We are a telecom and IT infrastructure provider serving businesses across Vietnam. We design, deliver and operate the networks that connect offices, data centers and cloud platforms.',
 aboutP2:'Our approach is simple: understand your sites and traffic, propose the right topology, deliver on schedule, and stay accountable after go-live.',
 contactT:'Contact', contactP:'Tell us about your project or reach the team directly.',
 addr:'Address', addrV:'123 Example Street, District 1, Ho Chi Minh City', hrs:'Support', hrsV:'24/7 NOC, sales Mon-Fri 8:00-17:30',
 clientsT:'Our clients',
 foot:'All rights reserved.',
 qT:'Get a quote', qP:'Tell us what you need. We reply within one business day.',
 f:{name:'Full name',company:'Company',email:'Work email',phone:'Phone',svc:'Services you need',loc:'Site locations',det:'Requirements (bandwidth, quantity, timeline)',send:'Send request',sending:'Sending...',ok:'Request sent. Please check your email for a confirmation.',err:'Could not send. Check the required fields and try again.'},
 opt:{'ILL':'ILL','MetroWAN':'MetroWAN','OfficeWAN':'OfficeWAN','Dark fiber':'Dark fiber','MPLS':'MPLS','IT support':'IT support','Equipment leasing':'Equipment leasing','IDC rack':'IDC rack'}
},
vi: {
 nav:['Trang chủ','Về chúng tôi','Dịch vụ','Liên hệ','Nhận báo giá'],
 heroT:'Kết nối ổn định cho doanh nghiệp',
 heroP:'Internet trực tiếp, mạng riêng, hỗ trợ IT và không gian data center từ một nhà cung cấp, được vận hành bởi đội NOC 24/7.',
 heroB1:'Nhận báo giá', heroB2:'Xem dịch vụ',
 svcT:'Dịch vụ của chúng tôi', svcP:'Ba nhóm dịch vụ bao phủ mạng lưới, con người và hạ tầng của bạn.',
 svc:[
  {t:'Kênh truyền',d:'Đường truyền riêng thiết kế theo từng điểm và cam kết SLA.',l:['ILL (Internet leased line)','MetroWAN','OfficeWAN','Cáp trắng (dark fiber)','MPLS VPN và các kênh riêng khác']},
  {t:'IT support',d:'Hỗ trợ tận nơi để đội ngũ của bạn làm việc liền mạch.',l:['Helpdesk và hỗ trợ tại chỗ','Bảo trì mạng và máy chủ','Giám sát và xử lý sự cố','Thiết lập bảo mật và backup']},
  {t:'Thuê thiết bị & rack IDC',d:'Giảm chi phí đầu tư, đặt hạ tầng tại trung tâm dữ liệu đạt chuẩn.',l:['Thuê router, switch, firewall','Đặt máy chủ và thuê rack','Điện, làm mát và cross-connect','Remote hands']}],
 whyT:'Vì sao khách hàng chọn chúng tôi',
 why:[['Uptime cam kết SLA','Cam kết bằng văn bản về độ khả dụng và thời gian khắc phục cho từng kênh.'],['NOC 24/7','Kỹ sư giám sát dịch vụ của bạn suốt ngày đêm.'],['Một đầu mối','Một đội phụ trách chung cho kênh truyền, hỗ trợ IT và hosting.']],
 aboutT:'Về chúng tôi',
 aboutP1:'Chúng tôi là nhà cung cấp dịch vụ viễn thông và hạ tầng IT cho doanh nghiệp tại Việt Nam. Chúng tôi thiết kế, triển khai và vận hành mạng kết nối văn phòng, data center và nền tảng cloud.',
 aboutP2:'Cách làm của chúng tôi đơn giản: hiểu rõ điểm kết nối và lưu lượng, đề xuất mô hình phù hợp, bàn giao đúng hạn và chịu trách nhiệm sau khi vận hành.',
 contactT:'Liên hệ', contactP:'Cho chúng tôi biết về dự án của bạn hoặc liên hệ trực tiếp với đội ngũ.',
 addr:'Địa chỉ', addrV:'314/6 Điện Biên Phủ, Vườn Lài, Hồ Chí Minh', hrs:'Hỗ trợ', hrsV:'NOC 24/7, kinh doanh T2-T6 8:00-17:30',
 clientsT:'Khách hàng của chúng tôi',
 foot:'Bảo lưu mọi quyền.',
 qT:'Nhận báo giá', qP:'Cho chúng tôi biết nhu cầu của bạn. Chúng tôi phản hồi trong vòng một ngày làm việc.',
 f:{name:'Họ và tên',company:'Công ty',email:'Email công việc',phone:'Số điện thoại',svc:'Dịch vụ cần báo giá',loc:'Địa điểm lắp đặt',det:'Yêu cầu (băng thông, số lượng, thời gian)',send:'Gửi yêu cầu',sending:'Đang gửi...',ok:'Đã gửi yêu cầu. Vui lòng kiểm tra email để xem xác nhận.',err:'Không gửi được. Hãy kiểm tra các trường bắt buộc và thử lại.'},
 opt:{'ILL':'ILL','MetroWAN':'MetroWAN','OfficeWAN':'OfficeWAN','Dark fiber':'Cáp trắng','MPLS':'MPLS','IT support':'IT support','Equipment leasing':'Thuê thiết bị','IDC rack':'Rack IDC'}
}};

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let lang = (() => { try { return localStorage.getItem('lang') === 'vi' ? 'vi' : 'en'; } catch { return 'en'; } })();

function chrome() {
  $('#hdr').innerHTML = `<header><div class="wrap"><a class="logo" href="index.html"><img src="logo.png" alt="" height="40"><span>NIS Integration Solutions</span></a>
    <nav id="nav"><a href="index.html" data-n="0"></a><a href="about.html" data-n="1"></a><a href="services.html" data-n="2"></a><a href="index.html#contact" data-n="3"></a>
    <a class="btn" href="quote.html" data-n="4"></a></nav>
    <button class="lang" id="lang" aria-label="Language">EN | VI</button>
    <button class="menu" id="menu" aria-label="Menu">&#9776;</button></div></header>`;
  $('#ftr').innerHTML = `<footer><div class="wrap"><span>&copy; ${new Date().getFullYear()} NIS Integration Solutions. <span data-k="foot"></span></span>
    <span>support@nis-solutions.com | +84 973 232 812</span></div></footer>`;
  $('#lang').onclick = () => { lang = lang === 'en' ? 'vi' : 'en'; try { localStorage.setItem('lang', lang); } catch {} render(); };
  $('#menu').onclick = () => $('#nav').classList.toggle('open');
}

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  $$('[data-n]').forEach(e => e.textContent = t.nav[e.dataset.n]);
  $$('[data-k]').forEach(e => e.textContent = t[e.dataset.k] ?? '');
  $$('[data-f]').forEach(e => e.textContent = t.f[e.dataset.f]);
  $$('[data-w]').forEach(e => e.textContent = t.why[e.dataset.w][e.dataset.p]);
  $('#lang').innerHTML = lang === 'en' ? '<b>EN</b> | VI' : 'EN | <b>VI</b>';
  services();
  const g = $('#svcGrid');
  if (g) g.innerHTML = t.svc.map(s => `<div class="card"><h3>${s.t}</h3><p>${s.d}</p><ul>${s.l.map(x => `<li>${x}</li>`).join('')}</ul></div>`).join('');
  const c = $('#opts');
  if (c) {
    const pre = new URLSearchParams(location.search).get('svc');
    const on = (!c.children.length && pre) ? [pre] : $$('#opts input:checked').map(i => i.value);
    c.innerHTML = OPTS.map(o => `<label><input type="checkbox" name="services" value="${o}" ${on.includes(o) ? 'checked' : ''}> ${t.opt[o]}</label>`).join('');
  }
}

function services() {
  if (typeof SV_T === 'undefined') return;
  const u = SV_T[lang], L = $('#svcList'), D = $('#svcDetail');
  $$('[data-u]').forEach(e => e.textContent = u.ui[e.dataset.u]);
  if (L) L.innerHTML = SV.map(id => `<a class="card sv" href="service.html?s=${id}"><div class="art">${art(id)}</div><h3>${u[id].n}</h3><p>${u[id].s}</p><span class="more">${u.ui.more}</span></a>`).join('');
  if (D) {
    const q = new URLSearchParams(location.search).get('s'), id = SV.includes(q) ? q : SV[0], x = u[id];
    document.title = x.n + ' - NIS Integration Solutions';
    D.innerHTML = `<a href="services.html">&larr; ${u.ui.all}</a><div class="two" style="margin-top:20px"><div class="art">${art(id)}</div>
      <div><h2>${x.n}</h2><p>${x.d}</p><h3 style="margin:18px 0 8px">${u.ui.feat}</h3><ul style="padding-left:18px;margin-bottom:24px">${x.f.map(f => `<li>${f}</li>`).join('')}</ul>
      <a class="btn" href="quote.html?svc=${encodeURIComponent(SV_OPT[id])}">${u.ui.quote}</a></div></div>`;
  }
}
function quoteForm() {
  const form = $('#quoteForm'); if (!form) return;
  const box = $('#msg');
  form.onsubmit = async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    d.services = $$('#opts input:checked').map(i => i.value);
    d.lang = lang;
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true; btn.textContent = T[lang].f.sending; box.className = 'msg';
    try {
      const r = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      if (!r.ok) throw 0;
      box.textContent = T[lang].f.ok; box.className = 'msg ok'; form.reset();
    } catch { box.textContent = T[lang].f.err; box.className = 'msg err'; }
    btn.disabled = false; btn.textContent = T[lang].f.send;
  };
}
chrome(); render(); quoteForm();
