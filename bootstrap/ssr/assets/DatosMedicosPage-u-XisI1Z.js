import Enfermedad from "./EnfermedadPage-p__tNGcT.js";
import Alergia from "./AlergiaPage-tOkgq-fv.js";
import Cirugia from "./CirugiaPage-D-waxzZv.js";
import FactorRiesgo from "./FactorRiesgoPage-Bm3zV-y1.js";
import Medicamento from "./MedicamentoPage-4GNpIPlK.js";
import Vacuna from "./VacunaPage-DZdnJG2i.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./store-CHGALank.js";
import "pinia";
import "./helper-DlyAxSqm.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = {
  components: {
    Enfermedad,
    Alergia,
    Cirugia,
    FactorRiesgo,
    Medicamento,
    Vacuna
  },
  data() {
    return {
      tab: "option-1"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_row = resolveComponent("v-row");
  const _component_Alergia = resolveComponent("Alergia");
  const _component_cirugia = resolveComponent("cirugia");
  const _component_enfermedad = resolveComponent("enfermedad");
  const _component_factor_riesgo = resolveComponent("factor-riesgo");
  const _component_medicamento = resolveComponent("medicamento");
  const _component_vacuna = resolveComponent("vacuna");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_sheet, { class: "rounded-lg  mt-2 mb-2 pa-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-h6 ml-2"${_scopeId}>Datos Médicos: </div>`);
        _push2(ssrRenderComponent(_component_v_divider, {
          thickness: "4px",
          color: "#662d91"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "text-h6 ml-2" }, "Datos Médicos: "),
          createVNode(_component_v_divider, {
            thickness: "4px",
            color: "#662d91"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_row, { class: "mt-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Alergia, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_cirugia, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_enfermedad, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_factor_riesgo, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_medicamento, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_vacuna, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Alergia),
          createVNode(_component_v_divider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_cirugia),
          createVNode(_component_v_divider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_enfermedad),
          createVNode(_component_v_divider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_factor_riesgo),
          createVNode(_component_v_divider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_medicamento),
          createVNode(_component_v_divider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_vacuna)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/DatosMedicosPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DatosMedicos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/DatosMedicosPage.vue"]]);
export {
  DatosMedicos as default
};
//# sourceMappingURL=DatosMedicosPage-u-XisI1Z.js.map