import _sfc_main$1 from "./Enfermedad-D9m1ahcI.js";
import _sfc_main$2 from "./Alergia-DkC7egBV.js";
import _sfc_main$3 from "./Cirugia-CvHiZAiV.js";
import _sfc_main$4 from "./FactorRiesgo-C7DHBuPG.js";
import _sfc_main$5 from "./Medicamento-2Bl-iL0q.js";
import _sfc_main$6 from "./Vacuna-Cpudt7z7.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./store-BqtSnK9e.js";
import "pinia";
import "./helper-IGAgQiIS.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = {
  components: {
    Enfermedad: _sfc_main$1,
    Alergia: _sfc_main$2,
    Cirugia: _sfc_main$3,
    FactorRiesgo: _sfc_main$4,
    Medicamento: _sfc_main$5,
    Vacuna: _sfc_main$6
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
  const _component_alergia = resolveComponent("alergia");
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
        _push2(ssrRenderComponent(_component_alergia, null, null, _parent2, _scopeId));
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
          createVNode(_component_alergia),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/DatosMedicos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DatosMedicos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  DatosMedicos as default
};
//# sourceMappingURL=DatosMedicos-CLOLoOrA.js.map