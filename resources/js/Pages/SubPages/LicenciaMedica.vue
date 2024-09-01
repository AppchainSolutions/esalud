<script setup>
import { reactive, computed } from "vue";
import { useDataStore } from "@/store.js";
import {
    handleRemoveItem,
    handleShowItem,
    handleStoreItem,
    handleEditItem,
    closeForm,
    openToCreate,
    openToEdit,
} from "@/helper.js";

const store = useDataStore();
const state = reactive({
    headers: [
        {
            title: "Folio",
            align: "start",
            sortable: true,
            key: "folio",
        },
        {
            title: "Fecha emisión",
            align: "start",
            sortable: true,
            key: "fecha_emision",
        },
        {
            title: "Fecha recepción",
            align: "start",
            sortable: true,
            key: "fecha_recepcion",
        },
        {
            title: "Fecha inicio",
            align: "start",
            sortable: true,
            key: "fecha_inicio",
        },
        {
            title: "Fecha término",
            align: "start",
            sortable: true,
            key: "fecha_termino",
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" },
    ],
    editedItem: {
        paciente_id: null,
        folio: null,
        fecha_emision: null,
        fecha_recepcion: null,
        fecha_inicio: null,
        fecha_termino: null,
        caract_reposo: null,
        lugar_reposo: null,
        tipo_licencia: null,
        recuperabilidad_laboral: null,
        inicio_invalidez: null,
        titulo_profesional: null,
        nombre_profesional: null,
        comentario: null,
    },
    defaultItem: {
        paciente_id: null,
        folio: null,
        fecha_emision: null,
        fecha_recepcion: null,
        fecha_inicio: null,
        fecha_termino: null,
        caract_reposo: null,
        lugar_reposo: null,
        tipo_licencia: null,
        recuperabilidad_laboral: false,
        inicio_invalidez: false,
        titulo_profesional: null,
        nombre_profesional: null,
        comentario: null,
    },
    caract_reposo: [
        "Total",
        "Parcial - Mañana",
        "Parcial - Tarde",
        "Parcial - Noche",
    ],
    lugar_reposo: ["Domicilio", "Hospital", "Otro domicilio"],
    tipo_licencia: [
        "Accidente del trabajo o trayecto",
        "Enfermedad grave hijo menor de 1 año",
        "Enfermedad o accidente común",
        "Enfermedad profesional",
        "Licencia maternal pre y post natal",
        "Patología del embarazo",
        "Prorroga medicina preventiva",
    ],
    titulo_profesional: ["Médico", "Dentista", "Matrona"],
    searchQuery: {
        paciente_id: null,
    },
    dialog: false,
    tableItems: [],
    editedIndex: -1,
    list: [],
    valid: null,
    formTitle: "Licencias Médicas",
    formCrear: "Nueva Licencia Médica",
    formEdit: "Editar Licencia Médica",
    urlSearch: "/licencia/search",
    urlShow: "/licencia/show",
    urlUpdate: "/licencia/update",
    urlDelete: "/licencia/delete",
    urlStore: "/licencia",
});

//**********\\\\  COMPUTE PROPERTIES ////*************/
const editedItemTitle = computed(() =>
    state.editedIndex === -1 ? state.formCrear : state.formEdit
);

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
        <v-data-table :headers="state.headers" :items="state.tableItems">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>{{ state.formTitle }}</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="state.dialog">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                icon="mdi-update"
                                class="ma-2"
                                color="#009AA4"
                                variant="tonal"
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
                        </template>

                        <v-card>
                            <v-form>
                                <v-card-title>
                                    <span class="text-h5"
                                        >{{ editedItemTitle }}
                                    </span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>

                                        <!------------->
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.folio
                                                    "
                                                    label="Folio"
                                                    type="number"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_emision
                                                    "
                                                    label="Fecha emisión"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_recepcion
                                                    "
                                                    label="Fecha recepción"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_inicio
                                                    "
                                                    label="Fecha inicio"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_termino
                                                    "
                                                    label="Fecha de término"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .comentario
                                                    "
                                                    label="Comentario"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .caract_reposo
                                                    "
                                                    label="Características del reposo"
                                                    variant="underlined"
                                                    :items="state.caract_reposo"
                                                    clearable
                                                ></v-select>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .lugar_reposo
                                                    "
                                                    label="Lugar del reposo"
                                                    variant="underlined"
                                                    :items="state.lugar_reposo"
                                                    clearable
                                                ></v-select>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .tipo_licencia
                                                    "
                                                    label="Tipo de Licencia"
                                                    variant="underlined"
                                                    :items="state.tipo_licencia"
                                                    clearable
                                                ></v-select>
                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .recuperabilidad_laboral
                                                    "
                                                    hide-details
                                                    class="ml-4"
                                                    variant="underlined"
                                                    color="primary"
                                                    inset
                                                    label="Recuperabilidad Laboral"
                                                ></v-switch>
                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .inicio_invalidez
                                                    "
                                                    hide-details
                                                    class="ml-4"
                                                    variant="underlined"
                                                    color="primary"
                                                    inset
                                                    label="Inicio Invalidez"
                                                ></v-switch>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .nombre_profesional
                                                    "
                                                    label="Nombre del Profesional"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .titulo_profesional
                                                    "
                                                    label="Titulo profesional"
                                                    variant="underlined"
                                                    :items="
                                                        state.titulo_profesional
                                                    "
                                                    clearable
                                                ></v-select>
                                            </v-col>
                                        </v-row>
                                        <!------------->
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
                            </v-form>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip text="Editar" location="top">
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
                <v-btn variant="tonal" color="#009AA4" @click="handleShow">
                    Iniciar
                </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>
