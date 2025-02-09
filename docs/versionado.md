# Sistema de Versionado - Salud Laboral

## Introducción

Este documento describe el sistema de versionado implementado en el proyecto Salud Laboral. Seguimos el estándar de Versionado Semántico (SemVer) para mantener un control claro y consistente de las versiones del software.

## Estructura de Versiones

### Formato Básico

```
MAJOR.MINOR.PATCH (ejemplo: 1.2.3)
```

- **MAJOR**: Cambios incompatibles con versiones anteriores
- **MINOR**: Nuevas funcionalidades compatibles con versiones anteriores
- **PATCH**: Correcciones de errores compatibles con versiones anteriores

### Pre-releases

```
MAJOR.MINOR.PATCH-PRERELEASE.N (ejemplo: 1.0.0-beta.1)
```

- **alpha**: Desarrollo inicial, funcionalidades incompletas
- **beta**: Funcionalidades completas, en testing externo
- **rc**: Release Candidate, versión candidata a producción

## Archivos del Sistema

### VERSION
```
1.0.0
```
Archivo en la raíz del proyecto que contiene la versión actual.

### CHANGELOG.md
Registro de cambios siguiendo el formato [Keep a Changelog](https://keepachangelog.com/):
- Added: Nuevas características
- Changed: Cambios en funcionalidades existentes
- Deprecated: Funcionalidades que serán eliminadas
- Removed: Funcionalidades eliminadas
- Fixed: Corrección de errores
- Security: Cambios de seguridad

### scripts/version.sh
Script de automatización para gestionar versiones:

```bash
# Incrementar versión
./scripts/version.sh bump 1.1.0

# Crear rama de release
./scripts/version.sh release 1.1.0

# Finalizar release
./scripts/version.sh finish 1.1.0
```

## Política de Incremento de Versiones

### MAJOR (X.0.0)
- Cambios que rompen la compatibilidad con la API anterior
- Rediseños completos de la interfaz de usuario
- Actualizaciones mayores del framework
- Cambios en la arquitectura del sistema

### MINOR (1.X.0)
- Nuevas funcionalidades
- Nuevos endpoints en la API
- Mejoras significativas en la UI/UX
- Nuevas integraciones
- Deprecación de funcionalidades

### PATCH (1.0.X)
- Corrección de bugs
- Mejoras de rendimiento
- Actualizaciones de seguridad
- Cambios en la documentación
- Optimizaciones internas

## Proceso de Release

### 1. Preparación
```bash
# Crear rama de release
./scripts/version.sh release 1.1.0

# Actualizar versión
./scripts/version.sh bump 1.1.0
```

### 2. Validación
- Desplegar en ambiente de staging
- Ejecutar suite completa de tests
- Realizar pruebas de regresión
- Validar documentación

### 3. Publicación
```bash
# Finalizar release
./scripts/version.sh finish 1.1.0
```

## Automatización

El script `version.sh` automatiza:

### Actualización de Versiones
- Archivo VERSION
- package.json
- composer.json

### Gestión de Git
- Creación de commits
- Creación y publicación de tags
- Gestión de ramas de release

### Documentación
- Actualización de CHANGELOG.md
- Generación de entradas con fecha
- Categorización de cambios

## Ejemplos de Uso

### Nuevo Feature
```bash
# Crear rama feature
git checkout -b feature/nueva-funcionalidad

# Desarrollo y commits
git commit -m "feat: nueva funcionalidad"

# Finalizar feature
git checkout develop
git merge --no-ff feature/nueva-funcionalidad

# Preparar release
./scripts/version.sh release 1.1.0
./scripts/version.sh bump 1.1.0
./scripts/version.sh finish 1.1.0
```

### Hotfix
```bash
# Crear rama hotfix
git checkout -b hotfix/1.0.1 main

# Corregir y commit
git commit -m "fix: corrección urgente"

# Actualizar versión y finalizar
./scripts/version.sh bump 1.0.1
./scripts/version.sh finish 1.0.1
```

## Convenciones de Commits

Seguimos las convenciones de [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[nota de pie opcional]
```

Tipos principales:
- **feat**: Nueva característica
- **fix**: Corrección de error
- **docs**: Cambios en documentación
- **style**: Cambios de formato
- **refactor**: Refactorización de código
- **test**: Añadir o corregir tests
- **chore**: Tareas de mantenimiento

## Mantenimiento

### Tareas Periódicas
- Revisar y actualizar dependencias
- Limpiar tags antiguos
- Actualizar documentación
- Validar consistencia de versiones

### Buenas Prácticas
- Mantener CHANGELOG actualizado
- Usar mensajes de commit descriptivos
- Documentar breaking changes
- Seguir el flujo de Git establecido
