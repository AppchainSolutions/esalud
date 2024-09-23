import { reactive, onMounted, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "DashCecos",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      headers: [
        {
          title: "Centro de Costo",
          align: "start",
          sortable: true,
          key: "descripcion"
        },
        { title: "#", key: "total" }
      ],
      tableItems: [],
      loaded: false
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_data_table = resolveComponent("v-data-table");
      _push(ssrRenderComponent(_component_v_data_table, mergeProps({
        headers: state.headers,
        items: state.tableItems,
        "sort-by": [{ key: "descripcion", order: "asc" }]
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/DashCecos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DashCecos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/app-empresas/resources/js/Pages/SubPages/DashCecos.vue"]]);
export {
  DashCecos as default
};
//# sourceMappingURL=DashCecos-BJaFAP2P.js.map
