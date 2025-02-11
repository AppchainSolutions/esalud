# Semantic Commit Assistant

## Descripción
Script de Python para generar commits semánticos de manera automática e inteligente.

## Características
- Análisis automático de cambios en git
- Clasificación inteligente de tipos de commits
- Generación de descripciones semánticas
- Sugerencia de ámbito basado en archivos modificados
- Interfaz interactiva de confirmación

## Tipos de Commits Soportados

### 1. Características (`feat`)
- Nuevas funcionalidades
- Mejoras de características existentes
- Ejemplos: `add login`, `implement user profile`

### 2. Correcciones (`fix`)
- Corrección de errores
- Solución de problemas
- Ejemplos: `fix authentication`, `resolve memory leak`

### 3. Documentación (`docs`)
- Cambios en documentación
- Actualizaciones de README
- Ejemplos: `update changelog`, `improve documentation`

### 4. Refactorización (`refactor`)
- Reorganización de código
- Mejoras de estructura
- Ejemplos: `refactor authentication`, `optimize database queries`

### 5. Estilos (`style`)
- Cambios de formato
- Correcciones de lint
- Ejemplos: `format code`, `fix whitespace`

### 6. Tests (`test`)
- Nuevos tests
- Mejoras de cobertura
- Ejemplos: `add unit tests`, `improve test coverage`

### 7. Tareas (`chore`)
- Mantenimiento
- Actualización de dependencias
- Ejemplos: `update dependencies`, `config webpack`

### 8. Rendimiento (`perf`)
- Mejoras de rendimiento
- Optimizaciones
- Ejemplos: `optimize rendering`, `improve speed`

### 9. Integración Continua (`ci`)
- Configuración de pipelines
- Workflows de GitHub Actions
- Ejemplos: `update ci workflow`, `configure travis`

### 10. Construcción (`build`)
- Configuración de compilación
- Scripts de construcción
- Ejemplos: `config webpack`, `update npm scripts`

### 11. Liberación (`release`)
- Nuevas versiones
- Publicación
- Ejemplos: `bump version`, `prepare release`

### 12. Seguridad (`security`)
- Parches de seguridad
- Mejoras de autenticación
- Ejemplos: `fix vulnerability`, `improve encryption`

## Requisitos
- Python 3.8+
- Git instalado

## Instalación
```bash
# Clonar repositorio
git clone <URL_REPOSITORIO>

# Hacer ejecutable
chmod +x semantic_commit.py
```

## Uso
```bash
# Ejecutar en directorio de proyecto
python3 semantic_commit.py
```

## Personalización
Modificar patrones de clasificación en la función `classify_changes()` del script.

## Licencia
[Especificar licencia]

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abrir un issue o pull request.
