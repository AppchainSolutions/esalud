<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    headers: Array,
    data: Array
});

const emit = defineEmits(['formCreate', 'formEdit', 'formDelete', 'fichaPersonal', 'atencionesDiarias']);

function emitEvent(eventName, item) {
    emit(eventName, item);
}
</script>

<template>
    <v-card >
        <v-card-item>
            <v-data-table :headers="headers" :items="data">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-btn icon="mdi-account-multiple-plus" variant="tonal" class="ma-2" color="#009AA4"
                            @click="emitEvent('formCreate')">
                        </v-btn>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-tooltip text="Ficha Médica" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" density="compact" color="#009AA4" class="mr-2 ml-2" variant="tonal"
                                :icon="'mdi-stethoscope'" @click="emitEvent('ficha-medica', item)"></v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip text="Datos Personales" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" density="compact" class="mr-2 ml-2" color="#009AA4" variant="tonal"
                                :icon="'mdi-account-edit-outline'" @click="emitEvent('ficha-personal', item)"></v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip text="Eliminar" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" density="compact" class="mr-2 ml-2" color="#009AA4" variant="tonal"
                                :icon="'mdi-delete-outline'" @click="emitEvent('eliminar', item)"></v-btn>
                        </template>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-card-item>
    </v-card>
</template>
