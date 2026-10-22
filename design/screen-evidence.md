# Bộ màn hình gốc dùng cho Lab 2

Cập nhật 22/10/2026 theo yêu cầu: chỉ dùng màn hình sinh viên đã gửi. Không tạo lại UI, không vẽ low-fi mới, không chỉnh nội dung trong ảnh. Các ảnh bên dưới giữ nguyên tệp gốc đã lưu.

## 10 màn hình và các trạng thái đã nhận

| Màn | Ảnh dùng trong slide và tài liệu | Nguồn / giới hạn |
| --- | --- | --- |
| S01 Bắt đầu | [Workspace](../assets/stitch/prototype-2026-10-11/f1-01-s01-workspace.png) | Flow 1 sinh viên gửi |
| S02 Danh sách lớp / lịch | [Danh sách lớp](../assets/stitch/prototype-2026-10-11/f1-03-s02-class-list.png) | Flow 1 sinh viên gửi |
| S03 Import | [Import markbook](../assets/stitch/prototype-2026-10-11/f1-02-s03-import.png) | Flow 1 sinh viên gửi |
| S04 Điểm danh lớp | [Roster](../assets/stitch/prototype-2026-10-11/f2-01-s04-attendance.png) | Flow 2 sinh viên gửi |
| S05 Cấu hình lịch | [Cấu hình](../assets/stitch/prototype-2026-10-11/f1-04-s05-schedule.png) | Flow 1 sinh viên gửi |
| S06 QR | [QR](../assets/stitch/prototype-2026-10-11/f2-02-s06-qr.png), [xác nhận chốt](../assets/stitch/prototype-2026-10-11/f2-03-s06-confirm.png) | Flow 2 sinh viên gửi |
| S07 Chi tiết sinh viên | [Chi tiết](../assets/stitch/prototype-2026-10-11/f3-02-s07-student.png), [sheet sửa](../assets/stitch/prototype-2026-10-11/f3-03-s07-edit.png) | Flow 3 sinh viên gửi |
| S08 Kết quả slot | [Kết quả](../assets/stitch/prototype-2026-10-11/f3-01-s08-slot-results.png) | Flow 3 sinh viên gửi |
| S09 Xuất kết quả | [Cấu hình xuất](../assets/stitch/prototype-2026-10-11/f3-04-s09-export.png), [kết quả xuất](../assets/stitch/prototype-2026-10-11/f3-05-s09-export-result.png) | Flow 3 sinh viên gửi |
| S10 Google Drive | [Drive V1](../assets/stitch/v1-s10-drive.png) | Bản sinh viên gửi trước, chưa có ảnh S10 trong bộ simulator mới |

Sheet và kết quả xuất là biến thể trạng thái, không cộng thành màn chức năng mới. S10 giữ nhãn V1 cũ để không gây hiểu nhầm.

## Bốn ảnh V3 lịch sử đã khôi phục

Ngày 22/10/2026 đã tìm lại dữ liệu ảnh trong tin nhắn “đây là 4 hình v3” ngày 11/10 và phục hồi nguyên PNG: [chặn xuất](../assets/stitch/v3-s09-export-blocked.png), [sẵn sàng xuất](../assets/stitch/v3-s09-export-ready.png), [thành công](../assets/stitch/v3-s09-export-success.png), [local đã lưu / Drive chờ](../assets/stitch/v3-s09-local-saved-drive-pending.png). Xem [nguồn, manifest và giới hạn](../ai/evidence/recovered-v3-images-2026-10-22/README.md). Đây là minh chứng vòng V3, không thay bộ ảnh prototype trong slide hoặc tự tăng số màn chức năng. Giữ nguyên cả lỗi thiết kế để đối chiếu review gốc.

## Cách sử dụng

- Trình bày đúng nội dung ảnh, nêu sai khác ở [R01–R12](prototype-review.md) thay vì sửa ảnh để che lỗi.
- [State matrix](state-coverage.md) và [quyết định thiết kế](design-decisions.md) là tài liệu đối chiếu. Những trạng thái chưa có ảnh hoặc chưa thử tương tác vẫn ghi thiếu.
- Không gọi ảnh high-fi cũ là low-fi. Chưa có low-fi riêng do sinh viên cung cấp, chưa có bằng chứng thư viện component dùng chung hoặc phép thử 360/412 của UI cuối.
- Các mẫu UI/low-fi và ảnh do Codex tạo ở lượt trước đã rút khỏi bộ nộp, chuyển vào thư mục build riêng để có thể khôi phục. Không dùng kết quả QA của chúng để chấm Lab 2.
