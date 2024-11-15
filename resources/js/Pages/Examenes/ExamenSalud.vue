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
            title: "Fecha recepcion",
            align: "start",
            sortable: true,
            key: "fecha_recepcion",
        },
        {
            title: "Estatus",
            align: "start",
            sortable: true,
            key: "estatus",
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" },
    ],
    editedItem: {
        paciente_id: null,
        colesterol_hdl: null,
        colesterol_ldl: null,
        colesterol_total: null,
        comentario: null,
        creatinemia: null,
        ecg: null,
        espirometria: null,
        estatus: null,
        fecha_recepcion: null,
        framingham: null,
        glicemia: null,
        hba1c: null,
        hemoglobina: null,
        hemograma: null,
        optometria: null,
        trigliceridos: null,
    },
    defaultItem: {
        paciente_id: null,
        colesterol_hdl: null,
        colesterol_ldl: null,
        colesterol_total: null,
        comentario: null,
        creatinemia: null,
        ecg: null,
        espirometria: null,
        estatus: null,
        fecha_recepcion: null,
        framingham: null,
        glicemia: null,
        hba1c: null,
        hemoglobina: null,
        hemograma: null,
        optometria: null,
        trigliceridos: null,
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
    formTitle: "Salud",
    formCrear: "Nuevo exámen de Salud",
    formEdit: "Editar exámen de Salud",
    urlShow: "/examen/salud/show",
    urlUpdate: "/examen/salud/update",
    urlDelete: "/examen/salud/delete",
    urlStore: "/examen/salud",
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
    await handleShowItem(state);
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
                                                <!--  1 -->
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_recepcion
                                                    "
                                                    label="Fecha de recepcion"
                                                    type="date"
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
                                                            .colesterol_hdl
                                                    "
                                                    label="Colesterol HDL"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .colesterol_ldl
                                                    "
                                                    label="Estatus"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .colesterol_total
                                                    "
                                                    label="Colesterol total"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .creatinemia
                                                    "
                                                    label="Creatinemia"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.ecg
                                                    "
                                                    label="ECG"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .espirometria
                                                    "
                                                    label="Espirometria"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .framingham
                                                    "
                                                    label="Framingham"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .glicemia
                                                    "
                                                    label="Glicemia"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.hba1c
                                                    "
                                                    label="HBA1C"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .hemoglobina
                                                    "
                                                    label="Hemoglobina"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .hemograma
                                                    "
                                                    label="Hemograma"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .optometria
                                                    "
                                                    label="Optometria"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .trigliceridos
                                                    "
                                                    label="Trigléridos"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field
                                                ><v-text-field
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
