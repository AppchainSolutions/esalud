# Archivos del Sistema de Notificaciones de Exámenes

## Servicios y Lógica de Negocio
- `app/Services/ExamenNotificationService.php`: Servicio principal de notificaciones
- `app/Jobs/GenerarNotificacionesExamenesJob.php`: Job para generar y enviar notificaciones
- `app/Console/Commands/ProgramarNotificacionesExamenesCommand.php`: Comando de consola para programar notificaciones

## Modelos
- `app/Models/Notificacion.php`: Modelo de notificaciones
- `app/Models/Examen.php`: Modelo base de exámenes
- `app/Models/ExamenLaboratorio.php`: Modelo de exámenes de laboratorio

## Configuración
- `config/notifications.php`: Configuración centralizada de notificaciones
- `.env`: Configuraciones de entorno para notificaciones
- `.env.production`: Configuraciones de producción

## Migraciones
- `database/migrations/XXXX_XX_XX_create_notificaciones_table.php`: Migración de tabla de notificaciones
- `database/migrations/XXXX_XX_XX_add_notificacion_fields_to_examenes_table.php`: Campos relacionados en tabla de exámenes

## Correos
- `app/Mail/ExamenNotificacionMail.php`: Clase de correo para notificaciones de exámenes

## Recursos
- `app/Resources/NotificacionResource.php`: Transformación de datos de notificaciones

## Scripts de Despliegue y Configuración
- `deploy.sh`: Script de despliegue
- `esalud-notifications.service`: Configuración de servicio systemd
- `crontab`: Configuración de tareas programadas

## Pruebas
- `tests/Unit/ExamenNotificationServiceTest.php`: Pruebas unitarias del servicio
- `tests/Feature/NotificacionesExamenesTest.php`: Pruebas de integración
- `prueba_notificaciones.sh`: Script de pruebas manual

## Documentación
- `ARCHIVOS_NOTIFICACIONES.md`: Este archivo
- `DEPLOYMENT.md`: Guía de despliegue (anteriormente eliminado)

## Logs
- `storage/logs/laravel.log`: Logs generales
- `/var/log/esalud/notifications.log`: Logs específicos de notificaciones

## Configuración de Colas
- `config/queue.php`: Configuración de colas de Laravel

## Middlewares (si aplica)
- `app/Http/Middleware/NotificacionMiddleware.php`: Middleware relacionado con notificaciones

## Eventos y Listeners (si aplica)
- `app/Events/NotificacionExamenGenerada.php`: Evento de generación de notificación
- `app/Listeners/NotificacionExamenListener.php`: Listener para manejar eventos de notificación

## Notas Importantes
- Mantener actualizada la documentación
- Revisar configuraciones de entorno
- Monitorear logs y rendimiento del sistema de notificaciones
