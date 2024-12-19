<template>

    <v-card class="ma-4 pa-4">
        <v-card-title class="bg-surface-light pt-4">
            Plan de Intervención Individual
        </v-card-title>
        <v-card-subtitle>
        </v-card-subtitle>
        <v-card-text>
            <v-row class="ma-2">
                <v-col>
                    <v-text-field type="date" label="fecha de ingreso" class="ma-2 pa-2"></v-text-field>
                    <v-textarea title="Motivo de Consulta" label="Motivo de Consulta" clearable class="ma-2 pa-2"
                        rows="2">
                        Motivo de Consulta
                    </v-textarea>
                    <v-textarea title="Comentarios" label="Comentarios" clearable class="ma-2 pa-2" rows="2">
                        Comentarios Diagnóstico
                    </v-textarea>
                </v-col>
                <v-col>
                    <v-select label="Diagnóstico DSM V" class="ma-2 pa-2" rows="1"></v-select>
                    <v-card class="ma-4 pa-4">
                        <v-card-title class="bg-surface-light   ">
                            Detalles Diagnóstico
                        </v-card-title>
                        <v-card-text>
                            <ol class="ma-2 pa-2">
                                <li>Código DSM V:</li>
                                <li>Código CIE 11:</li>
                                <li>Notas de comparación CIE 11</li>
                            </ol>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn density="compact" color="#009AA4" variant="tonal">Detalle CIE
                                11</v-btn>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-btn density="compact" class="ma-4 ma-4" color="#009AA4" variant="tonal">Guardar</v-btn>
        </v-card-actions>
    </v-card>
</template>