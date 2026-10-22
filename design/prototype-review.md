# Prototype Stitch — Review và checklist kiểm thử

Ảnh gốc lưu 11/10/2026; cập nhật tài liệu 22/10/2026 (Asia/Saigon). Ngày giả lập trong UI: 24/09/2026.

Link hiện tại: [Stitch preview do sinh viên cung cấp](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951). Chưa xác minh quyền xem khi chưa đăng nhập hoặc tương tác. [Checklist nộp bài](../SUBMISSION_CHECKLIST.md) phân biệt tài liệu đã có với kết quả còn thiếu.

Nguồn: 12 screenshot người dùng gửi trong cuộc trò chuyện, chia Flow 1/2/3. Codex chỉ review ảnh tĩnh, chưa trực tiếp mở hoặc bấm prototype. Ảnh được sao chép nguyên bản vào repository; SHA-256 nguồn/đích đã so khớp khi sao chép. Không chỉnh ảnh, không dựng kết quả kiểm thử.

## 1. Chỉ mục bằng chứng

Các đường dẫn ở cột nguồn là tên file gốc trong thư mục clipboard tạm, không phải URL chia sẻ.

| Flow/state | Ảnh lưu | File nguồn `codex-clipboard-….png` |
| --- | --- | --- |
| F1 workspace | [S01](../assets/stitch/prototype-2026-10-11/f1-01-s01-workspace.png) | ccb49299-52d9-4f7e-8389-9e00d7a83dc8 |
| F1 import | [S03](../assets/stitch/prototype-2026-10-11/f1-02-s03-import.png) | 4aa75122-91c7-4de6-881d-7e232206c138 |
| F1 class list | [S02](../assets/stitch/prototype-2026-10-11/f1-03-s02-class-list.png) | b6466547-f4a5-470d-a254-fe15ba8239f3 |
| F1 cấu hình | [S05](../assets/stitch/prototype-2026-10-11/f1-04-s05-schedule.png) | 66a1c577-c461-4aad-95cc-dc7f76b07f65 |
| F2 attendance | [S04](../assets/stitch/prototype-2026-10-11/f2-01-s04-attendance.png) | 29240b62-c5fd-4c58-986c-eab7f477c933 |
| F2 QR | [S06](../assets/stitch/prototype-2026-10-11/f2-02-s06-qr.png) | c5bcc014-11c6-4a63-86a6-365e5ecfcea0 |
| F2 xác nhận | [Sheet](../assets/stitch/prototype-2026-10-11/f2-03-s06-confirm.png) | cc6cdc39-bfed-4754-a03e-f0ff28f29359 |
| F3 kết quả slot | [S08](../assets/stitch/prototype-2026-10-11/f3-01-s08-slot-results.png) | 65d1533e-587b-44dd-9aea-ae8b1b5283e6 |
| F3 sinh viên | [S07](../assets/stitch/prototype-2026-10-11/f3-02-s07-student.png) | c83603f2-e407-470b-8fb3-433ace5d525c |
| F3 sửa | [Sheet](../assets/stitch/prototype-2026-10-11/f3-03-s07-edit.png) | abfc35e1-1fda-4af6-95ba-cb77d2431f9b |
| F3 xuất | [S09](../assets/stitch/prototype-2026-10-11/f3-04-s09-export.png) | 008d1df5-3691-4671-bc10-ee6d398bb02a |
| F3 kết quả xuất | [Result](../assets/stitch/prototype-2026-10-11/f3-05-s09-export-result.png) | a06ba187-7bae-48f4-aa4a-f8b89b81b904 |

12 ảnh thể hiện 9 ID màn hình cùng các state/overlay; không phải 12 màn hình chính. Chưa có S10 mới trong bộ này. Screenshot chỉ chứng minh nội dung hiển thị, không chứng minh thứ tự điều hướng, lưu/persistence, quét QR hay đồng bộ thật. Review này là bản tổng hợp, không phải bản chép nguyên văn toàn bộ phản hồi chat.

## 2. Quan sát và việc cần xử lý

| ID | Quan sát từ ảnh | Xử lý/kiểm chứng cần làm | Trạng thái |
| --- | --- | --- | --- |
| R01 | F1 Slot 5 đang mở nhưng 26 P/4 A/0 chưa ghi; F2 bắt đầu 26 P/0 A/4 chưa ghi | Active có thể có A, không tự kết luận sai. Xác định fixture độc lập/reset hay trạng thái còn lại từ lần chốt | Chưa xác minh |
| R02 | F1 tỷ lệ lớp 95,8% chưa có mẫu số | Ghi công thức/phạm vi; fixture 4 slot chốt là 116/120 = 96,7%, sau chốt Slot 5 là 142/150 = 94,7% | Cần làm rõ |
| R03 | File import 30 SV, banner 3 lớp/90 SV | Có thể là tổng workspace sau merge; ghi rõ số mới nhập và tổng sau merge | Cần làm rõ |
| R04 | QR ghi “Giữ QR chạy ngầm” khi về lớp | Đổi thành “Về lớp — tạm dừng nhận check-in”; giữ slot active, không tự chốt | Cần sửa theo đặc tả |
| R05 | Hướng dẫn 2 phút chưa nói mốc bắt đầu | Ghi “Sau khi quét QR hợp lệ, sinh viên có 2 phút để nhập mã xác nhận” | Cần sửa nội dung |
| R06 | Ảnh F2 vẫn chọn Flow 1 trên thanh demo | Highlight Flow 2 khi đang chạy luồng này | Cần sửa trạng thái demo |
| R07 | Roster 30 SV chỉ hiện 3; lịch sử cá nhân 5 ghi nhận chỉ hiện 3 slot | Cho xem đủ bằng cuộn hoặc ghi rõ bản demo rút gọn; không để người xem hiểu là đầy đủ | Cần kiểm tra |
| R08 | Slot 4 đang P; mở sửa vẫn P và điền sẵn lý do trước | Chưa chứng minh A → P; chuẩn bị fixture phù hợp, lý do mới trống, kiểm tra Hủy/Lưu riêng | Chưa xác minh thao tác |
| R09 | Có nút Xem ghi chú nhưng không có ảnh sheet audit mới | Bổ sung trước/sau, lý do, thời điểm, người sửa và kiểm tra mở lại sau lưu | Thiếu bằng chứng |
| R10 | Tên file preview dài, kết quả là `attendance_slot04.json` | Dùng cùng tên, đúng định dạng ở preview/kết quả/chia sẻ | Cần sửa |
| R11 | F3 Slot 5 vẫn đang diễn ra | Nếu nối tiếp F2 đã chốt thì cập nhật; nếu fixture độc lập thì công bố/reset | Chưa xác minh |
| R12 | Kết quả xuất báo local và Drive thành công | Đây là trạng thái UI đã có, chưa chứng minh xuất/sync thật; cần thử nhánh bỏ Drive và Drive lỗi | Chưa xác minh thao tác |

Email Drive khác email workspace không tự động là lỗi. Nền sheet mờ và có lựa chọn Hủy/Tiếp tục là quan sát tích cực, nhưng không thay thế phép thử nút.

## 3. Checklist chạy prototype

Mã T01–T21 tương ứng các test dưới đây theo [traceability](../ux/traceability.md). [Validation plan](validation-plan.md) có đề bài không dẫn dắt và mẫu ghi thời gian/bằng chứng. Chỉ dùng [ảnh gốc đã nhận](screen-evidence.md). QA các mẫu Codex tạo ở lượt trước đã rút khỏi bộ nộp và không dùng để đánh dấu các test Stitch bên dưới.

Tất cả test dưới đây **chưa thực hiện bởi Codex**. Sau khi chạy, điền Đạt/Không đạt, kết quả thực tế và đường dẫn video/ảnh; không đánh dấu đạt chỉ vì màn hình tồn tại.

| Test | Thao tác | Kết quả mong đợi | Kết quả thực tế |
| --- | --- | --- | --- |
| F1-01 | Workspace → chọn file hợp lệ → import | S02 đúng số lớp/SV, có phản hồi thành công | Chưa kiểm thử |
| F1-02 | Chọn file sai → chọn lại file hợp lệ | Lỗi có phục hồi, không mất context, không báo thành công sớm | Chưa kiểm thử |
| F1-03 | SE1921: 10 → 11 tuần → Hủy → mở lại | Vẫn 10 tuần | Chưa kiểm thử |
| F1-04 | SE1921: 10 → 11 tuần → Lưu → mở lại | 11 tuần, tổng meeting/lịch cập nhật, có phản hồi | Chưa kiểm thử |
| F1-05 | Mở cấu hình SE1920 có active/closed | Giải thích khóa và không lưu được | Chưa kiểm thử |
| F2-01 | Reset F2 → lớp → mở QR | Đúng Slot 5, 26 P/4 chưa ghi, tiến độ 86,7% | Chưa kiểm thử |
| F2-02 | Chốt → Tiếp tục điểm danh | Đóng sheet, giữ kết quả và còn ở QR | Chưa kiểm thử |
| F2-03 | Chốt → Đồng ý chốt | S04 Đã chốt, 26 P/4 A/0 chưa ghi, không nhận thêm check-in | Chưa kiểm thử |
| F2-04 | Back khỏi QR trước chốt → mở lại | Không thêm A, slot active; chỉ nhận lại khi mở QR thành công | Chưa kiểm thử |
| F2-05 | QR chuẩn bị lỗi → Thử lại | Có loading → ready hoặc lỗi có cách tiếp tục; không dead end | Chưa kiểm thử |
| F3-01 | Sửa P/A, lý do rỗng hoặc toàn dấu cách → Lưu | Lỗi tại ô, không lưu/đóng sheet | Chưa kiểm thử |
| F3-02 | Đổi trạng thái → Hủy | Kết quả, thống kê, audit cũ giữ nguyên | Chưa kiểm thử |
| F3-03 | Đổi trạng thái thật → nhập lý do → Lưu | Cập nhật P/A và thống kê; mở note thấy audit mới | Chưa kiểm thử |
| F3-04 | Xuất JSON → xem kết quả → Back | Tên file/meeting giống preview; Back đúng lịch sử | Chưa kiểm thử |
| F3-05 | Chọn CSV → Xuất | Tên đuôi CSV, phản hồi đúng định dạng | Chưa kiểm thử |
| F3-06 | Bỏ chọn Drive → Xuất | Chỉ báo local thành công, không báo synced | Chưa kiểm thử |
| F3-07 | Local thành công, Drive lỗi/offline → thử lại | Local vẫn thành công, chờ/lỗi Drive rõ, không cần xuất lại | Chưa kiểm thử |
| F3-08 | Chọn slot chưa chốt để xuất | Chặn có giải thích, về đúng slot hoàn tất | Chưa kiểm thử |
| NAV-01 | Back mọi màn, đóng mọi sheet, đổi flow/reset | Không ngõ cụt, không nhầm lớp/slot, highlight flow đúng | Chưa kiểm thử |
| A11Y-01 | Viewport 360 và 412; tên/email dài, bàn phím | Không clip/tràn; cuộn tới CTA; navigation không che nội dung | Chưa kiểm thử |
| A11Y-02 | Đo chữ, contrast, vùng chạm thực tế | ≥14 sp; chữ thường ≥4,5:1; chữ lớn/control ≥3:1; chạm ≥48 dp | Chưa đo |

Ghi thời gian thao tác thật để đối chiếu mục tiêu persona; không điền số ước lượng như số đo. Thu thập ảnh/video mới vào thư mục khác, không ghi đè 12 ảnh ban đầu.

## 4. Thứ tự tiếp tục

1. Sửa nội dung/số liệu R01–R12; chạy nhánh Hủy, Lưu và lỗi → phục hồi.
2. Kiểm tra quyền xem link Stitch đã có và bổ sung một video ba flow, nêu ngày giả lập và phần mô phỏng. Nếu link chưa chia sẻ được, dùng video và ảnh nhưng không tự coi là thay thế mọi yêu cầu nộp bài.
3. D01–D09 đã được chuẩn hóa thành lựa chọn trong đặc tả 22/10; áp dụng UI, xem lại với sinh viên và kiểm thử. Giữ đúng prompt/phản hồi lịch sử, không nhận đây là quyết định đã có từ trước.
4. Thử Flutter handoff với một người khác. Hai bảng token → Flutter/component → widget, sáu mục/màn và acceptance criteria S07 đã soạn; chưa có kết quả thử bàn giao.
5. Tập [slide/demo đã soạn](../presentation/output/demo-script.md), cập nhật sau khi có kết quả kiểm thử. Các hạng mục riêng Figma đang tạm gác, chưa ghi là hoàn thành hoặc được miễn.
