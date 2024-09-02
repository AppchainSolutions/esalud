import { reactive, ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
import { Bar } from "vue-chartjs";
import autocolors from "chartjs-plugin-autocolors";
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale } from "chart.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "DashExpoTotal",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, autocolors);
    const chartData = reactive({
      labels: [],
      datasets: [
        {
          label: "Cantidad Total",
          data: []
        }
      ]
    });
    let loaded = ref(false);
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        autocolors: {
          mode: "data"
        }
      }
    };
    const getData = async () => {
      try {
        const { data } = await axios.get("/dashboard/personasPorExpo");
        const objArray = Object.values(data);
        if (!Array.isArray(objArray)) {
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "width": "80%" } }, _attrs))}>`);
      if (unref(loaded)) {
        _push(ssrRenderComponent(unref(Bar), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/DashExpoTotal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DashExpoTotal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/vulco/resources/js/Pages/SubPages/DashExpoTotal.vue"]]);
export {
  DashExpoTotal as default
};
//# sourceMappingURL=DashExpoTotal-DlWsDWPq.js.map
