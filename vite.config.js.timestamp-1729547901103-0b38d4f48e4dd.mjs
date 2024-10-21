// vite.config.js
import { defineConfig } from "file:///home/blueshadows/www/esalud/node_modules/vite/dist/node/index.js";
import laravel from "file:///home/blueshadows/www/esalud/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///home/blueshadows/www/esalud/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { configDefaults } from "file:///home/blueshadows/www/esalud/node_modules/vitest/dist/config.js";
var vite_config_default = defineConfig({
  build: {
    sourcemap: true
  },
  css: {
    devSourcemap: true
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    exclude: [...configDefaults.exclude, "tests/e2e/*"]
  },
  plugins: [
    laravel({
      input: "resources/js/app.js",
      ssr: "resources/js/ssr.js",
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
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0"
    },
    maxHttpHeaderSize: 8192
    // increase the maximum allowed size of HTTP headers
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ibHVlc2hhZG93cy93d3cvZXNhbHVkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ibHVlc2hhZG93cy93d3cvZXNhbHVkL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2JsdWVzaGFkb3dzL3d3dy9lc2FsdWQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBsYXJhdmVsIGZyb20gJ2xhcmF2ZWwtdml0ZS1wbHVnaW4nO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHsgY29uZmlnRGVmYXVsdHMgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgYnVpbGQ6IHtcbiAgICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICAgIGRldlNvdXJjZW1hcDogdHJ1ZSxcbiAgICB9LFxuICAgIHRlc3Q6IHtcbiAgICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcbiAgICAgICAgc2V0dXBGaWxlczogXCIuL3Rlc3RzL3NldHVwLmpzXCIsXG4gICAgICAgIGV4Y2x1ZGU6IFsuLi5jb25maWdEZWZhdWx0cy5leGNsdWRlLCBcInRlc3RzL2UyZS8qXCJdLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBcInJlc291cmNlcy9qcy9hcHAuanNcIixcbiAgICAgICAgICAgIHNzcjogXCJyZXNvdXJjZXMvanMvc3NyLmpzXCIsXG4gICAgICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgdnVlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQXNzZXRVcmxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVBYnNvbHV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiB0YWcuc3RhcnRzV2l0aCgndi0nKVxuICAgICAgICAgICAgICAgICAgICAvLyBpc0N1c3RvbUVsZW1lbnQ6ICh0YWcpID0+IFsndi0nXS5pbmRleE9mKHRhZykgIT09IC0xXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ2FjaGUtQ29udHJvbFwiOiBcIm5vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlXCIsXG4gICAgICAgICAgICBQcmFnbWE6IFwibm8tY2FjaGVcIixcbiAgICAgICAgICAgIEV4cGlyZXM6IFwiMFwiLFxuICAgICAgICB9LFxuICAgICAgICBtYXhIdHRwSGVhZGVyU2l6ZTogODE5MiwgLy8gaW5jcmVhc2UgdGhlIG1heGltdW0gYWxsb3dlZCBzaXplIG9mIEhUVFAgaGVhZGVyc1xuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1EsU0FBUyxvQkFBb0I7QUFDblMsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixTQUFTLHNCQUFzQjtBQUcvQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDSCxXQUFXO0FBQUEsRUFDZjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDRixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixTQUFTLENBQUMsR0FBRyxlQUFlLFNBQVMsYUFBYTtBQUFBLEVBQ3REO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDTixvQkFBb0I7QUFBQSxVQUNoQixNQUFNO0FBQUEsVUFDTixpQkFBaUI7QUFBQSxRQUNyQjtBQUFBLFFBQ0EsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLFFBR2pCO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLFNBQVM7QUFBQSxNQUNMLGlCQUFpQjtBQUFBLE1BQ2pCLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxJQUNiO0FBQUEsSUFDQSxtQkFBbUI7QUFBQTtBQUFBLEVBQ3ZCO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
