import "./utils/axiosInstance";
import { createApp, h } from "vue";
import { VueSpinnersPlugin } from "vue3-spinners";
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { createPinia } from "pinia";
import { createInertiaApp } from "@inertiajs/vue3";
import Notifications from "@kyvg/vue3-notification";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import JsonExcel from "vue-json-excel3";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
//* SweetAlert2
import VueSweetalert2 from "vue-sweetalert2";
//* Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const pinia = createPinia();
const appName = import.meta.env.VITE_APP_NAME || "Vulco";

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
            .use(LoadingPlugin)
            .use(VueSweetalert2)
            .mount(el);
    },
    progress: {
        color: "red",
    },
});
