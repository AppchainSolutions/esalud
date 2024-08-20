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
    endpoints: [
        /*         "accidente",
        "accidente_condicion",
        "calificacion",
        "derivacion",
        "lugar_atencion",
        "medio_derivacion",
        "error_critico",
        "estado_mental",
        "fuente_incidente",
        "responsable",
        "sistema_afectado",
        "tipo_atencion",
        "tipo_licencia",
        "religion",
        "unidad",
        "turno", */
    ],

    headers: [
        {
            title: "#",
            align: "center",
            sortable: true,
            key: "paciente_id",
        },
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
        apoyo_familiares: null,
        participacion_social: null,
        acceso_recursos_salud: null,
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
    formTitle: "Ficha paciente crónico",
    formCrear: "Nuevo Registro",
    formEdit: "Editar datos del atención diaria",
    urlShow: "/atencion_diaria/show",
    urlUpdate: "/atencion_diaria/update",
    urlDelete: "/atencion_diaria/delete",
    urlStore: "/atencion_diaria",
});

//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    state.list = await fetchData(state.endpoints);
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
    closeForm(state);
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

function openFormEdit(item) {
    openToEdit(state, item);
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
        <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-2 pa-2'">
            <v-toolbar-title>
                Nombre del Paciente: {{ apellidos }}, {{ nombre }}
            </v-toolbar-title>

            <v-data-table :headers="state.headers" :items="state.tableItems">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-btn variant="tonal" color="#009AA4" @click="volver">
                            Volver
                        </v-btn>
                        <v-toolbar-title>{{ state.formTitle }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon="mdi-update" variant="tonal" class="ma-2" color="#009AA4" @click="handleShow">
                        </v-btn>
                        <v-btn icon="mdi-account-multiple-plus" variant="tonal" class="ma-2" color="#009AA4"
                            @click="openFormCreate">
                        </v-btn>

                        <v-dialog v-model="state.dialog" width="auto" persistent>
                            <v-container :class="'ma-6 pa-6'">
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">{{ editedItemTitle }}
                                        </span>
                                    </v-card-title>

                                    <!-- Formulario -->
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
                                        <v-row>
                                            <v-col cols="3">
                                                <v-text-field v-model="state.editedItem.fecha
                                                    " label="Fecha" clearable type="date"
                                                    variant="underlined"></v-text-field>
                                                <v-div class="text-h6">Signos Vitales</v-div>
                                                <v-text-field v-model="state.editedItem.pa
                                                    " label="PA" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem.fc
                                                    " label="FC" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem.temp
                                                    " label="T°" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem.peso
                                                    " label="Peso" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem.altura
                                                    " label="Altura" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem.imc
                                                    " label="IMC" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-div class="text-h6">Exámenes recientes</v-div>
                                                <v-text-field v-model="state.editedItem
                                                        .fecha_examenes
                                                    " label="Fecha exámenes" clearable type="date"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem
                                                        .creatinina
                                                    " label="Creatinina" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem.vfg
                                                    " label="VFG" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem
                                                        .glicemia
                                                    " label="Glicemia" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem
                                                        .colesterol_total
                                                    " label="Colesterol total" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem
                                                        .trigliceridos
                                                    " label="Triglicéridos" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem.ldl
                                                    " label="LDL" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                                <v-text-field v-model="state.editedItem.otro
                                                    " label="Otro" clearable type="text"
                                                    variant="underlined"></v-text-field>
                                            </v-col>
                                            <v-col cols="6">
                                                <table>
                                                    <tr>
                                                        <th>
                                                            Estado general de
                                                            salud
                                                        </th>
                                                        <th>1</th>
                                                        <th>2</th>
                                                        <th>3</th>
                                                        <th>4</th>
                                                        <th>5</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Control y
                                                            seguimiento
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionA" value="1" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionA" value="2" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionA" value="3" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionA" value="4" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionA" value="5" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Estado de animo</td>
                                                        <td>
                                                            <input type="radio" name="opcionB" value="1" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionB" value="2" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionB" value="3" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionB" value="4" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionB" value="5" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Calidad de sueño
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionC" value="1" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionC" value="2" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionC" value="3" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionC" value="4" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionC" value="5" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Dolor o malestar
                                                            general
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionD" value="1" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionD" value="2" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionD" value="3" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionD" value="4" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionD" value="5" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Adherencia al
                                                            tratamiento
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionE" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionE" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionE" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionE" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionE" value="5" />
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Cumple Medicación
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionF" value="1" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionF" value="2" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionF" value="3" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionF" value="4" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionF" value="5" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Cumple
                                                            recomendaciones de
                                                            ejercicio
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionG" value="1" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionG" value="2" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionG" value="3" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionG" value="4" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionG" value="5" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Cumple dieta
                                                            recomendada
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionH" value="1" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionH" value="2" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionH" value="3" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionH" value="4" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionH" value="5" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Bienestar Físico
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionI" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionI" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionI" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionI" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionI" value="5" />
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Capacidad para
                                                            realizar actividades
                                                            diarias
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionJ" value="5" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionJ" value="5" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionJ" value="5" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionJ" value="5" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionJ" value="5" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Capacidad para
                                                            realizar actividades
                                                            diarias
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionK" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionK" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionK" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionK" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionK" value="5" />
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Nivel de actividad
                                                            física
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionL" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionL" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionL" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionL" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionL" value="5" />
                                                        </th>
                                                    </tr>

                                                    <tr>
                                                        <th>
                                                            Capacidad
                                                            respiratoria
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionM" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionM" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionM" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionM" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionM" value="5" />
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Fuerza y flexibilidad
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionN" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionN" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionN" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionN" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionN" value="5" />
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Soporte social
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionO" value="1" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionO" value="2" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionO" value="3" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionO" value="4" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="opcionO" value="5" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Apoyo familiares y amigos  
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionP" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionP" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionP" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionP" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionP" value="5" />
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Participación actividades sociales
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionQ" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionQ" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionQ" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionQ" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionQ" value="5" />
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Acceso a recursos de salud
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionAA" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionAA" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionAA" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionAA" value="5" />
                                                        </th>
                                                        <th>
                                                            <input type="radio" name="opcionAA" value="5" />
                                                        </th>
                                                    </tr>
                                                </table>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-container>
                        </v-dialog>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-tooltip text="Editar " location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" density="compact" class="mr-2 ml-2" color="#009AA4" variant="tonal"
                                :icon="'mdi-account-edit'" @click="openFormEdit(item)"></v-btn>
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
