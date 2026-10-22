# FAP Attendance Mobile — Lab 2

Rà soát tài liệu: 22/10/2026 (Asia/Saigon). Đã sửa các mục ngoài Figma theo yêu cầu; không tự xác nhận hoàn thành kiểm thử hoặc đạt trên 80 điểm. [Bảng hiện trạng ngoài Figma](NON_FIGMA_STATUS.md) là điểm bắt đầu đọc bản mới.

- MSSV: SE193324
- Persona một dòng: P01 · Minh, 36 tuổi minh họa, giảng viên FPT quản lý nhiều lớp trên Android; Primary Proto-Persona, Assumed, chưa phỏng vấn.
- Phạm vi: Thiết kế UI/UX; hiện tiếp tục prototype Google Stitch, tạm gác Figma theo lựa chọn của sinh viên.
- Link Stitch: [FAP Attendance prototype](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951). Sinh viên cung cấp ngày 11/10/2026; chưa xác minh quyền xem khi chưa đăng nhập.
- Link repository Lab 2: [HungUniverse/prm323-lab2](https://github.com/HungUniverse/prm323-lab2). Sinh viên cung cấp ngày 11/10/2026; đã mở được trang công khai và thấy các thư mục tài liệu. Chưa tự upload bản sửa mới trong lượt này.
- Link Figma: Tạm gác theo lựa chọn của sinh viên; chưa có xác nhận được miễn yêu cầu trong đề.
- Trạng thái: P01 đủ 12 trường; có stakeholder/assumption/coverage và traceability; ba flow, chỉ mục ảnh gốc S01–S10, state matrix, lựa chọn D01–D09 trong đặc tả, handoff sáu mục/màn và hai bảng ánh xạ. Chỉ dùng màn hình sinh viên đã gửi. Chưa có low-fi riêng, thư viện component dùng chung hoặc kết quả 360/412 của UI cuối. Prototype Stitch, bằng chứng ba vòng AI, nghiên cứu người dùng và thử handoff vẫn chưa hoàn tất/xác minh.

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
- `assets/figma/`: Vị trí dự kiến nếu bổ sung Figma; chưa có PNG final được xác minh, không tính thư mục này là deliverable đã hoàn thành.
- [Flutter handoff](handoff/flutter-handoff.md): Sáu mục mỗi màn và hai bảng ánh xạ, chưa kiểm thử bàn giao.
- [PowerPoint 12 slide dùng ảnh gốc](presentation/output/FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx): bản mới nhất, chỉ dùng màn hình sinh viên đã gửi. Dự kiến 10 phút; Notes có nguồn, link Stitch/GitHub bấm được. Bản có low-fi tự tạo đã rút khỏi thư mục nộp.
- [Kịch bản demo](presentation/output/demo-script.md): Demo 5 phút cho ba flow, chuẩn bị dữ liệu, phương án dự phòng và câu hỏi thường gặp.
- [Checklist chuẩn bị nộp](SUBMISSION_CHECKLIST.md): Phân biệt tài liệu đã soạn với việc còn cần xác nhận/kiểm thử.

## Công cụ AI đã sử dụng

- Google Stitch: Sinh giao diện và prototype; đã nhận link preview. Prompt/phản hồi của các lượt muộn và bộ ảnh V3 riêng còn thiếu, cần bổ sung đúng bản thực tế.
- Codex: Phân tích yêu cầu, phản biện ảnh, hỗ trợ tài liệu, lưu bằng chứng và soạn checklist. Review ảnh tĩnh không phải kiểm thử trực tiếp prototype.

## Việc tiếp theo

1. Chạy [checklist prototype](design/prototype-review.md), bổ sung video và kết quả thực tế; kiểm tra quyền xem link Stitch đã có.
2. Áp dụng các [lựa chọn đặc tả](design/design-decisions.md) vào Stitch, bổ sung prompt/phản hồi AI còn thiếu và nhờ một người khác thử [handoff](handoff/flutter-handoff.md); chưa viết app Flutter cho bước Lab 2 này.
3. Tập trình bày theo slide/demo bản mới, cập nhật kết quả kiểm thử thực tế, kiểm tra quyền xem link Stitch và upload các file đã sửa vào repo Lab 2 đã có.

Figma nằm ngoài phạm vi sửa lần này; không có nghĩa yêu cầu nộp đã được miễn. Những lựa chọn trong đặc tả không thay cho UI đã triển khai, kiểm thử người dùng hoặc kết quả người nhận handoff. Các mục thiếu giữ nguyên nhãn, không dựng màn hình mới để tự đánh dấu hoàn thành.

## Lưu ý

Không đưa OAuth secret, token hoặc dữ liệu cá nhân sinh viên chưa ẩn danh vào repository công khai.

Repo Lab 2 đã có link do sinh viên cung cấp. Khi cập nhật repo, dùng nội dung thư mục này làm gốc và giữ [.gitignore](.gitignore) đi cùng. Đưa tài liệu, ảnh bằng chứng, PowerPoint và kịch bản lên; không đưa `presentation/.build/`, `node_modules/`, file tạm hoặc credential lên. Không cần đưa toàn bộ code Flutter của thư mục cha vào repo Lab 2. Codex chưa push các file sửa trong lượt này.
