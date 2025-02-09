<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, onMounted } from 'vue'
import { usePage, router } from '@inertiajs/vue3'
import axios from 'axios'
import {
    fetchData,
    handleRemoveItem,
    handleShowItem,
    handleStoreItem,
    closeForm,
    openToCreate,
    openToEdit,
} from "@/helper.js";

    defineOptions({ layout: AppLayout });
// Datos del paciente
const page = usePage()
const paciente = page.props.paciente
const user = page.props.auth.user

// Estado del formulario
const editable = ref(false)
const form = ref({
  nombre: paciente.nombre,
  apellidos: paciente.apellidos,
  rut: paciente.rut,
  email: paciente.email,
  telefono1: paciente.telefono1,
  telefono2: paciente.telefono2,
  direccion: paciente.direccion,
  fecha_nacimiento: paciente.fecha_nacimiento,
  
  // Relaciones
  genero: paciente.genero?.descripcion,
  nacionalidad: paciente.nacionalidad?.descripcion,
  estado_civil: paciente.estadoCivil?.descripcion,
  nivel_instruccion: paciente.nivelInstruccion?.descripcion,
  pueblo_originario: paciente.puebloOriginario?.descripcion,
  religion: paciente.religion?.descripcion,
  prevision: paciente.prevision?.descripcion,
  seguro_salud: paciente.seguroSalud?.descripcion,
  
  // Datos laborales
  unidad: paciente.unidad?.descripcion,
  area: paciente.area?.descripcion,
  ceco: paciente.ceco?.descripcion,
  empresa: paciente.empresa?.descripcion,
  afp: paciente.afp?.descripcion
})

// Listas para selects
// const genero = ref([])
// const nacionalidad = ref([])
// const estadosCiviles = ref([])
// const nivelesInstruccion = ref([])
// const pueblosOriginarios = ref([])
// const religiones = ref([])
// const previsiones = ref([])
// const seguros = ref([])
// const unidades = ref([])
// const areas = ref([])
// const cecos = ref([])
// const empresas = ref([])
// const afps = ref([])

// Cargar datos de selects
// const cargarDatosSelects = async () => {
//   try {
//     const endpoints =  [
//         "afp",
//         "area",
//         "ceco",
//         "estado_civil",
//         "empresa",
//         "exposicion",
//         "genero",
//         "grupo_sanguineo",
//         "nivel_instruccion",
//         "ley_social",
//         "nacionalidad",
//         "planta",
//         "prevision",
//         "pueblo_originario",
//         "religion",
//         "seguro",
//         "unidad",
//     ];

//     console.log(endpoints);

//     const requests = endpoints.map(async (endpoint) => {
//       const response = await axios.get(endpoint.url)
//       endpoint.ref.value = response.data.map(item => ({
//         title: item.descripcion,
//         value: item.id
//       }))
//     })

//     await Promise.all(requests)
//   } catch (error) {
//     console.error('Error cargando datos de selects:', error)
//   }
// }
const endpoints =  ref([
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

const listOfEndpoints = ref([])




onMounted(async () => {
    // listOfEndpoints = await fetchData(endpoints);
    // console.log(listOfEndpoints);
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

const cancelEdit = () => {
  // Restaurar valores originales
  form.value = { 
    nombre: paciente.nombre,
    apellidos: paciente.apellidos,
    rut: paciente.rut,
    email: paciente.email,
    telefono1: paciente.telefono1,
    telefono2: paciente.telefono2,
    direccion: paciente.direccion,
    fecha_nacimiento: paciente.fecha_nacimiento,
    
    genero: paciente.genero?.id,
    nacionalidad: paciente.nacionalidad?.id,
    estado_civil: paciente.estadoCivil?.id,
    nivel_instruccion: paciente.nivelInstruccion?.id,
    pueblo_originario: paciente.puebloOriginario?.id,
    religion: paciente.religion?.id,
    prevision: paciente.prevision?.id,
    seguro_salud: paciente.seguroSalud?.id,
    
    unidad: paciente.unidad?.id,
    area: paciente.area?.id,
    ceco: paciente.ceco?.id,
    empresa: paciente.empresa?.id,
    afp: paciente.afp?.id
  }
  editable.value = false
}
</script>

<template>
  <v-container fluid>
    <v-sheet color="white" :elevation="6" class="rounded-lg ma-4 pa-4">
      <v-form @submit.prevent="updatePerfil">
        <v-row>
          <!-- Datos Personales -->
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.nombre"
              label="Nombre"
              :readonly="!editable"
            />
            <v-text-field
              v-model="form.apellidos"
              label="Apellidos"
              :readonly="!editable"
            />
            <v-text-field
              v-model="form.rut"
              label="RUT"
              :readonly="true"
            />
            <v-select
              v-model="form.genero"
              :items="generos"
              label="Género"
              :readonly="!editable"
            />
            <v-text-field
              v-model="form.fecha_nacimiento"
              label="Fecha de Nacimiento"
              type="date"
              :readonly="!editable"
            />
            <v-select
              v-model="form.nacionalidad"
              :items="nacionalidades"
              label="Nacionalidad"
              :readonly="!editable"
            />
            <v-select
              v-model="form.estado_civil"
              :items="estadosCiviles"
              label="Estado Civil"
              :readonly="!editable"
            />
            <v-select
              v-model="form.religion"
              :items="religiones"
              label="Religión"
              :readonly="!editable"
            />
          </v-col>

          <!-- Datos de Contacto y Adicionales -->
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.email"
              label="Correo Electrónico"
              :readonly="true"
            />
            <v-text-field
              v-model="form.telefono1"
              label="Teléfono Principal"
              :readonly="!editable"
            />
            <v-text-field
              v-model="form.telefono2"
              label="Teléfono Secundario"
              :readonly="!editable"
            />
            <v-text-field
              v-model="form.direccion"
              label="Dirección"
              :readonly="!editable"
            />
            <v-select
              v-model="form.nivel_instruccion"
              :items="nivelesInstruccion"
              label="Nivel de Instrucción"
              :readonly="!editable"
            />
            <v-select
              v-model="form.pueblo_originario"
              :items="pueblosOriginarios"
              label="Pueblo Originario"
              :readonly="!editable"
            />
            <v-select
              v-model="form.prevision"
              :items="previsiones"
              label="Previsión"
              :readonly="!editable"
            />
            <v-select
              v-model="form.seguro_salud"
              :items="seguros"
              label="Seguro de Salud"
              :readonly="!editable"
            />
          </v-col>
        </v-row>

        <!-- Datos Laborales -->
        <v-row>
          <v-col cols="12" md="6">
            <v-select
              v-model="form.empresa"
              :items="empresas"
              label="Empresa"
              :readonly="!editable"
            />
            <v-select
              v-model="form.unidad"
              :items="unidades"
              label="Unidad"
              :readonly="!editable"
            />
            <v-select
              v-model="form.area"
              :items="areas"
              label="Área"
              :readonly="!editable"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="form.ceco"
              :items="cecos"
              label="Centro de Costo"
              :readonly="!editable"
            />
            <v-select
              v-model="form.afp"
              :items="afps"
              label="AFP"
              :readonly="!editable"
            />
          </v-col>
        </v-row>

        <!-- Botones de Acción -->
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
              type="submit"
            >
              Guardar Cambios
            </v-btn>
            <v-btn 
              v-if="editable" 
              color="error" 
              @click="cancelEdit"
            >
              Cancelar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
  </v-container>
</template>