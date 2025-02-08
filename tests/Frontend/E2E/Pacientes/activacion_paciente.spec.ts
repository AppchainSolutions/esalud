import { test, expect } from '@playwright/test';

test('Flujo de activación de cuenta de paciente', async ({ page }) => {
    // Navegar a la página de activación
    await page.goto('/pacientes/activacion/token-ejemplo');

    // Verificar que el formulario de activación está presente
    await expect(page.locator('form[name="activacion"]')).toBeVisible();

    // Llenar formulario de activación
    await page.fill('input[name="password"]', 'P@ssw0rd2024!Seguro');
    await page.fill('input[name="password_confirmation"]', 'P@ssw0rd2024!Seguro');
    await page.fill('input[name="email"]', 'usuario@ejemplo.com');

    // Hacer clic en botón de activación
    await page.click('button[type="submit"]');

    // Verificar redireccionamiento a página de login
    await expect(page).toHaveURL('/login');

    // Verificar mensaje de activación exitosa
    await expect(page.locator('.mensaje-activacion')).toContainText('Cuenta activada exitosamente');
});
