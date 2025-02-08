# 🧪 Guía de Testing para eSalud

## Estructura de Directorios

```
tests/
├── Backend/
│   ├── Feature/     # Pruebas de integración
│   └── Unit/        # Pruebas unitarias
└── Frontend/
    ├── Unitarias/   # Pruebas de componentes y servicios
    └── E2E/         # Pruebas end-to-end
```

## Ejecución de Pruebas

### Backend (Pest/Laravel)
```bash
# Ejecutar todas las pruebas de backend
php artisan test

# Ejecutar pruebas con cobertura
php artisan test --coverage
```

### Frontend (Vitest)
```bash
# Ejecutar pruebas de frontend
npm run test:frontend

# Ejecutar pruebas con cobertura
npm run test:coverage
```

### E2E (Playwright)
```bash
# Ejecutar pruebas E2E
npm run test:e2e

# Abrir interfaz de Playwright
npx playwright test --ui
```

## Escribiendo Pruebas

### Backend (Pest)
```php
it('puede crear un paciente', function () {
    $datos = Paciente::factory()->make();
    $response = $this->postJson('/api/pacientes', $datos->toArray());
    $response->assertStatus(201);
});
```

### Frontend (Vitest)
```typescript
import { describe, it, expect } from 'vitest';

describe('Componente de Paciente', () => {
  it('valida formulario correctamente', () => {
    const wrapper = mount(PacienteFormulario);
    // Lógica de prueba
  });
});
```

### E2E (Playwright)
```typescript
test('Flujo de registro de paciente', async ({ page }) => {
  await page.goto('/registro');
  // Simular interacción de usuario
  await expect(page).toHaveURL('/dashboard');
});
```

## Buenas Prácticas

- Mantén las pruebas independientes
- Usa datos de prueba realistas
- Cubre casos positivos y negativos
- Documenta los escenarios de prueba

## Configuración

Consulta el archivo `TESTING.md` para una guía completa de nuestra estrategia de testing.
