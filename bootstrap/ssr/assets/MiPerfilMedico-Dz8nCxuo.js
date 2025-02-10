import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-9lGv6sW_.js";
import DatosMedicos from "./DatosMedicos-xt4YcVcO.js";
import AntecedenteFamiliar from "./AntecedenteFamiliar-BwPw23GQ.js";
import LicenciaMedica from "./LicenciaMedica-DAiyLRoB.js";
import DiatDiep from "./DiatDiep-Dq5Qs_us.js";
import Examenes from "./Examenes-BUBV9xAY.js";
import Certificaciones from "./Certificaciones-Z26n23oN.js";
import { usePage } from "@inertiajs/vue3";
import { u as useDataStore } from "./store-45BLaymI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./logo-DLUxz0ei.js";
import "vue-loading-overlay";
import "./Enfermedad-FMVzo0V2.js";
import "./helper-wNjokA2D.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "pinia";
import "./Alergia-BZ6pYMWt.js";
import "./Cirugia-Bd5AMrMI.js";
import "./FactorRiesgo-D4nsa4bW.js";
import "./Medicamento-5hFPpfY5.js";
import "./Vacuna-qVTuUfJg.js";
import "./DiatPage-D-LuK0OV.js";
import "./DiepPage-D4t53aoy.js";
import "./ExamenAlcohol-DkD9IbG4.js";
import "./ExamenAldehido-CCCtpAHW.js";
import "./ExamenAsma-D5FGgOtN.js";
import "./ExamenEPO-BVFCXc1C.js";
import "./ExamenEquilibrio-B43h-s7h.js";
import "./ExamenHumoNegro-CTbDIKYG.js";
import "./ExamenMetales-CZPdSC3Y.js";
import "./ExamenPsico-oGtWJw9V.js";
import "./ExamenPVTMERT-CfxrqBAb.js";
import "./ExamenRespirador-DVxFwfWo.js";
import "./ExamenRuido-9WIKTZHo.js";
import "./ExamenSalud-BobJGi6B.js";
import "./ExamenSilice-CGu-sMPn.js";
import "./ExamenSolvente-AwHmh2m3.js";
import "./ExamenSomnolencia-cVWz9mcG.js";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "MiPerfilMedico",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDataStore();
    const page = usePage();
    const paciente = page.props.paciente;
    store.setPaciente(paciente);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
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
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_actions, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_spacer, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`DATOS MEDICOS`);
                                        } else {
                                          return [
                                            createTextVNode("DATOS MEDICOS")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_spacer, null, {
                                        default: withCtx(() => [
                                          createTextVNode("DATOS MEDICOS")
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
                                    createVNode(_component_v_spacer, null, {
                                      default: withCtx(() => [
                                        createTextVNode("DATOS MEDICOS")
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
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_spacer, null, {
                                    default: withCtx(() => [
                                      createTextVNode("DATOS MEDICOS")
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
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_actions, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_spacer, null, {
                                  default: withCtx(() => [
                                    createTextVNode("DATOS MEDICOS")
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
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_spacer, null, {
                                default: withCtx(() => [
                                  createTextVNode("DATOS MEDICOS")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Paciente/MiPerfilMedico.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MiPerfilMedico = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/Paciente/MiPerfilMedico.vue"]]);
export {
  MiPerfilMedico as default
};
//# sourceMappingURL=MiPerfilMedico-Dz8nCxuo.js.map
