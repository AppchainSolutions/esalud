<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import DatosMedicos from "@/Pages/Paciente/Componentes/DatosMedicos.vue";
import AntecedenteFamiliar from "@/Pages/Paciente/Componentes/AntecedenteFamiliar.vue";
import LicenciaMedica from "@/Pages/Paciente/Componentes/LicenciaMedica.vue";
import DiatDiep from "@/Pages/Paciente/Componentes/DiatDiep.vue";
import Examenes from "@/Pages/Paciente/Componentes/Examenes/Examenes.vue";
import Certificaciones from "@/Pages/Paciente/Componentes/Certificaciones.vue";
import { usePage } from "@inertiajs/vue3";
import { useDataStore } from "@/store.js";

const store = useDataStore();
defineOptions({ layout: AppLayout });
const page = usePage();
const paciente = page.props.paciente;
store.setPaciente(paciente);
</script>

<template>
    <v-container fluid>
        <v-row justify="center">
            <v-card min-width="500">
                <v-card-text>
                    <v-card-actions>
                        <v-spacer>DATOS MEDICOS</v-spacer>
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
