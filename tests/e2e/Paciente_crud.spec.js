import { test, expect } from "@playwright/test";

test.beforeEach("Ingresa a la página", async ({ page }) => {
    await page.goto("http://localhost:8000/login");
    await page.getByLabel("Email").fill("admin@example.com");
    await page.getByLabel("Clave").fill("password123");
    await page.getByRole("button", { name: "Ingresar" }).click();
});

test("Abre formulario para la creación de pacientes", async ({ page }) => {
    await page.getByText("Ficha de Pacientes").click();
    await page.getByRole("main").locator("header").getByRole("button").click();
    expect(page.getByTitle("Ficha de Pacientes"));
    await page.getByRole("main").locator("header").getByRole("button").click();
    expect(page.getByTitle("Nuevo Paciente"));
});

//test("Crea un nuevo paciente", async ({ page }) => {
//     await page.getByLabel("RUT", { exact: true }).fill("1234567-8");
//     await page.getByLabel("Nombre", { exact: true }).fill("Cyrilo");
//     await page
//         .getByLabel("Apellidos", { exact: true })
//         .fill("Vacunazo Gonzalez");
//     await page.locator("div:nth-child(5) > .mdi-menu-down").first().click();
//     await page.getByText("calle 3").click();
//     await page.getByRole("button", { name: "Grabar" }).click();
//     await expect(
//         page.locator("text=Paciente creado exitosamente"),
//     ).toBeVisible();

// // Navega a la página de pacientes
// await page.click(".v-list > :nth-child(3)");
// await page.click(".v-toolbar__content > .v-btn");

// // Rellena el formulario de nuevo paciente
// await page.fill("#input-26", "12345678-9");
// await page.fill("#input-28", "Alonso Carolo");
// await page.fill("#input-30", "Guacamayo Totorolo");

// Descomenta y ajusta según sea necesario
// await page.click('[type="submit"]');
// await expect(page).toHaveText("John Doe");
//});

// test("should search an existing patient", async ({ page }) => {
//     // Implementa la búsqueda de un paciente existente
// });

// test("should edit an existing patient", async ({ page }) => {
//     await page.goto("/pacientes");
//     await page.click('text=John Doe >> .. >> a.edit');
//     // Implementa la edición de un paciente existente
// });
