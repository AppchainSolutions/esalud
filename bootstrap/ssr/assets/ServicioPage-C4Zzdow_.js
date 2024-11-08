import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import SolicitudServicio from "./Solicitud-ServicioComponente-0vrxfyIB.js";
import _sfc_main$1 from "./Asignacion-ServicioComponente-D9YyHKLq.js";
import ListaEspera from "./Lista-EsperaComponente-CiMfnmWK.js";
import { A as AppLayout } from "./AppLayout-BxRGP7A1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VCard, VCardText } from "vuetify/lib/components/VCard/index.mjs";
import { VTabs, VTab, VTabsWindow, VTabsWindowItem } from "vuetify/lib/components/VTabs/index.mjs";
import "vuetify/lib/components/VBtn/index.mjs";
import "vuetify/lib/components/VForm/index.mjs";
import "vuetify/lib/components/VGrid/index.mjs";
import "vuetify/lib/components/VSelect/index.mjs";
import "vuetify/lib/components/VTextField/index.mjs";
import "vuetify/lib/components/VTextarea/index.mjs";
import "./store-CHGALank.js";
import "pinia";
import "./helper-BPJLKrkF.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "vue-logger-plugin";
import "vuetify/lib/components/VAlert/index.mjs";
import "vuetify/lib/components/VChip/index.mjs";
import "vuetify/lib/components/VDataTable/index.mjs";
import "vuetify/lib/components/VDivider/index.mjs";
import "vuetify/lib/components/VToolbar/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "@inertiajs/vue3";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
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
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabs, {
              modelValue: _ctx.tab,
              "onUpdate:modelValue": ($event) => _ctx.tab = $event,
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTab, {
                    "prepend-icon": "mdi-account",
                    text: "Ingresar nueva solicitud",
                    value: "option-1"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, {
                    "prepend-icon": "mdi-lock",
                    text: "Asignar servicio",
                    value: "option-2"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, {
                    "prepend-icon": "mdi-access-point",
                    text: "Lista de Espera",
                    value: "option-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, {
                      "prepend-icon": "mdi-account",
                      text: "Ingresar nueva solicitud",
                      value: "option-1"
                    }),
                    createVNode(VTab, {
                      "prepend-icon": "mdi-lock",
                      text: "Asignar servicio",
                      value: "option-2"
                    }),
                    createVNode(VTab, {
                      "prepend-icon": "mdi-access-point",
                      text: "Lista de Espera",
                      value: "option-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindow, {
              modelValue: _ctx.tab,
              "onUpdate:modelValue": ($event) => _ctx.tab = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTabsWindowItem, { value: "option-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, null, {
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
                                createVNode(VCardText, null, {
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
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
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
                  _push3(ssrRenderComponent(VTabsWindowItem, { value: "option-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$1, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1)
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
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1)
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
                  _push3(ssrRenderComponent(VTabsWindowItem, { value: "option-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, null, {
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
                                createVNode(VCardText, null, {
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
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
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
                    createVNode(VTabsWindowItem, { value: "option-1" }, {
                      default: withCtx(() => [
                        createVNode(VCard, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(VCardText, null, {
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
                    createVNode(VTabsWindowItem, { value: "option-2" }, {
                      default: withCtx(() => [
                        createVNode(VCard, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VTabsWindowItem, { value: "option-3" }, {
                      default: withCtx(() => [
                        createVNode(VCard, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(VCardText, null, {
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
              createVNode(VTabs, {
                modelValue: _ctx.tab,
                "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                color: "primary"
              }, {
                default: withCtx(() => [
                  createVNode(VTab, {
                    "prepend-icon": "mdi-account",
                    text: "Ingresar nueva solicitud",
                    value: "option-1"
                  }),
                  createVNode(VTab, {
                    "prepend-icon": "mdi-lock",
                    text: "Asignar servicio",
                    value: "option-2"
                  }),
                  createVNode(VTab, {
                    "prepend-icon": "mdi-access-point",
                    text: "Lista de Espera",
                    value: "option-3"
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VTabsWindow, {
                modelValue: _ctx.tab,
                "onUpdate:modelValue": ($event) => _ctx.tab = $event
              }, {
                default: withCtx(() => [
                  createVNode(VTabsWindowItem, { value: "option-1" }, {
                    default: withCtx(() => [
                      createVNode(VCard, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
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
                  createVNode(VTabsWindowItem, { value: "option-2" }, {
                    default: withCtx(() => [
                      createVNode(VCard, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VTabsWindowItem, { value: "option-3" }, {
                    default: withCtx(() => [
                      createVNode(VCard, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
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
const ServicioPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-88d27706"]]);
export {
  ServicioPage as default
};
//# sourceMappingURL=ServicioPage-C4Zzdow_.js.map
