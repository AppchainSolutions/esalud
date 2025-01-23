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
    fetchData,
} from "@/helper.js";

const store = useDataStore();
const state = reactive({
    endpoints: ["nivel_riesgo"],

    headers: [
        {
            title: "Nivel de riesgo",
            align: "start",
            sortable: true,
            key: "nivel_riesgo.descripcion",
        },
        {
            title: "Resultado",
            align: "start",
            sortable: true,
            key: "resultado",
        },
        {
            title: "Fecha exámen",
            align: "start",
            sortable: true,
            key: "fecha_examen",
        },
        {
            title: "Fecha primer exámen",
            align: "start",
            sortable: true,
            key: "fecha_primer",
        },
        {
            title: "Fecha segundo exámen",
            align: "start",
            sortable: true,
            key: "fecha_segundo",
        },
        { title: "Acciones", align: "center", key: "actions" },
    ],
    editedItem: {
        paciente_id: null,
        fecha_examen: null,
        fecha_primer: null,
        fecha_segundo: null,
        nivel_riesgo: null,
        resultado: null,
        comentario: null,
    },
    defaultItem: {
        paciente_id: null,
        fecha_examen: null,
        fecha_primer: null,
        fecha_segundo: null,
        nivel_riesgo: null,
        resultado: "No Apto",
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
    formTitle: "Somnolencia",
    formCrear: "Nuevo exámen de Somnolencia",
    formEdit: "Editar exámen de Somnolencia",
    urlShow: "/examen/somnolencia/show",
    urlUpdate: "/examen/somnolencia/update",
    urlDelete: "/examen/somnolencia/delete",
    urlStore: "/examen/somnolencia",
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
                                                <v-select
                                                    :items="
                                                        state.list.nivel_riesgo
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    v-model="
                                                        state.editedItem
                                                            .nivel_riesgo
                                                    "
                                                    label="Nivel de Riesgo"
                                                    variant="underlined"
                                                ></v-select>

                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .resultado
                                                    "
                                                    hide-details
                                                    true-value="Apto"
                                                    false-value="No Apto"
                                                    variant="underlined"
                                                    color="green-darken-3"
                                                    value="No Apto"
                                                    :inset="true"
                                                    :label="`Resultado: ${state.editedItem.resultado.toString()}`"
                                                ></v-switch>

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
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_examen
                                                    "
                                                    label="Fecha Exámen"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_primer
                                                    "
                                                    label="Fecha primer"
                                                    type="date"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_segundo
                                                    "
                                                    label="Fecha segundo"
                                                    type="date"
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
                            color="#009AA4"
                            variant="tonal"
                            :icon="'mdi-delete'"
                            @click="remove(item)"
                        ></v-btn>
                    </template>
                </v-tooltip>
            </template>
            <template v-slot:no-data>
                <v-btn variant="tonal" color="#009AA4" @click="showItem">
                    Iniciar
                </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>
