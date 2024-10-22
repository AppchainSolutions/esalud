import { computed, resolveComponent, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, withModifiers, renderSlot, useSSRContext } from "vue";
import { usePage, router } from "@inertiajs/vue3";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VApp } from "vuetify/lib/components/VApp/index.mjs";
import { VAppBar, VAppBarTitle } from "vuetify/lib/components/VAppBar/index.mjs";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard } from "vuetify/lib/components/VCard/index.mjs";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VContainer } from "vuetify/lib/components/VGrid/index.mjs";
import { VIcon } from "vuetify/lib/components/VIcon/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
import { VListItem, VList } from "vuetify/lib/components/VList/index.mjs";
import { VMain } from "vuetify/lib/components/VMain/index.mjs";
import { VNavigationDrawer } from "vuetify/lib/components/VNavigationDrawer/index.mjs";
const logo = "/build/assets/logo_muni_casablanca-C8F-l-iQ.png";
const page = usePage();
const user = computed(() => page.props.auth.user);
const _sfc_main = {
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
    inicio() {
      router.get("dashboard");
    },
    paciente() {
      router.get("paciente");
    },
    servicio() {
      router.get("servicio");
    },
    profesional() {
      router.get("profesional");
    },
    psicologia() {
      router.get("psicologia-pacientes");
    },
    salir() {
      localStorage.removeItem("auth_token");
      router.post("logout");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_notifications = resolveComponent("notifications");
  _push(ssrRenderComponent(VApp, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VContainer, { fluid: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_notifications, {
                position: "bottom right",
                width: "40%"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCard, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VNavigationDrawer, {
                      modelValue: $data.drawer,
                      "onUpdate:modelValue": ($event) => $data.drawer = $event,
                      rail: $data.rail,
                      permanent: "",
                      onClick: ($event) => $data.rail = false,
                      color: "white"
                    }, {
                      append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VBtn, {
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
                            createVNode(VBtn, {
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
                          _push5(ssrRenderComponent(VListItem, {
                            nav: "",
                            class: "mt-0"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VImg, {
                                  src: $data.logo,
                                  id: "logo"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    src: $data.logo,
                                    id: "logo"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VList, {
                            density: "compact",
                            nav: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VListItem, {
                                  "prepend-icon": "mdi-home-city",
                                  color: "rgb(0, 0, 0)",
                                  title: "Dashboard",
                                  value: "Inicio",
                                  onClick: $options.inicio
                                }, null, _parent6, _scopeId5));
                                if ($data.user.isAdmin) {
                                  _push6(ssrRenderComponent(VListItem, {
                                    "prepend-icon": "mdi-human-male-female-child",
                                    title: "Gestión de Servicio",
                                    value: "Servicio",
                                    onClick: $options.servicio
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if ($data.user.isAdmin) {
                                  _push6(ssrRenderComponent(VListItem, {
                                    "prepend-icon": "mdi-account",
                                    title: "Ficha de Pacientes",
                                    value: "Paciente",
                                    onClick: $options.paciente
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if ($data.user.isAdmin) {
                                  _push6(ssrRenderComponent(VListItem, {
                                    "prepend-icon": "mdi-account-heart",
                                    title: "Registro de Profesionales",
                                    value: "Profesional",
                                    onClick: $options.profesional
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if ($data.user.isAdmin) {
                                  _push6(ssrRenderComponent(VListItem, {
                                    "prepend-icon": "mdi-head-cog-outline",
                                    title: "Atención Psicología",
                                    value: "Psicología",
                                    onClick: $options.psicologia
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VListItem, {
                                    "prepend-icon": "mdi-home-city",
                                    color: "rgb(0, 0, 0)",
                                    title: "Dashboard",
                                    value: "Inicio",
                                    onClick: $options.inicio
                                  }, null, 8, ["onClick"]),
                                  $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                    key: 0,
                                    "prepend-icon": "mdi-human-male-female-child",
                                    title: "Gestión de Servicio",
                                    value: "Servicio",
                                    onClick: $options.servicio
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                    key: 1,
                                    "prepend-icon": "mdi-account",
                                    title: "Ficha de Pacientes",
                                    value: "Paciente",
                                    onClick: $options.paciente
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                    key: 2,
                                    "prepend-icon": "mdi-account-heart",
                                    title: "Registro de Profesionales",
                                    value: "Profesional",
                                    onClick: $options.profesional
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                    key: 3,
                                    "prepend-icon": "mdi-head-cog-outline",
                                    title: "Atención Psicología",
                                    value: "Psicología",
                                    onClick: $options.psicologia
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  createVNode(VDivider)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VListItem, {
                              nav: "",
                              class: "mt-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: $data.logo,
                                  id: "logo"
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider),
                            createVNode(VList, {
                              density: "compact",
                              nav: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItem, {
                                  "prepend-icon": "mdi-home-city",
                                  color: "rgb(0, 0, 0)",
                                  title: "Dashboard",
                                  value: "Inicio",
                                  onClick: $options.inicio
                                }, null, 8, ["onClick"]),
                                $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  "prepend-icon": "mdi-human-male-female-child",
                                  title: "Gestión de Servicio",
                                  value: "Servicio",
                                  onClick: $options.servicio
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                  key: 1,
                                  "prepend-icon": "mdi-account",
                                  title: "Ficha de Pacientes",
                                  value: "Paciente",
                                  onClick: $options.paciente
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                  key: 2,
                                  "prepend-icon": "mdi-account-heart",
                                  title: "Registro de Profesionales",
                                  value: "Profesional",
                                  onClick: $options.profesional
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                  key: 3,
                                  "prepend-icon": "mdi-head-cog-outline",
                                  title: "Atención Psicología",
                                  value: "Psicología",
                                  onClick: $options.psicologia
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                createVNode(VDivider)
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
                      createVNode(VNavigationDrawer, {
                        modelValue: $data.drawer,
                        "onUpdate:modelValue": ($event) => $data.drawer = $event,
                        rail: $data.rail,
                        permanent: "",
                        onClick: ($event) => $data.rail = false,
                        color: "white"
                      }, {
                        append: withCtx(() => [
                          createVNode(VBtn, {
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
                          createVNode(VListItem, {
                            nav: "",
                            class: "mt-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: $data.logo,
                                id: "logo"
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VList, {
                            density: "compact",
                            nav: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItem, {
                                "prepend-icon": "mdi-home-city",
                                color: "rgb(0, 0, 0)",
                                title: "Dashboard",
                                value: "Inicio",
                                onClick: $options.inicio
                              }, null, 8, ["onClick"]),
                              $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                key: 0,
                                "prepend-icon": "mdi-human-male-female-child",
                                title: "Gestión de Servicio",
                                value: "Servicio",
                                onClick: $options.servicio
                              }, null, 8, ["onClick"])) : createCommentVNode("", true),
                              $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                key: 1,
                                "prepend-icon": "mdi-account",
                                title: "Ficha de Pacientes",
                                value: "Paciente",
                                onClick: $options.paciente
                              }, null, 8, ["onClick"])) : createCommentVNode("", true),
                              $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                key: 2,
                                "prepend-icon": "mdi-account-heart",
                                title: "Registro de Profesionales",
                                value: "Profesional",
                                onClick: $options.profesional
                              }, null, 8, ["onClick"])) : createCommentVNode("", true),
                              $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                                key: 3,
                                "prepend-icon": "mdi-head-cog-outline",
                                title: "Atención Psicología",
                                value: "Psicología",
                                onClick: $options.psicologia
                              }, null, 8, ["onClick"])) : createCommentVNode("", true),
                              createVNode(VDivider)
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
              _push3(ssrRenderComponent(VAppBar, { color: "#009AA4" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VAppBarTitle, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VIcon, {
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
                          _push5(` Bienvenido/a ${ssrInterpolate($data.user.name)} [ Municipalidad de Casablanca - Centro Comunitario ] `);
                        } else {
                          return [
                            createVNode(VIcon, {
                              onClick: withModifiers($options.toggleBtn, ["stop"]),
                              class: "ma-auto",
                              size: "x-large"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($options.icon), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createTextVNode(" Bienvenido/a " + toDisplayString($data.user.name) + " [ Municipalidad de Casablanca - Centro Comunitario ] ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VAppBarTitle, null, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            onClick: withModifiers($options.toggleBtn, ["stop"]),
                            class: "ma-auto",
                            size: "x-large"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($options.icon), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createTextVNode(" Bienvenido/a " + toDisplayString($data.user.name) + " [ Municipalidad de Casablanca - Centro Comunitario ] ", 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VMain, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VContainer, { fluid: "" }, {
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
                      createVNode(VContainer, { fluid: "" }, {
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
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VNavigationDrawer, {
                      modelValue: $data.drawer,
                      "onUpdate:modelValue": ($event) => $data.drawer = $event,
                      rail: $data.rail,
                      permanent: "",
                      onClick: ($event) => $data.rail = false,
                      color: "white"
                    }, {
                      append: withCtx(() => [
                        createVNode(VBtn, {
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
                        createVNode(VListItem, {
                          nav: "",
                          class: "mt-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: $data.logo,
                              id: "logo"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VList, {
                          density: "compact",
                          nav: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-home-city",
                              color: "rgb(0, 0, 0)",
                              title: "Dashboard",
                              value: "Inicio",
                              onClick: $options.inicio
                            }, null, 8, ["onClick"]),
                            $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                              key: 0,
                              "prepend-icon": "mdi-human-male-female-child",
                              title: "Gestión de Servicio",
                              value: "Servicio",
                              onClick: $options.servicio
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                              key: 1,
                              "prepend-icon": "mdi-account",
                              title: "Ficha de Pacientes",
                              value: "Paciente",
                              onClick: $options.paciente
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                              key: 2,
                              "prepend-icon": "mdi-account-heart",
                              title: "Registro de Profesionales",
                              value: "Profesional",
                              onClick: $options.profesional
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                              key: 3,
                              "prepend-icon": "mdi-head-cog-outline",
                              title: "Atención Psicología",
                              value: "Psicología",
                              onClick: $options.psicologia
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            createVNode(VDivider)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "rail", "onClick"])
                  ]),
                  _: 1
                }),
                createVNode(VAppBar, { color: "#009AA4" }, {
                  default: withCtx(() => [
                    createVNode(VAppBarTitle, null, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          onClick: withModifiers($options.toggleBtn, ["stop"]),
                          class: "ma-auto",
                          size: "x-large"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($options.icon), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createTextVNode(" Bienvenido/a " + toDisplayString($data.user.name) + " [ Municipalidad de Casablanca - Centro Comunitario ] ", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VMain, null, {
                  default: withCtx(() => [
                    createVNode(VContainer, { fluid: "" }, {
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
          createVNode(VContainer, { fluid: "" }, {
            default: withCtx(() => [
              createVNode(_component_notifications, {
                position: "bottom right",
                width: "40%"
              }),
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VNavigationDrawer, {
                    modelValue: $data.drawer,
                    "onUpdate:modelValue": ($event) => $data.drawer = $event,
                    rail: $data.rail,
                    permanent: "",
                    onClick: ($event) => $data.rail = false,
                    color: "white"
                  }, {
                    append: withCtx(() => [
                      createVNode(VBtn, {
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
                      createVNode(VListItem, {
                        nav: "",
                        class: "mt-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: $data.logo,
                            id: "logo"
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VList, {
                        density: "compact",
                        nav: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-home-city",
                            color: "rgb(0, 0, 0)",
                            title: "Dashboard",
                            value: "Inicio",
                            onClick: $options.inicio
                          }, null, 8, ["onClick"]),
                          $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                            key: 0,
                            "prepend-icon": "mdi-human-male-female-child",
                            title: "Gestión de Servicio",
                            value: "Servicio",
                            onClick: $options.servicio
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                            key: 1,
                            "prepend-icon": "mdi-account",
                            title: "Ficha de Pacientes",
                            value: "Paciente",
                            onClick: $options.paciente
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                            key: 2,
                            "prepend-icon": "mdi-account-heart",
                            title: "Registro de Profesionales",
                            value: "Profesional",
                            onClick: $options.profesional
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          $data.user.isAdmin ? (openBlock(), createBlock(VListItem, {
                            key: 3,
                            "prepend-icon": "mdi-head-cog-outline",
                            title: "Atención Psicología",
                            value: "Psicología",
                            onClick: $options.psicologia
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          createVNode(VDivider)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "rail", "onClick"])
                ]),
                _: 1
              }),
              createVNode(VAppBar, { color: "#009AA4" }, {
                default: withCtx(() => [
                  createVNode(VAppBarTitle, null, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        onClick: withModifiers($options.toggleBtn, ["stop"]),
                        class: "ma-auto",
                        size: "x-large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($options.icon), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createTextVNode(" Bienvenido/a " + toDisplayString($data.user.name) + " [ Municipalidad de Casablanca - Centro Comunitario ] ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, { fluid: "" }, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/blueshadows/www/esalud/resources/js/Layouts/AppLayout.vue"]]);
export {
  AppLayout as A
};
//# sourceMappingURL=AppLayout-S2vtq-1z.js.map
