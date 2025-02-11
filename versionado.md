# Sistema de Versionado - Salud Laboral

## Introducción

Este documento describe el sistema de versionado implementado en el proyecto Salud Laboral. Utilizamos `standard-version` para automatizar el versionado semántico y la generación de CHANGELOGs, siguiendo las mejores prácticas de Versionado Semántico (SemVer).

## Herramientas de Versionado

### Standard Version
Herramienta para automatizar:
- Incremento de versiones
- Generación de CHANGELOGs
- Creación de tags de git

### Configuración

#### Tipos de Commits
```json
{
  "types": [
    {"type": "feat", "section": "✨ Características"},
    {"type": "fix", "section": "🐛 Correcciones"},
    {"type": "docs", "section": "📝 Documentación"},
    {"type": "refactor", "section": "♻️ Refactorizaciones"},
    {"type": "test", "section": "✅ Tests"},
    {"type": "chore", "section": "🔧 Tareas de Mantenimiento"},
    {"type": "perf", "section": "🚀 Mejoras de Rendimiento"},
    {"type": "security", "section": "🔒 Seguridad"}
  ]
}
```

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

### package.json
Scripts de npm para gestión de versiones:
```json
{
  "scripts": {
    "release": "standard-version",
    "release:major": "standard-version --release-as major",
    "release:minor": "standard-version --release-as minor",
    "release:patch": "standard-version --release-as patch"
  }
}
```

### .versionrc.json
Configuración personalizada de standard-version:
```json
{
  "types": [ ... ],
  "commitUrlFormat": "https://github.com/AppchainSolutions/esalud/commit/{{hash}}",
  "compareUrlFormat": "https://github.com/AppchainSolutions/esalud/compare/{{previousTag}}...{{currentTag}}"
}
```

### CHANGELOG.md
Registro de cambios generado automáticamente, siguiendo formato:
- ✨ Características: Nuevas funcionalidades
- 🐛 Correcciones: Solución de errores
- 📝 Documentación: Cambios en documentación
- ♻️ Refactorizaciones: Mejoras de código
- ✅ Tests: Cambios en testing
- 🔧 Tareas de Mantenimiento: Configuraciones y scripts
- 🚀 Mejoras de Rendimiento: Optimizaciones
- 🔒 Seguridad: Mejoras de seguridad

## Proceso de Release

### 1. Preparación de Commits
- Usar commits semánticos
- Ejemplos:
  ```
  feat(notificaciones): añadir servicio de notificaciones
  fix(autenticacion): corregir validación de tokens
  docs(readme): actualizar instrucciones
  ```

### 2. Generar Nueva Versión
```bash
# Release automático
npm run release

# Releases específicos
npm run release:major
npm run release:minor
npm run release:patch
```

### 3. Publicación
```bash
# Pushear cambios y tags
git push --follow-tags origin vulco-dev
```

## Buenas Prácticas

- Commits atómicos y descriptivos
- Usar prefijos semánticos
- Mantener CHANGELOG actualizado
- Validar cambios antes de cada release
- Comunicar cambios significativos al equipo

## Política de Incremento de Versiones

### MAJOR (X.0.0)
- Cambios que rompen compatibilidad
- Rediseños completos
- Actualizaciones mayores de framework

### MINOR (1.X.0)
- Nuevas funcionalidades
- Nuevos endpoints
- Mejoras significativas de UI/UX

### PATCH (1.0.X)
- Corrección de bugs
- Mejoras de rendimiento
- Actualizaciones de seguridad
- Optimizaciones internas
