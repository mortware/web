import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/data-api/rest': {
        target: 'http://localhost:4280/data-api',
        changeOrigin: true,
        secure: false,
      }
    },
    port: 3000
  },
  plugins: [
    react(),
    tsconfigPaths()
  ],
})
