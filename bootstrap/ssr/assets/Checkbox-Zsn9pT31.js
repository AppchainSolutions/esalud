import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrLooseContain, ssrGetDynamicModelProps } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      type: String,
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        type: "checkbox",
        value: __props.value,
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/vulco/resources/js/Components/Checkbox.vue"]]);
export {
  Checkbox as C
};
//# sourceMappingURL=Checkbox-Zsn9pT31.js.map
