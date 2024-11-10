<script setup>
import AppLayout from "../../Layouts/AppLayout.vue";

import { onMounted, ref } from "vue";
import { useLogger } from "vue-logger-plugin";
import { useForm } from "vee-validate";
import {
    getFormBuilderValues,
} from "@/helper.js";
import { usePage } from '@inertiajs/vue3'

const page = usePage()

defineOptions({ layout: AppLayout });

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value) {
            if (value?.length >= 2) return true;

            return "Name needs to be at least 2 characters.";
        },
        phone(value) {
            if (/^[0-9-]{7,}$/.test(value)) return true;

            return "Phone number needs to be at least 7 digits.";
        },
        email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

            return "Must be a valid e-mail.";
        },
    },
});

const isValid = ref(false);

const logger = useLogger();

let formItems = ref([]);

const item = ref({});

onMounted(async () => {
    try {
        formItems.value = page.props.data;
    } catch (error) {
        logger.error("Error loading form items:", error);
    }
});

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
        case "title-h2":
            return "h2";
        default:
            return "v-text-field";
    }
}

/**
 * Groups the form items by row and returns an array of row objects.
 *
 * If no form items are present, an empty array is returned.
 *
 * @return {Array} Array of row objects, each containing an array of form items.
 */
function getRows() {
    if (!formItems.value) return [];
    return formItems.value.reduce((rows, item) => {
        if (!rows[item.row]) {
            rows[item.row] = [];
        }
        rows[item.row].push(item);
        return rows;
    }, {});
} 
</script>

<template>
    <v-container fluid>
        <v-card>
            <v-card-title>
                <v-toolbar flat>
                    <div class="text-h4 ma-4">
                        {{ page.props.title }}
                    </div>
                </v-toolbar>
            </v-card-title>

            <v-card-text>
                <v-sheet :class="'rounded-lg ma-2 pa-2'" :elevation="4">
                    <form @submit.prevent="submit">
                        <template v-for="(row, rowIndex) in getRows()">
                            <v-row>
                                <v-col v-for="item in row" :key="item.name" :cols="12" :lg="2">
                                    <component :is="getComponentType(item.type)
                                        " v-bind:name="item.name" v-bind:label="item.label"
                                        v-bind:type="item.type" v-bind:density="item.density"
                                        v-bind:input-type="item.inputType" v-bind:variant="item.variant"
                                        v-bind:v-model="item.value" v-bind:class="item.class" v-bind:chips="item.chips"
                                        v-bind:multiple="item.multiple" v-bind:clearable="item.clearable
                                            " v-bind:hide-details="item.hide - details
                                                        " v-bind:inset="item.inset" v-bind:color="item.color || []"
                                        v-bind:rules="item.rules || []" v-bind:items="item.items || []">
                                    </component>
                                </v-col>
                            </v-row>
                        </template>
                        <v-card-actions>
                            <!-- <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="tonal" @click="close">
                                        Cancelar
                                    </v-btn>

                                    <v-btn class="me-4" type="submit" color="blue-darken-1" variant="tonal"
                                        :disabled="!isValid">
                                        Grabar
                                    </v-btn> -->
                        </v-card-actions>
                    </form>
                </v-sheet>
            </v-card-text>
        </v-card>
    </v-container>

</template>
