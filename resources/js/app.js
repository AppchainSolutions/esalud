import "./bootstrap";
import { createApp, h } from "vue";
import { VueSpinnersPlugin } from 'vue3-spinners';
import { createPinia } from "pinia";
import { createInertiaApp } from "@inertiajs/vue3";
import Notifications from "@kyvg/vue3-notification";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import JsonExcel from "vue-json-excel3";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
//* SweetAlert2
import VueSweetalert2 from "vue-sweetalert2";
import "@sweetalert2/theme-material-ui/material-ui.scss";
//* Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const pinia = createPinia()
const appName = import.meta.env.VITE_APP_NAME || "Empresas"
const isProduction = process.env.NODE_ENV === "production"

const vuetify = createVuetify({
    ssr: true,
    components: {
        ...components,
        ...labsComponents,
    },
    directives,
    icons: {
        defaultSet: "mdi",
        aliases: {
            aliases,
        },
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: "light",
    },
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .component("downloadExcel", JsonExcel)
            .use(Notifications)
            .use(VueSpinnersPlugin)
            .use(ZiggyVue)
            .use(plugin)
            .use(pinia)
            .use(vuetify)
            .use(VueSweetalert2)
            .mount(el);
    },
    progress: {
        color: "cyan",
    },
});
