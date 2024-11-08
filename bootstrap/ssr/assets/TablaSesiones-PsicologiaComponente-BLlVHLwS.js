import { ref, reactive, withCtx, createTextVNode, mergeProps, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import { QuillEditor } from "@vueup/vue-quill";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardSubtitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VDataTable } from "vuetify/lib/components/VDataTable/index.mjs";
import { VDialog } from "vuetify/lib/components/VDialog/index.mjs";
import { VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VSheet } from "vuetify/lib/components/VSheet/index.mjs";
import { VSwitch } from "vuetify/lib/components/VSwitch/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import { VTooltip } from "vuetify/lib/components/VTooltip/index.mjs";
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
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, { class: "ma-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "bg-surface-light pt-4" }, {
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
                  _push3(ssrRenderComponent(VCardSubtitle, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VDataTable, {
                                headers: state.atencion.headers,
                                items: state.atencion.items,
                                class: "elevation-1"
                              }, {
                                "item.actions": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTooltip, {
                                      text: "Registro de la sesión",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, mergeProps(props, {
                                            density: "compact",
                                            color: "#009AA4",
                                            class: "mr-1 ml-1",
                                            variant: "tonal",
                                            icon: "mdi-notebook-check",
                                            onClick: ($event) => registroSesionPsicologia()
                                          }), null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, mergeProps(props, {
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
                                    _push6(ssrRenderComponent(VTooltip, {
                                      text: "Ver registro",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, mergeProps(props, {
                                            density: "compact",
                                            color: "#009AA4",
                                            class: "mr-1 ml-1",
                                            variant: "tonal",
                                            icon: "mdi-eye-plus-outline",
                                            onClick: ($event) => registroSesionPsicologia()
                                          }), null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, mergeProps(props, {
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
                                      createVNode(VTooltip, {
                                        text: "Registro de la sesión",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VBtn, mergeProps(props, {
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
                                      createVNode(VTooltip, {
                                        text: "Ver registro",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VBtn, mergeProps(props, {
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
                                createVNode(VDataTable, {
                                  headers: state.atencion.headers,
                                  items: state.atencion.items,
                                  class: "elevation-1"
                                }, {
                                  "item.actions": withCtx(({ item }) => [
                                    createVNode(VTooltip, {
                                      text: "Registro de la sesión",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, mergeProps(props, {
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
                                    createVNode(VTooltip, {
                                      text: "Ver registro",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, mergeProps(props, {
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
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VDataTable, {
                                headers: state.atencion.headers,
                                items: state.atencion.items,
                                class: "elevation-1"
                              }, {
                                "item.actions": withCtx(({ item }) => [
                                  createVNode(VTooltip, {
                                    text: "Registro de la sesión",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, mergeProps(props, {
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
                                  createVNode(VTooltip, {
                                    text: "Ver registro",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, mergeProps(props, {
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
                  _push3(ssrRenderComponent(VCardActions, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "bg-surface-light pt-4" }, {
                      default: withCtx(() => [
                        createTextVNode("Sesiones programadas")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardSubtitle),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(VDataTable, {
                              headers: state.atencion.headers,
                              items: state.atencion.items,
                              class: "elevation-1"
                            }, {
                              "item.actions": withCtx(({ item }) => [
                                createVNode(VTooltip, {
                                  text: "Registro de la sesión",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps(props, {
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
                                createVNode(VTooltip, {
                                  text: "Ver registro",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps(props, {
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
                    createVNode(VCardActions)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "bg-surface-light pt-4" }, {
                    default: withCtx(() => [
                      createTextVNode("Sesiones programadas")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardSubtitle),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VDataTable, {
                            headers: state.atencion.headers,
                            items: state.atencion.items,
                            class: "elevation-1"
                          }, {
                            "item.actions": withCtx(({ item }) => [
                              createVNode(VTooltip, {
                                text: "Registro de la sesión",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps(props, {
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
                              createVNode(VTooltip, {
                                text: "Ver registro",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps(props, {
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
                  createVNode(VCardActions)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: state.dialog,
        "onUpdate:modelValue": ($event) => state.dialog = $event,
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSheet, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "bg-surface-light pt-4" }, {
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
                        _push4(ssrRenderComponent(VCardSubtitle, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSheet, {
                                fluid: "",
                                color: "gray",
                                elevation: 1,
                                class: "rounded-lg ma-4 pa-4 "
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, { class: "ma-2 pa-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "4",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, { label: "Objetivo de la Sesión" }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VSwitch, {
                                                  inline: "",
                                                  color: "green",
                                                  label: "Asiste"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, { label: "Objetivo de la Sesión" }),
                                                  createVNode(VSwitch, {
                                                    inline: "",
                                                    color: "green",
                                                    label: "Asiste"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "4",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, { label: "Tipo de Sesión" }, {
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Justificación inasistencia",
                                                  name: "justificacion",
                                                  textarea: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, { label: "Tipo de Sesión" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Tipo de Sesiones")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
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
                                            createVNode(VCol, {
                                              cols: "4",
                                              class: "ma-2 pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, { label: "Objetivo de la Sesión" }),
                                                createVNode(VSwitch, {
                                                  inline: "",
                                                  color: "green",
                                                  label: "Asiste"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "4",
                                              class: "ma-2 pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, { label: "Tipo de Sesión" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Tipo de Sesiones")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextField, {
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
                                    _push6(ssrRenderComponent(VRow, { class: "mb-4 pb-4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, null, {
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
                                            createVNode(VCol, null, {
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
                                      createVNode(VRow, { class: "ma-2 pa-2" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "4",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, { label: "Objetivo de la Sesión" }),
                                              createVNode(VSwitch, {
                                                inline: "",
                                                color: "green",
                                                label: "Asiste"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "4",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, { label: "Tipo de Sesión" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Tipo de Sesiones")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextField, {
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
                                      createVNode(VRow, { class: "mb-4 pb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, null, {
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
                                createVNode(VSheet, {
                                  fluid: "",
                                  color: "gray",
                                  elevation: 1,
                                  class: "rounded-lg ma-4 pa-4 "
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { class: "ma-2 pa-2" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "4",
                                          class: "ma-2 pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, { label: "Objetivo de la Sesión" }),
                                            createVNode(VSwitch, {
                                              inline: "",
                                              color: "green",
                                              label: "Asiste"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "4",
                                          class: "ma-2 pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, { label: "Tipo de Sesión" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Tipo de Sesiones")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextField, {
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
                                    createVNode(VRow, { class: "mb-4 pb-4" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, null, {
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
                        _push4(ssrRenderComponent(VCardActions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
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
                              _push5(ssrRenderComponent(VBtn, {
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
                                createVNode(VBtn, {
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
                                createVNode(VBtn, {
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
                          createVNode(VCardTitle, { class: "bg-surface-light pt-4" }, {
                            default: withCtx(() => [
                              createTextVNode("Registro de la Sesión")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VSheet, {
                                fluid: "",
                                color: "gray",
                                elevation: 1,
                                class: "rounded-lg ma-4 pa-4 "
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, { class: "ma-2 pa-2" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "4",
                                        class: "ma-2 pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, { label: "Objetivo de la Sesión" }),
                                          createVNode(VSwitch, {
                                            inline: "",
                                            color: "green",
                                            label: "Asiste"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "4",
                                        class: "ma-2 pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, { label: "Tipo de Sesión" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Tipo de Sesiones")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextField, {
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
                                  createVNode(VRow, { class: "mb-4 pb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, null, {
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
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
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
                              createVNode(VBtn, {
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "bg-surface-light pt-4" }, {
                          default: withCtx(() => [
                            createTextVNode("Registro de la Sesión")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardSubtitle),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VSheet, {
                              fluid: "",
                              color: "gray",
                              elevation: 1,
                              class: "rounded-lg ma-4 pa-4 "
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, { class: "ma-2 pa-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "4",
                                      class: "ma-2 pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, { label: "Objetivo de la Sesión" }),
                                        createVNode(VSwitch, {
                                          inline: "",
                                          color: "green",
                                          label: "Asiste"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "4",
                                      class: "ma-2 pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, { label: "Tipo de Sesión" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Tipo de Sesiones")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextField, {
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
                                createVNode(VRow, { class: "mb-4 pb-4" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, null, {
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
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
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
                            createVNode(VBtn, {
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
              createVNode(VSheet, null, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "bg-surface-light pt-4" }, {
                        default: withCtx(() => [
                          createTextVNode("Registro de la Sesión")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardSubtitle),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VSheet, {
                            fluid: "",
                            color: "gray",
                            elevation: 1,
                            class: "rounded-lg ma-4 pa-4 "
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "ma-2 pa-2" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "4",
                                    class: "ma-2 pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, { label: "Objetivo de la Sesión" }),
                                      createVNode(VSwitch, {
                                        inline: "",
                                        color: "green",
                                        label: "Asiste"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "4",
                                    class: "ma-2 pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, { label: "Tipo de Sesión" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tipo de Sesiones")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextField, {
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
                              createVNode(VRow, { class: "mb-4 pb-4" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, null, {
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
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
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
                          createVNode(VBtn, {
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
//# sourceMappingURL=TablaSesiones-PsicologiaComponente-BLlVHLwS.js.map
