(function(){
const {M,T,S}=window.CHEM12_QUESTION_FACTORIES;
const q=window.CHEM12_EXTRA_QUESTIONS;
q.push(
M("Q027","dien-hoa",1,"Trong pin Zn–Cu, chất nào là chất khử ở phản ứng tổng quát?","Zn","Cu²⁺","Zn nhường electron: Zn → Zn²⁺ + 2e⁻. Chất nhường electron là chất khử và bản thân bị oxi hóa.",["Cu²⁺ nhận electron nên là chất oxi hóa.","SO₄²⁻ chủ yếu là ion đi kèm, không bị oxi hóa trong phản ứng tổng quát.","Cu kim loại là sản phẩm tạo thành ở cathode, không phải chất khử ban đầu."]),
M("Q028","dien-hoa",2,"Trong pin galvanic Zn|Zn²⁺||Cu²⁺|Cu, electron đi qua dây dẫn ngoài theo chiều nào?","Từ điện cực Zn sang điện cực Cu","Từ điện cực Cu sang điện cực Zn","Từ cầu muối sang điện cực Zn","Không có electron chuyển động","Zn là anode, xảy ra oxi hóa và giải phóng electron; Cu là cathode, nhận electron để khử Cu²⁺.",["Chiều này ngược với chiều electron thực tế trong dây dẫn.","Cầu muối cho ion di chuyển, không phải đường truyền electron trong mạch ngoài.","Pin đang hoạt động tạo dòng electron trong mạch ngoài."]),
M("Q029","dien-hoa",1,"Trong pin điện hóa đang phát điện, phản ứng tại cathode là quá trình nào?","Khử","Oxi hóa","Trung hòa acid–base","Kết tủa","Cathode được định nghĩa là điện cực nơi xảy ra sự khử. Quy tắc này đúng cho cả pin điện hóa và bình điện phân.",["Oxi hóa xảy ra tại anode.","Trung hòa acid–base không phải định nghĩa cathode.","Kết tủa có thể xuất hiện trong một số hệ nhưng không xác định cathode."]),
M("Q030","dien-hoa",2,"Vai trò chính của cầu muối trong pin galvanic là gì?","Khép kín mạch ion và duy trì trung hòa điện trong hai ngăn","Dẫn electron trực tiếp giữa hai điện cực","Tạo ra electron mới cho phản ứng","Làm tăng khối lượng điện cực cathode","Cầu muối cho ion dịch chuyển để bù điện tích khi các bán phản ứng diễn ra, nhờ đó mạch điện được duy trì.",["Electron đi qua dây dẫn ngoài, không đi qua dung dịch cầu muối theo cách mô tả này.","Electron không được tạo ra từ cầu muối.","Khối lượng cathode có thể tăng do kim loại bám, nhưng đó không phải vai trò của cầu muối."]),
M("Q031","dien-hoa",2,"Điện phân dung dịch CuSO₄ với điện cực than chì trơ, ở cathode thường thu được chất nào?","Cu","SO₂","O₂","H₂SO₄","Cu²⁺ có thể nhận electron tại cathode: Cu²⁺ + 2e⁻ → Cu. Đồng kim loại bám trên điện cực.",["SO₂ không phải sản phẩm khử cathode trong hệ này.","O₂ hình thành do quá trình oxi hóa nước ở anode trong mô hình phổ thông.","H₂SO₄ không phải chất được tạo thành trực tiếp tại cathode."]),
M("Q032","dien-hoa",3,"Điện phân dung dịch NaCl đậm đặc với điện cực trơ, nếu chloride bị phóng điện ở anode thì khí nào được tạo ra?","Cl₂","H₂","Na","CO₂","Ở anode: 2Cl⁻ → Cl₂ + 2e⁻. Điều kiện dung dịch NaCl đậm đặc được nêu để xác định sản phẩm anode theo mô hình phổ thông.",["H₂ là sản phẩm khử ở cathode trong dung dịch nước.","Na kim loại không được điều chế từ dung dịch NaCl nước vì nước bị khử ưu tiên.","Không có nguyên tố carbon trong hệ."]),
M("Q033","dien-hoa",2,"Khi mạ một vật bằng đồng bằng phương pháp điện phân, vật cần mạ thường được nối với cực nào của nguồn điện?","Cực âm","Cực dương","Không nối với nguồn điện","Nối đồng thời cả hai cực","Vật cần mạ là cathode để ion Cu²⁺ nhận electron và bám thành Cu kim loại: Cu²⁺ + 2e⁻ → Cu.",["Cực dương là anode, thường dùng tấm đồng tan dần trong bể mạ.","Nếu không nối nguồn thì không có quá trình điện phân để mạ.","Nối đồng thời hai cực gây đoản mạch."]),
M("Q034","dien-hoa",3,"Một pin có thế điện cực chuẩn cathode +0,34 V và anode −0,76 V. Sức điện động chuẩn của pin bằng bao nhiêu?","1,10 V","0,42 V","−1,10 V","−0,42 V","E°pin = E°cathode − E°anode = 0,34 − (−0,76) = 1,10 V. Với phản ứng pin tự diễn biến theo chiều đã chọn, giá trị này dương.",["0,42 V là kết quả cộng/trừ sai dấu.","Đổi thứ tự anode và cathode làm sai dấu; chiều phản ứng đã cho tạo E° dương.","Độ lớn không phải 0,42 V."]),
T("Q035","dien-hoa",2,"Xét các nhận định về pin điện hóa và chiều chuyển động của ion.", "Một pin Zn–Cu gồm hai nửa pin nối bằng cầu muối và dây dẫn ngoài.",[
["Tại anode của pin Zn–Cu, Zn bị oxi hóa thành Zn²⁺.",true,"Zn → Zn²⁺ + 2e⁻; nguyên tử Zn nhường electron tại anode."],
["Trong dây dẫn ngoài, electron đi từ Cu sang Zn.",false,"Electron đi từ Zn (anode) sang Cu (cathode). Chiều dòng điện quy ước ngược chiều electron."],
["Cầu muối giúp giảm sự tích tụ điện tích trong hai ngăn pin.",true,"Ion trong cầu muối dịch chuyển để duy trì gần trung hòa điện tích khi ion sinh ra hoặc bị tiêu thụ."],
["Cathode là nơi xảy ra quá trình oxi hóa.",false,"Cathode luôn là nơi xảy ra quá trình khử; oxi hóa diễn ra ở anode."]
]),
T("Q036","dien-hoa",2,"Đánh giá các phát biểu về điện phân dung dịch.", "Điện phân dung dịch muối trong nước với điện cực trơ. Sản phẩm phụ thuộc ion, nồng độ và vật liệu điện cực.",[
["Trong điện phân, cathode luôn là nơi xảy ra sự khử.",true,"Cathode là tên gọi điện cực theo quá trình khử, không phụ thuộc dấu cực."],
["Ở cathode, cation nhận electron hoặc nước/H⁺ có thể bị khử tùy hệ.",true,"Các tiểu phân cạnh tranh nhận electron; cần xét bản chất ion và môi trường."],
["Điện phân mọi dung dịch muối đều tạo kim loại tại cathode.",false,"Một số cation hoạt động mạnh trong dung dịch nước không bị khử thành kim loại; nước có thể tạo H₂."],
["Anode của bình điện phân nối với cực âm của nguồn điện.",false,"Anode nối cực dương nguồn; tại đó xảy ra quá trình oxi hóa."]
]),
T("Q037","dien-hoa",2,"Xét lượng điện trong quá trình điện phân.", "Dòng điện không đổi I = 2,0 A chạy trong 10 phút.",[
["Thời gian phải đổi thành 600 s khi dùng Q = I.t.",true,"10 phút × 60 s/phút = 600 s."],
["Điện lượng đi qua bình là 20 C.",false,"Q = 2,0 × 600 = 1200 C, không phải 20 C."],
["Nếu cường độ dòng điện tăng gấp đôi và thời gian không đổi thì điện lượng tăng gấp đôi.",true,"Vì Q tỉ lệ thuận với I khi t không đổi."],
["Đơn vị của điện lượng là mol.",false,"Điện lượng có đơn vị coulomb (C); mol là đơn vị lượng chất."]
]),
T("Q038","dien-hoa",3,"Đánh giá các phát biểu về định luật Faraday.", "Một ion kim loại Mⁿ⁺ nhận n electron để tạo thành kim loại M.",[
["Số mol electron bằng Q/F.",true,"n(e) = Q/F, với F là hằng số Faraday."],
["Một mol Mⁿ⁺ cần n mol electron để tạo một mol M.",true,"Bán phản ứng Mⁿ⁺ + ne⁻ → M cho thấy tỉ lệ mol này."],
["Khi cùng I và t, khối lượng kim loại bám không phụ thuộc M và n.",false,"m = MIt/(nF), do đó khối lượng phụ thuộc khối lượng mol và số electron trao đổi."],
["Nếu thời gian tính bằng giờ thì có thể thay trực tiếp vào công thức Q = I.t mà không đổi đơn vị.",false,"Cần đổi thời gian về giây khi muốn Q có đơn vị coulomb."]
]),
T("Q039","dien-hoa",1,"Đánh giá các phát biểu về pin và bình điện phân.", "So sánh pin galvanic tự phát và bình điện phân dùng nguồn điện ngoài.",[
["Pin galvanic chuyển hóa năng lượng hóa học thành điện năng.",true,"Phản ứng oxi hóa – khử tự diễn biến tạo dòng electron trong mạch ngoài."],
["Bình điện phân dùng điện năng để thúc đẩy phản ứng không tự diễn biến theo chiều đang xét.",true,"Nguồn điện ngoài cung cấp năng lượng cho quá trình điện phân."],
["Anode của cả hai hệ đều là cực âm.",false,"Pin galvanic có anode âm, còn bình điện phân có anode dương."],
["Quá trình oxi hóa xảy ra ở anode trong cả hai hệ.",true,"Tên anode gắn với quá trình oxi hóa, không gắn cố định với dấu điện cực."]
]),
T("Q040","dien-hoa",3,"Xét điện phân dung dịch CuSO₄ bằng điện cực trơ.", "Dung dịch CuSO₄ được điện phân đủ lâu với điện cực than chì.",[
["Cu²⁺ có thể bị khử thành Cu ở cathode.",true,"Bán phản ứng cathode là Cu²⁺ + 2e⁻ → Cu."],
["Nước có thể bị oxi hóa tại anode tạo O₂.",true,"Với điện cực trơ, nước bị oxi hóa: 2H₂O → O₂ + 4H⁺ + 4e⁻."],
["Điện cực than chì trơ được giả định không tham gia tạo sản phẩm chính.",true,"Điện cực trơ chủ yếu dẫn điện; giả thiết này dùng cho mô hình phản ứng."],
["Ion SO₄²⁻ bị khử thành sulfur ở cathode.",false,"Sulfate không bị khử thành sulfur trong điều kiện điện phân nước thông thường ở mức phổ thông."]
]),
T("Q041","dien-hoa",2,"Đánh giá các phát biểu về phản ứng oxi hóa – khử.", "Xét phản ứng tổng quát Zn + Cu²⁺ → Zn²⁺ + Cu.",[
["Zn là chất khử vì nhường electron.",true,"Zn → Zn²⁺ + 2e⁻."],
["Cu²⁺ là chất oxi hóa vì nhận electron.",true,"Cu²⁺ + 2e⁻ → Cu."],
["Số oxi hóa của Zn tăng từ 0 lên +2.",true,"Mất electron làm số oxi hóa tăng."],
["Tổng số electron nhường và nhận trong phản ứng là khác nhau.",false,"Hai electron Zn nhường đúng bằng hai electron Cu²⁺ nhận."]
]),
S("Q042","dien-hoa",2,"Dòng điện 1,5 A chạy qua bình điện phân trong 8 phút. Tính điện lượng Q (C).",720,1,"C","Đổi 8 phút = 480 s. Sau đó Q = I.t = 1,5 × 480 = 720 C.", "Quên đổi phút sang giây hoặc nhầm công thức Q = I/t.",["t = 8 × 60 = 480 s.","Q = 1,5 × 480 = 720 C."]),
S("Q043","dien-hoa",2,"Điện lượng 19 300 C tương ứng với bao nhiêu mol electron? Lấy F = 96 500 C/mol.",0.2,0.001,"mol e⁻","Dùng n(e) = Q/F = 19 300/96 500 = 0,20 mol electron.", "Đảo phép chia hoặc dùng F với sai đơn vị.",["Áp dụng n(e) = Q/F.","Thay số: 19 300/96 500 = 0,20 mol."]),
S("Q044","dien-hoa",2,"Điện phân dung dịch AgNO₃, cathode xảy ra Ag⁺ + e⁻ → Ag. Nếu có 0,05 mol Ag⁺ bị khử hoàn toàn, số mol Ag tạo ra là bao nhiêu?",0.05,0.0001,"mol","Tỉ lệ mol Ag⁺ : Ag là 1 : 1 theo bán phản ứng. Vì vậy tạo 0,05 mol Ag.", "Nhầm một electron với một mol sản phẩm hoặc bỏ qua hệ số 1:1.",["Viết bán phản ứng Ag⁺ + e⁻ → Ag.","Tính theo tỉ lệ 1:1: n(Ag) = 0,05 mol."]),
S("Q045","dien-hoa",3,"Dùng dòng điện 2,0 A trong 9650 s để điện phân CuSO₄; cathode: Cu²⁺ + 2e⁻ → Cu. Tính khối lượng Cu bám (g), lấy M(Cu) = 64 g/mol và F = 96 500 C/mol.",6.4,0.05,"g","Q = 2,0 × 9650 = 19 300 C. n(e) = 19 300/96 500 = 0,20 mol; n(Cu) = 0,20/2 = 0,10 mol; m = 0,10 × 64 = 6,4 g.", "Quên chia đôi số mol electron vì Cu²⁺ cần 2e⁻; hoặc bỏ bước đổi Q.",["Q = I.t = 19 300 C.","n(e) = Q/F = 0,20 mol.","n(Cu) = n(e)/2 = 0,10 mol.","m(Cu) = 0,10 × 64 = 6,4 g."]),
S("Q046","dien-hoa",1,"Trong pin Zn–Cu, mỗi nguyên tử Zn nhường 2 electron. Khi 0,30 mol Zn bị oxi hóa hoàn toàn, số mol electron nhường là bao nhiêu?",0.6,0.001,"mol e⁻","Theo Zn → Zn²⁺ + 2e⁻, 1 mol Zn nhường 2 mol electron. Vậy n(e) = 2 × 0,30 = 0,60 mol.", "Lấy tỉ lệ 1:1 mà không nhìn hệ số electron.",["Viết bán phản ứng Zn → Zn²⁺ + 2e⁻.","n(e) = 2 × 0,30 = 0,60 mol."]),
S("Q047","dien-hoa",3,"Điện phân nóng chảy MgCl₂, cathode: Mg²⁺ + 2e⁻ → Mg. Muốn thu 0,15 mol Mg cần bao nhiêu mol electron?",0.3,0.001,"mol e⁻","Mỗi mol Mg cần 2 mol electron. Do đó n(e) = 2 × 0,15 = 0,30 mol.", "Đọc sai hệ số 2 ở bán phản ứng cathode.",["Viết Mg²⁺ + 2e⁻ → Mg.","n(e) = 2n(Mg) = 0,30 mol."])
);
})();