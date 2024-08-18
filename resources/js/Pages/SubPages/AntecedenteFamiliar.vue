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
    formTitle: "Antecedentes Familiares",
    formCrear: "Nuevo Antecedente Familiar",
    formEdit: "Editar Antecedentes Familiares",
    urlShow: "/familiar/show",
    urlUpdate: "/familiar/update",
    urlDelete: "/familiar/delete",
    urlStore: "/familiar",
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
        <v-data-table
            :headers="state.headers"
            :items="state.tableItems"
            class="elevation-1"
            style="min-width: 850px"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>{{ state.formTitle }}</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>

                    <v-dialog v-model="state.dialog">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                icon="mdi-update"
                                variant="underlined"
                                class="ma-2"
                                color="#662D91"
                                @click="handleShow"
                            >
                            </v-btn>
                            <v-btn
                                icon="mdi-account-multiple-plus"
                                variant="underlined"
                                class="ma-2"
                                color="#662D91"
                                @click="openFormCreate"
                            >
                            </v-btn>
                        </template>

                        <v-card>
                            <form @submit.prevent="submit">
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
                                                            .parentesco
                                                    "
                                                    label="Parentesco"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .patologia
                                                    "
                                                    label="Patologia"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue-darken-1"
                                        variant="underlined"
                                        @click="close"
                                    >
                                        Cancelar
                                    </v-btn>
                                    <v-btn
                                        color="blue-darken-1"
                                        variant="underlined"
                                        @click="storeItems"
                                    >
                                        Guardar
                                    </v-btn>
                                </v-card-actions>
                            </form>
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
                            color="#662D91"
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
                            color="#662D91"
                            :icon="'mdi-delete'"
                            @click="remove(item)"
                        ></v-btn>
                    </template>
                </v-tooltip>
            </template>
            <template v-slot:no-data>
                <v-btn type="solo" @click="handleShow"> Iniciar </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>
