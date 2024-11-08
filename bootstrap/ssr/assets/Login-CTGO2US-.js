import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
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
      loader: "dots"
    });
    const visible = ref(false);
    const loading = ref(false);
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))} data-v-465b87d1>`);
      _push(ssrRenderComponent(unref(Head), { title: "Ingreso" }, null, _parent));
      _push(ssrRenderComponent(unref(loading), {
        active: visible.value,
        "onUpdate:active": ($event) => visible.value = $event,
        "can-cancel": true
      }, null, _parent));
      _push(`<div class="login-card" data-v-465b87d1><h1 class="login-title" data-v-465b87d1>Municipalidad de Casablanca</h1>`);
      if (__props.status) {
        _push(`<div data-v-465b87d1>${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form data-v-465b87d1>`);
      _push(ssrRenderComponent(VTextField, {
        type: "email",
        id: "email",
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
        id: "password",
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
      _push(`<p data-v-465b87d1>`);
      if (__props.canResetPassword) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("password.request")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ¿Olvidó su clave? `);
            } else {
              return [
                createTextVNode(" ¿Olvidó su clave? ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</p></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-465b87d1"]]);
export {
  Login as default
};
//# sourceMappingURL=Login-CTGO2US-.js.map
