import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ตั้งค่า base ให้ตรงกับชื่อ repository บน GitHub
export default defineConfig({
  plugins: [react()],
  base: "/Cafe-Amazon/",
})
