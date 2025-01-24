import debug from 'debug';

// Namespace principal para la aplicación
const APP_NAMESPACE = 'esalud';

// Estilos para diferentes tipos de mensajes
const styles = {
    info: {
        icon: '🔵',
        color: '#3498db',
        label: 'INFO'
    },
    success: {
        icon: '✅',
        color: '#2ecc71',
        label: 'SUCCESS'
    },
    warning: {
        icon: '⚠️',
        color: '#f1c40f',
        label: 'WARNING'
    },
    error: {
        icon: '❌',
        color: '#e74c3c',
        label: 'ERROR'
    },
    api: {
        icon: '🌐',
        color: '#9b59b6',
        label: 'API'
    },
    store: {
        icon: '📦',
        color: '#1abc9c',
        label: 'STORE'
    },
    component: {
        icon: '🧩',
        color: '#e67e22',
        label: 'COMPONENT'
    }
};

// Habilitar debugging en el navegador
if (import.meta.env.DEV) {
    debug.enable(`${APP_NAMESPACE}:*`);
    localStorage.setItem('debug', `${APP_NAMESPACE}:*`);
}

// Función para crear mensaje con estilo
const createStyledMessage = (style, message, data) => {
    const timestamp = new Date().toLocaleTimeString();
    const dataString = data ? `\n${JSON.stringify(data, null, 2)}` : '';
    return `%c${style.icon} [${timestamp}] [${style.label}] ${message}${dataString}`;
};

// Crear un debugger con namespace y estilos
const createStyledDebugger = (namespace, defaultStyle) => {
    const baseDebugger = debug(`${APP_NAMESPACE}:${namespace}`);
    
    return {
        log: (message, data) => {
            const style = styles[defaultStyle] || styles.info;
            baseDebugger(createStyledMessage(style, message, data), `color: ${style.color}; font-weight: bold;`);
        },
        info: (message, data) => {
            baseDebugger(createStyledMessage(styles.info, message, data), `color: ${styles.info.color}; font-weight: bold;`);
        },
        success: (message, data) => {
            baseDebugger(createStyledMessage(styles.success, message, data), `color: ${styles.success.color}; font-weight: bold;`);
        },
        warning: (message, data) => {
            baseDebugger(createStyledMessage(styles.warning, message, data), `color: ${styles.warning.color}; font-weight: bold;`);
        },
        error: (message, data) => {
            baseDebugger(createStyledMessage(styles.error, message, data), `color: ${styles.error.color}; font-weight: bold;`);
        }
    };
};

// Debuggers preconfigurados para diferentes módulos
export const debugHelpers = createStyledDebugger('helpers', 'info');
export const debugApi = createStyledDebugger('api', 'api');
export const debugComponents = createStyledDebugger('components', 'component');
export const debugStore = createStyledDebugger('store', 'store');

// Función de utilidad para debugging rápido
export const d = (namespace = 'app') => createStyledDebugger(namespace, 'info');
