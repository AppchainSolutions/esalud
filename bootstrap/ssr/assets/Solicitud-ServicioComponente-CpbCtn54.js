import { ref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-CPH0Fv3Z.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText } from "vuetify/lib/components/VCard/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import { VTextarea } from "vuetify/lib/components/VTextarea/index.mjs";
import "@inertiajs/vue3";
import "vue-loading-overlay";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VDivider/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
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
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, null, {
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
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, {
                    ref: "form",
                    modelValue: valid.value,
                    "onUpdate:modelValue": ($event) => valid.value = $event,
                    "lazy-validation": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: rut.value,
                                      "onUpdate:modelValue": ($event) => rut.value = $event,
                                      label: "RUT solicitante",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
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
                                    _push6(ssrRenderComponent(VBtn, {
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
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: _ctx.nombre,
                                      "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                      label: "Nombre solicitante",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
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
                                    _push6(ssrRenderComponent(VBtn, {
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
                                      createVNode(VTextField, {
                                        modelValue: rut.value,
                                        "onUpdate:modelValue": ($event) => rut.value = $event,
                                        label: "RUT solicitante",
                                        rules: [rules.required],
                                        onBlur: buscarPaciente
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VBtn, {
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
                                      createVNode(VBtn, {
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
                                      createVNode(VTextField, {
                                        modelValue: _ctx.nombre,
                                        "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                        label: "Nombre solicitante",
                                        rules: [rules.required],
                                        onBlur: buscarPaciente
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VBtn, {
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
                                      createVNode(VBtn, {
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
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: especialidadSeleccionada.value,
                                      "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                      items: especialidades.value,
                                      label: "Especialidad Solicitada",
                                      rules: [rules.required]
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextarea, {
                                      modelValue: motivoConsulta.value,
                                      "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                      label: "Motivo de Consulta",
                                      rules: [rules.required]
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: _ctx.nombre,
                                      "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                      label: "Numero de Solicitud Asignada",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: especialidadSeleccionada.value,
                                        "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                        items: especialidades.value,
                                        label: "Especialidad Solicitada",
                                        rules: [rules.required]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                      createVNode(VTextarea, {
                                        modelValue: motivoConsulta.value,
                                        "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                        label: "Motivo de Consulta",
                                        rules: [rules.required]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VTextField, {
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
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: rut.value,
                                      "onUpdate:modelValue": ($event) => rut.value = $event,
                                      label: "RUT solicitante",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VBtn, {
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
                                    createVNode(VBtn, {
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
                                    createVNode(VTextField, {
                                      modelValue: _ctx.nombre,
                                      "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                      label: "Nombre solicitante",
                                      rules: [rules.required],
                                      onBlur: buscarPaciente
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VBtn, {
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
                                    createVNode(VBtn, {
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
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: especialidadSeleccionada.value,
                                      "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                      items: especialidades.value,
                                      label: "Especialidad Solicitada",
                                      rules: [rules.required]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                    createVNode(VTextarea, {
                                      modelValue: motivoConsulta.value,
                                      "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                      label: "Motivo de Consulta",
                                      rules: [rules.required]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VTextField, {
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: rut.value,
                                    "onUpdate:modelValue": ($event) => rut.value = $event,
                                    label: "RUT solicitante",
                                    rules: [rules.required],
                                    onBlur: buscarPaciente
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VBtn, {
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
                                  createVNode(VBtn, {
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
                                  createVNode(VTextField, {
                                    modelValue: _ctx.nombre,
                                    "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                    label: "Nombre solicitante",
                                    rules: [rules.required],
                                    onBlur: buscarPaciente
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VBtn, {
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
                                  createVNode(VBtn, {
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
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: especialidadSeleccionada.value,
                                    "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                    items: especialidades.value,
                                    label: "Especialidad Solicitada",
                                    rules: [rules.required]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                  createVNode(VTextarea, {
                                    modelValue: motivoConsulta.value,
                                    "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                    label: "Motivo de Consulta",
                                    rules: [rules.required]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VTextField, {
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
                    createVNode(VForm, {
                      ref: "form",
                      modelValue: valid.value,
                      "onUpdate:modelValue": ($event) => valid.value = $event,
                      "lazy-validation": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: rut.value,
                                  "onUpdate:modelValue": ($event) => rut.value = $event,
                                  label: "RUT solicitante",
                                  rules: [rules.required],
                                  onBlur: buscarPaciente
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VBtn, {
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
                                createVNode(VBtn, {
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
                                createVNode(VTextField, {
                                  modelValue: _ctx.nombre,
                                  "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                  label: "Nombre solicitante",
                                  rules: [rules.required],
                                  onBlur: buscarPaciente
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VBtn, {
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
                                createVNode(VBtn, {
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
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: especialidadSeleccionada.value,
                                  "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                  items: especialidades.value,
                                  label: "Especialidad Solicitada",
                                  rules: [rules.required]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                createVNode(VTextarea, {
                                  modelValue: motivoConsulta.value,
                                  "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                  label: "Motivo de Consulta",
                                  rules: [rules.required]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
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
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Ingresar Nueva Solicitud de Servicio")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    ref: "form",
                    modelValue: valid.value,
                    "onUpdate:modelValue": ($event) => valid.value = $event,
                    "lazy-validation": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: rut.value,
                                "onUpdate:modelValue": ($event) => rut.value = $event,
                                label: "RUT solicitante",
                                rules: [rules.required],
                                onBlur: buscarPaciente
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VBtn, {
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
                              createVNode(VBtn, {
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
                              createVNode(VTextField, {
                                modelValue: _ctx.nombre,
                                "onUpdate:modelValue": ($event) => _ctx.nombre = $event,
                                label: "Nombre solicitante",
                                rules: [rules.required],
                                onBlur: buscarPaciente
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VBtn, {
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
                              createVNode(VBtn, {
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
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: especialidadSeleccionada.value,
                                "onUpdate:modelValue": ($event) => especialidadSeleccionada.value = $event,
                                items: especialidades.value,
                                label: "Especialidad Solicitada",
                                rules: [rules.required]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                              createVNode(VTextarea, {
                                modelValue: motivoConsulta.value,
                                "onUpdate:modelValue": ($event) => motivoConsulta.value = $event,
                                label: "Motivo de Consulta",
                                rules: [rules.required]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextField, {
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
const SolicitudServicio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-029e4dc8"], ["__file", "/home/omar/www/esalud/resources/js/Pages/SubPages/Componentes/Solicitud-ServicioComponente.vue"]]);
export {
  SolicitudServicio as default
};
//# sourceMappingURL=Solicitud-ServicioComponente-CpbCtn54.js.map
