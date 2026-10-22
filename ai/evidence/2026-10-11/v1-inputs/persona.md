# Persona — FAP Attendance Mobile

## Người dùng mục tiêu

Giảng viên Trường Đại học FPT quản lý nhiều lớp trong học kỳ và cần tìm đúng lớp, điểm danh, kiểm tra lịch sử, sửa sai và xuất kết quả ngay trên điện thoại.

Persona được mô tả theo nhóm người dùng, không gắn tên hoặc tuổi của một cá nhân. Các nhu cầu dưới đây là giả định thiết kế dựa trên yêu cầu dự án và nghiệp vụ source FAP Attendance cũ trong `Project_PRM393`, chưa phải kết quả phỏng vấn hoặc khảo sát. Cần xác nhận với giảng viên chấm bài rằng cách mô tả theo nhóm đáp ứng yêu cầu persona của Lab 2.

| Thuộc tính | Mô tả |
| --- | --- |
| Vai trò | Giảng viên Trường Đại học FPT |
| Công việc | Quản lý lớp, xem lịch dạy, điểm danh và đối chiếu kết quả |
| Thiết bị thiết kế | Điện thoại Android, sử dụng theo chiều dọc |
| Bối cảnh | Trước giờ học, trong lớp và sau giờ học; có thể cần thao tác nhanh hoặc gặp mạng không ổn định |
| Dữ liệu đầu vào | Markbook ODS/XLSX có lớp, MSSV, email, họ tên; MemberCode nếu có |
| Lưu trữ | File local-first, Google Drive tùy chọn, không dùng database |
| Hệ thống liên quan | Sinh viên check-in bằng trình duyệt; extension chuyển kết quả sang trang điểm danh trên máy tính |
| Phạm vi Lab 2 | Thiết kế UI/UX, prototype Figma và tài liệu handoff, chưa phải app Android đã triển khai |

## Bối cảnh sử dụng

### Trước giờ học

Giảng viên mở lịch tuần để xác định ngày, slot và lớp cần dạy. Các lớp nằm trong ô của thời khóa biểu: cột thứ Hai đến Chủ Nhật, hàng slot 1–4. Bấm một ô phải mở đúng lớp và lần học tương ứng.

Khi chuẩn bị học kỳ, giảng viên import markbook, cấu hình ngày bắt đầu và lịch mặc định, rồi điều chỉnh số tuần, một hoặc hai slot mỗi tuần và ngày nghỉ/học bù cho từng lớp. Theo source hiện tại, chỉ đổi lịch khi lớp chưa có slot nào đang điểm danh hoặc đã chốt, kể cả slot quá ngày được tự chốt. Giao diện phải giải thích giới hạn này trước khi người dùng mất công nhập lại cấu hình.

### Trong giờ học

Giảng viên mở QR thường hoặc QR kèm mã bí mật và theo dõi số sinh viên đã có mặt. Sinh viên dùng trình duyệt trên điện thoại, không cần cài app, có hai phút để hoàn tất từ khi nhận challenge hợp lệ.

Giảng viên cần hiểu hai phút là thời hạn của từng sinh viên, không phải thời gian tự chốt cả lớp. Khi hoàn tất, giảng viên xác nhận chốt; ô chưa ghi nhận chuyển thành A và giao diện trở về lớp.

### Sau giờ học

Giảng viên kiểm tra P/A, tỷ lệ vắng và ghi chú. Nếu có sai sót, giảng viên đổi kết quả với lý do để giữ truy vết. Có thể xuất CSV của slot đã chốt và đồng bộ Drive nếu đã kết nối.

Khi mất mạng, giảng viên cần biết dữ liệu đã lưu local hay chưa. “Chưa đồng bộ Drive” không được diễn đạt như “mất dữ liệu”.

## Mục tiêu

- Tìm đúng lớp và slot từ thời khóa biểu tuần.
- Import hoặc cập nhật markbook mà không âm thầm làm mất lịch sử.
- Cấu hình lịch riêng của lớp trước khi bắt đầu điểm danh.
- Mở QR, theo dõi kết quả và chốt có xác nhận rõ ràng.
- Đọc đầy đủ họ tên, MSSV, trạng thái P/A và ghi chú.
- Sửa sai có lý do, xem được kết quả trước/sau và thời điểm chỉnh sửa.
- Xuất đúng CSV của một lớp và một slot đã chốt.
- Phân biệt đã lưu local, chờ đồng bộ, đang đồng bộ và lỗi/xung đột.

## Khó khăn

- Nhiều lớp, ngày và slot làm tăng nguy cơ chọn nhầm ngữ cảnh.
- Lịch bảy cột bị thu nhỏ trên điện thoại sẽ khó đọc; bảng điểm danh toàn học kỳ có quá nhiều cột.
- Họ tên dài có thể bị cắt, gây khó đối chiếu sinh viên.
- Nút chốt thiếu mô tả có thể khiến giảng viên đánh A ngoài ý muốn.
- Thời hạn của sinh viên dễ bị nhầm với thời gian nhận điểm danh của cả lớp.
- Thông báo lỗi kỹ thuật hoặc thiếu cách thử lại làm gián đoạn thao tác.
- Một ô chỉ giữ một lớp sẽ che mất lớp khi trùng lịch.
- Thiếu phản hồi lưu/đồng bộ làm giảng viên không biết có cần thao tác lại hay không.

## Thói quen thiết bị và nhu cầu accessibility

Giả định giảng viên ưu tiên thao tác chạm ngắn và nhận biết nhanh ngày, giờ, mã môn/lớp. Không giả định mọi giảng viên có cùng mức độ thành thạo công nghệ.

- Nội dung tiếng Việt, chữ chính đề xuất 16 sp, không dưới 14 sp.
- Vùng chạm tối thiểu 48 × 48 dp, kể cả icon.
- P/A, lỗi và trạng thái phải có chữ hoặc icon, không chỉ màu.
- Họ tên được xuống dòng; chiều cao hàng tăng theo nội dung.
- Lịch tuần cuộn ngang trên mobile, nhãn slot giữ ngoài vùng ngày cuộn; thanh đổi tuần luôn dễ truy cập. Đây là yêu cầu thiết kế mobile, không khẳng định desktop đã có cùng hành vi.
- Roster hiển thị một slot tại một thời điểm và cuộn dọc; không thu nhỏ nguyên bảng desktop.
- Form cuộn được khi mở bàn phím; lỗi gần trường và giữ nội dung đã nhập.
- Chốt/xóa lớp có xác nhận, nêu phạm vi và hậu quả.
- Kiểm tra ở chiều rộng 360 và 412 dp, gồm tên dài, tuần trống và lớp trùng lịch.

## Problem statement

Giảng viên Trường Đại học FPT cần giao diện mobile giúp tìm đúng lớp và slot, điểm danh nhanh trong giờ học, nhận biết kết quả đã lưu và sửa sai có truy vết mà không phụ thuộc vào database.

## Tiêu chí thành công

Các chỉ tiêu là mục tiêu kiểm thử prototype, chưa phải kết quả đã đạt.

| Tác vụ | Điều kiện kiểm thử | Mục tiêu |
| --- | --- | --- |
| Tìm lớp | Biết ngày/slot, lớp xuất hiện trong tuần đang xem | Mở đúng lớp và meeting trong tối đa 15 giây |
| Mở QR | Có roster và slot hôm nay được phép mở | Từ dashboard tới trạng thái QR sẵn sàng trong tối đa 20 giây |
| Đổi tuần | Đang xem tuần khác tuần hiện tại | Trở về tuần hiện tại bằng một thao tác |
| Sửa kết quả | Đã xác định sinh viên và slot được phép sửa | Lưu P/A cùng lý do hợp lệ trong tối đa 30 giây |
| Xuất CSV | Đã chọn slot chốt đầy đủ | Bắt đầu xuất trong tối đa ba thao tác chính từ màn lớp, không tính hộp thoại hệ thống |
| Phục hồi import lỗi | File mẫu không có sheet hợp lệ | Hiểu nguyên nhân và tìm được thao tác chọn lại trong tối đa 30 giây |
| Hiểu thời hạn | Xem màn QR | Giải thích đúng hai phút là thời hạn của từng lượt sinh viên |
| Hiểu trạng thái lưu | Local đã lưu, Drive mất mạng | Hiểu dữ liệu vẫn còn và tìm được cách đồng bộ lại |

Khi kiểm thử, ghi thời gian, đường đi, lỗi và nhận xét thực tế. Loading mô phỏng trong Figma không phải phép đo hiệu năng mạng hoặc ghi file. Không ghi kết quả khảo sát hay kiểm thử nếu chưa thực hiện.
