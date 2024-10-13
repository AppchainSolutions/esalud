<template>
    <v-card>
        <v-card-title class="bg-surface-light pt-4">Información General</v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-text>
            <v-row>
                <v-col>

                    <ol :class="'ml-4'">
                        <li>Nombre Completo: XXX</li>
                        <li>Edad: 14 años</li>
                        <li>Teléfono: +569 98765432</li>
                        <li>Establecimiento Educacional: Humberto Moath</li>
                        <li>Derivado por: Profesora</li>
                        <li>Persona responsable: Luisa (Mamá)</li>
                    </ol>
                    <v-btn density="compact" class="ma-4 ma-4" color="#009AA4" variant="tonal"
                    >Ver Ficha del Paciente</v-btn>
                </v-col>
                <v-col>
                    <h3>Fecha: 03/10/2024</h3>
                    <h3>Hora actual:</h3>
                    08:30
                    <h3>
                        Horarios asignados al paciente:
                    </h3>
                    <ol :class="'ml-4'">
                        <li>Lunes: 08:00 - 17:00</li>
                    </ol>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>

</template>