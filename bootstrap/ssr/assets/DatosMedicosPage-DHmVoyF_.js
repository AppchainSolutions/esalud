import _sfc_main$1 from "./EnfermedadPage-DeHwA_ys.js";
import _sfc_main$2 from "./AlergiaPage-BatQG8x7.js";
import _sfc_main$3 from "./CirugiaPage-Bt6ki-L9.js";
import _sfc_main$4 from "./FactorRiesgoPage-C_DHck1Q.js";
import _sfc_main$5 from "./MedicamentoPage-CyaG6SG5.js";
import _sfc_main$6 from "./VacunaPage-BTntCPcz.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VRow } from "vuetify/lib/components/VGrid/index.mjs";
import { VSheet } from "vuetify/lib/components/VSheet/index.mjs";
import "./store-CHGALank.js";
import "pinia";
import "./helper-BPJLKrkF.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "vue-logger-plugin";
import "vuetify/lib/components/VBtn/index.mjs";
import "vuetify/lib/components/VCard/index.mjs";
import "vuetify/lib/components/VDataTable/index.mjs";
import "vuetify/lib/components/VDialog/index.mjs";
import "vuetify/lib/components/VTextField/index.mjs";
import "vuetify/lib/components/VToolbar/index.mjs";
import "vuetify/lib/components/VTooltip/index.mjs";
import "vuetify/lib/components/VForm/index.mjs";
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
  const _component_Alergia = resolveComponent("Alergia");
  const _component_cirugia = resolveComponent("cirugia");
  const _component_enfermedad = resolveComponent("enfermedad");
  const _component_factor_riesgo = resolveComponent("factor-riesgo");
  const _component_medicamento = resolveComponent("medicamento");
  const _component_vacuna = resolveComponent("vacuna");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(VSheet, { class: "rounded-lg  mt-2 mb-2 pa-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-h6 ml-2"${_scopeId}>Datos Médicos: </div>`);
        _push2(ssrRenderComponent(VDivider, {
          thickness: "4px",
          color: "#662d91"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "text-h6 ml-2" }, "Datos Médicos: "),
          createVNode(VDivider, {
            thickness: "4px",
            color: "#662d91"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VRow, { class: "mt-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Alergia, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_cirugia, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_enfermedad, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_factor_riesgo, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_medicamento, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_vacuna, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Alergia),
          createVNode(VDivider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_cirugia),
          createVNode(VDivider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_enfermedad),
          createVNode(VDivider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_factor_riesgo),
          createVNode(VDivider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_medicamento),
          createVNode(VDivider, {
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
const DatosMedicos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  DatosMedicos as default
};
//# sourceMappingURL=DatosMedicosPage-DHmVoyF_.js.map