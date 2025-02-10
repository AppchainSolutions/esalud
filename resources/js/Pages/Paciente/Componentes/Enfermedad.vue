<script setup>
import { reactive, onMounted } from "vue";
import {
    fetchData,
} from "@/helper.js";
import { useDataStore } from "@/store.js";
const store = useDataStore();
const paciente = store.getPacienteSelected;

const state = reactive({
    endpoints: ["trastorno_cronico"],
    headers: [
        {
            title: "Enfermedad",
            align: "start",
            sortable: true,
            key: "trastorno_cronico.descripcion",
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" },
    ],

    editedItem: {
        paciente_id: null,
        trastorno_cronico: null,
        comentario: null,
    },
    dialog: false,
    tableItems: [],
    loading: false,
    formTitle: "Enfermedades",
});
//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    state.list = await fetchData(state.endpoints);
});

function close() {
    closeForm(state);
}

function verDetalle(item) {
    console.log(item);
    state.editedItem = { ...item };
    state.dialog = true;
}
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
                        
                        <v-card>
                            <form @submit.prevent="submit">
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
                                                        state.editedItem.enfermedad
                                                    "
                                                    label="enfermedad"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-select
                                                    v-model="
                                                        state.editedItem.trastorno_cronico
                                                    "
                                                    :items="state.list.trastorno_cronico"
                                                    item-title="descripcion"
                                                    item-value="id"
                                                    label="Trastorno Crónico"
                                                    variant="underlined"
                                                    clearable
                                                ></v-select>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .comentario
                                                    "
                                                    label="comentario"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <!------------->
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
                            color="#009AA4"
                            :icon="'mdi-account-edit'"
                            variant="tonal"
                            @click="openFormEdit(item)"
                        ></v-btn>
                    </template>
                </v-tooltip>

             
            </template>
            <template v-slot:no-data>
                <v-btn variant="tonal" @click="handleShow"> Iniciar </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>
