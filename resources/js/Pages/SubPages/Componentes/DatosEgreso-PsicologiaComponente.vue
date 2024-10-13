<template>
    <v-row class="mb-4">
                    <v-expansion-panels>
                        <v-expansion-panel title="Sesiones de atención psicológica asiganadas al paciente"
                            color="#009AA4">
                            <v-expansion-panel-text>
                                <v-col>
                                    <v-data-table :headers="state.atencion.headers" :items="state.atencion.items"
                                        class="elevation-1">
                                        <template v-slot:top>
                                            <v-toolbar flat>
                                                <v-toolbar-title>Sesiones
                                                    asignadas</v-toolbar-title>
                                                <v-divider class="mx-4" inset vertical></v-divider>
                                            </v-toolbar>
                                        </template>

                                        <template v-slot:item.actions="{ item }">
                                            <v-tooltip text="Registro de la sesión" location="top">
                                                <template v-slot:activator="{
                                                    props,
                                                }">
                                                    <v-btn v-bind="props" density="compact" color="#009AA4"
                                                        class="mr-1 ml-1" variant="tonal" :icon="'mdi-notebook-check'"
                                                        @click="
                                                            registroSesionPsicologia(
                                                                item
                                                            )
                                                            "></v-btn>
                                                </template>
                                            </v-tooltip>
                                            <v-tooltip text="Ver registro" location="top">
                                                <template v-slot:activator="{
                                                    props,
                                                }">
                                                    <v-btn v-bind="props" density="compact" color="#009AA4"
                                                        class="mr-1 ml-1" variant="tonal" :icon="'mdi-eye-plus-outline'"
                                                        @click="
                                                            registroSesionPsicologia(
                                                                item
                                                            )
                                                            "></v-btn>
                                                </template>
                                            </v-tooltip>
                                        </template>
                                    </v-data-table>
                                </v-col>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
</template>