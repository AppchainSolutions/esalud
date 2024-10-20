import { reactive, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-DOexpPir.js";
import { u as useDataStore } from "./store-CHGALank.js";
import "@inertiajs/vue3";
import "./helper-DlyAxSqm.js";
import InformacionGeneral from "./Informacion-SesionPsicologiaComponente-vynTUIxw.js";
import FichaPsicologia from "./FichaPsicologia-PacienteComponente-ClzmP8wp.js";
import PlanTrabajo from "./PlanTrabajo-PsicologiaComponente-CuCRHceB.js";
import TablaSesionesPsicologia from "./TablaSesiones-PsicologiaComponente-BgWVWn30.js";
import DatosEgresoPsicologia from "./DatosEgreso-PsicologiaComponente-Ciy5e35k.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "@vueup/vue-quill";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: AppLayout,
  data: () => ({
    tab: "option-1"
  })
}, {
  __name: "Sesiones-PsicologiaPage",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    reactive({
      endpoints: [],
      objetivos: [
        { "id": 1, "descripcion": "Acompañamiento en el proceso de duelo" },
        { "id": 2, "descripcion": "Desarrollar nuevas prácticas relacionales entre la familia" },
        { "id": 3, "descripcion": "Desarrollar técnicas de autorregulación emocional" },
        { "id": 4, "descripcion": "Disminuir sintomatología ansiosa" },
        { "id": 5, "descripcion": "Disminuir sintomatología depresiva" },
        { "id": 6, "descripcion": "Elaboración de la experiencia de separación de los padres" },
        { "id": 7, "descripcion": "Evaluación de competencias parentales" },
        { "id": 8, "descripcion": "Fomentar técnicas y conductas de autocuidado" },
        { "id": 9, "descripcion": "Fortalecer autoestima y autoconcepto" },
        { "id": 10, "descripcion": "Fortalecer competencias formativas" },
        { "id": 11, "descripcion": "Fortalecer competencias protectoras" },
        { "id": 12, "descripcion": "Fortalecer competencias reflexivas" },
        { "id": 13, "descripcion": "Fortalecer competencias vinculares" },
        { "id": 14, "descripcion": "Fortalecer tolerancia a la frustración" },
        { "id": 15, "descripcion": "Identificar situaciones que gatillen procesos ansiosos" },
        { "id": 16, "descripcion": "Mejorar la regulación emocional" },
        { "id": 17, "descripcion": "Propiciar habilidades para enfrentar los miedos nocturnos" },
        { "id": 18, "descripcion": "Psicoeducar habilidades parentales" },
        { "id": 19, "descripcion": "Psicoeducar sobre adolescencia y sexualidad" },
        { "id": 20, "descripcion": "Psicoeducar sobre ciclo vital personas mayores" },
        { "id": 21, "descripcion": "Disminuir síntomas ansiosos" },
        { "id": 22, "descripcion": "Fortalecer autoconcepto" },
        { "id": 23, "descripcion": "Fortalecer autoestima" },
        { "id": 24, "descripcion": "Fortalecer competencias sociales y/o habilidades interpersonales" },
        { "id": 25, "descripcion": "Propiciar la organización" }
      ],
      breadcrumbs: [
        {
          text: "Inicio",
          disabled: false,
          href: "/"
        },
        {
          text: "Pacientes",
          disabled: false,
          href: "/pacientes"
        },
        {
          text: "Sesiones de Psicología",
          disabled: true
        }
      ],
      atencion: {
        headers: [
          {
            title: "Fecha",
            align: "center",
            sortable: true,
            value: "fecha"
          },
          {
            title: "Horarios",
            align: "center",
            sortable: true,
            value: "horarios"
          },
          {
            title: "Sesión N°",
            align: "center",
            sortable: true,
            value: "sesionNum"
          },
          {
            title: "Tipo Sesion",
            align: "center",
            sortable: true,
            value: "tipoSesion"
            // TODO: esto vendría por defecto para todas las primeras sesiones
          },
          {
            title: "Asiste",
            align: "center",
            sortable: true,
            value: "asiste"
            //TODO: esto vendría por defecto para todas las primeras sesiones
          },
          { title: "Acciones", align: "center", key: "actions" }
        ],
        items: [
          {
            fecha: "Lunes 03/02/2025",
            horarios: "09:00-09:45",
            sesionNum: "1/12",
            tipoSesion: "Evaluación diagnóstica",
            asiste: "Si"
          },
          {
            fecha: "Lunes 10/02/2025",
            horarios: "09:00-09:45",
            sesionNum: "2/12",
            tipoSesion: "Consulta",
            asiste: "Pendiente"
          },
          {
            fecha: "Lunes 17/02/2025",
            horarios: "09:00-09:45",
            sesionNum: "3/12",
            tipoSesion: "Consulta",
            asiste: "Pendiente"
          },
          {
            fecha: "Lunes 24/02/2025",
            horarios: "09:00-09:45",
            sesionNum: "4/12",
            tipoSesion: "Consulta",
            asiste: "Pendiente"
          }
        ]
      },
      editedItem: {
        paciente_id: null
      },
      defaultItem: {
        paciente_id: null
      },
      searchQuery: {
        paciente_id: null
      },
      dialog: false,
      tableItems: [],
      editedIndex: -1,
      list: [],
      loading: false,
      valid: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_tabs_window = resolveComponent("v-tabs-window");
      const _component_v_tabs_window_item = resolveComponent("v-tabs-window-item");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "ma-4 pa-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Servicio Atención Psicológica`);
                } else {
                  return [
                    createTextVNode("Servicio Atención Psicológica")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_subtitle, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tabs, {
                    modelValue: _ctx.tab,
                    "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                    color: "teal",
                    staked: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_tab, {
                          "prepend-icon": "mdi-account",
                          text: "Información general",
                          value: "option-1"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_tab, {
                          "prepend-icon": "mdi-lock",
                          text: "Ficha Psicológica",
                          value: "option-2"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_tab, {
                          "prepend-icon": "mdi-access-point",
                          text: "Plan de Intervención",
                          value: "option-3"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_tab, {
                          "prepend-icon": "mdi-access-point",
                          text: "Sesiones",
                          value: "option-4"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_tab, {
                          "prepend-icon": "mdi-access-point",
                          text: "Egreso",
                          value: "option-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_tab, {
                            "prepend-icon": "mdi-account",
                            text: "Información general",
                            value: "option-1"
                          }),
                          createVNode(_component_v_tab, {
                            "prepend-icon": "mdi-lock",
                            text: "Ficha Psicológica",
                            value: "option-2"
                          }),
                          createVNode(_component_v_tab, {
                            "prepend-icon": "mdi-access-point",
                            text: "Plan de Intervención",
                            value: "option-3"
                          }),
                          createVNode(_component_v_tab, {
                            "prepend-icon": "mdi-access-point",
                            text: "Sesiones",
                            value: "option-4"
                          }),
                          createVNode(_component_v_tab, {
                            "prepend-icon": "mdi-access-point",
                            text: "Egreso",
                            value: "option-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tabs_window, {
                    modelValue: _ctx.tab,
                    "onUpdate:modelValue": ($event) => _ctx.tab = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_tabs_window_item, { value: "option-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { class: "ma-4 pa-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(InformacionGeneral, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(InformacionGeneral)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(InformacionGeneral)
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
                                createVNode(_component_v_card, { class: "ma-4 pa-4" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(InformacionGeneral)
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
                        _push4(ssrRenderComponent(_component_v_tabs_window_item, { value: "option-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(FichaPsicologia, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(FichaPsicologia)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(FichaPsicologia)
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
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(FichaPsicologia)
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
                        _push4(ssrRenderComponent(_component_v_tabs_window_item, { value: "option-3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(PlanTrabajo, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(PlanTrabajo)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(PlanTrabajo)
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
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(PlanTrabajo)
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
                        _push4(ssrRenderComponent(_component_v_tabs_window_item, { value: "option-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(TablaSesionesPsicologia, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(TablaSesionesPsicologia)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(TablaSesionesPsicologia)
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
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(TablaSesionesPsicologia)
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
                        _push4(ssrRenderComponent(_component_v_tabs_window_item, { value: "option-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(DatosEgresoPsicologia, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(DatosEgresoPsicologia)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(DatosEgresoPsicologia)
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
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(DatosEgresoPsicologia)
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
                          createVNode(_component_v_tabs_window_item, { value: "option-1" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { class: "ma-4 pa-4" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(InformacionGeneral)
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
                                      createVNode(FichaPsicologia)
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
                                      createVNode(PlanTrabajo)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tabs_window_item, { value: "option-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(TablaSesionesPsicologia)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tabs_window_item, { value: "option-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(DatosEgresoPsicologia)
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
                    createVNode(_component_v_tabs, {
                      modelValue: _ctx.tab,
                      "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                      color: "teal",
                      staked: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_tab, {
                          "prepend-icon": "mdi-account",
                          text: "Información general",
                          value: "option-1"
                        }),
                        createVNode(_component_v_tab, {
                          "prepend-icon": "mdi-lock",
                          text: "Ficha Psicológica",
                          value: "option-2"
                        }),
                        createVNode(_component_v_tab, {
                          "prepend-icon": "mdi-access-point",
                          text: "Plan de Intervención",
                          value: "option-3"
                        }),
                        createVNode(_component_v_tab, {
                          "prepend-icon": "mdi-access-point",
                          text: "Sesiones",
                          value: "option-4"
                        }),
                        createVNode(_component_v_tab, {
                          "prepend-icon": "mdi-access-point",
                          text: "Egreso",
                          value: "option-5"
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
                            createVNode(_component_v_card, { class: "ma-4 pa-4" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(InformacionGeneral)
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
                                    createVNode(FichaPsicologia)
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
                                    createVNode(PlanTrabajo)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_tabs_window_item, { value: "option-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(TablaSesionesPsicologia)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_tabs_window_item, { value: "option-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(DatosEgresoPsicologia)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
                default: withCtx(() => [
                  createTextVNode("Servicio Atención Psicológica")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_subtitle),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_tabs, {
                    modelValue: _ctx.tab,
                    "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                    color: "teal",
                    staked: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_tab, {
                        "prepend-icon": "mdi-account",
                        text: "Información general",
                        value: "option-1"
                      }),
                      createVNode(_component_v_tab, {
                        "prepend-icon": "mdi-lock",
                        text: "Ficha Psicológica",
                        value: "option-2"
                      }),
                      createVNode(_component_v_tab, {
                        "prepend-icon": "mdi-access-point",
                        text: "Plan de Intervención",
                        value: "option-3"
                      }),
                      createVNode(_component_v_tab, {
                        "prepend-icon": "mdi-access-point",
                        text: "Sesiones",
                        value: "option-4"
                      }),
                      createVNode(_component_v_tab, {
                        "prepend-icon": "mdi-access-point",
                        text: "Egreso",
                        value: "option-5"
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
                          createVNode(_component_v_card, { class: "ma-4 pa-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(InformacionGeneral)
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
                                  createVNode(FichaPsicologia)
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
                                  createVNode(PlanTrabajo)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_tabs_window_item, { value: "option-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(TablaSesionesPsicologia)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_tabs_window_item, { value: "option-5" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(DatosEgresoPsicologia)
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Sesiones-PsicologiaPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SesionesPsicologiaPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/Sesiones-PsicologiaPage.vue"]]);
export {
  SesionesPsicologiaPage as default
};
//# sourceMappingURL=Sesiones-PsicologiaPage-BELqMVBB.js.map
