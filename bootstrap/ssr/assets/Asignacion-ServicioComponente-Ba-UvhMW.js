import { reactive, onMounted, computed, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-CPH0Fv3Z.js";
import { u as useDataStore } from "./store-Dwa255xy.js";
import { f as fetchAllData } from "./helper-BVkQOSvY.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VAlert } from "vuetify/lib/components/VAlert/index.mjs";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText } from "vuetify/lib/components/VCard/index.mjs";
import { VChip } from "vuetify/lib/components/VChip/index.mjs";
import { VDataTable } from "vuetify/lib/components/VDataTable/index.mjs";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import { VToolbar, VToolbarTitle } from "vuetify/lib/components/VToolbar/index.mjs";
import "@inertiajs/vue3";
import "vue-loading-overlay";
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
  __name: "Asignacion-ServicioComponente",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    const state = reactive({
      endpoints: ["especialidades"],
      headers: [
        {
          title: "#",
          align: "center",
          sortable: true,
          key: "paciente_id"
        },
        {
          title: "Motivo de consulta",
          align: "center",
          sortable: true,
          key: "motivo_consulta"
        },
        {
          title: "Accidente",
          align: "center",
          sortable: true,
          key: "accidente.descripcion"
        },
        { title: "Fecha atencion", key: "fecha_atencion", sortable: true },
        { title: "Acciones", align: "center", key: "actions" }
      ],
      horario: {
        headers: [
          {
            text: "Día de la semana",
            align: "center",
            sortable: true,
            value: "dia"
          },
          {
            text: "Hora inicio",
            align: "center",
            sortable: true,
            value: "horaInicio"
          },
          {
            text: "Hora término",
            align: "center",
            sortable: true,
            value: "horaTermino"
          },
          {
            text: "Disponible (S/N)",
            align: "center",
            sortable: true,
            value: "disponible"
          }
        ],
        items: [
          {
            dia: "Lunes",
            horaInicio: "08:00",
            horaTermino: "08:45",
            disponible: "S"
          },
          {
            dia: "Lunes",
            horaInicio: "09:00",
            horaTermino: "09:45",
            disponible: "S"
          },
          {
            dia: "Lunes",
            horaInicio: "09:45",
            horaTermino: "10:45",
            disponible: "N"
          },
          {
            dia: "Martes",
            horaInicio: "08:00",
            horaTermino: "08:45",
            disponible: "N"
          },
          {
            dia: "Miércoles",
            horaInicio: "09:00",
            horaTermino: "09:45",
            disponible: "S"
          },
          {
            dia: "Miércoles",
            horaInicio: "09:45",
            horaTermino: "10:45",
            disponible: "S"
          }
        ]
      },
      editedItem: {
        paciente_id: null,
        acompanado: null,
        alerta_she: null,
        at_realizada_por: null,
        calificacion: null,
        comentario: null,
        cuenta_acr: null,
        declaracion_completa: null,
        derivacion_inmediata: null,
        derivacion: null,
        descripcion_breve: null,
        dias_descanso: null,
        error_critico: null,
        estado_mental: null,
        fecha_atencion: null,
        fuente_incidente: null,
        hora_inicio: null,
        hora_termino: null,
        lugar_atencion: null,
        medicamentos: null,
        medio_derivacion: null,
        motivo_consulta: null,
        nombre_supervisor: null,
        puede_reintegrarse: null,
        RECA: null,
        responsable: null,
        sistema_afectado: null,
        tipo_atencion: null,
        tipo_licencia: null,
        turno: null
      },
      defaultItem: {
        paciente_id: null,
        accidente_condicion: null,
        accidente: null,
        acompanado: false,
        alerta_she: false,
        at_realizada_por: null,
        calificacion: null,
        comentario: null,
        cuenta_acr: false,
        declaracion_completa: false,
        derivacion_inmediata: false,
        derivacion: null,
        descripcion_breve: null,
        dias_descanso: null,
        error_critico: null,
        estado_mental: null,
        fecha_atencion: null,
        fuente_incidente: null,
        hora_inicio: null,
        hora_termino: null,
        lugar_atencion: null,
        medicamentos: null,
        medio_derivacion: null,
        motivo_consulta: null,
        nombre_supervisor: null,
        puede_reintegrarse: false,
        responsable: null,
        RECA: null,
        sistema_afectado: null,
        tipo_atencion: null,
        tipo_licencia: null,
        turno: null
      },
      searchQuery: {
        paciente_id: null
      },
      dialog: false,
      tableItems: [],
      editedIndex: -1,
      list: [],
      loading: false,
      valid: null,
      formTitle: "Asignación de Servicio",
      formCrear: "Nueva atención",
      formEdit: "Editar datos",
      urlShow: "/asignacion_servicio/show",
      urlUpdate: "/asignacion_servicio/update",
      urlDelete: "/asignacion_servicio/delete",
      urlStore: "/asignacion_servicio"
    });
    onMounted(async () => {
      state.list = await fetchAllData(state.endpoints);
    });
    computed(
      () => state.editedIndex === -1 ? state.formCrear : state.formEdit
    );
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
                        _push4(`Asignar Solicitud de Servicio`);
                      } else {
                        return [
                          createTextVNode("Asignar Solicitud de Servicio")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "6",
                                class: "ma-4 pa-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: _ctx.rut,
                                      "onUpdate:modelValue": ($event) => _ctx.rut = $event,
                                      label: "Número de Solicitud",
                                      onBlur: _ctx.buscarPaciente
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            "prepend-icon": "mdi-account-multiple-plus",
                                            variant: "tonal",
                                            class: "ma-2",
                                            color: "#009AA4",
                                            type: "submit"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Asignar solicitud `);
                                              } else {
                                                return [
                                                  createTextVNode(" Asignar solicitud ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            "prepend-icon": "mdi-account-multiple-plus",
                                            variant: "tonal",
                                            class: "ma-2",
                                            color: "#009AA4",
                                            type: "submit"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Buscar por Rut `);
                                              } else {
                                                return [
                                                  createTextVNode(" Buscar por Rut ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              "prepend-icon": "mdi-account-multiple-plus",
                                              variant: "tonal",
                                              class: "ma-2",
                                              color: "#009AA4",
                                              type: "submit"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Asignar solicitud ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              "prepend-icon": "mdi-account-multiple-plus",
                                              variant: "tonal",
                                              class: "ma-2",
                                              color: "#009AA4",
                                              type: "submit"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Buscar por Rut ")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VSelect, {
                                      items: [
                                        "Especialidad 1",
                                        "Especialidad 2",
                                        "Especialidad 3"
                                      ],
                                      clearable: "",
                                      label: "Especialidad",
                                      variant: "underlined",
                                      single: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VSelect, {
                                      items: [
                                        "Profesional 1",
                                        "Profesional 2",
                                        "Profesional 3"
                                      ],
                                      clearable: "",
                                      label: "Profesional",
                                      variant: "underlined",
                                      single: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VSelect, {
                                      clearable: "",
                                      chips: "",
                                      label: "Contacto",
                                      items: [
                                        "No responde 1 vez",
                                        "No responde 2 veces",
                                        "No conveniencia horaria 1",
                                        "No conveniencia horaria 2",
                                        "Inubicable / no contesta"
                                      ],
                                      multiple: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "#009AA4",
                                      variant: "tonal",
                                      onClick: _ctx.sesiones,
                                      class: "ma-2",
                                      "prepend-icon": "mdi-cancel"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Anular Servicio `);
                                        } else {
                                          return [
                                            createTextVNode(" Anular Servicio ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "#009AA4",
                                      variant: "tonal",
                                      onClick: _ctx.sesiones,
                                      class: "ma-2",
                                      "prepend-icon": "mdi-check-decagram"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Asignar Servicio `);
                                        } else {
                                          return [
                                            createTextVNode(" Asignar Servicio ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VAlert, {
                                      color: "#2A3B4D",
                                      density: "compact",
                                      icon: "mdi-firework",
                                      theme: "dark",
                                      class: "mt-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` El servicio ha sido asignado a Profesional 1 los días Lunes de 09:00 a 09:45. `);
                                        } else {
                                          return [
                                            createTextVNode(" El servicio ha sido asignado a Profesional 1 los días Lunes de 09:00 a 09:45. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: _ctx.rut,
                                        "onUpdate:modelValue": ($event) => _ctx.rut = $event,
                                        label: "Número de Solicitud",
                                        onBlur: _ctx.buscarPaciente
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"]),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            "prepend-icon": "mdi-account-multiple-plus",
                                            variant: "tonal",
                                            class: "ma-2",
                                            color: "#009AA4",
                                            type: "submit"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Asignar solicitud ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            "prepend-icon": "mdi-account-multiple-plus",
                                            variant: "tonal",
                                            class: "ma-2",
                                            color: "#009AA4",
                                            type: "submit"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Buscar por Rut ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSelect, {
                                        items: [
                                          "Especialidad 1",
                                          "Especialidad 2",
                                          "Especialidad 3"
                                        ],
                                        clearable: "",
                                        label: "Especialidad",
                                        variant: "underlined",
                                        single: ""
                                      }),
                                      createVNode(VSelect, {
                                        items: [
                                          "Profesional 1",
                                          "Profesional 2",
                                          "Profesional 3"
                                        ],
                                        clearable: "",
                                        label: "Profesional",
                                        variant: "underlined",
                                        single: ""
                                      }),
                                      createVNode(VSelect, {
                                        clearable: "",
                                        chips: "",
                                        label: "Contacto",
                                        items: [
                                          "No responde 1 vez",
                                          "No responde 2 veces",
                                          "No conveniencia horaria 1",
                                          "No conveniencia horaria 2",
                                          "Inubicable / no contesta"
                                        ],
                                        multiple: ""
                                      }),
                                      createVNode(VBtn, {
                                        color: "#009AA4",
                                        variant: "tonal",
                                        onClick: _ctx.sesiones,
                                        class: "ma-2",
                                        "prepend-icon": "mdi-cancel"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Anular Servicio ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(VBtn, {
                                        color: "#009AA4",
                                        variant: "tonal",
                                        onClick: _ctx.sesiones,
                                        class: "ma-2",
                                        "prepend-icon": "mdi-check-decagram"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Asignar Servicio ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(VAlert, {
                                        color: "#2A3B4D",
                                        density: "compact",
                                        icon: "mdi-firework",
                                        theme: "dark",
                                        class: "mt-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" El servicio ha sido asignado a Profesional 1 los días Lunes de 09:00 a 09:45. ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VDataTable, {
                                      headers: state.horario.headers,
                                      items: state.horario.items,
                                      class: "elevation-1"
                                    }, {
                                      top: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VToolbar, { flat: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VToolbarTitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Disponibilidad horaria del profesional`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Disponibilidad horaria del profesional")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VDivider, {
                                                  class: "mx-4",
                                                  inset: "",
                                                  vertical: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VToolbarTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Disponibilidad horaria del profesional")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VToolbar, { flat: "" }, {
                                              default: withCtx(() => [
                                                createVNode(VToolbarTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Disponibilidad horaria del profesional")
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
                                      "item.disponible": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VChip, {
                                            color: item.disponible === "S" ? "green" : "red",
                                            dark: ""
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(item.disponible)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(item.disponible), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VChip, {
                                              color: item.disponible === "S" ? "green" : "red",
                                              dark: ""
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.disponible), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VDataTable, {
                                        headers: state.horario.headers,
                                        items: state.horario.items,
                                        class: "elevation-1"
                                      }, {
                                        top: withCtx(() => [
                                          createVNode(VToolbar, { flat: "" }, {
                                            default: withCtx(() => [
                                              createVNode(VToolbarTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Disponibilidad horaria del profesional")
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
                                        "item.disponible": withCtx(({ item }) => [
                                          createVNode(VChip, {
                                            color: item.disponible === "S" ? "green" : "red",
                                            dark: ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.disponible), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        _: 1
                                      }, 8, ["headers", "items"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "6",
                                  class: "ma-4 pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: _ctx.rut,
                                      "onUpdate:modelValue": ($event) => _ctx.rut = $event,
                                      label: "Número de Solicitud",
                                      onBlur: _ctx.buscarPaciente
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"]),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          "prepend-icon": "mdi-account-multiple-plus",
                                          variant: "tonal",
                                          class: "ma-2",
                                          color: "#009AA4",
                                          type: "submit"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Asignar solicitud ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          "prepend-icon": "mdi-account-multiple-plus",
                                          variant: "tonal",
                                          class: "ma-2",
                                          color: "#009AA4",
                                          type: "submit"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Buscar por Rut ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VSelect, {
                                      items: [
                                        "Especialidad 1",
                                        "Especialidad 2",
                                        "Especialidad 3"
                                      ],
                                      clearable: "",
                                      label: "Especialidad",
                                      variant: "underlined",
                                      single: ""
                                    }),
                                    createVNode(VSelect, {
                                      items: [
                                        "Profesional 1",
                                        "Profesional 2",
                                        "Profesional 3"
                                      ],
                                      clearable: "",
                                      label: "Profesional",
                                      variant: "underlined",
                                      single: ""
                                    }),
                                    createVNode(VSelect, {
                                      clearable: "",
                                      chips: "",
                                      label: "Contacto",
                                      items: [
                                        "No responde 1 vez",
                                        "No responde 2 veces",
                                        "No conveniencia horaria 1",
                                        "No conveniencia horaria 2",
                                        "Inubicable / no contesta"
                                      ],
                                      multiple: ""
                                    }),
                                    createVNode(VBtn, {
                                      color: "#009AA4",
                                      variant: "tonal",
                                      onClick: _ctx.sesiones,
                                      class: "ma-2",
                                      "prepend-icon": "mdi-cancel"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Anular Servicio ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(VBtn, {
                                      color: "#009AA4",
                                      variant: "tonal",
                                      onClick: _ctx.sesiones,
                                      class: "ma-2",
                                      "prepend-icon": "mdi-check-decagram"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Asignar Servicio ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(VAlert, {
                                      color: "#2A3B4D",
                                      density: "compact",
                                      icon: "mdi-firework",
                                      theme: "dark",
                                      class: "mt-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" El servicio ha sido asignado a Profesional 1 los días Lunes de 09:00 a 09:45. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VDataTable, {
                                      headers: state.horario.headers,
                                      items: state.horario.items,
                                      class: "elevation-1"
                                    }, {
                                      top: withCtx(() => [
                                        createVNode(VToolbar, { flat: "" }, {
                                          default: withCtx(() => [
                                            createVNode(VToolbarTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Disponibilidad horaria del profesional")
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
                                      "item.disponible": withCtx(({ item }) => [
                                        createVNode(VChip, {
                                          color: item.disponible === "S" ? "green" : "red",
                                          dark: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.disponible), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "6",
                                class: "ma-4 pa-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: _ctx.rut,
                                    "onUpdate:modelValue": ($event) => _ctx.rut = $event,
                                    label: "Número de Solicitud",
                                    onBlur: _ctx.buscarPaciente
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"]),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        "prepend-icon": "mdi-account-multiple-plus",
                                        variant: "tonal",
                                        class: "ma-2",
                                        color: "#009AA4",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Asignar solicitud ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        "prepend-icon": "mdi-account-multiple-plus",
                                        variant: "tonal",
                                        class: "ma-2",
                                        color: "#009AA4",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Buscar por Rut ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSelect, {
                                    items: [
                                      "Especialidad 1",
                                      "Especialidad 2",
                                      "Especialidad 3"
                                    ],
                                    clearable: "",
                                    label: "Especialidad",
                                    variant: "underlined",
                                    single: ""
                                  }),
                                  createVNode(VSelect, {
                                    items: [
                                      "Profesional 1",
                                      "Profesional 2",
                                      "Profesional 3"
                                    ],
                                    clearable: "",
                                    label: "Profesional",
                                    variant: "underlined",
                                    single: ""
                                  }),
                                  createVNode(VSelect, {
                                    clearable: "",
                                    chips: "",
                                    label: "Contacto",
                                    items: [
                                      "No responde 1 vez",
                                      "No responde 2 veces",
                                      "No conveniencia horaria 1",
                                      "No conveniencia horaria 2",
                                      "Inubicable / no contesta"
                                    ],
                                    multiple: ""
                                  }),
                                  createVNode(VBtn, {
                                    color: "#009AA4",
                                    variant: "tonal",
                                    onClick: _ctx.sesiones,
                                    class: "ma-2",
                                    "prepend-icon": "mdi-cancel"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Anular Servicio ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    color: "#009AA4",
                                    variant: "tonal",
                                    onClick: _ctx.sesiones,
                                    class: "ma-2",
                                    "prepend-icon": "mdi-check-decagram"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Asignar Servicio ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VAlert, {
                                    color: "#2A3B4D",
                                    density: "compact",
                                    icon: "mdi-firework",
                                    theme: "dark",
                                    class: "mt-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" El servicio ha sido asignado a Profesional 1 los días Lunes de 09:00 a 09:45. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VDataTable, {
                                    headers: state.horario.headers,
                                    items: state.horario.items,
                                    class: "elevation-1"
                                  }, {
                                    top: withCtx(() => [
                                      createVNode(VToolbar, { flat: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VToolbarTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Disponibilidad horaria del profesional")
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
                                    "item.disponible": withCtx(({ item }) => [
                                      createVNode(VChip, {
                                        color: item.disponible === "S" ? "green" : "red",
                                        dark: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.disponible), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Asignar Solicitud de Servicio")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "6",
                              class: "ma-4 pa-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: _ctx.rut,
                                  "onUpdate:modelValue": ($event) => _ctx.rut = $event,
                                  label: "Número de Solicitud",
                                  onBlur: _ctx.buscarPaciente
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"]),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      "prepend-icon": "mdi-account-multiple-plus",
                                      variant: "tonal",
                                      class: "ma-2",
                                      color: "#009AA4",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Asignar solicitud ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      "prepend-icon": "mdi-account-multiple-plus",
                                      variant: "tonal",
                                      class: "ma-2",
                                      color: "#009AA4",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Buscar por Rut ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  items: [
                                    "Especialidad 1",
                                    "Especialidad 2",
                                    "Especialidad 3"
                                  ],
                                  clearable: "",
                                  label: "Especialidad",
                                  variant: "underlined",
                                  single: ""
                                }),
                                createVNode(VSelect, {
                                  items: [
                                    "Profesional 1",
                                    "Profesional 2",
                                    "Profesional 3"
                                  ],
                                  clearable: "",
                                  label: "Profesional",
                                  variant: "underlined",
                                  single: ""
                                }),
                                createVNode(VSelect, {
                                  clearable: "",
                                  chips: "",
                                  label: "Contacto",
                                  items: [
                                    "No responde 1 vez",
                                    "No responde 2 veces",
                                    "No conveniencia horaria 1",
                                    "No conveniencia horaria 2",
                                    "Inubicable / no contesta"
                                  ],
                                  multiple: ""
                                }),
                                createVNode(VBtn, {
                                  color: "#009AA4",
                                  variant: "tonal",
                                  onClick: _ctx.sesiones,
                                  class: "ma-2",
                                  "prepend-icon": "mdi-cancel"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Anular Servicio ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  color: "#009AA4",
                                  variant: "tonal",
                                  onClick: _ctx.sesiones,
                                  class: "ma-2",
                                  "prepend-icon": "mdi-check-decagram"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Asignar Servicio ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VAlert, {
                                  color: "#2A3B4D",
                                  density: "compact",
                                  icon: "mdi-firework",
                                  theme: "dark",
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" El servicio ha sido asignado a Profesional 1 los días Lunes de 09:00 a 09:45. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VDataTable, {
                                  headers: state.horario.headers,
                                  items: state.horario.items,
                                  class: "elevation-1"
                                }, {
                                  top: withCtx(() => [
                                    createVNode(VToolbar, { flat: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VToolbarTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Disponibilidad horaria del profesional")
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
                                  "item.disponible": withCtx(({ item }) => [
                                    createVNode(VChip, {
                                      color: item.disponible === "S" ? "green" : "red",
                                      dark: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.disponible), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Asignar Solicitud de Servicio")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "6",
                            class: "ma-4 pa-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: _ctx.rut,
                                "onUpdate:modelValue": ($event) => _ctx.rut = $event,
                                label: "Número de Solicitud",
                                onBlur: _ctx.buscarPaciente
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"]),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    "prepend-icon": "mdi-account-multiple-plus",
                                    variant: "tonal",
                                    class: "ma-2",
                                    color: "#009AA4",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Asignar solicitud ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    "prepend-icon": "mdi-account-multiple-plus",
                                    variant: "tonal",
                                    class: "ma-2",
                                    color: "#009AA4",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Buscar por Rut ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VSelect, {
                                items: [
                                  "Especialidad 1",
                                  "Especialidad 2",
                                  "Especialidad 3"
                                ],
                                clearable: "",
                                label: "Especialidad",
                                variant: "underlined",
                                single: ""
                              }),
                              createVNode(VSelect, {
                                items: [
                                  "Profesional 1",
                                  "Profesional 2",
                                  "Profesional 3"
                                ],
                                clearable: "",
                                label: "Profesional",
                                variant: "underlined",
                                single: ""
                              }),
                              createVNode(VSelect, {
                                clearable: "",
                                chips: "",
                                label: "Contacto",
                                items: [
                                  "No responde 1 vez",
                                  "No responde 2 veces",
                                  "No conveniencia horaria 1",
                                  "No conveniencia horaria 2",
                                  "Inubicable / no contesta"
                                ],
                                multiple: ""
                              }),
                              createVNode(VBtn, {
                                color: "#009AA4",
                                variant: "tonal",
                                onClick: _ctx.sesiones,
                                class: "ma-2",
                                "prepend-icon": "mdi-cancel"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Anular Servicio ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                color: "#009AA4",
                                variant: "tonal",
                                onClick: _ctx.sesiones,
                                class: "ma-2",
                                "prepend-icon": "mdi-check-decagram"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Asignar Servicio ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VAlert, {
                                color: "#2A3B4D",
                                density: "compact",
                                icon: "mdi-firework",
                                theme: "dark",
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" El servicio ha sido asignado a Profesional 1 los días Lunes de 09:00 a 09:45. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VDataTable, {
                                headers: state.horario.headers,
                                items: state.horario.items,
                                class: "elevation-1"
                              }, {
                                top: withCtx(() => [
                                  createVNode(VToolbar, { flat: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VToolbarTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Disponibilidad horaria del profesional")
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
                                "item.disponible": withCtx(({ item }) => [
                                  createVNode(VChip, {
                                    color: item.disponible === "S" ? "green" : "red",
                                    dark: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.disponible), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/Asignacion-ServicioComponente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AsignacionServicio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/SubPages/Componentes/Asignacion-ServicioComponente.vue"]]);
export {
  AsignacionServicio as default
};
//# sourceMappingURL=Asignacion-ServicioComponente-Ba-UvhMW.js.map
