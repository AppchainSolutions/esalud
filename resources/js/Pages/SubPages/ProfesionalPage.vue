<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { router } from "@inertiajs/vue3";
import { reactive, ref, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import moment from "moment";
import { useDate } from "vuetify";
import {
    fetchAllData,
    handleRemoveItem,
    //handleSearchItem,
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
    endpoints: ["especialidades"],
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
            title: "Especialidad",
            align: "center",
            sortable: true,
            key: "especialidad_id",
        },

        { title: "Acciones", sortable: false, align: "center", key: "actions" },
    ],
    validation: {
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
    horario: {
        headers: [
            {
                text: "Día de la semana",
                align: "center",
                sortable: true,
                value: "dia",
            },
            {
                text: "Hora inicio",
                align: "center",
                sortable: true,
                value: "horaInicio",
            },
            {
                text: "Hora término",
                align: "center",
                sortable: true,
                value: "horaTermino",
            },
            {
                text: "Disponible (S/N)",
                align: "center",
                sortable: true,
                value: "disponible",
            },
        ],
        items: [
            {
                dia: "Lunes",
                horaInicio: "08:00",
                horaTermino: "17:00",
                disponible: "S",
            },
            {
                dia: "Martes",
                horaInicio: "08:00",
                horaTermino: "17:00",
                disponible: "N",
            },
        ],
    },
    searchQuery: {
        rut: null,
        especialidad_id: null,
    },
    editedItem: {
        rut: null,
        nombre: null,
        apellidos: null,
        dirección: null,
        email: null,
        fecha_nacimiento: null,
        especialidad_id: null,
        telefono: null,
        vigente: true
    },
    defaultItem: {
        rut: null,
        nombre: null,
        apellidos: null,
        dirección: null,
        email: null,
        fecha_nacimiento: null,
        especialidad_id: null,
        telefono: null,
        vigente: true
    },
    dialog: false,
    editedIndex: -1,
    formCrear: "Nuevo profesional",
    formEdit: "Editar datos del profesional",
    formItems: [],
    formTitle: "Gestión de Profesionales",
    list: [],
    loadingSearch: false,
    tableItems: [],
});
const date = useDate();

//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    state.list = await fetchAllData(state.endpoints);
});

//**********\\\\  COMPUTE PROPERTIES ////*************/
const editedItemTitle = computed(() =>
    state.editedIndex === -1 ? state.formCrear : state.formEdit
);

//**********\\\\ METHODS ////*************/
const formatDate = computed(() => {
    let formatted = moment(state.editedItem.fecha_nacimiento).format(
        "DD/MM/YYYY"
    );
    return formatted;
});

function fichaMedica(item) {
    store.selected = item;
    try {
        router.get("/ficha");
    } catch (error) {
        console.error(
          //  '"An error occurred while fetching daily attention data."'
        );
    }
}

function asignacion(item) {
    store.selected = item;
    try {
        router.get("/asignacion");
    } catch (error) {
       // console.error("An error occurred while fetching daily attention data.");
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
const isObjectNullOrEmpty = (obj) => {
    return Object.values(obj).every((value) => value === null || value === "");
};

const show = () => {
    if (isObjectNullOrEmpty(state.searchQuery)) {
        Swal.fire({
        title: '¿Quieres desplegar todos los registros?',
        text: "Esta acción puede tardar un poco.",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Acción a realizar si el usuario acepta
          console.log('Desplegando todos los registros...');
        } else {
          // Acción a realizar si el usuario cancela
          console.log('Acción cancelada.');
        }
      });
    } else {
        console.log(state.searchQuery);
    }
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
        <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-2 pa-2'">
            <div class="text-h6 ma-2">{{ state.formTitle }}</div>
            <v-divider thickness="4px" color="#009AA4"></v-divider>
            <v-form fast-fail @submit.prevent>
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="state.searchQuery.rut"
                            :rules="state.validation.rutRules"
                            label="Rut* (12345678-9)"
                            class="ma-2"
                            type="text"
                            variant="underlined"
                            clearable
                        ></v-text-field>
                        <v-select
                            :items="state.list.especialidad"
                            clearable
                            label="Especialidad"
                            class="ma-2"
                            variant="underlined"
                            single
                        ></v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-btn
                        prepend-icon="mdi-file-search"
                        variant="tonal"
                        class="ma-4"
                        color="#009AA4"
                        :loading="state.loadingSearch"
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
                                        <v-spacer></v-spacer>
                                        <v-row>
                                            <v-col cols="3">
                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.rut
                                                    "
                                                    label="Rut* (12345678-9)"
                                                    type="text"
                                                    required
                                                    clearable
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.nombre
                                                    "
                                                    label="Nombre*"
                                                    type="text"
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
                                                    required
                                                    type="text"
                                                    clearable
                                                    variant="underlined"
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="
                                                        state.editedItem.email
                                                    "
                                                    :rules="
                                                        state.validationSchema
                                                            .emailRules
                                                    "
                                                    label="Email"
                                                    type="email"
                                                    required
                                                    clearable
                                                    variant="underlined"
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="3">
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
                                                <v-select
                                                    :items="[
                                                        'Psicologia',
                                                        'Kine',
                                                        'Terapia Ocupacional',
                                                    ]"
                                                    clearable
                                                    label="Especialidad"
                                                    variant="underlined"
                                                    single
                                                ></v-select>
                                            </v-col>

                                            <v-col>
                                                <v-data-table
                                                    :headers="
                                                        state.horario.headers
                                                    "
                                                    :items="state.horario.items"
                                                    class="elevation-1"
                                                >
                                                    <template v-slot:top>
                                                        <v-toolbar flat>
                                                            <v-toolbar-title
                                                                >Disponibilidad
                                                                horaria</v-toolbar-title
                                                            >
                                                            <v-divider
                                                                class="mx-4"
                                                                inset
                                                                vertical
                                                            ></v-divider>
                                                        </v-toolbar>
                                                    </template>
                                                    <template
                                                        v-slot:item.disponible="{
                                                            item,
                                                        }"
                                                    >
                                                        <v-chip
                                                            :color="
                                                                item.disponible ===
                                                                'S'
                                                                    ? 'green'
                                                                    : 'red'
                                                            "
                                                            dark
                                                        >
                                                            {{
                                                                item.disponible
                                                            }}
                                                        </v-chip>
                                                    </template>
                                                </v-data-table>
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
                            </v-form>
                        </v-dialog>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-tooltip text="Asignacion de Servicio" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                v-bind="props"
                                density="compact"
                                color="#009AA4"
                                class="mr-2 ml-2"
                                :icon="'mdi-medical-bag'"
                                variant="tonal"
                                @click="asignacion(item)"
                            ></v-btn>
                        </template>
                    </v-tooltip>
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
