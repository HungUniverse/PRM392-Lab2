# Đối chiếu bằng chứng vòng lặp AI

Cập nhật 22/10/2026 sau xác nhận mới của sinh viên. Đã truy xuất được nguyên văn prompt V1/V2/V3 và các lượt V2.1/V2.2 từ hội thoại gốc; sinh viên xác nhận dùng nguyên văn. Xem [bộ prompt](evidence/recovered-prompts-2026-10-22/README.md) và [xác nhận C01–C03](student-confirmations.md). Không sửa snapshot/manifest cũ.

| ID / lượt | Vấn đề / trọng tâm có thể đối chiếu | Đã có | Còn thiếu |
| --- | --- | --- | --- |
| I00 / V0 | Tạo bộ UI giảng viên mobile theo brief | [Prompt nguyên văn](evidence/2026-10-11/01-stitch-v0-prompt.md), 10 ảnh V0, [phản biện](evidence/2026-10-11/03-critique-codex-response.md) | I00 là sinh ban đầu, không đếm vào ba vòng tinh chỉnh; không bắt buộc phản hồi chữ nếu chỉ trả hình |
| I01 / V1 | Sửa nghiệp vụ và tính nhất quán | [Prompt nguyên văn đã dùng](evidence/recovered-prompts-2026-10-22/v1-prompt.txt), [chỉ mục V1](evidence/2026-10-11/README-v1.md), 9 ảnh và phản biện, đối chiếu S03 V0/V1 trong bộ prompt | Không cần đủ 10 màn trong vòng này. Ảnh S06 V1 chưa có không phủ định cải tiến đã thực hiện ở màn khác |
| I02 / V2 | Slot/Khung giờ, lịch sử không trùng, note và sửa có lý do | [Prompt V2](evidence/recovered-prompts-2026-10-22/v2-prompt.txt), [V2.1](evidence/recovered-prompts-2026-10-22/v2-1-prompt.txt), [V2.2](evidence/recovered-prompts-2026-10-22/v2-2-prompt.txt), [7 ảnh và review](evidence/2026-10-11/README-v2.md); đối chiếu S07 V1/V2 | V2.1/V2.2 thuộc vòng V2; không dùng số ảnh để đếm số vòng. Giữ rõ lỗi còn lại trong review lịch sử |
| I03 / V3 | Chặn xuất chưa chốt, định dạng, local và Drive pending | [Prompt nguyên văn đã dùng](evidence/recovered-prompts-2026-10-22/v3-prompt.txt), bốn ảnh đã gửi trong hội thoại, [review V3 gốc](evidence/recovered-prompts-2026-10-22/v3-review-response.txt), bảng trước/sau và lựa chọn trong prompt | Cần khôi phục bộ PNG V3 vào repo; clipboard tạm đã mất tệp. Không phải chưa làm/gửi V3 và không phải thiếu prompt |
| DOC-2026-10-22 | Sửa hồ sơ ngoài Figma theo guideline | P01, discovery, traceability, chỉ mục ảnh gốc và state matrix; mẫu UI Codex tạo đã rút theo yêu cầu | Không phải lượt sửa Stitch; không tự tính thành I01/I02/I03 |

Không ghép ảnh prototype simulator thành V3 gốc. Không gọi ảnh V0 là low-fi. Quyết định D01–D09 hiện hành ngày 22/10 không chứng minh sinh viên đã đưa ra cùng quyết định ở thời điểm các vòng cũ.

## Cách bổ sung đúng

1. Prompt đã được khôi phục đúng nguyên văn từ cuộc trò chuyện. C03 xác nhận sử dụng; không tự suy ra thời điểm gửi Stitch hoặc số lần chạy. Chỉ bổ sung phản hồi chữ Stitch nếu thực sự có.
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

Đã có ba nhóm cải tiến với mục tiêu riêng, nguyên văn prompt được khôi phục và xác nhận sử dụng. Bằng chứng ảnh V1/V2 đã lưu; bốn ảnh V3 đã gửi nhưng bộ PNG gốc chưa khôi phục vào repo. Checklist prototype, 360/412, accessibility và component/token được ghi nhận Đạt theo sinh viên xác nhận (Reported); Codex chưa chạy/đo lại và không tự điền số đo hoặc video.
