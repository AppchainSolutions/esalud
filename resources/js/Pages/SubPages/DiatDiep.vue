<script>
import DiatPage from "./DiatPage.vue";
import DiepPage from "./DiepPage.vue";

export default {
    components: {
        DiatPage,
        DiepPage,
    },
    data() {
        return {
            tab: "option-1",
        };
    },
};
</script>

<template>
    <v-row class="mt-2">
                <diat-page />
                <v-divider
                :thickness="3"
                class="border-opacity-100"
                color="info"
            ></v-divider>
                <diep-page />
    </v-row>
</template>
