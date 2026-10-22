# Kịch bản thuyết trình và demo FAP Attendance

Sinh viên: SE193324. Ngày cập nhật: 22/10/2026. Ngày giả lập trong ứng dụng: 24/09/2026.

Kịch bản đi cùng [PowerPoint dùng ảnh gốc](FAP_Attendance_Lab2_AnhGoc_2026-10-22.pptx), có lời dẫn và nguồn trong Notes. Chỉ dùng màn hình sinh viên đã gửi, đồng bộ P01 và lựa chọn trong đặc tả. Không tạo low-fi hoặc UI mới. Không đưa mã màu hoặc đoạn code lên slide; phần handoff giữ tên widget minh họa hai mapping. Dự kiến 10 phút trình bày, 5 phút demo và 5 phút hỏi đáp; thời lượng theo phân bổ thực tế của giảng viên. Figma ngoài phạm vi sửa lần này.

Prototype: [Mở Stitch](https://stitch.withgoogle.com/preview/10059602616228007293?node-id=f4c596c319264fa182ad8c2c92ebf951), chưa xác minh quyền xem khi chưa đăng nhập. Repository: [HungUniverse/prm323-lab2](https://github.com/HungUniverse/prm323-lab2), sinh viên cung cấp và đã mở được công khai ngày 11/10/2026. Slide mới và tài liệu sửa trong lượt này còn ở máy, chưa tự push lên repo.

## 1. Chuẩn bị trước buổi trình bày

1. Mở PowerPoint và xem phần Notes của từng slide. Các lời dẫn đã chia tổng cộng 10 phút. Luyện theo đồng hồ rồi rút gọn nếu cần, không đọc máy móc toàn bộ chữ trên slide.
2. Mở link Stitch, thử cả bằng cửa sổ chưa đăng nhập. Nếu cần quyền, chỉnh chia sẻ bằng tài khoản của bạn và thử lại. Không tuyên bố người chấm truy cập được khi chưa kiểm tra.
3. Chạy trước [checklist](../../design/prototype-review.md), ưu tiên Hủy/Lưu lịch, Hủy/chốt QR, lý do trống, đổi P/A thật và xuất khi bỏ Drive/lỗi Drive.
4. Chỉ dùng nhánh đã chạy thử cho demo trực tiếp. Nếu nhánh chưa có, nêu giới hạn và mở screenshot dự phòng, không dùng ảnh để giả như thao tác thành công.
5. Đọc D01–D09 đã chọn trong đặc tả 22/10, xem lại trước trình bày. Không nhận UI Stitch đã áp dụng hoặc người duyệt đã ký nếu chưa có bằng chứng. Phân biệt đề xuất trong tài liệu với nội dung thực có trên ảnh gốc.
6. Giữ ba fixture độc lập hoặc reset rõ. F1 là lớp SE1921 chưa bắt đầu. F2 bắt đầu Slot 5 với 26 P/0 A/4 chưa ghi. F3 dùng Slot 4 đã chốt.
7. Để sẵn [ảnh ba flow](../../assets/stitch/prototype-2026-10-11/), AI log, screen-spec và handoff. Phóng to trình duyệt để đọc được, tắt thông báo cá nhân. Dùng dữ liệu giả hoặc đã ẩn danh.
8. Ghi video ba flow sau khi chạy thử để dự phòng lỗi mạng. Hiện chưa có video được cung cấp hoặc tự tạo trong bộ tài liệu này.

Các screenshot hiện có còn một số sai khác. Cần sửa tên file xuất preview/result, nhãn “giữ QR chạy ngầm”, mốc 2 phút và trạng thái flow trước khi demo. Không chỉnh ảnh gốc để che lỗi.

## 2. Nhịp thuyết trình 10 phút

| Slide | Chủ đề | Thời lượng | Ý cần nhấn |
| --- | --- | --- | --- |
| 01 | FAP Attendance | 30 giây | Ứng dụng điểm danh cho giảng viên, phạm vi thiết kế |
| 02 | Vấn đề và người dùng | 50 giây | P01 Minh 36 tuổi minh họa, đủ 12 trường; mục tiêu 15/20/30 giây chưa đo |
| 03 | Cấu trúc điều hướng của 10 màn hình | 45 giây | Hai điểm đến cấp cao, màn con và Back |
| 04 | Ba luồng sử dụng chính | 55 giây | Điểm bắt đầu/kết thúc, nhánh Hủy và lỗi/phục hồi mục tiêu |
| 05 | Tạo giao diện bằng AI | 50 giây | Trích prompt nguyên văn, toàn văn trong Notes, UI V0 thật |
| 06 | Các phiên bản và phản biện UX | 70 giây | Trọng tâm V1/V2/V3, before/after, năm phát hiện cụ thể; bằng chứng còn thiếu |
| 07 | Giữ, chỉnh sửa và loại bỏ đề xuất AI | 50 giây | Bốn ví dụ cùng lý do, chọn trong đặc tả; Stitch chưa xác minh |
| 08 | Bộ 10 màn hình đã gửi | 40 giây | Đúng ảnh gốc, sheet là trạng thái; Drive V1 cũ có nhãn; chưa có low-fi riêng |
| 09 | Hệ thống giao diện và components | 55 giây | Năm nhóm quy tắc, chín nhóm component và trạng thái mục tiêu |
| 10 | Khả năng tiếp cận và thích ứng màn hình | 50 giây | UI Stitch ở 360/412, vùng chạm và bàn phím thực tế chưa đo |
| 11 | Demo prototype tương tác | 60 giây | Ba flow, Back, overlay, lỗi/phục hồi và loading/result cần chứng minh |
| 12 | Bàn giao Flutter và kết luận | 45 giây | Sáu phần mỗi màn, hai bảng mapping, link và phần còn thiếu |
| Tổng | | 600 giây | 10 phút |

Demo ngay ở slide 11, giữ slide 12 để kết luận sau demo. Đồng hồ demo tách riêng, không cộng thời gian thao tác vào 10 phút lời trình bày. Phần mở đầu/kết thúc 20 giây thuộc demo, ngoài 600 giây lời dẫn slide.

Khi được hỏi minh chứng, mở tài liệu tương ứng: slide 3–4 mở user-flow; slide 5–6 mở AI log và prompt gốc; slide 7 mở decisions; slide 9 mở DESIGN; slide 10 mở kết quả đo nếu đã bổ sung; slide 12 mở handoff và GitHub. Chưa có bằng chứng thì nói đúng giới hạn, không dùng slide như bằng chứng đã hoàn tất yêu cầu.

## 3. Demo trực tiếp trong 5 phút

### Mở đầu từ 00:00 đến 00:20

**Thao tác:** mở Stitch, đưa prototype về fixture ban đầu, giới thiệu thanh Flow là điều khiển demo.

**Lời nói:** “Em demo ba tác vụ của giảng viên trên Stitch. Ngày giả lập là 24/09/2026. Phản hồi lưu file, QR và Drive trong prototype là mô phỏng. Em sẽ chỉ rõ các nhánh chưa hoàn thiện nếu gặp.”

**Kiểm tra:** không bắt đầu ở dữ liệu đã chốt của lần chạy trước. Nếu fixture độc lập, nói rõ việc đổi flow sẽ dùng bộ dữ liệu riêng.

### Flow 1 từ 00:20 đến 01:20

**Mục tiêu:** import và cấu hình lịch SE1921 khi chưa bắt đầu điểm danh.

| Thời điểm | Thao tác | Lời nói / kết quả cần thấy |
| --- | --- | --- |
| 00:20–00:30 | S01, bấm Bắt đầu với markbook | “Email nhận diện workspace, không phải bước xác thực. Drive là tùy chọn.” |
| 00:30–00:45 | S03, kiểm tra file/học kỳ rồi Xác nhận import | “Import lại cần giữ lịch sử. Số trong file và tổng workspace sau merge phải ghi rõ.” |
| 00:45–01:00 | S02, chọn lớp SE1921 chưa bắt đầu, mở S05 | “Chỉ lớp chưa có slot active hoặc closed mới được đổi lịch.” |
| 01:00–01:20 | Nếu đã test: đổi 10 thành 11 tuần, Hủy, mở lại xác nhận 10. Sau đó đổi 11 và Lưu | “Hủy giữ cấu hình cũ. Lưu cập nhật lịch và tổng meeting.” |

**Điểm kết thúc:** trở về đúng lớp, có phản hồi lưu và cấu hình mới. Nếu 20 giây cuối không đủ, trình diễn Hủy hoặc Lưu trực tiếp, mở video/ảnh có bằng chứng cho nhánh còn lại khi được hỏi.

**Nếu file lỗi chưa có nhánh:** không giả vờ chọn file sai rồi chuyển sang thành công. Nói “Nhánh file lỗi chưa nối trong bản này” và chỉ checklist phục hồi dự kiến. Nếu nhánh đã hoàn thiện, có thể dùng nó thay một lần sửa lịch để chứng minh lỗi rồi chọn lại.

### Flow 2 từ 01:20 đến 02:50

**Mục tiêu:** mở QR, hủy xác nhận rồi chốt Slot 5.

| Thời điểm | Thao tác | Lời nói / kết quả cần thấy |
| --- | --- | --- |
| 01:20–01:35 | Reset F2, S04 lớp SE1920, Slot 5 | “Hiện có 26 P, 0 A và 4 chưa ghi, tổng 30 sinh viên.” |
| 01:35–01:55 | Mở S06 QR | “QR đổi mỗi 15 giây. Mỗi sinh viên có 2 phút sau lượt quét hợp lệ. Đây không phải thời hạn tự chốt cả lớp.” |
| 01:55–02:15 | Bấm Chốt, đọc sheet, chọn Tiếp tục điểm danh | “Hủy chỉ đóng xác nhận, chưa chuyển bốn người thành A.” |
| 02:15–02:35 | Mở xác nhận lần nữa, Đồng ý chốt | “Chốt giữ kết quả đã có, chỉ chuyển ô chưa ghi thành vắng.” |
| 02:35–02:50 | Quan sát S04 sau chốt | “Kết quả mong đợi là 26 P, 4 A, 0 chưa ghi. Slot đã chốt không còn nhận QR.” |

**Điểm kết thúc:** S04 có trạng thái Đã chốt, đủ P/A, không còn mở QR cho slot đó. Bộ ảnh hiện tại chưa có ảnh sau chốt, nên cần kiểm thử và bổ sung trước buổi trình bày.

**Nếu Đồng ý chốt chưa hoạt động:** nói “Bản hiện tại mới có sheet xác nhận, chưa nối đầy đủ kết quả sau chốt.” Mở [ảnh xác nhận dự phòng](../../assets/stitch/prototype-2026-10-11/f2-03-s06-confirm.png), giải thích kết quả mục tiêu. Không gọi flow đã hoàn tất.

### Flow 3 từ 02:50 đến 04:40

**Mục tiêu:** sửa có lý do, xem audit và xuất đúng Slot 4.

Hai lựa chọn fixture, phải chọn trước khi diễn:

- **Giữ fixture hiện có:** Bảo Long đang P, Slot 4 có 28 P/2 A. Demo P thành A sẽ cho 27 P/3 A. Nếu sau đó xuất, preview/result phải là 27/3, không giữ 28/2 cũ.
- **Demo A thành P:** reset Bảo Long là A, Slot 4 có 27 P/3 A. Sau sửa mới thành 28 P/2 A. Thống kê cá nhân cũng phải đổi theo fixture. Không mở trạng thái P rồi lưu P và gọi là A thành P.

| Thời điểm | Thao tác | Lời nói / kết quả cần thấy |
| --- | --- | --- |
| 02:50–03:10 | S08 Slot 4, mở Bảo Long rồi Sửa P/A | “Em sửa đúng sinh viên, lớp và meeting. Kết quả trước khi sửa xuất hiện trong ngữ cảnh.” |
| 03:10–03:30 | Chọn trạng thái khác, để lý do trống hoặc toàn dấu cách, bấm Lưu | “Lý do bắt buộc sau trim. Lỗi nằm tại ô, không lưu và không đóng sheet.” |
| 03:30–03:50 | Nhập lý do đúng tình huống rồi Lưu | “Lưu cập nhật kết quả và thống kê, đồng thời ghi audit trước và sau.” |
| 03:50–04:05 | Mở Xem ghi chú, rồi Back về kết quả slot | “Ghi chú cần giữ lý do, thời điểm và người sửa để xem lại.” |
| 04:05–04:25 | S09, kiểm tra JSON/CSV, tên file, local và lựa chọn Drive, bấm Xuất | “Chỉ xuất slot đã chốt đủ P/A. Tên preview phải giống tên kết quả.” |
| 04:25–04:40 | Xem kết quả và quay lại lịch sử | “Local và Drive có trạng thái riêng. Drive lỗi không làm mất bản local hoặc yêu cầu xuất lại.” |

**Lý do ví dụ:** với A thành P có thể dùng “Bổ sung có mặt sau khi kiểm tra lại.” Với P thành A, dùng lý do phù hợp tình huống, ví dụ “Ghi nhận nhầm, đã kiểm tra lại danh sách.” Không tái sử dụng lý do cũ cho một lần sửa mới.

**Nhánh dự phòng:** nếu validation chưa có, nêu giới hạn rồi trình diễn happy path thật. Nếu audit mới chưa lưu hoặc thống kê chưa cập nhật, không nói đã đồng bộ các màn. Với backup lỗi chưa có state, chỉ mô tả cách phục hồi mục tiêu. Nếu chọn không dùng Drive, màn kết quả chỉ báo local, không được báo synced.

### Kết thúc từ 04:40 đến 05:00

**Thao tác:** về lịch sử, chuyển sang slide 12 hoặc mở handoff nếu còn thời gian.

**Lời nói:** “Ba luồng mô tả chuẩn bị dữ liệu, chốt điểm danh và xử lý kết quả. Handoff có sáu phần mỗi màn, hai bảng mapping và tiêu chí nghiệm thu S07. Bộ hình chỉ gồm ảnh em đã gửi, không thêm màn mới. Các test Stitch vẫn cần chạy. Các việc còn lại là minh chứng AI gốc, kiểm thử và thử bàn giao.”

Nếu giảng viên cần xem tài liệu, mở [repo GitHub](https://github.com/HungUniverse/prm323-lab2) hoặc [screen-spec](../../design/screen-spec.md), [AI log](../../ai/ai-design-log.md), [decisions](../../design/design-decisions.md) và [handoff](../../handoff/flutter-handoff.md) trên máy. Repo đã có tài liệu công khai, nhưng cần upload bản sửa mới trước buổi trình bày.

## 4. Cách xử lý khi demo gặp lỗi

- **Stitch không mở:** dùng video đã quay sau khi test. Nếu chưa có video, mở screenshot và nói rõ đang trình bày trạng thái tĩnh, không chứng minh tương tác.
- **Sai số do lần chạy trước:** reset fixture và nói rõ. Không sửa số bằng lời cho khớp một ảnh cũ.
- **Nút chưa nối:** chỉ rõ nút và trạng thái thiếu, chuyển sang phần có thể chạy. Ghi vào checklist để sửa sau.
- **Không có Drive thật:** nêu mô phỏng. Không đăng nhập tài khoản nhạy cảm hoặc hiển thị OAuth token trong buổi chấm.
- **Hết thời gian:** ưu tiên một lỗi/phục hồi đã chạy được, Hủy xác nhận chốt, kết quả sau chốt và export result. Giữ tài liệu chi tiết cho Q&A.

## 5. Câu hỏi thường gặp và gợi ý trả lời

### Vì sao có cả lịch tuần và danh sách lớp

“Lịch giúp giảng viên định vị theo ngày và giờ. Danh sách giúp tìm lớp không có meeting trong tuần đang xem. Back giữ ngữ cảnh để tránh mở nhầm lớp.”

### Vì sao chọn local-first

“Giảng viên cần biết dữ liệu đã lưu trên thiết bị ngay cả khi backup gặp lỗi. Drive là tùy chọn, trạng thái backup tách khỏi trạng thái lưu local. Prototype hiện mô phỏng phản hồi này.”

### Một đề xuất AI nào cần từ chối

“Nhãn giữ QR chạy ngầm khi Back trái quy tắc đã chọn. Về lớp phải tạm dừng nhận QR, còn slot vẫn active. Bản đặc tả 22/10 chọn Reject, nhưng ảnh gốc giữ nguyên. Prototype cần được đối chiếu và kiểm thử.”

Nếu đã chốt/sửa trước buổi chấm, thay câu cuối bằng kết quả thật và mở ảnh trước/sau. Không nói đã sửa nếu bản đang diễn vẫn có nhãn cũ.

### Đã đủ ba vòng cải tiến chưa

“Em có các phiên bản V1, V2 và ảnh V3 trong hội thoại, với trọng tâm khác nhau. Bộ lưu chưa có đầy đủ prompt, phản hồi và trước/sau cho tất cả vòng. Em chưa tự công nhận đủ bằng chứng chỉ vì có ba tên phiên bản.”

### Làm sao chứng minh responsive và accessibility

“Em chưa đo UI cuối Stitch ở 360/412, contrast, chữ hoặc vùng chạm. Chỉ có ảnh gốc và tiêu chí kiểm thử, checklist app chưa đánh dấu đạt. Không dùng ảnh co giãn để nhận đã thử responsive.”

### Nếu đổi token thì các màn có tự cập nhật không

“Handoff có ánh xạ theme sang ColorScheme/TextTheme ở mức đặc tả. Em chưa có bằng chứng thư viện component/token dùng chung trong Stitch, không cam kết các màn tự cập nhật từ ảnh tĩnh.”

### Vì sao demo trên Stitch thay Figma

“Em hiện dùng Stitch để chạy prototype. Đề gốc vẫn có yêu cầu riêng Figma. Em chưa có xác nhận miễn hoặc thay thế, nên không coi bản Stitch đã đáp ứng các hạng mục đó.”

### Lập trình viên dựa vào đâu để dựng màn hình

“Screen-spec nêu mục đích, states, validation và Back. Handoff mô tả sáu phần từng màn, thông số chung, mapping token/component và những điểm phải xác nhận. Em chưa thử handoff với người khác nên phần này chưa có kết quả thực tế.”

## 6. Checklist chốt trước khi nộp

- [ ] Chạy được ba flow và ít nhất một nhánh lỗi/phục hồi, có Back, overlay, loading rồi kết quả.
- [ ] Sửa các sai khác R01–R12 và lưu ảnh mới riêng, không ghi đè bản gốc.
- [ ] Áp dụng D01–D09 vào Stitch, bổ sung prompt/phản hồi và trước/sau của các vòng muộn.
- [ ] Rà soát bộ màn hình đã gửi; giữ nhãn S10 V1 cũ và các khoảng trống. Không tự tạo màn mới. Kiểm chứng giả định P01 nếu có người đích phù hợp.
- [ ] Đo UI cuối và ghi bằng chứng 360/412, không chỉ tính token.
- [ ] Nhờ một người khác thử handoff, ghi câu hỏi và sửa tài liệu theo kết quả thật.
- [ ] Upload slide mới và tài liệu sửa vào repo Lab 2 đã có; kiểm tra liên kết/file online sau upload. Codex chưa push trong lượt này.
- [ ] Thử link Stitch chưa đăng nhập, ghi điều kiện truy cập nếu có.
- [ ] Xác nhận yêu cầu Figma với giảng viên, không tự coi Stitch là thay thế được miễn.

## Nguồn

Hướng dẫn bổ sung: `D:/Fall2026/PRM393/PRM323_Lab2_HuongDan_Slide_Presentation_Demo.docx`. Nội dung dự án lấy từ persona, user-flow, DESIGN, screen-spec, prototype-review, design-decisions, AI log và Flutter handoff trong thư mục Lab 2. Screenshot giữ nguyên bản do sinh viên cung cấp.
