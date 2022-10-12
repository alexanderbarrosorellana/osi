import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/osi/pharmacyNightShift": {
        target: "https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/pharmacyNightShift/, ""),
      },
    },
  },
  plugins: [react()],
  base: '/osi/'
})
