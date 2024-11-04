<script setup>
import { ref, onMounted } from "vue";
import { useLogger } from "vue-logger-plugin";
import TableAction from "./TableAction.vue";
import { useField, useForm } from "vee-validate";
import {
    handleRemoveItem,
    handleStoreItem,
    handleEditItem,
    openToEdit,
    getFormBuilderValues,
} from "@/helper.js";

const props = defineProps({
    state: Object,
});
const { handleSubmit, handleReset } = useForm({
     validationSchema: {
        name(value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        phone(value) {
            if (/^[0-9-]{7,}$/.test(value)) return true

            return 'Phone number needs to be at least 7 digits.'
        },
        email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
},
});

const isValid = ref(false);

const logger = useLogger();

let dialog = ref(false);

let formItems = ref([]);

const item = ref({});

const formCreate = async () => {
    try {
        const id = props.state.formName; // Replace with the actual ID you want to retrieve
        const data = await getFormBuilderValues(id);
        formItems.value = Object.values(data);
        logger.log("Form data:", formItems.value);
    } catch (error) {
        logger.error("Error loading form items:", error);
    }
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
    if (!formItems.value) return [];

    logger.log("Form items:", formItems.value);

    return formItems.value.reduce((rows, item) => {
        logger.log("Item:", item);
        (rows[item.row] = rows[item.row] || []).push(item);
        return rows;
    }, {});
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

    <v-dialog v-model="dialog" max-width="800px">
        <v-container fluid>
        <v-card>
            <v-card-title>
                <span class="text-h5 ma-4 pa-4">{{ state.config.formTitle }} </span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <form @submit.prevent="submit">
                        <v-container>
                            <template v-for="(row, rowIndex) in getRows()">
                                <v-row>
                                    <v-col
                                        v-for="item in row"
                                        :key="item.name"
                                        :cols="12"
                                        :lg="3"
                                        
                                    >
                                        <component
                                            :is="getComponentType(item.type)"
                                            :name="item.name"
                                            :label="item.label"
                                            :type="item.type"
                                            :density="item.density"
                                            :input-type="item.inputType"
                                            :variant="item.variant"
                                            :v-model="item.value"
                                            v-bind:readonly="item.readonly"
                                            v-bind:chips="item.chips"
                                            v-bind:multiple="item.multiple"
                                            v-bind:clearable="item.clearable"
                                            v-bind:hide-details="item.hide-details"
                                            v-bind:inset="item.inset"
                                            v-bind:color="item.color || []"
                                            v-bind:rules="item.rules || []"
                                            v-bind:items="item.items || []"

                                            
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

                                <v-btn class="me-4" type="submit" color="blue-darken-1"
                                variant="tonal" :disabled="!isValid">
                                    Grabar
                                </v-btn>
                            </v-card-actions>
                        </v-container>
                    </form>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
    </v-dialog>
</template>
