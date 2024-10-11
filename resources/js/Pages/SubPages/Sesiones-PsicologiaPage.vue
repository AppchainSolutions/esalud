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
    objetivos: [
  { "id": 1, "descripcion": "Acompañamiento en el proceso de duelo" },
  { "id": 2, "descripcion": "Desarrollar nuevas prácticas relacionales entre la familia" },
  { "id": 3, "descripcion": "Desarrollar técnicas de autorregulación emocional" },
  { "id": 4, "descripcion": "Disminuir sintomatología ansiosa" },
  { "id": 5, "descripcion": "Disminuir sintomatología depresiva" },
  { "id": 6, "descripcion": "Elaboración de la experiencia de separación de los padres" },
  { "id": 7, "descripcion": "Evaluación de competencias parentales" },
  { "id": 8, "descripcion": "Fomentar técnicas y conductas de autocuidado" },
  { "id": 9, "descripcion": "Fortalecer autoestima y autoconcepto" },
  { "id": 10, "descripcion": "Fortalecer competencias formativas" },
  { "id": 11, "descripcion": "Fortalecer competencias protectoras" },
  { "id": 12, "descripcion": "Fortalecer competencias reflexivas" },
  { "id": 13, "descripcion": "Fortalecer competencias vinculares" },
  { "id": 14, "descripcion": "Fortalecer tolerancia a la frustración" },
  { "id": 15, "descripcion": "Identificar situaciones que gatillen procesos ansiosos" },
  { "id": 16, "descripcion": "Mejorar la regulación emocional" },
  { "id": 17, "descripcion": "Propiciar habilidades para enfrentar los miedos nocturnos" },
  { "id": 18, "descripcion": "Psicoeducar habilidades parentales" },
  { "id": 19, "descripcion": "Psicoeducar sobre adolescencia y sexualidad" },
  { "id": 20, "descripcion": "Psicoeducar sobre ciclo vital personas mayores" },
  { "id": 21, "descripcion": "Disminuir síntomas ansiosos" },
  { "id": 22, "descripcion": "Fortalecer autoconcepto" },
  { "id": 23, "descripcion": "Fortalecer autoestima" },
  { "id": 24, "descripcion": "Fortalecer competencias sociales y/o habilidades interpersonales" },
  { "id": 25, "descripcion": "Propiciar la organización" }
],
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
                            <v-expansion-panel title="Atención Psicología" color="#009AA4">
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
                            <v-expansion-panel title="Ficha Psicológica del Paciente" color="#009AA4">
                                <v-expansion-panel-text>
                                    <v-row>
                                        <v-col>
                                            <v-text-field class="ma-2 pa-2" type="date" label="Fecha de Ingreso">
                                                
                                            </v-text-field>
                                            <v-textarea title="Motivo de consulta" label="Motivo de Consulta" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Motivo de consulta
                                            </v-textarea>

                                            <v-select clearable label="Diagnóstico DSM V - CIE11 (Salud Mental)"
                                                class="ma-2 pa-2" variant="underlined" single></v-select>
                                            <v-select :items="state.objetivos" :item-description="descripcion" clearable label="Objetivos de la Terapia" class="ma-2 pa-2"
                                                variant="underlined" multiple chips></v-select>
                                        </v-col>
                                        <v-col>

                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>

                    <v-row class="mb-4">
                        <v-expansion-panels>
                            <v-expansion-panel title="Plan de Trabajo" color="#009AA4">
                                <v-expansion-panel-text>
                                    <v-row>
                                        <v-col>
                                            <v-textarea title="Problemas que afectan al paciente"
                                                label="Problemas que afectan al paciente" clearable class="ma-2 pa-2"
                                                rows="1">
                                                Problemas
                                            </v-textarea>
                                            <v-file-input class="ma-2 pa-2" rows="1" clearable label="Subir Genograma"></v-file-input>
                                            <v-file-input class="ma-2 pa-2" rows="1" clearable label="Subir Ecograma"></v-file-input>
                                            <v-textarea title="Motivo de consulta" label="Factores de Riesgo" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Factores de Riesgo
                                            </v-textarea>
                                            <v-textarea title="Factores Protectores" label="Factores Protectores" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Factores Protectores
                                            </v-textarea>
                                            <v-textarea title="Facilitadores" label="Facilitadores" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Facilitadores
                                            </v-textarea>
                                            <v-textarea title="Obstaculizadores" label="Obstaculizadores" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Obstaculizadores
                                            </v-textarea>
                                            <v-select title="Red de apoyo profesional" multiple chips label="Red de apoyo profesional" clearable
                                                class="ma-2 pa-2" rows="1" :items="['Fonoaudiología', 'Terapia Ocupacional', 'Kinesiología', 'Kinesiología domiciliaria','Psicología', 'Terapia Floral']">
                                                Red de apoyo profesional
                                            </v-select>
                                        </v-col>

                                        <v-col>
                                            <v-textarea title="Antecedentes mórbidos familiares" label="Antecedentes mórbidos familiares" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Antecedentes mórbidos familiares
                                            </v-textarea>
                                            <v-textarea title="Tratamientos anteriores" label="Tratamientos anteriores" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Tratamientos anteriores
                                            </v-textarea>
                                            <v-textarea title=" Tratamientos actuales" label=" Tratamientos actuales" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Tratamientos actuales
                                            </v-textarea>
                                            <v-textarea title="Tratamientos famacológico" label="Tratamientos famacológico" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Tratamientos famacológico
                                            </v-textarea>
                                            <v-textarea title="Tratamientos de apoyo comunal" label="Tratamientos de apoyo comunal" clearable
                                                class="ma-2 pa-2" rows="1">
                                                Tratamientos de apoyo comunal
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
                                color="#009AA4">
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
