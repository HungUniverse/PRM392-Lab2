Tôi đã xem đủ 10 ảnh V0. **Bố cục trắng–cam khá nhất quán, nhưng cần sửa nghiệp vụ và ngữ cảnh lớp/slot trước khi chỉnh thẩm mỹ.** Những rủi ro lớn nhất là chọn nhầm lớp, nhầm lần học và xuất kết quả chưa chốt.

Đây là đánh giá trên **ảnh tĩnh**, chưa phải kiểm thử prototype. Các nhận định về tác động là giả thuyết UX cần kiểm chứng với giảng viên; tương phản, cỡ chữ và vùng chạm chưa được đo.

Tôi dùng hệ đánh số H1–H10 theo [10 nguyên tắc usability của Nielsen](https://www.nngroup.com/articles/ten-usability-heuristics/). Mức ưu tiên:

- **P1:** sửa trước — có thể dẫn tới sai dữ liệu hoặc sai nghiệp vụ.
- **P2:** sửa trong vòng cải tiến — gây khó hiểu, thao tác khó hoặc thiếu bằng chứng.
- **P3:** hoàn thiện sau — chưa ảnh hưởng trực tiếp tác vụ chính.

## 1. S01 — Tự giới hạn email và đưa khu vực thử nghiệm vào giao diện chính

1. **Thành phần:** Email workspace, thông báo lỗi và phần “MÔ PHỎNG XỬ LÝ LỖI (DEV & QA)”.
2. **Bằng chứng:** Email `gv.demo@fpt.edu.vn` đang hiển thị nhưng bên dưới lại báo “Email không đúng định dạng FPT”. Thông báo yêu cầu đuôi `@fpt.edu.vn` hoặc `@fe.edu.vn`; có nút “Khôi phục mẫu FPT”.
3. **Tác động:** Giảng viên có thể tưởng email hợp lệ bị từ chối hoặc phải dùng tài khoản mẫu. Yêu cầu hiện tại không quy định giới hạn domain cho email nhận diện workspace.
4. **Nguyên tắc:** H2 — ngôn ngữ phù hợp tác vụ; H8 — loại nội dung không cần thiết; H9 — lỗi phải đúng nguyên nhân.
5. **Ưu tiên:** **P1**, vì ảnh đang thể hiện validation mâu thuẫn ngay tại bước bắt đầu.
6. **Đề xuất:** Chỉ kiểm tra định dạng email; bỏ khu vực DEV & QA khỏi màn chính. Tách ảnh trạng thái mặc định và ảnh trạng thái lỗi. Bỏ cam kết “Offline 100%”, “thao tác dưới 1 giây” khi chưa đo.
7. **Kiểm tra:** Email hợp lệ thuộc các domain khác nhau được tiếp tục; email sai có lỗi sát trường nhập, giữ nội dung và hướng dẫn sửa.

## 2. S02 — Ngày, thứ và khoảng tuần không nhất quán

1. **Thành phần:** Thanh chọn tuần và header ngày.
2. **Bằng chứng:** Khoảng tuần là `22/09/2026–28/09/2026`, bắt đầu thứ Ba thay vì thứ Hai. Header ghi “Thứ Ba 23/09” và “Thứ Tư 24/09”; thực tế năm 2026, ngày 23/09 là thứ Tư và 24/09 là thứ Năm.
3. **Tác động:** Giảng viên dựa vào thứ để chọn lớp có thể mở nhầm ngày, ảnh hưởng trực tiếp luồng điểm danh.
4. **Nguyên tắc:** H2 — khớp thực tế; H5 — phòng ngừa lỗi; H7 — tìm lớp hiệu quả.
5. **Ưu tiên:** **P1**, vì lịch là điểm vào của tác vụ chính.
6. **Đề xuất:** Sinh thứ/ngày từ cùng một mốc dữ liệu. Với ví dụ này, tuần thứ Hai–Chủ nhật là **21/09–27/09/2026**. Nếu dùng ngày giả lập, khai báo rõ trong kịch bản demo.
7. **Kiểm tra:** Đổi tuần, qua tháng/năm, học bù Chủ nhật; thứ luôn đúng ngày và chạm ô mở đúng meeting.

**Điểm nên giữ:** Dấu hiệu “Cuộn ngang để xem thêm ngày” và cột slot bên trái phù hợp mobile. Tuy nhiên, việc cột thực sự cố định và các hàng không lệch **cần kiểm tra trong prototype**.

## 3. S03, S04, S05 — Tiêu đề và ngữ cảnh chưa giúp nhận biết đúng tác vụ

1. **Thành phần:** App bar và thông tin lớp.
2. **Bằng chứng:** S03 import và S05 cấu hình đều mang tiêu đề “Chi Tiết Slot Điểm Danh”. S04 hiển thị ngày/giờ nhưng không thấy mã môn và mã lớp.
3. **Tác động:** Giảng viên dạy nhiều lớp khó xác nhận mình đang import, cấu hình hay điểm danh cho lớp nào.
4. **Nguyên tắc:** H1 — biết trạng thái/vị trí; H4 — nhất quán; H6 — nhận biết thay vì ghi nhớ.
5. **Ưu tiên:** **P1**, đặc biệt với S04 vì thiếu ngữ cảnh khi thay đổi dữ liệu.
6. **Đề xuất:** Đổi tiêu đề thành “Import markbook”, “Cấu hình lịch lớp”. S04/S05 luôn có `PRN232 · SE1920`; S04 thêm ngày, giờ và lần học.
7. **Kiểm tra:** Mở lần lượt hai lớp rồi hỏi người thử đang thao tác lớp nào. Họ phải trả lời được mà không quay lại dashboard.

## 4. S04 — Bộ chọn “Slot 1–4” đang nhập nhằng với lần học trong học kỳ

1. **Thành phần:** Bộ chọn slot và thao tác đổi kết quả.
2. **Bằng chứng:** Phía trên ghi `Slot 2`, `Lần học thứ 5/20`, nhưng bên dưới chỉ có bốn lựa chọn `Slot 1–4`. Danh sách còn ghi “Chạm để đổi nhanh trạng thái”.
3. **Tác động:** Không rõ bốn lựa chọn là khung giờ trong ngày hay bốn lần học. Giảng viên có thể không tìm được các lần học khác hoặc đổi kết quả ngoài ý muốn.
4. **Nguyên tắc:** H2 — mô hình rõ ràng; H5 — phòng lỗi; H6 — giảm ghi nhớ.
5. **Ưu tiên:** **P1**, vì liên quan việc sửa đúng ô điểm danh.
6. **Đề xuất:** Dùng bộ chọn meeting như: **“Lần học 5/20 · 24/09 · Slot 2 · 09:30–11:45”**. Phân biệt chạm hàng để xem sinh viên và hành động sửa P/A. Sửa sau chốt phải có lý do.
7. **Kiểm tra:** Chọn được meeting đầu, giữa và cuối học kỳ; đổi P/A đúng meeting; hủy sửa không thay đổi dữ liệu.

## 5. S05 — Điều kiện khóa chỉnh lịch diễn đạt sai và bị cắt

1. **Thành phần:** Thông báo điều kiện hiệu chỉnh.
2. **Bằng chứng:** Nội dung nói “chưa bắt đầu **hoặc** chưa chốt điểm danh”. Dòng giải thích khóa bị cắt thành “nút Lưu sẽ…”. Màn cũng chưa thể hiện mã lớp đang cấu hình.
3. **Tác động:** Giảng viên có thể hiểu rằng lớp đã bắt đầu nhưng chưa chốt vẫn được đổi lịch, rồi mất công nhập cấu hình bị từ chối.
4. **Nguyên tắc:** H5 — ngăn thao tác không hợp lệ; H10 — hướng dẫn tại ngữ cảnh.
5. **Ưu tiên:** **P1**, vì mâu thuẫn quy tắc khóa lịch của phiên bản hiện tại.
6. **Đề xuất:** Viết rõ: **“Chỉ được đổi lịch khi lớp chưa có slot nào đang điểm danh hoặc đã chốt.”** Tạo riêng state được sửa và bị khóa; thông báo quan trọng phải xuống dòng đầy đủ.
7. **Kiểm tra:** Lớp chưa có hoạt động được lưu; lớp có active/closed bị chặn từ đầu, giải thích rõ và có đường quay về.

Ngoài ra, cần kiểm tra ngày nghỉ có thực sự trùng meeting. Trong ảnh, nhóm học là thứ Tư/Bảy nhưng ngày nghỉ `20/10/2026` là thứ Ba.

## 6. S06 — Có xác nhận chốt tốt, nhưng chưa đủ bằng chứng đánh giá màn QR chính

1. **Thành phần:** Màn QR và bottom sheet xác nhận.
2. **Bằng chứng:** Ảnh S06 đang mở overlay, nền QR bị làm mờ. Overlay nêu rõ 26 P và 4 sinh viên sẽ thành A, có lựa chọn tiếp tục nhận.
3. **Tác động:** Xác nhận giúp tránh chốt nhầm, nhưng chưa thể kiểm tra độ rõ QR, hướng dẫn hai phút hay trạng thái sẵn sàng.
4. **Nguyên tắc:** H1 — trạng thái; H3 — hủy thao tác; H5 — xác nhận hậu quả.
5. **Ưu tiên:** **P2 về bằng chứng**, chưa kết luận màn QR chính bị thiếu chức năng.
6. **Đề xuất:** Giữ overlay; thêm ngày và lần học để xác nhận đủ ngữ cảnh. Bổ sung ảnh QR không bị che, mode thường/mã bí mật, loading/lỗi và cảnh báo khi Back.
7. **Kiểm tra:** QR đổi sau 15 giây nhưng mã bí mật không đổi; người thử hiểu hai phút thuộc từng lượt sinh viên. Hủy chốt tiếp tục nhận; chốt thành công về đúng S04.

**Chưa xác minh:** QR trong ảnh có quét được hay chỉ là hình minh họa.

## 7. S07 — Tự thêm giờ học, phòng và ngưỡng vắng chưa được quy định

1. **Thành phần:** Lịch sử cá nhân và thống kê chuyên cần.
2. **Bằng chứng:** S07 dùng giờ `07:30–09:50`, `10:00–12:20`, khác khung giờ yêu cầu; thêm “Phòng BE-302” và “max 20%”. Còn dùng `B.1`, `B.2`, “Lịch sử buổi học”.
3. **Tác động:** Giảng viên không biết thông tin nào đáng tin, có thể nhầm chính sách vắng hoặc lần học đang xem.
4. **Nguyên tắc:** H2 — khớp nghiệp vụ; H4 — nhất quán dữ liệu và thuật ngữ.
5. **Ưu tiên:** **P1**, vì dữ liệu chi tiết không khớp các màn khác.
6. **Đề xuất:** Dùng meeting chung với S04/S08; bỏ phòng nếu nguồn không có; bỏ ngưỡng 20% khi chưa được xác nhận. Dùng thuật ngữ “slot” nhất quán, nhưng phân biệt slot trong ngày với lần học.
7. **Kiểm tra:** Cùng meeting phải có cùng ngày/giờ ở mọi màn. Tỷ lệ `1 A / 20 meeting = 5%` vẫn đúng; chạm note hiển thị đúng audit của meeting đó.

**Điểm nên giữ:** Phần giải thích mẫu số và note có lý do, thời gian, thay đổi A → P là hữu ích.

## 8. S08 — Slot đang mở vẫn có nút xuất kết quả

1. **Thành phần:** Card slot đang điểm danh.
2. **Bằng chứng:** Card “Buổi 5” ghi “Đang mở”, còn 4 chưa ghi nhận, nhưng “Xuất kết quả” có hình thức như nút đang dùng được. Header còn ghi tiến độ `5/30`, trong khi ví dụ S07 có 20 slot.
3. **Tác động:** Gợi ý rằng có thể xuất kết quả chưa hoàn tất; số liệu không nhất quán làm giảm độ tin cậy.
4. **Nguyên tắc:** H1 — phản ánh trạng thái; H4 — nhất quán; H5 — phòng lỗi.
5. **Ưu tiên:** **P1**, vì quy tắc chỉ cho xuất slot đã chốt đủ P/A.
6. **Đề xuất:** Với slot đang mở, thay bằng **“Tiếp tục điểm danh”** hoặc khóa xuất kèm lý do. Tiến độ dùng số meeting thực tế của lớp. Đổi “Buổi” thành thuật ngữ đã thống nhất.
7. **Kiểm tra:** Active và slot thiếu kết quả không xuất được, kể cả khi đi từ lịch sử. Closed đủ kết quả mới mở S09.

Đây là vấn đề **hình thức trạng thái nút** nhìn thấy trên ảnh; chưa kiểm tra nút có thực sự hoạt động hay không.

## 9. S09 — Mô tả “CSV chuẩn FAP” gây hiểu nhầm khả năng tích hợp

1. **Thành phần:** Lựa chọn định dạng và nơi lưu.
2. **Bằng chứng:** CSV được ghi “chuẩn FAP”, “nhập trực tiếp vào hệ thống văn phòng đào tạo”. Trong yêu cầu, extension mới là thành phần đọc dữ liệu và điền trên FAP. “Lưu vào máy” còn được trình bày như tùy chọn có thể tắt.
3. **Tác động:** Giảng viên có thể tìm chức năng import CSV trên FAP chưa được xác nhận, hoặc hiểu rằng không cần giữ bản local.
4. **Nguyên tắc:** H2 — mô tả đúng khả năng; H10 — hướng dẫn đúng quy trình.
5. **Ưu tiên:** **P1**, vì hướng dẫn sai cách sử dụng kết quả.
6. **Đề xuất:** Dùng “CSV điểm danh — trao đổi dữ liệu”; “JSON — dùng với Chrome Extension”. Giữ lưu local làm mặc định, Drive là bản đồng bộ tùy chọn. Dùng thư mục `FAP Attendance/FA26` nhất quán.
7. **Kiểm tra:** Người thử giải thích được định dạng nào phục vụ extension, file lưu ở đâu và mất mạng có xuất được không.

## 10. S10 — Cam kết bảo mật và xử lý xung đột vượt quá bằng chứng

1. **Thành phần:** Chính sách đồng bộ, nội dung bảo mật.
2. **Bằng chứng:** Có “Đồng bộ hai chiều FAP Cloud”, “bộ nhớ mã hóa”, “luôn được bảo vệ an toàn”. Mô tả xung đột chỉ dựa vào việc file Drive có thời gian sửa mới hơn; chưa thấy hành động xử lý khi xảy ra xung đột.
3. **Tác động:** Giảng viên có thể tin app đã có cơ chế mã hóa/khôi phục hoàn chỉnh hoặc hiểu nhầm mọi bản remote mới hơn đều là xung đột.
4. **Nguyên tắc:** H1 — trạng thái trung thực; H8 — nội dung thiết yếu; H9 — phục hồi lỗi.
5. **Ưu tiên:** **P1** đối với cam kết bảo mật chưa xác minh; **P2** đối với bố cục chính sách.
6. **Đề xuất:** Dùng trạng thái cụ thể: “Đã lưu trên máy”, “1 tệp chờ đồng bộ”, “Có xung đột — chưa ghi đè”. Bỏ “mã hóa” nếu chưa triển khai. Tách phần giải thích kỹ thuật khỏi khu vực thao tác chính.
7. **Kiểm tra:** Demo synced, offline, quyền bị thu hồi, đang đồng bộ và conflict. Khi đang chạy, nút bị khóa; retry không tạo file trùng và không ghi đè âm thầm.

**Điểm nên giữ:** Lần đồng bộ gần nhất, số file chờ và đường dẫn Drive dễ nhận biết.

## 11. Nhiều màn — Accessibility chưa đủ dữ liệu để kết luận đạt

1. **Thành phần:** Chữ phụ, icon note/sửa/xóa, nút đổi tuần và thông báo.
2. **Bằng chứng:** Một số chữ phụ hiển thị nhỏ; icon note ở S04 và icon xóa ngoại lệ ở S05 khá nhỏ về mặt hình ảnh. Thông báo khóa S05 bị cắt. Ngược lại, P/A có chữ đi kèm, không chỉ màu.
3. **Tác động:** Có nguy cơ đọc khó hoặc chạm nhầm khi giảng viên thao tác nhanh trên điện thoại.
4. **Tiêu chí:** Tương phản, vùng chạm, nhãn và nội dung không bị cắt.
5. **Ưu tiên:** **P2**; thông báo nghiệp vụ bị cắt cần sửa sớm.
6. **Đề xuất:** Kiểm tra trong Figma: chữ ≥14 theo brief, body ưu tiên 16; vùng chạm ≥48×48 theo yêu cầu dự án. Icon nhỏ có thể nằm trong vùng chạm lớn. Thêm nhãn truy cập rõ nghĩa cho các icon.
7. **Kiểm tra:** Đo kích thước thực, đo tương phản trên token cuối; thử tên dài, tăng chữ và chiều rộng 360/412.

**Chưa kết luận:** Chữ dưới 14, vùng chạm dưới 48 hoặc tương phản không đạt — ảnh tĩnh chưa đủ để xác nhận.

WCAG yêu cầu tương phản chữ thường tối thiểu 4,5:1 và không dùng màu làm dấu hiệu duy nhất. Mốc **48×48 là yêu cầu của project**, không phải ngưỡng tối thiểu 24×24 CSS px của WCAG 2.2 AA. [Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html), [Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

## 12. Toàn bộ bộ ảnh — Chưa chứng minh được nhánh lỗi và phục hồi của ba luồng

1. **Thành phần:** Loading, error, retry, hủy và điều hướng.
2. **Bằng chứng:** Chủ yếu là ảnh có dữ liệu thành công; có overlay chốt S06, nhưng chưa có form sửa với lý do trống, import lỗi có chọn lại, export lỗi hay Drive offline/conflict thực tế.
3. **Tác động:** Chưa biết giảng viên có thể thoát lỗi, giữ dữ liệu nhập và hoàn tất tác vụ hay không.
4. **Nguyên tắc:** H1 — phản hồi; H3 — đường thoát; H9 — phục hồi.
5. **Ưu tiên:** **P2 về độ hoàn thiện**, không khẳng định các state này không tồn tại trong Stitch.
6. **Đề xuất:** Bổ sung state cạnh màn liên quan, không tính chúng thành màn hình chính mới.
7. **Kiểm tra:** Chạy ba luồng có starting point riêng; mỗi luồng có happy path, hủy/Back và ít nhất một nhánh lỗi phục hồi phù hợp.

## Đánh giá ba luồng

| Luồng | Điểm đã thể hiện | Việc cần hoàn thiện |
|---|---|---|
| **F1 — Import và cấu hình** | Có chọn file, preview, cấu hình, lưu/hủy | Sửa validation email, tiêu đề và khóa lịch; thêm file lỗi → chọn lại |
| **F2 — QR và chốt** | Có roster và xác nhận hậu quả chốt | Bổ sung lớp/meeting rõ ràng, ảnh QR chính; kiểm tra 15 giây, mã cố định, hai phút, Back và về S04 |
| **F3 — Sửa, xuất, đồng bộ** | Có note, định dạng xuất và trạng thái Drive | Thêm form lý do/lỗi; chặn xuất active; sửa mô tả CSV và cam kết cloud; thêm offline/retry |

Cả H1–H10 đều đã được đối chiếu. Tuy nhiên, **ảnh có nút không chứng minh điều hướng đã hoạt động**, và ảnh có note không chứng minh lưu audit đã đúng.

### Thứ tự cải tiến đề xuất

1. **V1 — Đúng nghiệp vụ và dữ liệu:** ngày/thứ, lớp/meeting, khóa lịch, xuất sau chốt, bỏ thông tin tự thêm.
2. **V2 — Hoàn chỉnh ba luồng:** điều hướng, QR chính, form sửa, xác nhận và lỗi/phục hồi.
3. **V3 — Accessibility và mobile:** đo tương phản/vùng chạm, chữ dài, cuộn, bàn phím, trạng thái loading/disabled.

**Chưa nên yêu cầu Stitch “làm đẹp hơn” ngay. Vòng đầu nên tập trung sửa các phát hiện P1, đồng thời giữ nguyên ảnh V0 làm bằng chứng trước/sau.**

