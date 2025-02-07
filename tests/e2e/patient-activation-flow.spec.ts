import { test, expect } from '@playwright/test';

test.describe('Flujo de Creación y Activación de Paciente', () => {
  const pacienteEmail = 'omar.ahumadag@gmail.com';
  const pacienteNombre = 'Juan Carlos';
  const pacienteApellidos = 'Pérez González';

  test.beforeEach(async ({ page }) => {
    // Resetear base de datos
    await page.request.get('/api/pruebas/reset-database');
  });

  test('Creación de paciente con datos completos', async ({ page }) => {
    // Navegar al formulario de creación de paciente
    await page.goto('/admin/pacientes/crear');

    // Llenar datos personales
    await page.getByLabel('Nombre').fill(pacienteNombre);
    await page.getByLabel('Apellidos').fill(pacienteApellidos);
    await page.getByLabel('Correo Electrónico').fill(pacienteEmail);
    await page.getByLabel('RUT').fill('12.345.678-9');

    // Llenar datos adicionales (campos más importantes)
    await page.getByLabel('Género').selectOption({ label: 'Masculino' });
    await page.getByLabel('Estado Civil').selectOption({ label: 'Soltero' });
    await page.getByLabel('Edad').fill('35');
    await page.getByLabel('Teléfono').fill('+56912345678');
    await page.getByLabel('Dirección').fill('Av. Ejemplo 123, Santiago');

    // Seleccionar datos de catálogos
    await page.getByLabel('Previsión').selectOption({ label: 'Fonasa' });
    await page.getByLabel('Seguro de Salud').selectOption({ label: 'Isapre' });
    await page.getByLabel('Nivel de Instrucción').selectOption({ label: 'Universitario' });

    // Enviar formulario
    await page.getByRole('button', { name: 'Crear Paciente' }).click();

    // Verificar creación de paciente
    await expect(page.getByText('Paciente creado exitosamente')).toBeVisible();

    // Verificar datos en la vista de detalle o lista
    await expect(page.getByText(pacienteNombre)).toBeVisible();
    await expect(page.getByText(pacienteApellidos)).toBeVisible();
    await expect(page.getByText(pacienteEmail)).toBeVisible();
  });

  test('Generación de token de activación', async ({ page }) => {
    // Ejecutar seeder para crear paciente
    await page.request.get('/api/pruebas/ejecutar-seeder/PacienteActivacionSeeder');

    // Obtener token de activación
    const tokenResponse = await page.request.get('/api/pruebas/pacientes/generar-token', {
      params: { email: pacienteEmail }
    });
    const tokenData = await tokenResponse.json();

    // Verificaciones
    expect(tokenData.token).toBeTruthy();
    expect(tokenData.email).toBe(pacienteEmail);
  });

  test('Flujo completo de activación de cuenta', async ({ page }) => {
    // Ejecutar seeder para crear paciente
    await page.request.get('/api/pruebas/ejecutar-seeder/PacienteActivacionSeeder');

    // 1. Obtener token de activación
    const tokenResponse = await page.request.get('/api/pruebas/pacientes/generar-token', {
      params: { email: pacienteEmail }
    });
    const tokenData = await tokenResponse.json();
    const activationLink = `${page.url().split('/')[0]}//${page.url().split('/')[2]}/activar/${tokenData.token}`;

    // 2. Navegar al link de activación
    await page.goto(activationLink);

    // Verificar página de activación
    await expect(page.getByText('Activación de Cuenta')).toBeVisible();

    // 3. Completar formulario de activación
    const passwordInput = page.getByPlaceholder('Contraseña');
    const confirmPasswordInput = page.getByPlaceholder('Confirmar Contraseña');
    const activarButton = page.getByRole('button', { name: 'Activar Cuenta' });

    const validPassword = 'P@ssw0rd2024!Test';
    await passwordInput.fill(validPassword);
    await confirmPasswordInput.fill(validPassword);

    // Activar cuenta
    await activarButton.click();

    // 4. Redirigir a login
    await expect(page).toHaveURL(/login/);
    await expect(page.getByText('Cuenta activada exitosamente')).toBeVisible();

    // 5. Intentar login con nuevas credenciales
    await page.getByLabel('Correo Electrónico').fill(pacienteEmail);
    await page.getByLabel('Contraseña').fill(validPassword);
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();

    // Verificar inicio de sesión exitoso
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Intento de activación con token expirado', async ({ page }) => {
    // Ejecutar seeder para crear paciente
    await page.request.get('/api/pruebas/ejecutar-seeder/PacienteActivacionSeeder');

    // Generar token expirado
    const expiredTokenResponse = await page.request.get('/api/pruebas/pacientes/generar-token-expirado', {
      params: { email: pacienteEmail }
    });
    const expiredTokenData = await expiredTokenResponse.json();
    const expiredActivationLink = `${page.url().split('/')[0]}//${page.url().split('/')[2]}/activar/${expiredTokenData.token}`;

    // Navegar al link de activación expirado
    await page.goto(expiredActivationLink);

    // Verificar mensaje de error
    await expect(page.getByText('El enlace de activación no es válido o ha expirado')).toBeVisible();
  });
});
