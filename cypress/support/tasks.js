// Tareas personalizadas para pruebas de activación de pacientes
module.exports = (on, config) => {
  const BASE_URL = 'http://localhost:8000/api/pruebas';

  on('task', {
    // Resetear base de datos
    'db:reset'() {
      return fetch(`${BASE_URL}/reset-database`, { method: 'POST' })
        .then(response => response.json())
        .catch(error => {
          console.error('Error reseteando base de datos:', error);
          return null;
        });
    },

    // Crear paciente para pruebas
    'create:paciente'(pacienteData) {
      return fetch(`${BASE_URL}/pacientes/crear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pacienteData)
      })
        .then(response => response.json())
        .catch(error => {
          console.error('Error creando paciente:', error);
          return null;
        });
    },

    // Generar token de activación
    'generate:activation-token'({ email }) {
      return fetch(`${BASE_URL}/pacientes/generar-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
        .then(response => response.json())
        .then(data => data.token)
        .catch(error => {
          console.error('Error generando token:', error);
          return null;
        });
    },

    // Obtener token de activación
    'get:activation-token'({ email }) {
      // Esta tarea podría necesitar una implementación específica
      return null;
    },

    // Generar token de activación expirado
    'generate:expired-activation-token'({ email }) {
      return fetch(`${BASE_URL}/pacientes/generar-token-expirado`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
        .then(response => response.json())
        .then(data => data.token)
        .catch(error => {
          console.error('Error generando token expirado:', error);
          return null;
        });
    },

    // Verificar correo electrónico
    'check:email'({ to, subject, contains }) {
      return fetch(`${BASE_URL}/emails/verificar?to=${to}&subject=${subject}&contains=${contains}`)
        .then(response => response.json())
        .then(data => data.exists)
        .catch(error => {
          console.error('Error verificando correo:', error);
          return false;
        });
    }
  });
};
