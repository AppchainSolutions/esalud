<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { router, usePage } from "@inertiajs/vue3";
import { reactive, ref, onMounted, computed } from "vue";
import { useField, useForm } from "vee-validate";
//import '../utils/validation-rules';
//import { formatRut } from '../utils/rut-validator';
import { useDataStore } from "@/store.js";
import moment from "moment";
import { useDate } from "vuetify";
import { fetchData, closeForm, openToEdit } from "@/helper.js";
import { debugHelpers as debug } from "@/utils/debug.js";
import ConfirmDialog from "@/Components/ConfirmDialog.vue";

//**********\\\\  INI STATE VARIABLES AND CONST ////*************/

defineOptions({ layout: AppLayout });

// Datos del paciente
const page = usePage();
const paciente = page.props.paciente;
const editable = ref(false);
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
    editedItem: {
        rut: null,
        nombre: null,
        actividad_economica: null,
        activo: true,
        protocolo_minsal: false,
        afp: null,
        apellidos: null,
        area: null,
        cargo: null,
        ceco: null,
        ciudad: null,
        direccion: null,
        donante: false,
        edad: null,
        email: null,
        empresa: null,
        estado_civil: null,
        exposicion: [],
        fecha_nacimiento: null,
        genero: null,
        grupo_sanguineo: null,
        nivelInstruccion: null,
        ley_social: null,
        modalidad_atencion: null,
        nacionalidad: null,
        ocupacion: null,
        planta: null,
        prevision: null,
        profesion: null,
        pueblo_originario: null,
        religion: null,
        seguro: null,
        telefono1: null,
        telefono2: null,
        unidad: null,
    },
});
const date = useDate();

//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    actualizaFormulario();  
    state.list = await fetchData(state.endpoints);
    console.log(state.list);
});

const actualizaFormulario = () => {
    state.editedItem = {
        ...paciente, // Formatear fecha para mostrar y para input
        fecha_nacimiento_display: formatDate(paciente.fecha_nacimiento),
        fecha_nacimiento: formatDateForInput(paciente.fecha_nacimiento),
    };
    // Calcular edad correctamente
    if (paciente.fecha_nacimiento) {
        state.editedItem.edad = moment().diff(moment(paciente.fecha_nacimiento), 'years')
    }
    console.log(state.editedItem);
};

const formatDate = (fecha) => {
    if (!fecha) return "";
    // Parsea la fecha ISO y formatea para mostrar
    return moment(fecha).format("DD/MM/YYYY");
};

const formatDateForInput = (fecha) => {
    if (!fecha) return "";
    // Formatea la fecha para el input de tipo date (YYYY-MM-DD)
    return moment(fecha).format("YYYY-MM-DD");
};
function close() {
    // Limpiar errores al cerrar el formulario
    if (state.editedItem.errors) {
        state.editedItem.errors = {};
    }
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

// Métodos
const updatePerfil = () => {
    router.put(route("paciente.perfil.update"), form.value, {
        onSuccess: () => {
            editable.value = false;
            // Mostrar notificación de éxito
        },
        onError: (errors) => {
            console.error("Errores al actualizar:", errors);
            // Manejar errores de validación
        },
    });
};

const cancelEdit = () => {
    // Restaurar valores originales usando spread operator
    state.editedItem = {
        ...paciente,
        fecha_nacimiento_display: formatDate(paciente.fecha_nacimiento),
        fecha_nacimiento: formatDateForInput(paciente.fecha_nacimiento),
    };
    editable.value = false;
};
</script>

<template>
    <v-container fluid>
        <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-4 pa-4'">
            <v-divider thickness="4px" color="#009AA4" class="ma-4"></v-divider>

            <v-form @submit.prevent="updatePerfil">
                <v-card>
                    <v-card-title> </v-card-title>
                    <v-card-text>
                        <div class="text-h6">Datos Personales</div>
                        <v-spacer></v-spacer>
                        <v-row>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.editedItem.rut"
                                    label="RUT (12345678-9)"
                                    type="text"
                                    required
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.editedItem.nombre"
                                    label="Nombre*"
                                    type="text"
                                    required
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.editedItem.apellidos"
                                    label="Apellidos*"
                                    required
                                    type="text"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-switch
                                    v-model="state.editedItem.activo"
                                    hide-details
                                    :value="state.editedItem.activo"
                                    false-value="true"
                                    true-value="false"
                                    class="ml-2"
                                    color="green-darken-3"
                                    inset
                                    label="Activo"
                                    :readonly="!editable"
                                ></v-switch>
                                <v-switch
                                    v-model="state.editedItem.protocolo_minsal"
                                    hide-details
                                    false-value="true"
                                    true-value="false"
                                    class="ml-2"
                                    color="green-darken-3"
                                    inset
                                    label="Protocolo Minsal"
                                    :readonly="!editable"
                                ></v-switch>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-switch
                                    v-model="state.editedItem.donante"
                                    class="ml-2"
                                    label="Donante"
                                    color="success"
                                    hide-details
                                    inset
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-switch>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.editedItem.email"
                                    required
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.editedItem.fecha_nacimiento"
                                    label="Fecha de nacimiento"
                                    variant="underlined"
                                    type="date"
                                    @input="handleInputChange"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>
                            {{ state.editedItem.fecha_nacimiento }}
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.editedItem.edad"
                                    label="Edad*"
                                    type="text"
                                    variant="underlined"
                                    readonly
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.editedItem.direccion"
                                    label="Dirección"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    label="teléfono 1"
                                    v-model="state.editedItem.telefono1"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.editedItem.telefono2"
                                    label="teléfono 2"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <!-- <v-select
                                                        :items="
                                                            state.list
                                                                .grupo_sanguineo
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .grupo_sanguineo
                                                        "
                                                        label="Grupo sanguíneo"
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select> -->
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <!--   -->
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <!-- <v-select
                                                        :items="
                                                            state.list
                                                                .nacionalidad
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .nacionalidad
                                                        "
                                                        label="Nacionalidad"
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select> -->
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <!-- <v-select
                                                        :items="
                                                            state.list.religion
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        label="Religion / Culto"
                                                        v-model="
                                                            state.editedItem
                                                                .religion
                                                        "
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select> -->
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <!--  <v-select
                                                        :items="
                                                            state.list.genero
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        label="Género"
                                                        v-model="
                                                            state.editedItem
                                                                .genero
                                                        "
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select> -->
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="[
                                        'Institucional (MAI)',
                                        'Libre elección (MLE)',
                                    ]"
                                    item-title="descripcion"
                                    item-value="descripcion"
                                    v-model="
                                        state.editedItem.modalidad_atencion
                                    "
                                    label="Modalidad ATebnción"
                                    variant="underlined"
                                    :readonly="!editable"
                                >
                                </v-select>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    label="Ciudad"
                                    v-model="state.editedItem.ciudad"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <!--  <v-select
                                                        :items="
                                                            state.list.prevision
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .prevision
                                                        "
                                                        label="Previsión de Salud"
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select> -->
                            </v-col>

                            <!--  <v-col cols="6" sm="4" md="2">
                                                    <v-select
                                                        :items="state.list.afp"
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem.afp
                                                        "
                                                        label="AFP"
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col> -->

                            <v-col cols="6" sm="4" md="2">
                                <!-- <v-select
                                                        :items="
                                                            state.list
                                                                .ley_social
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .ley_social
                                                        "
                                                        label="Leyes Sociales"
                                                        
                                                        variant="underlined"    
                                                        :readonly="!editable"
                                                    ></v-select> -->
                            </v-col>

                            <!-- <v-col cols="6" sm="4" md="2">
                                                    <v-select
                                                        :items="
                                                            state.list.seguro
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .seguro
                                                        "
                                                        label="Administradores del Seguro Ley 16.744"
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="6" sm="4" md="2">
                                                    <v-select
                                                        :items="
                                                            state.list.pueblo_originario
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .pueblo_originario
                                                        "
                                                        label="Pueblo originario"
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="6" sm="4" md="2">
                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .nivel_instruccion
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        v-model="
                                                            state.editedItem
                                                                .nivel_instruccion
                                                        "
                                                        label="Nivel de Instrucción"
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col> -->
                        </v-row>
                        <div class="text-h6">Datos Laborales</div>
                        <v-spacer></v-spacer>
                        <!-- <v-row class="mt-2">
                                                <v-col cols="12" sm="6" md="3">
                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .actividad_economica
                                                        "
                                                        label="Actividad economica"
                                                        
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="3">
                                                    <v-select
                                                        :items="
                                                            state.list.empresa
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        
                                                        v-model="
                                                            state.editedItem
                                                                .empresa
                                                        "
                                                        label="Empresa*"
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="3">
                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .cargo
                                                        "
                                                        label="Cargo"
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="3">
                                                    <v-select
                                                        :items="state.list.area"
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        
                                                        v-model="
                                                            state.editedItem
                                                                .area
                                                        "
                                                        label="Área"
                                                        single
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="3">
                                                    <v-select
                                                        :items="
                                                            state.list.unidad
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        
                                                        v-model="
                                                            state.editedItem
                                                                .unidad
                                                        "
                                                        label="Unidad"
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="3">
                                                    <v-text-field
                                                        v-model="
                                                            state.editedItem
                                                                .ocupacion
                                                        "
                                                        label="Ocupación"
                                                        
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="3">
                                                    <v-select
                                                        :items="
                                                            state.list
                                                                .exposicion
                                                        "
                                                        item-title="descripcion"
                                                        item-value="descripcion"
                                                        
                                                        chips
                                                        v-model="
                                                            state.editedItem
                                                                .exposicion
                                                        "
                                                        label="Exposicion"
                                                        multiple
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="3">
                                                    <v-select
                                                        :items="state.list.ceco"
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        
                                                        v-model="
                                                            state.editedItem
                                                                .ceco
                                                        "
                                                        label="Área de Trabajo (Cencos)"
                                                        single
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="3">
                                                    <v-select
                                                        :items="
                                                            state.list.planta
                                                        "
                                                        item-title="descripcion"
                                                        item-value="id"
                                                        
                                                        v-model="
                                                            state.editedItem
                                                                .planta
                                                        "
                                                        label="Planta"
                                                        single
                                                        variant="underlined"
                                                        :readonly="!editable"
                                                    ></v-select>
                                                </v-col>
                                            </v-row> -->
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-row>
                            <v-col>
                                <v-btn
                                    v-if="!editable"
                                    color="primary"
                                    @click="editable = true"
                                >
                                    Editar Perfil
                                </v-btn>
                                <v-btn
                                    v-if="editable"
                                    color="success"
                                    variant="tonal"
                                    type="submit"
                                >
                                    Guardar Cambios
                                </v-btn>
                                <v-btn
                                    v-if="editable"
                                    color="error"
                                    variant="tonal"
                                    @click="cancelEdit"
                                >
                                    Cancelar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
                <!-- Botones de Acción -->
            </v-form>
        </v-sheet>
    </v-container>
</template>
