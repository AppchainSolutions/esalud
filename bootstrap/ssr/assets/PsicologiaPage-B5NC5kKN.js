import { reactive, onMounted, computed, withCtx, createTextVNode, createVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-S2vtq-1z.js";
import { u as useDataStore } from "./store-CHGALank.js";
import { router } from "@inertiajs/vue3";
import { f as fetchAllData } from "./helper-LjE-4-65.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText } from "vuetify/lib/components/VCard/index.mjs";
import { VDataTable } from "vuetify/lib/components/VDataTable/index.mjs";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VSheet } from "vuetify/lib/components/VSheet/index.mjs";
import { VTextarea } from "vuetify/lib/components/VTextarea/index.mjs";
import { VToolbar, VToolbarTitle } from "vuetify/lib/components/VToolbar/index.mjs";
import { VTooltip } from "vuetify/lib/components/VTooltip/index.mjs";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "vue-logger-plugin";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "PsicologiaPage",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    const state = reactive({
      endpoints: [],
      atencion: {
        headers: [
          {
            title: "Nombre y apellido",
            align: "center",
            sortable: true,
            value: "paciente"
          },
          {
            title: "Motivo Consulta",
            align: "center",
            sortable: true,
            value: "motivoConsulta"
          },
          {
            title: "Fecha Solicitud",
            align: "center",
            sortable: true,
            value: "fechaSolicitud"
          },
          {
            title: "Tipo Sesion",
            align: "center",
            sortable: true,
            value: "tipoSesion"
            // TODO: esto vendría por defecto para todas las primeras sesiones
          },
          {
            title: "Avance",
            align: "center",
            sortable: true,
            value: "avanceSesion"
            //TODO: esto vendría por defecto para todas las primeras sesiones
          },
          { title: "Horario", key: "horario", sortable: true },
          { title: "Acciones", align: "center", key: "actions" }
        ],
        items: [
          {
            paciente: "Pedro Castillo",
            motivoConsulta: "Crisis de panico",
            fechaSolicitud: "12/01/2024",
            avanceSesion: "2/12",
            tipoSesion: "Evaluación diagnóstica",
            horario: "Lunes: 14:00 - 14:45"
          },
          {
            paciente: "Juana Gómez",
            motivoConsulta: "No puede dormir",
            fechaSolicitud: "20/03/2024",
            avanceSesion: "1/12",
            tipoSesion: "Nuevo Ingreso",
            horario: "Lunes: 15:00 - 15:45"
          }
        ]
      },
      horario: {
        headers: [
          {
            title: "Día de la semana",
            align: "center",
            sortable: true,
            value: "dia"
          },
          {
            title: "Hora inicio",
            align: "center",
            sortable: true,
            value: "horaInicio"
          },
          {
            title: "Hora término",
            align: "center",
            sortable: true,
            value: "horaTermino"
          },
          {
            title: "Disponible (S/N)",
            align: "center",
            sortable: true,
            value: "disponible"
          }
        ],
        items: [
          {
            dia: "Lunes",
            horaInicio: "08:00",
            horaTermino: "17:00",
            disponible: "S"
          },
          {
            dia: "Martes",
            horaInicio: "08:00",
            horaTermino: "17:00",
            disponible: "N"
          }
        ]
      },
      editedItem: {
        paciente_id: null
      },
      defaultItem: {
        paciente_id: null
      },
      searchQuery: {
        paciente_id: null
      },
      dialog: false,
      tableItems: [],
      editedIndex: -1,
      list: [],
      loading: false,
      valid: null
    });
    onMounted(async () => {
      state.list = await fetchAllData(state.endpoints);
    });
    computed(
      () => state.editedIndex === -1 ? state.formCrear : state.formEdit
    );
    function psicologiaSesiones(item) {
      router.get("psicologia-sesiones");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Pacientes asignado para atención psicológica`);
                      } else {
                        return [
                          createTextVNode("Pacientes asignado para atención psicológica")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSheet, {
                          color: "gray",
                          elevation: 1,
                          class: "rounded-lg ma-4 pa-6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3${_scopeId6}>Profesional:</h3> Tapia, Jorge <h4${_scopeId6}>Especialidad:</h4> Psicología `);
                                        } else {
                                          return [
                                            createVNode("h3", null, "Profesional:"),
                                            createTextVNode(" Tapia, Jorge "),
                                            createVNode("h4", null, "Especialidad:"),
                                            createTextVNode(" Psicología ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4${_scopeId6}>Horarios asignados:</h4><ol class="${ssrRenderClass("ml-4")}"${_scopeId6}><li${_scopeId6}>Lunes: 08:00 - 17:00</li><li${_scopeId6}>Martes: 08:00 - 17:00</li><li${_scopeId6}>Miércoles: 08:00 - 17:00</li><li${_scopeId6}>Jueves: 08:00 - 17:00</li><li${_scopeId6}>Viernes: 08:00 - 17:00</li></ol>`);
                                        } else {
                                          return [
                                            createVNode("h4", null, "Horarios asignados:"),
                                            createVNode("ol", { class: "ml-4" }, [
                                              createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                              createVNode("li", null, "Martes: 08:00 - 17:00"),
                                              createVNode("li", null, "Miércoles: 08:00 - 17:00"),
                                              createVNode("li", null, "Jueves: 08:00 - 17:00"),
                                              createVNode("li", null, "Viernes: 08:00 - 17:00")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4${_scopeId6}>Horarios disponibles:</h4><ol class="${ssrRenderClass("ml-4")}"${_scopeId6}><li${_scopeId6}>Lunes: 08:00 - 17:00</li><li${_scopeId6}>Jueves: 08:00 - 17:00</li></ol>`);
                                        } else {
                                          return [
                                            createVNode("h4", null, "Horarios disponibles:"),
                                            createVNode("ol", { class: "ml-4" }, [
                                              createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                              createVNode("li", null, "Jueves: 08:00 - 17:00")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4${_scopeId6}>Fecha: 03/10/2024</h4><h4${_scopeId6}>Hora actual: 10:30</h4><h4${_scopeId6}>Hora inicio: 10:00 - 10:45</h4>`);
                                          _push7(ssrRenderComponent(VTextarea, {
                                            clearable: "",
                                            label: "Nota rápida:"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h4", null, "Fecha: 03/10/2024"),
                                            createVNode("h4", null, "Hora actual: 10:30"),
                                            createVNode("h4", null, "Hora inicio: 10:00 - 10:45"),
                                            createVNode(VTextarea, {
                                              clearable: "",
                                              label: "Nota rápida:"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode("h3", null, "Profesional:"),
                                          createTextVNode(" Tapia, Jorge "),
                                          createVNode("h4", null, "Especialidad:"),
                                          createTextVNode(" Psicología ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode("h4", null, "Horarios asignados:"),
                                          createVNode("ol", { class: "ml-4" }, [
                                            createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                            createVNode("li", null, "Martes: 08:00 - 17:00"),
                                            createVNode("li", null, "Miércoles: 08:00 - 17:00"),
                                            createVNode("li", null, "Jueves: 08:00 - 17:00"),
                                            createVNode("li", null, "Viernes: 08:00 - 17:00")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode("h4", null, "Horarios disponibles:"),
                                          createVNode("ol", { class: "ml-4" }, [
                                            createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                            createVNode("li", null, "Jueves: 08:00 - 17:00")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode("h4", null, "Fecha: 03/10/2024"),
                                          createVNode("h4", null, "Hora actual: 10:30"),
                                          createVNode("h4", null, "Hora inicio: 10:00 - 10:45"),
                                          createVNode(VTextarea, {
                                            clearable: "",
                                            label: "Nota rápida:"
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
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode("h3", null, "Profesional:"),
                                        createTextVNode(" Tapia, Jorge "),
                                        createVNode("h4", null, "Especialidad:"),
                                        createTextVNode(" Psicología ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode("h4", null, "Horarios asignados:"),
                                        createVNode("ol", { class: "ml-4" }, [
                                          createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                          createVNode("li", null, "Martes: 08:00 - 17:00"),
                                          createVNode("li", null, "Miércoles: 08:00 - 17:00"),
                                          createVNode("li", null, "Jueves: 08:00 - 17:00"),
                                          createVNode("li", null, "Viernes: 08:00 - 17:00")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode("h4", null, "Horarios disponibles:"),
                                        createVNode("ol", { class: "ml-4" }, [
                                          createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                          createVNode("li", null, "Jueves: 08:00 - 17:00")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode("h4", null, "Fecha: 03/10/2024"),
                                        createVNode("h4", null, "Hora actual: 10:30"),
                                        createVNode("h4", null, "Hora inicio: 10:00 - 10:45"),
                                        createVNode(VTextarea, {
                                          clearable: "",
                                          label: "Nota rápida:"
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
                        _push4(ssrRenderComponent(VSheet, {
                          color: "gray",
                          elevation: 1,
                          class: "rounded-lg ma-4 pa-6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VDataTable, {
                                            headers: state.atencion.headers,
                                            items: state.atencion.items,
                                            class: "elevation-1"
                                          }, {
                                            top: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VToolbar, { flat: "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VToolbarTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`Pacientes asignados`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Pacientes asignados")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VDivider, {
                                                        class: "mx-4",
                                                        inset: "",
                                                        vertical: ""
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VToolbarTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Pacientes asignados")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VDivider, {
                                                          class: "mx-4",
                                                          inset: "",
                                                          vertical: ""
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VToolbar, { flat: "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VToolbarTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Pacientes asignados")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VDivider, {
                                                        class: "mx-4",
                                                        inset: "",
                                                        vertical: ""
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            "item.actions": withCtx(({ item }, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTooltip, {
                                                  text: "Sesiones de atención psicológica",
                                                  location: "top"
                                                }, {
                                                  activator: withCtx(({ props }, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VBtn, mergeProps(props, {
                                                        density: "compact",
                                                        color: "#009AA4",
                                                        class: "mr-2 ml-2",
                                                        variant: "tonal",
                                                        icon: "mdi-head-cog",
                                                        onClick: ($event) => psicologiaSesiones()
                                                      }), null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VBtn, mergeProps(props, {
                                                          density: "compact",
                                                          color: "#009AA4",
                                                          class: "mr-2 ml-2",
                                                          variant: "tonal",
                                                          icon: "mdi-head-cog",
                                                          onClick: ($event) => psicologiaSesiones()
                                                        }), null, 16, ["onClick"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTooltip, {
                                                  text: "Atención Psicológica",
                                                  location: "top"
                                                }, {
                                                  activator: withCtx(({ props }, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VBtn, mergeProps(props, {
                                                        density: "compact",
                                                        color: "#009AA4",
                                                        class: "mr-2 ml-2",
                                                        variant: "tonal",
                                                        icon: "mdi-head-cog",
                                                        onClick: ($event) => _ctx.atencionPsicologica(item)
                                                      }), null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VBtn, mergeProps(props, {
                                                          density: "compact",
                                                          color: "#009AA4",
                                                          class: "mr-2 ml-2",
                                                          variant: "tonal",
                                                          icon: "mdi-head-cog",
                                                          onClick: ($event) => _ctx.atencionPsicologica(item)
                                                        }), null, 16, ["onClick"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTooltip, {
                                                    text: "Sesiones de atención psicológica",
                                                    location: "top"
                                                  }, {
                                                    activator: withCtx(({ props }) => [
                                                      createVNode(VBtn, mergeProps(props, {
                                                        density: "compact",
                                                        color: "#009AA4",
                                                        class: "mr-2 ml-2",
                                                        variant: "tonal",
                                                        icon: "mdi-head-cog",
                                                        onClick: ($event) => psicologiaSesiones()
                                                      }), null, 16, ["onClick"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VTooltip, {
                                                    text: "Atención Psicológica",
                                                    location: "top"
                                                  }, {
                                                    activator: withCtx(({ props }) => [
                                                      createVNode(VBtn, mergeProps(props, {
                                                        density: "compact",
                                                        color: "#009AA4",
                                                        class: "mr-2 ml-2",
                                                        variant: "tonal",
                                                        icon: "mdi-head-cog",
                                                        onClick: ($event) => _ctx.atencionPsicologica(item)
                                                      }), null, 16, ["onClick"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VDataTable, {
                                              headers: state.atencion.headers,
                                              items: state.atencion.items,
                                              class: "elevation-1"
                                            }, {
                                              top: withCtx(() => [
                                                createVNode(VToolbar, { flat: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VToolbarTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Pacientes asignados")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VDivider, {
                                                      class: "mx-4",
                                                      inset: "",
                                                      vertical: ""
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              "item.actions": withCtx(({ item }) => [
                                                createVNode(VTooltip, {
                                                  text: "Sesiones de atención psicológica",
                                                  location: "top"
                                                }, {
                                                  activator: withCtx(({ props }) => [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      density: "compact",
                                                      color: "#009AA4",
                                                      class: "mr-2 ml-2",
                                                      variant: "tonal",
                                                      icon: "mdi-head-cog",
                                                      onClick: ($event) => psicologiaSesiones()
                                                    }), null, 16, ["onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VTooltip, {
                                                  text: "Atención Psicológica",
                                                  location: "top"
                                                }, {
                                                  activator: withCtx(({ props }) => [
                                                    createVNode(VBtn, mergeProps(props, {
                                                      density: "compact",
                                                      color: "#009AA4",
                                                      class: "mr-2 ml-2",
                                                      variant: "tonal",
                                                      icon: "mdi-head-cog",
                                                      onClick: ($event) => _ctx.atencionPsicologica(item)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VDataTable, {
                                            headers: state.atencion.headers,
                                            items: state.atencion.items,
                                            class: "elevation-1"
                                          }, {
                                            top: withCtx(() => [
                                              createVNode(VToolbar, { flat: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(VToolbarTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Pacientes asignados")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VDivider, {
                                                    class: "mx-4",
                                                    inset: "",
                                                    vertical: ""
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            "item.actions": withCtx(({ item }) => [
                                              createVNode(VTooltip, {
                                                text: "Sesiones de atención psicológica",
                                                location: "top"
                                              }, {
                                                activator: withCtx(({ props }) => [
                                                  createVNode(VBtn, mergeProps(props, {
                                                    density: "compact",
                                                    color: "#009AA4",
                                                    class: "mr-2 ml-2",
                                                    variant: "tonal",
                                                    icon: "mdi-head-cog",
                                                    onClick: ($event) => psicologiaSesiones()
                                                  }), null, 16, ["onClick"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VTooltip, {
                                                text: "Atención Psicológica",
                                                location: "top"
                                              }, {
                                                activator: withCtx(({ props }) => [
                                                  createVNode(VBtn, mergeProps(props, {
                                                    density: "compact",
                                                    color: "#009AA4",
                                                    class: "mr-2 ml-2",
                                                    variant: "tonal",
                                                    icon: "mdi-head-cog",
                                                    onClick: ($event) => _ctx.atencionPsicologica(item)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode(VDataTable, {
                                          headers: state.atencion.headers,
                                          items: state.atencion.items,
                                          class: "elevation-1"
                                        }, {
                                          top: withCtx(() => [
                                            createVNode(VToolbar, { flat: "" }, {
                                              default: withCtx(() => [
                                                createVNode(VToolbarTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Pacientes asignados")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VDivider, {
                                                  class: "mx-4",
                                                  inset: "",
                                                  vertical: ""
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          "item.actions": withCtx(({ item }) => [
                                            createVNode(VTooltip, {
                                              text: "Sesiones de atención psicológica",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }) => [
                                                createVNode(VBtn, mergeProps(props, {
                                                  density: "compact",
                                                  color: "#009AA4",
                                                  class: "mr-2 ml-2",
                                                  variant: "tonal",
                                                  icon: "mdi-head-cog",
                                                  onClick: ($event) => psicologiaSesiones()
                                                }), null, 16, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VTooltip, {
                                              text: "Atención Psicológica",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }) => [
                                                createVNode(VBtn, mergeProps(props, {
                                                  density: "compact",
                                                  color: "#009AA4",
                                                  class: "mr-2 ml-2",
                                                  variant: "tonal",
                                                  icon: "mdi-head-cog",
                                                  onClick: ($event) => _ctx.atencionPsicologica(item)
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
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSheet, {
                            color: "gray",
                            elevation: 1,
                            class: "rounded-lg ma-4 pa-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "Profesional:"),
                                      createTextVNode(" Tapia, Jorge "),
                                      createVNode("h4", null, "Especialidad:"),
                                      createTextVNode(" Psicología ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("h4", null, "Horarios asignados:"),
                                      createVNode("ol", { class: "ml-4" }, [
                                        createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                        createVNode("li", null, "Martes: 08:00 - 17:00"),
                                        createVNode("li", null, "Miércoles: 08:00 - 17:00"),
                                        createVNode("li", null, "Jueves: 08:00 - 17:00"),
                                        createVNode("li", null, "Viernes: 08:00 - 17:00")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("h4", null, "Horarios disponibles:"),
                                      createVNode("ol", { class: "ml-4" }, [
                                        createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                        createVNode("li", null, "Jueves: 08:00 - 17:00")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("h4", null, "Fecha: 03/10/2024"),
                                      createVNode("h4", null, "Hora actual: 10:30"),
                                      createVNode("h4", null, "Hora inicio: 10:00 - 10:45"),
                                      createVNode(VTextarea, {
                                        clearable: "",
                                        label: "Nota rápida:"
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
                          createVNode(VSheet, {
                            color: "gray",
                            elevation: 1,
                            class: "rounded-lg ma-4 pa-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VDataTable, {
                                        headers: state.atencion.headers,
                                        items: state.atencion.items,
                                        class: "elevation-1"
                                      }, {
                                        top: withCtx(() => [
                                          createVNode(VToolbar, { flat: "" }, {
                                            default: withCtx(() => [
                                              createVNode(VToolbarTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Pacientes asignados")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VDivider, {
                                                class: "mx-4",
                                                inset: "",
                                                vertical: ""
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        "item.actions": withCtx(({ item }) => [
                                          createVNode(VTooltip, {
                                            text: "Sesiones de atención psicológica",
                                            location: "top"
                                          }, {
                                            activator: withCtx(({ props }) => [
                                              createVNode(VBtn, mergeProps(props, {
                                                density: "compact",
                                                color: "#009AA4",
                                                class: "mr-2 ml-2",
                                                variant: "tonal",
                                                icon: "mdi-head-cog",
                                                onClick: ($event) => psicologiaSesiones()
                                              }), null, 16, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VTooltip, {
                                            text: "Atención Psicológica",
                                            location: "top"
                                          }, {
                                            activator: withCtx(({ props }) => [
                                              createVNode(VBtn, mergeProps(props, {
                                                density: "compact",
                                                color: "#009AA4",
                                                class: "mr-2 ml-2",
                                                variant: "tonal",
                                                icon: "mdi-head-cog",
                                                onClick: ($event) => _ctx.atencionPsicologica(item)
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Pacientes asignado para atención psicológica")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VSheet, {
                          color: "gray",
                          elevation: 1,
                          class: "rounded-lg ma-4 pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "Profesional:"),
                                    createTextVNode(" Tapia, Jorge "),
                                    createVNode("h4", null, "Especialidad:"),
                                    createTextVNode(" Psicología ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", null, "Horarios asignados:"),
                                    createVNode("ol", { class: "ml-4" }, [
                                      createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                      createVNode("li", null, "Martes: 08:00 - 17:00"),
                                      createVNode("li", null, "Miércoles: 08:00 - 17:00"),
                                      createVNode("li", null, "Jueves: 08:00 - 17:00"),
                                      createVNode("li", null, "Viernes: 08:00 - 17:00")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", null, "Horarios disponibles:"),
                                    createVNode("ol", { class: "ml-4" }, [
                                      createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                      createVNode("li", null, "Jueves: 08:00 - 17:00")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", null, "Fecha: 03/10/2024"),
                                    createVNode("h4", null, "Hora actual: 10:30"),
                                    createVNode("h4", null, "Hora inicio: 10:00 - 10:45"),
                                    createVNode(VTextarea, {
                                      clearable: "",
                                      label: "Nota rápida:"
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
                        createVNode(VSheet, {
                          color: "gray",
                          elevation: 1,
                          class: "rounded-lg ma-4 pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VDataTable, {
                                      headers: state.atencion.headers,
                                      items: state.atencion.items,
                                      class: "elevation-1"
                                    }, {
                                      top: withCtx(() => [
                                        createVNode(VToolbar, { flat: "" }, {
                                          default: withCtx(() => [
                                            createVNode(VToolbarTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Pacientes asignados")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, {
                                              class: "mx-4",
                                              inset: "",
                                              vertical: ""
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      "item.actions": withCtx(({ item }) => [
                                        createVNode(VTooltip, {
                                          text: "Sesiones de atención psicológica",
                                          location: "top"
                                        }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(VBtn, mergeProps(props, {
                                              density: "compact",
                                              color: "#009AA4",
                                              class: "mr-2 ml-2",
                                              variant: "tonal",
                                              icon: "mdi-head-cog",
                                              onClick: ($event) => psicologiaSesiones()
                                            }), null, 16, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VTooltip, {
                                          text: "Atención Psicológica",
                                          location: "top"
                                        }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(VBtn, mergeProps(props, {
                                              density: "compact",
                                              color: "#009AA4",
                                              class: "mr-2 ml-2",
                                              variant: "tonal",
                                              icon: "mdi-head-cog",
                                              onClick: ($event) => _ctx.atencionPsicologica(item)
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Pacientes asignado para atención psicológica")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VSheet, {
                        color: "gray",
                        elevation: 1,
                        class: "rounded-lg ma-4 pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "Profesional:"),
                                  createTextVNode(" Tapia, Jorge "),
                                  createVNode("h4", null, "Especialidad:"),
                                  createTextVNode(" Psicología ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("h4", null, "Horarios asignados:"),
                                  createVNode("ol", { class: "ml-4" }, [
                                    createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                    createVNode("li", null, "Martes: 08:00 - 17:00"),
                                    createVNode("li", null, "Miércoles: 08:00 - 17:00"),
                                    createVNode("li", null, "Jueves: 08:00 - 17:00"),
                                    createVNode("li", null, "Viernes: 08:00 - 17:00")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("h4", null, "Horarios disponibles:"),
                                  createVNode("ol", { class: "ml-4" }, [
                                    createVNode("li", null, "Lunes: 08:00 - 17:00"),
                                    createVNode("li", null, "Jueves: 08:00 - 17:00")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("h4", null, "Fecha: 03/10/2024"),
                                  createVNode("h4", null, "Hora actual: 10:30"),
                                  createVNode("h4", null, "Hora inicio: 10:00 - 10:45"),
                                  createVNode(VTextarea, {
                                    clearable: "",
                                    label: "Nota rápida:"
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
                      createVNode(VSheet, {
                        color: "gray",
                        elevation: 1,
                        class: "rounded-lg ma-4 pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VDataTable, {
                                    headers: state.atencion.headers,
                                    items: state.atencion.items,
                                    class: "elevation-1"
                                  }, {
                                    top: withCtx(() => [
                                      createVNode(VToolbar, { flat: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VToolbarTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Pacientes asignados")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, {
                                            class: "mx-4",
                                            inset: "",
                                            vertical: ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    "item.actions": withCtx(({ item }) => [
                                      createVNode(VTooltip, {
                                        text: "Sesiones de atención psicológica",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VBtn, mergeProps(props, {
                                            density: "compact",
                                            color: "#009AA4",
                                            class: "mr-2 ml-2",
                                            variant: "tonal",
                                            icon: "mdi-head-cog",
                                            onClick: ($event) => psicologiaSesiones()
                                          }), null, 16, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VTooltip, {
                                        text: "Atención Psicológica",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VBtn, mergeProps(props, {
                                            density: "compact",
                                            color: "#009AA4",
                                            class: "mr-2 ml-2",
                                            variant: "tonal",
                                            icon: "mdi-head-cog",
                                            onClick: ($event) => _ctx.atencionPsicologica(item)
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PsicologiaPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PsicologiaPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/PsicologiaPage.vue"]]);
export {
  PsicologiaPage as default
};
//# sourceMappingURL=PsicologiaPage-B5NC5kKN.js.map
