import axios from "axios";
import { router } from '@inertiajs/vue3';

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