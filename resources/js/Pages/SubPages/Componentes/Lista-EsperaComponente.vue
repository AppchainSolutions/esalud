
<script setup>
import { ref, onMounted } from 'vue';
//import { useAxios } from '@vueuse/integrations/useAxios';

const headers = ref([
  { title: "RUT", text: 'RUT', value: 'rut' },
  { title: "N° Solicitud", text: 'Número de Solicitud', value: 'numeroSolicitud' },
  { title: "Fecha", text: 'Fecha de Solicitud', sortable: true, value: 'fechaSolicitud' },
  { title: "Especialidad", text: 'Especialidad', sortable: true, value: 'especialidad' },
  { text: 'Acciones', value: 'actions', sortable: false },
]);

const pacientes = ref([
  {
    id: 1,
    rut: '12345678-9',
    numeroSolicitud: '001',
    fechaSolicitud: '2023-10-01',
    especialidad: 'Cardiología',
  },
  {
    id: 2,
    rut: '98765432-1',
    numeroSolicitud: '002',
    fechaSolicitud: '2023-10-02',
    especialidad: 'Dermatología',
  },
  {
    id: 3,
    rut: '11223344-5',
    numeroSolicitud: '003',
    fechaSolicitud: '2023-10-03',
    especialidad: 'Neurología',
  },
]);

const fetchPacientes = async () => {
/*   try {
    const { data } = await useAxios('/api/lista-espera');
    pacientes.value = data.value;
  } catch (error) {
    console.error('Error al obtener la lista de espera:', error);
  } */
};

const verSolicitud = (item) => {
  // Lógica para ver la solicitud
  console.log('Ver solicitud:', item);
};

//onMounted(fetchPacientes);
</script>

<template>
    <v-card>
      <v-card-title>Pacientes en Lista de Espera</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="pacientes"
          item-value="id"
          class="elevation-1"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn
              color="primary"
              @click="verSolicitud(item)"
              icon
            >
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </template>
  
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>