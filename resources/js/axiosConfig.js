import axios from "axios";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

//const baseURL = process.env.NODE_ENV === 'local' ? 'http://localhost:8000' : 'https://municb.appchain.solutions';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    // Otras configuraciones de Axios
});

//// before a request is made start the nprogress
//axiosInstance.interceptors.request.use(config => {
//  NProgress.start()
//  return config
//})
//
//// before a response is returned stop nprogress
//axiosInstance.interceptors.response.use(response => {
//  NProgress.done()
//  return response
//})

export default axiosInstance;
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

//  import Echo from 'laravel-echo';

//import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });
