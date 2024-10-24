import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardSubtitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import { VTextarea } from "vuetify/lib/components/VTextarea/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, mergeProps({ class: "ma-4 pa-4" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "bg-surface-light pt-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Plan de Intervención Individual `);
            } else {
              return [
                createTextVNode(" Plan de Intervención Individual ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardSubtitle, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, { class: "ma-2" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            type: "date",
                            label: "fecha de ingreso",
                            class: "ma-2 pa-2"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VTextarea, {
                            title: "Motivo de Consulta",
                            label: "Motivo de Consulta",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Motivo de Consulta `);
                              } else {
                                return [
                                  createTextVNode(" Motivo de Consulta ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VTextarea, {
                            title: "Comentarios",
                            label: "Comentarios",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Comentarios Diagnóstico `);
                              } else {
                                return [
                                  createTextVNode(" Comentarios Diagnóstico ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              type: "date",
                              label: "fecha de ingreso",
                              class: "ma-2 pa-2"
                            }),
                            createVNode(VTextarea, {
                              title: "Motivo de Consulta",
                              label: "Motivo de Consulta",
                              clearable: "",
                              class: "ma-2 pa-2",
                              rows: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Motivo de Consulta ")
                              ]),
                              _: 1
                            }),
                            createVNode(VTextarea, {
                              title: "Comentarios",
                              label: "Comentarios",
                              clearable: "",
                              class: "ma-2 pa-2",
                              rows: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Comentarios Diagnóstico ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSelect, {
                            label: "Diagnóstico DSM V",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCard, { class: "ma-4 pa-4" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCardTitle, { class: "bg-surface-light" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Detalles Diagnóstico `);
                                    } else {
                                      return [
                                        createTextVNode(" Detalles Diagnóstico ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCardText, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<ol class="ma-2 pa-2"${_scopeId6}><li${_scopeId6}>Código DSM V:</li><li${_scopeId6}>Código CIE 11:</li><li${_scopeId6}>Notas de comparación CIE 11</li></ol>`);
                                    } else {
                                      return [
                                        createVNode("ol", { class: "ma-2 pa-2" }, [
                                          createVNode("li", null, "Código DSM V:"),
                                          createVNode("li", null, "Código CIE 11:"),
                                          createVNode("li", null, "Notas de comparación CIE 11")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCardActions, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VBtn, {
                                        density: "compact",
                                        color: "#009AA4",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Detalle CIE 11`);
                                          } else {
                                            return [
                                              createTextVNode("Detalle CIE 11")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          density: "compact",
                                          color: "#009AA4",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Detalle CIE 11")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCardTitle, { class: "bg-surface-light" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Detalles Diagnóstico ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode("ol", { class: "ma-2 pa-2" }, [
                                        createVNode("li", null, "Código DSM V:"),
                                        createVNode("li", null, "Código CIE 11:"),
                                        createVNode("li", null, "Notas de comparación CIE 11")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardActions, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        density: "compact",
                                        color: "#009AA4",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Detalle CIE 11")
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSelect, {
                              label: "Diagnóstico DSM V",
                              class: "ma-2 pa-2",
                              rows: "1"
                            }),
                            createVNode(VCard, { class: "ma-4 pa-4" }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "bg-surface-light" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Detalles Diagnóstico ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode("ol", { class: "ma-2 pa-2" }, [
                                      createVNode("li", null, "Código DSM V:"),
                                      createVNode("li", null, "Código CIE 11:"),
                                      createVNode("li", null, "Notas de comparación CIE 11")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardActions, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      density: "compact",
                                      color: "#009AA4",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Detalle CIE 11")
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            type: "date",
                            label: "fecha de ingreso",
                            class: "ma-2 pa-2"
                          }),
                          createVNode(VTextarea, {
                            title: "Motivo de Consulta",
                            label: "Motivo de Consulta",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Motivo de Consulta ")
                            ]),
                            _: 1
                          }),
                          createVNode(VTextarea, {
                            title: "Comentarios",
                            label: "Comentarios",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Comentarios Diagnóstico ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            label: "Diagnóstico DSM V",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }),
                          createVNode(VCard, { class: "ma-4 pa-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "bg-surface-light" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Detalles Diagnóstico ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("ol", { class: "ma-2 pa-2" }, [
                                    createVNode("li", null, "Código DSM V:"),
                                    createVNode("li", null, "Código CIE 11:"),
                                    createVNode("li", null, "Notas de comparación CIE 11")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCardActions, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    density: "compact",
                                    color: "#009AA4",
                                    variant: "tonal"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Detalle CIE 11")
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
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VRow, { class: "ma-2" }, {
                  default: withCtx(() => [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          type: "date",
                          label: "fecha de ingreso",
                          class: "ma-2 pa-2"
                        }),
                        createVNode(VTextarea, {
                          title: "Motivo de Consulta",
                          label: "Motivo de Consulta",
                          clearable: "",
                          class: "ma-2 pa-2",
                          rows: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Motivo de Consulta ")
                          ]),
                          _: 1
                        }),
                        createVNode(VTextarea, {
                          title: "Comentarios",
                          label: "Comentarios",
                          clearable: "",
                          class: "ma-2 pa-2",
                          rows: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Comentarios Diagnóstico ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          label: "Diagnóstico DSM V",
                          class: "ma-2 pa-2",
                          rows: "1"
                        }),
                        createVNode(VCard, { class: "ma-4 pa-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "bg-surface-light" }, {
                              default: withCtx(() => [
                                createTextVNode(" Detalles Diagnóstico ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("ol", { class: "ma-2 pa-2" }, [
                                  createVNode("li", null, "Código DSM V:"),
                                  createVNode("li", null, "Código CIE 11:"),
                                  createVNode("li", null, "Notas de comparación CIE 11")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  density: "compact",
                                  color: "#009AA4",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Detalle CIE 11")
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
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardActions, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VBtn, {
                density: "compact",
                class: "ma-4 ma-4",
                color: "#009AA4",
                variant: "tonal"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Guardar`);
                  } else {
                    return [
                      createTextVNode("Guardar")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VBtn, {
                  density: "compact",
                  class: "ma-4 ma-4",
                  color: "#009AA4",
                  variant: "tonal"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Guardar")
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
          createVNode(VCardTitle, { class: "bg-surface-light pt-4" }, {
            default: withCtx(() => [
              createTextVNode(" Plan de Intervención Individual ")
            ]),
            _: 1
          }),
          createVNode(VCardSubtitle),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, { class: "ma-2" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        type: "date",
                        label: "fecha de ingreso",
                        class: "ma-2 pa-2"
                      }),
                      createVNode(VTextarea, {
                        title: "Motivo de Consulta",
                        label: "Motivo de Consulta",
                        clearable: "",
                        class: "ma-2 pa-2",
                        rows: "2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Motivo de Consulta ")
                        ]),
                        _: 1
                      }),
                      createVNode(VTextarea, {
                        title: "Comentarios",
                        label: "Comentarios",
                        clearable: "",
                        class: "ma-2 pa-2",
                        rows: "2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Comentarios Diagnóstico ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        label: "Diagnóstico DSM V",
                        class: "ma-2 pa-2",
                        rows: "1"
                      }),
                      createVNode(VCard, { class: "ma-4 pa-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "bg-surface-light" }, {
                            default: withCtx(() => [
                              createTextVNode(" Detalles Diagnóstico ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("ol", { class: "ma-2 pa-2" }, [
                                createVNode("li", null, "Código DSM V:"),
                                createVNode("li", null, "Código CIE 11:"),
                                createVNode("li", null, "Notas de comparación CIE 11")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                density: "compact",
                                color: "#009AA4",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Detalle CIE 11")
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
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCardActions, null, {
            default: withCtx(() => [
              createVNode(VBtn, {
                density: "compact",
                class: "ma-4 ma-4",
                color: "#009AA4",
                variant: "tonal"
              }, {
                default: withCtx(() => [
                  createTextVNode("Guardar")
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
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/PlanTrabajo-PsicologiaComponente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PlanTrabajo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PlanTrabajo as default
};
//# sourceMappingURL=PlanTrabajo-PsicologiaComponente-DlX4bOtY.js.map
