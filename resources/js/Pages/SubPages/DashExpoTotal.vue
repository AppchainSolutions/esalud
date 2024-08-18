<script setup>
import axios from "axios";
import { Bar } from "vue-chartjs";
import { onMounted, reactive, ref } from "vue";
import autocolors from "chartjs-plugin-autocolors";

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, autocolors);

const chartData = reactive({
    labels: [],
    datasets: [
        {
            label: "Cantidad Total",
            data: [],
        },
    ],
});

let loaded = ref(false);

const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        autocolors: {
            mode: "data",
        },
    },
};

const getData = async () => {
    try {
        const { data } = await axios.get("/dashboard/personasPorExpo");
        const objArray = Object.values(data)
        if (!Array.isArray(objArray )) {
            throw new Error("data is not an array");
        }
        chartData.labels = objArray[0];
        chartData.datasets[0].data = objArray[1];
        loaded.value = true;
    } catch (error) {
        console.log("Error al obtener los datos." + error);
    }
};

onMounted(async () => {
    try {
        await getData();
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <div style="width: 80%">
        <Bar :options="chartOptions" :data="chartData" v-if="loaded" />
    </div>
</template>
