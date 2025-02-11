# Estrategia de Testing en eSalud

## Descripción General

Este documento describe la estrategia de testing para el proyecto eSalud, utilizando herramientas modernas y siguiendo las mejores prácticas de desarrollo.

## Herramientas de Testing

- **Backend**: Laravel Pest (PHPUnit)
- **Frontend**: Cypress
- **Cobertura**: Coveralls
- **Análisis Estático**: PHPStan

## Estructura de Testing

```txt
esalud/
├── tests/                     # Testing Backend
│   ├── Feature/               # Tests de integración
│   │   └── Pacientes/
│   ├── Unit/                  # Tests unitarios
│   │   ├── Services/
│   │   └── Repositories/
│   └── Pest.php               # Configuración de Pest
│
├── cypress/                   # Testing Frontend
│   ├── e2e/                   # Tests end-to-end
│   ├── component/             # Tests de componentes
│   └── support/               # Comandos y utilidades
```

## Configuración de Bases de Datos

### Testing

- Utilizamos SQLite en memoria para tests
- Configuración en `phpunit.xml`:

  ```xml
  <env name="DB_CONNECTION" value="sqlite"/>
  <env name="DB_DATABASE" value=":memory:"/>
  ```

## Tipos de Tests

### Backend (Pest/PHPUnit)

- **Unitarios**: Probar funciones individuales
- **Integración**: Probar interacciones entre componentes
- **Características**: Probar flujos completos de negocio

#### Ejemplo de Test Unitario

```php
test('formatea RUT correctamente', function () {
    $service = new PacienteService();
    $rut = $service->formatearRut('123456789');
    expect($rut)->toBe('12.345.678-9');
});
```

#### Ejemplo de Test de Integración

```php
test('crea paciente con datos válidos', function () {
    $data = Paciente::factory()->make()->toArray();
    $paciente = (new PacienteService())->store($data);
    
    expect($paciente)->toBeInstanceOf(Paciente::class);
    $this->assertDatabaseHas('pacientes', ['rut' => $data['rut']]);
});
```

### Frontend (Cypress)

#### Tests E2E

- Flujos completos de usuario
- Interacción con interfaces
- Validación de comportamientos

#### Ejemplo de Test E2E

```javascript
describe('Búsqueda de Pacientes', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/pacientes*').as('getPacientes')
        cy.visit('/pacientes')
    })

    it('busca paciente por RUT', () => {
        cy.get('[data-test="rut-input"]').type('12345678-9')
        cy.get('[data-test="search-button"]').click()
        
        cy.wait('@getPacientes')
        cy.get('[data-test="pacientes-table"]')
            .should('be.visible')
            .and('contain', '12345678-9')
    })
})
```

## Mejores Prácticas

### Principios

- Usar data-test attributes para selectores
- Mantener tests independientes
- Usar factories para datos de prueba
- Cubrir casos felices y de error

### Comandos Útiles

```bash
# Ejecutar tests backend
./vendor/bin/pest

# Ejecutar tests frontend
npx cypress run

# Generar reporte de cobertura
npm run test:coverage
```

## Configuración Continua

- Integración con GitHub Actions
- Ejecución automática de tests en cada PR
- Reportes de cobertura de código

## Próximos Pasos

- Aumentar cobertura de tests
- Implementar más tests de integración
- Configurar análisis de código estático
