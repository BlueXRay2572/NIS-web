const OPTS = ['ILL','MetroWAN','OfficeWAN','Dark fiber','MPLS','IT support','Equipment leasing','IDC rack'];
const T = {
en: {
 nav:['Home','About us','Services','Contact','Contact for consultation'],
 cHN:'Hanoi', cDN:'Da Nang', cHCM:'HCMC', cHK:'Hong Kong', cBKK:'Bangkok', cSG:'Singapore', cIN:'India', cTYO:'Tokyo', mapHS:'Hoang Sa Archipelago', mapTS:'Truong Sa Archipelago', mapSea:'EAST SEA',
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
 nav:['Trang chủ','Về chúng tôi','Dịch vụ','Liên hệ','Liên hệ tư vấn'],
 cHN:'Hà Nội', cDN:'Đà Nẵng', cHCM:'TP.HCM', cHK:'Hong Kong', cBKK:'Bangkok', cSG:'Singapore', cIN:'Ấn Độ', cTYO:'Tokyo', mapHS:'Quần đảo Hoàng Sa', mapTS:'Quần đảo Trường Sa', mapSea:'BIỂN ĐÔNG',
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
 clientsT:'Khách hàng tiêu biểu', clientsP:'',
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
WHY_ICON.push('<svg class="why-ic" viewBox="0 0 48 48"><path d="M8 14h20M36 14h4M8 24h6M22 24h18M8 34h24M40 34h0"/><circle cx="32" cy="14" r="4"/><circle cx="18" cy="24" r="4"/><circle cx="36" cy="34" r="4"/></svg>');
Object.assign(T.en,{heroB2:'See more',
 newsT:'Latest news',newsP:'Fresh updates from the telecom and network industry.',newsAll:'View all news',newsRead:'Read article',
 newsPT:'Telecom & technology news',newsPP:'The 10 most recent stories from the global and Vietnamese telecom industry. Summaries are ours; each card opens the original source.',
 fCo:'NIS INTEGRATION SOLUTIONS',fFollow:'Follow us',fSub:'Subscribe',fEmail:'Your email (required)',fSend:'SEND',fOk:'Thanks for subscribing!',fErr:'Please enter a valid email.',fTel:'Hotline',fLinks:'Quick links',fConn:'Connectivity',fColo:'Colocation & IT',
 dScroll:'Learn more',dWhat:'What is {n}?',dUse:'Typical use cases',dBen:'Benefits of {n}',dCmp:'{n} compared with other options',dWhy:'Why choose NIS?',dWhyP:'One accountable team for your network, from design to 24/7 operation.'});
Object.assign(T.vi,{heroB2:'Xem thêm',
 newsT:'Tin tức mới nhất',newsP:'Cập nhật mới từ ngành viễn thông và hạ tầng mạng.',newsAll:'Xem tất cả tin tức',newsRead:'Đọc bài viết',
 newsPT:'Tin tức viễn thông & công nghệ',newsPP:'10 tin mới nhất của ngành viễn thông thế giới và Việt Nam. Phần tóm tắt do chúng tôi viết; mỗi thẻ dẫn tới nguồn gốc bài viết.',
 fCo:'NIS INTEGRATION SOLUTIONS',fFollow:'Theo dõi',fSub:'Đăng ký',fEmail:'Email của bạn (bắt buộc)',fSend:'GỬI',fOk:'Cảm ơn bạn đã đăng ký!',fErr:'Vui lòng nhập email hợp lệ.',fTel:'Hotline',fLinks:'Liên kết nhanh',fConn:'Dịch vụ kênh truyền',fColo:'Colocation & IT',
 dScroll:'Tìm hiểu thêm',dWhat:'{n} là gì?',dUse:'Trường hợp sử dụng điển hình',dBen:'Lợi ích khi sử dụng {n}',dCmp:'So sánh {n} với các lựa chọn khác',dWhy:'Vì sao chọn NIS?',dWhyP:'Một đội ngũ chịu trách nhiệm cho mạng của bạn, từ thiết kế đến vận hành 24/7.'});
Object.assign(T.en,{cT:'Contact',cSub:'Tell us about your project. Our team replies within one business day.',cInfo:'Contact information',
 cAddr:'Address',cHours:'Opening hours',cHoursV:'Monday – Friday: 8:00 AM – 5:30 PM<br>NOC support: 24/7',cMail:'E-mail',cPhone:'Phone',
 cFormT:'Have a question? Get in touch with us!',cName:'Your name',cEmail:'Your email',cSubject:'Subject',cMsg:'Your message (optional)',cSend:'SUBMIT',cSending:'Sending...',
 cOk:'Thank you! Your message has been sent. Please check your email for a confirmation.',cErr:'Could not send. Please check your name, email and subject, then try again.',cErrSrv:'Sorry, we could not deliver your message right now. Please try again later or call +84 973 232 812.',newsMore:'Read more »',
 cc1T:'CALL US DIRECTLY',cc1D:'Talk to our experts about the best options for your business.',cc2T:'CHAT WITH OUR SALES TEAM',cc2D:'Chat with one of our sales representatives to learn more about our services and solutions.',
 cc3T:'BOOK A MEETING',cc3D:'Schedule a time to speak with one of our sales representatives.',subjPre:'Consultation: ',subjMeet:'Meeting request'});
Object.assign(T.vi,{cT:'Liên hệ',cSub:'Cho chúng tôi biết về dự án của bạn. Đội ngũ sẽ phản hồi trong vòng một ngày làm việc.',cInfo:'Thông tin liên hệ',
 cAddr:'Địa chỉ',cHours:'Thời gian làm việc',cHoursV:'Thứ hai – thứ sáu: 8:00 – 17:30<br>Hỗ trợ NOC: 24/7',cMail:'E-mail',cPhone:'Điện thoại',
 cFormT:'Nếu bạn có bất kỳ câu hỏi nào? Hãy liên lạc với chúng tôi!',cName:'Họ và tên',cEmail:'Email của bạn',cSubject:'Chủ đề',cMsg:'Nội dung (không bắt buộc)',cSend:'GỬI',cSending:'Đang gửi...',
 cOk:'Cảm ơn bạn! Tin nhắn đã được gửi. Vui lòng kiểm tra email để xem xác nhận.',cErr:'Không gửi được. Vui lòng kiểm tra họ tên, email, chủ đề và thử lại.',cErrSrv:'Rất tiếc, hiện chưa gửi được tin nhắn. Vui lòng thử lại sau hoặc gọi +84 973 232 812.',newsMore:'Xem thêm »',
 cc1T:'GỌI TRỰC TIẾP CHO CHÚNG TÔI',cc1D:'Liên hệ ngay với các chuyên gia của chúng tôi để thảo luận về các lựa chọn tốt nhất cho doanh nghiệp của bạn.',cc2T:'TRÒ CHUYỆN VỚI ĐỘI NGŨ KINH DOANH',cc2D:'Trò chuyện với một trong những đại diện kinh doanh của chúng tôi để tìm hiểu thêm về các giải pháp và dịch vụ của NIS.',
 cc3T:'ĐẶT MỘT CUỘC HỌP',cc3D:'Lên lịch thời gian để nói chuyện với một trong những đại diện kinh doanh của chúng tôi.',subjPre:'Tư vấn dịch vụ: ',subjMeet:'Đặt lịch họp'});
Object.assign(T.en,{aBack:'All news',aKey:'Key points',aWhy:'Why it matters for your business',aSrc:'Source',aOrig:'Read the original article',aNote:'This article is an original summary written by NIS based on the source above. All rights to the original reporting belong to its publisher.',aMore:'More news',aCta:'Need help planning your network?',aCtaP:'Our engineers can design the right connectivity for your sites.'});
Object.assign(T.vi,{aBack:'Tất cả tin tức',aKey:'Điểm chính',aWhy:'Ý nghĩa với doanh nghiệp của bạn',aSrc:'Nguồn',aOrig:'Đọc bài gốc',aNote:'Bài viết là bản tóm tắt do NIS viết lại dựa trên nguồn nêu trên. Mọi bản quyền của bài báo gốc thuộc về đơn vị xuất bản.',aMore:'Tin liên quan',aCta:'Cần hỗ trợ thiết kế mạng cho doanh nghiệp?',aCtaP:'Kỹ sư của chúng tôi sẽ tư vấn giải pháp kết nối phù hợp cho các điểm của bạn.'});
const TAGNAME={en:{fiber:'Fiber',ai:'AI',sat:'Satellite',g5:'5G',cloud:'Cloud',voice:'Voice AI'},vi:{fiber:'Cáp quang',ai:'AI',sat:'Vệ tinh',g5:'5G',cloud:'Cloud',voice:'Voice AI'}};
T.en.nav.push('News');T.vi.nav.push('Tin tức');
T.en.why.push(['Tailored design','Topology sized to your sites, traffic and growth plans.']);
T.vi.why.push(['Thiết kế theo nhu cầu','Mô hình mạng phù hợp số điểm, lưu lượng và kế hoạch phát triển.']);
const SOCIAL={facebook:'https://www.facebook.com/',linkedin:'https://www.linkedin.com/',twitter:'https://twitter.com/',email:'mailto:support@nis-solutions.com'}; // TODO: replace with the real company pages
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let lang = (() => { try { return localStorage.getItem('lang') === 'vi' ? 'vi' : 'en'; } catch { return 'en'; } })();

function chrome() {
  $('#hdr').innerHTML = `<header><div class="wrap"><a class="logo" href="index.html"><img id="logoImg" src="logo.png" alt="" height="40"><span>NIS INTEGRATION SOLUTIONS</span></a>
    <nav id="nav"><a href="index.html" data-n="0"></a><a href="services.html" data-n="2"></a><a href="news.html" data-n="5"></a><a href="contact.html" data-n="3"></a></nav>
    <button class="lang" id="lang" aria-label="Language">EN | VI</button>
    <button class="menu" id="menu" aria-label="Menu">&#9776;</button></div></header>`;
  const ic = {
    facebook: '<svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V14h2.8v8z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M6.9 8.9a1.9 1.9 0 110-3.8 1.9 1.9 0 010 3.8zM5.2 10.4h3.4V21H5.2zM10.8 10.4h3.2v1.5c.5-.9 1.6-1.8 3.3-1.8 3.4 0 4 2.2 4 5.1V21h-3.4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-3.4z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24"><path d="M17.8 4h2.9l-6.3 7.2L22 21h-5.8l-4.5-5.9L6.5 21H3.6l6.7-7.7L2.9 4h5.9l4.1 5.4zM16.8 19.3h1.6L8 5.6H6.3z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path d="M3 5h18v14H3z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 6l9 7 9-7" fill="none" stroke="currentColor" stroke-width="2"/></svg>' };
  $('#ftr').innerHTML = `<footer>
    <div class="wrap">
      <div class="f-top">
        <div class="f-grp"><h4 data-k="fFollow"></h4><div class="f-social">${Object.keys(ic).map(k => `<a href="${SOCIAL[k]}" target="_blank" rel="noopener noreferrer" aria-label="${k}">${ic[k]}</a>`).join('')}</div></div>
        <div><div class="f-grp"><h4 data-k="fSub"></h4>
          <form class="f-sub" id="subForm" novalidate><input type="email" id="subEmail" required maxlength="150" autocomplete="email"><button type="submit" data-k="fSend"></button></form></div><div id="fMsg" role="status"></div></div>
      </div>
      <div class="f-main">
        <div class="f-co"><img src="logo-light.png" alt=""><h5 data-k="fCo"></h5>
          <p data-kh="addrV"></p><p><b>Hotline:</b> +84 973 232 812</p><p><b>Email:</b> support@nis-solutions.com</p></div>
        <div><h5 data-k="fConn"></h5><ul id="fConn"></ul></div>
        <div><h5 data-k="fColo"></h5><ul id="fColo"></ul></div>
        <div><h5 data-k="fLinks"></h5><ul><li><a href="index.html" data-n="0"></a></li><li><a href="services.html" data-n="2"></a></li><li><a href="news.html" data-n="5"></a></li><li><a href="contact.html" data-n="3"></a></li></ul></div>
      </div>
    </div>
    <div class="f-bot"><div class="wrap"><span>&copy; ${new Date().getFullYear()} <b>NIS INTEGRATION SOLUTIONS</b>. <span data-k="foot"></span></span><button id="toTop" type="button" aria-label="Top">&#8963;</button></div></div></footer>`;
  $('#toTop').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
  $('#subForm').onsubmit = async e => {
    e.preventDefault();
    const em = $('#subEmail').value.trim(), box = $('#fMsg');
    try {
      const r = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: em, lang }) });
      if (!r.ok) throw 0;
      box.textContent = T[lang].fOk; $('#subEmail').value = '';
    } catch { box.textContent = T[lang].fErr; }
  };
  $('#lang').onclick = () => { lang = lang === 'en' ? 'vi' : 'en'; try { localStorage.setItem('lang', lang); } catch {} render(); };
  $('#menu').onclick = () => $('#nav').classList.toggle('open');
  // Header sits transparent over a dark hero at the top of a page, and turns solid once scrolled
  const hd = $('header'), logo = $('#logoImg'), dark = matchMedia('(prefers-color-scheme: dark)');
  window.hdrUpd = () => {
    const ov = !!$('.hero,.page-hero'), top = ov && scrollY < 8;
    hd.classList.toggle('overlay', ov);
    hd.classList.toggle('top', top);
    logo.src = (top || dark.matches) ? 'logo.png' : 'logo.png';
  };
  new Image().src = 'logo.png';
  addEventListener('scroll', () => window.hdrUpd(), { passive: true });
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
  services(); footerFill(); newsRender(); renderArticle();
  if (typeof initNet === 'function') initNet();
  if (window.hdrUpd) window.hdrUpd();
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

  renderDetail();

  function openCategory(cat) {
    const list = $('#svcList'); if (!list) return;
    list.innerHTML = CAT_SVC[cat].map(id => `<a class="card sv" href="service.html?s=${id}"><div class="art">${img(id)}</div><h3>${u[id].n}</h3><p>${u[id].s}</p><span class="more">${u.ui.more}</span></a>`).join('');
    list.hidden = false;
    const hint = $('#catHint'); if (hint) hint.hidden = true;
    list.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


function footerFill() {
  if (typeof SV_T === 'undefined') return;
  const u = SV_T[lang], li = ids => ids.map(id => `<li><a href="service.html?s=${id}">${u[id].n}</a></li>`).join('');
  $('#fConn') && ($('#fConn').innerHTML = li(CAT_SVC.conn));
  $('#fColo') && ($('#fColo').innerHTML = li(CAT_SVC.colo.concat(CAT_SVC.it)));
}

/* ---------- News ---------- */
const TAGICON = {
  fiber: '<svg viewBox="0 0 24 24"><path d="M3 12h4l3-7 4 14 3-7h4"/></svg>',
  ai: '<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',
  sat: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.5"/><path d="M6 6a8.5 8.5 0 000 12M9 9a4.200 4.200 0 000 6M18 6a8.500 8.500 0 010 12M15 9a4.200 4.200 0 010 6"/></svg>',
  g5: '<svg viewBox="0 0 24 24"><path d="M12 21v-8M8 21l4-8 4 8M5 9a10 10 0 0114 0M8 12a6 6 0 018 0"/></svg>',
  cloud: '<svg viewBox="0 0 24 24"><path d="M7 18a4 4 0 010-8 5 5 0 019.600-1A4.500 4.500 0 0117 18z"/></svg>',
  voice: '<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg>' };
let newsPage = 0;
function newsDate(n) {
  const [y, m, d] = n.d.split('-');
  return lang === 'vi' ? `${d}/${m}/${y}` : new Date(n.d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
function newsCard(n) {
  const c = n[lang];
  return `<a class="nc" href="article.html?id=${n.id}"><div class="nc-thumb"><img src="newsimg/${n.id}.png" alt="" loading="lazy"><span class="nc-tag">${TAGNAME[lang][n.tag]}</span></div>
    <div class="nc-body"><div class="nc-meta"><b>${n.src}</b><span>${newsDate(n)}</span></div><h3>${c.t}</h3><p>${c.s}</p><span class="nc-foot">${T[lang].newsRead} &rarr;</span></div></a>`;
}
function npDate(n) {
  const [y, m, d] = n.d.split('-');
  return lang === 'vi' ? `${+d} Tháng ${+m}, ${y}` : new Date(n.d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function npCard(n) {
  const c = n[lang], href = `article.html?id=${n.id}`;
  return `<article class="np"><a class="np-img" href="${href}"><img src="newsimg/${n.id}.png" alt="" loading="lazy"></a>
    <h3><a href="${href}">${c.t}</a></h3><time>${npDate(n)}</time><p>${c.s}</p><a class="np-more" href="${href}">${T[lang].newsMore}</a></article>`;
}
function newsRender() {
  if (typeof NEWS === 'undefined') return;
  const all = $('#newsAll');
  if (all) all.innerHTML = NEWS.map(npCard).join('');
  const tr = $('#newsTrack'); if (!tr) return;
  const six = NEWS.slice(0, 6);
  tr.innerHTML = [0, 3].map(s => `<div class="nv-page">${six.slice(s, s + 3).map(newsCard).join('')}</div>`).join('');
  $('#newsDots').innerHTML = [0, 1].map(i => `<button type="button" class="ag-dot" aria-label="${i + 1}"></button>`).join('');
  const go = p => {
    newsPage = (p + 2) % 2;
    tr.style.transform = `translateX(-${newsPage * 100}%)`;
    $$('#newsDots .ag-dot').forEach((d, i) => d.classList.toggle('active', i === newsPage));
  };
  $('#newsPrev').onclick = () => go(newsPage - 1);
  $('#newsNext').onclick = () => go(newsPage + 1);
  $$('#newsDots .ag-dot').forEach((d, i) => d.onclick = () => go(i));
  tr.style.transition = 'none'; go(newsPage); requestAnimationFrame(() => tr.style.transition = '');
}

/* ---------- News article page ---------- */
function renderArticle() {
  const D = $('#newsArticle'); if (!D || typeof NEWS === 'undefined') return;
  const q = new URLSearchParams(location.search).get('id'), idx = Math.max(0, NEWS.findIndex(n => n.id === q)), n = NEWS[idx], c = n[lang], t = T[lang];
  const more = [1, 2, 3].map(k => NEWS[(idx + k) % NEWS.length]);
  document.title = c.t + ' - NIS INTEGRATION SOLUTIONS';
  D.innerHTML = `
  <section class="page-hero dark-sec" data-net="dark"><div class="wrap hero-split">
    <div><a class="crumb" href="news.html">&larr; ${t.aBack}</a><br><span class="badge" style="margin-top:16px">${TAGNAME[lang][n.tag]}</span>
      <h1 class="art-h1">${c.t}</h1><p>${c.s}</p><p class="art-meta">${newsDate(n)} &middot; ${t.aSrc}: ${n.src}</p></div>
    <div class="hero-img"><img src="newsimg/${n.id}.png" alt=""></div></div></section>
  <section class="art-sec"><div class="wrap"><article class="art-body">
    ${c.b.map(p => `<p>${p}</p>`).join('')}
    <div class="key-box"><h3>${t.aKey}</h3><ul>${c.k.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div class="why-box"><h3>${t.aWhy}</h3><p>${c.w}</p></div>
    <div class="src-box"><p><b>${t.aSrc}:</b> ${n.src} &middot; ${newsDate(n)}</p><a class="btn alt" href="${n.url}" target="_blank" rel="noopener noreferrer">${t.aOrig} &rarr;</a><small>${t.aNote}</small></div>
  </article></div></section>
  <section class="art-sec art-more"><div class="wrap"><h2 class="np-sub">${t.aMore}</h2><hr class="np-rule"><div class="np-grid">${more.map(npCard).join('')}</div></div></section>
  <section class="art-sec art-cta"><div class="wrap tc"><h2>${t.aCta}</h2><p class="sub tc">${t.aCtaP}</p><p class="tc-row"><a class="btn" href="contact.html">${t.nav[4]}</a></p></div></section>`;
}

/* ---------- Service detail page ---------- */
function renderDetail() {
  const D = $('#svcDetail'); if (!D || typeof SC === 'undefined') return;
  const u = SV_T[lang], t = T[lang], q = new URLSearchParams(location.search).get('s');
  const id = SV.includes(q) ? q : SV[0], x = u[id], c = SC[lang][id], cat = CATS.find(k => CAT_SVC[k].includes(id));
  const r = s => s.replace('{n}', x.n), quote = `contact.html?svc=${encodeURIComponent(SV_OPT[id])}`;
  document.title = x.n + ' - NIS INTEGRATION SOLUTIONS';
  D.innerHTML = `
  <section class="page-hero dark-sec" data-net="dark"><div class="wrap hero-split">
    <div><a class="crumb" href="services.html">&larr; ${u.ui.all}</a><br><span class="badge" style="margin-top:16px">${u.cat[cat]}</span>
      <h1>${x.n}</h1><p>${x.s}</p>
      <div class="btns"><a class="btn" href="${quote}">${u.ui.quote}</a><a class="btn ghost" href="#what">${t.dScroll}</a></div></div>
    <div class="hero-img"><img src="serviceimg/${id}.png" alt="${x.n}"></div></div></section>
  <section id="what" class="bg-circuit"><div class="wrap"><div class="sec-h"><span class="eyebrow">01</span><h2>${r(t.dWhat)}</h2></div>
    <div class="what-grid"><p>${c.what}</p><div class="use-card"><h3>${t.dUse}</h3><ul>${c.use.map(i => `<li>${i}</li>`).join('')}</ul></div></div></div></section>
  <section class="bg-hex"><div class="wrap"><div class="sec-h"><span class="eyebrow">02</span><h2>${r(t.dBen)}</h2></div>
    <div class="ben-grid">${x.f.map((f, i) => `<div class="ben"><i>${i + 1}</i><b>${f}</b></div>`).join('')}</div></div></section>
  <section class="bg-topo"><div class="wrap"><div class="sec-h"><span class="eyebrow">03</span><h2>${r(t.dCmp)}</h2></div>
    <div class="cmp-wrap"><table class="cmp"><thead><tr><th></th>${c.cmp.h.map(h => `<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${c.cmp.r.map(row => `<tr><th>${row[0]}</th>${row.slice(1).map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div></section>
  <section class="dark-sec" data-net="dark"><div class="wrap"><div class="sec-h"><span class="eyebrow" style="color:#7fd3ff">04</span><h2>${t.dWhy}</h2><p class="sub tc">${t.dWhyP}</p></div>
    <div class="why-grid">${t.why.map((w, i) => `<div class="why-card">${WHY_ICON[i]}<b>${w[0]}</b><span>${w[1]}</span></div>`).join('')}</div>
    <p class="tc-row"><a class="btn" href="${quote}">${u.ui.quote}</a></p></div></section>`;
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

function contactForm() {
  const form = $('#contactForm'); if (!form) return;
  const box = $('#cMsgBox'), subj = $('#cSubject');
  const svc = new URLSearchParams(location.search).get('svc');
  if (svc) subj.value = T[lang].subjPre + svc;
  $('#cardMeet')?.addEventListener('click', e => { e.preventDefault(); subj.value = T[lang].subjMeet; form.scrollIntoView({ behavior: 'smooth', block: 'center' }); $('#cName').focus(); });
  form.onsubmit = async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form)); d.lang = lang;
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true; btn.textContent = T[lang].cSending; box.className = 'msg';
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      if (!r.ok) throw r.status;
      box.textContent = T[lang].cOk; box.className = 'msg ok'; form.reset();
    } catch (st) { box.textContent = st === 400 ? T[lang].cErr : T[lang].cErrSrv; box.className = 'msg err'; }
    btn.disabled = false; btn.textContent = T[lang].cSend;
  };
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
chrome(); render(); clientsCarousel(); aboutGallery(); contactForm();
