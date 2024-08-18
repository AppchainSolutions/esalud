#!/bin/bash

# Directorio raíz de la aplicación Laravel
APP_DIR=/home/blueshadows/www/vulco

#Limpia cache
# Limpia la cache
echo "Limpieza con optimize clear..."
php $APP_DIR/artisan optimize:clear
#php $APP_DIR/artisan cache:flush
#php $APP_DIR/artisan cache:flush
php $APP_DIR/artisan optimize

# Limpia la cache
#echo "Limpieza de cache..."
#php $APP_DIR/artisan cache:clear

# Limpia las vistas compiladas
#echo "Limpieza de vistas compiladas..."
#php $APP_DIR/artisan view:clear

# Limpia las rutas compiladas
#echo "Limpieza de rutas compiladas..."
#php $APP_DIR/artisan route:clear

# Limpia los archivos de configuración compilados
#echo "Limpieza de archivos de configuración compilados..."
#php $APP_DIR/artisan config:clear

# Limpia los archivos de autenticación compilados
echo "Limpieza de archivos de autenticación compilados..."
php $APP_DIR/artisan auth:clear

# Limpia los archivos temporales
echo "Limpieza de archivos temporales..."
rm -rf $APP_DIR/storage/framework/cache/*
rm -rf $APP_DIR/storage/framework/sessions/*
rm -rf $APP_DIR/storage/framework/views/*
rm -rf $APP_DIR/storage/clockwork/*

# Limpia los archivos de logs
echo "Limpieza de archivos de logs..."
rm -rf $APP_DIR/storage/logs/*

echo "Limpieza completa!"
