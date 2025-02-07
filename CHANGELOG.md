# Changelog

## [Unreleased]

### Cambios en Seeders y Factories

#### UserFactory
- Modificado el método `definition()` para incluir campos personalizados:
  - Agregado `isAdmin` con probabilidad del 20% de ser verdadero
  - Agregado `rol` con valores aleatorios entre 'staff' y 'paciente'
  - Establecida contraseña por defecto
  - Eliminada línea de truncado de tabla

#### UserSeeder
- Comentado el truncado de la tabla de usuarios
- Mantenidos usuarios administradores predeterminados

#### PacienteSeeder
- Agregado truncado de tablas de Paciente y Usuario antes de la siembra
- Modificada la creación de usuarios y pacientes:
  - Creación de 10 pacientes sin usuario
  - Creación de 5 usuarios staff
  - Creación de 3 pacientes con usuarios asociados
- Llamada al UserSeeder para crear usuarios adicionales

### Mejoras en Generación de Datos
- Implementación de generación dinámica de RUTs
- Inclusión de datos aleatorios para diferentes campos
- Manejo de relaciones entre modelos

### Próximos Pasos
- Implementar más pruebas de integración
- Refinar la generación de datos de referencia
- Optimizar la performance de los seeders

### Added
- Tests para generación de token de activación de paciente
  - Verifica generación de token de 64 caracteres
  - Comprueba almacenamiento de token de activación
  - Valida establecimiento de fecha de expiración del token
- Pruebas de Cypress para flujo de activación de pacientes
  - Test de generación de token de activación
  - Test de activación de cuenta con token válido
  - Test de manejo de token expirado
  - Test de bloqueo de token inválido
  - Tareas personalizadas de Cypress para pruebas de backend
- Endpoints de prueba para Cypress
  - Controlador `PruebasController` para gestionar pruebas
  - Rutas de API para reset de base de datos
  - Endpoints para crear pacientes de prueba
  - Métodos para generar tokens de activación
  - Simulación de verificación de correos electrónicos
- Configuración avanzada de ambiente de testing
  - Configuración de Cypress con variables de entorno
  - Seeder específico para pruebas de pacientes
  - Archivo .env.testing con configuraciones seguras
  - Scripts de inicialización de pruebas
  - Comandos personalizados de Cypress
  - Interceptores de llamadas API
- Implementación de pruebas end-to-end con Playwright
  - Configuración de entorno de testing
  - Pruebas de activación de pacientes
  - Soporte para múltiples navegadores
  - Scripts de ejecución de pruebas
  - Generación de reportes de pruebas

### Changed
- Implementación de pruebas de generación de token y envío de correo
  - Usa paciente con email 'omar.ahumadag@gmail.com' como caso de prueba
  - Verifica que el servicio de activación genera tokens correctamente
  - Comprueba que el correo de activación se envía exitosamente
- Estructura de pruebas de activación de pacientes
- Mejora en la gestión de tokens de activación
- Estructura de soporte para pruebas end-to-end
- Mejora en la configuración de pruebas de Cypress
- Mejora en la configuración de bases de datos para testing
- Actualización de scripts de soporte para pruebas
- Migración de pruebas de Cypress a Playwright
- Mejora en la estrategia de testing end-to-end

### Testing
- Añadidos tests unitarios para:
  - `generarTokenActivacion()`: Valida generación y almacenamiento de token
  - `enviarCorreoActivacion()`: Confirma envío de correo de activación
- Implementación de tareas personalizadas para Cypress
- Preparación de ambiente de testing
- Implementación de estrategias de testing end-to-end
- Configuración de seguridad para pruebas
- Mejora en la gestión de estados de pruebas
- Nuevas pruebas para flujo de activación de pacientes
- Soporte para testing en Chrome y Firefox
- Configuración de traza y captura de pantalla

**Fecha**: 5 de febrero de 2025
