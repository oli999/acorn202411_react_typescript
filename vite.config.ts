import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open:true,
    proxy:{
      "/v1":{
        target:"http://localhost:9000",
        changeOrigin:true
      }
    }
  }
})
