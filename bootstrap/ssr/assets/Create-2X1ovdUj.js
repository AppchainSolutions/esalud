import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BxRGP7A1.js";
import _sfc_main$1 from "./CreateTeamForm-CafrrQm_.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VBtn/index.mjs";
import "vuetify/lib/components/VCard/index.mjs";
import "vuetify/lib/components/VDivider/index.mjs";
import "vuetify/lib/components/VGrid/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
import "./FormSection-Cf0LXcE6.js";
import "./SectionTitle-DsKZJEmq.js";
import "./TextInput-B0hF2b1y.js";
import "./InputLabel-Do1v5jZF.js";
import "./PrimaryButton-DzU40Tsu.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Create Team" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Create Team </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Create Team ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  createVNode(_sfc_main$1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Create-2X1ovdUj.js.map
