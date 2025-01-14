import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

var _port = process.env.PORT ?? 8000

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ReactJS-Store",
  preview: {
    port: _port,
    strictPort: true,
   },  
  server: {
    port: _port,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:" + _port,
  },
})