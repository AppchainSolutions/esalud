<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted } from "vue";
import { fetchData, handleSearchItem } from "@/helper.js";

defineOptions({ layout: AppLayout });

const state = reactive({
    endpoints: [
        "area",
        "ceco",
        "empresa",
        "planta",
        "unidad",
        "seguro",
        "tipo_enfermedad",
    ],

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
            title: "Folio",
            align: "start",
            sortable: true,
            key: "folio",
        },
        {
            title: "Tipo de enfermedad",
            align: "start",
            sortable: true,
            key: "tipo_enfermedad.descripcion",
        },
        {
            title: "Planta",
            align: "start",
            sortable: true,
            key: "planta.descripcion",
        },
        {
            title: "Fecha de admision",
            align: "start",
            sortable: true,
            key: "fecha_admision",
        },
        {
            title: "Estado",
            align: "start",
            sortable: true,
            key: "estado_diep",
        },

        { title: "Acciones", align: "center", key: "actions" },
    ],

    searchQuery: {
        activo: "true",
        area: null,
        ceco: null,
        empresa: null,
        planta: null,
        rut: null,
        unidad: null,
        tipo_enfermedad: null,
        estado_diep: "No Aprobado",
        fecha_admision: {
            desde: null,
            hasta: null,
        },
    },

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
        enfermedad: null,
        seguro: null,
        comentario: null,
        estado_diep: "No Aprobado",
        fecha_admision: null,
        folio: null,
        idpgp: null,
        numero_resolucion: null,
        origen_denuncia: null,
        sucursal: null,
        tipo_enfermedad: null,
        validado_por: null,
    },
    dialog: false,
    tableItems: [],
    formItems: [],
    editedIndex: -1,
    loadingSearch: false,
    list: [],
    valid: null,
    formTitle: "Consulta DIEP",
    urlSearch: "/consulta/diep/search",
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
    await handleSearchItem(state);
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
                                <!-- Datos del solicitante -->
                                <v-col>
                                    <v-text-field
                                        label="Rut"
                                        variant="underlined"
                                        :rules="state.rutRules"
                                        v-model="state.searchQuery.rut"
                                    ></v-text-field>
                                    <v-select
                                        label="Empresa"
                                        variant="underlined"
                                        v-model="state.searchQuery.empresa"
                                        :items="state.list.empresa"
                                        item-title="nombre"
                                        item-value="id"
                                    ></v-select>
                                    <v-select
                                        label="Unidad"
                                        variant="underlined"
                                        v-model="state.searchQuery.unidad"
                                        :items="state.list.unidad"
                                        item-title="descripcion"
                                        item-value="id"
                                    ></v-select>
                                    <v-select
                                        label="Area"
                                        v-model="state.searchQuery.area"
                                        variant="underlined"
                                        :items="state.list.area"
                                        item-title="descripcion"
                                        item-value="id"
                                    ></v-select>
                                    <v-select
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
                                        label="Fecha admision (desde)"
                                        variant="underlined"
                                        v-model="
                                            state.searchQuery.fecha_admision
                                                .desde
                                        "
                                        type="date"
                                    ></v-text-field>
                                    <v-text-field
                                        label="Fecha admision (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_admision
                                                .hasta
                                        "
                                    ></v-text-field>
                                    <v-switch
                                        v-model="state.searchQuery.activo"
                                        hide-details
                                        true-value="true"
                                        false-value="false"
                                        class="ml-4 mt-4"
                                        variant="underlined"
                                        color="green-darken-3"
                                        value="No Aprobado"
                                        inset
                                        label="Activo"
                                    ></v-switch>
                                    <v-switch
                                        v-model="state.searchQuery.estado_diep"
                                        hide-details
                                        true-value="Aprobado"
                                        false-value="No Aprobado"
                                        class="ml-4 mt-4"
                                        variant="underlined"
                                        color="green-darken-3"
                                        value="No Aprobado"
                                        :inset="true"
                                        :label="`Estado Diep: ${state.searchQuery.estado_diep.toString()}`"
                                    ></v-switch>
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
                                @click="handleSearch()"
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
                                    name="atenciones_diarias.xls"
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
                                    <span class="text-h5"> Consulta DIEP </span>
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
                                            v-model="state.itemsView.idpgp"
                                            label="IDPGP"
                                            type="number"
                                            variant="underlined"
                                        ></v-text-field>

                                        <v-select
                                            v-model="state.itemsView.enfermedad"
                                            :items="state.list.enfermedad"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Enfermedad"
                                            variant="underlined"
                                        ></v-select>

                                        <v-select
                                            v-model="state.itemsView.seguro"
                                            :items="state.list.seguro"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Adm. Seguro de Vida"
                                            variant="underlined"
                                        ></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-switch
                                            v-model="
                                                state.itemsView.estado_diep
                                            "
                                            hide-details
                                            true-value="Aprobado"
                                            false-value="No Aprobado"
                                            class="ml-4 mb-4"
                                            variant="underlined"
                                            color="green-darken-3"
                                            value="No Aprobado"
                                            :inset="true"
                                            :label="`Estado Diep: ${state.searchQuery.estado_diep.toString()}`"
                                        ></v-switch>

                                        <v-text-field
                                            v-model="
                                                state.itemsView.fecha_admision
                                            "
                                            label="fecha_admision"
                                            type="date"
                                            variant="underlined"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="
                                                state.itemsView
                                                    .numero_resolucion
                                            "
                                            label="Número de resolución"
                                            type="number"
                                            variant="underlined"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="
                                                state.itemsView.origen_denuncia
                                            "
                                            label="Origen denuncia"
                                            type="text"
                                            variant="underlined"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col>
                                        <v-select
                                            v-model="
                                                state.itemsView.tipo_enfermedad
                                            "
                                            label="Tipo de enfermedad"
                                            variant="underlined"
                                            :items="state.list.tipo_enfermedad"
                                            item-title="descripcion"
                                            item-value="id"
                                        ></v-select>

                                        <v-text-field
                                            v-model="
                                                state.itemsView.validado_por
                                            "
                                            label="Validado por"
                                            type="text"
                                            variant="underlined"
                                        ></v-text-field>
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
                                        variant="underlined"
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
