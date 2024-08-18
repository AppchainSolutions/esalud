<script setup>
import axios from "axios";
import { Doughnut } from "vue-chartjs";
import { onMounted, reactive } from "vue";
import autocolors from "chartjs-plugin-autocolors";
import { fetchData } from "@/helper.js";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
    autocolors
);

const state = reactive({
    endpoints: ["planta"],
    list: [],
    planta: null,
    loaded: false,
});

const chartData = reactive({
    labels: [],
    datasets: [
        {
            data: [],
        },
    ],
});

const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        autocolors: {
            mode: "data",
        },
    },
};

const onChange = async (value) => {
    await getData(state.planta);
    console.log(state.planta);
    state.loaded = true;
};

const getData = async (planta) => {
    try {
        state.loaded = false;
        let id = planta;
        const { data } = await axios.get("/dashboard/expo_planta", {
            params: { id },
        });
        const objArray = Object.values(data);
        chartData.labels = objArray[0];
        chartData.datasets[0].data = objArray[1];
    } catch (error) {
        console.log("Error al obtener los datos." + error);
    }
};

onMounted(async () => {
    try {
        state.list = await fetchData(state.endpoints);
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <div style="width: 80%">
        <v-select
            :items="state.list.planta"
            item-title="descripcion"
            item-value="id"
            v-model="state.planta"
            label="Planta"
            clearable
            class="ma-4 mt-8"
            variant="underlined"
            @update:modelValue="onChange()"
            single
        ></v-select>

        <Doughnut
            :options="chartOptions"
            :data="chartData"
            v-if="state.loaded"
        />
    </div>
</template>
