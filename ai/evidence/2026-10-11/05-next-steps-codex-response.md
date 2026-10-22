Sau phản biện, bạn cần **chọn đề xuất → sửa thiết kế → kiểm tra → lưu bằng chứng**. Không phải cứ để AI sửa toàn bộ là xong.

## 1. Chọn đề xuất sẽ thực hiện

Với từng phát hiện, ghi quyết định vào nhật ký:

- **Accept:** chấp nhận sửa như đề xuất.
- **Modify:** chấp nhận vấn đề nhưng điều chỉnh cách sửa.
- **Reject:** không sửa, nêu lý do dựa trên nghiệp vụ hoặc nhu cầu giảng viên.

Ví dụ:

| Phát hiện | Quyết định đề xuất | Lý do |
|---|---|---|
| Ngày/thứ sai trên S02 | Accept | Có thể khiến GV chọn nhầm meeting |
| S04 thiếu môn/mã lớp | Accept | GV cần xác nhận lớp trước khi điểm danh |
| S08 cho xuất slot đang mở | Accept | Vi phạm điều kiện chỉ xuất sau chốt |
| Chưa đủ state lỗi trong ảnh | Modify | Kiểm tra Stitch trước; nếu đã có thì bổ sung bằng chứng, chưa có mới thiết kế |

Đây là **đề xuất quyết định**, bạn cần xác nhận lựa chọn thực tế, không ghi như đã thực hiện.

## 2. Thực hiện vòng cải tiến V1

**Việc tiếp theo nên làm ngay là V1: sửa nghiệp vụ và dữ liệu**, gồm:

- S01: bỏ giới hạn domain email và khu vực DEV & QA.
- S02: sửa ngày/thứ và khoảng tuần.
- S03/S05: sửa tiêu đề.
- S04: thêm môn, mã lớp, phân biệt slot trong ngày và lần học.
- S05: sửa điều kiện khóa cấu hình lịch.
- S07: đồng bộ giờ học, bỏ phòng/ngưỡng vắng chưa được xác nhận.
- S08: chặn xuất slot chưa chốt.
- S09/S10: bỏ mô tả tích hợp, bảo mật chưa có căn cứ.

Gửi **một prompt sửa có mục tiêu rõ ràng** cho Stitch. Giữ phong cách trắng–cam hiện tại, chưa yêu cầu thay đổi toàn bộ bố cục.

## 3. Kiểm tra và lưu V1

Đối chiếu kết quả với từng yêu cầu sửa. AI có thể sửa thiếu hoặc tạo lỗi mới.

Lưu ảnh mới vào [assets/stitch](D:/Fall2026/PRM393/Project_PRM393/prm323-lab2-SE193324/assets/stitch), ví dụ:

```text
v1-s02-timetable.png
v1-s04-attendance.png
v1-s08-history.png
```

**Không ghi đè ảnh V0.**

Trong [ai-design-log.md](D:/Fall2026/PRM393/Project_PRM393/prm323-lab2-SE193324/ai/ai-design-log.md), lưu prompt, phản hồi, ảnh trước/sau, quyết định và kết quả kiểm tra.

## 4. Tiếp tục V2 và V3

| Vòng | Mục tiêu |
|---|---|
| **V2** | Hoàn chỉnh điều hướng, QR, sửa có lý do, lỗi và phục hồi của ba luồng |
| **V3** | Cải thiện accessibility và bố cục mobile; kiểm tra chữ, vùng chạm, tương phản, cuộn và bàn phím |

Những gì chưa đo được phải ghi **“cần kiểm tra trong Figma”**, không đánh dấu đạt.

## 5. Chuyển sang Figma

Sau các vòng cải tiến, hoàn thiện sáu page:

```text
01 User Flow
02 Wireframe
03 Final UI
04 Design System
05 Components
06 Prototype
```

Tiếp đó làm Auto Layout, component/variant, prototype ba luồng, kiểm thử và tài liệu handoff.

**Tóm lại: bước ngay bây giờ là chốt các quyết định Accept/Modify/Reject rồi gửi prompt V1 cho Stitch — chưa làm slide hoặc chuyển thẳng sang Figma.**

