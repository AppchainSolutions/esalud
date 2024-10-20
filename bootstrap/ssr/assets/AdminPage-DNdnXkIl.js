import { computed, resolveComponent, withCtx, createVNode, mergeProps, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, withModifiers, renderSlot, useSSRContext } from "vue";
import { usePage, router } from "@inertiajs/vue3";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const logo = "/build/assets/logo-HUznXB3o.jpg";
const page = usePage();
const user = computed(() => page.props.auth.user);
const _sfc_main$1 = {
  inheritAttrs: false,
  data() {
    return {
      logo,
      drawer: true,
      rail: false,
      isAdmin: true,
      approved: 0,
      user,
      props: null
    };
  },
  computed: {
    icon() {
      return this.rail ? "mdi-chevron-right-circle-outline" : "mdi-chevron-left-circle-outline";
    }
  },
  methods: {
    toggleBtn() {
      this.rail = !this.rail;
    },
    crear_equipo() {
      router.get("admin/equipo/crear");
    },
    configurar_equipo() {
      router.get("admin/equipo/config");
    },
    perfil_usuario() {
      router.get("admin/usuario/perfil");
    },
    mantencion() {
      router.get("/mantencion");
    },
    salir() {
      localStorage.removeItem("auth_token");
      router.post("/logout");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_container = resolveComponent("v-container");
  const _component_notifications = resolveComponent("notifications");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_group = resolveComponent("v-list-group");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_app_bar_title = resolveComponent("v-app-bar-title");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_main = resolveComponent("v-main");
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_container, { fluid: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_notifications, {
                position: "bottom right",
                width: "40%"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_navigation_drawer, {
                      modelValue: $data.drawer,
                      "onUpdate:modelValue": ($event) => $data.drawer = $event,
                      rail: $data.rail,
                      permanent: "",
                      onClick: ($event) => $data.rail = false,
                      color: "white"
                    }, {
                      append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_btn, {
                            block: "",
                            color: "#662d91",
                            onClick: $options.salir
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<b${_scopeId5}><i class="mdi mdi-location-exit" style="${ssrRenderStyle({ "font-size": "24px", "color": "white" })}"${_scopeId5}></i></b>`);
                              } else {
                                return [
                                  createVNode("b", null, [
                                    createVNode("i", {
                                      class: "mdi mdi-location-exit",
                                      style: { "font-size": "24px", "color": "white" }
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_btn, {
                              block: "",
                              color: "#662d91",
                              onClick: $options.salir
                            }, {
                              default: withCtx(() => [
                                createVNode("b", null, [
                                  createVNode("i", {
                                    class: "mdi mdi-location-exit",
                                    style: { "font-size": "24px", "color": "white" }
                                  })
                                ])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_list_item, {
                            nav: "",
                            class: "mt-0"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_img, {
                                  src: $data.logo,
                                  id: "logo"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_img, {
                                    src: $data.logo,
                                    id: "logo"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_divider, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_list, {
                            density: "compact",
                            nav: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if ($data.isAdmin) {
                                  _push6(ssrRenderComponent(_component_v_list_group, { value: "admin" }, {
                                    activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_list_item, mergeProps(props, {
                                          title: "Administración",
                                          "prepend-icon": "mdi-cog-outline"
                                        }), null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_list_item, mergeProps(props, {
                                            title: "Administración",
                                            "prepend-icon": "mdi-cog-outline"
                                          }), null, 16)
                                        ];
                                      }
                                    }),
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          "prepend-icon": "mdi-family-tree",
                                          title: "Roles",
                                          value: "roles",
                                          onClick: _ctx.roles
                                        }, null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "mdi-family-tree",
                                            title: "Roles",
                                            value: "roles",
                                            onClick: _ctx.roles
                                          }, null, 8, ["onClick"])
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                                    key: 0,
                                    value: "admin"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_list_item, mergeProps(props, {
                                        title: "Administración",
                                        "prepend-icon": "mdi-cog-outline"
                                      }), null, 16)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "mdi-family-tree",
                                        title: "Roles",
                                        value: "roles",
                                        onClick: _ctx.roles
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_list_item, {
                              nav: "",
                              class: "mt-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: $data.logo,
                                  id: "logo"
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider),
                            createVNode(_component_v_list, {
                              density: "compact",
                              nav: ""
                            }, {
                              default: withCtx(() => [
                                $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                                  key: 0,
                                  value: "admin"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_v_list_item, mergeProps(props, {
                                      title: "Administración",
                                      "prepend-icon": "mdi-cog-outline"
                                    }), null, 16)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "mdi-family-tree",
                                      title: "Roles",
                                      value: "roles",
                                      onClick: _ctx.roles
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
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
                      createVNode(_component_v_navigation_drawer, {
                        modelValue: $data.drawer,
                        "onUpdate:modelValue": ($event) => $data.drawer = $event,
                        rail: $data.rail,
                        permanent: "",
                        onClick: ($event) => $data.rail = false,
                        color: "white"
                      }, {
                        append: withCtx(() => [
                          createVNode(_component_v_btn, {
                            block: "",
                            color: "#662d91",
                            onClick: $options.salir
                          }, {
                            default: withCtx(() => [
                              createVNode("b", null, [
                                createVNode("i", {
                                  class: "mdi mdi-location-exit",
                                  style: { "font-size": "24px", "color": "white" }
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, {
                            nav: "",
                            class: "mt-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: $data.logo,
                                id: "logo"
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_list, {
                            density: "compact",
                            nav: ""
                          }, {
                            default: withCtx(() => [
                              $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                                key: 0,
                                value: "admin"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_list_item, mergeProps(props, {
                                    title: "Administración",
                                    "prepend-icon": "mdi-cog-outline"
                                  }), null, 16)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "mdi-family-tree",
                                    title: "Roles",
                                    value: "roles",
                                    onClick: _ctx.roles
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "rail", "onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_app_bar, { color: "#009AA4" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_app_bar_title, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, {
                            onClick: $options.toggleBtn,
                            class: "ma-auto",
                            size: "x-large"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`${ssrInterpolate($options.icon)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString($options.icon), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(` Vulco - VitamHC `);
                        } else {
                          return [
                            createVNode(_component_v_icon, {
                              onClick: withModifiers($options.toggleBtn, ["stop"]),
                              class: "ma-auto",
                              size: "x-large"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($options.icon), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createTextVNode(" Vulco - VitamHC ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_app_bar_title, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            onClick: withModifiers($options.toggleBtn, ["stop"]),
                            class: "ma-auto",
                            size: "x-large"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($options.icon), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createTextVNode(" Vulco - VitamHC ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_main, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_container, { fluid: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_container, { fluid: "" }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      })
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_notifications, {
                  position: "bottom right",
                  width: "40%"
                }),
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_navigation_drawer, {
                      modelValue: $data.drawer,
                      "onUpdate:modelValue": ($event) => $data.drawer = $event,
                      rail: $data.rail,
                      permanent: "",
                      onClick: ($event) => $data.rail = false,
                      color: "white"
                    }, {
                      append: withCtx(() => [
                        createVNode(_component_v_btn, {
                          block: "",
                          color: "#662d91",
                          onClick: $options.salir
                        }, {
                          default: withCtx(() => [
                            createVNode("b", null, [
                              createVNode("i", {
                                class: "mdi mdi-location-exit",
                                style: { "font-size": "24px", "color": "white" }
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, {
                          nav: "",
                          class: "mt-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, {
                              src: $data.logo,
                              id: "logo"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_list, {
                          density: "compact",
                          nav: ""
                        }, {
                          default: withCtx(() => [
                            $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                              key: 0,
                              value: "admin"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(_component_v_list_item, mergeProps(props, {
                                  title: "Administración",
                                  "prepend-icon": "mdi-cog-outline"
                                }), null, 16)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  "prepend-icon": "mdi-family-tree",
                                  title: "Roles",
                                  value: "roles",
                                  onClick: _ctx.roles
                                }, null, 8, ["onClick"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "rail", "onClick"])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_app_bar, { color: "#009AA4" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_app_bar_title, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          onClick: withModifiers($options.toggleBtn, ["stop"]),
                          class: "ma-auto",
                          size: "x-large"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($options.icon), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createTextVNode(" Vulco - VitamHC ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_main, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_container, { fluid: "" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_container, { fluid: "" }, {
            default: withCtx(() => [
              createVNode(_component_notifications, {
                position: "bottom right",
                width: "40%"
              }),
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_navigation_drawer, {
                    modelValue: $data.drawer,
                    "onUpdate:modelValue": ($event) => $data.drawer = $event,
                    rail: $data.rail,
                    permanent: "",
                    onClick: ($event) => $data.rail = false,
                    color: "white"
                  }, {
                    append: withCtx(() => [
                      createVNode(_component_v_btn, {
                        block: "",
                        color: "#662d91",
                        onClick: $options.salir
                      }, {
                        default: withCtx(() => [
                          createVNode("b", null, [
                            createVNode("i", {
                              class: "mdi mdi-location-exit",
                              style: { "font-size": "24px", "color": "white" }
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, {
                        nav: "",
                        class: "mt-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_img, {
                            src: $data.logo,
                            id: "logo"
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_list, {
                        density: "compact",
                        nav: ""
                      }, {
                        default: withCtx(() => [
                          $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                            key: 0,
                            value: "admin"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_list_item, mergeProps(props, {
                                title: "Administración",
                                "prepend-icon": "mdi-cog-outline"
                              }), null, 16)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                "prepend-icon": "mdi-family-tree",
                                title: "Roles",
                                value: "roles",
                                onClick: _ctx.roles
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "rail", "onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_v_app_bar, { color: "#009AA4" }, {
                default: withCtx(() => [
                  createVNode(_component_v_app_bar_title, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, {
                        onClick: withModifiers($options.toggleBtn, ["stop"]),
                        class: "ma-auto",
                        size: "x-large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($options.icon), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createTextVNode(" Vulco - VitamHC ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_main, null, {
                default: withCtx(() => [
                  createVNode(_component_v_container, { fluid: "" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppAdmin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__file", "/home/blueshadows/www/esalud/resources/js/Layouts/AppAdmin.vue"]]);
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "AdminPage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/AdminPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/Admin/AdminPage.vue"]]);
export {
  AdminPage as default
};
//# sourceMappingURL=AdminPage-DNdnXkIl.js.map
