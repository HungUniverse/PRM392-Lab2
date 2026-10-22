# Discovery và bằng chứng cho P01

Cập nhật 22/10/2026. Phạm vi Lab 2 cá nhân, không tạo dữ liệu nghiên cứu giả. Đây là bản tổng hợp tài liệu và giả thuyết để kiểm chứng, không phải biên bản workshop đã diễn ra.

## 1. Problem statement và MVP

Giảng viên FPT quản lý nhiều lớp cần đối chiếu đúng buổi và kết quả trên điện thoại trong thời gian ngắn, vì nhầm ngữ cảnh hoặc trạng thái lưu không rõ có thể dẫn tới ghi nhận sai và thao tác lặp.

MVP gồm F1 chuẩn bị dữ liệu/lịch; F2 điểm danh/chốt; F3 sửa/xuất. Trang sinh viên, extension và OAuth/ghi tệp thật là hệ thống liên quan, không phải yêu cầu triển khai trong Lab 2. Figma được tạm loại khỏi phạm vi sửa theo yêu cầu sinh viên, không coi là đã được miễn yêu cầu nộp.

## 2. Stakeholder và User Map

| ID | Nhóm | Mục đích / quan hệ | Phạm vi thiết kế |
| --- | --- | --- | --- |
| U01 | Giảng viên trực tiếp sử dụng | Chuẩn bị, chốt, kiểm tra và sửa kết quả | Primary P01, S01–S10 |
| U02 | Sinh viên của lớp | Nhận kết quả chính xác; check-in bằng trình duyệt | Tác nhân liên quan F2; không thêm app sinh viên vào bộ 10 màn |
| U03 | Bộ phận đào tạo | Đối chiếu dữ liệu sau khi xuất/nhập | Stakeholder; không xây dashboard riêng |
| U04 | Người triển khai Flutter | Cần thông số, states và navigation rõ | Người nhận handoff; không phải persona dùng app |
| U05 | Giảng viên chấm | Kiểm tra yêu cầu và evidence | Reviewer học phần, không tự ghi Approved thay họ |

Nhóm dễ bỏ sót: giảng viên ít thành thạo kỹ thuật, cần chữ lớn hơn, tên sinh viên dài hoặc mạng yếu. Đây là chiều khác biệt cần hỏi trong nghiên cứu, chưa khẳng định thành một phân khúc độc lập.

## 3. Sổ nguồn và nhãn bằng chứng

| ID | Nguồn có thật | Điều có thể kết luận | Không được suy ra |
| --- | --- | --- | --- |
| E01 | [Chuẩn chung](https://prm393-material.web.app/#standards), [persona](https://prm393-material.web.app/persona-guideline), [Lab 2](https://prm393-material.web.app/lab2-presentation.html), đọc 22/10/2026 | Yêu cầu môn học về artefact, persona, AI log và kiểm thử | Nhu cầu người dùng đã được khảo sát |
| E02 | [12 ảnh prototype](../design/prototype-review.md), nhận/lưu 11/10/2026 | Quan sát được nội dung UI trong ảnh | Tương tác, lưu/QR/Drive thật hoạt động |
| E03 | [AI log](../ai/ai-design-log.md), [review R01–R12](../design/prototype-review.md) | Có các nhận xét đối chiếu ảnh và giả thuyết lỗi UX | Ý kiến giảng viên sử dụng thực tế |
| E04 | [Chỉ mục màn hình gốc](../design/screen-evidence.md) | Liên kết đúng S01–S10 và các biến thể đã nhận | Có low-fi riêng hoặc UI mới do sinh viên cung cấp |

Observed/Reported chỉ dùng cho dữ liệu người dùng khi có nguồn trực tiếp. E01–E04 ở đây là nguồn tài liệu/artefact, không dùng nhãn Observed để biến chúng thành user research. Chưa có interview/observation ID của người tham gia.

## 4. Affinity synthesis trên giả thuyết

Không có ảnh workshop hoặc ghi chú phỏng vấn. Bảng này nhóm **giả thuyết thiết kế**, không gọi là pattern hành vi đã được nghiên cứu.

| Cụm giả thuyết | Assumption | Need được đề xuất | Điều cần hỏi / quan sát |
| --- | --- | --- | --- |
| Đúng ngữ cảnh | A01: dễ nhầm lớp, ngày, lần học | N01 xác định đúng meeting | Yêu cầu kể lần gần nhất chọn nhầm hoặc phải kiểm tra lại |
| Đọc và thao tác | A02: màn nhỏ, chú ý phân tán; A06: nhu cầu chữ lớn/tên dài | N02 đọc đủ, thao tác được | Quan sát cỡ chữ, cách cầm máy, hàng tên dài |
| Cách làm hiện tại | A03: tra markbook/máy tính và đối chiếu FAP mỗi buổi | N03 giữ dữ liệu khi cập nhật | Hỏi từng bước và công cụ dùng ở buổi gần nhất |
| Giảm gián đoạn | A04: mạng yếu và phản hồi lưu mơ hồ gây làm lại | N04 biết local và backup riêng | Cho giải thích màn local thành công / Drive lỗi |
| Kiểm soát sửa sai | A05: cần kiểm tra trước/sau và lý do | N05 sửa có truy vết | Hỏi ai sửa, trong tình huống nào, cần giữ thông tin gì |
| Mô hình thời gian | A07: mốc hai phút có thể bị hiểu nhầm | N06 hiểu hạn từng lượt | Yêu cầu diễn giải lại hướng dẫn QR |
| Cấu hình an toàn | A08: đổi lịch sau điểm danh có thể gây sai ngữ cảnh | N07 biết vì sao bị khóa | Cho chọn lớp đã bắt đầu rồi hỏi hành động tiếp theo |

## 5. Persona Coverage Matrix

| Nhóm hành vi / tác vụ | Persona | Bối cảnh / rào cản | Flow | Nhãn |
| --- | --- | --- | --- | --- |
| Chuẩn bị lớp trước giờ | P01 Primary | Tệp nguồn, lớp chưa bắt đầu | F1 | Assumed |
| Ghi nhận trong lớp | P01 Primary | Ít thời gian, dùng mobile | F2 | Assumed |
| Đối chiếu sau giờ | P01 Primary | Sửa nhầm, mạng yếu | F3 | Assumed |
| Sinh viên check-in | U02 stakeholder | Trình duyệt sinh viên | Liên quan F2 | Ngoài bộ màn giảng viên |

Một Primary Persona được chọn vì cả ba tác vụ thuộc cùng nhóm sử dụng trực tiếp trong phạm vi bài cá nhân. Không khẳng định đã khảo sát thấy không có nhóm khác. Nếu nghiên cứu cho thấy người mới và người thành thạo cần luồng khác đáng kể, tách persona sau khi có nguồn.

## 6. Kế hoạch nghiên cứu tối thiểu

- Mục tiêu: kiểm chứng A01–A08, ưu tiên cách chọn lớp, sửa sai và hiểu trạng thái lưu.
- Đề xuất tuyển 1–2 giảng viên có kinh nghiệm điểm danh, nếu tiếp cận được; đây là kế hoạch, không phải số người đã tham gia hoặc mẫu đại diện thống kê.
- Xin đồng ý, dùng mã người tham gia R01/R02 riêng cho research, không ghi tên/email cá nhân vào repo. Mã này không trùng review issue R01–R12 khi ghi đầy đủ `participant/R01`.
- Hỏi về một buổi cụ thể gần đây, công cụ đang dùng và cách xử lý sai sót; tránh hỏi dẫn dắt “anh/chị có thích app không”.
- Chạy tác vụ không chỉ từng nút; ghi hoàn thành, thời gian, lỗi và lời giải thích. Tách thời gian thao tác khỏi hiệu năng mạng vì prototype mô phỏng.
- Lưu notes ẩn danh, cập nhật assumption thành Observed/Reported/Inferred chỉ khi có nguồn tương ứng. Nếu chưa tuyển được, ghi lý do thực tế khi biết; không tự điền lý do giả.

Hiện trạng: chưa có người tham gia, consent, transcript hoặc kết quả kiểm thử người dùng. Hồ sơ P01 giữ trạng thái Proto-Persona.
