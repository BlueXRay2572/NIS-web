const SV=['ill','metrowan','officewan','dark','mpls','it','lease','idc'];
const SV_OPT={ill:'ILL',metrowan:'MetroWAN',officewan:'OfficeWAN',dark:'Dark fiber',mpls:'MPLS',it:'IT support',lease:'Equipment leasing',idc:'IDC rack'};
const CATS=['conn','colo','it'];
const CAT_SVC={conn:['ill','metrowan','officewan','dark','mpls'],colo:['idc','lease'],it:['it']};
const CAT_ICON={
 conn:'<svg viewBox="0 0 48 48"><circle cx="10" cy="24" r="6"/><circle cx="38" cy="24" r="6"/><path d="M16 24H32" stroke-width="3"/></svg>',
 colo:'<svg viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="9" rx="2"/><rect x="10" y="20" width="28" height="9" rx="2"/><rect x="10" y="32" width="28" height="9" rx="2"/></svg>',
 it:'<svg viewBox="0 0 48 48"><rect x="8" y="10" width="32" height="20" rx="3"/><path d="M18 38H30M24 30V38" stroke-width="3"/><path d="M16 20l5 5 11-10" stroke-width="3" fill="none"/></svg>'
};
const img=id=>`<img src="serviceimg/${id}.png" alt="">`;
const SV_T={
en:{ui:{t:'Featured services',p:'Connectivity, colocation and IT support, delivered and operated by one team.',more:'Learn more',all:'All services',feat:'Key features',quote:'Request a quote for this service',pick:'Choose a service line to see what is included.',back:'All service lines'},
 cat:{conn:'Connectivity',colo:'Colocation',it:'IT Support'},
 catd:{conn:'ILL, MetroWAN, OfficeWAN, dark fiber and MPLS links.',colo:'Rack space and equipment leasing in a certified data center.',it:'Helpdesk, maintenance and monitoring for your team.'},
 ill:{n:'ILL (Internet Leased Line)',s:'Dedicated internet with committed bandwidth.',d:'An ILL gives your business a private path to the internet with symmetric bandwidth and an SLA-backed uptime. It suits sites running cloud apps, VoIP or public-facing services.',f:['Symmetric, scalable bandwidth','Static public IP blocks','SLA for availability and repair time','24/7 NOC monitoring']},
 metrowan:{n:'MetroWAN',s:'High-speed links between sites within a city.',d:'MetroWAN connects offices, branches and data centers inside a metropolitan area over a private Layer 2 network, with low latency and predictable performance.',f:['Point-to-point or multipoint topology','Low latency, private transport','Scalable bandwidth','Redundant path options']},
 officewan:{n:'OfficeWAN',s:'One private network for all your offices.',d:'OfficeWAN links head office and branches into a single secure network, so teams share files, ERP and voice as if they were in the same building.',f:['Multi-site private connectivity','Centralized internet breakout options','Managed CPE and routing','Fast onboarding of new branches']},
 dark:{n:'Dark fiber',s:'Raw fiber capacity that you light and control.',d:'Dark fiber gives you exclusive fiber strands between two points. You choose the equipment and capacity, ideal for data center interconnect and long-term, high-volume traffic.',f:['Exclusive fiber pair','Full control of equipment and speed','Suited to DCI and campus links','Long-term, cost-efficient capacity']},
 mpls:{n:'MPLS VPN',s:'Private, prioritized traffic across many sites.',d:'MPLS VPN carries your traffic on a private backbone with traffic classes, so voice, video and business apps stay responsive across every branch.',f:['Any-to-any site connectivity','QoS for voice, video and critical apps','Isolated from the public internet','Backup over secondary links']},
 it:{n:'IT support',s:'Helpdesk and on-site help for your team.',d:'Our engineers maintain your networks, servers and end-user devices, and respond fast when something breaks, so your staff can keep working.',f:['Helpdesk and on-site visits','Network and server maintenance','Monitoring and incident response','Security and backup setup']},
 lease:{n:'Equipment leasing',s:'Network gear without the upfront cost.',d:'Lease routers, switches, firewalls and other equipment on a monthly plan. We handle delivery, configuration and replacement so you avoid capital expense.',f:['Router, switch and firewall options','Configuration and installation','Replacement on failure','Flexible lease terms']},
 idc:{n:'Colocation (IDC rack)',s:'Rack space in a professional data center.',d:'Host your servers and network gear in a secure data center with redundant power and cooling, and connect directly to our network.',f:['Rack and cabinet space','Redundant power and cooling','Cross-connect and remote hands','Physical access control']}},
vi:{ui:{t:'Dịch vụ nổi bật của chúng tôi',p:'Kênh truyền, colocation và IT support, do một đội ngũ triển khai và vận hành.',more:'Xem chi tiết',all:'Tất cả dịch vụ',feat:'Tính năng chính',quote:'Yêu cầu báo giá dịch vụ này',pick:'Chọn một nhóm dịch vụ để xem chi tiết.',back:'Tất cả nhóm dịch vụ'},
 cat:{conn:'Dịch vụ kênh truyền',colo:'Colocation',it:'IT Support'},
 catd:{conn:'ILL, MetroWAN, OfficeWAN, cáp trắng và MPLS.',colo:'Rack đặt máy chủ và thuê thiết bị tại data center đạt chuẩn.',it:'Helpdesk, bảo trì và giám sát cho đội ngũ của bạn.'},
 ill:{n:'ILL (Internet leased line)',s:'Internet trực tiếp với băng thông cam kết.',d:'ILL mang đến đường truyền internet riêng với băng thông đối xứng và uptime cam kết SLA. Phù hợp cho điểm chạy ứng dụng cloud, VoIP hoặc dịch vụ công khai.',f:['Băng thông đối xứng, dễ nâng cấp','Dải IP public tĩnh','SLA về độ khả dụng và thời gian khắc phục','Giám sát NOC 24/7']},
 metrowan:{n:'MetroWAN',s:'Kết nối tốc độ cao giữa các điểm trong cùng thành phố.',d:'MetroWAN nối văn phòng, chi nhánh và data center trong nội đô qua mạng Layer 2 riêng, độ trễ thấp và hiệu năng ổn định.',f:['Mô hình điểm-điểm hoặc đa điểm','Độ trễ thấp, truyền tải riêng','Băng thông dễ nâng cấp','Tùy chọn đường dự phòng']},
 officewan:{n:'OfficeWAN',s:'Một mạng riêng cho toàn bộ văn phòng.',d:'OfficeWAN nối trụ sở và chi nhánh thành một mạng an toàn duy nhất, giúp các đội chia sẻ file, ERP và thoại như đang ở cùng một tòa nhà.',f:['Kết nối riêng đa điểm','Tùy chọn ra internet tập trung','CPE và định tuyến do chúng tôi quản lý','Mở chi nhánh mới nhanh chóng']},
 dark:{n:'Cáp trắng (dark fiber)',s:'Sợi quang thô để bạn tự vận hành.',d:'Cáp trắng cho bạn sợi quang riêng giữa hai điểm. Bạn chọn thiết bị và dung lượng, phù hợp kết nối data center và lưu lượng lớn dài hạn.',f:['Cặp sợi quang độc quyền','Toàn quyền chọn thiết bị và tốc độ','Phù hợp DCI và kết nối campus','Dung lượng dài hạn, chi phí tối ưu']},
 mpls:{n:'MPLS VPN',s:'Lưu lượng riêng, có ưu tiên, giữa nhiều điểm.',d:'MPLS VPN truyền dữ liệu trên backbone riêng với các lớp ưu tiên, giúp thoại, video và ứng dụng nghiệp vụ mượt mà ở mọi chi nhánh.',f:['Kết nối any-to-any giữa các điểm','QoS cho thoại, video, ứng dụng quan trọng','Tách biệt khỏi internet công cộng','Dự phòng qua đường phụ']},
 it:{n:'IT support',s:'Helpdesk và hỗ trợ tận nơi cho đội ngũ của bạn.',d:'Kỹ sư của chúng tôi bảo trì mạng, máy chủ, thiết bị người dùng và xử lý nhanh khi có sự cố để nhân viên không bị gián đoạn.',f:['Helpdesk và hỗ trợ tại chỗ','Bảo trì mạng và máy chủ','Giám sát và xử lý sự cố','Thiết lập bảo mật và backup']},
 lease:{n:'Thuê thiết bị',s:'Thiết bị mạng không cần vốn đầu tư ban đầu.',d:'Thuê router, switch, firewall và thiết bị khác theo gói hàng tháng. Chúng tôi lo giao hàng, cấu hình và thay thế, bạn không cần chi phí đầu tư.',f:['Router, switch, firewall các loại','Cấu hình và lắp đặt','Thay thế khi hỏng','Thời hạn thuê linh hoạt']},
 idc:{n:'Colocation (rack IDC)',s:'Chỗ đặt rack trong data center chuyên nghiệp.',d:'Đặt máy chủ và thiết bị mạng tại data center an toàn, có điện và làm mát dự phòng, kết nối trực tiếp vào mạng của chúng tôi.',f:['Rack và tủ đặt thiết bị','Điện và làm mát dự phòng','Cross-connect và remote hands','Kiểm soát ra vào vật lý']}}
};

const CLIENTS=[
 {id:'zenlayer',name:'Zenlayer',url:'https://www.zenlayer.com'},
 {id:'vng',name:'VNG',url:'https://www.vng.com.vn'},
 {id:'vntt',name:'VNTT',url:'https://www.vntt.com.vn'},
 {id:'shopee',name:'Shopee',url:'https://shopee.vn'},
 {id:'ttc',name:'TTC',url:'https://www.google.com/search?q=TTC+K%E1%BA%BFt+n%E1%BB%91i+th%C3%A0nh+c%C3%B4ng'},
 {id:'onecloud',name:'One Cloud Solutions',url:'https://www.google.com/search?q=One+Cloud+Solutions+Vietnam'},
 {id:'viettel-idc',name:'Viettel IDC',url:'https://viettelidc.com.vn'},
 {id:'sctv',name:'SCTV',url:'https://www.sctv.com.vn'},
 {id:'gtel',name:'Gtel ICT',url:'https://www.google.com/search?q=Gtel+ICT'},
 {id:'cmc',name:'CMC Telecom',url:'https://cmctelecom.vn'},
 {id:'kaopu',name:'Kaopu Cloud',url:'https://www.google.com/search?q=Kaopu+Cloud'},
 {id:'viettel',name:'Viettel',url:'https://viettel.com.vn'}
];
