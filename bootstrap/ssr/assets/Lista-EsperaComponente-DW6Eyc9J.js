import { ref, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Lista-EsperaComponente",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = ref([
      { title: "RUT", text: "RUT", value: "rut" },
      { title: "N° Solicitud", text: "Número de Solicitud", value: "numeroSolicitud" },
      { title: "Fecha", text: "Fecha de Solicitud", sortable: true, value: "fechaSolicitud" },
      { title: "Especialidad", text: "Especialidad", sortable: true, value: "especialidad" },
      { text: "Acciones", value: "actions", sortable: false }
    ]);
    const pacientes = ref([
      {
        id: 1,
        rut: "12345678-9",
        numeroSolicitud: "001",
        fechaSolicitud: "2023-10-01",
        especialidad: "Cardiología"
      },
      {
        id: 2,
        rut: "98765432-1",
        numeroSolicitud: "002",
        fechaSolicitud: "2023-10-02",
        especialidad: "Dermatología"
      },
      {
        id: 3,
        rut: "11223344-5",
        numeroSolicitud: "003",
        fechaSolicitud: "2023-10-03",
        especialidad: "Neurología"
      }
    ]);
    const verSolicitud = (item) => {
      console.log("Ver solicitud:", item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pacientes en Lista de Espera`);
                } else {
                  return [
                    createTextVNode("Pacientes en Lista de Espera")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_data_table, {
                    headers: headers.value,
                    items: pacientes.value,
                    "item-value": "id",
                    class: "elevation-1"
                  }, {
                    [`item.actions`]: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          onClick: ($event) => verSolicitud(item),
                          icon: ""
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-eye`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-eye")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-eye")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "primary",
                            onClick: ($event) => verSolicitud(item),
                            icon: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-eye")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_data_table, {
                      headers: headers.value,
                      items: pacientes.value,
                      "item-value": "id",
                      class: "elevation-1"
                    }, {
                      [`item.actions`]: withCtx(({ item }) => [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          onClick: ($event) => verSolicitud(item),
                          icon: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-eye")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["headers", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_title, null, {
                default: withCtx(() => [
                  createTextVNode("Pacientes en Lista de Espera")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_data_table, {
                    headers: headers.value,
                    items: pacientes.value,
                    "item-value": "id",
                    class: "elevation-1"
                  }, {
                    [`item.actions`]: withCtx(({ item }) => [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        onClick: ($event) => verSolicitud(item),
                        icon: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-eye")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1032, ["headers", "items"])
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/Lista-EsperaComponente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListaEspera = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-831f9af4"], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/Componentes/Lista-EsperaComponente.vue"]]);
export {
  ListaEspera as default
};
//# sourceMappingURL=Lista-EsperaComponente-DW6Eyc9J.js.map
