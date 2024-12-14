import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
import {resolve} from "path";
import cssNesting from "postcss-nesting";
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
        topLevelAwait({
            // The export name of top-level await promise for each chunk module
            promiseExportName: '__tla',
            // The function to generate import names of top-level await promise in each chunk module
            promiseImportName: (i) => `__tla_${i}`,
        }),],
    build: {
        target: "es2015",
        rollupOptions: {
            output: {
                manualChunks: {
                    "vendors": ["react"],
                }
            },
            input: {
                main: resolve(__dirname, "index.html"),
                second: resolve(__dirname, "second-route/index.html"),
            }
        }
    },
    css: {
        postcss: {
            plugins: [cssNesting()],
        },
        modules: {
            localsConvention: "camelCase",
            generateScopedName: "[local]_[hash:base64:2]"
        }
    }
})
