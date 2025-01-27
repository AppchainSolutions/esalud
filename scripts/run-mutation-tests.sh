#!/bin/bash

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Directorio del proyecto
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

# Función para logging
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Función para logging de errores
error_log() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

# Función para logging de warnings
warning_log() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

# Verificar si Xdebug está habilitado
if ! php -m | grep -q xdebug; then
    error_log "Xdebug no está instalado o habilitado. Es necesario para la cobertura de código."
    exit 1
fi

# Crear directorio para logs si no existe
LOGS_DIR="$PROJECT_DIR/storage/logs/mutation"
mkdir -p "$LOGS_DIR"

# Timestamp para los archivos de log
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
LOG_FILE="$LOGS_DIR/mutation_${TIMESTAMP}.log"

log "Iniciando pruebas de mutación..."
log "Los logs se guardarán en: $LOG_FILE"

# Limpiar caché de composer y regenerar autoload
log "Limpiando caché de composer..."
composer dump-autoload

# Ejecutar PHPUnit primero para asegurar que todas las pruebas pasan
log "Ejecutando pruebas PHPUnit..."
if ! vendor/bin/pest; then
    error_log "Las pruebas PHPUnit fallaron. Corrige los errores antes de ejecutar las pruebas de mutación."
    exit 1
fi

# Ejecutar Infection
log "Ejecutando Infection..."
vendor/bin/infection \
    --threads=$(nproc) \
    --coverage=storage/framework/coverage \
    --show-mutations \
    --min-msi=80 \
    --min-covered-msi=90 \
    --logger-html="$LOGS_DIR/infection_${TIMESTAMP}.html" \
    --logger-json="$LOGS_DIR/infection_${TIMESTAMP}.json" \
    --formatter=progress 2>&1 | tee -a "$LOG_FILE"

EXIT_CODE=${PIPESTATUS[0]}

if [ $EXIT_CODE -eq 0 ]; then
    log "Las pruebas de mutación se completaron exitosamente."
    log "Revisa el reporte HTML en: $LOGS_DIR/infection_${TIMESTAMP}.html"
else
    error_log "Las pruebas de mutación fallaron con código de salida: $EXIT_CODE"
    error_log "Revisa el log para más detalles: $LOG_FILE"
fi

# Mostrar resumen de resultados
if [ -f "$LOGS_DIR/infection_${TIMESTAMP}.json" ]; then
    log "Resumen de resultados:"
    jq -r '.stats | "Total mutantes: \(.totalMutantsCount)\nMutantes detectados: \(.killedCount)\nMutantes sobrevivientes: \(.escapedCount)\nMSI: \(.msi)%\nCovered MSI: \(.coveredCodeMsi)%"' \
        "$LOGS_DIR/infection_${TIMESTAMP}.json"
fi

exit $EXIT_CODE
