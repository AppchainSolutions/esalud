<script setup>
import { ref } from "vue";
import SolicitudServicio from "@/Pages/SubPages/SolicitudServicioPage.vue";
import AsignacionServicio from "@/Pages/SubPages/AsignacionServicioPage.vue";
import ListaEspera from "@/Pages/SubPages/ListaEsperaPage.vue";
import AppLayout from "@/Layouts/AppLayout.vue";

defineOptions({
    layout: AppLayout,
    data: () => ({
      tab: 'option-1',
    }),
});
</script>

<template>
    <v-card>
  
        <v-tabs
          v-model="tab"
          color="primary"
        >
          <v-tab prepend-icon="mdi-account" text="Ingresar nueva solicitud" value="option-1"></v-tab>
          <v-tab prepend-icon="mdi-lock" text="Asignar servicio" value="option-2"></v-tab>
          <v-tab prepend-icon="mdi-access-point" text="Lista de Espera" value="option-3"></v-tab>
        </v-tabs>
  
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="option-1">
            <v-card flat>
              <v-card-text>

                <solicitud-servicio />

              </v-card-text>
            </v-card>
          </v-tabs-window-item>
  
          <v-tabs-window-item value="option-2">
            <v-card flat>
              <v-card-text>
                <asignacion-servicio />
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
  
          <v-tabs-window-item value="option-3">
            <v-card flat>
              <v-card-text>
                <lista-espera />
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
        </v-tabs-window>
    </v-card>
  </template>
  <script>
    export default {
      data: () => ({
        tab: 'option-1',
      }),
    }
  </script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
