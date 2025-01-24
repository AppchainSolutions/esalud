import axios from "axios";

// Configurar axios para incluir el token CSRF
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Determinar la URL base desde las variables de entorno
const baseURL = import.meta.env.VITE_APP_URL || 'http://localhost:8000';
const apiTimeout = parseInt(import.meta.env.VITE_API_TIMEOUT || '10000');

const axiosInstance = axios.create({
    baseURL,
    timeout: apiTimeout,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Interceptor para manejar errores globalmente
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Manejar error de autenticación
            console.error('Error de autenticación');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;