<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import {
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
    endpoints: [
        /*         "accidente",
        "turno", */
    ],

    headers: [
        {
            title: "Fecha control",
            align: "center",
            sortable: true,
            key: "fecha",
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" },
    ],
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
        fecha_examenes: null,
        creatinina: null,
        vfg: null,
        glicemia: null,
        colesterol_total: null,
        trigliceridos: null,
        ldl: null,
        otro: null,
        recomendacion_medica: null,
        cambio_tratamiento: null,
        derivacion_especialista: null,
        comentario: null,
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
        fecha: null,
        pa: null,
        fc: null,
        fr: null,
        temp: null,
        peso: null,
        altura: null,
        imc: null,
        creatinina: null,
        vfg: null,
        glicemia: null,
        colesterol_total: null,
        trigliceridos: null,
        ldl: null,
        otro: null,
        recomendacion_medica: null,
        cambio_tratamiento: null,
        derivacion_especialista: null,
        fecha_examenes: null,
        comentario: null,
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
    searchQuery: {
        paciente_id: null,
    },
    dialogFicha: false,
    dialogPerfil: false,
    tableItems: [],
    editedIndex: -1,
    list: [],
    loading: false,
    tab: null,
    formTitle: "Ficha Paciente Crónico",
    formCrear: "Nuevo Registro Crónicos",
    formEdit: "Editar datos Ficha Crónicos",
    urlShow: "/ficha_cronicos/show",
    urlUpdate: "/ficha_cronicos/update",
    urlDelete: "/ficha_cronicos/delete",
    urlStore: "/ficha_cronicos",
});

//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    state.list = await fetchData(state.endpoints);
    state.editedItem = store.getSelected;
});

//**********\\\\  COMPUTE PROPERTIES ////*************/
const editedItemTitle = computed(() =>
    state.editedIndex === -1 ? state.formCrear : state.formEdit
);

//**********\\\\ METHODS ////*************/
function volver() {
    window.history.back();
}
function close() {
    state.dialogFicha = false;
}
//**********\\\\  CRUD ////*************/
const handleShow = async () => {
    state.searchQuery.paciente_id = store.getSelected.id;
    await handleShowItem(state);
};

function openFormCreate() {
    openToCreate(state);
}

function storeItems() {
    return state.editedIndex > -1 ? update() : create();
}

const create = async () => {
    await handleStoreItem(state);
    closeForm(state);
};

function openFichaCronicos(item) {
    console.log(item);
    openToEdit(state, item);
    state.dialogFicha = true;
}

const update = async () => {
    await handleEditItem(state);
    closeForm(state);
};

const remove = async (item) => {
    await handleRemoveItem(state, item);
};
</script>

<template>
    <v-container>
        <v-sheet color="white" :elevation="4" :class="'rounded-lg ma-2 pa-2'">
            <v-toolbar-title>
                Nombre del Paciente: {{ apellidos }}, {{ nombre }}
            </v-toolbar-title>

            <v-data-table :headers="state.headers" :items="state.tableItems">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-btn variant="tonal" color="#009AA4" @click="volver">
                            <<
                        </v-btn>
                        <v-spacer> </v-spacer>
                        <v-btn icon="mdi-update" variant="tonal" class="ma-2" color="#009AA4" @click="handleShow">
                        </v-btn>
                        <v-btn icon="mdi-account-multiple-plus" variant="tonal" class="ma-2" color="#009AA4"
                            @click="openFormCreate">
                        </v-btn>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-tooltip text="Ficha Paciente" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" density="compact" class="mr-2 ml-2" color="#009AA4" variant="tonal"
                                :icon="'mdi-list-box-outline'" @click="openFichaCronicos(item)"></v-btn>
                        </template>
                    </v-tooltip>

                    <v-tooltip text="Eliminar" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" density="compact" class="mr-2 ml-2" color="#009AA4" variant="tonal"
                                :icon="'mdi-delete'" @click="remove(item)"></v-btn>
                        </template>
                    </v-tooltip>
                </template>

                <template v-slot:no-data>
                    <v-btn variant="tonal" @click="handleShow"> Iniciar </v-btn>
                </template>
            </v-data-table>

            <v-dialog v-model="state.dialogFicha" scrollable width="100%">
                <v-card>
                    <v-container class="ma-4 pa-2">
                        <v-toolbar flat class="ma-2 pa-2">
                            <v-toolbar-title>Paciente: {{ nombre }} {{ apellidos }} </v-toolbar-title>

                            <v-btn color="#009AA4" variant="tonal" @click="close" class="ma-2 pa-2">
                                Cerrar
                            </v-btn>

                            <v-btn color="#009AA4" variant="tonal" @click="update" class="ma-2 pa-2">
                                Guardar
                            </v-btn>
                        </v-toolbar>

                        <v-tabs center-active v-model="state.tab">
                            <v-tab>Ficha</v-tab>
                            <v-tab>Perfil</v-tab>
                        </v-tabs>

                        <v-card-text>
                            <v-tabs-window v-model="state.tab">
                                <v-tabs-window-item value="Ficha">
                                    <v-card-title>
                                    </v-card-title>

                                    <v-row>
                                        <v-col cols="4">
                                            <v-div class="font-weight-black">Signos Vitales</v-div>
                                            <v-row>
                                                <v-col>
                                                    <v-text-field v-model="state.editedItem.pa" label="PA" clearable
                                                        type="text" variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.fc" label="FC" clearable
                                                        type="text" variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.fr" label="FC" clearable
                                                        type="text" variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.temp" label="T°" clearable
                                                        type="text" variant="underlined"></v-text-field>
                                                </v-col>
                                                <v-col>
                                                    <v-text-field v-model="state.editedItem.peso" label="Peso" clearable
                                                        type="text" variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.altura
                                                        " label="Altura" clearable type="text"
                                                        variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.imc" label="IMC" clearable
                                                        type="text" variant="underlined"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-div class="font-weight-black">Exámenes recientes</v-div>
                                            <v-row>
                                                <v-col class="ma-2 pa-2">
                                                    <v-text-field v-model="state.editedItem
                                                        .fecha_examenes
                                                        " label="Fecha exámenes" clearable type="date"
                                                        variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.creatinina
                                                        " label="Creatinina" clearable type="text"
                                                        variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.vfg" label="VFG" clearable
                                                        type="text" variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.glicemia
                                                        " label="Glicemia" clearable type="text"
                                                        variant="underlined"></v-text-field>
                                                </v-col>

                                                <v-col class="ma-2 pa-2">
                                                    <v-text-field v-model="state.editedItem
                                                        .colesterol_total
                                                        " label="Colesterol total" clearable type="text"
                                                        variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem
                                                        .trigliceridos
                                                        " label="Triglicéridos" clearable type="text"
                                                        variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.ldl" label="LDL" clearable
                                                        type="text" variant="underlined"></v-text-field>
                                                    <v-text-field v-model="state.editedItem.otro" label="Otro" clearable
                                                        type="text" variant="underlined"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-col>

                                        <v-col>
                                            <v-div class="font-weight-black">Plan de acción</v-div>
                                            <v-textarea v-model="state.editedItem
                                                .recomendacion_medica
                                                " label="Recomendación Médica" clearable variant="underlined" rows="1"
                                                auto-grow shaped></v-textarea>
                                            <v-textarea v-model="state.editedItem.cambio_tratamiento
                                                " label="Cambio de Tratamiento" clearable variant="underlined" rows="1"
                                                auto-grow shaped></v-textarea>
                                            <v-textarea v-model="state.editedItem
                                                .derivacion_especialista
                                                " label="Derivación a especialista" clearable variant="underlined"
                                                rows="1" auto-grow shaped></v-textarea>
                                            <v-textarea v-model="state.editedItem.comentario" label="Comentario"
                                                clearable variant="underlined" rows="1" auto-grow shaped></v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-tabs-window-item>

                                <v-tabs-window-item value="Perfil">
                                    <v-container fluid>

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
                                                    <input v-model="state.editedItem.nivel_energia" type="radio"
                                                        name="nivel_energia" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.nivel_energia" type="radio"
                                                        name="nivel_energia" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.nivel_energia" type="radio"
                                                        name="nivel_energia" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.nivel_energia" type="radio"
                                                        name="nivel_energia" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.nivel_energia" type="radio"
                                                        name="nivel_energia" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Estado de animo</td>
                                                <td>
                                                    <input v-model="state.editedItem.estado_animo" type="radio"
                                                        name="estado_animo" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.estado_animo" type="radio"
                                                        name="estado_animo" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.estado_animo" type="radio"
                                                        name="estado_animo" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.estado_animo" type="radio"
                                                        name="estado_animo" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.estado_animo" type="radio"
                                                        name="estado_animo" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Calidad de sueño</td>
                                                <td>
                                                    <input v-model="state.editedItem.calidad_sueño" type="radio"
                                                        name="calidad_sueño" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.calidad_sueño" type="radio"
                                                        name="calidad_sueño" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.calidad_sueño" type="radio"
                                                        name="calidad_sueño" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.calidad_sueño" type="radio"
                                                        name="calidad_sueño" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.calidad_sueño" type="radio"
                                                        name="calidad_sueño" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Dolor o malestar general</td>
                                                <td>
                                                    <input v-model="state.editedItem.dolor_malestar" type="radio"
                                                        name="dolor_malestar" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.dolor_malestar" type="radio"
                                                        name="dolor_malestar" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.dolor_malestar" type="radio"
                                                        name="dolor_malestar" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.dolor_malestar" type="radio"
                                                        name="dolor_malestar" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.dolor_malestar" type="radio"
                                                        name="dolor_malestar" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Adherencia al tratamiento</th>
                                                <th>
                                                    <input v-model="state.editedItem.adherencia" type="radio"
                                                        name="adherencia" value="1" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.adherencia" type="radio"
                                                        name="adherencia" value="2" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.adherencia" type="radio"
                                                        name="adherencia" value="3" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.adherencia" type="radio"
                                                        name="adherencia" value="4" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.adherencia" type="radio"
                                                        name="adherencia" value="5" />
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>Cumple Medicación</td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_medicacion" type="radio"
                                                        name="cumple_medicacion" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_medicacion" type="radio"
                                                        name="cumple_medicacion" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_medicacion" type="radio"
                                                        name="cumple_medicacion" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_medicacion" type="radio"
                                                        name="cumple_medicacion" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_medicacion" type="radio"
                                                        name="cumple_medicacion" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cumple recomendaciones de ejercicio</td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_recomendacion" type="radio"
                                                        name="cumple_recomendacion" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_recomendacion" type="radio"
                                                        name="cumple_recomendacion" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_recomendacion" type="radio"
                                                        name="cumple_recomendacion" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_recomendacion" type="radio"
                                                        name="cumple_recomendacion" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_recomendacion" type="radio"
                                                        name="cumple_recomendacion" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cumple dieta recomendada</td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_dieta" type="radio"
                                                        name="cumple_dieta" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_dieta" type="radio"
                                                        name="cumple_dieta" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_dieta" type="radio"
                                                        name="cumple_dieta" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_dieta" type="radio"
                                                        name="cumple_dieta" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.cumple_dieta" type="radio"
                                                        name="cumple_dieta" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Bienestar Físico</th>
                                                <th>
                                                    <input v-model="state.editedItem.bienestar_fisico" type="radio"
                                                        name="bienestar_fisico" value="1" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.bienestar_fisico" type="radio"
                                                        name="bienestar_fisico" value="2" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.bienestar_fisico" type="radio"
                                                        name="bienestar_fisico" value="3" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.bienestar_fisico" type="radio"
                                                        name="bienestar_fisico" value="4" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.bienestar_fisico" type="radio"
                                                        name="bienestar_fisico" value="5" />
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>Capacidad para realizar actividades diarias</td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_tareas_diarias"
                                                        type="radio" name="capacidad_tareas_diarias" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_tareas_diarias"
                                                        type="radio" name="capacidad_tareas_diarias" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_tareas_diarias"
                                                        type="radio" name="capacidad_tareas_diarias" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_tareas_diarias"
                                                        type="radio" name="capacidad_tareas_diarias" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_tareas_diarias"
                                                        type="radio" name="capacidad_tareas_diarias" value="5" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Nivel de actividad física</td>
                                                <td>
                                                    <input v-model="state.editedItem.nivel_actividad_fisica"
                                                        type="radio" name="nivel_actividad_fisica" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.nivel_actividad_fisica"
                                                        type="radio" name="nivel_actividad_fisica" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.nivel_actividad_fisica"
                                                        type="radio" name="nivel_actividad_fisica" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.nivel_actividad_fisica"
                                                        type="radio" name="nivel_actividad_fisica" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.nivel_actividad_fisica"
                                                        type="radio" name="nivel_actividad_fisica" value="5" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Capacidad respiratoria</td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_respiratoria"
                                                        type="radio" name="capacidad_respiratoria" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_respiratoria"
                                                        type="radio" name="capacidad_respiratoria" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_respiratoria"
                                                        type="radio" name="capacidad_respiratoria" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_respiratoria"
                                                        type="radio" name="capacidad_respiratoria" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.capacidad_respiratoria"
                                                        type="radio" name="capacidad_respiratoria" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Fuerza y flexibilidad</td>
                                                <td>
                                                    <input v-model="state.editedItem.fuerza_flexibilidad" type="radio"
                                                        name="fuerza_flexibilidad" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.fuerza_flexibilidad" type="radio"
                                                        name="fuerza_flexibilidad" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.fuerza_flexibilidad" type="radio"
                                                        name="fuerza_flexibilidad" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.fuerza_flexibilidad" type="radio"
                                                        name="fuerza_flexibilidad" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.fuerza_flexibilidad" type="radio"
                                                        name="fuerza_flexibilidad" value="5" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>Soporte social</th>
                                                <th>
                                                    <input v-model="state.editedItem.soporte_social" type="radio"
                                                        name="soporte_social" value="1" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.soporte_social" type="radio"
                                                        name="soporte_social" value="2" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.soporte_social" type="radio"
                                                        name="soporte_social" value="3" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.soporte_social" type="radio"
                                                        name="soporte_social" value="4" />
                                                </th>
                                                <th>
                                                    <input v-model="state.editedItem.soporte_social" type="radio"
                                                        name="soporte_social" value="5" />
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>Apoyo familiar y amigos</td>
                                                <td>
                                                    <input v-model="state.editedItem.apoyo_familiares" type="radio"
                                                        name="apoyo_familiares" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.apoyo_familiares" type="radio"
                                                        name="apoyo_familiares" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.apoyo_familiares" type="radio"
                                                        name="apoyo_familiares" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.apoyo_familiares" type="radio"
                                                        name="apoyo_familiares" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.apoyo_familiares" type="radio"
                                                        name="apoyo_familiares" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Participación actividades sociales</td>
                                                <td>
                                                    <input v-model="state.editedItem.participacion_social" type="radio"
                                                        name="participacion_social" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.participacion_social" type="radio"
                                                        name="participacion_social" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.participacion_social" type="radio"
                                                        name="participacion_social" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.participacion_social" type="radio"
                                                        name="participacion_social" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.participacion_social" type="radio"
                                                        name="participacion_social" value="5" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Acceso a recursos de salud</td>
                                                <td>
                                                    <input v-model="state.editedItem.acceso_recursos_salud" type="radio"
                                                        name="acceso_recursos_salud" value="1" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.acceso_recursos_salud" type="radio"
                                                        name="acceso_recursos_salud" value="2" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.acceso_recursos_salud" type="radio"
                                                        name="acceso_recursos_salud" value="3" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.acceso_recursos_salud" type="radio"
                                                        name="acceso_recursos_salud" value="4" />
                                                </td>
                                                <td>
                                                    <input v-model="state.editedItem.acceso_recursos_salud" type="radio"
                                                        name="acceso_recursos_salud" value="5" />
                                                </td>
                                            </tr>
                                        </table>
                                    </v-container>
                                </v-tabs-window-item>
                            </v-tabs-window>
                        </v-card-text>
                    </v-container>
                </v-card>
            </v-dialog>

        </v-sheet>
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
