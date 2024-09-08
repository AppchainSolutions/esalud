import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import ApiTokenManager from "./ApiTokenManager-BcVE0leX.js";
import { A as AppLayout } from "./AppLayout-CVYvsBnz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./ActionMessage-C5SxUjdf.js";
import "./Modal-19fW1a4h.js";
import "./SectionTitle-DVlhFTWU.js";
import "./Checkbox-Zsn9pT31.js";
import "./ConfirmationModal-uQ0M_Ndg.js";
import "./DangerButton-unFDRrLT.js";
import "./DialogModal-Cf1EvDS5.js";
import "./FormSection-B5keodaR.js";
import "./TextInput-C7v4Ykkw.js";
import "./InputLabel-C6a7Opn8.js";
import "./PrimaryButton-BB-VszM2.js";
import "./SecondaryButton-CWveguw2.js";
import "./SectionBorder-DwzUHu8G.js";
import "./logo-DLUxz0ei.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "API Tokens" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> API Tokens </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " API Tokens ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(ApiTokenManager, {
              tokens: __props.tokens,
              "available-permissions": __props.availablePermissions,
              "default-permissions": __props.defaultPermissions
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  createVNode(ApiTokenManager, {
                    tokens: __props.tokens,
                    "available-permissions": __props.availablePermissions,
                    "default-permissions": __props.defaultPermissions
                  }, null, 8, ["tokens", "available-permissions", "default-permissions"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/vulco/resources/js/Pages/API/Index.vue"]]);
export {
  Index as default
};
//# sourceMappingURL=Index-GB5f_Mx0.js.map
