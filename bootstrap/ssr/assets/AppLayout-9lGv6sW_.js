import { resolveComponent, withCtx, createVNode, createBlock, createCommentVNode, openBlock, mergeProps, createTextVNode, toDisplayString, withModifiers, renderSlot, computed, ref, useSSRContext } from "vue";
import { router, usePage } from "@inertiajs/vue3";
import { l as logo } from "./logo-DLUxz0ei.js";
import { useLoading } from "vue-loading-overlay";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const $loading = useLoading({
  color: "#662d91",
  loader: "dots",
  backgroundColor: "#662d91",
  opacity: 0.2
});
ref(false);
ref(false);
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
    home() {
      const loader = $loading.show();
      router.visit("/", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    dashboard() {
      const loader = $loading.show();
      router.visit("/dashboard", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    paciente() {
      const loader = $loading.show();
      router.visit("/paciente", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    mi_dashboard() {
      const loader = $loading.show();
      router.visit("/paciente/mi_dashboard", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        },
        onError: () => {
          loader.hide();
        }
      });
    },
    mi_perfil_personal() {
      const loader = $loading.show();
      router.visit("/paciente/mi_perfil_personal", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    mi_perfil_medico() {
      const loader = $loading.show();
      router.visit("/paciente/mi_perfil_medico", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    atenciones() {
      const loader = $loading.show();
      router.visit("/consulta/atencion_diaria", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    licencia() {
      const loader = $loading.show();
      router.visit("/consulta/licencia", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    certificacion() {
      const loader = $loading.show();
      router.visit("/consulta/certificacion", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    diatConsulta() {
      const loader = $loading.show();
      router.visit("/consulta/diat", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    diepConsulta() {
      const loader = $loading.show();
      router.visit("/consulta/diep", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    vacunaConsulta() {
      const loader = $loading.show();
      router.visit("/consulta/vacuna", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exsalud() {
      const loader = $loading.show();
      router.visit("/consulta/exsalud", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exepo() {
      const loader = $loading.show();
      router.visit("/consulta/exepo", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    expsico() {
      const loader = $loading.show();
      router.visit("/consulta/expsico", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exrespirador() {
      const loader = $loading.show();
      router.visit("/consulta/exrespirador", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exequilibrio() {
      const loader = $loading.show();
      router.visit("/consulta/exequilibrio", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exsomnolencia() {
      const loader = $loading.show();
      router.visit("/consulta/exsomnolencia", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    expvt() {
      const loader = $loading.show();
      router.visit("/consulta/expvtmert", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exruido() {
      const loader = $loading.show();
      router.visit("/consulta/exruido", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exmetal() {
      const loader = $loading.show();
      router.visit("/consulta/exmetal", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exhumos() {
      const loader = $loading.show();
      router.visit("/consulta/exhumonegro", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exaldehido() {
      const loader = $loading.show();
      router.visit("/consulta/exaldehido", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    exalcohol() {
      const loader = $loading.show();
      router.visit("/consulta/exalcohol", {
        method: "get",
        onSuccess: () => {
          loader.hide();
        }
      });
    },
    salir() {
      const loader = $loading.show();
      localStorage.removeItem("auth_token");
      router.visit("/logout", {
        method: "post",
        onSuccess: () => {
          loader.hide();
        }
      });
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
                                  "prepend-icon": "mdi-home",
                                  color: "rgb(0, 0, 0)",
                                  title: "Inicio",
                                  onClick: $options.home
                                }, null, _parent6, _scopeId5));
                                if ($data.user.isAdmin) {
                                  _push6(ssrRenderComponent(_component_v_list_item, {
                                    "prepend-icon": "mdi-view-dashboard",
                                    color: "rgb(0, 0, 0)",
                                    title: "Dashboard",
                                    onClick: $options.dashboard
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if ($data.user.isAdmin == false && $data.user.rol == "paciente") {
                                  _push6(ssrRenderComponent(_component_v_list_item, {
                                    "prepend-icon": "mdi-monitor-dashboard",
                                    color: "rgb(0, 0, 0)",
                                    title: "Mi resumen personal",
                                    onClick: $options.mi_dashboard
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if ($data.user.isAdmin) {
                                  _push6(ssrRenderComponent(_component_v_list_item, {
                                    "prepend-icon": "mdi-account",
                                    title: "Paciente",
                                    onClick: $options.paciente
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (!$data.user.isAdmin && $data.user.rol == "paciente") {
                                  _push6(ssrRenderComponent(_component_v_list_item, {
                                    "prepend-icon": "mdi-account",
                                    title: "Mis datos personales",
                                    onClick: $options.mi_perfil_personal
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (!$data.user.isAdmin && $data.user.rol == "paciente") {
                                  _push6(ssrRenderComponent(_component_v_list_item, {
                                    "prepend-icon": "mdi-clipboard-pulse",
                                    title: "Mi datos médico",
                                    onClick: $options.mi_perfil_medico
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "mdi-home",
                                    color: "rgb(0, 0, 0)",
                                    title: "Inicio",
                                    onClick: $options.home
                                  }, null, 8, ["onClick"]),
                                  $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                                    key: 0,
                                    "prepend-icon": "mdi-view-dashboard",
                                    color: "rgb(0, 0, 0)",
                                    title: "Dashboard",
                                    onClick: $options.dashboard
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  $data.user.isAdmin == false && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                                    key: 1,
                                    "prepend-icon": "mdi-monitor-dashboard",
                                    color: "rgb(0, 0, 0)",
                                    title: "Mi resumen personal",
                                    onClick: $options.mi_dashboard
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                                    key: 2,
                                    "prepend-icon": "mdi-account",
                                    title: "Paciente",
                                    onClick: $options.paciente
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                                    key: 3,
                                    "prepend-icon": "mdi-account",
                                    title: "Mis datos personales",
                                    onClick: $options.mi_perfil_personal
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                                    key: 4,
                                    "prepend-icon": "mdi-clipboard-pulse",
                                    title: "Mi datos médico",
                                    onClick: $options.mi_perfil_medico
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
                                if ($data.user.isAdmin) {
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
                                          value: "atenciones",
                                          onClick: $options.atenciones
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Licencia Medicas",
                                          value: "licencias",
                                          onClick: $options.licencia
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Certificaciones",
                                          value: "certificaciones",
                                          onClick: $options.certificacion
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "DIAT",
                                          value: "diat",
                                          onClick: $options.diatConsulta
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "DIEP",
                                          value: "diep",
                                          onClick: $options.diepConsulta
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Vacunas",
                                          value: "vacunas",
                                          onClick: $options.vacunaConsulta
                                        }, null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_list_item, {
                                            title: "Atenciones Diarias",
                                            value: "atenciones",
                                            onClick: $options.atenciones
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Licencia Medicas",
                                            value: "licencias",
                                            onClick: $options.licencia
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Certificaciones",
                                            value: "certificaciones",
                                            onClick: $options.certificacion
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "DIAT",
                                            value: "diat",
                                            onClick: $options.diatConsulta
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "DIEP",
                                            value: "diep",
                                            onClick: $options.diepConsulta
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Vacunas",
                                            value: "vacunas",
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
                                if ($data.user.isAdmin) {
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
                                          value: "epo",
                                          onClick: $options.exepo
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Psicosensometrico",
                                          value: "psico",
                                          onClick: $options.expsico
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Estado de Salud",
                                          value: "salud",
                                          onClick: $options.exsalud
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Respirador",
                                          value: "respirador",
                                          onClick: $options.exrespirador
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Equilibrio",
                                          value: "equilibrio",
                                          onClick: $options.exequilibrio
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Somnolencia",
                                          value: "somnolencia",
                                          onClick: $options.exsomnolencia
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVT MERT",
                                          value: "tmert",
                                          onClick: $options.expvt
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVMO Ruido",
                                          value: "ruido",
                                          onClick: $options.exruido
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVMO Metales",
                                          value: "metales",
                                          onClick: $options.exmetal
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVMO Humos Negros",
                                          value: "humos",
                                          onClick: $options.exhumos
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "PVMO Aldehidos",
                                          value: "aldehidos",
                                          onClick: $options.exaldehido
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_list_item, {
                                          title: "Alcohol y drogas",
                                          value: "alcohol",
                                          onClick: $options.exalcohol
                                        }, null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_list_item, {
                                            title: "Ocupacionales y Preocupacionales",
                                            value: "epo",
                                            onClick: $options.exepo
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Psicosensometrico",
                                            value: "psico",
                                            onClick: $options.expsico
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Estado de Salud",
                                            value: "salud",
                                            onClick: $options.exsalud
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Respirador",
                                            value: "respirador",
                                            onClick: $options.exrespirador
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Equilibrio",
                                            value: "equilibrio",
                                            onClick: $options.exequilibrio
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Somnolencia",
                                            value: "somnolencia",
                                            onClick: $options.exsomnolencia
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVT MERT",
                                            value: "tmert",
                                            onClick: $options.expvt
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVMO Ruido",
                                            value: "ruido",
                                            onClick: $options.exruido
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVMO Metales",
                                            value: "metales",
                                            onClick: $options.exmetal
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVMO Humos Negros",
                                            value: "humos",
                                            onClick: $options.exhumos
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "PVMO Aldehidos",
                                            value: "aldehidos",
                                            onClick: $options.exaldehido
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            title: "Alcohol y drogas",
                                            value: "alcohol",
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
                                  $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                        value: "atenciones",
                                        onClick: $options.atenciones
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Licencia Medicas",
                                        value: "licencias",
                                        onClick: $options.licencia
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Certificaciones",
                                        value: "certificaciones",
                                        onClick: $options.certificacion
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "DIAT",
                                        value: "diat",
                                        onClick: $options.diatConsulta
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "DIEP",
                                        value: "diep",
                                        onClick: $options.diepConsulta
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Vacunas",
                                        value: "vacunas",
                                        onClick: $options.vacunaConsulta
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                        value: "epo",
                                        onClick: $options.exepo
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Psicosensometrico",
                                        value: "psico",
                                        onClick: $options.expsico
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Estado de Salud",
                                        value: "salud",
                                        onClick: $options.exsalud
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Respirador",
                                        value: "respirador",
                                        onClick: $options.exrespirador
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Equilibrio",
                                        value: "equilibrio",
                                        onClick: $options.exequilibrio
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Somnolencia",
                                        value: "somnolencia",
                                        onClick: $options.exsomnolencia
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVT MERT",
                                        value: "tmert",
                                        onClick: $options.expvt
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVMO Ruido",
                                        value: "ruido",
                                        onClick: $options.exruido
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVMO Metales",
                                        value: "metales",
                                        onClick: $options.exmetal
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVMO Humos Negros",
                                        value: "humos",
                                        onClick: $options.exhumos
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "PVMO Aldehidos",
                                        value: "aldehidos",
                                        onClick: $options.exaldehido
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        title: "Alcohol y drogas",
                                        value: "alcohol",
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
                                  "prepend-icon": "mdi-home",
                                  color: "rgb(0, 0, 0)",
                                  title: "Inicio",
                                  onClick: $options.home
                                }, null, 8, ["onClick"]),
                                $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                                  key: 0,
                                  "prepend-icon": "mdi-view-dashboard",
                                  color: "rgb(0, 0, 0)",
                                  title: "Dashboard",
                                  onClick: $options.dashboard
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                $data.user.isAdmin == false && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                                  key: 1,
                                  "prepend-icon": "mdi-monitor-dashboard",
                                  color: "rgb(0, 0, 0)",
                                  title: "Mi resumen personal",
                                  onClick: $options.mi_dashboard
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                                  key: 2,
                                  "prepend-icon": "mdi-account",
                                  title: "Paciente",
                                  onClick: $options.paciente
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                                  key: 3,
                                  "prepend-icon": "mdi-account",
                                  title: "Mis datos personales",
                                  onClick: $options.mi_perfil_personal
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                                  key: 4,
                                  "prepend-icon": "mdi-clipboard-pulse",
                                  title: "Mi datos médico",
                                  onClick: $options.mi_perfil_medico
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
                                $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                      value: "atenciones",
                                      onClick: $options.atenciones
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Licencia Medicas",
                                      value: "licencias",
                                      onClick: $options.licencia
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Certificaciones",
                                      value: "certificaciones",
                                      onClick: $options.certificacion
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "DIAT",
                                      value: "diat",
                                      onClick: $options.diatConsulta
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "DIEP",
                                      value: "diep",
                                      onClick: $options.diepConsulta
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Vacunas",
                                      value: "vacunas",
                                      onClick: $options.vacunaConsulta
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                      value: "epo",
                                      onClick: $options.exepo
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Psicosensometrico",
                                      value: "psico",
                                      onClick: $options.expsico
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Estado de Salud",
                                      value: "salud",
                                      onClick: $options.exsalud
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Respirador",
                                      value: "respirador",
                                      onClick: $options.exrespirador
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Equilibrio",
                                      value: "equilibrio",
                                      onClick: $options.exequilibrio
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Somnolencia",
                                      value: "somnolencia",
                                      onClick: $options.exsomnolencia
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVT MERT",
                                      value: "tmert",
                                      onClick: $options.expvt
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVMO Ruido",
                                      value: "ruido",
                                      onClick: $options.exruido
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVMO Metales",
                                      value: "metales",
                                      onClick: $options.exmetal
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVMO Humos Negros",
                                      value: "humos",
                                      onClick: $options.exhumos
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "PVMO Aldehidos",
                                      value: "aldehidos",
                                      onClick: $options.exaldehido
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      title: "Alcohol y drogas",
                                      value: "alcohol",
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
                                "prepend-icon": "mdi-home",
                                color: "rgb(0, 0, 0)",
                                title: "Inicio",
                                onClick: $options.home
                              }, null, 8, ["onClick"]),
                              $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                                key: 0,
                                "prepend-icon": "mdi-view-dashboard",
                                color: "rgb(0, 0, 0)",
                                title: "Dashboard",
                                onClick: $options.dashboard
                              }, null, 8, ["onClick"])) : createCommentVNode("", true),
                              $data.user.isAdmin == false && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                                key: 1,
                                "prepend-icon": "mdi-monitor-dashboard",
                                color: "rgb(0, 0, 0)",
                                title: "Mi resumen personal",
                                onClick: $options.mi_dashboard
                              }, null, 8, ["onClick"])) : createCommentVNode("", true),
                              $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                                key: 2,
                                "prepend-icon": "mdi-account",
                                title: "Paciente",
                                onClick: $options.paciente
                              }, null, 8, ["onClick"])) : createCommentVNode("", true),
                              !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                                key: 3,
                                "prepend-icon": "mdi-account",
                                title: "Mis datos personales",
                                onClick: $options.mi_perfil_personal
                              }, null, 8, ["onClick"])) : createCommentVNode("", true),
                              !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                                key: 4,
                                "prepend-icon": "mdi-clipboard-pulse",
                                title: "Mi datos médico",
                                onClick: $options.mi_perfil_medico
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
                              $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                    value: "atenciones",
                                    onClick: $options.atenciones
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Licencia Medicas",
                                    value: "licencias",
                                    onClick: $options.licencia
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Certificaciones",
                                    value: "certificaciones",
                                    onClick: $options.certificacion
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "DIAT",
                                    value: "diat",
                                    onClick: $options.diatConsulta
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "DIEP",
                                    value: "diep",
                                    onClick: $options.diepConsulta
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Vacunas",
                                    value: "vacunas",
                                    onClick: $options.vacunaConsulta
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                    value: "epo",
                                    onClick: $options.exepo
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Psicosensometrico",
                                    value: "psico",
                                    onClick: $options.expsico
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Estado de Salud",
                                    value: "salud",
                                    onClick: $options.exsalud
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Respirador",
                                    value: "respirador",
                                    onClick: $options.exrespirador
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Equilibrio",
                                    value: "equilibrio",
                                    onClick: $options.exequilibrio
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Somnolencia",
                                    value: "somnolencia",
                                    onClick: $options.exsomnolencia
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVT MERT",
                                    value: "tmert",
                                    onClick: $options.expvt
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVMO Ruido",
                                    value: "ruido",
                                    onClick: $options.exruido
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVMO Metales",
                                    value: "metales",
                                    onClick: $options.exmetal
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVMO Humos Negros",
                                    value: "humos",
                                    onClick: $options.exhumos
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "PVMO Aldehidos",
                                    value: "aldehidos",
                                    onClick: $options.exaldehido
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    title: "Alcohol y drogas",
                                    value: "alcohol",
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
                              "prepend-icon": "mdi-home",
                              color: "rgb(0, 0, 0)",
                              title: "Inicio",
                              onClick: $options.home
                            }, null, 8, ["onClick"]),
                            $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                              key: 0,
                              "prepend-icon": "mdi-view-dashboard",
                              color: "rgb(0, 0, 0)",
                              title: "Dashboard",
                              onClick: $options.dashboard
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            $data.user.isAdmin == false && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                              key: 1,
                              "prepend-icon": "mdi-monitor-dashboard",
                              color: "rgb(0, 0, 0)",
                              title: "Mi resumen personal",
                              onClick: $options.mi_dashboard
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                              key: 2,
                              "prepend-icon": "mdi-account",
                              title: "Paciente",
                              onClick: $options.paciente
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                              key: 3,
                              "prepend-icon": "mdi-account",
                              title: "Mis datos personales",
                              onClick: $options.mi_perfil_personal
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                              key: 4,
                              "prepend-icon": "mdi-clipboard-pulse",
                              title: "Mi datos médico",
                              onClick: $options.mi_perfil_medico
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
                            $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                  value: "atenciones",
                                  onClick: $options.atenciones
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Licencia Medicas",
                                  value: "licencias",
                                  onClick: $options.licencia
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Certificaciones",
                                  value: "certificaciones",
                                  onClick: $options.certificacion
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "DIAT",
                                  value: "diat",
                                  onClick: $options.diatConsulta
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "DIEP",
                                  value: "diep",
                                  onClick: $options.diepConsulta
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Vacunas",
                                  value: "vacunas",
                                  onClick: $options.vacunaConsulta
                                }, null, 8, ["onClick"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                  value: "epo",
                                  onClick: $options.exepo
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Psicosensometrico",
                                  value: "psico",
                                  onClick: $options.expsico
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Estado de Salud",
                                  value: "salud",
                                  onClick: $options.exsalud
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Respirador",
                                  value: "respirador",
                                  onClick: $options.exrespirador
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Equilibrio",
                                  value: "equilibrio",
                                  onClick: $options.exequilibrio
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Somnolencia",
                                  value: "somnolencia",
                                  onClick: $options.exsomnolencia
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVT MERT",
                                  value: "tmert",
                                  onClick: $options.expvt
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVMO Ruido",
                                  value: "ruido",
                                  onClick: $options.exruido
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVMO Metales",
                                  value: "metales",
                                  onClick: $options.exmetal
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVMO Humos Negros",
                                  value: "humos",
                                  onClick: $options.exhumos
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "PVMO Aldehidos",
                                  value: "aldehidos",
                                  onClick: $options.exaldehido
                                }, null, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  title: "Alcohol y drogas",
                                  value: "alcohol",
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
                            "prepend-icon": "mdi-home",
                            color: "rgb(0, 0, 0)",
                            title: "Inicio",
                            onClick: $options.home
                          }, null, 8, ["onClick"]),
                          $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                            key: 0,
                            "prepend-icon": "mdi-view-dashboard",
                            color: "rgb(0, 0, 0)",
                            title: "Dashboard",
                            onClick: $options.dashboard
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          $data.user.isAdmin == false && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                            key: 1,
                            "prepend-icon": "mdi-monitor-dashboard",
                            color: "rgb(0, 0, 0)",
                            title: "Mi resumen personal",
                            onClick: $options.mi_dashboard
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_item, {
                            key: 2,
                            "prepend-icon": "mdi-account",
                            title: "Paciente",
                            onClick: $options.paciente
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                            key: 3,
                            "prepend-icon": "mdi-account",
                            title: "Mis datos personales",
                            onClick: $options.mi_perfil_personal
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          !$data.user.isAdmin && $data.user.rol == "paciente" ? (openBlock(), createBlock(_component_v_list_item, {
                            key: 4,
                            "prepend-icon": "mdi-clipboard-pulse",
                            title: "Mi datos médico",
                            onClick: $options.mi_perfil_medico
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
                          $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                value: "atenciones",
                                onClick: $options.atenciones
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Licencia Medicas",
                                value: "licencias",
                                onClick: $options.licencia
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Certificaciones",
                                value: "certificaciones",
                                onClick: $options.certificacion
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "DIAT",
                                value: "diat",
                                onClick: $options.diatConsulta
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "DIEP",
                                value: "diep",
                                onClick: $options.diepConsulta
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Vacunas",
                                value: "vacunas",
                                onClick: $options.vacunaConsulta
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          $data.user.isAdmin ? (openBlock(), createBlock(_component_v_list_group, {
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
                                value: "epo",
                                onClick: $options.exepo
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Psicosensometrico",
                                value: "psico",
                                onClick: $options.expsico
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Estado de Salud",
                                value: "salud",
                                onClick: $options.exsalud
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Respirador",
                                value: "respirador",
                                onClick: $options.exrespirador
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Equilibrio",
                                value: "equilibrio",
                                onClick: $options.exequilibrio
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Somnolencia",
                                value: "somnolencia",
                                onClick: $options.exsomnolencia
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVT MERT",
                                value: "tmert",
                                onClick: $options.expvt
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVMO Ruido",
                                value: "ruido",
                                onClick: $options.exruido
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVMO Metales",
                                value: "metales",
                                onClick: $options.exmetal
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVMO Humos Negros",
                                value: "humos",
                                onClick: $options.exhumos
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "PVMO Aldehidos",
                                value: "aldehidos",
                                onClick: $options.exaldehido
                              }, null, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                title: "Alcohol y drogas",
                                value: "alcohol",
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
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/omar/www/esalud/resources/js/Layouts/AppLayout.vue"]]);
export {
  AppLayout as A
};
//# sourceMappingURL=AppLayout-9lGv6sW_.js.map
