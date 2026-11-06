# BÁO CÁO KIỂM ĐỊNH CHEM12 EXAM BANK

**Phạm vi:** Đề kiểm tra giữa học kì I môn Hóa học 12, năm học 2026–2027.  
**Nguồn chuyên môn:** Tài liệu Word “MA TRẬN - ĐẶC TẢ KTGK I HOÁ 12” do người dùng cung cấp.  
**Phiên bản dữ liệu:** 5 bộ đề khởi tạo, lưu trong `matrix-exams.js` và `extra-exams.js`.

## 1. Kết quả kiểm tra cấu trúc

| Hạng mục | Yêu cầu | Kết quả |
|---|---:|---:|
| Bộ đề hoàn chỉnh | Tối thiểu 5 | 5 |
| Trắc nghiệm nhiều lựa chọn | 16 câu/đề | Đạt cả 5 đề |
| Đúng–sai | 3 cụm × 4 ý/đề | Đạt cả 5 đề |
| Trả lời ngắn | 4 câu/đề | Đạt cả 5 đề |
| Tự luận | 1 câu IV.1/đề | Đạt cả 5 đề |
| Lệnh hỏi | 33/đề | 165 trong toàn bộ ngân hàng |
| Tổng điểm | 10,0/đề | Đạt theo cấu hình 0,25 điểm/ý đúng–sai |

## 2. Phân bố mức độ tư duy

- Phần I: 12 câu Biết, 4 câu Hiểu.
- Phần II: 4 ý Biết, 8 ý Hiểu.
- Phần III: 4 câu Vận dụng.
- Phần IV: 1 câu Vận dụng.

Đã đối chiếu mã câu từ I.1–I.16, II.1a–II.3d, III.1–III.4 và IV.1. Câu IV.1 được đặt trong chủ đề amino acid và peptide.

## 3. Đối chiếu tỷ trọng điểm theo chủ đề

| Chủ đề | Tỷ lệ từ ma trận | Điểm/đề |
|---|---:|---:|
| Ester – lipid | 10% | 1,00 |
| Xà phòng và chất giặt rửa | 12,5% | 1,25 |
| Giới thiệu carbohydrate, glucose và fructose | 5% | 0,50 |
| Saccharose và maltose | 10% | 1,00 |
| Tinh bột và cellulose | 5% | 0,50 |
| Amine | 10% | 1,00 |
| Amino acid và peptide | 17,5% | 1,75 |
| Protein và enzyme | 15% | 1,50 |
| Tổng hợp | 15% | 1,50 |
| **Tổng** | **100%** | **10,00** |

Kết quả tính lại từ mã câu và trọng số từng phần cho thấy cả 5 đề đều khớp bảng phân bổ điểm trên.

## 4. Kiểm tra nội dung và lời giải

- Câu trắc nghiệm có 4 phương án, một chỉ số đáp án và phần giải thích cơ sở hóa học.
- Câu đúng–sai có đáp án Boolean và giải thích riêng từng nhận định.
- Câu trả lời ngắn có đáp án kỳ vọng, các bước giải và rubric tổng 0,50 điểm/câu.
- Câu tự luận có đáp án, hướng giải và rubric tổng 1,00 điểm.
- Đã kiểm tra trùng lặp nguyên văn giữa các đề và chỉnh sửa các mục trùng được phát hiện.

**Lưu ý:** Kiểm định tự động có thể xác nhận cấu trúc, mã câu, trọng số, dữ liệu đáp án và sự hiện diện của lời giải; nó không thay thế việc giáo viên thẩm định độc lập toàn bộ tính đúng đắn hóa học, điều kiện phản ứng và chất lượng sư phạm của từng câu. Báo cáo này không tuyên bố đã có hội đồng chuyên môn xác nhận từng câu.

## 5. Kiểm tra chức năng phần mềm

- Thư viện đề: tìm kiếm, lọc trạng thái, xem cấu trúc và mở đề.
- Phòng thi: đồng hồ đếm ngược, bản đồ câu hỏi, đánh dấu xem lại, tự lưu câu trả lời, xác nhận nộp và tự nộp khi hết giờ.
- Chấm điểm: tự động phần I–III; câu IV hiển thị rubric để học sinh tự đối chiếu.
- Luyện tập theo chủ đề và mức độ tư duy.
- Tạo đề ngẫu nhiên bằng cách lấy câu từ cùng vị trí ma trận trong ngân hàng; không tự ý thay đổi số lượng hoặc mức độ.
- Lịch sử làm bài và thống kê kết quả.
- Quản trị: nhập/xuất JSON, chỉnh sửa ngân hàng bằng JSON, phát hiện nội dung trùng, khôi phục dữ liệu mặc định và cài đặt thời lượng/điểm mỗi ý đúng–sai.
- Trình duyệt lưu tiến độ bằng LocalStorage; không cần API trả phí.

## 6. Biểu điểm và giới hạn triển khai

Ma trận nguồn xác định tổng điểm phần II là 3,0 nhưng không nêu chi tiết quy tắc chấm từng nhận định. Website mặc định 0,25 điểm/ý để tổng phần II bằng 3,0. Đây là cấu hình kỹ thuật tạm thời, không phải biểu điểm chính thức. Khi giáo viên cung cấp biểu điểm khác, cần cấu hình lại theo quy tắc được xác nhận và giữ tổng điểm/ma trận phù hợp.

Câu IV.1 không được máy chấm tự động. Điểm tự luận và tổng điểm cuối cùng chỉ được ghi nhận sau khi người học tự đối chiếu rubric; đây không phải kết quả chấm của giáo viên.

Dữ liệu lịch sử, cài đặt và chỉnh sửa ngân hàng chỉ lưu trên trình duyệt hiện tại. Website chưa có tài khoản, máy chủ, phân quyền quản trị hoặc đồng bộ nhiều thiết bị. Ngân hàng hiện có 5 đề hoàn chỉnh; đề ngẫu nhiên chỉ khai thác các câu đã có, vì vậy số tổ hợp không phải vô hạn.

## 7. Kết luận

Kiểm tra cấu trúc và trọng số dữ liệu đạt với cả 5 đề. Các chức năng chính được triển khai trong website tĩnh tương thích GitHub Pages. Nội dung hóa học cần tiếp tục được giáo viên rà soát chuyên môn trước khi sử dụng như đề kiểm tra chính thức.
