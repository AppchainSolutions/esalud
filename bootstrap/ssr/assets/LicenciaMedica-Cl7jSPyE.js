import { reactive, computed, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useDataStore } from "./store-BqtSnK9e.js";
import { c as closeForm, a as handleShowItem, o as openToCreate, b as handleStoreItem, d as openToEdit, e as handleRemoveItem } from "./helper-myf1uSfT.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = {
  __name: "LicenciaMedica",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDataStore();
    const state = reactive({
      headers: [
        {
          title: "Folio",
          align: "start",
          sortable: true,
          key: "folio"
        },
        {
          title: "Fecha emisión",
          align: "start",
          sortable: true,
          key: "fecha_emision"
        },
        {
          title: "Fecha recepción",
          align: "start",
          sortable: true,
          key: "fecha_recepcion"
        },
        {
          title: "Fecha inicio",
          align: "start",
          sortable: true,
          key: "fecha_inicio"
        },
        {
          title: "Fecha término",
          align: "start",
          sortable: true,
          key: "fecha_termino"
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" }
      ],
      editedItem: {
        paciente_id: null,
        folio: null,
        fecha_emision: null,
        fecha_recepcion: null,
        fecha_inicio: null,
        fecha_termino: null,
        caract_reposo: null,
        lugar_reposo: null,
        tipo_licencia: null,
        recuperabilidad_laboral: null,
        inicio_invalidez: null,
        titulo_profesional: null,
        nombre_profesional: null,
        comentario: null
      },
      defaultItem: {
        paciente_id: null,
        folio: null,
        fecha_emision: null,
        fecha_recepcion: null,
        fecha_inicio: null,
        fecha_termino: null,
        caract_reposo: null,
        lugar_reposo: null,
        tipo_licencia: null,
        recuperabilidad_laboral: false,
        inicio_invalidez: false,
        titulo_profesional: null,
        nombre_profesional: null,
        comentario: null
      },
      caract_reposo: [
        "Total",
        "Parcial - Mañana",
        "Parcial - Tarde",
        "Parcial - Noche"
      ],
      lugar_reposo: ["Domicilio", "Hospital", "Otro domicilio"],
      tipo_licencia: [
        "Accidente del trabajo o trayecto",
        "Enfermedad grave hijo menor de 1 año",
        "Enfermedad o accidente común",
        "Enfermedad profesional",
        "Licencia maternal pre y post natal",
        "Patología del embarazo",
        "Prorroga medicina preventiva"
      ],
      titulo_profesional: ["Médico", "Dentista", "Matrona"],
      searchQuery: {
        paciente_id: null
      },
      dialog: false,
      tableItems: [],
      editedIndex: -1,
      list: [],
      valid: null,
      formTitle: "Licencias Médicas",
      formCrear: "Nueva Licencia Médica",
      formEdit: "Editar Licencia Médica",
      urlSearch: "licencia/search",
      urlShow: "licencia/show",
      urlUpdate: "licencia/update",
      urlDelete: "licencia/delete",
      urlStore: "licencia"
    });
    const editedItemTitle = computed(
      () => state.editedIndex === -1 ? state.formCrear : state.formEdit
    );
    function close() {
      closeForm(state);
    }
    const handleShow = async () => {
      state.searchQuery.paciente_id = store.getSelected.id;
      await handleShowItem(state);
    };
    function openFormCreate() {
      openToCreate(state);
    }
    function storeItems() {
      return state.editedIndex > -1 ? update() : create();
    }
    const create = async () => {
      await handleStoreItem(state, "create");
      closeForm(state);
    };
    const update = async () => {
      await handleStoreItem(state, "edit");
      closeForm(state);
    };
    function openFormEdit(item) {
      openToEdit(state, item);
    }
    const remove = async (item) => {
      handleRemoveItem(state, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      _push(ssrRenderComponent(_component_v_container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_data_table, {
              headers: state.headers,
              items: state.tableItems
            }, {
              top: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar, { flat: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_toolbar_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(state.formTitle)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(state.formTitle), 1)
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
                        _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_dialog, {
                          modelValue: state.dialog,
                          "onUpdate:modelValue": ($event) => state.dialog = $event
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                icon: "mdi-update",
                                class: "ma-2",
                                color: "#009AA4",
                                variant: "tonal",
                                onClick: handleShow
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  icon: "mdi-update",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  variant: "tonal",
                                  onClick: handleShow
                                }),
                                createVNode(_component_v_btn, {
                                  icon: "mdi-account-multiple-plus",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  onClick: openFormCreate
                                })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_form, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card_text, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_container, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_sheet, {
                                                        elevation: "4",
                                                        class: "ma-4 pa-4"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_row, { align: "center" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_card_title, null, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`<span class="text-h5"${_scopeId12}>${ssrInterpolate(editedItemTitle.value)}</span>`);
                                                                            } else {
                                                                              return [
                                                                                createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_card_title, null, {
                                                                            default: withCtx(() => [
                                                                              createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                                            ]),
                                                                            _: 1
                                                                          })
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_card_actions, null, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(ssrRenderComponent(_component_v_btn, {
                                                                                color: "#009AA4",
                                                                                variant: "tonal",
                                                                                onClick: close
                                                                              }, {
                                                                                default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                  if (_push14) {
                                                                                    _push14(` Cancelar `);
                                                                                  } else {
                                                                                    return [
                                                                                      createTextVNode(" Cancelar ")
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 1
                                                                              }, _parent13, _scopeId12));
                                                                              _push13(ssrRenderComponent(_component_v_btn, {
                                                                                color: "#009AA4",
                                                                                variant: "tonal",
                                                                                onClick: storeItems
                                                                              }, {
                                                                                default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                  if (_push14) {
                                                                                    _push14(` Guardar `);
                                                                                  } else {
                                                                                    return [
                                                                                      createTextVNode(" Guardar ")
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 1
                                                                              }, _parent13, _scopeId12));
                                                                            } else {
                                                                              return [
                                                                                createVNode(_component_v_btn, {
                                                                                  color: "#009AA4",
                                                                                  variant: "tonal",
                                                                                  onClick: close
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode(" Cancelar ")
                                                                                  ]),
                                                                                  _: 1
                                                                                }),
                                                                                createVNode(_component_v_btn, {
                                                                                  color: "#009AA4",
                                                                                  variant: "tonal",
                                                                                  onClick: storeItems
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode(" Guardar ")
                                                                                  ]),
                                                                                  _: 1
                                                                                })
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_card_actions, null, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_btn, {
                                                                                color: "#009AA4",
                                                                                variant: "tonal",
                                                                                onClick: close
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode(" Cancelar ")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createVNode(_component_v_btn, {
                                                                                color: "#009AA4",
                                                                                variant: "tonal",
                                                                                onClick: storeItems
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode(" Guardar ")
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
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_card_title, null, {
                                                                          default: withCtx(() => [
                                                                            createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                                          ]),
                                                                          _: 1
                                                                        })
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_card_actions, null, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_btn, {
                                                                              color: "#009AA4",
                                                                              variant: "tonal",
                                                                              onClick: close
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(" Cancelar ")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createVNode(_component_v_btn, {
                                                                              color: "#009AA4",
                                                                              variant: "tonal",
                                                                              onClick: storeItems
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(" Guardar ")
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
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_row, { align: "center" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_card_title, null, {
                                                                        default: withCtx(() => [
                                                                          createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                                        ]),
                                                                        _: 1
                                                                      })
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_card_actions, null, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_btn, {
                                                                            color: "#009AA4",
                                                                            variant: "tonal",
                                                                            onClick: close
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" Cancelar ")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_v_btn, {
                                                                            color: "#009AA4",
                                                                            variant: "tonal",
                                                                            onClick: storeItems
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" Guardar ")
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_sheet, {
                                                        elevation: "4",
                                                        class: "ma-4 pa-4"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_row, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.folio,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                                          label: "Folio",
                                                                          type: "number",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_emision,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                                          label: "Fecha emisión",
                                                                          type: "date",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_recepcion,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                                          label: "Fecha recepción",
                                                                          type: "date",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.folio,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                                            label: "Folio",
                                                                            type: "number",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.fecha_emision,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                                            label: "Fecha emisión",
                                                                            type: "date",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.fecha_recepcion,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                                            label: "Fecha recepción",
                                                                            type: "date",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_inicio,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                                          label: "Fecha inicio",
                                                                          type: "date",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_termino,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                                          label: "Fecha de término",
                                                                          type: "date",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.comentario,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                          label: "Comentario",
                                                                          type: "text",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.fecha_inicio,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                                            label: "Fecha inicio",
                                                                            type: "date",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.fecha_termino,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                                            label: "Fecha de término",
                                                                            type: "date",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.comentario,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                            label: "Comentario",
                                                                            type: "text",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          modelValue: state.editedItem.caract_reposo,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                                          label: "Características del reposo",
                                                                          variant: "underlined",
                                                                          items: state.caract_reposo,
                                                                          clearable: ""
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          modelValue: state.editedItem.lugar_reposo,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                                          label: "Lugar del reposo",
                                                                          variant: "underlined",
                                                                          items: state.lugar_reposo,
                                                                          clearable: ""
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          modelValue: state.editedItem.tipo_licencia,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                          label: "Tipo de Licencia",
                                                                          variant: "underlined",
                                                                          items: state.tipo_licencia,
                                                                          clearable: ""
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_select, {
                                                                            modelValue: state.editedItem.caract_reposo,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                                            label: "Características del reposo",
                                                                            variant: "underlined",
                                                                            items: state.caract_reposo,
                                                                            clearable: ""
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                          createVNode(_component_v_select, {
                                                                            modelValue: state.editedItem.lugar_reposo,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                                            label: "Lugar del reposo",
                                                                            variant: "underlined",
                                                                            items: state.lugar_reposo,
                                                                            clearable: ""
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                          createVNode(_component_v_select, {
                                                                            modelValue: state.editedItem.tipo_licencia,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                            label: "Tipo de Licencia",
                                                                            variant: "underlined",
                                                                            items: state.tipo_licencia,
                                                                            clearable: ""
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_switch, {
                                                                          modelValue: state.editedItem.recuperabilidad_laboral,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-4",
                                                                          variant: "underlined",
                                                                          color: "primary",
                                                                          inset: "",
                                                                          label: "Recuperabilidad Laboral"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_switch, {
                                                                          modelValue: state.editedItem.inicio_invalidez,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-4",
                                                                          variant: "underlined",
                                                                          color: "primary",
                                                                          inset: "",
                                                                          label: "Inicio Invalidez"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.nombre_profesional,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                                          label: "Nombre del Profesional",
                                                                          type: "text",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          modelValue: state.editedItem.titulo_profesional,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                                          label: "Titulo profesional",
                                                                          variant: "underlined",
                                                                          items: state.titulo_profesional,
                                                                          clearable: ""
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_switch, {
                                                                            modelValue: state.editedItem.recuperabilidad_laboral,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                                            "hide-details": "",
                                                                            class: "ml-4",
                                                                            variant: "underlined",
                                                                            color: "primary",
                                                                            inset: "",
                                                                            label: "Recuperabilidad Laboral"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_switch, {
                                                                            modelValue: state.editedItem.inicio_invalidez,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                                            "hide-details": "",
                                                                            class: "ml-4",
                                                                            variant: "underlined",
                                                                            color: "primary",
                                                                            inset: "",
                                                                            label: "Inicio Invalidez"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.nombre_profesional,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                                            label: "Nombre del Profesional",
                                                                            type: "text",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            modelValue: state.editedItem.titulo_profesional,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                                            label: "Titulo profesional",
                                                                            variant: "underlined",
                                                                            items: state.titulo_profesional,
                                                                            clearable: ""
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.folio,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                                          label: "Folio",
                                                                          type: "number",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_emision,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                                          label: "Fecha emisión",
                                                                          type: "date",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_recepcion,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                                          label: "Fecha recepción",
                                                                          type: "date",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_inicio,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                                          label: "Fecha inicio",
                                                                          type: "date",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_termino,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                                          label: "Fecha de término",
                                                                          type: "date",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.comentario,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                          label: "Comentario",
                                                                          type: "text",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_select, {
                                                                          modelValue: state.editedItem.caract_reposo,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                                          label: "Características del reposo",
                                                                          variant: "underlined",
                                                                          items: state.caract_reposo,
                                                                          clearable: ""
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                        createVNode(_component_v_select, {
                                                                          modelValue: state.editedItem.lugar_reposo,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                                          label: "Lugar del reposo",
                                                                          variant: "underlined",
                                                                          items: state.lugar_reposo,
                                                                          clearable: ""
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                        createVNode(_component_v_select, {
                                                                          modelValue: state.editedItem.tipo_licencia,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                          label: "Tipo de Licencia",
                                                                          variant: "underlined",
                                                                          items: state.tipo_licencia,
                                                                          clearable: ""
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_switch, {
                                                                          modelValue: state.editedItem.recuperabilidad_laboral,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-4",
                                                                          variant: "underlined",
                                                                          color: "primary",
                                                                          inset: "",
                                                                          label: "Recuperabilidad Laboral"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_switch, {
                                                                          modelValue: state.editedItem.inicio_invalidez,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-4",
                                                                          variant: "underlined",
                                                                          color: "primary",
                                                                          inset: "",
                                                                          label: "Inicio Invalidez"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.nombre_profesional,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                                          label: "Nombre del Profesional",
                                                                          type: "text",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          modelValue: state.editedItem.titulo_profesional,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                                          label: "Titulo profesional",
                                                                          variant: "underlined",
                                                                          items: state.titulo_profesional,
                                                                          clearable: ""
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_row, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.folio,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                                        label: "Folio",
                                                                        type: "number",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.fecha_emision,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                                        label: "Fecha emisión",
                                                                        type: "date",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.fecha_recepcion,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                                        label: "Fecha recepción",
                                                                        type: "date",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.fecha_inicio,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                                        label: "Fecha inicio",
                                                                        type: "date",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.fecha_termino,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                                        label: "Fecha de término",
                                                                        type: "date",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.comentario,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                        label: "Comentario",
                                                                        type: "text",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_select, {
                                                                        modelValue: state.editedItem.caract_reposo,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                                        label: "Características del reposo",
                                                                        variant: "underlined",
                                                                        items: state.caract_reposo,
                                                                        clearable: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                      createVNode(_component_v_select, {
                                                                        modelValue: state.editedItem.lugar_reposo,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                                        label: "Lugar del reposo",
                                                                        variant: "underlined",
                                                                        items: state.lugar_reposo,
                                                                        clearable: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                      createVNode(_component_v_select, {
                                                                        modelValue: state.editedItem.tipo_licencia,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                        label: "Tipo de Licencia",
                                                                        variant: "underlined",
                                                                        items: state.tipo_licencia,
                                                                        clearable: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_switch, {
                                                                        modelValue: state.editedItem.recuperabilidad_laboral,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                                        "hide-details": "",
                                                                        class: "ml-4",
                                                                        variant: "underlined",
                                                                        color: "primary",
                                                                        inset: "",
                                                                        label: "Recuperabilidad Laboral"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_switch, {
                                                                        modelValue: state.editedItem.inicio_invalidez,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                                        "hide-details": "",
                                                                        class: "ml-4",
                                                                        variant: "underlined",
                                                                        color: "primary",
                                                                        inset: "",
                                                                        label: "Inicio Invalidez"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.nombre_profesional,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                                        label: "Nombre del Profesional",
                                                                        type: "text",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        modelValue: state.editedItem.titulo_profesional,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                                        label: "Titulo profesional",
                                                                        variant: "underlined",
                                                                        items: state.titulo_profesional,
                                                                        clearable: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_sheet, {
                                                          elevation: "4",
                                                          class: "ma-4 pa-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, { align: "center" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card_title, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card_actions, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_btn, {
                                                                          color: "#009AA4",
                                                                          variant: "tonal",
                                                                          onClick: close
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Cancelar ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_v_btn, {
                                                                          color: "#009AA4",
                                                                          variant: "tonal",
                                                                          onClick: storeItems
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Guardar ")
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
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_sheet, {
                                                          elevation: "4",
                                                          class: "ma-4 pa-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.folio,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                                      label: "Folio",
                                                                      type: "number",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.fecha_emision,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                                      label: "Fecha emisión",
                                                                      type: "date",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.fecha_recepcion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                                      label: "Fecha recepción",
                                                                      type: "date",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.fecha_inicio,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                                      label: "Fecha inicio",
                                                                      type: "date",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.fecha_termino,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                                      label: "Fecha de término",
                                                                      type: "date",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.comentario,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                      label: "Comentario",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.caract_reposo,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                                      label: "Características del reposo",
                                                                      variant: "underlined",
                                                                      items: state.caract_reposo,
                                                                      clearable: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.lugar_reposo,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                                      label: "Lugar del reposo",
                                                                      variant: "underlined",
                                                                      items: state.lugar_reposo,
                                                                      clearable: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.tipo_licencia,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                      label: "Tipo de Licencia",
                                                                      variant: "underlined",
                                                                      items: state.tipo_licencia,
                                                                      clearable: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.recuperabilidad_laboral,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                                      "hide-details": "",
                                                                      class: "ml-4",
                                                                      variant: "underlined",
                                                                      color: "primary",
                                                                      inset: "",
                                                                      label: "Recuperabilidad Laboral"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.inicio_invalidez,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                                      "hide-details": "",
                                                                      class: "ml-4",
                                                                      variant: "underlined",
                                                                      color: "primary",
                                                                      inset: "",
                                                                      label: "Inicio Invalidez"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.nombre_profesional,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                                      label: "Nombre del Profesional",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.titulo_profesional,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                                      label: "Titulo profesional",
                                                                      variant: "underlined",
                                                                      items: state.titulo_profesional,
                                                                      clearable: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_container, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_sheet, {
                                                        elevation: "4",
                                                        class: "ma-4 pa-4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, { align: "center" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card_title, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card_actions, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_btn, {
                                                                        color: "#009AA4",
                                                                        variant: "tonal",
                                                                        onClick: close
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Cancelar ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_v_btn, {
                                                                        color: "#009AA4",
                                                                        variant: "tonal",
                                                                        onClick: storeItems
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Guardar ")
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
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_sheet, {
                                                        elevation: "4",
                                                        class: "ma-4 pa-4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.folio,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                                    label: "Folio",
                                                                    type: "number",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.fecha_emision,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                                    label: "Fecha emisión",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.fecha_recepcion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                                    label: "Fecha recepción",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.fecha_inicio,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                                    label: "Fecha inicio",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.fecha_termino,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                                    label: "Fecha de término",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.comentario,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                    label: "Comentario",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.caract_reposo,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                                    label: "Características del reposo",
                                                                    variant: "underlined",
                                                                    items: state.caract_reposo,
                                                                    clearable: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.lugar_reposo,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                                    label: "Lugar del reposo",
                                                                    variant: "underlined",
                                                                    items: state.lugar_reposo,
                                                                    clearable: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.tipo_licencia,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                    label: "Tipo de Licencia",
                                                                    variant: "underlined",
                                                                    items: state.tipo_licencia,
                                                                    clearable: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.recuperabilidad_laboral,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                                    "hide-details": "",
                                                                    class: "ml-4",
                                                                    variant: "underlined",
                                                                    color: "primary",
                                                                    inset: "",
                                                                    label: "Recuperabilidad Laboral"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.inicio_invalidez,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                                    "hide-details": "",
                                                                    class: "ml-4",
                                                                    variant: "underlined",
                                                                    color: "primary",
                                                                    inset: "",
                                                                    label: "Inicio Invalidez"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.nombre_profesional,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                                    label: "Nombre del Profesional",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.titulo_profesional,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                                    label: "Titulo profesional",
                                                                    variant: "underlined",
                                                                    items: state.titulo_profesional,
                                                                    clearable: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_container, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_sheet, {
                                                      elevation: "4",
                                                      class: "ma-4 pa-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, { align: "center" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card_title, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card_actions, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_btn, {
                                                                      color: "#009AA4",
                                                                      variant: "tonal",
                                                                      onClick: close
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Cancelar ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_btn, {
                                                                      color: "#009AA4",
                                                                      variant: "tonal",
                                                                      onClick: storeItems
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Guardar ")
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
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_sheet, {
                                                      elevation: "4",
                                                      class: "ma-4 pa-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.folio,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                                  label: "Folio",
                                                                  type: "number",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.fecha_emision,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                                  label: "Fecha emisión",
                                                                  type: "date",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.fecha_recepcion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                                  label: "Fecha recepción",
                                                                  type: "date",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.fecha_inicio,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                                  label: "Fecha inicio",
                                                                  type: "date",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.fecha_termino,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                                  label: "Fecha de término",
                                                                  type: "date",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.comentario,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                  label: "Comentario",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.caract_reposo,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                                  label: "Características del reposo",
                                                                  variant: "underlined",
                                                                  items: state.caract_reposo,
                                                                  clearable: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.lugar_reposo,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                                  label: "Lugar del reposo",
                                                                  variant: "underlined",
                                                                  items: state.lugar_reposo,
                                                                  clearable: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.tipo_licencia,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                  label: "Tipo de Licencia",
                                                                  variant: "underlined",
                                                                  items: state.tipo_licencia,
                                                                  clearable: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.recuperabilidad_laboral,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                                  "hide-details": "",
                                                                  class: "ml-4",
                                                                  variant: "underlined",
                                                                  color: "primary",
                                                                  inset: "",
                                                                  label: "Recuperabilidad Laboral"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.inicio_invalidez,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                                  "hide-details": "",
                                                                  class: "ml-4",
                                                                  variant: "underlined",
                                                                  color: "primary",
                                                                  inset: "",
                                                                  label: "Inicio Invalidez"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.nombre_profesional,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                                  label: "Nombre del Profesional",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.titulo_profesional,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                                  label: "Titulo profesional",
                                                                  variant: "underlined",
                                                                  items: state.titulo_profesional,
                                                                  clearable: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_form, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_container, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_sheet, {
                                                    elevation: "4",
                                                    class: "ma-4 pa-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, { align: "center" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_title, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_actions, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_btn, {
                                                                    color: "#009AA4",
                                                                    variant: "tonal",
                                                                    onClick: close
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Cancelar ")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_btn, {
                                                                    color: "#009AA4",
                                                                    variant: "tonal",
                                                                    onClick: storeItems
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Guardar ")
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
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_sheet, {
                                                    elevation: "4",
                                                    class: "ma-4 pa-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.folio,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                                label: "Folio",
                                                                type: "number",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.fecha_emision,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                                label: "Fecha emisión",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.fecha_recepcion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                                label: "Fecha recepción",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.fecha_inicio,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                                label: "Fecha inicio",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.fecha_termino,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                                label: "Fecha de término",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.comentario,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                label: "Comentario",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.caract_reposo,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                                label: "Características del reposo",
                                                                variant: "underlined",
                                                                items: state.caract_reposo,
                                                                clearable: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.lugar_reposo,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                                label: "Lugar del reposo",
                                                                variant: "underlined",
                                                                items: state.lugar_reposo,
                                                                clearable: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.tipo_licencia,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                label: "Tipo de Licencia",
                                                                variant: "underlined",
                                                                items: state.tipo_licencia,
                                                                clearable: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.recuperabilidad_laboral,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                                "hide-details": "",
                                                                class: "ml-4",
                                                                variant: "underlined",
                                                                color: "primary",
                                                                inset: "",
                                                                label: "Recuperabilidad Laboral"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.inicio_invalidez,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                                "hide-details": "",
                                                                class: "ml-4",
                                                                variant: "underlined",
                                                                color: "primary",
                                                                inset: "",
                                                                label: "Inicio Invalidez"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.nombre_profesional,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                                label: "Nombre del Profesional",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.titulo_profesional,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                                label: "Titulo profesional",
                                                                variant: "underlined",
                                                                items: state.titulo_profesional,
                                                                clearable: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_form, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_container, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_sheet, {
                                                  elevation: "4",
                                                  class: "ma-4 pa-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, { align: "center" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, null, {
                                                              default: withCtx(() => [
                                                                createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_actions, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_btn, {
                                                                  color: "#009AA4",
                                                                  variant: "tonal",
                                                                  onClick: close
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Cancelar ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_btn, {
                                                                  color: "#009AA4",
                                                                  variant: "tonal",
                                                                  onClick: storeItems
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Guardar ")
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
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_sheet, {
                                                  elevation: "4",
                                                  class: "ma-4 pa-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.folio,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                              label: "Folio",
                                                              type: "number",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.fecha_emision,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                              label: "Fecha emisión",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.fecha_recepcion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                              label: "Fecha recepción",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.fecha_inicio,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                              label: "Fecha inicio",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.fecha_termino,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                              label: "Fecha de término",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.comentario,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                              label: "Comentario",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.caract_reposo,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                              label: "Características del reposo",
                                                              variant: "underlined",
                                                              items: state.caract_reposo,
                                                              clearable: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.lugar_reposo,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                              label: "Lugar del reposo",
                                                              variant: "underlined",
                                                              items: state.lugar_reposo,
                                                              clearable: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.tipo_licencia,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                              label: "Tipo de Licencia",
                                                              variant: "underlined",
                                                              items: state.tipo_licencia,
                                                              clearable: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.recuperabilidad_laboral,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                              "hide-details": "",
                                                              class: "ml-4",
                                                              variant: "underlined",
                                                              color: "primary",
                                                              inset: "",
                                                              label: "Recuperabilidad Laboral"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.inicio_invalidez,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                              "hide-details": "",
                                                              class: "ml-4",
                                                              variant: "underlined",
                                                              color: "primary",
                                                              inset: "",
                                                              label: "Inicio Invalidez"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.nombre_profesional,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                              label: "Nombre del Profesional",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.titulo_profesional,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                              label: "Titulo profesional",
                                                              variant: "underlined",
                                                              items: state.titulo_profesional,
                                                              clearable: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_toolbar_title, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(state.formTitle), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider, {
                            class: "mx-4",
                            inset: "",
                            vertical: ""
                          }),
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_dialog, {
                            modelValue: state.dialog,
                            "onUpdate:modelValue": ($event) => state.dialog = $event
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, {
                                icon: "mdi-update",
                                class: "ma-2",
                                color: "#009AA4",
                                variant: "tonal",
                                onClick: handleShow
                              }),
                              createVNode(_component_v_btn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_form, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_container, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_sheet, {
                                                elevation: "4",
                                                class: "ma-4 pa-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, { align: "center" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_title, null, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_actions, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_btn, {
                                                                color: "#009AA4",
                                                                variant: "tonal",
                                                                onClick: close
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Cancelar ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_btn, {
                                                                color: "#009AA4",
                                                                variant: "tonal",
                                                                onClick: storeItems
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Guardar ")
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
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_sheet, {
                                                elevation: "4",
                                                class: "ma-4 pa-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.folio,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                            label: "Folio",
                                                            type: "number",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.fecha_emision,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                            label: "Fecha emisión",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.fecha_recepcion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                            label: "Fecha recepción",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.fecha_inicio,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                            label: "Fecha inicio",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.fecha_termino,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                            label: "Fecha de término",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.comentario,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                            label: "Comentario",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.caract_reposo,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                            label: "Características del reposo",
                                                            variant: "underlined",
                                                            items: state.caract_reposo,
                                                            clearable: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.lugar_reposo,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                            label: "Lugar del reposo",
                                                            variant: "underlined",
                                                            items: state.lugar_reposo,
                                                            clearable: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.tipo_licencia,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                            label: "Tipo de Licencia",
                                                            variant: "underlined",
                                                            items: state.tipo_licencia,
                                                            clearable: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.recuperabilidad_laboral,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                            "hide-details": "",
                                                            class: "ml-4",
                                                            variant: "underlined",
                                                            color: "primary",
                                                            inset: "",
                                                            label: "Recuperabilidad Laboral"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.inicio_invalidez,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                            "hide-details": "",
                                                            class: "ml-4",
                                                            variant: "underlined",
                                                            color: "primary",
                                                            inset: "",
                                                            label: "Inicio Invalidez"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.nombre_profesional,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                            label: "Nombre del Profesional",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.titulo_profesional,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                            label: "Titulo profesional",
                                                            variant: "underlined",
                                                            items: state.titulo_profesional,
                                                            clearable: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar, { flat: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_toolbar_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(state.formTitle), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider, {
                          class: "mx-4",
                          inset: "",
                          vertical: ""
                        }),
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_dialog, {
                          modelValue: state.dialog,
                          "onUpdate:modelValue": ($event) => state.dialog = $event
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, {
                              icon: "mdi-update",
                              class: "ma-2",
                              color: "#009AA4",
                              variant: "tonal",
                              onClick: handleShow
                            }),
                            createVNode(_component_v_btn, {
                              icon: "mdi-account-multiple-plus",
                              variant: "tonal",
                              class: "ma-2",
                              color: "#009AA4",
                              onClick: openFormCreate
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_card, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_form, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_container, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_sheet, {
                                              elevation: "4",
                                              class: "ma-4 pa-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, { align: "center" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_title, null, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_actions, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_btn, {
                                                              color: "#009AA4",
                                                              variant: "tonal",
                                                              onClick: close
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Cancelar ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_btn, {
                                                              color: "#009AA4",
                                                              variant: "tonal",
                                                              onClick: storeItems
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Guardar ")
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
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_sheet, {
                                              elevation: "4",
                                              class: "ma-4 pa-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.folio,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                          label: "Folio",
                                                          type: "number",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.fecha_emision,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                          label: "Fecha emisión",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.fecha_recepcion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                          label: "Fecha recepción",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.fecha_inicio,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                          label: "Fecha inicio",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.fecha_termino,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                          label: "Fecha de término",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.comentario,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                          label: "Comentario",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.caract_reposo,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                          label: "Características del reposo",
                                                          variant: "underlined",
                                                          items: state.caract_reposo,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.lugar_reposo,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                          label: "Lugar del reposo",
                                                          variant: "underlined",
                                                          items: state.lugar_reposo,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.tipo_licencia,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                          label: "Tipo de Licencia",
                                                          variant: "underlined",
                                                          items: state.tipo_licencia,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.recuperabilidad_laboral,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                          "hide-details": "",
                                                          class: "ml-4",
                                                          variant: "underlined",
                                                          color: "primary",
                                                          inset: "",
                                                          label: "Recuperabilidad Laboral"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.inicio_invalidez,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                          "hide-details": "",
                                                          class: "ml-4",
                                                          variant: "underlined",
                                                          color: "primary",
                                                          inset: "",
                                                          label: "Inicio Invalidez"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.nombre_profesional,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                          label: "Nombre del Profesional",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.titulo_profesional,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                          label: "Titulo profesional",
                                                          variant: "underlined",
                                                          items: state.titulo_profesional,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    text: "Editar",
                    location: "top"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                          density: "compact",
                          class: "mr-2 ml-2",
                          color: "#009AA4",
                          variant: "tonal",
                          icon: "mdi-account-edit",
                          onClick: ($event) => openFormEdit(item)
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps(props, {
                            density: "compact",
                            class: "mr-2 ml-2",
                            color: "#009AA4",
                            variant: "tonal",
                            icon: "mdi-account-edit",
                            onClick: ($event) => openFormEdit(item)
                          }), null, 16, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    text: "Eliminar",
                    location: "top"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                          density: "compact",
                          class: "mr-2 ml-2",
                          color: "#009AA4",
                          variant: "tonal",
                          icon: "mdi-delete",
                          onClick: ($event) => remove(item)
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps(props, {
                            density: "compact",
                            class: "mr-2 ml-2",
                            color: "#009AA4",
                            variant: "tonal",
                            icon: "mdi-delete",
                            onClick: ($event) => remove(item)
                          }), null, 16, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tooltip, {
                      text: "Editar",
                      location: "top"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_v_btn, mergeProps(props, {
                          density: "compact",
                          class: "mr-2 ml-2",
                          color: "#009AA4",
                          variant: "tonal",
                          icon: "mdi-account-edit",
                          onClick: ($event) => openFormEdit(item)
                        }), null, 16, ["onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_tooltip, {
                      text: "Eliminar",
                      location: "top"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_v_btn, mergeProps(props, {
                          density: "compact",
                          class: "mr-2 ml-2",
                          color: "#009AA4",
                          variant: "tonal",
                          icon: "mdi-delete",
                          onClick: ($event) => remove(item)
                        }), null, 16, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    variant: "tonal",
                    color: "#009AA4",
                    onClick: handleShow
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Iniciar `);
                      } else {
                        return [
                          createTextVNode(" Iniciar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      variant: "tonal",
                      color: "#009AA4",
                      onClick: handleShow
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Iniciar ")
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
              createVNode(_component_v_data_table, {
                headers: state.headers,
                items: state.tableItems
              }, {
                top: withCtx(() => [
                  createVNode(_component_v_toolbar, { flat: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_toolbar_title, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(state.formTitle), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, {
                        class: "mx-4",
                        inset: "",
                        vertical: ""
                      }),
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_dialog, {
                        modelValue: state.dialog,
                        "onUpdate:modelValue": ($event) => state.dialog = $event
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, {
                            icon: "mdi-update",
                            class: "ma-2",
                            color: "#009AA4",
                            variant: "tonal",
                            onClick: handleShow
                          }),
                          createVNode(_component_v_btn, {
                            icon: "mdi-account-multiple-plus",
                            variant: "tonal",
                            class: "ma-2",
                            color: "#009AA4",
                            onClick: openFormCreate
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_card, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_form, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_container, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_sheet, {
                                            elevation: "4",
                                            class: "ma-4 pa-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, { align: "center" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, null, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_actions, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_btn, {
                                                            color: "#009AA4",
                                                            variant: "tonal",
                                                            onClick: close
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Cancelar ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_btn, {
                                                            color: "#009AA4",
                                                            variant: "tonal",
                                                            onClick: storeItems
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Guardar ")
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
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_sheet, {
                                            elevation: "4",
                                            class: "ma-4 pa-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.folio,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.folio = $event,
                                                        label: "Folio",
                                                        type: "number",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.fecha_emision,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_emision = $event,
                                                        label: "Fecha emisión",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.fecha_recepcion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_recepcion = $event,
                                                        label: "Fecha recepción",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.fecha_inicio,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_inicio = $event,
                                                        label: "Fecha inicio",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.fecha_termino,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_termino = $event,
                                                        label: "Fecha de término",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.comentario,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                        label: "Comentario",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.caract_reposo,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.caract_reposo = $event,
                                                        label: "Características del reposo",
                                                        variant: "underlined",
                                                        items: state.caract_reposo,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.lugar_reposo,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.lugar_reposo = $event,
                                                        label: "Lugar del reposo",
                                                        variant: "underlined",
                                                        items: state.lugar_reposo,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.tipo_licencia,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                        label: "Tipo de Licencia",
                                                        variant: "underlined",
                                                        items: state.tipo_licencia,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.recuperabilidad_laboral,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.recuperabilidad_laboral = $event,
                                                        "hide-details": "",
                                                        class: "ml-4",
                                                        variant: "underlined",
                                                        color: "primary",
                                                        inset: "",
                                                        label: "Recuperabilidad Laboral"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.inicio_invalidez,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.inicio_invalidez = $event,
                                                        "hide-details": "",
                                                        class: "ml-4",
                                                        variant: "underlined",
                                                        color: "primary",
                                                        inset: "",
                                                        label: "Inicio Invalidez"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.nombre_profesional,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre_profesional = $event,
                                                        label: "Nombre del Profesional",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.titulo_profesional,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.titulo_profesional = $event,
                                                        label: "Titulo profesional",
                                                        variant: "underlined",
                                                        items: state.titulo_profesional,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(_component_v_tooltip, {
                    text: "Editar",
                    location: "top"
                  }, {
                    activator: withCtx(({ props }) => [
                      createVNode(_component_v_btn, mergeProps(props, {
                        density: "compact",
                        class: "mr-2 ml-2",
                        color: "#009AA4",
                        variant: "tonal",
                        icon: "mdi-account-edit",
                        onClick: ($event) => openFormEdit(item)
                      }), null, 16, ["onClick"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_tooltip, {
                    text: "Eliminar",
                    location: "top"
                  }, {
                    activator: withCtx(({ props }) => [
                      createVNode(_component_v_btn, mergeProps(props, {
                        density: "compact",
                        class: "mr-2 ml-2",
                        color: "#009AA4",
                        variant: "tonal",
                        icon: "mdi-delete",
                        onClick: ($event) => remove(item)
                      }), null, 16, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                "no-data": withCtx(() => [
                  createVNode(_component_v_btn, {
                    variant: "tonal",
                    color: "#009AA4",
                    onClick: handleShow
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Iniciar ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["headers", "items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/LicenciaMedica.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LicenciaMedica = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/SubPages/LicenciaMedica.vue"]]);
export {
  LicenciaMedica as default
};
//# sourceMappingURL=LicenciaMedica-Cl7jSPyE.js.map
