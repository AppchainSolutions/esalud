<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import DatosMedicos from "@/Pages/SubPages/DatosMedicos.vue";
import AntecedenteFamiliar from "@/Pages/SubPages/AntecedenteFamiliar.vue";
import Examenes from "@/Pages/Examenes/Examenes.vue";
import { router } from "@inertiajs/vue3";
import { useDataStore } from "@/store.js";

defineOptions({ layout: AppLayout });
const store = useDataStore();
const nombre = store.getSelected.nombre;
const apellidos = store.getSelected.apellidos;

const volver = () => {
    router.get("/paciente");
};
</script>

<template>
    <v-container fluid>
        <v-row justify="center">
            <v-card min-width="500">
                <v-card-title class="justify-space-between"
                    >Información del Paciente: {{ apellidos }}, {{ nombre }}
                </v-card-title>
                <v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn variant="tonal" color="#662D91" @click="volver">
                            Volver
                        </v-btn>
                    </v-card-actions>
                    <v-stepper
                        editable
                        alt-labels
                        hide-actions
                        :items="[
                            'Datos Medicos',
                            'Datos Familiares',
                            'Exámenes',
                        ]"
                    >
                        <template v-slot:item.1>
                            <datos-medicos />
                        </template>

                        <template v-slot:item.2>
                            <antecedente-familiar />
                        </template>

                        <template v-slot:item.5>
                            <examenes />
                        </template>

                    </v-stepper>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>
