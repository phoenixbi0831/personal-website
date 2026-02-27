import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  // GitHub Pages 會在 /<repo>/ 子路徑下服務，這裡用環境變數控制 base
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react()],
  server: {
    port: 5173
  }
});

