<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { router } from "@inertiajs/vue3";
import { reactive, ref, onMounted, computed } from "vue";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
import { useDate } from "vuetify";
import { fetchData, handleStoreItem } from "@/helper.js";
import { usePage } from "@inertiajs/vue3";

const page = usePage();
const paciente = page.props.paciente;

//**********\\\\  INI STATE VARIABLES AND CONST ////*************/

defineOptions({
    layout: AppLayout,
    paciente: Object,
});

const state = reactive({
    endpoints: [
        "afp",
        "area",
        "ceco",
        "estado_civil",
        "empresa",
        "exposicion",
        "genero",
        "grupo_sanguineo",
        "nivel_instruccion",
        "ley_social",
        "nacionalidad",
        "planta",
        "prevision",
        "pueblo_originario",
        "religion",
        "seguro",
        "unidad",
    ],

    frmItem: {
        rut: paciente.rut,
        nombre: paciente.nombre,
        apellidos: paciente.apellidos,
        actividad_economica: paciente.actividad_economica,
        activo: paciente.activo,
        protocolo_minsal: paciente.protocolo_minsal,
        afp: paciente.afp,
        area: paciente.area,
        cargo: paciente.cargo,
        ceco: paciente.ceco,
        ciudad: paciente.ciudad,
        direccion: paciente.direccion,
        donante: paciente.donante,
        edad: paciente.edad,
        email: paciente.email,
        empresa: paciente.empresa,
        estado_civil: paciente.estado_civil,
        exposicion: paciente.exposicion,
        fecha_nacimiento: paciente.fecha_nacimiento 
            ? moment(paciente.fecha_nacimiento).format('DD/MM/YYYY') 
            : null,
        genero: paciente.genero,
        grupo_sanguineo: paciente.grupo_sanguineo,
        nivel_instruccion: paciente.nivel_instruccion,
        ley_social: paciente.ley_social,
        modalidad_atencion: paciente.modalidad_atencion,
        nacionalidad: paciente.nacionalidad,
        ocupacion: paciente.ocupacion,
        planta: paciente.planta,
        prevision: paciente.prevision,
        profesion: paciente.profesion,
        pueblo_originario: paciente.pueblo_originario,
        religion: paciente.religion,
        seguro_salud: paciente.seguro_salud,
        telefono1: paciente.telefono1,
        telefono2: paciente.telefono2,
        unidad: paciente.unidad,
    },

    list: [],
    loadingSearch: false,
    tableItems: [],
    urlDelete: "paciente/delete",
    urlShow: "paciente/show",
    urlUpdate: "paciente/update",
    urlStore: "paciente",
});
const date = useDate();

//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    state.list = await fetchData(state.endpoints);
});

//**********\\\\  COMPUTE PROPERTIES ////*************/
const calcularEdad = computed(() => {
    return paciente.fecha_nacimiento 
        ? moment().diff(moment(paciente.fecha_nacimiento), 'years') 
        : null;
});

const formatDate = computed(() => {
    let formatted = moment(state.frmItem.fecha_nacimiento).format("DD/MM/YYYY");
    return formatted;
});

//**********\\\\ METHODS ////*************/
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
    let fecNac = state.frmItem.fecha_nacimiento;
    let age = calcEdad(fecNac);
    state.frmItem.edad = ref(age);
};

//**********\\\\  CRUD ////*************/

const update = async () => {
    await handleStoreItem(state, "edit");
    closeForm(state);
};
</script>

<template>
    <v-container fluid>
        <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-4 pa-4'">
            <v-sheet color="white" :elevation="4" :class="'rounded-lg pa-2'">
                <v-card>
                    <v-card-title>
                        <v-divider thickness="4px" color="#662d91"></v-divider>
                    </v-card-title>
                    <v-card-text>
                        <div class="text-h6">Datos Personales</div>
                        <v-spacer></v-spacer>
                        <v-row>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.rut"
                                    label="Rut* (12345678-9)"
                                    type="text"
                                    required
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.nombre"
                                    label="Nombre*"
                                    type="text"
                                    required
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.apellidos"
                                    label="Apellidos*"
                                    required
                                    type="text"
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-switch
                                    v-model="state.frmItem.activo"
                                    hide-details
                                    :value="state.frmItem.activo"
                                    false-value="true"
                                    true-value="false"
                                    class="ml-2"
                                    color="green-darken-3"
                                    inset
                                    label="Activo"
                                ></v-switch>
                                <v-switch
                                    v-model="state.frmItem.protocolo_minsal"
                                    hide-details
                                    false-value="true"
                                    true-value="false"
                                    class="ml-2"
                                    color="green-darken-3"
                                    inset
                                    label="Protocolo Minsal"
                                ></v-switch>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-switch
                                    v-model="state.frmItem.donante"
                                    class="ml-2"
                                    label="Donante"
                                    color="success"
                                    hide-details
                                    inset
                                    clearable
                                    variant="underlined"
                                ></v-switch>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.email"
                                    label="Email"
                                    type="email"
                                    required
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.fecha_nacimiento"
                                    label="Fecha de nacimiento"
                                    clearable
                                    variant="underlined"
                                    type="date"
                                    :format="formatDate"
                                    @input="handleInputChange"
                                    readonly
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    :value="calcularEdad + ' años'"
                                    label="Edad"
                                    readonly
                                />
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.direccion"
                                    label="Dirección"
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    label="teléfono 1"
                                    v-model="state.frmItem.telefono1"
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.telefono2"
                                    label="teléfono 2"
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.grupo_sanguineo"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.grupo_sanguineo"
                                    label="Grupo sanguíneo"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.estado_civil"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.estado_civil"
                                    label="Estado civil"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.nacionalidad"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.nacionalidad"
                                    label="Nacionalidad"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.religion"
                                    item-title="descripcion"
                                    item-value="id"
                                    label="Religion / Culto"
                                    v-model="state.frmItem.religion"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.genero"
                                    item-title="descripcion"
                                    item-value="id"
                                    label="Género"
                                    v-model="state.frmItem.genero"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="[
                                        'Institucional (MAI)',
                                        'Libre elección (MLE)',
                                    ]"
                                    item-title="descripcion"
                                    item-value="descripcion"
                                    v-model="state.frmItem.modalidadAtencion"
                                    label="ModalidadAtencion de atención"
                                    clearable
                                    variant="underlined"
                                >
                                </v-select>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    label="Ciudad"
                                    v-model="state.frmItem.ciudad"
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.prevision"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.prevision"
                                    label="Previsión de Salud"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.afp"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.afp"
                                    label="AFP"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.ley_social"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.ley_social"
                                    label="Leyes Sociales"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.seguro"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.seguro"
                                    label="Administradores del Seguro Ley 16.744"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.pueblo"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.pueblo"
                                    label="Pueblo originario"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.nivelInstruccion"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.nivelInstruccion"
                                    label="Nivel de NivelInstruccion"
                                    clearable
                                    variant="underlined"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <div class="text-h6">Datos Laborales</div>
                        <v-spacer></v-spacer>
                        <v-row class="mt-2">
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    v-model="state.frmItem.actividad_economica"
                                    label="Actividad económica"
                                    required
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="state.list.empresa"
                                    item-title="descripcion"
                                    item-value="id"
                                    clearable
                                    v-model="state.frmItem.empresa"
                                    label="Empresa*"
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    v-model="state.frmItem.cargo"
                                    label="Cargo"
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="state.list.area"
                                    item-title="descripcion"
                                    item-value="id"
                                    clearable
                                    v-model="state.frmItem.area"
                                    label="Área"
                                    single
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="state.list.unidad"
                                    item-title="descripcion"
                                    item-value="id"
                                    clearable
                                    v-model="state.frmItem.unidad"
                                    label="Unidad"
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    v-model="state.frmItem.ocupacion"
                                    label="Ocupación"
                                    clearable
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="state.list.exposicion"
                                    item-title="descripcion"
                                    item-value="descripcion"
                                    clearable
                                    chips
                                    v-model="state.frmItem.exposicion"
                                    label="Exposicion"
                                    multiple
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="state.list.ceco"
                                    item-title="descripcion"
                                    item-value="id"
                                    clearable
                                    v-model="state.frmItem.ceco"
                                    label="Área de Trabajo (Cencos)"
                                    single
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="state.list.planta"
                                    item-title="descripcion"
                                    item-value="id"
                                    clearable
                                    v-model="state.frmItem.planta"
                                    label="Planta"
                                    single
                                    variant="underlined"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#009AA4" variant="tonal" @click="close">
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
        </v-sheet>
    </v-container>
</template>
