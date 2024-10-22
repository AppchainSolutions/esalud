import { defineWorkspace } from "vitest/config";
import { vi } from 'vitest';
//import { TextEncoder, TextDecoder } from "text-encoding";

export default defineWorkspace(["./vite.config.js"]);
vi.mock('vuetify/lib/components/VApp/VApp.css', () => ({}));
//global.TextEncoder = TextEncoder;
//global.TextDecoder = TextDecoder;
