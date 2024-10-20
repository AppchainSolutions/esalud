import { u as useDataStore } from "./store-CHGALank.js";
import { usePage, router } from "@inertiajs/vue3";
import { computed, resolveComponent, withCtx, createTextVNode, mergeProps, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
const page = usePage();
const store = useDataStore();
const listaResponse = computed(() => page.props.responseData);
const _sfc_main = {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: "Certificación",
        align: "start",
        sortable: true,
        key: "certificacion"
      },
      { title: "Comentario", key: "comentario", sortable: false },
      { title: "", key: "actions", sortable: false }
    ],
    lista: [{}],
    editedIndex: -1,
    editedItem: {
      idpersonal: store.userSelected,
      AlergiaModel: "",
      comentario: 0
    },
    defaultItem: {
      idpersonal: store.userSelected,
      AlergiaModel: "",
      comentario: ""
    }
  }),
  /**
   * Computed property that determines the title of a form based on the value of the 'editedIndex' variable.
   *
   * @computed formTitle
   * @returns {string} The title of the form, either "Agregar registro" or "Editar registro".
   */
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar registro" : "Editar registro";
    }
  },
  /**
   * Watch properties for monitoring changes in the 'dialog' and 'dialogDelete' variables.
   *
   * @watch
   * @property {boolean} dialog - Represents the state of a dialog box.
   * @property {boolean} dialogDelete - Represents the state of a delete dialog box.
   * @fires close - Callesd when the 'dialog' variable becomes false.
   * @fires closeDelete - Callesd when the 'dialogDelete' variable becomes false.
   */
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  methods: {
    /**
     * Initializes the component by making an HTTP GET request to retrieve data related to a specific user's illnesses.
     *
     * @example
     * initialize()
     *
     * @returns {void} None
     */
    initialize() {
      let user = store.userSelected;
      router.get("/AlergiaModel", {
        rut: user
      });
      this.lista = listaResponse.value;
    },
    /**
     * Edit an item in the component's list.
     *
     * @param {Object} item - The selected item to be edited.
     * @returns {void}
     */
    editItem(item) {
      this.editedIndex = this.lista.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    /**
     * Deletes an item from the list.
     *
     * @param {Object} item - The selected item to be deleted.
     * @returns {void}
     */
    deleteItem(item) {
      this.editedIndex = this.lista.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.lista.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        let edited = [];
        Object.assign(this.lista[this.editedIndex], this.editedItem);
        edited = JSON.parse(JSON.stringify(this.editedItem));
        console.log(
          "🚀 ~ file: alergiaes.vue:137 ~ save ~ edited:",
          edited
        );
        this.saveEdit(edited);
      } else {
        this.lista.push(this.editedItem);
        this.saveSave(this.lista);
      }
      this.close();
    },
    saveEdit(edited) {
      router.put("/AlergiaModel/edit", {
        AlergiaModel: edited
      });
    },
    saveSave(added) {
      router.put("/AlergiaModel/store", {
        AlergiaModel: added
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_tooltip = resolveComponent("v-tooltip");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_data_table, {
          headers: _ctx.headers,
          items: _ctx.lista,
          "sort-by": [{ key: "AlergiaModel", order: "asc" }]
        }, {
          top: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_toolbar, { flat: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_toolbar_title, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Certificaciones`);
                        } else {
                          return [
                            createTextVNode("Certificaciones")
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
                      modelValue: _ctx.dialog,
                      "onUpdate:modelValue": ($event) => _ctx.dialog = $event
                    }, {
                      activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_btn, {
                            icon: "mdi-update",
                            variant: "underlined",
                            ligth: "",
                            class: "ma-2",
                            color: "#662D91",
                            onClick: $options.initialize
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, mergeProps({
                            icon: "mdi-account-multiple-plus",
                            variant: "underlined",
                            ligth: "",
                            class: "ma-2",
                            color: "#662D91"
                          }, props), null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_btn, {
                              icon: "mdi-update",
                              variant: "underlined",
                              ligth: "",
                              class: "ma-2",
                              color: "#662D91",
                              onClick: $options.initialize
                            }, null, 8, ["onClick"]),
                            createVNode(_component_v_btn, mergeProps({
                              icon: "mdi-account-multiple-plus",
                              variant: "underlined",
                              ligth: "",
                              class: "ma-2",
                              color: "#662D91"
                            }, props), null, 16)
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_card_title, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<span class="text-h5"${_scopeId6}>${ssrInterpolate($options.formTitle)}</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
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
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_text_field, {
                                                          modelValue: _ctx.editedItem.certificacion,
                                                          "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                                          label: "Certificación"
                                                        }, null, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: _ctx.editedItem.certificacion,
                                                            "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                                            label: "Certificación"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "6",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_text_field, {
                                                          modelValue: _ctx.editedItem.comentario,
                                                          "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                                          label: "Comentario"
                                                        }, null, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: _ctx.editedItem.comentario,
                                                            "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                                            label: "Comentario"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: _ctx.editedItem.certificacion,
                                                          "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                                          label: "Certificación"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "6",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: _ctx.editedItem.comentario,
                                                          "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                                          label: "Comentario"
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
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: _ctx.editedItem.certificacion,
                                                        "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                                        label: "Certificación"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "6",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: _ctx.editedItem.comentario,
                                                        "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                                        label: "Comentario"
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
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6",
                                                  md: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: _ctx.editedItem.certificacion,
                                                      "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                                      label: "Certificación"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "6",
                                                  sm: "6",
                                                  md: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: _ctx.editedItem.comentario,
                                                      "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                                      label: "Comentario"
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
                                        variant: "text",
                                        onClick: $options.close
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
                                        variant: "text",
                                        onClick: $options.save
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
                                          variant: "text",
                                          onClick: $options.close
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancelar ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_v_btn, {
                                          color: "blue-darken-1",
                                          variant: "text",
                                          onClick: $options.save
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Guardar ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_container, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: _ctx.editedItem.certificacion,
                                                    "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                                    label: "Certificación"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "6",
                                                sm: "6",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: _ctx.editedItem.comentario,
                                                    "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                                    label: "Comentario"
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
                                        variant: "text",
                                        onClick: $options.close
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancelar ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_v_btn, {
                                        color: "blue-darken-1",
                                        variant: "text",
                                        onClick: $options.save
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Guardar ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
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
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_container, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: _ctx.editedItem.certificacion,
                                                  "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                                  label: "Certificación"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: _ctx.editedItem.comentario,
                                                  "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                                  label: "Comentario"
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
                                      variant: "text",
                                      onClick: $options.close
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Cancelar ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_v_btn, {
                                      color: "blue-darken-1",
                                      variant: "text",
                                      onClick: $options.save
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Guardar ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
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
                    _push4(ssrRenderComponent(_component_v_dialog, {
                      modelValue: _ctx.dialogDelete,
                      "onUpdate:modelValue": ($event) => _ctx.dialogDelete = $event,
                      "max-width": "500px"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_card_title, { class: "text-h5" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Seguro que quiere borrar el registro?`);
                                    } else {
                                      return [
                                        createTextVNode("Seguro que quiere borrar el registro?")
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
                                        variant: "text",
                                        onClick: $options.closeDelete
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Cancel`);
                                          } else {
                                            return [
                                              createTextVNode("Cancel")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_btn, {
                                        color: "blue-darken-1",
                                        variant: "text",
                                        onClick: $options.deleteItemConfirm
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`OK`);
                                          } else {
                                            return [
                                              createTextVNode("OK")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_spacer, null, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_spacer),
                                        createVNode(_component_v_btn, {
                                          color: "blue-darken-1",
                                          variant: "text",
                                          onClick: $options.closeDelete
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Cancel")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_v_btn, {
                                          color: "blue-darken-1",
                                          variant: "text",
                                          onClick: $options.deleteItemConfirm
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("OK")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_v_spacer)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_card_title, { class: "text-h5" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Seguro que quiere borrar el registro?")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_btn, {
                                        color: "blue-darken-1",
                                        variant: "text",
                                        onClick: $options.closeDelete
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Cancel")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_v_btn, {
                                        color: "blue-darken-1",
                                        variant: "text",
                                        onClick: $options.deleteItemConfirm
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("OK")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_v_spacer)
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
                                createVNode(_component_v_card_title, { class: "text-h5" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Seguro que quiere borrar el registro?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_btn, {
                                      color: "blue-darken-1",
                                      variant: "text",
                                      onClick: $options.closeDelete
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Cancel")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_v_btn, {
                                      color: "blue-darken-1",
                                      variant: "text",
                                      onClick: $options.deleteItemConfirm
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("OK")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_v_spacer)
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
                          createTextVNode("Certificaciones")
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
                        modelValue: _ctx.dialog,
                        "onUpdate:modelValue": ($event) => _ctx.dialog = $event
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, {
                            icon: "mdi-update",
                            variant: "underlined",
                            ligth: "",
                            class: "ma-2",
                            color: "#662D91",
                            onClick: $options.initialize
                          }, null, 8, ["onClick"]),
                          createVNode(_component_v_btn, mergeProps({
                            icon: "mdi-account-multiple-plus",
                            variant: "underlined",
                            ligth: "",
                            class: "ma-2",
                            color: "#662D91"
                          }, props), null, 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_card, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_container, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: _ctx.editedItem.certificacion,
                                                "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                                label: "Certificación"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "6",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: _ctx.editedItem.comentario,
                                                "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                                label: "Comentario"
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
                                    variant: "text",
                                    onClick: $options.close
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cancelar ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_btn, {
                                    color: "blue-darken-1",
                                    variant: "text",
                                    onClick: $options.save
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Guardar ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_dialog, {
                        modelValue: _ctx.dialogDelete,
                        "onUpdate:modelValue": ($event) => _ctx.dialogDelete = $event,
                        "max-width": "500px"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "text-h5" }, {
                                default: withCtx(() => [
                                  createTextVNode("Seguro que quiere borrar el registro?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_btn, {
                                    color: "blue-darken-1",
                                    variant: "text",
                                    onClick: $options.closeDelete
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_btn, {
                                    color: "blue-darken-1",
                                    variant: "text",
                                    onClick: $options.deleteItemConfirm
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("OK")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_spacer)
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
                        createTextVNode("Certificaciones")
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
                      modelValue: _ctx.dialog,
                      "onUpdate:modelValue": ($event) => _ctx.dialog = $event
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_v_btn, {
                          icon: "mdi-update",
                          variant: "underlined",
                          ligth: "",
                          class: "ma-2",
                          color: "#662D91",
                          onClick: $options.initialize
                        }, null, 8, ["onClick"]),
                        createVNode(_component_v_btn, mergeProps({
                          icon: "mdi-account-multiple-plus",
                          variant: "underlined",
                          ligth: "",
                          class: "ma-2",
                          color: "#662D91"
                        }, props), null, 16)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_card, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_container, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: _ctx.editedItem.certificacion,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                              label: "Certificación"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "6",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: _ctx.editedItem.comentario,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                              label: "Comentario"
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
                                  variant: "text",
                                  onClick: $options.close
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cancelar ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  color: "blue-darken-1",
                                  variant: "text",
                                  onClick: $options.save
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Guardar ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_dialog, {
                      modelValue: _ctx.dialogDelete,
                      "onUpdate:modelValue": ($event) => _ctx.dialogDelete = $event,
                      "max-width": "500px"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "text-h5" }, {
                              default: withCtx(() => [
                                createTextVNode("Seguro que quiere borrar el registro?")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_actions, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_btn, {
                                  color: "blue-darken-1",
                                  variant: "text",
                                  onClick: $options.closeDelete
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  color: "blue-darken-1",
                                  variant: "text",
                                  onClick: $options.deleteItemConfirm
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("OK")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_spacer)
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
                      color: "#662D91",
                      icon: "mdi-account-edit",
                      onClick: ($event) => $options.editItem(item)
                    }), null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_btn, mergeProps(props, {
                        density: "compact",
                        class: "mr-2 ml-2",
                        color: "#662D91",
                        icon: "mdi-account-edit",
                        onClick: ($event) => $options.editItem(item)
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
                      color: "#662D91",
                      icon: "mdi-delete",
                      onClick: ($event) => $options.deleteItem(item)
                    }), null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_btn, mergeProps(props, {
                        density: "compact",
                        class: "mr-2 ml-2",
                        color: "#662D91",
                        icon: "mdi-delete",
                        onClick: ($event) => $options.deleteItem(item)
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
                      color: "#662D91",
                      icon: "mdi-account-edit",
                      onClick: ($event) => $options.editItem(item)
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
                      color: "#662D91",
                      icon: "mdi-delete",
                      onClick: ($event) => $options.deleteItem(item)
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
                type: "valiant",
                onClick: $options.initialize
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
                  type: "valiant",
                  onClick: $options.initialize
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Iniciar ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_data_table, {
            headers: _ctx.headers,
            items: _ctx.lista,
            "sort-by": [{ key: "AlergiaModel", order: "asc" }]
          }, {
            top: withCtx(() => [
              createVNode(_component_v_toolbar, { flat: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar_title, null, {
                    default: withCtx(() => [
                      createTextVNode("Certificaciones")
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
                    modelValue: _ctx.dialog,
                    "onUpdate:modelValue": ($event) => _ctx.dialog = $event
                  }, {
                    activator: withCtx(({ props }) => [
                      createVNode(_component_v_btn, {
                        icon: "mdi-update",
                        variant: "underlined",
                        ligth: "",
                        class: "ma-2",
                        color: "#662D91",
                        onClick: $options.initialize
                      }, null, 8, ["onClick"]),
                      createVNode(_component_v_btn, mergeProps({
                        icon: "mdi-account-multiple-plus",
                        variant: "underlined",
                        ligth: "",
                        class: "ma-2",
                        color: "#662D91"
                      }, props), null, 16)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_card, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_container, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: _ctx.editedItem.certificacion,
                                            "onUpdate:modelValue": ($event) => _ctx.editedItem.certificacion = $event,
                                            label: "Certificación"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: _ctx.editedItem.comentario,
                                            "onUpdate:modelValue": ($event) => _ctx.editedItem.comentario = $event,
                                            label: "Comentario"
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
                                variant: "text",
                                onClick: $options.close
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cancelar ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_btn, {
                                color: "blue-darken-1",
                                variant: "text",
                                onClick: $options.save
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Guardar ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_dialog, {
                    modelValue: _ctx.dialogDelete,
                    "onUpdate:modelValue": ($event) => _ctx.dialogDelete = $event,
                    "max-width": "500px"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-h5" }, {
                            default: withCtx(() => [
                              createTextVNode("Seguro que quiere borrar el registro?")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_btn, {
                                color: "blue-darken-1",
                                variant: "text",
                                onClick: $options.closeDelete
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_btn, {
                                color: "blue-darken-1",
                                variant: "text",
                                onClick: $options.deleteItemConfirm
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("OK")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_spacer)
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
                    color: "#662D91",
                    icon: "mdi-account-edit",
                    onClick: ($event) => $options.editItem(item)
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
                    color: "#662D91",
                    icon: "mdi-delete",
                    onClick: ($event) => $options.deleteItem(item)
                  }), null, 16, ["onClick"])
                ]),
                _: 2
              }, 1024)
            ]),
            "no-data": withCtx(() => [
              createVNode(_component_v_btn, {
                type: "valiant",
                onClick: $options.initialize
              }, {
                default: withCtx(() => [
                  createTextVNode(" Iniciar ")
                ]),
                _: 1
              }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/CertificacionesPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CertificacionesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/CertificacionesPage.vue"]]);
export {
  CertificacionesPage as default
};
//# sourceMappingURL=CertificacionesPage-LvSqRKgE.js.map
