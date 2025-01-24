<script setup>
import { reactive, computed, onMounted } from "vue";
import { useDataStore } from "@/store.js";
import {
    fetchData,
    closeForm,
    handleEditItem,
    handleRemoveItem,
    searchItemss,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/helper.js";
import { get, put, search, post } from "@/api";

const store = useDataStore();
const state = reactive({
    endpoints: ["test_drogas"],
    headers: [
        {
            title: "IDPGP",
            align: "start",
            sortable: true,
            key: "idpgp",
        },
        {
            title: "Test",
            align: "start",
            sortable: true,
            key: "test_drogas.descripcion",
        },
        {
            title: "Fecha Control",
            align: "start",
            sortable: true,
            key: "fecha_control",
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" },
    ],
    editedItem: {
        paciente_id: null,
        idpgp: null,
        test_drogas: null,
        fecha_control: null,
        comentario: null,
    },
    defaultItem: {
        paciente_id: null,
        idpgp: null,
        test_drogas: null,
        fecha_control: null,
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
    formTitle: "Alcohol y Drogas",
    formCrear: "Nuevo Exámen de Alcohol y Drogas",
    formEdit: "Editar Exámen de Alcohol y Drogas",
    urlShow: "/examen/alcohol/show",
    urlUpdate: "/examen/alcohol/update",
    urlDelete: "/examen/alcohol/delete",
    urlStore: "/examen/alcohol/",
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
    await searchItemss(state);
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
                                variant="tonal"
                                class="ma-2"
                                color="#009AA4"
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

                                                <v-select
                                                    :items="
                                                        state.list.test_drogas
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    v-model="
                                                        state.editedItem
                                                            .test_drogas
                                                    "
                                                    label="Test de drogas"
                                                    clearable
                                                    variant="underlined"
                                                ></v-select>
                                            </v-col>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_control
                                                    "
                                                    label="Fecha Control"
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
                                        @click="storeItems(item)"
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
                            variant="tonal"
                            density="compact"
                            class="mr-2 ml-2"
                            color="#009AA4"
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
