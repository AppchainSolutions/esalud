#!/bin/bash

# Define the application directory
APP_DIR=/home/blueshadows/www/esalud

# Define a function to clear cache and optimize
clear_cache() {
  echo "Clearing cache and optimizing..."
  php "$APP_DIR/artisan" optimize:clear
  php "$APP_DIR/artisan" optimize
}

# Define a function to clear authentication files
clear_auth() {
  echo "Clearing authentication files..."
  php "$APP_DIR/artisan" auth:clear
}

# Define a function to clear temporary files
clear_temp() {
  echo "Clearing temporary files..."
  rm -rf "$APP_DIR/storage/framework/cache/"*
  rm -rf "$APP_DIR/storage/framework/sessions/"*
  rm -rf "$APP_DIR/storage/framework/views/"*
  rm -rf "$APP_DIR/storage/clockwork/"*
}

# Define a function to clear log files
clear_logs() {
  echo "Clearing log files..."
  rm -rf "$APP_DIR/storage/logs/"*
}

# Main script
echo "Starting cleanup..."

clear_cache
clear_auth
clear_temp
clear_logs

echo "Cleanup complete!"


