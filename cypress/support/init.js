// Configuraciones y utilidades globales para Cypress

// Configurar comandos personalizados
Cypress.Commands.add('login', (email, password) => {
  cy.request({
    method: 'POST',
    url: '/api/login',
    body: { email, password }
  }).then((response) => {
    // Almacenar token de autenticación
    localStorage.setItem('auth_token', response.body.token);
    // Establecer token en cabeceras
    Cypress.env('AUTH_TOKEN', response.body.token);
  });
});

// Comando para limpiar estado entre pruebas
Cypress.Commands.add('resetState', () => {
  // Resetear base de datos
  cy.task('db:reset');
  
  // Limpiar localStorage y sessionStorage
  cy.clearLocalStorage();
  cy.clearCookies();
});

// Configuraciones de intercepción de peticiones
Cypress.Commands.add('interceptApiCalls', () => {
  // Interceptar y loguear llamadas a API
  cy.intercept('POST', '/api/*', (req) => {
    cy.log(`API Call: ${req.method} ${req.url}`);
  });

  // Manejar errores de API de forma global
  cy.intercept('POST', '/api/*', (req) => {
    req.on('response', (res) => {
      if (res.statusCode >= 400) {
        cy.log(`API Error: ${res.statusCode} - ${res.body}`);
      }
    });
  });
});

// Configuración antes de cada prueba
beforeEach(() => {
  // Resetear estado
  cy.resetState();
  
  // Interceptar llamadas de API
  cy.interceptApiCalls();
});

// Configuraciones de seguridad
Cypress.Commands.add('setSecurityHeaders', () => {
  cy.intercept((req) => {
    req.headers['X-Frame-Options'] = 'DENY';
    req.headers['Content-Security-Policy'] = "default-src 'self'";
  });
});
