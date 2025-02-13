# Comando de Limpieza de Storage y Caché

## Descripción General

El comando `storage:clean` es una herramienta integral para gestionar y limpiar archivos temporales, cachés y recursos de almacenamiento en la aplicación Laravel.

## Características Principales

- **Limpieza de Archivos Temporales**
  - Elimina archivos `.log` y `.json` antiguos
  - Criterios de eliminación configurables
  - Protección contra eliminación de archivos críticos

- **Gestión de Caché**

  - Limpia caché de Laravel:
    - Rutas
    - Configuración
    - Vistas
    - Caché general

- **Flexibilidad**
  - Soporte para limpieza selectiva de directorios
  - Registro detallado de eventos

## Opciones de Uso

### Limpieza Completa

```bash
php artisan storage:clean
```

### Limpieza Selectiva

```bash
# Limpiar sesiones
php artisan storage:clean --sessions

# Limpiar vistas
php artisan storage:clean --views

# Limpiar caché
php artisan storage:clean --cache

# Limpiar Redis
php artisan storage:clean --redis
```

### Combinaciones

```bash
# Múltiples directorios
php artisan storage:clean --sessions --views
php artisan storage:clean --cache --clockwork
```

## Programación Automática

El comando está programado para ejecutarse:

- **Diariamente**: A la 1:00 AM (limpieza ligera)
- **Semanalmente**: Los domingos a las 3:00 AM (limpieza profunda)

## Registro de Eventos

Los eventos se registran en `storage/logs/laravel.log`:

- Inicio y fin de la limpieza
- Archivos eliminados
- Tamaño liberado
- Errores o advertencias

## Consideraciones de Seguridad

- No elimina archivos críticos (`.env`, `.lock`)
- Protege archivos importantes del sistema
- Registro detallado para auditoría

## Personalización

Para ajustar comportamientos, modifica:

- `app/Console/Commands/CleanStorageFiles.php`
- Criterios de eliminación
- Directorios a limpiar

## Solución de Problemas

- Verificar permisos de archivos
- Revisar logs en caso de errores
- Contactar al administrador del sistema

## Contribuciones

Reportar problemas o sugerir mejoras en el repositorio del proyecto.
