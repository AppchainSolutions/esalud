import { ref, onMounted, mergeProps, withCtx, createVNode, toDisplayString, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { useLogger } from "vue-logger-plugin";
import { useForm } from "vee-validate";
import { g as getFormBuilderValues } from "./helper-C0cF_F2S.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = {
  __name: "FormSchemaPage",
  __ssrInlineRender: true,
  props: {
    state: Object
  },
  setup(__props) {
    useForm({
      validationSchema: {
        name(value) {
          if ((value == null ? void 0 : value.length) >= 2) return true;
          return "Name needs to be at least 2 characters.";
        },
        phone(value) {
          if (/^[0-9-]{7,}$/.test(value)) return true;
          return "Phone number needs to be at least 7 digits.";
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
          return "Must be a valid e-mail.";
        }
      }
    });
    const isValid = ref(false);
    const logger = useLogger();
    let dialog = ref(false);
    let formItems = ref([]);
    ref({});
    onMounted(async () => {
      try {
        const id = state.formName;
        const data = await getFormBuilderValues(id);
        formItems.value = Object.values(data);
        logger.log("Form data:", formItems.value);
      } catch (error) {
        logger.error("Error loading form items:", error);
      }
    });
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
        case "title-h2":
          return "h2";
        default:
          return "v-text-field";
      }
    }
    function getRows() {
      if (!formItems.value) return [];
      return formItems.value.reduce((rows, item) => {
        if (!rows[item.row]) {
          rows[item.row] = [];
        }
        rows[item.row].push(item);
        return rows;
      }, {});
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h5 ma-4 pa-4"${_scopeId3}>${ssrInterpolate(__props.state.config.formTitle)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-h5 ma-4 pa-4" }, toDisplayString(__props.state.config.formTitle), 1)
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
                              _push5(`<form${_scopeId4}>`);
                              _push5(ssrRenderComponent(VContainer, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(getRows(), (row, rowIndex) => {
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(row, (item) => {
                                              _push7(ssrRenderComponent(VCol, {
                                                key: item.name,
                                                cols: 12,
                                                lg: 2
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(
                                                      getComponentType(item.type)
                                                    ), {
                                                      name: item.name,
                                                      label: item.label,
                                                      type: item.type,
                                                      density: item.density,
                                                      "input-type": item.inputType,
                                                      variant: item.variant,
                                                      "v-model": item.value,
                                                      class: item.class,
                                                      chips: item.chips,
                                                      multiple: item.multiple,
                                                      clearable: item.clearable,
                                                      "hide-details": item.hide - _ctx.details,
                                                      inset: item.inset,
                                                      color: item.color || [],
                                                      rules: item.rules || [],
                                                      items: item.items || []
                                                    }, null), _parent8, _scopeId7);
                                                  } else {
                                                    return [
                                                      (openBlock(), createBlock(resolveDynamicComponent(
                                                        getComponentType(item.type)
                                                      ), {
                                                        name: item.name,
                                                        label: item.label,
                                                        type: item.type,
                                                        density: item.density,
                                                        "input-type": item.inputType,
                                                        variant: item.variant,
                                                        "v-model": item.value,
                                                        class: item.class,
                                                        chips: item.chips,
                                                        multiple: item.multiple,
                                                        clearable: item.clearable,
                                                        "hide-details": item.hide - _ctx.details,
                                                        inset: item.inset,
                                                        color: item.color || [],
                                                        rules: item.rules || [],
                                                        items: item.items || []
                                                      }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "v-model", "class", "chips", "multiple", "clearable", "hide-details", "inset", "color", "rules", "items"]))
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                                return openBlock(), createBlock(VCol, {
                                                  key: item.name,
                                                  cols: 12,
                                                  lg: 2
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(resolveDynamicComponent(
                                                      getComponentType(item.type)
                                                    ), {
                                                      name: item.name,
                                                      label: item.label,
                                                      type: item.type,
                                                      density: item.density,
                                                      "input-type": item.inputType,
                                                      variant: item.variant,
                                                      "v-model": item.value,
                                                      class: item.class,
                                                      chips: item.chips,
                                                      multiple: item.multiple,
                                                      clearable: item.clearable,
                                                      "hide-details": item.hide - _ctx.details,
                                                      inset: item.inset,
                                                      color: item.color || [],
                                                      rules: item.rules || [],
                                                      items: item.items || []
                                                    }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "v-model", "class", "chips", "multiple", "clearable", "hide-details", "inset", "color", "rules", "items"]))
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    _push6(ssrRenderComponent(VCardActions, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
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
                                          _push7(ssrRenderComponent(VBtn, {
                                            class: "me-4",
                                            type: "submit",
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            disabled: !isValid.value
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Grabar `);
                                              } else {
                                                return [
                                                  createTextVNode(" Grabar ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
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
                                              type: "submit",
                                              color: "blue-darken-1",
                                              variant: "tonal",
                                              disabled: !isValid.value
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Grabar ")
                                              ]),
                                              _: 1
                                            }, 8, ["disabled"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                        return openBlock(), createBlock(VRow, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                              return openBlock(), createBlock(VCol, {
                                                key: item.name,
                                                cols: 12,
                                                lg: 2
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(resolveDynamicComponent(
                                                    getComponentType(item.type)
                                                  ), {
                                                    name: item.name,
                                                    label: item.label,
                                                    type: item.type,
                                                    density: item.density,
                                                    "input-type": item.inputType,
                                                    variant: item.variant,
                                                    "v-model": item.value,
                                                    class: item.class,
                                                    chips: item.chips,
                                                    multiple: item.multiple,
                                                    clearable: item.clearable,
                                                    "hide-details": item.hide - _ctx.details,
                                                    inset: item.inset,
                                                    color: item.color || [],
                                                    rules: item.rules || [],
                                                    items: item.items || []
                                                  }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "v-model", "class", "chips", "multiple", "clearable", "hide-details", "inset", "color", "rules", "items"]))
                                                ]),
                                                _: 2
                                              }, 1024);
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
                                            type: "submit",
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            disabled: !isValid.value
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Grabar ")
                                            ]),
                                            _: 1
                                          }, 8, ["disabled"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</form>`);
                            } else {
                              return [
                                createVNode("form", {
                                  onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                }, [
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                        return openBlock(), createBlock(VRow, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                              return openBlock(), createBlock(VCol, {
                                                key: item.name,
                                                cols: 12,
                                                lg: 2
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(resolveDynamicComponent(
                                                    getComponentType(item.type)
                                                  ), {
                                                    name: item.name,
                                                    label: item.label,
                                                    type: item.type,
                                                    density: item.density,
                                                    "input-type": item.inputType,
                                                    variant: item.variant,
                                                    "v-model": item.value,
                                                    class: item.class,
                                                    chips: item.chips,
                                                    multiple: item.multiple,
                                                    clearable: item.clearable,
                                                    "hide-details": item.hide - _ctx.details,
                                                    inset: item.inset,
                                                    color: item.color || [],
                                                    rules: item.rules || [],
                                                    items: item.items || []
                                                  }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "v-model", "class", "chips", "multiple", "clearable", "hide-details", "inset", "color", "rules", "items"]))
                                                ]),
                                                _: 2
                                              }, 1024);
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
                                            type: "submit",
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            disabled: !isValid.value
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Grabar ")
                                            ]),
                                            _: 1
                                          }, 8, ["disabled"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("form", {
                                onSubmit: withModifiers(_ctx.submit, ["prevent"])
                              }, [
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                      return openBlock(), createBlock(VRow, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                            return openBlock(), createBlock(VCol, {
                                              key: item.name,
                                              cols: 12,
                                              lg: 2
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(resolveDynamicComponent(
                                                  getComponentType(item.type)
                                                ), {
                                                  name: item.name,
                                                  label: item.label,
                                                  type: item.type,
                                                  density: item.density,
                                                  "input-type": item.inputType,
                                                  variant: item.variant,
                                                  "v-model": item.value,
                                                  class: item.class,
                                                  chips: item.chips,
                                                  multiple: item.multiple,
                                                  clearable: item.clearable,
                                                  "hide-details": item.hide - _ctx.details,
                                                  inset: item.inset,
                                                  color: item.color || [],
                                                  rules: item.rules || [],
                                                  items: item.items || []
                                                }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "v-model", "class", "chips", "multiple", "clearable", "hide-details", "inset", "color", "rules", "items"]))
                                              ]),
                                              _: 2
                                            }, 1024);
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
                                          type: "submit",
                                          color: "blue-darken-1",
                                          variant: "tonal",
                                          disabled: !isValid.value
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Grabar ")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h5 ma-4 pa-4" }, toDisplayString(__props.state.config.formTitle), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode("form", {
                              onSubmit: withModifiers(_ctx.submit, ["prevent"])
                            }, [
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                    return openBlock(), createBlock(VRow, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: item.name,
                                            cols: 12,
                                            lg: 2
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(resolveDynamicComponent(
                                                getComponentType(item.type)
                                              ), {
                                                name: item.name,
                                                label: item.label,
                                                type: item.type,
                                                density: item.density,
                                                "input-type": item.inputType,
                                                variant: item.variant,
                                                "v-model": item.value,
                                                class: item.class,
                                                chips: item.chips,
                                                multiple: item.multiple,
                                                clearable: item.clearable,
                                                "hide-details": item.hide - _ctx.details,
                                                inset: item.inset,
                                                color: item.color || [],
                                                rules: item.rules || [],
                                                items: item.items || []
                                              }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "v-model", "class", "chips", "multiple", "clearable", "hide-details", "inset", "color", "rules", "items"]))
                                            ]),
                                            _: 2
                                          }, 1024);
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
                                        type: "submit",
                                        color: "blue-darken-1",
                                        variant: "tonal",
                                        disabled: !isValid.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Grabar ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
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
                      createVNode("span", { class: "text-h5 ma-4 pa-4" }, toDisplayString(__props.state.config.formTitle), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode("form", {
                            onSubmit: withModifiers(_ctx.submit, ["prevent"])
                          }, [
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                  return openBlock(), createBlock(VRow, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: item.name,
                                          cols: 12,
                                          lg: 2
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(
                                              getComponentType(item.type)
                                            ), {
                                              name: item.name,
                                              label: item.label,
                                              type: item.type,
                                              density: item.density,
                                              "input-type": item.inputType,
                                              variant: item.variant,
                                              "v-model": item.value,
                                              class: item.class,
                                              chips: item.chips,
                                              multiple: item.multiple,
                                              clearable: item.clearable,
                                              "hide-details": item.hide - _ctx.details,
                                              inset: item.inset,
                                              color: item.color || [],
                                              rules: item.rules || [],
                                              items: item.items || []
                                            }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "v-model", "class", "chips", "multiple", "clearable", "hide-details", "inset", "color", "rules", "items"]))
                                          ]),
                                          _: 2
                                        }, 1024);
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
                                      type: "submit",
                                      color: "blue-darken-1",
                                      variant: "tonal",
                                      disabled: !isValid.value
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Grabar ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/FormSchemaPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormSchemaPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/SubPages/FormSchemaPage.vue"]]);
export {
  FormSchemaPage as default
};
//# sourceMappingURL=FormSchemaPage-J32ufTau.js.map
