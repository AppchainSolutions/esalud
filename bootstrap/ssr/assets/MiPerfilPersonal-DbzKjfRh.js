import { reactive, ref, onMounted, resolveComponent, mergeProps, withCtx, unref, createVNode, isRef, createTextVNode, createBlock, createCommentVNode, openBlock, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-9lGv6sW_.js";
import { usePage, router } from "@inertiajs/vue3";
import "./store-45BLaymI.js";
import "moment";
import { f as fetchData } from "./helper-wNjokA2D.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./logo-DLUxz0ei.js";
import "vue-loading-overlay";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "MiPerfilPersonal",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const paciente = page.props.paciente;
    let endpoints = reactive([
      "afp",
      "area",
      "ceco",
      "estado_civil",
      "empresa",
      "exposicion",
      "genero",
      "grupo_sanguineo",
      "nivel_instruccion",
      "ley_social",
      "nacionalidad",
      "planta",
      "prevision",
      "pueblo_originario",
      "religion",
      "seguro",
      "unidad"
    ]);
    let editable = ref(false);
    let form = ref({
      nombre: paciente.nombre,
      apellidos: paciente.apellidos,
      rut: paciente.rut,
      email: paciente.email,
      telefono1: paciente.telefono1,
      telefono2: paciente.telefono2,
      direccion: paciente.direccion,
      fecha_nacimiento: paciente.fecha_nacimiento,
      // Relaciones
      actividad_economica: paciente.actividad_economica,
      estado_civil: paciente.estado_civil,
      genero: paciente.genero,
      grupo_sanguineo: paciente.grupo_Sanguineo,
      ley_social: paciente.ley_social,
      nacionalidad: paciente.nacionalidad,
      nivel_instruccion: paciente.nivel_instruccion,
      prevision: paciente.prevision,
      pueblo_originario: paciente.pueblo_originario,
      religion: paciente.religion,
      seguro_salud: paciente.seguro_salud,
      // Datos laborales
      unidad: paciente.unidad,
      area: paciente.area,
      ceco: paciente.ceco,
      empresa: paciente.empresa,
      afp: paciente.afp,
      ceco: paciente.ceco,
      cargo: paciente.cargo
    });
    let list = reactive({});
    onMounted(async () => {
      const fetchedData = await fetchData(endpoints);
      list = fetchedData, //     grupo_sanguineo: fetchedData.grupo_sanguineo || []
      console.log(list);
    });
    const updatePerfil = () => {
      router.put(route("paciente.perfil.update"), form.value, {
        onSuccess: () => {
          editable.value = false;
        },
        onError: (errors) => {
          console.error("Errores al actualizar:", errors);
        }
      });
    };
    const cancelEdit = () => {
      form = paciente;
      editable.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, {
              color: "white",
              elevation: 6,
              class: "rounded-lg ma-4 pa-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_divider, {
                    thickness: "4px",
                    color: "#009AA4",
                    class: "ma-4"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_form, { onSubmit: updatePerfil }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_title, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card_text, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-h6"${_scopeId5}>Datos Personales</div>`);
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).rut,
                                                  "onUpdate:modelValue": ($event) => unref(form).rut = $event,
                                                  label: "RUT (12345678-9)",
                                                  type: "text",
                                                  required: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).rut,
                                                    "onUpdate:modelValue": ($event) => unref(form).rut = $event,
                                                    label: "RUT (12345678-9)",
                                                    type: "text",
                                                    required: "",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).nombre,
                                                  "onUpdate:modelValue": ($event) => unref(form).nombre = $event,
                                                  label: "Nombre*",
                                                  type: "text",
                                                  required: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).nombre,
                                                    "onUpdate:modelValue": ($event) => unref(form).nombre = $event,
                                                    label: "Nombre*",
                                                    type: "text",
                                                    required: "",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).apellidos,
                                                  "onUpdate:modelValue": ($event) => unref(form).apellidos = $event,
                                                  label: "Apellidos*",
                                                  required: "",
                                                  type: "text",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).apellidos,
                                                    "onUpdate:modelValue": ($event) => unref(form).apellidos = $event,
                                                    label: "Apellidos*",
                                                    required: "",
                                                    type: "text",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_switch, {
                                                  modelValue: unref(form).activo,
                                                  "onUpdate:modelValue": ($event) => unref(form).activo = $event,
                                                  "hide-details": "",
                                                  value: unref(form).activo,
                                                  "false-value": "true",
                                                  "true-value": "false",
                                                  class: "ml-2",
                                                  color: "green-darken-3",
                                                  inset: "",
                                                  label: "Activo",
                                                  readonly: ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_switch, {
                                                  modelValue: unref(form).protocolo_minsal,
                                                  "onUpdate:modelValue": ($event) => unref(form).protocolo_minsal = $event,
                                                  "hide-details": "",
                                                  "false-value": "true",
                                                  "true-value": "false",
                                                  class: "ml-2",
                                                  color: "green-darken-3",
                                                  inset: "",
                                                  label: "Protocolo Minsal",
                                                  readonly: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_switch, {
                                                    modelValue: unref(form).activo,
                                                    "onUpdate:modelValue": ($event) => unref(form).activo = $event,
                                                    "hide-details": "",
                                                    value: unref(form).activo,
                                                    "false-value": "true",
                                                    "true-value": "false",
                                                    class: "ml-2",
                                                    color: "green-darken-3",
                                                    inset: "",
                                                    label: "Activo",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: unref(form).protocolo_minsal,
                                                    "onUpdate:modelValue": ($event) => unref(form).protocolo_minsal = $event,
                                                    "hide-details": "",
                                                    "false-value": "true",
                                                    "true-value": "false",
                                                    class: "ml-2",
                                                    color: "green-darken-3",
                                                    inset: "",
                                                    label: "Protocolo Minsal",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_switch, {
                                                  modelValue: unref(form).donante,
                                                  "onUpdate:modelValue": ($event) => unref(form).donante = $event,
                                                  class: "ml-2",
                                                  label: "Donante",
                                                  color: "success",
                                                  "hide-details": "",
                                                  inset: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_switch, {
                                                    modelValue: unref(form).donante,
                                                    "onUpdate:modelValue": ($event) => unref(form).donante = $event,
                                                    class: "ml-2",
                                                    label: "Donante",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).email,
                                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                  required: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).email,
                                                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                    required: "",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).fecha_nacimiento,
                                                  "onUpdate:modelValue": ($event) => unref(form).fecha_nacimiento = $event,
                                                  label: "Fecha de nacimiento",
                                                  variant: "underlined",
                                                  type: "date",
                                                  onInput: _ctx.handleInputChange,
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).fecha_nacimiento,
                                                    "onUpdate:modelValue": ($event) => unref(form).fecha_nacimiento = $event,
                                                    label: "Fecha de nacimiento",
                                                    variant: "underlined",
                                                    type: "date",
                                                    onInput: _ctx.handleInputChange,
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).edad,
                                                  "onUpdate:modelValue": ($event) => unref(form).edad = $event,
                                                  label: "Edad*",
                                                  type: "text",
                                                  variant: "underlined",
                                                  readonly: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).edad,
                                                    "onUpdate:modelValue": ($event) => unref(form).edad = $event,
                                                    label: "Edad*",
                                                    type: "text",
                                                    variant: "underlined",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).direccion,
                                                  "onUpdate:modelValue": ($event) => unref(form).direccion = $event,
                                                  label: "Dirección",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).direccion,
                                                    "onUpdate:modelValue": ($event) => unref(form).direccion = $event,
                                                    label: "Dirección",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  label: "teléfono 1",
                                                  modelValue: unref(form).telefono1,
                                                  "onUpdate:modelValue": ($event) => unref(form).telefono1 = $event,
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    label: "teléfono 1",
                                                    modelValue: unref(form).telefono1,
                                                    "onUpdate:modelValue": ($event) => unref(form).telefono1 = $event,
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).telefono2,
                                                  "onUpdate:modelValue": ($event) => unref(form).telefono2 = $event,
                                                  label: "teléfono 2",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).telefono2,
                                                    "onUpdate:modelValue": ($event) => unref(form).telefono2 = $event,
                                                    label: "teléfono 2",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: [
                                                    { id: 1, descripcion: "O" },
                                                    { id: 2, descripcion: "A" },
                                                    { id: 3, descripcion: "B" },
                                                    { id: 4, descripcion: "AB" }
                                                  ],
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).grupo_sanguineo,
                                                  "onUpdate:modelValue": ($event) => unref(form).grupo_sanguineo = $event,
                                                  label: "Grupo sanguíneo",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: [
                                                      { id: 1, descripcion: "O" },
                                                      { id: 2, descripcion: "A" },
                                                      { id: 3, descripcion: "B" },
                                                      { id: 4, descripcion: "AB" }
                                                    ],
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).grupo_sanguineo,
                                                    "onUpdate:modelValue": ($event) => unref(form).grupo_sanguineo = $event,
                                                    label: "Grupo sanguíneo",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).nacionalidad,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).nacionalidad,
                                                  "onUpdate:modelValue": ($event) => unref(form).nacionalidad = $event,
                                                  label: "Nacionalidad",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).nacionalidad,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).nacionalidad,
                                                    "onUpdate:modelValue": ($event) => unref(form).nacionalidad = $event,
                                                    label: "Nacionalidad",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).religion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Religion / Culto",
                                                  modelValue: unref(form).religion,
                                                  "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).religion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Religion / Culto",
                                                    modelValue: unref(form).religion,
                                                    "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).genero,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Género",
                                                  modelValue: unref(form).genero,
                                                  "onUpdate:modelValue": ($event) => unref(form).genero = $event,
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).genero,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Género",
                                                    modelValue: unref(form).genero,
                                                    "onUpdate:modelValue": ($event) => unref(form).genero = $event,
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: [
                                                    "Institucional (MAI)",
                                                    "Libre elección (MLE)"
                                                  ],
                                                  "item-title": "descripcion",
                                                  "item-value": "descripcion",
                                                  modelValue: unref(form).modalidad_atencion,
                                                  "onUpdate:modelValue": ($event) => unref(form).modalidad_atencion = $event,
                                                  label: "Modalidad ATebnción",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: [
                                                      "Institucional (MAI)",
                                                      "Libre elección (MLE)"
                                                    ],
                                                    "item-title": "descripcion",
                                                    "item-value": "descripcion",
                                                    modelValue: unref(form).modalidad_atencion,
                                                    "onUpdate:modelValue": ($event) => unref(form).modalidad_atencion = $event,
                                                    label: "Modalidad ATebnción",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  label: "Ciudad",
                                                  modelValue: unref(form).ciudad,
                                                  "onUpdate:modelValue": ($event) => unref(form).ciudad = $event,
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    label: "Ciudad",
                                                    modelValue: unref(form).ciudad,
                                                    "onUpdate:modelValue": ($event) => unref(form).ciudad = $event,
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).prevision,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).prevision,
                                                  "onUpdate:modelValue": ($event) => unref(form).prevision = $event,
                                                  label: "Previsión de Salud",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).prevision,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).prevision,
                                                    "onUpdate:modelValue": ($event) => unref(form).prevision = $event,
                                                    label: "Previsión de Salud",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).afp,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).afp,
                                                  "onUpdate:modelValue": ($event) => unref(form).afp = $event,
                                                  label: "AFP",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).afp,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).afp,
                                                    "onUpdate:modelValue": ($event) => unref(form).afp = $event,
                                                    label: "AFP",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).ley_social,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).ley_social,
                                                  "onUpdate:modelValue": ($event) => unref(form).ley_social = $event,
                                                  label: "Leyes Sociales",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).ley_social,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).ley_social,
                                                    "onUpdate:modelValue": ($event) => unref(form).ley_social = $event,
                                                    label: "Leyes Sociales",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).seguro,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).seguro,
                                                  "onUpdate:modelValue": ($event) => unref(form).seguro = $event,
                                                  label: "Administradores del Seguro Ley 16.744",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).seguro,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).seguro,
                                                    "onUpdate:modelValue": ($event) => unref(form).seguro = $event,
                                                    label: "Administradores del Seguro Ley 16.744",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).pueblo_originario,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).pueblo_originario,
                                                  "onUpdate:modelValue": ($event) => unref(form).pueblo_originario = $event,
                                                  label: "Pueblo originario",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).pueblo_originario,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).pueblo_originario,
                                                    "onUpdate:modelValue": ($event) => unref(form).pueblo_originario = $event,
                                                    label: "Pueblo originario",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).nivel_instruccion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).nivel_instruccion,
                                                  "onUpdate:modelValue": ($event) => unref(form).nivel_instruccion = $event,
                                                  label: "Nivel de Instrucción",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).nivel_instruccion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).nivel_instruccion,
                                                    "onUpdate:modelValue": ($event) => unref(form).nivel_instruccion = $event,
                                                    label: "Nivel de Instrucción",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).rut,
                                                  "onUpdate:modelValue": ($event) => unref(form).rut = $event,
                                                  label: "RUT (12345678-9)",
                                                  type: "text",
                                                  required: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).nombre,
                                                  "onUpdate:modelValue": ($event) => unref(form).nombre = $event,
                                                  label: "Nombre*",
                                                  type: "text",
                                                  required: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).apellidos,
                                                  "onUpdate:modelValue": ($event) => unref(form).apellidos = $event,
                                                  label: "Apellidos*",
                                                  required: "",
                                                  type: "text",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_switch, {
                                                  modelValue: unref(form).activo,
                                                  "onUpdate:modelValue": ($event) => unref(form).activo = $event,
                                                  "hide-details": "",
                                                  value: unref(form).activo,
                                                  "false-value": "true",
                                                  "true-value": "false",
                                                  class: "ml-2",
                                                  color: "green-darken-3",
                                                  inset: "",
                                                  label: "Activo",
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: unref(form).protocolo_minsal,
                                                  "onUpdate:modelValue": ($event) => unref(form).protocolo_minsal = $event,
                                                  "hide-details": "",
                                                  "false-value": "true",
                                                  "true-value": "false",
                                                  class: "ml-2",
                                                  color: "green-darken-3",
                                                  inset: "",
                                                  label: "Protocolo Minsal",
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_switch, {
                                                  modelValue: unref(form).donante,
                                                  "onUpdate:modelValue": ($event) => unref(form).donante = $event,
                                                  class: "ml-2",
                                                  label: "Donante",
                                                  color: "success",
                                                  "hide-details": "",
                                                  inset: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).email,
                                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                  required: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).fecha_nacimiento,
                                                  "onUpdate:modelValue": ($event) => unref(form).fecha_nacimiento = $event,
                                                  label: "Fecha de nacimiento",
                                                  variant: "underlined",
                                                  type: "date",
                                                  onInput: _ctx.handleInputChange,
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).edad,
                                                  "onUpdate:modelValue": ($event) => unref(form).edad = $event,
                                                  label: "Edad*",
                                                  type: "text",
                                                  variant: "underlined",
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).direccion,
                                                  "onUpdate:modelValue": ($event) => unref(form).direccion = $event,
                                                  label: "Dirección",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  label: "teléfono 1",
                                                  modelValue: unref(form).telefono1,
                                                  "onUpdate:modelValue": ($event) => unref(form).telefono1 = $event,
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).telefono2,
                                                  "onUpdate:modelValue": ($event) => unref(form).telefono2 = $event,
                                                  label: "teléfono 2",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: [
                                                    { id: 1, descripcion: "O" },
                                                    { id: 2, descripcion: "A" },
                                                    { id: 3, descripcion: "B" },
                                                    { id: 4, descripcion: "AB" }
                                                  ],
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).grupo_sanguineo,
                                                  "onUpdate:modelValue": ($event) => unref(form).grupo_sanguineo = $event,
                                                  label: "Grupo sanguíneo",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).nacionalidad,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).nacionalidad,
                                                  "onUpdate:modelValue": ($event) => unref(form).nacionalidad = $event,
                                                  label: "Nacionalidad",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).religion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Religion / Culto",
                                                  modelValue: unref(form).religion,
                                                  "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).genero,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Género",
                                                  modelValue: unref(form).genero,
                                                  "onUpdate:modelValue": ($event) => unref(form).genero = $event,
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: [
                                                    "Institucional (MAI)",
                                                    "Libre elección (MLE)"
                                                  ],
                                                  "item-title": "descripcion",
                                                  "item-value": "descripcion",
                                                  modelValue: unref(form).modalidad_atencion,
                                                  "onUpdate:modelValue": ($event) => unref(form).modalidad_atencion = $event,
                                                  label: "Modalidad ATebnción",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  label: "Ciudad",
                                                  modelValue: unref(form).ciudad,
                                                  "onUpdate:modelValue": ($event) => unref(form).ciudad = $event,
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).prevision,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).prevision,
                                                  "onUpdate:modelValue": ($event) => unref(form).prevision = $event,
                                                  label: "Previsión de Salud",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).afp,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).afp,
                                                  "onUpdate:modelValue": ($event) => unref(form).afp = $event,
                                                  label: "AFP",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).ley_social,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).ley_social,
                                                  "onUpdate:modelValue": ($event) => unref(form).ley_social = $event,
                                                  label: "Leyes Sociales",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).seguro,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).seguro,
                                                  "onUpdate:modelValue": ($event) => unref(form).seguro = $event,
                                                  label: "Administradores del Seguro Ley 16.744",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).pueblo_originario,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).pueblo_originario,
                                                  "onUpdate:modelValue": ($event) => unref(form).pueblo_originario = $event,
                                                  label: "Pueblo originario",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              sm: "4",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).nivel_instruccion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).nivel_instruccion,
                                                  "onUpdate:modelValue": ($event) => unref(form).nivel_instruccion = $event,
                                                  label: "Nivel de Instrucción",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="text-h6"${_scopeId5}>Datos Laborales</div>`);
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, { class: "mt-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).actividad_economica,
                                                  "onUpdate:modelValue": ($event) => unref(form).actividad_economica = $event,
                                                  label: "Actividad economica",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).actividad_economica,
                                                    "onUpdate:modelValue": ($event) => unref(form).actividad_economica = $event,
                                                    label: "Actividad economica",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).empresa,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).empresa,
                                                  "onUpdate:modelValue": ($event) => unref(form).empresa = $event,
                                                  label: "Empresa*",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).empresa,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).empresa,
                                                    "onUpdate:modelValue": ($event) => unref(form).empresa = $event,
                                                    label: "Empresa*",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).cargo,
                                                  "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
                                                  label: "Cargo",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).cargo,
                                                    "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
                                                    label: "Cargo",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).area,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).area,
                                                  "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                                  label: "Área",
                                                  single: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).area,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).area,
                                                    "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                                    label: "Área",
                                                    single: "",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).unidad,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).unidad,
                                                  "onUpdate:modelValue": ($event) => unref(form).unidad = $event,
                                                  label: "Unidad",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).unidad,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).unidad,
                                                    "onUpdate:modelValue": ($event) => unref(form).unidad = $event,
                                                    label: "Unidad",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(form).ocupacion,
                                                  "onUpdate:modelValue": ($event) => unref(form).ocupacion = $event,
                                                  label: "Ocupación",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(form).ocupacion,
                                                    "onUpdate:modelValue": ($event) => unref(form).ocupacion = $event,
                                                    label: "Ocupación",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).exposicion,
                                                  "item-title": "descripcion",
                                                  "item-value": "descripcion",
                                                  chips: "",
                                                  modelValue: unref(form).exposicion,
                                                  "onUpdate:modelValue": ($event) => unref(form).exposicion = $event,
                                                  label: "Exposicion",
                                                  multiple: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).exposicion,
                                                    "item-title": "descripcion",
                                                    "item-value": "descripcion",
                                                    chips: "",
                                                    modelValue: unref(form).exposicion,
                                                    "onUpdate:modelValue": ($event) => unref(form).exposicion = $event,
                                                    label: "Exposicion",
                                                    multiple: "",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).ceco,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).ceco,
                                                  "onUpdate:modelValue": ($event) => unref(form).ceco = $event,
                                                  label: "Área de Trabajo (Cencos)",
                                                  single: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).ceco,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).ceco,
                                                    "onUpdate:modelValue": ($event) => unref(form).ceco = $event,
                                                    label: "Área de Trabajo (Cencos)",
                                                    single: "",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  items: unref(list).planta,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).planta,
                                                  "onUpdate:modelValue": ($event) => unref(form).planta = $event,
                                                  label: "Planta",
                                                  single: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_select, {
                                                    items: unref(list).planta,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: unref(form).planta,
                                                    "onUpdate:modelValue": ($event) => unref(form).planta = $event,
                                                    label: "Planta",
                                                    single: "",
                                                    variant: "underlined",
                                                    readonly: !unref(editable)
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).actividad_economica,
                                                  "onUpdate:modelValue": ($event) => unref(form).actividad_economica = $event,
                                                  label: "Actividad economica",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).empresa,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).empresa,
                                                  "onUpdate:modelValue": ($event) => unref(form).empresa = $event,
                                                  label: "Empresa*",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).cargo,
                                                  "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
                                                  label: "Cargo",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).area,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).area,
                                                  "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                                  label: "Área",
                                                  single: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).unidad,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).unidad,
                                                  "onUpdate:modelValue": ($event) => unref(form).unidad = $event,
                                                  label: "Unidad",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(form).ocupacion,
                                                  "onUpdate:modelValue": ($event) => unref(form).ocupacion = $event,
                                                  label: "Ocupación",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).exposicion,
                                                  "item-title": "descripcion",
                                                  "item-value": "descripcion",
                                                  chips: "",
                                                  modelValue: unref(form).exposicion,
                                                  "onUpdate:modelValue": ($event) => unref(form).exposicion = $event,
                                                  label: "Exposicion",
                                                  multiple: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).ceco,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).ceco,
                                                  "onUpdate:modelValue": ($event) => unref(form).ceco = $event,
                                                  label: "Área de Trabajo (Cencos)",
                                                  single: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: unref(list).planta,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: unref(form).planta,
                                                  "onUpdate:modelValue": ($event) => unref(form).planta = $event,
                                                  label: "Planta",
                                                  single: "",
                                                  variant: "underlined",
                                                  readonly: !unref(editable)
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
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
                                      createVNode("div", { class: "text-h6" }, "Datos Personales"),
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).rut,
                                                "onUpdate:modelValue": ($event) => unref(form).rut = $event,
                                                label: "RUT (12345678-9)",
                                                type: "text",
                                                required: "",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).nombre,
                                                "onUpdate:modelValue": ($event) => unref(form).nombre = $event,
                                                label: "Nombre*",
                                                type: "text",
                                                required: "",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).apellidos,
                                                "onUpdate:modelValue": ($event) => unref(form).apellidos = $event,
                                                label: "Apellidos*",
                                                required: "",
                                                type: "text",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_switch, {
                                                modelValue: unref(form).activo,
                                                "onUpdate:modelValue": ($event) => unref(form).activo = $event,
                                                "hide-details": "",
                                                value: unref(form).activo,
                                                "false-value": "true",
                                                "true-value": "false",
                                                class: "ml-2",
                                                color: "green-darken-3",
                                                inset: "",
                                                label: "Activo",
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: unref(form).protocolo_minsal,
                                                "onUpdate:modelValue": ($event) => unref(form).protocolo_minsal = $event,
                                                "hide-details": "",
                                                "false-value": "true",
                                                "true-value": "false",
                                                class: "ml-2",
                                                color: "green-darken-3",
                                                inset: "",
                                                label: "Protocolo Minsal",
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_switch, {
                                                modelValue: unref(form).donante,
                                                "onUpdate:modelValue": ($event) => unref(form).donante = $event,
                                                class: "ml-2",
                                                label: "Donante",
                                                color: "success",
                                                "hide-details": "",
                                                inset: "",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).email,
                                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                required: "",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).fecha_nacimiento,
                                                "onUpdate:modelValue": ($event) => unref(form).fecha_nacimiento = $event,
                                                label: "Fecha de nacimiento",
                                                variant: "underlined",
                                                type: "date",
                                                onInput: _ctx.handleInputChange,
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).edad,
                                                "onUpdate:modelValue": ($event) => unref(form).edad = $event,
                                                label: "Edad*",
                                                type: "text",
                                                variant: "underlined",
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).direccion,
                                                "onUpdate:modelValue": ($event) => unref(form).direccion = $event,
                                                label: "Dirección",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                label: "teléfono 1",
                                                modelValue: unref(form).telefono1,
                                                "onUpdate:modelValue": ($event) => unref(form).telefono1 = $event,
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).telefono2,
                                                "onUpdate:modelValue": ($event) => unref(form).telefono2 = $event,
                                                label: "teléfono 2",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: [
                                                  { id: 1, descripcion: "O" },
                                                  { id: 2, descripcion: "A" },
                                                  { id: 3, descripcion: "B" },
                                                  { id: 4, descripcion: "AB" }
                                                ],
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).grupo_sanguineo,
                                                "onUpdate:modelValue": ($event) => unref(form).grupo_sanguineo = $event,
                                                label: "Grupo sanguíneo",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).nacionalidad,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).nacionalidad,
                                                "onUpdate:modelValue": ($event) => unref(form).nacionalidad = $event,
                                                label: "Nacionalidad",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).religion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Religion / Culto",
                                                modelValue: unref(form).religion,
                                                "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).genero,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Género",
                                                modelValue: unref(form).genero,
                                                "onUpdate:modelValue": ($event) => unref(form).genero = $event,
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: [
                                                  "Institucional (MAI)",
                                                  "Libre elección (MLE)"
                                                ],
                                                "item-title": "descripcion",
                                                "item-value": "descripcion",
                                                modelValue: unref(form).modalidad_atencion,
                                                "onUpdate:modelValue": ($event) => unref(form).modalidad_atencion = $event,
                                                label: "Modalidad ATebnción",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                label: "Ciudad",
                                                modelValue: unref(form).ciudad,
                                                "onUpdate:modelValue": ($event) => unref(form).ciudad = $event,
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).prevision,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).prevision,
                                                "onUpdate:modelValue": ($event) => unref(form).prevision = $event,
                                                label: "Previsión de Salud",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).afp,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).afp,
                                                "onUpdate:modelValue": ($event) => unref(form).afp = $event,
                                                label: "AFP",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).ley_social,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).ley_social,
                                                "onUpdate:modelValue": ($event) => unref(form).ley_social = $event,
                                                label: "Leyes Sociales",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).seguro,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).seguro,
                                                "onUpdate:modelValue": ($event) => unref(form).seguro = $event,
                                                label: "Administradores del Seguro Ley 16.744",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).pueblo_originario,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).pueblo_originario,
                                                "onUpdate:modelValue": ($event) => unref(form).pueblo_originario = $event,
                                                label: "Pueblo originario",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            sm: "4",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).nivel_instruccion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).nivel_instruccion,
                                                "onUpdate:modelValue": ($event) => unref(form).nivel_instruccion = $event,
                                                label: "Nivel de Instrucción",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "text-h6" }, "Datos Laborales"),
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_row, { class: "mt-2" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).actividad_economica,
                                                "onUpdate:modelValue": ($event) => unref(form).actividad_economica = $event,
                                                label: "Actividad economica",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).empresa,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).empresa,
                                                "onUpdate:modelValue": ($event) => unref(form).empresa = $event,
                                                label: "Empresa*",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).cargo,
                                                "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
                                                label: "Cargo",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).area,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).area,
                                                "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                                label: "Área",
                                                single: "",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).unidad,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).unidad,
                                                "onUpdate:modelValue": ($event) => unref(form).unidad = $event,
                                                label: "Unidad",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(form).ocupacion,
                                                "onUpdate:modelValue": ($event) => unref(form).ocupacion = $event,
                                                label: "Ocupación",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).exposicion,
                                                "item-title": "descripcion",
                                                "item-value": "descripcion",
                                                chips: "",
                                                modelValue: unref(form).exposicion,
                                                "onUpdate:modelValue": ($event) => unref(form).exposicion = $event,
                                                label: "Exposicion",
                                                multiple: "",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).ceco,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).ceco,
                                                "onUpdate:modelValue": ($event) => unref(form).ceco = $event,
                                                label: "Área de Trabajo (Cencos)",
                                                single: "",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: unref(list).planta,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: unref(form).planta,
                                                "onUpdate:modelValue": ($event) => unref(form).planta = $event,
                                                label: "Planta",
                                                single: "",
                                                variant: "underlined",
                                                readonly: !unref(editable)
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
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
                              _push5(ssrRenderComponent(_component_v_card_actions, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                if (!unref(editable)) {
                                                  _push8(ssrRenderComponent(_component_v_btn, {
                                                    color: "primary",
                                                    onClick: ($event) => isRef(editable) ? editable.value = true : editable = true
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Editar Perfil `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Editar Perfil ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  _push8(`<!---->`);
                                                }
                                                if (unref(editable)) {
                                                  _push8(ssrRenderComponent(_component_v_btn, {
                                                    color: "success",
                                                    variant: "tonal",
                                                    type: "submit"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Guardar Cambios `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Guardar Cambios ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  _push8(`<!---->`);
                                                }
                                                if (unref(editable)) {
                                                  _push8(ssrRenderComponent(_component_v_btn, {
                                                    color: "error",
                                                    variant: "tonal",
                                                    onClick: cancelEdit
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Cancelar `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Cancelar ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  _push8(`<!---->`);
                                                }
                                              } else {
                                                return [
                                                  !unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                                    key: 0,
                                                    color: "primary",
                                                    onClick: ($event) => isRef(editable) ? editable.value = true : editable = true
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Editar Perfil ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])) : createCommentVNode("", true),
                                                  unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                                    key: 1,
                                                    color: "success",
                                                    variant: "tonal",
                                                    type: "submit"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Guardar Cambios ")
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true),
                                                  unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                                    key: 2,
                                                    color: "error",
                                                    variant: "tonal",
                                                    onClick: cancelEdit
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Cancelar ")
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                !unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                                  key: 0,
                                                  color: "primary",
                                                  onClick: ($event) => isRef(editable) ? editable.value = true : editable = true
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Editar Perfil ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])) : createCommentVNode("", true),
                                                unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                                  key: 1,
                                                  color: "success",
                                                  variant: "tonal",
                                                  type: "submit"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Guardar Cambios ")
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true),
                                                unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                                  key: 2,
                                                  color: "error",
                                                  variant: "tonal",
                                                  onClick: cancelEdit
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Cancelar ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              !unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                                key: 0,
                                                color: "primary",
                                                onClick: ($event) => isRef(editable) ? editable.value = true : editable = true
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Editar Perfil ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])) : createCommentVNode("", true),
                                              unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                                key: 1,
                                                color: "success",
                                                variant: "tonal",
                                                type: "submit"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Guardar Cambios ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true),
                                              unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                                key: 2,
                                                color: "error",
                                                variant: "tonal",
                                                onClick: cancelEdit
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Cancelar ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
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
                                createVNode(_component_v_card_title),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h6" }, "Datos Personales"),
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).rut,
                                              "onUpdate:modelValue": ($event) => unref(form).rut = $event,
                                              label: "RUT (12345678-9)",
                                              type: "text",
                                              required: "",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).nombre,
                                              "onUpdate:modelValue": ($event) => unref(form).nombre = $event,
                                              label: "Nombre*",
                                              type: "text",
                                              required: "",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).apellidos,
                                              "onUpdate:modelValue": ($event) => unref(form).apellidos = $event,
                                              label: "Apellidos*",
                                              required: "",
                                              type: "text",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_switch, {
                                              modelValue: unref(form).activo,
                                              "onUpdate:modelValue": ($event) => unref(form).activo = $event,
                                              "hide-details": "",
                                              value: unref(form).activo,
                                              "false-value": "true",
                                              "true-value": "false",
                                              class: "ml-2",
                                              color: "green-darken-3",
                                              inset: "",
                                              label: "Activo",
                                              readonly: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                                            createVNode(_component_v_switch, {
                                              modelValue: unref(form).protocolo_minsal,
                                              "onUpdate:modelValue": ($event) => unref(form).protocolo_minsal = $event,
                                              "hide-details": "",
                                              "false-value": "true",
                                              "true-value": "false",
                                              class: "ml-2",
                                              color: "green-darken-3",
                                              inset: "",
                                              label: "Protocolo Minsal",
                                              readonly: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_switch, {
                                              modelValue: unref(form).donante,
                                              "onUpdate:modelValue": ($event) => unref(form).donante = $event,
                                              class: "ml-2",
                                              label: "Donante",
                                              color: "success",
                                              "hide-details": "",
                                              inset: "",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).email,
                                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                              required: "",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).fecha_nacimiento,
                                              "onUpdate:modelValue": ($event) => unref(form).fecha_nacimiento = $event,
                                              label: "Fecha de nacimiento",
                                              variant: "underlined",
                                              type: "date",
                                              onInput: _ctx.handleInputChange,
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).edad,
                                              "onUpdate:modelValue": ($event) => unref(form).edad = $event,
                                              label: "Edad*",
                                              type: "text",
                                              variant: "underlined",
                                              readonly: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).direccion,
                                              "onUpdate:modelValue": ($event) => unref(form).direccion = $event,
                                              label: "Dirección",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              label: "teléfono 1",
                                              modelValue: unref(form).telefono1,
                                              "onUpdate:modelValue": ($event) => unref(form).telefono1 = $event,
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).telefono2,
                                              "onUpdate:modelValue": ($event) => unref(form).telefono2 = $event,
                                              label: "teléfono 2",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: [
                                                { id: 1, descripcion: "O" },
                                                { id: 2, descripcion: "A" },
                                                { id: 3, descripcion: "B" },
                                                { id: 4, descripcion: "AB" }
                                              ],
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).grupo_sanguineo,
                                              "onUpdate:modelValue": ($event) => unref(form).grupo_sanguineo = $event,
                                              label: "Grupo sanguíneo",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).nacionalidad,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).nacionalidad,
                                              "onUpdate:modelValue": ($event) => unref(form).nacionalidad = $event,
                                              label: "Nacionalidad",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).religion,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              label: "Religion / Culto",
                                              modelValue: unref(form).religion,
                                              "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).genero,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              label: "Género",
                                              modelValue: unref(form).genero,
                                              "onUpdate:modelValue": ($event) => unref(form).genero = $event,
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: [
                                                "Institucional (MAI)",
                                                "Libre elección (MLE)"
                                              ],
                                              "item-title": "descripcion",
                                              "item-value": "descripcion",
                                              modelValue: unref(form).modalidad_atencion,
                                              "onUpdate:modelValue": ($event) => unref(form).modalidad_atencion = $event,
                                              label: "Modalidad ATebnción",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              label: "Ciudad",
                                              modelValue: unref(form).ciudad,
                                              "onUpdate:modelValue": ($event) => unref(form).ciudad = $event,
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).prevision,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).prevision,
                                              "onUpdate:modelValue": ($event) => unref(form).prevision = $event,
                                              label: "Previsión de Salud",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).afp,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).afp,
                                              "onUpdate:modelValue": ($event) => unref(form).afp = $event,
                                              label: "AFP",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).ley_social,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).ley_social,
                                              "onUpdate:modelValue": ($event) => unref(form).ley_social = $event,
                                              label: "Leyes Sociales",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).seguro,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).seguro,
                                              "onUpdate:modelValue": ($event) => unref(form).seguro = $event,
                                              label: "Administradores del Seguro Ley 16.744",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).pueblo_originario,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).pueblo_originario,
                                              "onUpdate:modelValue": ($event) => unref(form).pueblo_originario = $event,
                                              label: "Pueblo originario",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          sm: "4",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).nivel_instruccion,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).nivel_instruccion,
                                              "onUpdate:modelValue": ($event) => unref(form).nivel_instruccion = $event,
                                              label: "Nivel de Instrucción",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "text-h6" }, "Datos Laborales"),
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_row, { class: "mt-2" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).actividad_economica,
                                              "onUpdate:modelValue": ($event) => unref(form).actividad_economica = $event,
                                              label: "Actividad economica",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).empresa,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).empresa,
                                              "onUpdate:modelValue": ($event) => unref(form).empresa = $event,
                                              label: "Empresa*",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).cargo,
                                              "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
                                              label: "Cargo",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).area,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).area,
                                              "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                              label: "Área",
                                              single: "",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).unidad,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).unidad,
                                              "onUpdate:modelValue": ($event) => unref(form).unidad = $event,
                                              label: "Unidad",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(form).ocupacion,
                                              "onUpdate:modelValue": ($event) => unref(form).ocupacion = $event,
                                              label: "Ocupación",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).exposicion,
                                              "item-title": "descripcion",
                                              "item-value": "descripcion",
                                              chips: "",
                                              modelValue: unref(form).exposicion,
                                              "onUpdate:modelValue": ($event) => unref(form).exposicion = $event,
                                              label: "Exposicion",
                                              multiple: "",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).ceco,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).ceco,
                                              "onUpdate:modelValue": ($event) => unref(form).ceco = $event,
                                              label: "Área de Trabajo (Cencos)",
                                              single: "",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: unref(list).planta,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: unref(form).planta,
                                              "onUpdate:modelValue": ($event) => unref(form).planta = $event,
                                              label: "Planta",
                                              single: "",
                                              variant: "underlined",
                                              readonly: !unref(editable)
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
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
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            !unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                              key: 0,
                                              color: "primary",
                                              onClick: ($event) => isRef(editable) ? editable.value = true : editable = true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Editar Perfil ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])) : createCommentVNode("", true),
                                            unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                              key: 1,
                                              color: "success",
                                              variant: "tonal",
                                              type: "submit"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Guardar Cambios ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                              key: 2,
                                              color: "error",
                                              variant: "tonal",
                                              onClick: cancelEdit
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancelar ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
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
                      } else {
                        return [
                          createVNode(_component_v_card, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h6" }, "Datos Personales"),
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).rut,
                                            "onUpdate:modelValue": ($event) => unref(form).rut = $event,
                                            label: "RUT (12345678-9)",
                                            type: "text",
                                            required: "",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).nombre,
                                            "onUpdate:modelValue": ($event) => unref(form).nombre = $event,
                                            label: "Nombre*",
                                            type: "text",
                                            required: "",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).apellidos,
                                            "onUpdate:modelValue": ($event) => unref(form).apellidos = $event,
                                            label: "Apellidos*",
                                            required: "",
                                            type: "text",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_switch, {
                                            modelValue: unref(form).activo,
                                            "onUpdate:modelValue": ($event) => unref(form).activo = $event,
                                            "hide-details": "",
                                            value: unref(form).activo,
                                            "false-value": "true",
                                            "true-value": "false",
                                            class: "ml-2",
                                            color: "green-darken-3",
                                            inset: "",
                                            label: "Activo",
                                            readonly: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                                          createVNode(_component_v_switch, {
                                            modelValue: unref(form).protocolo_minsal,
                                            "onUpdate:modelValue": ($event) => unref(form).protocolo_minsal = $event,
                                            "hide-details": "",
                                            "false-value": "true",
                                            "true-value": "false",
                                            class: "ml-2",
                                            color: "green-darken-3",
                                            inset: "",
                                            label: "Protocolo Minsal",
                                            readonly: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_switch, {
                                            modelValue: unref(form).donante,
                                            "onUpdate:modelValue": ($event) => unref(form).donante = $event,
                                            class: "ml-2",
                                            label: "Donante",
                                            color: "success",
                                            "hide-details": "",
                                            inset: "",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).email,
                                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                            required: "",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).fecha_nacimiento,
                                            "onUpdate:modelValue": ($event) => unref(form).fecha_nacimiento = $event,
                                            label: "Fecha de nacimiento",
                                            variant: "underlined",
                                            type: "date",
                                            onInput: _ctx.handleInputChange,
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).edad,
                                            "onUpdate:modelValue": ($event) => unref(form).edad = $event,
                                            label: "Edad*",
                                            type: "text",
                                            variant: "underlined",
                                            readonly: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).direccion,
                                            "onUpdate:modelValue": ($event) => unref(form).direccion = $event,
                                            label: "Dirección",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "teléfono 1",
                                            modelValue: unref(form).telefono1,
                                            "onUpdate:modelValue": ($event) => unref(form).telefono1 = $event,
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).telefono2,
                                            "onUpdate:modelValue": ($event) => unref(form).telefono2 = $event,
                                            label: "teléfono 2",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: [
                                              { id: 1, descripcion: "O" },
                                              { id: 2, descripcion: "A" },
                                              { id: 3, descripcion: "B" },
                                              { id: 4, descripcion: "AB" }
                                            ],
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).grupo_sanguineo,
                                            "onUpdate:modelValue": ($event) => unref(form).grupo_sanguineo = $event,
                                            label: "Grupo sanguíneo",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).nacionalidad,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).nacionalidad,
                                            "onUpdate:modelValue": ($event) => unref(form).nacionalidad = $event,
                                            label: "Nacionalidad",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).religion,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            label: "Religion / Culto",
                                            modelValue: unref(form).religion,
                                            "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).genero,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            label: "Género",
                                            modelValue: unref(form).genero,
                                            "onUpdate:modelValue": ($event) => unref(form).genero = $event,
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: [
                                              "Institucional (MAI)",
                                              "Libre elección (MLE)"
                                            ],
                                            "item-title": "descripcion",
                                            "item-value": "descripcion",
                                            modelValue: unref(form).modalidad_atencion,
                                            "onUpdate:modelValue": ($event) => unref(form).modalidad_atencion = $event,
                                            label: "Modalidad ATebnción",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Ciudad",
                                            modelValue: unref(form).ciudad,
                                            "onUpdate:modelValue": ($event) => unref(form).ciudad = $event,
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).prevision,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).prevision,
                                            "onUpdate:modelValue": ($event) => unref(form).prevision = $event,
                                            label: "Previsión de Salud",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).afp,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).afp,
                                            "onUpdate:modelValue": ($event) => unref(form).afp = $event,
                                            label: "AFP",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).ley_social,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).ley_social,
                                            "onUpdate:modelValue": ($event) => unref(form).ley_social = $event,
                                            label: "Leyes Sociales",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).seguro,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).seguro,
                                            "onUpdate:modelValue": ($event) => unref(form).seguro = $event,
                                            label: "Administradores del Seguro Ley 16.744",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).pueblo_originario,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).pueblo_originario,
                                            "onUpdate:modelValue": ($event) => unref(form).pueblo_originario = $event,
                                            label: "Pueblo originario",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        sm: "4",
                                        md: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).nivel_instruccion,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).nivel_instruccion,
                                            "onUpdate:modelValue": ($event) => unref(form).nivel_instruccion = $event,
                                            label: "Nivel de Instrucción",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "text-h6" }, "Datos Laborales"),
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_row, { class: "mt-2" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).actividad_economica,
                                            "onUpdate:modelValue": ($event) => unref(form).actividad_economica = $event,
                                            label: "Actividad economica",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).empresa,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).empresa,
                                            "onUpdate:modelValue": ($event) => unref(form).empresa = $event,
                                            label: "Empresa*",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).cargo,
                                            "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
                                            label: "Cargo",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).area,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).area,
                                            "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                            label: "Área",
                                            single: "",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).unidad,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).unidad,
                                            "onUpdate:modelValue": ($event) => unref(form).unidad = $event,
                                            label: "Unidad",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(form).ocupacion,
                                            "onUpdate:modelValue": ($event) => unref(form).ocupacion = $event,
                                            label: "Ocupación",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).exposicion,
                                            "item-title": "descripcion",
                                            "item-value": "descripcion",
                                            chips: "",
                                            modelValue: unref(form).exposicion,
                                            "onUpdate:modelValue": ($event) => unref(form).exposicion = $event,
                                            label: "Exposicion",
                                            multiple: "",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).ceco,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).ceco,
                                            "onUpdate:modelValue": ($event) => unref(form).ceco = $event,
                                            label: "Área de Trabajo (Cencos)",
                                            single: "",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: unref(list).planta,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: unref(form).planta,
                                            "onUpdate:modelValue": ($event) => unref(form).planta = $event,
                                            label: "Planta",
                                            single: "",
                                            variant: "underlined",
                                            readonly: !unref(editable)
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
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
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          !unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                            key: 0,
                                            color: "primary",
                                            onClick: ($event) => isRef(editable) ? editable.value = true : editable = true
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Editar Perfil ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])) : createCommentVNode("", true),
                                          unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                            key: 1,
                                            color: "success",
                                            variant: "tonal",
                                            type: "submit"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Guardar Cambios ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                            key: 2,
                                            color: "error",
                                            variant: "tonal",
                                            onClick: cancelEdit
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancelar ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_divider, {
                      thickness: "4px",
                      color: "#009AA4",
                      class: "ma-4"
                    }),
                    createVNode(_component_v_form, {
                      onSubmit: withModifiers(updatePerfil, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h6" }, "Datos Personales"),
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).rut,
                                          "onUpdate:modelValue": ($event) => unref(form).rut = $event,
                                          label: "RUT (12345678-9)",
                                          type: "text",
                                          required: "",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).nombre,
                                          "onUpdate:modelValue": ($event) => unref(form).nombre = $event,
                                          label: "Nombre*",
                                          type: "text",
                                          required: "",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).apellidos,
                                          "onUpdate:modelValue": ($event) => unref(form).apellidos = $event,
                                          label: "Apellidos*",
                                          required: "",
                                          type: "text",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_switch, {
                                          modelValue: unref(form).activo,
                                          "onUpdate:modelValue": ($event) => unref(form).activo = $event,
                                          "hide-details": "",
                                          value: unref(form).activo,
                                          "false-value": "true",
                                          "true-value": "false",
                                          class: "ml-2",
                                          color: "green-darken-3",
                                          inset: "",
                                          label: "Activo",
                                          readonly: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                                        createVNode(_component_v_switch, {
                                          modelValue: unref(form).protocolo_minsal,
                                          "onUpdate:modelValue": ($event) => unref(form).protocolo_minsal = $event,
                                          "hide-details": "",
                                          "false-value": "true",
                                          "true-value": "false",
                                          class: "ml-2",
                                          color: "green-darken-3",
                                          inset: "",
                                          label: "Protocolo Minsal",
                                          readonly: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_switch, {
                                          modelValue: unref(form).donante,
                                          "onUpdate:modelValue": ($event) => unref(form).donante = $event,
                                          class: "ml-2",
                                          label: "Donante",
                                          color: "success",
                                          "hide-details": "",
                                          inset: "",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).email,
                                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                          required: "",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).fecha_nacimiento,
                                          "onUpdate:modelValue": ($event) => unref(form).fecha_nacimiento = $event,
                                          label: "Fecha de nacimiento",
                                          variant: "underlined",
                                          type: "date",
                                          onInput: _ctx.handleInputChange,
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).edad,
                                          "onUpdate:modelValue": ($event) => unref(form).edad = $event,
                                          label: "Edad*",
                                          type: "text",
                                          variant: "underlined",
                                          readonly: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).direccion,
                                          "onUpdate:modelValue": ($event) => unref(form).direccion = $event,
                                          label: "Dirección",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "teléfono 1",
                                          modelValue: unref(form).telefono1,
                                          "onUpdate:modelValue": ($event) => unref(form).telefono1 = $event,
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).telefono2,
                                          "onUpdate:modelValue": ($event) => unref(form).telefono2 = $event,
                                          label: "teléfono 2",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: [
                                            { id: 1, descripcion: "O" },
                                            { id: 2, descripcion: "A" },
                                            { id: 3, descripcion: "B" },
                                            { id: 4, descripcion: "AB" }
                                          ],
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).grupo_sanguineo,
                                          "onUpdate:modelValue": ($event) => unref(form).grupo_sanguineo = $event,
                                          label: "Grupo sanguíneo",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).nacionalidad,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).nacionalidad,
                                          "onUpdate:modelValue": ($event) => unref(form).nacionalidad = $event,
                                          label: "Nacionalidad",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).religion,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          label: "Religion / Culto",
                                          modelValue: unref(form).religion,
                                          "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).genero,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          label: "Género",
                                          modelValue: unref(form).genero,
                                          "onUpdate:modelValue": ($event) => unref(form).genero = $event,
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: [
                                            "Institucional (MAI)",
                                            "Libre elección (MLE)"
                                          ],
                                          "item-title": "descripcion",
                                          "item-value": "descripcion",
                                          modelValue: unref(form).modalidad_atencion,
                                          "onUpdate:modelValue": ($event) => unref(form).modalidad_atencion = $event,
                                          label: "Modalidad ATebnción",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Ciudad",
                                          modelValue: unref(form).ciudad,
                                          "onUpdate:modelValue": ($event) => unref(form).ciudad = $event,
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).prevision,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).prevision,
                                          "onUpdate:modelValue": ($event) => unref(form).prevision = $event,
                                          label: "Previsión de Salud",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).afp,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).afp,
                                          "onUpdate:modelValue": ($event) => unref(form).afp = $event,
                                          label: "AFP",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).ley_social,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).ley_social,
                                          "onUpdate:modelValue": ($event) => unref(form).ley_social = $event,
                                          label: "Leyes Sociales",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).seguro,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).seguro,
                                          "onUpdate:modelValue": ($event) => unref(form).seguro = $event,
                                          label: "Administradores del Seguro Ley 16.744",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).pueblo_originario,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).pueblo_originario,
                                          "onUpdate:modelValue": ($event) => unref(form).pueblo_originario = $event,
                                          label: "Pueblo originario",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      sm: "4",
                                      md: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).nivel_instruccion,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).nivel_instruccion,
                                          "onUpdate:modelValue": ($event) => unref(form).nivel_instruccion = $event,
                                          label: "Nivel de Instrucción",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "text-h6" }, "Datos Laborales"),
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_row, { class: "mt-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).actividad_economica,
                                          "onUpdate:modelValue": ($event) => unref(form).actividad_economica = $event,
                                          label: "Actividad economica",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).empresa,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).empresa,
                                          "onUpdate:modelValue": ($event) => unref(form).empresa = $event,
                                          label: "Empresa*",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).cargo,
                                          "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
                                          label: "Cargo",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).area,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).area,
                                          "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                          label: "Área",
                                          single: "",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).unidad,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).unidad,
                                          "onUpdate:modelValue": ($event) => unref(form).unidad = $event,
                                          label: "Unidad",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(form).ocupacion,
                                          "onUpdate:modelValue": ($event) => unref(form).ocupacion = $event,
                                          label: "Ocupación",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).exposicion,
                                          "item-title": "descripcion",
                                          "item-value": "descripcion",
                                          chips: "",
                                          modelValue: unref(form).exposicion,
                                          "onUpdate:modelValue": ($event) => unref(form).exposicion = $event,
                                          label: "Exposicion",
                                          multiple: "",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).ceco,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).ceco,
                                          "onUpdate:modelValue": ($event) => unref(form).ceco = $event,
                                          label: "Área de Trabajo (Cencos)",
                                          single: "",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: unref(list).planta,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: unref(form).planta,
                                          "onUpdate:modelValue": ($event) => unref(form).planta = $event,
                                          label: "Planta",
                                          single: "",
                                          variant: "underlined",
                                          readonly: !unref(editable)
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
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
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, null, {
                                      default: withCtx(() => [
                                        !unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                          key: 0,
                                          color: "primary",
                                          onClick: ($event) => isRef(editable) ? editable.value = true : editable = true
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Editar Perfil ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])) : createCommentVNode("", true),
                                        unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                          key: 1,
                                          color: "success",
                                          variant: "tonal",
                                          type: "submit"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Guardar Cambios ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                          key: 2,
                                          color: "error",
                                          variant: "tonal",
                                          onClick: cancelEdit
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancelar ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, {
                color: "white",
                elevation: 6,
                class: "rounded-lg ma-4 pa-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_divider, {
                    thickness: "4px",
                    color: "#009AA4",
                    class: "ma-4"
                  }),
                  createVNode(_component_v_form, {
                    onSubmit: withModifiers(updatePerfil, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h6" }, "Datos Personales"),
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).rut,
                                        "onUpdate:modelValue": ($event) => unref(form).rut = $event,
                                        label: "RUT (12345678-9)",
                                        type: "text",
                                        required: "",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).nombre,
                                        "onUpdate:modelValue": ($event) => unref(form).nombre = $event,
                                        label: "Nombre*",
                                        type: "text",
                                        required: "",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).apellidos,
                                        "onUpdate:modelValue": ($event) => unref(form).apellidos = $event,
                                        label: "Apellidos*",
                                        required: "",
                                        type: "text",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_switch, {
                                        modelValue: unref(form).activo,
                                        "onUpdate:modelValue": ($event) => unref(form).activo = $event,
                                        "hide-details": "",
                                        value: unref(form).activo,
                                        "false-value": "true",
                                        "true-value": "false",
                                        class: "ml-2",
                                        color: "green-darken-3",
                                        inset: "",
                                        label: "Activo",
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                                      createVNode(_component_v_switch, {
                                        modelValue: unref(form).protocolo_minsal,
                                        "onUpdate:modelValue": ($event) => unref(form).protocolo_minsal = $event,
                                        "hide-details": "",
                                        "false-value": "true",
                                        "true-value": "false",
                                        class: "ml-2",
                                        color: "green-darken-3",
                                        inset: "",
                                        label: "Protocolo Minsal",
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_switch, {
                                        modelValue: unref(form).donante,
                                        "onUpdate:modelValue": ($event) => unref(form).donante = $event,
                                        class: "ml-2",
                                        label: "Donante",
                                        color: "success",
                                        "hide-details": "",
                                        inset: "",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        required: "",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).fecha_nacimiento,
                                        "onUpdate:modelValue": ($event) => unref(form).fecha_nacimiento = $event,
                                        label: "Fecha de nacimiento",
                                        variant: "underlined",
                                        type: "date",
                                        onInput: _ctx.handleInputChange,
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).edad,
                                        "onUpdate:modelValue": ($event) => unref(form).edad = $event,
                                        label: "Edad*",
                                        type: "text",
                                        variant: "underlined",
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).direccion,
                                        "onUpdate:modelValue": ($event) => unref(form).direccion = $event,
                                        label: "Dirección",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "teléfono 1",
                                        modelValue: unref(form).telefono1,
                                        "onUpdate:modelValue": ($event) => unref(form).telefono1 = $event,
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).telefono2,
                                        "onUpdate:modelValue": ($event) => unref(form).telefono2 = $event,
                                        label: "teléfono 2",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: [
                                          { id: 1, descripcion: "O" },
                                          { id: 2, descripcion: "A" },
                                          { id: 3, descripcion: "B" },
                                          { id: 4, descripcion: "AB" }
                                        ],
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).grupo_sanguineo,
                                        "onUpdate:modelValue": ($event) => unref(form).grupo_sanguineo = $event,
                                        label: "Grupo sanguíneo",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).nacionalidad,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).nacionalidad,
                                        "onUpdate:modelValue": ($event) => unref(form).nacionalidad = $event,
                                        label: "Nacionalidad",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).religion,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        label: "Religion / Culto",
                                        modelValue: unref(form).religion,
                                        "onUpdate:modelValue": ($event) => unref(form).religion = $event,
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).genero,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        label: "Género",
                                        modelValue: unref(form).genero,
                                        "onUpdate:modelValue": ($event) => unref(form).genero = $event,
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: [
                                          "Institucional (MAI)",
                                          "Libre elección (MLE)"
                                        ],
                                        "item-title": "descripcion",
                                        "item-value": "descripcion",
                                        modelValue: unref(form).modalidad_atencion,
                                        "onUpdate:modelValue": ($event) => unref(form).modalidad_atencion = $event,
                                        label: "Modalidad ATebnción",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Ciudad",
                                        modelValue: unref(form).ciudad,
                                        "onUpdate:modelValue": ($event) => unref(form).ciudad = $event,
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).prevision,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).prevision,
                                        "onUpdate:modelValue": ($event) => unref(form).prevision = $event,
                                        label: "Previsión de Salud",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).afp,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).afp,
                                        "onUpdate:modelValue": ($event) => unref(form).afp = $event,
                                        label: "AFP",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).ley_social,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).ley_social,
                                        "onUpdate:modelValue": ($event) => unref(form).ley_social = $event,
                                        label: "Leyes Sociales",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).seguro,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).seguro,
                                        "onUpdate:modelValue": ($event) => unref(form).seguro = $event,
                                        label: "Administradores del Seguro Ley 16.744",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).pueblo_originario,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).pueblo_originario,
                                        "onUpdate:modelValue": ($event) => unref(form).pueblo_originario = $event,
                                        label: "Pueblo originario",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    sm: "4",
                                    md: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).nivel_instruccion,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).nivel_instruccion,
                                        "onUpdate:modelValue": ($event) => unref(form).nivel_instruccion = $event,
                                        label: "Nivel de Instrucción",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "text-h6" }, "Datos Laborales"),
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_row, { class: "mt-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).actividad_economica,
                                        "onUpdate:modelValue": ($event) => unref(form).actividad_economica = $event,
                                        label: "Actividad economica",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).empresa,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).empresa,
                                        "onUpdate:modelValue": ($event) => unref(form).empresa = $event,
                                        label: "Empresa*",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).cargo,
                                        "onUpdate:modelValue": ($event) => unref(form).cargo = $event,
                                        label: "Cargo",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).area,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).area,
                                        "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                        label: "Área",
                                        single: "",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).unidad,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).unidad,
                                        "onUpdate:modelValue": ($event) => unref(form).unidad = $event,
                                        label: "Unidad",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(form).ocupacion,
                                        "onUpdate:modelValue": ($event) => unref(form).ocupacion = $event,
                                        label: "Ocupación",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).exposicion,
                                        "item-title": "descripcion",
                                        "item-value": "descripcion",
                                        chips: "",
                                        modelValue: unref(form).exposicion,
                                        "onUpdate:modelValue": ($event) => unref(form).exposicion = $event,
                                        label: "Exposicion",
                                        multiple: "",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).ceco,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).ceco,
                                        "onUpdate:modelValue": ($event) => unref(form).ceco = $event,
                                        label: "Área de Trabajo (Cencos)",
                                        single: "",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: unref(list).planta,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: unref(form).planta,
                                        "onUpdate:modelValue": ($event) => unref(form).planta = $event,
                                        label: "Planta",
                                        single: "",
                                        variant: "underlined",
                                        readonly: !unref(editable)
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "readonly"])
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
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, null, {
                                    default: withCtx(() => [
                                      !unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                        key: 0,
                                        color: "primary",
                                        onClick: ($event) => isRef(editable) ? editable.value = true : editable = true
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Editar Perfil ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])) : createCommentVNode("", true),
                                      unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                        key: 1,
                                        color: "success",
                                        variant: "tonal",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Guardar Cambios ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(editable) ? (openBlock(), createBlock(_component_v_btn, {
                                        key: 2,
                                        color: "error",
                                        variant: "tonal",
                                        onClick: cancelEdit
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancelar ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Paciente/MiPerfilPersonal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MiPerfilPersonal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/Paciente/MiPerfilPersonal.vue"]]);
export {
  MiPerfilPersonal as default
};
//# sourceMappingURL=MiPerfilPersonal-DbzKjfRh.js.map
