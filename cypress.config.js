const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Configuración base de Cypress
  e2e: {
    baseUrl: 'http://localhost:8000',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    
    // Configuraciones de ambiente
    env: {
      // URLs de backend
      API_URL: 'http://localhost:8000/api',
      TEST_EMAIL: 'paciente_prueba@example.com',
      
      // Configuraciones de seguridad
      SECURITY_ENABLED: true,
      MAX_ACTIVATION_ATTEMPTS: 3
    },

    // Configuración de retries para pruebas inestables
    retries: {
      runMode: 2,
      openMode: 1
    }
  },

  // Configuraciones globales
  viewportWidth: 1280,
  viewportHeight: 720,

  // Configuración de componentes
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
});
