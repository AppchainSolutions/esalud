import { reactive, ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Pie } from "vue-chartjs";
import autocolors from "chartjs-plugin-autocolors";
import { Chart, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "DashPersPlanta",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(
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
          mode: "data"
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "width": "80%" } }, _attrs))}>`);
      if (unref(loaded)) {
        _push(ssrRenderComponent(unref(Pie), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/DashPersPlanta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DashPersPlanta = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/SubPages/DashPersPlanta.vue"]]);
export {
  DashPersPlanta as default
};
//# sourceMappingURL=DashPersPlanta-DUsqRn8Q.js.map
