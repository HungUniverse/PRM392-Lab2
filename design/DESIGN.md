# Design brief — FAP Attendance Mobile

Cập nhật: 22/10/2026. Tài liệu mô tả UI mục tiêu; không xác nhận prototype đã đạt. Hiện trạng ở [checklist](../SUBMISSION_CHECKLIST.md). Chỉ dùng [màn hình sinh viên đã gửi](screen-evidence.md) và [screen/state matrix](state-coverage.md) để đối chiếu. Quy tắc token/component dưới đây là đặc tả, chưa chứng minh thư viện dùng chung hoạt động. Không dùng low-fi/UI kit Codex tạo ở lượt trước trong bộ nộp.

## Sản phẩm và phạm vi

Thiết kế Android cho giảng viên Trường Đại học FPT, kế thừa nghiệp vụ FAP Attendance trong source cũ `Project_PRM393`. Không dùng `Lab2/FAP-Helper` làm nền tảng. Học kỳ được cấu hình; FA26 chỉ là ví dụ.

Lab 2 tập trung thiết kế UI/UX, prototype và handoff. Sinh viên hiện dùng [Stitch](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951), tạm gác Figma; chưa xác minh quyền xem công khai và chưa có xác nhận miễn các mục Figma trong đề gốc. Không yêu cầu triển khai Android, OAuth, QR hoặc đồng bộ thật trong prototype. Mọi phản hồi mạng/check-in được mô phỏng và phải được khai báo đúng.

Người dùng và tiêu chí thành công ở [persona](../ux/persona.md); các sơ đồ ở [user flow](../ux/user-flow.md).

### Trong phạm vi

- Mở workspace, import/cập nhật ODS/XLSX, cấu hình học kỳ.
- S02 có Danh sách lớp và thời khóa biểu tuần dạng ô, bấm đúng lớp/meeting.
- Roster theo slot, thống kê P/A và tỷ lệ vắng.
- Cấu hình số tuần, một/hai slot mỗi tuần, nghỉ và học bù trước khi lớp bắt đầu điểm danh.
- QR thường hoặc QR + mã bí mật, theo dõi và chốt.
- Lịch sử lớp, chi tiết sinh viên, sửa có lý do và ghi chú.
- JSON dành cho extension desktop hoặc CSV trao đổi, một lớp/một slot đã chốt đủ P/A; file local-first và Drive tùy chọn.
- Quản lý/xóa lớp với xác nhận.

Không dùng database. Trang sinh viên và extension desktop là phần liên quan, không tính vào 10 màn hình giảng viên. Không thêm extension mobile hoặc tác vụ reset toàn bộ làm chức năng chính.

### Cơ sở và phần tổ chức lại cho mobile

Source desktop là cơ sở nghiệp vụ, không phải bằng chứng 10 màn hình mobile đã tồn tại. Chi tiết sinh viên, lịch sử lớp, xuất kết quả và Drive được tổ chức thành các màn độc lập để phù hợp điện thoại. Nhãn slot cố định khi cuộn ngang là yêu cầu mobile đề xuất. Lựa chọn JSON/CSV phản ánh UI S09 hiện tại; chưa xác minh schema xuất JSON với extension, không suy từ nhãn UI rằng source desktop đã hỗ trợ cùng giao thức.

Source hiện có cảnh báo sau import, chưa có bước preview trước khi lưu. Bản thiết kế này giữ luồng đó; nếu bổ sung preview cần ghi rõ là cải tiến UX. Các phản hồi lỗi/lưu trong thiết kế là yêu cầu giao diện, không phải cam kết source đã có rollback hoàn chỉnh.

## Màn hình và điều hướng

| ID | Màn hình | Nội dung / hành động chính |
| --- | --- | --- |
| S01 | Bắt đầu workspace | Email nhận diện, chọn markbook hoặc kết nối Drive |
| S02 | Danh sách lớp / thời khóa biểu tuần | Hai chế độ; mọi lớp, ngày × khung giờ; bấm đúng lớp/meeting |
| S03 | Import markbook | File, học kỳ, ngày bắt đầu, tuần, slot/tuần; import |
| S04 | Điểm danh lớp | Ngữ cảnh lớp/slot, roster, tổng P/A; mở QR hoặc xem kết quả |
| S05 | Cấu hình lịch lớp | Số tuần, ngày học, nghỉ/học bù; lưu lịch khi được phép |
| S06 | Điểm danh QR | QR, mode, mã bí mật tùy chọn, số có mặt; chốt |
| S07 | Chi tiết sinh viên | Lịch sử cá nhân, tỷ lệ vắng, note/audit; sửa có lý do |
| S08 | Lịch sử điểm danh lớp | Meeting theo ngày, trạng thái, tổng P/A; chọn kết quả |
| S09 | Xuất kết quả | Metadata, tổng P/A; chọn JSON/CSV, local/Drive và kết quả lưu |
| S10 | Google Drive và đồng bộ | Kết nối, nguồn markbook, trạng thái và đồng bộ/thử lại |

Khi có workspace, hai điểm đến cấp cao là Lịch tuần & lớp học (S02) và Drive (S10). Màn con có Back. Trước khi có workspace, S01/S03/S10 chỉ có điều hướng theo tác vụ; không cho mở một dashboard chưa có dữ liệu. Kết nối Drive không tự tạo lớp hoặc xác thực email giảng viên đã nhập.

S02 có Quản lý lớp dạng mở rộng để truy cập mọi lớp, gồm lớp không có meeting trong tuần, chỉnh lịch và xóa lớp. S08 luôn thuộc lớp đang chọn. Dialog, bottom sheet và loading/error không được tính thêm thành màn hình riêng.

## Bố cục trọng tâm

### S02 — Thời khóa biểu tuần

- Danh sách lớp là chế độ song song của S02, không phải màn hình thứ 11. Hiển thị lớp chưa bắt đầu/đang diễn ra và các meeting; mở được lớp ngoài tuần. Bảo toàn tuần/bộ lọc khi chuyển chế độ và Back.
- Cột thứ Hai–Chủ Nhật, có ngày/tháng; hàng slot 1–4.
- Slot 1: 07:00–09:15; slot 2: 09:30–11:45; slot 3: 12:30–14:45; slot 4: 15:00–17:15.
- Thanh đầu gồm học kỳ, khoảng ngày, tuần trước/sau, tuần này và chọn tuần.
- Ô meeting có mã môn/lớp, giờ, số thứ tự lần học trong môn, số sinh viên và trạng thái.
- Phân biệt `Slot 3 trong ngày` với `Slot học 5`; luôn kèm ngày/giờ khi cần xác nhận.
- Tô nổi ngày hiện tại bằng cam nhạt và nhãn Hôm nay; không coi cả ô là Present.
- Lấy meeting theo ngày thật, tôn trọng override, ngày nghỉ và học bù kể cả Chủ Nhật.
- Trùng lịch hiển thị tất cả meeting xếp dọc, không ghi đè. Hàng tăng chiều cao đồng bộ với cột nhãn slot.
- Bấm ô truyền class ID và meeting ID đến S04, không tự chọn một meeting khác.
- Ô trống dùng dấu gạch. Tuần trống có thông báo và hành động chọn tuần; không nói roster trống.
- Mobile giữ nhãn slot ngoài vùng ngày cuộn ngang, thanh đổi tuần ngoài vùng cuộn. Hiển thị dấu hiệu còn ngày ở ngoài vùng nhìn.
- Không ép bảy ngày vào 360 dp bằng cách giảm chữ. Không thêm phòng, tên GV, online/offline từ ảnh tham chiếu khi nguồn không có.

### S04 — Điểm danh lớp

Hiển thị một slot tại một thời điểm. Thứ tự nội dung: mã môn/lớp → chọn slot có ngày/giờ → trạng thái và thống kê → tìm sinh viên → roster.

Mỗi hàng có MSSV, họ tên đầy đủ, trạng thái `P · Có mặt`, `A · Vắng` hoặc `Chưa ghi nhận`, và icon note nếu có. Bấm sinh viên đến S07. Không mang nguyên bảng toàn học kỳ nhiều cột xuống mobile. Nút Mở QR chỉ có khi được phép; slot đã chốt ưu tiên xem kết quả/xuất.

### S06 — QR

QR đen trên trắng, có khoảng trống quanh mã, không chèn logo. Có mode QR thường/QR + mã bí mật, thời điểm đổi QR, mã bí mật nếu bật, số sinh viên có mặt và nút chốt.

Nội dung ngắn: `Mỗi sinh viên có 2 phút hoàn tất sau lượt quét hợp lệ.` Không đặt đồng hồ hai phút như deadline của cả lớp. Link sinh viên chưa sẵn sàng phải có trạng thái và thử lại; không đưa localhost, hướng dẫn tunnel dài hoặc mô phỏng Lab 1 vào khu vực chính.

## Quy tắc nghiệp vụ

| Nhóm | Quy tắc cần giữ |
| --- | --- |
| Workspace | Email nhập ở S01 chỉ nhận diện, không chứng minh quyền sở hữu hoặc tạo kiểm soát truy cập |
| Import | ODS/XLSX; đọc roster, bỏ cột điểm; MemberCode tùy chọn; lỗi sheet/dòng có thể thành cảnh báo nếu vẫn còn lớp hợp lệ |
| Import lại | Cùng học kỳ cập nhật theo nghiệp vụ merge, giữ lịch sử và lịch riêng của lớp cũ; lớp/SV thiếu trong file mới không tự bị xóa. SV thêm vào slot đã chốt được bổ sung A theo source |
| Lịch | Nhóm 1: thứ Hai/Năm; nhóm 2: thứ Ba/Sáu; nhóm 3: thứ Tư/Bảy. Chữ số thứ hai là slot 1–4. Một slot/tuần chọn một ngày trong nhóm |
| Cấu hình | Số tuần 1–52, slot/tuần 1 hoặc 2. Chỉ lưu đổi lịch khi mọi meeting của lớp còn upcoming; đã active/closed thì giải thích và chặn lưu |
| Session | Chỉ một slot active trên workspace; chỉ bắt đầu QR cho ngày hiện tại, không yêu cầu phải đúng phút bắt đầu; không mở slot đã chốt |
| QR/mã bí mật | QR đổi 15 giây; mã bí mật sáu chữ số giữ nguyên mỗi lần bật chế độ, bật lại tạo mã mới |
| Sinh viên | Challenge hai phút sau quét hợp lệ; session còn mở thì quét lại để nhận challenge mới. Email khớp roster; demo chưa xác minh quyền sở hữu. Firebase nếu cấu hình yêu cầu token và email đã xác minh |
| Chốt | Giữ P/A đã ghi, chỉ bổ sung A cho ô chưa có record; ngừng nhận và về S04 sau lưu thành công |
| Back khỏi QR | Không chốt, không tự thêm A; server/tunnel của trang QR dừng khi rời trang. Slot vẫn active nhưng không được báo QR còn nhận. Cùng ngày có thể mở QR lại để tiếp tục |
| Qua ngày | Khi app mở/kiểm tra lịch, slot quá ngày chưa chốt được hoàn tất, ô thiếu thành A và giữ kết quả đã có; không dùng ổ khóa thay P/A |
| Sửa | Chỉ active/closed, không sửa upcoming. Lý do không rỗng sau trim; lưu note và audit trước/sau, không áp ngưỡng ba ký tự |
| Lịch sử | Một JSON chính mỗi slot, revision và auditEvents cập nhật trong file; không hai file final/correction riêng. Note vẫn xem được sau ngày học |
| Tỷ lệ vắng | Số A / tổng meeting đã lên lịch, kể cả meeting tương lai; tổng bằng không thì giá trị 0 theo source, không chia cho 0 |
| Xuất | UI chọn JSON hoặc CSV cho một lớp/một meeting đã chốt, đủ P/A. Đổi định dạng đổi đuôi; preview/result/share cùng tên. Source CSV ghi exports local; JSON là mục tiêu UI cần xác minh schema extension. Hộp thoại chọn nơi lưu nếu thêm là cải tiến mobile. Hủy không báo thành công |
| Drive | Tùy chọn; phân biệt local-only/pendingSync/synced/conflict. Chặn thao tác đồng bộ lặp khi đang chạy; file không đổi không chủ ý tạo bản sao |
| Conflict | Không tự ghi đè; có bản conflict và thông báo cần kiểm tra. Không mô tả bộ merge/khôi phục cloud hoàn chỉnh như đã triển khai |
| Xóa lớp | Không xóa khi còn slot active; xác nhận và lưu trữ dữ liệu local, không xóa workbook nguồn. Không cam kết tự khôi phục hoặc xóa bản Drive nếu chưa kiểm chứng |

Không lưu QR token, OTP, mật khẩu hoặc Firebase ID token trong lịch sử/bằng chứng. Không mặc định có đăng nhập Google cho sinh viên hoặc giới hạn domain.

## Phong cách và nội dung

Trắng–cam là chủ đạo. Bề mặt trắng, nền phụ nhạt, chữ xám xanh đậm. Xanh lá/đỏ/xanh dương chỉ hỗ trợ trạng thái. Một hành động chính nổi bật theo trạng thái màn; thao tác phụ dùng outlined/text/menu.

Tone tiếng Việt trực tiếp, lịch sự. Dùng nhất quán: Slot, Có mặt, Vắng, Chưa ghi nhận, Đang điểm danh, Đã chốt, Đã lưu trên máy, Chờ đồng bộ. “Đã qua” là trạng thái thời gian, không phải P/A hoặc đã chốt. Ngày nghỉ được loại khỏi lịch, không thêm enum meeting giả.

Thông báo nêu nguyên nhân và cách tiếp tục:
- `Chưa có lịch dạy trong tuần này. Chọn tuần khác.`
- `Không thể đổi lịch vì lớp đã có slot bắt đầu hoặc đã chốt.`
- `Vui lòng nhập lý do chỉnh sửa.`
- `Đã lưu trên máy. Chưa đồng bộ được, hãy thử lại khi có mạng.`

Không hiển thị stack trace. Lỗi không xóa nội dung nhập và không báo thành công trước khi lưu.

## Design tokens

Mục tiêu là dùng tokens trong component, không chỉ trưng bày. Với Figma theo đề, cần Variables/styles thực tế; ở Stitch phải kiểm tra các màn dùng nhất quán. Chưa có bằng chứng thực thi đầy đủ của cả hai, không coi bảng token là đã đạt.

| Token màu | Giá trị | Vai trò |
| --- | --- | --- |
| color/primary | #C93C13 | Nút chính, link trên nền trắng |
| color/on-primary | #FFFFFF | Chữ trên nút chính |
| color/brand | #F4511E | Nhận diện, điểm nhấn |
| color/primary-soft | #FFF0E8 | Ngày hiện tại/vùng chọn |
| color/background | #FFF7F3 | Nền màn hình |
| color/surface | #FFFFFF | Card, input, dialog |
| color/text | #243047 | Chữ chính |
| color/text-secondary | #667085 | Chữ phụ |
| color/border | #D9DEE7 | Phân vùng nhẹ, không là dấu hiệu duy nhất của control |
| color/control-outline | #667085 | Viền control cần nhận biết |
| color/success | #16835D | Có mặt/thành công |
| color/error | #C93A2B | Vắng/lỗi |
| color/info | #2563B8 | Thông tin hỗ trợ |

Chữ trắng trên primary có tương phản tính toán khoảng 5,07:1; trên brand khoảng 3,48:1. Vì vậy không dùng chữ thường trắng trên brand. Đây là kiểm tra cặp màu đề xuất, không thay thế kiểm tra UI cuối.

Font Roboto hỗ trợ tiếng Việt:

| Token chữ | Size / line height | Weight |
| --- | --- | --- |
| type/heading | 24 / 32 | 700 |
| type/title | 20 / 28 | 600 |
| type/subtitle | 16 / 24 | 600 |
| type/body | 16 / 24 | 400 |
| type/supporting | 14 / 20 | 400 |
| type/button | 16 / 24 | 600 |
| type/secret | 32 / 40 | 700 |

Không cắt họ tên; tăng chiều cao thay vì giảm font. MSSV giữ một dòng khi đủ chỗ.

| Token nhóm | Giá trị | Cách dùng |
| --- | --- | --- |
| space/1–6 | 4, 8, 12, 16, 24, 32 | Padding/gap; màn và card 16, section 24 |
| radius/small | 8 | Chip |
| radius/medium | 12 | Button/input |
| radius/large | 16 | Card/dialog |
| size/touch-min | 48 | Vùng chạm tối thiểu |
| size/button-height | 52 | Nút chính |
| elevation/flat | Không shadow | Mặc định |
| elevation/card | X 0, Y 2, blur 8, spread 0, #243047 6% | Phân tầng nhẹ |
| elevation/overlay | X 0, Y 8, blur 24, spread 0, #243047 12% | Dialog |

## Component và trạng thái

Đây là đặc tả component mục tiêu. Theo yêu cầu Figma, component dùng Auto Layout, token và variants; màn hình dùng instance. Các cấu trúc Figma này chưa được xác minh; prototype Stitch không tự chứng minh đã có instances/Variables.

| Nhóm bắt buộc | Variants/states |
| --- | --- |
| Button | Default, pressed, disabled, loading; primary/secondary/text |
| Text field | Default, focused, filled, error, disabled |
| Card | Default, pressed khi bấm được |
| Navigation | Selected cho Lịch tuần và Drive |
| App bar | Default, có action |
| Dialog | Confirmation và cancel/error |
| Loading | Ít nhất một spinner/skeleton cấp màn hình |
| Empty | Icon, thông báo và CTA |
| Error | Nguyên nhân dễ hiểu, thông báo và thử lại |

Component bổ sung: MeetingCell, StudentRow, AttendanceStatus, NoteIndicator. Trạng thái thời gian/ngày hiện tại của MeetingCell độc lập với trạng thái chốt và P/A.

## Accessibility và responsive

- Frame chính 360 × 800, kiểm tra thêm rộng 412; light theme bắt buộc.
- Contrast chữ thường tối thiểu 4,5:1; chữ lớn/control cần nhận biết tối thiểu 3:1.
- Vùng chạm tối thiểu 48 × 48; nội dung tối thiểu 14 sp.
- Mọi icon tương tác có nhãn; P/A/lỗi không chỉ dùng màu.
- Dùng Auto Layout và Fill/Hug phù hợp; chữ dài không clip, form không bị bàn phím che.
- Lịch cuộn ngang, nhãn slot cố định ngoài vùng ngày; phần cuộn dọc gồm cả hai vùng để hàng không lệch.
- Điều khiển đổi tuần ngoài vùng cuộn ngang; navigation không che hàng cuối.
- Roster một slot, cuộn dọc. Search nếu có phải có clear và trạng thái không có kết quả.
- Từ 600 dp trở lên: mở rộng viewport để thấy nhiều ngày hơn, không phóng to font theo tỷ lệ; giới hạn chiều rộng form/QR và căn giữa. Mô tả trong handoff, không bắt buộc thêm frame.

## Prototype và bằng chứng

### Hiện trạng dùng Stitch

Giữ mã S01–S10 và ba flow Cấu hình / QR & chốt / Sửa & xuất. Thanh chọn Flow là điều khiển demo, không phải navigation sản phẩm. [12 ảnh prototype](prototype-review.md) đã lưu, chưa kiểm thử trực tiếp; thiếu ảnh S10 mới và các nhánh cần bổ sung. [Slide và kịch bản](../presentation/output/demo-script.md) đã soạn, chưa thay cho kết quả chạy thử.

### Yêu cầu Figma trong đề gốc — chưa hoàn tất/miễn

Figma cần đúng sáu page theo thứ tự: 01 User Flow, 02 Wireframe, 03 Final UI, 04 Design System, 05 Components, 06 Prototype. Giữ mã S01–S10 thống nhất. Có ba flow với starting point, happy path, nhánh thay thế; ít nhất một overlay, một loading → kết quả và một lỗi → phục hồi, không ngõ cụt. Việc chọn Stitch không tự đáp ứng các mục riêng Figma này; cần xác nhận giảng viên hoặc thực hiện bổ sung.

Lưu ảnh Stitch mọi phiên bản vào `assets/stitch/`; `assets/figma/` chỉ là vị trí dự kiến nếu có PNG UI cuối từ Figma. AI log giữ prompt/phản hồi nguyên văn, cần bằng chứng ít nhất ba vòng cải tiến khác vấn đề và quyết định accept/modify/reject có lý do; chưa xác minh đủ chuỗi bằng chứng. Không dùng ảnh desktop hoặc ảnh AI minh họa làm bằng chứng đã hoàn thành Figma. Bản lưu lịch sử trong `ai/evidence/` giữ nguyên, không cập nhật ngược nội dung cũ theo UI mới.

Dữ liệu công khai phải giả/ẩn danh, không token hoặc OAuth secret. Các yêu cầu kiểm tra ở đây chưa phải kết quả đã đạt; ghi kết quả thực tế vào `design-decisions.md`. Handoff mô tả đủ layout, components, states, interactions, navigation và constraints cho từng màn hình.
