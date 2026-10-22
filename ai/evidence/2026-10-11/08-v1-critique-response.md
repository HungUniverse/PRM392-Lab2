## A. Nhận xét tổng quan

V1 đã tiến bộ so với V0, nhưng còn hai nhóm cần ưu tiên: **tính nhất quán của dữ liệu meeting** và **khả năng xem lịch sử, ghi chú chỉnh sửa**.

Đánh giá này dựa trên **9 ảnh V1**, ảnh V0 đối chiếu và ba tài liệu `persona.md`, `DESIGN.md`, `user-flow.md`. **Chưa có S06 V1**, nên chưa thể kết luận luồng QR đã hoàn thiện.

### Những điểm nên giữ

- Trắng–cam nhất quán, hành động chính dễ phân biệt với hành động phụ.
- S01 nói rõ email chỉ nhận diện workspace, không phải xác thực tài khoản.
- S03 giải thích import cập nhật dữ liệu và giữ lịch sử.
- S04 đã hiển thị môn/lớp, phân biệt “Lần học 5/20” với “Slot 2”.
- S07 giải thích đúng mẫu số tỷ lệ vắng: toàn bộ meeting đã lên lịch.
- S08 thể hiện rõ meeting đang mở chưa được xuất.
- S09 phân biệt CSV trao đổi dữ liệu với JSON cho Extension.
- Trạng thái P/A có chữ và ký hiệu, không chỉ dựa vào màu.

### Rủi ro chính

1. Cùng lớp PRN232–SE1920 nhưng lịch và trạng thái giữa các màn chưa thể hiện một bộ dữ liệu thống nhất.
2. S07 có hai dòng lịch sử giống nhau và mất dấu hiệu truy cập note từng thấy ở V0.
3. Ngày hôm nay chưa nằm trong vùng thời khóa biểu đang hiển thị.
4. Trạng thái lưu local, nơi lưu Drive và tiến trình đồng bộ còn gây hiểu khác nhau.

### Giới hạn đánh giá

Ảnh tĩnh không chứng minh nút hoạt động, dữ liệu được lưu hoặc prototype đã nối đủ luồng. Chưa thể xác nhận tương phản, kích thước chữ, vùng chạm, screen reader hay hành vi khi bàn phím mở.

Các nguyên tắc H1–H10 dưới đây theo [Nielsen](https://www.nngroup.com/articles/ten-usability-heuristics/). Không cố gán vấn đề cho đủ cả 10 nguyên tắc.

Một điểm tài liệu cần thống nhất: `DESIGN.md` mô tả cảnh báo **sau import**, còn S03 có bước xem trước **trước khi xác nhận**. Đây có thể là cải tiến UX hợp lý, nhưng cần ghi nhận là thay đổi thiết kế, không coi là chức năng source đã có.

---

## B. Đối chiếu V0 → V1

“Đã sửa” trong bảng chỉ xác nhận **biểu hiện trên ảnh**, không xác nhận hành vi đã được triển khai.

| Vấn đề V0 | Màn hình | Trạng thái | Bằng chứng V1 và phần còn lại |
|---|---|---|---|
| Khu vực DEV/QA và thông báo lỗi thử nghiệm xuất hiện trong UI | S01 | Đã sửa | Không còn khu vực thử lỗi; email được giải thích đúng vai trò. |
| Ngày/thứ và khoảng tuần không nhất quán | S02 | Đã sửa | Tuần 21–27/09/2026, thứ Ba 22/09 và thứ Tư 23/09 đúng. Khả năng tìm hôm nay cần thử. |
| Tiêu đề màn hình chưa đúng tác vụ | S03, S05 | Đã sửa | Đã dùng “Import markbook”, “Cấu hình lịch lớp”. |
| Thiếu ngữ cảnh lớp, dễ nhầm slot với lần học | S04 | Sửa một phần | Đã có PRN232–SE1920 và lần học; card kế tiếp vẫn bị cắt. |
| Điều kiện khóa lịch khó hiểu | S05 | Sửa một phần | Câu điều kiện đã rõ; trạng thái được sửa cần đối chiếu bộ dữ liệu demo. |
| Giờ học, thông tin ngoài nguồn và lịch sử cá nhân chưa phù hợp | S07 | Sửa một phần | Đã bỏ thông tin phòng/ngưỡng vắng; xuất hiện lịch sử trùng và thiếu dấu hiệu note. |
| Tiến độ sai mẫu số, xuất meeting đang mở chưa rõ | S08 | Đã sửa | Đã hiển thị 4/20 và “Chưa thể xuất — Cần chốt”. |
| CSV bị mô tả như import trực tiếp vào FAP | S09 | Đã sửa | Đã đổi thành CSV trao đổi dữ liệu, JSON cho Extension. |
| Công tắc local và thư mục lưu chưa rõ | S09 | Chưa sửa | Vẫn có công tắc local; thư mục Drive chưa khớp cách trình bày ở S10. |
| Cam kết bảo mật và xử lý conflict chưa có cơ sở | S10 | Sửa một phần | Đã bỏ cam kết mã hóa; chính sách conflict rõ hơn nhưng chưa có trạng thái xử lý thực tế. |
| Màn QR và các nhánh chốt/lỗi | S06 | Chưa xác minh | Chưa có ảnh S06 V1. |

---

## C. Các phát hiện cụ thể

Quy ước ưu tiên:

- **P1:** Có thể gây hiểu sai kết quả, meeting hoặc mất khả năng truy vết.
- **P2:** Cản trở tác vụ hoặc gây nhầm trạng thái.
- **P3:** Vấn đề nội dung, tính nhất quán ít ảnh hưởng hơn.

### UX-01 — Lịch và quyền sửa của cùng lớp chưa có ngữ cảnh nhất quán

1. **Màn hình/thành phần:** S04, S05, S08 — lớp PRN232–SE1920.
2. **Bằng chứng:** S04 đang mở lần học 5 ngày thứ Năm 24/09. S08 có meeting đã chốt ngày 17, 19 và 22/09. S05 lại chọn bắt đầu 21/09, nhóm thứ Tư/thứ Bảy và hiển thị “Được phép chỉnh sửa”.
3. **Tác động:** Nếu đây là cùng trạng thái dữ liệu, giảng viên sẽ hiểu sai lịch lớp và điều kiện được đổi lịch.
4. **Nguyên tắc:** H4 — nhất quán; H5 — phòng ngừa sai sót.
5. **Ưu tiên:** **P1 nếu cùng kịch bản.** Hiện là **thiếu bằng chứng về ngữ cảnh**, chưa đủ để kết luận hệ thống cho sửa sai. `user-flow.md` đã yêu cầu ba bộ dữ liệu demo độc lập.
6. **Đề xuất:** Khai báo rõ dữ liệu F1/F2/F3 trong trang mô tả prototype. F1 dùng lớp chưa active/closed; F2 và F3 dùng trạng thái phù hợp. Trong mỗi flow, thống nhất ngày bắt đầu, nhóm ngày, thứ tự meeting và trạng thái khóa.
7. **Kiểm tra:** Theo từng starting point, đối chiếu toàn bộ class ID/meeting ID. Với lớp đã active/closed, S05 phải giải thích và chặn lưu.

### UX-02 — Lịch sử sinh viên bị trùng và số lượng không rõ

1. **Màn hình/thành phần:** S07 — danh sách lịch sử.
2. **Bằng chứng:** Hai dòng đều là “Lần học 4 (22/09/2026)”, Slot 2, trạng thái P. Phía trên thống kê 4 P + 1 A nhưng tiêu đề danh sách ghi “2 buổi đã điểm danh”.
3. **Tác động:** Giảng viên không biết đây là bản ghi trùng, danh sách rút gọn hay số liệu sai; có nguy cơ chọn nhầm meeting khi sửa.
4. **Nguyên tắc:** H1 — trạng thái rõ ràng; H4 — nhất quán; H5 — phòng ngừa sai sót.
5. **Ưu tiên:** **P1**, vì ảnh hưởng trực tiếp việc kiểm tra lịch sử.
6. **Đề xuất:** Mỗi dòng đại diện một meeting duy nhất. Nếu chỉ hiển thị hai bản ghi, ghi “Đang hiển thị 2/5 lần học đã ghi nhận” và có “Xem tất cả”; nếu hiển thị toàn bộ, tổng danh sách phải khớp thống kê.
7. **Kiểm tra:** Dùng dữ liệu 4 P, 1 A trên năm meeting khác nhau; kiểm tra không trùng ID, ngày và tổng.

**Phân loại:** Lịch sử trùng và nhãn số lượng là **quan sát được**; nguyên nhân dữ liệu hay thiết kế chưa xác định.

### UX-03 — Ghi chú chỉnh sửa mất dấu hiệu truy cập ở S07

1. **Màn hình/thành phần:** S07 — note/audit; liên quan icon note tại S04.
2. **Bằng chứng:** V0 từng hiển thị note và audit của sinh viên này. V1 chỉ thấy các dòng lịch sử cùng icon bút; S04 vẫn có icon note cạnh SE180123.
3. **Tác động:** Giảng viên khó tìm lý do sửa, đặc biệt khi xem lại sau ngày học.
4. **Nguyên tắc:** H6 — nhận biết thay vì ghi nhớ; H1 — trạng thái; yêu cầu label rõ cho icon tương tác.
5. **Ưu tiên:** **P1**, vì truy vết chỉnh sửa là yêu cầu nghiệp vụ chính.
6. **Đề xuất:** Tại đúng meeting có chỉnh sửa, thêm icon kèm nhãn “Có ghi chú”. Bấm mở note gồm lý do, thời điểm, người sửa và trạng thái trước → sau. Tách hành động xem note khỏi sửa P/A.
7. **Kiểm tra:** Mở bản ghi đã sửa từ ngày trước; xem note mà không phải vào chế độ sửa. Đóng/mở lại vẫn truy cập được thông tin.

**Phân loại:** Thiếu dấu hiệu trong ảnh là **quan sát được**. Không kết luận note đã bị xóa khỏi dữ liệu.

### UX-04 — Ngày hôm nay nằm ngoài vùng lịch đang thấy

1. **Màn hình/thành phần:** S02 — thời khóa biểu cuộn ngang.
2. **Bằng chứng:** Ảnh hiển thị thứ Ba 22/09 và thứ Tư 23/09, trong khi ngày demo hôm nay là thứ Năm 24/09. Có nút “Hôm nay” nhưng chưa thấy cột tương ứng.
3. **Tác động:** Giảng viên cần thao tác nhanh trước giờ học nhưng phải tìm ngày hiện tại trước.
4. **Nguyên tắc:** H6 — nhận biết; H7 — hiệu quả thao tác.
5. **Ưu tiên:** **P2**, vì ảnh hưởng tác vụ thường xuyên nhất.
6. **Đề xuất:** Khi vào dashboard hoặc bấm “Hôm nay”, đưa cả tuần và cột hôm nay vào vùng nhìn. Có nhãn “Hôm nay” tại cột ngày; có thể bổ sung lối tắt “Lớp đang diễn ra”.
7. **Kiểm tra:** Mở từ tuần khác và vị trí cuộn khác; bấm “Hôm nay” một lần phải thấy đúng ngày. Thử tìm và mở đúng lớp trong mục tiêu thời gian do nhóm đặt.

**Phân loại:** Cột hôm nay không nằm trong ảnh là **quan sát được**. Việc nút không tự cuộn là **giả thuyết cần thử trên prototype**.

### UX-05 — Thông tin meeting bị cắt đúng nơi cần xác nhận

1. **Màn hình/thành phần:** S04 — card chọn meeting; S07 — dòng ngày/giờ lịch sử.
2. **Bằng chứng:** Card “Lần 6” chỉ hiện một phần. Giờ ở S07 kết thúc bằng dấu ba chấm.
3. **Tác động:** Giảng viên khó phân biệt các lần học, nhất là khi có học bù hoặc đổi lịch.
4. **Nguyên tắc:** H6 — nhận biết; accessibility về nội dung không bị cắt.
5. **Ưu tiên:** **P2**, vì ngữ cảnh thời gian giúp tránh sửa nhầm.
6. **Đề xuất:** Cho card đủ chiều rộng hoặc mở bộ chọn dạng danh sách. Tách dòng “Lần học”, ngày và giờ; tăng chiều cao thay vì giảm chữ. Nếu cố ý lộ card kế tiếp để báo cuộn, card đang chọn vẫn phải đầy đủ.
7. **Kiểm tra:** Frame rộng 360/412, tên lớp dài và chữ phóng lớn; toàn bộ ngày/giờ của lựa chọn hiện tại phải đọc được.

**Phân loại:** Nội dung bị cắt là **quan sát được**; chưa xác định kích thước chữ thực tế.

### UX-06 — Công tắc lưu local mâu thuẫn với cách diễn đạt mặc định

1. **Màn hình/thành phần:** S09 — “Lưu trên bộ nhớ máy”.
2. **Bằng chứng:** Có công tắc đang bật, nhãn “Mặc định” và nút “Xuất tệp ngay — Lưu trên máy”.
3. **Tác động:** Giảng viên có thể hiểu rằng tắt công tắc sẽ không còn bản local, trái với cách sản phẩm giải thích local-first.
4. **Nguyên tắc:** H3 — kiểm soát; H4 — nhất quán; H5 — phòng ngừa nhầm lẫn.
5. **Ưu tiên:** **P2**, vì liên quan kỳ vọng lưu dữ liệu.
6. **Đề xuất:** Nếu bản xuất luôn lưu local, thay công tắc bằng thông tin chỉ đọc: “Luôn lưu trên thiết bị”, kèm nơi lưu. Giữ lựa chọn “Sao lưu thêm lên Drive” là tùy chọn.
7. **Kiểm tra:** Hỏi người thử “Nếu không chọn Drive, file ở đâu?”; câu trả lời phải thống nhất. Thử xuất khi offline và xác nhận chỉ báo thành công sau khi lưu được.

**Phân loại:** Công tắc là **quan sát được**; hành vi sau khi tắt chưa có bằng chứng.

### UX-07 — Nơi lưu Drive chưa thống nhất giữa hai màn

1. **Màn hình/thành phần:** S09, S10 — đường dẫn lưu trữ.
2. **Bằng chứng:** S09 ghi thư mục `Attendance_2026`; S10 hiển thị `FAP_Attendance > FA26 > PRN232`.
3. **Tác động:** Giảng viên khó tìm file vừa xuất hoặc xác nhận đang sao lưu vào đúng workspace.
4. **Nguyên tắc:** H4 — nhất quán; H6 — nhận biết thay vì nhớ.
5. **Ưu tiên:** **P2**, vì ảnh hưởng tìm lại và bàn giao dữ liệu.
6. **Đề xuất:** Hiển thị cùng một đích xuất. Nếu một đường dẫn là workspace, một đường dẫn là exports, phải ghi rõ vai trò. Thư mục lớp nên có cả môn và mã lớp để phân biệt các lớp cùng môn.
7. **Kiểm tra:** Xuất từ S09, sang S10 và đối chiếu tên file, lớp, đường dẫn. Người thử phải chỉ được vị trí file mà không cần hỏi lại.

**Phân loại:** Hai tên thư mục khác nhau là **quan sát được**; chưa rõ có chủ ý dùng hai đích khác nhau hay không.

### UX-08 — Trạng thái đồng bộ và đường xử lý lỗi chưa đủ bằng chứng

1. **Màn hình/thành phần:** S10 — tiến trình đồng bộ và conflict.
2. **Bằng chứng:** Đồng thời có “1 tệp chờ đồng bộ”, “Tệp đang chờ tải lên” và nút “Đang đồng bộ…”. Conflict mới có đoạn giải thích chính sách.
3. **Tác động:** Giảng viên khó biết tệp đang tải hay vẫn chờ; khi có xung đột chưa thấy nơi kiểm tra hoặc bước tiếp theo.
4. **Nguyên tắc:** H1 — trạng thái; H9 — phục hồi lỗi; H10 — hướng dẫn.
5. **Ưu tiên:** **P2**, đặc biệt với người dùng mạng không ổn định.
6. **Đề xuất:** Phân biệt trạng thái từng tệp: “Đang tải 1 tệp”, “Còn 0 tệp chờ”, “Lần thành công gần nhất…”. Thêm trạng thái offline/thử lại và conflict có hành động “Xem hướng dẫn kiểm tra”, không hứa tự merge.
7. **Kiểm tra:** Mô phỏng chờ → đang tải → thành công; offline → thử lại; conflict → xem hướng dẫn → quay lại. Bấm đồng bộ lặp không tạo lượt chạy mới.

**Phân loại:** Các nhãn là **quan sát được**. Chờ và đang tải có thể cùng tồn tại, nên đây chưa phải lỗi logic chắc chắn. Khả năng ngăn bấm lặp và phục hồi lỗi còn **thiếu bằng chứng**.

### UX-09 — Mã màn hình nội bộ xuất hiện trong UI

1. **Màn hình/thành phần:** S04 và S09 — nhãn điều hướng.
2. **Bằng chứng:** Có “Lịch sử (S08)”, “MỞ ĐIỂM DANH QR (S06)”, mô tả đến “S07” và “Quản lý Google Drive (S10)”.
3. **Tác động:** Giảng viên phải đọc thông tin phục vụ thiết kế nhưng không giúp hoàn thành tác vụ.
4. **Nguyên tắc:** H2 — ngôn ngữ người dùng; H8 — tối giản.
5. **Ưu tiên:** **P3**, không chặn luồng nhưng làm giao diện kém tự nhiên.
6. **Đề xuất:** Bỏ mã khỏi UI; giữ trong tên frame và tài liệu. Dùng “Lịch sử”, “Mở QR điểm danh”, “Quản lý Google Drive”.
7. **Kiểm tra:** Rà toàn bộ màn hình và overlay; không còn mã Sxx trong nội dung dành cho giảng viên.

**Phân loại:** **Quan sát được.**

### Accessibility: chưa thể đánh dấu đạt

| Hạng mục | Kết luận hiện tại |
|---|---|
| Tương phản chữ | Cần đo trong Figma, nhất là chữ phụ, chip nhạt và trạng thái disabled. Chữ thường cần tối thiểu 4,5:1 theo [WCAG](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). |
| Font body 16, phụ ≥14 | Cần kiểm tra thông số frame; không suy từ ảnh thu nhỏ. |
| Vùng chạm ≥48 × 48 | Cần đo, ưu tiên icon bút, note, mũi tên tuần, radio và nút tăng/giảm. Đây là mục tiêu của project. |
| Không chỉ dùng màu | P/A và một số trạng thái đã có chữ/ký hiệu; chưa xác nhận toàn bộ component. |
| Label cho icon | Có label nhìn thấy ở nhiều nơi; tên truy cập của icon cần kiểm tra theo yêu cầu [labels/instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html). |
| Chữ lớn, bàn phím, cuộn | Chưa có bằng chứng. Cần thử form S01/S03/S05 và overlay sửa điểm danh. |

---

## D. Đánh giá ba luồng

| Luồng | Phần đã thể hiện | Nguy cơ và bằng chứng còn thiếu |
|---|---|---|
| **F1 — Chuẩn bị lớp** | S01 có điểm vào; S03 có file/cấu hình/xác nhận; S02 có quản lý lớp; S05 có lưu và hủy. | Chưa chứng minh nối S04 → S05, import lỗi/chọn lại, lỗi lưu và trạng thái lịch bị khóa. Cần khai báo bộ dữ liệu chưa active/closed để demo đổi lịch. |
| **F2 — Điểm danh** | S04 có đúng ngữ cảnh và nút QR; S08 có trạng thái đang mở. | Thiếu S06 V1 nên chưa đánh giá QR 15 giây, mã bí mật cố định, challenge hai phút, lỗi/thử lại, hủy chốt và trở về đúng meeting. Back khỏi QR cũng chưa có bằng chứng. |
| **F3 — Kiểm tra và xuất** | S08 có lịch sử/xuất; S07 có sửa; S09 có định dạng; S10 có trạng thái đồng bộ. | Chưa thấy đường S08 → danh sách sinh viên → S07. Note chưa rõ; thiếu overlay lý do trống/hủy, kết quả lưu, lỗi xuất, offline/retry và conflict thực tế. |

**Nguy cơ ngõ cụt đáng kiểm tra:** S08 “Xem chi tiết” có đưa tới nơi chọn sinh viên không? S07 Back có giữ meeting nguồn không? Khi xuất/đồng bộ lỗi, người dùng có thể kết thúc bằng bản local hay bị mắc ở màn loading?

Đây là câu hỏi kiểm thử, chưa phải kết luận prototype đang lỗi.

---

## E. Mục tiêu đề xuất cho V2

**Mục tiêu:** Giảng viên xác định đúng meeting, kiểm tra được lý do chỉnh sửa và hoàn tất tác vụ mà không nhầm trạng thái lưu.

| Nhóm ưu tiên | Màn hình | Tiêu chí hoàn thành |
|---|---|---|
| Chuẩn hóa dữ liệu demo | S02, S04, S05, S07, S08 | Khai báo F1/F2/F3 độc lập; mỗi flow nhất quán ngày, lịch, meeting, P/A và quyền sửa. |
| Khôi phục truy vết | S04, S07, S08 | Không trùng lịch sử; số lượng rõ; note xem được sau ngày học; sửa có lý do và hủy không đổi kết quả. |
| Hoàn thiện luồng QR | S06 và kết quả S04 | Có V1/V2 đầy đủ; QR/mã bí mật/hai phút đúng quy tắc; có hủy chốt, lỗi/thử lại và Back; chốt thành công về đúng lớp. |
| Làm rõ lưu và đồng bộ | S09, S10 | Local mặc định không gây hiểu nhầm; đích Drive thống nhất; có success/offline/retry/conflict và ngăn thao tác lặp. |
| Kiểm chứng mobile | Các màn bị tác động | Đo tương phản/font/vùng chạm; thử 360/412, chữ lớn, tên dài và bàn phím; lưu bằng chứng thực tế. |

Nên xử lý UX-01, UX-02 và UX-03 trước, rồi bổ sung S06 và các nhánh lỗi. Chưa cần đổi phong cách màu sắc hoặc thiết kế lại toàn bộ.

**Lượt này chỉ là phản biện:** chưa sửa UI, chưa ghi quyết định Accept/Modify/Reject và chưa được tính là một vòng cải tiến đã hoàn thành.
