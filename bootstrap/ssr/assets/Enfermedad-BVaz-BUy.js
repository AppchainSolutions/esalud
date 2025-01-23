import { reactive, onMounted, computed, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useDataStore } from "./store-BqtSnK9e.js";
import { f as fetchData, c as closeForm, a as searchItemss, o as openToCreate, b as handleStoreItem, d as openToEdit, e as handleRemoveItem } from "./helper-BkHfu3mP.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = {
  __name: "Enfermedad",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDataStore();
    const state = reactive({
      endpoints: ["trastorno_cronico"],
      headers: [
        {
          title: "Enfermedad",
          align: "start",
          sortable: true,
          key: "trastorno_cronico.descripcion"
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" }
      ],
      editedItem: {
        paciente_id: null,
        trastorno_cronico: null,
        comentario: null
      },
      defaultItem: {
        paciente_id: null,
        trastorno_cronico: null,
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
      formTitle: "Enfermedades",
      formCrear: "Nueva Enfermedades",
      formEdit: "Editar Enfermedades",
      urlSearch: "enfermedad/search",
      urlShow: "enfermedad/show",
      urlUpdate: "enfermedad/update",
      urlDelete: "enfermedad/delete",
      urlStore: "enfermedad"
    });
    onMounted(async () => {
      state.list = await fetchData(state.endpoints);
    });
    const editedItemTitle = computed(
      () => state.editedIndex === -1 ? state.formCrear : state.formEdit
    );
    function close() {
      closeForm(state);
    }
    const handleShow = async () => {
      state.searchQuery.paciente_id = store.getSelected.id;
      await searchItemss(state);
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
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_card_actions = resolveComponent("v-card-actions");
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
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
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
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
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
                                    _push6(`<form${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_card_title, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="text-h5"${_scopeId6}>${ssrInterpolate(editedItemTitle.value)}</span>`);
                                        } else {
                                          return [
                                            createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_container, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_row, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_col, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.editedItem.enfermedad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                              label: "enfermedad",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.editedItem.trastorno_cronico,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                              items: state.list.trastorno_cronico,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Trastorno Crónico",
                                                              variant: "underlined",
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.editedItem.comentario,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                              label: "comentario",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.enfermedad,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                                label: "enfermedad",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.trastorno_cronico,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                                items: state.list.trastorno_cronico,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Trastorno Crónico",
                                                                variant: "underlined",
                                                                clearable: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.comentario,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                label: "comentario",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.enfermedad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                              label: "enfermedad",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.trastorno_cronico,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                              items: state.list.trastorno_cronico,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Trastorno Crónico",
                                                              variant: "underlined",
                                                              clearable: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.comentario,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                              label: "comentario",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.enfermedad,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                            label: "enfermedad",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.trastorno_cronico,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                            items: state.list.trastorno_cronico,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Trastorno Crónico",
                                                            variant: "underlined",
                                                            clearable: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.comentario,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                            label: "comentario",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createVNode(_component_v_container, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.enfermedad,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                          label: "enfermedad",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.trastorno_cronico,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                          items: state.list.trastorno_cronico,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Trastorno Crónico",
                                                          variant: "underlined",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.comentario,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                          label: "comentario",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    _push6(ssrRenderComponent(_component_v_card_actions, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_spacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            onClick: close
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Cancelar `);
                                              } else {
                                                return [
                                                  createTextVNode(" Cancelar ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            onClick: storeItems
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Guardar `);
                                              } else {
                                                return [
                                                  createTextVNode(" Guardar ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_spacer),
                                            createVNode(_component_v_btn, {
                                              color: "blue-darken-1",
                                              variant: "tonal",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancelar ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              color: "blue-darken-1",
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
                                    }, _parent6, _scopeId5));
                                    _push6(`</form>`);
                                  } else {
                                    return [
                                      createVNode("form", {
                                        onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                      }, [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_container, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.enfermedad,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                          label: "enfermedad",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.trastorno_cronico,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                          items: state.list.trastorno_cronico,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Trastorno Crónico",
                                                          variant: "underlined",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.comentario,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                          label: "comentario",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                        createVNode(_component_v_card_actions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_spacer),
                                            createVNode(_component_v_btn, {
                                              color: "blue-darken-1",
                                              variant: "tonal",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancelar ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              color: "blue-darken-1",
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
                                      ], 40, ["onSubmit"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode("form", {
                                      onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                    }, [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_container, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.enfermedad,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                        label: "enfermedad",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.trastorno_cronico,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                        items: state.list.trastorno_cronico,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Trastorno Crónico",
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.comentario,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                        label: "comentario",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_spacer),
                                          createVNode(_component_v_btn, {
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            onClick: close
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancelar ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
                                            color: "blue-darken-1",
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
                                    ], 40, ["onSubmit"])
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
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
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
                                  createVNode("form", {
                                    onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                  }, [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_container, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.enfermedad,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                      label: "enfermedad",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.trastorno_cronico,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                      items: state.list.trastorno_cronico,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Trastorno Crónico",
                                                      variant: "underlined",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.comentario,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                      label: "comentario",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    createVNode(_component_v_card_actions, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_spacer),
                                        createVNode(_component_v_btn, {
                                          color: "blue-darken-1",
                                          variant: "tonal",
                                          onClick: close
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancelar ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
                                          color: "blue-darken-1",
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
                                  ], 40, ["onSubmit"])
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
                              variant: "tonal",
                              class: "ma-2",
                              color: "#009AA4",
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
                                createVNode("form", {
                                  onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                }, [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_container, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.enfermedad,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                    label: "enfermedad",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.trastorno_cronico,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                    items: state.list.trastorno_cronico,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Trastorno Crónico",
                                                    variant: "underlined",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.comentario,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                    label: "comentario",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_btn, {
                                        color: "blue-darken-1",
                                        variant: "tonal",
                                        onClick: close
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancelar ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        color: "blue-darken-1",
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
                                ], 40, ["onSubmit"])
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
                          icon: "mdi-account-edit",
                          variant: "tonal",
                          onClick: ($event) => openFormEdit(item)
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps(props, {
                            density: "compact",
                            class: "mr-2 ml-2",
                            color: "#009AA4",
                            icon: "mdi-account-edit",
                            variant: "tonal",
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
                          icon: "mdi-delete",
                          variant: "tonal",
                          onClick: ($event) => remove(item)
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps(props, {
                            density: "compact",
                            class: "mr-2 ml-2",
                            color: "#009AA4",
                            icon: "mdi-delete",
                            variant: "tonal",
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
                          icon: "mdi-account-edit",
                          variant: "tonal",
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
                          icon: "mdi-delete",
                          variant: "tonal",
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
                            variant: "tonal",
                            class: "ma-2",
                            color: "#009AA4",
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
                              createVNode("form", {
                                onSubmit: withModifiers(_ctx.submit, ["prevent"])
                              }, [
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_container, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.editedItem.enfermedad,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.enfermedad = $event,
                                                  label: "enfermedad",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.editedItem.trastorno_cronico,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.trastorno_cronico = $event,
                                                  items: state.list.trastorno_cronico,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Trastorno Crónico",
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.editedItem.comentario,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                  label: "comentario",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_btn, {
                                      color: "blue-darken-1",
                                      variant: "tonal",
                                      onClick: close
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Cancelar ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      color: "blue-darken-1",
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
                              ], 40, ["onSubmit"])
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
                        icon: "mdi-account-edit",
                        variant: "tonal",
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
                        icon: "mdi-delete",
                        variant: "tonal",
                        onClick: ($event) => remove(item)
                      }), null, 16, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                "no-data": withCtx(() => [
                  createVNode(_component_v_btn, {
                    variant: "tonal",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Enfermedad.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Enfermedad = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/SubPages/Enfermedad.vue"]]);
export {
  Enfermedad as default
};
//# sourceMappingURL=Enfermedad-BVaz-BUy.js.map
