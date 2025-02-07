// Tareas personalizadas para pruebas de activación de pacientes
module.exports = (on, config) => {
  // Resetear base de datos
  on('task', {
    'db:reset'() {
      // Implementar lógica de reset de base de datos
      return null;
    },

    // Crear paciente para pruebas
    'create:paciente'(pacienteData) {
      // Llamar al servicio de backend para crear paciente
      return cy.request('POST', '/api/pacientes/crear-prueba', pacienteData).then((response) => {
        return response.body;
      });
    },

    // Generar token de activación
    'generate:activation-token'({ email }) {
      return cy.request('POST', '/api/pacientes/generar-token', { email }).then((response) => {
        return response.body.token;
      });
    },

    // Obtener token de activación
    'get:activation-token'({ email }) {
      return cy.request('GET', `/api/pacientes/token/${email}`).then((response) => {
        return response.body.token;
      });
    },

    // Generar token de activación expirado
    'generate:expired-activation-token'({ email }) {
      return cy.request('POST', '/api/pacientes/generar-token-expirado', { email }).then((response) => {
        return response.body.token;
      });
    },

    // Verificar correo electrónico
    'check:email'({ to, subject, containsText }) {
      return cy.request('GET', `/api/emails/verificar?to=${to}&subject=${subject}&contains=${containsText}`)
        .then((response) => {
          return response.body.exists;
        });
    }
  });
};
