วิธีสร้างและรันโปรเจกต์ Cafe-Amazon
1. ติดตั้ง Node.js และ Git
ก่อนเริ่มต้น ให้ตรวจสอบว่าเครื่องของคุณติดตั้ง Node.js และ Git แล้วหรือไม่

ดาวน์โหลดและติดตั้ง Node.js ได้ที่: https://nodejs.org/

ดาวน์โหลดและติดตั้ง Git ได้ที่: https://git-scm.com/

ตรวจสอบเวอร์ชันของ Node.js และ npm โดยรันคำสั่ง:

sh
คัดลอก
แก้ไข
node -v
npm -v
2. Clone โปรเจกต์จาก GitHub (ถ้ามี)
ถ้าคุณใช้ GitHub หรือ Git Repository ให้ใช้คำสั่งนี้เพื่อโคลนโปรเจกต์:

sh
คัดลอก
แก้ไข
git clone https://github.com/your-username/Cafe-Amazon.git
cd MINI-TAIYAKI
3. ติดตั้ง Dependencies
หลังจากเข้าไปที่โฟลเดอร์โปรเจกต์ ให้ติดตั้ง dependencies ด้วยคำสั่ง:

sh
คัดลอก
แก้ไข
npm install
4. โครงสร้างโปรเจกต์
csharp
คัดลอก
แก้ไข
MINI-TAIYAKI/
│── dist/                # ไฟล์ที่ถูก build (ถ้ามี)
│── node_modules/        # ไฟล์ dependencies ที่ถูกติดตั้ง
│── public/              # ไฟล์ static เช่น favicon, images
│   ├── vite.svg
│── src/                 # โค้ดหลักของโปรเจกต์
│   ├── assets/          # ไฟล์ assets (ไอคอน, รูปภาพ)
│   ├── components/      # คอมโพเนนต์หลักของ React
│   │   ├── Cart.tsx
│   │   ├── MenuItem.tsx
│   │   ├── Navbar.tsx
│   │   ├── Receipt.tsx
│   ├── product_img/     # รูปภาพสินค้า
│   ├── App.tsx          # ไฟล์ App หลักของ React
│   ├── main.tsx         # จุดเริ่มต้นของแอป
│── .gitignore           # รายการไฟล์ที่ไม่ต้องการให้ Git track
│── index.html           # ไฟล์ HTML หลักของแอป
│── package.json         # ข้อมูลแพ็กเกจและ dependencies
│── vite.config.ts       # ค่าคอนฟิกของ Vite
5. รันโปรเจกต์
ใช้คำสั่งนี้เพื่อเริ่มเซิร์ฟเวอร์ development:

sh
คัดลอก
แก้ไข
npm run dev
ระบบจะแสดง URL เช่น:

arduino
คัดลอก
แก้ไข
Local: http://localhost:5173/
เปิดลิงก์นี้ในเบราว์เซอร์เพื่อดูแอปของคุณ

6. สร้างไฟล์ Build สำหรับ Production
ถ้าต้องการสร้างไฟล์ build สำหรับ production ใช้คำสั่ง:

sh
คัดลอก
แก้ไข
npm run build
ไฟล์ที่สร้างจะอยู่ในโฟลเดอร์ dist/

7. Deploy (Optional)
หากต้องการ deploy ไปยังแพลตฟอร์มเช่น Vercel หรือ Netlify, คุณสามารถทำตามขั้นตอนของแต่ละแพลตฟอร์ม