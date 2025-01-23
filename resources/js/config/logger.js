import log from 'loglevel';
import prefix from 'loglevel-plugin-prefix';

// Configuración de colores para los diferentes niveles
const colors = {
    TRACE: '#808080',  // gris
    DEBUG: '#2196F3',  // azul
    INFO: '#4CAF50',   // verde
    WARN: '#FF9800',   // naranja
    ERROR: '#F44336'   // rojo
};

// Formato del timestamp
const getTimestamp = () => new Date().toISOString();

// Configurar el prefijo para todos los logs
prefix.reg(log);
prefix.apply(log, {
    format(level, name, timestamp) {
        return `[${timestamp}] [${level.toUpperCase()}] ${name ? `[${name}]` : ''}`;
    },
    timestampFormatter(date) {
        return getTimestamp();
    }
});

// Configurar el nivel de log según el entorno
const level = import.meta.env.PROD ? 'warn' : 'trace';
log.setLevel(level);

// Función para crear un logger personalizado
export const createLogger = (name = '') => {
    const logger = log.getLogger(name);
    logger.setLevel(level);
    
    return {
        error: (message, meta = {}) => logger.error(message, meta),
        warn: (message, meta = {}) => logger.warn(message, meta),
        info: (message, meta = {}) => logger.info(message, meta),
        debug: (message, meta = {}) => logger.debug(message, meta),
        trace: (message, meta = {}) => logger.trace(message, meta)
    };
};

export default log;
