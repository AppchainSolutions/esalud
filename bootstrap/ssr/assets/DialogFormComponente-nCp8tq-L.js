import { mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VDialog } from "vuetify/lib/components/VDialog/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VContainer, VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VDialog, mergeProps({
    modelValue: _ctx.dialog,
    "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
    "max-width": "600px"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VForm, {
                ref: "form",
                onSubmit: _ctx.submit
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCardTitle, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<span class="headline"${_scopeId4}>${ssrInterpolate(_ctx.formTitle)}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "headline" }, toDisplayString(_ctx.formTitle), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VContainer, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<!--[-->`);
                                      ssrRenderList(_ctx.formFields, (field) => {
                                        _push7(ssrRenderComponent(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "4",
                                          key: field.name
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(VTextField, {
                                                modelValue: _ctx.state.editedItem[field.name],
                                                "onUpdate:modelValue": ($event) => _ctx.state.editedItem[field.name] = $event,
                                                label: field.label,
                                                rules: field.rules,
                                                required: ""
                                              }, null, _parent8, _scopeId7));
                                            } else {
                                              return [
                                                createVNode(VTextField, {
                                                  modelValue: _ctx.state.editedItem[field.name],
                                                  "onUpdate:modelValue": ($event) => _ctx.state.editedItem[field.name] = $event,
                                                  label: field.label,
                                                  rules: field.rules,
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      });
                                      _push7(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.formFields, (field) => {
                                          return openBlock(), createBlock(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                            key: field.name
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: _ctx.state.editedItem[field.name],
                                                "onUpdate:modelValue": ($event) => _ctx.state.editedItem[field.name] = $event,
                                                label: field.label,
                                                rules: field.rules,
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.formFields, (field) => {
                                        return openBlock(), createBlock(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "4",
                                          key: field.name
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: _ctx.state.editedItem[field.name],
                                              "onUpdate:modelValue": ($event) => _ctx.state.editedItem[field.name] = $event,
                                              label: field.label,
                                              rules: field.rules,
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
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
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.formFields, (field) => {
                                      return openBlock(), createBlock(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4",
                                        key: field.name
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: _ctx.state.editedItem[field.name],
                                            "onUpdate:modelValue": ($event) => _ctx.state.editedItem[field.name] = $event,
                                            label: field.label,
                                            rules: field.rules,
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                    _push4(ssrRenderComponent(VCardActions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            color: "blue darken-1",
                            text: "",
                            onClick: _ctx.close
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Cerrar`);
                              } else {
                                return [
                                  createTextVNode("Cerrar")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            color: "blue darken-1",
                            text: "",
                            type: "submit"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Grabar`);
                              } else {
                                return [
                                  createTextVNode("Grabar")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "blue darken-1",
                              text: "",
                              onClick: _ctx.close
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cerrar")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              color: "blue darken-1",
                              text: "",
                              type: "submit"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Grabar")
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
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createVNode("span", { class: "headline" }, toDisplayString(_ctx.formTitle), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.formFields, (field) => {
                                    return openBlock(), createBlock(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4",
                                      key: field.name
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: _ctx.state.editedItem[field.name],
                                          "onUpdate:modelValue": ($event) => _ctx.state.editedItem[field.name] = $event,
                                          label: field.label,
                                          rules: field.rules,
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "blue darken-1",
                            text: "",
                            onClick: _ctx.close
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cerrar")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "blue darken-1",
                            text: "",
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Grabar")
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VForm, {
                  ref: "form",
                  onSubmit: withModifiers(_ctx.submit, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "headline" }, toDisplayString(_ctx.formTitle), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.formFields, (field) => {
                                  return openBlock(), createBlock(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    key: field.name
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: _ctx.state.editedItem[field.name],
                                        "onUpdate:modelValue": ($event) => _ctx.state.editedItem[field.name] = $event,
                                        label: field.label,
                                        rules: field.rules,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "blue darken-1",
                          text: "",
                          onClick: _ctx.close
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cerrar")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "blue darken-1",
                          text: "",
                          type: "submit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Grabar")
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VForm, {
                ref: "form",
                onSubmit: withModifiers(_ctx.submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode("span", { class: "headline" }, toDisplayString(_ctx.formTitle), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.formFields, (field) => {
                                return openBlock(), createBlock(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  key: field.name
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: _ctx.state.editedItem[field.name],
                                      "onUpdate:modelValue": ($event) => _ctx.state.editedItem[field.name] = $event,
                                      label: field.label,
                                      rules: field.rules,
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "blue darken-1",
                        text: "",
                        onClick: _ctx.close
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cerrar")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "blue darken-1",
                        text: "",
                        type: "submit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Grabar")
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
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/DialogFormComponente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DialogFormComponente = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/Componentes/DialogFormComponente.vue"]]);
export {
  DialogFormComponente as default
};
//# sourceMappingURL=DialogFormComponente-nCp8tq-L.js.map
