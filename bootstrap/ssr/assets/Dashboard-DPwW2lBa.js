import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BTlVrrnP.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./logo-DLUxz0ei.js";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_sheet = resolveComponent("v-sheet");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, { class: "ma-4 pa-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h6 ma-2"${_scopeId2}>Dashboard</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-h6 ma-2" }, "Dashboard")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, { class: "ma-4 pa-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-h6 ma-2" }, "Dashboard")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/vulco/resources/js/Pages/Dashboard.vue"]]);
export {
  Dashboard as default
};
//# sourceMappingURL=Dashboard-DPwW2lBa.js.map
