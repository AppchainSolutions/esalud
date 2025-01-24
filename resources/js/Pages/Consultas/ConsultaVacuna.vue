<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, onMounted } from "vue";
import { fetchData, handlesearchItemss } from "@/utils/helper.js";

defineOptions({ layout: AppLayout });

const state = reactive({
    endpoints: ["area", "ceco", "empresa", "planta", "unidad"],

    headers: [
        { title: "RUT", align: "center", sortable: true, key: "rut" },
        { title: "Nombre", align: "center", sortable: true, key: "nombre" },
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
            title: "Tipo de Vacuna",
            sortable: true,
            align: "center",
            key: "tipo_vacuna",
        },
        {
            title: "Vacuna",
            sortable: true,
            align: "center",
            key: "vacuna",
        },
        {
            title: "Fecha vacuna",
            sortable: true,
            align: "center",
            key: "fecha_vacuna",
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
    },

    itemsView: {
        tipo_vacuna: "",
        vacuna: "",
        fecha_vacuna: "",
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
            let m = 0;
            let s = 1;
            for (; num; num = Math.floor(num / 10)) {
                s = (s + (num % 10) * (9 - (m++ % 6))) % 11;
            }
            let dvEsperado = s ? s - 1 : "k";
            let validate = dv === dvEsperado;

            if (validate) return true;
            return "El rut es incorrecto";
        },
    ],
    dialog: false,
    tableItems: [],
    formItems: [],
    editedIndex: -1,
    loadingSearch: false,
    list: [],
    valid: null,
    formTitle: "Consulta Vacuna",
    urlSearch: "/consulta/vacuna/search",
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
    state.itemsView = { ...item };
    state.dialog = true;
}
function close() {
    state.dialog = false;
}

//**********\\\\  CRUD ////*************/

const handleSearch = async () => {
    var res = await handlesearchItemss(state);
    console.log(res);
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
                                        label="Vacuna"
                                        variant="underlined"
                                        type="text"
                                        v-model="state.searchQuery.vacuna"
                                    ></v-text-field>
                                    <v-switch
                                        v-model="state.searchQuery.activo"
                                        hide-details
                                        true-value="true"
                                        false-value="false"
                                        class="ml-4 mb-4"
                                        variant="underlined"
                                        color="green-darken-3"
                                        inset
                                        label="Activo"
                                    ></v-switch>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                prepend-icon="mdi-file-search"
                                variant="tonal"
                                :loading="state.loadingSearch"
                                color="#009AA4"
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
                                    name="consulta_vacunas.xls"
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
                                            variant="tonal"
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

        <!-- state.searchQuery -->
        <v-container>
            <v-dialog v-model="state.dialog">
                <v-sheet elevation="4" class="ma-4 pa-4">
                    <v-card>
                        <v-form readonly>
                            <v-sheet elevation="2" class="ma-2 pa-2">
                                <v-card-title>
                                    <span class="text-h5">
                                        Consulta de Vacunas
                                    </span>
                                </v-card-title>
                            </v-sheet>
                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            v-model="
                                                state.itemsView.fecha_vacuna
                                            "
                                            label="Fecha Vacuna"
                                            type="date"
                                            variant="underlined"
                                            readonly
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="
                                                state.itemsView.tipo_vacuna
                                            "
                                            type="text"
                                            label="Tipo de vacuna"
                                            variant="underlined"
                                            readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                            v-model="state.itemsView.vacuna"
                                            readonly
                                            type="text"
                                            label="Vacuna"
                                            variant="underlined"
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="state.itemsView.comentario"
                                            readonly
                                            type="text"
                                            label="Comentario"
                                            variant="underlined"
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
