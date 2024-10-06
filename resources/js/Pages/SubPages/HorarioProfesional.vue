<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Horario de Disponibilidad</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
        </v-toolbar>
      </template>
      <template v-slot:item.disponible="{ item }">
        <v-chip :color="item.disponible === 'S' ? 'green' : 'red'" dark>
          {{ item.disponible }}
        </v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'HorarioTable',
  data() {
    return {
      headers: [
        { text: 'Día de la semana', align: 'center', sortable: true, value: 'dia' },
        { text: 'Hora inicio', align: 'center', sortable: true, value: 'horaInicio' },
        { text: 'Hora término', align: 'center', sortable: true, value: 'horaTermino' },
        { text: 'Disponible (S/N)', align: 'center', sortable: true, value: 'disponible' },
      ],
      items: [
        { dia: 'Lunes', horaInicio: '08:00', horaTermino: '17:00', disponible: 'S' },
        { dia: 'Martes', horaInicio: '08:00', horaTermino: '17:00', disponible: 'N' },
        // Agrega más filas según sea necesario
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos opcionales */
</style>