import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directorio de pruebas
  testDir: './tests/Frontend/E2E',
  
  // Ejecución completa en paralelo
  fullyParallel: true,
  
  // Prohibir pruebas individuales en CI
  forbidOnly: !!process.env.CI,
  
  // Número de reintentos en CI
  retries: process.env.CI ? 2 : 0,
  
  // Número de trabajadores en CI
  workers: process.env.CI ? 1 : undefined,
  
  // Configuración de reportes
  reporter: 'html',
  
  // Configuración de ejecución
  use: {
    // Configuración base del navegador
    baseURL: 'http://localhost:8000',
    
    // Configuraciones de traza
    trace: 'on-first-retry',
    
    // Capturar pantalla en caso de fallo
    screenshot: 'only-on-failure',
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
