import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Базовий шлях:
  // - На GitHub Pages = /lab-1-setup/ (назва твого репозиторію)
  // - На Vercel = / (корінь)
  base: process.env.VERCEL === '1' ? '/' : '/lab1-setup/',
})