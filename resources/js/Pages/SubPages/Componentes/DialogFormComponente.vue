<template>
  <v-dialog v-model="dialog" max-width="600px">
            <v-card>

         <v-form ref="form" @submit.prevent="submit">
            
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                                v-for="field in formFields"
                                :key="field.name"
                            >
                                <v-text-field
                                    v-model="state.editedItem[field.name]"
                                    :label="field.label"
                                    :rules="field.rules"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                        >Cerrar</v-btn
                    >
                    <v-btn color="blue darken-1" text type="submit"
                        >Grabar</v-btn
                    >
                </v-card-actions> 
        </v-form> 
            </v-card>

    </v-dialog>
    </template>