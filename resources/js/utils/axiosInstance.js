import axios from "axios";
import { router } from '@inertiajs/vue3';

// Configuración de tiempo de inactividad (en milisegundos)
const IDLE_TIMEOUT = 30 * 60 * 1000; // 30 minutos

// Función para rastrear la actividad del usuario
function setupUserActivityTracking() {
    let lastActivityTime = Date.now();

    // Eventos que se consideran actividad
    const activityEvents = [
        'mousedown', 
        'keydown', 
        'scroll', 
        'mousemove', 
        'touchstart'
    ];

    // Función para actualizar el último tiempo de actividad
    function updateLastActivityTime() {
        lastActivityTime = Date.now();
    }

    // Agregar listeners de eventos
    activityEvents.forEach(event => {
        window.addEventListener(event, updateLastActivityTime);
    });

    // Función para verificar inactividad
    function checkUserInactivity() {
        const currentTime = Date.now();
        const inactiveDuration = currentTime - lastActivityTime;

        if (inactiveDuration > IDLE_TIMEOUT) {
            // Limpiar listeners para evitar múltiples disparos
            activityEvents.forEach(event => {
                window.removeEventListener(event, updateLastActivityTime);
            });

            // Limpiar datos de sesión
            clearSessionData();
            
            // Redirigir al login usando Inertia
            router.visit('/login', {
                method: 'get',
                replace: true,
                preserveState: false,
                preserveScroll: false,
                onSuccess: () => {
                    // Mostrar mensaje de sesión expirada por inactividad
                    window.flash = {
                        type: 'warning',
                        message: 'Su sesión ha expirado debido a inactividad. Por favor, inicie sesión nuevamente.'
                    };
                }
            });
        }
    }

    // Iniciar intervalo de verificación de inactividad
    const inactivityInterval = setInterval(checkUserInactivity, 60000); // Cada minuto

    // Limpiar intervalo al cerrar la página
    window.addEventListener('beforeunload', () => {
        clearInterval(inactivityInterval);
    });
}

// Iniciar tracking de actividad al cargar la aplicación
setupUserActivityTracking();

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Determinar la URL base desde las variables de entorno
const baseURL = import.meta.env.VITE_APP_URL || 'http://localhost:8000';
const apiTimeout = parseInt(import.meta.env.VITE_API_TIMEOUT || '10000');

const axiosInstance = axios.create({
    baseURL,
    timeout: apiTimeout,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

// Función para limpiar datos de sesión
function clearSessionData() {
    // Eliminar cookies de Laravel
    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Limpiar localStorage
    localStorage.clear();

    // Limpiar sessionStorage
    sessionStorage.clear();
}

// Interceptores
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // Manejar errores de autenticación y sesión expirada
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.error('Error de autenticación');
                    break;
                case 419: // Page Expired
                    clearSessionData();
                    
                    // Redirigir al login usando Inertia
                    router.visit('/login', {
                        method: 'get',
                        replace: true,
                        preserveState: false,
                        preserveScroll: false,
                        onSuccess: () => {
                            // Mostrar mensaje de sesión expirada
                            window.flash = {
                                type: 'error',
                                message: 'Su sesión ha expirado. Por favor, inicie sesión nuevamente.'
                            };
                        }
                    });
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;