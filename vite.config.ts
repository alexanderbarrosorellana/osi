import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/pharmacyNightShift": {
        target: "http://localhost:8080/pharmacies",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/pharmacyNightShift/, ""),
      },
    },
  },
  plugins: [react()],
  base: '/osi/'
})
