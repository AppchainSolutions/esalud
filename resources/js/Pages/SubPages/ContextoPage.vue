<script setup>
import { reactive, computed } from "vue";
import { useDataStore } from "@/store.js";
import {
    handleRemoveItem,
    handleSearchItem,
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
            title: "Parentesco",
            align: "start",
            sortable: true,
            key: "parentesco",
        },
        { title: "Patología", key: "patologia", sortable: false },
        { title: "Acciones", align: "center", key: "actions" },
    ],
    editedItem: {
        parentesco: null,
        patologia: null,
        comentario: null,
    },
    defaultItem: {
        paciente_id: null,
        parentesco: null,
        patologia: null,
        comentario: null,
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
    formTitle: "Contexto",
    formCrear: "Nuevo Antecedente Familiar",
    formEdit: "Editar Antecedentes Familiares",
    urlShow: "/contexto/show",
    urlUpdate: "/contexto/update",
    urlDelete: "/contexto/delete",
    urlStore: "/contexto",
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
    await handleSearchItem(state);
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
        <v-row>
            <v-col>
                <v-select :items="[
                    'Urbano',
                    'Rural',
                    'Otro',
                ]" clearable label="Tipo de Vivienda" variant="underlined" single></v-select>
                <v-select :items="[
                    'Sector 1',
                    'Sector 2',
                    'Sector 3',
                ]" clearable label="Sector" variant="underlined" single></v-select>

                <v-select clearable chips label="Servicios básicos" :items="['Luz', 'Agua', 'Gas']" multiple></v-select>



            </v-col>
            <v-col>
                <v-select clearable chips label="Material Vivienda" :items="['Sólida', 'Madera', 'Ladrillo', 'Otro']"
                    multiple></v-select>
                <v-select clearable chips label="Fuente de Ingresos" :items="['Padre', 'Madre', 'Hijos/s', 'Otro']"
                    multiple></v-select>
                <v-switch hide-details class="ml-4" variant="underlined" color="green-darken-3" inset
                    label="La vivienda posee riesgos estructurales"></v-switch>
            </v-col>
        </v-row>


    </v-container>
</template>
