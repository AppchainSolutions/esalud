#!/bin/bash

# Directorio raíz de la aplicación Laravel
APP_DIR=/home/blueshadows/www/esalud

# Navegar al directorio de la aplicación
#cd $APP_DIR

# Instalar dependencias (descomentar si es necesario)
#echo "Instalando dependencias..."
#composer install --no-interaction --prefer-dist --optimize-autoloader

# Ejecutar migraciones de base de datos (descomentar si es necesario)
# echo "Ejecutando migraciones de base de datos..."
# php artisan migrate --force

# Limpieza y cache de configuraciones
echo "Limpieza y cache de configuraciones..."
php artisan config:clear
php artisan config:cache

# Limpieza y cache de rutas
echo "Limpieza y cache de rutas..."
php artisan route:clear
php artisan route:cache

# Limpieza y cache de vistas
echo "Limpieza y cache de vistas..."
php artisan view:clear
php artisan view:cache

# Limpieza y cache de eventos
echo "Limpieza y cache de eventos..."
php artisan event:clear
php artisan event:cache

# Optimización de la aplicación
echo "Optimización de la aplicación..."
php artisan optimize:clear
php artisan optimize

# Establecer permisos y propiedad
echo "Estableciendo permisos y propiedad..."
chown -R www-data:www-data $APP_DIR
find $APP_DIR -type f -exec chmod 644 {} \;
find $APP_DIR -type d -exec chmod 755 {} \;
chmod -R ug+rwx $APP_DIR/storage $APP_DIR/bootstrap/cache

# Reiniciar el trabajador de la cola (descomentar si es necesario)
echo "Reiniciando el trabajador de la cola..."
php artisan queue:restart

echo "Despliegue completado exitosamente."