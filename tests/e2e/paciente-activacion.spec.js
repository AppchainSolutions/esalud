import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Flujo de Activación de Cuenta de Paciente', () => {
  let tokenActivacion;
  const pacienteData = {
    rut: '12345678-9',
    nombre: faker.person.firstName(),
    apellidos: faker.person.lastName(),
    email: faker.internet.email()
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

    // Llenar formulario
    await page.getByLabel('RUT').fill(pacienteData.rut);
    await page.getByLabel('Nombres').fill(pacienteData.nombres);
    await page.getByLabel('Apellidos').fill(pacienteData.apellidos);
    await page.getByLabel('Email').fill(pacienteData.email);

    // Enviar formulario
    await page.getByRole('button', { name: 'Registrar Paciente' }).click();

    // Verificar mensaje de éxito
    await expect(page.getByText('Paciente registrado exitosamente')).toBeVisible();

    // Obtener token de activación (simulado para pruebas)
    tokenActivacion = 'token-simulado-123'; // En un caso real, se obtendría de la base de datos
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

    // Verificar que se muestra el formulario
    await expect(page.getByText('Activación de Cuenta')).toBeVisible();

    // Llenar formulario de activación
    const password = 'SecurePass123!@#';
    await page.getByLabel('Contraseña').fill(password);
    await page.getByLabel('Confirmar Contraseña').fill(password);

    // Enviar formulario
    await page.getByRole('button', { name: 'Activar Cuenta' }).click();

    // Verificar activación exitosa
    await expect(page.getByText('Cuenta activada exitosamente')).toBeVisible();
    await expect(page).toHaveURL('/login');
  });

  test('debería validar requisitos de contraseña', async ({ page }) => {
    await page.goto(`/activar-cuenta/${tokenActivacion}`);

    // Probar contraseña débil
    await page.getByLabel('Contraseña').fill('123');
    await page.getByLabel('Confirmar Contraseña').fill('123');
    await page.getByRole('button', { name: 'Activar Cuenta' }).click();

    // Verificar mensajes de error
    await expect(page.getByText('La contraseña debe tener al menos 12 caracteres')).toBeVisible();
    await expect(page.getByText('La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales')).toBeVisible();
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
