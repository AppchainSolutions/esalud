<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { usePage } from "@inertiajs/vue3";


//**********\\\\  INI STATE VARIABLES AND CONST ////*************/

defineOptions({layout: AppLayout});

const page = usePage();
const user = usePage().props.auth.user;
const paciente = page.props.paciente;
// store.setPaciente(paciente);

</script>

<template>
    
     <v-container fluid>
        {{ user }}
{{ paciente }}

        <v-sheet color="white" :elevation="6" :class="'rounded-lg ma-4 pa-4'">
            <v-sheet color="white" :elevation="4" :class="'rounded-lg pa-2'">
                <v-card>
                    <v-card-title>
                        <v-divider thickness="4px" color="#662d91"></v-divider>
                    </v-card-title>
                    <v-card-text>
                        <div class="text-h6">Datos Personales</div>
                        <v-spacer></v-spacer>
                        <!-- <v-row>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.rut"
                                    label="Rut* (12345678-9)"
                                    type="text"
                                    required
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.nombre"
                                    label="Nombre*"
                                    type="text"
                                    required
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.apellidos"
                                    label="Apellidos*"
                                    required
                                    type="text"
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
                                    variant="underlined"
                                ></v-switch>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.email"
                                    label="Email"
                                    type="email"
                                    required
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.fecha_nacimiento"
                                    label="Fecha de nacimiento"
                                    variant="underlined"
                                    type="text"
                                    @input="handleInputChange"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.edad"
                                    label="Edad"
                                    readonly
                                />
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.direccion"
                                    label="Dirección"
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    label="teléfono 1"
                                    v-model="state.frmItem.telefono1"
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    v-model="state.frmItem.telefono2"
                                    label="teléfono 2"
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
                                    variant="underlined"
                                >
                                </v-select>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-text-field
                                    label="Ciudad"
                                    v-model="state.frmItem.ciudad"
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
                                    variant="underlined"
                                ></v-select>
                            </v-col>
                            <v-col cols="6" sm="4" md="2">
                                <v-select
                                    :items="state.list.pueblo_originario"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.pueblo_originario"
                                    label="Pueblo originario"
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
                                    variant="underlined"
                                ></v-select>
                            </v-col>
                        </v-row> -->
                        <div class="text-h6">Datos Laborales</div>
                        <v-spacer></v-spacer>
                       <!--  <v-row class="mt-2">
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    v-model="state.frmItem.actividad_economica"
                                    label="Actividad económica"
                                    required
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="state.list.empresa"
                                    item-title="descripcion"
                                    item-value="id"
                                    v-model="state.frmItem.empresa"
                                    label="Empresa*"
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    v-model="state.frmItem.cargo"
                                    label="Cargo"
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="state.list.area"
                                    item-title="descripcion"
                                    item-value="id"
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
                                    v-model="state.frmItem.unidad"
                                    label="Unidad"
                                    variant="underlined"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    v-model="state.frmItem.ocupacion"
                                    label="Ocupación"
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    :items="state.list.exposicion"
                                    item-title="descripcion"
                                    item-value="descripcion"
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
                                    v-model="state.frmItem.planta"
                                    label="Planta"
                                    single
                                    variant="underlined"
                                ></v-select>
                            </v-col>
                        </v-row> -->
                    </v-card-text>
   <!--                  <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#009AA4" variant="tonal" @click="close">
                            Cancelar
                        </v-btn>
                        <v-btn
                            color="#009AA4"
                            variant="tonal"
                            @click="storeItems"
                        >
                            Actualizar sus datos
                        </v-btn>
                    </v-card-actions> -->
                </v-card>
            </v-sheet> 
        </v-sheet>
    </v-container>
</template>
