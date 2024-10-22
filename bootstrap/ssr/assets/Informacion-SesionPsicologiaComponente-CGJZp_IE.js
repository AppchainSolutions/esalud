import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardSubtitle, VCardText } from "vuetify/lib/components/VCard/index.mjs";
import { VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "bg-surface-light pt-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Información General`);
            } else {
              return [
                createTextVNode("Información General")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardSubtitle, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<ol class="${ssrRenderClass("ml-4")}"${_scopeId4}><li${_scopeId4}>Nombre Completo: XXX</li><li${_scopeId4}>Edad: 14 años</li><li${_scopeId4}>Teléfono: +569 98765432</li><li${_scopeId4}>Establecimiento Educacional: Humberto Moath</li><li${_scopeId4}>Derivado por: Profesora</li><li${_scopeId4}>Persona responsable: Luisa (Mamá)</li></ol>`);
                          _push5(ssrRenderComponent(VBtn, {
                            density: "compact",
                            class: "ma-4 ma-4",
                            color: "#009AA4",
                            variant: "tonal"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Ver Ficha del Paciente`);
                              } else {
                                return [
                                  createTextVNode("Ver Ficha del Paciente")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode("ol", { class: "ml-4" }, [
                              createVNode("li", null, "Nombre Completo: XXX"),
                              createVNode("li", null, "Edad: 14 años"),
                              createVNode("li", null, "Teléfono: +569 98765432"),
                              createVNode("li", null, "Establecimiento Educacional: Humberto Moath"),
                              createVNode("li", null, "Derivado por: Profesora"),
                              createVNode("li", null, "Persona responsable: Luisa (Mamá)")
                            ]),
                            createVNode(VBtn, {
                              density: "compact",
                              class: "ma-4 ma-4",
                              color: "#009AA4",
                              variant: "tonal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ver Ficha del Paciente")
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
                          _push5(`<h3${_scopeId4}>Fecha: 03/10/2024</h3><h3${_scopeId4}>Hora actual:</h3> 08:30 <h3${_scopeId4}> Horarios asignados al paciente: </h3><ol class="${ssrRenderClass("ml-4")}"${_scopeId4}><li${_scopeId4}>Lunes: 08:00 - 17:00</li></ol>`);
                        } else {
                          return [
                            createVNode("h3", null, "Fecha: 03/10/2024"),
                            createVNode("h3", null, "Hora actual:"),
                            createTextVNode(" 08:30 "),
                            createVNode("h3", null, " Horarios asignados al paciente: "),
                            createVNode("ol", { class: "ml-4" }, [
                              createVNode("li", null, "Lunes: 08:00 - 17:00")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("ol", { class: "ml-4" }, [
                            createVNode("li", null, "Nombre Completo: XXX"),
                            createVNode("li", null, "Edad: 14 años"),
                            createVNode("li", null, "Teléfono: +569 98765432"),
                            createVNode("li", null, "Establecimiento Educacional: Humberto Moath"),
                            createVNode("li", null, "Derivado por: Profesora"),
                            createVNode("li", null, "Persona responsable: Luisa (Mamá)")
                          ]),
                          createVNode(VBtn, {
                            density: "compact",
                            class: "ma-4 ma-4",
                            color: "#009AA4",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ver Ficha del Paciente")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("h3", null, "Fecha: 03/10/2024"),
                          createVNode("h3", null, "Hora actual:"),
                          createTextVNode(" 08:30 "),
                          createVNode("h3", null, " Horarios asignados al paciente: "),
                          createVNode("ol", { class: "ml-4" }, [
                            createVNode("li", null, "Lunes: 08:00 - 17:00")
                          ])
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
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("ol", { class: "ml-4" }, [
                          createVNode("li", null, "Nombre Completo: XXX"),
                          createVNode("li", null, "Edad: 14 años"),
                          createVNode("li", null, "Teléfono: +569 98765432"),
                          createVNode("li", null, "Establecimiento Educacional: Humberto Moath"),
                          createVNode("li", null, "Derivado por: Profesora"),
                          createVNode("li", null, "Persona responsable: Luisa (Mamá)")
                        ]),
                        createVNode(VBtn, {
                          density: "compact",
                          class: "ma-4 ma-4",
                          color: "#009AA4",
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Ver Ficha del Paciente")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("h3", null, "Fecha: 03/10/2024"),
                        createVNode("h3", null, "Hora actual:"),
                        createTextVNode(" 08:30 "),
                        createVNode("h3", null, " Horarios asignados al paciente: "),
                        createVNode("ol", { class: "ml-4" }, [
                          createVNode("li", null, "Lunes: 08:00 - 17:00")
                        ])
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
          createVNode(VCardTitle, { class: "bg-surface-light pt-4" }, {
            default: withCtx(() => [
              createTextVNode("Información General")
            ]),
            _: 1
          }),
          createVNode(VCardSubtitle),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("ol", { class: "ml-4" }, [
                        createVNode("li", null, "Nombre Completo: XXX"),
                        createVNode("li", null, "Edad: 14 años"),
                        createVNode("li", null, "Teléfono: +569 98765432"),
                        createVNode("li", null, "Establecimiento Educacional: Humberto Moath"),
                        createVNode("li", null, "Derivado por: Profesora"),
                        createVNode("li", null, "Persona responsable: Luisa (Mamá)")
                      ]),
                      createVNode(VBtn, {
                        density: "compact",
                        class: "ma-4 ma-4",
                        color: "#009AA4",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Ver Ficha del Paciente")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("h3", null, "Fecha: 03/10/2024"),
                      createVNode("h3", null, "Hora actual:"),
                      createTextVNode(" 08:30 "),
                      createVNode("h3", null, " Horarios asignados al paciente: "),
                      createVNode("ol", { class: "ml-4" }, [
                        createVNode("li", null, "Lunes: 08:00 - 17:00")
                      ])
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/Informacion-SesionPsicologiaComponente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InformacionGeneral = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/Componentes/Informacion-SesionPsicologiaComponente.vue"]]);
export {
  InformacionGeneral as default
};
//# sourceMappingURL=Informacion-SesionPsicologiaComponente-CGJZp_IE.js.map
