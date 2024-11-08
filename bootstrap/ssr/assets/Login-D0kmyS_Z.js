import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { useLoading } from "vue-loading-overlay";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCheckbox } from "vuetify/lib/components/VCheckbox/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    useLoading({
      color: "green",
      loader: "dots",
      backgroundColor: "#4EC5F1",
      opacity: 0.2
    });
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))} data-v-e4ebae0a><div class="login-card" data-v-e4ebae0a><h1 class="login-title" data-v-e4ebae0a>Municipalidad de Casablanca</h1><form data-v-e4ebae0a>`);
      _push(ssrRenderComponent(VTextField, {
        type: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        autofocus: "",
        label: "Email",
        "hide-details": "",
        required: "",
        class: "mb-1"
      }, null, _parent));
      _push(ssrRenderComponent(VTextField, {
        type: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        autocomplete: "current-password",
        label: "Clave",
        class: "mt-1"
      }, null, _parent));
      _push(ssrRenderComponent(VCheckbox, {
        checked: unref(form).remember,
        "onUpdate:checked": ($event) => unref(form).remember = $event,
        name: "remember",
        label: "Recordar"
      }, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        class: ["mb-2", { "opacity-25": unref(form).processing }],
        type: "submit",
        id: "Login",
        color: "green",
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ingresar `);
          } else {
            return [
              createTextVNode(" Ingresar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4ebae0a"], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/Auth/Login.vue"]]);
export {
  Login as default
};
//# sourceMappingURL=Login-D0kmyS_Z.js.map
