<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive } from "vue";
import { useDataStore } from "@/store.js";
import {
    handleEditItem,
} from "@/helper.js";
defineOptions({ layout: AppLayout });

const store = useDataStore();
const nombre = store.getSelected.nombre;
const apellidos = store.getSelected.apellidos;
const state = reactive({
    editedItem: {
        paciente_id: null,
        nivel_energia: null,
        estado_animo: null,
        calidad_sueño: null,
        dolor_malestar: null,
        cumple_medicacion: null,
        cumple_recomendacion: null,
        cumple_dieta: null,
        capacidad_tareas_diarias: null,
        nivel_actividad_fisica: null,
        capacidad_respiratoria: null,
        fuerza_flexibilidad: null,
        soporte_social: null,
        apoyo_familiares: null,
        participacion_social: null,
        acceso_recursos_salud: null,
    },

    defaultItem: {
        paciente_id: null,
        nivel_energia: null,
        estado_animo: null,
        calidad_sueño: null,
        dolor_malestar: null,
        cumple_medicacion: null,
        cumple_recomendacion: null,
        cumple_dieta: null,
        capacidad_tareas_diarias: null,
        nivel_actividad_fisica: null,
        capacidad_respiratoria: null,
        fuerza_flexibilidad: null,
        soporte_social: null,
        apoyo_familiares: null,
        participacion_social: null,
        acceso_recursos_salud: null,
    },
    tableItems: [],
    editedIndex: -1,
    list: [],
    loading: false,
    valid: null,
    formTitle: "Ficha paciente crónico",
});
const update = async () => {
    await handleEditItem(state);
};
function volver() {
    window.history.back();
  }

</script>

<template>
    <v-container fluid>
        <v-toolbar flat class="ma-2 pa-2">
            <v-toolbar-title>
                <span class="text-h5">Perfil Paciente: {{apellidos}}, {{nombre}}</span>
            </v-toolbar-title>
            <v-btn
                color="#009AA4"
                variant="tonal"
                @click="volver"
                class="ma-2 pa-2"
            >
                Volver
            </v-btn>

            <v-btn
                color="#009AA4"
                variant="tonal"
                @click="update"
                class="ma-2 pa-2"
            >
                Guardar
            </v-btn>
        </v-toolbar>

        <table class="mt-2">
            <tr>
                <th>Estado general de salud</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
            </tr>
            <tr>
                <td>Nivel de energía</td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_energia"
                        type="radio"
                        name="nivel_energia"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_energia"
                        type="radio"
                        name="nivel_energia"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_energia"
                        type="radio"
                        name="nivel_energia"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_energia"
                        type="radio"
                        name="nivel_energia"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_energia"
                        type="radio"
                        name="nivel_energia"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <td>Estado de animo</td>
                <td>
                    <input
                        v-model="state.editedItem.estado_animo"
                        type="radio"
                        name="estado_animo"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.estado_animo"
                        type="radio"
                        name="estado_animo"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.estado_animo"
                        type="radio"
                        name="estado_animo"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.estado_animo"
                        type="radio"
                        name="estado_animo"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.estado_animo"
                        type="radio"
                        name="estado_animo"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <td>Calidad de sueño</td>
                <td>
                    <input
                        v-model="state.editedItem.calidad_sueño"
                        type="radio"
                        name="calidad_sueño"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.calidad_sueño"
                        type="radio"
                        name="calidad_sueño"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.calidad_sueño"
                        type="radio"
                        name="calidad_sueño"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.calidad_sueño"
                        type="radio"
                        name="calidad_sueño"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.calidad_sueño"
                        type="radio"
                        name="calidad_sueño"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <td>Dolor o malestar general</td>
                <td>
                    <input
                        v-model="state.editedItem.dolor_malestar"
                        type="radio"
                        name="dolor_malestar"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.dolor_malestar"
                        type="radio"
                        name="dolor_malestar"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.dolor_malestar"
                        type="radio"
                        name="dolor_malestar"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.dolor_malestar"
                        type="radio"
                        name="dolor_malestar"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.dolor_malestar"
                        type="radio"
                        name="dolor_malestar"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <th>Adherencia al tratamiento</th>
                <th>
                    <input
                        v-model="state.editedItem.adherencia"
                        type="radio"
                        name="adherencia"
                        value="1"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.adherencia"
                        type="radio"
                        name="adherencia"
                        value="2"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.adherencia"
                        type="radio"
                        name="adherencia"
                        value="3"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.adherencia"
                        type="radio"
                        name="adherencia"
                        value="4"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.adherencia"
                        type="radio"
                        name="adherencia"
                        value="5"
                    />
                </th>
            </tr>
            <tr>
                <td>Cumple Medicación</td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_medicacion"
                        type="radio"
                        name="cumple_medicacion"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_medicacion"
                        type="radio"
                        name="cumple_medicacion"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_medicacion"
                        type="radio"
                        name="cumple_medicacion"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_medicacion"
                        type="radio"
                        name="cumple_medicacion"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_medicacion"
                        type="radio"
                        name="cumple_medicacion"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <td>Cumple recomendaciones de ejercicio</td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_recomendacion"
                        type="radio"
                        name="cumple_recomendacion"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_recomendacion"
                        type="radio"
                        name="cumple_recomendacion"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_recomendacion"
                        type="radio"
                        name="cumple_recomendacion"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_recomendacion"
                        type="radio"
                        name="cumple_recomendacion"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_recomendacion"
                        type="radio"
                        name="cumple_recomendacion"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <td>Cumple dieta recomendada</td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_dieta"
                        type="radio"
                        name="cumple_dieta"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_dieta"
                        type="radio"
                        name="cumple_dieta"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_dieta"
                        type="radio"
                        name="cumple_dieta"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_dieta"
                        type="radio"
                        name="cumple_dieta"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.cumple_dieta"
                        type="radio"
                        name="cumple_dieta"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <th>Bienestar Físico</th>
                <th>
                    <input
                        v-model="state.editedItem.bienestar_fisico"
                        type="radio"
                        name="bienestar_fisico"
                        value="1"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.bienestar_fisico"
                        type="radio"
                        name="bienestar_fisico"
                        value="2"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.bienestar_fisico"
                        type="radio"
                        name="bienestar_fisico"
                        value="3"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.bienestar_fisico"
                        type="radio"
                        name="bienestar_fisico"
                        value="4"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.bienestar_fisico"
                        type="radio"
                        name="bienestar_fisico"
                        value="5"
                    />
                </th>
            </tr>
            <tr>
                <td>Capacidad para realizar actividades diarias</td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_tareas_diarias"
                        type="radio"
                        name="capacidad_tareas_diarias"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_tareas_diarias"
                        type="radio"
                        name="capacidad_tareas_diarias"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_tareas_diarias"
                        type="radio"
                        name="capacidad_tareas_diarias"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_tareas_diarias"
                        type="radio"
                        name="capacidad_tareas_diarias"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_tareas_diarias"
                        type="radio"
                        name="capacidad_tareas_diarias"
                        value="5"
                    />
                </td>
            </tr>

            <tr>
                <td>Nivel de actividad física</td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_actividad_fisica"
                        type="radio"
                        name="nivel_actividad_fisica"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_actividad_fisica"
                        type="radio"
                        name="nivel_actividad_fisica"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_actividad_fisica"
                        type="radio"
                        name="nivel_actividad_fisica"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_actividad_fisica"
                        type="radio"
                        name="nivel_actividad_fisica"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.nivel_actividad_fisica"
                        type="radio"
                        name="nivel_actividad_fisica"
                        value="5"
                    />
                </td>
            </tr>

            <tr>
                <td>Capacidad respiratoria</td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_respiratoria"
                        type="radio"
                        name="capacidad_respiratoria"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_respiratoria"
                        type="radio"
                        name="capacidad_respiratoria"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_respiratoria"
                        type="radio"
                        name="capacidad_respiratoria"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_respiratoria"
                        type="radio"
                        name="capacidad_respiratoria"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.capacidad_respiratoria"
                        type="radio"
                        name="capacidad_respiratoria"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <td>Fuerza y flexibilidad</td>
                <td>
                    <input
                        v-model="state.editedItem.fuerza_flexibilidad"
                        type="radio"
                        name="fuerza_flexibilidad"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.fuerza_flexibilidad"
                        type="radio"
                        name="fuerza_flexibilidad"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.fuerza_flexibilidad"
                        type="radio"
                        name="fuerza_flexibilidad"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.fuerza_flexibilidad"
                        type="radio"
                        name="fuerza_flexibilidad"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.fuerza_flexibilidad"
                        type="radio"
                        name="fuerza_flexibilidad"
                        value="5"
                    />
                </td>
            </tr>
            
            <tr>
                <th>Soporte social</th>
                <th>
                    <input
                        v-model="state.editedItem.soporte_social"
                        type="radio"
                        name="soporte_social"
                        value="1"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.soporte_social"
                        type="radio"
                        name="soporte_social"
                        value="2"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.soporte_social"
                        type="radio"
                        name="soporte_social"
                        value="3"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.soporte_social"
                        type="radio"
                        name="soporte_social"
                        value="4"
                    />
                </th>
                <th>
                    <input
                        v-model="state.editedItem.soporte_social"
                        type="radio"
                        name="soporte_social"
                        value="5"
                    />
                </th>
            </tr>
            <tr>
                <td>Apoyo familiar y amigos</td>
                <td>
                    <input
                        v-model="state.editedItem.apoyo_familiares"
                        type="radio"
                        name="apoyo_familiares"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.apoyo_familiares"
                        type="radio"
                        name="apoyo_familiares"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.apoyo_familiares"
                        type="radio"
                        name="apoyo_familiares"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.apoyo_familiares"
                        type="radio"
                        name="apoyo_familiares"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.apoyo_familiares"
                        type="radio"
                        name="apoyo_familiares"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <td>Participación actividades sociales</td>
                <td>
                    <input
                        v-model="state.editedItem.participacion_social"
                        type="radio"
                        name="participacion_social"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.participacion_social"
                        type="radio"
                        name="participacion_social"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.participacion_social"
                        type="radio"
                        name="participacion_social"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.participacion_social"
                        type="radio"
                        name="participacion_social"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.participacion_social"
                        type="radio"
                        name="participacion_social"
                        value="5"
                    />
                </td>
            </tr>
            <tr>
                <td>Acceso a recursos de salud</td>
                <td>
                    <input
                        v-model="state.editedItem.acceso_recursos_salud"
                        type="radio"
                        name="acceso_recursos_salud"
                        value="1"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.acceso_recursos_salud"
                        type="radio"
                        name="acceso_recursos_salud"
                        value="2"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.acceso_recursos_salud"
                        type="radio"
                        name="acceso_recursos_salud"
                        value="3"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.acceso_recursos_salud"
                        type="radio"
                        name="acceso_recursos_salud"
                        value="4"
                    />
                </td>
                <td>
                    <input
                        v-model="state.editedItem.acceso_recursos_salud"
                        type="radio"
                        name="acceso_recursos_salud"
                        value="5"
                    />
                </td>
            </tr>
        </table>
    </v-container>
</template>

<style>
table {
    width: 80%;
    /* Ancho total de la tabla */
    border-collapse: collapse;
    margin: auto;
    /* Centra la tabla en la página */
}

th,
td {
    padding: 15px;
    /* Espacio interno en cada celda */
    text-align: center;
    /* Centra el contenido dentro de las celdas */
    border: 1px solid #ddd;
    width: 100px;
    /* Ancho mínimo para cada columna */
}

th {
    background-color: #f2f2f2;
    /* Color de fondo para los encabezados */
}
</style>
