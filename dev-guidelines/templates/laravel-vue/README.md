# 🚀 Plantilla Laravel + Vue.js

## 📋 Descripción
Template de proyecto con mejores prácticas para desarrollo de aplicaciones web usando Laravel y Vue.js.

## 🛠️ Tecnologías
- Backend: Laravel 10
- Frontend: Vue.js 3
- Base de Datos: PostgreSQL
- Autenticación: Laravel Sanctum
- Testing: PHPUnit, Pest

## 📦 Estructura del Proyecto
- `/backend`: Código del backend Laravel
- `/frontend`: Aplicación Vue.js
- `/docs`: Documentación del proyecto

## 🚀 Instalación Rápida
```bash
# Clonar repositorio
git clone [URL_REPOSITORIO]

# Configurar backend
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

# Configurar frontend
cd ../frontend
npm install
npm run dev
```

## 🧪 Testing
```bash
# Backend
php artisan test

# Frontend
npm run test
```

## 📄 Licencia
MIT License
