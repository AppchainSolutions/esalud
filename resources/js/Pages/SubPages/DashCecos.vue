<script setup>
import { onMounted, reactive } from "vue";

const state = reactive({
    headers: [
        {
            title: "Centro de Costo",
            align: "start",
            sortable: true,
            key: "descripcion",
        },
        { title: "#", key: "total" },
    ],
    tableItems: [],
    loaded: false,
});

const getData = async () => {
    const response = await axios.get("/dashboard/personasPorCeco");
    state.tableItems = response.data;
};

onMounted(async () => {
    try {
        await getData();
        state.loaded = true;
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <v-data-table
        :headers="state.headers"
        :items="state.tableItems"
        :sort-by="[{ key: 'descripcion', order: 'asc' }]"
    ></v-data-table>
</template>
