<script setup>
import { reactive, ref } from "vue";
import { router } from "@inertiajs/vue3";
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'; // Import Quill CSS 

const editorContent = ref('');
const editorOptions = {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block'],
        ],
    },
};
const state = reactive({
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
    dialog: false,
});

function registroSesionPsicologia(item) {
    try {
        // router.get("psicologia-registro-sesion");
        state.dialog = true;
    } catch (error) {
        console.error(
            '"An error occurred while fetching daily attention data."'
        );
    }
}

function cerrarRegistro() {
    try {
        // router.get("psicologia-registro-sesion");
        state.dialog = false;
    } catch (error) {
        console.error(
            '"An error occurred while fetching daily attention data."'
        );
    }
}

</script>

<template>

    <v-row class="ma-4">
        <v-card>
            <v-card-title class="bg-surface-light pt-4">Sesiones programadas</v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text>
                <v-col>
                    <v-data-table :headers="state.atencion.headers" :items="state.atencion.items" class="elevation-1">
                        <template v-slot:item.actions="{ item }">
                            <v-tooltip text="Registro de la sesión" location="top">
                                <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props" density="compact" color="#009AA4" class="mr-1 ml-1"
                                        variant="tonal" :icon="'mdi-notebook-check'"
                                        @click="registroSesionPsicologia(item)"></v-btn>
                                </template>
                            </v-tooltip>
                            <v-tooltip text="Ver registro" location="top">
                                <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props" density="compact" color="#009AA4" class="mr-1 ml-1"
                                        variant="tonal" :icon="'mdi-eye-plus-outline'"
                                        @click="registroSesionPsicologia(item)"></v-btn>
                                </template>
                            </v-tooltip>
                        </template>
                    </v-data-table>
                </v-col>
            </v-card-text>
            <v-card-actions> </v-card-actions>
        </v-card>
    </v-row>

    <v-dialog v-model="state.dialog" persistent>

        <v-sheet>

            <v-card>
                <v-card-title class="bg-surface-light pt-4">Registro de la Sesión</v-card-title>
                <v-card-subtitle></v-card-subtitle>
                <v-card-text>
                    <v-sheet fluid color="gray" :elevation="1" :class="'rounded-lg ma-4 pa-4 '">
                        <v-row  class="ma-2 pa-2">
                            <v-col cols="4"class="ma-2 pa-2">
                                <v-text-field label="Objetivo de la Sesión"></v-text-field>
                                <v-switch inline color="green" label="Asiste" />
                            </v-col>
                            <v-col cols="4" class="ma-2 pa-2">
                                <v-select label="Tipo de Sesión">Tipo de Sesiones</v-select>
                                <v-text-field
                                label="Justificación inasistencia"
                                name="justificacion"
                                textarea
                            ></v-text-field>

                            </v-col>
                        </v-row>
                        <v-row class="mb-4 pb-4">
                            <v-col >
                                <quill-editor v-model="editorContent" :options="editorOptions" class="editor" />
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-card-text>
                <v-card-actions>
                    <v-btn prepend-icon="mdi-cloud-upload" variant="tonal" class="ma-4" color="#009AA4">Guardar
                        Sesión</v-btn>
                    <v-btn prepend-icon="mdi-close" variant="tonal" class="ma-4" color="#009AA4"
                        @click="cerrarRegistro">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-sheet>
    </v-dialog>

</template>
