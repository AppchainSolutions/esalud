import { test, expect } from '@playwright/test';
import axios from 'axios';

test.describe('Flujo de Activación de Paciente', () => {
  let pacienteEmail: string;
  let activationToken: string;

  // Antes de cada prueba, preparar el entorno
  test.beforeEach(async () => {
    // Resetear base de datos
    await axios.post('http://localhost:8000/api/pruebas/reset-database');

    // Generar paciente de prueba
    const pacienteResponse = await axios.post('http://localhost:8000/api/pruebas/pacientes/crear', {
      nombre: 'Paciente',
      apellidos: 'Prueba',
      email: 'paciente_prueba@example.com'
    });

    pacienteEmail = pacienteResponse.data.email;
  });

  test('Generar y validar token de activación', async ({ page }) => {
    // Generar token de activación
    const tokenResponse = await axios.post('http://localhost:8000/api/pruebas/pacientes/generar-token', {
      email: pacienteEmail
    });

    activationToken = tokenResponse.data.token;

    // Verificar que el token se generó correctamente
    expect(activationToken).toBeTruthy();
    expect(activationToken.length).toBeGreaterThan(10);
  });

  test('Activación de cuenta con token válido', async ({ page }) => {
    // Generar token de activación
    const tokenResponse = await axios.post('http://localhost:8000/api/pruebas/pacientes/generar-token', {
      email: pacienteEmail
    });

    activationToken = tokenResponse.data.token;

    // Navegar a la página de activación
    await page.goto(`http://localhost:8000/activar/${activationToken}`);

    // Llenar formulario de activación
    await page.fill('input[name="password"]', 'P@ssw0rd2025!Seguro');
    await page.fill('input[name="password_confirmation"]', 'P@ssw0rd2025!Seguro');
    await page.click('button[type="submit"]');

    // Verificar redirección a login
    await expect(page).toHaveURL(/login/);
  });

  test('Manejo de token expirado', async ({ page }) => {
    // Generar token expirado
    const tokenResponse = await axios.post('http://localhost:8000/api/pruebas/pacientes/generar-token-expirado', {
      email: pacienteEmail
    });

    activationToken = tokenResponse.data.token;

    // Navegar a la página de activación
    await page.goto(`http://localhost:8000/activar/${activationToken}`);

    // Verificar mensaje de error
    const errorMessage = await page.textContent('.error-message');
    expect(errorMessage).toContain('Token expirado');
  });
});
