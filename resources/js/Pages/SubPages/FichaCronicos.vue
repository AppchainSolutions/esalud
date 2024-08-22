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
        /*         "accidente",
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
        "turno", */
    ],

    headers: [
        {
            title: "Fecha control",
            align: "center",
            sortable: true,
            key: "fecha",
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" },
    ],
    editedItem: {
        paciente_id: null,
        fecha: null,
        pa: null,
        fc: null,
        fr: null,
        temp: null,
        peso: null,
        altura: null,
        imc: null,
        fecha_examenes: null,
        creatinina: null,
        vfg: null,
        glicemia: null,
        colesterol_total: null,
        trigliceridos: null,
        ldl: null,
        otro: null,
        recomendacion_medica: null,
        cambio_tratamiento: null,
        derivacion_especialista: null,
        comentario:null
        
    },

    defaultItem: {
        paciente_id: null,
        fecha: null,
        pa: null,
        fc: null,
        fr: null,
        temp: null,
        peso: null,
        altura: null,
        imc: null,
        creatinina: null,
        vfg: null,
        glicemia: null,
        colesterol_total: null,
        trigliceridos: null,
        ldl: null,
        otro: null,
        recomendacion_medica: null,
        cambio_tratamiento: null,
        derivacion_especialista: null,
        fecha_examenes: null,
        comentario:null,
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
    formTitle: "Ficha paciente crónico",
    formCrear: "Nuevo Registro",
    formEdit: "Editar datos del atención diaria",
    urlShow: "/ficha_cronicos/show",
    urlUpdate: "/ficha_cronicos/update",
    urlDelete: "/ficha_cronicos/delete",
    urlStore: "/ficha_cronicos",
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

function openProfile(item) {
    console.log(item.id)
    store.selected = item;
    try {
      router.get("ficha_cronicos/perfil");
    } catch (error) {
      console.error("An error occurred while fetching profile data.");
    }
   // openToEdit(state, item);
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
        <v-sheet color="white" :elevation="4" :class="'rounded-lg ma-2 pa-2'">
            <v-toolbar-title>
                Nombre del Paciente: {{ apellidos }}, {{ nombre }}
            </v-toolbar-title>

            <v-data-table :headers="state.headers" :items="state.tableItems">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-btn variant="tonal" color="#009AA4" @click="volver">
                            Volver
                        </v-btn>
                        <v-spacer> </v-spacer>
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
                                :icon="'mdi-list-box-outline'"
                                @click="openProfile(item)"
                            ></v-btn>
                        </template>
                    </v-tooltip>
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

            <v-dialog v-model="state.dialog" scrollable width="100%">
                <v-card>
                    <v-container class="ma-4 pa-2">
                        <v-card-title>
                            <span class="text-h5">{{ editedItemTitle }} </span>
                        </v-card-title>

                        <!-- Formulario -->
                        <v-card-text>
                            <v-row class="mt-2">
                                <v-col cols="2">
                                    <v-text-field
                                        v-model="state.editedItem.fecha"
                                        label="Fecha"
                                        clearable
                                        type="date"
                                        variant="underlined"
                                    ></v-text-field>
                                </v-col>
                                <v-col offset="6">
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="#009AA4"
                                        variant="tonal"
                                        @click="close"
                                        class="ma-1"
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
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="4">
                                    <v-div class="font-weight-black"
                                        >Signos Vitales</v-div
                                    >
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                v-model="state.editedItem.pa"
                                                label="PA"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="state.editedItem.fc"
                                                label="FC"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="state.editedItem.fr"
                                                label="FC"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="state.editedItem.temp"
                                                label="T°"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field
                                                v-model="state.editedItem.peso"
                                                label="Peso"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="
                                                    state.editedItem.altura
                                                "
                                                label="Altura"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="state.editedItem.imc"
                                                label="IMC"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="4">
                                    <v-div class="font-weight-black"
                                        >Exámenes recientes</v-div
                                    >
                                    <v-row>
                                        <v-col class="ma-2 pa-2">
                                            <v-text-field
                                                v-model="
                                                    state.editedItem
                                                        .fecha_examenes
                                                "
                                                label="Fecha exámenes"
                                                clearable
                                                type="date"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="
                                                    state.editedItem.creatinina
                                                "
                                                label="Creatinina"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="state.editedItem.vfg"
                                                label="VFG"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="
                                                    state.editedItem.glicemia
                                                "
                                                label="Glicemia"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                        </v-col>

                                        <v-col class="ma-2 pa-2">
                                            <v-text-field
                                                v-model="
                                                    state.editedItem
                                                        .colesterol_total
                                                "
                                                label="Colesterol total"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="
                                                    state.editedItem
                                                        .trigliceridos
                                                "
                                                label="Triglicéridos"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="state.editedItem.ldl"
                                                label="LDL"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="state.editedItem.otro"
                                                label="Otro"
                                                clearable
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col>
                                    <v-div class="font-weight-black"
                                        >Plan de acción</v-div
                                    >
                                    <v-textarea
                                        v-model="
                                            state.editedItem
                                                .recomendacion_medica
                                        "
                                        label="Recomendación Médica"
                                        clearable
                                        variant="underlined"
                                        rows="1"
                                        auto-grow
                                        shaped
                                    ></v-textarea>
                                    <v-text-field
                                        v-model="
                                            state.editedItem
                                                .cambio_tratamiento
                                        "
                                        label="Cambio de Tratamiento"
                                        clearable
                                        variant="underlined"
                                        rows="1"
                                        auto-grow
                                        shaped
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="
                                            state.editedItem
                                                .derivacion_especialista
                                        "
                                        label="Derivación a especialista"
                                        clearable
                                        variant="underlined"
                                        rows="1"
                                        auto-grow
                                        shaped
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="
                                            state.editedItem
                                                .comentario
                                        "
                                        label="Comentario"
                                        clearable
                                        variant="underlined"
                                        rows="1"
                                        auto-grow
                                        shaped
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-container>
                </v-card>
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<style>
table {
    width: 80%;
    /* Ancho total de la tabla */
    border-collapse: collapse;
    margin: auto;
    /* Centra la tabla en la página */
}

th,
td {
    padding: 15px;
    /* Espacio interno en cada celda */
    text-align: center;
    /* Centra el contenido dentro de las celdas */
    border: 1px solid #ddd;
    width: 100px;
    /* Ancho mínimo para cada columna */
}

th {
    background-color: #f2f2f2;
    /* Color de fondo para los encabezados */
}
</style>
