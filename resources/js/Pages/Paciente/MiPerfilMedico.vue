<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import DatosMedicos from "@/Paciente/Componentes/DatosMedicos.vue";
import AntecedenteFamiliar from "@/Paciente/Componentes/AntecedenteFamiliar.vue";
import LicenciaMedica from "@/Paciente/Componentes/LicenciaMedica.vue";
import DiatDiep from "@/Paciente/Componentes/DiatDiep.vue";
import Examenes from "@/Pages/Examenes/Examenes.vue";
import Certificaciones from "@/Paciente/Componentes/Certificaciones.vue";
// import { router } from "@inertiajs/vue3";
import { usePage } from "@inertiajs/vue3";
// import { useDataStore } from "@/store.js";

//const store = useDataStore();
defineOptions({ layout: AppLayout });
// const page = usePage();
// const user = usePage().props.auth.user;
// const paciente = page.props.paciente;
// store.setPaciente(paciente);

// const volver = () => {
//     router.get("paciente");
// };
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
                    
                        <!-- <template v-slot:item.1>
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
                        </template> -->
                    </v-stepper>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>
