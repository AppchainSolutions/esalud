import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directorio de pruebas
  testDir: './tests/e2e',
  
  // Tiempo máximo para cada prueba
  timeout: 30 * 1000,
  
  // Expectativas para pruebas
  expect: {
    timeout: 5000
  },
  
  // Configuración de reportes
  reporter: 'html',
  
  // Configuración de ejecución
  use: {
    // Configuración base del navegador
    baseURL: 'http://localhost:8000',
    
    // Capturar pantalla en caso de fallo
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    // Configuraciones de traza
    trace: 'on-first-retry',
  },
  
  // Configuración de navegadores
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }
  ],
  
  // Servidor de desarrollo
  webServer: {
    command: 'php artisan serve --port=8000',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
  },
});
