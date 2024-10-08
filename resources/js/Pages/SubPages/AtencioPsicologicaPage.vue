<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import {
    closeForm,
    fetchAllData,
    handleEditItem,
    handleRemoveItem,
    handleShowItem,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/helper.js";

defineOptions({ layout: AppLayout });

</script>

<template>
    <v-container>
        <v-card>
            <v-card-title>Sesiones de atención psicológica</v-card-title>
            <v-card-text>
                <v-sheet
                    color="gray"
                    :elevation="1"
                    :class="'rounded-lg ma-4 pa-6'"
                >
                    <v-row>
                        <v-col>
                            <h3>Profesional:</h3>
                            Tapia, Jorge
                            <h4>Especialidad:</h4>
                            Psicología
                            <br />

                            TODO: Acá pueden ir los pacientes totales del
                            profesional o solamente los que les corresponde para
                            ese día o tener opcion de switch entre todos S/N
                        </v-col>
                        <v-col>
                            <h4>Horarios asignados:</h4>
                            <ol :class="'ml-4'">
                                <li>Lunes: 08:00 - 17:00</li>
                                <li>Martes: 08:00 - 17:00</li>
                                <li>Miércoles: 08:00 - 17:00</li>
                                <li>Jueves: 08:00 - 17:00</li>
                                <li>Viernes: 08:00 - 17:00</li>
                            </ol>
                        </v-col>
                        <v-col>
                            <h4>Horarios disponibles:</h4>
                            <ol :class="'ml-4'">
                                <li>Lunes: 08:00 - 17:00</li>
                                <li>Jueves: 08:00 - 17:00</li>
                            </ol>
                        </v-col>
                        <v-col>
                            <h4>Fecha: 03/10/2024</h4>
                            <h4>Hora actual: 10:30</h4>
                            <h4>Hora inicio: 10:00 - 10:45</h4>
                            <v-line></v-line>
                            <v-textarea
                                clearable
                                label="Nota rápida:"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-sheet>
                <v-sheet
                    color="gray"
                    :elevation="1"
                    :class="'rounded-lg ma-4 pa-6'"
                >
                    <v-row>
                        <v-col>
                            <v-data-table
                                :headers="state.atencion.headers"
                                :items="state.atencion.items"
                                class="elevation-1"
                            >
                                <template v-slot:top>
                                    <v-toolbar flat>
                                        <v-toolbar-title
                                            >Pacientes
                                            asignados</v-toolbar-title
                                        >
                                        <v-divider
                                            class="mx-4"
                                            inset
                                            vertical
                                        ></v-divider>
                                    </v-toolbar>
                                </template>
                                <template v-slot:item.actions="{ item }">
                                    <v-tooltip
                                        text="Atención Psicológica"
                                        location="top"
                                    >
                                        <template v-slot:activator="{ props }">
                                            <v-btn
                                                v-bind="props"
                                                density="compact"
                                                color="#009AA4"
                                                class="mr-2 ml-2"
                                                variant="tonal"
                                                :icon="'mdi-head-cog'"
                                                @click="atencionPsicologica()"
                                            ></v-btn>
                                        </template>
                                    </v-tooltip>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-card-text>
        </v-card>
    </v-container>
</template>
