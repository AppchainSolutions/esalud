<template>
    <v-row class="mb-4">
        <v-col cols="6">
            <v-text-field label="Fecha de egreso" type="date" placeholder="DD/MM/YYYY" mask="00/00/0000" required
                clearable />
        </v-col>
        <v-col cols="6">
            <v-textarea label="Motivo de Egreso" rows="1" clearable />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="6">
            <v-select label="Objetivos cumplidos" multiple chips clearable />
            <v-select label="Objetivos medianamente cumplidos" multiple chips clearable />
        </v-col>
        <v-col cols="6">
            <v-select label="Objetivos no cumplidos" multiple chips clearable />
            <v-textarea label="Comentarios" rows="1" clearable />

        </v-col>
        <v-btn prepend-icon="mdi-notebook-plus" variant="tonal" class="ma-4" color="#009AA4">Guardar datos de
            egreso</v-btn>
    </v-row>

</template>
