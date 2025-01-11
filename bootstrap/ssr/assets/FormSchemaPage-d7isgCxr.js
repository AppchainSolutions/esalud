import { ref, onMounted, mergeProps, withCtx, unref, createVNode, toDisplayString, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-CPH0Fv3Z.js";
import { useLogger } from "vue-logger-plugin";
import { usePage, router } from "@inertiajs/vue3";
import { u as useDataStore } from "./store-Dwa255xy.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VToolbar } from "vuetify/lib/components/VToolbar/index.mjs";
import "vue-loading-overlay";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VDivider/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
import "pinia";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "FormSchemaPage",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    useDataStore();
    const isValid = ref(false);
    const logger = useLogger();
    const formItems = ref([]);
    ref([]);
    ref({});
    onMounted(async () => {
      try {
        formItems = page.props.data;
      } catch (error) {
        logger.error("Error loading form items:", error);
      }
    });
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
      console.log(formItems);
    }
    function volver() {
      router.get("/paciente");
    }
    function storeForm(items) {
      logger.log("Form items:", Object.values(formItems.value));
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
                        _push4(ssrRenderComponent(VToolbar, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-h4 ma-4 pa-4"${_scopeId4}>${ssrInterpolate(unref(page).props.title)}</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-h4 ma-4 pa-4" }, toDisplayString(unref(page).props.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VToolbar, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h4 ma-4 pa-4" }, toDisplayString(unref(page).props.title), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form${_scopeId3}>`);
                        _push4(ssrRenderComponent(VContainer, {
                          fluid: "",
                          class: "ma-4 pa-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(getRows(), (row, rowIndex) => {
                                _push5(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(row, (item) => {
                                        _push6(ssrRenderComponent(VCol, {
                                          key: item.name,
                                          cols: 12,
                                          lg: 2,
                                          class: "ma-2"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(getComponentType(item.type)), {
                                                name: item.name,
                                                label: item.label,
                                                type: item.type,
                                                density: item.density,
                                                "input-type": item.inputType,
                                                variant: item.variant,
                                                class: item.class,
                                                chips: item.chips,
                                                multiple: item.multiple,
                                                clearable: !item.clearable,
                                                inset: item.inset,
                                                color: item.color || [],
                                                items: item.items,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: item.value,
                                                "onUpdate:modelValue": ($event) => item.value = $event
                                              }, null), _parent7, _scopeId6);
                                            } else {
                                              return [
                                                (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                  name: item.name,
                                                  label: item.label,
                                                  type: item.type,
                                                  density: item.density,
                                                  "input-type": item.inputType,
                                                  variant: item.variant,
                                                  class: item.class,
                                                  chips: item.chips,
                                                  multiple: item.multiple,
                                                  clearable: !item.clearable,
                                                  inset: item.inset,
                                                  color: item.color || [],
                                                  items: item.items,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: item.value,
                                                  "onUpdate:modelValue": ($event) => item.value = $event
                                                }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "class", "chips", "multiple", "clearable", "inset", "color", "items", "modelValue", "onUpdate:modelValue"]))
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: item.name,
                                            cols: 12,
                                            lg: 2,
                                            class: "ma-2"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                                name: item.name,
                                                label: item.label,
                                                type: item.type,
                                                density: item.density,
                                                "input-type": item.inputType,
                                                variant: item.variant,
                                                class: item.class,
                                                chips: item.chips,
                                                multiple: item.multiple,
                                                clearable: !item.clearable,
                                                inset: item.inset,
                                                color: item.color || [],
                                                items: item.items,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: item.value,
                                                "onUpdate:modelValue": ($event) => item.value = $event
                                              }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "class", "chips", "multiple", "clearable", "inset", "color", "items", "modelValue", "onUpdate:modelValue"]))
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                  return openBlock(), createBlock(VRow, { key: rowIndex }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: item.name,
                                          cols: 12,
                                          lg: 2,
                                          class: "ma-2"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                              name: item.name,
                                              label: item.label,
                                              type: item.type,
                                              density: item.density,
                                              "input-type": item.inputType,
                                              variant: item.variant,
                                              class: item.class,
                                              chips: item.chips,
                                              multiple: item.multiple,
                                              clearable: !item.clearable,
                                              inset: item.inset,
                                              color: item.color || [],
                                              items: item.items,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: item.value,
                                              "onUpdate:modelValue": ($event) => item.value = $event
                                            }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "class", "chips", "multiple", "clearable", "inset", "color", "items", "modelValue", "onUpdate:modelValue"]))
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardActions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "blue-darken-1",
                                variant: "tonal",
                                onClick: volver
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Volver `);
                                  } else {
                                    return [
                                      createTextVNode(" Volver ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                class: "me-4",
                                type: "submit",
                                color: "blue-darken-1",
                                variant: "tonal",
                                disabled: isValid.value,
                                onClick: ($event) => storeForm()
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Grabar `);
                                  } else {
                                    return [
                                      createTextVNode(" Grabar ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  color: "blue-darken-1",
                                  variant: "tonal",
                                  onClick: volver
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Volver ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  class: "me-4",
                                  type: "submit",
                                  color: "blue-darken-1",
                                  variant: "tonal",
                                  disabled: isValid.value,
                                  onClick: ($event) => storeForm()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Grabar ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</form>`);
                      } else {
                        return [
                          createVNode("form", {
                            onSubmit: withModifiers(_ctx.submit, ["prevent"])
                          }, [
                            createVNode(VContainer, {
                              fluid: "",
                              class: "ma-4 pa-4"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                  return openBlock(), createBlock(VRow, { key: rowIndex }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: item.name,
                                          cols: 12,
                                          lg: 2,
                                          class: "ma-2"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                              name: item.name,
                                              label: item.label,
                                              type: item.type,
                                              density: item.density,
                                              "input-type": item.inputType,
                                              variant: item.variant,
                                              class: item.class,
                                              chips: item.chips,
                                              multiple: item.multiple,
                                              clearable: !item.clearable,
                                              inset: item.inset,
                                              color: item.color || [],
                                              items: item.items,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: item.value,
                                              "onUpdate:modelValue": ($event) => item.value = $event
                                            }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "class", "chips", "multiple", "clearable", "inset", "color", "items", "modelValue", "onUpdate:modelValue"]))
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  color: "blue-darken-1",
                                  variant: "tonal",
                                  onClick: volver
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Volver ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  class: "me-4",
                                  type: "submit",
                                  color: "blue-darken-1",
                                  variant: "tonal",
                                  disabled: isValid.value,
                                  onClick: ($event) => storeForm()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Grabar ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"])
                              ]),
                              _: 1
                            })
                          ], 40, ["onSubmit"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode(VToolbar, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h4 ma-4 pa-4" }, toDisplayString(unref(page).props.title), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("form", {
                          onSubmit: withModifiers(_ctx.submit, ["prevent"])
                        }, [
                          createVNode(VContainer, {
                            fluid: "",
                            class: "ma-4 pa-4"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                                return openBlock(), createBlock(VRow, { key: rowIndex }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                      return openBlock(), createBlock(VCol, {
                                        key: item.name,
                                        cols: 12,
                                        lg: 2,
                                        class: "ma-2"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                            name: item.name,
                                            label: item.label,
                                            type: item.type,
                                            density: item.density,
                                            "input-type": item.inputType,
                                            variant: item.variant,
                                            class: item.class,
                                            chips: item.chips,
                                            multiple: item.multiple,
                                            clearable: !item.clearable,
                                            inset: item.inset,
                                            color: item.color || [],
                                            items: item.items,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: item.value,
                                            "onUpdate:modelValue": ($event) => item.value = $event
                                          }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "class", "chips", "multiple", "clearable", "inset", "color", "items", "modelValue", "onUpdate:modelValue"]))
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                color: "blue-darken-1",
                                variant: "tonal",
                                onClick: volver
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Volver ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                class: "me-4",
                                type: "submit",
                                color: "blue-darken-1",
                                variant: "tonal",
                                disabled: isValid.value,
                                onClick: ($event) => storeForm()
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Grabar ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "onClick"])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(VToolbar, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-h4 ma-4 pa-4" }, toDisplayString(unref(page).props.title), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("form", {
                        onSubmit: withModifiers(_ctx.submit, ["prevent"])
                      }, [
                        createVNode(VContainer, {
                          fluid: "",
                          class: "ma-4 pa-4"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(getRows(), (row, rowIndex) => {
                              return openBlock(), createBlock(VRow, { key: rowIndex }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(row, (item) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: item.name,
                                      cols: 12,
                                      lg: 2,
                                      class: "ma-2"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(getComponentType(item.type)), {
                                          name: item.name,
                                          label: item.label,
                                          type: item.type,
                                          density: item.density,
                                          "input-type": item.inputType,
                                          variant: item.variant,
                                          class: item.class,
                                          chips: item.chips,
                                          multiple: item.multiple,
                                          clearable: !item.clearable,
                                          inset: item.inset,
                                          color: item.color || [],
                                          items: item.items,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: item.value,
                                          "onUpdate:modelValue": ($event) => item.value = $event
                                        }, null, 8, ["name", "label", "type", "density", "input-type", "variant", "class", "chips", "multiple", "clearable", "inset", "color", "items", "modelValue", "onUpdate:modelValue"]))
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "blue-darken-1",
                              variant: "tonal",
                              onClick: volver
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Volver ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              class: "me-4",
                              type: "submit",
                              color: "blue-darken-1",
                              variant: "tonal",
                              disabled: isValid.value,
                              onClick: ($event) => storeForm()
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Grabar ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"])
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
      }, _parent));
    };
  }
});
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
//# sourceMappingURL=FormSchemaPage-d7isgCxr.js.map
