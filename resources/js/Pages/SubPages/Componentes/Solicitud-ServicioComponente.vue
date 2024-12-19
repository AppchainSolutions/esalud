<script setup>
import { ref } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";

// import { useAxios } from '@vueuse/integrations/useAxios';
defineOptions({ layout: AppLayout });

const valid = ref(false);
const rut = ref("");
const nombrePaciente = ref("");
const especialidadSeleccionada = ref("");
const motivoConsulta = ref("");
const pacienteEncontrado = ref(false);
const especialidades = ref(["Psicología", "Terapia Ocupacional", "Kinesiología"]); // Ejemplo de especialidades

const rules = {
    required: (value) => !!value || "Este campo es requerido",
};

const especialidad = ref(especialidades.value[0]); // Inicializar especialidad por defecto

const buscarPaciente = async () => {
    /* try {
        const { data } = await useAxios(`/api/pacientes/${rut.value}`);
        if (data.value) {
            nombrePaciente.value = data.value.nombre;
            pacienteEncontrado.value = true;
        } else {
            nombrePaciente.value = "";
            pacienteEncontrado.value = false;
        }
    } catch (error) {
        nombrePaciente.value = "";
        pacienteEncontrado.value = false;
    } */
};

const submit = async () => {
    if (valid.value) {
        const solicitud = {
            rut: rut.value,
            nombrePaciente: nombrePaciente.value,
            especialidad: especialidadSeleccionada.value,
            motivoConsulta: motivoConsulta.value,
        };
        try {
            await useAxios.post("/api/solicitudes", solicitud);
            alert("Solicitud ingresada correctamente");
            resetForm();
        } catch (error) {
            alert("Error al ingresar la solicitud");
        }
    }
};

const resetForm = () => {
    rut.value = "";
    nombrePaciente.value = "";
    especialidad.value = "";
    motivoConsulta.value = "";
    pacienteEncontrado.value = false;
    valid.value = false;
};


</script>

<template>
    <v-card>
        <v-card-title>Ingresar Nueva Solicitud de Servicio</v-card-title>
        <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                <v-col cols="6">
                <v-text-field
                    v-model="rut"
                    label="RUT solicitante"
                    :rules="[rules.required]"
                    @blur="buscarPaciente"
                ></v-text-field>

                <v-btn
                    prepend-icon="mdi-account-multiple-plus"
                    variant="tonal"
                    class="ma-2"
                    color="#009AA4"
                    type="submit"
                >
                    Buscar usuario
                </v-btn>
                <v-btn
                    prepend-icon="mdi-account-multiple-plus"
                    variant="tonal"
                    class="ma-2"
                    color="#009AA4"
                    type="submit"
                >
                    Agregar nuevo usuario
                </v-btn>
                <v-text-field
                    v-model="nombre"
                    label="Nombre solicitante"
                    :rules="[rules.required]"
                    @blur="buscarPaciente"
                ></v-text-field>

                <v-btn
                    prepend-icon="mdi-account-multiple-plus"
                    variant="tonal"
                    class="ma-2"
                    color="#009AA4"
                    type="submit"
                >
                    Consultar ficha usuario
                </v-btn>
                <v-btn :disabled="!valid" @click="submit"
                    >Ingresar Solicitud</v-btn
                >
            </v-col>
            <v-col cols="6">
                <v-select
                    v-model="especialidadSeleccionada"
                    :items="especialidades"
                    label="Especialidad Solicitada"
                    :rules="[rules.required]"
                ></v-select>

                <v-textarea
                    v-model="motivoConsulta"
                    label="Motivo de Consulta"
                    :rules="[rules.required]"
                ></v-textarea>

                
                <v-text-field
                    v-model="nombre"
                    label="Numero de Solicitud Asignada"
                    :rules="[rules.required]"
                    @blur="buscarPaciente"
                ></v-text-field>
            </v-col>
        </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
