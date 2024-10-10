<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import { router } from "@inertiajs/vue3";
import {
    closeForm,
    fetchAllData,
    handleEditItem,
    handleRemoveItem,
    handleShowItem,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/helper.js";

defineOptions({ layout: AppLayout });

const store = useDataStore();
const state = reactive({
    endpoints: [],
    atencion: {
        headers: [
            {
                title: "Fecha",
                align: "center",
                sortable: true,
                value: "fecha",
            },
            {
                title: "Horarios",
                align: "center",
                sortable: true,
                value: "horarios",
            },
            {
                title: "Sesión N°",
                align: "center",
                sortable: true,
                value: "sesionNum",
            },
            {
                title: "Tipo Sesion",
                align: "center",
                sortable: true,
                value: "tipoSesion", // TODO: esto vendría por defecto para todas las primeras sesiones
            },
            {
                title: "Asiste",
                align: "center",
                sortable: true,
                value: "asiste", //TODO: esto vendría por defecto para todas las primeras sesiones
            },

            { title: "Acciones", align: "center", key: "actions" },
        ],
        items: [
            {
                fecha: "Lunes 03/02/2025",
                horarios: "09:00-09:45",
                sesionNum: "1/12",
                tipoSesion: "Evaluación diagnóstica",
                asiste: "Si",
            },
            {
                fecha: "Lunes 10/02/2025",
                horarios: "09:00-09:45",
                sesionNum: "2/12",
                tipoSesion: "Consulta",
                asiste: "Pendiente",
            },
            {
                fecha: "Lunes 17/02/2025",
                horarios: "09:00-09:45",
                sesionNum: "3/12",
                tipoSesion: "Consulta",
                asiste: "Pendiente",
            },
            {
                fecha: "Lunes 24/02/2025",
                horarios: "09:00-09:45",
                sesionNum: "4/12",
                tipoSesion: "Consulta",
                asiste: "Pendiente",
            },
        ],
    },

    horario: {
        headers: [
            {
                title: "Día de la semana",
                align: "center",
                sortable: true,
                value: "dia",
            },
            {
                title: "Hora inicio",
                align: "center",
                sortable: true,
                value: "horaInicio",
            },
            {
                title: "Hora término",
                align: "center",
                sortable: true,
                value: "horaTermino",
            },
            {
                title: "Disponible (S/N)",
                align: "center",
                sortable: true,
                value: "disponible",
            },
        ],
        items: [
            {
                dia: "Lunes",
                horaInicio: "08:00",
                horaTermino: "17:00",
                disponible: "S",
            },
            {
                dia: "Martes",
                horaInicio: "08:00",
                horaTermino: "17:00",
                disponible: "N",
            },
        ],
    },
    editedItem: {
        paciente_id: null,
    },

    defaultItem: {
        paciente_id: null,
    },
    searchQuery: {
        paciente_id: null,
    },
    dialog: false,
    tableItems: [],
    editedIndex: -1,
    list: [],
    loading: false,
    valid: null,
});

//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    state.list = await fetchAllData(state.endpoints);
});

//**********\\\\  COMPUTE PROPERTIES ////*************/
const editedItemTitle = computed(() =>
    state.editedIndex === -1 ? state.formCrear : state.formEdit
);

//**********\\\\ METHODS ////*************/
function volver() {
    window.history.back();
}
function close() {
    closeForm(state);
}
//**********\\\\  CRUD ////*************/
const handleShow = async () => {
    state.searchQuery.paciente_id = store.getSelected.id;
    await handleShowItem(state);
};

function openFormCreate() {
    openToCreate(state);
}

function storeItems() {
    return state.editedIndex > -1 ? update() : create();
}

const create = async () => {
    await handleStoreItem(state);
    closeForm(state);
};

function openFormEdit(item) {
    openToEdit(state, item);
}

const update = async () => {
    await handleEditItem(state);
    closeForm(state);
};

const remove = async (item) => {
    await handleRemoveItem(state, item);
};

function registroSesionPsicologia(item) {
    router.get("/psicologia-registro-sesion");
}
</script>

<template>
    <v-container>
        <template>
            <v-breadcrumbs :items="items">
                <template v-slot:prepend>
                    <v-icon icon="$vuetify" size="small"></v-icon>
                </template>
            </v-breadcrumbs>
        </template>
        <v-card>
            <v-card-text>
                <v-row class="mb-4">
                        <div class="text-h4 ma-2 pa-2">Sesiones asignadas por paciente: Patricio Navia</div>
                        <v-expansion-panels>
                            <v-expansion-panel title="Atención Psicología" color="teal">
                                <v-expansion-panel-text>
                                    <v-row>
                                        <v-col>
                                            <h3>
                                                Horarios asignados al paciente:
                                            </h3>
                                            <ol :class="'ml-4'">
                                                <li>Lunes: 08:00 - 17:00</li>
                                            </ol>
                                        </v-col>
                                        <v-col>
                                            <h3>Fecha: 03/10/2024</h3>
                                            <h3>Hora actual:</h3>
                                            08:30
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>

                    <v-row class="mb-4">
                        <v-expansion-panels>
                            <v-expansion-panel title="Ficha Psicológica del Paciente" color="teal">
                                <v-expansion-panel-text>
                                    <v-row>
                                        <v-col>
                                            <v-file-input clearable label="Subir Genograma"></v-file-input>
                                            <v-file-input clearable label="Subir Ecograma"></v-file-input>
                                            Factores Riesgo Factores Protectores
                                            Red de apoyo profesional
                                            ANtecedentes mórbidos familiares
                                        </v-col>
                                        <v-col>
                                            Tratamientos anteriores Tramientos
                                            actuales Tratamiento farmacológico
                                            Tratamiento de apoyo comunal
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>

                    <v-row class="mb-4">
                        <v-expansion-panels>
                            <v-expansion-panel title="Plan de Trabajo" color="teal">
                                <v-expansion-panel-text>
                                    <v-row>
                                        <v-col>
                                            <v-textarea title="Motivo de consulta" label="Motivo de Consulta" clearable
                                                class="ma-4 pa-4" rows="2">
                                                Modelo de trabajo
                                            </v-textarea>

                                            <v-select clearable label="Diagnóstico DSM V - CIE11 (Salud Mental)"
                                                class="ma-4 pa-4" variant="underlined" single></v-select>
                                            <v-select clearable label="Objetivos de la Terapia" class="ma-4 pa-4"
                                                variant="underlined" multiple chips></v-select>
                                        </v-col>
                                        <v-col>
                                            <v-textarea title="Problemas que afectan al paciente"
                                                label="Problemas que afectan al paciente" clearable class="ma-4 pa-4"
                                                rows="2">
                                                Problemas
                                            </v-textarea>
                                            <v-textarea title="Factores de Riesgo / VUlnearibilidades"
                                                label="Factores de Riesgo / VUlnearibilidades" clearable
                                                class="ma-4 pa-4" rows="2">
                                                Factores de Riesgo
                                            </v-textarea>
                                            <v-textarea title="Facilitadores" label="Facilitadores" clearable
                                                class="ma-4 pa-4" rows="2">
                                                Facilitadores
                                            </v-textarea>
                                            <v-textarea title="Obstaculizadores" label="Obstaculizadores" clearable
                                                class="ma-4 pa-4" rows="2">
                                                Obstaculizadores
                                            </v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>

                    <v-row class="mb-4">
                        <v-expansion-panels>
                            <v-expansion-panel title="Sesiones de atención psicológica asiganadas al paciente"
                                color="teal">
                                <v-expansion-panel-text>
                                    <v-col>
                                        <v-data-table :headers="state.atencion.headers" :items="state.atencion.items"
                                            class="elevation-1">
                                            <template v-slot:top>
                                                <v-toolbar flat>
                                                    <v-toolbar-title>Sesiones
                                                        asignadas</v-toolbar-title>
                                                    <v-divider class="mx-4" inset vertical></v-divider>
                                                </v-toolbar>
                                            </template>

                                            <template v-slot:item.actions="{ item }">
                                                <v-tooltip text="Registro de la sesión" location="top">
                                                    <template v-slot:activator="{
                                                        props,
                                                    }">
                                                        <v-btn v-bind="props" density="compact" color="#009AA4"
                                                            class="mr-1 ml-1" variant="tonal"
                                                            :icon="'mdi-notebook-check'" @click="
                                                                registroSesionPsicologia(
                                                                    item
                                                                )
                                                                "></v-btn>
                                                    </template>
                                                </v-tooltip>
                                                <v-tooltip text="Ver registro" location="top">
                                                    <template v-slot:activator="{
                                                        props,
                                                    }">
                                                        <v-btn v-bind="props" density="compact" color="#009AA4"
                                                            class="mr-1 ml-1" variant="tonal"
                                                            :icon="'mdi-eye-plus-outline'" @click="
                                                                registroSesionPsicologia(
                                                                    item
                                                                )
                                                                "></v-btn>
                                                    </template>
                                                </v-tooltip>
                                            </template>
                                        </v-data-table>
                                    </v-col>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
