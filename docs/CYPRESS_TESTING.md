# Configuración de Testing con Cypress en ESalud

## Descripción General
Este documento detalla la configuración de pruebas end-to-end (E2E) para el sistema ESalud utilizando Cypress.

## Estructura de Configuración

### 1. Configuración Principal de Cypress
Archivo: `cypress.config.js`

#### Características Principales:
- URL Base: `http://localhost:8000`
- Patrón de Especificaciones: `cypress/e2e/**/*.cy.{js,jsx,ts,tsx}`
- Configuraciones de Ambiente:
  * `API_URL`: Endpoint de API
  * `TEST_EMAIL`: Correo de prueba
  * `SECURITY_ENABLED`: Modo de seguridad
  * `MAX_ACTIVATION_ATTEMPTS`: Límite de intentos de activación

### 2. Variables de Entorno de Testing
Archivo: `.env.testing`

#### Configuraciones Clave:
- Base de Datos: SQLite en memoria
- Mailer: Configurado en modo array (no envía correos reales)
- Configuraciones de Seguridad:
  * Expiración de Token: 24 horas
  * Máximo de Intentos de Activación: 3
  * Límite de Solicitudes: 60 por minuto

### 3. Seeders de Testing
Archivo: `database/seeders/PruebasPacienteSeeder.php`

#### Datos Precargados:
- Paciente de Prueba para Activación
  * Email: `paciente_prueba@example.com`
  * Estado: Cuenta no activada
- Paciente Activo
  * Email: `paciente_activo@example.com`
  * Estado: Cuenta activada

### 4. Scripts de Soporte de Cypress
Archivos: 
- `cypress/support/init.js`
- `cypress/support/e2e.js`
- `cypress/support/tasks.js`

#### Características:
- Comandos personalizados
- Interceptores de API
- Gestión de estado de pruebas
- Configuraciones de seguridad

## Estrategias de Testing

### Flujo de Activación de Pacientes
1. Reseteo de base de datos
2. Creación de paciente de prueba
3. Generación de token de activación
4. Simulación de activación de cuenta
5. Verificación de estados y comportamientos

### Casos de Prueba Cubiertos
- Generación de token de activación
- Activación de cuenta con token válido
- Manejo de token expirado
- Intentos múltiples de activación
- Validaciones de seguridad

## Ejecución de Pruebas

### Comandos Disponibles
```bash
# Ejecutar todas las pruebas de Cypress
npx cypress run

# Ejecutar pruebas específicas
npx cypress run --spec "cypress/e2e/patient-activation.cy.js"

# Abrir interfaz de Cypress
npx cypress open
```

## Consideraciones de Seguridad
- Uso de base de datos en memoria
- No se envían correos reales
- Límite de intentos de activación
- Tokens con tiempo de expiración limitado

## Troubleshooting
- Verificar configuraciones de `.env.testing`
- Revisar dependencias de Cypress
- Validar configuración de base de datos

**Última Actualización**: 7 de febrero de 2025
