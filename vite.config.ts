// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Cafe-Amazon/'  // ตั้งค่า base path ให้ตรงกับ repository name
})
