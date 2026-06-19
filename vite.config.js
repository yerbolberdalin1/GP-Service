import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the production build portable — it works when opened
// directly from the file system and when hosted in any subfolder.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
