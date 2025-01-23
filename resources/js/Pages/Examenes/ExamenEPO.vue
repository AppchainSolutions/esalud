<script setup>
import { reactive, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import {
    closeForm,
    fetchData,
    handleEditItem,
    handleRemoveItem,
    searchItem,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/helper.js";

const store = useDataStore();
const state = reactive({
    endpoints: ["bateria", "estado_epo", "semaforo", "tipo_examen"],
    headers: [
        {
            title: "N° solicitud",
            align: "start",
            sortable: true,
            key: "numero_solicitud",
        },
        {
            title: "Estatus",
            align: "start",
            sortable: true,
            key: "estado_epo.descripcion",
        },
        {
            title: "Batería",
            align: "start",
            sortable: true,
            key: "bateria.descripcion",
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
            title: "Fecha solicitud",
            align: "start",
            sortable: true,
            key: "fecha_solicitud",
        },
        {
            title: "Fecha vencimiento",
            align: "start",
            sortable: true,
            key: "fecha_vencimiento",
        },
        {
            title: "Semáforo",
            align: "start",
            sortable: true,
            key: "semaforo.descripcion",
        },
        {
            title: "Acciones",
            width: "10em",
            align: "center",
            key: "actions",
        },
    ],
    editedItem: {
        paciente_id: null,
        codigo_verificacion: null,
        numero_solicitud: null,
        comentario: null,
        estado_epo: null,
        fecha_realizacion: null,
        fecha_recepcion: null,
        fecha_solicitud: null,
        fecha_vencimiento: null,
        bateria: null,
        resultado: "No apto",
        semaforo: null,
        tipo_examen: null,
    },
    defaultItem: {
        paciente_id: null,
        codigo_verificacion: null,
        numero_solicitud: null,
        comentario: null,
        estado_epo: null,
        fecha_realizacion: null,
        fecha_recepcion: null,
        fecha_solicitud: null,
        fecha_vencimiento: null,
        bateria: null,
        resultado: "No apto",
        semaforo: null,
        tipo_examen: null,
    },
    searchQuery: {
        paciente_id: null,
    },
    dialog: false,
    tableItems: [],
    editedIndex: -1,
    list: [],
    loadingSearch: false,
    valid: null,
    formTitle: "Ocupacionales y Preocupacionales",
    formCrear: "Nuevo exámen Ocupacional / Preocupacional",
    formEdit: "Editar datos Ocupacional / Preocupacional",
    urlShow: "examen/epo/show",
    urlUpdate: "examen/epo/update",
    urlDelete: "examen/epo/delete",
    urlStore: "examen/epo",
});

//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    state.list = await fetchData(state.endpoints);
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
    <v-container fluid>
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
                                :loading="state.loadingSearch"
                                @click="showItem"
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
                                    <span class="text-h5 ma-4"
                                        >{{ editedItemTitle }}
                                    </span>
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col>
                                            <v-sheet
                                                elevation="12"
                                                class="ma-4 pa-4"
                                                rounded
                                                border
                                            >
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .numero_solicitud
                                                    "
                                                    label="N° solicitud"
                                                    type="number"
                                                    variant="underlined"
                                                    clearable
                                                ></v-text-field>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .estado_epo
                                                    "
                                                    :items="
                                                        state.list.estado_epo
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    label="Estatus"
                                                    variant="underlined"
                                                    clearable
                                                ></v-select>

                                                <v-select
                                                    v-model="
                                                        state.editedItem.bateria
                                                    "
                                                    :items="state.list.bateria"
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    label="Batería"
                                                    variant="underlined"
                                                    chips
                                                ></v-select>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .tipo_examen
                                                    "
                                                    :items="
                                                        state.list.tipo_examen
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    label="Tipo de exámen"
                                                    variant="underlined"
                                                ></v-select>
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
                                                    label="Fecha solicitud"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-sheet>
                                        </v-col>
                                        <v-col>
                                            <v-sheet
                                                elevation="12"
                                                class="ma-4 pa-4"
                                                rounded
                                                border
                                            >
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .codigo_verificacion
                                                    "
                                                    label="Cod. verif."
                                                    type="number"
                                                    variant="underlined"
                                                    clearable
                                                ></v-text-field>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .semaforo
                                                    "
                                                    :items="state.list.semaforo"
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    label="Semáforo"
                                                    variant="underlined"
                                                ></v-select>
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
                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .resultado
                                                    "
                                                    hide-details
                                                    true-value="Apto"
                                                    false-value="No apto"
                                                    class="ml-4 mt-4"
                                                    variant="underlined"
                                                    color="green-darken-3"
                                                    inset
                                                    clearable
                                                    :label="`Resultado: ${state.editedItem.resultado.toString()}`"
                                                ></v-switch>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .comentario
                                                    "
                                                    label="Comentario"
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-sheet>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-container fluid>
                                    <v-sheet class="pa-2" elevation="2">
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
                                    </v-sheet>
                                </v-container>
                            </v-form>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.state.editedItem.semaforo="{ item }">
                <v-icon :icon="mdi - eye - off - outline"></v-icon>
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
