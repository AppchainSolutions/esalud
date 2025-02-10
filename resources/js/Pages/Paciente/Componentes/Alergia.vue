<script setup>
import { reactive } from "vue";
import { useDataStore } from "@/store.js";
const store = useDataStore();
const paciente = store.getPacienteSelected;

const state = reactive({
    headers: [
        {
            title: "Alergia",
            align: "start",
            sortable: true,
            key: "alergia",
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" },
    ],

    editedItem: {
        paciente_id: "",
        alergia: "",
        comentario: "",
    },   
    dialog: false,
    tableItems: paciente.alergia,
    loading: false,
    formTitle: "Alergias",
});


//**********\\\\ METHODS ////*************/

function close() {
    state.dialog = false;
}
//**********\\\\  CRUD ////*************/

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
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.alergia
                                                    "
                                                    label="alergia"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem
                                                            .fecha_alergia
                                                    "
                                                    label="Fecha de la cirugía (escriba una fecha aproximada)"
                                                    type="text"
                                                    variant="underlined"
                                                ></v-text-field>

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
                                        @click="close()"
                                    >
                                        Cancelar
                                    </v-btn>
                                </v-card-actions>
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
                            @click="verDetalle(item)"
                        ></v-btn>
                    </template>
                </v-tooltip>
                
            </template>
           
        </v-data-table>
    </v-container>
</template>
