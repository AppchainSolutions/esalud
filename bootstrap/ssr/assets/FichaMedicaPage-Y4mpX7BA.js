import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BSqGFl1_.js";
import DatosMedicos from "./DatosMedicosPage-DBougLQx.js";
import AntecedenteFamiliar from "./AntecedenteFamiliarPage-x36Tf8GS.js";
import ContextoSocioEconomico from "./ContextoPage-D9viTkJ4.js";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VStepper } from "vuetify/lib/components/VStepper/index.mjs";
import "vue-loading-overlay";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VDivider/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
import "./EnfermedadPage-BI6rTWRH.js";
import "./store-CHGALank.js";
import "pinia";
import "./helper-zbPMJdu3.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "vue-logger-plugin";
import "vuetify/lib/components/VDataTable/index.mjs";
import "vuetify/lib/components/VDialog/index.mjs";
import "vuetify/lib/components/VTextField/index.mjs";
import "vuetify/lib/components/VToolbar/index.mjs";
import "vuetify/lib/components/VTooltip/index.mjs";
import "./AlergiaPage-DM04g37U.js";
import "vuetify/lib/components/VForm/index.mjs";
import "./CirugiaPage-BiriSG6D.js";
import "./FactorRiesgoPage-B8MyeV5z.js";
import "./MedicamentoPage-QSgFVDZn.js";
import "./VacunaPage-CqowjNC5.js";
import "vuetify/lib/components/VSheet/index.mjs";
import "vuetify/lib/components/VSelect/index.mjs";
import "vuetify/lib/components/VSwitch/index.mjs";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "FichaMedicaPage",
  __ssrInlineRender: true,
  setup(__props) {
    const volver = () => {
      router.get("/paciente");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { "min-width": "500" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardActions, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
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
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
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
                              _push5(ssrRenderComponent(VStepper, {
                                editable: "",
                                "alt-labels": "",
                                "hide-actions": "",
                                items: [
                                  "Datos Medicos",
                                  "Datos Familiares",
                                  "Contexto Socioeconómico"
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
                                    _push6(ssrRenderComponent(ContextoSocioEconomico, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(ContextoSocioEconomico)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardActions, null, {
                                  default: withCtx(() => [
                                    createVNode(VSpacer),
                                    createVNode(VBtn, {
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
                                createVNode(VStepper, {
                                  editable: "",
                                  "alt-labels": "",
                                  "hide-actions": "",
                                  items: [
                                    "Datos Medicos",
                                    "Datos Familiares",
                                    "Contexto Socioeconómico"
                                  ]
                                }, {
                                  "item.1": withCtx(() => [
                                    createVNode(DatosMedicos)
                                  ]),
                                  "item.2": withCtx(() => [
                                    createVNode(AntecedenteFamiliar)
                                  ]),
                                  "item.3": withCtx(() => [
                                    createVNode(ContextoSocioEconomico)
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
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VCardActions, null, {
                                default: withCtx(() => [
                                  createVNode(VSpacer),
                                  createVNode(VBtn, {
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
                              createVNode(VStepper, {
                                editable: "",
                                "alt-labels": "",
                                "hide-actions": "",
                                items: [
                                  "Datos Medicos",
                                  "Datos Familiares",
                                  "Contexto Socioeconómico"
                                ]
                              }, {
                                "item.1": withCtx(() => [
                                  createVNode(DatosMedicos)
                                ]),
                                "item.2": withCtx(() => [
                                  createVNode(AntecedenteFamiliar)
                                ]),
                                "item.3": withCtx(() => [
                                  createVNode(ContextoSocioEconomico)
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
                    createVNode(VCard, { "min-width": "500" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(VSpacer),
                                createVNode(VBtn, {
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
                            createVNode(VStepper, {
                              editable: "",
                              "alt-labels": "",
                              "hide-actions": "",
                              items: [
                                "Datos Medicos",
                                "Datos Familiares",
                                "Contexto Socioeconómico"
                              ]
                            }, {
                              "item.1": withCtx(() => [
                                createVNode(DatosMedicos)
                              ]),
                              "item.2": withCtx(() => [
                                createVNode(AntecedenteFamiliar)
                              ]),
                              "item.3": withCtx(() => [
                                createVNode(ContextoSocioEconomico)
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
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCard, { "min-width": "500" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(VBtn, {
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
                          createVNode(VStepper, {
                            editable: "",
                            "alt-labels": "",
                            "hide-actions": "",
                            items: [
                              "Datos Medicos",
                              "Datos Familiares",
                              "Contexto Socioeconómico"
                            ]
                          }, {
                            "item.1": withCtx(() => [
                              createVNode(DatosMedicos)
                            ]),
                            "item.2": withCtx(() => [
                              createVNode(AntecedenteFamiliar)
                            ]),
                            "item.3": withCtx(() => [
                              createVNode(ContextoSocioEconomico)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/FichaMedicaPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FichaMedicaPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/FichaMedicaPage.vue"]]);
export {
  FichaMedicaPage as default
};
//# sourceMappingURL=FichaMedicaPage-Y4mpX7BA.js.map