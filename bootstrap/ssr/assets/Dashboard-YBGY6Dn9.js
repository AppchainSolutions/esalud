import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BxRGP7A1.js";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VContainer } from "vuetify/lib/components/VGrid/index.mjs";
import { VSheet } from "vuetify/lib/components/VSheet/index.mjs";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VBtn/index.mjs";
import "vuetify/lib/components/VCard/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSheet, { class: "ma-4 pa-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h6 ma-2"${_scopeId2}>Dashboard</div>`);
                  _push3(ssrRenderComponent(VDivider, {
                    thickness: "4px",
                    color: "#009AA4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-h6 ma-2" }, "Dashboard"),
                    createVNode(VDivider, {
                      thickness: "4px",
                      color: "#009AA4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VSheet, { class: "ma-4 pa-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-h6 ma-2" }, "Dashboard"),
                  createVNode(VDivider, {
                    thickness: "4px",
                    color: "#009AA4"
                  })
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
export {
  _sfc_main as default
};
//# sourceMappingURL=Dashboard-YBGY6Dn9.js.map
