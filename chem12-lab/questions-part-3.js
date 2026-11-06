(function(){
const {M,T,S}=window.CHEM12_QUESTION_FACTORIES;
const q=window.CHEM12_EXTRA_QUESTIONS;
q.push(
M("Q114","phuc-chat",1,"Trong ion phức [Cu(NH₃)₄]²⁺, ion trung tâm là tiểu phân nào?","Cu²⁺","NH₃","N","H⁺","Cu²⁺ là ion kim loại nằm ở trung tâm; bốn phân tử NH₃ đóng vai trò phối tử.",["NH₃ là phối tử, không phải ion trung tâm.","N là nguyên tử cho electron trong phối tử NH₃, không phải tiểu phân trung tâm độc lập.","H⁺ không có mặt như ion trung tâm trong công thức phức."]),
M("Q115","phuc-chat",2,"Phối tử NH₃ liên kết với ion kim loại chủ yếu bằng cách nào?","Cho cặp electron tự do trên N để hình thành liên kết cho – nhận","Nhường proton H⁺ cho ion kim loại","Nhận electron từ ion kim loại để tạo anion","Phân li thành N³⁻ và H⁺","Nguyên tử N trong NH₃ có cặp electron tự do; cặp electron này được dùng để tạo liên kết phối trí với ion kim loại.",["NH₃ là phối tử trung hòa; việc cho cặp electron không đồng nghĩa nhường proton.","NH₃ không nhận electron để biến thành anion trong mô hình tạo phức này.","NH₃ không phân li thành N³⁻ và H⁺ khi tạo phức."]),
M("Q116","phuc-chat",1,"Trong phức [Cu(NH₃)₄]²⁺, số phối trí của Cu²⁺ theo công thức đã cho là bao nhiêu?","4","2","6","1","Có bốn phân tử NH₃ liên kết trực tiếp với ion Cu²⁺; mỗi NH₃ là phối tử một càng nên số phối trí là 4.",["Số 2 là điện tích ion phức, không phải số phối trí.","Số phối trí không phải lúc nào cũng bằng 6; cần đếm nguyên tử cho liên kết trực tiếp.","Một phân tử NH₃ không phải toàn bộ số phối tử."]),
M("Q117","phuc-chat",2,"Trong ion phức [Ag(NH₃)₂]⁺, số oxi hóa của bạc là bao nhiêu?","+1","0","+2","−1","NH₃ trung hòa, tổng điện tích ion phức là +1 nên số oxi hóa của Ag là +1.",["Số 0 không phù hợp với điện tích toàn ion phức.","Ag(II) không phù hợp với cân bằng điện tích đã cho.","Ag có số oxi hóa +1 khi hai NH₃ trung hòa tạo phức mang điện tích +1."]),
M("Q118","phuc-chat",2,"Chất nào sau đây là phối tử mang điện tích âm?","Cl⁻","H₂O","NH₃","CO","Cl⁻ mang điện tích âm và có thể cho cặp electron tự do để liên kết với ion kim loại.",["H₂O là phối tử trung hòa.","NH₃ là phối tử trung hòa.","CO là phối tử trung hòa trong cách biểu diễn thông thường."]),
M("Q119","phuc-chat",2,"Màu xanh đậm đặc trưng trong thí nghiệm cho NH₃ dư vào dung dịch chứa Cu²⁺ thường gắn với sự tạo thành phức nào?","[Cu(NH₃)₄]²⁺","CuCl₂ rắn","CuO","[Ag(NH₃)₂]⁺","Trong điều kiện NH₃ dư, Cu²⁺ tạo phức ammine đồng(II) có màu xanh đậm; màu quan sát có thể phụ thuộc môi trường và nồng độ.",["CuCl₂ không phải phức ammine tạo ra do NH₃.","CuO là oxide đồng(II), không phải sản phẩm tạo phức trong dung dịch này.","[Ag(NH₃)₂]⁺ là phức bạc(I), không chứa đồng."]),
M("Q120","phuc-chat",3,"Trong [Fe(CN)₆]⁴⁻, biết mỗi phối tử CN⁻ mang điện tích −1. Số oxi hóa của Fe là bao nhiêu?","+2","+3","+4","0","Gọi số oxi hóa Fe là x: x + 6(−1) = −4, suy ra x = +2.",["+3 sẽ cho tổng điện tích −3, không đúng công thức.","+4 sẽ cho tổng điện tích −2.","0 sẽ cho tổng điện tích −6."]),
M("Q121","phuc-chat",2,"Đặc điểm nào giúp phân biệt phối tử với ion trung tâm trong một ion phức?","Phối tử cho cặp electron vào ion/nguyên tử trung tâm","Phối tử luôn là kim loại","Ion trung tâm luôn là phân tử trung hòa","Phối tử luôn mang điện tích dương","Phối tử là ion hoặc phân tử có khả năng cho cặp electron; ion trung tâm thường là ion kim loại trong các ví dụ phổ thông.",["Phối tử thường là phân tử hoặc anion, không nhất thiết là kim loại.","Ion trung tâm thường mang điện tích dương, không phải luôn là phân tử trung hòa.","Phối tử có thể trung hòa như NH₃, H₂O hoặc mang điện âm như Cl⁻."]),
T("Q122","phuc-chat",2,"Đánh giá cấu tạo và cách gọi thành phần của ion phức.","Xét ion phức [Cu(NH₃)₄]²⁺.",[
["Cu²⁺ là ion trung tâm.",true,"Cu²⁺ là tiểu phân kim loại ở vị trí trung tâm của cầu phối trí."],
["NH₃ là phối tử trung hòa.",true,"NH₃ có cặp electron tự do và không mang điện tích tổng thể."],
["Số phối trí của Cu²⁺ là 4.",true,"Bốn phân tử NH₃ liên kết trực tiếp với Cu²⁺."],
["Điện tích ion phức là +4.",false,"NH₃ trung hòa nên điện tích của ion phức vẫn là +2."]
]),
T("Q123","phuc-chat",2,"Đánh giá các nhận định về số oxi hóa trong phức chất.","Xét [Ag(NH₃)₂]⁺ và [Fe(CN)₆]⁴⁻.",[
["Số oxi hóa của Ag trong [Ag(NH₃)₂]⁺ là +1.",true,"NH₃ trung hòa, do đó Ag phải mang số oxi hóa +1 để tổng điện tích bằng +1."],
["Trong [Fe(CN)₆]⁴⁻, số oxi hóa Fe là +2.",true,"x + 6(−1) = −4 nên x = +2."],
["Phối tử NH₃ có điện tích −1.",false,"NH₃ là phân tử trung hòa; phối tử không nhất thiết phải mang điện tích."],
["Tổng đại số điện tích của các thành phần bằng điện tích ion phức.",true,"Đây là nguyên tắc bảo toàn điện tích dùng để tính số oxi hóa."]
]),
T("Q124","phuc-chat",3,"Đánh giá các phát biểu về sự tạo phức trong dung dịch.","Thêm dung dịch NH₃ từ từ rồi đến dư vào dung dịch CuSO₄.",[
["Có thể xuất hiện kết tủa Cu(OH)₂ khi thêm lượng NH₃ nhỏ.",true,"NH₃ trong nước tạo môi trường base yếu, có thể cung cấp OH⁻ làm Cu²⁺ kết tủa."],
["Khi NH₃ dư, kết tủa có thể tan do tạo phức ammine đồng(II).",true,"Phức [Cu(NH₃)₄]²⁺ bền tương đối trong môi trường NH₃ dư, tạo dung dịch xanh đậm."],
["NH₃ là chất oxi hóa làm Cu²⁺ bị khử thành Cu.",false,"Hiện tượng chủ yếu là tạo phức và cân bằng acid–base, không phải phản ứng oxi hóa – khử tạo đồng kim loại."],
["Màu xanh đậm là dấu hiệu có thể dùng để nhận biết sự tạo phức của Cu²⁺.",true,"Màu của phức Cu(II) với NH₃ khác màu dung dịch ban đầu và được dùng làm dấu hiệu quan sát."]
]),
T("Q125","phuc-chat",2,"Đánh giá vai trò và tính chất của phối tử.","Một phối tử liên kết với ion trung tâm thông qua nguyên tử cho electron.",[
["H₂O có thể là phối tử vì nguyên tử oxygen có cặp electron tự do.",true,"Oxygen trong nước có cặp electron không liên kết có thể cho để tạo liên kết phối trí."],
["Cl⁻ có thể làm phối tử.",true,"Ion chloride có cặp electron tự do và mang điện tích âm."],
["Mọi phối tử đều phải là phân tử hữu cơ.",false,"Phối tử có thể là phân tử vô cơ như H₂O, NH₃ hoặc anion Cl⁻, CN⁻."],
["Phối tử đa càng có thể liên kết với ion trung tâm qua nhiều nguyên tử cho.",true,"Số càng liên quan đến số nguyên tử cho của một phối tử cùng liên kết với trung tâm."]
]),
T("Q126","phuc-chat",3,"Đánh giá các nhận định về màu sắc phức chất.","Một số ion kim loại chuyển tiếp tạo phức có màu trong dung dịch.",[
["Màu phức có thể thay đổi khi thay đổi phối tử.",true,"Phối tử ảnh hưởng môi trường electron của ion trung tâm, nên màu hấp thụ có thể thay đổi."],
["Có thể suy ra mọi phức chất của cùng một kim loại đều có cùng màu.",false,"Màu phụ thuộc phối tử, số oxi hóa, hình học, dung môi và nồng độ."],
["Một số phức chất được dùng trong phân tích định tính ion kim loại.",true,"Màu hoặc sự tạo phức đặc trưng có thể hỗ trợ nhận biết trong điều kiện xác định."],
["Màu quan sát được là bằng chứng đủ để xác định chắc chắn cấu trúc mọi phức chất.",false,"Màu chỉ là một dấu hiệu; muốn xác định cấu trúc cần nhiều bằng chứng và phương pháp phù hợp."]
]),
T("Q127","phuc-chat",1,"Đánh giá các phát biểu về kim loại chuyển tiếp dãy thứ nhất.","Xét một số nguyên tố từ Sc đến Zn.",[
["Nhiều kim loại chuyển tiếp có thể có nhiều số oxi hóa trong hợp chất.",true,"Electron ở phân lớp 3d và 4s có thể tham gia liên kết với mức độ khác nhau."],
["Một số ion kim loại chuyển tiếp có màu trong dung dịch.",true,"Sự hấp thụ ánh sáng phụ thuộc cấu hình electron và môi trường phối trí."],
["Mọi ion kim loại chuyển tiếp đều không màu.",false,"Nhiều ion như Cu²⁺, Cr³⁺ có màu; màu cụ thể tùy môi trường."],
["Khả năng tạo phức là một đặc điểm quan trọng của nhiều ion kim loại chuyển tiếp.",true,"Các ion kim loại thường có khả năng nhận cặp electron từ phối tử."]
]),
T("Q128","phuc-chat",2,"Đánh giá cách tính số oxi hóa trong ion phức.","Dùng tổng điện tích các phối tử và điện tích ion phức.",[
["Nếu phối tử trung hòa, số oxi hóa ion trung tâm bằng điện tích ion phức.",true,"Vì các phối tử không đóng góp điện tích tổng thể."],
["Nếu ion phức có phối tử âm, phải cộng điện tích phối tử khi lập phương trình.",true,"Tổng số oxi hóa trung tâm và điện tích phối tử bằng điện tích toàn ion phức."],
["Số phối trí luôn bằng số oxi hóa ion trung tâm.",false,"Số phối trí là số nguyên tử cho liên kết trực tiếp; số oxi hóa là đại lượng quy ước về electron."],
["Điện tích ion phức có thể dùng để kiểm tra kết quả tính số oxi hóa.",true,"Kiểm tra tổng điện tích giúp phát hiện sai số học."]
]),
T("Q129","phuc-chat",3,"Đánh giá các nhận định về ứng dụng phức chất.","Phức chất được ứng dụng trong phân tích, sinh học và công nghệ.",[
["Hemoglobin chứa ion sắt trong một môi trường phối trí sinh học.",true,"Nhóm heme có ion sắt gắn trong cấu trúc phối trí của protein."],
["Một số thuốc thử tạo phức có thể dùng để xác định ion kim loại.",true,"Sự tạo phức có thể làm thay đổi màu hoặc tính chất đo được."],
["Phức chất chỉ có trong phòng thí nghiệm, không tồn tại trong sinh vật.",false,"Nhiều phân tử sinh học quan trọng có trung tâm kim loại phối trí."],
["Tính bền của phức có thể phụ thuộc bản chất phối tử và ion trung tâm.",true,"Cấu trúc phối tử và hiệu ứng điện tử ảnh hưởng cân bằng tạo phức."]
]),
T("Q130","phuc-chat",2,"Xét công thức ion phức và số phối trí.","Một ion trung tâm liên kết với sáu phối tử đơn càng.",[
["Số phối trí có thể bằng 6.",true,"Sáu nguyên tử cho liên kết trực tiếp với trung tâm."],
["Nếu cả sáu phối tử đều trung hòa, điện tích ion phức bằng số oxi hóa ion trung tâm.",true,"Phối tử trung hòa không làm thay đổi tổng điện tích."],
["Số phối trí 6 có nghĩa ion trung tâm có số oxi hóa +6.",false,"Hai khái niệm này độc lập; phải xác định số oxi hóa bằng cân bằng điện tích."],
["Phối tử đơn càng chỉ liên kết với trung tâm qua một nguyên tử cho.",true,"Đây là định nghĩa phối tử một càng."]
]),
S("Q131","phuc-chat",2,"Trong [Fe(CN)₆]³⁻, mỗi CN⁻ có điện tích −1. Tính số oxi hóa của Fe.",3,0,"","+3","Gọi số oxi hóa Fe là x: x + 6(−1) = −3, suy ra x = +3.","Quên nhân điện tích −1 của một phối tử với 6 phối tử.",["Gọi số oxi hóa Fe là x.","Lập cân bằng: x − 6 = −3.","Suy ra x = +3."]),
S("Q132","phuc-chat",1,"Trong ion phức [Ag(NH₃)₂]⁺ có bao nhiêu phân tử NH₃ phối trí với Ag?",2,0,"phân tử NH₃","Chỉ số 2 ngoài ngoặc NH₃ cho biết có hai phân tử ammonia phối trí với ion Ag trung tâm.","Đếm nguyên tử N/H thay vì số phân tử phối tử.",["Đọc công thức [Ag(NH₃)₂]⁺.","Chỉ số 2 áp dụng cho toàn bộ phối tử NH₃, nên có 2 phân tử."]),
S("Q133","phuc-chat",2,"Một ion phức có ion trung tâm M³⁺ và 4 phối tử trung hòa. Điện tích tổng của ion phức là bao nhiêu?",3,0,"+3","Các phối tử trung hòa không đóng góp điện tích; tổng điện tích ion phức bằng +3 của ion trung tâm.","Cộng nhầm số phối tử vào điện tích.","","",["Ion trung tâm mang điện tích +3.","Bốn phối tử trung hòa có tổng điện tích 0.","Điện tích ion phức = +3."]),
S("Q134","phuc-chat",3,"Trong [CuCl₄]²⁻, mỗi phối tử Cl⁻ mang điện tích −1. Tính số oxi hóa của Cu.",2,0,"+2","Gọi số oxi hóa Cu là x: x + 4(−1) = −2, suy ra x = +2.","Không đặt tổng điện tích bằng điện tích toàn ion phức.","",["Gọi số oxi hóa Cu là x.","x − 4 = −2.","x = +2."]),
S("Q135","phuc-chat",1,"Một phức chất có 3 phối tử đơn càng liên kết trực tiếp với ion trung tâm. Số phối trí của ion trung tâm là bao nhiêu?",3,0,"","Ba phối tử đơn càng mỗi phối tử tạo một liên kết phối trí qua một nguyên tử cho, nên số phối trí là 3.","Nhầm số phối trí với điện tích hoặc số oxi hóa.",["Đếm số nguyên tử cho liên kết trực tiếp.","Có 3 phối tử đơn càng nên số phối trí bằng 3."]),
S("Q136","phuc-chat",3,"Ion phức [Fe(CN)₆]⁴⁻ có 6 phối tử CN⁻. Tính tổng điện tích do các phối tử đóng góp.",-6,0,"","Mỗi CN⁻ mang điện tích −1; sáu phối tử có tổng điện tích 6 × (−1) = −6.","Chỉ lấy điện tích của một phối tử mà không nhân số lượng.","",["Điện tích một CN⁻ là −1.","Tổng điện tích phối tử = 6 × (−1) = −6."])
);
})();