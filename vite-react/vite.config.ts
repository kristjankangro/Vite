import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
import {resolve} from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        target: "esnext",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                second: resolve(__dirname, "second-route/index.html"),
            }
        }
    }
})
