<script>
import { computed, ref } from "vue";
import { usePage, router } from "@inertiajs/vue3";
import logo from "../../img/logo.jpg";
import { useLoading } from "vue-loading-overlay";

const $loading = useLoading({
    color: "#662d91",
    loader: "dots",
    backgroundColor: "#662d91",
    opacity: 0.2,
});
const visible = ref(false);
const loading = ref(false);

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
            const loader = $loading.show();
            router.visit("/dashboard", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
            
        },
        paciente() {
            const loader = $loading.show();
            router.visit("/paciente", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        atenciones() {
            const loader = $loading.show();

            router.visit("/consulta/atencion_diaria", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        licencia() {
            const loader = $loading.show();
            router.visit("/consulta/licencia", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        certificacion() {
            const loader = $loading.show();
            router.visit("/consulta/certificacion", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        diatConsulta() {
            const loader = $loading.show();
            router.visit("/consulta/diat", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        diepConsulta() {
            const loader = $loading.show();
            router.visit("/consulta/diep", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });

        },
        vacunaConsulta() {
            const loader = $loading.show();
            router.visit("/consulta/vacuna", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });

        },
        exsalud() {
            const loader = $loading.show();
            router.visit("/consulta/exsalud", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });

        },
        exepo() {
            const loader = $loading.show();
            router.visit("/consulta/exepo", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });

        },
        expsico() {
            const loader = $loading.show();
            router.visit("/consulta/expsico", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });

        },
        exrespirador() {
            const loader = $loading.show();
            router.visit("/consulta/exrespirador", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        exequilibrio() {
            const loader = $loading.show();
            router.visit("/consulta/exequilibrio", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        exsomnolencia() {
            const loader = $loading.show();
            router.visit("/consulta/exsomnolencia", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        expvt() {
            const loader = $loading.show();
            router.visit("/consulta/expvtmert", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        exruido() {
            const loader = $loading.show();
            router.visit("/consulta/exruido", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        exmetal() {
            const loader = $loading.show();
            router.visit("/consulta/exmetal", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        exhumos() {
            const loader = $loading.show();
            router.visit("/consulta/exhumonegro", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },
        exaldehido() {
            const loader = $loading.show();
            router.visit("/consulta/exaldehido", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },

        exalcohol() { 
            const loader = $loading.show();
            router.visit("/consulta/exalcohol", {
                method: 'get', 
                onSuccess: () => {
                        loader.hide();
                },
            });
        },

        salir() {
            const loader = $loading.show();
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
                    <v-list density="compact" nav>
                        <v-list-group value="consultas" v-if="isAdmin">
                            <template v-slot:activator="{ props }">
                                <v-list-item
                                    v-bind="props"
                                    title="Consultas"
                                    prepend-icon="mdi-database-search"
                                ></v-list-item>
                            </template>
                            <v-list-item
                                title="Atenciones Diarias"
                                value="atenciones"
                                @click="atenciones"
                            />
                            <v-list-item
                                title="Licencia Medicas"
                                value="licencias"
                                @click="licencia"
                            />
                            <v-list-item
                                title="Certificaciones"
                                value="certificaciones"
                                @click="certificacion"
                            />
                            <v-list-item
                                title="DIAT"
                                value="diat"
                                @click="diatConsulta"
                            />
                            <v-list-item
                                title="DIEP"
                                value="diep"
                                @click="diepConsulta"
                            />
                            <v-list-item
                                title="Vacunas"
                                value="vacunas"
                                @click="vacunaConsulta"
                            />
                        </v-list-group>
                        <v-list-group value="examenes" v-if="isAdmin">
                            <template v-slot:activator="{ props }">
                                <v-list-item
                                    v-bind="props"
                                    title="Exámenes"
                                    prepend-icon="mdi-invoice-text-plus"
                                ></v-list-item>
                            </template>

                            <v-list-item
                                title="Ocupacionales y Preocupacionales"
                                value="epo"
                                @click="exepo"
                            />
                            <v-list-item
                                title="Psicosensometrico"
                                value="psico"
                                @click="expsico"
                            />
                            <v-list-item
                                title="Estado de Salud"
                                value="salud"
                                @click="exsalud"
                            />
                            <v-list-item
                                title="Respirador"
                                value="respirador"
                                @click="exrespirador"
                            />
                            <v-list-item
                                title="Equilibrio"
                                value="equilibrio"
                                @click="exequilibrio"
                            />
                            <v-list-item
                                title="Somnolencia"
                                value="somnolencia"
                                @click="exsomnolencia"
                            />
                            <v-list-item
                                title="PVT MERT"
                                value="tmert"
                                @click="expvt"
                            />
                            <v-list-item
                                title="PVMO Ruido"
                                value="ruido"
                                @click="exruido"
                            />
                            <v-list-item
                                title="PVMO Metales"
                                value="metales"
                                @click="exmetal"
                            />
                            <v-list-item
                                title="PVMO Humos Negros"
                                value="humos"
                                @click="exhumos"
                            />
                            <v-list-item
                                title="PVMO Aldehidos"
                                value="aldehidos"
                                @click="exaldehido"
                            />
                            <v-list-item
                                title="Alcohol y drogas"
                                value="alcohol"
                                @click="exalcohol"
                            />
                        </v-list-group>
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
