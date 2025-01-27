# Guía de Testing - eSalud

## Estrategia de Testing End-to-End y Frontend

### Frontend Testing con Cypress

Utilizamos Cypress para pruebas end-to-end del frontend debido a sus capacidades superiores para testing de aplicaciones Vue.js y una mejor experiencia de desarrollo.

#### Configuración de Cypress

```bash
# Instalación
npm install cypress --save-dev

# Iniciar Cypress
npx cypress open
```

#### Estructura de Pruebas Cypress

```javascript
// cypress/e2e/pacientes.cy.js
describe('Gestión de Pacientes', () => {
  beforeEach(() => {
    cy.intercept('/api/pacientes*').as('getPacientes')
    cy.visit('/pacientes')
  })

  it('debe mostrar lista de pacientes', () => {
    cy.wait('@getPacientes')
    cy.get('[data-test="pacientes-table"]').should('be.visible')
  })

  it('debe permitir crear nuevo paciente', () => {
    cy.get('[data-test="nuevo-paciente"]').click()
    cy.get('[data-test="form-rut"]').type('12345678-9')
    cy.get('[data-test="form-submit"]').click()
    cy.get('[data-test="success-message"]').should('be.visible')
  })
})
```

#### Mejores Prácticas Cypress

1. Usar `data-test` attributes para selectores
2. Implementar Page Objects para reutilización
3. Interceptar llamadas API para mejor control
4. Mantener pruebas independientes
5. Documentar casos de prueba complejos

### Backend Testing con Pest

Utilizamos Pest para pruebas unitarias y de integración del backend, aprovechando su sintaxis moderna y mejor integración con Laravel.

#### Configuración de Pest

```bash
# Instalación
composer require pestphp/pest --dev
composer require pestphp/pest-plugin-laravel --dev

# Inicialización
./vendor/bin/pest --init
```

#### Estructura de Pruebas Pest

```php
// tests/Feature/PacienteCrudTest.php
test('puede crear un paciente', function () {
    $data = [
        'rut' => '12345678-9',
        'nombres' => 'Juan',
        'apellidos' => 'Pérez'
    ];
    
    $response = $this->postJson('/api/pacientes', $data);
    
    $response->assertStatus(201)
        ->assertJson(['success' => true]);
});

test('valida datos requeridos', function () {
    $response = $this->postJson('/api/pacientes', []);
    
    $response->assertStatus(422)
        ->assertJsonValidationErrors(['rut', 'nombres', 'apellidos']);
});
```

#### Mejores Prácticas Pest

1. Usar nombres descriptivos para los tests
2. Agrupar tests relacionados
3. Mantener tests independientes
4. Usar factories para datos de prueba
5. Mockear servicios externos

## Comandos de Testing

### Pruebas Backend (Pest)

```bash
# Ejecutar todas las pruebas
php artisan test

# Ejecutar todas las pruebas de pacientes
php artisan test --group=pacientes

# Ejecutar subgrupos específicos de pacientes
php artisan test --group=pacientes.busqueda
php artisan test --group=pacientes.crud

# Ejecutar múltiples grupos o subgrupos
php artisan test --group=pacientes.busqueda,pacientes.crud

# Filtrar pruebas por nombre dentro de un grupo
php artisan test --group=pacientes --filter=testBusquedaPorRut
```

### Estructura de Grupos de Pruebas

```
pacientes/                    # Grupo principal de pruebas de pacientes
├── busqueda/                # Subgrupo para pruebas de búsqueda
│   ├── BusquedaPorRut
│   ├── BusquedaPorNombre
│   └── BusquedaAvanzada
├── crud/                    # Subgrupo para pruebas CRUD
│   ├── CrearPaciente
│   ├── ActualizarPaciente
│   ├── EliminarPaciente
│   └── ObtenerPaciente
└── validacion/             # Subgrupo para pruebas de validación
    ├── ValidacionRut
    └── ValidacionDatos
```

### Ejemplo de Implementación

```php
// tests/Feature/Pacientes/Busqueda/BusquedaPorRutTest.php
uses()->group('pacientes', 'pacientes.busqueda');

test('puede buscar paciente por rut', function () {
    // ...
});

// tests/Feature/Pacientes/Crud/CrearPacienteTest.php
uses()->group('pacientes', 'pacientes.crud');

test('puede crear nuevo paciente', function () {
    // ...
});
```

### Pruebas Frontend (Cypress)

```bash
# Abrir Cypress en modo interactivo
npx cypress open

# Ejecutar pruebas en modo headless
npx cypress run

# Ejecutar un archivo específico
npx cypress run --spec "cypress/e2e/pacientes.cy.js"

# Ejecutar en un navegador específico
npx cypress run --browser chrome
```

### Pruebas de Mutación

```bash
# Ejecutar pruebas de mutación
php artisan test --group=mutacion

# Ejecutar pruebas de un grupo específico
php artisan test --group=pacientes

# Ejecutar múltiples grupos
php artisan test --group=mutacion,pacientes

# Ejecutar tests específicos dentro del grupo
php artisan test --group=mutacion --filter=PacienteTest

# Ver resultados detallados
php artisan test --group=mutacion -v
```

### Scripts NPM Recomendados

```json
{
  "scripts": {
    "test": "php artisan test",
    "test:mutation": "php artisan test --group=mutacion",
    "test:pacientes": "php artisan test --group=pacientes",
    "test:pacientes:busqueda": "php artisan test --group=pacientes.busqueda",
    "test:pacientes:crud": "php artisan test --group=pacientes.crud",
    "test:e2e": "cypress run",
    "test:e2e:open": "cypress open",
    "test:all": "npm run test && npm run test:e2e"
  }
}
```

## Pruebas de Mutación

Las pruebas de mutación son una técnica avanzada que nos ayuda a evaluar la calidad de nuestras pruebas unitarias. La herramienta modifica pequeñas partes del código (crea "mutantes") y verifica si nuestras pruebas detectan estos cambios.

### Requisitos

- PHP con Xdebug habilitado
- Infection instalado (`composer require --dev infection/infection`)
- Suite de pruebas Pest funcionando correctamente

### Uso del Comando

```bash
# Ejecutar pruebas de mutación
php artisan test --group=mutacion

# Ejecutar pruebas de un grupo específico
php artisan test --group=pacientes

# Ejecutar múltiples grupos
php artisan test --group=mutacion,pacientes

# Ejecutar tests específicos dentro del grupo
php artisan test --group=mutacion --filter=PacienteTest

# Ver resultados detallados
php artisan test --group=mutacion -v
```

### Opciones Disponibles

- `--debug`: Muestra información detallada durante la ejecución
- `--coverage-path`: Ruta personalizada para los archivos de cobertura

### Reportes Generados

Los reportes se guardan en `storage/logs/mutation/` con el siguiente formato:

- HTML: `infection_[timestamp].html`
- JSON: `infection_[timestamp].json`
- Log: `mutation_[timestamp].log`

### Métricas

- **MSI (Mutation Score Indicator)**: Porcentaje de mutantes detectados
- **Covered MSI**: MSI considerando solo el código cubierto por pruebas
- **Mutantes Detectados**: Número de mutaciones que las pruebas detectaron
- **Mutantes Sobrevivientes**: Número de mutaciones que las pruebas no detectaron

### Configuración

La configuración de Infection se encuentra en `infection.json`:

```json
{
    "source": {
        "directories": [
            "app"
        ]
    },
    "logs": {
        "text": "infection.log",
        "html": "infection.html",
        "summary": "summary.log",
        "json": "infection-log.json",
        "perMutator": "per-mutator.md"
    },
    "mutators": {
        "@default": true,
        "@function_signature": false,
        "global-ignore": [
            "App\\Exceptions\\*"
        ]
    },
    "testFramework": "pest",
    "minMsi": 80,
    "minCoveredMsi": 90
}
```

### Interpretación de Resultados

1. **MSI > 80%**: Buena cobertura de mutación
2. **MSI 60-80%**: Cobertura moderada, necesita mejoras
3. **MSI < 60%**: Cobertura insuficiente, requiere atención

### Recomendaciones

1. Ejecutar las pruebas de mutación regularmente
2. Revisar los mutantes sobrevivientes
3. Mejorar las pruebas basándose en los resultados
4. Mantener un MSI mínimo del 80%
5. Documentar casos especiales o excepciones
