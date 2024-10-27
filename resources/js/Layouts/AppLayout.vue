<script>
import { computed, ref } from "vue";
import { usePage, router } from "@inertiajs/vue3";
import logo from "../../img/logo_muni_casablanca.png";
import { useLoading } from "vue-loading-overlay";

const page = usePage();
const user = computed(() => page.props.auth.user);
const $loading = useLoading({
    color: "#662d91",
    loader: "dots",
    backgroundColor: "#662d91",
    opacity: 0.2,
});
const visible = ref(false);
const loading = ref(false);

export default {
    inheritAttrs: false,
    data() {
        return {
            logo,
            drawer: true,
            rail: false,
            isAdmin: true,
            approved: 0,
            user: user,
            props: null,
        };
    },
    computed: {
        icon() {
            return this.rail
                ? "mdi-chevron-right-circle-outline"
                : "mdi-chevron-left-circle-outline";
        },
    },
    methods: {
        toggleBtn() {
            this.rail = !this.rail;
        },
        inicio() {
            const loader = $loading.show();
            router.visit("dashboard", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        paciente() {
            const loader = $loading.show();
            router.visit("paciente", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        servicio() {
            const loader = $loading.show();
            router.visit("servicio", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        profesional() {
            const loader = $loading.show();
            router.visit("profesional", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        psicologia() {
            const loader = $loading.show();
            router.visit("psicologia", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },

        salir() {
            localStorage.removeItem("auth_token");
            router.post("logout");
        },
    },
};
</script>

<template>
    <v-app>
        <v-container fluid>
            <notifications position="bottom center" width="40%"> </notifications>
            <v-card>
                <v-navigation-drawer
                    v-model="drawer"
                    :rail="rail"
                    permanent
                    @click="rail = false"
                    color="white"
                >
                    <v-list-item nav class="mt-0">
                        <v-img :src="logo" id="logo"> </v-img>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list density="compact" nav>
                        <v-list-item
                            prepend-icon="mdi-home-city"
                            color="rgb(0, 0, 0)"
                            title="Dashboard"
                            value="Inicio"
                            @click="inicio"
                        ></v-list-item>
                        <v-list-item
                            prepend-icon="mdi-human-male-female-child"
                            title="Gestión de Servicio"
                            value="Servicio"
                            @click="servicio"
                            v-if="user.isAdmin"
                        ></v-list-item>
                        <v-list-item
                            prepend-icon="mdi-account"
                            title="Ficha de Pacientes"
                            value="Paciente"
                            @click="paciente"
                            v-if="user.isAdmin"
                        ></v-list-item>
                        <v-list-item
                            prepend-icon="mdi-account-heart"
                            title="Registro de Profesionales"
                            value="Profesional"
                            @click="profesional"
                            v-if="user.isAdmin"
                        ></v-list-item>
                        <v-list-item
                            prepend-icon="mdi-head-cog-outline"
                            title="Atención Psicología"
                            value="Psicología"
                            @click="psicologia"
                            v-if="user.isAdmin"
                        ></v-list-item>

                        <v-divider></v-divider>
                    </v-list>

                    <template v-slot:append>
                        <v-btn block color="#662d91" @click="salir">
                            <b
                                ><i
                                    class="mdi mdi-location-exit"
                                    style="font-size: 24px; color: white"
                                ></i
                            ></b>
                        </v-btn>
                    </template>
                </v-navigation-drawer>
            </v-card>
            <v-app-bar color="#009AA4">
                <v-app-bar-title>
                    <v-icon
                        @click.stop="toggleBtn"
                        class="ma-auto"
                        size="x-large"
                        >{{ icon }}</v-icon
                    >
                    Bienvenido/a {{ user.name }} [ Municipalidad de Casablanca -
                    Centro Comunitario ]
                </v-app-bar-title>
            </v-app-bar>
            <v-main>
                <v-container fluid>
                    <slot></slot>
                </v-container>
            </v-main>
        </v-container>
    </v-app>
</template>

<style scoped>
.my-notification {
    padding: 2px;
    border-radius: 2px;
    font-size: 4em;
    display: flex;

  /* style for title line
  .notification-title {
  }

  .notification-content {
  }
*/
  &.success {
    background: lime;
  }
  &.info {
    background: blue;
  }
  &.error {
    background: red;
  }
}
</style>