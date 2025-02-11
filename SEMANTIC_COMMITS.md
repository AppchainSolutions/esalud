# Guía de Commits Semánticos para Proyecto eSalud

## Introducción
Los commits semánticos son una convención para estandarizar y mejorar la legibilidad de los mensajes de commit en nuestro proyecto.

## Estructura de un Commit Semántico
```
<tipo>(<ámbito>): <descripción corta>

[Descripción detallada opcional]

[Pie de página con referencias o metadatos]
```

## Tipos de Commits

### 🌟 Características (feat)
- Nuevas funcionalidades
- Añadir nuevos componentes o servicios
- Ejemplo: `feat(notifications): Añadir sistema de notificaciones para exámenes`

### 🐛 Correcciones (fix)
- Solución de errores
- Correcciones de bugs
- Ejemplo: `fix(authentication): Corregir validación de tokens de usuario`

### 📝 Documentación (docs)
- Cambios en documentación
- Actualización de README, guías
- Ejemplo: `docs(changelog): Actualizar guía de versionado`

### ♻️ Refactorización (refactor)
- Mejoras de código sin añadir funcionalidades
- Restructuración de código
- Ejemplo: `refactor(file:tag): Optimizar resolución de rutas`

### 🧪 Tests (test)
- Añadir o modificar tests
- Mejoras en cobertura de pruebas
- Ejemplo: `test(notifications): Añadir pruebas unitarias para servicio de notificaciones`

### 🔧 Tareas (chore)
- Mantenimiento de proyecto
- Actualización de dependencias
- Configuraciones
- Ejemplo: `chore(deps): Actualizar Laravel a versión 9`

### 🚀 Rendimiento (perf)
- Mejoras de rendimiento
- Optimizaciones
- Ejemplo: `perf(database): Optimizar consultas de búsqueda`

### 🔒 Seguridad (security)
- Mejoras de seguridad
- Corrección de vulnerabilidades
- Ejemplo: `security(auth): Implementar autenticación de dos factores`

## Ámbitos Comunes
- `file:tag`
- `notifications`
- `authentication`
- `database`
- `ui`
- `api`

## Ejemplos Completos

### Commit con descripción detallada
```
feat(notifications): Implementar sistema de notificaciones

- Añadir servicio de notificaciones para exámenes
- Soportar múltiples canales de comunicación
- Implementar cola de notificaciones

Resolves #123
```

### Commit con pie de página
```
fix(authentication): Corregir error de inicio de sesión

Problema de validación de credenciales en el endpoint de login

Breaking Change: Requiere actualización de cliente
```

## Buenas Prácticas
- Commits atómicos (un commit, una responsabilidad)
- Usar verbos imperativos
- Ser conciso pero descriptivo
- Usar el cuerpo del commit para explicaciones detalladas

## Herramientas Recomendadas
- `commitizen`: Asistente interactivo para commits
- `commitlint`: Validación de mensajes de commit
