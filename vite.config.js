import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
<<<<<<< HEAD
    build: {
        sourcemap: true
    },
    css: {
        devSourcemap: true
    },
=======
>>>>>>> parent of bce7c95 (archivos eleiminados)
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
<<<<<<< HEAD
            refresh: true
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false
                },
                compilerOptions: {
                    // isCustomElement: (tag) => tag.startsWith('v-')
                    // isCustomElement: (tag) => ['v-'].indexOf(tag) !== -1
                }
            }
        })
    ],
    server: {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
        maxHttpHeaderSize: 8192// increase the maximum allowed size of HTTP headers
      },
});
=======
            refresh: true,
        }),
        vue(),
    ],
});
>>>>>>> parent of bce7c95 (archivos eleiminados)
