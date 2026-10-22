# Bao phủ màn hình và trạng thái

Cập nhật 22/10/2026. **Có đặc tả ≠ có ảnh ≠ tương tác đã kiểm thử.** Bảng này mô tả phần phải hiện thực trong prototype Stitch. Không tự tạo kết quả test từ bảng.

## 1. Đối chiếu trực tiếp với màn hình sinh viên đã gửi

[Bộ màn hình gốc](screen-evidence.md) là nguồn hình duy nhất. Không tạo low-fi hoặc UI mới để lấp khoảng trống. Cột nội dung rà soát dưới đây là tiêu chí đối chiếu, không khẳng định ảnh đã đáp ứng. Chưa có low-fi riêng do sinh viên cung cấp.

| Screen / flow | Nội dung cần rà soát | UI hiện có để đối chiếu | Khoảng trống |
| --- | --- | --- | --- |
| S01 / F1 | Email, CTA local chính, Drive phụ | [Workspace](../assets/stitch/prototype-2026-10-11/f1-01-s01-workspace.png) | Lỗi email và bàn phím |
| S02 / F1–F3 | Hai chế độ; lớp ngoài tuần; số liệu có mẫu số | [Class list](../assets/stitch/prototype-2026-10-11/f1-03-s02-class-list.png) | Grid, lớp trùng lịch; R01–R03 |
| S03 / F1 | Tệp và số trong file khác tổng workspace | [Import](../assets/stitch/prototype-2026-10-11/f1-02-s03-import.png) | File lỗi → chọn lại; R03 |
| S04 / F2,F3 | Context trước roster; nhãn 3/30 demo rút gọn | [Roster](../assets/stitch/prototype-2026-10-11/f2-01-s04-attendance.png) | Sau chốt; R07 |
| S05 / F1 | Quyền sửa, form, Hủy/Lưu | [Lịch](../assets/stitch/prototype-2026-10-11/f1-04-s05-schedule.png) | Lưu/Hủy, locked và ngoại lệ |
| S06 / F2 | QR, hạn từng SV, Back dừng nhận | [QR](../assets/stitch/prototype-2026-10-11/f2-02-s06-qr.png) | R04–R06; preparing/error |
| S07 / F3 | Lý do mới, sheet cuộn, audit | [Chi tiết](../assets/stitch/prototype-2026-10-11/f3-02-s07-student.png) | R08/R09; validation và audit mới |
| S08 / F3 | Slot active khác closed; công thức tổng | [Kết quả](../assets/stitch/prototype-2026-10-11/f3-01-s08-slot-results.png) | R02/R11; filter empty |
| S09 / F3 | Tên file thống nhất, trạng thái local/Drive riêng | [Xuất](../assets/stitch/prototype-2026-10-11/f3-04-s09-export.png) | R10/R12; loading/error/pending |
| S10 / F1,F3 | Kết nối, retry, local còn an toàn | [Drive V1 cũ](../assets/stitch/v1-s10-drive.png) | Chưa có ảnh S10 mới |

## 2. Ma trận states mục tiêu

N/A chỉ dùng khi trạng thái không có ý nghĩa riêng; không dùng để tránh thiết kế lỗi/loading của thao tác thật.

| ID | Default / populated | Loading | Empty | Error / phục hồi | Success / disabled |
| --- | --- | --- | --- | --- | --- |
| S01 | Email và chọn nguồn | Đang mở nguồn | Email chưa nhập | Email sai: sửa tại ô; nguồn lỗi: thử lại | Sang nguồn; chống bấm lặp khi loading |
| S02 | Lớp / lịch tuần | Đang đọc workspace | Không lớp / tuần trống / tìm không thấy | Đọc lỗi: thử lại hoặc đổi nguồn | Banner import có phạm vi; selected tab |
| S03 | File đã chọn, form hợp lệ | Đang import | Chưa có file | Sai file: Chọn lại; form lỗi: giữ nội dung | Đã import/cảnh báo; chặn submit lặp |
| S04 | Active / closed | Đang đọc roster | Roster trống / tìm không thấy | Tải lỗi: Thử lại | Đã chốt; slot closed không mở QR |
| S05 | Editable / locked | Đang lưu | Chưa có ngoại lệ, CTA Thêm | Ngày/tuần sai: lỗi tại trường | Đã lưu; locked không có hành động lưu khả dụng |
| S06 | QR ready | Chuẩn bị link / đang chốt | N/A; chưa sẵn sàng thuộc preparing/error | Link/lưu lỗi: thử lại hoặc về lớp | Chốt về S04; chống chốt lặp |
| S07 | History, note, edit | Đang tải / lưu | Chưa lịch sử / chưa ghi chú | Lý do trắng: giữ sheet; lỗi lưu: giữ giá trị | Saved, audit mới; upcoming không sửa |
| S08 | History / slot results | Đọc lịch sử | Chưa slot chốt / bộ lọc trống | Tải lỗi: thử lại | Slot closed được xuất; active bị chặn xuất |
| S09 | Ready / blocked | Exporting / backup pending | Chưa có slot hợp lệ: hướng về lớp | Local lỗi: thử lại; Drive lỗi: retry riêng | Local saved; synced chỉ khi chọn và xong |
| S10 | Disconnected / connected | Connecting / syncing | Không file nguồn / queue trống | Auth/network/conflict: hành động cụ thể | Synced; không bấm sync lặp |

Bằng chứng quan sát trên bộ mới: populated, editable, QR ready, hai sheet và export-result. Các state còn lại là đặc tả hoặc ảnh phiên bản cũ, chưa có đủ bằng chứng mới. Kết quả tương tác vẫn ở [review](prototype-review.md).

## 3. Điều kiện nghiệm thu không phụ thuộc công cụ

- Chạy trọn F1–F3 bằng đường sản phẩm, không chỉ dùng thanh đổi Flow của simulator.
- Ít nhất một lỗi có phục hồi: file sai → chọn lại hoặc lý do trống → nhập lại → lưu.
- Một overlay không thao tác xuyên nền, Hủy không mutation; một loading có kết quả hoặc lỗi thật trong mô phỏng.
- Test cùng dữ liệu ở 360/412, tên dài, path dài, bàn phím và vùng cuộn. Chưa có kết quả này trên Stitch; không dùng mẫu UI tự tạo làm bằng chứng thay thế.
- Sau khi sửa R01–R12, lưu ảnh mới riêng và retest, không ghi đè ảnh gốc.
