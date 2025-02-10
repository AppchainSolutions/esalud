import { ref, onMounted, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-9lGv6sW_.js";
import { usePage, router } from "@inertiajs/vue3";
import "./helper-wNjokA2D.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./logo-DLUxz0ei.js";
import "vue-loading-overlay";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "./store-45BLaymI.js";
import "pinia";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "MiPerfilPersonalV2",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    const page = usePage();
    const paciente = page.props.paciente;
    page.props.auth.user;
    const editable = ref(false);
    const form = ref({
      nombre: paciente.nombre,
      apellidos: paciente.apellidos,
      rut: paciente.rut,
      email: paciente.email,
      telefono1: paciente.telefono1,
      telefono2: paciente.telefono2,
      direccion: paciente.direccion,
      fecha_nacimiento: paciente.fecha_nacimiento,
      // Relaciones
      genero: (_a = paciente.genero) == null ? void 0 : _a.descripcion,
      nacionalidad: (_b = paciente.nacionalidad) == null ? void 0 : _b.descripcion,
      grupo_sanguineo: (_c = paciente.grupoSanguineo) == null ? void 0 : _c.descripcion,
      estado_civil: (_d = paciente.estadoCivil) == null ? void 0 : _d.descripcion,
      nivel_instruccion: (_e = paciente.nivelInstruccion) == null ? void 0 : _e.descripcion,
      pueblo_originario: (_f = paciente.puebloOriginario) == null ? void 0 : _f.descripcion,
      religion: (_g = paciente.religion) == null ? void 0 : _g.descripcion,
      prevision: (_h = paciente.prevision) == null ? void 0 : _h.descripcion,
      seguro_salud: (_i = paciente.seguroSalud) == null ? void 0 : _i.descripcion,
      // Datos laborales
      unidad: (_j = paciente.unidad) == null ? void 0 : _j.descripcion,
      area: (_k = paciente.area) == null ? void 0 : _k.descripcion,
      ceco: (_l = paciente.ceco) == null ? void 0 : _l.descripcion,
      empresa: (_m = paciente.empresa) == null ? void 0 : _m.descripcion,
      afp: (_n = paciente.afp) == null ? void 0 : _n.descripcion
    });
    ref([
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
    ref([]);
    onMounted(async () => {
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
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2;
      form.value = {
        nombre: paciente.nombre,
        apellidos: paciente.apellidos,
        rut: paciente.rut,
        email: paciente.email,
        telefono1: paciente.telefono1,
        telefono2: paciente.telefono2,
        direccion: paciente.direccion,
        fecha_nacimiento: paciente.fecha_nacimiento,
        genero: (_a2 = paciente.genero) == null ? void 0 : _a2.id,
        nacionalidad: (_b2 = paciente.nacionalidad) == null ? void 0 : _b2.id,
        estado_civil: (_c2 = paciente.estadoCivil) == null ? void 0 : _c2.id,
        nivel_instruccion: (_d2 = paciente.nivelInstruccion) == null ? void 0 : _d2.id,
        pueblo_originario: (_e2 = paciente.puebloOriginario) == null ? void 0 : _e2.id,
        religion: (_f2 = paciente.religion) == null ? void 0 : _f2.id,
        prevision: (_g2 = paciente.prevision) == null ? void 0 : _g2.id,
        seguro_salud: (_h2 = paciente.seguroSalud) == null ? void 0 : _h2.id,
        unidad: (_i2 = paciente.unidad) == null ? void 0 : _i2.id,
        area: (_j2 = paciente.area) == null ? void 0 : _j2.id,
        ceco: (_k2 = paciente.ceco) == null ? void 0 : _k2.id,
        empresa: (_l2 = paciente.empresa) == null ? void 0 : _l2.id,
        afp: (_m2 = paciente.afp) == null ? void 0 : _m2.id
      };
      editable.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
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
                  _push3(ssrRenderComponent(_component_v_form, { onSubmit: updatePerfil }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.value.nombre,
                                      "onUpdate:modelValue": ($event) => form.value.nombre = $event,
                                      label: "Nombre",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.value.apellidos,
                                      "onUpdate:modelValue": ($event) => form.value.apellidos = $event,
                                      label: "Apellidos",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.value.rut,
                                      "onUpdate:modelValue": ($event) => form.value.rut = $event,
                                      label: "RUT",
                                      readonly: true
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.genero,
                                      "onUpdate:modelValue": ($event) => form.value.genero = $event,
                                      items: _ctx.generos,
                                      label: "Género",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.value.fecha_nacimiento,
                                      "onUpdate:modelValue": ($event) => form.value.fecha_nacimiento = $event,
                                      label: "Fecha de Nacimiento",
                                      type: "date",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.nacionalidad,
                                      "onUpdate:modelValue": ($event) => form.value.nacionalidad = $event,
                                      items: _ctx.nacionalidades,
                                      label: "Nacionalidad",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.estado_civil,
                                      "onUpdate:modelValue": ($event) => form.value.estado_civil = $event,
                                      items: _ctx.estadosCiviles,
                                      label: "Estado Civil",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.religion,
                                      "onUpdate:modelValue": ($event) => form.value.religion = $event,
                                      items: _ctx.religiones,
                                      label: "Religión",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.value.nombre,
                                        "onUpdate:modelValue": ($event) => form.value.nombre = $event,
                                        label: "Nombre",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.value.apellidos,
                                        "onUpdate:modelValue": ($event) => form.value.apellidos = $event,
                                        label: "Apellidos",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.value.rut,
                                        "onUpdate:modelValue": ($event) => form.value.rut = $event,
                                        label: "RUT",
                                        readonly: true
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.genero,
                                        "onUpdate:modelValue": ($event) => form.value.genero = $event,
                                        items: _ctx.generos,
                                        label: "Género",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.value.fecha_nacimiento,
                                        "onUpdate:modelValue": ($event) => form.value.fecha_nacimiento = $event,
                                        label: "Fecha de Nacimiento",
                                        type: "date",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.nacionalidad,
                                        "onUpdate:modelValue": ($event) => form.value.nacionalidad = $event,
                                        items: _ctx.nacionalidades,
                                        label: "Nacionalidad",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.estado_civil,
                                        "onUpdate:modelValue": ($event) => form.value.estado_civil = $event,
                                        items: _ctx.estadosCiviles,
                                        label: "Estado Civil",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.religion,
                                        "onUpdate:modelValue": ($event) => form.value.religion = $event,
                                        items: _ctx.religiones,
                                        label: "Religión",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.value.email,
                                      "onUpdate:modelValue": ($event) => form.value.email = $event,
                                      label: "Correo Electrónico",
                                      readonly: true
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.value.telefono1,
                                      "onUpdate:modelValue": ($event) => form.value.telefono1 = $event,
                                      label: "Teléfono Principal",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.value.telefono2,
                                      "onUpdate:modelValue": ($event) => form.value.telefono2 = $event,
                                      label: "Teléfono Secundario",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.value.direccion,
                                      "onUpdate:modelValue": ($event) => form.value.direccion = $event,
                                      label: "Dirección",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.nivel_instruccion,
                                      "onUpdate:modelValue": ($event) => form.value.nivel_instruccion = $event,
                                      items: _ctx.nivelesInstruccion,
                                      label: "Nivel de Instrucción",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.pueblo_originario,
                                      "onUpdate:modelValue": ($event) => form.value.pueblo_originario = $event,
                                      items: _ctx.pueblosOriginarios,
                                      label: "Pueblo Originario",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.prevision,
                                      "onUpdate:modelValue": ($event) => form.value.prevision = $event,
                                      items: _ctx.previsiones,
                                      label: "Previsión",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.seguro_salud,
                                      "onUpdate:modelValue": ($event) => form.value.seguro_salud = $event,
                                      items: _ctx.seguros,
                                      label: "Seguro de Salud",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.value.email,
                                        "onUpdate:modelValue": ($event) => form.value.email = $event,
                                        label: "Correo Electrónico",
                                        readonly: true
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.value.telefono1,
                                        "onUpdate:modelValue": ($event) => form.value.telefono1 = $event,
                                        label: "Teléfono Principal",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.value.telefono2,
                                        "onUpdate:modelValue": ($event) => form.value.telefono2 = $event,
                                        label: "Teléfono Secundario",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.value.direccion,
                                        "onUpdate:modelValue": ($event) => form.value.direccion = $event,
                                        label: "Dirección",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.nivel_instruccion,
                                        "onUpdate:modelValue": ($event) => form.value.nivel_instruccion = $event,
                                        items: _ctx.nivelesInstruccion,
                                        label: "Nivel de Instrucción",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.pueblo_originario,
                                        "onUpdate:modelValue": ($event) => form.value.pueblo_originario = $event,
                                        items: _ctx.pueblosOriginarios,
                                        label: "Pueblo Originario",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.prevision,
                                        "onUpdate:modelValue": ($event) => form.value.prevision = $event,
                                        items: _ctx.previsiones,
                                        label: "Previsión",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.seguro_salud,
                                        "onUpdate:modelValue": ($event) => form.value.seguro_salud = $event,
                                        items: _ctx.seguros,
                                        label: "Seguro de Salud",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.nombre,
                                      "onUpdate:modelValue": ($event) => form.value.nombre = $event,
                                      label: "Nombre",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.apellidos,
                                      "onUpdate:modelValue": ($event) => form.value.apellidos = $event,
                                      label: "Apellidos",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.rut,
                                      "onUpdate:modelValue": ($event) => form.value.rut = $event,
                                      label: "RUT",
                                      readonly: true
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.genero,
                                      "onUpdate:modelValue": ($event) => form.value.genero = $event,
                                      items: _ctx.generos,
                                      label: "Género",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.fecha_nacimiento,
                                      "onUpdate:modelValue": ($event) => form.value.fecha_nacimiento = $event,
                                      label: "Fecha de Nacimiento",
                                      type: "date",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.nacionalidad,
                                      "onUpdate:modelValue": ($event) => form.value.nacionalidad = $event,
                                      items: _ctx.nacionalidades,
                                      label: "Nacionalidad",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.estado_civil,
                                      "onUpdate:modelValue": ($event) => form.value.estado_civil = $event,
                                      items: _ctx.estadosCiviles,
                                      label: "Estado Civil",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.religion,
                                      "onUpdate:modelValue": ($event) => form.value.religion = $event,
                                      items: _ctx.religiones,
                                      label: "Religión",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.email,
                                      "onUpdate:modelValue": ($event) => form.value.email = $event,
                                      label: "Correo Electrónico",
                                      readonly: true
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.telefono1,
                                      "onUpdate:modelValue": ($event) => form.value.telefono1 = $event,
                                      label: "Teléfono Principal",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.telefono2,
                                      "onUpdate:modelValue": ($event) => form.value.telefono2 = $event,
                                      label: "Teléfono Secundario",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.direccion,
                                      "onUpdate:modelValue": ($event) => form.value.direccion = $event,
                                      label: "Dirección",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.nivel_instruccion,
                                      "onUpdate:modelValue": ($event) => form.value.nivel_instruccion = $event,
                                      items: _ctx.nivelesInstruccion,
                                      label: "Nivel de Instrucción",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.pueblo_originario,
                                      "onUpdate:modelValue": ($event) => form.value.pueblo_originario = $event,
                                      items: _ctx.pueblosOriginarios,
                                      label: "Pueblo Originario",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.prevision,
                                      "onUpdate:modelValue": ($event) => form.value.prevision = $event,
                                      items: _ctx.previsiones,
                                      label: "Previsión",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.seguro_salud,
                                      "onUpdate:modelValue": ($event) => form.value.seguro_salud = $event,
                                      items: _ctx.seguros,
                                      label: "Seguro de Salud",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.empresa,
                                      "onUpdate:modelValue": ($event) => form.value.empresa = $event,
                                      items: _ctx.empresas,
                                      label: "Empresa",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.unidad,
                                      "onUpdate:modelValue": ($event) => form.value.unidad = $event,
                                      items: _ctx.unidades,
                                      label: "Unidad",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.area,
                                      "onUpdate:modelValue": ($event) => form.value.area = $event,
                                      items: _ctx.areas,
                                      label: "Área",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.empresa,
                                        "onUpdate:modelValue": ($event) => form.value.empresa = $event,
                                        items: _ctx.empresas,
                                        label: "Empresa",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.unidad,
                                        "onUpdate:modelValue": ($event) => form.value.unidad = $event,
                                        items: _ctx.unidades,
                                        label: "Unidad",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.area,
                                        "onUpdate:modelValue": ($event) => form.value.area = $event,
                                        items: _ctx.areas,
                                        label: "Área",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.ceco,
                                      "onUpdate:modelValue": ($event) => form.value.ceco = $event,
                                      items: _ctx.cecos,
                                      label: "Centro de Costo",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: form.value.afp,
                                      "onUpdate:modelValue": ($event) => form.value.afp = $event,
                                      items: _ctx.afps,
                                      label: "AFP",
                                      readonly: !editable.value
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.ceco,
                                        "onUpdate:modelValue": ($event) => form.value.ceco = $event,
                                        items: _ctx.cecos,
                                        label: "Centro de Costo",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                      createVNode(_component_v_select, {
                                        modelValue: form.value.afp,
                                        "onUpdate:modelValue": ($event) => form.value.afp = $event,
                                        items: _ctx.afps,
                                        label: "AFP",
                                        readonly: !editable.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.empresa,
                                      "onUpdate:modelValue": ($event) => form.value.empresa = $event,
                                      items: _ctx.empresas,
                                      label: "Empresa",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.unidad,
                                      "onUpdate:modelValue": ($event) => form.value.unidad = $event,
                                      items: _ctx.unidades,
                                      label: "Unidad",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.area,
                                      "onUpdate:modelValue": ($event) => form.value.area = $event,
                                      items: _ctx.areas,
                                      label: "Área",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.ceco,
                                      "onUpdate:modelValue": ($event) => form.value.ceco = $event,
                                      items: _ctx.cecos,
                                      label: "Centro de Costo",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                    createVNode(_component_v_select, {
                                      modelValue: form.value.afp,
                                      "onUpdate:modelValue": ($event) => form.value.afp = $event,
                                      items: _ctx.afps,
                                      label: "AFP",
                                      readonly: !editable.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (!editable.value) {
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        color: "primary",
                                        onClick: ($event) => editable.value = true
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Editar Perfil `);
                                          } else {
                                            return [
                                              createTextVNode(" Editar Perfil ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (editable.value) {
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        color: "success",
                                        type: "submit"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Guardar Cambios `);
                                          } else {
                                            return [
                                              createTextVNode(" Guardar Cambios ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (editable.value) {
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        color: "error",
                                        onClick: cancelEdit
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Cancelar `);
                                          } else {
                                            return [
                                              createTextVNode(" Cancelar ")
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
                                      !editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                        key: 0,
                                        color: "primary",
                                        onClick: ($event) => editable.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Editar Perfil ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])) : createCommentVNode("", true),
                                      editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                        key: 1,
                                        color: "success",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Guardar Cambios ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                        key: 2,
                                        color: "error",
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    !editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                      key: 0,
                                      color: "primary",
                                      onClick: ($event) => editable.value = true
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Editar Perfil ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])) : createCommentVNode("", true),
                                    editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                      key: 1,
                                      color: "success",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Guardar Cambios ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                      key: 2,
                                      color: "error",
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.value.nombre,
                                    "onUpdate:modelValue": ($event) => form.value.nombre = $event,
                                    label: "Nombre",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.value.apellidos,
                                    "onUpdate:modelValue": ($event) => form.value.apellidos = $event,
                                    label: "Apellidos",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.value.rut,
                                    "onUpdate:modelValue": ($event) => form.value.rut = $event,
                                    label: "RUT",
                                    readonly: true
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.genero,
                                    "onUpdate:modelValue": ($event) => form.value.genero = $event,
                                    items: _ctx.generos,
                                    label: "Género",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.value.fecha_nacimiento,
                                    "onUpdate:modelValue": ($event) => form.value.fecha_nacimiento = $event,
                                    label: "Fecha de Nacimiento",
                                    type: "date",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.nacionalidad,
                                    "onUpdate:modelValue": ($event) => form.value.nacionalidad = $event,
                                    items: _ctx.nacionalidades,
                                    label: "Nacionalidad",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.estado_civil,
                                    "onUpdate:modelValue": ($event) => form.value.estado_civil = $event,
                                    items: _ctx.estadosCiviles,
                                    label: "Estado Civil",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.religion,
                                    "onUpdate:modelValue": ($event) => form.value.religion = $event,
                                    items: _ctx.religiones,
                                    label: "Religión",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.value.email,
                                    "onUpdate:modelValue": ($event) => form.value.email = $event,
                                    label: "Correo Electrónico",
                                    readonly: true
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.value.telefono1,
                                    "onUpdate:modelValue": ($event) => form.value.telefono1 = $event,
                                    label: "Teléfono Principal",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.value.telefono2,
                                    "onUpdate:modelValue": ($event) => form.value.telefono2 = $event,
                                    label: "Teléfono Secundario",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.value.direccion,
                                    "onUpdate:modelValue": ($event) => form.value.direccion = $event,
                                    label: "Dirección",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.nivel_instruccion,
                                    "onUpdate:modelValue": ($event) => form.value.nivel_instruccion = $event,
                                    items: _ctx.nivelesInstruccion,
                                    label: "Nivel de Instrucción",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.pueblo_originario,
                                    "onUpdate:modelValue": ($event) => form.value.pueblo_originario = $event,
                                    items: _ctx.pueblosOriginarios,
                                    label: "Pueblo Originario",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.prevision,
                                    "onUpdate:modelValue": ($event) => form.value.prevision = $event,
                                    items: _ctx.previsiones,
                                    label: "Previsión",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.seguro_salud,
                                    "onUpdate:modelValue": ($event) => form.value.seguro_salud = $event,
                                    items: _ctx.seguros,
                                    label: "Seguro de Salud",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.empresa,
                                    "onUpdate:modelValue": ($event) => form.value.empresa = $event,
                                    items: _ctx.empresas,
                                    label: "Empresa",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.unidad,
                                    "onUpdate:modelValue": ($event) => form.value.unidad = $event,
                                    items: _ctx.unidades,
                                    label: "Unidad",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.area,
                                    "onUpdate:modelValue": ($event) => form.value.area = $event,
                                    items: _ctx.areas,
                                    label: "Área",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.ceco,
                                    "onUpdate:modelValue": ($event) => form.value.ceco = $event,
                                    items: _ctx.cecos,
                                    label: "Centro de Costo",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                  createVNode(_component_v_select, {
                                    modelValue: form.value.afp,
                                    "onUpdate:modelValue": ($event) => form.value.afp = $event,
                                    items: _ctx.afps,
                                    label: "AFP",
                                    readonly: !editable.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  !editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                    key: 0,
                                    color: "primary",
                                    onClick: ($event) => editable.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Editar Perfil ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])) : createCommentVNode("", true),
                                  editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                    key: 1,
                                    color: "success",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Guardar Cambios ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                    key: 2,
                                    color: "error",
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_form, {
                      onSubmit: withModifiers(updatePerfil, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: form.value.nombre,
                                  "onUpdate:modelValue": ($event) => form.value.nombre = $event,
                                  label: "Nombre",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: form.value.apellidos,
                                  "onUpdate:modelValue": ($event) => form.value.apellidos = $event,
                                  label: "Apellidos",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: form.value.rut,
                                  "onUpdate:modelValue": ($event) => form.value.rut = $event,
                                  label: "RUT",
                                  readonly: true
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.genero,
                                  "onUpdate:modelValue": ($event) => form.value.genero = $event,
                                  items: _ctx.generos,
                                  label: "Género",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: form.value.fecha_nacimiento,
                                  "onUpdate:modelValue": ($event) => form.value.fecha_nacimiento = $event,
                                  label: "Fecha de Nacimiento",
                                  type: "date",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.nacionalidad,
                                  "onUpdate:modelValue": ($event) => form.value.nacionalidad = $event,
                                  items: _ctx.nacionalidades,
                                  label: "Nacionalidad",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.estado_civil,
                                  "onUpdate:modelValue": ($event) => form.value.estado_civil = $event,
                                  items: _ctx.estadosCiviles,
                                  label: "Estado Civil",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.religion,
                                  "onUpdate:modelValue": ($event) => form.value.religion = $event,
                                  items: _ctx.religiones,
                                  label: "Religión",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: form.value.email,
                                  "onUpdate:modelValue": ($event) => form.value.email = $event,
                                  label: "Correo Electrónico",
                                  readonly: true
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: form.value.telefono1,
                                  "onUpdate:modelValue": ($event) => form.value.telefono1 = $event,
                                  label: "Teléfono Principal",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: form.value.telefono2,
                                  "onUpdate:modelValue": ($event) => form.value.telefono2 = $event,
                                  label: "Teléfono Secundario",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: form.value.direccion,
                                  "onUpdate:modelValue": ($event) => form.value.direccion = $event,
                                  label: "Dirección",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.nivel_instruccion,
                                  "onUpdate:modelValue": ($event) => form.value.nivel_instruccion = $event,
                                  items: _ctx.nivelesInstruccion,
                                  label: "Nivel de Instrucción",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.pueblo_originario,
                                  "onUpdate:modelValue": ($event) => form.value.pueblo_originario = $event,
                                  items: _ctx.pueblosOriginarios,
                                  label: "Pueblo Originario",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.prevision,
                                  "onUpdate:modelValue": ($event) => form.value.prevision = $event,
                                  items: _ctx.previsiones,
                                  label: "Previsión",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.seguro_salud,
                                  "onUpdate:modelValue": ($event) => form.value.seguro_salud = $event,
                                  items: _ctx.seguros,
                                  label: "Seguro de Salud",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_select, {
                                  modelValue: form.value.empresa,
                                  "onUpdate:modelValue": ($event) => form.value.empresa = $event,
                                  items: _ctx.empresas,
                                  label: "Empresa",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.unidad,
                                  "onUpdate:modelValue": ($event) => form.value.unidad = $event,
                                  items: _ctx.unidades,
                                  label: "Unidad",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.area,
                                  "onUpdate:modelValue": ($event) => form.value.area = $event,
                                  items: _ctx.areas,
                                  label: "Área",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_select, {
                                  modelValue: form.value.ceco,
                                  "onUpdate:modelValue": ($event) => form.value.ceco = $event,
                                  items: _ctx.cecos,
                                  label: "Centro de Costo",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                                createVNode(_component_v_select, {
                                  modelValue: form.value.afp,
                                  "onUpdate:modelValue": ($event) => form.value.afp = $event,
                                  items: _ctx.afps,
                                  label: "AFP",
                                  readonly: !editable.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, null, {
                              default: withCtx(() => [
                                !editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                  key: 0,
                                  color: "primary",
                                  onClick: ($event) => editable.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Editar Perfil ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])) : createCommentVNode("", true),
                                editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                  key: 1,
                                  color: "success",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Guardar Cambios ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                  key: 2,
                                  color: "error",
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, {
                color: "white",
                elevation: 6,
                class: "rounded-lg ma-4 pa-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_form, {
                    onSubmit: withModifiers(updatePerfil, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: form.value.nombre,
                                "onUpdate:modelValue": ($event) => form.value.nombre = $event,
                                label: "Nombre",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                              createVNode(_component_v_text_field, {
                                modelValue: form.value.apellidos,
                                "onUpdate:modelValue": ($event) => form.value.apellidos = $event,
                                label: "Apellidos",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                              createVNode(_component_v_text_field, {
                                modelValue: form.value.rut,
                                "onUpdate:modelValue": ($event) => form.value.rut = $event,
                                label: "RUT",
                                readonly: true
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.genero,
                                "onUpdate:modelValue": ($event) => form.value.genero = $event,
                                items: _ctx.generos,
                                label: "Género",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                              createVNode(_component_v_text_field, {
                                modelValue: form.value.fecha_nacimiento,
                                "onUpdate:modelValue": ($event) => form.value.fecha_nacimiento = $event,
                                label: "Fecha de Nacimiento",
                                type: "date",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.nacionalidad,
                                "onUpdate:modelValue": ($event) => form.value.nacionalidad = $event,
                                items: _ctx.nacionalidades,
                                label: "Nacionalidad",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.estado_civil,
                                "onUpdate:modelValue": ($event) => form.value.estado_civil = $event,
                                items: _ctx.estadosCiviles,
                                label: "Estado Civil",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.religion,
                                "onUpdate:modelValue": ($event) => form.value.religion = $event,
                                items: _ctx.religiones,
                                label: "Religión",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: form.value.email,
                                "onUpdate:modelValue": ($event) => form.value.email = $event,
                                label: "Correo Electrónico",
                                readonly: true
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                modelValue: form.value.telefono1,
                                "onUpdate:modelValue": ($event) => form.value.telefono1 = $event,
                                label: "Teléfono Principal",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                              createVNode(_component_v_text_field, {
                                modelValue: form.value.telefono2,
                                "onUpdate:modelValue": ($event) => form.value.telefono2 = $event,
                                label: "Teléfono Secundario",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                              createVNode(_component_v_text_field, {
                                modelValue: form.value.direccion,
                                "onUpdate:modelValue": ($event) => form.value.direccion = $event,
                                label: "Dirección",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.nivel_instruccion,
                                "onUpdate:modelValue": ($event) => form.value.nivel_instruccion = $event,
                                items: _ctx.nivelesInstruccion,
                                label: "Nivel de Instrucción",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.pueblo_originario,
                                "onUpdate:modelValue": ($event) => form.value.pueblo_originario = $event,
                                items: _ctx.pueblosOriginarios,
                                label: "Pueblo Originario",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.prevision,
                                "onUpdate:modelValue": ($event) => form.value.prevision = $event,
                                items: _ctx.previsiones,
                                label: "Previsión",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.seguro_salud,
                                "onUpdate:modelValue": ($event) => form.value.seguro_salud = $event,
                                items: _ctx.seguros,
                                label: "Seguro de Salud",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_select, {
                                modelValue: form.value.empresa,
                                "onUpdate:modelValue": ($event) => form.value.empresa = $event,
                                items: _ctx.empresas,
                                label: "Empresa",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.unidad,
                                "onUpdate:modelValue": ($event) => form.value.unidad = $event,
                                items: _ctx.unidades,
                                label: "Unidad",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.area,
                                "onUpdate:modelValue": ($event) => form.value.area = $event,
                                items: _ctx.areas,
                                label: "Área",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_select, {
                                modelValue: form.value.ceco,
                                "onUpdate:modelValue": ($event) => form.value.ceco = $event,
                                items: _ctx.cecos,
                                label: "Centro de Costo",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"]),
                              createVNode(_component_v_select, {
                                modelValue: form.value.afp,
                                "onUpdate:modelValue": ($event) => form.value.afp = $event,
                                items: _ctx.afps,
                                label: "AFP",
                                readonly: !editable.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "readonly"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              !editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                key: 0,
                                color: "primary",
                                onClick: ($event) => editable.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Editar Perfil ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])) : createCommentVNode("", true),
                              editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                key: 1,
                                color: "success",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Guardar Cambios ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              editable.value ? (openBlock(), createBlock(_component_v_btn, {
                                key: 2,
                                color: "error",
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Paciente/MiPerfilPersonalV2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MiPerfilPersonalV2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/Paciente/MiPerfilPersonalV2.vue"]]);
export {
  MiPerfilPersonalV2 as default
};
//# sourceMappingURL=MiPerfilPersonalV2-CnHwjaTh.js.map
