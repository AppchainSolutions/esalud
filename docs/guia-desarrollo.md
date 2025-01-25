# Guía de Desarrollo - eSalud

## Stack Tecnológico

### Backend

- Laravel 11 para API RESTful
- PostgreSQL como base de datos principal
- Redis para gestión de sesiones y caché
- Pest para testing de PHP

### Frontend

- Vue.js 3 como framework principal
- Inertia.js para la experiencia SPA
- Vuetify para componentes UI
- TypeScript para mejor tipado
- Cypress para testing E2E

### DevOps

- Git para control de versiones
- GitHub para alojamiento de código
- Scripts bash para automatización de deployment

## Estructura del Proyecto

esalud/
├── app/
│   ├── Http/Controllers/    # Controladores
│   ├── Services/           # Lógica de negocio
│   └── Models/            # Modelos Eloquent
├── resources/
│   └── js/               # Código frontend Vue.js
├── routes/
│   ├── api.php          # Rutas API
│   └── web.php         # Rutas web
└── tests/
    ├── Feature/       # Tests de integración
    └── Unit/         # Tests unitarios

## Principios de Desarrollo

### Código

- Seguir principios SOLID
  - Single Responsibility Principle
  - Open/Closed Principle
  - Liskov Substitution Principle
  - Interface Segregation Principle
  - Dependency Inversion Principle
- Aplicar DRY (Don't Repeat Yourself)
- Implementar patrones de diseño cuando sea apropiado
- Usar TDD

### Caché y Optimización

- Utilizar Redis para cachear:
  - Resultados de consultas frecuentes
  - Datos de sesión
  - Respuestas de API que no cambian frecuentemente

### Testing

- Escribir tests para toda nueva funcionalidad
- Mantener cobertura de código >80%
- Tests unitarios con Pest
- Tests E2E con Cypress

## Convenciones de Código

### PHP (PSR-12)

- Nombres de clases: PascalCase
- Nombres de métodos y variables: camelCase
- Constantes: UPPER_CASE
- Namespaces: PascalCase

### JavaScript/Vue (Airbnb Style Guide)

- Variables y funciones: camelCase
- Componentes Vue: PascalCase
- Props: camelCase
- Eventos: kebab-case

### Git

Commits semánticos:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

## Documentación

- Documentar todas las APIs
- Comentar funciones complejas
- Mantener README actualizado
- Documentación en español

## Seguridad

- Validar todas las entradas de usuario
- Implementar CSRF protection
- Usar HTTPS en producción
- Seguir las mejores prácticas de OWASP

## Memorias del Proyecto

### Memoria Global

Reglas y configuraciones globales del proyecto:

- Idioma de comunicación: Español
- Backend: Laravel para API RESTful
- Frontend: Vue.js 3
- Base de datos: PostgreSQL
- Cache y sesiones: Redis
- Control de versiones: Git
- Deployment: GitHub con scripts bash

### Memoria del Workspace

Configuraciones específicas del workspace actual:

- Framework y Versiones:
  - Laravel 11
  - Vue.js 3
  - Inertia.js
  - Vuetify para UI
  - PostgreSQL
  - Redis
  - Cypress y Pest para testing

- Principios:
  - SOLID
  - DRY
  - TypeScript
  - Diseño responsive
  - Documentación en español

- Estructura y Convenciones:
  - Frontend en resources/js
  - APIs en routes/api.php
  - Rutas web en routes/web.php
  - Controllers en app/Http/Controllers
  - Services en app/Services
  - Models en app/Models
  - Tests en tests/Feature y tests/Unit
