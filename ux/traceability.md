# Truy vết Persona đến UI và kiểm thử

Ngày 22/10/2026. E là nguồn tài liệu trong [discovery](discovery.md), A là assumption. Chuỗi dưới đây là giả thuyết thiết kế cho P01, không biến E02 ảnh UI thành bằng chứng hành vi người dùng.

## Ma trận Need → User story → Flow → Screen → Decision → Test

| Nguồn / insight giả thuyết | Need / user story | Flow / screen | Quyết định đặc tả | Test / tiêu chí chấp nhận |
| --- | --- | --- | --- | --- |
| E02/E03, A01: ngữ cảnh dễ nhầm | N01 / US01: Là giảng viên, tôi muốn tìm đúng lớp và meeting để không ghi nhầm | F1/F2/F3; S02, S04, S08 | D02, D05: giữ danh sách và lịch, ngày/khung giờ rõ | T01, T06, T19; đúng lớp/meeting; mục tiêu tìm ≤15 giây |
| E02/E03, A02/A06: khó đọc/thao tác | N02 / US02: Tôi muốn đọc đủ họ tên và tới được nút khi dùng điện thoại | F1/F2/F3; S01–S10 | Chữ ≥14 sp, target ≥48 dp, nội dung cuộn | T20, T21; đo ở 360/412, tên dài/bàn phím không che CTA |
| E02/E03, A03: cần giữ ngữ cảnh cũ | N03 / US03: Tôi muốn cập nhật dữ liệu mà không mất lịch sử đã ghi | F1; S01, S03, S02, S05; S10 nguồn tùy chọn | D03/D04: merge có phạm vi, khóa đổi lịch sau bắt đầu | T01–T05; Hủy giữ cũ; lỗi có Chọn lại |
| E02/E03, A04: trạng thái lưu mơ hồ | N04 / US04: Tôi muốn biết bản trên máy còn an toàn khi backup lỗi | F3; S09, S10 | D01/D09: local bắt buộc; Drive tùy chọn, retry riêng | T16, T17; bỏ Drive không báo synced; Drive lỗi không xuất lại local |
| E02/E03, A05: cần truy vết sửa | N05 / US05: Tôi muốn sửa đúng người/buổi và giải thích thay đổi | F3; S08, S07, S09 | D07/D08: lý do mới, cập nhật tổng và audit; tên file thống nhất | T11–T15; lý do trắng chặn; đổi P thành A cập nhật 28/2 thành 27/3 |
| E02/E03, A07: nhầm thời hạn | N06 / US06: Tôi muốn hiểu khi nào check-in còn hiệu lực và chốt có hậu quả gì | F2; S04, S06 | D05/D06: hai phút sau từng lượt; Back không chốt | T06–T10; 26P/0A/4 thiếu thành 26P/4A/0 khi xác nhận |
| E02/E03, A08: chỉnh lịch sai thời điểm | N07 / US07: Tôi muốn biết lớp nào còn được sửa lịch trước khi nhập | F1; S02, S05, S04 | D04: chặn và giải thích khi active/closed | T03–T05; SE1921 editable, SE1920 locked |

## Mã test chuẩn và mã cũ

Giữ nguyên mã cũ trong [review](../design/prototype-review.md) để không phá lịch sử. T01–T21 là bí danh truy vết, không phải thêm 21 test đã chạy.

| ID | Mã test hiện có | ID | Mã test hiện có | ID | Mã test hiện có |
| --- | --- | --- | --- | --- | --- |
| T01 | F1-01 | T08 | F2-03 | T15 | F3-05 |
| T02 | F1-02 | T09 | F2-04 | T16 | F3-06 |
| T03 | F1-03 | T10 | F2-05 | T17 | F3-07 |
| T04 | F1-04 | T11 | F3-01 | T18 | F3-08 |
| T05 | F1-05 | T12 | F3-02 | T19 | NAV-01 |
| T06 | F2-01 | T13 | F3-03 | T20 | A11Y-01 |
| T07 | F2-02 | T14 | F3-04 | T21 | A11Y-02 |

T18 kiểm tra không xuất slot chưa chốt (D08). Mọi screen S01–S10 đã thuộc ít nhất một flow trong [user-flow](user-flow.md); đối chiếu cùng [screen-spec](../design/screen-spec.md). Tất cả kết quả tương tác/khả năng tiếp cận của prototype Stitch vẫn chưa được ghi nhận.
