<script setup>
import AppLayout from "../Layouts/AppLayout.vue";
import { reactive, onMounted } from "vue";
import { useLogger } from "vue-logger-plugin";
import { fetchAllData, handleSearchItem } from "../helper.js";
import TableAction from "./SubPages/Componentes/TableAction.vue";
import { router } from '@inertiajs/vue3';

defineOptions({ layout: AppLayout });

//const store = useDataStore();
const logger = useLogger();
const state = reactive({
    
    endpoints: [
        "calles",
        "estados_civiles",
        "establecimientos_educacionales",
        "generos",
        "grupos_sanguineos",
        "nacionalidades",
        "niveles_instruccion",
        "previsiones",
        "pueblos_originarios",
        "religiones",
    ],

    headers: [
        { title: "Rut", align: "center", sortable: true, key: "rut" },
        { title: "Nombre", align: "center", sortable: true, key: "nombre" },
        {
            title: "Apellidos",
            align: "center",
            sortable: true,
            key: "apellidos",
        },
        {
            title: "Edad",
            align: "center",
            sortable: true,
            key: "edad",
        },
        {
            title: "Telefono contacto",
            align: "center",
            sortable: true,
            key: "telefono1",
        },
        { title: "Acciones", sortable: false, align: "center", key: "actions" },
    ],

    searchQuery: {
        id: null,
        rut: null,
        rut_responsable: null,
        establecimiento_educacional_id: null,
    },

    config: {
        formName: "frmPacientes",
        formItems: [],
        editedIndex: -1,
        loading: false,
        tableItems: [],
        formCrear: "Nuevo Paciente",
        formEdit: "Editar datos del Paciente",
        formTitle: "Gestión de Pacientes",
        list: [],
        route: "paciente",
    },
});

/**
 * Fetches all data from the specified endpoints and updates the list configuration.
 * Logs the retrieved endpoints using the logger.
 */
onMounted(async () => {
    try {
        state.config.list = await fetchAllData(state.endpoints);
    } catch (error) {
        logger.error("Error loading endpoints:", error);
    }
});

/**
 * Initiates a search operation using the current search query and route.
 * Updates the table items with the search results and manages the loading state.
 * Logs the search query and the retrieved data.
 *
 * @returns {Promise<void>}
 */
async function buscar() {
    state.config.loading = true;
    state.config.tableItems = await handleSearchItem(
        state.searchQuery,
        state.config.route,
    );
    state.config.loading = false;
}

const formCreate = () => {
    try {
        const result = router.get('paciente/create', { 
            form_title: "Nuevo paciente",
            form_id: "frmPacientes"
        });
        logger.log('result', result);
    } catch (error) {
        logger.error("Error loading form items:", error);
    }
};
</script>

<template>
    <v-sheet :elevation="4" :class="'rounded-lg ma-2 pa-2'">
        <v-expansion-panels>
            <v-expansion-panel title="Ficha de Pacientes" id="ficha" color="#009AA4">
                <v-expansion-panel-text>
                    <v-form fast-fail @submit.prevent>
                        <v-row>
                            <v-col>
                                <v-text-field v-model="state.searchQuery.rut" label="Rut del paciente * (12345678-9)"
                                    class="ma-2" type="text" variant="underlined" clearable></v-text-field>

                                <v-text-field v-model="state.searchQuery.rut_responsable" label="Rut persona encargada"
                                    class="ma-2" type="text" variant="underlined" clearable></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select :items="state.config.list
                                        .establecimientos_educacionales
                                    " item-title="descripcion" item-value="id" v-model="state.searchQuery
                                            .establecimiento_educacional_id
                                        " clearable label="Establecimiento Educacional" class="ma-2" variant="underlined"
                                    single />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-btn prepend-icon="mdi-file-search" variant="tonal" class="ma-4" color="#009AA4"
                                type="submit" @click="buscar" :loading="state.config.loading">
                                Buscar
                            </v-btn>

                            <v-btn prepend-icon="mdi-cloud-download" variant="tonal" class="ma-4" color="#009AA4">
                                <download-excel :data="state.tableItems" name="consulta_paciente.xls">
                                    Bajar archivo
                                </download-excel>
                            </v-btn>
                        </v-row>
                    </v-form>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-sheet color="white" :elevation="4" :class="'rounded-lg mt-4'">
            <v-data-table :headers="state.headers" :items="state.config.tableItems">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-btn icon="mdi-account-multiple-plus" variant="tonal" class="ma-2" color="#009AA4"
                            @click="formCreate">
                        </v-btn>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                    <table-action :items="item" :icon="'mdi-stethoscope'" :title="'Ficha Medica'"
                        :action-type="'editarFichaMedica'" />
                    <table-action :items="item" :icon="'mdi-account-edit-outline'" :title="'Ficha Personal'"
                        :action-type="'editarFichaPersonal'" />
                    <table-action :items="item" :icon="'mdi-delete-outline'" :title="'Borrar registro'"
                        :action-type="'eliminarRegistro'" />
                </template>
            </v-data-table>
        </v-sheet>
    </v-sheet>
</template>
