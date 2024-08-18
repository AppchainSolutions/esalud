<script setup>
  import AppLayout from "@/Layouts/AppLayout.vue";
  import DashPersEmpresa from "./SubPages/DashPersEmpresa.vue";
  import DashPersPlanta from "./SubPages/DashPersPlanta.vue";
  import DashCecos from "./SubPages/DashCecos.vue";
  import DashExpoEmpresa from "./SubPages/DashExpoEmpresa.vue";
  import DashExpoPlanta from "./SubPages/DashExpoPlanta.vue";
  import DashEnfermedadEmpresa from "./SubPages/DashEnfermedadEmpresa.vue";
  import DashEnfermedadPlanta from "./SubPages/DashEnfermedadPlanta.vue";

  defineOptions({ layout: AppLayout });
</script>

<template>
  <v-container fluid>
    <v-sheet class="ma-4 pa-4">
      <div class="text-h6 ma-2">Dashboard</div>
      <v-divider thickness="4px" color="#009AA4"></v-divider>
      <v-row>
        <v-col align="center" class="ma-4 pa-4">
          <h3>Colaboradores por Empresa</h3>
          <DashPersEmpresa />
        </v-col>
        <v-col align="center" class="ma-4 pa-4">
          <h3>Colaboradores por Planta</h3>
          <DashPersPlanta />
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet class="ma-4 pa-4">
      <v-row>
        <v-col align="center" class="ma-4 pa-4">
          <h3>Colaboradores por Centro de Costo</h3>
          <DashCecos />
        </v-col>
        <v-col align="center">
          <h3>Exposiciones por Empresa</h3>
          <DashExpoEmpresa />
          <h3>Exposiciones por Planta</h3>
          <DashExpoPlanta />
          <h3>Enfermedades por Empresa</h3>
          <DashEnfermedadEmpresa />
          <h3>Enfermedades por Planta</h3>
          <DashEnfermedadPlanta />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>
./SubPages/DashDough.vue./SubPages/DashPieChart.vue./SubPages/DashTable.vue./SubPages/Dash.vue
