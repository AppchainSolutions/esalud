# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.5.0] - 2025-02-09

### Added
- Sistema de logging mejorado con contexto de clase y método
- Módulo base para gestión de accidentes
- Nuevas factories para Vacuna, Medicamento, y FactorRiesgo
- Comando base:truncate para gestión de base de datos
- Sistema de pruebas end-to-end con Playwright

### Changed
- Migración completa de Cypress a Playwright para pruebas E2E
- Mejora en el flujo de activación de pacientes
- Actualización de interfaces de usuario con Vuetify
- Mejora en el manejo de booleanos multiplataforma
- Optimización de seeders y factories

### Fixed
- Corrección en el manejo de filtros vacíos
- Mejora en la validación de tokens de activación
- Corrección en el proceso de autenticación post-activación
- Mejora en el manejo de props en formularios
- Optimización del manejo de diálogos y notificaciones

### Security
- Implementación de validación mejorada para tokens
- Mejora en el proceso de activación de cuentas
- Fortalecimiento de la seguridad en correos de activación

### Removed
- Eliminación completa de Cypress
- Limpieza de archivos de documentación obsoletos
- Eliminación de modelos redundantes


## [1.0.0] - 2025-02-09

# Changelog
Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere al [Versionado Semántico](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-02-09

### Added
- Sistema de activación de pacientes con tokens seguros
- Factories y seeders para datos maestros y pacientes
- Tests unitarios para validación de RUT
- Tests e2e para activación de pacientes
- Utilidades de validación y debugging en frontend

### Changed
- Refactorización de PacienteFactory para mejor generación de datos
- Mejora en la estructura de seeders con DatabaseMasterSeeder
- Actualización de UserFactory para manejo de campos booleanos
- Actualización de PacientePage.vue con nuevas funcionalidades

### Removed
- Controlador y repositorio de Pueblo obsoletos
- Componente FactorRiesgo obsoleto
- Base de datos SQLite de prueba
- Archivos de reporte de playwright innecesarios

### Security
- Implementación de hash para tokens de activación
- Validación mejorada de RUT
- Mejor manejo de datos sensibles en seeders
