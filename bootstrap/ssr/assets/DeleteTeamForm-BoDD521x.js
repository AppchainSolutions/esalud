import { ref, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { A as ActionSection } from "./Modal-19fW1a4h.js";
import { C as ConfirmationModal } from "./ConfirmationModal-uQ0M_Ndg.js";
import { D as DangerButton } from "./DangerButton-unFDRrLT.js";
import { S as SecondaryButton } from "./SecondaryButton-CWveguw2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SectionTitle-DVlhFTWU.js";
const _sfc_main = {
  __name: "DeleteTeamForm",
  __ssrInlineRender: true,
  props: {
    team: Object
  },
  setup(__props) {
    const props = __props;
    const confirmingTeamDeletion = ref(false);
    const form = useForm({});
    const confirmTeamDeletion = () => {
      confirmingTeamDeletion.value = true;
    };
    const deleteTeam = () => {
      form.delete(route("teams.destroy", props.team), {
        errorBag: "deleteTeam"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ActionSection, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete Team `);
          } else {
            return [
              createTextVNode(" Delete Team ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Permanently delete this team. `);
          } else {
            return [
              createTextVNode(" Permanently delete this team. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. </div><div class="mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(DangerButton, { onClick: confirmTeamDeletion }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Team `);
                } else {
                  return [
                    createTextVNode(" Delete Team ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(ConfirmationModal, {
              show: confirmingTeamDeletion.value,
              onClose: ($event) => confirmingTeamDeletion.value = false
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Team `);
                } else {
                  return [
                    createTextVNode(" Delete Team ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. `);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SecondaryButton, {
                    onClick: ($event) => confirmingTeamDeletion.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(DangerButton, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteTeam
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Delete Team `);
                      } else {
                        return [
                          createTextVNode(" Delete Team ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SecondaryButton, {
                      onClick: ($event) => confirmingTeamDeletion.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(DangerButton, {
                      class: ["ms-3", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing,
                      onClick: deleteTeam
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Delete Team ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. "),
              createVNode("div", { class: "mt-5" }, [
                createVNode(DangerButton, { onClick: confirmTeamDeletion }, {
                  default: withCtx(() => [
                    createTextVNode(" Delete Team ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(ConfirmationModal, {
                show: confirmingTeamDeletion.value,
                onClose: ($event) => confirmingTeamDeletion.value = false
              }, {
                title: withCtx(() => [
                  createTextVNode(" Delete Team ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")
                ]),
                footer: withCtx(() => [
                  createVNode(SecondaryButton, {
                    onClick: ($event) => confirmingTeamDeletion.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(DangerButton, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteTeam
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Team ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/DeleteTeamForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DeleteTeamForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/vulco/resources/js/Pages/Teams/Partials/DeleteTeamForm.vue"]]);
export {
  DeleteTeamForm as default
};
//# sourceMappingURL=DeleteTeamForm-BoDD521x.js.map
