<template>

    <v-card class="ma-4 pa-4">
        <v-card-title class="bg-surface-light pt-4">Ficha Psicológica</v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-text>
         
            <v-row class="ma-4">
                <v-col>
                    <v-file-input class="ma-2 pa-2"  clearable label="Genograma"></v-file-input>
                    <v-file-input class="ma-2 pa-2" clearable label="Ecograma"></v-file-input>
                    <v-textarea title="Factores de Riesgo y Vulnerabilidad" label="Factores de Riesgo y Vulnerabilidad"
                        clearable class="ma-2 pa-2" rows="1">
                        Factores de Riesgo y Vulnerabilidad
                    </v-textarea>
                    <v-textarea title="Factores Protectores / Facilitadores"
                        label="Factores Protectores / Facilitadores" clearable class="ma-2 pa-2" rows="1">
                        Factores Protectores / Facilitadores
                    </v-textarea>

                    <v-select title="Red de apoyo profesional" multiple chips label="Red de apoyo profesional" clearable
                        class="ma-2 pa-2" rows="1"
                        :items="['Fonoaudiología', 'Terapia Ocupacional', 'Kinesiología', 'Kinesiología domiciliaria', 'Psicología', 'Terapia Floral']">
                        Red de apoyo profesional
                    </v-select>
                </v-col>

                <v-col>
                    
                    <v-textarea title="Tratamientos anteriores" label="Tratamientos anteriores" clearable
                        class="ma-2 pa-2" rows="1">
                        Tratamientos anteriores
                    </v-textarea>
                    <v-textarea title=" Tratamientos actuales" label=" Tratamientos actuales" clearable
                        class="ma-2 pa-2" rows="1">
                        Tratamientos actuales
                    </v-textarea>
                    <v-textarea title="Tratamientos famacológico" label="Tratamientos famacológico" clearable
                        class="ma-2 pa-2" rows="1">
                        Tratamientos famacológico
                    </v-textarea>
                    <v-textarea title="Tratamientos de apoyo comunal" label="Tratamientos de apoyo comunal" clearable
                        class="ma-2 pa-2" rows="1">
                        Tratamientos de apoyo comunal
                    </v-textarea>
                </v-col>


            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-btn density="compact" class="ma-4 ma-4" color="#009AA4" variant="tonal">Guardar</v-btn>
        </v-card-actions>
    </v-card>

</template>