import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-luvqOq1Z.js";
import DashPersEmpresa from "./DashPersEmpresa-BXN-O77q.js";
import DashPersPlanta from "./DashPersPlanta-hDEDt7Uj.js";
import DashCecos from "./DashCecos-BJaFAP2P.js";
import DashExpoEmpresa from "./DashExpoEmpresa-DXETIzYq.js";
import DashExpoPlanta from "./DashExpoPlanta-nbXOz4GR.js";
import DashEnfermedadEmpresa from "./DashEnfermedadEmpresa-Dauu_H9R.js";
import DashEnfermedadPlanta from "./DashEnfermedadPlanta-gA4H0Se5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./logo-DLUxz0ei.js";
import "vue-chartjs";
import "chartjs-plugin-autocolors";
import "chart.js";
import "axios";
import "./helper-IGAgQiIS.js";
import "sweetalert2/dist/sweetalert2.js";
import "@kyvg/vue3-notification";
import "./store-BqtSnK9e.js";
import "pinia";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, { class: "ma-4 pa-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h6 ma-2"${_scopeId2}>Dashboard</div>`);
                  _push3(ssrRenderComponent(_component_v_divider, {
                    thickness: "4px",
                    color: "#009AA4"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          align: "center",
                          class: "ma-4 pa-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h3${_scopeId4}>Colaboradores por Empresa</h3>`);
                              _push5(ssrRenderComponent(DashPersEmpresa, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h3", null, "Colaboradores por Empresa"),
                                createVNode(DashPersEmpresa)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          align: "center",
                          class: "ma-4 pa-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h3${_scopeId4}>Colaboradores por Planta</h3>`);
                              _push5(ssrRenderComponent(DashPersPlanta, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h3", null, "Colaboradores por Planta"),
                                createVNode(DashPersPlanta)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            align: "center",
                            class: "ma-4 pa-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", null, "Colaboradores por Empresa"),
                              createVNode(DashPersEmpresa)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            align: "center",
                            class: "ma-4 pa-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", null, "Colaboradores por Planta"),
                              createVNode(DashPersPlanta)
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
                    createVNode("div", { class: "text-h6 ma-2" }, "Dashboard"),
                    createVNode(_component_v_divider, {
                      thickness: "4px",
                      color: "#009AA4"
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          align: "center",
                          class: "ma-4 pa-4"
                        }, {
                          default: withCtx(() => [
                            createVNode("h3", null, "Colaboradores por Empresa"),
                            createVNode(DashPersEmpresa)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          align: "center",
                          class: "ma-4 pa-4"
                        }, {
                          default: withCtx(() => [
                            createVNode("h3", null, "Colaboradores por Planta"),
                            createVNode(DashPersPlanta)
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
            _push2(ssrRenderComponent(_component_v_sheet, { class: "ma-4 pa-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          align: "center",
                          class: "ma-4 pa-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h3${_scopeId4}>Colaboradores por Centro de Costo</h3>`);
                              _push5(ssrRenderComponent(DashCecos, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h3", null, "Colaboradores por Centro de Costo"),
                                createVNode(DashCecos)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { align: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h3${_scopeId4}>Exposiciones por Empresa</h3>`);
                              _push5(ssrRenderComponent(DashExpoEmpresa, null, null, _parent5, _scopeId4));
                              _push5(`<h3${_scopeId4}>Exposiciones por Planta</h3>`);
                              _push5(ssrRenderComponent(DashExpoPlanta, null, null, _parent5, _scopeId4));
                              _push5(`<h3${_scopeId4}>Enfermedades por Empresa</h3>`);
                              _push5(ssrRenderComponent(DashEnfermedadEmpresa, null, null, _parent5, _scopeId4));
                              _push5(`<h3${_scopeId4}>Enfermedades por Planta</h3>`);
                              _push5(ssrRenderComponent(DashEnfermedadPlanta, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h3", null, "Exposiciones por Empresa"),
                                createVNode(DashExpoEmpresa),
                                createVNode("h3", null, "Exposiciones por Planta"),
                                createVNode(DashExpoPlanta),
                                createVNode("h3", null, "Enfermedades por Empresa"),
                                createVNode(DashEnfermedadEmpresa),
                                createVNode("h3", null, "Enfermedades por Planta"),
                                createVNode(DashEnfermedadPlanta)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            align: "center",
                            class: "ma-4 pa-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", null, "Colaboradores por Centro de Costo"),
                              createVNode(DashCecos)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { align: "center" }, {
                            default: withCtx(() => [
                              createVNode("h3", null, "Exposiciones por Empresa"),
                              createVNode(DashExpoEmpresa),
                              createVNode("h3", null, "Exposiciones por Planta"),
                              createVNode(DashExpoPlanta),
                              createVNode("h3", null, "Enfermedades por Empresa"),
                              createVNode(DashEnfermedadEmpresa),
                              createVNode("h3", null, "Enfermedades por Planta"),
                              createVNode(DashEnfermedadPlanta)
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
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          align: "center",
                          class: "ma-4 pa-4"
                        }, {
                          default: withCtx(() => [
                            createVNode("h3", null, "Colaboradores por Centro de Costo"),
                            createVNode(DashCecos)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { align: "center" }, {
                          default: withCtx(() => [
                            createVNode("h3", null, "Exposiciones por Empresa"),
                            createVNode(DashExpoEmpresa),
                            createVNode("h3", null, "Exposiciones por Planta"),
                            createVNode(DashExpoPlanta),
                            createVNode("h3", null, "Enfermedades por Empresa"),
                            createVNode(DashEnfermedadEmpresa),
                            createVNode("h3", null, "Enfermedades por Planta"),
                            createVNode(DashEnfermedadPlanta)
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
              createVNode(_component_v_sheet, { class: "ma-4 pa-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-h6 ma-2" }, "Dashboard"),
                  createVNode(_component_v_divider, {
                    thickness: "4px",
                    color: "#009AA4"
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        align: "center",
                        class: "ma-4 pa-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", null, "Colaboradores por Empresa"),
                          createVNode(DashPersEmpresa)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        align: "center",
                        class: "ma-4 pa-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", null, "Colaboradores por Planta"),
                          createVNode(DashPersPlanta)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_sheet, { class: "ma-4 pa-4" }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        align: "center",
                        class: "ma-4 pa-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", null, "Colaboradores por Centro de Costo"),
                          createVNode(DashCecos)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { align: "center" }, {
                        default: withCtx(() => [
                          createVNode("h3", null, "Exposiciones por Empresa"),
                          createVNode(DashExpoEmpresa),
                          createVNode("h3", null, "Exposiciones por Planta"),
                          createVNode(DashExpoPlanta),
                          createVNode("h3", null, "Enfermedades por Empresa"),
                          createVNode(DashEnfermedadEmpresa),
                          createVNode("h3", null, "Enfermedades por Planta"),
                          createVNode(DashEnfermedadPlanta)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/app-empresas/resources/js/Pages/Dashboard.vue"]]);
export {
  Dashboard as default
};
//# sourceMappingURL=Dashboard-jATsRn5p.js.map
