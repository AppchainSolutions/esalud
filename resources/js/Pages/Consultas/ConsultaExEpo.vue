<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted } from "vue";
import { fetchData, handleSearchItem } from "@/helper.js";

defineOptions({ layout: AppLayout });

const state = reactive({
    endpoints: [
        "area",
        "ceco",
        "bateria",
        "empresa",
        "planta",
        "unidad",
        "estado_epo",
        "semaforo",
        "tipo_examen",
    ],

    headers: [
        {
            title: "Rut",
            align: "start",
            sortable: true,
            key: "rut",
        },
        {
            title: "Nombre",
            align: "start",
            sortable: true,
            key: "nombre",
        },
        {
            title: "Apellidos",
            align: "start",
            sortable: true,
            key: "apellidos",
        },
        {
            title: "Riesgo semáforo",
            align: "start",
            sortable: true,
            key: "semaforo.descripcion",
        },
        {
            title: "Resultado",
            align: "start",
            sortable: true,
            key: "resultado",
        },
        {
            title: "Batería",
            align: "start",
            sortable: true,
            key: "bateria.descripcion",
        },
        {
            title: "Tipo de exámen",
            align: "start",
            sortable: true,
            key: "tipo_examen.descripcion",
        },
        {
            title: "Fecha recepción",
            align: "start",
            sortable: true,
            key: "fecha_recepcion",
        },
        {
            title: "Fecha vencimiento",
            align: "start",
            sortable: true,
            key: "fecha_vencimiento",
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

        numero_solicitud: null,
        estado_epo: null,
        bateria: null,
        semaforo: null,
        resultado: "Apto",
        tipo_examen: null,

        fecha_realizacion: {
            desde: null,
            hasta: null,
        },
        fecha_recepcion: {
            desde: null,
            hasta: null,
        },
        fecha_solicitud: {
            desde: null,
            hasta: null,
        },
        fecha_vencimiento: {
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
            let validate = dv === dvEsperado;

            if (validate) return true;
            return "El rut es incorrecto";
        },
    ],

    itemsView: {
        paciente_id: null,
        codigo_verificacion: null,
        comentario: null,
        estado_epo: null,
        fecha_realizacion: null,
        fecha_recepcion: null,
        fecha_solicitud: null,
        fecha_vencimiento: null,
        bateria: null,
        numero_solicitud: null,
        resultado: null,
        semaforo: null,
        tipo_examen: null,
    },

    dialog: false,
    tableItems: [],
    formItems: [],
    editedIndex: -1,
    list: [],
    valid: null,
    formTitle: "Consulta exámenes Ocupacionales y Preocupacionales",
    urlSearch: "/consulta/exepo/search",
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
                    <v-toolbar-title>{{ state.formTitle }} </v-toolbar-title>
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
                                <v-col>
                                    <v-text-field
                                        label="Rut"
                                        variant="underlined"
                                        :rules="state.rutRules"
                                        v-model="state.searchQuery.rut"
                                        clearable
                                    ></v-text-field>
                                    <v-select
                                        :items="state.list.empresa"
                                        item-title="descripcion"
                                        item-value="id"
                                        label="Empresa"
                                        v-model="state.searchQuery.empresa"
                                        variant="underlined"
                                        clearable
                                    ></v-select>
                                    <v-select
                                        :items="state.list.unidad"
                                        item-title="descripcion"
                                        item-value="id"
                                        label="Unidad"
                                        v-model="state.searchQuery.unidad"
                                        variant="underlined"
                                        clearable
                                    ></v-select>
                                    <v-select
                                        label="Area"
                                        v-model="state.searchQuery.area"
                                        variant="underlined"
                                        :items="state.list.area"
                                        item-title="descripcion"
                                        item-value="id"
                                        clearable
                                    ></v-select>
                                    <v-select
                                        label="Area (cecos)"
                                        v-model="state.searchQuery.ceco"
                                        variant="underlined"
                                        :items="state.list.ceco"
                                        item-title="descripcion"
                                        item-value="id"
                                        clearable
                                    ></v-select>
                                    <v-switch
                                        v-model="state.searchQuery.activo"
                                        hide-details
                                        true-value="true"
                                        false-value="false"
                                        class="ml-4 mt-4"
                                        variant="underlined"
                                        color="green-darken-3"
                                        inset
                                        clearable
                                        label="Activo"
                                    ></v-switch>
                                    <v-switch
                                        v-model="state.searchQuery.resultado"
                                        hide-details
                                        true-value="Apto"
                                        false-value="No apto"
                                        class="ml-4 mt-4"
                                        variant="underlined"
                                        color="green-darken-3"
                                        inset
                                        clearable
                                        :label="`Resultado: ${state.searchQuery.resultado.toString()}`"
                                    ></v-switch>
                                </v-col>

                                <v-col>
                                    <v-text-field
                                        label="Fecha realizacion (desde)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_realizacion
                                                .desde
                                        "
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        label="Fecha realizacion (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_realizacion
                                                .hasta
                                        "
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        label="Fecha recepción (desde)"
                                        variant="underlined"
                                        v-model="
                                            state.searchQuery.fecha_recepcion
                                                .desde
                                        "
                                        clearable
                                        type="date"
                                    ></v-text-field>
                                    <v-text-field
                                        label="Fecha recepción (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_recepcion
                                                .hasta
                                        "
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        label="Fecha solicitud (desde)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_solicitud
                                                .desde
                                        "
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        label="Fecha solicitud (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_solicitud
                                                .hasta
                                        "
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        label="Fecha vencimiento (desde)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_vencimiento
                                                .desde
                                        "
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        label="Fecha vencimiento (hasta)"
                                        variant="underlined"
                                        type="date"
                                        v-model="
                                            state.searchQuery.fecha_vencimiento
                                                .hasta
                                        "
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-select
                                        label="Estado EPO"
                                        variant="underlined"
                                        v-model="state.searchQuery.estado_epo"
                                        :items="state.list.estado_epo"
                                        item-title="descripcion"
                                        item-value="id"
                                        clearable
                                    ></v-select>
                                    <v-select
                                        label="Bateria"
                                        variant="underlined"
                                        v-model="state.searchQuery.bateria"
                                        :items="state.list.bateria"
                                        item-title="descripcion"
                                        item-value="id"
                                        clearable
                                        single
                                    ></v-select>
                                    <v-select
                                        label="Tipo de exámen"
                                        variant="underlined"
                                        v-model="state.searchQuery.tipo_examen"
                                        :items="state.list.tipo_examen"
                                        item-title="descripcion"
                                        item-value="id"
                                        clearable
                                        single
                                    ></v-select>

                                    <v-select
                                        label="Riesgo Semáforo"
                                        variant="underlined"
                                        v-model="
                                            state.searchQuery.semaforo
                                        "
                                        :items="state.list.semaforo"
                                        item-title="descripcion"
                                        item-value="id"
                                        clearable
                                        single
                                    ></v-select>
                                    <v-text-field
                                        label="Número de solicitud"
                                        variant="underlined"
                                        type="number"
                                        v-model="
                                            state.searchQuery.numero_solicitud
                                        "
                                        clearable
                                    ></v-text-field>
                                </v-col>
                            </v-row>
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
                                    name="consulta_exepo.xls"
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
                                            color="#009AA4"
                                            class="mr-2 ml-2"
                                            :icon="'mdi-eye'"
                                            variant="tonal"
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

                                <v-form readonly>
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                v-model="
                                                    state.itemsView
                                                        .codigo_verificacion
                                                "
                                                label="Cod. verif."
                                                type="number"
                                                variant="underlined"
                                            ></v-text-field>

                                            <v-text-field
                                                v-model="
                                                    state.itemsView
                                                        .numero_solicitud
                                                "
                                                label="N° solicitud"
                                                type="number"
                                                variant="underlined"
                                            ></v-text-field>

                                            <v-select
                                                :items="state.list.estado_epo"
                                                item-title="descripcion"
                                                item-value="id"
                                                v-model="
                                                    state.itemsView.estado_epo
                                                "
                                                label="Estado"
                                                type="text"
                                                variant="underlined"
                                            ></v-select>

                                            <v-select
                                                :items="state.list.bateria"
                                                item-title="descripcion"
                                                item-value="id"
                                                v-model="
                                                    state.itemsView.bateria
                                                "
                                                label="Batería"
                                                type="text"
                                                variant="underlined"
                                            ></v-select>

                                            <v-select
                                                :items="
                                                    state.list.semaforo
                                                "
                                                item-title="descripcion"
                                                item-value="id"
                                                v-model="
                                                    state.itemsView
                                                        .semaforo
                                                "
                                                label="Semáforo"
                                                type="text"
                                                variant="underlined"
                                            ></v-select>

                                            <v-select
                                                :items="state.list.tipo_examen"
                                                item-title="descripcion"
                                                item-value="id"
                                                v-model="
                                                    state.itemsView.tipo_examen
                                                "
                                                label="Tipo de exámen"
                                                type="text"
                                                variant="underlined"
                                            ></v-select>
                                        </v-col>

                                        <v-col>
                                            <v-text-field
                                                v-model="
                                                    state.itemsView
                                                        .fecha_realizacion
                                                "
                                                label="Fecha de realización"
                                                type="date"
                                                variant="underlined"
                                            ></v-text-field>

                                            <v-text-field
                                                v-model="
                                                    state.itemsView
                                                        .fecha_recepcion
                                                "
                                                label="Fecha recepción"
                                                type="date"
                                                variant="underlined"
                                            ></v-text-field>

                                            <v-text-field
                                                v-model="
                                                    state.itemsView
                                                        .fecha_solicitud
                                                "
                                                label="Fecha solicitud"
                                                type="date"
                                                variant="underlined"
                                            ></v-text-field>

                                            <v-text-field
                                                v-model="
                                                    state.itemsView
                                                        .fecha_vencimiento
                                                "
                                                label="Fecha vencimiento"
                                                type="date"
                                                variant="underlined"
                                            ></v-text-field>

                                            <v-text-field
                                                v-model="
                                                    state.itemsView.comentario
                                                "
                                                label="Comentario"
                                                type="text"
                                                variant="underlined"
                                            ></v-text-field>

                                            <v-switch
                                                v-model="
                                                    state.itemsView.resultado
                                                "
                                                class="mb-4"
                                                label="Apto"
                                                color="success"
                                                inset
                                            ></v-switch>
                                        </v-col>
                                    </v-row>
                                </v-form>

                                <!-- ********** -->
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
