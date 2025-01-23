import { reactive, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-DV0u10gY.js";
import { f as fetchData, h as handlesearchItemss } from "./helper-BkHfu3mP.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./logo-DLUxz0ei.js";
import "vue-loading-overlay";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "./store-BqtSnK9e.js";
import "pinia";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "ConsultaAtencionDiaria",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      endpoints: [
        "area",
        "ceco",
        "empresa",
        "planta",
        "unidad",
        "accidente",
        "accidente_condicion",
        "calificacion",
        "derivacion",
        "medio_derivacion",
        "error_critico",
        "estado_mental",
        "fuente_incidente",
        "responsable",
        "sistema_afectado",
        "tipo_atencion",
        "tipo_licencia",
        "lugar_atencion",
        "turno"
      ],
      headers: [
        { title: "RUT", align: "center", sortable: true, key: "rut" },
        {
          title: "Nombre",
          align: "center",
          sortable: true,
          key: "nombre"
        },
        {
          title: "Apellidos",
          sortable: true,
          align: "center",
          key: "apellidos"
        },
        {
          title: "Empresa",
          sortable: true,
          align: "center",
          key: "empresa.descripcion"
        },
        {
          title: "Fecha de atención",
          sortable: true,
          align: "center",
          key: "fecha_atencion"
        },
        {
          title: "Tipo de atención",
          sortable: true,
          align: "center",
          key: "tipo_atencion.descripcion"
        },
        { title: "Acciones", align: "center", key: "actions" }
      ],
      validations: {
        rutRules: [
          (value) => {
            const regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
            if (!regex.test(value)) {
              return false;
            }
            let splitrut = value.split("-");
            let num = splitrut[0];
            let dv = splitrut[1].toLowerCase();
            let m = 0, s = 1;
            for (; num; num = Math.floor(num / 10)) {
              s = (s + num % 10 * (9 - m++ % 6)) % 11;
            }
            let dvEsperado = s ? s - 1 : "k";
            let validate = dv == dvEsperado;
            if (validate) return true;
            return "El rut es incorrecto";
          }
        ],
        startDateRules: [
          (v) => !!v || "La fecha de inicio es requerida"
          // (v) =>
          // //    new Date(v) <= new Date(fecha_endDate) ||
          //     "La fecha de inicio debe ser anterior a la fecha de término",
        ],
        endDateRules: [
          (v) => !!v || "La fecha de término es requerida"
          // (v) =>
          //     new Date(v) >= new Date(searchQuery.fecha_atencion.hasta) ||
          //     "La fecha de término debe ser posterior a la fecha de inicio",
        ]
      },
      itemsView: {
        id: null,
        paciente_id: null,
        rut: null,
        nombre: null,
        apellidos: null,
        accidente: null,
        acompanado: null,
        alerta_she: null,
        area: null,
        at_realizada_por: null,
        calificacion: null,
        ceco: null,
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
        responsable: null,
        sistema_afectado: null,
        tipo_atencion: null,
        tipo_licencia: null,
        turno: null
      },
      searchQuery: {
        rut: null,
        empresa: null,
        area: null,
        activo: "true",
        unidad: null,
        planta: null,
        ceco: null,
        lugar_atencion: null,
        tipo_atencion: null,
        fecha_atencion: {
          desde: null,
          hasta: null
        }
      },
      dialog: false,
      tableItems: [],
      formItems: [],
      editedIndex: -1,
      loadingSearch: false,
      list: [],
      valid: null,
      formTitle: "Consulta de Atenciones Diarias",
      urlSearch: "/consulta/atencion_diaria/search"
    });
    onMounted(async () => {
      state.list = await fetchData(state.endpoints);
    });
    function VerDetalles(item) {
      state.dialog = true;
      state.itemsView = { ...item };
    }
    function close() {
      state.dialog = false;
    }
    const handleSearch = async () => {
      await handlesearchItemss(state);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_download_excel = resolveComponent("download-excel");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_dialog = resolveComponent("v-dialog");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_toolbar, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_toolbar_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(state.formTitle)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(state.formTitle), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_toolbar_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(state.formTitle), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_spacer)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_toolbar, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_toolbar_title, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(state.formTitle), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_spacer)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, {
                          color: "white",
                          elevation: 4,
                          class: "rounded-lg ma-2 pa-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_form, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_container, { fluid: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card_text, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_row, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_col, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              label: "Rut",
                                                              modelValue: state.searchQuery.rut,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                              variant: "underlined",
                                                              rules: state.rutRules,
                                                              type: "text",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              items: state.list.planta,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Planta",
                                                              modelValue: state.searchQuery.planta,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                              variant: "underlined",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              class: "mt-2",
                                                              items: state.list.ceco,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Area de Trabajo (Cencos)",
                                                              variant: "underlined",
                                                              modelValue: state.searchQuery.ceco,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_switch, {
                                                              modelValue: state.searchQuery.activo,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                              "hide-details": "",
                                                              "true-value": "true",
                                                              "false-value": "false",
                                                              class: "ml-4 mt-4",
                                                              variant: "underlined",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Activo"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_text_field, {
                                                                label: "Rut",
                                                                modelValue: state.searchQuery.rut,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                                variant: "underlined",
                                                                rules: state.rutRules,
                                                                type: "text",
                                                                class: "mt-2",
                                                                clearable: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.planta,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Planta",
                                                                modelValue: state.searchQuery.planta,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                                variant: "underlined",
                                                                class: "mt-2",
                                                                clearable: ""
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                class: "mt-2",
                                                                items: state.list.ceco,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Area de Trabajo (Cencos)",
                                                                variant: "underlined",
                                                                modelValue: state.searchQuery.ceco,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                                clearable: ""
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.searchQuery.activo,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                                "hide-details": "",
                                                                "true-value": "true",
                                                                "false-value": "false",
                                                                class: "ml-4 mt-4",
                                                                variant: "underlined",
                                                                color: "green-darken-3",
                                                                inset: "",
                                                                label: "Activo"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, {
                                                        cols: "12",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              items: state.list.unidad,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Unidad",
                                                              modelValue: state.searchQuery.unidad,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                              variant: "underlined",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              items: state.list.empresa,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Empresa",
                                                              class: "mt-2",
                                                              modelValue: state.searchQuery.empresa,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                              variant: "underlined",
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              items: state.list.area,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Area",
                                                              class: "mt-2",
                                                              variant: "underlined",
                                                              modelValue: state.searchQuery.area,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_select, {
                                                                items: state.list.unidad,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Unidad",
                                                                modelValue: state.searchQuery.unidad,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                                variant: "underlined",
                                                                class: "mt-2",
                                                                clearable: ""
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.empresa,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Empresa",
                                                                class: "mt-2",
                                                                modelValue: state.searchQuery.empresa,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                                variant: "underlined",
                                                                clearable: ""
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.area,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Area",
                                                                class: "mt-2",
                                                                variant: "underlined",
                                                                modelValue: state.searchQuery.area,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                                clearable: ""
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, {
                                                        cols: "12",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.searchQuery.fecha_atencion.desde,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                              rules: state.validations.startDateRules,
                                                              label: "Fecha desde",
                                                              type: "date",
                                                              variant: "underlined",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.searchQuery.fecha_atencion.hasta,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                              rules: state.validations.endDateRules,
                                                              label: "Fecha hasta",
                                                              type: "date",
                                                              variant: "underlined",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              items: state.list.lugar_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Lugar de atencion",
                                                              class: "mt-2",
                                                              variant: "underlined",
                                                              modelValue: state.searchQuery.lugar_atencion,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              items: state.list.tipo_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Tipo de atencion",
                                                              class: "mt-2",
                                                              variant: "underlined",
                                                              modelValue: state.searchQuery.tipo_atencion,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                              clearable: ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.searchQuery.fecha_atencion.desde,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                                rules: state.validations.startDateRules,
                                                                label: "Fecha desde",
                                                                type: "date",
                                                                variant: "underlined",
                                                                class: "mt-2",
                                                                clearable: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.searchQuery.fecha_atencion.hasta,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                                rules: state.validations.endDateRules,
                                                                label: "Fecha hasta",
                                                                type: "date",
                                                                variant: "underlined",
                                                                class: "mt-2",
                                                                clearable: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.lugar_atencion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Lugar de atencion",
                                                                class: "mt-2",
                                                                variant: "underlined",
                                                                modelValue: state.searchQuery.lugar_atencion,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                                clearable: ""
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.tipo_atencion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Tipo de atencion",
                                                                class: "mt-2",
                                                                variant: "underlined",
                                                                modelValue: state.searchQuery.tipo_atencion,
                                                                "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                                clearable: ""
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          md: "3"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              label: "Rut",
                                                              modelValue: state.searchQuery.rut,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                              variant: "underlined",
                                                              rules: state.rutRules,
                                                              type: "text",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.planta,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Planta",
                                                              modelValue: state.searchQuery.planta,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                              variant: "underlined",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              class: "mt-2",
                                                              items: state.list.ceco,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Area de Trabajo (Cencos)",
                                                              variant: "underlined",
                                                              modelValue: state.searchQuery.ceco,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                              clearable: ""
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.searchQuery.activo,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                              "hide-details": "",
                                                              "true-value": "true",
                                                              "false-value": "false",
                                                              class: "ml-4 mt-4",
                                                              variant: "underlined",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Activo"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          md: "4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, {
                                                              items: state.list.unidad,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Unidad",
                                                              modelValue: state.searchQuery.unidad,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                              variant: "underlined",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.empresa,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Empresa",
                                                              class: "mt-2",
                                                              modelValue: state.searchQuery.empresa,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                              variant: "underlined",
                                                              clearable: ""
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.area,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Area",
                                                              class: "mt-2",
                                                              variant: "underlined",
                                                              modelValue: state.searchQuery.area,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                              clearable: ""
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          md: "4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.searchQuery.fecha_atencion.desde,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                              rules: state.validations.startDateRules,
                                                              label: "Fecha desde",
                                                              type: "date",
                                                              variant: "underlined",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.searchQuery.fecha_atencion.hasta,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                              rules: state.validations.endDateRules,
                                                              label: "Fecha hasta",
                                                              type: "date",
                                                              variant: "underlined",
                                                              class: "mt-2",
                                                              clearable: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.lugar_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Lugar de atencion",
                                                              class: "mt-2",
                                                              variant: "underlined",
                                                              modelValue: state.searchQuery.lugar_atencion,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                              clearable: ""
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.tipo_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Tipo de atencion",
                                                              class: "mt-2",
                                                              variant: "underlined",
                                                              modelValue: state.searchQuery.tipo_atencion,
                                                              "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                              clearable: ""
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            label: "Rut",
                                                            modelValue: state.searchQuery.rut,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                            variant: "underlined",
                                                            rules: state.rutRules,
                                                            type: "text",
                                                            class: "mt-2",
                                                            clearable: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.planta,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Planta",
                                                            modelValue: state.searchQuery.planta,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                            variant: "underlined",
                                                            class: "mt-2",
                                                            clearable: ""
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            class: "mt-2",
                                                            items: state.list.ceco,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Area de Trabajo (Cencos)",
                                                            variant: "underlined",
                                                            modelValue: state.searchQuery.ceco,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                            clearable: ""
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.searchQuery.activo,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                            "hide-details": "",
                                                            "true-value": "true",
                                                            "false-value": "false",
                                                            class: "ml-4 mt-4",
                                                            variant: "underlined",
                                                            color: "green-darken-3",
                                                            inset: "",
                                                            label: "Activo"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, {
                                                            items: state.list.unidad,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Unidad",
                                                            modelValue: state.searchQuery.unidad,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                            variant: "underlined",
                                                            class: "mt-2",
                                                            clearable: ""
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.empresa,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Empresa",
                                                            class: "mt-2",
                                                            modelValue: state.searchQuery.empresa,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                            variant: "underlined",
                                                            clearable: ""
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.area,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Area",
                                                            class: "mt-2",
                                                            variant: "underlined",
                                                            modelValue: state.searchQuery.area,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                            clearable: ""
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.searchQuery.fecha_atencion.desde,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                            rules: state.validations.startDateRules,
                                                            label: "Fecha desde",
                                                            type: "date",
                                                            variant: "underlined",
                                                            class: "mt-2",
                                                            clearable: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.searchQuery.fecha_atencion.hasta,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                            rules: state.validations.endDateRules,
                                                            label: "Fecha hasta",
                                                            type: "date",
                                                            variant: "underlined",
                                                            class: "mt-2",
                                                            clearable: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.lugar_atencion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Lugar de atencion",
                                                            class: "mt-2",
                                                            variant: "underlined",
                                                            modelValue: state.searchQuery.lugar_atencion,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                            clearable: ""
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.tipo_atencion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Tipo de atencion",
                                                            class: "mt-2",
                                                            variant: "underlined",
                                                            modelValue: state.searchQuery.tipo_atencion,
                                                            "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                            clearable: ""
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_card_actions, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  "prepend-icon": "mdi-file-search",
                                                  variant: "tonal",
                                                  color: "#009AA4",
                                                  loading: state.loadingSearch,
                                                  onClick: ($event) => handleSearch()
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Buscar `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Buscar ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  "prepend-icon": "mdi-microsoft-excel",
                                                  variant: "tonal",
                                                  color: "#009AA4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_download_excel, {
                                                        data: state.tableItems,
                                                        name: "consulta_atenciones_diarias.xls"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` Bajar archivo `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Bajar archivo ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_download_excel, {
                                                          data: state.tableItems,
                                                          name: "consulta_atenciones_diarias.xls"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Bajar archivo ")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["data"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_btn, {
                                                    "prepend-icon": "mdi-file-search",
                                                    variant: "tonal",
                                                    color: "#009AA4",
                                                    loading: state.loadingSearch,
                                                    onClick: ($event) => handleSearch()
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Buscar ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["loading", "onClick"]),
                                                  createVNode(_component_v_btn, {
                                                    "prepend-icon": "mdi-microsoft-excel",
                                                    variant: "tonal",
                                                    color: "#009AA4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_download_excel, {
                                                        data: state.tableItems,
                                                        name: "consulta_atenciones_diarias.xls"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Bajar archivo ")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["data"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          label: "Rut",
                                                          modelValue: state.searchQuery.rut,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                          variant: "underlined",
                                                          rules: state.rutRules,
                                                          type: "text",
                                                          class: "mt-2",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.planta,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Planta",
                                                          modelValue: state.searchQuery.planta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                          variant: "underlined",
                                                          class: "mt-2",
                                                          clearable: ""
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          class: "mt-2",
                                                          items: state.list.ceco,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Area de Trabajo (Cencos)",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.ceco,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                          clearable: ""
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.searchQuery.activo,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                          "hide-details": "",
                                                          "true-value": "true",
                                                          "false-value": "false",
                                                          class: "ml-4 mt-4",
                                                          variant: "underlined",
                                                          color: "green-darken-3",
                                                          inset: "",
                                                          label: "Activo"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, {
                                                          items: state.list.unidad,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Unidad",
                                                          modelValue: state.searchQuery.unidad,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                          variant: "underlined",
                                                          class: "mt-2",
                                                          clearable: ""
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.empresa,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Empresa",
                                                          class: "mt-2",
                                                          modelValue: state.searchQuery.empresa,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                          variant: "underlined",
                                                          clearable: ""
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.area,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Area",
                                                          class: "mt-2",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.area,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                          clearable: ""
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.searchQuery.fecha_atencion.desde,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                          rules: state.validations.startDateRules,
                                                          label: "Fecha desde",
                                                          type: "date",
                                                          variant: "underlined",
                                                          class: "mt-2",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.searchQuery.fecha_atencion.hasta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                          rules: state.validations.endDateRules,
                                                          label: "Fecha hasta",
                                                          type: "date",
                                                          variant: "underlined",
                                                          class: "mt-2",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.lugar_atencion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Lugar de atencion",
                                                          class: "mt-2",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.lugar_atencion,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                          clearable: ""
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.tipo_atencion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Tipo de atencion",
                                                          class: "mt-2",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.tipo_atencion,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                          clearable: ""
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                                  "prepend-icon": "mdi-file-search",
                                                  variant: "tonal",
                                                  color: "#009AA4",
                                                  loading: state.loadingSearch,
                                                  onClick: ($event) => handleSearch()
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Buscar ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["loading", "onClick"]),
                                                createVNode(_component_v_btn, {
                                                  "prepend-icon": "mdi-microsoft-excel",
                                                  variant: "tonal",
                                                  color: "#009AA4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_download_excel, {
                                                      data: state.tableItems,
                                                      name: "consulta_atenciones_diarias.xls"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Bajar archivo ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["data"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_container, { fluid: "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        label: "Rut",
                                                        modelValue: state.searchQuery.rut,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                        variant: "underlined",
                                                        rules: state.rutRules,
                                                        type: "text",
                                                        class: "mt-2",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.planta,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Planta",
                                                        modelValue: state.searchQuery.planta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                        variant: "underlined",
                                                        class: "mt-2",
                                                        clearable: ""
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        class: "mt-2",
                                                        items: state.list.ceco,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Area de Trabajo (Cencos)",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.ceco,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                        clearable: ""
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.searchQuery.activo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                        "hide-details": "",
                                                        "true-value": "true",
                                                        "false-value": "false",
                                                        class: "ml-4 mt-4",
                                                        variant: "underlined",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        label: "Activo"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        items: state.list.unidad,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Unidad",
                                                        modelValue: state.searchQuery.unidad,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                        variant: "underlined",
                                                        class: "mt-2",
                                                        clearable: ""
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.empresa,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Empresa",
                                                        class: "mt-2",
                                                        modelValue: state.searchQuery.empresa,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.area,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Area",
                                                        class: "mt-2",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.area,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                        clearable: ""
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.searchQuery.fecha_atencion.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                        rules: state.validations.startDateRules,
                                                        label: "Fecha desde",
                                                        type: "date",
                                                        variant: "underlined",
                                                        class: "mt-2",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.searchQuery.fecha_atencion.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                        rules: state.validations.endDateRules,
                                                        label: "Fecha hasta",
                                                        type: "date",
                                                        variant: "underlined",
                                                        class: "mt-2",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.lugar_atencion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Lugar de atencion",
                                                        class: "mt-2",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.lugar_atencion,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                        clearable: ""
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.tipo_atencion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Tipo de atencion",
                                                        class: "mt-2",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.tipo_atencion,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                        clearable: ""
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                                "prepend-icon": "mdi-file-search",
                                                variant: "tonal",
                                                color: "#009AA4",
                                                loading: state.loadingSearch,
                                                onClick: ($event) => handleSearch()
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Buscar ")
                                                ]),
                                                _: 1
                                              }, 8, ["loading", "onClick"]),
                                              createVNode(_component_v_btn, {
                                                "prepend-icon": "mdi-microsoft-excel",
                                                variant: "tonal",
                                                color: "#009AA4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_download_excel, {
                                                    data: state.tableItems,
                                                    name: "consulta_atenciones_diarias.xls"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Bajar archivo ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["data"])
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_container, { fluid: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_data_table, {
                                      headers: state.headers,
                                      items: state.tableItems,
                                      "sort-by": [{ key: "apellidos", order: "asc" }]
                                    }, {
                                      "item.actions": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_tooltip, {
                                            text: "Ver detalles",
                                            location: "top"
                                          }, {
                                            activator: withCtx(({ props }, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                                                  density: "compact",
                                                  color: "#009AA4",
                                                  class: "mr-2 ml-2",
                                                  icon: "mdi-eye",
                                                  variant: "tonal",
                                                  onClick: ($event) => VerDetalles(item)
                                                }), null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_btn, mergeProps(props, {
                                                    density: "compact",
                                                    color: "#009AA4",
                                                    class: "mr-2 ml-2",
                                                    icon: "mdi-eye",
                                                    variant: "tonal",
                                                    onClick: ($event) => VerDetalles(item)
                                                  }), null, 16, ["onClick"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_tooltip, {
                                              text: "Ver detalles",
                                              location: "top"
                                            }, {
                                              activator: withCtx(({ props }) => [
                                                createVNode(_component_v_btn, mergeProps(props, {
                                                  density: "compact",
                                                  color: "#009AA4",
                                                  class: "mr-2 ml-2",
                                                  icon: "mdi-eye",
                                                  variant: "tonal",
                                                  onClick: ($event) => VerDetalles(item)
                                                }), null, 16, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_data_table, {
                                        headers: state.headers,
                                        items: state.tableItems,
                                        "sort-by": [{ key: "apellidos", order: "asc" }]
                                      }, {
                                        "item.actions": withCtx(({ item }) => [
                                          createVNode(_component_v_tooltip, {
                                            text: "Ver detalles",
                                            location: "top"
                                          }, {
                                            activator: withCtx(({ props }) => [
                                              createVNode(_component_v_btn, mergeProps(props, {
                                                density: "compact",
                                                color: "#009AA4",
                                                class: "mr-2 ml-2",
                                                icon: "mdi-eye",
                                                variant: "tonal",
                                                onClick: ($event) => VerDetalles(item)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_form, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_container, { fluid: "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      label: "Rut",
                                                      modelValue: state.searchQuery.rut,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                      variant: "underlined",
                                                      rules: state.rutRules,
                                                      type: "text",
                                                      class: "mt-2",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.planta,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Planta",
                                                      modelValue: state.searchQuery.planta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                      variant: "underlined",
                                                      class: "mt-2",
                                                      clearable: ""
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      class: "mt-2",
                                                      items: state.list.ceco,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Area de Trabajo (Cencos)",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.ceco,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                      clearable: ""
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.searchQuery.activo,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                      "hide-details": "",
                                                      "true-value": "true",
                                                      "false-value": "false",
                                                      class: "ml-4 mt-4",
                                                      variant: "underlined",
                                                      color: "green-darken-3",
                                                      inset: "",
                                                      label: "Activo"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_select, {
                                                      items: state.list.unidad,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Unidad",
                                                      modelValue: state.searchQuery.unidad,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                      variant: "underlined",
                                                      class: "mt-2",
                                                      clearable: ""
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.empresa,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Empresa",
                                                      class: "mt-2",
                                                      modelValue: state.searchQuery.empresa,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                      variant: "underlined",
                                                      clearable: ""
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.area,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Area",
                                                      class: "mt-2",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.area,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                      clearable: ""
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.searchQuery.fecha_atencion.desde,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                      rules: state.validations.startDateRules,
                                                      label: "Fecha desde",
                                                      type: "date",
                                                      variant: "underlined",
                                                      class: "mt-2",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.searchQuery.fecha_atencion.hasta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                      rules: state.validations.endDateRules,
                                                      label: "Fecha hasta",
                                                      type: "date",
                                                      variant: "underlined",
                                                      class: "mt-2",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.lugar_atencion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Lugar de atencion",
                                                      class: "mt-2",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.lugar_atencion,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                      clearable: ""
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.tipo_atencion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Tipo de atencion",
                                                      class: "mt-2",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.tipo_atencion,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                      clearable: ""
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                              "prepend-icon": "mdi-file-search",
                                              variant: "tonal",
                                              color: "#009AA4",
                                              loading: state.loadingSearch,
                                              onClick: ($event) => handleSearch()
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Buscar ")
                                              ]),
                                              _: 1
                                            }, 8, ["loading", "onClick"]),
                                            createVNode(_component_v_btn, {
                                              "prepend-icon": "mdi-microsoft-excel",
                                              variant: "tonal",
                                              color: "#009AA4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_download_excel, {
                                                  data: state.tableItems,
                                                  name: "consulta_atenciones_diarias.xls"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Bajar archivo ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["data"])
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
                                createVNode(_component_v_container, { fluid: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_data_table, {
                                      headers: state.headers,
                                      items: state.tableItems,
                                      "sort-by": [{ key: "apellidos", order: "asc" }]
                                    }, {
                                      "item.actions": withCtx(({ item }) => [
                                        createVNode(_component_v_tooltip, {
                                          text: "Ver detalles",
                                          location: "top"
                                        }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(_component_v_btn, mergeProps(props, {
                                              density: "compact",
                                              color: "#009AA4",
                                              class: "mr-2 ml-2",
                                              icon: "mdi-eye",
                                              variant: "tonal",
                                              onClick: ($event) => VerDetalles(item)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_sheet, {
                            color: "white",
                            elevation: 4,
                            class: "rounded-lg ma-2 pa-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_form, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_container, { fluid: "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    label: "Rut",
                                                    modelValue: state.searchQuery.rut,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                    variant: "underlined",
                                                    rules: state.rutRules,
                                                    type: "text",
                                                    class: "mt-2",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.planta,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Planta",
                                                    modelValue: state.searchQuery.planta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                    variant: "underlined",
                                                    class: "mt-2",
                                                    clearable: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    class: "mt-2",
                                                    items: state.list.ceco,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Area de Trabajo (Cencos)",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.ceco,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                    clearable: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.searchQuery.activo,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                    "hide-details": "",
                                                    "true-value": "true",
                                                    "false-value": "false",
                                                    class: "ml-4 mt-4",
                                                    variant: "underlined",
                                                    color: "green-darken-3",
                                                    inset: "",
                                                    label: "Activo"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_select, {
                                                    items: state.list.unidad,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Unidad",
                                                    modelValue: state.searchQuery.unidad,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                    variant: "underlined",
                                                    class: "mt-2",
                                                    clearable: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.empresa,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Empresa",
                                                    class: "mt-2",
                                                    modelValue: state.searchQuery.empresa,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                    variant: "underlined",
                                                    clearable: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.area,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Area",
                                                    class: "mt-2",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.area,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                    clearable: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.searchQuery.fecha_atencion.desde,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                    rules: state.validations.startDateRules,
                                                    label: "Fecha desde",
                                                    type: "date",
                                                    variant: "underlined",
                                                    class: "mt-2",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.searchQuery.fecha_atencion.hasta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                    rules: state.validations.endDateRules,
                                                    label: "Fecha hasta",
                                                    type: "date",
                                                    variant: "underlined",
                                                    class: "mt-2",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.lugar_atencion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Lugar de atencion",
                                                    class: "mt-2",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.lugar_atencion,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                    clearable: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.tipo_atencion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Tipo de atencion",
                                                    class: "mt-2",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.tipo_atencion,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                    clearable: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                            "prepend-icon": "mdi-file-search",
                                            variant: "tonal",
                                            color: "#009AA4",
                                            loading: state.loadingSearch,
                                            onClick: ($event) => handleSearch()
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Buscar ")
                                            ]),
                                            _: 1
                                          }, 8, ["loading", "onClick"]),
                                          createVNode(_component_v_btn, {
                                            "prepend-icon": "mdi-microsoft-excel",
                                            variant: "tonal",
                                            color: "#009AA4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_download_excel, {
                                                data: state.tableItems,
                                                name: "consulta_atenciones_diarias.xls"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Bajar archivo ")
                                                ]),
                                                _: 1
                                              }, 8, ["data"])
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
                              createVNode(_component_v_container, { fluid: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_data_table, {
                                    headers: state.headers,
                                    items: state.tableItems,
                                    "sort-by": [{ key: "apellidos", order: "asc" }]
                                  }, {
                                    "item.actions": withCtx(({ item }) => [
                                      createVNode(_component_v_tooltip, {
                                        text: "Ver detalles",
                                        location: "top"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(_component_v_btn, mergeProps(props, {
                                            density: "compact",
                                            color: "#009AA4",
                                            class: "mr-2 ml-2",
                                            icon: "mdi-eye",
                                            variant: "tonal",
                                            onClick: ($event) => VerDetalles(item)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_toolbar, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_toolbar_title, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(state.formTitle), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_spacer)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_sheet, {
                          color: "white",
                          elevation: 4,
                          class: "rounded-lg ma-2 pa-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_form, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_container, { fluid: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  label: "Rut",
                                                  modelValue: state.searchQuery.rut,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                  variant: "underlined",
                                                  rules: state.rutRules,
                                                  type: "text",
                                                  class: "mt-2",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_v_select, {
                                                  items: state.list.planta,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Planta",
                                                  modelValue: state.searchQuery.planta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                  variant: "underlined",
                                                  class: "mt-2",
                                                  clearable: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  class: "mt-2",
                                                  items: state.list.ceco,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Area de Trabajo (Cencos)",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.ceco,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                  clearable: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.searchQuery.activo,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                  "hide-details": "",
                                                  "true-value": "true",
                                                  "false-value": "false",
                                                  class: "ml-4 mt-4",
                                                  variant: "underlined",
                                                  color: "green-darken-3",
                                                  inset: "",
                                                  label: "Activo"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: state.list.unidad,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Unidad",
                                                  modelValue: state.searchQuery.unidad,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                  variant: "underlined",
                                                  class: "mt-2",
                                                  clearable: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  items: state.list.empresa,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Empresa",
                                                  class: "mt-2",
                                                  modelValue: state.searchQuery.empresa,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  items: state.list.area,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Area",
                                                  class: "mt-2",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.area,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                  clearable: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.searchQuery.fecha_atencion.desde,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                  rules: state.validations.startDateRules,
                                                  label: "Fecha desde",
                                                  type: "date",
                                                  variant: "underlined",
                                                  class: "mt-2",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.searchQuery.fecha_atencion.hasta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                  rules: state.validations.endDateRules,
                                                  label: "Fecha hasta",
                                                  type: "date",
                                                  variant: "underlined",
                                                  class: "mt-2",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_v_select, {
                                                  items: state.list.lugar_atencion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Lugar de atencion",
                                                  class: "mt-2",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.lugar_atencion,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                  clearable: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  items: state.list.tipo_atencion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Tipo de atencion",
                                                  class: "mt-2",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.tipo_atencion,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                  clearable: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                          "prepend-icon": "mdi-file-search",
                                          variant: "tonal",
                                          color: "#009AA4",
                                          loading: state.loadingSearch,
                                          onClick: ($event) => handleSearch()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Buscar ")
                                          ]),
                                          _: 1
                                        }, 8, ["loading", "onClick"]),
                                        createVNode(_component_v_btn, {
                                          "prepend-icon": "mdi-microsoft-excel",
                                          variant: "tonal",
                                          color: "#009AA4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_download_excel, {
                                              data: state.tableItems,
                                              name: "consulta_atenciones_diarias.xls"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Bajar archivo ")
                                              ]),
                                              _: 1
                                            }, 8, ["data"])
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
                            createVNode(_component_v_container, { fluid: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_data_table, {
                                  headers: state.headers,
                                  items: state.tableItems,
                                  "sort-by": [{ key: "apellidos", order: "asc" }]
                                }, {
                                  "item.actions": withCtx(({ item }) => [
                                    createVNode(_component_v_tooltip, {
                                      text: "Ver detalles",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(_component_v_btn, mergeProps(props, {
                                          density: "compact",
                                          color: "#009AA4",
                                          class: "mr-2 ml-2",
                                          icon: "mdi-eye",
                                          variant: "tonal",
                                          onClick: ($event) => VerDetalles(item)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_form, { readonly: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_dialog, {
                          modelValue: state.dialog,
                          "onUpdate:modelValue": ($event) => state.dialog = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_sheet, {
                                elevation: "4",
                                class: "ma-4 pa-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_sheet, {
                                            elevation: "2",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<span class="text-h5"${_scopeId8}>${ssrInterpolate(state.formTitle)}</span>`);
                                                    } else {
                                                      return [
                                                        createVNode("span", { class: "text-h5" }, toDisplayString(state.formTitle), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "text-h5" }, toDisplayString(state.formTitle), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_card_text, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_row, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_col, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_atencion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                              label: "Fecha de atención",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.turno,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                              items: state.list.turno,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Turno",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.sistema_afectado,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                              items: state.list.sistema_afectado,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Sistema afectado",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.derivacion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                              items: state.list.derivacion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Derivación",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.medio_derivacion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                              items: state.list.medio_derivacion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Medio de derivación",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.fuente_incidente,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                              items: state.list.fuente_incidente,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Fuente de incidente",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.error_critico,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                              items: state.list.error_critico,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Error crítico",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.estado_mental,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                              items: state.list.estado_mental,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Estado Mental",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.fecha_atencion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                                label: "Fecha de atención",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.turno,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                                items: state.list.turno,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Turno",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.sistema_afectado,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                                items: state.list.sistema_afectado,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Sistema afectado",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.derivacion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                                items: state.list.derivacion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Derivación",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.medio_derivacion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                                items: state.list.medio_derivacion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Medio de derivación",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.fuente_incidente,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                                items: state.list.fuente_incidente,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Fuente de incidente",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.error_critico,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                                items: state.list.error_critico,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Error crítico",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.estado_mental,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                                items: state.list.estado_mental,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Estado Mental",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.motivo_consulta,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                              label: "Motivo de consulta",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.accidente,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                              items: state.list.accidente,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Accidente",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.medicamentos,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                              label: "Medicamento suministrados",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.accidente_condicion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                              items: state.list.accidente_condicion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Accidente ocurre por una acción o condición insegura",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.responsable,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                              items: state.list.responsable,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Responsable",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.nombre_supervisor,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                              label: "Nombre supervisor",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.at_realizada_por,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                              label: "Atención realizada por",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.motivo_consulta,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                                label: "Motivo de consulta",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.accidente,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                                items: state.list.accidente,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Accidente",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.medicamentos,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                                label: "Medicamento suministrados",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.accidente_condicion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                                items: state.list.accidente_condicion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Accidente ocurre por una acción o condición insegura",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.responsable,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                                items: state.list.responsable,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Responsable",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.nombre_supervisor,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                                label: "Nombre supervisor",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.at_realizada_por,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                                label: "Atención realizada por",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.hora_inicio,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                              label: "Hora de inicio",
                                                              type: "time",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.hora_termino,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                              label: "Hora de termino",
                                                              type: "time",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.dias_descanso,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                              label: "Días de descanso",
                                                              type: "number",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.calificacion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                              items: state.list.calificacion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Calificación",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.lugar_atencion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                              items: state.list.lugar_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Lugar de atención",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.tipo_atencion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                              items: state.list.tipo_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Tipo de atención",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.tipo_licencia,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                              items: state.list.tipo_licencia,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Tipo de Licencia",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.descripcion_breve,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                              label: "Descripción breve",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.hora_inicio,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                                label: "Hora de inicio",
                                                                type: "time",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.hora_termino,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                                label: "Hora de termino",
                                                                type: "time",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.dias_descanso,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                                label: "Días de descanso",
                                                                type: "number",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.calificacion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                                items: state.list.calificacion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Calificación",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.lugar_atencion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                                items: state.list.lugar_atencion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Lugar de atención",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.tipo_atencion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                                items: state.list.tipo_atencion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Tipo de atención",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.tipo_licencia,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                                items: state.list.tipo_licencia,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Tipo de Licencia",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.descripcion_breve,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                                label: "Descripción breve",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_switch, {
                                                              modelValue: state.itemsView.acompanado,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Acompañado/a",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_switch, {
                                                              modelValue: state.itemsView.derivacion_inmediata,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Derivación inmediata",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_switch, {
                                                              modelValue: state.itemsView.alerta_she,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Alerta SHE",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_switch, {
                                                              modelValue: state.itemsView.declaracion_completa,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Declaración completa",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_switch, {
                                                              modelValue: state.itemsView.puede_reintegrarse,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Puede reintegrarse",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_switch, {
                                                              modelValue: state.itemsView.cuenta_acr,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Cuenta ACR",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              v: "",
                                                              ariant: "solo"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.itemsView.acompanado,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Acompañado/a",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.itemsView.derivacion_inmediata,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Derivación inmediata",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.itemsView.alerta_she,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Alerta SHE",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.itemsView.declaracion_completa,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Declaración completa",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.itemsView.puede_reintegrarse,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Puede reintegrarse",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.itemsView.cuenta_acr,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Cuenta ACR",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                v: "",
                                                                ariant: "solo"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_atencion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                              label: "Fecha de atención",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.turno,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                              items: state.list.turno,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Turno",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.sistema_afectado,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                              items: state.list.sistema_afectado,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Sistema afectado",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.derivacion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                              items: state.list.derivacion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Derivación",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.medio_derivacion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                              items: state.list.medio_derivacion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Medio de derivación",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.fuente_incidente,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                              items: state.list.fuente_incidente,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Fuente de incidente",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.error_critico,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                              items: state.list.error_critico,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Error crítico",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.estado_mental,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                              items: state.list.estado_mental,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Estado Mental",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.motivo_consulta,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                              label: "Motivo de consulta",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.accidente,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                              items: state.list.accidente,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Accidente",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.medicamentos,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                              label: "Medicamento suministrados",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.accidente_condicion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                              items: state.list.accidente_condicion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Accidente ocurre por una acción o condición insegura",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.responsable,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                              items: state.list.responsable,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Responsable",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.nombre_supervisor,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                              label: "Nombre supervisor",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.at_realizada_por,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                              label: "Atención realizada por",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.hora_inicio,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                              label: "Hora de inicio",
                                                              type: "time",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.hora_termino,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                              label: "Hora de termino",
                                                              type: "time",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.dias_descanso,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                              label: "Días de descanso",
                                                              type: "number",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.calificacion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                              items: state.list.calificacion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Calificación",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.lugar_atencion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                              items: state.list.lugar_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Lugar de atención",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.tipo_atencion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                              items: state.list.tipo_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Tipo de atención",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.tipo_licencia,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                              items: state.list.tipo_licencia,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Tipo de Licencia",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.descripcion_breve,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                              label: "Descripción breve",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.itemsView.acompanado,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Acompañado/a",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.itemsView.derivacion_inmediata,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Derivación inmediata",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.itemsView.alerta_she,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Alerta SHE",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.itemsView.declaracion_completa,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Declaración completa",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.itemsView.puede_reintegrarse,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Puede reintegrarse",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.itemsView.cuenta_acr,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Cuenta ACR",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              v: "",
                                                              ariant: "solo"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.fecha_atencion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                            label: "Fecha de atención",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.turno,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                            items: state.list.turno,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Turno",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.sistema_afectado,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                            items: state.list.sistema_afectado,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Sistema afectado",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.derivacion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                            items: state.list.derivacion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Derivación",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.medio_derivacion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                            items: state.list.medio_derivacion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Medio de derivación",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.fuente_incidente,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                            items: state.list.fuente_incidente,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Fuente de incidente",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.error_critico,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                            items: state.list.error_critico,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Error crítico",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.estado_mental,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                            items: state.list.estado_mental,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Estado Mental",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.motivo_consulta,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                            label: "Motivo de consulta",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.accidente,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                            items: state.list.accidente,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Accidente",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.medicamentos,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                            label: "Medicamento suministrados",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.accidente_condicion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                            items: state.list.accidente_condicion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Accidente ocurre por una acción o condición insegura",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.responsable,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                            items: state.list.responsable,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Responsable",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.nombre_supervisor,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                            label: "Nombre supervisor",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.at_realizada_por,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                            label: "Atención realizada por",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.hora_inicio,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                            label: "Hora de inicio",
                                                            type: "time",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.hora_termino,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                            label: "Hora de termino",
                                                            type: "time",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.dias_descanso,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                            label: "Días de descanso",
                                                            type: "number",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.calificacion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                            items: state.list.calificacion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Calificación",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.lugar_atencion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                            items: state.list.lugar_atencion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Lugar de atención",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.tipo_atencion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                            items: state.list.tipo_atencion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Tipo de atención",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.tipo_licencia,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                            items: state.list.tipo_licencia,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Tipo de Licencia",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.descripcion_breve,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                            label: "Descripción breve",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.itemsView.acompanado,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Acompañado/a",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.itemsView.derivacion_inmediata,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Derivación inmediata",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.itemsView.alerta_she,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Alerta SHE",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.itemsView.declaracion_completa,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Declaración completa",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.itemsView.puede_reintegrarse,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Puede reintegrarse",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.itemsView.cuenta_acr,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Cuenta ACR",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            v: "",
                                                            ariant: "solo"
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_sheet, {
                                            elevation: "2",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card_actions, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_btn, {
                                                        class: "mr-2 ml-2",
                                                        color: "#009AA4",
                                                        text: "Cerrar",
                                                        variant: "tonal",
                                                        onClick: close
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_btn, {
                                                          class: "mr-2 ml-2",
                                                          color: "#009AA4",
                                                          text: "Cerrar",
                                                          variant: "tonal",
                                                          onClick: close
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card_actions, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        class: "mr-2 ml-2",
                                                        color: "#009AA4",
                                                        text: "Cerrar",
                                                        variant: "tonal",
                                                        onClick: close
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_sheet, {
                                              elevation: "2",
                                              class: "ma-2 pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "text-h5" }, toDisplayString(state.formTitle), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.fecha_atencion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                          label: "Fecha de atención",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.turno,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                          items: state.list.turno,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Turno",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.sistema_afectado,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                          items: state.list.sistema_afectado,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Sistema afectado",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.derivacion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                          items: state.list.derivacion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Derivación",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.medio_derivacion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                          items: state.list.medio_derivacion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Medio de derivación",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.fuente_incidente,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                          items: state.list.fuente_incidente,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Fuente de incidente",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.error_critico,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                          items: state.list.error_critico,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Error crítico",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.estado_mental,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                          items: state.list.estado_mental,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Estado Mental",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.motivo_consulta,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                          label: "Motivo de consulta",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.accidente,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                          items: state.list.accidente,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Accidente",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.medicamentos,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                          label: "Medicamento suministrados",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.accidente_condicion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                          items: state.list.accidente_condicion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Accidente ocurre por una acción o condición insegura",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.responsable,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                          items: state.list.responsable,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Responsable",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.nombre_supervisor,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                          label: "Nombre supervisor",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.at_realizada_por,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                          label: "Atención realizada por",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.hora_inicio,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                          label: "Hora de inicio",
                                                          type: "time",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.hora_termino,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                          label: "Hora de termino",
                                                          type: "time",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.dias_descanso,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                          label: "Días de descanso",
                                                          type: "number",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.calificacion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                          items: state.list.calificacion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Calificación",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.lugar_atencion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                          items: state.list.lugar_atencion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Lugar de atención",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.tipo_atencion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                          items: state.list.tipo_atencion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Tipo de atención",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.tipo_licencia,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                          items: state.list.tipo_licencia,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Tipo de Licencia",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.descripcion_breve,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                          label: "Descripción breve",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.itemsView.acompanado,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Acompañado/a",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.itemsView.derivacion_inmediata,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Derivación inmediata",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.itemsView.alerta_she,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Alerta SHE",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.itemsView.declaracion_completa,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Declaración completa",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.itemsView.puede_reintegrarse,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Puede reintegrarse",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.itemsView.cuenta_acr,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Cuenta ACR",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          v: "",
                                                          ariant: "solo"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_sheet, {
                                              elevation: "2",
                                              class: "ma-2 pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_actions, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      class: "mr-2 ml-2",
                                                      color: "#009AA4",
                                                      text: "Cerrar",
                                                      variant: "tonal",
                                                      onClick: close
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_sheet, {
                                            elevation: "2",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "text-h5" }, toDisplayString(state.formTitle), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.fecha_atencion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                        label: "Fecha de atención",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.turno,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                        items: state.list.turno,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Turno",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.sistema_afectado,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                        items: state.list.sistema_afectado,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Sistema afectado",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.derivacion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                        items: state.list.derivacion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Derivación",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.medio_derivacion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                        items: state.list.medio_derivacion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Medio de derivación",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.fuente_incidente,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                        items: state.list.fuente_incidente,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Fuente de incidente",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.error_critico,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                        items: state.list.error_critico,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Error crítico",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.estado_mental,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                        items: state.list.estado_mental,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Estado Mental",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.motivo_consulta,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                        label: "Motivo de consulta",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.accidente,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                        items: state.list.accidente,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Accidente",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.medicamentos,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                        label: "Medicamento suministrados",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.accidente_condicion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                        items: state.list.accidente_condicion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Accidente ocurre por una acción o condición insegura",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.responsable,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                        items: state.list.responsable,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Responsable",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.nombre_supervisor,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                        label: "Nombre supervisor",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.at_realizada_por,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                        label: "Atención realizada por",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.hora_inicio,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                        label: "Hora de inicio",
                                                        type: "time",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.hora_termino,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                        label: "Hora de termino",
                                                        type: "time",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.dias_descanso,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                        label: "Días de descanso",
                                                        type: "number",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.calificacion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                        items: state.list.calificacion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Calificación",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.lugar_atencion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                        items: state.list.lugar_atencion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Lugar de atención",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.tipo_atencion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                        items: state.list.tipo_atencion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Tipo de atención",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.tipo_licencia,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                        items: state.list.tipo_licencia,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Tipo de Licencia",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.descripcion_breve,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                        label: "Descripción breve",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.itemsView.acompanado,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Acompañado/a",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.itemsView.derivacion_inmediata,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Derivación inmediata",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.itemsView.alerta_she,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Alerta SHE",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.itemsView.declaracion_completa,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Declaración completa",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.itemsView.puede_reintegrarse,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Puede reintegrarse",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.itemsView.cuenta_acr,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Cuenta ACR",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        v: "",
                                                        ariant: "solo"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_sheet, {
                                            elevation: "2",
                                            class: "ma-2 pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_actions, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    class: "mr-2 ml-2",
                                                    color: "#009AA4",
                                                    text: "Cerrar",
                                                    variant: "tonal",
                                                    onClick: close
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_sheet, {
                                  elevation: "4",
                                  class: "ma-4 pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_sheet, {
                                          elevation: "2",
                                          class: "ma-2 pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "text-h5" }, toDisplayString(state.formTitle), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.fecha_atencion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                      label: "Fecha de atención",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.turno,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                      items: state.list.turno,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Turno",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.sistema_afectado,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                      items: state.list.sistema_afectado,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Sistema afectado",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.derivacion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                      items: state.list.derivacion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Derivación",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.medio_derivacion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                      items: state.list.medio_derivacion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Medio de derivación",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.fuente_incidente,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                      items: state.list.fuente_incidente,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Fuente de incidente",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.error_critico,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                      items: state.list.error_critico,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Error crítico",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.estado_mental,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                      items: state.list.estado_mental,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Estado Mental",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.motivo_consulta,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                      label: "Motivo de consulta",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.accidente,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                      items: state.list.accidente,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Accidente",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.medicamentos,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                      label: "Medicamento suministrados",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.accidente_condicion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                      items: state.list.accidente_condicion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Accidente ocurre por una acción o condición insegura",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.responsable,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                      items: state.list.responsable,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Responsable",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.nombre_supervisor,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                      label: "Nombre supervisor",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.at_realizada_por,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                      label: "Atención realizada por",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.hora_inicio,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                      label: "Hora de inicio",
                                                      type: "time",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.hora_termino,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                      label: "Hora de termino",
                                                      type: "time",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.dias_descanso,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                      label: "Días de descanso",
                                                      type: "number",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.calificacion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                      items: state.list.calificacion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Calificación",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.lugar_atencion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                      items: state.list.lugar_atencion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Lugar de atención",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.tipo_atencion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                      items: state.list.tipo_atencion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Tipo de atención",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.tipo_licencia,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                      items: state.list.tipo_licencia,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Tipo de Licencia",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.descripcion_breve,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                      label: "Descripción breve",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.itemsView.acompanado,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Acompañado/a",
                                                      color: "success",
                                                      "hide-details": "",
                                                      inset: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.itemsView.derivacion_inmediata,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Derivación inmediata",
                                                      color: "success",
                                                      "hide-details": "",
                                                      inset: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.itemsView.alerta_she,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Alerta SHE",
                                                      color: "success",
                                                      "hide-details": "",
                                                      inset: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.itemsView.declaracion_completa,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Declaración completa",
                                                      color: "success",
                                                      "hide-details": "",
                                                      inset: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.itemsView.puede_reintegrarse,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Puede reintegrarse",
                                                      color: "success",
                                                      "hide-details": "",
                                                      inset: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.itemsView.cuenta_acr,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Cuenta ACR",
                                                      color: "success",
                                                      "hide-details": "",
                                                      inset: "",
                                                      v: "",
                                                      ariant: "solo"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_sheet, {
                                          elevation: "2",
                                          class: "ma-2 pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_actions, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  class: "mr-2 ml-2",
                                                  color: "#009AA4",
                                                  text: "Cerrar",
                                                  variant: "tonal",
                                                  onClick: close
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_dialog, {
                            modelValue: state.dialog,
                            "onUpdate:modelValue": ($event) => state.dialog = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                elevation: "4",
                                class: "ma-4 pa-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_sheet, {
                                        elevation: "2",
                                        class: "ma-2 pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-h5" }, toDisplayString(state.formTitle), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.fecha_atencion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                    label: "Fecha de atención",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.turno,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                    items: state.list.turno,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Turno",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.sistema_afectado,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                    items: state.list.sistema_afectado,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Sistema afectado",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.derivacion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                    items: state.list.derivacion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Derivación",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.medio_derivacion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                    items: state.list.medio_derivacion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Medio de derivación",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.fuente_incidente,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                    items: state.list.fuente_incidente,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Fuente de incidente",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.error_critico,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                    items: state.list.error_critico,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Error crítico",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.estado_mental,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                    items: state.list.estado_mental,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Estado Mental",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.motivo_consulta,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                    label: "Motivo de consulta",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.accidente,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                    items: state.list.accidente,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Accidente",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.medicamentos,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                    label: "Medicamento suministrados",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.accidente_condicion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                    items: state.list.accidente_condicion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Accidente ocurre por una acción o condición insegura",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.responsable,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                    items: state.list.responsable,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Responsable",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.nombre_supervisor,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                    label: "Nombre supervisor",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.at_realizada_por,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                    label: "Atención realizada por",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.hora_inicio,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                    label: "Hora de inicio",
                                                    type: "time",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.hora_termino,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                    label: "Hora de termino",
                                                    type: "time",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.dias_descanso,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                    label: "Días de descanso",
                                                    type: "number",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.calificacion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                    items: state.list.calificacion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Calificación",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.lugar_atencion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                    items: state.list.lugar_atencion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Lugar de atención",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.tipo_atencion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                    items: state.list.tipo_atencion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Tipo de atención",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.tipo_licencia,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                    items: state.list.tipo_licencia,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Tipo de Licencia",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.descripcion_breve,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                    label: "Descripción breve",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.itemsView.acompanado,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Acompañado/a",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.itemsView.derivacion_inmediata,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Derivación inmediata",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.itemsView.alerta_she,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Alerta SHE",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.itemsView.declaracion_completa,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Declaración completa",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.itemsView.puede_reintegrarse,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Puede reintegrarse",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.itemsView.cuenta_acr,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Cuenta ACR",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    v: "",
                                                    ariant: "solo"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_sheet, {
                                        elevation: "2",
                                        class: "ma-2 pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_actions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                class: "mr-2 ml-2",
                                                color: "#009AA4",
                                                text: "Cerrar",
                                                variant: "tonal",
                                                onClick: close
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_dialog, {
                          modelValue: state.dialog,
                          "onUpdate:modelValue": ($event) => state.dialog = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              elevation: "4",
                              class: "ma-4 pa-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_sheet, {
                                      elevation: "2",
                                      class: "ma-2 pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-h5" }, toDisplayString(state.formTitle), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.fecha_atencion,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                  label: "Fecha de atención",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.turno,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                  items: state.list.turno,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Turno",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.sistema_afectado,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                  items: state.list.sistema_afectado,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Sistema afectado",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.derivacion,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                  items: state.list.derivacion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Derivación",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.medio_derivacion,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                  items: state.list.medio_derivacion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Medio de derivación",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.fuente_incidente,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                  items: state.list.fuente_incidente,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Fuente de incidente",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.error_critico,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                  items: state.list.error_critico,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Error crítico",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.estado_mental,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                  items: state.list.estado_mental,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Estado Mental",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.motivo_consulta,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                  label: "Motivo de consulta",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.accidente,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                  items: state.list.accidente,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Accidente",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.medicamentos,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                  label: "Medicamento suministrados",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.accidente_condicion,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                  items: state.list.accidente_condicion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Accidente ocurre por una acción o condición insegura",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.responsable,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                  items: state.list.responsable,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Responsable",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.nombre_supervisor,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                  label: "Nombre supervisor",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.at_realizada_por,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                  label: "Atención realizada por",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.hora_inicio,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                  label: "Hora de inicio",
                                                  type: "time",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.hora_termino,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                  label: "Hora de termino",
                                                  type: "time",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.dias_descanso,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                  label: "Días de descanso",
                                                  type: "number",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.calificacion,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                  items: state.list.calificacion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Calificación",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.lugar_atencion,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                  items: state.list.lugar_atencion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Lugar de atención",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.tipo_atencion,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                  items: state.list.tipo_atencion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Tipo de atención",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.tipo_licencia,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                  items: state.list.tipo_licencia,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Tipo de Licencia",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.descripcion_breve,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                  label: "Descripción breve",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.itemsView.acompanado,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                  class: "mt-2 mb-4",
                                                  label: "Acompañado/a",
                                                  color: "success",
                                                  "hide-details": "",
                                                  inset: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.itemsView.derivacion_inmediata,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                  class: "mt-2 mb-4",
                                                  label: "Derivación inmediata",
                                                  color: "success",
                                                  "hide-details": "",
                                                  inset: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.itemsView.alerta_she,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                  class: "mt-2 mb-4",
                                                  label: "Alerta SHE",
                                                  color: "success",
                                                  "hide-details": "",
                                                  inset: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.itemsView.declaracion_completa,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                  class: "mt-2 mb-4",
                                                  label: "Declaración completa",
                                                  color: "success",
                                                  "hide-details": "",
                                                  inset: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.itemsView.puede_reintegrarse,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                  class: "mt-2 mb-4",
                                                  label: "Puede reintegrarse",
                                                  color: "success",
                                                  "hide-details": "",
                                                  inset: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.itemsView.cuenta_acr,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                  class: "mt-2 mb-4",
                                                  label: "Cuenta ACR",
                                                  color: "success",
                                                  "hide-details": "",
                                                  inset: "",
                                                  v: "",
                                                  ariant: "solo"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_sheet, {
                                      elevation: "2",
                                      class: "ma-2 pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_actions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              class: "mr-2 ml-2",
                                              color: "#009AA4",
                                              text: "Cerrar",
                                              variant: "tonal",
                                              onClick: close
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_toolbar, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_toolbar_title, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(state.formTitle), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_spacer)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_sheet, {
                        color: "white",
                        elevation: 4,
                        class: "rounded-lg ma-2 pa-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_form, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_container, { fluid: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                label: "Rut",
                                                modelValue: state.searchQuery.rut,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                variant: "underlined",
                                                rules: state.rutRules,
                                                type: "text",
                                                class: "mt-2",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_v_select, {
                                                items: state.list.planta,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Planta",
                                                modelValue: state.searchQuery.planta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.planta = $event,
                                                variant: "underlined",
                                                class: "mt-2",
                                                clearable: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                class: "mt-2",
                                                items: state.list.ceco,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Area de Trabajo (Cencos)",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.ceco,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                clearable: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.searchQuery.activo,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                "hide-details": "",
                                                "true-value": "true",
                                                "false-value": "false",
                                                class: "ml-4 mt-4",
                                                variant: "underlined",
                                                color: "green-darken-3",
                                                inset: "",
                                                label: "Activo"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: state.list.unidad,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Unidad",
                                                modelValue: state.searchQuery.unidad,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                variant: "underlined",
                                                class: "mt-2",
                                                clearable: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                items: state.list.empresa,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Empresa",
                                                class: "mt-2",
                                                modelValue: state.searchQuery.empresa,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                variant: "underlined",
                                                clearable: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                items: state.list.area,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Area",
                                                class: "mt-2",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.area,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                clearable: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.searchQuery.fecha_atencion.desde,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.desde = $event,
                                                rules: state.validations.startDateRules,
                                                label: "Fecha desde",
                                                type: "date",
                                                variant: "underlined",
                                                class: "mt-2",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.searchQuery.fecha_atencion.hasta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_atencion.hasta = $event,
                                                rules: state.validations.endDateRules,
                                                label: "Fecha hasta",
                                                type: "date",
                                                variant: "underlined",
                                                class: "mt-2",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_v_select, {
                                                items: state.list.lugar_atencion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Lugar de atencion",
                                                class: "mt-2",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.lugar_atencion,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.lugar_atencion = $event,
                                                clearable: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                items: state.list.tipo_atencion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Tipo de atencion",
                                                class: "mt-2",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.tipo_atencion,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.tipo_atencion = $event,
                                                clearable: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                        "prepend-icon": "mdi-file-search",
                                        variant: "tonal",
                                        color: "#009AA4",
                                        loading: state.loadingSearch,
                                        onClick: ($event) => handleSearch()
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Buscar ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading", "onClick"]),
                                      createVNode(_component_v_btn, {
                                        "prepend-icon": "mdi-microsoft-excel",
                                        variant: "tonal",
                                        color: "#009AA4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_download_excel, {
                                            data: state.tableItems,
                                            name: "consulta_atenciones_diarias.xls"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Bajar archivo ")
                                            ]),
                                            _: 1
                                          }, 8, ["data"])
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
                          createVNode(_component_v_container, { fluid: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_data_table, {
                                headers: state.headers,
                                items: state.tableItems,
                                "sort-by": [{ key: "apellidos", order: "asc" }]
                              }, {
                                "item.actions": withCtx(({ item }) => [
                                  createVNode(_component_v_tooltip, {
                                    text: "Ver detalles",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_btn, mergeProps(props, {
                                        density: "compact",
                                        color: "#009AA4",
                                        class: "mr-2 ml-2",
                                        icon: "mdi-eye",
                                        variant: "tonal",
                                        onClick: ($event) => VerDetalles(item)
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
              }),
              createVNode(_component_v_form, { readonly: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_dialog, {
                        modelValue: state.dialog,
                        "onUpdate:modelValue": ($event) => state.dialog = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, {
                            elevation: "4",
                            class: "ma-4 pa-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, {
                                    elevation: "2",
                                    class: "ma-2 pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-h5" }, toDisplayString(state.formTitle), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.fecha_atencion,
                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_atencion = $event,
                                                label: "Fecha de atención",
                                                type: "text",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.turno,
                                                "onUpdate:modelValue": ($event) => state.itemsView.turno = $event,
                                                items: state.list.turno,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Turno",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.sistema_afectado,
                                                "onUpdate:modelValue": ($event) => state.itemsView.sistema_afectado = $event,
                                                items: state.list.sistema_afectado,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Sistema afectado",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.derivacion,
                                                "onUpdate:modelValue": ($event) => state.itemsView.derivacion = $event,
                                                items: state.list.derivacion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Derivación",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.medio_derivacion,
                                                "onUpdate:modelValue": ($event) => state.itemsView.medio_derivacion = $event,
                                                items: state.list.medio_derivacion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Medio de derivación",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.fuente_incidente,
                                                "onUpdate:modelValue": ($event) => state.itemsView.fuente_incidente = $event,
                                                items: state.list.fuente_incidente,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Fuente de incidente",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.error_critico,
                                                "onUpdate:modelValue": ($event) => state.itemsView.error_critico = $event,
                                                items: state.list.error_critico,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Error crítico",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.estado_mental,
                                                "onUpdate:modelValue": ($event) => state.itemsView.estado_mental = $event,
                                                items: state.list.estado_mental,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Estado Mental",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.motivo_consulta,
                                                "onUpdate:modelValue": ($event) => state.itemsView.motivo_consulta = $event,
                                                label: "Motivo de consulta",
                                                type: "text",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.accidente,
                                                "onUpdate:modelValue": ($event) => state.itemsView.accidente = $event,
                                                items: state.list.accidente,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Accidente",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.medicamentos,
                                                "onUpdate:modelValue": ($event) => state.itemsView.medicamentos = $event,
                                                label: "Medicamento suministrados",
                                                type: "text",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.accidente_condicion,
                                                "onUpdate:modelValue": ($event) => state.itemsView.accidente_condicion = $event,
                                                items: state.list.accidente_condicion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Accidente ocurre por una acción o condición insegura",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.responsable,
                                                "onUpdate:modelValue": ($event) => state.itemsView.responsable = $event,
                                                items: state.list.responsable,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Responsable",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.nombre_supervisor,
                                                "onUpdate:modelValue": ($event) => state.itemsView.nombre_supervisor = $event,
                                                label: "Nombre supervisor",
                                                type: "text",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.at_realizada_por,
                                                "onUpdate:modelValue": ($event) => state.itemsView.at_realizada_por = $event,
                                                label: "Atención realizada por",
                                                type: "text",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.hora_inicio,
                                                "onUpdate:modelValue": ($event) => state.itemsView.hora_inicio = $event,
                                                label: "Hora de inicio",
                                                type: "time",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.hora_termino,
                                                "onUpdate:modelValue": ($event) => state.itemsView.hora_termino = $event,
                                                label: "Hora de termino",
                                                type: "time",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.dias_descanso,
                                                "onUpdate:modelValue": ($event) => state.itemsView.dias_descanso = $event,
                                                label: "Días de descanso",
                                                type: "number",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.calificacion,
                                                "onUpdate:modelValue": ($event) => state.itemsView.calificacion = $event,
                                                items: state.list.calificacion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Calificación",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.lugar_atencion,
                                                "onUpdate:modelValue": ($event) => state.itemsView.lugar_atencion = $event,
                                                items: state.list.lugar_atencion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Lugar de atención",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.tipo_atencion,
                                                "onUpdate:modelValue": ($event) => state.itemsView.tipo_atencion = $event,
                                                items: state.list.tipo_atencion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Tipo de atención",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.tipo_licencia,
                                                "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                items: state.list.tipo_licencia,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Tipo de Licencia",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.descripcion_breve,
                                                "onUpdate:modelValue": ($event) => state.itemsView.descripcion_breve = $event,
                                                label: "Descripción breve",
                                                type: "text",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_switch, {
                                                modelValue: state.itemsView.acompanado,
                                                "onUpdate:modelValue": ($event) => state.itemsView.acompanado = $event,
                                                class: "mt-2 mb-4",
                                                label: "Acompañado/a",
                                                color: "success",
                                                "hide-details": "",
                                                inset: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.itemsView.derivacion_inmediata,
                                                "onUpdate:modelValue": ($event) => state.itemsView.derivacion_inmediata = $event,
                                                class: "mt-2 mb-4",
                                                label: "Derivación inmediata",
                                                color: "success",
                                                "hide-details": "",
                                                inset: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.itemsView.alerta_she,
                                                "onUpdate:modelValue": ($event) => state.itemsView.alerta_she = $event,
                                                class: "mt-2 mb-4",
                                                label: "Alerta SHE",
                                                color: "success",
                                                "hide-details": "",
                                                inset: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.itemsView.declaracion_completa,
                                                "onUpdate:modelValue": ($event) => state.itemsView.declaracion_completa = $event,
                                                class: "mt-2 mb-4",
                                                label: "Declaración completa",
                                                color: "success",
                                                "hide-details": "",
                                                inset: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.itemsView.puede_reintegrarse,
                                                "onUpdate:modelValue": ($event) => state.itemsView.puede_reintegrarse = $event,
                                                class: "mt-2 mb-4",
                                                label: "Puede reintegrarse",
                                                color: "success",
                                                "hide-details": "",
                                                inset: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.itemsView.cuenta_acr,
                                                "onUpdate:modelValue": ($event) => state.itemsView.cuenta_acr = $event,
                                                class: "mt-2 mb-4",
                                                label: "Cuenta ACR",
                                                color: "success",
                                                "hide-details": "",
                                                inset: "",
                                                v: "",
                                                ariant: "solo"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_sheet, {
                                    elevation: "2",
                                    class: "ma-2 pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            class: "mr-2 ml-2",
                                            color: "#009AA4",
                                            text: "Cerrar",
                                            variant: "tonal",
                                            onClick: close
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
                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Consultas/ConsultaAtencionDiaria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ConsultaAtencionDiaria = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/Consultas/ConsultaAtencionDiaria.vue"]]);
export {
  ConsultaAtencionDiaria as default
};
//# sourceMappingURL=ConsultaAtencionDiaria-C42M-iBz.js.map
