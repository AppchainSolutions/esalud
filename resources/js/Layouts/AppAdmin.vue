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
        
        crear_equipo() {
            router.get("admin/equipo/crear");
        },

        configurar_equipo() {
            router.get("admin/equipo/config");
        },

        perfil_usuario() {
            router.get("admin/usuario/perfil");
        },

        mantencion() {
            router.get("/mantencion");
        },

        salir() {
            localStorage.removeItem("auth_token");
            router.post("/logout");
        },
    },
};
</script>

<template>
    <v-app>
        <v-container fluid>
            <notifications position="bottom right" width="40%" />
            <v-card>
                <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" color="white">
                    <v-list-item nav class="mt-0">
                        <v-img :src="logo" id="logo"> </v-img>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list density="compact" nav>
                        <v-list-group value="admin" v-if="isAdmin">
                            <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props" title="Administración"
                                    prepend-icon="mdi-cog-outline"></v-list-item>
                            </template>
                             <v-list-item
                                prepend-icon="mdi-family-tree"
                                title="Roles"
                                value="roles"
                                @click="roles"
                            ></v-list-item>
                        </v-list-group>
                    </v-list>
                    <template v-slot:append>
                        <v-btn block color="#662d91" @click="salir">
                            <b><i class="mdi mdi-location-exit" style="font-size: 24px; color: white"></i></b>
                        </v-btn>
                    </template>
                </v-navigation-drawer>
            </v-card>
            <v-app-bar color="#009AA4">
                <v-app-bar-title>
                    <v-icon @click.stop="toggleBtn" class="ma-auto" size="x-large">{{ icon }}</v-icon>
                    Vulco - VitamHC
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

    /* default (blue) */
    /* background: #44a4fc;
    border-left: 5px solid #187fe7; */
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#00b7ea+0,009ec3+100;Blue+3D+%2315 */
    background: linear-gradient(to bottom,
            #00b7ea 0%,
            #006e87 70%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    border-left: 5px solid #003f7d;

    /* types (green, amber, red) */
    &.success {
        /* background: #68cd86;
        border-left-color: #42a85f; */
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#c9de96+0,8ab66b+44,398235+100;Green+3D+%233 */
        background: linear-gradient(to bottom,
                #c9de96 0%,
                #8ab66b 44%,
                #398235 100%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

        border-left-color: #05fb4b;
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
