# AI Design Log — FAP Attendance Mobile

- **Sinh viên:** SE193324.
- **Người dùng mục tiêu:** Giảng viên Trường Đại học FPT.
- **Ngày cập nhật nhật ký:** 22/10/2026 (Asia/Saigon). Mục 17 khôi phục nguyên văn prompt và ghi xác nhận sinh viên; **mục 18 là lượt dọn bộ file để push**. Không sửa ngược prompt/snapshot lịch sử.
- **Phạm vi:** Thiết kế UI/UX mobile cho giảng viên dựa trên project FAP Attendance cũ.
- **Trạng thái hiện hành:** đã khôi phục nguyên văn prompt V1/V2/V2.1/V2.2/V3 từ câu trả lời gốc; sinh viên xác nhận dùng nguyên văn. Có 9 ảnh V1, 7 ảnh V2 và review; V3 đã gửi bốn ảnh trong hội thoại, chưa khôi phục được bộ PNG ở đường dẫn tạm. Checklist prototype, 360/412, accessibility và component/token được sinh viên xác nhận ổn (Reported); Codex chưa chạy/đo lại. Không tiếp tục ghi thiếu prompt hoặc sinh viên chưa làm V3.
- **Bản lưu prompt/phản biện:** [Bộ V0](evidence/2026-10-11/README.md) gồm 23 ảnh; [bộ phản biện V1](evidence/2026-10-11/README-v1.md) gồm 12 ảnh. Đây là ảnh chụp bản lưu nội dung, không phải ảnh chat gốc.
- **Bộ kiểm tra V2:** [7 ảnh nguyên bản và nhận xét từng ảnh](evidence/2026-10-11/README-v2.md); khác với các ảnh bản lưu nội dung ở trên.
- **Thư mục ảnh bằng chứng:** [assets/stitch](../assets/stitch/); [chỉ mục hiện hành](README.md) phân biệt trạng thái mới với các bộ lưu lịch sử.
- **Repository hiện tại:** [HungUniverse/PRM392-Lab2](https://github.com/HungUniverse/PRM392-Lab2), sinh viên đã upload bộ 124 file ngày 22/10 và Codex kiểm tra khớp local. Repo cũ và ghi chú chưa có repo/upload trong các mục trước là lịch sử. Bộ khôi phục prompt mới ở mục 17 chưa tự push.
- **Hiện trạng 22/10 sau yêu cầu chỉ dùng ảnh gốc:** [P01](../ux/persona.md) đủ 12 trường; có discovery, traceability, chỉ mục ảnh gốc và state matrix; đã rút low-fi/UI kit tự tạo khỏi bộ nộp. D01–D09 là lựa chọn trong đặc tả, chưa xác minh áp dụng Stitch. Xem [iteration evidence](iteration-evidence.md) và [bảng ngoài Figma](../NON_FIGMA_STATUS.md).

> Nhật ký phân biệt yêu cầu trong prompt và kết quả đã được xác minh. Việc có ảnh V0 không đồng nghĩa đã đạt accessibility, có prototype hoạt động hoặc hoàn thành Figma.

> **Cập nhật trạng thái các mục 4–7:** các ghi chú “chưa có prompt” hoặc “chưa có quyết định” bên dưới mô tả thời điểm ghi cũ. Hiện đã có prompt gốc được khôi phục, xác nhận sử dụng và bảng quyết định thể hiện trong prompt tại [bộ mới](evidence/recovered-prompts-2026-10-22/README.md). Không tự suy ra mọi đầu ra Stitch đúng hoàn toàn hoặc mọi đề xuất sau phản biện đã được người dùng duyệt.

## 1. Danh sách công cụ AI và mục đích

| Công cụ | Mục đích sử dụng đã ghi nhận | Phạm vi bằng chứng |
|---|---|---|
| Google Stitch | Tạo giao diện V0 và các phiên bản tiếp theo; sinh viên cho biết đã có prototype Stitch | V0 có prompt; V1/V2 có ảnh lưu; 12 screenshot ba flow đã lưu; đã nhận link prototype, chưa có bản prompt/phản hồi đầy đủ cho các lượt muộn |
| Codex | Phân tích, phản biện ảnh, soạn prompt/tài liệu, lưu bằng chứng; bổ sung screen-spec, decisions, handoff, slide/demo và rà soát đóng gói | Mục 3–5, mục 10–12 và thư mục evidence; không coi review ảnh là trực tiếp kiểm thử hoặc vòng sửa UI đã hoàn thành |

**Cách đếm:** V0 được sinh viên xác nhận dùng **1 prompt**. Tổng số prompt/lượt sửa Stitch sau V0 chưa xác minh; không suy ra từ 9 ảnh V1 hoặc 7 ảnh V2. Trao đổi/phản biện với Codex không được tính thành lượt cải tiến UI đã hoàn thành. Chưa ghi nhận công cụ AI khác.

## 2. UI ban đầu từ Google Stitch — V0

### 2.1. Thông tin lượt tạo

- **Mã lượt tạo:** STITCH-V0-01.
- **Ngày ghi nhận:** 11/10/2026; thời điểm gửi prompt cụ thể chưa được cung cấp.
- **Công cụ:** Google Stitch.
- **Số prompt đã sử dụng:** 1 — prompt đầy đủ do Codex soạn trong cuộc trò chuyện, sinh viên xác nhận đã sử dụng.
- **Mục tiêu:** Sinh bộ 10 màn hình S01–S10 với phong cách trắng/cam và ba luồng nghiệp vụ của giảng viên.
- **Tài liệu tham chiếu được nhắc trong prompt:** [persona.md](../ux/persona.md), [DESIGN.md](../design/DESIGN.md), [user-flow.md](../ux/user-flow.md).
- **Tệp thực tế đã đính kèm vào Stitch:** Chưa được sinh viên xác nhận; không mặc định rằng các tài liệu hoặc ảnh tham khảo đã được tải lên.
- **Kết quả theo xác nhận của sinh viên:** Stitch đã sinh 10 màn hình.
- **Bằng chứng trên máy:** Có 10 ảnh màn hình V0 và một ảnh tổng quan trong thư mục được cung cấp. Sau lượt tạo V0, Codex đã xem và phản biện 10 ảnh riêng; chi tiết tại mục 3.

### 2.2. Prompt nguyên văn đã sử dụng

Dưới đây là toàn bộ prompt đầy đủ được cung cấp trong cuộc trò chuyện và được sinh viên xác nhận là prompt duy nhất đã dùng. Không bổ sung prompt phản biện vào lịch sử đã thực hiện.

```text
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
```

### 2.3. Phản hồi và kết quả của Stitch

- **Kết quả hình ảnh:** Được lưu bằng các ảnh tại mục 2.4.
- **Phản hồi chữ nguyên văn của Stitch:** Chưa được cung cấp/lưu trong nhật ký. Cần bổ sung nếu Stitch có phần giải thích hoặc thông báo sau khi tạo.
- **Project/link Stitch:** Chưa được cung cấp.
- **Nhận xét chất lượng V0:** Đã phản biện ảnh tĩnh bởi Codex, có 12 phát hiện ở mục 3. Không khẳng định V0 đã đáp ứng toàn bộ prompt hoặc đã được kiểm thử tương tác.
- **Prototype, overlay, component và responsive:** Là yêu cầu của prompt, chưa có bằng chứng kiểm tra hoạt động.
- **Accessibility:** Chưa đo tương phản, kích thước chữ, vùng chạm hoặc kiểm tra ở chiều rộng 360/412px.
- **Kiểm thử người dùng:** Chưa ghi nhận.

### 2.4. Liên kết ảnh bằng chứng V0

Đường dẫn dưới đây tương đối với file nhật ký để có thể mở khi đưa repository lên GitHub. ID được ánh xạ theo tên file đã lưu; nội dung 10 ảnh đã được xem trong bước phản biện ảnh tĩnh.

| ID | Màn hình theo yêu cầu | Ảnh đã lưu |
|---|---|---|
| S01 | Bắt đầu workspace | [v0-s01-workspace.png](../assets/stitch/v0-s01-workspace.png) |
| S02 | Dashboard / thời khóa biểu tuần | [v0-s02-timetable.png](../assets/stitch/v0-s02-timetable.png) |
| S03 | Import markbook | [v0-s03-import.png](../assets/stitch/v0-s03-import.png) |
| S04 | Điểm danh lớp | [v0-s04-attendance.png](../assets/stitch/v0-s04-attendance.png) |
| S05 | Cấu hình lịch lớp | [v0-s05-schedule.png](../assets/stitch/v0-s05-schedule.png) |
| S06 | Điểm danh QR | [v0-s06-qr.png](../assets/stitch/v0-s06-qr.png) |
| S07 | Chi tiết sinh viên | [v0-s07-student.png](../assets/stitch/v0-s07-student.png) |
| S08 | Lịch sử điểm danh lớp | [v0-s08-history.png](../assets/stitch/v0-s08-history.png) |
| S09 | Xuất kết quả | [v0-s09-export.png](../assets/stitch/v0-s09-export.png) |
| S10 | Google Drive và đồng bộ | [v0-s10-drive.png](../assets/stitch/v0-s10-drive.png) |
| Tổng quan | Bộ màn hình V0 | [Tổng quan.png](<../assets/stitch/Tổng quan.png>) |

**Quy tắc lưu bằng chứng:** Giữ nguyên ảnh V0. Khi cải tiến, lưu ảnh mới với tiền tố `v1-`, `v2-`, `v3-`; không ghi đè các ảnh trước đó.

## 3. Phản biện UX

**Trạng thái: Đã thực hiện phản biện ảnh tĩnh, chưa sửa UI.**

- **Mã lượt:** CRITIQUE-CODEX-V0-01.
- **Ngày ghi nhận:** 11/10/2026 (Asia/Saigon); không tự gán giờ gửi.
- **Công cụ:** Codex, không phải một prompt gửi thêm vào Stitch.
- **Đầu vào:** 10 ảnh V0 trong mục 2.4; persona, DESIGN, user flow và quy tắc nghiệp vụ trong cuộc trò chuyện.
- **Tiêu chí:** Persona giảng viên FPT; nghiệp vụ; Nielsen H1–H10; accessibility; ba luồng F1–F3.
- **Yêu cầu phản biện đã gửi:** [Bản chữ đầy đủ](evidence/2026-10-11/02-critique-user-prompt.md).
- **Toàn bộ phản hồi của Codex:** [12 phát hiện và đánh giá ba luồng](evidence/2026-10-11/03-critique-codex-response.md).
- **Ảnh yêu cầu:** [1 trang bản lưu](../assets/ai/2026-10-11/02-critique-user-prompt/page-01.png).
- **Ảnh phản hồi:** [Trang 1](../assets/ai/2026-10-11/03-critique-codex-response/page-01.png), [trang 2](../assets/ai/2026-10-11/03-critique-codex-response/page-02.png), [trang 3](../assets/ai/2026-10-11/03-critique-codex-response/page-03.png), [trang 4](../assets/ai/2026-10-11/03-critique-codex-response/page-04.png), [trang 5](../assets/ai/2026-10-11/03-critique-codex-response/page-05.png).

### Tóm tắt phát hiện để theo dõi

Bảng này chỉ là chỉ mục. Bản phản hồi đầy đủ bên trên giữ đủ bảy phần của từng phát hiện: thành phần, bằng chứng, tác động, nguyên tắc, ưu tiên, đề xuất và cách kiểm tra.

| Mã | Màn hình | Phát hiện | Ưu tiên trong phản hồi |
|---|---|---|---|
| UX-01 | S01 | Giới hạn domain và lỗi email mâu thuẫn; lẫn khu vực DEV & QA | P1 |
| UX-02 | S02 | Thứ/ngày và khoảng tuần không nhất quán | P1 |
| UX-03 | S03/S04/S05 | Tiêu đề sai tác vụ, thiếu ngữ cảnh môn/lớp | P1 |
| UX-04 | S04 | Nhập nhằng slot trong ngày và lần học; đổi nhanh cần phòng lỗi | P1 |
| UX-05 | S05 | Điều kiện khóa lịch diễn đạt sai/bị cắt | P1 |
| UX-06 | S06 | Chỉ có ảnh overlay, thiếu bằng chứng màn QR chính | P2 về bằng chứng |
| UX-07 | S07 | Giờ học không khớp, thêm phòng/ngưỡng vắng chưa xác nhận | P1 |
| UX-08 | S08 | Nút xuất có vẻ khả dụng khi slot đang mở; tiến độ không khớp | P1 |
| UX-09 | S09 | Mô tả CSV tích hợp trực tiếp FAP chưa có căn cứ | P1 |
| UX-10 | S10 | Cam kết bảo mật/cloud vượt bằng chứng, cần state conflict cụ thể | P1/P2 tùy nội dung |
| UX-11 | Nhiều màn | Chữ/vùng chạm/tương phản cần đo; thông báo có chỗ bị cắt | P2 |
| UX-12 | Ba luồng | Chưa chứng minh các nhánh lỗi/phục hồi bằng ảnh hoặc prototype | P2 về độ hoàn thiện |

**Giới hạn:** Tác động đến người dùng là giả thuyết UX cần kiểm chứng. Chưa đo font, vùng chạm, tương phản; chưa kiểm tra QR có quét được, điều hướng, lưu dữ liệu, audit hoặc đồng bộ thật. Thiếu ảnh state không đồng nghĩa state không tồn tại. Phản biện không tính thành một vòng cải tiến.

## 4. Vòng cải tiến 1 — V1

**Trạng thái: Đã nhận 9 ảnh V1 và phản biện; chưa xác minh vòng cải tiến hoàn tất.** Không ghi “V1 chưa có ảnh”, nhưng cũng không tự công nhận đã hoàn thành vì còn thiếu bằng chứng.

- **Mã đánh giá:** CRITIQUE-CODEX-V1-01.
- **Ngày lưu:** 11/10/2026 (Asia/Saigon); không tự gán giờ gửi ban đầu.
- **Đầu vào:** S01–S05, S07–S10; thiếu S06 V1. Có V0 đối chiếu và bản sao persona/DESIGN/user flow tại thời điểm lưu.
- **Prompt sửa V1 và phản hồi chữ nguyên văn của Stitch:** Chưa có trong bộ lưu; không dựng lại hoặc tự đếm lượt sử dụng.
- **Prompt phản biện người dùng gửi:** [Bản đầy đủ](evidence/2026-10-11/08-v1-critique-prompt.md).
- **Toàn bộ phản hồi Codex:** [Đánh giá V1](evidence/2026-10-11/08-v1-critique-response.md): tổng quan, bảng V0 → V1, 9 phát hiện với bảy phần, accessibility, ba luồng và mục tiêu V2.
- **Ảnh prompt/phản hồi:** [Chỉ mục 12 trang](evidence/2026-10-11/README-v1.md), [bản xem offline](evidence/2026-10-11/evidence-v1.html), [manifest SHA-256](evidence/2026-10-11/manifest-v1.json).
- **Giới hạn:** Ảnh tĩnh không chứng minh prototype hoạt động, lưu dữ liệu, audit, QR hoặc Drive. Chưa đo tương phản/font/vùng chạm, chưa kiểm thử người dùng. Lượt đánh giá không sửa UI.
- **Quyết định Accept / Modify / Reject:** Chờ sinh viên quyết định, không tự điền thay.

### 4.1. Ảnh V1 đã nhận

| ID | Ảnh |
|---|---|
| S01 | [Workspace](../assets/stitch/v1-s01-workspace.png) |
| S02 | [Thời khóa biểu](../assets/stitch/v1-s02-timetable.png) |
| S03 | [Import](../assets/stitch/v1-s03-import.png) |
| S04 | [Điểm danh lớp](../assets/stitch/v1-s04-attendance.png) |
| S05 | [Cấu hình lịch](../assets/stitch/v1-s05-schedule.png) |
| S06 | Chưa có ảnh V1; không dùng V0 thay thế |
| S07 | [Sinh viên](../assets/stitch/v1-s07-student.png) |
| S08 | [Lịch sử lớp](../assets/stitch/v1-s08-history.png) |
| S09 | [Xuất kết quả](../assets/stitch/v1-s09-export.png) |
| S10 | [Drive](../assets/stitch/v1-s10-drive.png) |

### 4.2. Chỉ mục phát hiện V1

Mã UX-01–UX-09 dưới đây thuộc CRITIQUE-CODEX-V1-01, độc lập với mã UX của V0. Đây là chỉ mục, không thay phản hồi nguyên văn.

| Mã | Màn hình | Phát hiện / phần cần xác minh | Ưu tiên |
|---|---|---|---|
| UX-01 | S04/S05/S08 | Lịch và quyền sửa chưa rõ ngữ cảnh dữ liệu độc lập | P1 nếu cùng kịch bản |
| UX-02 | S07 | Hai dòng lịch sử trùng, số lượng chưa rõ | P1 |
| UX-03 | S04/S07 | Thiếu dấu hiệu truy cập note/audit ở V1 | P1 |
| UX-04 | S02 | Hôm nay ngoài viewport; cần thử khả năng đưa vào vùng nhìn | P2 |
| UX-05 | S04/S07 | Card meeting/giờ bị cắt | P2 |
| UX-06 | S09 | Công tắc local có thể gây hiểu nhầm bản lưu mặc định | P2 |
| UX-07 | S09/S10 | Nơi lưu Drive chưa thống nhất | P2 |
| UX-08 | S10 | Trạng thái queue/upload và phục hồi lỗi cần làm rõ | P2 |
| UX-09 | S04/S09 | Lộ mã màn hình nội bộ | P3 |

**Đề xuất V2:** Ưu tiên dữ liệu meeting nhất quán, lịch sử/note, bổ sung S06 và nhánh lỗi; đây là đề xuất chưa thực hiện. Để xác minh vòng cải tiến cần bổ sung prompt/phản hồi Stitch, ảnh còn thiếu, quyết định của sinh viên và kiểm tra trước/sau.

## 5. Vòng cải tiến 2 — V2

**Trạng thái: Đã nhận 7 ảnh V2, lưu nguyên bản và kiểm tra từng ảnh. Chưa xác minh hoàn tất vòng cải tiến.**

- **Mục tiêu của prompt V2 do Codex soạn:** thống nhất Slot/Khung giờ, dữ liệu demo, lịch sử không trùng, xem note sau ngày học và sửa P/A có lý do; tách lịch editable/locked.
- **Mã kiểm tra:** REVIEW-CODEX-V2-01.
- **Ngày lưu:** 11/10/2026 (Asia/Saigon); không suy diễn thời điểm sinh ảnh/gửi Stitch.
- **Yêu cầu người dùng:** [kiểm tra từng hình và lưu cho tôi](evidence/2026-10-11/09-v2-review-request.md).
- **Nhận xét đầy đủ:** [Bảy ảnh, bằng chứng/tác động/nguyên tắc/ưu tiên/đề xuất/kiểm tra](evidence/2026-10-11/09-v2-review.md).
- **Chỉ mục:** [README V2](evidence/2026-10-11/README-v2.md), [manifest nguồn/đích SHA-256](evidence/2026-10-11/manifest-v2.json).
- **Bản prompt thực tế đã gửi và phản hồi chữ Stitch:** Chưa được cung cấp trong bộ lưu này; không mặc định prompt V2 đã được gửi nguyên văn hoặc chỉ một lần.
- **Quyết định cuối của sinh viên:** Chưa có; không tự Accept/Modify/Reject thay.

### 5.1. Ánh xạ bảy ảnh V2

| Ảnh | ID/state | Tệp | Kết quả kiểm tra |
|---|---|---|---|
| 1 | S04 đang điểm danh | [v2-s04-attendance.png](../assets/stitch/v2-s04-attendance.png) | Tổng/giờ đúng, cần rõ môn và note thuộc slot nào |
| 2 | S04 chuẩn bị lớp | [v2-s04-preparation.png](../assets/stitch/v2-s04-preparation.png) | Tách lớp SE1921 đúng; nội dung import/nhóm cần làm rõ |
| 3 | S05 editable | [v2-s05-schedule-editable.png](../assets/stitch/v2-s05-schedule-editable.png) | Ngoại lệ chưa khớp lịch thứ Hai/Năm; title/phòng ngoài nguồn |
| 4 | S05 locked | [v2-s05-schedule-locked.png](../assets/stitch/v2-s05-schedule-locked.png) | Khóa rõ, còn “buổi” và thông tin giảng viên/phòng ngoài nguồn |
| 5 | S07 note | [v2-s07-note.png](../assets/stitch/v2-s07-note.png) | Audit có đủ nhưng giờ sai, nền khác S07 chính |
| 6 | S07 edit-error | [v2-s07-edit-error.png](../assets/stitch/v2-s07-edit-error.png) | Lỗi lý do rõ nhưng sai môn và thêm L/Trễ ngoài P/A |
| 7 | S07 chi tiết | [v2-s07-student.png](../assets/stitch/v2-s07-student.png) | Đã hết trùng/đúng 5%; còn ngưỡng 20% và note khác overlay |

**Đánh giá:** Bảy ảnh thuộc ba ID màn hình (S04/S05/S07), gồm state/overlay, không tính thành bảy màn hình chính. Đã có bằng chứng cải thiện nhưng còn lỗi P1 phải sửa. Chưa nhận S08 V2/SlotResults và saving/success/save-error; S06 hiện hành vẫn thiếu.

**Trước khi chốt V2:** bỏ L/Trễ và môn/phòng sai, sửa giờ note, thống nhất nội dung note và nền overlay, tính lại ngoại lệ lịch, bỏ ngưỡng 20% và nội dung ngoài nguồn. Bổ sung state thiếu, kiểm tra Figma/prototype và lưu quyết định của sinh viên. Không chỉnh sửa ảnh gốc để che lỗi; ảnh sửa tiếp theo lưu tên riêng.

## 6. Vòng cải tiến 3 — V3

**Trạng thái: Sinh viên đã cung cấp bốn ảnh được gọi là V3 trong hội thoại; chưa hoàn tất bộ lưu riêng và xác minh vòng cải tiến.** Bộ này gồm chặn xuất khi chưa chốt, cấu hình xuất, xuất thành công và Drive pending. Không tiếp tục mô tả V3 là chưa từng thực hiện, nhưng cũng không tự công nhận đủ vòng cải tiến từ số phiên bản.

Cần lưu ảnh V3 riêng với nguồn gốc, prompt/phản hồi thực tế, mục tiêu khác V1/V2, đối chiếu trước/sau, quyết định của sinh viên và kết quả kiểm tra. 12 ảnh prototype ở mục 10 là bộ bằng chứng riêng, không tự gán thành ảnh V3 gốc hoặc prompt nguyên văn.

## 7. Quyết định chấp nhận, chỉnh sửa hoặc từ chối

**Đã có đề xuất, nhưng chưa có quyết định cuối của sinh viên.** Không tự đánh dấu Accept / Modify / Reject là đã chốt.

Đã bổ sung [bản dự thảo mười quyết định](../design/design-decisions.md). D01–D09 chờ sinh viên xác nhận; D10 ghi đúng lựa chọn tiếp tục Stitch/tạm gác Figma, không ghi là giảng viên đã miễn yêu cầu.

Hướng dẫn và ví dụ quyết định đã trao đổi: [Câu hỏi](evidence/2026-10-11/04-next-steps-user-prompt.md), [toàn bộ câu trả lời](evidence/2026-10-11/05-next-steps-codex-response.md). Đây là hướng dẫn kế hoạch, chưa phải bằng chứng đã gửi prompt sửa hoặc đã hoàn thành V1–V3.

Sau mỗi vòng, ghi cho từng đề xuất quan trọng:

- Đề xuất và màn hình liên quan.
- Quyết định: **Accept / Modify / Reject**.
- Lý do dựa trên nhu cầu giảng viên, nghiệp vụ, nguyên tắc usability, accessibility hoặc ràng buộc triển khai.
- Bằng chứng thay đổi và kết quả kiểm tra.

Không dùng nhận xét sở thích như “tôi thích hơn” làm lý do duy nhất.

## 8. Liên kết bằng chứng và thiết kế hiện tại

- **Ảnh Stitch V0:** [Thư mục assets/stitch](../assets/stitch/), chi tiết ở mục 2.4.
- **Prompt, phản biện và hướng dẫn:** [Bộ bằng chứng](evidence/2026-10-11/README.md), [bản xem offline](evidence/2026-10-11/evidence.html), [23 ảnh bản lưu](../assets/ai/2026-10-11/).
- **Nguồn prompt V0:** [Bản chữ](evidence/2026-10-11/01-stitch-v0-prompt.md), [ảnh trang đầu](../assets/ai/2026-10-11/01-stitch-v0-prompt/page-01.png); đủ 14 trang ở chỉ mục bằng chứng.
- **Ảnh chat gốc:** Chưa có. Theo giới hạn kỹ năng computer-use, không điều khiển giao diện ChatGPT desktop để chụp trực tiếp; ảnh hiện có là ảnh bản lưu nội dung, đã ghi nhãn rõ ràng.
- **Bảo toàn file:** [manifest.json](evidence/2026-10-11/manifest.json) lưu liên kết và SHA-256. Hash chỉ phát hiện thay đổi, không chứng minh thời điểm gốc hoặc việc gửi prompt.
- **Ảnh V1:** Đã có 9 ảnh, mục 4; thiếu S06. **V2:** Đã có 7 ảnh, mục 5. **V3:** Đã nhận qua hội thoại, chưa có bộ lưu riêng đầy đủ; không dùng bộ prototype thay ảnh V3 gốc.
- **Link prototype Stitch:** [FAP Attendance](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951), sinh viên cung cấp ngày 11/10/2026; chưa xác minh quyền xem khi chưa đăng nhập.
- **Link Figma:** Chưa cung cấp.
- **Ảnh export cuối từ Figma tại thời điểm này:** Chưa ghi nhận; `assets/figma/` chỉ là vị trí dự kiến. Placeholder trống đã rút khỏi bộ nộp ở mục 18.
- **Prototype ba luồng:** Sinh viên cho biết đã có Stitch prototype; đã lưu 12 ảnh/review, chưa trực tiếp xác minh thao tác. Xem mục 10.
- **Kiểm thử handoff với người khác:** Chưa ghi nhận.

## 9. Việc tiếp theo

1. Kiểm tra quyền xem link Stitch và bổ sung phản hồi chữ nếu có; xác nhận các tài liệu thực tế đã đính kèm.
2. Đọc lại phản biện đã lưu và chốt Accept / Modify / Reject với lý do.
3. Nếu yêu cầu nộp cần ảnh giao diện chat gốc, tự chụp bổ sung trên ChatGPT/Stitch; không dùng ảnh bản lưu để giả nhận là chat gốc.
4. Thực hiện ít nhất ba vòng cải tiến UX có ý nghĩa, lưu ảnh trước/sau riêng biệt.
5. Chạy checklist prototype/accessibility, thử handoff với người khác và tập slide/demo đã soạn ở mục 11. Figma tạm gác theo yêu cầu sinh viên, không tự ghi là được miễn hoặc đạt.

## 10. Prototype Stitch và tài liệu bàn giao — cập nhật 11/10/2026

- **Yêu cầu đã nhận:** sinh viên gửi ảnh “Flow 1”, “Flow 2”, “flow 3”, sau đó yêu cầu tiếp tục bước tiếp theo của Lab 2. Đây là tóm tắt ngữ cảnh, không phải bản chép prompt gửi Stitch.
- **Bằng chứng mới:** [12 ảnh nguyên bản và chỉ mục nguồn](../design/prototype-review.md), đã sao chép và so khớp SHA-256 nguồn/đích; không sửa ảnh hoặc xóa ảnh cũ.
- **Công việc Codex:** review ảnh tĩnh; viết [screen-spec S01–S10](../design/screen-spec.md), [quyết định dự thảo](../design/design-decisions.md), [Flutter handoff](../handoff/flutter-handoff.md) đủ sáu mục/màn và hai bảng ánh xạ. Không viết code app, không trực tiếp thao tác Stitch/Figma, không tự quyết định D01–D09 thay sinh viên.
- **Kết quả review:** đã có các state chính, confirmation sheet và export result; còn sai khác R01–R12, tên file preview/result không giống, nội dung QR chạy ngầm trái đặc tả, chưa chứng minh đổi P/A thật và nhánh Hủy/lỗi/phục hồi.
- **Accessibility:** đã tính contrast bảy cặp token trong decisions; không lấy mẫu screenshot và không chứng nhận UI cuối đạt. Chưa đo font, hit area hoặc kiểm thử responsive 360/412.
- **Giới hạn:** screenshot thành công không chứng minh lưu JSON/CSV, audit, QR, OAuth hoặc Drive thật; đã nhận link nhưng chưa xác minh quyền xem công khai; chưa có video, S10 mới, thử handoff hay kiểm thử người dùng. Các test vẫn “Chưa kiểm thử”.
- **Bằng chứng AI còn thiếu:** prompt/phản hồi Stitch của các lần muộn, V3 riêng và quyết định trước/sau; không dựng lại nguyên văn hoặc tự đếm đủ ba vòng cải tiến.

## 11. Chuẩn bị slide và demo — 11/10/2026

- **Yêu cầu của sinh viên:** “hãy chuẩn bị slide và kịch bản demo cho tôi”. Sau đó cung cấp link Stitch ở mục 8 và xác nhận chưa có link repository.
- **Nguồn hướng dẫn:** `D:/Fall2026/PRM393/PRM323_Lab2_HuongDan_Slide_Presentation_Demo.docx`, đã đọc phần chữ và bảng; đối chiếu tài liệu dự án và ảnh gốc hiện có. Không coi hướng dẫn này là miễn yêu cầu Figma trong đề gốc.
- **Kết quả tại thời điểm này:** PowerPoint 12 slide `FAP_Attendance_Lab2_SE193324_Final.pptx`, dự kiến 10 phút, có Notes tiếng Việt; [kịch bản demo 5 phút](../presentation/output/demo-script.md) gồm ba flow, dữ liệu chuẩn bị, nhánh lỗi/Hủy, phương án dự phòng và Q&A. PowerPoint cũ đã chuyển sang dự phòng ngoài repo ở mục 18, không còn là bản nộp hiện hành.
- **Cách sử dụng AI:** Codex soạn nội dung và file từ bằng chứng đã có, không sửa ảnh UI, không dựng kết quả kiểm thử. Phép tính contrast được ghi là tính trên token; UI V0/V2 không được gọi là low-fi/final. Các quyết định chưa xác nhận vẫn là đề xuất.
- **Kiểm tra file:** kiểm tra cấu trúc PowerPoint, số slide, font, hình học và hai bảng native; render để kiểm tra chữ/bố cục. Không thay thế kiểm thử prototype hoặc lần chạy thử thuyết trình trong PowerPoint của sinh viên.
- **Giới hạn cần cập nhật trước nộp:** quyền xem link Stitch, repository, low-fi, bằng chứng V3 và S10 mới, quyết định của sinh viên và kết quả test thực tế. Kịch bản sửa P/A phải đổi trạng thái thật và cập nhật tổng, không dùng thao tác P → P làm bằng chứng chỉnh sửa.

## 12. Rà soát và đồng bộ tài liệu — 11/10/2026

- **Yêu cầu của sinh viên:** “hãy rà soát và cập nhật”. Phạm vi là bộ tài liệu Lab 2, không sửa Flutter, không tự tạo hoặc push repository, không chốt các quyết định còn chờ thay sinh viên.
- **Tài liệu hiện hành:** đồng bộ README, persona, user flow, DESIGN, screen-spec, review, decisions và handoff với hiện trạng Stitch; nêu rõ JSON/CSV, S02 có hai chế độ và S10 Back về S09 khi mở từ màn xuất. JSON là mục tiêu UI, chưa xác minh schema extension.
- **Đóng gói:** thêm [.gitignore](../.gitignore) cho repo riêng và [checklist chuẩn bị nộp](../SUBMISSION_CHECKLIST.md). File tạm/cache/credential/private được loại; ảnh/manifest/slide vẫn được giữ. Không tự coi dữ liệu trong ảnh là đã ẩn danh.
- **Bằng chứng lịch sử:** thêm [chỉ mục hiện hành](README.md) và ba trang chỉ dẫn cho liên kết tương đối trong snapshot V1. Không sửa prompt, phản hồi, snapshot, manifest hoặc ảnh cũ. Những câu thiếu link/CSV-only trong bản lưu giữ đúng bối cảnh cũ, không phải trạng thái hiện tại.
- **Xác minh:** đã kiểm tra liên kết Markdown nội bộ không thiếu file và 95 bản ghi checksum trong ba manifest đều khớp; thử quy tắc ignore cho `.build`, `node_modules`, `.env`, `private` và kiểm tra PowerPoint/manifest/ảnh/README không bị loại. Đây là kiểm tra tài liệu, không phải kiểm thử prototype hoặc xác nhận quyền xem link online.
- **Không thay đổi:** PowerPoint và kịch bản demo đã tạo ở mục 11; D01–D09 vẫn chờ xác nhận; chưa có repo URL, video, bộ V3 riêng, S10 mới, low-fi hoặc kết quả thử handoff/accessibility. Figma vẫn chưa có miễn trừ.

## 13. Làm lại slide theo nội dung chính — 11/10/2026

- **Yêu cầu của sinh viên:** cung cấp `https://github.com/HungUniverse/prm323-lab2.git`, yêu cầu làm lại slide có bố cục rõ, bỏ mã code/mã màu khó hiểu và chỉ nêu nội dung chính.
- **Bản ở thời điểm này:** 12 slide `FAP_Attendance_Lab2_ThuyetTrinh.pptx`, thay bảng kỹ thuật bằng nhóm ý ngắn và ảnh gốc. Trình tự: tổng quan, vấn đề, người dùng, phạm vi, cách dùng AI, phản biện, nguyên tắc giao diện, ba luồng, demo, kết luận và tài liệu. Bản đã bị thay thế, chuyển sang dự phòng ngoài repo ở mục 18.
- **Cách viết:** không có mã màu, tên widget hoặc mã màn hình trong phần chữ thuyết trình. Dùng tên tác vụ dễ hiểu; giữ mã lớp/MSSV có sẵn trong ảnh bằng chứng, không sửa ảnh. Các ví dụ và giới hạn còn thiếu được giải thích trong Notes tiếng Việt.
- **Liên kết:** đã mở được trang GitHub công khai với các thư mục tài liệu. Đã chèn GitHub và Stitch vào slide cuối, README, checklist và kịch bản. Không push file hoặc đổi Git remote trong lượt này.
- **Kịch bản:** cập nhật bảng thời lượng 12 slide tổng 10 phút, giữ demo ba luồng 5 phút và hướng dẫn dữ liệu/Hủy/lý do trống. D01–D09 vẫn chờ sinh viên chốt, không tự ghi thử nghiệm đã đạt.
- **Bảo toàn:** giữ bản PowerPoint trước để đối chiếu, không sửa ảnh/manifest/prompt lịch sử. Prototype vẫn là mô phỏng, yêu cầu Figma chưa có xác nhận miễn trừ. Các hạn chế còn lại theo checklist nộp bài.

## 14. Sửa slide theo hướng dẫn đánh giá — 11/10/2026

- **Yêu cầu:** sau khi đọc lại hướng dẫn và rà soát phần thiếu, sinh viên yêu cầu sửa slide như yêu cầu.
- **Bản ở thời điểm này:** 12 slide `FAP_Attendance_Lab2_BamSatYeuCau_Final.pptx`, có sơ đồ điều hướng 10 màn hình, ba flow kèm nhánh Hủy/lỗi, trích prompt thật và toàn văn trong Notes, trọng tâm V1/V2/V3, năm phát hiện UX, bốn ví dụ accept/modify/reject, gallery màn hình, đặc tả design system, accessibility và hai bảng handoff. Bản đã bị thay thế, chuyển sang dự phòng ngoài repo ở mục 18.
- **Minh bạch:** bản quyết định vẫn là đề xuất chờ sinh viên chốt; V1/V2/V3 chưa đủ chuỗi bằng chứng; không dựng low-fi hoặc ảnh responsive giả; gallery dùng chín màn prototype hiện tại và S10 V1 có nhãn. Contrast ghi là phép tính token, các test chưa chuyển thành đã đạt.
- **Trình bày:** giữ 12 slide, lời dẫn tổng dự kiến 600 giây, demo 300 giây riêng; đồng bộ kịch bản, README và checklist. Không đưa mã màu hoặc đoạn code lên slide; bảng handoff giữ tên widget làm ví dụ theo hướng dẫn.
- **Kiểm tra file:** render và xem từng slide, kiểm tra bảng/sơ đồ chỉnh sửa được và liên kết; đây không phải kết quả kiểm thử prototype hoặc xác nhận quyền truy cập công khai. Không push GitHub hoặc sửa Flutter, ảnh gốc và bằng chứng lịch sử.

## 15. Cập nhật các mục ngoài Figma — 22/10/2026

- **Yêu cầu nguyên văn:** “hãy bỏ qua phần figma đó, sửa những mục còn lại sao cho matching với yêu cầu”.
- **Công cụ:** Codex đọc hướng dẫn website, sửa tài liệu/artefact; Chromium headless kiểm tra bản tham chiếu cục bộ; PowerPoint được chỉnh bằng công cụ tạo tài liệu. Không có prompt sửa mới nào được gửi lên Stitch bởi Codex trong lượt này.
- **Phân tích:** bổ sung P01 Primary Proto-Persona đủ 12 trường và tên/tuổi minh họa có nhãn Assumed; stakeholder, assumption/evidence, affinity synthesis trên giả thuyết, coverage/research plan; ma trận Need/User story/Flow/Screen/Decision/Test.
- **Thiết kế:** tạo low-fi S01–S10 mới, UI kit chín nhóm, tokens CSS và state matrix. Low-fi tạo sau các UI Stitch cũ; không ghi đây là giai đoạn lịch sử trước V0/V1. D01–D09 được chọn ở mức đặc tả theo nhiệm vụ, không giả phê duyệt của sinh viên/giảng viên.
- **QA đã chạy ở lượt trước:** bản low-fi có 20 frame ở 360/412 không tràn ngang; UI kit có token binding và loading mẫu. Các mẫu và kết quả này đã rút khỏi bộ nộp theo yêu cầu tiếp theo tại mục 16, không điền vào test Stitch hoặc user research.
- **Bàn giao:** bổ sung acceptance criteria S07, vai trò đề xuất và kế hoạch validation/retest. Không điền người nhận, thời gian test hoặc feedback giả.
- **Trình bày ở lượt trước:** có bản 12 slide dùng low-fi bổ sung. Bản này đã rút khỏi thư mục output ở mục 16, thay bằng slide chỉ dùng ảnh sinh viên gửi. Không đổi số liệu thử nghiệm thành đã đạt hoặc tự cam kết điểm trên 80.
- **Bằng chứng còn thiếu:** prompt/phản hồi Stitch của các lượt muộn, bộ V3 gốc, UI sau sửa/test, kiểm thử người dùng/handoff, dữ liệu đã ẩn danh và upload GitHub. Đã thử tìm ba file V3 gốc tại các đường dẫn Temp người dùng cung cấp nhưng không còn thấy; không dựng lại ảnh hoặc prompt thay bản gốc.
- **Bảo toàn:** không sửa Flutter hoặc ảnh/manifest/snapshot lịch sử; Figma ngoài phạm vi lần này, không tự công nhận miễn yêu cầu nộp. Đây là cập nhật tài liệu/tài sản tham chiếu mới, không tự tính thành ba vòng cải tiến Stitch.

## 16. Chỉ dùng màn hình sinh viên đã gửi — 22/10/2026

- **Yêu cầu nguyên văn:** “hãy dùng những màn hình của tôi gửi trước đây, không tạo ra những màn hình mới”.
- **Điều chỉnh:** rút low-fi, UI kit HTML, tokens CSS, ảnh QA tự tạo và deck có low-fi khỏi bộ nộp. Chuyển nguyên tệp vào khu vực build riêng để có thể khôi phục, không xóa ảnh sinh viên hoặc sửa ngược snapshot lịch sử.
- **Nguồn hình hiện hành:** [12 ảnh ba flow và S10 V1](../design/screen-evidence.md). Slide giữ đúng ảnh gốc, không dựng lại giao diện hoặc chỉnh ảnh để che sai khác.
- **Tài liệu:** giữ phần phân tích/P01/traceability/handoff, sửa các tuyên bố đã có low-fi/UI kit thành trạng thái còn thiếu bằng chứng. State matrix là tiêu chí mục tiêu, không phải ảnh mới hoặc test đã chạy.
- **Đầu ra:** [slide dùng ảnh gốc](../presentation/output/FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx) và [kịch bản cập nhật](../presentation/output/demo-script.md). Không tự sửa Stitch, không push GitHub.

## 17. Khôi phục prompt gốc và xác nhận của sinh viên — 22/10/2026

- **Xác nhận nguyên văn mới:** “mình dùng nguyên văn các prompt bạn soạn”. Nguồn là lời sinh viên trong cuộc trò chuyện hiện hành, không phải suy đoán từ ảnh. Xem [C03](student-confirmations.md).
- **Đã truy xuất được:** câu trả lời gốc chứa prompt V1, V2, V2.1, V2.2 và V3 qua `read_thread`, cùng phản biện bốn ảnh V3. Lưu toàn bộ câu trả lời gốc và tách phần prompt, không sửa nội dung. [Source index](evidence/recovered-prompts-2026-10-22/source-index.json) ghi ID turn/message thật; không gán đó là thời điểm sinh viên gửi lên Stitch.
- **Đầu ra:** [chỉ mục năm prompt và bảng đối chiếu ba vòng chính](evidence/recovered-prompts-2026-10-22/README.md). V2.1/V2.2 vẫn thuộc V2, không đổi thành V3 để đủ số.
- **Đối chiếu:** V1 sửa tiêu đề/ngữ cảnh tác vụ; V2 sửa lịch sử không trùng và note/P-A; V3 sửa xuất/local/Drive. Bảng liên kết ảnh trước/sau và quyết định thể hiện trong chính prompt đã dùng, không giả chữ ký duyệt sau review.
- **Xác nhận trước đó được ghi lại:** “checklist ổn hết, 360/412 và accessibility ổn”; “Component/token dùng chung ổn”. Đây là Reported từ sinh viên. Không tiếp tục xem các mục này là sinh viên chưa làm; Codex không tự điền số đo, thời gian, video hoặc tự nhận đã kiểm thử.
- **Ảnh V3:** đã nhận bốn ảnh trong hội thoại. Kiểm tra lại đúng bốn đường dẫn clipboard: không còn tệp; không tìm thấy bản tương ứng trong attachments theo tên. Chưa thể thêm PNG gốc vào repo, không dựng ảnh mới hoặc dùng simulator thay V3. Đây là khoảng trống khôi phục tệp, không phải thiếu vòng đã thực hiện.
- **Phạm vi:** không tạo UI, không sửa app Flutter, không đổi prompt/snapshot/manifest ngày 11/10, không sửa slide trong lượt này và không push GitHub. Các cập nhật này là tài liệu local mới.

## 18. Dọn bộ file Lab 2 để sinh viên push — 22/10/2026

- Yêu cầu: “sau đó xóa những file không cần thiết trong src để tôi push lên git”. Phạm vi thực hiện là repo thiết kế `prm323-lab2-SE193324`, không phải xóa mã Flutter của thư mục cha.
- Chỉ giữ PowerPoint hiện hành `FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx` và kịch bản. Ba bản PowerPoint cũ, cache/build slide và placeholder trống được chuyển sang thư mục dự phòng `Lab2-cleanup-backup-2026-10-22` nằm ngoài repo.
- Giữ nguyên ảnh sinh viên, prompt/phản biện gốc, manifest/snapshot ngày 11/10 và bộ prompt khôi phục. Không xóa lịch sử bằng chứng chỉ vì đã có bản UI mới hơn.
- Bổ sung quy tắc ignore cho đầu ra finalizer/inspection. Sửa liên kết tới slide đã rút để không để tài liệu trỏ vào tệp không còn trong bộ nộp; không đổi nội dung prompt/snapshot lịch sử.
- Không sửa nội dung PowerPoint, không xóa `.git`, không stage/commit/push. Những file bỏ khỏi repo có bản dự phòng để khôi phục.

## 19. Tìm lại và khôi phục đủ bốn PNG V3 — 22/10/2026

- **Yêu cầu:** “hãy tìm 4 ảnh đó trong hội thoại”. Đã xác định đúng tin nhắn “đây là 4 hình v3” ngày 11/10/2026, 16:51:51 giờ Việt Nam.
- **Kết quả tìm:** đường dẫn Temp không còn tệp nhưng bản lưu hội thoại vẫn chứa đủ bốn payload `input_image` dạng PNG base64. Nhận định trước đó mới dựa trên đường dẫn/attachments, chưa kiểm tra đủ bản lưu có dữ liệu ảnh.
- **Khôi phục:** giải mã nguyên dữ liệu PNG vào `assets/stitch/v3-s09-*.png`, không tạo mới hoặc sửa ảnh; đọc lại tệp và đối chiếu từng byte với payload, kiểm tra SHA-256 và xem cả bốn hình. [Nguồn, ảnh và manifest](evidence/recovered-v3-images-2026-10-22/README.md).
- **Trạng thái mới:** không còn thiếu bộ PNG V3 trong repo local. Cập nhật chỉ mục, bảng vòng lặp và checklist; giữ nguyên prompt/phản biện/snapshot/manifest cũ. Bốn ảnh chủ yếu là trạng thái S09, không đếm thành bốn màn mới hoặc bộ S10 V3 đầy đủ.
- **Giới hạn:** không sửa các lỗi lịch sử trong ảnh, không tự nhận đã sửa/test prototype; không sửa Flutter, PowerPoint hoặc commit/push GitHub trong lượt này.
