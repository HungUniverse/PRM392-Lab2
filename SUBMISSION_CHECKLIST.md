# Checklist chuẩn bị nộp Lab 2 — SE193324

Cập nhật 22/10/2026 (Asia/Saigon). Phần Figma ngoài phạm vi sửa theo yêu cầu. Ô đã đánh dấu chỉ xác nhận tài liệu/tài sản đã có, không chứng nhận rubric đã đạt. Hiện trạng ở [README](README.md) và [bảng ngoài Figma](NON_FIGMA_STATUS.md).

Xác nhận mới nhất: [C01–C03](ai/student-confirmations.md). Checklist prototype, 360/412, accessibility và component/token được sinh viên tự xác nhận ổn (**Reported**). Đã khôi phục prompt nguyên văn ba vòng chính cùng hai lượt sửa V2; không còn thiếu prompt. Các dòng còn ghi chưa kiểm thử bởi Codex không có nghĩa sinh viên chưa thực hiện.

## 1. Tài liệu và file đã có

- [x] [Primary Proto-Persona P01](ux/persona.md) đủ 12 trường, tên/tuổi minh họa, problem statement và mục tiêu kiểm thử; nhãn Assumed.
- [x] [Discovery](ux/discovery.md): stakeholder map, assumption/evidence, coverage, tổng hợp giả thuyết và kế hoạch nghiên cứu; không gọi là workshop/interview đã chạy.
- [x] [Traceability](ux/traceability.md): Need/User story/Flow/Screen/Decision/Test và bí danh 21 test.
- [x] [User flow](ux/user-flow.md) và [đặc tả S01–S10](design/screen-spec.md), ba flow với nhánh Hủy/lỗi/phục hồi mục tiêu.
- [x] [Design brief](design/DESIGN.md), tokens và nhóm component mục tiêu.
- [x] [Review prototype](design/prototype-review.md): 12 ảnh gốc, R01–R12, checklist chưa ghi kết quả.
- [x] [D01–D09](design/design-decisions.md) đã chọn trong đặc tả hiện hành theo nhiệm vụ 22/10; không giả phê duyệt hoặc bằng chứng sửa UI; D10 ghi phạm vi công cụ.
- [x] [Chỉ mục S01–S10](design/screen-evidence.md) và [đối chiếu/state matrix](design/state-coverage.md) chỉ dùng ảnh sinh viên đã gửi.
- [ ] Low-fi riêng do sinh viên cung cấp, nếu cần chứng minh theo rubric; không gọi ảnh high-fi cũ là low-fi và không tự tạo màn mới.
- [x] Component/token dùng chung, 360/412 và accessibility được sinh viên xác nhận ổn tại C01/C02; không nhận là kiểm tra trực tiếp của Codex. Đã rút mẫu Codex tạo khỏi bộ nộp.
- [x] [Validation plan](design/validation-plan.md), mẫu ghi kết quả UI/task/retest và [iteration evidence](ai/iteration-evidence.md) chỉ rõ log còn thiếu.
- [x] [AI log và chỉ mục](ai/README.md); V0/V1/V2 giữ riêng, không sửa lịch sử để khớp hiện trạng.
- [x] [Handoff](handoff/flutter-handoff.md): sáu mục/màn, token → Flutter và component → widget.
- [x] [PowerPoint 12 slide dùng ảnh gốc](presentation/output/FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx), Notes và [kịch bản](presentation/output/demo-script.md) chỉ dùng màn hình sinh viên đã gửi. Slide không thay những minh chứng còn thiếu.
- [x] [Link Stitch sinh viên cung cấp](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951) đã ghi trong README/slide/tài liệu hiện hành.
- [x] Có [.gitignore](.gitignore) cho repo riêng, không loại ảnh/manifest/slide cần nộp.
- [x] Có [repository Lab 2](https://github.com/HungUniverse/prm323-lab2) do sinh viên cung cấp; đã mở được trang công khai và thấy bộ tài liệu.

## 2. Nội dung còn cần bổ sung hoặc xác nhận

- [ ] Kiểm chứng các giả định P01 với người phù hợp hoặc giữ nhãn Assumed và ghi giới hạn thực tế; không nhận là người đã phỏng vấn.
- [ ] Áp dụng D01–D09 vào Stitch; sinh viên xem lại lựa chọn, ghi ảnh sau sửa và kết quả kiểm thử, không giả chữ ký reviewer.
- [x] [Lưu prompt nguyên văn V1/V2/V2.1/V2.2/V3 và đối chiếu ba mục tiêu](ai/evidence/recovered-prompts-2026-10-22/README.md); sinh viên xác nhận sử dụng nguyên văn.
- [ ] Khôi phục bộ PNG V3 gốc vào repo; ảnh đã gửi trong hội thoại nhưng tệp clipboard tạm đã mất. Không tạo ảnh thay thế hoặc yêu cầu làm lại vòng V3.
- [ ] Đối chiếu UI cuối với đặc tả và bằng chứng đã có; low-fi riêng vẫn ghi thiếu nếu chưa được cung cấp.
- [ ] Bổ sung ảnh S10 mới và bằng chứng sau Save/Cancel, sau chốt, lý do trống/audit mới, loading/error/recovery.
- [ ] Xác nhận JSON xuất phù hợp schema extension; nhãn trong prototype chưa chứng minh tích hợp được.
- [ ] Xác nhận dữ liệu tên/MSSV/email là giả hoặc ẩn danh trước khi công khai.

## 3. Kiểm thử và trình bày — phân biệt Reported và log trực tiếp

- [x] Checklist prototype được sinh viên xác nhận ổn tại C01 (Reported); Codex chưa kiểm tra lại hoặc nhận video/log riêng từng case.
- [x] Các nhánh Hủy/Lưu/Back và xuất thuộc checklist được sinh viên xác nhận chung; không tự điền số đo hoặc diễn biến từng lần chạy khi chưa có log.
- [x] 360/412 và accessibility được sinh viên xác nhận ổn tại C01; không dùng phép tính token thay cho số đo, không tự tạo số đo từ xác nhận chung.
- [ ] Nhờ một người thử handoff; ghi người nhận, ngày, câu hỏi và sửa tài liệu sau thử.
- [ ] Tập 10 phút slide + 5 phút demo theo thời lượng được giảng viên xác nhận; quay video dự phòng.

## 4. Liên kết và đóng gói

- [ ] Thử link Stitch khi chưa đăng nhập, xác nhận người chấm mở được.
- [ ] Upload bản slide mới và tài liệu vừa sửa vào repo Lab 2, kiểm tra file/liên kết trên GitHub sau upload; lượt này Codex chưa push.
- [ ] Kiểm tra nội dung chuẩn bị upload không gồm cache, credential hoặc dữ liệu riêng tư. `.gitignore` không tự làm sạch nội dung ảnh/tài liệu.
- [ ] Xác nhận với giảng viên về việc dùng Stitch thay Figma. Đề gốc vẫn có yêu cầu Figma; tạm gác không có nghĩa được miễn. Nếu chưa được chấp nhận, hoàn tất các hạng mục Figma theo đề.

Các ô trên chỉ được đánh dấu khi có kết quả/bằng chứng thật; không dùng lượt rà soát Markdown để thay cho kiểm thử prototype.
