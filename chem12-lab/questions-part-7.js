(function(){
const {M,T,S}=window.CHEM12_QUESTION_FACTORIES;
const q=window.CHEM12_EXTRA_QUESTIONS;
q.push(
M("Q204","polymer",1,"Monomer dùng để sản xuất polyethylene (PE) bằng phản ứng trùng hợp là chất nào?","Ethylene CH₂=CH₂","Vinyl chloride CH₂=CHCl","Propene CH₂=CH–CH₃","Styrene C₆H₅CH=CH₂","Ethylene mở liên kết đôi C=C và tạo mắt xích –CH₂–CH₂– trong polyethylene.",["Vinyl chloride tạo poly(vinyl chloride) (PVC).","Propene tạo polypropylene (PP).","Styrene tạo polystyrene (PS)."]),
M("Q205","polymer",1,"Polymer nào được tạo thành từ monomer vinyl chloride?","PVC","PE","PP","PS","Vinyl chloride CH₂=CHCl trùng hợp tạo poly(vinyl chloride), viết tắt PVC.",["PE tạo từ ethylene.","PP tạo từ propene.","PS tạo từ styrene."]),
M("Q206","polymer",2,"Điểm khác biệt khái quát giữa trùng hợp cộng và trùng ngưng là gì?","Trùng ngưng thường giải phóng phân tử nhỏ; trùng hợp cộng thường không","Trùng hợp cộng luôn giải phóng CO₂","Trùng ngưng không tạo polymer","Hai quá trình luôn có cùng monomer và sản phẩm phụ","Trong trùng hợp cộng, monomer thường cộng liên tiếp mà không tách phân tử nhỏ; trùng ngưng liên kết monomer đa chức và thường giải phóng phân tử nhỏ như H₂O.",["Trùng hợp cộng không mặc định giải phóng CO₂.","Trùng ngưng chính là một kiểu phản ứng tạo polymer.","Hai cơ chế khác nhau về nhóm chức và sản phẩm phụ."]),
M("Q207","polymer",2,"Polymer thiên nhiên nào là thành phần cấu trúc quan trọng của thành tế bào thực vật?","Cellulose","PVC","Polyethylene","Nylon-6,6","Cellulose là polysaccharide thiên nhiên tạo khung cấu trúc cho thành tế bào thực vật.",["PVC là polymer tổng hợp.","Polyethylene là polymer tổng hợp.","Nylon-6,6 là polyamide tổng hợp."]),
M("Q208","polymer",2,"Polymer nào thuộc nhóm polyamide thường dùng sản xuất sợi tổng hợp?","Nylon-6,6","Polyethylene","PVC","Polystyrene","Nylon-6,6 có các liên kết amide –CO–NH– trong mạch và được dùng làm sợi polyamide.",["PE là polyolefin, không có liên kết amide trong mạch.","PVC có nhóm thế chlorine, không phải polyamide.","Polystyrene có vòng phenyl gắn vào mạch carbon, không phải polyamide."]),
M("Q209","polymer",2,"Vật liệu polymer nhiệt dẻo có đặc điểm nào?","Có thể mềm khi nung nóng và cứng lại khi làm nguội nhiều lần trong giới hạn thích hợp","Luôn phân hủy ngay khi đun nóng nhẹ","Có mạng liên kết ngang dày đặc không thể chảy","Chỉ tồn tại trong tự nhiên","Polymer nhiệt dẻo có thể mềm/chảy khi gia nhiệt và rắn lại khi làm nguội; khả năng tái gia công phụ thuộc loại polymer và điều kiện.",["Không phải mọi polymer nhiệt dẻo đều phân hủy ngay khi đun nóng nhẹ.","Mạng liên kết ngang dày đặc thường gắn với polymer nhiệt rắn.","Polymer nhiệt dẻo có nhiều loại tổng hợp và không chỉ có trong tự nhiên."]),
M("Q210","polymer",2,"Monomer nào tạo polypropylene (PP) qua phản ứng trùng hợp cộng?","Propene CH₂=CH–CH₃","Ethylene CH₂=CH₂","Vinyl chloride CH₂=CHCl","Tetrafluoroethylene CF₂=CF₂","Propene có liên kết đôi C=C mở ra để tạo mạch polypropylene với nhóm methyl ở mắt xích.",["Ethylene tạo polyethylene.","Vinyl chloride tạo PVC.","Tetrafluoroethylene tạo PTFE."]),
M("Q211","polymer",3,"Một polymer có khối lượng mol trung bình 56 000 g/mol. Mắt xích của PE có M = 28 g/mol. Bậc polymer hóa gần đúng là bao nhiêu?","2000","200","28","56 000","n ≈ M(polymer)/M(mắt xích) = 56 000/28 = 2000.",["200 là kết quả chia sai một bậc mười.","28 là khối lượng mol mắt xích, không phải bậc polymer hóa.","56 000 là khối lượng mol polymer, không phải tỉ số."]),
T("Q212","polymer",2,"Đánh giá các nhận định về monomer, mắt xích và polymer.","Polyethylene được tạo từ ethylene theo phản ứng trùng hợp cộng.",[
["Ethylene là monomer của polyethylene.",true,"Ethylene là phân tử nhỏ tham gia phản ứng tạo polymer."],
["Mắt xích lặp lại của polyethylene là –CH₂–CH₂–.",true,"Liên kết đôi mở ra và tạo đơn vị cấu trúc lặp lại này."],
["Mọi mắt xích polymer phải giữ nguyên toàn bộ liên kết đôi của monomer.",false,"Liên kết đôi C=C của ethylene bị mở ra khi trùng hợp, tạo liên kết đơn trong mạch."],
["Ký hiệu n trong (–CH₂–CH₂–)ₙ biểu thị số mắt xích lặp lại.",true,"n là bậc polymer hóa theo cách biểu diễn lý tưởng."]
]),
T("Q213","polymer",2,"Đánh giá các nhận định về một số polymer thông dụng.","Xét PE, PVC, PP và PS.",[
["PE được tạo từ ethylene.",true,"Ethylene trùng hợp tạo polyethylene."],
["PVC được tạo từ vinyl chloride.",true,"Monomer CH₂=CHCl tạo mạch PVC."],
["PP được tạo từ propene.",true,"Propene trùng hợp tạo polypropylene."],
["PS được tạo từ styrene nhưng không có vòng phenyl trong cấu trúc polymer.",false,"Nhóm phenyl của styrene vẫn gắn vào mạch carbon trong polystyrene."]
]),
T("Q214","polymer",2,"Đánh giá các nhận định về trùng ngưng.","Nhiều polymer được tạo từ monomer có hai hoặc nhiều nhóm chức.",[
["Trùng ngưng có thể giải phóng phân tử nhỏ như H₂O.",true,"Sự liên kết các nhóm chức thường đi kèm tách phân tử nhỏ."],
["Nylon-6,6 là polyamide có liên kết –CO–NH–.",true,"Liên kết amide hình thành giữa nhóm carboxyl và amino."],
["Trùng ngưng luôn sử dụng monomer có liên kết đôi C=C.",false,"Trùng ngưng thường dựa vào phản ứng giữa các nhóm chức; không bắt buộc có C=C."],
["Khi viết phương trình trùng ngưng cần xét số nhóm chức và đầu mạch.",true,"Điều này giúp xác định đúng mắt xích và lượng phân tử nhỏ được tạo ra."]
]),
T("Q215","polymer",2,"Đánh giá tính chất và phân loại vật liệu polymer.","Polymer có thể là nhựa, cao su, tơ hoặc vật liệu sinh học.",[
["Polymer nhiệt rắn thường hình thành mạng liên kết không gian và không nóng chảy chảy lại như nhiệt dẻo.",true,"Liên kết ngang tạo mạng cấu trúc khó tái gia công bằng nung chảy."],
["Cao su có tính đàn hồi đáng kể.",true,"Mạch polymer linh động và cấu trúc phù hợp giúp cao su biến dạng rồi hồi phục."],
["Mọi loại tơ polymer đều có cùng thành phần và cấu trúc hóa học.",false,"Tơ tự nhiên và tổng hợp có cấu trúc, monomer và tính chất khác nhau."],
["Tính chất polymer phụ thuộc khối lượng phân tử và cấu trúc mạch.",true,"Độ dài mạch, nhánh, liên kết ngang và tương tác giữa mạch đều ảnh hưởng tính chất."]
]),
T("Q216","polymer",3,"Đánh giá các phát biểu về môi trường và tái chế polymer.","Việc xử lí vật liệu polymer cần dựa trên loại nhựa và hệ thống thu gom.",[
["Phân loại đúng loại nhựa giúp lựa chọn phương pháp tái chế phù hợp.",true,"Các polymer khác nhau có tính chất nhiệt và hóa học khác nhau."],
["Mọi loại nhựa đều có thể tái chế cơ học vô hạn mà không giảm chất lượng.",false,"Nhiều polymer suy giảm chất lượng sau các chu trình xử lí; phụ gia và tạp chất cũng ảnh hưởng."],
["Giảm sử dụng một lần và tái sử dụng có thể giảm lượng rác thải.",true,"Giảm nhu cầu vật liệu mới và lượng chất thải phát sinh."],
["Đốt mọi loại polymer ngoài trời là phương pháp xử lí an toàn.",false,"Đốt không kiểm soát có thể tạo khí và sản phẩm phân hủy gây hại; cần hệ thống xử lí được quản lý."]
]),
T("Q217","polymer",2,"Đánh giá các phát biểu về polymer thiên nhiên.","Tinh bột, cellulose và protein là các polymer thiên nhiên.",[
["Tinh bột là polymer của glucose.",true,"Tinh bột gồm các đơn vị glucose liên kết glycoside."],
["Protein là polymer được hình thành từ các gốc amino acid.",true,"Các gốc amino acid nối với nhau qua liên kết peptide."],
["Cellulose có cùng chức năng sinh học chủ yếu như tinh bột.",false,"Tinh bột dự trữ năng lượng ở thực vật; cellulose chủ yếu có chức năng cấu trúc."],
["Cao su thiên nhiên có thành phần polymer chính là polyisoprene.",true,"Cao su thiên nhiên chủ yếu là cis-1,4-polyisoprene."]
]),
T("Q218","polymer",3,"Đánh giá cách tính bậc polymer hóa.","Dùng công thức gần đúng n ≈ M(polymer)/M(mắt xích) khi khối lượng mol trung bình được cho.",[
["Bậc polymer hóa là đại lượng không thứ nguyên.",true,"Đây là tỉ số giữa hai khối lượng mol cùng đơn vị."],
["Nếu M(polymer) tăng gấp đôi và M(mắt xích) không đổi thì n tăng gấp đôi.",true,"n tỉ lệ thuận với khối lượng mol polymer."],
["Nếu đổi đơn vị cả hai khối lượng mol theo cùng hệ đơn vị thì kết quả n thay đổi.",false,"Tỉ số không đổi nếu tử và mẫu đổi cùng hệ đơn vị."],
["Công thức chỉ cho giá trị trung bình khi mẫu polymer có phân bố độ dài mạch.",true,"Polymer thường có phân bố khối lượng phân tử, nên n là giá trị gần đúng/trung bình."]
]),
T("Q219","polymer",3,"Đánh giá về vật liệu polymer trong đời sống.","Polymer được dùng rộng rãi trong bao bì, xây dựng, dệt may và y tế.",[
["PVC thường được dùng trong ống và vật liệu cách điện.",true,"Tính chất của PVC phù hợp với một số ứng dụng xây dựng và cách điện."],
["Polyethylene có thể được dùng làm màng và bao bì.",true,"PE có tính gia công và tính chất cơ học phù hợp nhiều dạng bao bì."],
["Mọi vật liệu polymer đều có khả năng phân hủy sinh học nhanh trong môi trường tự nhiên.",false,"Khả năng phân hủy phụ thuộc cấu trúc và điều kiện; nhiều nhựa tồn tại lâu."],
["Thiết kế sản phẩm để dễ phân loại có thể hỗ trợ tái chế.",true,"Giảm trộn lẫn vật liệu giúp quy trình thu hồi hiệu quả hơn."]
]),
T("Q220","polymer",2,"Đánh giá các nhận định về phản ứng trùng hợp cộng.","Monomer có liên kết đôi C=C có thể tham gia trùng hợp cộng.",[
["Liên kết đôi C=C được mở ra khi hình thành mạch polymer trong mô hình trùng hợp cộng.",true,"Một liên kết pi bị phá vỡ để hình thành liên kết mới nối các monomer."],
["Phản ứng trùng hợp ethylene không tạo phân tử nhỏ như nước theo phương trình tổng quát.",true,"Ethylene cộng trực tiếp tạo mắt xích PE, không tách nước."],
["Mỗi monomer ethylene có hai nguyên tử carbon đóng góp vào một mắt xích PE.",true,"Mắt xích –CH₂–CH₂– chứa hai carbon."],
["Trùng hợp cộng ethylene tạo polymer có nhóm –COO– trong mạch chính.",false,"PE có mạch chính carbon–carbon, không chứa nhóm ester –COO–."]
]),
S("Q221","polymer",2,"Một mẫu polyethylene có khối lượng mol trung bình 28 000 g/mol. Mắt xích –CH₂–CH₂– có M = 28 g/mol. Tính bậc polymer hóa gần đúng.",1000,1,"","n ≈ 28 000/28 = 1000 mắt xích.","Chia nhầm 28/28 000 hoặc dùng khối lượng nguyên tử của carbon thay cho mắt xích.","",["Dùng n ≈ M(polymer)/M(mắt xích).","n = 28 000/28 = 1000."]),
S("Q222","polymer",2,"Trùng hợp hoàn toàn 0,40 mol ethylene tạo polyethylene. Số mol đơn vị mắt xích –CH₂–CH₂– được hình thành theo mô hình lý tưởng là bao nhiêu?",0.4,0.001,"mol mắt xích","Mỗi phân tử ethylene trở thành một mắt xích trong mạch polymer theo mô hình trùng hợp cộng; lượng mắt xích bằng 0,40 mol.","Nhân đôi số mol vì một mắt xích có hai nguyên tử carbon.","",["Monomer ethylene tạo một mắt xích –CH₂–CH₂–.","n(mắt xích) = n(ethylene) = 0,40 mol."]),
S("Q223","polymer",3,"Một mẫu polymer có M trung bình 84 000 g/mol; mắt xích có M = 42 g/mol. Tính bậc polymer hóa trung bình.",2000,1,"","n ≈ 84 000/42 = 2000.","Dùng nhầm 42 000 hoặc đổi đơn vị không đồng nhất.","",["Viết n ≈ M(polymer)/M(mắt xích).","n = 84 000/42 = 2000."]),
S("Q224","polymer",2,"Một polymer có 500 mắt xích, mỗi mắt xích có khối lượng mol 28 g/mol. Khối lượng mol gần đúng của mạch polymer theo mô hình bỏ qua đầu mạch là bao nhiêu?",14000,1,"g/mol","M gần đúng = 500 × 28 = 14 000 g/mol khi bỏ qua đóng góp của đầu mạch.","Chia số mắt xích cho M mắt xích thay vì nhân.","",["Số mắt xích n = 500.","M(polymer) ≈ n × M(mắt xích) = 500 × 28 = 14 000 g/mol."]),
S("Q225","polymer",3,"Trùng hợp 2,0 mol propene với hiệu suất chuyển hóa monomer là 80%. Số mol mắt xích propene được đưa vào polymer là bao nhiêu?",1.6,0.01,"mol mắt xích","Lượng monomer đã chuyển hóa = 2,0 × 0,80 = 1,60 mol. Mỗi phân tử propene chuyển hóa tạo một mắt xích trong mô hình trùng hợp cộng.","Dùng 80 thay vì 0,80 hoặc quên mỗi monomer tạo một mắt xích.","",["n propene ban đầu = 2,0 mol.","n đã chuyển hóa = 2,0 × 0,80 = 1,60 mol.","Mỗi propene chuyển hóa tạo một mắt xích, nên n(mắt xích) = 1,60 mol."])
);
})();