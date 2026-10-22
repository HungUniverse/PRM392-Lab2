# Đối chiếu bằng chứng vòng lặp AI

Cập nhật 22/10/2026. Đây là chỉ mục bổ sung, không sửa prompt/phản hồi/snapshot đã lưu. Quy tắc: mỗi vòng phải có vấn đề khác nhau, prompt thực gửi, output trước/sau, phản biện, quyết định và thay đổi có thể đối chiếu.

| ID / lượt | Vấn đề / trọng tâm có thể đối chiếu | Đã có | Còn thiếu |
| --- | --- | --- | --- |
| I00 / V0 | Tạo bộ UI giảng viên mobile theo brief | [Prompt nguyên văn](evidence/2026-10-11/01-stitch-v0-prompt.md), 10 ảnh V0, [phản biện](evidence/2026-10-11/03-critique-codex-response.md) | Phản hồi chữ Stitch nếu có; I00 là sinh ban đầu, không đếm vào ba vòng tinh chỉnh |
| I01 / V1 | Đối chiếu cấu trúc, ngữ cảnh, lịch sử/note | [Chỉ mục V1](evidence/2026-10-11/README-v1.md), 9 ảnh và phản biện đầy đủ | Prompt sửa thực gửi, phản hồi Stitch, ảnh S06 và quyết định thời điểm đó |
| I02 / V2 | Thống nhất Slot/Khung giờ, lịch và sửa có lý do | [Chỉ mục V2](evidence/2026-10-11/README-v2.md), 7 ảnh/3 ID và review | Prompt thực gửi, phản hồi Stitch, ảnh sau sửa lỗi còn lại và kết quả test |
| I03 / V3 | Chặn xuất chưa chốt, định dạng, local và Drive pending | Sinh viên từng gửi bốn ảnh trong hội thoại; [mục 6 log](ai-design-log.md) mô tả giới hạn | File gốc V3 riêng, prompt/phản hồi thực tế, trước/sau và quyết định |
| DOC-2026-10-22 | Sửa hồ sơ ngoài Figma theo guideline | P01, discovery, traceability, chỉ mục ảnh gốc và state matrix; mẫu UI Codex tạo đã rút theo yêu cầu | Không phải lượt sửa Stitch; không tự tính thành I01/I02/I03 |

Không ghép ảnh prototype simulator thành V3 gốc. Không gọi ảnh V0 là low-fi. Quyết định D01–D09 hiện hành ngày 22/10 không chứng minh sinh viên đã đưa ra cùng quyết định ở thời điểm các vòng cũ.

## Cách bổ sung đúng

1. Mở lịch sử Stitch/chat và sao chép **đúng nguyên văn** prompt đã gửi, phản hồi và ngày nếu có. Nếu không khôi phục được, ghi rõ không khôi phục được.
2. Gắn ảnh trước/sau đúng phiên bản và screen ID. Ảnh/biến thể nhiều không tự tăng số vòng.
3. Lưu bản phê bình dùng heuristic có tên, accessibility và P01; chọn tối thiểu năm phát hiện cụ thể, giữ cả phản hồi gốc.
4. Ghi Accept/Modify/Reject, lý do và ảnh sau áp dụng. Nếu vòng chưa hoàn tất, giữ trạng thái chưa đủ bằng chứng; không dựng prompt hồi tưởng như bản gốc.
5. Nếu thực hiện một vòng mới, đặt ngày mới và mục tiêu mới; không lùi ngày. Lưu kết quả test thật sau sửa.

## Mẫu cho lượt mới, chưa thực hiện

- ID / thời gian thực gửi / công cụ / phiên bản: chưa có.
- Vấn đề có tên và screen liên quan: chưa chọn lượt mới.
- Prompt nguyên văn và ảnh trước: chưa có.
- Output / toàn bộ phản hồi / ảnh sau: chưa có.
- Phản biện / quyết định / lý do / test: chưa thực hiện.

Hiện chưa thể xác nhận đủ ba vòng cải tiến hoàn chỉnh. Việc hoàn thiện chỉ mục này không thay thế phần bằng chứng còn thiếu.
