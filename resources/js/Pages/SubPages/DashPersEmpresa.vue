<script setup>
import { Doughnut } from "vue-chartjs";
import { onMounted, reactive, ref } from "vue";
import autocolors from "chartjs-plugin-autocolors";
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

const chartData = reactive({
    labels: [],
    datasets: [
        {
            label: "Cantidad",
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

let loaded = ref(false);

const getData = async () => {
  try {
    const { data } = await axios.get("/dashboard/personasPorEmpresa");
    const { descripcion, total } = data.reduce((acc, { descripcion, total }) => {
      acc.descripcion.push(descripcion);
      acc.total.push(total);
      return acc;
    }, { descripcion: [], total: [] });

    chartData.labels = descripcion;
    chartData.datasets[0].data = total;
  } catch (error) {
    console.log("Error al obtener los datos." + error);
  }
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
    <div style="width: 80%">
        <Doughnut :options="chartOptions" :data="chartData" v-if="loaded" />
    </div>
</template>
