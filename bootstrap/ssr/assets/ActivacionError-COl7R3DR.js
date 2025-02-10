import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActivacionError",
  __ssrInlineRender: true,
  props: {
    mensaje: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100" }, _attrs))} data-v-8dcffd2a>`);
      _push(ssrRenderComponent(unref(Head), { title: "Error de Activación" }, null, _parent));
      _push(`<div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg text-center" data-v-8dcffd2a><div class="mb-4" data-v-8dcffd2a><svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-8dcffd2a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-v-8dcffd2a></path></svg></div><h2 class="text-2xl font-bold mb-4 text-red-600" data-v-8dcffd2a> Error de Activación </h2><p class="mb-4 text-gray-700" data-v-8dcffd2a>${ssrInterpolate(_ctx.mensaje)}</p><div class="flex justify-center mt-6" data-v-8dcffd2a>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("login"),
        as: "button",
        class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Volver al Inicio de Sesión `);
          } else {
            return [
              createTextVNode(" Volver al Inicio de Sesión ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Paciente/ActivacionError.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ActivacionError = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8dcffd2a"], ["__file", "/home/omar/www/esalud/resources/js/Pages/Paciente/ActivacionError.vue"]]);
export {
  ActivacionError as default
};
//# sourceMappingURL=ActivacionError-COl7R3DR.js.map
