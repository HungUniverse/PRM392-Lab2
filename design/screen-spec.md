# Screen Specification — FAP Attendance

Ngày cập nhật: 22/10/2026 (Asia/Saigon).

Đặc tả mục tiêu cho 10 màn hình, dựa trên [persona](../ux/persona.md), [user flow](../ux/user-flow.md), [design brief](DESIGN.md) và ảnh prototype người dùng cung cấp. Đây không phải xác nhận tất cả chức năng đã có hoặc đã kiểm thử. Các sai khác quan sát được nằm trong [biên bản review](prototype-review.md).

Theo lựa chọn hiện tại của sinh viên, tiếp tục prototype Stitch, tạm gác Figma. Không coi bằng chứng Stitch là bằng chứng hoàn thành các hạng mục riêng của Figma trong đề Lab 2. Không triển khai Flutter trong bước này.

[Link Stitch đã nhận](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951), chưa xác minh quyền xem/tương tác. Xem [checklist nộp bài](../SUBMISSION_CHECKLIST.md) cho tình trạng tài liệu và bằng chứng.

## Quy ước chung

Nguồn thiết kế: [P01 đủ 12 trường](../ux/persona.md), [Need → UI → Test](../ux/traceability.md), [màn hình sinh viên đã gửi](screen-evidence.md) và [ma trận states](state-coverage.md). Chỉ bổ sung diễn giải bằng tài liệu, không tạo UI hoặc chỉnh ảnh gốc. Khác biệt giữa đặc tả mục tiêu và ảnh hiện có được ghi ở review.

- `Slot 5/20` là lần học thứ 5 trong học kỳ; `Khung giờ 2 (09:30–11:45)` là giờ học trong ngày. Không dùng hai khái niệm thay nhau.
- Context đi cùng điều hướng: học kỳ, môn, lớp, meeting, sinh viên nếu có; Back giữ màn nguồn, tuần và meeting đã chọn.
- Trạng thái meeting: Chưa bắt đầu / Đang điểm danh / Đã chốt. Trạng thái sinh viên: P · Có mặt / A · Vắng / Chưa ghi nhận; không thêm L/Trễ.
- Thông báo thành công chỉ sau tác vụ thành công; loading không cho bấm lặp. Prototype mô phỏng phải được giới thiệu là mô phỏng, không chứng nhận ghi file, OAuth, QR hoặc Drive thật.
- Hủy không thay đổi dữ liệu đã lưu. Lỗi giữ nội dung, có nguyên nhân dễ hiểu và cách tiếp tục.
- Mục tiêu mobile: viewport 360 × 800 dp, kiểm tra thêm rộng 412; không thu nhỏ toàn màn dài để vừa chiều cao. Nội dung cuộn, chữ tối thiểu 14 sp, vùng chạm tối thiểu 48 × 48 dp, trạng thái không chỉ dựa màu. Chưa có kết quả đo UI cuối.
- Dialog/sheet và các trạng thái không được tính thêm thành màn hình chính. Thanh chọn Flow là công cụ demo, không phải điều hướng sản phẩm.

## Dữ liệu demo và cách đặt lại

Ngày giả lập là 24/09/2026, không phải ngày kiểm thử thực tế. Dữ liệu tên/MSSV/email cần được xác nhận giả hoặc ẩn danh trước khi công khai.

| Kịch bản | Dữ liệu đầu vào và kết quả mong đợi |
| --- | --- |
| F1 cấu hình | SE1921 chưa có meeting active/closed; bắt đầu 28/09/2026, 10 tuần, thứ Hai/Năm; nghỉ 15/10, bù 18/10 |
| F2 trước chốt | PRN232 · SE1920 · FA26, Slot 5 ngày 24/09, khung giờ 2; 30 SV = 26 P + 0 A + 4 chưa ghi |
| F2 sau chốt | Slot 5: 26 P + 4 A + 0 chưa ghi; Đã chốt, không nhận QR |
| F3 kết quả Slot 4 | Ngày 21/09, 28 P + 2 A; Bảo Long SE180123 có P và một ghi chú chỉnh sửa |
| Thống kê cá nhân | Bảo Long: Slot 1, 2, 4, 5 là P; Slot 3 là A; 4 P, 1 A, tỷ lệ vắng 1/20 = 5% |
| Tỷ lệ lớp, 4 slot chốt | 30 + 29 + 29 + 28 = 116 P / 120 lượt = 96,7% |
| Tỷ lệ lớp, sau chốt Slot 5 | 142 P / 150 lượt = 94,7%; không tiếp tục hiển thị 96,7% nếu tính cả 5 slot |

F1/F2/F3 có thể dùng fixture độc lập nhưng phải nói rõ và có cách đặt lại. Nếu chạy liên tục cùng dữ liệu, cập nhật trạng thái giữa các flow. Demo A → P của Slot 4 cần điểm bắt đầu 27 P/3 A và Bảo Long là A, rồi kết thúc 28 P/2 A; không sửa fixture đã là P thành P và gọi đó là A → P.

## Danh sách và ánh xạ flow

| ID | Màn hình | Flow |
| --- | --- | --- |
| S01 | Bắt đầu workspace | F1 |
| S02 | Lịch tuần / Danh sách lớp | F1, F2, F3 |
| S03 | Import markbook | F1 |
| S04 | Điểm danh lớp | F1 nếu mở lớp trước cấu hình; F2, F3 |
| S05 | Cấu hình lịch lớp | F1 |
| S06 | Điểm danh QR | F2 |
| S07 | Chi tiết sinh viên | F3; có thể mở từ F2 |
| S08 | Lịch sử lớp / Kết quả slot | F3 |
| S09 | Xuất kết quả | F3 |
| S10 | Google Drive | F3 tùy chọn; F1 nếu nguồn Drive |

## S01 — Bắt đầu workspace

- **Mục đích:** nhận diện workspace và chọn nguồn dữ liệu đầu tiên.
- **Nội dung:** tên sản phẩm, local-first, email nhận diện, Bắt đầu với markbook, Kết nối Google Drive tùy chọn.
- **Tương tác/validation:** email bắt buộc có định dạng hợp lệ; không coi là đăng nhập, không tự áp giới hạn domain. Markbook → S03; Drive → S10.
- **States:** trống, đã nhập, lỗi email, đang mở nguồn, lỗi nguồn có thử lại.
- **Điều hướng:** điểm vào chưa có workspace; hủy nguồn trở lại đây, không tạo dashboard giả thành công.
- **Tiêu chí kiểm tra:** lỗi gần ô email; bàn phím không che CTA; dùng local không cần Drive.

## S02 — Lịch tuần / Danh sách lớp

- **Mục đích:** tìm đúng lớp/meeting; truy cập lớp chưa có lịch trong tuần.
- **Nội dung:** học kỳ, tuần đang xem, tuần trước/sau/hiện tại; hai chế độ Lịch tuần và Danh sách lớp. Class card có mã môn/lớp, sĩ số, tiến độ; meeting có ngày, khung giờ, trạng thái và P/A/chưa ghi.
- **Tương tác:** meeting → S04 đúng context; lịch sử → S08; xuất meeting chốt → S09; cấu hình lớp chuẩn bị → S05; import → S03; tab Drive → S10.
- **States:** có dữ liệu, tuần trống, chưa có lớp, loading/error, class card thu gọn/mở rộng; thông báo import thành công có phạm vi số lớp/SV rõ ràng.
- **Điều hướng:** S02/S10 là cấp cao; Back từ màn con giữ tuần/chế độ xem. Grid mobile cuộn ngang ngày, không giảm font để ép 7 cột.
- **Tiêu chí kiểm tra:** lớp trùng lịch không ghi đè; nhãn thống kê nêu mẫu số; không gọi tiến độ đã ghi nhận là số slot đã chốt.

## S03 — Import markbook

- **Mục đích:** tạo/cập nhật dữ liệu học kỳ, giữ lịch sử khi import lại.
- **Nội dung:** tên file ODS/XLSX, kích thước, số SV/lớp phát hiện; Đổi file; học kỳ, ngày bắt đầu, số tuần, slot/tuần; mô tả merge; Hủy/Xác nhận.
- **Tương tác/validation:** file có dữ liệu lớp hợp lệ, ngày hợp lệ, tuần 1–52, tần suất 1 hoặc 2. Lỗi file cho chọn lại; lỗi form giữ giá trị. Merge không âm thầm xóa lịch sử/lịch riêng.
- **States:** chưa chọn, đã chọn, lỗi file/form, đang import, thành công có cảnh báo nếu có, lỗi lưu/thử lại.
- **Điều hướng:** thành công → S02; Hủy/Back → S01/S02/S10 đã mở, không báo thành công.
- **Tiêu chí kiểm tra:** phân biệt số trong file và tổng workspace sau merge; không mô tả số giả như kết quả phân tích file thật.

## S04 — Điểm danh lớp

- **Mục đích:** quản lý kết quả của một meeting, không hiển thị bảng toàn học kỳ quá rộng.
- **Nội dung:** môn/lớp/học kỳ; Slot n/tổng, ngày/khung giờ, trạng thái; sĩ số và P/A/chưa ghi; tìm kiếm, roster, note có số slot; QR/Lịch sử và xuất khi đủ điều kiện.
- **Tương tác:** chọn sinh viên → S07; QR → S06 nếu meeting hôm nay chưa chốt; lịch sử → S08; cấu hình → S05 nếu lớp được phép; xuất → S09 cho slot chốt đủ P/A.
- **States:** chuẩn bị, đang điểm danh, đã chốt, roster trống, không có kết quả tìm kiếm, loading/error.
- **Điều hướng:** Back → S02 giữ tuần; trở lại từ QR không tự chốt hoặc chuyển ô trống thành A.
- **Tiêu chí kiểm tra:** đủ 30 người hoặc ghi rõ demo rút gọn; họ tên dài xuống dòng. Đã chốt thì không mở lại QR; sửa có lý do vẫn truy cập được.

## S05 — Cấu hình lịch lớp

- **Mục đích:** cấu hình lịch trước khi lớp bắt đầu, giải thích rõ khi bị khóa.
- **Nội dung:** mã lớp, quyền sửa; ngày bắt đầu, số tuần, tần suất/ngày học, khung giờ; ngày nghỉ/học bù, thêm/xóa ngoại lệ; Hủy/Lưu.
- **Tương tác/validation:** tuần 1–52; tần suất 1/2; ngày hợp lệ, ngoại lệ có ý nghĩa và không trùng. Chỉ lưu khi toàn bộ meeting còn upcoming; không hứa sửa riêng tương lai khi lớp đã active/closed.
- **States:** editable, locked có nguyên nhân, form error, saving, save error, saved.
- **Điều hướng:** lưu thành công về màn lớp/Quản lý lớp đã mở; Hủy giữ cấu hình cũ. Lịch và tổng meeting cập nhật ở màn nguồn.
- **Tiêu chí kiểm tra:** thử 10 → 11 tuần với Hủy và Lưu riêng; SE1921 editable không bị lẫn với SE1920 đã chốt.

## S06 — Điểm danh QR

- **Mục đích:** trình chiếu QR, theo dõi check-in và chốt có xác nhận.
- **Nội dung:** lớp/slot/ngày; QR thường hoặc QR + mã bí mật; QR đen/trắng, khoảng trống quanh mã; đổi 15 giây; mã 6 chữ số; tiến độ; Chốt và Về lớp.
- **Tương tác:** mã bí mật giữ nguyên trong một lần bật chế độ. Mỗi sinh viên có 2 phút sau quét hợp lệ, không phải deadline chốt cả lớp. Chốt → sheet nêu số chưa ghi sẽ thành A; Tiếp tục đóng sheet không đổi kết quả.
- **States:** preparing, ready, connection error/retry, confirm sheet, saving, save error, closed ở S04.
- **Điều hướng:** Back/Về lớp → S04, dừng nhận QR, giữ slot active; không gọi là QR chạy ngầm. Đồng ý chốt thành công → S04 Đã chốt, giữ record P/A đã có và chỉ bổ sung A cho ô thiếu.
- **Tiêu chí kiểm tra:** 26/30 = 86,7%; sau chốt 26 P/4 A/0 chưa ghi. QR demo và số liệu động không chứng minh check-in thật.

## S07 — Chi tiết sinh viên

- **Mục đích:** xem lịch sử cá nhân và sửa sai có truy vết.
- **Nội dung:** họ tên, MSSV, email; môn/lớp; tổng P/A, tỷ lệ vắng A/tổng slot đã lên lịch; các slot; Xem ghi chú và Sửa P/A tại slot được phép.
- **Tương tác/validation:** note sheet có trước → sau, lý do, thời điểm, người sửa. Edit sheet có kết quả hiện tại và lựa chọn mới; lý do mới bắt buộc không rỗng sau trim. Không mặc định dùng lại lý do cũ. Hủy giữ nguyên; lưu cập nhật record và audit của cùng meeting, không tạo file correction riêng.
- **States:** lịch sử có/trống, note, edit, lý do trống, saving, save error, saved; upcoming chỉ xem.
- **Điều hướng:** đóng sheet về S07; Back → roster S04 hoặc kết quả S08 đúng nguồn/meeting.
- **Tiêu chí kiểm tra:** sau sửa cập nhật thống kê cá nhân/lớp và ghi chú; 4 P/1 A phải có lịch sử hoặc giải thích danh sách rút gọn, không chỉ 3 dòng như danh sách đầy đủ.

## S08 — Lịch sử lớp / Kết quả slot

- **Mục đích:** chọn meeting, đối chiếu kết quả và truy cập note/xuất.
- **Nội dung:** tiến độ, thống kê có mẫu số; danh sách slot với ngày/giờ, trạng thái, P/A và dấu hiệu chỉnh sửa. View kết quả slot có tổng, tìm kiếm và roster.
- **Tương tác:** slot active → tiếp tục S04; slot chốt → view kết quả cùng S08; sinh viên → S07; xuất → S09 đúng meeting.
- **States:** history list, slot results, empty/filter empty, loading/error; slot active chưa xuất được.
- **Điều hướng:** Back từ kết quả → lịch sử lớp; Back từ lịch sử → S04 nguồn; quay lại từ S07/S09 giữ meeting.
- **Tiêu chí kiểm tra:** Slot 4 = 28 P/2 A; note gắn đúng người/slot. Không tính view kết quả là một ID màn hình thứ 11.

## S09 — Xuất kết quả

- **Mục đích:** xuất một lớp/một slot đã chốt; hiểu rõ local và Drive là hai trạng thái riêng.
- **Nội dung:** học kỳ/môn/lớp/slot/ngày/giờ và P/A/chưa ghi; JSON dùng với extension, CSV trao đổi; tên file; local mặc định; Drive tùy chọn và tài khoản; nút Xuất.
- **Tương tác/validation:** chỉ xuất closed, đủ P/A. Định dạng đổi cả phần mở rộng tên file; tên preview và kết quả phải giống nhau. Lưu local thành công rồi mới báo đã lưu; Drive lỗi không yêu cầu xuất lại local. JSON phục vụ extension desktop, không cam kết app trực tiếp gửi vào FAP.
- **States:** blocked, ready, exporting, local error/retry, local success, Drive pending/error/synced nếu có chọn.
- **Giới hạn tích hợp:** lựa chọn JSON là đặc tả UI theo prototype; chưa xác minh schema với extension desktop hoặc tạo file thật. Không dùng nhãn “JSON cho extension” để khẳng định tương thích đã kiểm thử.
- **Điều hướng:** Back → S04/S08 nguồn; quản lý Drive → S10; kết quả có Chia sẻ tệp và Về lịch sử. Hủy chia sẻ không xóa file/đổi kết quả.
- **Tiêu chí kiểm tra:** Slot 4, 28 P/2 A/0 chưa ghi; tên thống nhất `attendance_FA26_PRN232_SE1920_slot04_2026-09-21.json`. Dung lượng và đường dẫn ở prototype chỉ minh họa nếu chưa có file thật.

## S10 — Google Drive

- **Mục đích:** kết nối nguồn/backup tùy chọn, phân biệt local và cloud.
- **Nội dung:** tài khoản, trạng thái kết nối, nơi sao lưu, lần đồng bộ, tệp chờ, Đồng bộ/Thử lại, chọn markbook nếu có. Email Drive có thể khác email nhận diện workspace.
- **Tương tác:** OAuth hủy/lỗi cho thử lại hoặc dùng local; đồng bộ loading không bấm lặp; offline giữ local, conflict không tự ghi đè hoặc merge. Chọn nguồn được quyền truy cập → S03.
- **States:** disconnected, connecting, connected idle, syncing, pending, synced, error, conflict. Không gọi Google Drive là FAP Cloud hoặc tích hợp cổng đào tạo.
- **Điều hướng:** chưa workspace Back → S01; có workspace → S02; nếu mở từ S09 thì Back về S09 giữ cấu hình xuất.
- **Tiêu chí kiểm tra:** không báo synced khi chưa thực hiện; không cam kết worker nền luôn chạy sau tắt app. Chưa có ảnh S10 trong bộ 12 ảnh prototype mới.

## Kiểm chứng và bước bàn giao

Checklist, sai khác và liên kết 12 ảnh: [prototype-review.md](prototype-review.md). Bổ sung bằng chứng thao tác trước khi đánh dấu đạt. Sau đó dùng đặc tả này để hoàn thiện [Flutter handoff](../handoff/flutter-handoff.md) với layout, components/variants, states, interactions, navigation và constraints; đây vẫn là tài liệu thiết kế, không phải yêu cầu viết app.
