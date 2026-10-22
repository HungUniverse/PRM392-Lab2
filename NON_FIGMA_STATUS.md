# Hiện trạng cập nhật ngoài Figma

Ngày 22/10/2026 (Asia/Saigon). Theo yêu cầu sinh viên: tạm bỏ phần Figma và sửa các mục còn lại cho khớp hướng dẫn. Không sửa app Flutter, không đẩy GitHub, không dựng lại lịch sử AI hoặc kết quả người dùng.

Chốt phạm vi theo yêu cầu mới: **chỉ dùng màn hình sinh viên đã gửi, không tạo màn hình mới**. Xem [bộ ảnh sử dụng](design/screen-evidence.md). Các mẫu low-fi/UI kit tự tạo ở lượt trước đã chuyển sang khu vực build riêng, không nằm trong bộ nộp hiện hành.

**Cập nhật xác nhận mới nhất:** sinh viên xác nhận checklist prototype, 360/412, accessibility và component/token đều ổn; dùng nguyên văn prompt Codex soạn. Ghi nhận là **Reported**, không phải phép đo của Codex. Đã [khôi phục năm prompt gốc](ai/evidence/recovered-prompts-2026-10-22/README.md); xem [C01–C03](ai/student-confirmations.md).

## 1. Những mục đã sửa bằng tài liệu dựa trên màn hình gốc

| Yêu cầu | Sản phẩm hiện hành | Kết luận đúng phạm vi |
| --- | --- | --- |
| Một Primary Persona đủ 12 trường, tuổi/vai trò/thiết bị/accessibility | [P01](ux/persona.md) | Đã đủ cấu trúc; tên/tuổi minh họa, trạng thái Assumed |
| Problem, stakeholder, phạm vi và giả định | [Discovery](ux/discovery.md) | Có map, coverage matrix, tổng hợp giả thuyết, câu hỏi và kế hoạch nghiên cứu; chưa có workshop/interview thật |
| IA, ba flow, alternate/error và ánh xạ | [User flow](ux/user-flow.md) | Có đặc tả và sơ đồ; checklist được sinh viên xác nhận ổn (Reported) |
| Need liên kết UI và test | [Traceability](ux/traceability.md) | Có N/US/F/S/D/T và bí danh 21 test; không phải test đã chạy |
| Mười màn và các trạng thái đã nhận | [Ảnh gốc](design/screen-evidence.md), [đối chiếu](design/state-coverage.md) | Chỉ dùng UI sinh viên gửi; chưa có low-fi riêng |
| Quy tắc và chín nhóm component/states | [DESIGN](design/DESIGN.md), [C02](ai/student-confirmations.md) | Có đặc tả; component/token được sinh viên xác nhận ổn (Reported), chưa phải kiểm binding của Codex |
| Accept/Modify/Reject có lý do | [D01–D10](design/design-decisions.md) | Chọn trong đặc tả hiện hành; không giả phê duyệt, chưa xác minh sau áp dụng Stitch |
| AI process và lưu bằng chứng | [AI log](ai/ai-design-log.md), [iteration matrix](ai/iteration-evidence.md) | Ba mục tiêu riêng; prompt nguyên văn đã khôi phục/xác nhận sử dụng; đủ bốn PNG V3 phục hồi từ hội thoại |
| Handoff sáu mục/màn, hai mapping | [Handoff](handoff/flutter-handoff.md) | Có đặc tả, tiêu chí S07 và mẫu ghi; chưa có người nhận thử |
| Kiểm thử và UI checklist | [Validation plan](design/validation-plan.md), [review](design/prototype-review.md), [C01](ai/student-confirmations.md) | Sinh viên xác nhận ổn checklist/360/412/accessibility; Codex chưa chạy lại, chưa có số đo/log riêng |
| Slide và kịch bản demo | [12 slide dùng ảnh gốc](presentation/output/FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx), [kịch bản](presentation/output/demo-script.md) | Chỉ dùng màn hình sinh viên gửi; chưa chạy buổi demo thật |

## 2. Bằng chứng nào được dùng

- 12 ảnh ba flow và S10 V1 cũ giữ nguyên, liên kết theo đúng ID màn. Các bản V0/V1/V2 và snapshot/manifest không sửa.
- Ảnh chỉ chứng minh nội dung hiển thị. Kết quả tự kiểm mới được ghi ở C01/C02; không biến thành log tương tác hoặc phép đo do Codex chạy. Những dòng chưa kiểm thử bởi Codex không phủ định xác nhận của sinh viên.
- Không dùng mẫu Codex tự tạo thay bằng chứng sinh viên. Low-fi riêng vẫn chưa có. Binding component và 360/412/accessibility hiện có xác nhận Reported, không tiếp tục ghi sinh viên chưa làm.

## 3. Phần chưa thể điền thay

1. Prompt V1/V2/V3 và [bốn PNG V3](ai/evidence/recovered-v3-images-2026-10-22/README.md) đã khôi phục từ hội thoại gốc; không còn khoảng trống tệp PNG V3. Tệp clipboard tạm không còn nhưng bản lưu hội thoại vẫn giữ dữ liệu ảnh. Không cần tạo lại màn hoặc phản hồi chữ Stitch nếu lượt đó chỉ trả hình.
2. Xác nhận các sai khác R01–R12 trên prototype của sinh viên, thu thập bằng chứng tương tác thực. Nếu chưa có trạng thái hoặc S10 phiên bản mới, giữ nhãn thiếu; không tự tạo màn thay thế trong lượt này.
3. Ghi nhận sinh viên đã tự kiểm đạt theo C01/C02; bổ sung log hoặc số đo đã có nếu cần minh chứng chi tiết, không yêu cầu làm lại chỉ vì Codex chưa chạy. Không tự đặt số đo hoặc điểm trên 80.
4. Nghiên cứu người dùng tối thiểu hoặc giữ Assumed rõ; thử handoff với người khác và ghi câu hỏi/retest.
5. Xác nhận dữ liệu công khai là giả/ẩn danh; thử link chưa đăng nhập và upload bản sửa lên repo.

Phần Figma được để ngoài phạm vi hành động lần này theo yêu cầu, không dùng trạng thái này làm giấy xác nhận được miễn yêu cầu nộp. Điểm chính thức do giảng viên chấm; không cộng số file mới thành phần trăm hoàn thành.
