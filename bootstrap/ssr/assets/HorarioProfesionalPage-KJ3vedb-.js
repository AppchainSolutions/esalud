import { resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "HorarioTable",
  data() {
    return {
      headers: [
        { text: "Día de la semana", align: "center", sortable: true, value: "dia" },
        { text: "Hora inicio", align: "center", sortable: true, value: "horaInicio" },
        { text: "Hora término", align: "center", sortable: true, value: "horaTermino" },
        { text: "Disponible (S/N)", align: "center", sortable: true, value: "disponible" }
      ],
      items: [
        { dia: "Lunes", horaInicio: "08:00", horaTermino: "17:00", disponible: "S" },
        { dia: "Martes", horaInicio: "08:00", horaTermino: "17:00", disponible: "N" }
        // Agrega más filas según sea necesario
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_data_table = resolveComponent("v-data-table");
  const _component_v_toolbar = resolveComponent("v-toolbar");
  const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_chip = resolveComponent("v-chip");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_data_table, {
          headers: $data.headers,
          items: $data.items,
          class: "elevation-1"
        }, {
          top: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_toolbar, { flat: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_toolbar_title, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Horario de Disponibilidad`);
                        } else {
                          return [
                            createTextVNode("Horario de Disponibilidad")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_divider, {
                      class: "mx-4",
                      inset: "",
                      vertical: ""
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_toolbar_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Horario de Disponibilidad")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, {
                        class: "mx-4",
                        inset: "",
                        vertical: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_toolbar, { flat: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_toolbar_title, null, {
                      default: withCtx(() => [
                        createTextVNode("Horario de Disponibilidad")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider, {
                      class: "mx-4",
                      inset: "",
                      vertical: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          "item.disponible": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_chip, {
                color: item.disponible === "S" ? "green" : "red",
                dark: ""
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(item.disponible)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.disponible), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_chip, {
                  color: item.disponible === "S" ? "green" : "red",
                  dark: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.disponible), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_data_table, {
            headers: $data.headers,
            items: $data.items,
            class: "elevation-1"
          }, {
            top: withCtx(() => [
              createVNode(_component_v_toolbar, { flat: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar_title, null, {
                    default: withCtx(() => [
                      createTextVNode("Horario de Disponibilidad")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider, {
                    class: "mx-4",
                    inset: "",
                    vertical: ""
                  })
                ]),
                _: 1
              })
            ]),
            "item.disponible": withCtx(({ item }) => [
              createVNode(_component_v_chip, {
                color: item.disponible === "S" ? "green" : "red",
                dark: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.disponible), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ]),
            _: 1
          }, 8, ["headers", "items"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/HorarioProfesionalPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HorarioProfesionalPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-941f2769"], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/HorarioProfesionalPage.vue"]]);
export {
  HorarioProfesionalPage as default
};
//# sourceMappingURL=HorarioProfesionalPage-KJ3vedb-.js.map