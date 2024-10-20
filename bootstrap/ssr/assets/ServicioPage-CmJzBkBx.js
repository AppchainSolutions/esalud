import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import SolicitudServicio from "./Solicitud-ServicioComponente-DS9zq1vs.js";
import AsignacionServicio from "./Asignacion-ServicioComponente-M4y6yRu0.js";
import ListaEspera from "./Lista-EsperaComponente-DW6Eyc9J.js";
import { A as AppLayout } from "./AppLayout-DOexpPir.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./store-CHGALank.js";
import "pinia";
import "./helper-DlyAxSqm.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "@inertiajs/vue3";
const __default__ = {
  data: () => ({
    tab: "option-1"
  })
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  layout: AppLayout,
  data: () => ({
    tab: "option-1"
  })
}, {
  __name: "ServicioPage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_tabs_window = resolveComponent("v-tabs-window");
      const _component_v_tabs_window_item = resolveComponent("v-tabs-window-item");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tabs, {
              modelValue: _ctx.tab,
              "onUpdate:modelValue": ($event) => _ctx.tab = $event,
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, {
                    "prepend-icon": "mdi-account",
                    text: "Ingresar nueva solicitud",
                    value: "option-1"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, {
                    "prepend-icon": "mdi-lock",
                    text: "Asignar servicio",
                    value: "option-2"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, {
                    "prepend-icon": "mdi-access-point",
                    text: "Lista de Espera",
                    value: "option-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, {
                      "prepend-icon": "mdi-account",
                      text: "Ingresar nueva solicitud",
                      value: "option-1"
                    }),
                    createVNode(_component_v_tab, {
                      "prepend-icon": "mdi-lock",
                      text: "Asignar servicio",
                      value: "option-2"
                    }),
                    createVNode(_component_v_tab, {
                      "prepend-icon": "mdi-access-point",
                      text: "Lista de Espera",
                      value: "option-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tabs_window, {
              modelValue: _ctx.tab,
              "onUpdate:modelValue": ($event) => _ctx.tab = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tabs_window_item, { value: "option-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_text, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(SolicitudServicio, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(SolicitudServicio)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(SolicitudServicio)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(SolicitudServicio)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tabs_window_item, { value: "option-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_text, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(AsignacionServicio, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(AsignacionServicio)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(AsignacionServicio)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(AsignacionServicio)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tabs_window_item, { value: "option-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_text, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(ListaEspera, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(ListaEspera)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(ListaEspera)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(ListaEspera)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tabs_window_item, { value: "option-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(SolicitudServicio)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tabs_window_item, { value: "option-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(AsignacionServicio)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tabs_window_item, { value: "option-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(ListaEspera)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tabs, {
                modelValue: _ctx.tab,
                "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                color: "primary"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, {
                    "prepend-icon": "mdi-account",
                    text: "Ingresar nueva solicitud",
                    value: "option-1"
                  }),
                  createVNode(_component_v_tab, {
                    "prepend-icon": "mdi-lock",
                    text: "Asignar servicio",
                    value: "option-2"
                  }),
                  createVNode(_component_v_tab, {
                    "prepend-icon": "mdi-access-point",
                    text: "Lista de Espera",
                    value: "option-3"
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_tabs_window, {
                modelValue: _ctx.tab,
                "onUpdate:modelValue": ($event) => _ctx.tab = $event
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_tabs_window_item, { value: "option-1" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(SolicitudServicio)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tabs_window_item, { value: "option-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(AsignacionServicio)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tabs_window_item, { value: "option-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(ListaEspera)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ServicioPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ServicioPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c62917aa"], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/ServicioPage.vue"]]);
export {
  ServicioPage as default
};
//# sourceMappingURL=ServicioPage-CmJzBkBx.js.map
