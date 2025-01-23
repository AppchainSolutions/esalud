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
    laravel/dusk \
    mockery/mockery

# Instalar dependencias de JavaScript
echo -e "${GREEN}Instalando dependencias de JavaScript...${NC}"
npm install --save-dev \
    @vue/test-utils \
    @testing-library/vue \
    vitest \
    jsdom \
    cypress \
    @cypress/vue \
    happy-dom

# Crear estructura de directorios
echo -e "${GREEN}Creando estructura de directorios...${NC}"
mkdir -p tests/Feature/Api
mkdir -p tests/Feature/Controllers
mkdir -p tests/Feature/Models
mkdir -p tests/Unit/Services
mkdir -p tests/Unit/Helpers
mkdir -p tests/Browser/Pages
mkdir -p tests/JavaScript/Components
mkdir -p tests/JavaScript/Pages
mkdir -p tests/JavaScript/Utils
mkdir -p tests/E2E/flows

# Crear archivos de configuración
echo -e "${GREEN}Creando archivos de configuración...${NC}"

# Configuración de Vitest
echo '{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "lib": [],
    "types": ["node", "jsdom"]
  },
  "include": ["tests/JavaScript/**/*.ts", "tests/JavaScript/**/*.vue"]
}' > tests/JavaScript/tsconfig.test.json

# Configuración de Cypress
echo '{
  "component": {
    "specPattern": "tests/E2E/**/*.cy.{js,jsx,ts,tsx}",
    "supportFile": "tests/E2E/support/component.js"
  },
  "e2e": {
    "setupNodeEvents": (on, config) => {},
    "supportFile": "tests/E2E/support/e2e.js",
    "specPattern": "tests/E2E/flows/**/*.cy.{js,jsx,ts,tsx}"
  }
}' > cypress.config.js

echo -e "${BLUE}Configuración completada!${NC}"
