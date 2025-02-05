<template>
    <v-container>
      <h1 >Mi Resumen Médico</h1>
      <v-row class="mt-4 pt-4">
        <ul>
          <li>Peso:</li>
          <li>Estatura:</li>
          <li>Presión arterial:</li>
          <li>FC:</li>
          <li>Fracción de O2:</li>
          <li>Glucosa:</li>
        </ul>
      </v-row>
      <br>
      <h2>Tabla evolucion trastorno crónico</h2>
      <v-row class="mt-4 pt-4">
        <br>
        <ul>
          <li>Enfermedad diagnosticada en el paciente (fecha)</li>
          <li>Resultados de las pruebas de diagnóstico</li>
        </ul>
      </v-row>
      <br>
      <h2>Resultados de las pruebas de diagnóstico</h2>
      <v-row class="mt-4 pt-4">
        <br>
        <ul>
          <li>Principales recomendaciones</li>
          <li>Próximo Control</li>
        </ul>
      </v-row>
    </v-container>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
defineOptions({ layout: AppLayout });

</script>
