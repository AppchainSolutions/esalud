#!/bin/bash

# Función de logging
log_message() {
    local level=$1
    local message=$2
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
    echo "[$timestamp] [$level] $message"
}

# Manejo de errores
handle_error() {
    local error_message=$1
    log_message "ERROR" "$error_message"
    exit 1
}

# Cargar variables de entorno
ENV_FILE="/home/omar/www/esalud/.env"
if [ -f "$ENV_FILE" ]; then
    set -a
    source "$ENV_FILE"
    set +a
else
    echo "Archivo .env no encontrado en $ENV_FILE"
    exit 1
fi

# Configuración de directorios desde .env con valores por defecto
BACKUP_DIR="${DB_BACKUP_DIR:-/home/omar/www/esalud/backups/database}"
LOG_DIR="${DB_BACKUP_LOG_DIR:-/home/omar/www/esalud/storage/logs/backups}"
BACKUP_RETENTION="${DB_BACKUP_RETENTION:-4}"  # Mantener últimas 4 copias por defecto

# Configuración de logging
mkdir -p $LOG_DIR
LOG_FILE="$LOG_DIR/backup_$(date +%Y%m).log"

log_message "INFO" "Variables de entorno cargadas correctamente"

# Configuración desde variables de entorno
DB_NAME="${DB_DATABASE}"
DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-5432}"
DB_USER="${DB_USERNAME}"
DB_PASSWORD="${DB_PASSWORD}"

# Validar variables requeridas
[[ -z "$DB_NAME" ]] && handle_error "DB_DATABASE no está definida en .env"
[[ -z "$DB_USER" ]] && handle_error "DB_USERNAME no está definida en .env"
[[ -z "$DB_PASSWORD" ]] && handle_error "DB_PASSWORD no está definida en .env"

# Crear directorio de backup si no existe
mkdir -p $BACKUP_DIR || handle_error "No se pudo crear el directorio de backup"
log_message "INFO" "Directorio de backup verificado: $BACKUP_DIR"

# Generar nombre del archivo con fecha
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/backup_${DB_NAME}_${TIMESTAMP}.sql"

# Realizar backup
log_message "INFO" "Iniciando backup de la base de datos $DB_NAME"
if PGPASSWORD=$DB_PASSWORD pg_dump -h $DB_HOST -p $DB_PORT -U $DB_USER $DB_NAME > $BACKUP_FILE 2>> "$LOG_FILE"; then
    log_message "INFO" "Backup creado exitosamente"
else
    handle_error "Error al crear el backup de la base de datos"
fi

# Comprimir backup
log_message "INFO" "Comprimiendo archivo de backup"
if gzip $BACKUP_FILE; then
    log_message "INFO" "Archivo comprimido exitosamente"
else
    handle_error "Error al comprimir el archivo de backup"
fi

# Eliminar backups antiguos
cd $BACKUP_DIR || handle_error "No se pudo acceder al directorio de backups"
log_message "INFO" "Eliminando backups antiguos (manteniendo últimos $BACKUP_RETENTION)"
old_backups=$(ls -t *.sql.gz | tail -n +$((BACKUP_RETENTION + 1)))
if [ ! -z "$old_backups" ]; then
    echo "$old_backups" | xargs rm && log_message "INFO" "Backups antiguos eliminados"
fi

# Calcular tamaño del backup
backup_size=$(du -h "${BACKUP_FILE}.gz" | cut -f1)
log_message "INFO" "Backup completado: ${BACKUP_FILE}.gz (Tamaño: $backup_size)"

# Rotar log mensualmente (mantener solo el último mes)
find "$LOG_DIR" -name "backup_*.log" -type f -mtime +31 -delete
