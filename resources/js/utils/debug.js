import debug from 'debug';

// Namespace principal para la aplicación
const APP_NAMESPACE = 'esalud';

// Estilos para diferentes tipos de mensajes
const styles = {
    trace: {
        icon: '🔍',
        color: '#808080',
        label: 'TRACE'
    },
    info: {
        icon: '🔵',
        color: '#2196F3',
        label: 'INFO'
    },
    success: {
        icon: '✅',
        color: '#2ecc71',
        label: 'SUCCESS'
    },
    warning: {
        icon: '⚠️',
        color: '#FF9800',
        label: 'WARNING'
    },
    error: {
        icon: '❌',
        color: '#F44336',
        label: 'ERROR'
    },
    api: {
        icon: '🌐',
        color: '#9b59b6',
        label: 'API'
    },
    component: {
        icon: '🧩',
        color: '#e67e22',
        label: 'COMPONENT'
    },
    db: {
        icon: '💾',
        color: '#1abc9c',
        label: 'DATABASE'
    },
    auth: {
        icon: '🔐',
        color: '#34495e',
        label: 'AUTH'
    }
};

// Obtener timestamp en formato ISO
const getTimestamp = () => new Date().toISOString();

// Función para crear mensaje con estilo y timestamp
const createStyledMessage = (style, message, data = null) => {
    const timestamp = getTimestamp();
    const styleConfig = styles[style] || styles.info;
    const prefix = `${styleConfig.icon} [${timestamp}] [${styleConfig.label}]`;
    
    const styledPrefix = `%c${prefix}`;
    const styleString = `color: ${styleConfig.color}; font-weight: bold;`;
    
    if (data) {
        return [
            `${styledPrefix} ${message}`,
            styleString,
            data
        ];
    }
    
    return [
        `${styledPrefix} ${message}`,
        styleString
    ];
};

// Crear un debugger con namespace y estilos
const createStyledDebugger = (namespace, defaultStyle = 'info') => {
    const debugInstance = debug(`${APP_NAMESPACE}:${namespace}`);
    const logger = {};

    // Habilitar debugging en desarrollo
    if (process.env.NODE_ENV !== 'production') {
        debug.enable(`${APP_NAMESPACE}:*`);
    }

    // Crear métodos para cada tipo de estilo
    Object.keys(styles).forEach(style => {
        logger[style] = (message, data = null) => {
            const args = createStyledMessage(style, message, data);
            debugInstance(...args);
        };
    });

    // Método abreviado que usa el estilo por defecto
    logger.log = (message, data = null) => {
        logger[defaultStyle](message, data);
    };

    // Método para grupos de logs
    logger.group = (label) => {
        debugInstance(`%c→ ${label}`, 'color: #3498db; font-weight: bold;');
        console.group();
    };

    logger.groupEnd = () => {
        console.groupEnd();
        debugInstance('%c← End Group', 'color: #3498db; font-weight: bold;');
    };

    return logger;
};

// Debuggers preconfigurados para diferentes módulos
export const debugHelpers = createStyledDebugger('helpers', 'info');
export const debugApi = createStyledDebugger('api', 'api');
export const debugComponents = createStyledDebugger('components', 'component');
export const debugDb = createStyledDebugger('database', 'db');
export const debugAuth = createStyledDebugger('auth', 'auth');

// Función de utilidad para debugging rápido
export const d = (namespace = 'app') => createStyledDebugger(namespace);

// Exportar función creadora para casos personalizados
export const createDebugger = createStyledDebugger;
