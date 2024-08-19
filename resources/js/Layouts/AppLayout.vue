<script>
import { computed } from "vue";
import { usePage, router } from "@inertiajs/vue3";
import logo from "../../img/logo.jpg";

const page = usePage();
const user = computed(() => page.props.auth.user);

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
            props: null
        };
    },
    computed: {
        icon() {
            return this.rail
                ? "mdi-chevron-right-circle-outline"
                : "mdi-chevron-left-circle-outline";
        }
    },
    methods: {
        toggleBtn() {
            this.rail = !this.rail;
        },
        inicio() {
            router.get("/dashboard");
        },
        paciente() {
            router.get("/paciente");
        },
        atenciones() {
            router.get("/consulta/atencion_diaria");
        },
        licencia() {
            router.get("/consulta/licencia");
        },
        certificacion() {
            router.get("/consulta/certificacion");
        },
        diatConsulta() {
            router.get("/consulta/diat");
        },
        diepConsulta() {
            router.get("/consulta/diep");
        },
        vacunaConsulta() {
            router.get("/consulta/vacuna");
        },
        exsalud() {
            router.get("/consulta/exsalud");
        },
        exepo() {
            router.get("/consulta/exepo");
        },
        expsico() {
            router.get("/consulta/expsico");
        },
        exrespirador() {
            router.get("/consulta/exrespirador");
        },
        exequilibrio() {
            router.get("/consulta/exequilibrio");
        },
        exsomnolencia() {
            router.get("/consulta/exsomnolencia");
        },
        expvt() {
            router.get("/consulta/expvtmert");
        },
        exruido() {
            router.get("/consulta/exruido");
        },
        exmetales() {
            router.get("/consulta/exmetales");
        },
        exhumos() {
            router.get("/consulta/exhumonegro");
        },
        exaldehido() {
            router.get("/consulta/exaldehido");
        },

        exalcohol() {
            router.get("/consulta/exalcohol");
        },

        salir() {
            localStorage.removeItem("auth_token");
            router.post("/logout");
        },
    }
};
</script>

<template>
    <v-app>
        <v-container fluid>
            <notifications position="bottom right" width="40%">
              
            </notifications>
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
                            prepend-icon="mdi-account"
                            title="Paciente"
                            value="Paciente"
                            @click="paciente"
                            v-if ="user.isAdmin"
                        ></v-list-item>
                        <v-divider></v-divider>
                    </v-list>
                   
                    <template v-slot:append>
                        <v-btn block color="#662d91" @click="salir">
                            <b><i
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
                    Bienvenido/a    {{ user.name }} [ Vulco ~ VitamHC ]
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

<style>
.v-navigation-drawer--active .v-list-item .mdi {
    color: #8e44ad;
}

.vue-notification {
    /* styling */
    margin: 0 10px 10px;
    padding: 20px;
    font-size: 18px;
    color: #ffffff;

    background: linear-gradient(to bottom, #00b7ea 0%, #006e87 70%);
    border-left: 5px solid #003f7d;

    &.success {
        border-left-color: #05fb4b;
        background: linear-gradient(
            to bottom,
            #c9de96 0%,
            #8ab66b 44%,
            #398235 100%
        );
    }

    &.warn {
        background: #ffb648;
        border-left-color: #f48a06;
    }

    &.error {
        background: #e54d42;
        border-left-color: #b82e24;
    }
}
</style>
