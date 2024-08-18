<script setup>
    import AppLayout from "@/Layouts/AppLayout.vue";
    import { reactive, onMounted } from "vue";
    import { fetchData, handleSearchItem } from "@/helper.js";

    defineOptions({layout: AppLayout});
    const state = reactive({
        endpoints: [
            "area",
            "ceco",
            "empresa",
            "planta",
            "unidad",
            "accidente",
            "accidente_condicion",
            "calificacion",
            "derivacion",
            "medio_derivacion",
            "error_critico",
            "estado_mental",
            "fuente_incidente",
            "responsable",
            "sistema_afectado",
            "tipo_atencion",
            "tipo_licencia",
            "lugar_atencion",
            "turno",
        ],

        headers: [
            {title: "RUT", align: "center", sortable: true, key: "rut"},
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
                title: "Fecha de atención",
                sortable: true,
                align: "center",
                key: "fecha_atencion",
            },
            {
                title: "Tipo de atención",
                sortable: true,
                align: "center",
                key: "tipo_atencion.descripcion",
            },

            {title: "Acciones", align: "center", key: "actions"},
        ],
        validations: {
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

                    if (validate)
                        return true;
                    return "El rut es incorrecto";
                },
            ],
            startDateRules: [
                (v) => !!v || "La fecha de inicio es requerida",
                        // (v) =>
                        // //    new Date(v) <= new Date(fecha_endDate) ||
                        //     "La fecha de inicio debe ser anterior a la fecha de término",
            ],
            endDateRules: [
                (v) => !!v || "La fecha de término es requerida",
                        // (v) =>
                        //     new Date(v) >= new Date(searchQuery.fecha_atencion.hasta) ||
                        //     "La fecha de término debe ser posterior a la fecha de inicio",
            ],
        },

        itemsView: {
            id: null,
            paciente_id: null,
            rut: null,
            nombre: null,
            apellidos: null,
            accidente: null,
            acompanado: null,
            alerta_she: null,
            area: null,
            at_realizada_por: null,
            calificacion: null,
            ceco: null,
            comentario: null,
            cuenta_acr: null,
            declaracion_completa: null,
            derivacion_inmediata: null,
            derivacion: null,
            descripcion_breve: null,
            dias_descanso: null,
            error_critico: null,
            estado_mental: null,
            fecha_atencion: null,
            fuente_incidente: null,
            hora_inicio: null,
            hora_termino: null,
            lugar_atencion: null,
            medicamentos: null,
            medio_derivacion: null,
            motivo_consulta: null,
            nombre_supervisor: null,
            puede_reintegrarse: null,
            responsable: null,
            sistema_afectado: null,
            tipo_atencion: null,
            tipo_licencia: null,
            turno: null
        },

        searchQuery: {
            rut: null,
            empresa: null,
            area: null,
            activo: "true",
            unidad: null,
            planta: null,
            ceco: null,
            lugar_atencion: null,
            tipo_atencion: null,
            fecha_atencion: {
                desde: null,
                hasta: null
            },
        },

        dialog: false,
        tableItems: [],
        formItems: [],
        editedIndex: -1,
        loadingSearch: false,
        list: [],
        valid: null,
        formTitle: "Consulta de Atenciones Diarias",
        urlSearch: "/consulta/atencion_diaria/search",
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
        console.log(item)
        state.dialog = true;
        state.itemsView = {...item};
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
                    <v-form>
                        <v-container fluid>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            label="Rut"
                                            v-model="state.searchQuery.rut"
                                            variant="underlined"
                                            :rules="state.rutRules"
                                            type="text"
                                            class="mt-2"
                                            clearable
                                            ></v-text-field>
                                        <v-select
                                            :items="state.list.planta"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Planta"
                                            v-model="state.searchQuery.planta"
                                            variant="underlined"
                                            class="mt-2"
                                            clearable
                                            ></v-select>

                                        <v-select
                                            class="mt-2"
                                            :items="state.list.ceco"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Area de Trabajo (Cencos)"
                                            variant="underlined"
                                            v-model="state.searchQuery.ceco"
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
                                            label="Activo"
                                            ></v-switch>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-select
                                            :items="state.list.unidad"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Unidad"
                                            v-model="state.searchQuery.unidad"
                                            variant="underlined"
                                            class="mt-2"
                                            clearable
                                            ></v-select>
                                        <v-select
                                            :items="state.list.empresa"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Empresa"
                                            class="mt-2"
                                            v-model="state.searchQuery.empresa"
                                            variant="underlined"
                                            clearable
                                            ></v-select>
                                        <v-select
                                            :items="state.list.area"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Area"
                                            class="mt-2"
                                            variant="underlined"
                                            v-model="state.searchQuery.area"
                                            clearable
                                            ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="
                                            state.searchQuery.fecha_atencion
                                            .desde
                                            "
                                            :rules="
                                            state.validations.startDateRules
                                            "
                                            label="Fecha desde"
                                            type="date"
                                            variant="underlined"
                                            class="mt-2"
                                            clearable
                                            ></v-text-field>
                                        <v-text-field
                                            v-model="
                                            state.searchQuery.fecha_atencion
                                            .hasta
                                            "
                                            :rules="
                                            state.validations.endDateRules
                                            "
                                            label="Fecha hasta"
                                            type="date"
                                            variant="underlined"
                                            class="mt-2"
                                            clearable
                                            ></v-text-field>
                                        <v-select
                                            :items="state.list.lugar_atencion"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Lugar de atencion"
                                            class="mt-2"
                                            variant="underlined"
                                            v-model="
                                            state.searchQuery.lugar_atencion
                                            "
                                            clearable
                                            ></v-select>
                                        <v-select
                                            :items="state.list.tipo_atencion"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Tipo de atencion"
                                            class="mt-2"
                                            variant="underlined"
                                            v-model="
                                            state.searchQuery.tipo_atencion
                                            "
                                            clearable
                                            ></v-select>
                                    </v-col>
                                </v-row>
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
                                        name="consulta_atenciones_diarias.xls"
                                        >
                                        Bajar archivo
                                    </download-excel>
                                </v-btn>
                            </v-card-actions>
                        </v-container>
                    </v-form>

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
        <v-form readonly>
            <v-container>
                <v-dialog v-model="state.dialog">
                    <v-sheet elevation="4" class="ma-4 pa-4">
                        <v-card>
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
                                            v-model="
                                            state.itemsView.fecha_atencion
                                            "
                                            label="Fecha de atención"
                                            type="text"
                                            variant="underlined"
                                            ></v-text-field>

                                        <v-select
                                            v-model="state.itemsView.turno"
                                            :items="state.list.turno"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Turno"
                                            variant="underlined"
                                            ></v-select>

                                        <v-select
                                            v-model="
                                            state.itemsView.sistema_afectado
                                            "
                                            :items="state.list.sistema_afectado"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Sistema afectado"
                                            variant="underlined"
                                            ></v-select>
                                        <v-select
                                            v-model="state.itemsView.derivacion"
                                            :items="state.list.derivacion"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Derivación"
                                            variant="underlined"
                                            ></v-select>
                                        <v-select
                                            v-model="
                                            state.itemsView.medio_derivacion
                                            "
                                            :items="state.list.medio_derivacion"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Medio de derivación"
                                            variant="underlined"
                                            ></v-select>
                                        <v-select
                                            v-model="
                                            state.itemsView.fuente_incidente
                                            "
                                            :items="state.list.fuente_incidente"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Fuente de incidente"
                                            variant="underlined"
                                            ></v-select>

                                        <v-select
                                            v-model="
                                            state.itemsView.error_critico
                                            "
                                            :items="state.list.error_critico"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Error crítico"
                                            variant="underlined"
                                            ></v-select>
                                        <v-select
                                            v-model="
                                            state.itemsView.estado_mental
                                            "
                                            :items="state.list.estado_mental"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Estado Mental"
                                            variant="underlined"
                                            ></v-select>
                                    </v-col>

                                    <v-col>
                                        <v-text-field
                                            v-model="
                                            state.itemsView.motivo_consulta
                                            "
                                            label="Motivo de consulta"
                                            type="text"
                                            variant="underlined"
                                            ></v-text-field>

                                        <v-select
                                            v-model="state.itemsView.accidente"
                                            :items="state.list.accidente"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Accidente"
                                            variant="underlined"
                                            ></v-select>
                                        <v-text-field
                                            v-model="
                                            state.itemsView
                                            .medicamentos
                                            "
                                            label="Medicamento suministrados"
                                            type="text"
                                            variant="underlined"
                                            ></v-text-field>
                                        <v-select
                                            v-model="
                                            state.itemsView
                                            .accidente_condicion
                                            "
                                            :items="
                                            state.list.accidente_condicion
                                            "
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Accidente ocurre por una acción o condición insegura"
                                            variant="underlined"
                                            ></v-select>
                                        <v-select
                                            v-model="
                                            state.itemsView.responsable
                                            "
                                            :items="state.list.responsable"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Responsable"
                                            variant="underlined"
                                            ></v-select>
                                        <v-text-field
                                            v-model="
                                            state.itemsView
                                            .nombre_supervisor
                                            "
                                            label="Nombre supervisor"
                                            type="text"
                                            variant="underlined"
                                            ></v-text-field>
                                        <v-text-field
                                            v-model="
                                            state.itemsView.at_realizada_por
                                            "
                                            label="Atención realizada por"
                                            type="text"
                                            variant="underlined"
                                            ></v-text-field>
                                    </v-col>

                                    <v-col>
                                        <v-text-field
                                            v-model="
                                            state.itemsView.hora_inicio
                                            "
                                            label="Hora de inicio"
                                            type="time"
                                            variant="underlined"
                                            ></v-text-field>

                                        <v-text-field
                                            v-model="
                                            state.itemsView.hora_termino
                                            "
                                            label="Hora de termino"
                                            type="time"
                                            variant="underlined"
                                            ></v-text-field>

                                        <v-text-field
                                            v-model="
                                            state.itemsView.dias_descanso
                                            "
                                            label="Días de descanso"
                                            type="number"
                                            variant="underlined"
                                            ></v-text-field>

                                        <v-select
                                            v-model="
                                            state.itemsView.calificacion
                                            "
                                            :items="state.list.calificacion"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Calificación"
                                            variant="underlined"
                                            ></v-select>
                                        <v-select
                                            v-model="
                                            state.itemsView.lugar_atencion
                                            "
                                            :items="state.list.lugar_atencion"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Lugar de atención"
                                            variant="underlined"
                                            ></v-select>
                                        <v-select
                                            v-model="
                                            state.itemsView.tipo_atencion
                                            "
                                            :items="state.list.tipo_atencion"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Tipo de atención"
                                            variant="underlined"
                                            ></v-select>
                                        <v-select
                                            v-model="
                                            state.itemsView.tipo_licencia
                                            "
                                            :items="state.list.tipo_licencia"
                                            item-title="descripcion"
                                            item-value="id"
                                            label="Tipo de Licencia"
                                            variant="underlined"
                                            ></v-select>
                                        <v-text-field
                                            v-model="
                                            state.itemsView
                                            .descripcion_breve
                                            "
                                            label="Descripción breve"
                                            type="text"
                                            variant="underlined"
                                            ></v-text-field>
                                    </v-col>

                                    <v-col>

                                        <v-switch
                                            v-model="
                                            state.itemsView
                                            .acompanado
                                            "
                                            class="mt-2 mb-4"
                                            label="Acompañado/a"
                                            color="success"
                                            hide-details
                                            inset
                                            variant="underlined"
                                            ></v-switch>

                                        <v-switch
                                            v-model="
                                            state.itemsView
                                            .derivacion_inmediata
                                            "
                                            class="mt-2 mb-4"
                                            label="Derivación inmediata"
                                            color="success"
                                            hide-details
                                            inset
                                            variant="underlined"
                                            ></v-switch>

                                        <v-switch
                                            v-model="state.itemsView.alerta_she"
                                            class="mt-2 mb-4"
                                            label="Alerta SHE"
                                            color="success"
                                            hide-details
                                            inset
                                            variant="underlined"
                                            ></v-switch>
                                        <v-switch
                                            v-model="
                                            state.itemsView
                                            .declaracion_completa
                                            "
                                            class="mt-2 mb-4"
                                            label="Declaración completa"
                                            color="success"
                                            hide-details
                                            inset
                                            variant="underlined"
                                            ></v-switch>
                                        <v-switch
                                            v-model="
                                            state.itemsView
                                            .puede_reintegrarse
                                            "
                                            class="mt-2 mb-4"
                                            label="Puede reintegrarse"
                                            color="success"
                                            hide-details
                                            inset
                                            variant="underlined"
                                            ></v-switch>
                                        <v-switch
                                            v-model="state.itemsView.cuenta_acr"
                                            class="mt-2 mb-4"
                                            label="Cuenta ACR"
                                            color="success"
                                            hide-details
                                            inset
                                            v
                                            ariant="solo"
                                            ></v-switch>
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
                                        @click="close"
                                        ></v-btn>
                                </v-card-actions>
                            </v-sheet>
                        </v-card>
                    </v-sheet>
                </v-dialog>
            </v-container>
        </v-form>
    </v-container>
</template>
