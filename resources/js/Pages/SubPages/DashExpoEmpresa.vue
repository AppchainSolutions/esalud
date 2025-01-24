<script setup>
import axios from "axios";
import { Doughnut } from "vue-chartjs";
import { onMounted, reactive } from "vue";
import autocolors from "chartjs-plugin-autocolors";
import { fetchData } from "@/utils/helper.js";
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
    endpoints: ["empresa"],
    list: [],
    empresa: null,
    loaded: false,
});

const chartData = reactive({
    labels: ["A", "b", "C"],
    datasets: [
        {
            data: [2, 3, 5],
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
    await getData(state.empresa);
    state.loaded = true;
};

const getData = async (empresa) => {
    try {
        state.loaded = false;
        let id = empresa;
        const { data } = await axios.get("/dashboard/expo_empresa", {
            params: { id },
        });
        const objArray = Object.values(data);
        console.log(objArray);
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
            :items="state.list.empresa"
            item-title="descripcion"
            item-value="id"
            v-model="state.empresa"
            label="Empresa"
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
