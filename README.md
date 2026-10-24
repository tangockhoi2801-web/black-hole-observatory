# BLACK HOLE OBSERVATORY

Mô phỏng hố đen 3D tương tác bằng Three.js, WebGL và GLSL. Website dùng ES Modules từ CDN, không cần cài npm.

## Chạy trên máy tính

Mở thư mục dự án và chạy máy chủ HTTP:

```bash
python -m http.server 8000
```

Mở http://localhost:8000. Không mở `index.html` trực tiếp bằng `file://`, vì trình duyệt có thể chặn ES Modules.

## Điều khiển

- Kéo chuột để xoay; cuộn để zoom; bật Orbit để chủ động khám phá.
- Dùng menu Camera để chọn Cinematic, Orbit, Close-up, Wide Shot, Top View hoặc Side View.
- Slider điều chỉnh tỷ lệ khối lượng, spin, độ sáng và nhiệt sắc đĩa, mật độ hạt/sao, lensing, bloom và tốc độ thời gian.
- Các nút bật/tắt Disk, Particles, Jets, Starfield và Lensing cập nhật cảnh trực tiếp.
- Space: Play/Pause; R: reset; nút Fullscreen để mở toàn màn hình.
- Chế độ SCIENCE giảm bloom và giải thích các giả định của mô hình.

## Xuất bản

Repository được cấu hình GitHub Actions tại `.github/workflows/deploy.yml`. Mỗi lần push lên nhánh `main`, workflow sẽ xuất bản nội dung tĩnh qua GitHub Pages. Nếu lần chạy đầu tiên báo Pages chưa được bật, vào **Settings → Pages → Build and deployment → Source → GitHub Actions**, lưu cấu hình và chạy lại workflow trong tab **Actions**.

URL dự kiến: https://tangockhoi2801-web.github.io/black-hole-observatory/

## Giới hạn khoa học

Đây là mô phỏng hình ảnh tương tác, không phải bộ giải số thuyết tương đối rộng. Vùng tối và photon ring là hình học cách điệu; shader lensing làm biến dạng ảnh trong không gian màn hình, không ray trace đường đi ánh sáng theo metric Kerr; màu và độ sáng kiểu Doppler là phép gần đúng; spin không cập nhật một metric Kerr chính xác. Đĩa bồi tụ không giải từ thủy động lực học hay truyền bức xạ. Hai jet chỉ minh họa những hệ có dòng phản lực, không hàm ý mọi hố đen đều có jet.

## Tối ưu và xử lý lỗi

Nếu cảnh chậm, giảm mật độ hạt/sao và bloom, hoặc dùng trình duyệt có WebGL với tăng tốc phần cứng. Trang cần kết nối Internet để tải Three.js và addon từ CDN. Nếu không chạy, kiểm tra Console của trình duyệt và trạng thái workflow trong tab Actions.
