<script setup>
import { Pie } from "vue-chartjs";
import { onMounted, reactive, ref } from "vue";
import autocolors from 'chartjs-plugin-autocolors';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    autocolors
);

const chartData = reactive({
    labels: [],
    datasets: [
        {
            data: []
          //  backgroundColor: [],
        }
    ]
});

const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      autocolors: {
        mode: 'data'
      }
    }
};

let loaded = ref(false);

const getData = async () => {
    const response = await axios.get("/dashboard/personasPorPlanta");
    const { data } = response;
    const descripcion = data.map((item) => item.descripcion);
    const totals = data.map((item) => item.total);
    chartData.labels = descripcion;
    chartData.datasets[0].data = totals;
};

onMounted(async () => {
    try {
        await getData();
        loaded.value = true;
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
 <div style="width: 80%;">
    <Pie :options="chartOptions" :data="chartData" v-if="loaded" />
</div>
</template>
