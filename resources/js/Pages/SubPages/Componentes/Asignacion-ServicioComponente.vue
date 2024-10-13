<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
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
    endpoints: ["especialidades"],

    headers: [
        {
            title: "#",
            align: "center",
            sortable: true,
            key: "paciente_id",
        },
        {
            title: "Motivo de consulta",
            align: "center",
            sortable: true,
            key: "motivo_consulta",
        },
        {
            title: "Accidente",
            align: "center",
            sortable: true,
            key: "accidente.descripcion",
        },
        { title: "Fecha atencion", key: "fecha_atencion", sortable: true },
        { title: "Acciones", align: "center", key: "actions" },
    ],
    horario: {
        headers: [
            {
                text: "Día de la semana",
                align: "center",
                sortable: true,
                value: "dia",
            },
            {
                text: "Hora inicio",
                align: "center",
                sortable: true,
                value: "horaInicio",
            },
            {
                text: "Hora término",
                align: "center",
                sortable: true,
                value: "horaTermino",
            },
            {
                text: "Disponible (S/N)",
                align: "center",
                sortable: true,
                value: "disponible",
            },
        ],
        items: [
            {
                dia: "Lunes",
                horaInicio: "08:00",
                horaTermino: "08:45",
                disponible: "S",
            },
            {
                dia: "Lunes",
                horaInicio: "09:00",
                horaTermino: "09:45",
                disponible: "S",
            },
            {
                dia: "Lunes",
                horaInicio: "09:45",
                horaTermino: "10:45",
                disponible: "N",
            },
            {
                dia: "Martes",
                horaInicio: "08:00",
                horaTermino: "08:45",
                disponible: "N",
            },
            {
                dia: "Miércoles",
                horaInicio: "09:00",
                horaTermino: "09:45",
                disponible: "S",
            },
            {
                dia: "Miércoles",
                horaInicio: "09:45",
                horaTermino: "10:45",
                disponible: "S",
            },
        ],
    },
    editedItem: {
        paciente_id: null,
        acompanado: null,
        alerta_she: null,
        at_realizada_por: null,
        calificacion: null,
        comentario: null,
        cuenta_acr: null,
        declaracion_completa: null,
        derivacion_inmediata: null,
        derivacion: null,
        descripcion_breve: null,
        dias_descanso: null,
        error_critico: null,
        estado_mental: null,
        fecha_atencion: null,
        fuente_incidente: null,
        hora_inicio: null,
        hora_termino: null,
        lugar_atencion: null,
        medicamentos: null,
        medio_derivacion: null,
        motivo_consulta: null,
        nombre_supervisor: null,
        puede_reintegrarse: null,
        RECA: null,
        responsable: null,
        sistema_afectado: null,
        tipo_atencion: null,
        tipo_licencia: null,
        turno: null,
    },

    defaultItem: {
        paciente_id: null,
        accidente_condicion: null,
        accidente: null,
        acompanado: false,
        alerta_she: false,
        at_realizada_por: null,
        calificacion: null,
        comentario: null,
        cuenta_acr: false,
        declaracion_completa: false,
        derivacion_inmediata: false,
        derivacion: null,
        descripcion_breve: null,
        dias_descanso: null,
        error_critico: null,
        estado_mental: null,
        fecha_atencion: null,
        fuente_incidente: null,
        hora_inicio: null,
        hora_termino: null,
        lugar_atencion: null,
        medicamentos: null,
        medio_derivacion: null,
        motivo_consulta: null,
        nombre_supervisor: null,
        puede_reintegrarse: false,
        responsable: null,
        RECA: null,
        sistema_afectado: null,
        tipo_atencion: null,
        tipo_licencia: null,
        turno: null,
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
    formTitle: "Asignación de Servicio",
    formCrear: "Nueva atención",
    formEdit: "Editar datos",
    urlShow: "/asignacion_servicio/show",
    urlUpdate: "/asignacion_servicio/update",
    urlDelete: "/asignacion_servicio/delete",
    urlStore: "/asignacion_servicio",
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
</script>

<template>
    <v-container>
        <v-card>
            <v-card-title>Asignar Solicitud de Servicio</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6" :class="'ma-4 pa-4'">
                        <v-text-field
                            v-model="rut"
                            label="Número de Solicitud"
                            @blur="buscarPaciente"
                        ></v-text-field>
                        <v-row>
                        <v-btn
                            prepend-icon="mdi-account-multiple-plus"
                            variant="tonal"
                            class="ma-2"
                            color="#009AA4"
                            type="submit"
                        >
                            Asignar solicitud
                        </v-btn>
                        <v-btn
                            prepend-icon="mdi-account-multiple-plus"
                            variant="tonal"
                            class="ma-2"
                            color="#009AA4"
                            type="submit"
                        >
                            Buscar por Rut
                        </v-btn>
                    </v-row>
                        <v-select
                            :items="[
                                'Especialidad 1',
                                'Especialidad 2',
                                'Especialidad 3',
                            ]"
                            clearable
                            label="Especialidad"
                            variant="underlined"
                            single
                        ></v-select>
                        <v-select
                            :items="[
                                'Profesional 1',
                                'Profesional 2',
                                'Profesional 3',
                            ]"
                            clearable
                            label="Profesional"
                            variant="underlined"
                            single
                        ></v-select>

                        <v-select
                            clearable
                            chips
                            label="Contacto"
                            :items="[
                                'No responde 1 vez',
                                'No responde 2 veces',
                                'No conveniencia horaria 1',
                                'No conveniencia horaria 2',
                                'Inubicable / no contesta',
                            ]"
                            multiple
                        ></v-select>
                        <v-btn
                            color="#009AA4"
                            variant="tonal"
                            @click="sesiones"
                            class="ma-2"
                            prepend-icon="mdi-cancel"
                        >
                            Anular Servicio
                        </v-btn>

                        <v-btn
                            color="#009AA4"
                            variant="tonal"
                            @click="sesiones"
                            class="ma-2"

                            prepend-icon="mdi-check-decagram"
                        >
                            Asignar Servicio
                        </v-btn>

                        <v-alert
                            color="#2A3B4D"
                            density="compact"
                            icon="mdi-firework"
                            theme="dark"
                            class="mt-2"
                        >
                            El servicio ha sido asignado a Profesional 1 los
                            días Lunes de 09:00 a 09:45.
                        </v-alert>
                    </v-col>
                    <v-col>
                        <v-data-table
                            :headers="state.horario.headers"
                            :items="state.horario.items"
                            class="elevation-1"
                        >
                            <template v-slot:top>
                                <v-toolbar flat>
                                    <v-toolbar-title
                                        >Disponibilidad horaria del profesional</v-toolbar-title
                                    >
                                    <v-divider
                                        class="mx-4"
                                        inset
                                        vertical
                                    ></v-divider>
                                </v-toolbar>
                            </template>
                            <template v-slot:item.disponible="{ item }">
                                <v-chip
                                    :color="
                                        item.disponible === 'S'
                                            ? 'green'
                                            : 'red'
                                    "
                                    dark
                                >
                                    {{ item.disponible }}
                                </v-chip>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

// TODO: Definir el numero de sesiones total por defecto (12) y pregunte cuando necesite notificacion de término. 
// TODO: preguntar si desea egresar al paciente cuando la serie de sesiones al finalizar el máximo de sesiones por defecto