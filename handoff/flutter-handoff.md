# Flutter Handoff — FAP Attendance Mobile

Ngày cập nhật: 22/10/2026 (Asia/Saigon). Bản bàn giao UI mục tiêu, **chưa kiểm thử với người nhận**. Không viết hoặc sửa Flutter trong bước Lab 2 này; tên widget là ánh xạ đề xuất, không chứng nhận code mobile hiện có.

## 1. Nguồn, phạm vi và quy ước

- Bộ bổ sung 22/10: [P01](../ux/persona.md), [Need → UI → Test](../ux/traceability.md), [màn hình gốc](../design/screen-evidence.md), [state coverage](../design/state-coverage.md). Chỉ dùng ảnh sinh viên đã gửi. Các đề xuất trong tài liệu không phải screenshot UI đã đổi.

- Đọc [screen-spec](../design/screen-spec.md) cho nội dung/fixture, [DESIGN](../design/DESIGN.md) cho tokens, [user flow](../ux/user-flow.md) cho sơ đồ, [review](../design/prototype-review.md) cho sai khác và [decisions](../design/design-decisions.md) cho hướng xử lý chưa chốt.
- 12 ảnh prototype trong review là ảnh hiện trạng, còn lỗi. Nếu ảnh khác đặc tả, không âm thầm sao chép lỗi; đối chiếu R01–R12 và hỏi lại điểm chưa chốt. Đã nhận [link Stitch](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951), chưa xác minh quyền xem hoặc tương tác. Chưa có ảnh S10 mới hoặc tài sản thiết kế cuối đã xác minh.
- Flutter dùng logical pixels cho bố cục; các số dp/sp ở tài liệu là mục tiêu thiết kế, không đọc kích thước từ ảnh đã phóng to. Giữ text scaling hệ thống, không scale toàn màn như bitmap.
- Mặc định light theme, Roboto; nền #FFF7F3, surface trắng. Padding màn/card 16, khoảng section 24, gap 8/12/16. Card radius 16; input/button 12; chip 8. Nút chính cao tối thiểu 52, vùng tương tác tối thiểu 48. Text/button tăng chiều cao khi chữ wrap.
- Top app bar và bottom navigation tách khỏi vùng cuộn. Safe area chống che bởi system bars; không đặt CTA bằng tọa độ tuyệt đối. Nội dung dài cuộn dọc; form/sheet phải cuộn được khi bàn phím mở.
- Width 360/412: một cột. Từ 600 trở lên: form/content tối đa 600 logical px, căn giữa; QR tối đa 320; grid dùng chiều rộng còn lại để thấy nhiều ngày, không phóng to font theo tỷ lệ. Các giới hạn wide này là đề xuất handoff, chưa đo trên prototype.
- Route context tối thiểu: workspace, học kỳ, class ID, meeting ID, student ID nếu có, màn nguồn/tuần/bộ lọc. Không truyền mã bí mật/QR token vào file lịch sử hoặc evidence.
- Tách meeting state (upcoming/active/closed), record state (P/A/chưa ghi), QR receiving state và sync state. Loading không tự mang nghĩa thành công. Không coi timestamp demo là timestamp thực.

## 2. Đặc tả từng màn hình

### S01 — Bắt đầu workspace

#### Layout

Một cột: logo/tên → mô tả ngắn → card email → CTA markbook → CTA Drive. Dùng khoảng giãn khi đủ chiều cao, nhưng cho cuộn trên màn thấp hoặc khi mở bàn phím.

#### Components và variants

WorkspaceHeader; EmailField default/focused/filled/error/disabled; PrimaryButton và SecondaryButton default/pressed/disabled/loading; InlineError.

#### States

Email trống/đã nhập/không hợp lệ; đang mở nguồn; lỗi nguồn có Thử lại. Không hiển thị dashboard đã import khi chưa có workspace.

#### User interactions và validation

Trim email, yêu cầu không rỗng và định dạng email; không xác thực quyền sở hữu, không áp domain restriction. Markbook mở S03; Drive mở S10. Chặn bấm lặp khi đang chuyển tác vụ.

#### Navigation và Back

S01 là điểm vào. Hủy chọn nguồn trở lại S01 giữ email; không báo đã kết nối/import. S10 trước workspace có Back về đây.

#### UI constraints và thích ứng màn hình rộng

Email được cuộn ngang trong ô nhập, không tràn card. Bàn phím không che CTA. ≥600: form căn giữa tối đa 600, không kéo nút rộng toàn tablet.

### S02 — Lịch tuần / Danh sách lớp

#### Layout

App bar học kỳ → thanh đổi tuần/chế độ → body grid hoặc class list → navigation Lịch & lớp / Drive. Grid có nhãn khung giờ ngoài vùng ngày cuộn ngang; cả nhãn và ô dùng chung độ cao hàng/cuộn dọc. Class list dùng card mở rộng chứa meeting.

#### Components và variants

WeekSwitcher, SegmentedControl selected/unselected; MeetingCell upcoming/active/closed và today độc lập; ClassCard collapsed/expanded; Navigation selected từng điểm đến; Empty/Error/Loading.

#### States

Có lớp, chưa có lớp, tuần trống, loading/error; lớp trùng giờ xếp đủ; thông báo import thành công có số nhập mới và tổng workspace phân biệt.

#### User interactions và validation

Đổi tuần chỉ thay viewport. Hôm nay đưa tuần/ngày hiện tại vào vùng nhìn. Meeting mở đúng S04; lịch sử S08, xuất S09 khi closed, cấu hình S05 khi được phép, import S03. Không coi một ô chỉ có duy nhất một lớp.

#### Navigation và Back

Giữ tuần, chế độ và vị trí cuộn khi từ màn con trở về. Tab Drive → S10; không tạo tầng Back mới mỗi lần đổi tab cấp cao. Danh sách lớp cho truy cập lớp không có meeting trong tuần.

#### UI constraints và thích ứng màn hình rộng

Không ép 7 cột bằng font nhỏ. Kích thước đề xuất: cột nhãn 64, mỗi ngày tối thiểu 128; row tăng theo nội dung/trùng lịch, nhãn và ô phải đồng bộ. ≥600 cho grid mở rộng để thấy nhiều ngày hơn. Tên lớp wrap, toolbar có thể xuống dòng.

### S03 — Import markbook

#### Layout

App bar Back → card file/Đổi → card học kỳ/ngày/tuần/tần suất → thông tin merge/cảnh báo → Hủy/Xác nhận. Form cuộn; CTA không che field cuối.

#### Components và variants

FileCard selected/error, TextField/DateField, FrequencySelector; InfoBanner; Button default/disabled/loading; screen Loading/Error.

#### States

Chưa chọn/đã chọn file, form lỗi, đang import, lỗi đọc/lưu, thành công có cảnh báo nếu còn lớp hợp lệ. Không mặc định mọi cảnh báo chặn workbook.

#### User interactions và validation

Chấp nhận ODS/XLSX; kiểm tra lớp hợp lệ, học kỳ/ngày bắt đầu, tuần nguyên 1–52, slot/tuần 1/2. Chọn lại phục hồi lỗi file. Import lại merge giữ lịch sử/lịch riêng; số workspace sau merge không gọi là số mới nhập.

#### Navigation và Back

Lưu thành công → S02; Hủy/Back → S01/S02/S10 nguồn, không thông báo thành công. Lỗi giữ form/context, có Thử lại và Hủy.

#### UI constraints và thích ứng màn hình rộng

Tên file dài wrap/hiển thị đầy đủ khi mở chi tiết; không mất đuôi định dạng. Hai CTA có thể xếp dọc nếu không đủ chỗ. ≥600 form tối đa 600, không đổi thứ tự nhập.

### S04 — Điểm danh lớp

#### Layout

App bar môn/lớp → card meeting/ngày/giờ → thống kê sĩ số/P/A/chưa ghi → QR và Lịch sử → search → danh sách sinh viên. Nội dung một slot, cuộn dọc; không nhét bảng toàn học kỳ vào điện thoại.

#### Components và variants

MeetingSummary upcoming/active/closed; StatTile; StudentRow P/A/unrecorded, note/no-note; SearchField; PrimaryButton QR hoặc xuất theo trạng thái; Empty/Error/Loading.

#### States

Lớp chuẩn bị, active 26 P/0 A/4 chưa ghi, closed 26 P/4 A/0; roster trống, search không có kết quả, loading/error. QR đã dừng nhận không đồng nghĩa meeting đã closed.

#### User interactions và validation

Sinh viên → S07, lịch sử → S08. QR chỉ cho meeting hôm nay chưa chốt và không xung đột session khác; xuất chỉ closed đủ P/A. Search có clear và empty state. Dấu note nêu Slot 4 nếu note thuộc Slot 4, không gắn nhầm slot đang xem.

#### Navigation và Back

Back → S02 giữ tuần; S06 quay về không tự thêm A. Sau chốt cập nhật summary/roster và tắt hành động mở QR. S07 quay lại giữ meeting/search.

#### UI constraints và thích ứng màn hình rộng

Họ tên xuống dòng, MSSV đọc được, row height linh hoạt. Hiện đủ roster bằng cuộn hoặc nhãn demo rút gọn. Stat tiles dùng wrap khi thiếu chỗ. ≥600 danh sách căn giữa tối đa 600, không kéo khoảng trống quá rộng.

### S05 — Cấu hình lịch lớp

#### Layout

App bar và badge quyền sửa → thông tin lớp/giới hạn → tuần/tần suất/ngày/giờ → ngoại lệ thêm/xóa → Hủy/Lưu. Banner locked nằm trước form.

#### Components và variants

PermissionBanner editable/locked; NumberField; DaySelector; TimeField; ExceptionRow holiday/makeup; Button pressed/disabled/loading; InlineError.

#### States

Editable SE1921; locked khi có active/closed; invalid form; saving; save error; saved. Locked không chỉ giảm opacity mà phải nói nguyên nhân và chặn lưu.

#### User interactions và validation

Tuần nguyên 1–52; tần suất 1/2, chọn ngày phù hợp; ngày ngoại lệ hợp lệ/không trùng. Nghỉ 15/10 và bù 18/10 là fixture. Hủy giữ cấu hình cũ; Lưu sinh lịch theo dữ liệu hợp lệ, cập nhật tổng meeting. Không hứa chỉ sửa lịch tương lai cho lớp đã bắt đầu.

#### Navigation và Back

Về S04 hoặc Quản lý lớp S02 đúng nguồn. Back/Hủy khi chưa lưu không thay cấu hình. Không giữ một lịch mới trong màn nguồn nếu tác vụ save lỗi.

#### UI constraints và thích ứng màn hình rộng

Nhãn ngoại lệ wrap; nút Xóa có hit area ≥48. Form không bị keyboard che. ≥600 form tối đa 600; không chia hai cột nếu làm sai thứ tự đọc.

### S06 — Điểm danh QR

#### Layout

App bar context/Live → mode → QR → mã bí mật nếu dùng → hướng dẫn → tiến độ → Chốt/Về lớp. QR là hình vuông, đen trên trắng, có quiet zone; không chèn logo. Sheet xác nhận phủ nền, chứa slot/lớp/số ô sẽ thành A và hai CTA.

#### Components và variants

QrPanel preparing/ready/error; ModeSelector; SecretCode; ProgressSummary; ConfirmSheet default/saving/error; Primary/SecondaryButton. Chỉ báo Live khi đường nhận sẵn sàng.

#### States

Chuẩn bị, ready, lỗi/thử lại, confirmation, saving/error; closed hiển thị tại S04. Prototype có thể mô phỏng, không chứng nhận QR quét được hoặc sinh viên thật check-in.

#### User interactions và validation

QR đổi 15 giây, mã 6 số giữ trong một lần bật chế độ. Hai phút tính riêng từ quét hợp lệ. Tiếp tục đóng sheet giữ dữ liệu; Đồng ý giữ P/A đã có, thêm A cho ô thiếu, ngừng nhận sau chốt thành công. Không tự chốt theo countdown 2 phút.

#### Navigation và Back

Về lớp/Back: dừng nhận QR nhưng meeting active; cùng ngày có thể mở lại. Chốt thành công → S04 closed. Save lỗi không điều hướng như thành công và cần cách kiểm tra/thử lại. Hủy sheet không chốt.

#### UI constraints và thích ứng màn hình rộng

QR lấy chiều rộng khả dụng, không crop/biến dạng; tối đa 320 ở wide. Sheet cuộn khi nội dung dài, CTA wrap/xếp dọc nếu cần. Mode là lựa chọn có nhãn, không chỉ icon. Không hiển thị thanh Flow như chức năng app thật.

### S07 — Chi tiết sinh viên

#### Layout

App bar → identity card → tổng P/A/tỷ lệ → danh sách slot → note/edit sheets. Edit sheet nêu sinh viên, lớp, slot/ngày/giờ, kết quả hiện tại, radio trạng thái mới, lý do và Hủy/Lưu.

#### Components và variants

StudentHeader; StatTile; MeetingHistoryRow upcoming/active/closed; NoteIndicator; AuditSheet; EditAttendanceSheet; ReasonField empty/filled/error; Button loading/disabled.

#### States

Có lịch sử/trống; xem note; edit; lỗi lý do; saving/error/saved. Upcoming không sửa; active/closed sửa có lý do. Note vẫn xem sau ngày học.

#### User interactions và validation

Lý do mới không rỗng sau trim, không áp ngưỡng 3 ký tự hoặc tự dùng lại lý do cũ. Hủy không đổi kết quả/audit. Lưu cập nhật record và revision/audit trong JSON chính; audit thể hiện trước/sau, lý do, thời điểm, người sửa. Tỷ lệ A/tổng meeting lên lịch, không chia số đã chốt; mẫu số 0 hiển thị 0, không NaN.

#### Navigation và Back

Đóng sheet → S07; Back → S04 hoặc S08 nguồn giữ meeting/filter. Sau lưu cập nhật các màn liên quan, không chỉ đổi chip cục bộ.

#### UI constraints và thích ứng màn hình rộng

Tên/email wrap; lý do multiline tăng chiều cao/cuộn. Sheet xử lý keyboard inset, luôn tới Lưu/Hủy được. ≥600 sheet/dialog tối đa 600, không phóng toàn chiều rộng; lịch sử phải đủ hoặc ghi rõ rút gọn.

### S08 — Lịch sử lớp / Kết quả slot

#### Layout

App bar → tổng và mẫu số → filters → meeting cards. View kết quả slot: app bar context → 30 SV/28 P/2 A → search/roster, note badge và export. Đây là view con của S08, không màn chính thứ 11.

#### Components và variants

SummaryCard; FilterChip selected/unselected; MeetingCard active/closed/note; StudentRow; Empty/Error/Loading; ExportButton enabled/disabled có giải thích.

#### States

History list, slot results, filter empty, no history, loading/error. Active được tiếp tục điểm danh, chưa xuất; closed đủ P/A được xuất và sửa có lý do.

#### User interactions và validation

Chọn đúng meeting rồi mở sinh viên S07 hoặc xuất S09. Filter không thay dữ liệu. Thống kê lớp dựa lượt P/tổng lượt SV của slot chốt, nêu rõ phạm vi; không nhầm với tỷ lệ vắng cá nhân A/20.

#### Navigation và Back

Kết quả Back → list S08; list Back → S04 nguồn. Sau edit/export trở lại cùng meeting/filter; số liệu cập nhật sau sửa/chốt, không dùng số hardcode khác fixture.

#### UI constraints và thích ứng màn hình rộng

Meeting title/ngày wrap, các nút không tràn. List cuộn, bottom spacing tránh navigation. ≥600 giới hạn list 600; filters có thể wrap, không thu nhỏ chữ.

### S09 — Xuất kết quả

#### Layout

App bar → meeting summary → nhóm radio JSON/CSV → tên file → local mặc định/Drive tùy chọn → Xuất. View kết quả có local status, tên/dung lượng/path, Drive status nếu chọn, Chia sẻ và Về lịch sử.

#### Components và variants

MeetingSummary closed/blocked; FormatOption selected/unselected; FilePreview; LocalStorageCard; DriveCheckbox; ExportButton loading/disabled; ResultCard local/Drive độc lập; RetryAction.

#### States

Blocked chưa chốt/chưa đủ P/A; ready; exporting; local error; local success; cloud pending/error/synced nếu có chọn. Checkbox bỏ chọn không được dẫn tới dòng đã đồng bộ.

#### User interactions và validation

Chỉ một meeting closed đủ P/A. JSON cho extension desktop, CSV cho trao đổi, không direct FAP API. Tên thống nhất preview/result/share; ví dụ `attendance_FA26_PRN232_SE1920_slot04_2026-09-21.json`. Đổi format đổi đuôi. Drive lỗi giữ kết quả local, retry backup không xuất lại. Share hủy không mất file.

JSON là mục tiêu UI hiện tại, chưa kiểm tra schema với extension. Khi triển khai cần đối chiếu hợp đồng dữ liệu thật; không coi bản prototype/ảnh thành công là file hợp lệ hoặc tích hợp đã chạy.

#### Navigation và Back

Back → S04/S08 nguồn; quản lý Drive → S10 rồi Back về S09 giữ lựa chọn. Kết quả Về lịch sử → S08 đúng lớp/meeting. Không hiển thị thành công khi hủy tác vụ xuất.

#### UI constraints và thích ứng màn hình rộng

Path và tên dài wrap ở ranh giới phù hợp, không cắt đuôi; không để code font quá nhỏ. Result có đủ text, không chỉ dấu xanh. ≥600 form/result tối đa 600; CTA phía cuối luôn truy cập được.

### S10 — Google Drive

#### Layout

App bar → thông tin local-first → tài khoản/kết nối → tệp chờ và lần sync → Đồng bộ/Thử lại → giải thích lỗi/conflict. Nếu nguồn import, có chọn markbook được quyền truy cập. Navigation cấp cao khi có workspace.

#### Components và variants

AccountCard disconnected/connected; SyncStatus local-only/pending/syncing/synced/error/conflict; FileQueueRow; Connect/Sync/RetryButton; Info/ErrorBanner; Navigation selected Drive.

#### States

Disconnected, connecting, connected idle, syncing, pending/offline, synced, auth/network error, conflict. Chưa có ảnh S10 mới trong bộ prototype hiện tại; bố cục này là mục tiêu bàn giao, không xác nhận màn cuối đã làm.

#### User interactions và validation

OAuth hủy/lỗi không tạo success; dùng local vẫn được. Bấm sync lặp bị chặn; không chủ ý tạo duplicate. Conflict không tự ghi đè/merge. Không hứa worker luôn chạy sau tắt ứng dụng, mã hóa/chữ ký hay truy cập toàn bộ Drive khi chưa có chứng cứ.

#### Navigation và Back

Chưa workspace Back → S01. Mở từ S09 Back → S09 giữ cấu hình. Tab cấp cao → S02 khi có workspace. Chọn file nguồn → S03. Không báo “FAP Cloud” hoặc đồng bộ trực tiếp cổng đào tạo.

#### UI constraints và thích ứng màn hình rộng

Email/path wrap, pending có số lượng và chữ trạng thái; lỗi không chỉ màu. ≥600 nội dung tối đa 600, queue cuộn; action và navigation không che hàng cuối.

## 3. Bảng ánh xạ token → Flutter

Các tên dưới đây là đề xuất tổ chức theme, chưa tạo code hoặc Variables/styles trong Figma. `ThemeData` tập trung theme; dùng `ColorScheme`/`TextTheme` cho vai trò chuẩn và `ThemeExtension` hoặc constants cho vai trò riêng, không hardcode màu ở từng màn. Tham khảo [ThemeData](https://api.flutter.dev/flutter/material/ThemeData-class.html) và [ThemeExtension](https://api.flutter.dev/flutter/material/ThemeExtension-class.html).

| Token | Giá trị mục tiêu | Ánh xạ đề xuất |
| --- | --- | --- |
| color/primary, on-primary | #C93C13, #FFFFFF | ColorScheme.primary / onPrimary |
| color/surface, text | #FFFFFF, #243047 | ColorScheme.surface / onSurface |
| color/background | #FFF7F3 | ThemeData.scaffoldBackgroundColor |
| color/text-secondary | #667085 | TextTheme supporting style hoặc extension semantic textSecondary |
| color/error | #C93A2B | ColorScheme.error; chọn onError có contrast phù hợp |
| color/brand, primary-soft | #F4511E, #FFF0E8 | Extension brand / primarySoft; brand không là nền chữ thường trắng |
| color/success, info | #16835D, #2563B8 | Extension success / info; background tint và on-color phải đo riêng |
| color/border, control-outline | #D9DEE7, #667085 | Extension divider / controlOutline; outline cho control cần nhận biết |
| type/heading | 24/32, 700 | TextTheme.headlineSmall tùy chỉnh |
| type/title | 20/28, 600 | TextTheme.titleLarge tùy chỉnh |
| type/subtitle | 16/24, 600 | TextTheme.titleMedium tùy chỉnh |
| type/body | 16/24, 400 | TextTheme.bodyLarge tùy chỉnh |
| type/supporting | 14/20, 400 | TextTheme.bodyMedium tùy chỉnh |
| type/button | 16/24, 600 | TextTheme.labelLarge và button theme tùy chỉnh |
| type/secret | 32/40, 700 | Extension secretTextStyle |
| space/1–6 | 4, 8, 12, 16, 24, 32 | Spacing constants/extension, Padding/SizedBox/gap |
| radius/small/medium/large | 8/12/16 | BorderRadius + component shape themes |
| size/touch-min, button-height | 48, 52 | Minimum constraints; cho phép cao hơn khi wrap/text scaling |
| elevation/flat | Không shadow | Elevation 0 |
| elevation/card | (0,2), blur 8, spread 0, #243047 6% | BoxShadow token, không map blur trực tiếp thành Material elevation |
| elevation/overlay | (0,8), blur 24, spread 0, #243047 12% | BoxShadow token hoặc theme sheet/dialog được so ảnh |

`TextStyle.height` là hệ số: line-height / font-size, ví dụ body 24/16 = 1,5; không nhập 24 làm hệ số. Font metrics/text scaling vẫn cần kiểm tra hiển thị thực tế. Nguồn: [TextStyle.height](https://api.flutter.dev/flutter/painting/TextStyle/height.html).

## 4. Bảng ánh xạ component → Flutter widget

Đây là hướng xây component tái sử dụng, không ép tên class triển khai và không chứng nhận variants/instances Figma đã tồn tại.

| Component | Widget/hướng ghép đề xuất | Variants và ràng buộc |
| --- | --- | --- |
| Button | FilledButton / OutlinedButton / TextButton | default, pressed, disabled, loading; spinner + nhãn; chống submit lặp |
| TextField | TextFormField + InputDecoration | default/focused/filled/error/disabled; validator và lỗi gần ô |
| Card | Card hoặc Material + InkWell | default/pressed nếu clickable; shape/token chung, không InkWell cho card chỉ đọc |
| Navigation | NavigationBar + NavigationDestination | selected cho S02/S10, không dùng trên mọi màn con |
| AppBar | AppBar + BackButton/actions | default/withAction; giữ context, hit area icon đủ |
| Dialog/Sheet | AlertDialog / showModalBottomSheet | confirm/cancel/error, loading; hủy không mutation; form sheet xử lý keyboard và cuộn |
| Loading | CircularProgressIndicator / LinearProgressIndicator | Có mô tả tác vụ; screen loading và button loading rõ, không success giả |
| Empty | Column + icon + text + action | no-class/no-week/no-search-result khác nhau |
| Error | Inline field error hoặc banner + retry button | Nguyên nhân và recovery, giữ dữ liệu nhập |
| StudentRow | Widget ghép Row/Column, Expanded/Flexible và status | P/A/unrecorded, note/no-note; tên dài tăng chiều cao |
| MeetingCard / MeetingCell | Widget ghép card + context/status + actions | upcoming/active/closed, today độc lập; ngăn export khi active |
| NoteIndicator / AuditSheet | IconButton có nhãn + sheet list audit | before/after/reason/time/actor; không thay P/A bằng icon lock |
| FormatOption | Radio chọn một giá trị + vùng chạm cả card | JSON/CSV; selected không chỉ màu, semantics đúng nhóm |
| DriveOption | Checkbox + label/account | optional; local mặc định không là công tắc tắt được |
| Timetable | Vùng cuộn ngang ngày và vùng nhãn đồng bộ hàng | Trùng lịch đủ ô; không hardcode chiều cao hàng làm lệch nhãn |
| ProgressSummary | LinearProgressIndicator + text counts | Có mẫu số; không dùng progress để nói dữ liệu đã lưu |

Sheet form cần quản lý chiều cao/scroll và focus, có thể dùng tùy chọn `isScrollControlled` của [showModalBottomSheet](https://api.flutter.dev/flutter/material/showModalBottomSheet.html); không tự giả định một tùy chọn xử lý mọi trường hợp keyboard/safe area.

## 5. Những điểm phải xác nhận trước triển khai

1. D01–D09 đã chọn trong đặc tả 22/10; cần áp dụng và kiểm thử R01–R12 trên prototype. Giá trị màu/kích thước trong handoff là token mục tiêu, chưa đo từ UI cuối Stitch.
2. Bổ sung S10 mới, xác minh quyền xem link Stitch, loading/error/recovery và bằng chứng sau chốt/sau save. Nếu các flow độc lập, công bố/reset fixture rõ.
3. Chốt cấu trúc JSON/CSV với extension trước tích hợp; không tự sinh schema từ screenshot hoặc coi path mẫu là đường dẫn hệ điều hành thật.
4. Xác nhận dữ liệu công khai là giả/ẩn danh. Không giữ QR secret, OAuth token, ID token trong tài liệu/tệp xuất/evidence.
5. Chưa có điều kiện miễn Figma, chưa kiểm thử 360/412 thực tế hoặc hỗ trợ truy cập. Handoff không thay thế tài sản thiết kế và yêu cầu nộp bài riêng.

## 6. Kiểm tra handoff với người khác

**Trạng thái: chưa thực hiện.** Không có tên người nhận, thời gian hoặc kết quả dựng màn hình để ghi là đã đạt.

Kịch bản đề xuất: nhờ một bạn dựng **S07 edit sheet** từ handoff và tài sản thiết kế, không hỏi miệng về hành vi. Kiểm tra empty reason → error, Hủy giữ cũ, Lưu đổi thật P/A, tên dài, bàn phím và 360/412. Nếu đề yêu cầu dùng Figma cho phép thử này, không tự thay Stitch mà coi đạt.

| Mục ghi nhận | Giá trị hiện tại |
| --- | --- |
| Người nhận / ngày thực hiện | Chưa có |
| Phiên bản tài liệu / link thiết kế đã nhận | Chưa ghi nhận |
| Màn hình / thời gian thực tế | Chưa thực hiện |
| Câu hỏi phải hỏi lại | Chưa ghi nhận; không đồng nghĩa không có câu hỏi |
| Thiếu sót tài liệu phát hiện | Chưa xác minh |
| Sửa tài liệu sau thử | Chưa thực hiện |

Ghi câu hỏi thực tế và cập nhật tài liệu tương ứng; không điền giả tên, thời gian, kết quả hoặc phản hồi của người khác.

## 7. Gói bàn giao và tiêu chí chấp nhận 22/10

Người nhận đọc theo thứ tự: P01/traceability → user-flow → màn hình gốc/state matrix → screen-spec → DESIGN → mục 2–4 của handoff. Nếu ảnh Stitch trái đặc tả, mở R01–R12 và hỏi lại. Không thay ảnh gốc bằng màn hình tự tạo, không tự sao chép lỗi vào bản dựng.

### Phép thử một màn: S07 edit sheet

1. Chuẩn bị Slot 4 đã chốt với 28 P/2 A, sinh viên đang P. Bản này dùng fixture độc lập để không lẫn trạng thái Slot 5.
2. Mở sheet: hiển thị đúng SV/lớp/meeting, kết quả cũ; lý do mới trống. Chọn A rồi Hủy: dữ liệu/audit cũ không đổi.
3. Mở lại, chọn A, để lý do chỉ có dấu cách: Lưu không đóng sheet, báo lỗi tại trường.
4. Nhập lý do mới rồi Lưu: thành 27 P/3 A; mở audit thấy P→A, lý do, thời điểm và người sửa theo dữ liệu demo; không coi tên demo là người dùng thật.
5. Saving khóa submit lặp; save-error giữ nội dung và có Thử lại. Bàn phím mở vẫn cuộn tới Hủy/Lưu; tên dài không mất MSSV. Kiểm 360/412, font và hit area.

Đây là acceptance criteria, chưa phải kết quả. Bài Lab 2 không yêu cầu bạn viết app Flutter hoàn chỉnh; phép thử handoff vẫn cần một người nhận thực tế để xác minh đặc tả đủ rõ.

### Theo dõi khoảng trống

| Phạm vi | Người phụ trách đề xuất | Điều kiện đóng |
| --- | --- | --- |
| Tài liệu, fixture, nội dung UI | Sinh viên SE193324 | Đối chiếu D/R, lưu bản đã dùng và ảnh sau áp dụng |
| Prototype và states | Sinh viên hoặc người chỉnh Stitch | T01–T21 liên quan có kết quả/bằng chứng |
| Câu hỏi khi dựng S07 | Người nhận handoff chưa được chỉ định | Ghi câu hỏi thật, cập nhật mục thiếu và retest |
| Duyệt học phần | Giảng viên/reviewer thực tế | Chỉ ghi tên/ngày khi họ đã đánh giá; Codex không tự phê duyệt |

Trạng thái hiện tại: các vai trò trên là phân công đề xuất; chưa có người nhận hoặc reviewer ký duyệt. Không có hạn hoàn thành được tự đặt thay sinh viên.
