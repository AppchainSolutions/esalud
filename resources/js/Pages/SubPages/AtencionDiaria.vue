<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import {
    closeForm,
    fetchData,
    handleEditItem,
    handleRemoveItem,
    searchItemss,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/utils/helper.js";

defineOptions({ layout: AppLayout });

const store = useDataStore();
const nombre = store.getSelected.nombre;
const apellidos = store.getSelected.apellidos;
const state = reactive({
    endpoints: [
        "accidente",
        "accidente_condicion",
        "calificacion",
        "derivacion",
        "lugar_atencion",
        "medio_derivacion",
        "error_critico",
        "estado_mental",
        "fuente_incidente",
        "responsable",
        "sistema_afectado",
        "tipo_atencion",
        "tipo_licencia",
        "religion",
        "unidad",
        "turno",
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
    editedItem: {
        paciente_id: null,
        accidente_condicion: null,
        accidente: null,
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
    formTitle: "Atención diaria de Pacientes",
    formCrear: "Nueva Atención",
    formEdit: "Editar datos del atención diaria",
    urlShow: "/atencion_diaria/show",
    urlUpdate: "/atencion_diaria/update",
    urlDelete: "/atencion_diaria/delete",
    urlStore: "/atencion_diaria",
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
    await searchItemss(state);
};

function openFormCreate() {
    openToCreate(state);
}

function storeItems() {
    return state.editedIndex > -1 ? update() : create();
}

const create = async () => {
    await handleStoreItem(state, "create");
    closeForm(state);
};

function openFormEdit(item) {
    openToEdit(state, item, "edit");
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
        <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-2 pa-2'">
            <v-toolbar-title class="ma-4 pa-4">
                Información del Paciente: {{ apellidos }}, {{ nombre }}
            </v-toolbar-title>

            <v-data-table :headers="state.headers" :items="state.tableItems">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-btn variant="tonal" color="#009AA4" @click="volver">
                            Volver
                        </v-btn>
                        <v-toolbar-title>{{ state.formTitle }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn
                            icon="mdi-update"
                            variant="tonal"
                            class="ma-2"
                            color="#009AA4"
                            @click="handleShow"
                        >
                        </v-btn>
                        <v-btn
                            icon="mdi-account-multiple-plus"
                            variant="tonal"
                            class="ma-2"
                            color="#009AA4"
                            @click="openFormCreate"
                        >
                        </v-btn>
                        <v-dialog v-model="state.dialog">
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5"
                                        >{{ editedItemTitle }}
                                    </span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_atencion
                                                    "
                                                    label="Fecha de atención"
                                                    clearable
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-select
                                                    v-model="
                                                        state.editedItem.turno
                                                    "
                                                    :items="state.list.turno"
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Turno"
                                                    variant="underlined"
                                                ></v-select>

                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .sistema_afectado
                                                    "
                                                    :items="
                                                        state.list
                                                            .sistema_afectado
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Sistema afectado"
                                                    variant="underlined"
                                                ></v-select>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .derivacion
                                                    "
                                                    :items="
                                                        state.list.derivacion
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Derivación"
                                                    variant="underlined"
                                                ></v-select>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .medio_derivacion
                                                    "
                                                    :items="
                                                        state.list
                                                            .medio_derivacion
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Medio de derivación"
                                                    variant="underlined"
                                                ></v-select>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .fuente_incidente
                                                    "
                                                    :items="
                                                        state.list
                                                            .fuente_incidente
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Fuente de incidente"
                                                    variant="underlined"
                                                ></v-select>
                                            </v-col>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .motivo_consulta
                                                    "
                                                    label="Motivo de consulta"
                                                    clearable
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .acompanado
                                                    "
                                                    hide-details
                                                    class="ml-4"
                                                    variant="underlined"
                                                    color="green-darken-3"
                                                    inset
                                                    label="Acompañado"
                                                ></v-switch>

                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .accidente
                                                    "
                                                    :items="
                                                        state.list.accidente
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Accidente"
                                                    variant="underlined"
                                                ></v-select>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .medicamentos
                                                    "
                                                    label="Medicamento suministrados"
                                                    clearable
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .accidente_condicion
                                                    "
                                                    :items="
                                                        state.list
                                                            .accidente_condicion
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    label="Accidente ocurre por una acción o condición insegura"
                                                    clearable
                                                    variant="underlined"
                                                ></v-select>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .responsable
                                                    "
                                                    :items="
                                                        state.list.responsable
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Responsable"
                                                    variant="underlined"
                                                ></v-select>
                                            </v-col>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .hora_inicio
                                                    "
                                                    label="Hora de inicio"
                                                    clearable
                                                    type="time"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .nombre_supervisor
                                                    "
                                                    label="Nombre supervisor"
                                                    clearable
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .dias_descanso
                                                    "
                                                    label="Días de descanso"
                                                    clearable
                                                    type="number"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .at_realizada_por
                                                    "
                                                    label="Atención realizada por"
                                                    clearable
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .calificacion
                                                    "
                                                    :items="
                                                        state.list.calificacion
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Calificación"
                                                    variant="underlined"
                                                ></v-select>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .lugar_atencion
                                                    "
                                                    :items="
                                                        state.list
                                                            .lugar_atencion
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Lugar atención"
                                                    variant="underlined"
                                                ></v-select>
                                            </v-col>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .hora_termino
                                                    "
                                                    label="Hora de termino"
                                                    clearable
                                                    type="time"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .tipo_atencion
                                                    "
                                                    :items="
                                                        state.list.tipo_atencion
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Tipo de atención"
                                                    variant="underlined"
                                                ></v-select>

                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .tipo_licencia
                                                    "
                                                    :items="
                                                        state.list.tipo_licencia
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Tipo de Licencia"
                                                    variant="underlined"
                                                ></v-select>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .descripcion_breve
                                                    "
                                                    label="Descripción breve"
                                                    type="text"
                                                    clearable
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .estado_mental
                                                    "
                                                    :items="
                                                        state.list.estado_mental
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Estado Mental"
                                                    variant="underlined"
                                                ></v-select>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .error_critico
                                                    "
                                                    :items="
                                                        state.list.error_critico
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                    label="Error crítico"
                                                    variant="underlined"
                                                ></v-select>
                                            </v-col>
                                            <v-col>
                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .alerta_she
                                                    "
                                                    class="mt-2 mb-4"
                                                    label="Alerta SHE"
                                                    color="success"
                                                    hide-details
                                                    clearable
                                                    inset
                                                    variant="underlined"
                                                ></v-switch>
                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .cuenta_acr
                                                    "
                                                    class="mt-2 mb-4"
                                                    label="Cuenta ACR"
                                                    clearable
                                                    color="success"
                                                    hide-details
                                                    inset
                                                    variant="underlined"
                                                ></v-switch>

                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .derivacion_inmediata
                                                    "
                                                    class="mt-2 mb-4"
                                                    label="Derivación inmediata"
                                                    color="success"
                                                    hide-details
                                                    clearable
                                                    inset
                                                    variant="underlined"
                                                ></v-switch>
                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .declaracion_completa
                                                    "
                                                    class="mt-2 mb-4"
                                                    label="Declaración completa"
                                                    clearable
                                                    color="success"
                                                    hide-details
                                                    inset
                                                    variant="underlined"
                                                ></v-switch>

                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .puede_reintegrarse
                                                    "
                                                    class="mt-2 mb-4"
                                                    label="Puede reintegrarse"
                                                    clearable
                                                    color="success"
                                                    hide-details
                                                    inset
                                                    variant="underlined"
                                                ></v-switch>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="#009AA4"
                                        variant="tonal"
                                        @click="close"
                                    >
                                        Cancelar
                                    </v-btn>
                                    <v-btn
                                        color="#009AA4"
                                        variant="tonal"
                                        @click="storeItems"
                                    >
                                        Guardar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-tooltip text="Editar " location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                v-bind="props"
                                density="compact"
                                class="mr-2 ml-2"
                                color="#009AA4"
                                variant="tonal"
                                :icon="'mdi-account-edit'"
                                @click="openFormEdit(item)"
                            ></v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip text="Eliminar" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                v-bind="props"
                                density="compact"
                                class="mr-2 ml-2"
                                color="#009AA4"
                                variant="tonal"
                                :icon="'mdi-delete'"
                                @click="remove(item)"
                            ></v-btn>
                        </template>
                    </v-tooltip>
                </template>

                <template v-slot:no-data>
                    <v-btn variant="tonal" @click="handleShow"> Iniciar </v-btn>
                </template>
            </v-data-table>
        </v-sheet>
    </v-container>
</template>
