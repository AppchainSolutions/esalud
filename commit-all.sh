#!/bin/bash

# Función para mostrar uso del script
usage() {
    echo "Uso: ./commit-all.sh <tipo> <ámbito>"
    echo "Ejemplo: ./commit-all.sh feat docs"
    exit 1
}

# Verificar argumentos
if [ $# -lt 2 ]; then
    usage
fi

# Capturar argumentos
TIPO=$1
AMBITO=$2

# Mostrar estado de cambios
echo "=== Estado de Cambios ==="
git status

# Mostrar diff detallado
echo -e "\n=== Diff Detallado ==="
git diff

# Generar descripción interactiva
read -p "Describe brevemente los cambios (una línea): " RESUMEN
read -p "¿Hay cambios importantes que requieran más detalles? (s/n): " DETALLE_RESPUESTA

DESCRIPCION="$RESUMEN"

if [ "$DETALLE_RESPUESTA" = "s" ]; then
    echo "Ingresa detalles adicionales (presiona Ctrl+D para terminar):"
    DETALLES=$(cat)
    DESCRIPCION="$DESCRIPCION

$DETALLES"
fi

# Contar archivos modificados
ARCHIVOS_MODIFICADOS=$(git status --porcelain | wc -l)

# Añadir todos los archivos
git add .

# Hacer commit con descripción detallada
git commit -m "$TIPO($AMBITO): $RESUMEN

Cambios:
- Total de archivos modificados: $ARCHIVOS_MODIFICADOS

$DESCRIPCION"

# Opcional: Generar nueva versión y CHANGELOG
read -p "¿Generar nueva versión y CHANGELOG? (s/n): " RESPUESTA
if [ "$RESPUESTA" = "s" ]; then
    npm run release
    git push --follow-tags origin vulco-dev
fi
