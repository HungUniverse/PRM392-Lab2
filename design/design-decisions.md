# Design Decisions — FAP Attendance

Ngày cập nhật: 22/10/2026 (Asia/Saigon).

Đây là các lựa chọn **áp dụng trong bộ đặc tả hiện hành** theo yêu cầu sửa các mục ngoài Figma ngày 22/10/2026. Codex chuẩn hóa hướng xử lý từ [persona P01](../ux/persona.md), [design brief](DESIGN.md), [screen-spec](screen-spec.md) và [review](prototype-review.md). Không tự ghi sinh viên/giảng viên đã ký duyệt, không khẳng định prototype đã sửa hoặc kiểm thử xong. Chuỗi Need → Decision → Test ở [traceability](../ux/traceability.md). Ảnh liên kết là ảnh trước áp dụng, không phải bằng chứng sau sửa.

## 1. Mười quyết định quan trọng

| ID / phạm vi | Lựa chọn Accept / Modify / Reject | Lý do và nguyên tắc | Bằng chứng / tiêu chí xác minh | Trạng thái áp dụng |
| --- | --- | --- | --- | --- |
| D01 — S01, S09, S10 | **Accept:** local-first, Drive tùy chọn; email workspace chỉ nhận diện | P01/N04; mạng yếu, cần biết bản nào còn an toàn. H1 visibility, H2 real-world match | [S01](../assets/stitch/prototype-2026-10-11/f1-01-s01-workspace.png), [S09](../assets/stitch/prototype-2026-10-11/f3-04-s09-export.png); T16/T17 | Chọn trong đặc tả 22/10; UI/test chưa xác minh |
| D02 — S02 | **Modify:** giữ cả danh sách lớp và lịch tuần, không ép 7 cột vào mobile | P01/N01/N02; tìm lớp ngoài tuần và đọc trên mobile. H6 recognition | [Class list](../assets/stitch/prototype-2026-10-11/f1-03-s02-class-list.png); T19/T20 | Chọn trong đặc tả; ảnh Stitch chưa đổi |
| D03 — S03 | **Modify:** merge giữ lịch sử, phân biệt dữ liệu file và tổng workspace | P01/N03; không hiểu 30 SV thành 90 SV nhập mới. H1, H5 error prevention | [Import](../assets/stitch/prototype-2026-10-11/f1-02-s03-import.png), R03; T01/T02 | Có đề xuất làm rõ trong đặc tả; chưa sửa ảnh |
| D04 — S05 | **Accept:** chỉ sửa lịch khi mọi meeting chưa bắt đầu | P01/N07; không đổi lịch đã dùng ghi nhận. H5; ràng buộc nghiệp vụ | [Editable SE1921](../assets/stitch/prototype-2026-10-11/f1-04-s05-schedule.png); T03–T05 | Đặc tả đã có; Hủy/Lưu chưa kiểm thử |
| D05 — S04, S06 | **Modify:** phân biệt Slot học và khung giờ; 2 phút tính từ quét hợp lệ | P01/N01/N06; tránh nhầm lần học và thời hạn toàn lớp. H2, H4 consistency | [QR](../assets/stitch/prototype-2026-10-11/f2-02-s06-qr.png), R05; T06/T09 và diễn giải lại mốc 2 phút | Câu chữ mục tiêu đã ghi trong đặc tả; Stitch chưa xác minh |
| D06 — S06 | **Reject:** giữ QR chạy ngầm khi Back; **Modify:** xác nhận chốt nêu ô thiếu thành A | P01/N06; Back không đồng nghĩa chốt. H3 user control, H5 prevention | [QR](../assets/stitch/prototype-2026-10-11/f2-02-s06-qr.png), [Confirm](../assets/stitch/prototype-2026-10-11/f2-03-s06-confirm.png); T07–T09 | Có hướng sửa trong tài liệu; chưa áp dụng/xác minh Stitch |
| D07 — S07 | **Modify:** lý do mới bắt buộc sau trim, audit trước/sau luôn xem lại được | P01/N05; truy vết thật, không dùng lại lý do cũ. H5, H9 recovery | [Edit](../assets/stitch/prototype-2026-10-11/f3-03-s07-edit.png), R08/R09; T11–T13 | Đặc tả đã chọn; chưa có audit mới/test thật |
| D08 — S09 | **Modify:** JSON cho extension/CSV trao đổi; tên preview = tên kết quả | P01/N05; tránh sai slot/định dạng; chưa cam kết tích hợp FAP. H2, H4 | [Export](../assets/stitch/prototype-2026-10-11/f3-04-s09-export.png), [Result](../assets/stitch/prototype-2026-10-11/f3-05-s09-export-result.png), R10; T14/T15/T18 | Tên file mục tiêu trong đặc tả; ảnh gốc còn sai khác |
| D09 — S09, S10 | **Reject:** lỗi Drive đồng nghĩa mất local, tự ghi đè conflict hoặc báo synced giả | P01/N04; biết dữ liệu còn và cách phục hồi. H1, H9 recovery | [Result](../assets/stitch/prototype-2026-10-11/f3-05-s09-export-result.png), R12; T16/T17 | Có mô tả phục hồi; chưa có bằng chứng tương tác |
| D10 — Công cụ và phạm vi | **Accept, có giới hạn:** tiếp tục prototype Stitch, tạm gác Figma; không viết Flutter trong bước này | Theo yêu cầu trực tiếp của sinh viên để tiếp tục thiết kế; không đồng nghĩa được miễn hạng mục Figma của đề | Hội thoại: “Bỏ qua figma đi”; [12 ảnh và checklist](prototype-review.md). Chưa có xác nhận giảng viên cho phép thay thế | Đã xác nhận lựa chọn công cụ; chưa xác nhận miễn yêu cầu nộp |

H1–H9 là nhãn heuristic Nielsen, không phải kết quả khảo sát. Lựa chọn trong tài liệu do Codex cập nhật theo nhiệm vụ; không giả chữ ký của người duyệt. Khi áp dụng vào Stitch, ghi phiên bản, ảnh sau sửa và test thực tế. Không dựng lại prompt Stitch bị thiếu hoặc đếm vòng cải tiến theo số ảnh. D10 chỉ là phạm vi công cụ; D01–D09 là lựa chọn UI để giải trình.

## 2. Accessibility — cặp màu token

Đã tính toán ngày 11/10/2026 theo relative luminance sRGB và `(L sáng + 0,05)/(L tối + 0,05)`, làm tròn hai chữ số. Đây là phép tính cho **cặp màu token đề xuất**, không lấy mẫu màu từ screenshot và không chứng nhận UI cuối đạt contrast.

| Chữ / nền | Tỷ lệ | Kết luận cho chữ thường ≥4,5:1 |
| --- | --- | --- |
| #FFFFFF / primary #C93C13 | 5,07:1 | Đạt với cặp màu này |
| #FFFFFF / brand #F4511E | 3,48:1 | Không đạt; không dùng chữ thường trắng trên brand |
| text #243047 / #FFFFFF | 13,22:1 | Đạt với cặp màu này |
| secondary #667085 / #FFFFFF | 4,97:1 | Đạt với cặp màu này |
| success #16835D / #FFFFFF | 4,73:1 | Đạt với cặp màu này |
| error #C93A2B / #FFFFFF | 5,09:1 | Đạt với cặp màu này |
| info #2563B8 / #FFFFFF | 5,91:1 | Đạt với cặp màu này |

Màu trên nền chip nhạt, disabled/pressed, opacity và viền control cần đo riêng. Viền `color/border` chỉ phân vùng trang trí; không dùng làm dấu hiệu duy nhất nhận biết control. Các kết luận trên không áp cho mọi cặp nền khác.

## 3. Checklist accessibility UI cuối

| Hạng mục | Cách kiểm tra | Trạng thái |
| --- | --- | --- |
| Chữ ≥14 sp | Đọc size thật trong thiết kế/preview, không suy từ ảnh zoom | Chưa đo |
| Vùng chạm ≥48 × 48 dp | Đo vùng tương tác thực tế, gồm Back/note/xóa ngoại lệ | Chưa đo |
| Contrast | Đo cặp foreground/background thực tế cho tất cả states | Chưa đo UI cuối; đã tính token ở mục 2 |
| Không chỉ màu | P/A/lỗi có chữ hoặc icon; không chỉ xanh/đỏ | Có dấu hiệu trên ảnh; chưa kiểm toàn bộ states |
| Nhãn tương tác | Icon-only có nhãn truy cập/tooltip phù hợp | Chưa kiểm thử hỗ trợ truy cập |
| Bàn phím/focus | Có thể tới lý do và CTA; lỗi gắn đúng field, giữ dữ liệu | Chưa kiểm thử |
| Chữ lớn/tên dài | Tăng chữ, tên/email dài không clip, hàng tăng chiều cao | Chưa kiểm thử |
| Sheet/dialog | Không thao tác nhầm nền; đọc rõ context và Hủy/Đồng ý | Nền mờ quan sát được; chưa kiểm thử focus/đóng sheet |

## 4. Kiểm tra chiều rộng 360 và 412

Không ghi “đạt responsive” từ các screenshot hiện tại vì chưa có cặp ảnh xác nhận viewport. Dùng cùng dữ liệu và trạng thái cho hai kích thước.

| Trường hợp | 360 dp | 412 dp | Bằng chứng cần bổ sung |
| --- | --- | --- | --- |
| S02 grid, ngày ngoài viewport, lớp trùng giờ | Chưa chạy | Chưa chạy | Ảnh và video cuộn ngang/dọc; nhãn hàng không lệch |
| S04 roster, họ tên dài, hàng cuối | Chưa chạy | Chưa chạy | Không clip/che bởi navigation; đủ danh sách hoặc ghi demo rút gọn |
| S05 form và thông báo locked/error | Chưa chạy | Chưa chạy | Nội dung đủ, không nút lưu sai quyền |
| S06 QR + sheet xác nhận | Chưa chạy | Chưa chạy | QR không biến dạng, hai CTA đọc rõ và chạm được |
| S07 sheet lý do khi mở bàn phím | Chưa chạy | Chưa chạy | Cuộn tới lỗi và Lưu/Hủy |
| S09 tên file/đường dẫn dài, kết quả | Chưa chạy | Chưa chạy | Wrap không mất phần đuôi, CTA không bị che |

Từ 600 dp trở lên là hướng thích ứng trong [handoff](../handoff/flutter-handoff.md), chưa có thiết kế/kiểm thử wide thực tế.

## 5. Phần chưa được giải quyết

- D01–D09 đã chọn trong đặc tả ngày 22/10; cần áp dụng vào Stitch, xem lại trước khi nộp và kiểm thử. Đã nhận [link Stitch](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951); còn cần kiểm tra quyền xem và bổ sung video prototype.
- Cần bằng chứng sau Save/Cancel, sau chốt Flow 2, lý do trống/audit mới và lỗi → phục hồi.
- AI log chưa có đầy đủ prompt/phản hồi/ảnh trước-sau của các vòng muộn; không mặc định đã chứng minh đủ ba vòng.
- P01 đã đủ 12 trường lõi, tên/tuổi minh họa và nhãn Assumed; nghiên cứu và task test chưa thực hiện.
- Hạng mục Figma đang tạm gác; chưa có miễn trừ. Chưa có kiểm thử người dùng hoặc handoff với người khác.
- [Slide và kịch bản demo](../presentation/output/demo-script.md) đã soạn; [checklist nộp bài](../SUBMISSION_CHECKLIST.md) theo dõi phần còn thiếu. Lựa chọn đặc tả không tự chuyển thành UI đã triển khai hoặc kết quả test đạt.

## 6. Chỉ dùng bằng chứng màn hình đã nhận

Theo yêu cầu mới, chỉ dùng [màn hình sinh viên đã gửi](screen-evidence.md). Các mẫu low-fi/UI kit và QA do Codex tạo đã rút khỏi bộ nộp. Chưa có low-fi riêng, thư viện token/component dùng chung hoặc kết quả accessibility/responsive của UI cuối. Không tự tạo UI để đánh dấu các mục này đã đạt.
