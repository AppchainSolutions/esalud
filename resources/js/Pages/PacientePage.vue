<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, ref, onMounted, computed } from "vue";
import { useLogger } from "vue-logger-plugin";
import DataTable from "./SubPages/Componentes/DataTableComponente.vue";

import {
    fetchAllData,
    handleRemoveItem,
    handleSearchItem,
    handleStoreItem,
    handleEditItem,
    closeForm,
    openToCreate,
    openToEdit,
} from "@/helper.js";

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

    /*     formFields: [
        {
            name: "field1",
            label: "Field 1",
            rules: [(v) => !!v || "Field 1 is required"],
        }, */
    //  { name: 'field2', label: 'Field 2', rules: [(v) => !!v || 'Field 2 is required'] },
    //  { name: 'field3', label: 'Field 3', rules: [(v) => !!v || 'Field 3 is required'] },
    // Add all fields that should be checked
    //],

    editedItem: {
        apellidos: null,
        apellidos_responsable: null,
        calles_id: null,
        calles_responsable_id: null,
        ciudad_responsable: null,
        ciudad: null,
        comunidad_lgbtq: null,
        comunidad_lgbtq_responsable: null,
        credencial_discapacidad_responsable: null,
        credencial_discapacidad: null,
        direccion_responsable: null,
        direccion: null,
        donante_responsable: null,
        donante: null,
        edad_responsable: null,
        edad: null,
        email_responsable: null,
        email: null,
        establecimiento_educacional_id: null,
        estado_civil_id: null,
        estado_civil_responsable_id: null,
        fecha_nacimiento_responsable: null,
        fecha_nacimiento: null,
        genero_id: null,
        genero_responsable_id: null,
        grupo_sanguineo_id: null,
        grupo_sanguineo_responsable_id: null,
        nacionalidad_id: null,
        nacionalidad_responsable_id: null,
        nivel_instruccion_id: null,
        nivel_instruccion_responsable_id: null,
        nombre_responsable: null,
        nombre: null,
        ocupacion_responsable: null,
        ocupacion: null,
        parentesco_responsable: null,
        password: null,
        pertenece_pie: null,
        prevision_id: null,
        prevision_responsable_id: null,
        profesor: null,
        pueblo_originario_id: null,
        pueblo_originario_responsable_id: null,
        religion_id: null,
        religion_responsable_id: null,
        rut_responsable: null,
        rut: null,
        telefono_responsable: null,
        telefono1: null,
        telefono2: null,
    },

    searchQuery: {
        id: null,
        rut: null,
        rut_responsable: null,
        establecimiento_educacional_id: null,
    },

    config: {
        editedIndex: -1,
        loading: false,
        tableItems: [],
        editedIndex: -1,
        formCrear: "Nuevo Paciente",
        formEdit: "Editar datos del Paciente",
        formItems: [],
        formTitle: "Gestión de Pacientes",
        list: [],
        route: "paciente",
    },
});

// const tableItems = reactive([]),

/**
 * Fetches all data from the specified endpoints and updates the list configuration.
 * Logs the retrieved endpoints using the logger.
 */
onMounted(async () => {
    const result = await fetchAllData(state.endpoints);
    state.config.list = result;
});

/**
 * Initiates a search operation based on the current search query and route.
 * Sets the loading state to true while the search is in progress and updates
 * the table items with the search results. Logs relevant information before
 * and after the search.
 *
 * @returns {Promise<void>}
 */
async function buscar() {
    state.config.loading = true;
    logger.info("Buscar", state.searchQuery);
    const data = await handleSearchItem(state.searchQuery, state.config.route);
    logger.info("Table Items", data);
    state.config.tableItems = data;
    state.config.loading = false;
}


</script>

<template>
    <v-sheet :elevation="4" :class="'rounded-lg ma-2 pa-2'">
        <v-expansion-panels>
            <v-expansion-panel title="Ficha de Pacientes" color="#009AA4">
                <v-expansion-panel-text>
                    <v-form fast-fail @submit.prevent>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="state.searchQuery.rut"
                                    label="Rut del paciente * (12345678-9)"
                                    class="ma-2"
                                    type="text"
                                    variant="underlined"
                                    clearable
                                ></v-text-field>

                                <v-text-field
                                    v-model="state.searchQuery.rut_responsable"
                                    label="Rut persona encargada"
                                    class="ma-2"
                                    type="text"
                                    variant="underlined"
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select
                                    :items="
                                        state.config.list
                                            .establecimientos_educacionales
                                    "
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="
                                        state.searchQuery
                                            .establecimiento_educacional_id
                                    "
                                    clearable
                                    label="Establecimiento Educacional"
                                    class="ma-2"
                                    variant="underlined"
                                    single
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-btn
                                prepend-icon="mdi-file-search"
                                variant="tonal"
                                class="ma-4"
                                color="#009AA4"
                                type="submit"
                                @click="buscar"
                                :loading="state.config.loading"
                            >
                                Buscar
                            </v-btn>

                            <v-btn
                                prepend-icon="mdi-cloud-download"
                                variant="tonal"
                                class="ma-4"
                                color="#009AA4"
                            >
                                <download-excel
                                    :data="state.tableItems"
                                    name="consulta_paciente.xls"
                                >
                                    Bajar archivo
                                </download-excel>
                            </v-btn>
                        </v-row>
                    </v-form>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        
        <v-sheet color="white" :elevation="4" :class="'rounded-lg mt-4'">
            <data-table :state="state" />
        </v-sheet>
    </v-sheet>
</template>
