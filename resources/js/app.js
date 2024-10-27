import { createApp, h } from "vue";
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import logger from "./logger";
import { VueSpinnersPlugin } from "vue3-spinners";
import { createPinia } from "pinia";
import { createInertiaApp } from "@inertiajs/vue3";
import Notifications from "@kyvg/vue3-notification";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import JsonExcel from "vue-json-excel3";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import VueSweetalert2 from "vue-sweetalert2";
import "@sweetalert2/theme-material-ui/material-ui.scss";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const pinia = createPinia();

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

});

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue"),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("downloadExcel", JsonExcel) // Custom component
            .use(pinia) // Pinia for state management
            .use(Notifications) // Notification plugin
            .use(VueSpinnersPlugin) // Spinner plugin
            .use(ZiggyVue, Ziggy) // Ziggy for routing
            .use(vuetify) // Vuetify for UI components
            .use(VueSweetalert2) // SweetAlert2 for alerts
            .use(logger) // Logger plugin
            .use(LoadingPlugin)
            .mount(el);
    },
});
