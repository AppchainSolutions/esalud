import { reactive, onMounted, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
import { Doughnut } from "vue-chartjs";
import autocolors from "chartjs-plugin-autocolors";
import { f as fetchData } from "./helper-DiILlF-8.js";
import { Chart, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "sweetalert2/dist/sweetalert2.js";
import "@kyvg/vue3-notification";
import "./store-BqtSnK9e.js";
import "pinia";
const _sfc_main = {
  __name: "DashEnfermedadEmpresa",
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
    const state = reactive({
      endpoints: ["empresa"],
      list: [],
      empresa: null,
      loaded: false
    });
    const chartData = reactive({
      labels: ["A", "b", "C"],
      datasets: [
        {
          data: [2, 3, 5]
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
    const onChange = async (value) => {
      await getData(state.empresa);
      state.loaded = true;
    };
    const getData = async (empresa) => {
      try {
        state.loaded = false;
        let id = empresa;
        const { data } = await axios.get("/dashboard/enfermedad_empresa", {
          params: { id }
        });
        console.log(data.descripcion);
        chartData.labels = data.descripcion;
        chartData.datasets[0].data = data.total;
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_select = resolveComponent("v-select");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "width": "80%" } }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_select, {
        items: state.list.empresa,
        "item-title": "descripcion",
        "item-value": "id",
        modelValue: state.empresa,
        "onUpdate:modelValue": [($event) => state.empresa = $event, ($event) => onChange()],
        label: "Empresa",
        clearable: "",
        class: "ma-4 mt-8",
        variant: "underlined",
        single: ""
      }, null, _parent));
      if (state.loaded) {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/DashEnfermedadEmpresa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DashEnfermedadEmpresa = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/DashEnfermedadEmpresa.vue"]]);
export {
  DashEnfermedadEmpresa as default
};
//# sourceMappingURL=DashEnfermedadEmpresa-rX9PvmmE.js.map
