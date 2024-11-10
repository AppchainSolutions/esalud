import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardSubtitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VFileInput } from "vuetify/lib/components/VFileInput/index.mjs";
import { VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VTextarea } from "vuetify/lib/components/VTextarea/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, mergeProps({ class: "ma-4 pa-4" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "bg-surface-light pt-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Ficha Psicológica`);
            } else {
              return [
                createTextVNode("Ficha Psicológica")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardSubtitle, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, { class: "ma-4" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VFileInput, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Genograma"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VFileInput, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Ecograma"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VFileInput, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Documentos e informes"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VTextarea, {
                            title: "Factores de Riesgo y Vulnerabilidad",
                            label: "Factores de Riesgo y Vulnerabilidad",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Factores de Riesgo y Vulnerabilidad `);
                              } else {
                                return [
                                  createTextVNode(" Factores de Riesgo y Vulnerabilidad ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VTextarea, {
                            title: "Factores Protectores / Facilitadores",
                            label: "Factores Protectores / Facilitadores",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Factores Protectores / Facilitadores `);
                              } else {
                                return [
                                  createTextVNode(" Factores Protectores / Facilitadores ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VSelect, {
                            title: "Red de apoyo profesional",
                            multiple: "",
                            chips: "",
                            label: "Red de apoyo profesional",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1",
                            items: [
                              "Fonoaudiología",
                              "Terapia Ocupacional",
                              "Kinesiología",
                              "Kinesiología domiciliaria",
                              "Psicología",
                              "Terapia Floral"
                            ]
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Red de apoyo profesional `);
                              } else {
                                return [
                                  createTextVNode(" Red de apoyo profesional ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VFileInput, {
                              class: "ma-2 pa-2",
                              clearable: "",
                              label: "Genograma"
                            }),
                            createVNode(VFileInput, {
                              class: "ma-2 pa-2",
                              clearable: "",
                              label: "Ecograma"
                            }),
                            createVNode(VFileInput, {
                              class: "ma-2 pa-2",
                              clearable: "",
                              label: "Documentos e informes"
                            }),
                            createVNode(VTextarea, {
                              title: "Factores de Riesgo y Vulnerabilidad",
                              label: "Factores de Riesgo y Vulnerabilidad",
                              clearable: "",
                              class: "ma-2 pa-2",
                              rows: "1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Factores de Riesgo y Vulnerabilidad ")
                              ]),
                              _: 1
                            }),
                            createVNode(VTextarea, {
                              title: "Factores Protectores / Facilitadores",
                              label: "Factores Protectores / Facilitadores",
                              clearable: "",
                              class: "ma-2 pa-2",
                              rows: "1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Factores Protectores / Facilitadores ")
                              ]),
                              _: 1
                            }),
                            createVNode(VSelect, {
                              title: "Red de apoyo profesional",
                              multiple: "",
                              chips: "",
                              label: "Red de apoyo profesional",
                              clearable: "",
                              class: "ma-2 pa-2",
                              rows: "1",
                              items: [
                                "Fonoaudiología",
                                "Terapia Ocupacional",
                                "Kinesiología",
                                "Kinesiología domiciliaria",
                                "Psicología",
                                "Terapia Floral"
                              ]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Red de apoyo profesional ")
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
                          _push5(ssrRenderComponent(VTextarea, {
                            title: "Tratamientos anteriores",
                            label: "Tratamientos anteriores",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Tratamientos anteriores `);
                              } else {
                                return [
                                  createTextVNode(" Tratamientos anteriores ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VTextarea, {
                            title: " Tratamientos actuales",
                            label: " Tratamientos actuales",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Tratamientos actuales `);
                              } else {
                                return [
                                  createTextVNode(" Tratamientos actuales ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VTextarea, {
                            title: "Tratamientos famacológico",
                            label: "Tratamientos famacológico",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Tratamientos famacológico `);
                              } else {
                                return [
                                  createTextVNode(" Tratamientos famacológico ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VTextarea, {
                            title: "Tratamientos de apoyo comunal",
                            label: "Tratamientos de apoyo comunal",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Tratamientos de apoyo comunal `);
                              } else {
                                return [
                                  createTextVNode(" Tratamientos de apoyo comunal ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextarea, {
                              title: "Tratamientos anteriores",
                              label: "Tratamientos anteriores",
                              clearable: "",
                              class: "ma-2 pa-2",
                              rows: "1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Tratamientos anteriores ")
                              ]),
                              _: 1
                            }),
                            createVNode(VTextarea, {
                              title: " Tratamientos actuales",
                              label: " Tratamientos actuales",
                              clearable: "",
                              class: "ma-2 pa-2",
                              rows: "1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Tratamientos actuales ")
                              ]),
                              _: 1
                            }),
                            createVNode(VTextarea, {
                              title: "Tratamientos famacológico",
                              label: "Tratamientos famacológico",
                              clearable: "",
                              class: "ma-2 pa-2",
                              rows: "1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Tratamientos famacológico ")
                              ]),
                              _: 1
                            }),
                            createVNode(VTextarea, {
                              title: "Tratamientos de apoyo comunal",
                              label: "Tratamientos de apoyo comunal",
                              clearable: "",
                              class: "ma-2 pa-2",
                              rows: "1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Tratamientos de apoyo comunal ")
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
                          createVNode(VFileInput, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Genograma"
                          }),
                          createVNode(VFileInput, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Ecograma"
                          }),
                          createVNode(VFileInput, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Documentos e informes"
                          }),
                          createVNode(VTextarea, {
                            title: "Factores de Riesgo y Vulnerabilidad",
                            label: "Factores de Riesgo y Vulnerabilidad",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Factores de Riesgo y Vulnerabilidad ")
                            ]),
                            _: 1
                          }),
                          createVNode(VTextarea, {
                            title: "Factores Protectores / Facilitadores",
                            label: "Factores Protectores / Facilitadores",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Factores Protectores / Facilitadores ")
                            ]),
                            _: 1
                          }),
                          createVNode(VSelect, {
                            title: "Red de apoyo profesional",
                            multiple: "",
                            chips: "",
                            label: "Red de apoyo profesional",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1",
                            items: [
                              "Fonoaudiología",
                              "Terapia Ocupacional",
                              "Kinesiología",
                              "Kinesiología domiciliaria",
                              "Psicología",
                              "Terapia Floral"
                            ]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Red de apoyo profesional ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VTextarea, {
                            title: "Tratamientos anteriores",
                            label: "Tratamientos anteriores",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Tratamientos anteriores ")
                            ]),
                            _: 1
                          }),
                          createVNode(VTextarea, {
                            title: " Tratamientos actuales",
                            label: " Tratamientos actuales",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Tratamientos actuales ")
                            ]),
                            _: 1
                          }),
                          createVNode(VTextarea, {
                            title: "Tratamientos famacológico",
                            label: "Tratamientos famacológico",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Tratamientos famacológico ")
                            ]),
                            _: 1
                          }),
                          createVNode(VTextarea, {
                            title: "Tratamientos de apoyo comunal",
                            label: "Tratamientos de apoyo comunal",
                            clearable: "",
                            class: "ma-2 pa-2",
                            rows: "1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Tratamientos de apoyo comunal ")
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
                createVNode(VRow, { class: "ma-4" }, {
                  default: withCtx(() => [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VFileInput, {
                          class: "ma-2 pa-2",
                          clearable: "",
                          label: "Genograma"
                        }),
                        createVNode(VFileInput, {
                          class: "ma-2 pa-2",
                          clearable: "",
                          label: "Ecograma"
                        }),
                        createVNode(VFileInput, {
                          class: "ma-2 pa-2",
                          clearable: "",
                          label: "Documentos e informes"
                        }),
                        createVNode(VTextarea, {
                          title: "Factores de Riesgo y Vulnerabilidad",
                          label: "Factores de Riesgo y Vulnerabilidad",
                          clearable: "",
                          class: "ma-2 pa-2",
                          rows: "1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Factores de Riesgo y Vulnerabilidad ")
                          ]),
                          _: 1
                        }),
                        createVNode(VTextarea, {
                          title: "Factores Protectores / Facilitadores",
                          label: "Factores Protectores / Facilitadores",
                          clearable: "",
                          class: "ma-2 pa-2",
                          rows: "1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Factores Protectores / Facilitadores ")
                          ]),
                          _: 1
                        }),
                        createVNode(VSelect, {
                          title: "Red de apoyo profesional",
                          multiple: "",
                          chips: "",
                          label: "Red de apoyo profesional",
                          clearable: "",
                          class: "ma-2 pa-2",
                          rows: "1",
                          items: [
                            "Fonoaudiología",
                            "Terapia Ocupacional",
                            "Kinesiología",
                            "Kinesiología domiciliaria",
                            "Psicología",
                            "Terapia Floral"
                          ]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Red de apoyo profesional ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VTextarea, {
                          title: "Tratamientos anteriores",
                          label: "Tratamientos anteriores",
                          clearable: "",
                          class: "ma-2 pa-2",
                          rows: "1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tratamientos anteriores ")
                          ]),
                          _: 1
                        }),
                        createVNode(VTextarea, {
                          title: " Tratamientos actuales",
                          label: " Tratamientos actuales",
                          clearable: "",
                          class: "ma-2 pa-2",
                          rows: "1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tratamientos actuales ")
                          ]),
                          _: 1
                        }),
                        createVNode(VTextarea, {
                          title: "Tratamientos famacológico",
                          label: "Tratamientos famacológico",
                          clearable: "",
                          class: "ma-2 pa-2",
                          rows: "1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tratamientos famacológico ")
                          ]),
                          _: 1
                        }),
                        createVNode(VTextarea, {
                          title: "Tratamientos de apoyo comunal",
                          label: "Tratamientos de apoyo comunal",
                          clearable: "",
                          class: "ma-2 pa-2",
                          rows: "1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tratamientos de apoyo comunal ")
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
              createTextVNode("Ficha Psicológica")
            ]),
            _: 1
          }),
          createVNode(VCardSubtitle),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, { class: "ma-4" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VFileInput, {
                        class: "ma-2 pa-2",
                        clearable: "",
                        label: "Genograma"
                      }),
                      createVNode(VFileInput, {
                        class: "ma-2 pa-2",
                        clearable: "",
                        label: "Ecograma"
                      }),
                      createVNode(VFileInput, {
                        class: "ma-2 pa-2",
                        clearable: "",
                        label: "Documentos e informes"
                      }),
                      createVNode(VTextarea, {
                        title: "Factores de Riesgo y Vulnerabilidad",
                        label: "Factores de Riesgo y Vulnerabilidad",
                        clearable: "",
                        class: "ma-2 pa-2",
                        rows: "1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Factores de Riesgo y Vulnerabilidad ")
                        ]),
                        _: 1
                      }),
                      createVNode(VTextarea, {
                        title: "Factores Protectores / Facilitadores",
                        label: "Factores Protectores / Facilitadores",
                        clearable: "",
                        class: "ma-2 pa-2",
                        rows: "1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Factores Protectores / Facilitadores ")
                        ]),
                        _: 1
                      }),
                      createVNode(VSelect, {
                        title: "Red de apoyo profesional",
                        multiple: "",
                        chips: "",
                        label: "Red de apoyo profesional",
                        clearable: "",
                        class: "ma-2 pa-2",
                        rows: "1",
                        items: [
                          "Fonoaudiología",
                          "Terapia Ocupacional",
                          "Kinesiología",
                          "Kinesiología domiciliaria",
                          "Psicología",
                          "Terapia Floral"
                        ]
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Red de apoyo profesional ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VTextarea, {
                        title: "Tratamientos anteriores",
                        label: "Tratamientos anteriores",
                        clearable: "",
                        class: "ma-2 pa-2",
                        rows: "1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Tratamientos anteriores ")
                        ]),
                        _: 1
                      }),
                      createVNode(VTextarea, {
                        title: " Tratamientos actuales",
                        label: " Tratamientos actuales",
                        clearable: "",
                        class: "ma-2 pa-2",
                        rows: "1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Tratamientos actuales ")
                        ]),
                        _: 1
                      }),
                      createVNode(VTextarea, {
                        title: "Tratamientos famacológico",
                        label: "Tratamientos famacológico",
                        clearable: "",
                        class: "ma-2 pa-2",
                        rows: "1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Tratamientos famacológico ")
                        ]),
                        _: 1
                      }),
                      createVNode(VTextarea, {
                        title: "Tratamientos de apoyo comunal",
                        label: "Tratamientos de apoyo comunal",
                        clearable: "",
                        class: "ma-2 pa-2",
                        rows: "1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Tratamientos de apoyo comunal ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/FichaPsicologia-PacienteComponente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FichaPsicologia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/omar/www/esalud/resources/js/Pages/SubPages/Componentes/FichaPsicologia-PacienteComponente.vue"]]);
export {
  FichaPsicologia as default
};
//# sourceMappingURL=FichaPsicologia-PacienteComponente-CaFc-hhj.js.map
