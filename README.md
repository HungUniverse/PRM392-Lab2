# FAP Attendance Mobile — Lab 2

Rà soát tài liệu: 22/10/2026 (Asia/Saigon). Đã sửa các mục ngoài Figma theo yêu cầu; không tự xác nhận hoàn thành kiểm thử hoặc đạt trên 80 điểm. [Bảng hiện trạng ngoài Figma](NON_FIGMA_STATUS.md) là điểm bắt đầu đọc bản mới.

- MSSV: SE193324
- Persona một dòng: P01 · Minh, 36 tuổi minh họa, giảng viên FPT quản lý nhiều lớp trên Android; Primary Proto-Persona, Assumed, chưa phỏng vấn.
- Phạm vi: Thiết kế UI/UX; hiện tiếp tục prototype Google Stitch, tạm gác Figma theo lựa chọn của sinh viên.
- Link Stitch: [FAP Attendance prototype](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951). Sinh viên cung cấp ngày 11/10/2026; chưa xác minh quyền xem khi chưa đăng nhập.
- Link repository Lab 2 hiện tại: [HungUniverse/PRM392-Lab2](https://github.com/HungUniverse/PRM392-Lab2). Sinh viên cập nhật ngày 22/10/2026; đã kiểm tra 124 file khớp bộ local trước lượt khôi phục prompt. Các tệp bằng chứng prompt/xác nhận bổ sung trong lượt mới này chưa được Codex push.
- Link Figma: Tạm gác theo lựa chọn của sinh viên; chưa có xác nhận được miễn yêu cầu trong đề.
- Trạng thái mới nhất: P01 đủ 12 trường; có discovery/traceability, ba flow, chỉ mục ảnh gốc S01–S10, state matrix, handoff sáu mục/màn và hai bảng ánh xạ. Chỉ dùng màn hình sinh viên gửi. Prompt ba vòng chính cùng V2.1/V2.2 đã khôi phục; còn file PNG V3 gốc. Checklist prototype, 360/412, accessibility và component/token được sinh viên xác nhận ổn (Reported), Codex chưa chạy/đo lại. Low-fi riêng, nghiên cứu người dùng và thử handoff vẫn chưa có bằng chứng riêng.

## Cấu trúc tài liệu

- [Hiện trạng ngoài Figma](NON_FIGMA_STATUS.md): những gì đã sửa, kiểm tra thật và những bằng chứng còn cần bổ sung.
- [Persona P01](ux/persona.md): Primary Proto-Persona đủ 12 trường, tên/tuổi minh họa; vấn đề và tiêu chí thành công, không phải người đã khảo sát.
- [Discovery](ux/discovery.md): stakeholder, evidence/assumption, affinity synthesis trên giả thuyết, coverage và kế hoạch nghiên cứu.
- [Traceability](ux/traceability.md): Need → User story → Flow → Screen → Decision → Test; ánh xạ T01–T21 với test cũ.
- [User flow](ux/user-flow.md): Cấu trúc điều hướng và ba luồng mục tiêu.
- [Design brief](design/DESIGN.md): Phong cách, tokens và quy tắc thiết kế.
- [Screen spec](design/screen-spec.md): Đặc tả S01–S10, gồm JSON/CSV và Drive tùy chọn.
- [Prototype review](design/prototype-review.md): Review 12 ảnh, R01–R12 và checklist chưa đánh dấu đạt.
- [Design decisions](design/design-decisions.md): D01–D09 đã chọn trong đặc tả ngày 22/10, D10 ghi phạm vi công cụ; accessibility và responsive vẫn tách kết quả tham chiếu khỏi Stitch.
- [Bộ màn hình gốc](design/screen-evidence.md), [state coverage](design/state-coverage.md): S01–S10 và các trạng thái đã nhận; không tạo thêm UI hoặc đổi ảnh high-fi thành low-fi.
- Quy tắc token và chín nhóm component nằm trong [DESIGN](design/DESIGN.md), hiện là đặc tả. Mẫu HTML/ảnh do Codex tạo ở lượt trước đã rút khỏi bộ nộp, không dùng làm minh chứng đạt yêu cầu.
- [Validation plan](design/validation-plan.md): task không dẫn dắt, mẫu ghi kết quả, UI checklist và retest.
- [Nhật ký AI](ai/ai-design-log.md), [chỉ mục](ai/README.md) và [iteration evidence](ai/iteration-evidence.md): phân biệt hiện trạng, lịch sử và bằng chứng ba vòng còn thiếu.
- [Ảnh Stitch](assets/stitch/) và [12 ảnh prototype](assets/stitch/prototype-2026-10-11/): Giữ nguyên bằng chứng đã nhận.
- Không giữ placeholder Figma trống trong bộ nộp; Figma ngoài phạm vi hiện tại theo lựa chọn sinh viên.
- [Flutter handoff](handoff/flutter-handoff.md): Sáu mục mỗi màn và hai bảng ánh xạ, chưa kiểm thử bàn giao.
- [PowerPoint 12 slide dùng ảnh gốc](presentation/output/FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx): bản mới nhất, chỉ dùng màn hình sinh viên đã gửi. Dự kiến 10 phút; Notes có nguồn, link Stitch/GitHub bấm được. Bản có low-fi tự tạo đã rút khỏi thư mục nộp.
- [Kịch bản demo](presentation/output/demo-script.md): Demo 5 phút cho ba flow, chuẩn bị dữ liệu, phương án dự phòng và câu hỏi thường gặp.
- [Checklist chuẩn bị nộp](SUBMISSION_CHECKLIST.md): Phân biệt tài liệu đã soạn với việc còn cần xác nhận/kiểm thử.

## Công cụ AI đã sử dụng

- Google Stitch: Sinh giao diện và prototype; đã nhận link preview. [Prompt V1/V2/V2.1/V2.2/V3](ai/evidence/recovered-prompts-2026-10-22/README.md) đã khôi phục nguyên văn; sinh viên xác nhận dùng nguyên văn. V3 đã gửi bốn ảnh trong hội thoại, còn khôi phục file PNG gốc vào repo.
- [Xác nhận của sinh viên](ai/student-confirmations.md): checklist prototype, 360/412, accessibility và component/token đều ổn theo sinh viên tự kiểm (Reported); không phải phép đo do Codex thực hiện. Đây là cập nhật mới hơn các dòng “chưa kiểm thử bởi Codex” trong tài liệu cũ.
- Codex: Phân tích yêu cầu, phản biện ảnh, hỗ trợ tài liệu, lưu bằng chứng và soạn checklist. Review ảnh tĩnh không phải kiểm thử trực tiếp prototype.

## Việc tiếp theo

1. Chạy [checklist prototype](design/prototype-review.md), bổ sung video và kết quả thực tế; kiểm tra quyền xem link Stitch đã có.
2. Áp dụng các [lựa chọn đặc tả](design/design-decisions.md) vào Stitch, bổ sung prompt/phản hồi AI còn thiếu và nhờ một người khác thử [handoff](handoff/flutter-handoff.md); chưa viết app Flutter cho bước Lab 2 này.
3. Tập trình bày theo slide/demo bản mới, cập nhật kết quả kiểm thử thực tế, kiểm tra quyền xem link Stitch và upload các file đã sửa vào repo Lab 2 đã có.

Figma nằm ngoài phạm vi sửa lần này; không có nghĩa yêu cầu nộp đã được miễn. Những lựa chọn trong đặc tả không thay cho UI đã triển khai, kiểm thử người dùng hoặc kết quả người nhận handoff. Các mục thiếu giữ nguyên nhãn, không dựng màn hình mới để tự đánh dấu hoàn thành.

## Lưu ý

Không đưa OAuth secret, token hoặc dữ liệu cá nhân sinh viên chưa ẩn danh vào repository công khai.

Repo Lab 2 đã có link do sinh viên cung cấp. Khi cập nhật repo, dùng nội dung thư mục này làm gốc và giữ [.gitignore](.gitignore) đi cùng. Đưa tài liệu, ảnh bằng chứng, PowerPoint và kịch bản lên; không đưa `presentation/.build/`, `node_modules/`, file tạm hoặc credential lên. Không cần đưa toàn bộ code Flutter của thư mục cha vào repo Lab 2. Codex chưa push các file sửa trong lượt này.

## Bộ file hiện hành để push

- Chỉ giữ một PowerPoint: [slide dùng ảnh gốc](presentation/output/FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx), đi cùng [kịch bản demo](presentation/output/demo-script.md).
- Giữ toàn bộ ảnh gốc, prompt/phản biện, manifest và snapshot lịch sử trong `ai/evidence/`, `assets/ai/`, `assets/stitch/`; không xóa vì tên có V0/V1/V2 hoặc ngày cũ.
- Ba PowerPoint bị thay thế, thư mục dựng slide và placeholder trống đã chuyển sang bản dự phòng ngoài repo ngày 22/10. Không cần đưa bản dự phòng lên GitHub.
- Không xóa `.git/`, không thêm code Flutter của thư mục cha vào repo bài thiết kế này. Kiểm tra danh sách thay đổi trước khi commit; lượt dọn này không tự stage, commit hoặc push.
