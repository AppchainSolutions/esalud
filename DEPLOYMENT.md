# Guía de Despliegue - eSalud

## Requisitos Previos
- PHP 8.2+
- Composer
- Node.js 18+
- PostgreSQL 13+
- Redis
- Servidor web (Nginx/Apache)

## Configuración de Entornos
- `.env.production`: Configuración para producción
- `.env.staging`: Configuración para entorno de pruebas

## Proceso de Despliegue
1. Clonar repositorio
2. Instalar dependencias
   ```bash
   composer install
   npm ci
   ```

3. Configurar entorno
   ```bash
   cp .env.production .env
   php artisan key:generate
   ```

4. Migrar base de datos
   ```bash
   php artisan migrate --force
   ```

5. Compilar assets
   ```bash
   npm run build
   ```

## Programación de Notificaciones
- Configurar crontab para ejecución semanal
- Job ejecuta `notificaciones:programar`
- Rango de días configurable en `.env`

## Monitoreo
- Logs: `/var/log/esalud/`
- Monitorear trabajos en cola
- Configurar alertas para fallos

## Troubleshooting
- Verificar permisos de archivos
- Revisar logs de Laravel
- Validar configuraciones de entorno
