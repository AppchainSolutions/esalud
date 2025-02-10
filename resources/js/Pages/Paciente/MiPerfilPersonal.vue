<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { router, usePage } from "@inertiajs/vue3";
import { reactive, ref, onMounted, computed } from "vue";
import { useDataStore } from "@/store.js";
import moment from "moment";
import { useDate } from "vuetify";
import { fetchData, closeForm, openToEdit } from "@/helper.js";

//**********\\\\  INI STATE VARIABLES AND CONST ////*************/

defineOptions({ layout: AppLayout });

// Datos del paciente
const page = usePage();
const paciente = page.props.paciente;
//const enpoints = reactive({
let endpoints = reactive([
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
]);
let editable = ref(false)
let form = ref({
    nombre: paciente.nombre,
    apellidos: paciente.apellidos,
    rut: paciente.rut,
    email: paciente.email,
    telefono1: paciente.telefono1,
    telefono2: paciente.telefono2,
    direccion: paciente.direccion,
    fecha_nacimiento: paciente.fecha_nacimiento,

    // Relaciones
    actividad_economica: paciente.actividad_economica,
    estado_civil: paciente.estado_civil,
    genero: paciente.genero,
    grupo_sanguineo: paciente.grupo_Sanguineo,
    ley_social: paciente.ley_social,
    nacionalidad: paciente.nacionalidad,
    nivel_instruccion: paciente.nivel_instruccion,
    prevision: paciente.prevision,
    pueblo_originario: paciente.pueblo_originario,
    religion: paciente.religion,
    seguro_salud: paciente.seguro_salud,

    // Datos laborales
    unidad: paciente.unidad,
    area: paciente.area,
    ceco: paciente.ceco,
    empresa: paciente.empresa,
    afp: paciente.afp,
    ceco: paciente.ceco,
    cargo: paciente.cargo,
});

let list = reactive({});

//**********\\\\  LIFE CYCLE HOOKS ////*************/
onMounted(async () => {
    const fetchedData = await fetchData(endpoints);

    // Asegurar estructura de datos
    list = fetchedData,
    //     grupo_sanguineo: fetchedData.grupo_sanguineo || []
    
    console.log(list);
});
// Métodos
const updatePerfil = () => {
  router.put(route('paciente.perfil.update'), form.value, {
    onSuccess: () => {
      editable.value = false
      // Mostrar notificación de éxito
    },
    onError: (errors) => {
      console.error('Errores al actualizar:', errors)
      // Manejar errores de validación
    }
  })
}

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
    if (form.errors) {
        form.errors = {};
    }
    closeForm(state);
}


const cancelEdit = () => {
    // Restaurar valores originales usando spread operator
    // form = {
    //     ...paciente,
    //     fecha_nacimiento_display: formatDate(paciente.fecha_nacimiento),
    //     fecha_nacimiento: formatDateForInput(paciente.fecha_nacimiento),
    // };
    form = paciente;
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
                                    v-model="form.rut"
                                    label="RUT (12345678-9)"
                                    type="text"
                                    required
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="form.nombre"
                                    label="Nombre*"
                                    type="text"
                                    required
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="form.apellidos"
                                    label="Apellidos*"
                                    required
                                    type="text"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-switch
                                    v-model="form.activo"
                                    hide-details
                                    :value="form.activo"
                                    false-value="true"
                                    true-value="false"
                                    class="ml-2"
                                    color="green-darken-3"
                                    inset
                                    label="Activo"
                                    readonly
                                ></v-switch>
                                <v-switch
                                    v-model="form.protocolo_minsal"
                                    hide-details
                                    false-value="true"
                                    true-value="false"
                                    class="ml-2"
                                    color="green-darken-3"
                                    inset
                                    label="Protocolo Minsal"
                                    readonly
                                ></v-switch>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-switch
                                    v-model="form.donante"
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
                                    v-model="form.email"
                                    required
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="form.fecha_nacimiento"
                                    label="Fecha de nacimiento"
                                    variant="underlined"
                                    type="date"
                                    @input="handleInputChange"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="form.edad"
                                    label="Edad*"
                                    type="text"
                                    variant="underlined"
                                    readonly
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="form.direccion"
                                    label="Dirección"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    label="teléfono 1"
                                    v-model="form.telefono1"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="form.telefono2"
                                    label="teléfono 2"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="[
                                        { id: 1, descripcion: 'O' },
                                        { id: 2, descripcion: 'A' },
                                        { id: 3, descripcion: 'B' },
                                        { id: 4, descripcion: 'AB' },
                                    ]"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.grupo_sanguineo"
                                    label="Grupo sanguíneo"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2"> </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="list.nacionalidad"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.nacionalidad"
                                    label="Nacionalidad"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="list.religion"
                                    item-title="descripcion"
                                    item-value="id"
                                    label="Religion / Culto"
                                    v-model="form.religion"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="list.genero"
                                    item-title="descripcion"
                                    item-value="id"
                                    label="Género"
                                    v-model="form.genero"
                                    variant="underlined"
                                    :readonly="!editable"
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
                                    v-model="form.modalidad_atencion"
                                    label="Modalidad ATebnción"
                                    variant="underlined"
                                    :readonly="!editable"
                                >
                                </v-select>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    label="Ciudad"
                                    v-model="form.ciudad"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="list.prevision"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.prevision"
                                    label="Previsión de Salud"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="list.afp"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.afp"
                                    label="AFP"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="list.ley_social"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.ley_social"
                                    label="Leyes Sociales"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="list.seguro"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.seguro"
                                    label="Administradores del Seguro Ley 16.744"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="list.pueblo_originario"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.pueblo_originario"
                                    label="Pueblo originario"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="list.nivel_instruccion"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.nivel_instruccion"
                                    label="Nivel de Instrucción"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <div class="text-h6">Datos Laborales</div>
                        <v-spacer></v-spacer>
                        <v-row class="mt-2">
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    v-model="form.actividad_economica"
                                    label="Actividad economica"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="list.empresa"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.empresa"
                                    label="Empresa*"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    v-model="form.cargo"
                                    label="Cargo"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="list.area"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.area"
                                    label="Área"
                                    single
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="list.unidad"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.unidad"
                                    label="Unidad"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    v-model="form.ocupacion"
                                    label="Ocupación"
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="list.exposicion"
                                    item-title="descripcion"
                                    item-value="descripcion"
                                    chips
                                    v-model="form.exposicion"
                                    label="Exposicion"
                                    multiple
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="list.ceco"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.ceco"
                                    label="Área de Trabajo (Cencos)"
                                    single
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="list.planta"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="form.planta"
                                    label="Planta"
                                    single
                                    variant="underlined"
                                    :readonly="!editable"
                                ></v-select>
                            </v-col>
                        </v-row>
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
            </v-form>
        </v-sheet>
    </v-container>
</template>
