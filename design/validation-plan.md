# Kế hoạch validation và mẫu ghi kết quả

Cập nhật 22/10/2026. Test case chi tiết T01–T21 được ánh xạ trong [traceability](../ux/traceability.md) và [prototype review](prototype-review.md). Chưa có kết quả người dùng; biểu mẫu này không phải biên bản test đã chạy.

## 1. Chuẩn bị

- Người thử: ưu tiên giảng viên phù hợp P01; dùng mã ẩn danh và xin đồng ý trước khi ghi hình/ghi chú.
- Không hướng dẫn từng nút. Giới thiệu đây là mô phỏng, không thao tác trên dữ liệu cá nhân thật.
- Ghi link/phiên bản, viewport, ngày thực tế, trạng thái fixture và đường đi. Ngày 24/09/2026 trong app là ngày giả lập.
- Dừng nếu có thông tin cá nhân/credential không được phép công khai. Khi dùng bạn cùng lớp thay người đích, ghi rõ giới hạn.

## 2. Task không dẫn dắt

| ID | Đề bài cho người thử | Điều quan sát | Thành công mục tiêu |
| --- | --- | --- | --- |
| UT01 | Chuẩn bị dữ liệu lớp SE1921 rồi đổi số tuần; thử bỏ thay đổi trước khi lưu bản mới | File lỗi/chọn lại, Hủy và Lưu, đúng lớp | Hủy không đổi; lưu cập nhật, không mất lịch sử |
| UT02 | Bạn bắt đầu điểm danh đúng buổi hôm nay rồi kết thúc khi vẫn còn bốn người chưa ghi | Chọn lớp/meeting, hiểu QR, xác nhận chốt, Back | Mở QR ≤20 giây; chốt 26P/4A/0 thiếu; không nhận tiếp |
| UT03 | Kết quả Slot 4 của một SV bị ghi nhầm. Hãy sửa, giải thích và xem lại thay đổi | Lý do trống, Hủy, đổi P/A thật và audit | Lưu hợp lệ ≤30 giây; thống kê cập nhật đúng |
| UT04 | Bạn cần bản kết quả để đối chiếu, nhưng Drive đang mất mạng | Định dạng, tên file, hiểu local/Drive | Biết local còn; tìm được retry, không xuất lại local |

UT là phiên kiểm thử người dùng; T là test chức năng. Không cộng chúng thành số người tham gia.

## 3. Mẫu ghi cho từng lần chạy

| Trường | Giá trị hiện tại |
| --- | --- |
| Người thử / ngày / đồng ý | Chưa thực hiện |
| Phiên bản / viewport / fixture | Chưa ghi nhận |
| Task / đường đi thực tế | Chưa ghi nhận |
| Kết quả đạt/chưa đạt và bằng chứng | Chưa kiểm thử |
| Thời gian thao tác / số lỗi / trợ giúp | Chưa đo |
| Quan sát hoặc tự thuật có mã nguồn | Chưa có |
| Issue / mức độ / cách sửa | Chưa ghi nhận |
| Retest / kết quả / link | Chưa thực hiện |

## 4. UI Checklist 20 tiêu chí

Dùng [checklist môn học](https://prm393-material.web.app/ui-checklist.html) cho **từng màn hình chính**, không chấm một ảnh thay toàn bộ app. Các nhóm: Text & Content, Color Discipline, Density & Whitespace, Visual Hierarchy, Consistency & Accessibility; mỗi nhóm bốn tiêu chí.

Ghi screen ID, phiên bản, người đánh giá, ngày, 20 kết quả và ba ưu tiên. Chỉ đánh dấu đạt khi có căn cứ; mục đo contrast/font/target phải có số đo. 16/20 là 80; muốn trên 80 cần ít nhất 17/20, nhưng Critical liên quan vẫn phải đạt. Chưa có bản chấm từng màn hoặc tổng điểm chính thức.

## 5. Ưu tiên và retest

- Blocker: không hoàn thành task, sai người/buổi, Hủy làm mất dữ liệu hoặc không có cách phục hồi.
- Major: thống kê/tên file không nhất quán, không biết đã lưu ở đâu, không đọc/chạm được hành động.
- Minor: wording hoặc khoảng cách không cản hoàn thành; không dùng mức Minor cho lỗi sai dữ liệu.
- Sau sửa lưu ảnh phiên bản mới và chạy lại test liên quan. Không biến việc sửa Markdown thành kết quả retest của prototype.
