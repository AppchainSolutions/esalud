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
                value: "tipoSesion", //TODO: esto vendría por defecto para todas las primeras sesiones
            },
            { title: "Horario", key: "horario", sortable: true },
            { title: "Acciones", align: "center", key: "actions" },
        ],
        items: [
            {
                paciente: 'Pedro Castillo', motivoConsulta: 'Crisis de panico', fechaSolicitud: '12/01/2024', tipoSesion: "Evaluación diagnóstica", horario: "Lunes: 14:00 - 14:45"
            }
        ]
    },

    horario: {
        headers: [
            { title: 'Día de la semana', align: 'center', sortable: true, value: 'dia' },
            { title: 'Hora inicio', align: 'center', sortable: true, value: 'horaInicio' },
            { title: 'Hora término', align: 'center', sortable: true, value: 'horaTermino' },
            { title: 'Disponible (S/N)', align: 'center', sortable: true, value: 'disponible' }
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

function sesiones(item) {
    store.selected = item;
    try {
        router.get("/sesiones");
    } catch (error) {
        console.error("An error occurred while fetching daily attention data.");
    }
}

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
            <v-btn color="#009AA4" variant="tonal" @click="sesiones">
                +
            </v-btn>

            <v-sheet color="gray" :elevation="1" :class="'rounded-lg ma-4 pa-6'">
                <v-row>
                    <v-col>
                        <h3>Profesional:</h3> Tapia, Jorge
                        <h4>Especialidad:</h4> Psicología
                        <br>

                        TODO: Acá pueden ir los pacientes totales del profesional o solamente los que les
                        corresponde para ese día o tener opcion de switch entre todos S/N

                    </v-col>
                    <v-col>
                        <h4>Horarios asignados: </h4>
                        <ol :class="'ml-4'">
                            <li>Lunes: 08:00 - 17:00</li>
                            <li>Martes: 08:00 - 17:00</li>
                            <li>Miércoles: 08:00 - 17:00</li>
                            <li>Jueves: 08:00 - 17:00</li>
                            <li>Viernes: 08:00 - 17:00</li>
                        </ol>
                    </v-col>
                    <v-col>
                        <h4>Horarios disponibles: </h4>
                        <ol :class="'ml-4'">
                            <li>Lunes: 08:00 - 17:00</li>
                            <li>Jueves: 08:00 - 17:00</li>
                        </ol>
                    </v-col>
                    <v-col>
                        <h4>Fecha: 03/10/2024</h4>
                        <h4>Hora actual: 10:30</h4>
                        <h4>Hora inicio: 10:00 - 10:45</h4>
                        <v-line></v-line>
                        <v-textarea clearable label="Nota rápida:"></v-textarea>
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
                            <template v-slot:item.disponible="{ item }">
                                <v-chip :color="item.disponible === 'S' ? 'green' : 'red'" dark>
                                    {{ item.disponible }}
                                </v-chip>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>


            </v-sheet>
        </v-sheet>
    </v-container>
</template>