# Bằng chứng ảnh và kiểm tra V2 — SE193324

- Ngày lưu: 11/10/2026 (Asia/Saigon).
- Mã đánh giá: REVIEW-CODEX-V2-01.
- Đã nhận/lưu nguyên bản và kiểm tra từng ảnh: **7 ảnh thuộc S04, S05, S07**, không phải 7 màn hình chính.
- [Yêu cầu người dùng](09-v2-review-request.md).
- [Bản kiểm tra đầy đủ từng ảnh](09-v2-review.md).
- [Manifest nguồn/đích và SHA-256](manifest-v2.json).
- [Nhật ký AI](../../ai-design-log.md).

## Ánh xạ đúng thứ tự ảnh gửi

| Ảnh | Màn/state | Tệp đã lưu | Kết quả chính |
|---|---|---|---|
| 1 | S04 đang điểm danh SE1920 | [v2-s04-attendance.png](../../../assets/stitch/v2-s04-attendance.png) | Slot/giờ/tổng đúng; cần rõ môn và note thuộc Slot 4 |
| 2 | S04 lớp chuẩn bị SE1921 | [v2-s04-preparation.png](../../../assets/stitch/v2-s04-preparation.png) | Tách fixture đúng; bỏ nhóm ngoài nguồn, rõ import/local |
| 3 | S05 được sửa SE1921 | [v2-s05-schedule-editable.png](../../../assets/stitch/v2-s05-schedule-editable.png) | Sai title; ngoại lệ không khớp thứ học, có phòng ngoài nguồn |
| 4 | S05 khóa SE1920 | [v2-s05-schedule-locked.png](../../../assets/stitch/v2-s05-schedule-locked.png) | Khóa rõ; còn title/“buổi” và thông tin ngoài nguồn |
| 5 | S07 xem note | [v2-s07-note.png](../../../assets/stitch/v2-s07-note.png) | Có audit; sai giờ, nền khác S07, chưa rõ đồng bộ |
| 6 | S07 lỗi lý do trống | [v2-s07-edit-error.png](../../../assets/stitch/v2-s07-edit-error.png) | Lỗi rõ nhưng sai môn, thêm L/Trễ trái P/A |
| 7 | S07 chi tiết sinh viên | [v2-s07-student.png](../../../assets/stitch/v2-s07-student.png) | Không còn trùng; đúng 5%, nhưng thêm ngưỡng 20% và reason khác note |

## Tính xác thực và phần còn thiếu

- PNG là bản sao nguyên byte của các ảnh người dùng đính kèm; không crop, đổi màu, sửa nội dung hoặc giả nhận là ảnh chat gốc.
- Nguồn clipboard và checksum có trong manifest; checksum kiểm tra file sao chép, không chứng minh thời điểm sinh ảnh hoặc số prompt đã dùng trên Stitch.
- Giữ nguyên ảnh V0/V1 và bằng chứng phản biện trước đó.
- Prompt V2 đã được Codex soạn trong cuộc trò chuyện; chưa có bản prompt thực tế đã gửi/phản hồi chữ nguyên văn của Stitch hoặc link project trong bộ lưu này. Không suy diễn rằng người dùng gửi nguyên văn hoặc chỉ gửi một lần.
- Chưa nhận S08 V2/SlotResults, saving/success/save-error. S06 hiện hành vẫn thiếu. Thiếu ảnh không kết luận chức năng không tồn tại.
- Chưa đo accessibility hoặc thử prototype/nguời dùng. Chưa có quyết định cuối Accept/Modify/Reject.
- V2 đã có ảnh sau cải tiến, nhưng chưa xác minh vòng hoàn tất; lượt kiểm tra không tính thêm thành vòng cải tiến.
