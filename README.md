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
