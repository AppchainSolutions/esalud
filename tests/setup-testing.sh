#!/bin/bash

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Configurando entorno de testing...${NC}"

# Instalar dependencias de PHP
echo -e "${GREEN}Instalando dependencias de PHP...${NC}"
composer require --dev \
    phpunit/phpunit \
    pestphp/pest \
    pestphp/pest-plugin-laravel \
    pestphp/pest-plugin-mutations \
    mockery/mockery

# Instalar dependencias de JavaScript
echo -e "${GREEN}Instalando dependencias de JavaScript...${NC}"
npm install --save-dev \
    @vue/test-utils \
    @testing-library/vue \
    vitest \
    jsdom \
    @playwright/test \
    happy-dom

# Crear estructura de directorios
echo -e "${GREEN}Creando estructura de directorios...${NC}"
mkdir -p tests/Feature/Api
mkdir -p tests/Feature/Controllers
mkdir -p tests/Feature/Models
mkdir -p tests/Unit/Services
mkdir -p tests/Unit/Helpers
mkdir -p tests/E2E/flows
mkdir -p tests/Mutations
mkdir -p tests/JavaScript/Components
mkdir -p tests/JavaScript/Pages
mkdir -p tests/JavaScript/Utils

# Crear archivos de configuración
echo -e "${GREEN}Creando archivos de configuración...${NC}"

# Configuración de Vitest
echo '{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "lib": [],
    "types": ["vitest/globals"]
  },
  "include": ["tests/**/*.test.ts"]
}' > vitest.config.json

# Configuración de Playwright
echo '{
  "testDir": "./tests/E2E",
  "timeout": 30000,
  "retries": 2,
  "reporter": "list",
  "use": {
    "baseURL": "http://localhost:8000",
    "trace": "on-first-retry"
  }
}' > playwright.config.json

echo -e "${GREEN}Configuración de testing completada.${NC}"
