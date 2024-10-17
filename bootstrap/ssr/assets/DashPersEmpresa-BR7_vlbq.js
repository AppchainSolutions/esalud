import { reactive, ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Doughnut } from "vue-chartjs";
import autocolors from "chartjs-plugin-autocolors";
import { Chart, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "DashPersEmpresa",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(
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
          data: []
        }
      ]
    });
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        autocolors: {
          mode: "data"
        }
      }
    };
    let loaded = ref(false);
    const getData = async () => {
      try {
        const { data } = await axios.get("/dashboard/personasPorEmpresa");
        const { descripcion, total } = data.reduce((acc, { descripcion: descripcion2, total: total2 }) => {
          acc.descripcion.push(descripcion2);
          acc.total.push(total2);
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "width": "80%" } }, _attrs))}>`);
      if (unref(loaded)) {
        _push(ssrRenderComponent(unref(Doughnut), {
          options: chartOptions,
          data: chartData
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/DashPersEmpresa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DashPersEmpresa = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/DashPersEmpresa.vue"]]);
export {
  DashPersEmpresa as default
};
//# sourceMappingURL=DashPersEmpresa-BR7_vlbq.js.map
