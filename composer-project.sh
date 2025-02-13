#!/bin/bash

# Script para ejecutar comandos de Composer en el directorio actual
PROJECT_ROOT=$(pwd)

# Ejecutar Composer con el directorio de trabajo actual
composer --working-dir="$PROJECT_ROOT" "$@"
