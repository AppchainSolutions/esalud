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

    formItems: [
        {
            name: "apellidos",
            label: "Apellidos",
            type: "text",
            required: true,
            row: 1
        },
        {
            name: "apellidos_responsable",
            label: "Apellidos Responsable",
            type: "text",
            required: false,
            row: 2
        },
        {
            name: "calles_id",
            label: "Calles ID",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "calles_responsable_id",
            label: "Calles Responsable ID",
            type: "text",
            required: false,
            row: 2
        },
        {
            name: "ciudad_responsable",
            label: "Ciudad Responsable",
            type: "text",
            required: false,
            row: 2
        },
        { name: "ciudad", label: "Ciudad", type: "text", required: false },
        {
            name: "comunidad_lgbtq",
            label: "Comunidad LGBTQ",
            type: "switch",
            required: false,
            row: 1
        },
        {
            name: "comunidad_lgbtq_responsable",
            label: "Comunidad LGBTQ Responsable",
            type: "switch",
            required: false,
            row: 2
        },
        {
            name: "credencial_discapacidad_responsable",
            label: "Credencial Discapacidad Responsable",
            type: "switch",
            required: false,
            row: 2
        },
        {
            name: "credencial_discapacidad",
            label: "Credencial Discapacidad",
            type: "switch",
            required: false,
            row: 1
        },
        {
            name: "direccion_responsable",
            label: "Dirección Responsable",
            type: "text",
            required: false,
            row: 2
        },
        {
            name: "direccion",
            label: "Dirección",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "donante_responsable",
            label: "Donante Responsable",
            type: "switch",
            required: false,
            row: 2
        },
        { name: "donante", label: "Donante", type: "switch", required: false },
        {
            name: "edad_responsable",
            label: "Edad Responsable",
            type: "number",
            required: false,
            row: 2
        },
        { name: "edad", label: "Edad", type: "number", required: false, row: 1 },
        {
            name: "email_responsable",
            label: "Email Responsable",
            type: "email",
            required: false,
            row: 2
        },
        { name: "email", label: "Email", type: "email", required: false },
        {
            name: "establecimiento_educacional_id",
            label: "Establecimiento Educacional ID",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "estado_civil_id",
            label: "Estado Civil ID",
            type: "select",
            required: false,
            items: ["Soltero", "Casado", "Divorciado"],
            row: 1
        },
        {
            name: "estado_civil_responsable_id",
            label: "Estado Civil Responsable ID",
            type: "select",
            required: false,
            items: ["Soltero", "Casado", "Divorciado"],
            row: 2
        },
        {
            name: "fecha_nacimiento_responsable",
            label: "Fecha Nacimiento Responsable",
            type: "date",
            required: false,
            row: 2
        },
        {
            name: "fecha_nacimiento",
            label: "Fecha Nacimiento",
            type: "date",
            required: false,
            row: 1
        },
        {
            name: "genero_id",
            label: "Género ID",
            type: "select",
            required: false,
            items: ["Masculino", "Femenino", "Otro"],
            row: 1
        },
        {
            name: "genero_responsable_id",
            label: "Género Responsable ID",
            type: "select",
            required: false,
            items: ["Masculino", "Femenino", "Otro"],
            row: 2
        },
        {
            name: "grupo_sanguineo_id",
            label: "Grupo Sanguíneo ID",
            type: "select",
            required: false,
            items: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
            row: 1
        },
        {
            name: "grupo_sanguineo_responsable_id",
            label: "Grupo Sanguíneo Responsable ID",
            type: "select",
            required: false,
            items: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
            row: 2
        },
        {
            name: "nacionalidad_id",
            label: "Nacionalidad ID",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "nacionalidad_responsable_id",
            label: "Nacionalidad Responsable ID",
            type: "text",
            required: false,
            row: 2
        },
        {
            name: "nivel_instruccion_id",
            label: "Nivel Instrucción ID",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "nivel_instruccion_responsable_id",
            label: "Nivel Instrucción Responsable ID",
            type: "text",
            required: false,
            row: 2
        },
        {
            name: "nombre_responsable",
            label: "Nombre Responsable",
            type: "text",
            required: false,
            row: 2
        },
        { name: "nombre", label: "Nombre", type: "text", required: false },
        {
            name: "ocupacion_responsable",
            label: "Ocupación Responsable",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "ocupacion",
            label: "Ocupación",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "parentesco_responsable",
            label: "Parentesco Responsable",
            type: "text",
            required: false,
            row: 2
        },

        {
            name: "pertenece_pie",
            label: "Pertenece PIE",
            type: "switch",
            required: false,
            row: 1
        },
        {
            name: "prevision_id",
            label: "Previsión ID",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "prevision_responsable_id",
            label: "Previsión Responsable ID",
            type: "text",
            required: false,
            row: 2
        },
        { name: "profesor", label: "Profesor", type: "text", required: false },
        {
            name: "pueblo_originario_id",
            label: "Pueblo Originario ID",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "pueblo_originario_responsable_id",
            label: "Pueblo Originario Responsable ID",
            type: "text",
            required: false,
            row: 2
        },
        {
            name: "religion_id",
            label: "Religión ID",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "religion_responsable_id",
            label: "Religión Responsable ID",
            type: "text",
            required: false,
            row: 2
        },
        {
            name: "rut_responsable",
            label: "RUT Responsable",
            type: "text",
            required: false,
            row: 1
        },
        { name: "rut", label: "RUT", type: "text", required: false },
        {
            name: "telefono_responsable",
            label: "Teléfono Responsable",
            type: "text",
            required: false,
            row: 2
        },
        {
            name: "telefono1",
            label: "Teléfono 1",
            type: "text",
            required: false,
            row: 1
        },
        {
            name: "telefono2",
            label: "Teléfono 2",
            type: "text",
            required: false,
            row: 1
        },
    ],

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
 * Initiates a search operation using the current search query and route.
 * Updates the table items with the search results and manages the loading state.
 * Logs the search query and the retrieved data.
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

/**
 * Guarda la información de un formulario en un objeto formData.
 *
 * @description Itera sobre los elementos del formulario y los agrega al objeto formData.
 *              Luego, puedes manejar formData como desees, por ejemplo, enviándolo a una API.
 */
async function saveForm() {
    const formData = {};
    this.formItems.forEach((item) => {
        formData[item.name] = item.value;
    });
    console.log(formData); // Aquí puedes enviar formData a tu API o manejarlo como necesites
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
