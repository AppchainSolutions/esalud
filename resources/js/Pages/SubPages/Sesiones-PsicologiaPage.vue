<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import { router } from "@inertiajs/vue3";
import {
    closeForm,
    fetchAllData,
    handleEditItem,
    handleRemoveItem,
    handleSearchItem,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/helper.js";
import InformacionGeneral from "@/Pages/SubPages/Componentes/Informacion-SesionPsicologiaComponente.vue";
import FichaPsicologia from "@/Pages/SubPages/Componentes/FichaPsicologia-PacienteComponente.vue";
import PlanTrabajo from "@/Pages/SubPages/Componentes/PlanTrabajo-PsicologiaComponente.vue";
import TablaSesionesPsicologia from "@/Pages/SubPages/Componentes/TablaSesiones-PsicologiaComponente.vue";
import DatosEgresoPsicologia from "@/Pages/SubPages/Componentes/DatosEgreso-PsicologiaComponente.vue";

defineOptions({
    layout: AppLayout,
    data: () => ({
        tab: 'option-1',
    }),
});

const store = useDataStore();
const state = reactive({
    endpoints: [],
    objetivos: [
        { "id": 1, "descripcion": "Acompañamiento en el proceso de duelo" },
        { "id": 2, "descripcion": "Desarrollar nuevas prácticas relacionales entre la familia" },
        { "id": 3, "descripcion": "Desarrollar técnicas de autorregulación emocional" },
        { "id": 4, "descripcion": "Disminuir sintomatología ansiosa" },
        { "id": 5, "descripcion": "Disminuir sintomatología depresiva" },
        { "id": 6, "descripcion": "Elaboración de la experiencia de separación de los padres" },
        { "id": 7, "descripcion": "Evaluación de competencias parentales" },
        { "id": 8, "descripcion": "Fomentar técnicas y conductas de autocuidado" },
        { "id": 9, "descripcion": "Fortalecer autoestima y autoconcepto" },
        { "id": 10, "descripcion": "Fortalecer competencias formativas" },
        { "id": 11, "descripcion": "Fortalecer competencias protectoras" },
        { "id": 12, "descripcion": "Fortalecer competencias reflexivas" },
        { "id": 13, "descripcion": "Fortalecer competencias vinculares" },
        { "id": 14, "descripcion": "Fortalecer tolerancia a la frustración" },
        { "id": 15, "descripcion": "Identificar situaciones que gatillen procesos ansiosos" },
        { "id": 16, "descripcion": "Mejorar la regulación emocional" },
        { "id": 17, "descripcion": "Propiciar habilidades para enfrentar los miedos nocturnos" },
        { "id": 18, "descripcion": "Psicoeducar habilidades parentales" },
        { "id": 19, "descripcion": "Psicoeducar sobre adolescencia y sexualidad" },
        { "id": 20, "descripcion": "Psicoeducar sobre ciclo vital personas mayores" },
        { "id": 21, "descripcion": "Disminuir síntomas ansiosos" },
        { "id": 22, "descripcion": "Fortalecer autoconcepto" },
        { "id": 23, "descripcion": "Fortalecer autoestima" },
        { "id": 24, "descripcion": "Fortalecer competencias sociales y/o habilidades interpersonales" },
        { "id": 25, "descripcion": "Propiciar la organización" }
    ],
    breadcrumbs: [
        {
            text: "Inicio",
            disabled: false,
            href: "/",
        },
        {
            text: "Pacientes",
            disabled: false,
            href: "/pacientes",
        },
        {
            text: "Sesiones de Psicología",
            disabled: true,
        },
    ],
    atencion: {
        headers: [
            {
                title: "Fecha",
                align: "center",
                sortable: true,
                value: "fecha",
            },
            {
                title: "Horarios",
                align: "center",
                sortable: true,
                value: "horarios",
            },
            {
                title: "Sesión N°",
                align: "center",
                sortable: true,
                value: "sesionNum",
            },
            {
                title: "Tipo Sesion",
                align: "center",
                sortable: true,
                value: "tipoSesion", // TODO: esto vendría por defecto para todas las primeras sesiones
            },
            {
                title: "Asiste",
                align: "center",
                sortable: true,
                value: "asiste", //TODO: esto vendría por defecto para todas las primeras sesiones
            },

            { title: "Acciones", align: "center", key: "actions" },
        ],
        items: [
            {
                fecha: "Lunes 03/02/2025",
                horarios: "09:00-09:45",
                sesionNum: "1/12",
                tipoSesion: "Evaluación diagnóstica",
                asiste: "Si",
            },
            {
                fecha: "Lunes 10/02/2025",
                horarios: "09:00-09:45",
                sesionNum: "2/12",
                tipoSesion: "Consulta",
                asiste: "Pendiente",
            },
            {
                fecha: "Lunes 17/02/2025",
                horarios: "09:00-09:45",
                sesionNum: "3/12",
                tipoSesion: "Consulta",
                asiste: "Pendiente",
            },
            {
                fecha: "Lunes 24/02/2025",
                horarios: "09:00-09:45",
                sesionNum: "4/12",
                tipoSesion: "Consulta",
                asiste: "Pendiente",
            },
        ],
    },


    editedItem: {
        paciente_id: null,
    },

    defaultItem: {
        paciente_id: null,
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
});

</script>

<template>

    <v-card class="ma-4 pa-4">
        <v-card-title class="bg-surface-light pt-4">Servicio Atención Psicológica</v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-text>

            <v-tabs v-model="tab" color="teal" staked>
                <v-tab prepend-icon="mdi-account" text="Información general" value="option-1"></v-tab>
                <v-tab prepend-icon="mdi-lock" text="Ficha Psicológica" value="option-2"></v-tab>
                <v-tab prepend-icon="mdi-access-point" text="Plan de Intervención" value="option-3"></v-tab>
                <v-tab prepend-icon="mdi-access-point" text="Sesiones" value="option-4"></v-tab>
                <v-tab prepend-icon="mdi-access-point" text="Egreso" value="option-5"></v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="option-1">
                    <v-card class="ma-4 pa-4">
                        <v-card-text>

                            <informacion-general />

                        </v-card-text>
                    </v-card>
                </v-tabs-window-item>

                <v-tabs-window-item value="option-2">
                    <v-card flat>
                        <v-card-text>

                            <ficha-psicologia />

                        </v-card-text>
                    </v-card>
                </v-tabs-window-item>

                <v-tabs-window-item value="option-3">
                    <v-card flat>
                        <v-card-text>
                            <plan-trabajo />
                        </v-card-text>
                    </v-card>
                </v-tabs-window-item>

                <v-tabs-window-item value="option-4">
                    <v-card flat>
                        <v-card-text>
                            <tabla-sesiones-psicologia />
                        </v-card-text>
                    </v-card>
                </v-tabs-window-item>

                <v-tabs-window-item value="option-5">
                    <v-card flat>
                        <v-card-text>
                            <datos-egreso-psicologia />
                        </v-card-text>
                    </v-card>
                </v-tabs-window-item>
            </v-tabs-window>

        </v-card-text>
    </v-card>
</template>
