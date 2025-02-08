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
    
    // Capturar pantalla en caso de fallo
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    // Configuraciones de traza
    trace: 'on-first-retry',
    
    // Tiempo de espera para acciones
    actionTimeout: 0
  },
  
  // Configuración de navegadores
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      }
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 }
      }
    }
  ],
  
  // Servidor de desarrollo
  webServer: {
    command: 'php artisan serve --port=8000',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
  },
});
