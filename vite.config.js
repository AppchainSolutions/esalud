import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify from "vite-plugin-vuetify";


export default defineConfig({
    build: {
        sourcemap: true,
    },
    css: {
        devSourcemap: true,
    },
    plugins: [
        laravel({
            input: "resources/js/app.js",
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        vuetify({ autoImport: true }), // Automatically imports Vuetify components
    ],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: './vitest.setup.js', // Add this line
    },
    server: {
        headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
        },
        maxHttpHeaderSize: 8192, // increase the maximum allowed size of HTTP headers
    },
});
