import { test, expect } from '@playwright/test';

test.describe('Flujo de Activación de Paciente', () => {
  test('Activación de cuenta de paciente con datos válidos', async ({ page }) => {
    // Navegar a la página de activación
    await page.goto('/activar-cuenta');
    
    // Verificar que la página de activación carga correctamente
    await expect(page).toHaveTitle(/Activar Cuenta/);
    
    // Simular llenado de formulario de activación
    await page.fill('input[name="token"]', 'token-ejemplo');
    await page.fill('input[name="password"]', 'PassSegura2024!');
    await page.fill('input[name="password_confirmation"]', 'PassSegura2024!');
    
    // Enviar formulario
    await page.click('button[type="submit"]');
    
    // Verificar redireccionamiento o mensaje de éxito
    await expect(page).toHaveURL(/login|dashboard/);
    await expect(page.locator('.alert-success')).toBeVisible();
  });

  test('Rechazar activación con token inválido', async ({ page }) => {
    // Navegar a la página de activación
    await page.goto('/activar-cuenta');
    
    // Simular llenado de formulario con token inválido
    await page.fill('input[name="token"]', 'token-invalido');
    await page.fill('input[name="password"]', 'PassSegura2024!');
    await page.fill('input[name="password_confirmation"]', 'PassSegura2024!');
    
    // Enviar formulario
    await page.click('button[type="submit"]');
    
    // Verificar mensaje de error
    await expect(page.locator('.alert-error')).toBeVisible();
    await expect(page.locator('.alert-error')).toContainText(/Token inválido/);
  });

  test('Rechazar activación con contraseña débil', async ({ page }) => {
    // Navegar a la página de activación
    await page.goto('/activar-cuenta');
    
    // Simular llenado de formulario con contraseña débil
    await page.fill('input[name="token"]', 'token-ejemplo');
    await page.fill('input[name="password"]', 'weak');
    await page.fill('input[name="password_confirmation"]', 'weak');
    
    // Enviar formulario
    await page.click('button[type="submit"]');
    
    // Verificar mensaje de error de contraseña
    await expect(page.locator('.password-error')).toBeVisible();
    await expect(page.locator('.password-error')).toContainText(/Contraseña no cumple requisitos/);
  });

  test('Rechazar activación con token expirado', async ({ page }) => {
    // Navegar a la página de activación
    await page.goto('/activar-cuenta');
    
    // Simular llenado de formulario con token expirado
    await page.fill('input[name="token"]', 'token-expirado');
    await page.fill('input[name="password"]', 'PassSegura2024!');
    await page.fill('input[name="password_confirmation"]', 'PassSegura2024!');
    
    // Enviar formulario
    await page.click('button[type="submit"]');
    
    // Verificar mensaje de error de token expirado
    await expect(page.locator('.alert-error')).toBeVisible();
    await expect(page.locator('.alert-error')).toContainText(/Token expirado/);
  });
});
