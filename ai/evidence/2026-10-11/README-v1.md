# Bằng chứng phản biện V1 — FAP Attendance Mobile

- **Sinh viên:** SE193324.
- **Ngày lưu:** 11/10/2026 (Asia/Saigon); không suy diễn giờ gửi gốc.
- **Mã đánh giá:** CRITIQUE-CODEX-V1-01.
- **Đầu vào:** 9 ảnh V1 S01–S05, S07–S10; ảnh V0 đối chiếu; persona, DESIGN và user flow.
- **Kết quả:** Đã phản biện ảnh tĩnh với 9 phát hiện UX-01–UX-09, đối chiếu V0 → V1, accessibility, ba luồng và mục tiêu đề xuất cho V2.
- **Giới hạn:** Thiếu S06 V1; chưa kiểm thử prototype hoặc đo accessibility. Chưa sửa UI trong lượt đánh giá; chưa chốt Accept/Modify/Reject. Không tính phản biện là vòng cải tiến đã hoàn thành.

## Nguồn và bản xem

| Nội dung | Tệp |
|---|---|
| Prompt phản biện đầy đủ từ tệp người dùng dán | [08-v1-critique-prompt.md](08-v1-critique-prompt.md) |
| Toàn bộ câu trả lời đã gửi, không thay bằng tóm tắt | [08-v1-critique-response.md](08-v1-critique-response.md) |
| Bản xem offline, phân trang | [evidence-v1.html](evidence-v1.html) |
| Nguồn, ảnh, SHA-256 và phần bằng chứng còn thiếu | [manifest-v1.json](manifest-v1.json) |
| Bản sao tài liệu tại thời điểm lưu | [persona.md](v1-inputs/persona.md), [DESIGN.md](v1-inputs/DESIGN.md), [user-flow.md](v1-inputs/user-flow.md) |
| Nhật ký AI đã cập nhật | [ai-design-log.md](../../ai-design-log.md) |
| Bằng chứng V0 giữ riêng | [README.md](README.md) |

Prompt gốc: tệp `Pasted text.txt` trong attachment `27ef2e40-009b-4110-9dc7-350237d8e946`. Bản lưu giữ nguyên nội dung; chỉ chuẩn hóa CRLF/LF và dòng kết thúc. Không đưa đường dẫn attachment ngoài máy vào các liên kết bài nộp.

## 12 ảnh chụp bản lưu nội dung

**Đây là ảnh PNG của tài liệu được trình bày lại từ Markdown, KHÔNG PHẢI ảnh chụp chat gốc của ChatGPT hoặc Stitch.** Mỗi trang có nhãn phân biệt, không mô phỏng giao diện chat. Không dùng chúng để chứng minh thời điểm gửi prompt hoặc thao tác thiết kế trên Stitch.

### Prompt phản biện V1 — 5 trang

- [Trang 1/5](../../../assets/ai/2026-10-11/08-v1-critique-prompt/page-01.png)
- [Trang 2/5](../../../assets/ai/2026-10-11/08-v1-critique-prompt/page-02.png)
- [Trang 3/5](../../../assets/ai/2026-10-11/08-v1-critique-prompt/page-03.png)
- [Trang 4/5](../../../assets/ai/2026-10-11/08-v1-critique-prompt/page-04.png)
- [Trang 5/5](../../../assets/ai/2026-10-11/08-v1-critique-prompt/page-05.png)

### Phản hồi phản biện V1 — 7 trang

- [Trang 1/7](../../../assets/ai/2026-10-11/08-v1-critique-response/page-01.png)
- [Trang 2/7](../../../assets/ai/2026-10-11/08-v1-critique-response/page-02.png)
- [Trang 3/7](../../../assets/ai/2026-10-11/08-v1-critique-response/page-03.png)
- [Trang 4/7](../../../assets/ai/2026-10-11/08-v1-critique-response/page-04.png)
- [Trang 5/7](../../../assets/ai/2026-10-11/08-v1-critique-response/page-05.png)
- [Trang 6/7](../../../assets/ai/2026-10-11/08-v1-critique-response/page-06.png)
- [Trang 7/7](../../../assets/ai/2026-10-11/08-v1-critique-response/page-07.png)

Nếu bài nộp cần ảnh chat gốc, sinh viên tự chụp bổ sung và giữ nhãn nguồn riêng; không đổi tên ảnh bản lưu thành ảnh gốc. Che thông tin riêng tư hoặc credential ngoài phạm vi.

## Chỉ mục ảnh giao diện V1 đã đánh giá

| ID | Ảnh |
|---|---|
| S01 | [Bắt đầu workspace](../../../assets/stitch/v1-s01-workspace.png) |
| S02 | [Thời khóa biểu tuần](../../../assets/stitch/v1-s02-timetable.png) |
| S03 | [Import markbook](../../../assets/stitch/v1-s03-import.png) |
| S04 | [Điểm danh lớp](../../../assets/stitch/v1-s04-attendance.png) |
| S05 | [Cấu hình lịch lớp](../../../assets/stitch/v1-s05-schedule.png) |
| S06 | Chưa được cung cấp; không lấy ảnh V0 thay thế |
| S07 | [Chi tiết sinh viên](../../../assets/stitch/v1-s07-student.png) |
| S08 | [Lịch sử điểm danh lớp](../../../assets/stitch/v1-s08-history.png) |
| S09 | [Xuất kết quả](../../../assets/stitch/v1-s09-export.png) |
| S10 | [Google Drive và đồng bộ](../../../assets/stitch/v1-s10-drive.png) |

## Bảo toàn và các phần chưa xác minh

- Giữ nguyên ảnh UI V0/V1, bản HTML V0, manifest V0 và 23 ảnh bằng chứng cũ.
- Renderer kiểm tra nội dung chữ được bảo toàn sau phân trang và không tràn vùng nội dung; ảnh bản lưu không phải kiểm thử UI mobile.
- Hash SHA-256 ghi nhận file đã lưu, không chứng minh tác giả, thời điểm gốc hoặc prompt đã được gửi vào dịch vụ.
- Đã có ảnh giao diện V1; không tiếp tục ghi “V1 chưa có ảnh”. Tuy nhiên, chưa đủ bằng chứng để xác nhận vòng cải tiến V1 hoàn tất.
- Chưa lưu được prompt sửa V1/phản hồi chữ nguyên văn của Stitch, link project và ảnh S06 V1. Không tự dựng lại lịch sử prompt hoặc số lần sử dụng từ các ảnh.
- Chưa có kết quả kiểm thử Figma, accessibility hoặc quyết định cuối của sinh viên; V2/V3 chưa có bằng chứng hoàn thành.
- Số 08 là mã nhóm tài liệu phản biện V1, không phải số lượng prompt Stitch hoặc vòng cải tiến. Không tạo tệp 06/07 với nội dung suy đoán.

## Kiểm tra bộ lưu đã thực hiện

- Prompt khớp tệp dán sau chuẩn hóa dòng kết thúc.
- Kiểm tra 60 checksum file nguồn/ảnh/tài liệu trong hai bộ manifest: không phát hiện thay đổi ngoài dự kiến.
- Kiểm tra 113 liên kết local trong nhật ký, hai chỉ mục và phản hồi V1: không có liên kết thiếu file.
- Có đủ 9 phát hiện trong phản hồi; renderer giữ toàn bộ chữ qua 12 trang, không tràn vùng nội dung.
- Đã xem trực tiếp sáu trang mẫu: prompt trang 1/5 và 5/5; phản hồi trang 1/7, 2/7, 5/7 và 7/7. Nội dung đọc được và nhãn nguồn hiển thị rõ.
- Bản HTML/manifest V0, 23 PNG bằng chứng cũ và ảnh giao diện V0/V1 được giữ nguyên. Đây là kiểm tra bộ lưu, không phải kết quả usability testing hoặc accessibility của app.
