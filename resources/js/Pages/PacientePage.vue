<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { router } from "@inertiajs/vue3";
import { reactive, ref, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import moment from "moment";
import { useDate } from "vuetify";
import {
    fetchAllData,
    handleRemoveItem,
    handleShowItem,
    handleStoreItem,
    handleEditItem,
    closeForm,
    openToCreate,
    openToEdit,
} from "@/helper.js";

//**********\\\\  INI STATE VARIABLES AND CONST ////*************/

defineOptions({ layout: AppLayout });

const store = useDataStore();
const state = reactive({
    endpoints: [
        "afps",
        "Calless",
        "estados_civiles",
        "establecimientos_educacionales",
        "generos",
        "grupos_sanguineos",
        "leyes_sociales",
        "nacionalidades",
        "niveles_instruccion",
        "previsiones",
        "pueblos_originarios",
        "religiones",
        "seguros_salud",
    ],
    headers: [
        { title: "Rut", align: "center", sortable: true, key: "rut" },
        { title: "Nombre", align: "center", sortable: true, key: "nombre" },
        {
            title: "Apellidos",
            align: "center",
            sortable: true,
            key: "apellidos",
        },
        {
            title: "Edad",
            align: "center",
            sortable: true,
            key: "edad",
        },
        {
            title: "Telefono contacto",
            align: "center",
            sortable: true,
            key: "telefono1",
        },
        { title: "Acciones", sortable: false, align: "center", key: "actions" },
    ],
    validationSchema: {
        rutRules: [
            (value) => {
                const regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
                if (!regex.test(value)) {
                    return false;
                }

                // Separar el número y el dígito verificador
                let splitidRut = value.split("-");
                let num = splitidRut[0];
                let dv = splitidRut[1].toLowerCase();
                // Calcular el dígito verificador esperado
                let m = 0,
                    s = 1;
                for (; num; num = Math.floor(num / 10)) {
                    s = (s + (num % 10) * (9 - (m++ % 6))) % 11;
                }
                let dvEsperado = s ? s - 1 : "k";
                const validate = dv === dvEsperado;
                return validate
                    ? true
                    : "El rut no es válido. Por favor, verifique el formato y los dígitos.";
            },
        ],
        emailRules: [
            (value) => {
                if (value) return true;
                return "Se necesita un email.";
            },
            (value) => {
                if (/.+@.+\..+/.test(value)) return true;
                return "El email debe ser válido.";
            },
        ],
    },
    searchQuery: {
        id: null,
        rut: null,
        lista_espera: null,
        afp_id: null,
        establecimiento_educacional_id: null,
        nacionalidad_id: null,
        ley_social_id: null,
        seguro_salud_id: null,
        prevision_id: null,
    },
    editedItem: {
        rut: null,
        afp_id: null,
        apellidos: null,
        Calles_id: null,
        ciudad: null,
        direccion: null,
        donante: false,
        edad: null,
        email: null,
        establecimiento_educacional_id: null,
        estado_civil_id: null,
        fecha_nacimiento: null,
        genero_id: null,
        grupo_sanguineo_id: null,
        ley_social_id: null,
        nacionalidad_id: null,
        nivel_instruccion_id: null,
        nombre: null,
        prevision_id: null,
        pueblo_originario_id: null,
        religion_id: null,
        seguro_salud_id: null,
        telefono1: null,
        telefono2: null,
        nombre_responsable: null,
        apellido_responsable: null,
        telefono_responsable: null,
        rut_responsable: null,
        direccion_responsable: null,
        email_responsable: null,
        parentesco_responsable: null,
        ocupacion_responsable: null,
        pueblo_originario_responsable_id: null,
        nivel_instruccion_responsable_id: null,
        religion_responsable_id: null,
        fecha_nacimiento_responsable: null,
        edad: null,
        genero_responsable_id: null,
        nacionalidad_responsable_id: null,
        comunidad_lgtbq_responsable: null,
        credencial_discapacidad_responsable_id: null,
        estado_civil_responsable_id: null,
        prevision_responsable_id: null,
    },
    defaultItem: {
        afp_id: null,
        apellido_responsable: null,
        apellidos: null,
        Calles_id: null,
        ciudad: null,
        comunidad_lgtbq_responsable: null,
        credencial_discapacidad_responsable_id: null,
        direccion_responsable: null,
        direccion: null,
        donante: false,
        edad: null,
        edad: null,
        email_responsable: null,
        email: null,
        establecimiento_educacional_id: null,
        estado_civil_id: null,
        estado_civil_responsable_id: null,
        fecha_nacimiento_responsable: null,
        fecha_nacimiento: null,
        genero_id: null,
        genero_responsable_id: null,
        grupo_sanguineo_id: null,
        ley_social_id: null,
        nacionalidad_id: null,
        nacionalidad_responsable_id: null,
        nivel_instruccion_id: null,
        nivel_instruccion_responsable_id: null,
        nombre_responsable: null,
        nombre: null,
        ocupacion_responsable: null,
        parentesco_responsable: null,
        prevision_id: null,
        prevision_responsable_id: null,
        pueblo_originario_id: null,
        pueblo_originario_responsable_id: null,
        religion_id: null,
        religion_responsable_id: null,
        rut_responsable: null,
        rut: null,
        seguro_salud_id: null,
        telefono_responsable: null,
        telefono1: null,
        telefono2: null,
    },
    dialog: false,
    editedIndex: -1,
    formCrear: "Nuevo Paciente",
    formEdit: "Editar datos del Paciente",
    formItems: [],
    formTitle: "Gestión de Pacientes",
    list: [],
    loadingSearch: false,
    tableItems: [],
    urlDelete: "/paciente/delete",
    urlShow: "/paciente/show",
    urlStore: "/paciente",
    urlUpdate: "/paciente/update",
});
const date = useDate();

//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    state.list = await fetchAllData(state.endpoints);
});

//**********\\\\  COMPUTE PROPERTIES ////*************/
const editedItemTitle = computed(() =>
    state.editedIndex === -1 ? state.formCrear : state.formEdit,
);

//**********\\\\ METHODS ////*************/
const formatDate = computed(() => {
    let formatted = moment(state.editedItem.fecha_nacimiento).format(
        "DD/MM/YYYY",
    );
    return formatted;
});
function fichaMedica(item) {
    store.selected = item;
    try {
        router.get("ficha-medica");
    } catch (error) {
        console.error(
            '"An error occurred while fetching daily attention data."',
        );
    }
}

function close() {
    closeForm(state);
}

function calcEdad(fecNac) {
    let now = new Date();
    let birthDate = new Date(fecNac);
    let age = now.getFullYear() - birthDate.getFullYear();
    return age;
}

const handleInputChange = () => {
    let fecNac = state.editedItem.fecha_nacimiento;
    let age = calcEdad(fecNac);
    state.editedItem.edad = ref(age);
};

//**********\\\\  CRUD ////*************/
const show = async () => {
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

function fichaPersonal(item) {
    openToEdit(state, item);
    handleInputChange();
}

const update = async () => {
    await handleEditItem(state);
    closeForm(state);
};

const remove = async (item) => {
    handleRemoveItem(state, item);
};
</script>

<template>
    <v-container fluid>
        <v-sheet :elevation="6" :class="'rounded-lg ma-2 pa-2'">
            <v-expansion-panels>
                <v-expansion-panel title="Ficha de Pacientes" color="#009AA4">
                    <v-expansion-panel-text>
                        <v-form fast-fail @submit.prevent>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        v-model="state.searchQuery.rut"
                                        :rules="state.validationSchema.rutRules"
                                        label="Rut del paciente * (12345678-9)"
                                        class="ma-2"
                                        type="text"
                                        variant="underlined"
                                        clearable
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="state.searchQuery.rut_responsable"
                                        :rules="state.validationSchema.rutRules"
                                        label="Rut persona encargada"
                                        class="ma-2"
                                        type="text"
                                        variant="underlined"
                                        clearable
                                    ></v-text-field>
                                    
                                </v-col>
                                <v-col>
                                    <v-select
                                        :items="
                                            state.list
                                                .establecimiento_educacional
                                        "
                                        item-title="descripcion"
                                        item-value="id"
                                        v-model="
                                            state.searchQuery
                                                .establecimiento_educacional_id
                                        "
                                        clearable
                                        label="Establecimiento Educacional"
                                        class="ma-2"
                                        variant="underlined"
                                        single
                                    />
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-btn
                                    prepend-icon="mdi-file-search"
                                    variant="tonal"
                                    class="ma-4"
                                    color="#009AA4"
                                    type="submit"
                                    @click="show"
                                >
                                    Buscar
                                </v-btn>

                                <v-btn
                                    prepend-icon="mdi-cloud-download"
                                    variant="tonal"
                                    class="ma-4"
                                    color="#009AA4"
                                >
                                    <download-excel
                                        :data="state.tableItems"
                                        name="consulta_paciente.xls"
                                    >
                                        Bajar archivo
                                    </download-excel>
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-sheet>

        <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-2 pa-2'">
            <v-data-table
                :headers="state.headers"
                :items="state.tableItems"
                :sort-by="[{ key: 'apellidos', order: 'asc' }]"
            >
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-btn
                            icon="mdi-account-multiple-plus"
                            variant="tonal"
                            class="ma-2"
                            color="#009AA4"
                            @click="openFormCreate"
                        >
                        </v-btn>

                        <v-dialog v-model="state.dialog" persistent>
                            <v-form fast-fail @submit.prevent>
                                <v-sheet
                                    color="white"
                                    :elevation="6"
                                    :class="'rounded-lg ma-4 pa-4'"
                                >
                                    <v-card>
                                        <v-card-title>
                                            <div class="text-h6 ma-2">
                                                {{ editedItemTitle }}
                                            </div>
                                            <v-divider
                                                thickness="4px"
                                                color="#662d91"
                                            ></v-divider>
                                        </v-card-title>
                                        <v-card-text>
                                            <div class="text-h6">
                                                Datos Personales
                                            </div>

                                            <v-row>
                                                <v-col>
                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem.rut
                                                        "
                                                        label="Rut* (12345678-9)"
                                                        id="rut"
                                                        type="text"
                                                        required
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>
                                                    <v-text-field
                                                        label="Derivado por*"
                                                        type="text"
                                                        required
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .nombre
                                                        "
                                                        label="Nombre*"
                                                        type="text"
                                                        id="nombre"
                                                        required
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .apellidos
                                                        "
                                                        label="Apellidos*"
                                                        id="apellidos"
                                                        required
                                                        type="text"
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-switch
                                                        v-model="
                                                            state.editedItem
                                                                .comunidad_lgbtq
                                                        "
                                                        hide-details
                                                        class="ml-2"
                                                        color="green-darken-3"
                                                        inset
                                                        label="Comunidad LGTB+"
                                                    ></v-switch>

                                                    <v-switch
                                                        v-model="
                                                            state.editedItem
                                                                .donante
                                                        "
                                                        class="ml-2"
                                                        label="Donante"
                                                        color="success"
                                                        hide-details
                                                        inset
                                                        clearable
                                                        variant="underlined"
                                                    ></v-switch>

                                                    <v-switch
                                                        v-model="
                                                            state.editedItem
                                                                .credencial_discapacidad
                                                        "
                                                        class="ml-2"
                                                        label="Credencial discapacidad"
                                                        color="success"
                                                        hide-details
                                                        inset
                                                        clearable
                                                        variant="underlined"
                                                    ></v-switch>
                                                </v-col>

                                                <v-col>
                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .email
                                                        "
                                                        :rules="
                                                            state
                                                                .validationSchema
                                                                .emailRules
                                                        "
                                                        label="Email"
                                                        type="email"
                                                        required
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .fecha_nacimiento
                                                        "
                                                        label="Fecha de nacimiento"
                                                        clearable
                                                        variant="underlined"
                                                        type="date"
                                                        :format="formatDate"
                                                        @input="
                                                            handleInputChange
                                                        "
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .edad
                                                        "
                                                        label="Edad*"
                                                        type="text"
                                                        variant="underlined"
                                                        readonly
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .direccion
                                                        "
                                                        label="Dirección"
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        label="teléfono 1"
                                                        v-model="
                                                            state.editedItem
                                                                .telefono1
                                                        "
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .telefono2
                                                        "
                                                        label="teléfono 2"
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col>
                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .grupo_sanguineo
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .grupo_sanguineo_id
                                                        "
                                                        label="Grupo sanguíneo"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .estado_civil
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .estado_civil_id
                                                        "
                                                        label="Estado civil"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .nacionalidad
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .nacionalidad_id
                                                        "
                                                        label="Nacionalidad"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list.religion
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        label="Religion / Culto"
                                                        v-model="
                                                            state.editedItem
                                                                .religion_id
                                                        "
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list.genero
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        label="Género"
                                                        v-model="
                                                            state.editedItem
                                                                .genero_id
                                                        "
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-text-field
                                                        label="Ciudad"
                                                        v-model="
                                                            state.editedItem
                                                                .ciudad
                                                        "
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col>
                                                    <v-select
                                                        :items="
                                                            state.list.prevision
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .prevision_id
                                                        "
                                                        label="Previsión de Salud"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list.pueblo
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .pueblo_originario_id
                                                        "
                                                        label="Pueblo originario"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .nivel_instruccion_id
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .instruccion
                                                        "
                                                        label="Nivel de Instruccion"
                                                        clearable
                                                        variant="underlined"
                                                    />
                                                    <v-select
                                                        label="Diagnóstico NNE Transitoria"
                                                    ></v-select>
                                                    <v-select
                                                        label="Diagnóstico NNE Permanentes"
                                                    ></v-select>
                                                </v-col>
                                            </v-row>

                                            <div class="text-h6">
                                                Datos Educacionales
                                            </div>

                                            <v-row>
                                                <v-col>
                                                    <v-select
                                                        label="Establecimiento educacional"
                                                    ></v-select>
                                                </v-col>
                                                <v-col>
                                                    <v-select
                                                        label="Profesor/a Jefe"
                                                    ></v-select>
                                                </v-col>
                                                <v-col>
                                                    <v-switch
                                                        v-model="
                                                            state.editedItem
                                                                .pertenece_pie
                                                        "
                                                        hide-details
                                                        class="ml-2"
                                                        color="green-darken-3"
                                                        inset
                                                        label="Pertenece PIE"
                                                    ></v-switch>
                                                </v-col>
                                            </v-row>

                                            <div class="text-h6">
                                                Datos Persona Responsable
                                            </div>

                                            <v-row>
                                                <v-col>
                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .rut_responsable
                                                        "
                                                        label="Rut* (12345678-9)"
                                                        id="rut"
                                                        type="text"
                                                        required
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .nombre_responsable
                                                        "
                                                        label="Nombre*"
                                                        type="text"
                                                        id="nombre"
                                                        required
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .apellidos_responsable
                                                        "
                                                        label="Apellidos*"
                                                        id="apellidos"
                                                        required
                                                        type="text"
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-switch
                                                        v-model="
                                                            state.editedItem
                                                                .comunidad_lgbtq_responsable
                                                        "
                                                        hide-details
                                                        class="ml-2"
                                                        color="green-darken-3"
                                                        inset
                                                        label="Comunidad LGTB+"
                                                    ></v-switch>

                                                    <v-switch
                                                        v-model="
                                                            state.editedItem
                                                                .donante
                                                        "
                                                        class="ml-2"
                                                        label="Donante"
                                                        color="success"
                                                        hide-details
                                                        inset
                                                        clearable
                                                        variant="underlined"
                                                    ></v-switch>
                                                </v-col>
                                                <v-switch
                                                    v-model="
                                                        state.editedItem
                                                            .credencial_discapacidad_responsable_id
                                                    "
                                                    class="ml-2"
                                                    label="Credencial discapacidad"
                                                    color="success"
                                                    hide-details
                                                    inset
                                                    clearable
                                                    variant="underlined"
                                                ></v-switch>
                                                <v-col>
                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .email
                                                        "
                                                        :rules="
                                                            state
                                                                .validationSchema
                                                                .emailRules
                                                        "
                                                        label="Email"
                                                        type="email"
                                                        required
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .fecha_nacimiento
                                                        "
                                                        label="Fecha de nacimiento"
                                                        clearable
                                                        variant="underlined"
                                                        type="date"
                                                        :format="formatDate"
                                                        @input="
                                                            handleInputChange
                                                        "
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .edad
                                                        "
                                                        label="Edad*"
                                                        type="text"
                                                        variant="underlined"
                                                        readonly
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .direccion
                                                        "
                                                        label="Dirección"
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        label="teléfono 1"
                                                        v-model="
                                                            state.editedItem
                                                                .telefono1
                                                        "
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>

                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .telefono2
                                                        "
                                                        label="teléfono 2"
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col>
                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .grupo_sanguineo
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .grupo_sanguineo_id
                                                        "
                                                        label="Grupo sanguíneo"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .estado_civil
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .estado_civil_id
                                                        "
                                                        label="Estado civil"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .nacionalidad
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .nacionalidad_id
                                                        "
                                                        label="Nacionalidad"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list.religion
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        label="Religion / Culto"
                                                        v-model="
                                                            state.editedItem
                                                                .religion_id
                                                        "
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list.genero
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        label="Género"
                                                        v-model="
                                                            state.editedItem
                                                                .genero_id
                                                        "
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-text-field
                                                        label="Ciudad"
                                                        v-model="
                                                            state.editedItem
                                                                .ciudad
                                                        "
                                                        clearable
                                                        variant="underlined"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col>
                                                    <v-select
                                                        :items="
                                                            state.list.prevision
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .prevision_id
                                                        "
                                                        label="Previsión de Salud"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list.pueblo
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .pueblo_originario_id
                                                        "
                                                        label="Pueblo originario"
                                                        clearable
                                                        variant="underlined"
                                                    />

                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .nivel_instruccion_id
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .instruccion
                                                        "
                                                        label="Nivel de Instruccion"
                                                        clearable
                                                        variant="underlined"
                                                    />
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="#009AA4"
                                                variant="tonal"
                                                @click="close"
                                            >
                                                Cancelar
                                            </v-btn>
                                            <v-btn
                                                color="#009AA4"
                                                variant="tonal"
                                                @click="storeItems"
                                            >
                                                Guardar
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-sheet>
                            </v-form>
                        </v-dialog>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-tooltip text="Ficha Médica" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                v-bind="props"
                                density="compact"
                                color="#009AA4"
                                class="mr-2 ml-2"
                                variant="tonal"
                                :icon="'mdi-stethoscope'"
                                @click="fichaMedica(item)"
                            ></v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip text="Datos Personales" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                v-bind="props"
                                density="compact"
                                class="mr-2 ml-2"
                                color="#009AA4"
                                variant="tonal"
                                :icon="'mdi-account-edit-outline'"
                                @click="fichaPersonal(item)"
                            ></v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip text="Eliminar" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                v-bind="props"
                                density="compact"
                                class="mr-2 ml-2"
                                color="#009AA4"
                                variant="tonal"
                                :icon="'mdi-delete-outline'"
                                @click="remove(item)"
                            ></v-btn>
                        </template>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-sheet>
    </v-container>
</template>
