# Hiện trạng cập nhật ngoài Figma

Ngày 22/10/2026 (Asia/Saigon). Theo yêu cầu sinh viên: tạm bỏ phần Figma và sửa các mục còn lại cho khớp hướng dẫn. Không sửa app Flutter, không đẩy GitHub, không dựng lại lịch sử AI hoặc kết quả người dùng.

Chốt phạm vi theo yêu cầu mới: **chỉ dùng màn hình sinh viên đã gửi, không tạo màn hình mới**. Xem [bộ ảnh sử dụng](design/screen-evidence.md). Các mẫu low-fi/UI kit tự tạo ở lượt trước đã chuyển sang khu vực build riêng, không nằm trong bộ nộp hiện hành.

## 1. Những mục đã sửa bằng tài liệu dựa trên màn hình gốc

| Yêu cầu | Sản phẩm hiện hành | Kết luận đúng phạm vi |
| --- | --- | --- |
| Một Primary Persona đủ 12 trường, tuổi/vai trò/thiết bị/accessibility | [P01](ux/persona.md) | Đã đủ cấu trúc; tên/tuổi minh họa, trạng thái Assumed |
| Problem, stakeholder, phạm vi và giả định | [Discovery](ux/discovery.md) | Có map, coverage matrix, tổng hợp giả thuyết, câu hỏi và kế hoạch nghiên cứu; chưa có workshop/interview thật |
| IA, ba flow, alternate/error và ánh xạ | [User flow](ux/user-flow.md) | Có đặc tả và sơ đồ; tương tác Stitch cần chạy thử |
| Need liên kết UI và test | [Traceability](ux/traceability.md) | Có N/US/F/S/D/T và bí danh 21 test; không phải test đã chạy |
| Mười màn và các trạng thái đã nhận | [Ảnh gốc](design/screen-evidence.md), [đối chiếu](design/state-coverage.md) | Chỉ dùng UI sinh viên gửi; chưa có low-fi riêng |
| Quy tắc và chín nhóm component/states | [DESIGN](design/DESIGN.md) | Có đặc tả; chưa chứng minh thư viện component/token dùng chung |
| Accept/Modify/Reject có lý do | [D01–D10](design/design-decisions.md) | Chọn trong đặc tả hiện hành; không giả phê duyệt, chưa xác minh sau áp dụng Stitch |
| AI process và thiếu bằng chứng | [AI log](ai/ai-design-log.md), [iteration matrix](ai/iteration-evidence.md) | Đã tổ chức rõ; chưa đủ ba vòng hoàn chỉnh |
| Handoff sáu mục/màn, hai mapping | [Handoff](handoff/flutter-handoff.md) | Có đặc tả, tiêu chí S07 và mẫu ghi; chưa có người nhận thử |
| Kiểm thử và UI checklist | [Validation plan](design/validation-plan.md), [review](design/prototype-review.md) | Có task/case/biểu mẫu; chưa có kết quả Stitch/người dùng |
| Slide và kịch bản demo | [12 slide dùng ảnh gốc](presentation/output/FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx), [kịch bản](presentation/output/demo-script.md) | Chỉ dùng màn hình sinh viên gửi; chưa chạy buổi demo thật |

## 2. Bằng chứng nào được dùng

- 12 ảnh ba flow và S10 V1 cũ giữ nguyên, liên kết theo đúng ID màn. Các bản V0/V1/V2 và snapshot/manifest không sửa.
- Ảnh chỉ chứng minh nội dung hiển thị, không chứng minh thao tác hoặc kết quả kiểm thử. T01–T21 vẫn chưa được đánh dấu đạt.
- Không dùng ảnh, màn HTML hoặc QA của mẫu Codex tự tạo để thay cho bằng chứng của sinh viên. Low-fi riêng, binding component và phép thử 360/412 của UI cuối vẫn ghi thiếu.

## 3. Phần chưa thể điền thay

1. Prompt/phản hồi gốc các lượt V1/V2/V3 và bộ file V3 chưa được cung cấp đầy đủ. Không khôi phục bằng suy đoán.
2. Xác nhận các sai khác R01–R12 trên prototype của sinh viên, thu thập bằng chứng tương tác thực. Nếu chưa có trạng thái hoặc S10 phiên bản mới, giữ nhãn thiếu; không tự tạo màn thay thế trong lượt này.
3. Đo UI cuối, chạy T01–T21, chấm UI checklist từng màn; ghi thời gian/bằng chứng thật, không tự nhận trên 80.
4. Nghiên cứu người dùng tối thiểu hoặc giữ Assumed rõ; thử handoff với người khác và ghi câu hỏi/retest.
5. Xác nhận dữ liệu công khai là giả/ẩn danh; thử link chưa đăng nhập và upload bản sửa lên repo.

Phần Figma được để ngoài phạm vi hành động lần này theo yêu cầu, không dùng trạng thái này làm giấy xác nhận được miễn yêu cầu nộp. Điểm chính thức do giảng viên chấm; không cộng số file mới thành phần trăm hoàn thành.
