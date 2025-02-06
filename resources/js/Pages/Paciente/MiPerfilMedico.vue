<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import DatosMedicos from "@/Pages/SubPages/DatosMedicos.vue";
import AntecedenteFamiliar from "@/Pages/SubPages/AntecedenteFamiliar.vue";
import LicenciaMedica from "@/Pages/SubPages/LicenciaMedica.vue";
import DiatDiep from "@/Pages/SubPages/DiatDiep.vue";
import Examenes from "@/Pages/Examenes/Examenes.vue";
import Certificaciones from "@/Pages/SubPages/Certificaciones.vue";
import { router } from "@inertiajs/vue3";
import { usePage } from '@inertiajs/vue3'
import { useDataStore } from "@/store.js";

const store = useDataStore();
defineOptions({ layout: AppLayout });
const page = usePage()
const user = usePage().props.auth.user
const paciente = page.props.paciente;
store.setPacienteSelected(paciente[0]);

const volver = () => {
    router.get("paciente");
};
</script>

<template>
    <v-container fluid>
        <v-row justify="center">
            <v-card min-width="500">
                {{ paciente }}
                <v-card-title class="justify-space-between"
                    >{{ user.name }} : {{ user.id }} 
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
                            'Licencias Médicas',
                            'DIAT/DIEP',
                            'Exámenes',
                            'Certificaciones',
                        ]"
                    >
                        <template v-slot:item.1>
                            <datos-medicos />
                        </template>

                        <template v-slot:item.2>
                            <antecedente-familiar />
                        </template>

                        <template v-slot:item.3>
                            <licencia-medica />
                        </template>

                        <template v-slot:item.4>
                            <diat-diep />
                        </template>

                        <template v-slot:item.5>
                            <examenes />
                        </template>

                        <template v-slot:item.6>
                            <certificaciones />
                        </template>
                    </v-stepper>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>
