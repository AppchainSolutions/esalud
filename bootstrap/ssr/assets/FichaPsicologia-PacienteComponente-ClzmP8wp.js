import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_file_input = resolveComponent("v-file-input");
  const _component_v_textarea = resolveComponent("v-textarea");
  const _component_v_select = resolveComponent("v-select");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "ma-4 pa-4" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
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
        _push2(ssrRenderComponent(_component_v_card_subtitle, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, { class: "ma-4" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_file_input, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Genograma"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_file_input, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Ecograma"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_file_input, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Documentos e informes"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_textarea, {
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
                          _push5(ssrRenderComponent(_component_v_textarea, {
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
                          _push5(ssrRenderComponent(_component_v_select, {
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
                            createVNode(_component_v_file_input, {
                              class: "ma-2 pa-2",
                              clearable: "",
                              label: "Genograma"
                            }),
                            createVNode(_component_v_file_input, {
                              class: "ma-2 pa-2",
                              clearable: "",
                              label: "Ecograma"
                            }),
                            createVNode(_component_v_file_input, {
                              class: "ma-2 pa-2",
                              clearable: "",
                              label: "Documentos e informes"
                            }),
                            createVNode(_component_v_textarea, {
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
                            createVNode(_component_v_textarea, {
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
                            createVNode(_component_v_select, {
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
                    _push4(ssrRenderComponent(_component_v_col, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_textarea, {
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
                          _push5(ssrRenderComponent(_component_v_textarea, {
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
                          _push5(ssrRenderComponent(_component_v_textarea, {
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
                          _push5(ssrRenderComponent(_component_v_textarea, {
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
                            createVNode(_component_v_textarea, {
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
                            createVNode(_component_v_textarea, {
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
                            createVNode(_component_v_textarea, {
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
                            createVNode(_component_v_textarea, {
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
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_file_input, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Genograma"
                          }),
                          createVNode(_component_v_file_input, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Ecograma"
                          }),
                          createVNode(_component_v_file_input, {
                            class: "ma-2 pa-2",
                            clearable: "",
                            label: "Documentos e informes"
                          }),
                          createVNode(_component_v_textarea, {
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
                          createVNode(_component_v_textarea, {
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
                          createVNode(_component_v_select, {
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
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_textarea, {
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
                          createVNode(_component_v_textarea, {
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
                          createVNode(_component_v_textarea, {
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
                          createVNode(_component_v_textarea, {
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
                createVNode(_component_v_row, { class: "ma-4" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_file_input, {
                          class: "ma-2 pa-2",
                          clearable: "",
                          label: "Genograma"
                        }),
                        createVNode(_component_v_file_input, {
                          class: "ma-2 pa-2",
                          clearable: "",
                          label: "Ecograma"
                        }),
                        createVNode(_component_v_file_input, {
                          class: "ma-2 pa-2",
                          clearable: "",
                          label: "Documentos e informes"
                        }),
                        createVNode(_component_v_textarea, {
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
                        createVNode(_component_v_textarea, {
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
                        createVNode(_component_v_select, {
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
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_textarea, {
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
                        createVNode(_component_v_textarea, {
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
                        createVNode(_component_v_textarea, {
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
                        createVNode(_component_v_textarea, {
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
        _push2(ssrRenderComponent(_component_v_card_actions, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
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
                createVNode(_component_v_btn, {
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
          createVNode(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
            default: withCtx(() => [
              createTextVNode("Ficha Psicológica")
            ]),
            _: 1
          }),
          createVNode(_component_v_card_subtitle),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode(_component_v_row, { class: "ma-4" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_file_input, {
                        class: "ma-2 pa-2",
                        clearable: "",
                        label: "Genograma"
                      }),
                      createVNode(_component_v_file_input, {
                        class: "ma-2 pa-2",
                        clearable: "",
                        label: "Ecograma"
                      }),
                      createVNode(_component_v_file_input, {
                        class: "ma-2 pa-2",
                        clearable: "",
                        label: "Documentos e informes"
                      }),
                      createVNode(_component_v_textarea, {
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
                      createVNode(_component_v_textarea, {
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
                      createVNode(_component_v_select, {
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
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_textarea, {
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
                      createVNode(_component_v_textarea, {
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
                      createVNode(_component_v_textarea, {
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
                      createVNode(_component_v_textarea, {
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
          createVNode(_component_v_card_actions, null, {
            default: withCtx(() => [
              createVNode(_component_v_btn, {
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
const FichaPsicologia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/Componentes/FichaPsicologia-PacienteComponente.vue"]]);
export {
  FichaPsicologia as default
};
//# sourceMappingURL=FichaPsicologia-PacienteComponente-ClzmP8wp.js.map
