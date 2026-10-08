const OPTS = ['ILL','MetroWAN','OfficeWAN','Dark fiber','MPLS','IT support','Equipment leasing','IDC rack'];
const T = {
en: {
 nav:['Home','About us','Services','Contact','Get a quote'],
 heroBadge:'Enterprise telecom provider', st1:'SLA commitment', st2:'Domestic latency', st3:'Technical NOC support',
 heroT:'High-speed network infrastructure & comprehensive telecom solutions',
 heroP:'NIS INTEGRATION SOLUTIONS is a provider of telecom, network infrastructure and IT solutions, supporting businesses in building and growing their digital foundation. We deliver practical, stable and optimized solutions that help enterprises connect efficiently, operate smartly and grow sustainably in the digital era.',
 heroB1:'Get a quote', heroB2:'Explore services',
 whyT:'Why teams choose us',
 why:[['SLA-backed uptime','Written availability and repair-time commitments for every link.'],['24/7 NOC','Engineers monitor your services around the clock.'],['One contact','A single account team for links, support and hosting.']],
 aboutT:'About us',
 aboutP1:'We are a telecom and IT infrastructure provider serving businesses across Vietnam. We design, deliver and operate the networks that connect offices, data centers and cloud platforms.',
 aboutP2:'Our approach is simple: understand your sites and traffic, propose the right topology, deliver on schedule, and stay accountable after go-live.',
 contactT:'Contact', contactP:'Tell us about your project or reach the team directly.',
 addr:'Address', addrV:'Representative office: 314/6 Dien Bien Phu Street, Vuon Lai Ward, Ho Chi Minh City.<br>Head office (business registration): 347/64/5 Le Van Tho Street, Thong Tay Hoi Ward, Ho Chi Minh City.',
 hrs:'Support', hrsV:'24/7 NOC, sales Mon-Fri 8:00-17:30',
 clientsT:'Featured clients', clientsP:'A few of the organizations that run their network and infrastructure with us.',
 foot:'All rights reserved.',
 qT:'Get a quote', qP:'Tell us what you need. We reply within one business day.',
 f:{name:'Full name',company:'Company',email:'Work email',phone:'Phone',svc:'Services you need',loc:'Site locations',det:'Requirements (bandwidth, quantity, timeline)',send:'Send request',sending:'Sending...',ok:'Request sent. Please check your email for a confirmation.',err:'Could not send. Check the required fields and try again.'},
 opt:{'ILL':'ILL','MetroWAN':'MetroWAN','OfficeWAN':'OfficeWAN','Dark fiber':'Dark fiber','MPLS':'MPLS','IT support':'IT support','Equipment leasing':'Equipment leasing','IDC rack':'IDC rack'}
},
vi: {
 nav:['Trang chủ','Về chúng tôi','Dịch vụ','Liên hệ','Nhận báo giá'],
 heroBadge:'Nhà cung cấp viễn thông doanh nghiệp', st1:'Cam kết SLA', st2:'Độ trễ trong nước', st3:'Hỗ trợ kỹ thuật NOC',
 heroT:'Hạ tầng mạng tốc độ cao & giải pháp viễn thông toàn diện',
 heroP:'NIS INTEGRATION SOLUTIONS là đơn vị cung cấp giải pháp viễn thông, hạ tầng mạng và công nghệ thông tin, đồng hành cùng doanh nghiệp trong quá trình xây dựng và phát triển nền tảng số. Chúng tôi mang đến những giải pháp thiết thực, ổn định và tối ưu, giúp doanh nghiệp kết nối hiệu quả, vận hành thông minh và phát triển bền vững trong thời đại số.',
 heroB1:'Nhận báo giá', heroB2:'Xem dịch vụ',
 whyT:'Vì sao khách hàng chọn chúng tôi',
 why:[['Uptime cam kết SLA','Cam kết bằng văn bản về độ khả dụng và thời gian khắc phục cho từng kênh.'],['NOC 24/7','Kỹ sư giám sát dịch vụ của bạn suốt ngày đêm.'],['Một đầu mối','Một đội phụ trách chung cho kênh truyền, hỗ trợ IT và hosting.']],
 aboutT:'Về chúng tôi',
 aboutP1:'Chúng tôi là nhà cung cấp dịch vụ viễn thông và hạ tầng IT cho doanh nghiệp tại Việt Nam. Chúng tôi thiết kế, triển khai và vận hành mạng kết nối văn phòng, data center và nền tảng cloud.',
 aboutP2:'Cách làm của chúng tôi đơn giản: hiểu rõ điểm kết nối và lưu lượng, đề xuất mô hình phù hợp, bàn giao đúng hạn và chịu trách nhiệm sau khi vận hành.',
 contactT:'Liên hệ', contactP:'Cho chúng tôi biết về dự án của bạn hoặc liên hệ trực tiếp với đội ngũ.',
 addr:'Địa chỉ', addrV:'VPĐD: 314/6 Điện Biên Phủ, Phường Vườn Lài, TP.HCM.<br>Trụ sở chính (GPKD): 347/64/5 Lê Văn Thọ, Phường Thông Tây Hội, TP.HCM.',
 hrs:'Hỗ trợ', hrsV:'NOC 24/7, kinh doanh T2-T6 8:00-17:30',
 clientsT:'Khách hàng tiêu biểu', clientsP:'Một số tổ chức đang vận hành mạng và hạ tầng cùng chúng tôi.',
 foot:'Bảo lưu mọi quyền.',
 qT:'Nhận báo giá', qP:'Cho chúng tôi biết nhu cầu của bạn. Chúng tôi phản hồi trong vòng một ngày làm việc.',
 f:{name:'Họ và tên',company:'Công ty',email:'Email công việc',phone:'Số điện thoại',svc:'Dịch vụ cần báo giá',loc:'Địa điểm lắp đặt',det:'Yêu cầu (băng thông, số lượng, thời gian)',send:'Gửi yêu cầu',sending:'Đang gửi...',ok:'Đã gửi yêu cầu. Vui lòng kiểm tra email để xem xác nhận.',err:'Không gửi được. Hãy kiểm tra các trường bắt buộc và thử lại.'},
 opt:{'ILL':'ILL','MetroWAN':'MetroWAN','OfficeWAN':'OfficeWAN','Dark fiber':'Cáp trắng','MPLS':'MPLS','IT support':'IT support','Equipment leasing':'Thuê thiết bị','IDC rack':'Rack IDC'}
}};

const WHY_ICON = [
 '<svg class="why-ic" viewBox="0 0 48 48"><path d="M24 6l16 6v10c0 10-7 17-16 20C15 39 8 32 8 22V12z"/><path d="M17 24l5 5 10-11"/></svg>',
 '<svg class="why-ic" viewBox="0 0 48 48"><circle cx="24" cy="24" r="17"/><path d="M24 14v10l8 5"/></svg>',
 '<svg class="why-ic" viewBox="0 0 48 48"><circle cx="24" cy="17" r="7"/><path d="M10 40c0-8 6-13 14-13s14 5 14 13"/></svg>'
];
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let lang = (() => { try { return localStorage.getItem('lang') === 'vi' ? 'vi' : 'en'; } catch { return 'en'; } })();

function chrome() {
  $('#hdr').innerHTML = `<header><div class="wrap"><a class="logo" href="index.html"><img id="logoImg" src="logo.png" alt="" height="40"><span>NIS INTEGRATION SOLUTIONS</span></a>
    <nav id="nav"><a href="index.html" data-n="0"></a><a href="about.html" data-n="1"></a><a href="services.html" data-n="2"></a><a href="index.html#contact" data-n="3"></a>
    <a class="btn" href="quote.html" data-n="4"></a></nav>
    <button class="lang" id="lang" aria-label="Language">EN | VI</button>
    <button class="menu" id="menu" aria-label="Menu">&#9776;</button></div></header>`;
  $('#ftr').innerHTML = `<footer><div class="wrap"><span>&copy; ${new Date().getFullYear()} NIS INTEGRATION SOLUTIONS. <span data-k="foot"></span></span>
    <span>support@nis-solutions.com | +84 973 232 812</span></div></footer>`;
  $('#lang').onclick = () => { lang = lang === 'en' ? 'vi' : 'en'; try { localStorage.setItem('lang', lang); } catch {} render(); };
  $('#menu').onclick = () => $('#nav').classList.toggle('open');
  // Home page: header blends into the hero at the top, turns solid once scrolled
  const hd = $('header'), logo = $('#logoImg'), dark = matchMedia('(prefers-color-scheme: dark)');
  const isHome = !!$('.hero');
  if (isHome) hd.classList.add('overlay');
  // light logo on dark backgrounds (hero top / dark mode), colour logo on white header
  const upd = () => {
    const top = isHome && scrollY < 8;
    hd.classList.toggle('top', top);
    logo.src = (top || dark.matches) ? 'logo-light.png' : 'logo.png';
  };
  new Image().src = 'logo-light.png';
  upd(); addEventListener('scroll', upd, { passive: true });
}

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  $$('[data-n]').forEach(e => e.textContent = t.nav[e.dataset.n]);
  $$('[data-k]').forEach(e => e.textContent = t[e.dataset.k] ?? '');
  $$('[data-kh]').forEach(e => e.innerHTML = t[e.dataset.kh] ?? '');
  $$('[data-f]').forEach(e => e.textContent = t.f[e.dataset.f]);
  $$('[data-w]').forEach(e => e.textContent = t.why[e.dataset.w][e.dataset.p]);
  $$('[data-wi]').forEach(e => e.innerHTML = WHY_ICON[e.dataset.wi]);
  $('#lang').innerHTML = lang === 'en' ? '<b>EN</b> | VI' : 'EN | <b>VI</b>';
  services();
  const c = $('#opts');
  if (c) {
    const pre = new URLSearchParams(location.search).get('svc');
    const on = (!c.children.length && pre) ? [pre] : $$('#opts input:checked').map(i => i.value);
    c.innerHTML = OPTS.map(o => `<label><input type="checkbox" name="services" value="${o}" ${on.includes(o) ? 'checked' : ''}> ${t.opt[o]}</label>`).join('');
  }
}

/* ---------- Services: category buttons + service lists + detail page ---------- */
function services() {
  if (typeof SV_T === 'undefined') return;
  const u = SV_T[lang];
  $$('[data-u]').forEach(e => e.textContent = u.ui[e.dataset.u]);

  const catBox = $('#catButtons');
  const hasList = !!$('#svcList');
  if (catBox) {
    const inner = c => `<span class="cat-ic">${CAT_ICON[c]}</span><span class="cat-name">${u.cat[c]}</span><span class="cat-desc">${u.catd[c]}</span>`;
    catBox.innerHTML = hasList
      ? CATS.map(c => `<button type="button" class="cat-btn" data-cat="${c}">${inner(c)}</button>`).join('')
      : CATS.map(c => `<a class="cat-btn" href="services.html?cat=${c}">${inner(c)}</a>`).join('');
    if (hasList) {
      catBox.onclick = e => {
        const b = e.target.closest('.cat-btn'); if (!b) return;
        $$('.cat-btn').forEach(x => x.classList.toggle('active', x === b));
        openCategory(b.dataset.cat);
      };
      const pre = new URLSearchParams(location.search).get('cat');
      if (pre && CATS.includes(pre)) {
        const b = catBox.querySelector(`[data-cat="${pre}"]`);
        if (b) b.classList.add('active');
        openCategory(pre);
      }
    }
  }

  const D = $('#svcDetail');
  if (D) {
    const q = new URLSearchParams(location.search).get('s'), id = SV.includes(q) ? q : SV[0], x = u[id];
    document.title = x.n + ' - NIS INTEGRATION SOLUTIONS';
    D.innerHTML = `<a href="services.html">&larr; ${u.ui.all}</a><div class="two" style="margin-top:20px"><div class="art">${img(id)}</div>
      <div><h2>${x.n}</h2><p>${x.d}</p><h3 style="margin:18px 0 8px">${u.ui.feat}</h3><ul style="padding-left:18px;margin-bottom:24px">${x.f.map(f => `<li>${f}</li>`).join('')}</ul>
      <a class="btn" href="quote.html?svc=${encodeURIComponent(SV_OPT[id])}">${u.ui.quote}</a></div></div>`;
  }

  function openCategory(cat) {
    const list = $('#svcList'); if (!list) return;
    list.innerHTML = CAT_SVC[cat].map(id => `<a class="card sv" href="service.html?s=${id}"><div class="art">${img(id)}</div><h3>${u[id].n}</h3><p>${u[id].s}</p><span class="more">${u.ui.more}</span></a>`).join('');
    list.hidden = false;
    const hint = $('#catHint'); if (hint) hint.hidden = true;
    list.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ---------- Clients carousel ---------- */
/* Pixel-based (not %) so gaps never cause a logo to be clipped. Three copies of
   the list are rendered and we start in the middle copy, so stepping left or
   right always has real items on both sides - no visible jump when it wraps. */
function clientsCarousel() {
  const vp = $('#clientsTrack'); if (!vp || typeof CLIENTS === 'undefined') return;
  const track = vp;
  const N = CLIENTS.length;
  track.innerHTML = CLIENTS.concat(CLIENTS, CLIENTS).map(c => `<a class="cl" href="${c.url}" target="_blank" rel="noopener noreferrer" title="${c.name}"><img src="clients/${c.id}.png" alt="${c.name}" loading="lazy"></a>`).join('');
  const items = () => [...track.children];
  let idx = N, timer;

  const step1 = () => {
    const el = items()[0], gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);
    return el.getBoundingClientRect().width + gap;
  };
  const apply = anim => {
    track.style.transition = anim ? 'transform .6s ease' : 'none';
    track.style.transform = `translateX(-${idx * step1()}px)`;
  };
  const settle = () => {
    if (idx >= N * 2) idx -= N;
    else if (idx < N) idx += N;
    else return;
    apply(false);
  };
  const go = dir => {
    idx += dir; apply(true);
    track.addEventListener('transitionend', function once() {
      track.removeEventListener('transitionend', once);
      settle();
    }, { once: true });
  };
  const start = () => { stop(); timer = setInterval(() => go(1), 5000); };
  const stop = () => clearInterval(timer);

  apply(false); start();
  const wrap = vp.parentElement;
  wrap.addEventListener('mouseenter', stop);
  wrap.addEventListener('mouseleave', start);
  $('#clientsPrev')?.addEventListener('click', () => { go(-1); start(); });
  $('#clientsNext')?.addEventListener('click', () => { go(1); start(); });
  addEventListener('resize', () => apply(false));
}

/* ---------- About gallery (arrows + dots, manual only) ---------- */
function aboutGallery() {
  const track = $('#aboutTrack'); if (!track) return;
  const N = 5;
  track.innerHTML = Array.from({ length: N }, (_, i) =>
    `<div class="ag-slide"><img src="aboutimg/${i + 1}.png" alt=""></div>`).join('');
  const dotsBox = $('#aboutDots');
  dotsBox.innerHTML = Array.from({ length: N }, (_, i) =>
    `<button type="button" class="ag-dot${i === 0 ? ' active' : ''}" aria-label="${i + 1}"></button>`).join('');
  let idx = 0;
  const go = n => {
    idx = (n + N) % N;
    track.style.transform = `translateX(-${idx * 100}%)`;
    $$('.ag-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  };
  $('#aboutPrev').onclick = () => go(idx - 1);
  $('#aboutNext').onclick = () => go(idx + 1);
  $$('.ag-dot').forEach((d, i) => d.onclick = () => go(i));
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
chrome(); render(); clientsCarousel(); aboutGallery(); quoteForm();
