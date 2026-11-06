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
- Trang “Câu đã làm” lưu từng câu đã được chấm (đúng hoặc sai), lựa chọn của người học, đáp án chuẩn và giải thích; có bộ lọc đúng/sai và chức năng luyện lại từng câu.

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
- Làm sai một câu, kiểm tra Sổ lỗi sai và Câu đã làm; tải lại trang để xác nhận dữ liệu còn lưu.
- Với từng chương, chọn đủ ba dạng câu hỏi và 25 câu; xác nhận đề có đúng 25 câu thuộc chương đã chọn.

## Ngân hàng câu hỏi mở rộng

Phiên bản cập nhật có 225 câu hỏi mẫu, được chia thành 9 mảng nội dung hiện có, mỗi mảng có 25 câu:
- Điện hóa học.
- Đại cương về kim loại.
- Kim loại nhóm IA.
- Kim loại nhóm IIA.
- Kim loại chuyển tiếp và phức chất.
- Ester và lipid.
- Carbohydrate.
- Hợp chất hữu cơ chứa nitrogen.
- Polymer.

Câu hỏi được biên soạn mới theo các dạng trắc nghiệm nhiều lựa chọn, đúng/sai và trả lời ngắn. Câu trắc nghiệm có giải thích cho đáp án đúng và từng phương án nhiễu; câu đúng/sai có giải thích từng mệnh đề; câu tính toán có các bước giải khi cần.

Khi chọn một chương, bộ tạo đề chỉ lấy câu hỏi của chương đó. Nếu người học lọc riêng một dạng câu hỏi hoặc một mức độ mà số câu phù hợp chưa đủ, website sẽ báo số câu thực tế và không lấy câu từ chương khác để bù.

## Nguồn học liệu tham khảo và đối chiếu

Các nguồn sau được dùng để đối chiếu cấu trúc chủ đề và kiến thức nền. Câu hỏi trong CHEM12 LAB được diễn đạt và biên soạn lại, không sao chép nguyên văn đề bài từ các trang này.

- [Thư viện số OLM – SGK Hóa học 12](https://school.olm.vn/index.php/thu-vien-so/doc-sach/sach.4492861288.4492861288): mục lục và tên bài theo chương.
- [OLM – Khóa học Hóa học 12](https://olm.vn/bg/hoa-hoc-12/): cấu trúc bài học và luyện tập theo CTGDPT 2018.
- [VietJack – Lý thuyết Hóa học 12 Kết nối tri thức](https://vietjack.com/hoa-hoc-12-kn/ly-thuyet-hoa-hoc-lop-12.jsp): đối chiếu các chủ đề và phạm vi từng bài.
- [OpenStax Chemistry 2e – Electrochemistry](https://openstax.org/books/chemistry-2e/pages/17-introduction): khái niệm oxi hóa – khử, pin galvanic, thế điện cực, ăn mòn và điện phân.
- [OpenStax Chemistry 2e – Organic Chemistry](https://openstax.org/books/chemistry-2e/pages/20-introduction): nhóm chức hữu cơ, ester, amine và amide.

Các nguồn tham khảo không thay thế việc giáo viên rà soát đáp án, thuật ngữ, phạm vi kiến thức và mức độ phù hợp với sách giáo khoa nhà trường đang sử dụng.


## Bộ đề kiểm tra giữa kì I theo ma trận 2026–2027

Mục **Đề thi theo ma trận** được xây dựng từ tệp ma trận/đặc tả do người học cung cấp. Có 3 mã đề, mỗi đề giữ cùng cấu trúc:
- 16 câu nhiều lựa chọn (4,00 điểm): 12 câu nhận biết, 4 câu thông hiểu.
- 3 câu đúng/sai, mỗi câu 4 mệnh đề (12 mệnh đề, 3,00 điểm): 4 ý nhận biết, 8 ý thông hiểu.
- 4 câu trả lời ngắn (2,00 điểm), đều ở mức vận dụng.
- 1 câu tự luận (1,00 điểm), ở mức vận dụng.

Tổng phân bố điểm theo cấp độ tư duy: nhận biết 4,00 điểm; thông hiểu 3,00 điểm; vận dụng 3,00 điểm. Tổng điểm mỗi đề là 10,00.

Phạm vi: Ester – lipid; Carbohydrate; Hợp chất chứa nitrogen; phần tổng hợp kiến thức của ba chủ đề. Các nội dung không nằm trong ma trận giữa kì I này như polymer, điện hóa và đại cương kim loại không được đưa vào các mã đề.

**Cách chấm:** Phần I và II được chấm tự động theo 0,25 điểm/câu hoặc mệnh đề. Phần III và IV hiển thị đáp án tham khảo, các bước giải và barem để người học tự đối chiếu. Tài liệu ma trận không cung cấp barem chi tiết hơn cho các câu tự luận ngắn và câu tự luận, vì vậy phần tự chấm được đánh dấu rõ là tự đánh giá, không phải điểm chấm chính thức.

Các đề và lời giải là nội dung biên soạn mới theo yêu cầu cần đạt của bản đặc tả, không phải đề thi chính thức của nhà trường.
