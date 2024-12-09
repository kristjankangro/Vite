import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  esbuild: { 
    legalComments: "none"
  }
})
