<script setup>
import { reactive, computed, onMounted } from "vue";
import { useDataStore } from "@/store.js";
import {
    closeForm,
    handleEditItem,
    handleRemoveItem,
    searchItem,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/helper.js";
const store = useDataStore();
const state = reactive({
    headers: [
        {
            title: "Tipo de vehículo",
            align: "start",
            sortable: true,
            key: "tipo_vehiculo",
        },
        {
            title: "Contraindicación",
            align: "start",
            sortable: true,
            key: "contraindicacion",
        },
        {
            title: "Fecha solicitud",
            align: "start",
            sortable: true,
            key: "fecha_solicitud",
        },
        {
            title: "Fecha realización",
            align: "start",
            sortable: true,
            key: "fecha_realizacion",
        },
        {
            title: "Fecha recepción",
            align: "start",
            sortable: true,
            key: "fecha_recepcion",
        },
        {
            title: "Fecha vencimiento",
            align: "start",
            sortable: true,
            key: "fecha_vencimiento",
        },
        { title: "Acciones", align: "center", width: "150px", key: "actions" },
    ],
    editedItem: {
        paciente_id: null,
        tipo_vehiculo: null,
        contraindicacion: null,
        fecha_solicitud: null,
        fecha_realizacion: null,
        fecha_recepcion: null,
        fecha_vencimiento: null,
        comentario: null,
    },
    defaultItem: {
        paciente_id: null,
        tipo_vehiculo: null,
        contraindicacion: null,
        fecha_solicitud: null,
        fecha_realizacion: null,
        fecha_recepcion: null,
        fecha_vencimiento: null,
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
    formTitle: "Psicosensométrico",
    formCrear: "Nuevo exámen Psicosensométrico",
    formEdit: "Editar exámen Psicosensométrico",
    urlShow: "/examen/psico/show",
    urlUpdate: "/examen/psico/update",
    urlDelete: "/examen/psico/delete",
    urlStore: "/examen/psico",
});

//**********\\\\  COMPUTE PROPERTIES ////*************/
const editedItemTitle = computed(() =>
    state.editedIndex === -1 ? state.formCrear : state.formEdit
);

function close() {
    closeForm(state);
}
//**********\\\\  CRUD ////*************/
const showItem = async () => {
    state.searchQuery.paciente_id = store.getSelected.id;
    await searchItem(state);
};

function openFormCreate() {
    openToCreate(state);
}

function storeItems(item) {
    return state.editedIndex > -1 ? update() : create();
}

const create = async () => {
    await handleStoreItem(state, "create");
    closeForm(state);
};

const update = async () => {
    await handleStoreItem(state, "edit");
    closeForm(state);
};

function openFormEdit(item) {
    openToEdit(state, item);
}

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
                                @click="showItem"
                            >
                            </v-btn>
                            <v-btn
                                icon="mdi-account-multiple-plus"
                                class="ma-2"
                                color="#009AA4"
                                variant="tonal"
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
                                                        state.editedItem
                                                            .tipo_vehiculo
                                                    "
                                                    label="Tipo de vehículo"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .contraindicacion
                                                    "
                                                    label="Contraindicacion"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_realizacion
                                                    "
                                                    label="Fecha de realización"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_solicitud
                                                    "
                                                    label="Fecha de solicitud"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-col>

                                            <v-col>
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
                                                            .fecha_vencimiento
                                                    "
                                                    label="Fecha vencimiento"
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
                <v-btn color="#009AA4" variant="tonal" @click="showItem">
                    Iniciar
                </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>
