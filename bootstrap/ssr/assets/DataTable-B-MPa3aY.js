import { withCtx, createVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardItem } from "vuetify/lib/components/VCard/index.mjs";
import { VDataTable } from "vuetify/lib/components/VDataTable/index.mjs";
import { VToolbar } from "vuetify/lib/components/VToolbar/index.mjs";
import { VTooltip } from "vuetify/lib/components/VTooltip/index.mjs";
const _sfc_main = {
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    headers: Array,
    tableItems: Array
  },
  emits: ["formCreate", "formEdit", "formDelete", "fichaPersonal", "atencionesDiarias"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function emitEvent(eventName, item) {
      emit(eventName, item);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDataTable, {
                    headers: __props.headers,
                    items: _ctx.data
                  }, {
                    top: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VToolbar, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: ($event) => emitEvent("formCreate")
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  icon: "mdi-account-multiple-plus",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  onClick: ($event) => emitEvent("formCreate")
                                }, null, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VToolbar, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: ($event) => emitEvent("formCreate")
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    "item.actions": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTooltip, {
                          text: "Ficha Médica",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps(props, {
                                density: "compact",
                                color: "#009AA4",
                                class: "mr-2 ml-2",
                                variant: "tonal",
                                icon: "mdi-stethoscope",
                                onClick: ($event) => emitEvent("ficha-medica", item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
                                  density: "compact",
                                  color: "#009AA4",
                                  class: "mr-2 ml-2",
                                  variant: "tonal",
                                  icon: "mdi-stethoscope",
                                  onClick: ($event) => emitEvent("ficha-medica", item)
                                }), null, 16, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTooltip, {
                          text: "Datos Personales",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-account-edit-outline",
                                onClick: ($event) => emitEvent("ficha-personal", item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
                                  density: "compact",
                                  class: "mr-2 ml-2",
                                  color: "#009AA4",
                                  variant: "tonal",
                                  icon: "mdi-account-edit-outline",
                                  onClick: ($event) => emitEvent("ficha-personal", item)
                                }), null, 16, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTooltip, {
                          text: "Eliminar",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-delete-outline",
                                onClick: ($event) => emitEvent("eliminar", item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
                                  density: "compact",
                                  class: "mr-2 ml-2",
                                  color: "#009AA4",
                                  variant: "tonal",
                                  icon: "mdi-delete-outline",
                                  onClick: ($event) => emitEvent("eliminar", item)
                                }), null, 16, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTooltip, {
                            text: "Ficha Médica",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
                                density: "compact",
                                color: "#009AA4",
                                class: "mr-2 ml-2",
                                variant: "tonal",
                                icon: "mdi-stethoscope",
                                onClick: ($event) => emitEvent("ficha-medica", item)
                              }), null, 16, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VTooltip, {
                            text: "Datos Personales",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-account-edit-outline",
                                onClick: ($event) => emitEvent("ficha-personal", item)
                              }), null, 16, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VTooltip, {
                            text: "Eliminar",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-delete-outline",
                                onClick: ($event) => emitEvent("eliminar", item)
                              }), null, 16, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDataTable, {
                      headers: __props.headers,
                      items: _ctx.data
                    }, {
                      top: withCtx(() => [
                        createVNode(VToolbar, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              icon: "mdi-account-multiple-plus",
                              variant: "tonal",
                              class: "ma-2",
                              color: "#009AA4",
                              onClick: ($event) => emitEvent("formCreate")
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      "item.actions": withCtx(({ item }) => [
                        createVNode(VTooltip, {
                          text: "Ficha Médica",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
                              density: "compact",
                              color: "#009AA4",
                              class: "mr-2 ml-2",
                              variant: "tonal",
                              icon: "mdi-stethoscope",
                              onClick: ($event) => emitEvent("ficha-medica", item)
                            }), null, 16, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VTooltip, {
                          text: "Datos Personales",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
                              density: "compact",
                              class: "mr-2 ml-2",
                              color: "#009AA4",
                              variant: "tonal",
                              icon: "mdi-account-edit-outline",
                              onClick: ($event) => emitEvent("ficha-personal", item)
                            }), null, 16, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VTooltip, {
                          text: "Eliminar",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
                              density: "compact",
                              class: "mr-2 ml-2",
                              color: "#009AA4",
                              variant: "tonal",
                              icon: "mdi-delete-outline",
                              onClick: ($event) => emitEvent("eliminar", item)
                            }), null, 16, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }, 8, ["headers", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, null, {
                default: withCtx(() => [
                  createVNode(VDataTable, {
                    headers: __props.headers,
                    items: _ctx.data
                  }, {
                    top: withCtx(() => [
                      createVNode(VToolbar, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            icon: "mdi-account-multiple-plus",
                            variant: "tonal",
                            class: "ma-2",
                            color: "#009AA4",
                            onClick: ($event) => emitEvent("formCreate")
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    "item.actions": withCtx(({ item }) => [
                      createVNode(VTooltip, {
                        text: "Ficha Médica",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
                            density: "compact",
                            color: "#009AA4",
                            class: "mr-2 ml-2",
                            variant: "tonal",
                            icon: "mdi-stethoscope",
                            onClick: ($event) => emitEvent("ficha-medica", item)
                          }), null, 16, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VTooltip, {
                        text: "Datos Personales",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
                            density: "compact",
                            class: "mr-2 ml-2",
                            color: "#009AA4",
                            variant: "tonal",
                            icon: "mdi-account-edit-outline",
                            onClick: ($event) => emitEvent("ficha-personal", item)
                          }), null, 16, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VTooltip, {
                        text: "Eliminar",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
                            density: "compact",
                            class: "mr-2 ml-2",
                            color: "#009AA4",
                            variant: "tonal",
                            icon: "mdi-delete-outline",
                            onClick: ($event) => emitEvent("eliminar", item)
                          }), null, 16, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  }, 8, ["headers", "items"])
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/DataTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=DataTable-B-MPa3aY.js.map
