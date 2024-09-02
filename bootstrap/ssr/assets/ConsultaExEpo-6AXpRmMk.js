import { reactive, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-C6vazPI6.js";
import { f as fetchData, h as handleSearchItem } from "./helper-IGAgQiIS.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./logo-DLUxz0ei.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "./store-BqtSnK9e.js";
import "pinia";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "ConsultaExEpo",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      endpoints: [
        "area",
        "ceco",
        "bateria",
        "empresa",
        "planta",
        "unidad",
        "estado_epo",
        "semaforo",
        "tipo_examen"
      ],
      headers: [
        {
          title: "Rut",
          align: "start",
          sortable: true,
          key: "rut"
        },
        {
          title: "Nombre",
          align: "start",
          sortable: true,
          key: "nombre"
        },
        {
          title: "Apellidos",
          align: "start",
          sortable: true,
          key: "apellidos"
        },
        {
          title: "Riesgo semáforo",
          align: "start",
          sortable: true,
          key: "semaforo.descripcion"
        },
        {
          title: "Resultado",
          align: "start",
          sortable: true,
          key: "resultado"
        },
        {
          title: "Batería",
          align: "start",
          sortable: true,
          key: "bateria.descripcion"
        },
        {
          title: "Tipo de exámen",
          align: "start",
          sortable: true,
          key: "tipo_examen.descripcion"
        },
        {
          title: "Fecha recepción",
          align: "start",
          sortable: true,
          key: "fecha_recepcion"
        },
        {
          title: "Fecha vencimiento",
          align: "start",
          sortable: true,
          key: "fecha_vencimiento"
        },
        { title: "Acciones", align: "center", key: "actions" }
      ],
      searchQuery: {
        activo: "true",
        area: null,
        ceco: null,
        empresa: null,
        planta: null,
        rut: null,
        unidad: null,
        numero_solicitud: null,
        estado_epo: null,
        bateria: null,
        semaforo: null,
        resultado: "Apto",
        tipo_examen: null,
        fecha_realizacion: {
          desde: null,
          hasta: null
        },
        fecha_recepcion: {
          desde: null,
          hasta: null
        },
        fecha_solicitud: {
          desde: null,
          hasta: null
        },
        fecha_vencimiento: {
          desde: null,
          hasta: null
        }
      },
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
          let validate = dv === dvEsperado;
          if (validate) return true;
          return "El rut es incorrecto";
        }
      ],
      itemsView: {
        paciente_id: null,
        codigo_verificacion: null,
        comentario: null,
        estado_epo: null,
        fecha_realizacion: null,
        fecha_recepcion: null,
        fecha_solicitud: null,
        fecha_vencimiento: null,
        bateria: null,
        numero_solicitud: null,
        resultado: null,
        semaforo: null,
        tipo_examen: null
      },
      dialog: false,
      tableItems: [],
      formItems: [],
      editedIndex: -1,
      list: [],
      valid: null,
      formTitle: "Consulta exámenes Ocupacionales y Preocupacionales",
      urlSearch: "/consulta/exepo/search"
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
      await handleSearchItem(state);
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
      const _component_v_form = resolveComponent("v-form");
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
                              _push5(ssrRenderComponent(_component_v_container, { fluid: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Rut",
                                                        variant: "underlined",
                                                        rules: state.rutRules,
                                                        modelValue: state.searchQuery.rut,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        items: state.list.empresa,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Empresa",
                                                        modelValue: state.searchQuery.empresa,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        items: state.list.unidad,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Unidad",
                                                        modelValue: state.searchQuery.unidad,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        label: "Area",
                                                        modelValue: state.searchQuery.area,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                        variant: "underlined",
                                                        items: state.list.area,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        label: "Area (cecos)",
                                                        modelValue: state.searchQuery.ceco,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                        variant: "underlined",
                                                        items: state.list.ceco,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_switch, {
                                                        modelValue: state.searchQuery.activo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                        "hide-details": "",
                                                        "true-value": "true",
                                                        "false-value": "false",
                                                        class: "ml-4 mt-4",
                                                        variant: "underlined",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        clearable: "",
                                                        label: "Activo"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_switch, {
                                                        modelValue: state.searchQuery.resultado,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.resultado = $event,
                                                        "hide-details": "",
                                                        "true-value": "Apto",
                                                        "false-value": "No apto",
                                                        class: "ml-4 mt-4",
                                                        variant: "underlined",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        clearable: "",
                                                        label: `Resultado: ${state.searchQuery.resultado.toString()}`
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          label: "Rut",
                                                          variant: "underlined",
                                                          rules: state.rutRules,
                                                          modelValue: state.searchQuery.rut,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                          clearable: ""
                                                        }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.empresa,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Empresa",
                                                          modelValue: state.searchQuery.empresa,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                          variant: "underlined",
                                                          clearable: ""
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.unidad,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Unidad",
                                                          modelValue: state.searchQuery.unidad,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                          variant: "underlined",
                                                          clearable: ""
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          label: "Area",
                                                          modelValue: state.searchQuery.area,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                          variant: "underlined",
                                                          items: state.list.area,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          label: "Area (cecos)",
                                                          modelValue: state.searchQuery.ceco,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                          variant: "underlined",
                                                          items: state.list.ceco,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                                                          clearable: "",
                                                          label: "Activo"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.searchQuery.resultado,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.resultado = $event,
                                                          "hide-details": "",
                                                          "true-value": "Apto",
                                                          "false-value": "No apto",
                                                          class: "ml-4 mt-4",
                                                          variant: "underlined",
                                                          color: "green-darken-3",
                                                          inset: "",
                                                          clearable: "",
                                                          label: `Resultado: ${state.searchQuery.resultado.toString()}`
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Fecha realizacion (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_realizacion.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.desde = $event,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Fecha realizacion (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_realizacion.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.hasta = $event,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Fecha recepción (desde)",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.fecha_recepcion.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                        clearable: "",
                                                        type: "date"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Fecha recepción (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Fecha solicitud (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_solicitud.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.desde = $event,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Fecha solicitud (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_solicitud.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.hasta = $event,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Fecha vencimiento (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_vencimiento.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.desde = $event,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Fecha vencimiento (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_vencimiento.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.hasta = $event,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          label: "Fecha realizacion (desde)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_realizacion.desde,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.desde = $event,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Fecha realizacion (hasta)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_realizacion.hasta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.hasta = $event,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Fecha recepción (desde)",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.fecha_recepcion.desde,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                          clearable: "",
                                                          type: "date"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Fecha recepción (hasta)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Fecha solicitud (desde)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_solicitud.desde,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.desde = $event,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Fecha solicitud (hasta)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_solicitud.hasta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.hasta = $event,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Fecha vencimiento (desde)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_vencimiento.desde,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.desde = $event,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Fecha vencimiento (hasta)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_vencimiento.hasta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.hasta = $event,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        label: "Estado EPO",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.estado_epo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.estado_epo = $event,
                                                        items: state.list.estado_epo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        label: "Bateria",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.bateria,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.bateria = $event,
                                                        items: state.list.bateria,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        single: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        label: "Tipo de exámen",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.tipo_examen,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.tipo_examen = $event,
                                                        items: state.list.tipo_examen,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        single: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        label: "Riesgo Semáforo",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.semaforo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.semaforo = $event,
                                                        items: state.list.semaforo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        single: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Número de solicitud",
                                                        variant: "underlined",
                                                        type: "number",
                                                        modelValue: state.searchQuery.numero_solicitud,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.numero_solicitud = $event,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_select, {
                                                          label: "Estado EPO",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.estado_epo,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.estado_epo = $event,
                                                          items: state.list.estado_epo,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          label: "Bateria",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.bateria,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.bateria = $event,
                                                          items: state.list.bateria,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          single: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          label: "Tipo de exámen",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.tipo_examen,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.tipo_examen = $event,
                                                          items: state.list.tipo_examen,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          single: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          label: "Riesgo Semáforo",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.semaforo,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.semaforo = $event,
                                                          items: state.list.semaforo,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          single: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Número de solicitud",
                                                          variant: "underlined",
                                                          type: "number",
                                                          modelValue: state.searchQuery.numero_solicitud,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.numero_solicitud = $event,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        label: "Rut",
                                                        variant: "underlined",
                                                        rules: state.rutRules,
                                                        modelValue: state.searchQuery.rut,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                        clearable: ""
                                                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.empresa,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Empresa",
                                                        modelValue: state.searchQuery.empresa,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.unidad,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Unidad",
                                                        modelValue: state.searchQuery.unidad,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        label: "Area",
                                                        modelValue: state.searchQuery.area,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                        variant: "underlined",
                                                        items: state.list.area,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        label: "Area (cecos)",
                                                        modelValue: state.searchQuery.ceco,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                        variant: "underlined",
                                                        items: state.list.ceco,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                                                        clearable: "",
                                                        label: "Activo"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.searchQuery.resultado,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.resultado = $event,
                                                        "hide-details": "",
                                                        "true-value": "Apto",
                                                        "false-value": "No apto",
                                                        class: "ml-4 mt-4",
                                                        variant: "underlined",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        clearable: "",
                                                        label: `Resultado: ${state.searchQuery.resultado.toString()}`
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        label: "Fecha realizacion (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_realizacion.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.desde = $event,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Fecha realizacion (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_realizacion.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.hasta = $event,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Fecha recepción (desde)",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.fecha_recepcion.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                        clearable: "",
                                                        type: "date"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Fecha recepción (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Fecha solicitud (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_solicitud.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.desde = $event,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Fecha solicitud (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_solicitud.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.hasta = $event,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Fecha vencimiento (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_vencimiento.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.desde = $event,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Fecha vencimiento (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_vencimiento.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.hasta = $event,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        label: "Estado EPO",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.estado_epo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.estado_epo = $event,
                                                        items: state.list.estado_epo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        label: "Bateria",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.bateria,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.bateria = $event,
                                                        items: state.list.bateria,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        single: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        label: "Tipo de exámen",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.tipo_examen,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.tipo_examen = $event,
                                                        items: state.list.tipo_examen,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        single: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        label: "Riesgo Semáforo",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.semaforo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.semaforo = $event,
                                                        items: state.list.semaforo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        single: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Número de solicitud",
                                                        variant: "underlined",
                                                        type: "number",
                                                        modelValue: state.searchQuery.numero_solicitud,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.numero_solicitud = $event,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      label: "Rut",
                                                      variant: "underlined",
                                                      rules: state.rutRules,
                                                      modelValue: state.searchQuery.rut,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                      clearable: ""
                                                    }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.empresa,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Empresa",
                                                      modelValue: state.searchQuery.empresa,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                      variant: "underlined",
                                                      clearable: ""
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.unidad,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Unidad",
                                                      modelValue: state.searchQuery.unidad,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                      variant: "underlined",
                                                      clearable: ""
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      label: "Area",
                                                      modelValue: state.searchQuery.area,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                      variant: "underlined",
                                                      items: state.list.area,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      label: "Area (cecos)",
                                                      modelValue: state.searchQuery.ceco,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                      variant: "underlined",
                                                      items: state.list.ceco,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                                                      clearable: "",
                                                      label: "Activo"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.searchQuery.resultado,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.resultado = $event,
                                                      "hide-details": "",
                                                      "true-value": "Apto",
                                                      "false-value": "No apto",
                                                      class: "ml-4 mt-4",
                                                      variant: "underlined",
                                                      color: "green-darken-3",
                                                      inset: "",
                                                      clearable: "",
                                                      label: `Resultado: ${state.searchQuery.resultado.toString()}`
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      label: "Fecha realizacion (desde)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_realizacion.desde,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.desde = $event,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      label: "Fecha realizacion (hasta)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_realizacion.hasta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.hasta = $event,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      label: "Fecha recepción (desde)",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.fecha_recepcion.desde,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                      clearable: "",
                                                      type: "date"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      label: "Fecha recepción (hasta)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      label: "Fecha solicitud (desde)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_solicitud.desde,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.desde = $event,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      label: "Fecha solicitud (hasta)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_solicitud.hasta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.hasta = $event,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      label: "Fecha vencimiento (desde)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_vencimiento.desde,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.desde = $event,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      label: "Fecha vencimiento (hasta)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_vencimiento.hasta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.hasta = $event,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_select, {
                                                      label: "Estado EPO",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.estado_epo,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.estado_epo = $event,
                                                      items: state.list.estado_epo,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      label: "Bateria",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.bateria,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.bateria = $event,
                                                      items: state.list.bateria,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      single: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      label: "Tipo de exámen",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.tipo_examen,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.tipo_examen = $event,
                                                      items: state.list.tipo_examen,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      single: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      label: "Riesgo Semáforo",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.semaforo,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.semaforo = $event,
                                                      items: state.list.semaforo,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      single: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_text_field, {
                                                      label: "Número de solicitud",
                                                      variant: "underlined",
                                                      type: "number",
                                                      modelValue: state.searchQuery.numero_solicitud,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.numero_solicitud = $event,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_actions, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            "prepend-icon": "mdi-file-search",
                                            variant: "tonal",
                                            color: "#009AA4",
                                            loading: state.loadingSearch,
                                            onClick: handleSearch
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Buscar `);
                                              } else {
                                                return [
                                                  createTextVNode(" Buscar ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            "prepend-icon": "mdi-microsoft-excel",
                                            variant: "tonal",
                                            color: "#009AA4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_download_excel, {
                                                  data: state.tableItems,
                                                  name: "consulta_exepo.xls"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Bajar archivo `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Bajar archivo ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_download_excel, {
                                                    data: state.tableItems,
                                                    name: "consulta_exepo.xls"
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_btn, {
                                              "prepend-icon": "mdi-file-search",
                                              variant: "tonal",
                                              color: "#009AA4",
                                              loading: state.loadingSearch,
                                              onClick: handleSearch
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Buscar ")
                                              ]),
                                              _: 1
                                            }, 8, ["loading"]),
                                            createVNode(_component_v_btn, {
                                              "prepend-icon": "mdi-microsoft-excel",
                                              variant: "tonal",
                                              color: "#009AA4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_download_excel, {
                                                  data: state.tableItems,
                                                  name: "consulta_exepo.xls"
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    label: "Rut",
                                                    variant: "underlined",
                                                    rules: state.rutRules,
                                                    modelValue: state.searchQuery.rut,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                    clearable: ""
                                                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.empresa,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Empresa",
                                                    modelValue: state.searchQuery.empresa,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                    variant: "underlined",
                                                    clearable: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.unidad,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Unidad",
                                                    modelValue: state.searchQuery.unidad,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                    variant: "underlined",
                                                    clearable: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    label: "Area",
                                                    modelValue: state.searchQuery.area,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                    variant: "underlined",
                                                    items: state.list.area,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    label: "Area (cecos)",
                                                    modelValue: state.searchQuery.ceco,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                    variant: "underlined",
                                                    items: state.list.ceco,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                                                    clearable: "",
                                                    label: "Activo"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.searchQuery.resultado,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.resultado = $event,
                                                    "hide-details": "",
                                                    "true-value": "Apto",
                                                    "false-value": "No apto",
                                                    class: "ml-4 mt-4",
                                                    variant: "underlined",
                                                    color: "green-darken-3",
                                                    inset: "",
                                                    clearable: "",
                                                    label: `Resultado: ${state.searchQuery.resultado.toString()}`
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    label: "Fecha realizacion (desde)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_realizacion.desde,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.desde = $event,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    label: "Fecha realizacion (hasta)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_realizacion.hasta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.hasta = $event,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    label: "Fecha recepción (desde)",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.fecha_recepcion.desde,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                    clearable: "",
                                                    type: "date"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    label: "Fecha recepción (hasta)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    label: "Fecha solicitud (desde)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_solicitud.desde,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.desde = $event,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    label: "Fecha solicitud (hasta)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_solicitud.hasta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.hasta = $event,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    label: "Fecha vencimiento (desde)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_vencimiento.desde,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.desde = $event,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    label: "Fecha vencimiento (hasta)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_vencimiento.hasta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.hasta = $event,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_select, {
                                                    label: "Estado EPO",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.estado_epo,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.estado_epo = $event,
                                                    items: state.list.estado_epo,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    label: "Bateria",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.bateria,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.bateria = $event,
                                                    items: state.list.bateria,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    single: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    label: "Tipo de exámen",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.tipo_examen,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.tipo_examen = $event,
                                                    items: state.list.tipo_examen,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    single: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    label: "Riesgo Semáforo",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.semaforo,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.semaforo = $event,
                                                    items: state.list.semaforo,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    single: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_text_field, {
                                                    label: "Número de solicitud",
                                                    variant: "underlined",
                                                    type: "number",
                                                    modelValue: state.searchQuery.numero_solicitud,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.numero_solicitud = $event,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            "prepend-icon": "mdi-file-search",
                                            variant: "tonal",
                                            color: "#009AA4",
                                            loading: state.loadingSearch,
                                            onClick: handleSearch
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Buscar ")
                                            ]),
                                            _: 1
                                          }, 8, ["loading"]),
                                          createVNode(_component_v_btn, {
                                            "prepend-icon": "mdi-microsoft-excel",
                                            variant: "tonal",
                                            color: "#009AA4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_download_excel, {
                                                data: state.tableItems,
                                                name: "consulta_exepo.xls"
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
                                createVNode(_component_v_container, { fluid: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  label: "Rut",
                                                  variant: "underlined",
                                                  rules: state.rutRules,
                                                  modelValue: state.searchQuery.rut,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                  clearable: ""
                                                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  items: state.list.empresa,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Empresa",
                                                  modelValue: state.searchQuery.empresa,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  items: state.list.unidad,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Unidad",
                                                  modelValue: state.searchQuery.unidad,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  label: "Area",
                                                  modelValue: state.searchQuery.area,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                  variant: "underlined",
                                                  items: state.list.area,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  label: "Area (cecos)",
                                                  modelValue: state.searchQuery.ceco,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                  variant: "underlined",
                                                  items: state.list.ceco,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                                                  clearable: "",
                                                  label: "Activo"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.searchQuery.resultado,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.resultado = $event,
                                                  "hide-details": "",
                                                  "true-value": "Apto",
                                                  "false-value": "No apto",
                                                  class: "ml-4 mt-4",
                                                  variant: "underlined",
                                                  color: "green-darken-3",
                                                  inset: "",
                                                  clearable: "",
                                                  label: `Resultado: ${state.searchQuery.resultado.toString()}`
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  label: "Fecha realizacion (desde)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_realizacion.desde,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.desde = $event,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  label: "Fecha realizacion (hasta)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_realizacion.hasta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.hasta = $event,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  label: "Fecha recepción (desde)",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.fecha_recepcion.desde,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                  clearable: "",
                                                  type: "date"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  label: "Fecha recepción (hasta)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  label: "Fecha solicitud (desde)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_solicitud.desde,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.desde = $event,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  label: "Fecha solicitud (hasta)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_solicitud.hasta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.hasta = $event,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  label: "Fecha vencimiento (desde)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_vencimiento.desde,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.desde = $event,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  label: "Fecha vencimiento (hasta)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_vencimiento.hasta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.hasta = $event,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  label: "Estado EPO",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.estado_epo,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.estado_epo = $event,
                                                  items: state.list.estado_epo,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  label: "Bateria",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.bateria,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.bateria = $event,
                                                  items: state.list.bateria,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  clearable: "",
                                                  single: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  label: "Tipo de exámen",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.tipo_examen,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.tipo_examen = $event,
                                                  items: state.list.tipo_examen,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  clearable: "",
                                                  single: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  label: "Riesgo Semáforo",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.semaforo,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.semaforo = $event,
                                                  items: state.list.semaforo,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  clearable: "",
                                                  single: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_text_field, {
                                                  label: "Número de solicitud",
                                                  variant: "underlined",
                                                  type: "number",
                                                  modelValue: state.searchQuery.numero_solicitud,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.numero_solicitud = $event,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_actions, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          "prepend-icon": "mdi-file-search",
                                          variant: "tonal",
                                          color: "#009AA4",
                                          loading: state.loadingSearch,
                                          onClick: handleSearch
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Buscar ")
                                          ]),
                                          _: 1
                                        }, 8, ["loading"]),
                                        createVNode(_component_v_btn, {
                                          "prepend-icon": "mdi-microsoft-excel",
                                          variant: "tonal",
                                          color: "#009AA4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_download_excel, {
                                              data: state.tableItems,
                                              name: "consulta_exepo.xls"
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
                                  _: 2
                                }, 1024),
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
                              createVNode(_component_v_container, { fluid: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                label: "Rut",
                                                variant: "underlined",
                                                rules: state.rutRules,
                                                modelValue: state.searchQuery.rut,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                clearable: ""
                                              }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                items: state.list.empresa,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Empresa",
                                                modelValue: state.searchQuery.empresa,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                variant: "underlined",
                                                clearable: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                items: state.list.unidad,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Unidad",
                                                modelValue: state.searchQuery.unidad,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                variant: "underlined",
                                                clearable: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                label: "Area",
                                                modelValue: state.searchQuery.area,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                variant: "underlined",
                                                items: state.list.area,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                label: "Area (cecos)",
                                                modelValue: state.searchQuery.ceco,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                variant: "underlined",
                                                items: state.list.ceco,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                                                clearable: "",
                                                label: "Activo"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.searchQuery.resultado,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.resultado = $event,
                                                "hide-details": "",
                                                "true-value": "Apto",
                                                "false-value": "No apto",
                                                class: "ml-4 mt-4",
                                                variant: "underlined",
                                                color: "green-darken-3",
                                                inset: "",
                                                clearable: "",
                                                label: `Resultado: ${state.searchQuery.resultado.toString()}`
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                label: "Fecha realizacion (desde)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_realizacion.desde,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.desde = $event,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                label: "Fecha realizacion (hasta)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_realizacion.hasta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.hasta = $event,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                label: "Fecha recepción (desde)",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.fecha_recepcion.desde,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                clearable: "",
                                                type: "date"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                label: "Fecha recepción (hasta)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                label: "Fecha solicitud (desde)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_solicitud.desde,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.desde = $event,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                label: "Fecha solicitud (hasta)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_solicitud.hasta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.hasta = $event,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                label: "Fecha vencimiento (desde)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_vencimiento.desde,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.desde = $event,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                label: "Fecha vencimiento (hasta)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_vencimiento.hasta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.hasta = $event,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                label: "Estado EPO",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.estado_epo,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.estado_epo = $event,
                                                items: state.list.estado_epo,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                label: "Bateria",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.bateria,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.bateria = $event,
                                                items: state.list.bateria,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                clearable: "",
                                                single: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                label: "Tipo de exámen",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.tipo_examen,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.tipo_examen = $event,
                                                items: state.list.tipo_examen,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                clearable: "",
                                                single: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                label: "Riesgo Semáforo",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.semaforo,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.semaforo = $event,
                                                items: state.list.semaforo,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                clearable: "",
                                                single: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_text_field, {
                                                label: "Número de solicitud",
                                                variant: "underlined",
                                                type: "number",
                                                modelValue: state.searchQuery.numero_solicitud,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.numero_solicitud = $event,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        "prepend-icon": "mdi-file-search",
                                        variant: "tonal",
                                        color: "#009AA4",
                                        loading: state.loadingSearch,
                                        onClick: handleSearch
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Buscar ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"]),
                                      createVNode(_component_v_btn, {
                                        "prepend-icon": "mdi-microsoft-excel",
                                        variant: "tonal",
                                        color: "#009AA4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_download_excel, {
                                            data: state.tableItems,
                                            name: "consulta_exepo.xls"
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
                                _: 2
                              }, 1024),
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
                            _: 2
                          }, 1024)
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
                            createVNode(_component_v_container, { fluid: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              label: "Rut",
                                              variant: "underlined",
                                              rules: state.rutRules,
                                              modelValue: state.searchQuery.rut,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                              clearable: ""
                                            }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_select, {
                                              items: state.list.empresa,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              label: "Empresa",
                                              modelValue: state.searchQuery.empresa,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                              variant: "underlined",
                                              clearable: ""
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_select, {
                                              items: state.list.unidad,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              label: "Unidad",
                                              modelValue: state.searchQuery.unidad,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                              variant: "underlined",
                                              clearable: ""
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_select, {
                                              label: "Area",
                                              modelValue: state.searchQuery.area,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                              variant: "underlined",
                                              items: state.list.area,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_select, {
                                              label: "Area (cecos)",
                                              modelValue: state.searchQuery.ceco,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                              variant: "underlined",
                                              items: state.list.ceco,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                                              clearable: "",
                                              label: "Activo"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_switch, {
                                              modelValue: state.searchQuery.resultado,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.resultado = $event,
                                              "hide-details": "",
                                              "true-value": "Apto",
                                              "false-value": "No apto",
                                              class: "ml-4 mt-4",
                                              variant: "underlined",
                                              color: "green-darken-3",
                                              inset: "",
                                              clearable: "",
                                              label: `Resultado: ${state.searchQuery.resultado.toString()}`
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              label: "Fecha realizacion (desde)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_realizacion.desde,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.desde = $event,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              label: "Fecha realizacion (hasta)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_realizacion.hasta,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.hasta = $event,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              label: "Fecha recepción (desde)",
                                              variant: "underlined",
                                              modelValue: state.searchQuery.fecha_recepcion.desde,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                              clearable: "",
                                              type: "date"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              label: "Fecha recepción (hasta)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_recepcion.hasta,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              label: "Fecha solicitud (desde)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_solicitud.desde,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.desde = $event,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              label: "Fecha solicitud (hasta)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_solicitud.hasta,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.hasta = $event,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              label: "Fecha vencimiento (desde)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_vencimiento.desde,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.desde = $event,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              label: "Fecha vencimiento (hasta)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_vencimiento.hasta,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.hasta = $event,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              label: "Estado EPO",
                                              variant: "underlined",
                                              modelValue: state.searchQuery.estado_epo,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.estado_epo = $event,
                                              items: state.list.estado_epo,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_select, {
                                              label: "Bateria",
                                              variant: "underlined",
                                              modelValue: state.searchQuery.bateria,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.bateria = $event,
                                              items: state.list.bateria,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              clearable: "",
                                              single: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_select, {
                                              label: "Tipo de exámen",
                                              variant: "underlined",
                                              modelValue: state.searchQuery.tipo_examen,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.tipo_examen = $event,
                                              items: state.list.tipo_examen,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              clearable: "",
                                              single: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_select, {
                                              label: "Riesgo Semáforo",
                                              variant: "underlined",
                                              modelValue: state.searchQuery.semaforo,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.semaforo = $event,
                                              items: state.list.semaforo,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              clearable: "",
                                              single: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_text_field, {
                                              label: "Número de solicitud",
                                              variant: "underlined",
                                              type: "number",
                                              modelValue: state.searchQuery.numero_solicitud,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.numero_solicitud = $event,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      "prepend-icon": "mdi-file-search",
                                      variant: "tonal",
                                      color: "#009AA4",
                                      loading: state.loadingSearch,
                                      onClick: handleSearch
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Buscar ")
                                      ]),
                                      _: 1
                                    }, 8, ["loading"]),
                                    createVNode(_component_v_btn, {
                                      "prepend-icon": "mdi-microsoft-excel",
                                      variant: "tonal",
                                      color: "#009AA4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_download_excel, {
                                          data: state.tableItems,
                                          name: "consulta_exepo.xls"
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
                              _: 2
                            }, 1024),
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
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_dialog, {
                    modelValue: state.dialog,
                    "onUpdate:modelValue": ($event) => state.dialog = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, {
                          elevation: "4",
                          class: "ma-4 pa-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_form, { readonly: "" }, {
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
                                                _push8(ssrRenderComponent(_component_v_form, { readonly: "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_row, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_col, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.itemsView.codigo_verificacion,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                                    label: "Cod. verif.",
                                                                    type: "number",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.itemsView.numero_solicitud,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                                    label: "N° solicitud",
                                                                    type: "number",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    items: state.list.estado_epo,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.itemsView.estado_epo,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                                    label: "Estado",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    items: state.list.bateria,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.itemsView.bateria,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                                    label: "Batería",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    items: state.list.semaforo,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.itemsView.semaforo,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                                    label: "Semáforo",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    items: state.list.tipo_examen,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.itemsView.tipo_examen,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                                    label: "Tipo de exámen",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.itemsView.codigo_verificacion,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                                      label: "Cod. verif.",
                                                                      type: "number",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.itemsView.numero_solicitud,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                                      label: "N° solicitud",
                                                                      type: "number",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.estado_epo,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.itemsView.estado_epo,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                                      label: "Estado",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.bateria,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.itemsView.bateria,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                                      label: "Batería",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.semaforo,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.itemsView.semaforo,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                                      label: "Semáforo",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.tipo_examen,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.itemsView.tipo_examen,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                                      label: "Tipo de exámen",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_col, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.itemsView.fecha_realizacion,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                                    label: "Fecha de realización",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.itemsView.fecha_recepcion,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                                    label: "Fecha recepción",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.itemsView.fecha_solicitud,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                                    label: "Fecha solicitud",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.itemsView.fecha_vencimiento,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                                    label: "Fecha vencimiento",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.itemsView.comentario,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                                    label: "Comentario",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_switch, {
                                                                    modelValue: state.itemsView.resultado,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                                    class: "mb-4",
                                                                    label: "Apto",
                                                                    color: "success",
                                                                    inset: ""
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.itemsView.fecha_realizacion,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                                      label: "Fecha de realización",
                                                                      type: "date",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.itemsView.fecha_recepcion,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                                      label: "Fecha recepción",
                                                                      type: "date",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.itemsView.fecha_solicitud,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                                      label: "Fecha solicitud",
                                                                      type: "date",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.itemsView.fecha_vencimiento,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                                      label: "Fecha vencimiento",
                                                                      type: "date",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.itemsView.comentario,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                                      label: "Comentario",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.itemsView.resultado,
                                                                      "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                                      class: "mb-4",
                                                                      label: "Apto",
                                                                      color: "success",
                                                                      inset: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.itemsView.codigo_verificacion,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                                    label: "Cod. verif.",
                                                                    type: "number",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.itemsView.numero_solicitud,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                                    label: "N° solicitud",
                                                                    type: "number",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.estado_epo,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.itemsView.estado_epo,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                                    label: "Estado",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.bateria,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.itemsView.bateria,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                                    label: "Batería",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.semaforo,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.itemsView.semaforo,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                                    label: "Semáforo",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.tipo_examen,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.itemsView.tipo_examen,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                                    label: "Tipo de exámen",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.itemsView.fecha_realizacion,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                                    label: "Fecha de realización",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.itemsView.fecha_recepcion,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                                    label: "Fecha recepción",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.itemsView.fecha_solicitud,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                                    label: "Fecha solicitud",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.itemsView.fecha_vencimiento,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                                    label: "Fecha vencimiento",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.itemsView.comentario,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                                    label: "Comentario",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.itemsView.resultado,
                                                                    "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                                    class: "mb-4",
                                                                    label: "Apto",
                                                                    color: "success",
                                                                    inset: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_row, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.itemsView.codigo_verificacion,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                                  label: "Cod. verif.",
                                                                  type: "number",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.itemsView.numero_solicitud,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                                  label: "N° solicitud",
                                                                  type: "number",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.estado_epo,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.itemsView.estado_epo,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                                  label: "Estado",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.bateria,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.itemsView.bateria,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                                  label: "Batería",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.semaforo,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.itemsView.semaforo,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                                  label: "Semáforo",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.tipo_examen,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.itemsView.tipo_examen,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                                  label: "Tipo de exámen",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.itemsView.fecha_realizacion,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                                  label: "Fecha de realización",
                                                                  type: "date",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.itemsView.fecha_recepcion,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                                  label: "Fecha recepción",
                                                                  type: "date",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.itemsView.fecha_solicitud,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                                  label: "Fecha solicitud",
                                                                  type: "date",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.itemsView.fecha_vencimiento,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                                  label: "Fecha vencimiento",
                                                                  type: "date",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.itemsView.comentario,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                                  label: "Comentario",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.itemsView.resultado,
                                                                  "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                                  class: "mb-4",
                                                                  label: "Apto",
                                                                  color: "success",
                                                                  inset: ""
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_form, { readonly: "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.codigo_verificacion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                                label: "Cod. verif.",
                                                                type: "number",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.numero_solicitud,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                                label: "N° solicitud",
                                                                type: "number",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.estado_epo,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.itemsView.estado_epo,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                                label: "Estado",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.bateria,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.itemsView.bateria,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                                label: "Batería",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.semaforo,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.itemsView.semaforo,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                                label: "Semáforo",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.tipo_examen,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.itemsView.tipo_examen,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                                label: "Tipo de exámen",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.fecha_realizacion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                                label: "Fecha de realización",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.fecha_recepcion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                                label: "Fecha recepción",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.fecha_solicitud,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                                label: "Fecha solicitud",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.fecha_vencimiento,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                                label: "Fecha vencimiento",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.comentario,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                                label: "Comentario",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.itemsView.resultado,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                                class: "mb-4",
                                                                label: "Apto",
                                                                color: "success",
                                                                inset: ""
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
                                                        onClick: ($event) => close()
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_btn, {
                                                          class: "mr-2 ml-2",
                                                          color: "#009AA4",
                                                          text: "Cerrar",
                                                          variant: "tonal",
                                                          onClick: ($event) => close()
                                                        }, null, 8, ["onClick"])
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
                                                        onClick: ($event) => close()
                                                      }, null, 8, ["onClick"])
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
                                                createVNode(_component_v_form, { readonly: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.codigo_verificacion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                              label: "Cod. verif.",
                                                              type: "number",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.numero_solicitud,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                              label: "N° solicitud",
                                                              type: "number",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.estado_epo,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.itemsView.estado_epo,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                              label: "Estado",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.bateria,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.itemsView.bateria,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                              label: "Batería",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.semaforo,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.itemsView.semaforo,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                              label: "Semáforo",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.tipo_examen,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.itemsView.tipo_examen,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                              label: "Tipo de exámen",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_realizacion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                              label: "Fecha de realización",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_recepcion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                              label: "Fecha recepción",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_solicitud,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                              label: "Fecha solicitud",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_vencimiento,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                              label: "Fecha vencimiento",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.comentario,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                              label: "Comentario",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.itemsView.resultado,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                              class: "mb-4",
                                                              label: "Apto",
                                                              color: "success",
                                                              inset: ""
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
                                                      onClick: ($event) => close()
                                                    }, null, 8, ["onClick"])
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
                                      createVNode(_component_v_form, { readonly: "" }, {
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
                                              createVNode(_component_v_form, { readonly: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.codigo_verificacion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                            label: "Cod. verif.",
                                                            type: "number",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.numero_solicitud,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                            label: "N° solicitud",
                                                            type: "number",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.estado_epo,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.itemsView.estado_epo,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                            label: "Estado",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.bateria,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.itemsView.bateria,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                            label: "Batería",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.semaforo,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.itemsView.semaforo,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                            label: "Semáforo",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.tipo_examen,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.itemsView.tipo_examen,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                            label: "Tipo de exámen",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.fecha_realizacion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                            label: "Fecha de realización",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.fecha_recepcion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                            label: "Fecha recepción",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.fecha_solicitud,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                            label: "Fecha solicitud",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.fecha_vencimiento,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                            label: "Fecha vencimiento",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.comentario,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                            label: "Comentario",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.itemsView.resultado,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                            class: "mb-4",
                                                            label: "Apto",
                                                            color: "success",
                                                            inset: ""
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
                                                    onClick: ($event) => close()
                                                  }, null, 8, ["onClick"])
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
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_form, { readonly: "" }, {
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
                                            createVNode(_component_v_form, { readonly: "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.codigo_verificacion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                          label: "Cod. verif.",
                                                          type: "number",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.numero_solicitud,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                          label: "N° solicitud",
                                                          type: "number",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.estado_epo,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.itemsView.estado_epo,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                          label: "Estado",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.bateria,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.itemsView.bateria,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                          label: "Batería",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.semaforo,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.itemsView.semaforo,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                          label: "Semáforo",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.tipo_examen,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.itemsView.tipo_examen,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                          label: "Tipo de exámen",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.fecha_realizacion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                          label: "Fecha de realización",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.fecha_recepcion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                          label: "Fecha recepción",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.fecha_solicitud,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                          label: "Fecha solicitud",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.fecha_vencimiento,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                          label: "Fecha vencimiento",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.comentario,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                          label: "Comentario",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.itemsView.resultado,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                          class: "mb-4",
                                                          label: "Apto",
                                                          color: "success",
                                                          inset: ""
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
                                                  onClick: ($event) => close()
                                                }, null, 8, ["onClick"])
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
                          createVNode(_component_v_sheet, {
                            elevation: "4",
                            class: "ma-4 pa-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_form, { readonly: "" }, {
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
                                          createVNode(_component_v_form, { readonly: "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.codigo_verificacion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                        label: "Cod. verif.",
                                                        type: "number",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.numero_solicitud,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                        label: "N° solicitud",
                                                        type: "number",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.estado_epo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.itemsView.estado_epo,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                        label: "Estado",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.bateria,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.itemsView.bateria,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                        label: "Batería",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.semaforo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.itemsView.semaforo,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                        label: "Semáforo",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.tipo_examen,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.itemsView.tipo_examen,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                        label: "Tipo de exámen",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.fecha_realizacion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                        label: "Fecha de realización",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.fecha_recepcion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                        label: "Fecha recepción",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.fecha_solicitud,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                        label: "Fecha solicitud",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.fecha_vencimiento,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                        label: "Fecha vencimiento",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.comentario,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                        label: "Comentario",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.itemsView.resultado,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                        class: "mb-4",
                                                        label: "Apto",
                                                        color: "success",
                                                        inset: ""
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
                                                onClick: ($event) => close()
                                              }, null, 8, ["onClick"])
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
                  }, _parent3, _scopeId2));
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
                                createVNode(_component_v_form, { readonly: "" }, {
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
                                        createVNode(_component_v_form, { readonly: "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.codigo_verificacion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                      label: "Cod. verif.",
                                                      type: "number",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.numero_solicitud,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                      label: "N° solicitud",
                                                      type: "number",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.estado_epo,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.itemsView.estado_epo,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                      label: "Estado",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.bateria,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.itemsView.bateria,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                      label: "Batería",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.semaforo,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.itemsView.semaforo,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                      label: "Semáforo",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      items: state.list.tipo_examen,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.itemsView.tipo_examen,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                      label: "Tipo de exámen",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.fecha_realizacion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                      label: "Fecha de realización",
                                                      type: "date",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.fecha_recepcion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                      label: "Fecha recepción",
                                                      type: "date",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.fecha_solicitud,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                      label: "Fecha solicitud",
                                                      type: "date",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.fecha_vencimiento,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                      label: "Fecha vencimiento",
                                                      type: "date",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.comentario,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                      label: "Comentario",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.itemsView.resultado,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                      class: "mb-4",
                                                      label: "Apto",
                                                      color: "success",
                                                      inset: ""
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
                                              onClick: ($event) => close()
                                            }, null, 8, ["onClick"])
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
                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createVNode(_component_v_container, { fluid: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Rut",
                                            variant: "underlined",
                                            rules: state.rutRules,
                                            modelValue: state.searchQuery.rut,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                            clearable: ""
                                          }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_select, {
                                            items: state.list.empresa,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            label: "Empresa",
                                            modelValue: state.searchQuery.empresa,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                            variant: "underlined",
                                            clearable: ""
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_select, {
                                            items: state.list.unidad,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            label: "Unidad",
                                            modelValue: state.searchQuery.unidad,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                            variant: "underlined",
                                            clearable: ""
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_select, {
                                            label: "Area",
                                            modelValue: state.searchQuery.area,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                            variant: "underlined",
                                            items: state.list.area,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_select, {
                                            label: "Area (cecos)",
                                            modelValue: state.searchQuery.ceco,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                            variant: "underlined",
                                            items: state.list.ceco,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                                            clearable: "",
                                            label: "Activo"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_switch, {
                                            modelValue: state.searchQuery.resultado,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.resultado = $event,
                                            "hide-details": "",
                                            "true-value": "Apto",
                                            "false-value": "No apto",
                                            class: "ml-4 mt-4",
                                            variant: "underlined",
                                            color: "green-darken-3",
                                            inset: "",
                                            clearable: "",
                                            label: `Resultado: ${state.searchQuery.resultado.toString()}`
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Fecha realizacion (desde)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_realizacion.desde,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.desde = $event,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            label: "Fecha realizacion (hasta)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_realizacion.hasta,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_realizacion.hasta = $event,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            label: "Fecha recepción (desde)",
                                            variant: "underlined",
                                            modelValue: state.searchQuery.fecha_recepcion.desde,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                            clearable: "",
                                            type: "date"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            label: "Fecha recepción (hasta)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_recepcion.hasta,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            label: "Fecha solicitud (desde)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_solicitud.desde,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.desde = $event,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            label: "Fecha solicitud (hasta)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_solicitud.hasta,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_solicitud.hasta = $event,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            label: "Fecha vencimiento (desde)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_vencimiento.desde,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.desde = $event,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            label: "Fecha vencimiento (hasta)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_vencimiento.hasta,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_vencimiento.hasta = $event,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            label: "Estado EPO",
                                            variant: "underlined",
                                            modelValue: state.searchQuery.estado_epo,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.estado_epo = $event,
                                            items: state.list.estado_epo,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_select, {
                                            label: "Bateria",
                                            variant: "underlined",
                                            modelValue: state.searchQuery.bateria,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.bateria = $event,
                                            items: state.list.bateria,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            clearable: "",
                                            single: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_select, {
                                            label: "Tipo de exámen",
                                            variant: "underlined",
                                            modelValue: state.searchQuery.tipo_examen,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.tipo_examen = $event,
                                            items: state.list.tipo_examen,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            clearable: "",
                                            single: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_select, {
                                            label: "Riesgo Semáforo",
                                            variant: "underlined",
                                            modelValue: state.searchQuery.semaforo,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.semaforo = $event,
                                            items: state.list.semaforo,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            clearable: "",
                                            single: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_text_field, {
                                            label: "Número de solicitud",
                                            variant: "underlined",
                                            type: "number",
                                            modelValue: state.searchQuery.numero_solicitud,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.numero_solicitud = $event,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    "prepend-icon": "mdi-file-search",
                                    variant: "tonal",
                                    color: "#009AA4",
                                    loading: state.loadingSearch,
                                    onClick: handleSearch
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Buscar ")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"]),
                                  createVNode(_component_v_btn, {
                                    "prepend-icon": "mdi-microsoft-excel",
                                    variant: "tonal",
                                    color: "#009AA4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_download_excel, {
                                        data: state.tableItems,
                                        name: "consulta_exepo.xls"
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
                            _: 2
                          }, 1024),
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
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
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
                              createVNode(_component_v_form, { readonly: "" }, {
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
                                      createVNode(_component_v_form, { readonly: "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.codigo_verificacion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.codigo_verificacion = $event,
                                                    label: "Cod. verif.",
                                                    type: "number",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.numero_solicitud,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.numero_solicitud = $event,
                                                    label: "N° solicitud",
                                                    type: "number",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.estado_epo,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.itemsView.estado_epo,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.estado_epo = $event,
                                                    label: "Estado",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.bateria,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.itemsView.bateria,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.bateria = $event,
                                                    label: "Batería",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.semaforo,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.itemsView.semaforo,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.semaforo = $event,
                                                    label: "Semáforo",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    items: state.list.tipo_examen,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.itemsView.tipo_examen,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.tipo_examen = $event,
                                                    label: "Tipo de exámen",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.fecha_realizacion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_realizacion = $event,
                                                    label: "Fecha de realización",
                                                    type: "date",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.fecha_recepcion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                    label: "Fecha recepción",
                                                    type: "date",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.fecha_solicitud,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_solicitud = $event,
                                                    label: "Fecha solicitud",
                                                    type: "date",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.fecha_vencimiento,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_vencimiento = $event,
                                                    label: "Fecha vencimiento",
                                                    type: "date",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.comentario,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                    label: "Comentario",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.itemsView.resultado,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.resultado = $event,
                                                    class: "mb-4",
                                                    label: "Apto",
                                                    color: "success",
                                                    inset: ""
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
                                            onClick: ($event) => close()
                                          }, null, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Consultas/ConsultaExEpo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ConsultaExEpo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/vulco/resources/js/Pages/Consultas/ConsultaExEpo.vue"]]);
export {
  ConsultaExEpo as default
};
//# sourceMappingURL=ConsultaExEpo-6AXpRmMk.js.map
