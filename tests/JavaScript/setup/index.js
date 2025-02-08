import { config } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Configuración global para Vue Test Utils
config.global.plugins = [
  createTestingPinia(),
  createVuetify({
    components,
    directives,
  }),
];

// Mock global para Inertia
global.$inertia = {
  visit: vi.fn(),
  reload: vi.fn(),
};

// Mock para rutas de Laravel
global.route = (name, params = {}) => {
  return `/${name.replace('.', '/')}`;
};
