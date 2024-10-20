import { ref, reactive, resolveComponent, withCtx, createTextVNode, mergeProps, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import { QuillEditor } from "@vueup/vue-quill";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "TablaSesiones-PsicologiaComponente",
  __ssrInlineRender: true,
  setup(__props) {
    const editorContent = ref("");
    const editorOptions = {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"]
        ]
      }
    };
    const state = reactive({
      atencion: {
        headers: [
          {
            title: "Fecha",
            align: "center",
            sortable: true,
            value: "fecha"
          },
          {
            title: "Horarios",
            align: "center",
            sortable: true,
            value: "horarios"
          },
          {
            title: "Sesión N°",
            align: "center",
            sortable: true,
            value: "sesionNum"
          },
          {
            title: "Tipo Sesion",
            align: "center",
            sortable: true,
            value: "tipoSesion"
            // TODO: esto vendría por defecto para todas las primeras sesiones
          },
          {
            title: "Asiste",
            align: "center",
            sortable: true,
            value: "asiste"
            //TODO: esto vendría por defecto para todas las primeras sesiones
          },
          { title: "Acciones", align: "center", key: "actions" }
        ],
        items: [
          {
            fecha: "Lunes 03/02/2025",
            horarios: "09:00-09:45",
            sesionNum: "1/12",
            tipoSesion: "Evaluación diagnóstica",
            asiste: "Si"
          },
          {
            fecha: "Lunes 10/02/2025",
            horarios: "09:00-09:45",
            sesionNum: "2/12",
            tipoSesion: "Consulta",
            asiste: "Pendiente"
          },
          {
            fecha: "Lunes 17/02/2025",
            horarios: "09:00-09:45",
            sesionNum: "3/12",
            tipoSesion: "Consulta",
            asiste: "Pendiente"
          },
          {
            fecha: "Lunes 24/02/2025",
            horarios: "09:00-09:45",
            sesionNum: "4/12",
            tipoSesion: "Consulta",
            asiste: "Pendiente"
          }
        ]
      },
      dialog: false
    });
    function registroSesionPsicologia(item) {
      try {
        state.dialog = true;
      } catch (error) {
        console.error(
          '"An error occurred while fetching daily attention data."'
        );
      }
    }
    function cerrarRegistro() {
      try {
        state.dialog = false;
      } catch (error) {
        console.error(
          '"An error occurred while fetching daily attention data."'
        );
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_select = resolveComponent("v-select");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_row, { class: "ma-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sesiones programadas`);
                      } else {
                        return [
                          createTextVNode("Sesiones programadas")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_subtitle, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_data_table, {
                                headers: state.atencion.headers,
                                items: state.atencion.items,
                                class: "elevation-1"
                              }, {
                                "item.actions": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_tooltip, {
                                      text: "Registro de la sesión",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                                            density: "compact",
                                            color: "#009AA4",
                                            class: "mr-1 ml-1",
                                            variant: "tonal",
                                            icon: "mdi-notebook-check",
                                            onClick: ($event) => registroSesionPsicologia()
                                          }), null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_btn, mergeProps(props, {
                                              density: "compact",
                                              color: "#009AA4",
                                              class: "mr-1 ml-1",
                                              variant: "tonal",
                                              icon: "mdi-notebook-check",
                                              onClick: ($event) => registroSesionPsicologia()
                                            }), null, 16, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_tooltip, {
                                      text: "Ver registro",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                                            density: "compact",
                                            color: "#009AA4",
                                            class: "mr-1 ml-1",
                                            variant: "tonal",
                                            icon: "mdi-eye-plus-outline",
                                            onClick: ($event) => registroSesionPsicologia()
                                          }), null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_btn, mergeProps(props, {
                                              density: "compact",
                                              color: "#009AA4",
                                              class: "mr-1 ml-1",
                                              variant: "tonal",
                                              icon: "mdi-eye-plus-outline",
                                              onClick: ($event) => registroSesionPsicologia()
                                            }), null, 16, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_tooltip, {
                                        text: "Registro de la sesión",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(_component_v_btn, mergeProps(props, {
                                            density: "compact",
                                            color: "#009AA4",
                                            class: "mr-1 ml-1",
                                            variant: "tonal",
                                            icon: "mdi-notebook-check",
                                            onClick: ($event) => registroSesionPsicologia()
                                          }), null, 16, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_tooltip, {
                                        text: "Ver registro",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(_component_v_btn, mergeProps(props, {
                                            density: "compact",
                                            color: "#009AA4",
                                            class: "mr-1 ml-1",
                                            variant: "tonal",
                                            icon: "mdi-eye-plus-outline",
                                            onClick: ($event) => registroSesionPsicologia()
                                          }), null, 16, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_data_table, {
                                  headers: state.atencion.headers,
                                  items: state.atencion.items,
                                  class: "elevation-1"
                                }, {
                                  "item.actions": withCtx(({ item }) => [
                                    createVNode(_component_v_tooltip, {
                                      text: "Registro de la sesión",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(_component_v_btn, mergeProps(props, {
                                          density: "compact",
                                          color: "#009AA4",
                                          class: "mr-1 ml-1",
                                          variant: "tonal",
                                          icon: "mdi-notebook-check",
                                          onClick: ($event) => registroSesionPsicologia()
                                        }), null, 16, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_tooltip, {
                                      text: "Ver registro",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(_component_v_btn, mergeProps(props, {
                                          density: "compact",
                                          color: "#009AA4",
                                          class: "mr-1 ml-1",
                                          variant: "tonal",
                                          icon: "mdi-eye-plus-outline",
                                          onClick: ($event) => registroSesionPsicologia()
                                        }), null, 16, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 1
                                }, 8, ["headers", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_data_table, {
                                headers: state.atencion.headers,
                                items: state.atencion.items,
                                class: "elevation-1"
                              }, {
                                "item.actions": withCtx(({ item }) => [
                                  createVNode(_component_v_tooltip, {
                                    text: "Registro de la sesión",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_btn, mergeProps(props, {
                                        density: "compact",
                                        color: "#009AA4",
                                        class: "mr-1 ml-1",
                                        variant: "tonal",
                                        icon: "mdi-notebook-check",
                                        onClick: ($event) => registroSesionPsicologia()
                                      }), null, 16, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_tooltip, {
                                    text: "Ver registro",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_btn, mergeProps(props, {
                                        density: "compact",
                                        color: "#009AA4",
                                        class: "mr-1 ml-1",
                                        variant: "tonal",
                                        icon: "mdi-eye-plus-outline",
                                        onClick: ($event) => registroSesionPsicologia()
                                      }), null, 16, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 1
                              }, 8, ["headers", "items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
                      default: withCtx(() => [
                        createTextVNode("Sesiones programadas")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_subtitle),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_data_table, {
                              headers: state.atencion.headers,
                              items: state.atencion.items,
                              class: "elevation-1"
                            }, {
                              "item.actions": withCtx(({ item }) => [
                                createVNode(_component_v_tooltip, {
                                  text: "Registro de la sesión",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_v_btn, mergeProps(props, {
                                      density: "compact",
                                      color: "#009AA4",
                                      class: "mr-1 ml-1",
                                      variant: "tonal",
                                      icon: "mdi-notebook-check",
                                      onClick: ($event) => registroSesionPsicologia()
                                    }), null, 16, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_tooltip, {
                                  text: "Ver registro",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_v_btn, mergeProps(props, {
                                      density: "compact",
                                      color: "#009AA4",
                                      class: "mr-1 ml-1",
                                      variant: "tonal",
                                      icon: "mdi-eye-plus-outline",
                                      onClick: ($event) => registroSesionPsicologia()
                                    }), null, 16, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 1
                            }, 8, ["headers", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
                    default: withCtx(() => [
                      createTextVNode("Sesiones programadas")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_subtitle),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_data_table, {
                            headers: state.atencion.headers,
                            items: state.atencion.items,
                            class: "elevation-1"
                          }, {
                            "item.actions": withCtx(({ item }) => [
                              createVNode(_component_v_tooltip, {
                                text: "Registro de la sesión",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_btn, mergeProps(props, {
                                    density: "compact",
                                    color: "#009AA4",
                                    class: "mr-1 ml-1",
                                    variant: "tonal",
                                    icon: "mdi-notebook-check",
                                    onClick: ($event) => registroSesionPsicologia()
                                  }), null, 16, ["onClick"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_tooltip, {
                                text: "Ver registro",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_btn, mergeProps(props, {
                                    density: "compact",
                                    color: "#009AA4",
                                    class: "mr-1 ml-1",
                                    variant: "tonal",
                                    icon: "mdi-eye-plus-outline",
                                    onClick: ($event) => registroSesionPsicologia()
                                  }), null, 16, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }, 8, ["headers", "items"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: state.dialog,
        "onUpdate:modelValue": ($event) => state.dialog = $event,
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Registro de la Sesión`);
                            } else {
                              return [
                                createTextVNode("Registro de la Sesión")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_subtitle, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_sheet, {
                                fluid: "",
                                color: "gray",
                                elevation: 1,
                                class: "rounded-lg ma-4 pa-4 "
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, { class: "ma-2 pa-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "4",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, { label: "Objetivo de la Sesión" }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_switch, {
                                                  inline: "",
                                                  color: "green",
                                                  label: "Asiste"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, { label: "Objetivo de la Sesión" }),
                                                  createVNode(_component_v_switch, {
                                                    inline: "",
                                                    color: "green",
                                                    label: "Asiste"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "4",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, { label: "Tipo de Sesión" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Tipo de Sesiones`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Tipo de Sesiones")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  label: "Justificación inasistencia",
                                                  name: "justificacion",
                                                  textarea: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, { label: "Tipo de Sesión" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Tipo de Sesiones")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    label: "Justificación inasistencia",
                                                    name: "justificacion",
                                                    textarea: ""
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, {
                                              cols: "4",
                                              class: "ma-2 pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, { label: "Objetivo de la Sesión" }),
                                                createVNode(_component_v_switch, {
                                                  inline: "",
                                                  color: "green",
                                                  label: "Asiste"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "4",
                                              class: "ma-2 pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, { label: "Tipo de Sesión" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Tipo de Sesiones")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  label: "Justificación inasistencia",
                                                  name: "justificacion",
                                                  textarea: ""
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, { class: "mb-4 pb-4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(QuillEditor), {
                                                  modelValue: editorContent.value,
                                                  "onUpdate:modelValue": ($event) => editorContent.value = $event,
                                                  options: editorOptions,
                                                  class: "editor"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(QuillEditor), {
                                                    modelValue: editorContent.value,
                                                    "onUpdate:modelValue": ($event) => editorContent.value = $event,
                                                    options: editorOptions,
                                                    class: "editor"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(QuillEditor), {
                                                  modelValue: editorContent.value,
                                                  "onUpdate:modelValue": ($event) => editorContent.value = $event,
                                                  options: editorOptions,
                                                  class: "editor"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      createVNode(_component_v_row, { class: "ma-2 pa-2" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "4",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, { label: "Objetivo de la Sesión" }),
                                              createVNode(_component_v_switch, {
                                                inline: "",
                                                color: "green",
                                                label: "Asiste"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "4",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, { label: "Tipo de Sesión" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Tipo de Sesiones")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                label: "Justificación inasistencia",
                                                name: "justificacion",
                                                textarea: ""
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, { class: "mb-4 pb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(QuillEditor), {
                                                modelValue: editorContent.value,
                                                "onUpdate:modelValue": ($event) => editorContent.value = $event,
                                                options: editorOptions,
                                                class: "editor"
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_sheet, {
                                  fluid: "",
                                  color: "gray",
                                  elevation: 1,
                                  class: "rounded-lg ma-4 pa-4 "
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { class: "ma-2 pa-2" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "4",
                                          class: "ma-2 pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, { label: "Objetivo de la Sesión" }),
                                            createVNode(_component_v_switch, {
                                              inline: "",
                                              color: "green",
                                              label: "Asiste"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "4",
                                          class: "ma-2 pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, { label: "Tipo de Sesión" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Tipo de Sesiones")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              label: "Justificación inasistencia",
                                              name: "justificacion",
                                              textarea: ""
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, { class: "mb-4 pb-4" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(unref(QuillEditor), {
                                              modelValue: editorContent.value,
                                              "onUpdate:modelValue": ($event) => editorContent.value = $event,
                                              options: editorOptions,
                                              class: "editor"
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_actions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                "prepend-icon": "mdi-cloud-upload",
                                variant: "tonal",
                                class: "ma-4",
                                color: "#009AA4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Guardar Sesión`);
                                  } else {
                                    return [
                                      createTextVNode("Guardar Sesión")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                "prepend-icon": "mdi-close",
                                variant: "tonal",
                                class: "ma-4",
                                color: "#009AA4",
                                onClick: cerrarRegistro
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
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  "prepend-icon": "mdi-cloud-upload",
                                  variant: "tonal",
                                  class: "ma-4",
                                  color: "#009AA4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Guardar Sesión")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  "prepend-icon": "mdi-close",
                                  variant: "tonal",
                                  class: "ma-4",
                                  color: "#009AA4",
                                  onClick: cerrarRegistro
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cerrar")
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
                          createVNode(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
                            default: withCtx(() => [
                              createTextVNode("Registro de la Sesión")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_subtitle),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                fluid: "",
                                color: "gray",
                                elevation: 1,
                                class: "rounded-lg ma-4 pa-4 "
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { class: "ma-2 pa-2" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "4",
                                        class: "ma-2 pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, { label: "Objetivo de la Sesión" }),
                                          createVNode(_component_v_switch, {
                                            inline: "",
                                            color: "green",
                                            label: "Asiste"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "4",
                                        class: "ma-2 pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, { label: "Tipo de Sesión" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Tipo de Sesiones")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            label: "Justificación inasistencia",
                                            name: "justificacion",
                                            textarea: ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "mb-4 pb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(QuillEditor), {
                                            modelValue: editorContent.value,
                                            "onUpdate:modelValue": ($event) => editorContent.value = $event,
                                            options: editorOptions,
                                            class: "editor"
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
                              createVNode(_component_v_btn, {
                                "prepend-icon": "mdi-cloud-upload",
                                variant: "tonal",
                                class: "ma-4",
                                color: "#009AA4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Guardar Sesión")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                "prepend-icon": "mdi-close",
                                variant: "tonal",
                                class: "ma-4",
                                color: "#009AA4",
                                onClick: cerrarRegistro
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cerrar")
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
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
                          default: withCtx(() => [
                            createTextVNode("Registro de la Sesión")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_subtitle),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              fluid: "",
                              color: "gray",
                              elevation: 1,
                              class: "rounded-lg ma-4 pa-4 "
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { class: "ma-2 pa-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "4",
                                      class: "ma-2 pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, { label: "Objetivo de la Sesión" }),
                                        createVNode(_component_v_switch, {
                                          inline: "",
                                          color: "green",
                                          label: "Asiste"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "4",
                                      class: "ma-2 pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, { label: "Tipo de Sesión" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Tipo de Sesiones")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          label: "Justificación inasistencia",
                                          name: "justificacion",
                                          textarea: ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "mb-4 pb-4" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(QuillEditor), {
                                          modelValue: editorContent.value,
                                          "onUpdate:modelValue": ($event) => editorContent.value = $event,
                                          options: editorOptions,
                                          class: "editor"
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
                            createVNode(_component_v_btn, {
                              "prepend-icon": "mdi-cloud-upload",
                              variant: "tonal",
                              class: "ma-4",
                              color: "#009AA4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Guardar Sesión")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              "prepend-icon": "mdi-close",
                              variant: "tonal",
                              class: "ma-4",
                              color: "#009AA4",
                              onClick: cerrarRegistro
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cerrar")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { class: "bg-surface-light pt-4" }, {
                        default: withCtx(() => [
                          createTextVNode("Registro de la Sesión")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_subtitle),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, {
                            fluid: "",
                            color: "gray",
                            elevation: 1,
                            class: "rounded-lg ma-4 pa-4 "
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "ma-2 pa-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "4",
                                    class: "ma-2 pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, { label: "Objetivo de la Sesión" }),
                                      createVNode(_component_v_switch, {
                                        inline: "",
                                        color: "green",
                                        label: "Asiste"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "4",
                                    class: "ma-2 pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, { label: "Tipo de Sesión" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tipo de Sesiones")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        label: "Justificación inasistencia",
                                        name: "justificacion",
                                        textarea: ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "mb-4 pb-4" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(QuillEditor), {
                                        modelValue: editorContent.value,
                                        "onUpdate:modelValue": ($event) => editorContent.value = $event,
                                        options: editorOptions,
                                        class: "editor"
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
                          createVNode(_component_v_btn, {
                            "prepend-icon": "mdi-cloud-upload",
                            variant: "tonal",
                            class: "ma-4",
                            color: "#009AA4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Guardar Sesión")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            "prepend-icon": "mdi-close",
                            variant: "tonal",
                            class: "ma-4",
                            color: "#009AA4",
                            onClick: cerrarRegistro
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cerrar")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/TablaSesiones-PsicologiaComponente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TablaSesionesPsicologia = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/Componentes/TablaSesiones-PsicologiaComponente.vue"]]);
export {
  TablaSesionesPsicologia as default
};
//# sourceMappingURL=TablaSesiones-PsicologiaComponente-BgWVWn30.js.map
