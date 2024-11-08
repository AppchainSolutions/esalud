import { ref, withCtx, createVNode, unref, isRef, toDisplayString, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { useLogger } from "vue-logger-plugin";
import TableAction from "./TableAction-DdFl1Q_g.js";
import "./helper-zbPMJdu3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VDataTable } from "vuetify/lib/components/VDataTable/index.mjs";
import { VDialog } from "vuetify/lib/components/VDialog/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VContainer, VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VToolbar } from "vuetify/lib/components/VToolbar/index.mjs";
import "vuetify/lib/components/VTooltip/index.mjs";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = {
  __name: "DataTableComponente",
  __ssrInlineRender: true,
  props: {
    state: Object
  },
  setup(__props) {
    const props = __props;
    useLogger();
    let dialog = ref(false);
    const formCreate = () => {
      dialog.value = true;
    };
    function close() {
      dialog.value = false;
    }
    function getComponentType(type) {
      switch (type) {
        case "text":
          return "v-text-field";
        case "number":
          return "v-text-field";
        case "email":
          return "v-text-field";
        case "password":
          return "v-text-field";
        case "switch":
          return "v-switch";
        case "select":
          return "v-select";
        case "date":
          return "v-text-field";
        default:
          return "v-text-field";
      }
    }
    function getRows() {
      const rows = {};
      if (props.state && props.state.formItems) {
        props.state.formItems.forEach((item) => {
          rows[item.row] = rows[item.row] || [];
          rows[item.row].push(item);
        });
      }
      return Object.values(rows);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VDataTable, {
        headers: __props.state.headers,
        items: __props.state.config.tableItems
      }, {
        top: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VToolbar, { flat: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "mdi-account-multiple-plus",
                    variant: "tonal",
                    class: "ma-2",
                    color: "#009AA4",
                    onClick: formCreate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      icon: "mdi-account-multiple-plus",
                      variant: "tonal",
                      class: "ma-2",
                      color: "#009AA4",
                      onClick: formCreate
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VToolbar, { flat: "" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    icon: "mdi-account-multiple-plus",
                    variant: "tonal",
                    class: "ma-2",
                    color: "#009AA4",
                    onClick: formCreate
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        "item.actions": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(TableAction, {
              items: item,
              icon: "mdi-stethoscope",
              title: "Ficha Medica",
              "action-type": "editarFichaMedica"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableAction, {
              items: item,
              icon: "mdi-account-edit-outline",
              title: "Ficha Personal",
              "action-type": "editarFichaPersonal"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableAction, {
              items: item,
              icon: "mdi-delete-outline",
              title: "Borrar registro",
              "action-type": "eliminarRegistro"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(TableAction, {
                items: item,
                icon: "mdi-stethoscope",
                title: "Ficha Medica",
                "action-type": "editarFichaMedica"
              }, null, 8, ["items"]),
              createVNode(TableAction, {
                items: item,
                icon: "mdi-account-edit-outline",
                title: "Ficha Personal",
                "action-type": "editarFichaPersonal"
              }, null, 8, ["items"]),
              createVNode(TableAction, {
                items: item,
                icon: "mdi-delete-outline",
                title: "Borrar registro",
                "action-type": "eliminarRegistro"
              }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : dialog = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h5"${_scopeId3}>${ssrInterpolate(__props.state.config.formTitle)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-h5" }, toDisplayString(__props.state.config.formTitle), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { onSubmit: _ctx.submit }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VContainer, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(getRows(), (row, rowIndex) => {
                                            _push7(ssrRenderComponent(VRow, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(row, (item) => {
                                                    _push8(ssrRenderComponent(VCol, {
                                                      key: item.name,
                                                      cols: item.cols || 12,
                                                      md: item.md || 4,
                                                      sm: item.sm || 2
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          ssrRenderVNode(_push9, createVNode(resolveDynamicComponent(getComponentType(item.type)), {
                                                            label: item.label,
                                                            required: item.required,
                                                            clearable: item.clearable,
                                                            variant: item.variant,
                                                            items: item.items,
                                                            color: item.color,
                                                            inset: item.inset,
                                                            type: item.inputType,
                                                            modelValue: item.value,
                                                            "onUpdate:modelValue": ($event) => item.value = $event
                                                          }, null), _parent9, _scopeId8);
                                                        } else {
                                                          return [
                                                            (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                              label: item.label,
                                                              required: item.required,
                                                              clearable: item.clearable,
                                                              variant: item.variant,
                                                              items: item.items,
                                                              color: item.color,
                                                              inset: item.inset,
                                                              type: item.inputType,
                                                              modelValue: item.value,
                                                              "onUpdate:modelValue": ($event) => item.value = $event
                                                            }, null, 8, ["label", "required", "clearable", "variant", "items", "color", "inset", "type", "modelValue", "onUpdate:modelValue"]))
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                                      return openBlock(), createBlock(VCol, {
                                                        key: item.name,
                                                        cols: item.cols || 12,
                                                        md: item.md || 4,
                                                        sm: item.sm || 2
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                            label: item.label,
                                                            required: item.required,
                                                            clearable: item.clearable,
                                                            variant: item.variant,
                                                            items: item.items,
                                                            color: item.color,
                                                            inset: item.inset,
                                                            type: item.inputType,
                                                            modelValue: item.value,
                                                            "onUpdate:modelValue": ($event) => item.value = $event
                                                          }, null, 8, ["label", "required", "clearable", "variant", "items", "color", "inset", "type", "modelValue", "onUpdate:modelValue"]))
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["cols", "md", "sm"]);
                                                    }), 128))
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                          _push7(ssrRenderComponent(VCardActions, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSpacer, null, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "blue-darken-1",
                                                  variant: "tonal",
                                                  onClick: close
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Cancelar `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Cancelar ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  class: "me-4",
                                                  type: "submit"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` submit `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" submit ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSpacer),
                                                  createVNode(VBtn, {
                                                    color: "blue-darken-1",
                                                    variant: "tonal",
                                                    onClick: close
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Cancelar ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    class: "me-4",
                                                    type: "submit"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" submit ")
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
                                            (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                              return openBlock(), createBlock(VRow, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                                    return openBlock(), createBlock(VCol, {
                                                      key: item.name,
                                                      cols: item.cols || 12,
                                                      md: item.md || 4,
                                                      sm: item.sm || 2
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                          label: item.label,
                                                          required: item.required,
                                                          clearable: item.clearable,
                                                          variant: item.variant,
                                                          items: item.items,
                                                          color: item.color,
                                                          inset: item.inset,
                                                          type: item.inputType,
                                                          modelValue: item.value,
                                                          "onUpdate:modelValue": ($event) => item.value = $event
                                                        }, null, 8, ["label", "required", "clearable", "variant", "items", "color", "inset", "type", "modelValue", "onUpdate:modelValue"]))
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["cols", "md", "sm"]);
                                                  }), 128))
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 256)),
                                            createVNode(VCardActions, null, {
                                              default: withCtx(() => [
                                                createVNode(VSpacer),
                                                createVNode(VBtn, {
                                                  color: "blue-darken-1",
                                                  variant: "tonal",
                                                  onClick: close
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Cancelar ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  class: "me-4",
                                                  type: "submit"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" submit ")
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
                                      createVNode(VContainer, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                            return openBlock(), createBlock(VRow, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                                  return openBlock(), createBlock(VCol, {
                                                    key: item.name,
                                                    cols: item.cols || 12,
                                                    md: item.md || 4,
                                                    sm: item.sm || 2
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                        label: item.label,
                                                        required: item.required,
                                                        clearable: item.clearable,
                                                        variant: item.variant,
                                                        items: item.items,
                                                        color: item.color,
                                                        inset: item.inset,
                                                        type: item.inputType,
                                                        modelValue: item.value,
                                                        "onUpdate:modelValue": ($event) => item.value = $event
                                                      }, null, 8, ["label", "required", "clearable", "variant", "items", "color", "inset", "type", "modelValue", "onUpdate:modelValue"]))
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["cols", "md", "sm"]);
                                                }), 128))
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 256)),
                                          createVNode(VCardActions, null, {
                                            default: withCtx(() => [
                                              createVNode(VSpacer),
                                              createVNode(VBtn, {
                                                color: "blue-darken-1",
                                                variant: "tonal",
                                                onClick: close
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Cancelar ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                class: "me-4",
                                                type: "submit"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" submit ")
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
                                createVNode(VForm, {
                                  onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VContainer, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                          return openBlock(), createBlock(VRow, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                                return openBlock(), createBlock(VCol, {
                                                  key: item.name,
                                                  cols: item.cols || 12,
                                                  md: item.md || 4,
                                                  sm: item.sm || 2
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                      label: item.label,
                                                      required: item.required,
                                                      clearable: item.clearable,
                                                      variant: item.variant,
                                                      items: item.items,
                                                      color: item.color,
                                                      inset: item.inset,
                                                      type: item.inputType,
                                                      modelValue: item.value,
                                                      "onUpdate:modelValue": ($event) => item.value = $event
                                                    }, null, 8, ["label", "required", "clearable", "variant", "items", "color", "inset", "type", "modelValue", "onUpdate:modelValue"]))
                                                  ]),
                                                  _: 2
                                                }, 1032, ["cols", "md", "sm"]);
                                              }), 128))
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 256)),
                                        createVNode(VCardActions, null, {
                                          default: withCtx(() => [
                                            createVNode(VSpacer),
                                            createVNode(VBtn, {
                                              color: "blue-darken-1",
                                              variant: "tonal",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancelar ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              class: "me-4",
                                              type: "submit"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" submit ")
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
                                }, 8, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers(_ctx.submit, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                        return openBlock(), createBlock(VRow, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                              return openBlock(), createBlock(VCol, {
                                                key: item.name,
                                                cols: item.cols || 12,
                                                md: item.md || 4,
                                                sm: item.sm || 2
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                    label: item.label,
                                                    required: item.required,
                                                    clearable: item.clearable,
                                                    variant: item.variant,
                                                    items: item.items,
                                                    color: item.color,
                                                    inset: item.inset,
                                                    type: item.inputType,
                                                    modelValue: item.value,
                                                    "onUpdate:modelValue": ($event) => item.value = $event
                                                  }, null, 8, ["label", "required", "clearable", "variant", "items", "color", "inset", "type", "modelValue", "onUpdate:modelValue"]))
                                                ]),
                                                _: 2
                                              }, 1032, ["cols", "md", "sm"]);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 256)),
                                      createVNode(VCardActions, null, {
                                        default: withCtx(() => [
                                          createVNode(VSpacer),
                                          createVNode(VBtn, {
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            onClick: close
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancelar ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            class: "me-4",
                                            type: "submit"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" submit ")
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
                              }, 8, ["onSubmit"])
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h5" }, toDisplayString(__props.state.config.formTitle), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              onSubmit: withModifiers(_ctx.submit, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                      return openBlock(), createBlock(VRow, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                            return openBlock(), createBlock(VCol, {
                                              key: item.name,
                                              cols: item.cols || 12,
                                              md: item.md || 4,
                                              sm: item.sm || 2
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                  label: item.label,
                                                  required: item.required,
                                                  clearable: item.clearable,
                                                  variant: item.variant,
                                                  items: item.items,
                                                  color: item.color,
                                                  inset: item.inset,
                                                  type: item.inputType,
                                                  modelValue: item.value,
                                                  "onUpdate:modelValue": ($event) => item.value = $event
                                                }, null, 8, ["label", "required", "clearable", "variant", "items", "color", "inset", "type", "modelValue", "onUpdate:modelValue"]))
                                              ]),
                                              _: 2
                                            }, 1032, ["cols", "md", "sm"]);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 256)),
                                    createVNode(VCardActions, null, {
                                      default: withCtx(() => [
                                        createVNode(VSpacer),
                                        createVNode(VBtn, {
                                          color: "blue-darken-1",
                                          variant: "tonal",
                                          onClick: close
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancelar ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          class: "me-4",
                                          type: "submit"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" submit ")
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
                            }, 8, ["onSubmit"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h5" }, toDisplayString(__props.state.config.formTitle), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            onSubmit: withModifiers(_ctx.submit, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                    return openBlock(), createBlock(VRow, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: item.name,
                                            cols: item.cols || 12,
                                            md: item.md || 4,
                                            sm: item.sm || 2
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                label: item.label,
                                                required: item.required,
                                                clearable: item.clearable,
                                                variant: item.variant,
                                                items: item.items,
                                                color: item.color,
                                                inset: item.inset,
                                                type: item.inputType,
                                                modelValue: item.value,
                                                "onUpdate:modelValue": ($event) => item.value = $event
                                              }, null, 8, ["label", "required", "clearable", "variant", "items", "color", "inset", "type", "modelValue", "onUpdate:modelValue"]))
                                            ]),
                                            _: 2
                                          }, 1032, ["cols", "md", "sm"]);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 256)),
                                  createVNode(VCardActions, null, {
                                    default: withCtx(() => [
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        color: "blue-darken-1",
                                        variant: "tonal",
                                        onClick: close
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancelar ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        class: "me-4",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" submit ")
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
                          }, 8, ["onSubmit"])
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/DataTableComponente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DataTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/Componentes/DataTableComponente.vue"]]);
export {
  DataTable as default
};
//# sourceMappingURL=DataTableComponente-D19k9FRl.js.map
