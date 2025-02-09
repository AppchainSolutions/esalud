# Guía de Control de Versiones - Salud Laboral

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Sistema de Versionado](#sistema-de-versionado)
3. [Herramientas y Archivos](#herramientas-y-archivos)
4. [Flujo de Trabajo](#flujo-de-trabajo)
5. [Comandos y Ejemplos](#comandos-y-ejemplos)
6. [Buenas Prácticas](#buenas-prácticas)

## Introducción

Este documento describe el sistema de control de versiones implementado en el proyecto Salud Laboral. El sistema está diseñado para mantener un control preciso sobre las versiones del software y facilitar el seguimiento de cambios.

## Sistema de Versionado

### Control de Versiones Explícito

El sistema de versionado requiere que los cambios de versión sean **explícitos**. Esto significa que:

#### 1. No Hay Incremento Automático
```bash
# ❌ Esto NO existe
./scripts/version.sh auto-increment    # No hay incremento automático

# ✅ Siempre debes especificar la versión explícitamente
./scripts/version.sh bump 1.0.1        # Tú decides la nueva versión
```

#### 2. Flujo de Trabajo Correcto
1. **Realizar cambios en el código**
   ```bash
   git commit -m "fix: corrige error en validación de RUT"
   ```

2. **Decidir el tipo de cambio**
   - Bug fix -> incrementa PATCH
   - Feature nueva -> incrementa MINOR
   - Breaking change -> incrementa MAJOR

3. **Ejecutar el comando explícitamente**
   ```bash
   # Si estás en 1.0.0 y corregiste un bug
   ./scripts/version.sh bump 1.0.1
   ```

#### 3. Sugerencia de Versión
El script puede sugerir la próxima versión basado en los mensajes de commit:

```bash
# Ver la sugerencia de versión
./scripts/version.sh suggest
```

El análisis se basa en los commits desde el último tag:

- **MAJOR** (2.0.0): Commits que contienen:
  - `!:` (ejemplo: `refactor!: cambio incompatible en API`)
  - `BREAKING CHANGE:` en el mensaje

- **MINOR** (1.1.0): Commits que comienzan con:
  - `feat:` (ejemplo: `feat: nuevo módulo de reportes`)

- **PATCH** (1.0.1): Commits que comienzan con:
  - `fix:` (ejemplo: `fix: corrige validación de RUT`)
  - Otros tipos de commits

Ejemplo de uso:
```bash
$ ./scripts/version.sh suggest
Versión actual: 1.0.0
Versión sugerida basada en commits: 1.1.0

Análisis basado en:
- MAJOR: commits con '!' o 'BREAKING CHANGE:'
- MINOR: commits que comienzan con 'feat:'
- PATCH: commits que comienzan con 'fix:' u otros
```

**Nota**: La sugerencia es solo una recomendación. La decisión final de la versión debe ser tomada por el desarrollador.

#### 4. Validaciones del Script
El script `version.sh` realiza las siguientes validaciones:

✅ **Lo que SÍ hace el script**:
- Validar que el formato de versión sea correcto
- Validar que la nueva versión sea mayor a la actual
- Actualizar todos los archivos necesarios
- Crear commits y tags

❌ **Lo que NO hace el script**:
- No decide la versión por ti
- No incrementa números automáticamente
- No infiere el tipo de cambio de los commits

#### 5. Ejemplos de Uso
```bash
# Si estás en versión 1.0.0

# ❌ Casos que darán error
./scripts/version.sh bump 0.9.0    # Error: No puedes retroceder versiones
./scripts/version.sh bump 1.0.0    # Error: Debe ser una versión diferente
./scripts/version.sh bump abc      # Error: Formato inválido

# ✅ Casos válidos
./scripts/version.sh bump 1.0.1    # OK: Incremento válido de PATCH
./scripts/version.sh bump 1.1.0    # OK: Incremento válido de MINOR
./scripts/version.sh bump 2.0.0    # OK: Incremento válido de MAJOR
```

### Versionado Semántico (SemVer)

Formato: `MAJOR.MINOR.PATCH(-PRERELEASE.N)`

Ejemplo: `1.0.0-beta.1`

#### Componentes
- **MAJOR**: Cambios incompatibles con versiones anteriores
  - Cambios en la arquitectura
  - Breaking changes en APIs
  - Actualizaciones mayores de frameworks
  
- **MINOR**: Nuevas funcionalidades compatibles
  - Nuevos endpoints
  - Nuevas características en UI
  - Mejoras en funcionalidades existentes
  
- **PATCH**: Correcciones de errores compatibles
  - Corrección de bugs
  - Mejoras de rendimiento
  - Actualizaciones de documentación

#### Pre-releases
- **alpha**: Desarrollo inicial
  - Funcionalidades incompletas
  - Testing interno
  - No apto para producción
  
- **beta**: Testing externo
  - Funcionalidades completas
  - En fase de pruebas
  - Puede tener errores
  
- **rc** (Release Candidate):
  - Versión candidata a producción
  - Testing completo
  - Lista para release final

## Herramientas y Archivos

### Archivos del Sistema

#### 1. VERSION
Ubicación: `/VERSION`
```
1.0.0
```
- Contiene la versión actual del proyecto
- Se actualiza automáticamente con version.sh
- No modificar manualmente

#### 2. CHANGELOG.md
Ubicación: `/CHANGELOG.md`
```markdown
# Changelog

## [1.0.0] - 2025-02-09
### Added
- Nueva característica
### Changed
- Cambio en funcionalidad
```

Secciones:
- **Added**: Nuevas características
- **Changed**: Cambios en funcionalidades
- **Deprecated**: Funcionalidades que serán eliminadas
- **Removed**: Funcionalidades eliminadas
- **Fixed**: Corrección de errores
- **Security**: Cambios de seguridad

#### 3. Script de Versionado
Ubicación: `/scripts/version.sh`

Funcionalidades:
- Incrementar versión
- Crear ramas de release
- Actualizar archivos de versión
- Crear tags de Git
- Mantener CHANGELOG

## Flujo de Trabajo

### 1. Desarrollo Regular
```bash
# Crear rama de feature
git checkout -b feature/nueva-funcionalidad

# Desarrollar y commitear cambios
git commit -m "feat: nueva funcionalidad"

# Actualizar CHANGELOG.md
vim CHANGELOG.md
```

### 2. Preparación de Release
```bash
# Crear rama de release
./scripts/version.sh release 1.1.0

# Verificar y ajustar CHANGELOG
vim CHANGELOG.md

# Finalizar release
./scripts/version.sh finish 1.1.0
```

### 3. Hotfixes
```bash
# Crear rama de hotfix
git checkout -b hotfix/bug-critico

# Corregir y commitear
git commit -m "fix: corrección de bug crítico"

# Incrementar versión patch
./scripts/version.sh bump 1.1.1
```

## Comandos y Ejemplos

### Gestión de Versiones
```bash
# Incrementar versión
./scripts/version.sh bump 1.1.0

# Crear release
./scripts/version.sh release 1.1.0

# Finalizar release
./scripts/version.sh finish 1.1.0

# Ver ayuda
./scripts/version.sh help
```

### Convenciones de Commits
```bash
# Nueva característica
git commit -m "feat: implementa activación de pacientes"

# Corrección de bug
git commit -m "fix: corrige validación de RUT"

# Cambios de documentación
git commit -m "docs: actualiza guía de desarrollo"

# Cambios de refactorización
git commit -m "refactor: mejora estructura de factories"

# Cambios de estilo
git commit -m "style: formatea código según estándares"

# Cambios de pruebas
git commit -m "test: agrega tests para activación"

# Cambios de build
git commit -m "build: actualiza dependencias"
```

## Buenas Prácticas

### 1. Gestión de Versiones
- Incrementar MAJOR para cambios incompatibles
- Incrementar MINOR para nuevas características
- Incrementar PATCH para correcciones
- Usar pre-releases para versiones en desarrollo

### 2. CHANGELOG
- Mantener actualizado con cada cambio
- Usar lenguaje claro y conciso
- Incluir referencias a issues/PRs
- Documentar breaking changes

### 3. Commits
- Usar commits atómicos
- Seguir convenciones de mensajes
- Referenciar issues relacionados
- Incluir contexto necesario

### 4. Releases
- Probar exhaustivamente antes de release
- Actualizar documentación
- Verificar dependencias
- Crear notas de release detalladas

### 5. Seguridad
- No incluir credenciales en commits
- Revisar dependencias vulnerables
- Documentar cambios de seguridad
- Mantener actualizaciones de seguridad

## Notas Adicionales

### Integración con CI/CD
El sistema de versionado está integrado con nuestro pipeline de CI/CD:
- Los tags disparan builds automáticos
- Las versiones se validan en CI
- Los releases generan artifacts

### Manejo de Dependencias
- Versiones de dependencias en package.json
- Versiones de dependencias en composer.json
- Lock files en control de versiones
- Actualizaciones planificadas
