<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted } from "vue";
import { fetchData, handlesearchItemss } from "@/utils/helper.js";

defineOptions({ layout: AppLayout });

const state = reactive({
    endpoints: [
        "area",
        "ceco",
        "empresa",
        "planta",
        "unidad",
        "estado_certificacion",
    ],

    searchQuery: {
        activo: true,
        area: null,
        ceco: null,
        empresa: null,
        planta: null,
        rut: null,
        unidad: null,

        fecha_certificacion: {
            desde: null,
            hasta: null,
        },

        fecha_caducidad: {
            desde: null,
            hasta: null,
        },

        estado_certificacion: null,
    },

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
            title: "Fecha de certificacion",
            sortable: true,
            align: "center",
            key: "fecha_certificacion",
        },
        {
            title: "Fecha de caducidad",
            sortable: true,
            align: "center",
            key: "fecha_caducidad",
        },
        {
            title: "Estado",
            sortable: true,
            align: "center",
            key: "estado_certificacion.descripcion",
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
        fecha_certificacion: null,
        fecha_caducidad: null,
        certificacion: null,
        estado_certificacion: null,
    },

    dialog: false,
    tableItems: [],
    formItems: [],
    editedIndex: -1,
    loadingSearch: false,
    list: [],
    valid: null,
    formTitle: "Consulta de Certificaciones",
    urlSearch: "/consulta/certificacion/search",
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
                            <v-row>
                                <!-- Datos del solicitante -->
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
                                    <v-select
                                        clearable
                                        label="Estado "
                                        variant="underlined"
                                        v-model="
                                            state.searchQuery
                                                .estado_certificacion
                                        "
                                        :items="state.list.estado_certificacion"
                                        item-title="descripcion"
                                        item-value="id"
                                    ></v-select>
                                    <v-text-field
                                        clearable
                                        label="Fecha recepción (desde)"
                                        variant="underlined"
                                        v-model="
                                            state.searchQuery
                                                .fechaDesdeRecepcion
                                        "
                                        type="date"
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha recepción (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery
                                                .fechaHastaRecepcion
                                        "
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha inicio (desde)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fechaDesdeInicio
                                        "
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha inicio (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fechaHastaInicio
                                        "
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        clearable
                                        label="Fecha termino (desde)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fechaDesdeTermino
                                        "
                                    ></v-text-field>
                                    <v-text-field
                                        clearable
                                        label="Fecha termino (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fechaHastaTermino
                                        "
                                    ></v-text-field>
                                    <v-switch
                                        v-model="state.searchQuery.activo"
                                        class="ml-4"
                                        label="Activo"
                                        color="success"
                                        hide-details
                                        inset
                                        clearable
                                    ></v-switch>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                prepend-icon="mdi-file-search"
                                variant="tonal"
                                color="#009AA4"
                                :loading="state.loading"
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
                                    name="consulta_licencias_medicas.xls"
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
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            label="Rut"
                                            variant="underlined"
                                            v-model="state.itemsView.rut"
                                        ></v-text-field>
                                        <v-select
                                            label="Empresa"
                                            variant="underlined"
                                            v-model="state.itemsView.empresa"
                                            :items="state.list.empresa"
                                            item-title="nombre"
                                            item-value="id"
                                        ></v-select>
                                        <v-select
                                            label="Unidad"
                                            variant="underlined"
                                            v-model="state.itemsView.unidad"
                                            :items="state.list.unidad"
                                            item-title="descripcion"
                                            item-value="id"
                                        ></v-select>
                                        <v-select
                                            label="Area"
                                            v-model="state.itemsView.area"
                                            variant="underlined"
                                            :items="state.list.area"
                                            item-title="descripcion"
                                            item-value="id"
                                        ></v-select>
                                        <v-select
                                            label="Area (cecos)"
                                            v-model="state.itemsView.ceco"
                                            variant="underlined"
                                            :items="state.list.ceco"
                                            item-title="descripcion"
                                            item-value="id"
                                        ></v-select>
                                    </v-col>

                                    <v-col>
                                        <v-switch
                                            v-model="state.itemsView.activo"
                                            class="ml-4"
                                            label="Activo"
                                            color="success"
                                            hide-details
                                            inset
                                        ></v-switch>

                                        <v-select
                                            label="Estado"
                                            v-model="
                                                state.itemsView
                                                    .estado_certificacion
                                            "
                                            variant="underlined"
                                            :items="
                                                state.list.estado_certificacion
                                            "
                                            item-title="descripcion"
                                            item-value="id"
                                            class="mt-6"
                                        ></v-select>
                                        <v-text-field
                                            label="Certificación"
                                            variant="underlined"
                                            type="text"
                                            v-model="
                                                state.itemsView.certificacion
                                            "
                                        ></v-text-field>
                                        <v-text-field
                                            label="Fecha certificación"
                                            variant="underlined"
                                            type="date"
                                            v-model="
                                                state.itemsView
                                                    .fecha_certificacion
                                            "
                                        ></v-text-field>
                                        <v-text-field
                                            label="Fecha caducidad"
                                            variant="underlined"
                                            type="date"
                                            v-model="
                                                state.itemsView.fecha_caducidad
                                            "
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-sheet elevation="2" class="ma-2 pa-2">
                                <v-card-actions>
                                    <v-btn
                                        class="mr-2 ml-2"
                                        color="#009AA4"
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
