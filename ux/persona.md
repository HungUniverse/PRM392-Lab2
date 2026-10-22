# Persona — FAP Attendance Mobile

Cập nhật: 22/10/2026 (Asia/Saigon). Hồ sơ P01 là **Primary Proto-Persona, trạng thái Assumed**. Tên, tuổi, hành vi và bối cảnh minh họa chưa được phỏng vấn/quan sát xác nhận. Phần Figma ngoài phạm vi cập nhật lần này. Xem [discovery và bằng chứng](discovery.md), [chuỗi truy vết](traceability.md) và [checklist](../SUBMISSION_CHECKLIST.md).

## P01 — Primary Proto-Persona đủ 12 trường lõi

| Trường bắt buộc | Nội dung |
| --- | --- |
| 01. Identity & Archetype | **Minh, 36 tuổi**, giảng viên FPT quản lý nhiều lớp, ưu tiên thao tác nhanh nhưng phải đối chiếu được kết quả. Tên và tuổi giả định để mô tả persona, không phải người tham gia nghiên cứu. |
| 02. Persona Priority | **Primary**: ba flow MVP đều phục vụ giảng viên chuẩn bị lớp, điểm danh và xử lý kết quả. Sinh viên/đào tạo là stakeholder liên quan, không mở rộng thành ứng dụng người dùng khác trong Lab 2 cá nhân. |
| 03. Usage Context | Trước giờ học kiểm tra lịch; trong lớp bị phân tán chú ý; sau giờ kiểm tra/sửa kết quả. Dùng Android dọc, có thể cầm một tay và gặp mạng yếu. A01, A02. |
| 04. Goals | Chọn đúng buổi để tránh ghi nhầm; hoàn thành ghi nhận với ít gián đoạn; sửa sai có truy vết và biết bản kết quả nào đã lưu. Các mục tiêu là kết quả mong muốn, không phải danh sách tính năng. |
| 05. Job to Be Done | **Khi bắt đầu hoặc kết thúc một buổi dạy, tôi muốn xác định đúng lớp, đối chiếu và hoàn tất kết quả điểm danh để tránh ghi nhầm và giải thích được những lần chỉnh sửa.** |
| 06. Current Behaviors | Giả định hiện dùng máy tính, markbook và trang FAP để tra lịch/đối chiếu; khi chưa chắc kết quả sẽ kiểm tra lại danh sách rồi cập nhật. Tần suất giả định: mỗi buổi dạy. Đây là giả thuyết A03 từ bối cảnh sản phẩm, chưa phải hành vi đã quan sát. |
| 07. Pain Points | Nhiều ngày/lớp/khung giờ dễ gây ghi nhầm; bảng rộng và tên dài khó đọc trên mobile; mạng yếu/thông báo không rõ khiến không biết có cần làm lại thao tác. A01, A02, A04. |
| 08. Motivations | Ưu tiên độ chính xác và khả năng kiểm soát; muốn hoàn thành trong giờ học mà không mất thời gian tìm nút; cần giải thích được vì sao kết quả thay đổi. Assumed A01, A05. |
| 09. Constraints | Thời gian ngắn, màn hình nhỏ, kết nối không ổn định; không giả định mọi giảng viên thành thạo kỹ thuật. Không gán bệnh lý/khuyết tật cho persona. Hỗ trợ chữ ≥14 sp, vùng chạm ≥48×48 dp, trạng thái có chữ/icon, cuộn khi bàn phím mở. A02, A06. |
| 10. Key Scenarios | **SC01:** đến lớp, mở đúng meeting, xem tiến độ và chốt sau xác nhận. **SC02:** nhận phản ánh sai điểm danh, tìm đúng SV/buổi, sửa với lý do, xem lại audit và xuất kết quả. Chi tiết dưới đây và F2/F3 trong user-flow. |
| 11. Success Criteria | Tìm đúng lớp/meeting ≤15 giây; mở QR ≤20 giây; sửa đúng P/A cùng lý do ≤30 giây. Hủy giữ nguyên, lỗi có đường phục hồi. Đây là chỉ tiêu cần đo, chưa phải kết quả đạt. |
| 12. Evidence & Status | **Assumed / chưa xác thực người dùng.** E01: hướng dẫn môn học; E02: ảnh prototype do sinh viên cung cấp; E03: phản biện ảnh. E01–E03 là nguồn tài liệu/artefact, không phải interview. Mọi suy đoán hành vi A01–A08 có câu hỏi kiểm chứng trong discovery. |

### Câu hỏi còn mở

- Giảng viên thực tế thường dùng thiết bị nào và mất thời gian ở bước nào?
- Họ hiểu “Slot học” và “Khung giờ” thế nào; mốc hai phút có gây nhầm không?
- Khi sửa điểm danh hoặc Drive lỗi, thông tin nào giúp họ tự tin kết thúc tác vụ?

Không cần tạo thêm persona chỉ để đủ số. Số lượng một Primary Persona phù hợp phạm vi Lab 2 cá nhân; không suy rằng sinh viên hoặc giảng viên khác có cùng nhu cầu.

## Phụ lục bối cảnh và chỉ tiêu chi tiết

## Người dùng mục tiêu

Giảng viên Trường Đại học FPT quản lý nhiều lớp trong học kỳ và cần tìm đúng lớp, điểm danh, kiểm tra lịch sử, sửa sai và xuất kết quả ngay trên điện thoại.

P01 đại diện nhóm hành vi này. Các nhu cầu dưới đây là giả định thiết kế từ yêu cầu dự án và bối cảnh FAP Attendance, chưa phải kết quả phỏng vấn hoặc khảo sát. Tuổi/tên ở phần hồ sơ là minh họa, không dùng để phân khúc hoặc khẳng định dữ liệu nhân khẩu học.

| Thuộc tính | Mô tả |
| --- | --- |
| Vai trò | Giảng viên Trường Đại học FPT |
| Công việc | Quản lý lớp, xem lịch dạy, điểm danh và đối chiếu kết quả |
| Thiết bị thiết kế | Điện thoại Android, sử dụng theo chiều dọc |
| Bối cảnh | Trước giờ học, trong lớp và sau giờ học; có thể cần thao tác nhanh hoặc gặp mạng không ổn định |
| Dữ liệu đầu vào | Markbook ODS/XLSX có lớp, MSSV, email, họ tên; MemberCode nếu có |
| Lưu trữ | File local-first, Google Drive tùy chọn, không dùng database |
| Hệ thống liên quan | Sinh viên check-in bằng trình duyệt; extension chuyển kết quả sang trang điểm danh trên máy tính |
| Phạm vi Lab 2 | Thiết kế UI/UX và handoff; prototype hiện tại dùng Stitch, Figma theo đề còn chưa hoàn tất; không phải app Android đã triển khai |

## Bối cảnh sử dụng

### Trước giờ học

Giảng viên mở S02 ở chế độ Danh sách lớp hoặc Lịch tuần để xác định lớp cần dạy. Danh sách giúp tìm mọi lớp, kể cả không có lịch trong tuần. Trong lịch, các lớp nằm trong ô: cột thứ Hai đến Chủ Nhật, hàng khung giờ 1–4. Bấm một ô phải mở đúng lớp và lần học tương ứng.

Khi chuẩn bị học kỳ, giảng viên import markbook, cấu hình ngày bắt đầu và lịch mặc định, rồi điều chỉnh số tuần, một hoặc hai slot mỗi tuần và ngày nghỉ/học bù cho từng lớp. Theo source hiện tại, chỉ đổi lịch khi lớp chưa có slot nào đang điểm danh hoặc đã chốt, kể cả slot quá ngày được tự chốt. Giao diện phải giải thích giới hạn này trước khi người dùng mất công nhập lại cấu hình.

### Trong giờ học

Giảng viên mở QR thường hoặc QR kèm mã bí mật và theo dõi số sinh viên đã có mặt. Sinh viên dùng trình duyệt trên điện thoại, không cần cài app, có hai phút để hoàn tất từ khi nhận challenge hợp lệ.

Giảng viên cần hiểu hai phút là thời hạn của từng sinh viên, không phải thời gian tự chốt cả lớp. Khi hoàn tất, giảng viên xác nhận chốt; ô chưa ghi nhận chuyển thành A và giao diện trở về lớp.

### Sau giờ học

Giảng viên kiểm tra P/A, tỷ lệ vắng và ghi chú. Nếu có sai sót, giảng viên đổi kết quả với lý do để giữ truy vết. Thiết kế S09 hiện có JSON dành cho extension desktop và CSV để trao đổi, chỉ cho slot đã chốt đủ P/A; lưu local mặc định, Drive tùy chọn. Đây là mục tiêu UI, chưa xác minh schema JSON tương thích extension hoặc tạo file/đồng bộ thật.

Khi mất mạng, giảng viên cần biết dữ liệu đã lưu local hay chưa. “Chưa đồng bộ Drive” không được diễn đạt như “mất dữ liệu”.

## Kết quả người dùng cần đạt

- Ghi nhận đúng người và đúng buổi học, không làm mất lịch sử khi cập nhật dữ liệu.
- Hoàn thành tác vụ với ít gián đoạn trên điện thoại; biết cách hủy hoặc phục hồi khi sai.
- Đối chiếu được chỉnh sửa và biết kết quả còn an toàn ở đâu khi sao lưu gặp lỗi.

Các giải pháp như QR, JSON/CSV, danh sách lớp và Drive thuộc đặc tả UI; không coi chính giải pháp là bằng chứng nhu cầu đã xác thực.

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
| Xuất JSON/CSV | Đã chọn slot chốt đầy đủ và định dạng | Bắt đầu xuất trong tối đa ba thao tác chính từ màn lớp, không tính hộp thoại hệ thống |
| Phục hồi import lỗi | File mẫu không có sheet hợp lệ | Hiểu nguyên nhân và tìm được thao tác chọn lại trong tối đa 30 giây |
| Hiểu thời hạn | Xem màn QR | Giải thích đúng hai phút là thời hạn của từng lượt sinh viên |
| Hiểu trạng thái lưu | Local đã lưu, Drive mất mạng | Hiểu dữ liệu vẫn còn và tìm được cách đồng bộ lại |

Khi kiểm thử, ghi thời gian, đường đi, lỗi và nhận xét thực tế. Loading mô phỏng trong Stitch hoặc Figma không phải phép đo hiệu năng mạng hoặc ghi file. Không ghi kết quả khảo sát hay kiểm thử nếu chưa thực hiện.
