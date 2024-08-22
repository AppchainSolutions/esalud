<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import {
    closeForm,
    fetchData,
    handleEditItem,
    handleRemoveItem,
    handleShowItem,
    handleStoreItem,
    openToCreate,
    openToEdit,
} from "@/helper.js";
defineOptions({ layout: AppLayout });

const store = useDataStore();
const nombre = store.getSelected.nombre;
const apellidos = store.getSelected.apellidos;
const state = reactive({

    editedItem: {
        paciente_id: null,
        fecha: null,
        pa: null,
        fc: null,
        fr: null,
        temp: null,
        peso: null,
        altura: null,
        imc: null,
        recomendacion_medica: null,
        cambios_tratamiento: null,
        derivación_especialista: null,
        fecha_examenes: null,
        creatinina: null,
        vfg: null,
        glicemia: null,
        colesterol_total: null,
        trigliceridos: null,
        ldl: null,
        otro: null,
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
        apoyo_familiares: null,
        participacion_social: null,
        acceso_recursos_salud: null,
    },

    defaultItem: {
        paciente_id: null,
        fecha: null,
        pa: null,
        fc: null,
        fr: null,
        temp: null,
        peso: null,
        altura: null,
        imc: null,
        recomendacion_medica: null,
        cambios_tratamiento: null,
        derivación_especialista: null,
        fecha_examenes: null,
        creatinina: null,
        vfg: null,
        glicemia: null,
        colesterol_total: null,
        trigliceridos: null,
        ldl: null,
        otro: null,
        adherencia: null,
        bienestar_fisico: null,
        control_seguimiento: null,
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
        participacion_social: null,
        acceso_recursos_salud: null,
    },
    searchQuery: {
        paciente_id: null,
    },
    tableItems: [],
    editedIndex: -1,
    list: [],
    loading: false,
    valid: null,
    formTitle: "Ficha paciente crónico",
    formCrear: "Nuevo Registro",
    formEdit: "Editar datos del atención diaria",
    urlShow: "/atencion_diaria/show",
    urlUpdate: "/atencion_diaria/update",
    urlDelete: "/atencion_diaria/delete",
    urlStore: "/atencion_diaria",
});
</script>


<template>
    <v-container :class="'ma-6 pa-6'">
        <v-card>
            <v-card-title>
                <span class="text-h5">{{ editedItemTitle }} </span>
            </v-card-title>

            <v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#009AA4" variant="tonal" @click="close">
                        Cancelar
                    </v-btn>
                    <v-btn color="#009AA4" variant="tonal" @click="storeItems">
                        Guardar
                    </v-btn>
                </v-card-actions>
                <!-- Formulario -->
                <v-row>
                    <v-col cols="3">
                        <v-text-field v-model="state.editedItem.fecha" label="Fecha" clearable type="date"
                            variant="underlined"></v-text-field>
                        <v-div class="text-h6">Signos Vitales</v-div>
                        <v-text-field v-model="state.editedItem.pa" label="PA" clearable type="text"
                            variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.fc" label="FC" clearable type="text"
                            variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.temp" label="T°" clearable type="text"
                            variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.peso" label="Peso" clearable type="text"
                            variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.altura" label="Altura" clearable type="text"
                            variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.imc" label="IMC" clearable type="text"
                            variant="underlined"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <v-div class="text-h6">Exámenes recientes</v-div>
                        <v-text-field v-model="state.editedItem.fecha_examenes" label="Fecha exámenes" clearable
                            type="date" variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.creatinina" label="Creatinina" clearable type="text"
                            variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.vfg" label="VFG" clearable type="text"
                            variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.glicemia" label="Glicemia" clearable type="text"
                            variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.colesterol_total" label="Colesterol total" clearable
                            type="text" variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.trigliceridos" label="Triglicéridos" clearable
                            type="text" variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.ldl" label="LDL" clearable type="text"
                            variant="underlined"></v-text-field>
                        <v-text-field v-model="state.editedItem.otro" label="Otro" clearable type="text"
                            variant="underlined"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <table>
                            <tr>
                                <th>Estado general de salud</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                            </tr>
                            <tr>
                                <td>Control y seguimiento</td>
                                <td>
                                    <input v-model="control_seguimiento" type="radio" name="control_seguimiento"
                                        value="1" />
                                </td>
                                <td>
                                    <input v-model="control_seguimiento" type="radio" name="control_seguimiento"
                                        value="2" />
                                </td>
                                <td>
                                    <input v-model="control_seguimiento" type="radio" name="control_seguimiento"
                                        value="3" />
                                </td>
                                <td>
                                    <input v-model="control_seguimiento" type="radio" name="control_seguimiento"
                                        value="4" />
                                </td>
                                <td>
                                    <input v-model="control_seguimiento" type="radio" name="control_seguimiento"
                                        value="5" />
                                </td>
                            </tr>
                            <tr>
                                <td>Estado de animo</td>
                                <td>
                                    <input v-model="estado_animo" type="radio" name="estado_animo" value="1" />
                                </td>
                                <td>
                                    <input v-model="estado_animo" type="radio" name="estado_animo" value="2" />
                                </td>
                                <td>
                                    <input v-model="estado_animo" type="radio" name="estado_animo" value="3" />
                                </td>
                                <td>
                                    <input v-model="estado_animo" type="radio" name="estado_animo" value="4" />
                                </td>
                                <td>
                                    <input v-model="estado_animo" type="radio" name="estado_animo" value="5" />
                                </td>
                            </tr>
                            <tr>
                                <td>Calidad de sueño</td>
                                <td>
                                    <input v-model="calidad_sueño" type="radio" name="calidad_sueño" value="1" />
                                </td>
                                <td>
                                    <input v-model="calidad_sueño" type="radio" name="calidad_sueño" value="2" />
                                </td>
                                <td>
                                    <input v-model="calidad_sueño" type="radio" name="calidad_sueño" value="3" />
                                </td>
                                <td>
                                    <input v-model="calidad_sueño" type="radio" name="calidad_sueño" value="4" />
                                </td>
                                <td>
                                    <input v-model="calidad_sueño" type="radio" name="calidad_sueño" value="5" />
                                </td>
                            </tr>
                            <tr>
                                <td>Dolor o malestar general</td>
                                <td>
                                    <input v-model="dolor_malestar" type="radio" name="dolor_malestar" value="1" />
                                </td>
                                <td>
                                    <input v-model="dolor_malestar" type="radio" name="dolor_malestar" value="2" />
                                </td>
                                <td>
                                    <input v-model="dolor_malestar" type="radio" name="dolor_malestar" value="3" />
                                </td>
                                <td>
                                    <input v-model="dolor_malestar" type="radio" name="dolor_malestar" value="4" />
                                </td>
                                <td>
                                    <input v-model="dolor_malestar" type="radio" name="dolor_malestar" value="5" />
                                </td>
                            </tr>
                            <tr>
                                <th>Adherencia al tratamiento</th>
                                <th>
                                    <input v-model="adherencia" type="radio" name="adherencia" value="5" />
                                </th>
                                <th>
                                    <input v-model="adherencia" type="radio" name="adherencia" value="5" />
                                </th>
                                <th>
                                    <input v-model="adherencia" type="radio" name="adherencia" value="5" />
                                </th>
                                <th>
                                    <input v-model="adherencia" type="radio" name="adherencia" value="5" />
                                </th>
                                <th>
                                    <input v-model="adherencia" type="radio" name="adherencia" value="5" />
                                </th>
                            </tr>
                            <tr>
                                <td>Cumple Medicación</td>
                                <td>
                                    <input v-model="cumple_medicacion" type="radio" name="cumple_medicacion"
                                        value="1" />
                                </td>
                                <td>
                                    <input v-model="cumple_medicacion" type="radio" name="cumple_medicacion"
                                        value="2" />
                                </td>
                                <td>
                                    <input v-model="cumple_medicacion" type="radio" name="cumple_medicacion"
                                        value="3" />
                                </td>
                                <td>
                                    <input v-model="cumple_medicacion" type="radio" name="cumple_medicacion"
                                        value="4" />
                                </td>
                                <td>
                                    <input v-model="cumple_medicacion" type="radio" name="cumple_medicacion"
                                        value="5" />
                                </td>
                            </tr>
                            <tr>
                                <td>Cumple recomendaciones de ejercicio</td>
                                <td>
                                    <input v-model="cumple_recomendacion" type="radio" name="opcionG" value="1" />
                                </td>
                                <td>
                                    <input v-model="cumple_recomendacion" type="radio" name="cumple_recomendacion"
                                        value="2" />
                                </td>
                                <td>
                                    <input v-model="cumple_recomendacion" type="radio" name="cumple_recomendacion"
                                        value="3" />
                                </td>
                                <td>
                                    <input v-model="cumple_recomendacion" type="radio" name="cumple_recomendacion"
                                        value="4" />
                                </td>
                                <td>
                                    <input v-model="cumple_recomendacion" type="radio" name="cumple_recomendacion"
                                        value="5" />
                                </td>
                            </tr>
                            <tr>
                                <td>Cumple dieta recomendada</td>
                                <td>
                                    <input v-model="cumple_dieta" type="radio" name="opcionH" value="1" />
                                </td>
                                <td>
                                    <input v-model="cumple_dieta" type="radio" name="opcionH" value="2" />
                                </td>
                                <td>
                                    <input v-model="cumple_dieta" type="radio" name="opcionH" value="3" />
                                </td>
                                <td>
                                    <input v-model="cumple_dieta" type="radio" name="opcionH" value="4" />
                                </td>
                                <td>
                                    <input v-model="cumple_dieta" type="radio" name="opcionH" value="5" />
                                </td>
                            </tr>
                            <tr>
                                <th>Bienestar Físico</th>
                                <th>
                                    <input v-model="bienestar_fisico" type="radio" name="bienestar_fisico" value="5" />
                                </th>
                                <th>
                                    <input v-model="bienestar_fisico" type="radio" name="bienestar_fisico" value="5" />
                                </th>
                                <th>
                                    <input v-model="bienestar_fisico" type="radio" name="bienestar_fisico" value="5" />
                                </th>
                                <th>
                                    <input v-model="bienestar_fisico" type="radio" name="bienestar_fisico" value="5" />
                                </th>
                                <th>
                                    <input v-model="bienestar_fisico" type="radio" name="bienestar_fisico" value="5" />
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    Capacidad para realizar actividades diarias
                                </td>
                                <td>
                                    <input v-model="capacidad_tareas_diarias" type="radio"
                                        name="capacidad_tareas_diarias" value="5" />
                                </td>
                                <td>
                                    <input v-model="capacidad_tareas_diarias" type="radio"
                                        name="capacidad_tareas_diarias" value="5" />
                                </td>
                                <td>
                                    <input v-model="capacidad_tareas_diarias" type="radio"
                                        name="capacidad_tareas_diarias" value="5" />
                                </td>
                                <td>
                                    <input v-model="capacidad_tareas_diarias" type="radio"
                                        name="capacidad_tareas_diarias" value="5" />
                                </td>
                                <td>
                                    <input v-model="capacidad_tareas_diarias" type="radio"
                                        name="capacidad_tareas_diarias" value="5" />
                                </td>
                            </tr>

                            <tr>
                                <th>Nivel de actividad física</th>
                                <th>
                                    <input v-model="nivel_actividad_fisica" type="radio" name="nivel_actividad_fisica"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="nivel_actividad_fisica" type="radio" name="nivel_actividad_fisica"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="nivel_actividad_fisica" type="radio" name="nivel_actividad_fisica"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="nivel_actividad_fisica" type="radio" name="nivel_actividad_fisica"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="nivel_actividad_fisica" type="radio" name="nivel_actividad_fisica"
                                        value="5" />
                                </th>
                            </tr>

                            <tr>
                                <th>Capacidad respiratoria</th>
                                <th>
                                    <input v-model="capacidad_respiratoria" type="radio" name="capacidad_respiratoria"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="capacidad_respiratoria" type="radio" name="capacidad_respiratoria"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="capacidad_respiratoria" type="radio" name="capacidad_respiratoria"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="capacidad_respiratoria" type="radio" name="capacidad_respiratoria"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="capacidad_respiratoria" type="radio" name="capacidad_respiratoria"
                                        value="5" />
                                </th>
                            </tr>
                            <tr>
                                <th>Fuerza y flexibilidad</th>
                                <th>
                                    <input v-model="fuerza_flexibilidad" type="radio" name="fuerza_flexibilidad"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="fuerza_flexibilidad" type="radio" name="fuerza_flexibilidad"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="fuerza_flexibilidad" type="radio" name="fuerza_flexibilidad"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="fuerza_flexibilidad" type="radio" name="fuerza_flexibilidad"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="fuerza_flexibilidad" type="radio" name="fuerza_flexibilidad"
                                        value="5" />
                                </th>
                            </tr>
                            <tr>
                                <td>Apoyo familiar y amigos</td>
                                <td>
                                    <input v-model="apoyo_familiares" type="radio" name="apoyo_familiares" value="1" />
                                </td>
                                <td>
                                    <input v-model="apoyo_familiares" type="radio" name="apoyo_familiares" value="2" />
                                </td>
                                <td>
                                    <input v-model="apoyo_familiares" type="radio" name="apoyo_familiares" value="3" />
                                </td>
                                <td>
                                    <input v-model="apoyo_familiares" type="radio" name="apoyo_familiares" value="4" />
                                </td>
                                <td>
                                    <input v-model="apoyo_familiares" type="radio" name="apoyo_familiares" value="5" />
                                </td>
                            </tr>
                            <tr>
                                <th>Soporte social</th>
                                <th>
                                    <input v-model="soporte_social" type="radio" name="soporte_social" value="5" />
                                </th>
                                <th>
                                    <input v-model="soporte_social" type="radio" name="soporte_social" value="5" />
                                </th>
                                <th>
                                    <input v-model="soporte_social" type="radio" name="soporte_social" value="5" />
                                </th>
                                <th>
                                    <input v-model="soporte_social" type="radio" name="soporte_social" value="5" />
                                </th>
                                <th>
                                    <input v-model="soporte_social" type="radio" name="soporte_social" value="5" />
                                </th>
                            </tr>
                            <tr>
                                <th>Participación actividades sociales</th>
                                <th>
                                    <input v-model="participacion_social" type="radio" name="participacion_social"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="participacion_social" type="radio" name="participacion_social"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="participacion_social" type="radio" name="participacion_social"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="participacion_social" type="radio" name="participacion_social"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="participacion_social" type="radio" name="participacion_social"
                                        value="5" />
                                </th>
                            </tr>
                            <tr>
                                <th>Acceso a recursos de salud</th>
                                <th>
                                    <input v-model="acceso_recursos_salud" type="radio" name="acceso_recursos_salud"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="acceso_recursos_salud" type="radio" name="acceso_recursos_salud"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="acceso_recursos_salud" type="radio" name="acceso_recursos_salud"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="acceso_recursos_salud" type="radio" name="acceso_recursos_salud"
                                        value="5" />
                                </th>
                                <th>
                                    <input v-model="acceso_recursos_salud" type="radio" name="acceso_recursos_salud"
                                        value="5" />
                                </th>
                            </tr>
                        </table>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
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
