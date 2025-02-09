import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Flujo de Activación de Cuenta de Paciente', () => {
  let tokenActivacion;
  const TEST_PASSWORD = 'Segura123!@#456789';
  const pacienteData = {
    rut: faker.helpers.fromRegExp('[0-9]{8}-[0-9kK]'),
    nombres: faker.person.firstName(),
    apellidos: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    telefono: faker.phone.number('+569########')
  };

  //Asi tenemos un User Admini que puede crear Pacientes
  test.beforeAll(async () => {
    const { execSync } = require('child_process');
    //execSync('php artisan migrate:fresh --seed', { stdio: 'inherit' });
    // También puedes crear datos específicos para tus pruebas
    execSync('php artisan db:seed --class=UserSeeder', { stdio: 'inherit' });
  });

  test.beforeEach(async ({ page }) => {
    // Login como admin
    await page.goto('/login');
    await page.getByLabel('Email').fill('admin@example.com');
    await page.getByLabel('Contraseña').fill('clave123');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
  });

  test('debería crear un nuevo paciente y enviar correo de activación', async ({ page }) => {
    // Navegar al formulario de creación de paciente
    await page.goto('/pacientes/crear');
    await expect(page).toHaveURL('/pacientes/crear');

    // Llenar formulario
    await page.getByLabel('RUT').fill(pacienteData.rut);
    await page.getByLabel('Nombres').fill(pacienteData.nombres);
    await page.getByLabel('Apellidos').fill(pacienteData.apellidos);
    await page.getByLabel('Email').fill(pacienteData.email);
    await page.getByLabel('Teléfono').fill(pacienteData.telefono);

    // Capturar petición de correo
    const emailPromise = page.waitForRequest(request => 
      request.url().includes('/api/email') && 
      request.method() === 'POST'
    );

    // Enviar formulario
    await page.getByRole('button', { name: 'Registrar Paciente' }).click();

    // Esperar envío de correo y verificar mensaje
    await emailPromise;
    await expect(page.getByText('Paciente registrado exitosamente')).toBeVisible();

    // Obtener token de activación de la base de datos
    const { execSync } = require('child_process');
    const result = execSync(
      `php artisan app:generate-signed-url ${pacienteData.email}`,
      { encoding: 'utf8' }
    );
    tokenActivacion = result.match(/token=([^&]+)/)[1];
  });

  test('debería mostrar error con token inválido', async ({ page }) => {
    await page.goto('/activar-cuenta/token-invalido');
    await expect(page.getByText('Token de activación inválido')).toBeVisible();
  });

  test('debería mostrar error con token expirado', async ({ page }) => {
    await page.goto('/activar-cuenta/token-expirado');
    await expect(page.getByText('El token de activación ha expirado')).toBeVisible();
  });

  test('debería activar cuenta exitosamente', async ({ page }) => {
    // Visitar página de activación
    await page.goto(`/activar-cuenta/${tokenActivacion}`);
    await expect(page).toHaveURL(`/activar-cuenta/${tokenActivacion}`);

    // Verificar que se muestra el formulario
    await expect(page.getByText('Activación de Cuenta')).toBeVisible();

    // Verificar que el email está pre-llenado y deshabilitado
    const emailInput = page.getByLabel('Email');
    await expect(emailInput).toHaveValue(pacienteData.email);
    await expect(emailInput).toBeDisabled();

    // Llenar formulario de activación
    await page.getByLabel('Contraseña').fill(TEST_PASSWORD);
    await page.getByLabel('Confirmar Contraseña').fill(TEST_PASSWORD);

    // Verificar indicador de fortaleza de contraseña
    await expect(page.getByText('Contraseña Fuerte')).toBeVisible();

    // Enviar formulario
    await page.getByRole('button', { name: 'Activar Cuenta' }).click();

    // Verificar activación exitosa
    await expect(page.getByText('Cuenta activada exitosamente')).toBeVisible();
    await expect(page).toHaveURL('/login');

    // Intentar iniciar sesión con la nueva cuenta
    await page.getByLabel('Email').fill(pacienteData.email);
    await page.getByLabel('Contraseña').fill(TEST_PASSWORD);
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('debería validar requisitos de contraseña', async ({ page }) => {
    await page.goto(`/activar-cuenta/${tokenActivacion}`);

    const casos = [
      { password: '123', error: 'La contraseña debe tener al menos 12 caracteres' },
      { password: 'abcdefghijkl', error: 'La contraseña debe incluir mayúsculas' },
      { password: 'ABCDEFGHIJKL', error: 'La contraseña debe incluir minúsculas' },
      { password: 'Abcdefghijkl', error: 'La contraseña debe incluir números' },
      { password: 'Abcdefgh1234', error: 'La contraseña debe incluir caracteres especiales' }
    ];

    for (const caso of casos) {
      await page.getByLabel('Contraseña').fill(caso.password);
      await page.getByLabel('Confirmar Contraseña').fill(caso.password);
      
      // Verificar que el botón está deshabilitado
      const submitButton = page.getByRole('button', { name: 'Activar Cuenta' });
      await expect(submitButton).toBeDisabled();

      // Verificar mensaje de error
      await expect(page.getByText(caso.error)).toBeVisible();

      // Verificar indicador de fortaleza
      await expect(page.getByText('Contraseña Débil')).toBeVisible();
    }
  });

  test('debería bloquear después de múltiples intentos fallidos', async ({ page }) => {
    // Simular múltiples intentos fallidos
    for (let i = 0; i < 4; i++) {
      await page.goto('/activar-cuenta/token-invalido');
    }

    // Verificar bloqueo
    await expect(page.getByText('Demasiados intentos fallidos. Por favor, intente más tarde.')).toBeVisible();
  });
});
