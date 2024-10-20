import { reactive, computed, resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useDataStore } from "./store-CHGALank.js";
import "./helper-DlyAxSqm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = {
  __name: "ContextoPage",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    const state = reactive({
      headers: [
        {
          title: "Parentesco",
          align: "start",
          sortable: true,
          key: "parentesco"
        },
        { title: "Patología", key: "patologia", sortable: false },
        { title: "Acciones", align: "center", key: "actions" }
      ],
      editedItem: {
        parentesco: null,
        patologia: null,
        comentario: null
      },
      defaultItem: {
        paciente_id: null,
        parentesco: null,
        patologia: null,
        comentario: null
      },
      searchQuery: {
        paciente_id: null
      },
      dialog: false,
      tableItems: [],
      editedIndex: -1,
      list: [],
      loading: false,
      valid: null,
      formTitle: "Contexto",
      formCrear: "Nuevo Antecedente Familiar",
      formEdit: "Editar Antecedentes Familiares",
      urlShow: "/contexto/show",
      urlUpdate: "/contexto/update",
      urlDelete: "/contexto/delete",
      urlStore: "/contexto"
    });
    computed(
      () => state.editedIndex === -1 ? state.formCrear : state.formEdit
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_switch = resolveComponent("v-switch");
      _push(ssrRenderComponent(_component_v_container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_select, {
                          items: [
                            "Urbano",
                            "Rural",
                            "Otro"
                          ],
                          clearable: "",
                          label: "Tipo de Vivienda",
                          variant: "underlined",
                          single: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_select, {
                          items: [
                            "Sector 1",
                            "Sector 2",
                            "Sector 3"
                          ],
                          clearable: "",
                          label: "Sector",
                          variant: "underlined",
                          single: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_select, {
                          clearable: "",
                          chips: "",
                          label: "Servicios básicos",
                          items: ["Luz", "Agua", "Gas"],
                          multiple: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_select, {
                            items: [
                              "Urbano",
                              "Rural",
                              "Otro"
                            ],
                            clearable: "",
                            label: "Tipo de Vivienda",
                            variant: "underlined",
                            single: ""
                          }),
                          createVNode(_component_v_select, {
                            items: [
                              "Sector 1",
                              "Sector 2",
                              "Sector 3"
                            ],
                            clearable: "",
                            label: "Sector",
                            variant: "underlined",
                            single: ""
                          }),
                          createVNode(_component_v_select, {
                            clearable: "",
                            chips: "",
                            label: "Servicios básicos",
                            items: ["Luz", "Agua", "Gas"],
                            multiple: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_select, {
                          clearable: "",
                          chips: "",
                          label: "Material Vivienda",
                          items: ["Sólida", "Madera", "Ladrillo", "Otro"],
                          multiple: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_select, {
                          clearable: "",
                          chips: "",
                          label: "Fuente de Ingresos",
                          items: ["Padre", "Madre", "Hijos/s", "Otro"],
                          multiple: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_switch, {
                          "hide-details": "",
                          class: "ml-4",
                          variant: "underlined",
                          color: "green-darken-3",
                          inset: "",
                          label: "La vivienda posee riesgos estructurales"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_select, {
                            clearable: "",
                            chips: "",
                            label: "Material Vivienda",
                            items: ["Sólida", "Madera", "Ladrillo", "Otro"],
                            multiple: ""
                          }),
                          createVNode(_component_v_select, {
                            clearable: "",
                            chips: "",
                            label: "Fuente de Ingresos",
                            items: ["Padre", "Madre", "Hijos/s", "Otro"],
                            multiple: ""
                          }),
                          createVNode(_component_v_switch, {
                            "hide-details": "",
                            class: "ml-4",
                            variant: "underlined",
                            color: "green-darken-3",
                            inset: "",
                            label: "La vivienda posee riesgos estructurales"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_select, {
                          items: [
                            "Urbano",
                            "Rural",
                            "Otro"
                          ],
                          clearable: "",
                          label: "Tipo de Vivienda",
                          variant: "underlined",
                          single: ""
                        }),
                        createVNode(_component_v_select, {
                          items: [
                            "Sector 1",
                            "Sector 2",
                            "Sector 3"
                          ],
                          clearable: "",
                          label: "Sector",
                          variant: "underlined",
                          single: ""
                        }),
                        createVNode(_component_v_select, {
                          clearable: "",
                          chips: "",
                          label: "Servicios básicos",
                          items: ["Luz", "Agua", "Gas"],
                          multiple: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_select, {
                          clearable: "",
                          chips: "",
                          label: "Material Vivienda",
                          items: ["Sólida", "Madera", "Ladrillo", "Otro"],
                          multiple: ""
                        }),
                        createVNode(_component_v_select, {
                          clearable: "",
                          chips: "",
                          label: "Fuente de Ingresos",
                          items: ["Padre", "Madre", "Hijos/s", "Otro"],
                          multiple: ""
                        }),
                        createVNode(_component_v_switch, {
                          "hide-details": "",
                          class: "ml-4",
                          variant: "underlined",
                          color: "green-darken-3",
                          inset: "",
                          label: "La vivienda posee riesgos estructurales"
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
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_select, {
                        items: [
                          "Urbano",
                          "Rural",
                          "Otro"
                        ],
                        clearable: "",
                        label: "Tipo de Vivienda",
                        variant: "underlined",
                        single: ""
                      }),
                      createVNode(_component_v_select, {
                        items: [
                          "Sector 1",
                          "Sector 2",
                          "Sector 3"
                        ],
                        clearable: "",
                        label: "Sector",
                        variant: "underlined",
                        single: ""
                      }),
                      createVNode(_component_v_select, {
                        clearable: "",
                        chips: "",
                        label: "Servicios básicos",
                        items: ["Luz", "Agua", "Gas"],
                        multiple: ""
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_select, {
                        clearable: "",
                        chips: "",
                        label: "Material Vivienda",
                        items: ["Sólida", "Madera", "Ladrillo", "Otro"],
                        multiple: ""
                      }),
                      createVNode(_component_v_select, {
                        clearable: "",
                        chips: "",
                        label: "Fuente de Ingresos",
                        items: ["Padre", "Madre", "Hijos/s", "Otro"],
                        multiple: ""
                      }),
                      createVNode(_component_v_switch, {
                        "hide-details": "",
                        class: "ml-4",
                        variant: "underlined",
                        color: "green-darken-3",
                        inset: "",
                        label: "La vivienda posee riesgos estructurales"
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/ContextoPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContextoSocioEconomico = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/ContextoPage.vue"]]);
export {
  ContextoSocioEconomico as default
};
//# sourceMappingURL=ContextoPage-D1i6lj16.js.map
