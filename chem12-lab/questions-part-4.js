(function(){
const {M,T,S}=window.CHEM12_QUESTION_FACTORIES;
const q=window.CHEM12_EXTRA_QUESTIONS;
q.push(
M("Q137","ester-lipid",1,"Nhóm chức đặc trưng của ester đơn chức là nhóm nào?","–COO–","–OH","–CHO","–NH₂","Ester carboxylic có nhóm chức –COO– nối phần acyl với gốc hydrocarbon qua oxygen.",["–OH là nhóm chức của alcohol và một số hợp chất khác.","–CHO là nhóm aldehyde.","–NH₂ là nhóm amino, không phải nhóm ester."]),
M("Q138","ester-lipid",2,"Phản ứng giữa carboxylic acid và alcohol trong điều kiện acid xúc tác thường tạo ra sản phẩm nào?","Ester và nước","Muối và hydrogen","Aldehyde và oxygen","Ketone và ammonia","Phản ứng ester hóa: RCOOH + R′OH ⇌ RCOOR′ + H₂O, thường cần acid xúc tác và đun nóng.",["Muối và hydrogen không phải sản phẩm tổng quát của phản ứng ester hóa.","Không có điều kiện tạo aldehyde và oxygen trong phản ứng này.","Ketone và ammonia không phải sản phẩm ester hóa carboxylic acid với alcohol."]),
M("Q139","ester-lipid",2,"Thủy phân ester trong môi trường kiềm (xà phòng hóa ester đơn chức) tạo ra cặp sản phẩm nào?","Muối carboxylate và alcohol","Carboxylic acid và alkene","Aldehyde và nước","Muối carbonate và alcohol","RCOOR′ + NaOH → RCOONa + R′OH. Trong môi trường base, carboxylic acid chuyển thành muối carboxylate.",["Acid tự do không phải sản phẩm cuối điển hình khi base còn dư.","Không có bước tạo alkene tổng quát.","Ester carboxylic không tạo muối carbonate theo phản ứng xà phòng hóa."]),
M("Q140","ester-lipid",1,"Chất béo về mặt cấu tạo hóa học là loại hợp chất nào?","Triester của glycerol với các acid béo","Muối của acid béo với sodium","Polymer của glucose","Ether của glycerol với alcohol","Chất béo là triacylglycerol, trong đó ba nhóm –OH của glycerol tạo liên kết ester với các acid béo.",["Muối sodium của acid béo là xà phòng, không phải chất béo.","Polymer glucose là tinh bột hoặc cellulose, không phải chất béo.","Chất béo chứa liên kết ester, không phải ether đơn giản."]),
M("Q141","ester-lipid",2,"Một phân tử triacylglycerol có bao nhiêu liên kết ester?","3","1","2","4","Glycerol có ba nhóm –OH, mỗi nhóm có thể tạo một liên kết ester với một acid béo, tổng cộng ba liên kết ester.",["Một là số liên kết ester trong một monoester.","Hai không đủ cho triester của glycerol.","Bốn vượt quá số nhóm –OH của glycerol."]),
M("Q142","ester-lipid",2,"Vì sao xà phòng có thể giúp dầu mỡ phân tán vào nước?","Phân tử có đầu ưa nước và đuôi hydrocarbon kị nước","Xà phòng biến dầu mỡ thành kim loại","Xà phòng làm nước mất tính phân cực","Xà phòng phản ứng tạo khí hydrogen với dầu mỡ","Đầu carboxylate ion hóa tương tác với nước; đuôi hydrocarbon tương tác với dầu mỡ. Các phân tử có thể tạo cấu trúc micelle giúp phân tán dầu.",["Dầu mỡ không bị biến thành kim loại.","Xà phòng không làm nước mất tính phân cực.","Không có phản ứng tạo hydrogen giữa xà phòng và dầu mỡ trong quá trình giặt rửa."]),
M("Q143","ester-lipid",2,"Vì sao xà phòng thường kém hiệu quả trong nước cứng?","Ca²⁺/Mg²⁺ tạo muối ít tan với anion của xà phòng","Nước cứng phá hủy hoàn toàn mọi phân tử xà phòng","Nước cứng làm xà phòng bay hơi","Ca²⁺ chuyển xà phòng thành ester","Ion Ca²⁺ và Mg²⁺ có thể tạo muối carboxylate ít tan, làm giảm lượng chất giặt rửa còn hoạt động trong dung dịch.",["Xà phòng không bị phá hủy hoàn toàn; một phần tạo kết tủa.","Muối không bay hơi như mô tả.","Không có phản ứng tạo ester giữa Ca²⁺ và xà phòng."]),
M("Q144","ester-lipid",3,"Thủy phân kiềm hoàn toàn một mol triacylglycerol cần tối thiểu bao nhiêu mol NaOH theo phương trình tổng quát?","3 mol","1 mol","2 mol","4 mol","Mỗi triacylglycerol có ba liên kết ester; mỗi liên kết ester tiêu thụ một mol NaOH trong phản ứng xà phòng hóa.",["Một mol NaOH chỉ đủ cho một liên kết ester.","Hai mol vẫn thiếu một mol base để phản ứng hết ba liên kết ester.","Bốn mol là dư so với tỉ lệ phản ứng tổng quát 1:3."]),
T("Q145","ester-lipid",2,"Đánh giá các nhận định về phản ứng ester hóa và thủy phân.","Xét ester đơn chức RCOOR′ và phản ứng với nước hoặc NaOH.",[
["Ester hóa giữa carboxylic acid và alcohol thường là phản ứng thuận nghịch.",true,"Phản ứng có cân bằng giữa acid, alcohol, ester và nước."],
["Acid sulfuric đặc có thể đóng vai trò xúc tác trong phản ứng ester hóa.",true,"Acid xúc tác giúp tăng tốc độ phản ứng; trong một số hệ còn hỗ trợ hút nước."],
["Thủy phân ester trong môi trường kiềm tạo muối carboxylate.",true,"Carboxylic acid sinh ra bị base chuyển thành carboxylate, khiến phản ứng tổng thể thuận lợi theo chiều tạo sản phẩm."],
["Thủy phân ester trong môi trường acid luôn được coi là phản ứng một chiều hoàn toàn.",false,"Thủy phân acid là quá trình thuận nghịch và có cân bằng với phản ứng ester hóa."]
]),
T("Q146","ester-lipid",2,"Đánh giá các phát biểu về chất béo.","Chất béo là triester của glycerol với các acid béo.",[
["Chất béo có thể chứa gốc acid béo no hoặc không no.",true,"Các acid béo trong triacylglycerol có thể có hoặc không có liên kết đôi C=C."],
["Chất béo không tan hoặc rất ít tan trong nước.",true,"Phần hydrocarbon lớn làm chất béo kém phân cực và không hòa tan tốt trong nước."],
["Một mol triacylglycerol có ba nhóm ester.",true,"Ba nhóm –OH của glycerol được ester hóa."],
["Tất cả chất béo tự nhiên đều có cùng thành phần acid béo.",false,"Thành phần acid béo khác nhau theo nguồn sinh học và điều kiện tự nhiên."]
]),
T("Q147","ester-lipid",2,"Đánh giá cấu tạo và hoạt động của xà phòng.","Xà phòng thường là muối sodium hoặc potassium của acid béo mạch dài.",[
["Đầu carboxylate có tính ưa nước.",true,"Đầu ion tương tác tốt với nước thông qua tương tác ion–lưỡng cực."],
["Đuôi hydrocarbon có tính kị nước và ưa dầu mỡ.",true,"Đuôi không phân cực tương tác với dầu mỡ và tránh môi trường nước."],
["Xà phòng có thể tập hợp thành micelle trong nước.",true,"Các đuôi kị nước quay vào trong, đầu ưa nước hướng ra ngoài."],
["Micelle chỉ hình thành khi không có nước.",false,"Micelle là tập hợp phân tử chất hoạt động bề mặt hình thành trong môi trường thích hợp, thường là nước."]
]),
T("Q148","ester-lipid",3,"Đánh giá các nhận định về chất giặt rửa tổng hợp và xà phòng.","Hai nhóm chất này đều có cấu trúc hoạt động bề mặt nhưng bản chất hóa học khác nhau.",[
["Xà phòng thường chứa anion carboxylate của acid béo.",true,"Ví dụ sodium stearate có phần đầu –COO⁻."],
["Một số chất giặt rửa tổng hợp vẫn hoạt động trong nước cứng tốt hơn xà phòng.",true,"Nhiều chất giặt rửa tổng hợp không tạo kết tủa không tan với Ca²⁺/Mg²⁺ như xà phòng."],
["Mọi chất giặt rửa tổng hợp đều có cùng cấu trúc hóa học.",false,"Chúng thuộc nhiều nhóm cấu trúc khác nhau, dù có tính hoạt động bề mặt."],
["Khả năng giặt rửa liên quan đến khả năng làm giảm sức căng bề mặt và nhũ hóa dầu mỡ.",true,"Chất hoạt động bề mặt giúp nước thấm ướt và phân tán chất bẩn dầu mỡ."]
]),
T("Q149","ester-lipid",2,"Đánh giá cách nhận biết và ứng dụng của ester.","Ester có nhiều ứng dụng làm dung môi, hương liệu và nguyên liệu tổng hợp.",[
["Một số ester có mùi trái cây đặc trưng.",true,"Nhiều ester phân tử nhỏ có mùi dễ nhận biết, được ứng dụng làm hương liệu."],
["Tất cả ester đều có mùi thơm dễ chịu.",false,"Mùi phụ thuộc cấu trúc; không thể khái quát mọi ester đều thơm hoặc an toàn khi ngửi."],
["Ethyl acetate là một ester được dùng làm dung môi.",true,"Ethyl acetate có khả năng hòa tan nhiều hợp chất hữu cơ và được dùng trong một số quy trình."],
["Công thức nhóm chức ester có thể dùng để phân biệt ester với alcohol đơn chức.",true,"Ester có nhóm –COO–, còn alcohol có nhóm –OH gắn với carbon no."]
]),
T("Q150","ester-lipid",3,"Đánh giá các phát biểu về phản ứng xà phòng hóa chất béo.","Một triacylglycerol phản ứng hoàn toàn với sodium hydroxide.",[
["Sản phẩm hữu cơ gồm glycerol và muối sodium của acid béo.",true,"Ba liên kết ester bị thủy phân trong môi trường kiềm."],
["Tỉ lệ mol triacylglycerol : NaOH là 1 : 3.",true,"Mỗi phân tử triester có ba liên kết ester cần ba mol base."],
["Nếu dùng thiếu NaOH thì chắc chắn toàn bộ chất béo phản ứng hết.",false,"NaOH là chất phản ứng; thiếu base có thể làm phản ứng không hoàn toàn."],
["Phản ứng xà phòng hóa là thủy phân ester trong môi trường kiềm.",true,"Đây là tên gọi phổ biến của phản ứng thủy phân ester bằng base."]
]),
T("Q151","ester-lipid",3,"Đánh giá ảnh hưởng của cấu trúc acid béo đến tính chất chất béo.","So sánh triacylglycerol giàu gốc acid béo no và mẫu giàu gốc acid béo không no.",[
["Liên kết đôi C=C trong gốc acid béo không no làm mạch kém thẳng hơn.",true,"Liên kết đôi cis thường tạo chỗ gấp khúc trong mạch hydrocarbon."],
["Nhiều dầu thực vật thường chứa tỉ lệ acid béo không no đáng kể.",true,"Thành phần cụ thể phụ thuộc loại dầu; nhiều dầu thực vật có tỉ lệ gốc không no cao."],
["Mọi chất béo chứa acid béo không no đều là chất lỏng ở mọi nhiệt độ.",false,"Trạng thái phụ thuộc thành phần và nhiệt độ; không thể nói mọi điều kiện đều lỏng."],
["Độ no và cấu trúc mạch ảnh hưởng nhiệt độ nóng chảy.",true,"Khả năng xếp khít của mạch và tương tác giữa các phân tử ảnh hưởng tính chất vật lí."]
]),
T("Q152","ester-lipid",2,"Đánh giá các nhận định về phương trình phản ứng ester.","Xét ethyl acetate CH₃COOC₂H₅.",[
["Ethyl acetate có thể tạo thành từ acetic acid và ethanol.",true,"CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O."],
["Thủy phân kiềm ethyl acetate tạo sodium acetate và ethanol.",true,"CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH."],
["Sản phẩm alcohol trong thủy phân ester luôn là methanol.",false,"Alcohol tạo thành phụ thuộc gốc alkyl R′ của ester; ethyl acetate tạo ethanol."],
["Nhóm –COO– nằm trong phân tử ester.",true,"Đây là nhóm chức đặc trưng của ester carboxylic."]
]),
S("Q153","ester-lipid",2,"Thủy phân kiềm hoàn toàn 0,25 mol ethyl acetate bằng NaOH. Số mol NaOH cần dùng là bao nhiêu?",0.25,0.001,"mol NaOH","Ethyl acetate là ester đơn chức; phương trình CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH có tỉ lệ 1:1.","Áp dụng nhầm tỉ lệ 1:3 của triacylglycerol cho ester đơn chức.",["Viết phương trình thủy phân kiềm đã cân bằng.","Tỉ lệ ester : NaOH = 1 : 1.","n(NaOH) = 0,25 mol."]),
S("Q154","ester-lipid",2,"Xà phòng hóa hoàn toàn 0,12 mol triacylglycerol. Tính số mol NaOH tối thiểu cần dùng.",0.36,0.001,"mol NaOH","Một mol triacylglycerol có ba nhóm ester nên cần ba mol NaOH. n(NaOH) = 3 × 0,12 = 0,36 mol.","Dùng tỉ lệ 1:1 mà không xét có ba liên kết ester trong phân tử.",["Tỉ lệ triacylglycerol : NaOH = 1 : 3.","n(NaOH) = 0,12 × 3 = 0,36 mol."]),
S("Q155","ester-lipid",3,"Một mẫu ethyl acetate có khối lượng 8,8 g. Biết M = 88 g/mol. Số mol ethyl acetate là bao nhiêu?",0.1,0.001,"mol","n = m/M = 8,8/88 = 0,10 mol.","Chia ngược M/m hoặc bỏ mất một chữ số thập phân.",["Dùng công thức n = m/M.","n = 8,8/88 = 0,10 mol."]),
S("Q156","ester-lipid",2,"Ester hóa 0,20 mol acetic acid với ethanol dư, giả sử hiệu suất tạo ester là 75%. Số mol ethyl acetate thực tế thu được là bao nhiêu?",0.15,0.001,"mol","Acetic acid là chất giới hạn; lượng lý thuyết ester là 0,20 mol theo tỉ lệ 1:1. Lượng thực tế = 0,20 × 75% = 0,15 mol.","Dùng 75 thay vì 0,75 hoặc nhân hiệu suất với chất dư.",["n lý thuyết ester = 0,20 mol.","n thực tế = 0,20 × 0,75 = 0,15 mol."]),
S("Q157","ester-lipid",3,"Xà phòng hóa hoàn toàn 0,10 mol tristearin theo tỉ lệ 1:3. Số mol sodium stearate tạo thành là bao nhiêu?",0.3,0.001,"mol","Một mol tristearin tạo ba mol sodium stearate. Do đó n(muối) = 3 × 0,10 = 0,30 mol.","Lấy số mol muối bằng số mol triester dù một phân tử có ba gốc acid béo.",["Viết sơ đồ: 1 mol triester → 3 mol muối acid béo + 1 mol glycerol.","n(muối) = 3 × 0,10 = 0,30 mol."]),
S("Q158","ester-lipid",1,"Một phân tử glycerol có bao nhiêu nhóm hydroxyl –OH có thể tham gia tạo ester?",3,0,"nhóm –OH","Glycerol có cấu tạo HO–CH₂–CH(OH)–CH₂–OH nên có ba nhóm hydroxyl.","Nhầm số nguyên tử carbon với số nhóm chức hoặc chỉ đếm hai nhóm ở hai đầu mạch.",["Đếm ba nhóm –OH trong công thức cấu tạo glycerol.","Vậy có 3 nhóm –OH."])
);
})();