import { ref, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-DOexpPir.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "Solicitud-ServicioComponente",
  __ssrInlineRender: true,
  setup(__props) {
    const valid = ref(false);
    const rut = ref("");
    const nombrePaciente = ref("");
    const especialidadSeleccionada = ref("");
    const motivoConsulta = ref("");
    const pacienteEncontrado = ref(false);
    const especialidades = ref(["Psicología", "Terapia Ocupacional", "Kinesiología"]);
    const rules = {
      required: (value) => !!value || "Este campo es requerido"
    };
    const especialidad = ref(especialidades.value[0]);
    const buscarPaciente = async () => {
      try {
        const { data } = await useAxios(`/api/pacientes/${rut.value}`);
        if (data.value) {
          nombrePaciente.value = data.value.nombre;
          pacienteEncontrado.value = true;
        } else {
          nombrePaciente.value = "";
          pacienteEncontrado.value = false;
        }
      } catch (error) {
        nombrePaciente.value = "";
        pacienteEncontrado.value = false;
      }
    };
    const submit = async () => {
      if (valid.value) {
        const solicitud = {
          rut: rut.value,
          nombrePaciente: nombrePaciente.value,
          especialidad: especialidadSeleccionada.value,
          motivoConsulta: motivoConsulta.value
        };
        try {
          await useAxios.post("/api/solicitudes", solicitud);
          alert("Solicitud ingresada correctamente");
          resetForm();
        } catch (error) {
          alert("Error al ingresar la solicitud");
        }
      }
    };
    const resetForm = () => {
      rut.value = "";
      nombrePaciente.value = "";
      especialidad.value = "";
      motivoConsulta.value = "";
      pacienteEncontrado.value = false;
      valid.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_textarea = resolveComponent("v-textarea");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Ingresar Nueva Solicitud de Servicio`);
                } else {
                  return [
                    createTextVNode("Ingresar Nueva Solicitud de Servicio")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_form, {
                    ref: "form",
                    modelValue: valid.value,
                    "onUpdate:modelValue": ($event) => valid.value = $event,
                    "lazy-validation": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: rut.value,
                                      "onUpdate:modelValue": ($event) => rut.value = $event,
                                      label: "RUT solicitante",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      "prepend-icon": "mdi-account-multiple-plus",
                                      variant: "tonal",
                                      class: "ma-2",
                                      color: "#009AA4",
                                      type: "submit"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Buscar usuario `);
                                        } else {
                                          return [
                                            createTextVNode(" Buscar usuario ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      "prepend-icon": "mdi-account-multiple-plus",
                                      variant: "tonal",
                                      class: "ma-2",
                                      color: "#009AA4",
                                      type: "submit"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Agregar nuevo usuario `);
                                        } else {
                                          return [
                                            createTextVNode(" Agregar nuevo usuario ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: _ctx.nombre,
                                      "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                      label: "Nombre solicitante",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      "prepend-icon": "mdi-account-multiple-plus",
                                      variant: "tonal",
                                      class: "ma-2",
                                      color: "#009AA4",
                                      type: "submit"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Consultar ficha usuario `);
                                        } else {
                                          return [
                                            createTextVNode(" Consultar ficha usuario ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      disabled: !valid.value,
                                      onClick: submit
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Ingresar Solicitud`);
                                        } else {
                                          return [
                                            createTextVNode("Ingresar Solicitud")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: rut.value,
                                        "onUpdate:modelValue": ($event) => rut.value = $event,
                                        label: "RUT solicitante",
                                        rules: [rules.required],
                                        onBlur: buscarPaciente
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_v_btn, {
                                        "prepend-icon": "mdi-account-multiple-plus",
                                        variant: "tonal",
                                        class: "ma-2",
                                        color: "#009AA4",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Buscar usuario ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        "prepend-icon": "mdi-account-multiple-plus",
                                        variant: "tonal",
                                        class: "ma-2",
                                        color: "#009AA4",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Agregar nuevo usuario ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        modelValue: _ctx.nombre,
                                        "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                        label: "Nombre solicitante",
                                        rules: [rules.required],
                                        onBlur: buscarPaciente
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_v_btn, {
                                        "prepend-icon": "mdi-account-multiple-plus",
                                        variant: "tonal",
                                        class: "ma-2",
                                        color: "#009AA4",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Consultar ficha usuario ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        disabled: !valid.value,
                                        onClick: submit
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Ingresar Solicitud")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: especialidadSeleccionada.value,
                                      "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                      items: especialidades.value,
                                      label: "Especialidad Solicitada",
                                      rules: [rules.required]
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_textarea, {
                                      modelValue: motivoConsulta.value,
                                      "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                      label: "Motivo de Consulta",
                                      rules: [rules.required]
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: _ctx.nombre,
                                      "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                      label: "Numero de Solicitud Asignada",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_select, {
                                        modelValue: especialidadSeleccionada.value,
                                        "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                        items: especialidades.value,
                                        label: "Especialidad Solicitada",
                                        rules: [rules.required]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                      createVNode(_component_v_textarea, {
                                        modelValue: motivoConsulta.value,
                                        "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                        label: "Motivo de Consulta",
                                        rules: [rules.required]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: _ctx.nombre,
                                        "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                        label: "Numero de Solicitud Asignada",
                                        rules: [rules.required],
                                        onBlur: buscarPaciente
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: rut.value,
                                      "onUpdate:modelValue": ($event) => rut.value = $event,
                                      label: "RUT solicitante",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(_component_v_btn, {
                                      "prepend-icon": "mdi-account-multiple-plus",
                                      variant: "tonal",
                                      class: "ma-2",
                                      color: "#009AA4",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Buscar usuario ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      "prepend-icon": "mdi-account-multiple-plus",
                                      variant: "tonal",
                                      class: "ma-2",
                                      color: "#009AA4",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Agregar nuevo usuario ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      modelValue: _ctx.nombre,
                                      "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                      label: "Nombre solicitante",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(_component_v_btn, {
                                      "prepend-icon": "mdi-account-multiple-plus",
                                      variant: "tonal",
                                      class: "ma-2",
                                      color: "#009AA4",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Consultar ficha usuario ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      disabled: !valid.value,
                                      onClick: submit
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Ingresar Solicitud")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      modelValue: especialidadSeleccionada.value,
                                      "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                      items: especialidades.value,
                                      label: "Especialidad Solicitada",
                                      rules: [rules.required]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                    createVNode(_component_v_textarea, {
                                      modelValue: motivoConsulta.value,
                                      "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                      label: "Motivo de Consulta",
                                      rules: [rules.required]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: _ctx.nombre,
                                      "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                      label: "Numero de Solicitud Asignada",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: rut.value,
                                    "onUpdate:modelValue": ($event) => rut.value = $event,
                                    label: "RUT solicitante",
                                    rules: [rules.required],
                                    onBlur: buscarPaciente
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(_component_v_btn, {
                                    "prepend-icon": "mdi-account-multiple-plus",
                                    variant: "tonal",
                                    class: "ma-2",
                                    color: "#009AA4",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Buscar usuario ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    "prepend-icon": "mdi-account-multiple-plus",
                                    variant: "tonal",
                                    class: "ma-2",
                                    color: "#009AA4",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Agregar nuevo usuario ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    modelValue: _ctx.nombre,
                                    "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                    label: "Nombre solicitante",
                                    rules: [rules.required],
                                    onBlur: buscarPaciente
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(_component_v_btn, {
                                    "prepend-icon": "mdi-account-multiple-plus",
                                    variant: "tonal",
                                    class: "ma-2",
                                    color: "#009AA4",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Consultar ficha usuario ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    disabled: !valid.value,
                                    onClick: submit
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Ingresar Solicitud")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: especialidadSeleccionada.value,
                                    "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                    items: especialidades.value,
                                    label: "Especialidad Solicitada",
                                    rules: [rules.required]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                  createVNode(_component_v_textarea, {
                                    modelValue: motivoConsulta.value,
                                    "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                    label: "Motivo de Consulta",
                                    rules: [rules.required]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: _ctx.nombre,
                                    "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                    label: "Numero de Solicitud Asignada",
                                    rules: [rules.required],
                                    onBlur: buscarPaciente
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                    createVNode(_component_v_form, {
                      ref: "form",
                      modelValue: valid.value,
                      "onUpdate:modelValue": ($event) => valid.value = $event,
                      "lazy-validation": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: rut.value,
                                  "onUpdate:modelValue": ($event) => rut.value = $event,
                                  label: "RUT solicitante",
                                  rules: [rules.required],
                                  onBlur: buscarPaciente
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_btn, {
                                  "prepend-icon": "mdi-account-multiple-plus",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Buscar usuario ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  "prepend-icon": "mdi-account-multiple-plus",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Agregar nuevo usuario ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  modelValue: _ctx.nombre,
                                  "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                  label: "Nombre solicitante",
                                  rules: [rules.required],
                                  onBlur: buscarPaciente
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_btn, {
                                  "prepend-icon": "mdi-account-multiple-plus",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Consultar ficha usuario ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  disabled: !valid.value,
                                  onClick: submit
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ingresar Solicitud")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_select, {
                                  modelValue: especialidadSeleccionada.value,
                                  "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                  items: especialidades.value,
                                  label: "Especialidad Solicitada",
                                  rules: [rules.required]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                createVNode(_component_v_textarea, {
                                  modelValue: motivoConsulta.value,
                                  "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                  label: "Motivo de Consulta",
                                  rules: [rules.required]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: _ctx.nombre,
                                  "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                  label: "Numero de Solicitud Asignada",
                                  rules: [rules.required],
                                  onBlur: buscarPaciente
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_title, null, {
                default: withCtx(() => [
                  createTextVNode("Ingresar Nueva Solicitud de Servicio")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_form, {
                    ref: "form",
                    modelValue: valid.value,
                    "onUpdate:modelValue": ($event) => valid.value = $event,
                    "lazy-validation": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: rut.value,
                                "onUpdate:modelValue": ($event) => rut.value = $event,
                                label: "RUT solicitante",
                                rules: [rules.required],
                                onBlur: buscarPaciente
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_btn, {
                                "prepend-icon": "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Buscar usuario ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                "prepend-icon": "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Agregar nuevo usuario ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                modelValue: _ctx.nombre,
                                "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                label: "Nombre solicitante",
                                rules: [rules.required],
                                onBlur: buscarPaciente
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_btn, {
                                "prepend-icon": "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Consultar ficha usuario ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                disabled: !valid.value,
                                onClick: submit
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Ingresar Solicitud")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_select, {
                                modelValue: especialidadSeleccionada.value,
                                "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                items: especialidades.value,
                                label: "Especialidad Solicitada",
                                rules: [rules.required]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                              createVNode(_component_v_textarea, {
                                modelValue: motivoConsulta.value,
                                "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                label: "Motivo de Consulta",
                                rules: [rules.required]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: _ctx.nombre,
                                "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                label: "Numero de Solicitud Asignada",
                                rules: [rules.required],
                                onBlur: buscarPaciente
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/Solicitud-ServicioComponente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SolicitudServicio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-029e4dc8"], ["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/Componentes/Solicitud-ServicioComponente.vue"]]);
export {
  SolicitudServicio as default
};
//# sourceMappingURL=Solicitud-ServicioComponente-DS9zq1vs.js.map
