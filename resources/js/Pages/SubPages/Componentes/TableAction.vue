<script setup>
import { useLogger } from "vue-logger-plugin";

const logger = useLogger();
defineProps({
    state: Object,
    actionTitle: String,
    item: Array,
    emitEvent: String,
    icon: String
});


</script>
<template>
    <v-tooltip :text="actionTitle" location="top">
        <template v-slot:activator="{ item }">
            <v-btn
                :v-bind="item"
                density="compact"
                color="#009AA4"
                class="mr-2 ml-2"
                variant="tonal"
                :icon="icon"
            ></v-btn>
        </template>
    </v-tooltip>
</template>
// @click="emitEvent('ficha-medica', item)"
