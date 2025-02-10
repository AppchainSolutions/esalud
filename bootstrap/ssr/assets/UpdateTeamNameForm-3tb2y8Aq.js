import { mergeProps, createSlots, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { A as ActionMessage } from "./ActionMessage-DUrvR0qY.js";
import { F as FormSection } from "./FormSection-BoIOJi4D.js";
import { T as TextInput, I as InputError } from "./TextInput-C6ZWVSwR.js";
import { I as InputLabel } from "./InputLabel-S06g4Mna.js";
import { P as PrimaryButton } from "./PrimaryButton-CuiL06NN.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SectionTitle-BK-huKBW.js";
const _sfc_main = {
  __name: "UpdateTeamNameForm",
  __ssrInlineRender: true,
  props: {
    team: Object,
    permissions: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.team.name
    });
    const updateTeamName = () => {
      form.put(route("teams.update", props.team), {
        errorBag: "updateTeamName",
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(FormSection, mergeProps({ onSubmitted: updateTeamName }, _attrs), createSlots({
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Team Name `);
          } else {
            return [
              createTextVNode(" Team Name ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` The team&#39;s name and owner information. `);
          } else {
            return [
              createTextVNode(" The team's name and owner information. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(InputLabel, { value: "Team Owner" }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center mt-2"${_scopeId}><img class="w-12 h-12 rounded-full object-cover"${ssrRenderAttr("src", __props.team.owner.profile_photo_url)}${ssrRenderAttr("alt", __props.team.owner.name)}${_scopeId}><div class="ms-4 leading-tight"${_scopeId}><div class="text-gray-900"${_scopeId}>${ssrInterpolate(__props.team.owner.name)}</div><div class="text-gray-700 text-sm"${_scopeId}>${ssrInterpolate(__props.team.owner.email)}</div></div></div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(InputLabel, {
              for: "name",
              value: "Team Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TextInput, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              disabled: !__props.permissions.canUpdateTeam
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputError, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6" }, [
                createVNode(InputLabel, { value: "Team Owner" }),
                createVNode("div", { class: "flex items-center mt-2" }, [
                  createVNode("img", {
                    class: "w-12 h-12 rounded-full object-cover",
                    src: __props.team.owner.profile_photo_url,
                    alt: __props.team.owner.name
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "ms-4 leading-tight" }, [
                    createVNode("div", { class: "text-gray-900" }, toDisplayString(__props.team.owner.name), 1),
                    createVNode("div", { class: "text-gray-700 text-sm" }, toDisplayString(__props.team.owner.email), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(InputLabel, {
                  for: "name",
                  value: "Team Name"
                }),
                createVNode(TextInput, {
                  id: "name",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  disabled: !__props.permissions.canUpdateTeam
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                createVNode(InputError, {
                  message: unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        _: 2
      }, [
        __props.permissions.canUpdateTeam ? {
          name: "actions",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(ActionMessage, {
                on: unref(form).recentlySuccessful,
                class: "me-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Saved. `);
                  } else {
                    return [
                      createTextVNode(" Saved. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(PrimaryButton, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Save `);
                  } else {
                    return [
                      createTextVNode(" Save ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(ActionMessage, {
                  on: unref(form).recentlySuccessful,
                  class: "me-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Saved. ")
                  ]),
                  _: 1
                }, 8, ["on"]),
                createVNode(PrimaryButton, {
                  class: { "opacity-25": unref(form).processing },
                  disabled: unref(form).processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Save ")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UpdateTeamNameForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue"]]);
export {
  UpdateTeamNameForm as default
};
//# sourceMappingURL=UpdateTeamNameForm-3tb2y8Aq.js.map
