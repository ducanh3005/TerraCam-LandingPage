# Hướng dẫn Deploy TerraCam Landing Page lên Vercel

## Cách 1: Deploy qua Vercel CLI (Khuyến nghị)

### Bước 1: Login vào Vercel
```bash
vercel login
```
Làm theo hướng dẫn để đăng nhập (có thể dùng GitHub, GitLab, hoặc email)

### Bước 2: Deploy lên Production
```bash
vercel --prod --yes
```

### Bước 3: Thêm Domain terracam.space
1. Vào https://vercel.com/dashboard
2. Chọn project vừa deploy
3. Vào tab **Settings** > **Domains**
4. Thêm domain `terracam.space`
5. Làm theo hướng dẫn để cấu hình DNS tại Namespace

## Cách 2: Deploy qua Vercel Web Interface

1. Truy cập https://vercel.com
2. Đăng nhập/Đăng ký tài khoản
3. Click **Add New Project**
4. Import từ Git repository (nếu có) hoặc upload folder
5. Drag & drop folder `TerraCam` vào Vercel
6. Click **Deploy**
7. Sau khi deploy xong, vào **Settings** > **Domains** để thêm domain `terracam.space`

## Cấu hình DNS tại Namespace

Sau khi thêm domain trên Vercel, bạn sẽ nhận được thông tin DNS cần cấu hình:

1. Đăng nhập vào Namespace
2. Vào quản lý DNS của domain `terracam.space`
3. Thêm các record mà Vercel yêu cầu (thường là CNAME hoặc A record)
4. Đợi DNS propagate (có thể mất vài phút đến vài giờ)

## Kiểm tra sau khi deploy

- Truy cập URL mà Vercel cung cấp để kiểm tra
- Sau khi DNS đã propagate, truy cập https://terracam.space

## Lưu ý

- File `vercel.json` đã được cấu hình sẵn với routing và headers tối ưu
- Static files (CSS, JS) sẽ được cache lâu để tăng performance
- Site đã được tối ưu cho SEO và security

