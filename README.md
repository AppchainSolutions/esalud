# eSalud

Sistema de gestión de salud desarrollado con Laravel 11 y Vue.js 3.

## Documentación

Para información detallada sobre el desarrollo, convenciones y guías del proyecto, consulta:

- [Guía de Desarrollo](docs/guia-desarrollo.md)

## Requisitos

- PHP 8.2 o superior
- Node.js 18 o superior
- PostgreSQL 14 o superior
- Redis

## Instalación

```bash
# Instalar dependencias de PHP
composer install

# Instalar dependencias de Node.js
npm install

# Configurar variables de entorno
cp .env.example .env
php artisan key:generate

# Ejecutar migraciones
php artisan migrate

# Compilar assets
npm run dev
```

## Tests

```bash
# Tests de PHP
php artisan test

# Tests de JavaScript
npm run test
```

## Licencia

Este proyecto es software propietario.
