# Kiểm tra từng ảnh V2 — FAP Attendance Mobile

- Sinh viên: SE193324.
- Mã đánh giá: REVIEW-CODEX-V2-01.
- Ngày lưu: 11/10/2026 (Asia/Saigon); không suy diễn thời điểm sinh ảnh hoặc gửi prompt Stitch.
- Yêu cầu gốc: [09-v2-review-request.md](09-v2-review-request.md).
- Đầu vào: 7 ảnh người dùng đính kèm sau prompt V2; tên/mapping ở [README-v2.md](README-v2.md).
- Đối chiếu: mục tiêu và dữ liệu của prompt V2 trong cuộc trò chuyện, yêu cầu P/A, lịch, note và persona giảng viên FPT.
- Phạm vi: kiểm tra ảnh tĩnh và lưu nguyên bản; không chỉnh sửa ảnh, không sửa code app hoặc tự chốt Accept/Modify/Reject.

## Kết luận tổng quan

V2 cải thiện được cách dùng Slot/Khung giờ ở nhiều vị trí, tách lớp chuẩn bị SE1921 khỏi lớp đã điểm danh SE1920, bổ sung trạng thái khóa lịch, note và lỗi lý do trống. Tuy nhiên, chưa nên chốt bộ UI: còn sai giờ, dữ liệu môn/phòng ngoài nguồn, trạng thái Trễ/Phép ngoài P/A, ngưỡng vắng chưa được yêu cầu và note không nhất quán giữa các ảnh.

Đây là **7 ảnh thuộc 3 ID màn hình: S04, S05, S07**, gồm các state/overlay; không phải 7 màn hình chính mới. Chưa nhận S08 V2, màn chọn kết quả Slot 4, state lưu/đã lưu/lỗi lưu. S06 vẫn thiếu bằng chứng hiện hành. Thiếu ảnh không chứng minh chức năng không tồn tại.

Mức độ: P1 = sai nghiệp vụ/ngữ cảnh/kết quả; P2 = cản trở hiểu hoặc thao tác; P3 = nội dung/nhất quán nhỏ hơn. Các lựa chọn giữ/sửa bên dưới là đề xuất của Codex, không phải quyết định cuối của sinh viên.

## Ảnh 1 — S04 đang điểm danh

Tệp: [v2-s04-attendance.png](../../../assets/stitch/v2-s04-attendance.png).

1. **Thành phần:** app bar, card slot, roster và ghi chú.
2. **Bằng chứng quan sát:** Slot 5/20, Khung giờ 2 · 09:30–11:45, thứ Năm 24/09/2026; tổng 26 P + 0 A + 4 chưa ghi = 30; nhãn 4 hiển thị/30 tổng giúp giải thích danh sách rút gọn. App bar là “Diem Danh Danh Sach Lop”, không có dấu và không nêu môn; mã lớp chỉ xuất hiện phía dưới. Card Slot 4 ghi “Có 2 ghi chú bù giờ”, trong khi fixture yêu cầu một kết quả chỉnh sửa. Nguyễn Hoàng Bảo Long có “Có ghi chú” ngay trong danh sách của Slot 5, nhưng note được cung cấp thuộc Slot 4.
3. **Tác động:** Ngữ cảnh môn chưa rõ; giảng viên có thể hiểu nhầm Slot 5 có chỉnh sửa hoặc lớp có hai ghi chú khác với dữ liệu demo.
4. **Nguyên tắc:** H1 trạng thái, H4 nhất quán, H6 nhận biết.
5. **Ưu tiên:** P1 cho ngữ cảnh ghi chú nếu icon được hiểu là note của record Slot 5; P2 cho nhận diện lớp và nhãn. Việc icon đại diện lịch sử toàn sinh viên hay record hiện tại là giả thuyết cần kiểm thử.
6. **Sửa cụ thể:** App bar “Điểm danh lớp”, subtitle “PRN232 · SE1920”. Đổi “TIẾN TRÌNH BUỔI HỌC” thành “TIẾN TRÌNH ĐIỂM DANH”. Slot 4 dùng “1 kết quả đã chỉnh sửa”. Nếu note nằm ở slot khác, ghi “Có ghi chú ở Slot 4” và mở đúng bản ghi đó; không gắn như note của Slot 5.
7. **Kiểm tra:** Mở S04 từ lịch, xác nhận lớp/slot không đổi. Bấm note phải mở Slot 4 đúng sinh viên. Tổng 26+0+4 khớp sĩ số. Chưa có bằng chứng nút Mở QR/Lịch sử hoặc bộ chọn thực sự hoạt động.

**Điểm nên giữ:** Slot và Khung giờ đã tách rõ, tên sinh viên đầy đủ, số liệu slot hiện tại đúng, trạng thái có chữ và icon.

## Ảnh 2 — S04 lớp chuẩn bị

Tệp: [v2-s04-preparation.png](../../../assets/stitch/v2-s04-preparation.png).

1. **Thành phần:** ngữ cảnh lớp, quyền cấu hình, thông tin import và roster.
2. **Bằng chứng quan sát:** PRN232–SE1921, bắt đầu 28/09/2026, 10 tuần, 2 slot/tuần, tổng 20; chưa có slot đang điểm danh/đã chốt. Có Chỉnh sửa lịch lớp và chưa có QR đang nhận. App bar vẫn không dấu. Có “Nhóm 1/Nhóm 2” ngoài dữ liệu yêu cầu và “Đồng bộ Markbook thành công”.
3. **Tác động:** Tách đúng lớp chuẩn bị giúp demo F1 hợp lệ. Tuy nhiên, nhóm sinh viên không có nguồn và từ “đồng bộ” có thể làm người dùng tưởng đã lưu trên Drive.
4. **Nguyên tắc:** H2 ngôn ngữ thực tế, H4 nhất quán, H8 tối giản.
5. **Ưu tiên:** P2 cho ý nghĩa đã import/local/Drive; P3 cho tiêu đề và nhóm ngoài nguồn. Hiểu nhầm “đồng bộ” là giả thuyết, không kết luận đây là upload thật.
6. **Sửa cụ thể:** Dùng “Điểm danh lớp”; thay bằng “Đã nhập danh sách — 30/30 hồ sơ hợp lệ” và trạng thái lưu trên thiết bị nếu có cơ sở. Bỏ Nhóm 1/2 nếu workbook không có trường này. QR giải thích chỉ mở cho ngày có lịch được phép, không hàm ý từ ngày khai giảng trở đi ngày nào cũng mở được.
7. **Kiểm tra:** S04 SE1921 → S05 editable phải giữ cùng lớp; Hủy không đổi lịch. Thử ngày tương lai/ngày không có meeting khi nối prototype. Giữ khả năng xem roster đầy đủ từ phần xem toàn bộ.

**Điểm nên giữ:** Dữ liệu chuẩn bị khớp mục tiêu V2; cấu hình riêng và trạng thái chưa bắt đầu rõ hơn V1.

## Ảnh 3 — S05 được phép sửa lịch

Tệp: [v2-s05-schedule-editable.png](../../../assets/stitch/v2-s05-schedule-editable.png).

1. **Thành phần:** tiêu đề, lịch ngày ngoại lệ, thông tin phòng và preview tổng lịch.
2. **Bằng chứng quan sát:** Lớp SE1921, bắt đầu 28/09, 10 tuần, hai slot/tuần, chọn thứ Hai/thứ Năm và Khung giờ 2 đúng fixture B. App bar lại ghi “Chi Tiet Slot Diem Danh”. Có phòng LAB_B302 đã đồng bộ. Ngoại lệ nghỉ thứ Bảy 10/10 rồi học bù Chủ nhật 11/10, trong khi lịch gốc là thứ Hai/thứ Năm. Preview vẫn 20 slot, khoảng 28/09–05/12/2026.
3. **Tác động:** Khó biết có thực sự bù một slot bị hủy hay thêm mới; số slot và thời gian cuối kỳ có thể bị hiểu sai.
4. **Nguyên tắc:** H4 nhất quán, H5 phòng ngừa lỗi, H1 trạng thái.
5. **Ưu tiên:** P1 cho ngày ngoại lệ/tổng lịch không giải thích được; P2 cho title và thông tin ngoài nguồn.
6. **Sửa cụ thể:** Đổi app bar thành “Cấu hình lịch lớp”. Bỏ phòng không có nguồn. Chọn một meeting thứ Hai/thứ Năm thực sự tồn tại để nghỉ rồi bù, hoặc ghi rõ thêm slot sẽ tăng tổng. Nếu chưa có ngoại lệ, 20 meeting từ 28/09 theo thứ Hai/thứ Năm có meeting cuối ngày 03/12/2026. Preview phải nói rõ là ngày meeting cuối hay khoảng tuần học; không dùng 05/12 như kết quả lịch mặc định mà không giải thích. Bỏ nhãn nhóm “luân phiên/cuối tuần” nếu không có quy tắc tương ứng.
7. **Kiểm tra:** Sinh danh sách ngày thật; ngày nghỉ phải tham chiếu meeting gốc. Hủy một và thêm một hợp lệ giữ tổng 20; thêm riêng làm tăng tổng. Chuyển 1 slot/tuần phải chọn được một ngày; ảnh hiện tại chưa chứng minh tương tác này.

**Điểm nên giữ:** Form số tuần/tần suất và câu hướng dẫn một ngày/tuần rõ; có Lưu/Hủy.

**Giới hạn:** Không kết luận trường thực tế nghỉ 10/10. Ngày này chỉ được xét là ngoại lệ demo; chính sách nghỉ của trường chưa có bằng chứng.

## Ảnh 4 — S05 lịch bị khóa

Tệp: [v2-s05-schedule-locked.png](../../../assets/stitch/v2-s05-schedule-locked.png).

1. **Thành phần:** trạng thái chỉ đọc, ngữ cảnh lớp và nội dung hỗ trợ.
2. **Bằng chứng quan sát:** PRN232–SE1920, bắt đầu 10/09; 4 đã chốt + 1 đang diễn ra + 15 chưa học = 20. Có giải thích khóa, trường chỉ đọc, Lưu bị làm mờ và nút quay lại lớp. Còn “20 buổi”, app bar sai tên. Thêm giảng viên Nguyễn Văn An, Phòng Lab 304 và hướng liên hệ Ban Đào tạo/Academic Portal không có trong nguồn yêu cầu.
3. **Tác động:** Trạng thái khóa đã dễ hiểu hơn; nội dung ngoài nguồn có thể khiến người dùng tưởng có quy trình mở khóa/quyền can thiệp đã được hỗ trợ.
4. **Nguyên tắc:** H1 trạng thái, H2 đúng bối cảnh, H8 tối giản, H10 hướng dẫn có cơ sở.
5. **Ưu tiên:** P2, vì hướng dẫn hỗ trợ và dữ liệu giảng viên/phòng có thể gây hiểu sai phạm vi sản phẩm.
6. **Sửa cụ thể:** Giữ khóa/readonly/Back. Đổi app bar “Cấu hình lịch lớp”, dùng “20 slot”. Bỏ giảng viên, phòng và hướng can thiệp qua cổng đào tạo nếu chưa có yêu cầu. Ghi ngắn: “Lịch đã khóa vì lớp có dữ liệu điểm danh. Bạn vẫn có thể xem lịch và kết quả.”
7. **Kiểm tra:** Mọi trường, nút tăng/giảm, date picker và Lưu không thay đổi dữ liệu; Back về đúng SE1920. Khi chữ lớn, thông tin chỉ đọc vẫn đọc được; disabled không được đồng nghĩa không thể xem nội dung.

**Điểm nên giữ:** Hai state editable/locked đã tách đúng hai lớp, giải quyết mâu thuẫn ngữ cảnh chính của V1 trên ảnh.

## Ảnh 5 — S07 xem note

Tệp: [v2-s07-note.png](../../../assets/stitch/v2-s07-note.png).

1. **Thành phần:** bottom sheet note, giờ, trạng thái lưu và nền phía sau.
2. **Bằng chứng quan sát:** Đúng SE180123, lớp SE1920, Slot 4, thứ Hai 21/09/2026; có A → P, lý do “Bổ sung có mặt sau khi kiểm tra lại.”, thời điểm 10:15, người sửa Giảng viên (demo), Đóng/X. Nhưng Khung giờ 2 là 10:00–11:30, không khớp 09:30–11:45. Có “Đã đồng bộ” chưa rõ nguồn. Nền sau overlay có thống kê/nhãn khác S07 chính, gồm 28/04 và Phép.
3. **Tác động:** Giảng viên có thể đọc nhầm khung giờ, hiểu dữ liệu đã lên Drive hoặc thấy hai trạng thái hồ sơ không nhất quán khi đóng sheet.
4. **Nguyên tắc:** H1 trạng thái, H4 nhất quán, H6 nhận biết.
5. **Ưu tiên:** P1 cho sai giờ/khác bộ dữ liệu; P2 cho nhãn đồng bộ không rõ. Không kết luận backend đã đồng bộ hay có record Phép chỉ từ ảnh.
6. **Sửa cụ thể:** Khung giờ 2 phải là 09:30–11:45. Dùng đúng S07 chính làm nền, không dựng hồ sơ khác phía sau. “Đã đồng bộ” chỉ hiển thị khi có trạng thái tương ứng; mặc định nhấn mạnh note đã lưu trên thiết bị, không giả nhận Drive. Giữ nội dung reason/actor/timestamp như fixture.
7. **Kiểm tra:** Bấm note Slot 4 → kiểm tra đầy đủ metadata → đóng → S07 giữ nguyên dữ liệu/vị trí cuộn. Lặp lại với mốc hôm nay sau ngày chỉnh sửa để kiểm tra note vẫn xem được. Ảnh hiện thể hiện note của ngày trước nhưng chưa chứng minh lưu bền hoặc mở lại.

**Điểm nên giữ:** Đã có note dễ đọc, thông tin trước/sau và tác giả/thời điểm, đúng yêu cầu cần truy vết.

## Ảnh 6 — S07 lỗi lý do trống

Tệp: [v2-s07-edit-error.png](../../../assets/stitch/v2-s07-edit-error.png).

1. **Thành phần:** dialog sửa Slot 4, nhóm trạng thái và lỗi validation.
2. **Bằng chứng quan sát:** Có lý do bắt buộc, viền đỏ + icon + câu lỗi giải thích không được trống/toàn khoảng trắng, Hủy và Lưu thay đổi. Dialog lại ghi “Môn SWD392 • Phòng Lab AI-201”, không phải PRN232. Có ba lựa chọn P, A và “L · Trễ”, trái yêu cầu chỉ P/A. Nền sau dialog có dữ liệu khác màn S07 chính.
3. **Tác động:** Có thể sửa nhầm môn hoặc tạo trạng thái không được hỗ trợ bởi lịch sử/JSON/Extension; lỗi nhập lý do tốt nhưng chưa đủ bảo vệ tác vụ.
4. **Nguyên tắc:** H5 phòng ngừa sai sót, H4 nhất quán, H9 lỗi rõ và phục hồi được; lỗi không chỉ dựa vào màu.
5. **Ưu tiên:** P1 cho sai môn và thêm L; đây là lỗi nhìn thấy được, không phải giả thuyết.
6. **Sửa cụ thể:** Chỉ giữ P/A. Hiển thị PRN232–SE1920, Slot 4, 21/09/2026, 09:30–11:45 và kết quả cũ → mới. Bỏ phòng. Dùng cùng nền S07. Lý do trống không được lưu; có thể disable Lưu hoặc giữ nút cho phép báo lỗi nhưng không ghi dữ liệu. Sau nhập hợp lệ phải có state loading → thành công/lỗi.
7. **Kiểm tra:** Thử rỗng, toàn dấu cách, Hủy, sửa P/A có lý do, lỗi ghi file và bấm Lưu lặp. Hủy giữ record cũ; lý do sai không đóng dialog; lỗi không giả báo thành công. Ảnh có lỗi không chứng minh validation đã chạy.

**Điểm nên giữ:** Lỗi gắn đúng trường và có giải thích, không chỉ đỏ; Hủy/Lưu phân biệt rõ.

## Ảnh 7 — S07 chi tiết sinh viên

Tệp: [v2-s07-student.png](../../../assets/stitch/v2-s07-student.png).

1. **Thành phần:** tổng P/A, lịch sử, note preview và nhãn tỷ lệ vắng.
2. **Bằng chứng quan sát:** 4 P, 1 A, 20 slot, tỷ lệ 5,0%; năm bản ghi Slot 1–5 khác nhau và ngày/giờ khớp fixture. Có note ở Slot 4, Xem ghi chú và Sửa P/A tách riêng. Nhưng có “Giới hạn <20%” ngoài yêu cầu. Note preview “Đến muộn 10p vì kẹt xe” khác lý do trong ảnh 5. Chỉ mục “5/20 slot” chưa phân biệt số có kết quả với số đã chốt.
3. **Tác động:** Giảng viên dễ hiểu ngưỡng 20% là chính sách chính thức; hai lý do cho cùng chỉnh sửa làm giảm độ tin cậy lịch sử.
4. **Nguyên tắc:** H4 nhất quán, H2 đúng bối cảnh, H1 trạng thái.
5. **Ưu tiên:** P1 cho note không nhất quán; P2 cho chính sách vắng ngoài nguồn và nhãn tiến độ.
6. **Sửa cụ thể:** Bỏ ngưỡng 20%; giữ công thức A/tổng slot lên lịch. Preview và note chi tiết phải cùng lý do “Bổ sung có mặt sau khi kiểm tra lại.”, hoặc bỏ preview lý do nếu không đủ chỗ. Dùng “Đã ghi nhận 5/20 slot · Đã chốt 4/20”. Nút sửa toàn màn phải yêu cầu chọn rõ slot, tránh sửa nhầm; có thể ưu tiên Sửa P/A trên từng dòng.
7. **Kiểm tra:** Đếm năm meeting duy nhất; 4 P + 1 A = 5; 1/20 = 5%. Mở Xem ghi chú Slot 4 và so khớp reason/timestamp/trước-sau. Thử tên dài, chữ lớn và Back giữ context; kích thước font/touch chưa được đo.

**Điểm nên giữ:** Đã giải quyết lịch sử trùng V1 trên ảnh; tỷ lệ vắng đúng; note và edit có điểm vào riêng.

## Đối chiếu mục tiêu V2

| Mục tiêu | Kết quả từ ảnh | Phần còn lại |
|---|---|---|
| Slot thay Lần học; Khung giờ riêng | Cải thiện rõ ở S04/S07 | Vẫn có “Buổi học/20 buổi”, app bar không dấu/sai tác vụ |
| Tách dữ liệu chuẩn bị/đã điểm danh | Đã thể hiện SE1921 và SE1920 | S08 V2 chưa có để đối chiếu toàn luồng |
| Lịch sử không trùng, tổng đúng | S07 chính có năm slot duy nhất, 4P/1A/20, 5% | Nền hai overlay không dùng cùng dữ liệu |
| Xem note sau ngày học | Có sheet note Slot 4 của ngày trước | Sai giờ, khác reason preview, chưa chứng minh tương tác/lưu |
| Sửa chỉ P/A và có lý do | Có state lỗi lý do trống và Hủy/Lưu | Thêm L, sai môn/phòng; thiếu saving/success/save-error |
| Lịch editable/locked đúng điều kiện | Hai state đã có trên ảnh | Kiểm tra việc chặn thao tác; sửa ngoại lệ/học bù |
| S08 và đường S08 → kết quả → S07 | Thiếu bằng chứng | Chưa nhận S08 V2/SlotResults, không dùng V1 thay V2 |

## Việc sửa ưu tiên trước khi chốt vòng

1. **P1:** Ảnh 6 bỏ L/Trễ, SWD392 và phòng; chỉ P/A của PRN232–SE1920.
2. **P1:** Ảnh 5 sửa giờ về 09:30–11:45; hai overlay dùng cùng nền S07 chính.
3. **P1:** Ảnh 1/5/7 thống nhất note Slot 4, số ghi chú và nội dung lý do.
4. **P1:** Ảnh 3 chọn ngoại lệ liên quan meeting thật, tính lại tổng và ngày cuối.
5. **P2:** Bỏ ngưỡng 20%, phòng/giảng viên và quy trình ngoài nguồn; sửa tiêu đề/thuật ngữ.
6. Bổ sung S08 V2/SlotResults và saving/success/save-error; kiểm tra Back/Hủy đúng context.

Không cần đổi phong cách màu hoặc tạo lại mọi màn. Các đề xuất trên là sửa V2 tiếp theo; nếu sinh thêm ảnh phải lưu tên bổ sung riêng, không ghi đè bảy ảnh này.

## Accessibility và giới hạn

- Trạng thái P/A, khóa và lỗi có thêm chữ/icon: điểm tốt quan sát được.
- Chưa đo tương phản, font, kích thước vùng chạm; cần kiểm tra trong Figma/prototype theo mục tiêu project, không suy từ PNG thu nhỏ.
- Cần thử chiều rộng 360/412, chữ phóng lớn, note dài, bàn phím trong dialog và scroll trong bottom sheet.
- Cần kiểm tra nhãn truy cập cho X, note, sửa, lịch; thứ tự focus và vị trí lỗi khi dùng bàn phím/screen reader.
- Nút xuất hiện không chứng minh đã nối luồng. Không có bằng chứng sửa/lưu/Drive/QR thật hoặc usability test.
- Các chỉ số/nhãn trong nền overlay được nhận xét ở mức nhìn thấy; không suy ra schema dữ liệu backend từ ảnh.
- Giữ nguyên ảnh gốc, không chỉnh sửa để che lỗi trong bằng chứng.
