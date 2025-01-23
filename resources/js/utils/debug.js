import debug from 'debug';

// Namespace principal para la aplicación
const APP_NAMESPACE = 'esalud';

// Habilitar debugging en el navegador
if (import.meta.env.DEV) {
    debug.enable(`${APP_NAMESPACE}:*`);
    localStorage.setItem('debug', `${APP_NAMESPACE}:*`);
}

// Crear un debugger con namespace
export const createDebugger = (namespace) => {
    return debug(`${APP_NAMESPACE}:${namespace}`);
};

// Debuggers preconfigurados para diferentes módulos
export const debugHelpers = createDebugger('helpers');
export const debugApi = createDebugger('api');
export const debugComponents = createDebugger('components');
export const debugStore = createDebugger('store');

// Función de utilidad para debugging rápido
export const d = (namespace = 'app') => createDebugger(namespace);
