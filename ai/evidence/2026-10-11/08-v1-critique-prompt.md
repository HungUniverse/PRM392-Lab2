Bạn là chuyên gia đánh giá UI/UX mobile.

Hãy phản biện phiên bản V1 của ứng dụng FAP Attendance dành cho
giảng viên Trường Đại học FPT, dựa trên các ảnh được cung cấp.

Trong lượt này CHỈ ĐÁNH GIÁ, chưa chỉnh sửa hoặc sinh lại giao diện.

==================================================
1. ĐẦU VÀO VÀ PHẠM VI
==================================================

Các ảnh V1:
- S01: Bắt đầu workspace.
- S02: Dashboard / thời khóa biểu tuần.
- S03: Import markbook.
- S04: Điểm danh lớp.
- S05: Cấu hình lịch lớp.
- S07: Chi tiết sinh viên.
- S08: Lịch sử điểm danh lớp.
- S09: Xuất kết quả.
- S10: Google Drive và đồng bộ.

Chưa có ảnh S06 V1 được cung cấp trong bộ này.
Nếu có ảnh S06 V0 đính kèm, chỉ dùng làm tham khảo và ghi rõ
phiên bản; không khẳng định S06 V1 đã hoàn thiện.

Nếu có ảnh V0 hoặc bản phản biện V0, hãy đối chiếu với V1.
Nếu không có bằng chứng V0, chỉ đánh giá V1, không tự suy diễn
rằng vấn đề đã được sửa.

Nếu được cung cấp persona.md, DESIGN.md và user-flow.md,
hãy đọc trước khi đánh giá. Khi tài liệu và yêu cầu gần nhất
mâu thuẫn, nêu rõ mâu thuẫn, không tự quyết định thay người dùng.

==================================================
2. PERSONA VÀ BỐI CẢNH
==================================================

Người dùng là giảng viên Trường Đại học FPT:
- Quản lý nhiều lớp trong học kỳ.
- Cần thao tác nhanh trước và trong giờ học.
- Sử dụng điện thoại theo chiều dọc.
- Cần xác nhận đúng môn, lớp, ngày và lần học.
- Có thể gặp mạng không ổn định.
- Cần biết kết quả đã lưu local hay đã đồng bộ.
- Cần xem đầy đủ họ tên, sửa sai có lý do và kiểm tra ghi chú.

Không tự đặt tên, tuổi hoặc tạo kết quả phỏng vấn cho persona.

==================================================
3. TIÊU CHÍ ĐÁNH GIÁ
==================================================

Đánh giá theo cả bốn nhóm:

A. Phù hợp persona và tác vụ thực tế.

B. Đúng nghiệp vụ FAP Attendance.

C. 10 nguyên tắc usability của Nielsen:
H1 — Visibility of system status.
H2 — Match between system and the real world.
H3 — User control and freedom.
H4 — Consistency and standards.
H5 — Error prevention.
H6 — Recognition rather than recall.
H7 — Flexibility and efficiency of use.
H8 — Aesthetic and minimalist design.
H9 — Help users recognize, diagnose and recover from errors.
H10 — Help and documentation.

Không cố gán lỗi cho đủ 10 nguyên tắc nếu ảnh không có bằng chứng.

D. Accessibility:
- Tương phản chữ thường tối thiểu 4.5:1.
- Mục tiêu thiết kế của project: body ưu tiên 16,
  nội dung phụ không dưới 14 và vùng chạm tối thiểu 48 × 48.
- Label rõ ràng, nội dung không bị cắt.
- Không chỉ dựa vào màu để phân biệt trạng thái.
- Họ tên dài, chữ phóng lớn, cuộn và bàn phím.

Nếu không đo được từ ảnh, ghi “cần kiểm tra trong Figma/prototype”.
Không suy kích thước font hoặc vùng chạm thực từ kích thước ảnh
đã bị thu nhỏ.

==================================================
4. QUY TẮC NGHIỆP VỤ CẦN ĐỐI CHIẾU
==================================================

- Email giảng viên ở S01 dùng nhận diện workspace,
  không chứng minh đã xác thực đăng nhập.
- Không tự giới hạn domain email nếu yêu cầu không quy định.
- Import ODS/XLSX cập nhật roster, giữ lịch sử và lịch riêng.
- Không tự xóa lớp hoặc sinh viên thiếu trong file import mới.

- Thời khóa biểu gồm thứ Hai đến Chủ nhật và bốn slot:
  Slot 1: 07:00–09:15.
  Slot 2: 09:30–11:45.
  Slot 3: 12:30–14:45.
  Slot 4: 15:00–17:15.
- Phân biệt slot trong ngày với thứ tự lần học trong học kỳ.
- Ngày, thứ, giờ và meeting phải nhất quán giữa các màn hình.
- Nếu dùng ngày demo 24/09/2026, đó là thứ Năm,
  thuộc tuần 21/09–27/09/2026.
- Nhãn “Hôm nay” phải nhất quán trong kịch bản demo.
- Không tự thêm phòng học, chính sách vắng hoặc dữ liệu ngoài nguồn.

- Mỗi lớp cấu hình riêng số tuần và 1 hoặc 2 slot mỗi tuần.
- Theo phiên bản hiện tại, không sửa lịch khi lớp đã có
  slot đang điểm danh hoặc đã chốt.
- Ngày nghỉ/học bù phải phù hợp lịch meeting thực tế.

- Chỉ có P và A; slot tương lai chưa ghi nhận để trống.
- Qua ngày, phần chưa có kết quả chuyển A, giữ nguyên P đã có.
- Chốt danh sách bổ sung A cho phần chưa ghi nhận.
- Sửa sau chốt bắt buộc có lý do, lưu note và audit.
- Qua ngày vẫn phải xem được note.
- Tỷ lệ vắng = số A / tổng meeting đã lên lịch.

- QR đổi mỗi 15 giây.
- Mã bí mật cố định trong một lần bật chế độ.
- Hai phút là thời hạn của từng lượt sinh viên,
  không phải tự chốt cả lớp.
- Chốt thành công trở về đúng lớp/meeting.
- Không khẳng định QR tiếp tục nhận khi rời màn hình
  nếu luồng hiện tại không hỗ trợ.

- Chỉ xuất một lớp/một meeting đã chốt và đủ P/A.
- JSON phục vụ Chrome Extension; CSV trao đổi dữ liệu.
- Không khẳng định CSV được FAP hỗ trợ import trực tiếp.
- Local-first, không database; Drive là tùy chọn.
- Đang đồng bộ phải ngăn bấm lặp.
- Xung đột không tự ghi đè.
- Không cam kết mã hóa hoặc an toàn tuyệt đối nếu chưa có bằng chứng.

==================================================
5. NHỮNG ĐIỂM CẦN KIỂM TRA KỸ TRONG V1
==================================================

Đây là câu hỏi kiểm tra, không phải kết luận lỗi:

- S02: Ngày/thứ đã đúng chưa? Người dùng có dễ tìm ngày hôm nay
  khi ngày đó nằm ngoài vùng cuộn ngang đang thấy không?
- S04: Bộ chọn meeting có giúp nhận biết ngày và lần học rõ ràng?
  Chữ có bị cắt trong card meeting không?
- S05: Trạng thái được sửa có nhất quán với dữ liệu lớp không?
  Nếu S04 đang mở và S05 vẫn được sửa, đây là hai kịch bản khác nhau
  đã khai báo, hay mâu thuẫn trong cùng một kịch bản?
- S07: Hai dòng lịch sử có bị trùng cùng meeting không?
  Note/audit từng thấy ở V0 còn truy cập được hay bị mất dấu hiệu?
- S07/S08: Tổng P/A, số lần học đã diễn ra và danh sách hiển thị
  có nhất quán? Nếu chỉ hiển thị một phần, có giải thích rõ không?
- S08: Slot đang mở đã chặn xuất rõ ràng chưa?
- S09: Công tắc lưu local có khiến người dùng nghĩ có thể tắt
  bản lưu mặc định? Thư mục Drive có nhất quán với S10 không?
- S10: “Đang đồng bộ”, “chờ đồng bộ” và lần thành công gần nhất
  có dễ phân biệt? Lỗi/xung đột có hành động xử lý cụ thể không?
- Toàn bộ: Các nhãn S07/S08/S10 có đang lộ mã thiết kế nội bộ
  không cần thiết trong giao diện dành cho giảng viên không?

==================================================
6. KIỂM TRA BA LUỒNG
==================================================

F1 — Chuẩn bị lớp:
S01 → S03 → S02 → S04 → S05 → S04.
Có import lỗi/chọn lại, hủy và lịch bị khóa.

F2 — Điểm danh:
S02 → S04 → S06 → xác nhận chốt → S04.
Có hủy chốt, lỗi QR/thử lại và Back.
Do thiếu S06 V1, ghi rõ phần nào chưa đánh giá được.

F3 — Kiểm tra và xuất:
S02 → S04 → S08 → S07 → S08 → S09 → S10 nếu cần.
Có lý do trống, hủy sửa, lỗi xuất và offline/retry.

Ảnh có nút không chứng minh nút hoạt động.
Không khẳng định prototype đã nối đủ luồng chỉ từ ảnh tĩnh.

==================================================
7. ĐỊNH DẠNG KẾT QUẢ
==================================================

A. Nhận xét tổng quan:
- Những điểm V1 nên giữ.
- Những rủi ro chính.
- Giới hạn của đánh giá ảnh tĩnh.

B. Bảng đối chiếu V0 → V1, nếu có đủ bằng chứng:
- Vấn đề V0.
- Màn hình.
- Trạng thái: Đã sửa / Sửa một phần / Chưa sửa / Chưa xác minh.
- Bằng chứng V1 và phần còn lại.

C. Ít nhất 5 phát hiện cụ thể, bao phủ ít nhất 5 màn hình.
Không viết chung chung “cần đẹp hơn”.

Mỗi phát hiện phải có:
1. ID màn hình và thành phần.
2. Bằng chứng nhìn thấy.
3. Tác động đến giảng viên và tác vụ.
4. Nguyên tắc Nielsen hoặc tiêu chí accessibility liên quan.
5. Ưu tiên P1/P2/P3 và lý do.
6. Đề xuất sửa cụ thể.
7. Cách kiểm tra sau sửa.

Phân loại rõ:
- Quan sát được.
- Giả thuyết cần kiểm thử.
- Thiếu bằng chứng.

D. Đánh giá ba luồng:
Nêu phần đã thể hiện, nguy cơ ngõ cụt và nhánh còn thiếu bằng chứng.

E. Đề xuất mục tiêu vòng V2:
- Chọn nhóm vấn đề quan trọng nhất.
- Nêu màn hình cần tác động và tiêu chí hoàn thành.
- Không tự sửa UI.
- Không tự ghi quyết định Accept/Modify/Reject thay sinh viên.
- Không tính lượt phản biện này là một vòng cải tiến đã hoàn thành.
