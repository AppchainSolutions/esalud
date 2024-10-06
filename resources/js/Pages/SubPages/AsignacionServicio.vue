<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import {
    closeForm,
    fetchData,
    handleEditItem,
    handleRemoveItem,
    handleShowItem,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/helper.js";

defineOptions({ layout: AppLayout });

const store = useDataStore();
const nombre = store.getSelected.nombre;
const apellidos = store.getSelected.apellidos;
const state = reactive({
    endpoints: [
/*         "servicio",
        "profesional",
        "horarios_disponibles", */
    ],

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
            { text: 'Día de la semana', align: 'center', sortable: true, value: 'dia' },
            { text: 'Hora inicio', align: 'center', sortable: true, value: 'horaInicio' },
            { text: 'Hora término', align: 'center', sortable: true, value: 'horaTermino' },
            { text: 'Disponible (S/N)', align: 'center', sortable: true, value: 'disponible' }
        ],
        items: [
            { dia: 'Lunes', horaInicio: '08:00', horaTermino: '17:00', disponible: 'S' },
            { dia: 'Martes', horaInicio: '08:00', horaTermino: '17:00', disponible: 'N' }
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
    state.list = await fetchData(state.endpoints);
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
        <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-4 pa-6'">
            <h2>{{ state.formTitle }}</h2>
            <v-spacer></v-spacer>
            <v-btn prepend-icon="mdi-file-search" variant="tonal" class="ma-2" color="#009AA4"
                :loading="state.loadingSearch" type="submit" @click="show">
                Guardar
            </v-btn>
            <v-btn prepend-icon="mdi-backup-restore" variant="tonal" class="ma-2" color="#009AA4"
                :loading="state.loadingSearch" type="submit" @click="volver">
                Volver
            </v-btn>
            <br>
            Paciente: {{ apellidos }}, {{ nombre }}
            <v-row>

                <v-col cols="6" :class="'ma-4 pa-4'">
                    <v-select :items="[
                        'Especialidad 1',
                        'Especialidad 2',
                        'Especialidad 3',
                    ]" clearable label="Especialidad" variant="underlined" single></v-select>
                    <v-select :items="[
                        'Profesional 1',
                        'Profesional 2',
                        'Profesional 3',
                    ]" clearable label="Profesional" variant="underlined" single></v-select>
                    <v-select :items="[
                        'Box 1',
                        'Box 2',
                        'Box 3',
                    ]" clearable label="Box" variant="underlined" single></v-select>
                    <v-select clearable chips label="COntacto"
                        :items="['No responde', 'No desea servicio', 'Inubicable', 'Otro']" multiple></v-select>
                </v-col>
                <v-col>

                    <v-data-table :headers="state.horario.headers" :items="state.horario.items" class="elevation-1">
                        <template v-slot:top>
                            <v-toolbar flat>
                                <v-toolbar-title>Disponibilidad horaria</v-toolbar-title>
                                <v-divider class="mx-4" inset vertical></v-divider>
                            </v-toolbar>
                        </template>
                        <template v-slot:item.disponible="{ item }">
                            <v-chip :color="item.disponible === 'S' ? 'green' : 'red'" dark>
                                {{ item.disponible }}
                            </v-chip>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>


        </v-sheet>
    </v-container>
</template>