import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
    "./vite.config.js",
    "./vendor/laravel/jetstream/stubs/livewire/vite.config.js",
    "./vendor/laravel/jetstream/stubs/inertia/vite.config.js",
    "./vendor/laravel/framework/src/Illuminate/Foundation/resources/exceptions/renderer/vite.config.js",
]);
