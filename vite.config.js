import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // تأكد من استيراد 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    open: true
  },
  // أضف هذا الجزء لتعريف الاسم المستعار '@'
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
});