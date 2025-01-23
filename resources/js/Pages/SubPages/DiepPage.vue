<script setup>
import { reactive, computed, onMounted } from "vue";
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
    endpoints: ["cie10", "seguro", "tipo_enfermedad"],

    headers: [
        {
            title: "Folio",
            align: "start",
            sortable: true,
            key: "folio",
        },
        {
            title: "Tipo de enfermedad",
            align: "start",
            sortable: true,
            key: "tipo_enfermedad.descripcion",
        },
        {
            title: "Fecha de admision",
            align: "start",
            sortable: true,
            key: "fecha_admision",
        },
        {
            title: "Estado",
            align: "start",
            sortable: true,
            key: "estado_diep",
        },

        { title: "Acciones", align: "center", key: "actions" },
    ],

    editedItem: {
        comentario: null,
        enfermedad: null,
        estado_diep: "No Aprobado",
        fecha_admision: null,
        folio: null,
        idpgp: null,
        numero_resolucion: null,
        origen_denuncia: null,
        paciente_id: null,
        seguro: null,
        sucursal: null,
        tipo_enfermedad: null,
        validado_por: null,
    },

    defaultItem: {
        comentario: null,
        enfermedad: null,
        estado_diep: "No Aprobado",
        fecha_admision: null,
        folio: null,
        idpgp: null,
        numero_resolucion: null,
        origen_denuncia: null,
        paciente_id: null,
        seguro: null,
        sucursal: null,
        tipo_enfermedad: null,
        validado_por: null,
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
    formTitle: "DIEP",
    formCrear: "Nueva DIEP",
    formEdit: "Editar DIEP",
    urlShow: "/diep/show",
    urlUpdate: "/diep/update",
    urlDelete: "/diep/delete",
    urlStore: "/diep",
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
const handleShow = async () => {
    state.searchQuery.paciente_id = store.getSelected.id;
    await searchItem(state);
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
                                color="#009AA4"
                                variant="tonal"
                                class="ma-2"
                                @click="handleShow"
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
                                                        state.editedItem.folio
                                                    "
                                                    label="Folio"
                                                    type="number"
                                                    variant="underlined"
                                                    clearable
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.idpgp
                                                    "
                                                    label="IDPGP"
                                                    type="number"
                                                    variant="underlined"
                                                    clearable
                                                ></v-text-field>

                                                <v-combobox
                                                    v-model="
                                                        state.editedItem
                                                            .enfermedad
                                                    "
                                                    :items="state.list.cie10"
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    label="Enfermedad"
                                                    variant="underlined"
                                                    clearable
                                                    single
                                                ></v-combobox>

                                                <v-select
                                                    v-model="
                                                        state.editedItem.seguro
                                                    "
                                                    :items="state.list.seguro"
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    label="Adm. Seguro de Vida"
                                                    variant="underlined"
                                                    clearable
                                                ></v-select>
                                            </v-col>
                                            <v-col>
                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .estado_diep
                                                    "
                                                    hide-details
                                                    true-value="Aprobado"
                                                    false-value="No Aprobado"
                                                    variant="underlined"
                                                    color="green-darken-3"
                                                    value="No Aprobado"
                                                    :inset="true"
                                                    :label="`Estatus Diep ${state.editedItem.estado_diep}`"
                                                ></v-switch>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_admision
                                                    "
                                                    label="fecha_admision"
                                                    type="date"
                                                    variant="underlined"
                                                    class="mt-6"
                                                    clearable
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .numero_resolucion
                                                    "
                                                    label="Número de resolución"
                                                    type="number"
                                                    variant="underlined"
                                                    clearable
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .origen_denuncia
                                                    "
                                                    label="Origen denuncia"
                                                    type="text"
                                                    variant="underlined"
                                                    clearable
                                                ></v-text-field>
                                            </v-col>

                                            <v-col>
                                                <v-select
                                                    v-model="
                                                        state.editedItem
                                                            .tipo_enfermedad
                                                    "
                                                    label="Tipo de enfermedad"
                                                    variant="underlined"
                                                    :items="
                                                        state.list
                                                            .tipo_enfermedad
                                                    "
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    clearable
                                                ></v-select>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .validado_por
                                                    "
                                                    label="Validado por"
                                                    type="text"
                                                    variant="underlined"
                                                    clearable
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
