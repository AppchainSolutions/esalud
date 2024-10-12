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
/* const nombre = store.getSelected.nombre;
const apellidos = store.getSelected.apellidos; */
const state = reactive({
    endpoints: [

    ],
    atencion: {
        headers: [
            {
                title: "Nombre y apellido",
                align: "center",
                sortable: true,
                value: "paciente",
            },
            {
                title: "Motivo Consulta",
                align: "center",
                sortable: true,
                value: "motivoConsulta",
            },
            {
                title: "Fecha Solicitud",
                align: "center",
                sortable: true,
                value: "fechaSolicitud",
            },
            {
                title: "Tipo Sesion",
                align: "center",
                sortable: true,
                value: "tipoSesion", // TODO: esto vendría por defecto para todas las primeras sesiones
            },
            {
                title: "Avance",
                align: "center",
                sortable: true,
                value: "avanceSesion", //TODO: esto vendría por defecto para todas las primeras sesiones
            },
            { title: "Horario", key: "horario", sortable: true },
            { title: "Acciones", align: "center", key: "actions" },
        ],
        items: [
            {
                paciente: "Pedro Castillo",
                motivoConsulta: "Crisis de panico",
                fechaSolicitud: "12/01/2024",
                avanceSesion: "2/12",
                tipoSesion: "Evaluación diagnóstica",
                horario: "Lunes: 14:00 - 14:45",
            },
            {
                paciente: "Juana Gómez",
                motivoConsulta: "No puede dormir",
                fechaSolicitud: "20/03/2024",
                avanceSesion: "1/12",
                tipoSesion: "Nuevo Ingreso",
                horario: "Lunes: 15:00 - 15:45",
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


function atencionPsicologica (item) {
    router.get('psicologia.atencion', {
        data: item
    });
}
function psicologiaSesiones (item) {
    router.get('psicologia-sesiones');
}


</script>

<template>
    <v-container>
        <v-card>
            <v-card-title>Pacientes asignado para atención psicológica</v-card-title>
            <v-card-text>
                <v-sheet color="gray" :elevation="1" :class="'rounded-lg ma-4 pa-6'">
                    <v-row>
                        <v-col>
                            <h3>Profesional:</h3>
                            Tapia, Jorge
                            <h4>Especialidad:</h4>
                            Psicología
                        </v-col>

                        <v-col>
                            <h4>Horarios asignados:</h4>
                            <ol :class="'ml-4'">
                                <li>Lunes: 08:00 - 17:00</li>
                                <li>Martes: 08:00 - 17:00</li>
                                <li>Miércoles: 08:00 - 17:00</li>
                                <li>Jueves: 08:00 - 17:00</li>
                                <li>Viernes: 08:00 - 17:00</li>
                            </ol>
                        </v-col>
                        <v-col>
                            <h4>Horarios disponibles:</h4>
                            <ol :class="'ml-4'">
                                <li>Lunes: 08:00 - 17:00</li>
                                <li>Jueves: 08:00 - 17:00</li>
                            </ol>
                        </v-col>
                        <v-col>
                            <h4>Fecha: 03/10/2024</h4>
                            <h4>Hora actual: 10:30</h4>
                            <h4>Hora inicio: 10:00 - 10:45</h4>
                        </v-col>
                    </v-row>
                </v-sheet>
                <v-sheet color="gray" :elevation="1" :class="'rounded-lg ma-4 pa-6'">
                    <v-row>
                        <v-col>
                            <v-data-table :headers="state.atencion.headers" :items="state.atencion.items"
                                class="elevation-1">
                                <template v-slot:top>
                                    <v-toolbar flat>
                                        <v-toolbar-title>Pacientes asignados</v-toolbar-title>
                                        <v-divider class="mx-4" inset vertical></v-divider>
                                    </v-toolbar>
                                </template>
                                <template v-slot:item.actions="{ item }">
                                    <v-tooltip text="Sesiones de atención psicológica" location="top">
                                        <template v-slot:activator="{ props }">
                                            <v-btn v-bind="props" density="compact" color="#009AA4" class="mr-2 ml-2"
                                                variant="tonal" :icon="'mdi-head-cog'"
                                                @click="psicologiaSesiones(item)"></v-btn>
                                        </template>
                                    </v-tooltip>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-card-text>
        </v-card>
    </v-container>
</template>
