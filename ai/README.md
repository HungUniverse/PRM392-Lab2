# Chỉ mục AI và bằng chứng

Cập nhật 22/10/2026 (Asia/Saigon). Đọc [nhật ký hiện hành](ai-design-log.md), [iteration evidence](iteration-evidence.md) và [hiện trạng ngoài Figma](../NON_FIGMA_STATUS.md) trước khi kết luận trạng thái bài. Snapshot/manifest cũ giữ nguyên.

## Hiện trạng

- [Link prototype Stitch](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951) đã được sinh viên cung cấp; chưa kiểm tra quyền xem khi chưa đăng nhập hoặc bấm thử.
- [Repository Lab 2 hiện tại](https://github.com/HungUniverse/PRM392-Lab2) đã được sinh viên cập nhật ngày 22/10/2026; 124 file ở thời điểm kiểm tra khớp bộ local trước lượt khôi phục prompt. Các tệp bằng chứng mới của lượt này chưa được Codex push.
- [12 ảnh ba flow và review](../design/prototype-review.md) đã có; không phải video tương tác hoặc bộ V3 gốc.
- V0 có prompt theo xác nhận sinh viên dùng một lần; V1 có 9 ảnh, V2 có 7 ảnh thuộc S04/S05/S07. Đã [khôi phục nguyên văn prompt V1/V2/V2.1/V2.2/V3](evidence/recovered-prompts-2026-10-22/README.md), có bảng trước/sau và [xác nhận dùng nguyên văn](student-confirmations.md). V3 đã nhận bốn ảnh qua hội thoại; còn khôi phục tệp PNG gốc vào repo, không phải thiếu prompt hoặc sinh viên chưa làm vòng này.
- [Slide dùng ảnh gốc](../presentation/output/FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx) và [kịch bản](../presentation/output/demo-script.md) là bản trước lượt khôi phục prompt, không tự cập nhật nội dung theo tệp Markdown. Hiện trạng mới nhất ở [iteration evidence](iteration-evidence.md) và [xác nhận C01–C03](student-confirmations.md). Checklist prototype, 360/412, accessibility và component/token đã được sinh viên tự xác nhận ổn; không phải test/đo do Codex thực hiện.
- Theo yêu cầu mới, chỉ dùng màn hình sinh viên đã gửi. Low-fi/UI kit/ảnh QA do Codex tạo đã rút khỏi bộ nộp, không tính thành vòng sửa Stitch hoặc minh chứng đạt yêu cầu.

## Bộ lưu lịch sử — không sửa ngược theo hiện trạng mới

| Bộ | Nội dung | Cách đọc |
| --- | --- | --- |
| [V0](evidence/2026-10-11/README.md) | Prompt, phản biện, HTML/manifest và 23 PNG bản lưu chữ | PNG là tài liệu trình bày lại, không phải ảnh chat gốc |
| [V1](evidence/2026-10-11/README-v1.md) | 9 ảnh UI, phản biện, 12 PNG bản lưu chữ và snapshot đầu vào | Snapshot giữ nguyên byte để đối chiếu checksum |
| [V2](evidence/2026-10-11/README-v2.md) | 7 ảnh UI nguyên bản và nhận xét từng ảnh | Không suy ra 7 màn chính hoặc vòng cải tiến hoàn tất |

Các câu “chưa có link”, “V2/V3 chưa có bằng chứng” và quy tắc xuất CSV trong bản lưu mô tả thời điểm/phiên bản đó; không phải hiện trạng tổng hợp mới nhất. Không sửa prompt, phản hồi, manifest hoặc ảnh lịch sử để khớp UI mới. Những thay đổi hiện hành được ghi trong AI log.

## Đọc liên kết trong snapshot V1

Ba đường dẫn tương đối vốn trỏ tới cây `ux/` và `design/` gốc đã được bổ sung trang chỉ dẫn. Các trang này đưa về đúng bản snapshot, không đưa âm thầm sang tài liệu hiện hành:

- [Persona V1](evidence/2026-10-11/v1-inputs/persona.md).
- [Design brief V1](evidence/2026-10-11/v1-inputs/DESIGN.md).
- [User flow V1](evidence/2026-10-11/v1-inputs/user-flow.md).

Đọc bản hiện hành tại [persona](../ux/persona.md), [design brief](../design/DESIGN.md), [user flow](../ux/user-flow.md). Tên phiên bản trong manifest không chứng minh số lượt prompt hoặc việc đã gửi prompt lên dịch vụ.
