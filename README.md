# NIS INTEGRATION SOLUTIONS

Yêu cầu: Node.js 18+.

    npm install
    cp .env.example .env    # điền SMTP_*, SALES_TO
    npm start               # http://localhost:3000

- Frontend: `public/` (index.html, quote.html, app.js chứa toàn bộ nội dung EN/VI, style.css)
- Backend: `server.js` (Express, POST /api/quote)
- Database: SQLite file `data.db`, bảng `quotes` (tự tạo khi chạy). Xem dữ liệu: `sqlite3 data.db "select * from quotes"`
- Mail: gửi 1 mail cho sales (`SALES_TO`) + 1 mail xác nhận cho khách theo ngôn ngữ đang chọn. Nếu SMTP lỗi, yêu cầu vẫn được lưu với `email_status='failed'`.
- Thông tin dịch vụ (EN/VI) nằm trong `public/services-data.js`; `about.html` đang để trống theo yêu cầu.


## Cập nhật lần này
- Logo khách hàng: `public/clients/*.png`. Muốn đổi/thêm khách hàng, sửa mảng `CLIENTS` trong `public/services-data.js` (id phải khớp tên file ảnh) và thêm file ảnh tương ứng.
- Một số khách hàng (TTC, One Cloud Solutions, Gtel ICT, Kaopu Cloud) tạm thời trỏ sang link tìm kiếm Google vì chưa xác nhận được website chính thức — nên thay bằng URL thật trong `CLIENTS`.
- Ảnh dịch vụ: `public/serviceimg/*.png` hiện là placeholder (khung nét đứt). Thay bằng ảnh thật cùng tên file để cập nhật ngay, không cần sửa code.
- Nhóm dịch vụ (Connectivity / Colocation / IT Support) và nội dung từng dịch vụ: sửa trong `public/services-data.js` (`CAT_SVC`, `SV_T`).
- Màu thương hiệu: khai báo ở đầu `public/style.css` trong khối `:root` (biến `--ink`, `--signal`, `--amber`).

## Bản đồ ở section đầu
- SVG bản đồ nằm trực tiếp trong `public/index.html` (thẻ `<svg class="map">`), được sinh từ dữ liệu Natural Earth (world-atlas). Hoàng Sa, Trường Sa là các cụm đảo vẽ theo toạ độ thực tế.
- Ấn Độ và Tokyo là hai khung tròn (inset) vẽ phóng to, không đúng tỉ lệ so với bản đồ chính.
- Nhãn song ngữ nằm trong `public/app.js` (các khoá `cHN`, `cDN`, `mapHS`, `mapTS`, `mapSea`...). Màu và hiệu ứng ở `public/style.css` (khối `.map`).

## Tin tức, footer, chi tiết dịch vụ
- Tin tức: sửa trong `public/news-data.js` (10 tin, tóm tắt tự viết, kèm link nguồn). 6 tin đầu hiện ở trang chủ (3 tin/trang), cả 10 tin ở `news.html`.
- Chi tiết dịch vụ: nội dung "là gì / so sánh" trong `public/service-content.js`; lợi ích lấy từ `public/services-data.js`.
- Ảnh dịch vụ: `public/serviceimg/*.png` (ảnh minh hoạ tạo sẵn, có thể thay bằng ảnh thật cùng tên).
- Footer: link mạng xã hội sửa ở hằng `SOCIAL` đầu `public/app.js`. Email đăng ký lưu ở bảng `subscribers` (SQLite).
- Nền động: `public/bg.js` (canvas) và các lớp `.bg-*` trong `public/style.css`.
