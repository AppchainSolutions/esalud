<script setup>
import { ref } from "vue";
import { useLogger } from "vue-logger-plugin";
import TableAction from "./TableAction.vue";
import {
    handleRemoveItem,
    handleStoreItem,
    handleEditItem,
    openToEdit,
} from "@/helper.js";

const props = defineProps({
    state: Object,
});

const logger = useLogger();

let dialog = ref(false);

const formCreate = () => {
    dialog.value = true;
};

function close() {
    dialog.value = false;
}

function getComponentType(type) {
    switch (type) {
        case "text":
            return "v-text-field";
        case "number":
            return "v-text-field";
        case "email":
            return "v-text-field";
        case "password":
            return "v-text-field";
        case "switch":
            return "v-switch";
        case "select":
            return "v-select";
        case "date":
            return "v-text-field";
        default:
            return "v-text-field";
    }
}

function getRows() {
    const rows = {};
    if (props.state && props.state.formItems) {
        props.state.formItems.forEach((item) => {
            rows[item.row] = rows[item.row] || [];
            rows[item.row].push(item);
        });
    }
    return Object.values(rows);
}

</script>

<template>
    <v-data-table :headers="state.headers" :items="state.config.tableItems">
        <template v-slot:top>
            <v-toolbar flat>
                <v-btn
                    icon="mdi-account-multiple-plus"
                    variant="tonal"
                    class="ma-2"
                    color="#009AA4"
                    @click="formCreate"
                >
                </v-btn>
            </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
            <table-action
                :items="item"
                :icon="'mdi-stethoscope'"
                :title="'Ficha Medica'"
                :action-type="'editarFichaMedica'"
            />
            <table-action
                :items="item"
                :icon="'mdi-account-edit-outline'"
                :title="'Ficha Personal'"
                :action-type="'editarFichaPersonal'"
            />
            <table-action
                :items="item"
                :icon="'mdi-delete-outline'"
                :title="'Borrar registro'"
                :action-type="'eliminarRegistro'"
            />
        </template>
    </v-data-table>
    <v-dialog v-model="dialog">
        <v-card>
            <v-card-title>
                <span class="text-h5">{{ state.config.formTitle }}</span>
            </v-card-title>
            <v-card-text>
                <!-- <v-container>
                    <v-form @submit.prevent="submit">
                        <v-container>
                            <template v-for="(row, rowIndex) in getRows()">
                                <v-row>
                                    <v-col
                                        v-for="item in row"
                                        :key="item.name"
                                        :cols="item.cols || 12"
                                        :md="item.md || 4"
                                        :sm="item.sm || 2"
                                    >
                                        <component
                                            :is="getComponentType(item.type)"
                                            :label="item.label"
                                            :required="item.required"
                                            :clearable="item.clearable"
                                            :variant="item.variant"
                                            :items="item.items"
                                            :color="item.color"
                                            :inset="item.inset"
                                            :type="item.inputType"
                                            v-model="item.value" 
                                        ></component>
                                    </v-col>
                                </v-row>
                            </template>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                color="blue-darken-1"
                                variant="tonal"
                                @click="close"
                                >
                                Cancelar
                            </v-btn>
                            
                            <v-btn class="me-4" type="submit" > submit </v-btn>
                        </v-card-actions>
                    </v-container>
                    </v-form>
                </v-container> -->
            </v-card-text>
        </v-card>
       
    </v-dialog>
</template>

