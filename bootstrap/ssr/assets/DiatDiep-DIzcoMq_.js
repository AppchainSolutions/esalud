import DiatPage from "./DiatPage-cqaqkvtm.js";
import DiepPage from "./DiepPage-DcIDfPzb.js";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
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
    DiatPage,
    DiepPage
  },
  data() {
    return {
      tab: "option-1"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_diat_page = resolveComponent("diat-page");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_diep_page = resolveComponent("diep-page");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ class: "mt-2" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_diat_page, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, {
          thickness: 3,
          class: "border-opacity-100",
          color: "info"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_diep_page, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_diat_page),
          createVNode(_component_v_divider, {
            thickness: 3,
            class: "border-opacity-100",
            color: "info"
          }),
          createVNode(_component_diep_page)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/DiatDiep.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DiatDiep = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/blueshadows/www/app-empresas/resources/js/Pages/SubPages/DiatDiep.vue"]]);
export {
  DiatDiep as default
};
//# sourceMappingURL=DiatDiep-DIzcoMq_.js.map
