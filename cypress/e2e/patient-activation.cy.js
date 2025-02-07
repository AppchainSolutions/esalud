describe('Flujo de Activación de Pacientes', () => {
  const pacienteEmail = 'paciente_prueba@example.com';
  const nuevaContrasena = 'NuevaContrasena123!';

  beforeEach(() => {
    // Limpiar datos de prueba antes de cada test
    cy.task('db:reset');
    
    // Crear un paciente para pruebas de activación
    cy.task('create:paciente', {
      email: pacienteEmail,
      nombre: 'Paciente',
      apellidos: 'Prueba',
      rut: '12.345.678-9'
    });
  });

  it('Genera token de activación y envía correo', () => {
    // Iniciar sesión como admin
    cy.login('admin@esalud.cl', 'password');

    // Navegar a la página de pacientes
    cy.visit('/pacientes');

    // Buscar paciente por email
    cy.get('input[placeholder="Buscar paciente"]').type(pacienteEmail);

    // Verificar que el paciente está en la lista
    cy.contains('td', pacienteEmail).should('be.visible');

    // Generar token de activación
    cy.get(`[data-test="generar-token-${pacienteEmail}"]`).click();

    // Verificar que se muestra mensaje de token generado
    cy.contains('Token de activación generado').should('be.visible');

    // Verificar que se envió correo de activación
    cy.task('check:email', {
      to: pacienteEmail,
      subject: 'Activación de Cuenta',
      containsText: 'Token de Activación'
    }).should('be.true');
  });

  it('Activa cuenta de paciente con token válido', () => {
    // Generar token de activación primero
    cy.task('generate:activation-token', { email: pacienteEmail });

    // Obtener token de activación
    cy.task('get:activation-token', { email: pacienteEmail }).then((token) => {
      // Visitar página de activación
      cy.visit(`/activar-cuenta/${token}`);

      // Verificar que se muestra formulario de activación
      cy.get('form[data-test="activacion-cuenta"]').should('be.visible');

      // Llenar formulario de activación
      cy.get('input[name="password"]').type(nuevaContrasena);
      cy.get('input[name="password_confirmation"]').type(nuevaContrasena);
      
      // Enviar formulario
      cy.get('button[type="submit"]').click();

      // Verificar mensaje de activación exitosa
      cy.contains('Cuenta activada exitosamente').should('be.visible');

      // Intentar iniciar sesión con nuevas credenciales
      cy.login(pacienteEmail, nuevaContrasena);

      // Verificar que se redirige al dashboard de paciente
      cy.url().should('include', '/paciente/dashboard');
    });
  });

  it('Maneja token de activación expirado', () => {
    // Generar token de activación expirado
    cy.task('generate:expired-activation-token', { email: pacienteEmail });

    // Obtener token expirado
    cy.task('get:activation-token', { email: pacienteEmail }).then((token) => {
      // Visitar página de activación con token expirado
      cy.visit(`/activar-cuenta/${token}`);

      // Verificar mensaje de token expirado
      cy.contains('Token de activación inválido o expirado').should('be.visible');

      // Verificar botón para solicitar nuevo token
      cy.get('button[data-test="solicitar-nuevo-token"]').should('be.visible');
    });
  });

  it('Bloquea intentos de activación con token inválido', () => {
    // Intentar activar con token completamente inválido
    cy.visit('/activar-cuenta/token-invalido');

    // Verificar mensaje de error
    cy.contains('Token de activación inválido').should('be.visible');

    // Verificar que no se permite acceso al formulario de activación
    cy.get('form[data-test="activacion-cuenta"]').should('not.exist');
  });
});
