# CHEM12 EXAM BANK

Website luyện thi Hóa học 12 theo ma trận và bản đặc tả đề kiểm tra giữa học kì I năm học 2026–2027.

## Mở website
https://tangockhoi2801-web.github.io/black-hole-observatory/chem12-exam-bank/

## Phạm vi
Ngân hàng đề dành riêng cho phạm vi giữa học kì I theo tài liệu ma trận/đặc tả. Không tuyên bố bao phủ toàn bộ chương trình Hóa học 12.

## Nội dung khởi tạo
- 5 bộ đề hoàn chỉnh.
- Mỗi đề: 16 câu nhiều lựa chọn, 3 cụm đúng–sai (12 nhận định), 4 câu trả lời ngắn và 1 câu tự luận.
- Điểm từng phần: 4,0 + 3,0 + 2,0 + 1,0 = 10,0.
- Mức độ: Phần I có 12 Biết / 4 Hiểu; Phần II có 4 Biết / 8 Hiểu; Phần III có 4 Vận dụng; Phần IV có 1 Vận dụng.
- Thư viện đề, phòng thi 50 phút, tự lưu câu trả lời, đánh dấu câu, tự nộp khi hết giờ.
- Luyện theo chủ đề và mức độ; tạo đề ngẫu nhiên theo vị trí ma trận từ ngân hàng.
- Chấm tự động phần I–III, thống kê theo chủ đề và mức độ tư duy.
- Câu IV có đáp án và rubric tự đối chiếu; không tự nhận máy chấm chính xác tự luận.
- Lịch sử làm bài, nhập/xuất JSON, trình chỉnh sửa dữ liệu, kiểm tra câu hỏi trùng và kiểm định cấu trúc.
- Thiết kế responsive, giao diện tối/sáng, không cần backend hoặc API trả phí.

## Lưu ý về biểu điểm
Ma trận nguồn quy định phần II có tổng 3,0 điểm nhưng không nêu chi tiết cách chia điểm cho từng ý đúng–sai. Website tạm cấu hình 0,25 điểm/ý để đủ 3,0 điểm. Đây là cấu hình mặc định của website, không được coi là biểu điểm chính thức nếu chưa đối chiếu giáo viên. Câu tự luận không tự động chấm.

## Chạy trên máy
Tải thư mục này về và mở index.html bằng trình duyệt hiện đại. Dữ liệu tiến độ lưu trong localStorage của trình duyệt hiện tại.

## Cấu trúc
- index.html: khung trang và nạp mã nguồn.
- styles.css: giao diện.
- matrix-exams.js: ba bộ đề gốc theo ma trận.
- extra-exams.js: hai bộ đề bổ sung.
- app.js: thư viện đề, phòng thi, luyện tập, chấm điểm, lịch sử và quản trị.

## Giới hạn kiểm định
Website tự kiểm tra số lượng câu, dạng câu hỏi, mức độ tư duy và mã câu. Kiểm định cấu trúc không thay thế việc giáo viên rà soát chuyên môn từng đáp án, phương trình, cách diễn đạt và độ phù hợp của mức độ vận dụng. Dữ liệu và lịch sử hiện được lưu cục bộ, chưa có tài khoản, backend hoặc đồng bộ giữa nhiều thiết bị.
