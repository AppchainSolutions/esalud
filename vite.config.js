import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    build: {
        sourcemap: true
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                // Configuración de Sass
                sassOptions: {
                    outputStyle: 'compressed',
                    sourceMap: true,
                    includePaths: ['node_modules']
                }
            }
        }
    },
    plugins: [
        laravel({
            input: ['resources/js/app.js', 'resources/sass/app.scss'],
            ssr: 'resources/js/ssr.js',
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
