Bạn là chuyên gia thiết kế UI/UX mobile.

Hãy thiết kế đầy đủ 10 màn hình cho ứng dụng FAP Attendance dành
cho giảng viên Trường Đại học FPT. Đây là bản thiết kế V0 của
bài Lab 2: Thiết kế UI/UX có hỗ trợ AI.

Sản phẩm cần là một hệ thống giao diện nhất quán, có luồng sử dụng
rõ ràng, không phải 10 màn hình rời rạc.

Nếu có tài liệu đính kèm, hãy đọc persona.md, DESIGN.md và
user-flow.md trước khi thiết kế. Nếu phát hiện nội dung mâu thuẫn,
hãy nêu rõ để tôi xác nhận, không tự thay đổi nghiệp vụ.

==================================================
1. BỐI CẢNH SẢN PHẨM
==================================================

FAP Attendance hỗ trợ giảng viên:
- Import danh sách lớp và sinh viên từ markbook.
- Xem lịch dạy theo tuần.
- Cấu hình lịch riêng cho từng lớp.
- Mở QR để sinh viên điểm danh.
- Theo dõi kết quả theo thời gian thực.
- Chốt danh sách, xem lịch sử và ghi chú sửa điểm danh.
- Xuất JSON/CSV phục vụ nhập kết quả vào FAP.
- Đồng bộ dữ liệu qua Google Drive.

Ứng dụng không dùng database.
Dữ liệu được lưu bằng file local và có thể đồng bộ Google Drive.

Lab này tập trung thiết kế giao diện mobile cho GIẢNG VIÊN,
dựa trên nghiệp vụ của ứng dụng desktop hiện có.

Sinh viên quét QR bằng camera điện thoại và mở trình duyệt để
đăng nhập, điểm danh. Sinh viên không cần cài ứng dụng.

Không thiết kế Chrome Extension, website FAP clone hoặc ứng dụng
riêng cho sinh viên trong bộ 10 màn hình này.

==================================================
2. NGƯỜI DÙNG VÀ MỤC TIÊU UX
==================================================

Người dùng chính:
Giảng viên Trường Đại học FPT.

Không tự đặt tên, tuổi, giới tính hoặc thông tin cá nhân cho persona.

Bối cảnh:
- Giảng viên quản lý nhiều lớp trong học kỳ.
- Thường thao tác nhanh trước hoặc trong giờ học.
- Có thể cầm điện thoại bằng một tay.
- Cần nhìn rõ môn, lớp, ngày và slot để tránh điểm danh nhầm.
- Mạng có thể không ổn định.
- Cần biết dữ liệu đã lưu local hay đã đồng bộ Drive.

Mục tiêu UX:
- Từ dashboard, mở đúng lớp và slot với ít thao tác.
- Dễ phân biệt đang điểm danh, đã chốt và chưa điểm danh.
- Không chốt nhầm hoặc mất dữ liệu do thao tác thiếu xác nhận.
- Đọc được đầy đủ họ tên sinh viên.
- Có thông báo lỗi cụ thể và hành động khôi phục rõ ràng.
- Không hiển thị thông tin kỹ thuật không cần thiết.

==================================================
3. PHONG CÁCH THIẾT KẾ
==================================================

Phong cách:
- Hiện đại, gọn gàng, chuyên nghiệp, phù hợp môi trường đại học.
- Trắng và cam là màu chủ đạo.
- Có thể thêm xanh lá, đỏ và xanh dương để biểu thị trạng thái.
- Ưu tiên tính dễ đọc và hiệu quả sử dụng hơn trang trí.
- Không dùng quá nhiều gradient, hiệu ứng kính hoặc shadow lớn.
- Không biến giao diện thành một dashboard thống kê quá phức tạp.

Bảng màu:
- Primary: #C93C13.
- Brand orange: #F4511E.
- Background: #FFF7F3.
- Surface/card: #FFFFFF.
- Text chính: #243047.
- Text phụ: #667085.
- Success/Present: #16835D.
- Error/Absent: #C93A2B.
- Information: #2563B8.

Dùng #C93C13 cho nút có chữ trắng thông thường.
Cam sáng #F4511E ưu tiên dùng làm điểm nhấn nhận diện.
Kiểm tra tương phản khi phối màu, không mặc định mọi cặp màu
trong bảng đều đạt yêu cầu.

Typography:
- Font hỗ trợ đầy đủ tiếng Việt, ưu tiên Roboto.
- Heading khoảng 24px.
- Section title khoảng 20px.
- Body mặc định 16px.
- Nội dung phụ tối thiểu 14px.
- Phân cấp chữ rõ ràng.

Spacing:
- Sử dụng hệ khoảng cách 4, 8, 12, 16, 24, 32px.
- Lề nội dung chính khoảng 16px.
- Bo góc nhất quán theo các mức 8, 12, 16px.
- Nút chính cao khoảng 52px.
- Vùng chạm tối thiểu 48 × 48px.

Accessibility:
- Chữ thông thường đạt tương phản tối thiểu 4.5:1.
- Chữ lớn và thành phần giao diện đạt tối thiểu 3:1.
- Không chỉ dùng màu để biểu thị trạng thái.
- Kết hợp chữ, icon và màu cho Present, Absent, lỗi và đồng bộ.
- Text field có label rõ ràng, không chỉ có placeholder.
- Hỗ trợ nội dung dài và tăng kích thước chữ hợp lý.
- Không cắt mất tên sinh viên hoặc thông báo quan trọng.

==================================================
4. KÍCH THƯỚC VÀ ĐIỀU HƯỚNG
==================================================

Thiết kế mobile portrait với frame chính 360 × 800px.

Bố cục cần thích ứng được với chiều rộng 412px:
- Không tràn ngang ngoài các vùng cuộn có chủ đích.
- Không thu nhỏ chữ để ép nội dung.
- Màn hình có nội dung dài được cuộn dọc.
- Nút quan trọng không che nội dung hoặc bị bàn phím che.

Điều hướng:
- Sau khi có workspace, hai điểm đến cấp cao là:
  “Lịch tuần” và “Google Drive”.
- Các màn hình lớp, QR, lịch sử, chi tiết sinh viên và xuất file
  là màn hình con với nút Back rõ ràng.
- Trước khi có workspace, không hiển thị dashboard có dữ liệu giả
  như thể giảng viên đã import thành công.
- Giữ ngữ cảnh lớp và slot khi chuyển màn hình hoặc quay lại.
- Không dùng menu gồm cả 10 mục như 10 chức năng ngang hàng.

==================================================
5. DỮ LIỆU VÀ QUY TẮC NGHIỆP VỤ
==================================================

Import:
- Hỗ trợ file .ods và .xlsx.
- Đọc mã lớp, MSSV, email, họ tên và MemberCode nếu có.
- Bỏ qua các cột điểm.
- Import cập nhật dữ liệu, không mặc định xóa lịch sử cũ.
- Lớp hoặc sinh viên không xuất hiện trong file mới không bị
  tự động xóa.
- Có cảnh báo thiếu header, trùng MSSV/email hoặc dữ liệu sai.

Lịch:
- Mặc định 10 tuần, 2 slot mỗi tuần.
- Có thể cấu hình riêng từng lớp: số tuần, 1 hoặc 2 slot mỗi tuần,
  ngày học, khung giờ, ngày nghỉ và học bù.
- Theo phiên bản nguồn hiện tại, lớp đã có slot đang điểm danh
  hoặc đã chốt thì không được thay đổi cấu hình lịch.
- Khi bị khóa, phải giải thích lý do; không chỉ vô hiệu hóa nút.

Điểm danh:
- Chỉ có P — Present và A — Absent.
- Slot tương lai để trống, không tự đánh A.
- Slot đã qua ngày tự chốt phần chưa có kết quả thành A,
  giữ nguyên các P đã ghi nhận.
- Slot đã qua ngày chỉ cho xem kết quả và ghi chú.
- Một workspace chỉ có một phiên điểm danh đang hoạt động.
- Giảng viên chọn đúng slot của ngày hiện tại để mở điểm danh.
- Không tự thêm quy tắc bắt buộc phải đúng phút bắt đầu lớp.

QR:
- QR đổi mỗi 15 giây.
- Có QR thường và QR + mã bí mật.
- Mã bí mật gồm 6 chữ số, giữ nguyên trong một lần bật chế độ
  QR + mã bí mật; không đổi theo từng lượt QR.
- Mỗi lượt quét hợp lệ tạo thời hạn 2 phút cho sinh viên hoàn tất
  đăng nhập và gửi điểm danh.
- Đây không phải thời gian tự động chốt toàn bộ phiên của lớp.
- Gửi điểm danh hợp lệ cập nhật P.
- Sinh viên đã có P gửi lại không tạo bản ghi trùng.
- Giảng viên chủ động bấm chốt danh sách.
- Khi chốt, các ô chưa có kết quả chuyển thành A.
- Chốt xong quay về màn hình lớp, giữ đúng slot.
- Phiên đã chốt trong ngày có thể mở lại để nhận bổ sung,
  giữ nguyên kết quả trước đó.
- Nếu rời màn hình QR, cần thông báo việc nhận check-in sẽ dừng;
  không mô tả rằng QR vẫn hoạt động nền.

Sửa điểm danh:
- Khi sửa kết quả đã chốt trong ngày, phải nhập lý do.
- Lý do không được để trống hoặc chỉ chứa khoảng trắng.
- Lưu ghi chú và lịch sử sửa cùng dữ liệu điểm danh.
- Ô đã sửa có icon note.
- Chạm vào ô có note để xem lý do, thời gian và thay đổi.
- Qua ngày vẫn đọc được note nhưng không sửa trực tiếp.

Thống kê:
- Tổng P và A được tính từ kết quả đã ghi nhận.
- Tỷ lệ vắng = số A / tổng slot đã lên lịch của lớp.
- Không đổi mẫu số thành số slot đã diễn ra.
- Chưa có slot thì tỷ lệ hiển thị 0%, không gây lỗi chia cho 0.

Xuất và đồng bộ:
- Chỉ xuất kết quả của một lớp và một slot đã chốt.
- Không xuất khi còn kết quả chưa xác định.
- Có JSON phục vụ extension và CSV.
- Không lưu OTP, QR token, mật khẩu hoặc token đăng nhập
  trong file lịch sử hay file xuất.
- Google Drive là tùy chọn, mất mạng vẫn dùng dữ liệu local.
- Không tự ghi đè khi phát hiện xung đột.
- Không tuyên bố đã có chức năng gộp xung đột tự động.

==================================================
6. THIẾT KẾ ĐẦY ĐỦ 10 MÀN HÌNH
==================================================

S01 — Bắt đầu workspace

Mục tiêu:
Giúp giảng viên bắt đầu sử dụng ứng dụng.

Nội dung:
- Nhận diện FAP Attendance.
- Giới thiệu ngắn lợi ích.
- Ô email giảng viên có label.
- Nút chính “Bắt đầu với markbook”.
- Lựa chọn “Kết nối Google Drive”.
- Ghi chú ngắn dữ liệu được lưu local, Drive là tùy chọn.

Lưu ý:
Email dùng nhận diện workspace, không phải bằng chứng đăng nhập
đã được xác thực. Không tự thêm ô mật khẩu giảng viên.

Trạng thái:
- Mặc định.
- Email không hợp lệ.
- Đang mở workspace.
- Lỗi mở dữ liệu và thử lại.

Điều hướng:
- Markbook → S03.
- Google Drive → S10.
- Workspace sẵn sàng → S02.


S02 — Dashboard / Thời khóa biểu tuần

Mục tiêu:
Giảng viên nhìn được lịch tuần và mở đúng lớp, đúng slot.

Nội dung:
- Tên học kỳ.
- Tiêu đề “Thời khóa biểu tuần”.
- Khoảng ngày của tuần.
- Tuần trước, tuần sau và “Hôm nay”.
- Chọn ngày hoặc tuần.
- Bảng 7 ngày từ thứ Hai đến Chủ nhật.
- 4 hàng slot:
  Slot 1: 07:00–09:15.
  Slot 2: 09:30–11:45.
  Slot 3: 12:30–14:45.
  Slot 4: 15:00–17:15.
- Ô lớp có mã môn, mã lớp, giờ và trạng thái điểm danh.
- Highlight ngày hiện tại.
- Nếu trùng lịch, hiển thị đủ các lớp trong ô.
- Hành động import/cập nhật markbook.
- Lối mở danh sách quản lý lớp, có thể dùng section thu gọn.

Thiết kế mobile:
- Bảng có thể cuộn ngang.
- Giữ cột nhãn slot bên trái.
- Có dấu hiệu giúp người dùng nhận biết bảng cuộn ngang.
- Không ép cả 7 cột thành chữ quá nhỏ.
- Không sao chép bố cục desktop nguyên xi vào điện thoại.

Không tự thêm:
Phòng học, tên giảng viên khác, link Meet hoặc trạng thái online
nếu không có trong dữ liệu.

Trạng thái:
- Có lịch.
- Tuần không có lịch.
- Chưa có lớp với CTA import.
- Đang tải và lỗi tải.

Điều hướng:
- Ô lớp → S04 với đúng meeting được chọn.
- Import → S03.
- Google Drive → S10.


S03 — Import markbook

Mục tiêu:
Nhập hoặc cập nhật dữ liệu lớp an toàn.

Nội dung:
- Chọn file .ods hoặc .xlsx.
- Nguồn local; Drive chỉ khi đã kết nối và có quyền chọn file.
- Tên file được chọn.
- Học kỳ, ngày bắt đầu, số tuần mặc định.
- Lựa chọn 1 hoặc 2 slot mỗi tuần.
- Preview số lớp và số sinh viên.
- Danh sách cảnh báo dễ đọc.
- Giải thích ngắn: cập nhật roster, giữ lịch sử điểm danh.
- Nút xác nhận import và hủy.

Trạng thái:
- Chưa chọn file.
- Đang đọc file.
- Preview thành công.
- File sai định dạng hoặc thiếu header.
- Có dữ liệu trùng cần xử lý.
- Import thành công.

Điều hướng:
- Thành công → S02.
- Hủy → nơi mở import.


S04 — Điểm danh lớp

Mục tiêu:
Xem và quản lý kết quả của lớp theo slot.

Nội dung:
- Mã môn, mã lớp.
- Ngày, giờ và slot đang chọn.
- Bộ chọn slot rõ ràng.
- Tổng sinh viên, số P, số A và tiến độ.
- Tìm sinh viên theo MSSV hoặc họ tên.
- Danh sách MSSV, họ tên đầy đủ và kết quả slot đang chọn.
- Lối xem thống kê P/A/% vắng của từng sinh viên.
- Icon note tại kết quả có ghi chú.
- Nút mở QR hoặc mở lại điểm danh tùy trạng thái.
- Nút cấu hình lịch.
- Lối xem lịch sử và xuất kết quả.

Thiết kế mobile:
Ưu tiên danh sách đọc rõ. Nếu có bảng toàn học kỳ, sử dụng
vùng cuộn ngang có chủ đích hoặc chế độ xem riêng;
không ép tất cả cột vào 360px.

Trạng thái:
- Slot hôm nay chưa mở.
- Đang điểm danh.
- Đã chốt trong ngày.
- Slot đã qua ngày, chỉ xem.
- Slot tương lai.
- Không tìm thấy sinh viên.

Điều hướng:
- Mở QR → S06.
- Cấu hình → S05.
- Sinh viên → S07.
- Lịch sử → S08.
- Xuất kết quả → S09.


S05 — Cấu hình lịch lớp

Mục tiêu:
Override lịch riêng của lớp trước khi có hoạt động điểm danh.

Nội dung:
- Môn, mã lớp.
- Ngày bắt đầu.
- Số tuần.
- 1 hoặc 2 slot mỗi tuần.
- Chọn ngày học và khung giờ.
- Quản lý ngày nghỉ và học bù.
- Preview tổng slot và lịch được sinh.
- Nút lưu và hủy.

Validation:
- Số tuần phải hợp lệ.
- Ngày và khung giờ phải đầy đủ.
- Báo lỗi cấu hình không hợp lệ.
- Nếu lớp đã có slot đang điểm danh hoặc đã chốt:
  hiển thị thông báo khóa chỉnh lịch và lý do.

Điều hướng:
- Lưu thành công → S04 với lịch được cập nhật.
- Hủy → S04.


S06 — Điểm danh QR

Mục tiêu:
Mở phiên cho sinh viên check-in và chốt danh sách.

Nội dung:
- Môn, lớp, slot và ngày.
- Segmented control “QR thường” / “QR + mã bí mật”.
- QR lớn, tương phản cao.
- Đếm ngược tới lượt đổi QR tiếp theo.
- Mã bí mật 6 chữ số khi bật chế độ tương ứng.
- Chú thích mã bí mật giữ nguyên trong lần bật chế độ này.
- Thông báo mỗi lượt quét hợp lệ có 2 phút hoàn tất.
- Trạng thái sẵn sàng nhận điểm danh.
- Tổng sinh viên đã có mặt.
- Danh sách check-in mới.
- Nút “Chốt danh sách”.

Hộp xác nhận chốt:
- Số Present hiện tại.
- Số sinh viên chưa có kết quả sẽ chuyển Absent.
- Hai hành động rõ ràng: “Tiếp tục điểm danh” và “Chốt danh sách”.

Trạng thái:
- Đang chuẩn bị QR.
- Đang nhận check-in.
- Lỗi kết nối và thử lại.
- Đang chốt.
- Chốt thất bại và thử lại.

Back:
Cảnh báo việc nhận check-in sẽ dừng khi rời màn hình.
Không tự chốt chỉ vì bấm Back.

Không hiển thị:
- Mô phỏng Lab 1.
- Ô email sinh viên giả lập.
- localhost, URL tunnel dài hoặc hướng dẫn cấu hình kỹ thuật.
- Nút giả lập “Ghi nhận Present”.

Điều hướng:
- Chốt thành công → S04 với đúng slot.
- Rời màn hình có xác nhận → S04.


S07 — Chi tiết sinh viên

Mục tiêu:
Theo dõi chuyên cần và đọc lịch sử sửa của một sinh viên.

Nội dung:
- MSSV, họ tên đầy đủ, email và lớp.
- Tổng P, tổng A, tỷ lệ vắng.
- Giải thích ngắn mẫu số tỷ lệ vắng.
- Danh sách kết quả từng slot theo ngày.
- Icon note nếu kết quả có ghi chú.
- Chi tiết ghi chú gồm lý do, thời gian và thay đổi.
- Hành động sửa cho slot đã chốt trong ngày còn được phép sửa.

Form sửa:
- Kết quả P/A.
- Lý do bắt buộc.
- Lưu và hủy.
- Không cho lưu lý do trống.
- Không tạo thay đổi nếu chỉ hủy.

Trạng thái:
- Chưa có kết quả.
- Có kết quả.
- Đang lưu.
- Lỗi lưu và thử lại.
- Slot đã qua ngày: chỉ xem kết quả và note.

Điều hướng:
Back trở lại đúng màn hình và ngữ cảnh trước đó.


S08 — Lịch sử điểm danh lớp

Mục tiêu:
Tìm lại và kiểm tra các slot đã chốt.

Nội dung:
- Môn, mã lớp.
- Danh sách slot đã chốt.
- Ngày, giờ, số thứ tự slot.
- Tổng P/A.
- Dấu hiệu có chỉnh sửa.
- Bộ lọc ngày hoặc trạng thái phù hợp.
- Chọn slot để xem danh sách kết quả.
- Lối mở chi tiết sinh viên và xuất kết quả.

Trạng thái:
- Có lịch sử.
- Chưa có lịch sử.
- Bộ lọc không có kết quả.
- Đang tải, lỗi và thử lại.

Không hiển thị:
QR token, OTP, mật khẩu hoặc token đăng nhập.

Điều hướng:
- Kết quả sinh viên → S07.
- Xuất slot đã chọn → S09.
- Back → S04.


S09 — Xuất kết quả

Mục tiêu:
Tạo file điểm danh của đúng lớp và đúng slot.

Nội dung:
- Mã môn, mã lớp, ngày và slot.
- Tổng P/A.
- Lựa chọn JSON hoặc CSV.
- Giải thích ngắn:
  JSON phục vụ extension; CSV phục vụ trao đổi dữ liệu.
- Tên file preview dễ hiểu.
- Nút xuất file local.
- Tùy chọn đồng bộ Drive khi đã kết nối.

Validation:
- Chỉ xuất slot đã chốt.
- Chặn nếu còn kết quả chưa xác định.
- Thông báo cụ thể cần quay lại đâu để xử lý.

Trạng thái:
- Sẵn sàng xuất.
- Đang xuất.
- Thành công với tên/vị trí file.
- Lỗi và thử lại.
- Xuất local thành công nhưng đang chờ đồng bộ.

Không yêu cầu kết nối Drive mới được xuất local.

Điều hướng:
- Back → màn hình trước.
- Quản lý đồng bộ → S10.


S10 — Google Drive và đồng bộ

Mục tiêu:
Giúp giảng viên hiểu trạng thái kết nối và lưu dữ liệu trên Drive.

Nội dung:
- Chưa kết nối hoặc tài khoản đang kết nối.
- Nút kết nối/ngắt kết nối.
- Trạng thái dữ liệu local.
- Lần đồng bộ thành công gần nhất.
- Số thay đổi hoặc file đang chờ đồng bộ.
- Nút “Đồng bộ ngay”.
- Tóm tắt thư mục FAP Attendance và học kỳ.

Trạng thái:
- Chưa kết nối.
- Đang kết nối.
- Đã kết nối.
- Đang đồng bộ: khóa nút chống bấm lặp.
- Đã đồng bộ.
- Mất mạng/chờ đồng bộ.
- Quyền truy cập bị thu hồi và kết nối lại.
- Phát hiện xung đột cần kiểm tra.

Xung đột:
Không tự ghi đè và không tuyên bố đã gộp dữ liệu.
Hiển thị thông báo giữ dữ liệu và hướng dẫn kiểm tra phù hợp.

Điều hướng:
Có thể mở từ S01 hoặc sau khi đã có workspace.
Back phải trở về đúng nơi đã mở màn hình này.

==================================================
7. BA LUỒNG PROTOTYPE
==================================================

Luồng 1 — Chuẩn bị lớp:
S01 → S03 → S02 → S04 → S05 → S04.

Happy path:
Import hợp lệ, sinh lịch và lưu cấu hình lớp thành công.

Alternate/error:
- File thiếu header → thông báo → chọn lại file.
- Hủy import → trở về màn hình trước.
- Lịch đã bị khóa → giải thích → quay lại lớp.

Luồng 2 — Điểm danh:
S02 → S04 → S06 → xác nhận chốt → S04.

Happy path:
Chọn đúng slot hôm nay, mở QR, nhận check-in và chốt.

Alternate/error:
- Lỗi chuẩn bị QR → thử lại.
- Hủy xác nhận chốt → tiếp tục nhận điểm danh.
- Back khỏi QR → cảnh báo dừng nhận check-in.
- Mở lại slot đã chốt trong ngày → giữ kết quả cũ và nhận bổ sung.

Luồng 3 — Kiểm tra và xuất:
S02 → S04 → S08 → S07 → S08 → S09 → S10 nếu cần.

Happy path:
Xem kết quả, sửa kết quả được phép với lý do,
xuất file và đồng bộ.

Alternate/error:
- Lý do trống → lỗi tại field → nhập lại.
- Slot đã qua ngày → chỉ đọc kết quả và note.
- Lỗi xuất → thử lại.
- Mất mạng → vẫn giữ file local và báo chờ đồng bộ.

Dùng dữ liệu demo riêng phù hợp cho từng luồng:
- Luồng 1: lớp chưa có slot active/đã chốt.
- Luồng 2: có slot hôm nay.
- Luồng 3: có slot đã chốt hôm nay và slot đã qua ngày.

Không tạo luồng thành công dựa trên dữ liệu vi phạm quy tắc nghiệp vụ.

==================================================
8. COMPONENT VÀ TRẠNG THÁI
==================================================

Thiết kế các nhóm component tái sử dụng:
1. Button: default, pressed, disabled, loading.
2. Text field: default, focused, filled, error, disabled.
3. Card: default và pressed nếu có tương tác.
4. Navigation: selected/unselected.
5. App bar: mặc định và có action.
6. Dialog: xác nhận, hủy và lỗi.
7. Loading: spinner hoặc skeleton có ngữ cảnh.
8. Empty state: icon, giải thích và CTA.
9. Error state: nguyên nhân dễ hiểu và hành động phục hồi.

Ưu tiên cấu trúc có thể chuyển sang Auto Layout, component
và variant trong Figma.

Các trạng thái và dialog phải đặt cạnh màn hình liên quan.
Chúng không được tính thay cho 10 màn hình chính.

==================================================
9. DỮ LIỆU MINH HỌA
==================================================

Có thể dùng môn PRN232, lớp SE1920 và học kỳ FA26
để giữ ngữ cảnh nhất quán.

MSSV, họ tên, email minh họa phải là dữ liệu giả,
ghi rõ là demo nếu cần.

Không lấy thông tin cá nhân, ảnh thẻ sinh viên thật hoặc
thông tin đăng nhập từ hình tham khảo.

Dùng một mốc ngày demo nhất quán, ghi rõ ngày giả lập khi cần
để minh họa hôm nay, ngày đã qua và ngày tương lai.

Không tự tạo phòng học, địa điểm, link họp hoặc giảng viên khác
khi chưa có dữ liệu.

==================================================
10. KẾT QUẢ MONG MUỐN
==================================================

Hãy tạo:
- Đủ 10 màn hình mobile có ID S01–S10 và tiêu đề rõ ràng.
- Cùng một hệ thống màu, typography, spacing và component.
- Các state/overlay quan trọng đặt cạnh màn hình tương ứng.
- Điều hướng thể hiện được cả 3 luồng.
- Ít nhất một confirmation overlay.
- Ít nhất một chuỗi loading → success hoặc error → retry.
- Nội dung tiếng Việt tự nhiên, ngắn gọn, không dùng lorem ipsum.

Thứ tự trình bày:
S01, S02, S03, S04, S05, S06, S07, S08, S09, S10.

Sau khi tạo:
- Giải thích ngắn bố cục và cách điều hướng.
- Nêu cách xử lý thời khóa biểu 7 ngày trên mobile.
- Liệt kê điểm cần kiểm tra accessibility.
- Nêu giả định và giới hạn chưa giải quyết.
- Không tuyên bố đã kiểm thử với người dùng nếu chưa thực hiện.
- Không tuyên bố đã tạo Figma component/Auto Layout nếu công cụ
  chỉ tạo hình ảnh hoặc giao diện preview.

Đây là bản V0 để lưu bằng chứng và phản biện.
Chưa tự tính bản V0 là ba vòng cải tiến UX.

