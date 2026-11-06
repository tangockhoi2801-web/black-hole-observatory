# CHEM12 LAB

CHEM12 LAB là ứng dụng web học tập Hóa học lớp 12 bằng tiếng Việt, triển khai theo dạng website tĩnh để chạy trên GitHub Pages.

## Mở website

https://tangockhoi2801-web.github.io/black-hole-observatory/chem12-lab/

## Chạy trên máy

Không cần cài Node.js hoặc cơ sở dữ liệu.

1. Tải repo về máy hoặc tải riêng thư mục chem12-lab.
2. Mở index.html bằng trình duyệt hiện đại. Khuyến nghị dùng máy chủ tĩnh như VS Code Live Server để tránh hạn chế của một số trình duyệt.
3. Dữ liệu tiến độ, sổ lỗi sai, dấu trang và giao diện được lưu trong localStorage của trình duyệt hiện tại.

## Tính năng trong bản hiện tại

- Giao diện tiếng Việt, bố cục thích ứng cho desktop và điện thoại, chế độ sáng/tối.
- Hệ thống bài học theo 9 nhóm chủ đề, có lý thuyết, phương trình tiêu biểu, ứng dụng và lỗi thường gặp.
- Luyện tập trộn câu hỏi trắc nghiệm, đúng/sai và trả lời ngắn; lọc theo chủ đề và mức độ; tránh lặp trong cùng phiên; có chế độ phản hồi ngay hoặc chấm cuối phiên.
- Bộ cân bằng phương trình cho công thức phân tử trung hòa có ký hiệu nguyên tố và ngoặc đơn; dùng khử Gauss để tìm hệ số nguyên tối giản.
- Dự đoán phản ứng dựa trên danh mục phản ứng mẫu được khai báo rõ, không tự nhận biết mọi phản ứng có thể xảy ra.
- Mô phỏng sơ đồ minh họa và thí nghiệm ảo có điều khiển; các mô hình được gắn nhãn sơ đồ, không khẳng định là mô phỏng động học phân tử.
- Bảng tuần hoàn rút gọn các nguyên tố thường gặp, tra cứu tính tan mẫu, thư viện công thức.
- Lưu lịch sử, thống kê, câu hỏi đánh dấu và sổ lỗi sai trên thiết bị.

## Giới hạn cần biết

Đây là bản MVP học tập chạy hoàn toàn phía trình duyệt, chưa có tài khoản, đồng bộ nhiều thiết bị, PostgreSQL, API AI hay quản trị nội dung. Bộ dữ liệu câu hỏi và phản ứng là tập mẫu có chọn lọc, không phải ngân hàng câu hỏi bao phủ toàn bộ mọi dạng đề. Phần dự đoán phản ứng chỉ kết luận cho các trường hợp đã được khai báo; ngoài danh mục sẽ báo chưa đủ dữ liệu thay vì đoán.

Các nhóm chủ đề được tổ chức theo yêu cầu sản phẩm. Phạm vi môn học, thuật ngữ, mức độ và phần chuyên đề tự chọn cần tiếp tục được giáo viên đối chiếu với chương trình hiện hành và bộ sách nhà trường sử dụng. Không dùng mô phỏng như hướng dẫn tự tiến hành thí nghiệm hóa chất ngoài phòng học có giám sát.

## Cấu trúc

- index.html: khung giao diện và nạp tài nguyên.
- styles.css: hệ thống giao diện.
- app.js: dữ liệu học tập, bộ máy luyện tập, cân bằng phương trình, tra cứu và lưu tiến độ.

## Kiểm thử thủ công

- Mở từng mục trên thanh điều hướng.
- Tạo phiên luyện tập với từng loại câu hỏi; thử nộp đáp án đúng và sai.
- Tạo phiên ở chế độ kiểm tra và để đồng hồ chạy.
- Cân bằng Fe + O2 -> Fe2O3, H2 + O2 -> H2O, Al + HCl -> AlCl3 + H2.
- Thử công thức có ngoặc như Ca(OH)2 + HCl -> CaCl2 + H2O.
- Chọn phản ứng mẫu trong công cụ phản ứng; thử một cặp chưa có trong dữ liệu để xem thông báo giới hạn.
- Làm sai một câu, kiểm tra sổ lỗi sai; tải lại trang để xác nhận dữ liệu còn lưu.
