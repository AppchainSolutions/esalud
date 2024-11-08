<script setup>
import { reactive, computed } from "vue";
import { useDataStore } from "@/store.js";
import {
    closeForm,
    handleEditItem,
    handleRemoveItem,
    handleShowItem,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/helper.js";
const store = useDataStore();
const state = reactive({
    headers: [
        {
            title: "IDPGP",
            align: "start",
            sortable: true,
            key: "idpgp",
        },
        {
            title: "Estatus",
            align: "start",
            sortable: true,
            key: "estatus",
        },
        {
            title: "Fecha Ingreso",
            align: "start",
            sortable: true,
            key: "fecha_ingreso",
        },
        {
            title: "Fecha Control",
            align: "start",
            sortable: true,
            key: "fecha_control",
        },
        {
            title: "Fecha Próx. Control",
            align: "start",
            sortable: true,
            key: "fecha_prox_control",
        },
        {
            title: "Fecha Últ. Control",
            align: "start",
            sortable: true,
            key: "fecha_ult_control",
        },
        { title: "Acciones", align: "center", key: "actions" },
    ],

    editedItem: {
        paciente_id: null,
        idpgp: null,
        fecha_ingreso: null,
        fecha_control: null,
        fecha_prox_control: null,
        fecha_ult_control: null,
        comentario: null,
    },
    defaultItem: {
        paciente_id: null,
        idpgp: null,
        fecha_ingreso: null,
        fecha_control: null,
        fecha_prox_control: null,
        fecha_ult_control: null,
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
    formTitle: "Aldehído",
    formCrear: "Nuevo exámen de Aldehídos",
    formEdit: "Editar exámen de Alehído",
    urlShow: "/examen/aldehido/show",
    urlUpdate: "/examen/aldehido/update",
    urlDelete: "/examen/aldehido/delete",
    urlStore: "/examen/aldehido",
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
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.idpgp
                                                    "
                                                    label="IDPGP"
                                                    type="number"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.estatus
                                                    "
                                                    label="Estatus"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_ingreso
                                                    "
                                                    label="Ingreso"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_control
                                                    "
                                                    label="Fecha control"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-col>

                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_prox_control
                                                    "
                                                    label="Fecha prox. control"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_ult_control
                                                    "
                                                    label="Fecha ult. control"
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
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue-darken-1"
                                        variant="tonal"
                                        @click="close"
                                    >
                                        Cancelar
                                    </v-btn>
                                    <v-btn
                                        color="blue-darken-1"
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
                            variant="tonal"
                            color="#009AA4"
                            :icon="'mdi-delete'"
                            @click="remove(item)"
                        ></v-btn>
                    </template>
                </v-tooltip>
            </template>
            <template v-slot:no-data>
                <v-btn color="#009AA4" variant="tonal" @click="handleShow">
                    Iniciar
                </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>
