import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./vendor/laravel/framework/src/Illuminate/Foundation/resources/exceptions/renderer/vite.config.js",
  "./vendor/laravel/jetstream/stubs/breeze/vite.config.js",
  "./vendor/laravel/jetstream/stubs/inertia/vite.config.js",
  "./vite.config.js",
  "./vite.config.ts",
  "./tests/JavaScript/vitest.config.js"
])
