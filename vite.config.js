import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

var _port;
if(process.env.NODE_ENV == 'dev'){
  _port = 8001
}else{
  _port = 8000
}

var _origin;
if(process.env.NODE_ENV == 'dev'){
  _origin = "http://0.0.0.0:8001"
}else{
  _origin = "http://0.0.0.0:8000"
}

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
    origin: _origin,
  },
})