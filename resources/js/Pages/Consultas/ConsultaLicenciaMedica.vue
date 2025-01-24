<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted } from "vue";
import { handlesearchItemss, fetchData } from "@/utils/helper.js";

defineOptions({ layout: AppLayout });

const state = reactive({
    endpoints: ["area", "ceco", "empresa", "planta", "unidad"],

    headers: [
        { title: "RUT", align: "center", sortable: true, key: "rut" },
        {
            title: "Nombre",
            align: "center",
            sortable: true,
            key: "nombre",
        },
        {
            title: "Apellidos",
            sortable: true,
            align: "center",
            key: "apellidos",
        },
        {
            title: "Empresa",
            sortable: true,
            align: "center",
            key: "empresa.descripcion",
        },
        {
            title: "Fecha de inicio",
            sortable: true,
            align: "center",
            key: "fecha_inicio",
        },
        {
            title: "Fecha de término",
            sortable: true,
            align: "center",
            key: "fecha_termino",
        },
        {
            title: "Fecha de emisión",
            sortable: true,
            align: "center",
            key: "fecha_emision",
        },
        {
            title: "Fecha de recepción",
            sortable: true,
            align: "center",
            key: "fecha_recepcion",
        },

        { title: "Acciones", align: "center", key: "actions" },
    ],

    rutRules: [
        (value) => {
            const regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
            if (!regex.test(value)) {
                return false;
            }

            // Separar el número y el dígito verificador
            let splitrut = value.split("-");
            let num = splitrut[0];
            let dv = splitrut[1].toLowerCase();

            // Calcular el dígito verificador esperado
            let m = 0,
                s = 1;
            for (; num; num = Math.floor(num / 10)) {
                s = (s + (num % 10) * (9 - (m++ % 6))) % 11;
            }
            let dvEsperado = s ? s - 1 : "k";
            let validate = dv == dvEsperado;

            if (validate) return true;
            return "El rut es incorrecto";
        },
    ],

    itemsView: {
        paciente_id: null,
        fecha_emision: null,
        fecha_inicio: null,
        fecha_recepcion: null,
        fecha_termino: null,
        caract_reposo: null,
        lugar_reposo: null,
        tipo_licencia: null,
        recuperabilidad_laboral: false,
        inicio_invalidez: false,
        titulo_profesional: null,
        nombre_profesional: null,
        comentario: null,
    },

    searchQuery: {
        activo: true,
        area: null,
        ceco: null,
        empresa: null,
        planta: null,
        rut: null,
        unidad: null,

        fecha_emision: { desde: null, hasta: null },
        fecha_recepcion: { desde: null, hasta: null },
        fecha_inicio: { desde: null, hasta: null },
        fecha_termino: { desde: null, hasta: null },

        caract_reposo: null,
        lugar_reposo: null,
        tipo_licencia: null,
        recuperabilidad_laboral: false,
        inicio_invalidez: false,
        titulo_profesional: null,
        nombre_profesional: null,
    },
    caract_reposo: [
        "Total",
        "Parcial - Mañana",
        "Parcial - Tarde",
        "Parcial - Noche",
    ],
    lugar_reposo: ["Domicilio", "Hospital", "Otro domicilio"],
    tipo_licencia: [
        "Accidente del trabajo o trayecto",
        "Enfermedad grave hijo menor de 1 año",
        "Enfermedad o accidente común",
        "Enfermedad profesional",
        "Licencia maternal pre y post natal",
        "Patología del embarazo",
        "Prorroga medicina preventiva",
    ],
    titulo_profesional: ["Médico", "Dentista", "Matrona"],
    dialog: false,
    tableItems: [],
    formItems: [],
    editedIndex: -1,
    list: [],
    loadingSearch: false,
    valid: null,
    formTitle: "Consulta de Licencias Médicas",
    urlSearch: "/consulta/licencia/search",
});

//**********\\\\  LIFE CYCLE HOOKS ////*************/
/**
 * Initializes the component by calling the 'initialize' function.
 *
 * @function onMounted
 * @returns {void}
 */
onMounted(async () => {
    state.list = await fetchData(state.endpoints);
});

//**********\\\\ METHODS ////*************/

function VerDetalles(item) {
    state.dialog = true;
    state.itemsView = { ...item };
}
function close() {
    state.dialog = false;
}

//**********\\\\  CRUD ////*************/

const handleSearch = async () => {
    await handlesearchItemss(state);
};
</script>

<template>
    <v-container fluid>
        <v-card>
            <v-card-title>
                <v-toolbar flat>
                    <v-toolbar-title>{{ state.formTitle }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </v-card-title>

            <v-card-text>
                <v-sheet
                    color="white"
                    :elevation="4"
                    :class="'rounded-lg ma-2 pa-2'"
                >
                    <!-- SEARCH -->
                    <v-container fluid>
                        <v-card-text>
                            <!-- ********** -->

                            <v-row>
                                <v-col>
                                    <v-text-field
                                        clearable
                                        label="Rut"
                                        variant="underlined"
                                        :rules="state.rutRules"
                                        v-model="state.searchQuery.rut"
                                    ></v-text-field>
                                    <v-select
                                        clearable
                                        label="Empresa"
                                        variant="underlined"
                                        v-model="state.searchQuery.empresa"
                                        :items="state.list.empresa"
                                        item-title="descripcion"
                                        item-value="id"
                                    ></v-select>
                                    <v-select
                                        clearable
                                        label="Unidad"
                                        variant="underlined"
                                        v-model="state.searchQuery.unidad"
                                        :items="state.list.unidad"
                                        item-title="descripcion"
                                        item-value="id"
                                    ></v-select>
                                    <v-select
                                        clearable
                                        label="Area"
                                        v-model="state.searchQuery.area"
                                        variant="underlined"
                                        :items="state.list.area"
                                        item-title="descripcion"
                                        item-value="id"
                                    ></v-select>
                                    <v-select
                                        clearable
                                        label="Area (cecos)"
                                        v-model="state.searchQuery.ceco"
                                        variant="underlined"
                                        :items="state.list.ceco"
                                        item-title="descripcion"
                                        item-value="id"
                                    ></v-select>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        clearable
                                        label="Fecha emision (desde)"
                                        variant="underlined"
                                        v-model="
                                            state.searchQuery.fecha_emision
                                                .desde
                                        "
                                        type="date"
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha emisión (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_emision
                                                .hasta
                                        "
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha recepción (desde)"
                                        variant="underlined"
                                        v-model="
                                            state.searchQuery.fecha_recepcion
                                                .desde
                                        "
                                        type="date"
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha recepción (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_recepcion
                                                .hasta
                                        "
                                    ></v-text-field>
                                    <v-switch
                                        v-model="state.searchQuery.activo"
                                        hide-details
                                        class="ml-4 mb-4"
                                        variant="underlined"
                                        color="green-darken-3"
                                        inset
                                        label="Activo"
                                    ></v-switch>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        clearable
                                        label="Fecha inicio (desde)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_inicio.desde
                                        "
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha inicio (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_inicio.hasta
                                        "
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha termino (desde)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_termino
                                                .desde
                                        "
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha termino (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_termino
                                                .hasta
                                        "
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-select
                                        v-model="
                                            state.searchQuery.caract_reposo
                                        "
                                        label="Características del reposo"
                                        variant="underlined"
                                        :items="state.caract_reposo"
                                        clearable
                                    ></v-select>
                                    <v-select
                                        v-model="state.searchQuery.lugar_reposo"
                                        label="Lugar del reposo"
                                        variant="underlined"
                                        :items="state.lugar_reposo"
                                        clearable
                                    ></v-select>
                                    <v-select
                                        v-model="
                                            state.searchQuery.tipo_licencia
                                        "
                                        label="Tipo de Licencia"
                                        variant="underlined"
                                        :items="state.tipo_licencia"
                                        clearable
                                    ></v-select>
                                    <v-switch
                                        v-model="
                                            state.searchQuery
                                                .recuperabilidad_laboral
                                        "
                                        hide-details
                                        class="ml-4"
                                        variant="underlined"
                                        color="primary"
                                        inset
                                        label="Recuperabilidad Laboral"
                                    ></v-switch>
                                    <v-switch
                                        v-model="
                                            state.searchQuery.inicio_invalidez
                                        "
                                        hide-details
                                        class="ml-4"
                                        variant="underlined"
                                        color="primary"
                                        inset
                                        label="Inicio Invalidez"
                                    ></v-switch>
                                    <v-text-field
                                        v-model="
                                            state.searchQuery.nombre_profesional
                                        "
                                        label="Nombre del Profesional"
                                        type="text"
                                        variant="underlined"
                                    ></v-text-field>
                                    <v-select
                                        v-model="
                                            state.searchQuery.titulo_profesional
                                        "
                                        label="Titulo profesional"
                                        variant="underlined"
                                        :items="state.titulo_profesional"
                                        clearable
                                    ></v-select>
                                </v-col>
                            </v-row>

                            <!-- ********** -->
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                prepend-icon="mdi-file-search"
                                variant="tonal"
                                color="#009AA4"
                                :loading="state.loadingSearch"
                                @click="handleSearch"
                            >
                                Buscar
                            </v-btn>

                            <v-btn
                                prepend-icon="mdi-microsoft-excel"
                                variant="tonal"
                                color="#009AA4"
                            >
                                <download-excel
                                    :data="state.tableItems"
                                    name="consulta_licencias.xls"
                                >
                                    Bajar archivo
                                </download-excel>
                            </v-btn>
                        </v-card-actions>
                    </v-container>

                    <!-- TABLA -->
                    <v-container fluid>
                        <v-data-table
                            :headers="state.headers"
                            :items="state.tableItems"
                            :sort-by="[{ key: 'apellidos', order: 'asc' }]"
                        >
                            <template v-slot:item.actions="{ item }">
                                <v-tooltip text="Ver detalles" location="top">
                                    <template v-slot:activator="{ props }">
                                        <v-btn
                                            v-bind="props"
                                            density="compact"
                                            color="#662D91"
                                            class="mr-2 ml-2"
                                            :icon="'mdi-eye'"
                                            @click="VerDetalles(item)"
                                        ></v-btn>
                                    </template>
                                </v-tooltip>
                            </template>
                        </v-data-table>
                    </v-container>
                </v-sheet>
            </v-card-text>
        </v-card>

        <!-- FORM -->
        <v-container>
            <v-dialog v-model="state.dialog">
                <v-sheet elevation="4" class="ma-4 pa-4">
                    <v-card>
                        <v-form readonly>
                            <v-sheet elevation="2" class="ma-2 pa-2">
                                <v-card-title>
                                    <span class="text-h5">
                                        {{ state.formTitle }}
                                    </span>
                                </v-card-title>
                            </v-sheet>
                            <v-card-text>
                                <!-- ********** -->

                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            v-model="state.itemsView.folio"
                                            label="Folio"
                                            type="number"
                                            variant="underlined"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="
                                                state.itemsView.fecha_emision
                                            "
                                            label="Fecha emisión"
                                            type="date"
                                            variant="underlined"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="
                                                state.itemsView.fecha_recepcion
                                            "
                                            label="Fecha recepción"
                                            type="date"
                                            variant="underlined"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                            v-model="
                                                state.itemsView.fecha_inicio
                                            "
                                            label="Fecha inicio"
                                            type="date"
                                            variant="underlined"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="
                                                state.itemsView.fecha_termino
                                            "
                                            label="Fecha de término"
                                            type="date"
                                            variant="underlined"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="state.itemsView.comentario"
                                            label="Comentario"
                                            type="text"
                                            variant="underlined"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-select
                                            v-model="
                                                state.itemsView.caract_reposo
                                            "
                                            label="Características del reposo"
                                            variant="underlined"
                                            :items="state.caract_reposo"
                                        ></v-select>
                                        <v-select
                                            v-model="
                                                state.itemsView.lugar_reposo
                                            "
                                            label="Lugar del reposo"
                                            variant="underlined"
                                            :items="state.lugar_reposo"
                                        ></v-select>
                                        <v-select
                                            v-model="
                                                state.itemsView.tipo_licencia
                                            "
                                            label="Tipo de Licencia"
                                            variant="underlined"
                                            :items="state.tipo_licencia"
                                        ></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-switch
                                            v-model="
                                                state.itemsView
                                                    .recuperabilidad_laboral
                                            "
                                            hide-details
                                            class="ml-4"
                                            variant="underlined"
                                            color="primary"
                                            inset
                                            label="Recuperabilidad Laboral"
                                        ></v-switch>
                                        <v-switch
                                            v-model="
                                                state.itemsView.inicio_invalidez
                                            "
                                            hide-details
                                            class="ml-4"
                                            variant="underlined"
                                            color="primary"
                                            inset
                                            label="Inicio Invalidez"
                                        ></v-switch>
                                        <v-text-field
                                            v-model="
                                                state.itemsView
                                                    .nombre_profesional
                                            "
                                            label="Nombre del Profesional"
                                            type="text"
                                            variant="underlined"
                                        ></v-text-field>
                                        <v-select
                                            v-model="
                                                state.itemsView
                                                    .titulo_profesional
                                            "
                                            label="Titulo profesional"
                                            variant="underlined"
                                            :items="state.titulo_profesional"
                                        ></v-select>
                                    </v-col>
                                </v-row>

                                <!-- ********** -->
                            </v-card-text>

                            <v-sheet elevation="2" class="ma-2 pa-2">
                                <v-card-actions>
                                    <v-btn
                                        class="mr-2 ml-2"
                                        color="#662D91"
                                        text="Cerrar"
                                        variant="tonal"
                                        @click="close()"
                                    ></v-btn>
                                </v-card-actions>
                            </v-sheet>
                        </v-form>
                    </v-card>
                </v-sheet>
            </v-dialog>
        </v-container>
    </v-container>
</template>
