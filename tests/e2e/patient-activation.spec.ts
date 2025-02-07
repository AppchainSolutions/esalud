import { test, expect } from '@playwright/test';

test.describe('Activación de Cuenta de Paciente', () => {
  const pacienteEmail = 'paciente_prueba@example.com';
  let activationToken: string;

  test.beforeEach(async ({ request }) => {
    // Resetear base de datos
    const resetResponse = await request.get('/api/pruebas/reset-database');
    expect(resetResponse.ok()).toBeTruthy();

    // Generar token de activación
    const tokenResponse = await request.get('/api/pruebas/pacientes/generar-token', {
      params: { email: pacienteEmail }
    });
    expect(tokenResponse.ok()).toBeTruthy();
    const tokenData = await tokenResponse.json();
    activationToken = tokenData.token;
  });

  test('Activación de cuenta con contraseña válida', async ({ page }) => {
    // Navegar al formulario de activación
    await page.goto(`/activar/${activationToken}`);

    // Verificar que el formulario está presente
    await expect(page.getByText('Activación de Cuenta')).toBeVisible();

    // Ingresar contraseña
    const passwordInput = page.getByPlaceholder('Contraseña');
    const confirmPasswordInput = page.getByPlaceholder('Confirmar Contraseña');
    const activarButton = page.getByRole('button', { name: 'Activar Cuenta' });

    // Contraseña débil (debe desactivar botón)
    await passwordInput.fill('short');
    await confirmPasswordInput.fill('short');
    await expect(activarButton).toBeDisabled();

    // Contraseña moderada (debe activar botón)
    const validPassword = 'P@ssw0rd2024!Test';
    await passwordInput.fill(validPassword);
    await confirmPasswordInput.fill(validPassword);
    await expect(activarButton).toBeEnabled();

    // Enviar formulario
    await activarButton.click();

    // Verificar redireccionamiento al dashboard
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText('Cuenta activada exitosamente')).toBeVisible();
  });

  test('Activación de cuenta con contraseña inválida', async ({ page }) => {
    // Navegar al formulario de activación
    await page.goto(`/activar/${activationToken}`);

    // Verificar que el formulario está presente
    await expect(page.getByText('Activación de Cuenta')).toBeVisible();

    // Escenarios de contraseña inválida
    const testCases = [
      { password: 'short', confirm: 'short', description: 'Contraseña muy corta' },
      { password: 'onlylowercase', confirm: 'onlylowercase', description: 'Sin mayúsculas ni números' },
      { password: 'ONLYUPPERCASE', confirm: 'ONLYUPPERCASE', description: 'Sin minúsculas ni números' },
      { password: 'NoSpecialChars123', confirm: 'NoSpecialChars123', description: 'Sin caracteres especiales' },
      { password: 'Diff3rentPass!', confirm: 'Diff3rentPass@', description: 'Contraseñas no coinciden' }
    ];

    for (const testCase of testCases) {
      const passwordInput = page.getByPlaceholder('Contraseña');
      const confirmPasswordInput = page.getByPlaceholder('Confirmar Contraseña');
      const activarButton = page.getByRole('button', { name: 'Activar Cuenta' });

      await passwordInput.fill(testCase.password);
      await confirmPasswordInput.fill(testCase.confirm);

      // Verificar que el botón está deshabilitado
      await expect(activarButton).toBeDisabled();
    }
  });

  test('Intento de activación con token expirado', async ({ page, request }) => {
    // Generar token expirado
    const expiredTokenResponse = await request.get('/api/pruebas/pacientes/generar-token-expirado', {
      params: { email: pacienteEmail }
    });
    expect(expiredTokenResponse.ok()).toBeTruthy();
    const expiredTokenData = await expiredTokenResponse.json();
    const expiredToken = expiredTokenData.token;

    // Navegar al formulario de activación con token expirado
    await page.goto(`/activar/${expiredToken}`);

    // Verificar mensaje de error
    await expect(page.getByText('El enlace de activación no es válido o ha expirado')).toBeVisible();
  });
});
