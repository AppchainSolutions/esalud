import { resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BAqKt_GD.js";
import DatosMedicos from "./DatosMedicos-BWXaLRJn.js";
import AntecedenteFamiliar from "./AntecedenteFamiliar-GLATBLyF.js";
import LicenciaMedica from "./LicenciaMedica-BOux_39E.js";
import DiatDiep from "./DiatDiep-B2iwGApO.js";
import Examenes from "./Examenes-Cf33RfYr.js";
import Certificaciones from "./Certificaciones-D5Q1GEuT.js";
import { router } from "@inertiajs/vue3";
import { u as useDataStore } from "./store-BqtSnK9e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./logo-DLUxz0ei.js";
import "./Enfermedad-CHnT6ESH.js";
import "./helper-DiILlF-8.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "pinia";
import "./Alergia-BIrbEet0.js";
import "./Cirugia-C7FLm7aI.js";
import "./FactorRiesgo-C6PBJRnB.js";
import "./Medicamento-ClGMtMRA.js";
import "./Vacuna-EFfx_pR8.js";
import "./DiatPage-lbdpXwIs.js";
import "./DiepPage-CDYlsBEx.js";
import "./ExamenAlcohol-Dfj4-FZ7.js";
import "./ExamenAldehido-DrCCboBJ.js";
import "./ExamenEPO-B_DtyN66.js";
import "./ExamenEquilibrio-CNbKVJJa.js";
import "./ExamenHumoNegro-CJ5kAPLw.js";
import "./ExamenMetales-BhmdH5cn.js";
import "./ExamenPsico-DIRcZLq_.js";
import "./ExamenPVTMERT-D1qQOwMV.js";
import "./ExamenRespirador-2KH97xKT.js";
import "./ExamenRuido-Daw01nBx.js";
import "./ExamenSalud-Cb9RNe5M.js";
import "./ExamenSilice-rloQF5Lq.js";
import "./ExamenSolvente-BhOT3kQr.js";
import "./ExamenSomnolencia-Dy7PWiNN.js";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "FichaMedica",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDataStore();
    const nombre = store.getSelected.nombre;
    const apellidos = store.getSelected.apellidos;
    const volver = () => {
      router.get("paciente");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_stepper = resolveComponent("v-stepper");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { "min-width": "500" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_title, { class: "justify-space-between" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Información del Paciente: ${ssrInterpolate(unref(apellidos))}, ${ssrInterpolate(unref(nombre))}`);
                            } else {
                              return [
                                createTextVNode("Información del Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_actions, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      variant: "tonal",
                                      color: "#662D91",
                                      onClick: volver
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Volver `);
                                        } else {
                                          return [
                                            createTextVNode(" Volver ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_btn, {
                                        variant: "tonal",
                                        color: "#662D91",
                                        onClick: volver
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Volver ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_stepper, {
                                editable: "",
                                "alt-labels": "",
                                "hide-actions": "",
                                items: [
                                  "Datos Medicos",
                                  "Datos Familiares",
                                  "Licencias Médicas",
                                  "DIAT/DIEP",
                                  "Exámenes",
                                  "Certificaciones"
                                ]
                              }, {
                                "item.1": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(DatosMedicos, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(DatosMedicos)
                                    ];
                                  }
                                }),
                                "item.2": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(AntecedenteFamiliar, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(AntecedenteFamiliar)
                                    ];
                                  }
                                }),
                                "item.3": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(LicenciaMedica, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(LicenciaMedica)
                                    ];
                                  }
                                }),
                                "item.4": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(DiatDiep, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(DiatDiep)
                                    ];
                                  }
                                }),
                                "item.5": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(Examenes, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(Examenes)
                                    ];
                                  }
                                }),
                                "item.6": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(Certificaciones, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(Certificaciones)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_btn, {
                                      variant: "tonal",
                                      color: "#662D91",
                                      onClick: volver
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Volver ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_stepper, {
                                  editable: "",
                                  "alt-labels": "",
                                  "hide-actions": "",
                                  items: [
                                    "Datos Medicos",
                                    "Datos Familiares",
                                    "Licencias Médicas",
                                    "DIAT/DIEP",
                                    "Exámenes",
                                    "Certificaciones"
                                  ]
                                }, {
                                  "item.1": withCtx(() => [
                                    createVNode(DatosMedicos)
                                  ]),
                                  "item.2": withCtx(() => [
                                    createVNode(AntecedenteFamiliar)
                                  ]),
                                  "item.3": withCtx(() => [
                                    createVNode(LicenciaMedica)
                                  ]),
                                  "item.4": withCtx(() => [
                                    createVNode(DiatDiep)
                                  ]),
                                  "item.5": withCtx(() => [
                                    createVNode(Examenes)
                                  ]),
                                  "item.6": withCtx(() => [
                                    createVNode(Certificaciones)
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
                          createVNode(_component_v_card_title, { class: "justify-space-between" }, {
                            default: withCtx(() => [
                              createTextVNode("Información del Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_btn, {
                                    variant: "tonal",
                                    color: "#662D91",
                                    onClick: volver
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Volver ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_stepper, {
                                editable: "",
                                "alt-labels": "",
                                "hide-actions": "",
                                items: [
                                  "Datos Medicos",
                                  "Datos Familiares",
                                  "Licencias Médicas",
                                  "DIAT/DIEP",
                                  "Exámenes",
                                  "Certificaciones"
                                ]
                              }, {
                                "item.1": withCtx(() => [
                                  createVNode(DatosMedicos)
                                ]),
                                "item.2": withCtx(() => [
                                  createVNode(AntecedenteFamiliar)
                                ]),
                                "item.3": withCtx(() => [
                                  createVNode(LicenciaMedica)
                                ]),
                                "item.4": withCtx(() => [
                                  createVNode(DiatDiep)
                                ]),
                                "item.5": withCtx(() => [
                                  createVNode(Examenes)
                                ]),
                                "item.6": withCtx(() => [
                                  createVNode(Certificaciones)
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
                    createVNode(_component_v_card, { "min-width": "500" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "justify-space-between" }, {
                          default: withCtx(() => [
                            createTextVNode("Información del Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_actions, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_btn, {
                                  variant: "tonal",
                                  color: "#662D91",
                                  onClick: volver
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Volver ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_stepper, {
                              editable: "",
                              "alt-labels": "",
                              "hide-actions": "",
                              items: [
                                "Datos Medicos",
                                "Datos Familiares",
                                "Licencias Médicas",
                                "DIAT/DIEP",
                                "Exámenes",
                                "Certificaciones"
                              ]
                            }, {
                              "item.1": withCtx(() => [
                                createVNode(DatosMedicos)
                              ]),
                              "item.2": withCtx(() => [
                                createVNode(AntecedenteFamiliar)
                              ]),
                              "item.3": withCtx(() => [
                                createVNode(LicenciaMedica)
                              ]),
                              "item.4": withCtx(() => [
                                createVNode(DiatDiep)
                              ]),
                              "item.5": withCtx(() => [
                                createVNode(Examenes)
                              ]),
                              "item.6": withCtx(() => [
                                createVNode(Certificaciones)
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
              createVNode(_component_v_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { "min-width": "500" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { class: "justify-space-between" }, {
                        default: withCtx(() => [
                          createTextVNode("Información del Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_btn, {
                                variant: "tonal",
                                color: "#662D91",
                                onClick: volver
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Volver ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_stepper, {
                            editable: "",
                            "alt-labels": "",
                            "hide-actions": "",
                            items: [
                              "Datos Medicos",
                              "Datos Familiares",
                              "Licencias Médicas",
                              "DIAT/DIEP",
                              "Exámenes",
                              "Certificaciones"
                            ]
                          }, {
                            "item.1": withCtx(() => [
                              createVNode(DatosMedicos)
                            ]),
                            "item.2": withCtx(() => [
                              createVNode(AntecedenteFamiliar)
                            ]),
                            "item.3": withCtx(() => [
                              createVNode(LicenciaMedica)
                            ]),
                            "item.4": withCtx(() => [
                              createVNode(DiatDiep)
                            ]),
                            "item.5": withCtx(() => [
                              createVNode(Examenes)
                            ]),
                            "item.6": withCtx(() => [
                              createVNode(Certificaciones)
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/FichaMedica.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FichaMedica = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/FichaMedica.vue"]]);
export {
  FichaMedica as default
};
//# sourceMappingURL=FichaMedica-CvduNBPk.js.map
