# Semantic Commit Assistant

## Descripción
Script de Python para generar commits semánticos de manera automática e inteligente.

## Características
- Análisis automático de cambios en git
- Clasificación inteligente de tipos de commits
- Generación de descripciones semánticas
- Sugerencia de ámbito basado en archivos modificados
- Interfaz interactiva de confirmación

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

### Flujo de Trabajo
1. Hacer cambios en archivos
2. Ejecutar script
3. Revisar cambios sugeridos
4. Confirmar o cancelar commit

## Tipos de Commits
- `feat`: Nueva característica
- `fix`: Corrección de errores
- `docs`: Cambios en documentación
- `refactor`: Reorganización de código
- `test`: Cambios en tests
- `chore`: Tareas de mantenimiento

## Ejemplo de Salida
```
🔍 Análisis de Cambios:
(diff de git)

✨ Tipo Semántico Sugerido: feat
🏷️  Ámbito Sugerido: backend
📝 Descripción:
Cambios principales:
- Descripción de cambios

¿Confirmar commit? (s/n):
```

## Personalización
Modificar patrones de clasificación en la función `classify_changes()` del script.

## Licencia
[Especificar licencia]

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abrir un issue o pull request.
