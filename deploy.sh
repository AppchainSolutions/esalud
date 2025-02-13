#!/bin/bash

# Script de despliegue para eSalud

# Cambiar al directorio del proyecto
cd /var/www/esalud

# Modo de despliegue (producción o staging)
DEPLOY_ENV=${1:-production}

# Seleccionar archivo de configuración
if [ "$DEPLOY_ENV" == "production" ]; then
    ENV_FILE=".env.production"
    BRANCH="main"
else
    ENV_FILE=".env.staging"
    BRANCH="develop"
fi

# Mensaje de inicio de despliegue
echo "Iniciando despliegue en entorno: $DEPLOY_ENV"

# Desactivar modo de mantenimiento
php artisan down --retry=60

# Cambiar a la rama correcta
git checkout $BRANCH
git pull origin $BRANCH

# Copiar configuración específica del entorno
cp $ENV_FILE .env

# Instalar dependencias
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# Instalar dependencias de frontend
npm ci
npm run build

# Limpiar caché
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# Migrar base de datos
php artisan migrate --force

# Optimizar configuración
php artisan config:cache
php artisan route:cache

# Reiniciar workers de cola
php artisan queue:restart

# Calentar caché
php artisan warmup:cache

# Activar la aplicación
php artisan up

# Notificar fin de despliegue
echo "Despliegue completado en entorno: $DEPLOY_ENV"

# Opcional: Notificación por Slack o email
# curl -X POST -H 'Content-type: application/json' --data '{"text":"Despliegue completado en '$DEPLOY_ENV'"}' $SLACK_WEBHOOK
