import { computed, resolveComponent, withCtx, createVNode, openBlock, createBlock, createCommentVNode, mergeProps, createTextVNode, toDisplayString, withModifiers, renderSlot, useSSRContext } from "vue";
import { usePage, router } from "@inertiajs/vue3";
import { l as logo } from "./logo-DLUxz0ei.js";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
      router.get("/dashboard");
    },
    paciente() {
      router.get("/paciente");
    },
    atenciones() {
      router.get("/consulta/atencion_diaria");
    },
    licencia() {
      router.get("/consulta/licencia");
    },
    certificacion() {
      router.get("/consulta/certificacion");
    },
    diatConsulta() {
      router.get("/consulta/diat");
    },
    diepConsulta() {
      router.get("/consulta/diep");
    },
    vacunaConsulta() {
      router.get("/consulta/vacuna");
    },
    exsalud() {
      router.get("/consulta/exsalud");
    },
    exepo() {
      router.get("/consulta/exepo");
    },
    expsico() {
      router.get("/consulta/expsico");
    },
    exrespirador() {
      router.get("/consulta/exrespirador");
    },
    exequilibrio() {
      router.get("/consulta/exequilibrio");
    },
    exsomnolencia() {
      router.get("/consulta/exsomnolencia");
    },
    expvt() {
      router.get("/consulta/expvtmert");
    },
    exruido() {
      router.get("/consulta/exruido");
    },
    exmetales() {
      router.get("/consulta/exmetales");
    },
    exhumos() {
      router.get("/consulta/exhumonegro");
    },
    exaldehido() {
      router.get("/consulta/exaldehido");
    },
    exalcohol() {
      router.get("/consulta/exalcohol");
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
                                _push6(ssrRenderComponent(_component_v_list_item, {
                                  "prepend-icon": "mdi-home-city",
                                  color: "rgb(0, 0, 0)",
                                  title: "Dashboard",
                                  value: "Inicio",
                                  onClick: $options.inicio
                                }, null, _parent6, _scopeId5));
                                if ($data.user.isAdmin) {
                                  _push6(ssrRenderComponent(_component_v_list_item, {
                                    "prepend-icon": "mdi-account",
                                    title: "Paciente",
                                    value: "Paciente",
                                    onClick: $options.paciente
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "mdi-home-city",
                                    color: "rgb(0, 0, 0)",
                                    title: "Dashboard",
                                    value: "Inicio",
                                    onClick: $options.inicio
                                  }, null, 8, ["onClick"]),
                                  $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                                    key: 0,
                                    "prepend-icon": "mdi-account",
                                    title: "Paciente",
                                    value: "Paciente",
                                    onClick: $options.paciente
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  createVNode(_component_v_divider)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_list, {
                            density: "compact",
                            nav: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if ($data.isAdmin) {
                                  _push6(ssrRenderComponent(_component_v_list_group, { value: "consultas" }, {
                                    activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_list_item, mergeProps(props, {
                                          title: "Consultas",
                                          "prepend-icon": "mdi-database-search"
                                        }), null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_list_item, mergeProps(props, {
                                            title: "Consultas",
                                            "prepend-icon": "mdi-database-search"
                                          }), null, 16)
                                        ];
                                      }
                                    }),
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Atenciones Diarias",
                                          value: "consultas",
                                          onClick: $options.atenciones
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Licencia Medicas",
                                          value: "consultas",
                                          onClick: $options.licencia
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Certificaciones",
                                          value: "consultas",
                                          onClick: $options.certificacion
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "DIAT",
                                          value: "consultas",
                                          onClick: $options.diatConsulta
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "DIEP",
                                          value: "consultas",
                                          onClick: $options.diepConsulta
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Vacunas",
                                          value: "consultas",
                                          onClick: $options.vacunaConsulta
                                        }, null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_list_item, {
                                            title: "Atenciones Diarias",
                                            value: "consultas",
                                            onClick: $options.atenciones
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Licencia Medicas",
                                            value: "consultas",
                                            onClick: $options.licencia
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Certificaciones",
                                            value: "consultas",
                                            onClick: $options.certificacion
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "DIAT",
                                            value: "consultas",
                                            onClick: $options.diatConsulta
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "DIEP",
                                            value: "consultas",
                                            onClick: $options.diepConsulta
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Vacunas",
                                            value: "consultas",
                                            onClick: $options.vacunaConsulta
                                          }, null, 8, ["onClick"])
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if ($data.isAdmin) {
                                  _push6(ssrRenderComponent(_component_v_list_group, { value: "examenes" }, {
                                    activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_list_item, mergeProps(props, {
                                          title: "Exámenes",
                                          "prepend-icon": "mdi-invoice-text-plus"
                                        }), null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_list_item, mergeProps(props, {
                                            title: "Exámenes",
                                            "prepend-icon": "mdi-invoice-text-plus"
                                          }), null, 16)
                                        ];
                                      }
                                    }),
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Ocupacionales y Preocupacionales",
                                          value: "examenes",
                                          onClick: $options.exepo
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Psicosensometrico",
                                          value: "examenes",
                                          onClick: $options.expsico
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Estado de Salud",
                                          value: "examenes",
                                          onClick: $options.exsalud
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Respirador",
                                          value: "examenes",
                                          onClick: $options.exrespirador
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Equilibrio",
                                          value: "examenes",
                                          onClick: $options.exequilibrio
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Somnolencia",
                                          value: "examenes",
                                          onClick: $options.exsomnolencia
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVT MERT",
                                          value: "examenes",
                                          onClick: $options.expvt
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVMO Ruido",
                                          value: "examenes",
                                          onClick: $options.exruido
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVMO Metales",
                                          value: "examenes",
                                          onClick: $options.exmetales
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVMO Humos Negros",
                                          value: "examenes",
                                          onClick: $options.exhumos
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVMO Aldehidos",
                                          value: "examenes",
                                          onClick: $options.exaldehido
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Alcohol y drogas",
                                          value: "examenes",
                                          onClick: $options.exalcohol
                                        }, null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_list_item, {
                                            title: "Ocupacionales y Preocupacionales",
                                            value: "examenes",
                                            onClick: $options.exepo
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Psicosensometrico",
                                            value: "examenes",
                                            onClick: $options.expsico
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Estado de Salud",
                                            value: "examenes",
                                            onClick: $options.exsalud
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Respirador",
                                            value: "examenes",
                                            onClick: $options.exrespirador
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Equilibrio",
                                            value: "examenes",
                                            onClick: $options.exequilibrio
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Somnolencia",
                                            value: "examenes",
                                            onClick: $options.exsomnolencia
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVT MERT",
                                            value: "examenes",
                                            onClick: $options.expvt
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVMO Ruido",
                                            value: "examenes",
                                            onClick: $options.exruido
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVMO Metales",
                                            value: "examenes",
                                            onClick: $options.exmetales
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVMO Humos Negros",
                                            value: "examenes",
                                            onClick: $options.exhumos
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVMO Aldehidos",
                                            value: "examenes",
                                            onClick: $options.exaldehido
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Alcohol y drogas",
                                            value: "examenes",
                                            onClick: $options.exalcohol
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
                                    value: "consultas"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_list_item, mergeProps(props, {
                                        title: "Consultas",
                                        "prepend-icon": "mdi-database-search"
                                      }), null, 16)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        title: "Atenciones Diarias",
                                        value: "consultas",
                                        onClick: $options.atenciones
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Licencia Medicas",
                                        value: "consultas",
                                        onClick: $options.licencia
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Certificaciones",
                                        value: "consultas",
                                        onClick: $options.certificacion
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "DIAT",
                                        value: "consultas",
                                        onClick: $options.diatConsulta
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "DIEP",
                                        value: "consultas",
                                        onClick: $options.diepConsulta
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Vacunas",
                                        value: "consultas",
                                        onClick: $options.vacunaConsulta
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                                    key: 1,
                                    value: "examenes"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_list_item, mergeProps(props, {
                                        title: "Exámenes",
                                        "prepend-icon": "mdi-invoice-text-plus"
                                      }), null, 16)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        title: "Ocupacionales y Preocupacionales",
                                        value: "examenes",
                                        onClick: $options.exepo
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Psicosensometrico",
                                        value: "examenes",
                                        onClick: $options.expsico
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Estado de Salud",
                                        value: "examenes",
                                        onClick: $options.exsalud
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Respirador",
                                        value: "examenes",
                                        onClick: $options.exrespirador
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Equilibrio",
                                        value: "examenes",
                                        onClick: $options.exequilibrio
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Somnolencia",
                                        value: "examenes",
                                        onClick: $options.exsomnolencia
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVT MERT",
                                        value: "examenes",
                                        onClick: $options.expvt
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVMO Ruido",
                                        value: "examenes",
                                        onClick: $options.exruido
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVMO Metales",
                                        value: "examenes",
                                        onClick: $options.exmetales
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVMO Humos Negros",
                                        value: "examenes",
                                        onClick: $options.exhumos
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVMO Aldehidos",
                                        value: "examenes",
                                        onClick: $options.exaldehido
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Alcohol y drogas",
                                        value: "examenes",
                                        onClick: $options.exalcohol
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
                                createVNode(_component_v_list_item, {
                                  "prepend-icon": "mdi-home-city",
                                  color: "rgb(0, 0, 0)",
                                  title: "Dashboard",
                                  value: "Inicio",
                                  onClick: $options.inicio
                                }, null, 8, ["onClick"]),
                                $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                                  key: 0,
                                  "prepend-icon": "mdi-account",
                                  title: "Paciente",
                                  value: "Paciente",
                                  onClick: $options.paciente
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                createVNode(_component_v_divider)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list, {
                              density: "compact",
                              nav: ""
                            }, {
                              default: withCtx(() => [
                                $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                                  key: 0,
                                  value: "consultas"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_v_list_item, mergeProps(props, {
                                      title: "Consultas",
                                      "prepend-icon": "mdi-database-search"
                                    }), null, 16)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      title: "Atenciones Diarias",
                                      value: "consultas",
                                      onClick: $options.atenciones
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Licencia Medicas",
                                      value: "consultas",
                                      onClick: $options.licencia
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Certificaciones",
                                      value: "consultas",
                                      onClick: $options.certificacion
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "DIAT",
                                      value: "consultas",
                                      onClick: $options.diatConsulta
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "DIEP",
                                      value: "consultas",
                                      onClick: $options.diepConsulta
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Vacunas",
                                      value: "consultas",
                                      onClick: $options.vacunaConsulta
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                                  key: 1,
                                  value: "examenes"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_v_list_item, mergeProps(props, {
                                      title: "Exámenes",
                                      "prepend-icon": "mdi-invoice-text-plus"
                                    }), null, 16)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      title: "Ocupacionales y Preocupacionales",
                                      value: "examenes",
                                      onClick: $options.exepo
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Psicosensometrico",
                                      value: "examenes",
                                      onClick: $options.expsico
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Estado de Salud",
                                      value: "examenes",
                                      onClick: $options.exsalud
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Respirador",
                                      value: "examenes",
                                      onClick: $options.exrespirador
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Equilibrio",
                                      value: "examenes",
                                      onClick: $options.exequilibrio
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Somnolencia",
                                      value: "examenes",
                                      onClick: $options.exsomnolencia
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVT MERT",
                                      value: "examenes",
                                      onClick: $options.expvt
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVMO Ruido",
                                      value: "examenes",
                                      onClick: $options.exruido
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVMO Metales",
                                      value: "examenes",
                                      onClick: $options.exmetales
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVMO Humos Negros",
                                      value: "examenes",
                                      onClick: $options.exhumos
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVMO Aldehidos",
                                      value: "examenes",
                                      onClick: $options.exaldehido
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Alcohol y drogas",
                                      value: "examenes",
                                      onClick: $options.exalcohol
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
                              createVNode(_component_v_list_item, {
                                "prepend-icon": "mdi-home-city",
                                color: "rgb(0, 0, 0)",
                                title: "Dashboard",
                                value: "Inicio",
                                onClick: $options.inicio
                              }, null, 8, ["onClick"]),
                              $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                                key: 0,
                                "prepend-icon": "mdi-account",
                                title: "Paciente",
                                value: "Paciente",
                                onClick: $options.paciente
                              }, null, 8, ["onClick"])) : createCommentVNode("", true),
                              createVNode(_component_v_divider)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list, {
                            density: "compact",
                            nav: ""
                          }, {
                            default: withCtx(() => [
                              $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                                key: 0,
                                value: "consultas"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_list_item, mergeProps(props, {
                                    title: "Consultas",
                                    "prepend-icon": "mdi-database-search"
                                  }), null, 16)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "Atenciones Diarias",
                                    value: "consultas",
                                    onClick: $options.atenciones
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Licencia Medicas",
                                    value: "consultas",
                                    onClick: $options.licencia
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Certificaciones",
                                    value: "consultas",
                                    onClick: $options.certificacion
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "DIAT",
                                    value: "consultas",
                                    onClick: $options.diatConsulta
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "DIEP",
                                    value: "consultas",
                                    onClick: $options.diepConsulta
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Vacunas",
                                    value: "consultas",
                                    onClick: $options.vacunaConsulta
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                                key: 1,
                                value: "examenes"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_list_item, mergeProps(props, {
                                    title: "Exámenes",
                                    "prepend-icon": "mdi-invoice-text-plus"
                                  }), null, 16)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "Ocupacionales y Preocupacionales",
                                    value: "examenes",
                                    onClick: $options.exepo
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Psicosensometrico",
                                    value: "examenes",
                                    onClick: $options.expsico
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Estado de Salud",
                                    value: "examenes",
                                    onClick: $options.exsalud
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Respirador",
                                    value: "examenes",
                                    onClick: $options.exrespirador
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Equilibrio",
                                    value: "examenes",
                                    onClick: $options.exequilibrio
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Somnolencia",
                                    value: "examenes",
                                    onClick: $options.exsomnolencia
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVT MERT",
                                    value: "examenes",
                                    onClick: $options.expvt
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVMO Ruido",
                                    value: "examenes",
                                    onClick: $options.exruido
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVMO Metales",
                                    value: "examenes",
                                    onClick: $options.exmetales
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVMO Humos Negros",
                                    value: "examenes",
                                    onClick: $options.exhumos
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVMO Aldehidos",
                                    value: "examenes",
                                    onClick: $options.exaldehido
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Alcohol y drogas",
                                    value: "examenes",
                                    onClick: $options.exalcohol
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
                          _push5(` Bienvenido/a ${ssrInterpolate($data.user.name)} [ Vulco ~ VitamHC ] `);
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
                            createTextVNode(" Bienvenido/a " + toDisplayString($data.user.name) + " [ Vulco ~ VitamHC ] ", 1)
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
                          createTextVNode(" Bienvenido/a " + toDisplayString($data.user.name) + " [ Vulco ~ VitamHC ] ", 1)
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
                            createVNode(_component_v_list_item, {
                              "prepend-icon": "mdi-home-city",
                              color: "rgb(0, 0, 0)",
                              title: "Dashboard",
                              value: "Inicio",
                              onClick: $options.inicio
                            }, null, 8, ["onClick"]),
                            $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                              key: 0,
                              "prepend-icon": "mdi-account",
                              title: "Paciente",
                              value: "Paciente",
                              onClick: $options.paciente
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            createVNode(_component_v_divider)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list, {
                          density: "compact",
                          nav: ""
                        }, {
                          default: withCtx(() => [
                            $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                              key: 0,
                              value: "consultas"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(_component_v_list_item, mergeProps(props, {
                                  title: "Consultas",
                                  "prepend-icon": "mdi-database-search"
                                }), null, 16)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  title: "Atenciones Diarias",
                                  value: "consultas",
                                  onClick: $options.atenciones
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Licencia Medicas",
                                  value: "consultas",
                                  onClick: $options.licencia
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Certificaciones",
                                  value: "consultas",
                                  onClick: $options.certificacion
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "DIAT",
                                  value: "consultas",
                                  onClick: $options.diatConsulta
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "DIEP",
                                  value: "consultas",
                                  onClick: $options.diepConsulta
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Vacunas",
                                  value: "consultas",
                                  onClick: $options.vacunaConsulta
                                }, null, 8, ["onClick"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                              key: 1,
                              value: "examenes"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(_component_v_list_item, mergeProps(props, {
                                  title: "Exámenes",
                                  "prepend-icon": "mdi-invoice-text-plus"
                                }), null, 16)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  title: "Ocupacionales y Preocupacionales",
                                  value: "examenes",
                                  onClick: $options.exepo
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Psicosensometrico",
                                  value: "examenes",
                                  onClick: $options.expsico
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Estado de Salud",
                                  value: "examenes",
                                  onClick: $options.exsalud
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Respirador",
                                  value: "examenes",
                                  onClick: $options.exrespirador
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Equilibrio",
                                  value: "examenes",
                                  onClick: $options.exequilibrio
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Somnolencia",
                                  value: "examenes",
                                  onClick: $options.exsomnolencia
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVT MERT",
                                  value: "examenes",
                                  onClick: $options.expvt
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVMO Ruido",
                                  value: "examenes",
                                  onClick: $options.exruido
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVMO Metales",
                                  value: "examenes",
                                  onClick: $options.exmetales
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVMO Humos Negros",
                                  value: "examenes",
                                  onClick: $options.exhumos
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVMO Aldehidos",
                                  value: "examenes",
                                  onClick: $options.exaldehido
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Alcohol y drogas",
                                  value: "examenes",
                                  onClick: $options.exalcohol
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
                        createTextVNode(" Bienvenido/a " + toDisplayString($data.user.name) + " [ Vulco ~ VitamHC ] ", 1)
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
                          createVNode(_component_v_list_item, {
                            "prepend-icon": "mdi-home-city",
                            color: "rgb(0, 0, 0)",
                            title: "Dashboard",
                            value: "Inicio",
                            onClick: $options.inicio
                          }, null, 8, ["onClick"]),
                          $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                            key: 0,
                            "prepend-icon": "mdi-account",
                            title: "Paciente",
                            value: "Paciente",
                            onClick: $options.paciente
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          createVNode(_component_v_divider)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list, {
                        density: "compact",
                        nav: ""
                      }, {
                        default: withCtx(() => [
                          $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                            key: 0,
                            value: "consultas"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_list_item, mergeProps(props, {
                                title: "Consultas",
                                "prepend-icon": "mdi-database-search"
                              }), null, 16)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                title: "Atenciones Diarias",
                                value: "consultas",
                                onClick: $options.atenciones
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Licencia Medicas",
                                value: "consultas",
                                onClick: $options.licencia
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Certificaciones",
                                value: "consultas",
                                onClick: $options.certificacion
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "DIAT",
                                value: "consultas",
                                onClick: $options.diatConsulta
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "DIEP",
                                value: "consultas",
                                onClick: $options.diepConsulta
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Vacunas",
                                value: "consultas",
                                onClick: $options.vacunaConsulta
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          $data.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
                            key: 1,
                            value: "examenes"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_list_item, mergeProps(props, {
                                title: "Exámenes",
                                "prepend-icon": "mdi-invoice-text-plus"
                              }), null, 16)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                title: "Ocupacionales y Preocupacionales",
                                value: "examenes",
                                onClick: $options.exepo
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Psicosensometrico",
                                value: "examenes",
                                onClick: $options.expsico
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Estado de Salud",
                                value: "examenes",
                                onClick: $options.exsalud
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Respirador",
                                value: "examenes",
                                onClick: $options.exrespirador
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Equilibrio",
                                value: "examenes",
                                onClick: $options.exequilibrio
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Somnolencia",
                                value: "examenes",
                                onClick: $options.exsomnolencia
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVT MERT",
                                value: "examenes",
                                onClick: $options.expvt
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVMO Ruido",
                                value: "examenes",
                                onClick: $options.exruido
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVMO Metales",
                                value: "examenes",
                                onClick: $options.exmetales
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVMO Humos Negros",
                                value: "examenes",
                                onClick: $options.exhumos
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVMO Aldehidos",
                                value: "examenes",
                                onClick: $options.exaldehido
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Alcohol y drogas",
                                value: "examenes",
                                onClick: $options.exalcohol
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
                      createTextVNode(" Bienvenido/a " + toDisplayString($data.user.name) + " [ Vulco ~ VitamHC ] ", 1)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/blueshadows/www/vulco/resources/js/Layouts/AppLayout.vue"]]);
export {
  AppLayout as A
};
//# sourceMappingURL=AppLayout-ClkZgk8r.js.map
