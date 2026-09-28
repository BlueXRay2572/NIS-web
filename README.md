# NIS Integration Solutions

Yêu cầu: Node.js 18+.

    npm install
    cp .env.example .env    # điền SMTP_*, SALES_TO
    npm start               # http://localhost:3000

- Frontend: `public/` (index.html, quote.html, app.js chứa toàn bộ nội dung EN/VI, style.css)
- Backend: `server.js` (Express, POST /api/quote)
- Database: SQLite file `data.db`, bảng `quotes` (tự tạo khi chạy). Xem dữ liệu: `sqlite3 data.db "select * from quotes"`
- Mail: gửi 1 mail cho sales (`SALES_TO`) + 1 mail xác nhận cho khách theo ngôn ngữ đang chọn. Nếu SMTP lỗi, yêu cầu vẫn được lưu với `email_status='failed'`.
- Thông tin dịch vụ (EN/VI) nằm trong `public/services-data.js`; `about.html` đang để trống theo yêu cầu.
