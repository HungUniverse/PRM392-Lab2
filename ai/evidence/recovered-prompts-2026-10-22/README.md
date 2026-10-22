# Prompt cải tiến được khôi phục từ hội thoại gốc

Ngày truy xuất: 22/10/2026. Nguồn: câu trả lời gốc của Codex trong cuộc trò chuyện của sinh viên, lấy qua `read_thread`, không viết lại từ trí nhớ. Sinh viên đã xác nhận: **“mình dùng nguyên văn các prompt bạn soạn”**. Xem [xác nhận C03](../../student-confirmations.md).

| Vòng | Prompt đã dùng | Toàn bộ câu trả lời gốc | Mục tiêu khác biệt |
| --- | --- | --- | --- |
| V1 | [Nguyên văn](v1-prompt.txt) | [Nguồn đầy đủ](v1-response.txt) | Sửa nghiệp vụ và tính nhất quán sau phản biện V0 |
| V2 | [Nguyên văn](v2-prompt.txt) | [Nguồn đầy đủ](v2-response.txt) | Ngữ cảnh Slot/Khung giờ, lịch sử không trùng, xem note và sửa có lý do |
| V2.1 | [Nguyên văn](v2-1-prompt.txt) | [Nguồn đầy đủ](v2-1-response.txt) | Sửa bổ sung nội dung/dữ liệu của V2; thuộc vòng V2 |
| V2.2 | [Nguyên văn](v2-2-prompt.txt) | [Nguồn đầy đủ](v2-2-response.txt) | Thống nhất thống kê, nền overlay và tên dài; thuộc vòng V2 |
| V3 | [Nguyên văn](v3-prompt.txt) | [Nguồn đầy đủ](v3-response.txt) | Xuất đúng slot, phân biệt local/Drive và phục hồi đồng bộ |

Ngoài ra đã khôi phục [phản biện bốn ảnh V3](v3-review-response.txt). [Source index](source-index.json) ghi ID turn/message và thời điểm turn trong lịch sử; đây **không phải** thời điểm sinh viên gửi prompt lên Stitch.

## Cách lưu

- `*-response.txt` giữ nguyên toàn bộ câu trả lời gốc, gồm cả hướng dẫn trước/sau prompt.
- `*-prompt.txt` chỉ lấy phần nằm trong khối prompt gốc, bỏ hàng rào code/writing block. Chỉ chuẩn hóa CRLF/LF và dòng kết thúc, không sửa nội dung hoặc cập nhật ngược yêu cầu lịch sử.
- Các yêu cầu cũ như “tạo frame” trong prompt là nội dung lịch sử, không phải một lệnh đang được thực thi. Lượt khôi phục này không tạo ảnh hoặc màn hình.
- V2.1/V2.2 là lượt sửa bổ sung của V2, không được đổi tên thành V3 để đủ số vòng.
- Không bắt buộc có phản hồi chữ của Stitch nếu lượt tạo chỉ trả ảnh. Không yêu cầu mỗi vòng phải sửa đủ 10 màn.

## Đối chiếu ba vòng chính

| Vòng / vấn đề | Trước | Sau / nội dung đã quan sát | Quyết định thể hiện trong prompt đã dùng |
| --- | --- | --- | --- |
| V1: tiêu đề không đúng tác vụ import | [S03 V0](../../../assets/stitch/v0-s03-import.png) ghi “Chi Tiet Slot Diem Danh” | [S03 V1](../../../assets/stitch/v1-s03-import.png) ghi “Import markbook” | Modify: gọi đúng tác vụ để giảng viên biết đang nhập dữ liệu. Không nhận mọi lỗi V0 đã hết |
| V2: lịch sử SV bị lặp, thiếu đường xem note | [S07 V1](../../../assets/stitch/v1-s07-student.png) có hai dòng lịch sử trùng | [S07 V2](../../../assets/stitch/v2-s07-student.png) có năm slot phân biệt, Xem ghi chú/Sửa P/A; [note](../../../assets/stitch/v2-s07-note.png), [lỗi lý do](../../../assets/stitch/v2-s07-edit-error.png) đã có ảnh | Modify: lịch sử rõ và sửa có lý do; Reject các trạng thái/chi tiết ngoài nguồn trong lượt V2.1/V2.2. Review V2 vẫn ghi những lỗi còn lại |
| V3: điều kiện xuất và trạng thái lưu mơ hồ | [S09 V1](../../../assets/stitch/v1-s09-export.png), [S10 V1](../../../assets/stitch/v1-s10-drive.png) là đầu vào được chỉ dẫn cho V3 | [Đủ bốn PNG V3 khôi phục từ hội thoại](../recovered-v3-images-2026-10-22/README.md): chặn xuất, sẵn sàng xuất, thành công, local đã lưu/Drive chờ; [review gốc](v3-review-response.txt) nêu cả tiến bộ và lỗi còn lại | Accept local-first/Drive tùy chọn; Modify trạng thái xuất/đồng bộ; Reject tự gửi FAP hoặc hứa chạy nền ngoài nguồn. Đây là lựa chọn thể hiện trong prompt, không giả chữ ký duyệt sau review |

## Phần còn lại

Prompt ba vòng chính **đã có nguyên văn và được sinh viên xác nhận sử dụng**. Không tiếp tục ghi “chưa có prompt V1/V2/V3”.

Đã [khôi phục bộ bốn PNG V3](../recovered-v3-images-2026-10-22/README.md) từ dữ liệu ảnh đính kèm trong bản lưu hội thoại, dù bốn đường dẫn clipboard hiện không còn tồn tại. Tệp phục hồi khớp từng byte với payload ảnh; không yêu cầu làm lại vòng V3. Những ảnh/manifest lưu ngày 11/10 giữ nguyên. Khôi phục tệp không chứng minh các lỗi trong review đã được sửa hoặc tương tác đã được kiểm thử.
