(function(){
const {M,T,S}=window.CHEM12_QUESTION_FACTORIES;
const q=window.CHEM12_EXTRA_QUESTIONS;
q.push(
M("Q159","carbohydrate",1,"Glucose thuộc loại carbohydrate nào?","Monosaccharide","Disaccharide","Polysaccharide","Polymer tổng hợp","Glucose là monosaccharide, không bị thủy phân thành các carbohydrate đơn giản hơn.",["Disaccharide gồm hai đơn vị monosaccharide liên kết với nhau.","Polysaccharide gồm nhiều đơn vị monosaccharide.","Glucose là carbohydrate tự nhiên, không phải polymer tổng hợp."]),
M("Q160","carbohydrate",2,"Công thức phân tử của glucose và fructose là gì?","C₆H₁₂O₆","C₁₂H₂₂O₁₁","C₆H₁₀O₅","C₅H₁₀O₅","Glucose và fructose đều có công thức phân tử C₆H₁₂O₆ nhưng cấu tạo khác nhau nên là đồng phân.",["C₁₂H₂₂O₁₁ là công thức của một số disaccharide như sucrose.","C₆H₁₀O₅ là công thức mắt xích thường dùng để biểu diễn tinh bột/cellulose.","C₅H₁₀O₅ là công thức của một số pentose, không phải glucose/fructose."]),
M("Q161","carbohydrate",2,"Chất nào là disaccharide không có tính khử theo kiến thức phổ thông?","Sucrose","Maltose","Glucose","Fructose","Sucrose có liên kết glycoside sử dụng cả hai carbon hemiacetal/anomeric trong cấu trúc, nên không còn nhóm có thể mở vòng tạo dạng carbonyl theo cách thử thông thường.",["Maltose có đầu khử còn lại nên có tính khử.","Glucose có thể mở vòng tạo dạng aldehyde và thể hiện tính khử.","Fructose cũng có thể cho phản ứng tráng bạc trong môi trường kiềm do chuyển hóa qua dạng trung gian."]),
M("Q162","carbohydrate",1,"Thuốc thử nào thường dùng để nhận biết tinh bột?","Dung dịch iodine","Dung dịch NaCl","Nước vôi trong","Quỳ tím","Iodine tạo phức hấp phụ với cấu trúc xoắn của amylose trong tinh bột, cho màu xanh tím đặc trưng.",["NaCl không cho màu đặc trưng với tinh bột.","Nước vôi trong dùng nhận biết CO₂ trong một số phép thử.","Quỳ tím là chất chỉ thị acid–base, không phải thuốc thử tinh bột."]),
M("Q163","carbohydrate",2,"Thủy phân hoàn toàn sucrose tạo ra hai monosaccharide nào?","Glucose và fructose","Glucose và glucose","Fructose và galactose","Ribose và glucose","Sucrose bị thủy phân thành một phân tử glucose và một phân tử fructose.",["Glucose–glucose là sản phẩm thủy phân maltose.","Fructose–galactose không phải thành phần của sucrose.","Ribose không phải thành phần của sucrose."]),
M("Q164","carbohydrate",2,"Thành phần cấu tạo chủ yếu của tinh bột và cellulose là gì?","Các đơn vị glucose liên kết thành polysaccharide","Các đơn vị amino acid","Các đơn vị glycerol và acid béo","Các đơn vị ester nhỏ","Tinh bột và cellulose đều là polysaccharide của glucose, nhưng kiểu liên kết glycoside và cấu trúc mạch khác nhau.",["Amino acid là đơn vị cấu tạo protein.","Glycerol và acid béo tạo chất béo.","Ester nhỏ không phải đơn vị cấu tạo chính của hai polysaccharide này."]),
M("Q165","carbohydrate",2,"Phản ứng tráng bạc của glucose cho sản phẩm bạc kim loại do nhóm chức nào trong dạng mạch hở?","Nhóm aldehyde –CHO","Nhóm ester –COO–","Nhóm amide –CONH–","Nhóm ether –O–","Glucose ở dạng mạch hở chứa nhóm aldehyde, có thể bị oxi hóa trong khi ion bạc bị khử thành Ag.",["Glucose không có nhóm ester trong cấu tạo thông thường.","Glucose không chứa nhóm amide.","Liên kết ether không phải nhóm chức chịu trách nhiệm phản ứng tráng bạc của glucose."]),
M("Q166","carbohydrate",3,"Trong môi trường kiềm, fructose có thể tham gia phản ứng tráng bạc vì nguyên nhân nào?","Có thể chuyển hóa qua dạng enediol thành aldose có tính khử","Fructose luôn chứa nhóm aldehyde ở dạng mạch vòng","Fructose bị thủy phân thành sucrose","Fructose trực tiếp tạo ion bạc không cần phản ứng oxi hóa – khử","Trong môi trường kiềm, fructose có thể chuyển hóa qua trung gian enediol thành aldose, từ đó thể hiện tính khử với thuốc thử Tollens.",["Fructose là ketose; không phải lúc nào cũng có nhóm aldehyde sẵn trong cấu tạo.","Fructose là monosaccharide nên không thủy phân thành sucrose.","Phản ứng tráng bạc là phản ứng oxi hóa – khử; cần electron được cung cấp bởi chất khử."]),
T("Q167","carbohydrate",2,"Đánh giá các phát biểu về glucose và fructose.","Hai monosaccharide có công thức phân tử C₆H₁₂O₆.",[
["Glucose là aldohexose ở dạng mạch hở.",true,"Dạng mạch hở của glucose có sáu carbon và nhóm aldehyde."],
["Fructose là ketohexose ở dạng mạch hở.",true,"Dạng mạch hở của fructose chứa nhóm ketone và có sáu carbon."],
["Glucose và fructose có cùng công thức phân tử nên chắc chắn có cùng cấu tạo.",false,"Cùng công thức phân tử không có nghĩa cùng cấu tạo; hai chất là đồng phân cấu tạo."],
["Glucose có thể tham gia phản ứng tráng bạc.",true,"Glucose có tính khử do dạng mạch hở chứa nhóm aldehyde."]
]),
T("Q168","carbohydrate",2,"Đánh giá các phát biểu về disaccharide.","Xét sucrose và maltose.",[
["Sucrose được cấu tạo từ glucose và fructose.",true,"Hai đơn vị monosaccharide này tạo thành sucrose qua liên kết glycoside."],
["Maltose được cấu tạo từ hai đơn vị glucose.",true,"Maltose là disaccharide gồm hai gốc glucose."],
["Sucrose có tính khử mạnh tương tự glucose trong phản ứng tráng bạc.",false,"Sucrose là đường không khử trong phép thử phổ thông vì hai carbon anomeric đều tham gia liên kết glycoside."],
["Maltose có tính khử do còn một đầu anomeric tự do.",true,"Đầu khử có thể mở vòng tạo dạng carbonyl trong điều kiện thích hợp."]
]),
T("Q169","carbohydrate",2,"Đánh giá các nhận định về tinh bột và cellulose.","Hai polymer thiên nhiên đều được cấu tạo từ các đơn vị glucose.",[
["Tinh bột là chất dự trữ carbohydrate chủ yếu ở thực vật.",true,"Thực vật tích lũy năng lượng dưới dạng tinh bột."],
["Cellulose là thành phần cấu trúc quan trọng của thành tế bào thực vật.",true,"Cellulose tạo độ bền cơ học cho thành tế bào."],
["Tinh bột và cellulose có cùng kiểu liên kết glycoside.",false,"Tinh bột chủ yếu có liên kết α, còn cellulose có liên kết β-1,4 giữa các đơn vị glucose."],
["Cellulose có thể bị thủy phân thành glucose khi có điều kiện và enzyme/acid phù hợp.",true,"Thủy phân cắt liên kết glycoside, giải phóng các đơn vị glucose."]
]),
T("Q170","carbohydrate",2,"Đánh giá về tính khử và phản ứng nhận biết carbohydrate.","Các phép thử được thực hiện trong điều kiện thích hợp.",[
["Glucose có thể khử thuốc thử Tollens tạo Ag.",true,"Nhóm aldehyde ở dạng mạch hở bị oxi hóa và ion bạc bị khử."],
["Tinh bột tạo màu xanh tím với iodine trong điều kiện thử phù hợp.",true,"Iodine tạo phức màu với cấu trúc xoắn của amylose."],
["Sucrose là đường khử trong phép thử Tollens trực tiếp ở điều kiện phổ thông.",false,"Sucrose không có đầu khử tự do do liên kết glycoside sử dụng hai carbon anomeric."],
["Phản ứng iodine là phép thử nhận biết protein.",false,"Iodine là thuốc thử đặc trưng để nhận biết tinh bột, không phải phép thử protein."]
]),
T("Q171","carbohydrate",3,"Đánh giá các nhận định về thủy phân polysaccharide.","Tinh bột được thủy phân trong môi trường acid hoặc nhờ enzyme thích hợp.",[
["Thủy phân hoàn toàn tinh bột có thể tạo glucose.",true,"Tinh bột là polymer của các đơn vị glucose."],
["Phản ứng thủy phân sử dụng nước để cắt liên kết glycoside.",true,"Nước tham gia vào quá trình phân cắt liên kết."],
["Một mắt xích tinh bột có công thức quy ước C₆H₁₀O₅.",true,"Đơn vị lặp sau khi hình thành liên kết glycoside có công thức quy ước này."],
["Thủy phân hoàn toàn tinh bột không thể tạo monosaccharide.",false,"Glucose là sản phẩm monosaccharide khi thủy phân hoàn toàn."]
]),
T("Q172","carbohydrate",3,"Đánh giá các phát biểu về ứng dụng carbohydrate.","Carbohydrate có vai trò trong sinh học và công nghiệp thực phẩm.",[
["Glucose là nguồn năng lượng quan trọng trong chuyển hóa tế bào.",true,"Glucose có thể bị oxi hóa trong hô hấp tế bào để giải phóng năng lượng."],
["Cellulose được con người tiêu hóa hoàn toàn nhờ enzyme tiêu hóa cellulose của cơ thể.",false,"Con người không có enzyme cellulase để thủy phân cellulose hiệu quả như động vật nhai lại."],
["Tinh bột được dùng làm nguyên liệu thực phẩm và có thể thủy phân thành glucose.",true,"Tinh bột là nguồn carbohydrate và nguyên liệu cho một số quy trình sản xuất đường."],
["Sucrose là đường ăn phổ biến.",true,"Sucrose là thành phần chính của đường mía và đường củ cải tinh luyện."]
]),
T("Q173","carbohydrate",2,"Đánh giá các nhận định về phương trình lên men glucose.","Trong điều kiện lên men rượu với enzyme thích hợp, glucose chuyển thành ethanol và carbon dioxide.",[
["Một mol glucose có thể tạo hai mol ethanol.",true,"C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂."],
["Một mol glucose tạo một mol CO₂ theo phương trình lên men rượu.",false,"Phương trình cho thấy tỉ lệ glucose : CO₂ là 1 : 2."],
["Phương trình lên men rượu đã cân bằng nguyên tố C, H, O.",true,"Hai phân tử ethanol và hai phân tử CO₂ có tổng số nguyên tử phù hợp với glucose."],
["Lên men rượu là phản ứng thủy phân sucrose trực tiếp.",false,"Lên men rượu là quá trình chuyển hóa đường thành ethanol và CO₂; sucrose có thể cần thủy phân trước."]
]),
T("Q174","carbohydrate",3,"Đánh giá về cách xác định lượng sản phẩm trong phản ứng tráng bạc glucose.","Dùng mô hình phương trình Tollens ở mức phổ thông: 1 mol glucose phản ứng tạo 2 mol Ag.",[
["Có thể dùng tỉ lệ mol glucose : Ag = 1 : 2 trong bài toán theo mô hình này.",true,"Mỗi phân tử glucose ở dạng khử cung cấp hai electron để khử hai ion bạc."],
["0,10 mol glucose có thể tạo tối đa 0,20 mol Ag theo mô hình trên.",true,"n(Ag) = 2 × 0,10 = 0,20 mol."],
["Tỉ lệ này có thể dùng mà không cần xác định thuốc thử và điều kiện phản ứng.",false,"Cần xét phản ứng nhận biết, chất oxi hóa và điều kiện thực nghiệm; tỉ lệ chỉ dùng trong mô hình đã nêu."],
["Bạc tạo ra là bạc kim loại.",true,"Ag⁺ nhận electron và bị khử thành Ag."]
]),
S("Q175","carbohydrate",2,"Thủy phân hoàn toàn 0,15 mol sucrose. Tổng số mol monosaccharide thu được là bao nhiêu?",0.3,0.001,"mol","Mỗi mol sucrose tạo một mol glucose và một mol fructose, tổng cộng hai mol monosaccharide. Vậy 0,15 mol sucrose tạo 0,30 mol monosaccharide.","Chỉ tính một sản phẩm monosaccharide hoặc quên có hai sản phẩm.",["Viết sơ đồ: 1 mol sucrose + nước → 1 mol glucose + 1 mol fructose.","Tổng monosaccharide = 2 mol trên 1 mol sucrose.","n = 2 × 0,15 = 0,30 mol."]),
S("Q176","carbohydrate",2,"Lên men hoàn toàn 0,25 mol glucose theo C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Tính số mol CO₂ tạo thành.",0.5,0.001,"mol","Tỉ lệ glucose : CO₂ = 1 : 2. Do đó n(CO₂) = 2 × 0,25 = 0,50 mol.","Nhầm hệ số 2 của CO₂ với hệ số ethanol hoặc lấy tỉ lệ 1:1.",["Phương trình cân bằng cho thấy 1 mol glucose tạo 2 mol CO₂.","n(CO₂) = 2 × 0,25 = 0,50 mol."]),
S("Q177","carbohydrate",2,"Tính khối lượng 0,20 mol glucose. Biết M(C₆H₁₂O₆) = 180 g/mol.",36,0.01,"g","m = nM = 0,20 × 180 = 36 g.","Dùng phép chia hoặc nhầm khối lượng mol của glucose.",["Dùng m = n × M.","m = 0,20 × 180 = 36 g."]),
S("Q178","carbohydrate",3,"Theo mô hình tráng bạc, 1 mol glucose tạo 2 mol Ag. Từ 0,05 mol glucose, tính số mol Ag tối đa.",0.1,0.001,"mol","n(Ag) = 2n(glucose) = 2 × 0,05 = 0,10 mol theo phương trình mô hình.","Dùng tỉ lệ 1:1 thay vì 1:2.",["Tỉ lệ mol glucose : Ag = 1 : 2.","n(Ag) = 2 × 0,05 = 0,10 mol."]),
S("Q179","carbohydrate",3,"Thủy phân hoàn toàn 0,50 mol mắt xích tinh bột (C₆H₁₀O₅) theo tỉ lệ 1:1 với glucose. Số mol glucose tối đa thu được là bao nhiêu?",0.5,0.001,"mol","Theo mô hình (C₆H₁₀O₅) + H₂O → C₆H₁₂O₆, một mol mắt xích tạo một mol glucose. Vì vậy thu 0,50 mol glucose.","Nhân hệ số n của polymer không đúng hoặc cho rằng một mắt xích tạo hai glucose.",["Tỉ lệ mắt xích : glucose = 1 : 1.","n(glucose) = 0,50 mol."]),
S("Q180","carbohydrate",1,"Một phân tử sucrose bị thủy phân tạo ra bao nhiêu phân tử monosaccharide?",2,0,"phân tử","Một phân tử sucrose gồm hai đơn vị monosaccharide liên kết với nhau; thủy phân giải phóng glucose và fructose.","Nhầm sucrose là monosaccharide hoặc đếm số nguyên tử carbon.",["Nhớ cấu tạo sucrose: glucose + fructose.","Một phân tử sucrose tạo hai phân tử monosaccharide."])
);
})();