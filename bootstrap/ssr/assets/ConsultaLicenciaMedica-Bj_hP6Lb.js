import { reactive, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-CRxZFR1c.js";
import { f as fetchData, h as handleSearchItem } from "./helper-myf1uSfT.js";
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
  __name: "ConsultaLicenciaMedica",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      endpoints: ["area", "ceco", "empresa", "planta", "unidad"],
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
          title: "Fecha de inicio",
          sortable: true,
          align: "center",
          key: "fecha_inicio"
        },
        {
          title: "Fecha de término",
          sortable: true,
          align: "center",
          key: "fecha_termino"
        },
        {
          title: "Fecha de emisión",
          sortable: true,
          align: "center",
          key: "fecha_emision"
        },
        {
          title: "Fecha de recepción",
          sortable: true,
          align: "center",
          key: "fecha_recepcion"
        },
        { title: "Acciones", align: "center", key: "actions" }
      ],
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
      itemsView: {
        paciente_id: null,
        fecha_emision: null,
        fecha_inicio: null,
        fecha_recepcion: null,
        fecha_termino: null,
        caract_reposo: null,
        lugar_reposo: null,
        tipo_licencia: null,
        recuperabilidad_laboral: false,
        inicio_invalidez: false,
        titulo_profesional: null,
        nombre_profesional: null,
        comentario: null
      },
      searchQuery: {
        activo: true,
        area: null,
        ceco: null,
        empresa: null,
        planta: null,
        rut: null,
        unidad: null,
        fecha_emision: { desde: null, hasta: null },
        fecha_recepcion: { desde: null, hasta: null },
        fecha_inicio: { desde: null, hasta: null },
        fecha_termino: { desde: null, hasta: null },
        caract_reposo: null,
        lugar_reposo: null,
        tipo_licencia: null,
        recuperabilidad_laboral: false,
        inicio_invalidez: false,
        titulo_profesional: null,
        nombre_profesional: null
      },
      caract_reposo: [
        "Total",
        "Parcial - Mañana",
        "Parcial - Tarde",
        "Parcial - Noche"
      ],
      lugar_reposo: ["Domicilio", "Hospital", "Otro domicilio"],
      tipo_licencia: [
        "Accidente del trabajo o trayecto",
        "Enfermedad grave hijo menor de 1 año",
        "Enfermedad o accidente común",
        "Enfermedad profesional",
        "Licencia maternal pre y post natal",
        "Patología del embarazo",
        "Prorroga medicina preventiva"
      ],
      titulo_profesional: ["Médico", "Dentista", "Matrona"],
      dialog: false,
      tableItems: [],
      formItems: [],
      editedIndex: -1,
      list: [],
      loadingSearch: false,
      valid: null,
      formTitle: "Consulta de Licencias Médicas",
      urlSearch: "/consulta/licencia/search"
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
                                                        clearable: "",
                                                        label: "Rut",
                                                        variant: "underlined",
                                                        rules: state.rutRules,
                                                        modelValue: state.searchQuery.rut,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        clearable: "",
                                                        label: "Empresa",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.empresa,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                        items: state.list.empresa,
                                                        "item-title": "descripcion",
                                                        "item-value": "id"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        clearable: "",
                                                        label: "Unidad",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.unidad,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                        items: state.list.unidad,
                                                        "item-title": "descripcion",
                                                        "item-value": "id"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        clearable: "",
                                                        label: "Area",
                                                        modelValue: state.searchQuery.area,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                        variant: "underlined",
                                                        items: state.list.area,
                                                        "item-title": "descripcion",
                                                        "item-value": "id"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        clearable: "",
                                                        label: "Area (cecos)",
                                                        modelValue: state.searchQuery.ceco,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                        variant: "underlined",
                                                        items: state.list.ceco,
                                                        "item-title": "descripcion",
                                                        "item-value": "id"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          clearable: "",
                                                          label: "Rut",
                                                          variant: "underlined",
                                                          rules: state.rutRules,
                                                          modelValue: state.searchQuery.rut,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event
                                                        }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          clearable: "",
                                                          label: "Empresa",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.empresa,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                          items: state.list.empresa,
                                                          "item-title": "descripcion",
                                                          "item-value": "id"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          clearable: "",
                                                          label: "Unidad",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.unidad,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                          items: state.list.unidad,
                                                          "item-title": "descripcion",
                                                          "item-value": "id"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          clearable: "",
                                                          label: "Area",
                                                          modelValue: state.searchQuery.area,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                          variant: "underlined",
                                                          items: state.list.area,
                                                          "item-title": "descripcion",
                                                          "item-value": "id"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          clearable: "",
                                                          label: "Area (cecos)",
                                                          modelValue: state.searchQuery.ceco,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                          variant: "underlined",
                                                          items: state.list.ceco,
                                                          "item-title": "descripcion",
                                                          "item-value": "id"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha emision (desde)",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.fecha_emision.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.desde = $event,
                                                        type: "date"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha emisión (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_emision.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.hasta = $event
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha recepción (desde)",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.fecha_recepcion.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                        type: "date"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha recepción (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_switch, {
                                                        modelValue: state.searchQuery.activo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                        "hide-details": "",
                                                        class: "ml-4 mb-4",
                                                        variant: "underlined",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        label: "Activo"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          clearable: "",
                                                          label: "Fecha emision (desde)",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.fecha_emision.desde,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.desde = $event,
                                                          type: "date"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          clearable: "",
                                                          label: "Fecha emisión (hasta)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_emision.hasta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.hasta = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          clearable: "",
                                                          label: "Fecha recepción (desde)",
                                                          variant: "underlined",
                                                          modelValue: state.searchQuery.fecha_recepcion.desde,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                          type: "date"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          clearable: "",
                                                          label: "Fecha recepción (hasta)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.searchQuery.activo,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                          "hide-details": "",
                                                          class: "ml-4 mb-4",
                                                          variant: "underlined",
                                                          color: "green-darken-3",
                                                          inset: "",
                                                          label: "Activo"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha inicio (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_inicio.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.desde = $event
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha inicio (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_inicio.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.hasta = $event
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha termino (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_termino.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.desde = $event
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha termino (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_termino.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.hasta = $event
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          clearable: "",
                                                          label: "Fecha inicio (desde)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_inicio.desde,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.desde = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          clearable: "",
                                                          label: "Fecha inicio (hasta)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_inicio.hasta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.hasta = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          clearable: "",
                                                          label: "Fecha termino (desde)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_termino.desde,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.desde = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          clearable: "",
                                                          label: "Fecha termino (hasta)",
                                                          variant: "underlined",
                                                          type: "date",
                                                          modelValue: state.searchQuery.fecha_termino.hasta,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.hasta = $event
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
                                                        modelValue: state.searchQuery.caract_reposo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.caract_reposo = $event,
                                                        label: "Características del reposo",
                                                        variant: "underlined",
                                                        items: state.caract_reposo,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        modelValue: state.searchQuery.lugar_reposo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.lugar_reposo = $event,
                                                        label: "Lugar del reposo",
                                                        variant: "underlined",
                                                        items: state.lugar_reposo,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        modelValue: state.searchQuery.tipo_licencia,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.tipo_licencia = $event,
                                                        label: "Tipo de Licencia",
                                                        variant: "underlined",
                                                        items: state.tipo_licencia,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_switch, {
                                                        modelValue: state.searchQuery.recuperabilidad_laboral,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.recuperabilidad_laboral = $event,
                                                        "hide-details": "",
                                                        class: "ml-4",
                                                        variant: "underlined",
                                                        color: "primary",
                                                        inset: "",
                                                        label: "Recuperabilidad Laboral"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_switch, {
                                                        modelValue: state.searchQuery.inicio_invalidez,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.inicio_invalidez = $event,
                                                        "hide-details": "",
                                                        class: "ml-4",
                                                        variant: "underlined",
                                                        color: "primary",
                                                        inset: "",
                                                        label: "Inicio Invalidez"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        modelValue: state.searchQuery.nombre_profesional,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.nombre_profesional = $event,
                                                        label: "Nombre del Profesional",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        modelValue: state.searchQuery.titulo_profesional,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.titulo_profesional = $event,
                                                        label: "Titulo profesional",
                                                        variant: "underlined",
                                                        items: state.titulo_profesional,
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.searchQuery.caract_reposo,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.caract_reposo = $event,
                                                          label: "Características del reposo",
                                                          variant: "underlined",
                                                          items: state.caract_reposo,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.searchQuery.lugar_reposo,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.lugar_reposo = $event,
                                                          label: "Lugar del reposo",
                                                          variant: "underlined",
                                                          items: state.lugar_reposo,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.searchQuery.tipo_licencia,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.tipo_licencia = $event,
                                                          label: "Tipo de Licencia",
                                                          variant: "underlined",
                                                          items: state.tipo_licencia,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.searchQuery.recuperabilidad_laboral,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.recuperabilidad_laboral = $event,
                                                          "hide-details": "",
                                                          class: "ml-4",
                                                          variant: "underlined",
                                                          color: "primary",
                                                          inset: "",
                                                          label: "Recuperabilidad Laboral"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.searchQuery.inicio_invalidez,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.inicio_invalidez = $event,
                                                          "hide-details": "",
                                                          class: "ml-4",
                                                          variant: "underlined",
                                                          color: "primary",
                                                          inset: "",
                                                          label: "Inicio Invalidez"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.searchQuery.nombre_profesional,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.nombre_profesional = $event,
                                                          label: "Nombre del Profesional",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.searchQuery.titulo_profesional,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.titulo_profesional = $event,
                                                          label: "Titulo profesional",
                                                          variant: "underlined",
                                                          items: state.titulo_profesional,
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                        clearable: "",
                                                        label: "Rut",
                                                        variant: "underlined",
                                                        rules: state.rutRules,
                                                        modelValue: state.searchQuery.rut,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event
                                                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        clearable: "",
                                                        label: "Empresa",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.empresa,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                        items: state.list.empresa,
                                                        "item-title": "descripcion",
                                                        "item-value": "id"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        clearable: "",
                                                        label: "Unidad",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.unidad,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                        items: state.list.unidad,
                                                        "item-title": "descripcion",
                                                        "item-value": "id"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        clearable: "",
                                                        label: "Area",
                                                        modelValue: state.searchQuery.area,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                        variant: "underlined",
                                                        items: state.list.area,
                                                        "item-title": "descripcion",
                                                        "item-value": "id"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        clearable: "",
                                                        label: "Area (cecos)",
                                                        modelValue: state.searchQuery.ceco,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                        variant: "underlined",
                                                        items: state.list.ceco,
                                                        "item-title": "descripcion",
                                                        "item-value": "id"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha emision (desde)",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.fecha_emision.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.desde = $event,
                                                        type: "date"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha emisión (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_emision.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.hasta = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha recepción (desde)",
                                                        variant: "underlined",
                                                        modelValue: state.searchQuery.fecha_recepcion.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                        type: "date"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha recepción (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.searchQuery.activo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                        "hide-details": "",
                                                        class: "ml-4 mb-4",
                                                        variant: "underlined",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        label: "Activo"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha inicio (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_inicio.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.desde = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha inicio (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_inicio.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.hasta = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha termino (desde)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_termino.desde,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.desde = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        clearable: "",
                                                        label: "Fecha termino (hasta)",
                                                        variant: "underlined",
                                                        type: "date",
                                                        modelValue: state.searchQuery.fecha_termino.hasta,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.hasta = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.searchQuery.caract_reposo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.caract_reposo = $event,
                                                        label: "Características del reposo",
                                                        variant: "underlined",
                                                        items: state.caract_reposo,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.searchQuery.lugar_reposo,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.lugar_reposo = $event,
                                                        label: "Lugar del reposo",
                                                        variant: "underlined",
                                                        items: state.lugar_reposo,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.searchQuery.tipo_licencia,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.tipo_licencia = $event,
                                                        label: "Tipo de Licencia",
                                                        variant: "underlined",
                                                        items: state.tipo_licencia,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.searchQuery.recuperabilidad_laboral,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.recuperabilidad_laboral = $event,
                                                        "hide-details": "",
                                                        class: "ml-4",
                                                        variant: "underlined",
                                                        color: "primary",
                                                        inset: "",
                                                        label: "Recuperabilidad Laboral"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.searchQuery.inicio_invalidez,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.inicio_invalidez = $event,
                                                        "hide-details": "",
                                                        class: "ml-4",
                                                        variant: "underlined",
                                                        color: "primary",
                                                        inset: "",
                                                        label: "Inicio Invalidez"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.searchQuery.nombre_profesional,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.nombre_profesional = $event,
                                                        label: "Nombre del Profesional",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.searchQuery.titulo_profesional,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.titulo_profesional = $event,
                                                        label: "Titulo profesional",
                                                        variant: "underlined",
                                                        items: state.titulo_profesional,
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                      clearable: "",
                                                      label: "Rut",
                                                      variant: "underlined",
                                                      rules: state.rutRules,
                                                      modelValue: state.searchQuery.rut,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event
                                                    }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      clearable: "",
                                                      label: "Empresa",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.empresa,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                      items: state.list.empresa,
                                                      "item-title": "descripcion",
                                                      "item-value": "id"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      clearable: "",
                                                      label: "Unidad",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.unidad,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                      items: state.list.unidad,
                                                      "item-title": "descripcion",
                                                      "item-value": "id"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      clearable: "",
                                                      label: "Area",
                                                      modelValue: state.searchQuery.area,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                      variant: "underlined",
                                                      items: state.list.area,
                                                      "item-title": "descripcion",
                                                      "item-value": "id"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      clearable: "",
                                                      label: "Area (cecos)",
                                                      modelValue: state.searchQuery.ceco,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                      variant: "underlined",
                                                      items: state.list.ceco,
                                                      "item-title": "descripcion",
                                                      "item-value": "id"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      clearable: "",
                                                      label: "Fecha emision (desde)",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.fecha_emision.desde,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.desde = $event,
                                                      type: "date"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      clearable: "",
                                                      label: "Fecha emisión (hasta)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_emision.hasta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.hasta = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      clearable: "",
                                                      label: "Fecha recepción (desde)",
                                                      variant: "underlined",
                                                      modelValue: state.searchQuery.fecha_recepcion.desde,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                      type: "date"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      clearable: "",
                                                      label: "Fecha recepción (hasta)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.searchQuery.activo,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                      "hide-details": "",
                                                      class: "ml-4 mb-4",
                                                      variant: "underlined",
                                                      color: "green-darken-3",
                                                      inset: "",
                                                      label: "Activo"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      clearable: "",
                                                      label: "Fecha inicio (desde)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_inicio.desde,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.desde = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      clearable: "",
                                                      label: "Fecha inicio (hasta)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_inicio.hasta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.hasta = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      clearable: "",
                                                      label: "Fecha termino (desde)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_termino.desde,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.desde = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      clearable: "",
                                                      label: "Fecha termino (hasta)",
                                                      variant: "underlined",
                                                      type: "date",
                                                      modelValue: state.searchQuery.fecha_termino.hasta,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.hasta = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.searchQuery.caract_reposo,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.caract_reposo = $event,
                                                      label: "Características del reposo",
                                                      variant: "underlined",
                                                      items: state.caract_reposo,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.searchQuery.lugar_reposo,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.lugar_reposo = $event,
                                                      label: "Lugar del reposo",
                                                      variant: "underlined",
                                                      items: state.lugar_reposo,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.searchQuery.tipo_licencia,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.tipo_licencia = $event,
                                                      label: "Tipo de Licencia",
                                                      variant: "underlined",
                                                      items: state.tipo_licencia,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.searchQuery.recuperabilidad_laboral,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.recuperabilidad_laboral = $event,
                                                      "hide-details": "",
                                                      class: "ml-4",
                                                      variant: "underlined",
                                                      color: "primary",
                                                      inset: "",
                                                      label: "Recuperabilidad Laboral"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.searchQuery.inicio_invalidez,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.inicio_invalidez = $event,
                                                      "hide-details": "",
                                                      class: "ml-4",
                                                      variant: "underlined",
                                                      color: "primary",
                                                      inset: "",
                                                      label: "Inicio Invalidez"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.searchQuery.nombre_profesional,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.nombre_profesional = $event,
                                                      label: "Nombre del Profesional",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.searchQuery.titulo_profesional,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.titulo_profesional = $event,
                                                      label: "Titulo profesional",
                                                      variant: "underlined",
                                                      items: state.titulo_profesional,
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                  name: "consulta_licencias.xls"
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
                                                    name: "consulta_licencias.xls"
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
                                                  name: "consulta_licencias.xls"
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
                                                    clearable: "",
                                                    label: "Rut",
                                                    variant: "underlined",
                                                    rules: state.rutRules,
                                                    modelValue: state.searchQuery.rut,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event
                                                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    clearable: "",
                                                    label: "Empresa",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.empresa,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                    items: state.list.empresa,
                                                    "item-title": "descripcion",
                                                    "item-value": "id"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    clearable: "",
                                                    label: "Unidad",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.unidad,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                    items: state.list.unidad,
                                                    "item-title": "descripcion",
                                                    "item-value": "id"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    clearable: "",
                                                    label: "Area",
                                                    modelValue: state.searchQuery.area,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                    variant: "underlined",
                                                    items: state.list.area,
                                                    "item-title": "descripcion",
                                                    "item-value": "id"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    clearable: "",
                                                    label: "Area (cecos)",
                                                    modelValue: state.searchQuery.ceco,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                    variant: "underlined",
                                                    items: state.list.ceco,
                                                    "item-title": "descripcion",
                                                    "item-value": "id"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    clearable: "",
                                                    label: "Fecha emision (desde)",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.fecha_emision.desde,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.desde = $event,
                                                    type: "date"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    clearable: "",
                                                    label: "Fecha emisión (hasta)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_emision.hasta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.hasta = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    clearable: "",
                                                    label: "Fecha recepción (desde)",
                                                    variant: "underlined",
                                                    modelValue: state.searchQuery.fecha_recepcion.desde,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                    type: "date"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    clearable: "",
                                                    label: "Fecha recepción (hasta)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.searchQuery.activo,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                    "hide-details": "",
                                                    class: "ml-4 mb-4",
                                                    variant: "underlined",
                                                    color: "green-darken-3",
                                                    inset: "",
                                                    label: "Activo"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    clearable: "",
                                                    label: "Fecha inicio (desde)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_inicio.desde,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.desde = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    clearable: "",
                                                    label: "Fecha inicio (hasta)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_inicio.hasta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.hasta = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    clearable: "",
                                                    label: "Fecha termino (desde)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_termino.desde,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.desde = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    clearable: "",
                                                    label: "Fecha termino (hasta)",
                                                    variant: "underlined",
                                                    type: "date",
                                                    modelValue: state.searchQuery.fecha_termino.hasta,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.hasta = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.searchQuery.caract_reposo,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.caract_reposo = $event,
                                                    label: "Características del reposo",
                                                    variant: "underlined",
                                                    items: state.caract_reposo,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.searchQuery.lugar_reposo,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.lugar_reposo = $event,
                                                    label: "Lugar del reposo",
                                                    variant: "underlined",
                                                    items: state.lugar_reposo,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.searchQuery.tipo_licencia,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.tipo_licencia = $event,
                                                    label: "Tipo de Licencia",
                                                    variant: "underlined",
                                                    items: state.tipo_licencia,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.searchQuery.recuperabilidad_laboral,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.recuperabilidad_laboral = $event,
                                                    "hide-details": "",
                                                    class: "ml-4",
                                                    variant: "underlined",
                                                    color: "primary",
                                                    inset: "",
                                                    label: "Recuperabilidad Laboral"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.searchQuery.inicio_invalidez,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.inicio_invalidez = $event,
                                                    "hide-details": "",
                                                    class: "ml-4",
                                                    variant: "underlined",
                                                    color: "primary",
                                                    inset: "",
                                                    label: "Inicio Invalidez"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.searchQuery.nombre_profesional,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.nombre_profesional = $event,
                                                    label: "Nombre del Profesional",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.searchQuery.titulo_profesional,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.titulo_profesional = $event,
                                                    label: "Titulo profesional",
                                                    variant: "underlined",
                                                    items: state.titulo_profesional,
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                name: "consulta_licencias.xls"
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
                                                  color: "#662D91",
                                                  class: "mr-2 ml-2",
                                                  icon: "mdi-eye",
                                                  onClick: ($event) => VerDetalles(item)
                                                }), null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_btn, mergeProps(props, {
                                                    density: "compact",
                                                    color: "#662D91",
                                                    class: "mr-2 ml-2",
                                                    icon: "mdi-eye",
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
                                                  color: "#662D91",
                                                  class: "mr-2 ml-2",
                                                  icon: "mdi-eye",
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
                                                color: "#662D91",
                                                class: "mr-2 ml-2",
                                                icon: "mdi-eye",
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
                                                  clearable: "",
                                                  label: "Rut",
                                                  variant: "underlined",
                                                  rules: state.rutRules,
                                                  modelValue: state.searchQuery.rut,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event
                                                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  clearable: "",
                                                  label: "Empresa",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.empresa,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                  items: state.list.empresa,
                                                  "item-title": "descripcion",
                                                  "item-value": "id"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  clearable: "",
                                                  label: "Unidad",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.unidad,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                  items: state.list.unidad,
                                                  "item-title": "descripcion",
                                                  "item-value": "id"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  clearable: "",
                                                  label: "Area",
                                                  modelValue: state.searchQuery.area,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                  variant: "underlined",
                                                  items: state.list.area,
                                                  "item-title": "descripcion",
                                                  "item-value": "id"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  clearable: "",
                                                  label: "Area (cecos)",
                                                  modelValue: state.searchQuery.ceco,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                  variant: "underlined",
                                                  items: state.list.ceco,
                                                  "item-title": "descripcion",
                                                  "item-value": "id"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  clearable: "",
                                                  label: "Fecha emision (desde)",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.fecha_emision.desde,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.desde = $event,
                                                  type: "date"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  clearable: "",
                                                  label: "Fecha emisión (hasta)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_emision.hasta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.hasta = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  clearable: "",
                                                  label: "Fecha recepción (desde)",
                                                  variant: "underlined",
                                                  modelValue: state.searchQuery.fecha_recepcion.desde,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                  type: "date"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  clearable: "",
                                                  label: "Fecha recepción (hasta)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.searchQuery.activo,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                  "hide-details": "",
                                                  class: "ml-4 mb-4",
                                                  variant: "underlined",
                                                  color: "green-darken-3",
                                                  inset: "",
                                                  label: "Activo"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  clearable: "",
                                                  label: "Fecha inicio (desde)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_inicio.desde,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.desde = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  clearable: "",
                                                  label: "Fecha inicio (hasta)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_inicio.hasta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.hasta = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  clearable: "",
                                                  label: "Fecha termino (desde)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_termino.desde,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.desde = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  clearable: "",
                                                  label: "Fecha termino (hasta)",
                                                  variant: "underlined",
                                                  type: "date",
                                                  modelValue: state.searchQuery.fecha_termino.hasta,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.hasta = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  modelValue: state.searchQuery.caract_reposo,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.caract_reposo = $event,
                                                  label: "Características del reposo",
                                                  variant: "underlined",
                                                  items: state.caract_reposo,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.searchQuery.lugar_reposo,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.lugar_reposo = $event,
                                                  label: "Lugar del reposo",
                                                  variant: "underlined",
                                                  items: state.lugar_reposo,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.searchQuery.tipo_licencia,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.tipo_licencia = $event,
                                                  label: "Tipo de Licencia",
                                                  variant: "underlined",
                                                  items: state.tipo_licencia,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.searchQuery.recuperabilidad_laboral,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.recuperabilidad_laboral = $event,
                                                  "hide-details": "",
                                                  class: "ml-4",
                                                  variant: "underlined",
                                                  color: "primary",
                                                  inset: "",
                                                  label: "Recuperabilidad Laboral"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.searchQuery.inicio_invalidez,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.inicio_invalidez = $event,
                                                  "hide-details": "",
                                                  class: "ml-4",
                                                  variant: "underlined",
                                                  color: "primary",
                                                  inset: "",
                                                  label: "Inicio Invalidez"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.searchQuery.nombre_profesional,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.nombre_profesional = $event,
                                                  label: "Nombre del Profesional",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.searchQuery.titulo_profesional,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.titulo_profesional = $event,
                                                  label: "Titulo profesional",
                                                  variant: "underlined",
                                                  items: state.titulo_profesional,
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                              name: "consulta_licencias.xls"
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
                                              color: "#662D91",
                                              class: "mr-2 ml-2",
                                              icon: "mdi-eye",
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
                                                clearable: "",
                                                label: "Rut",
                                                variant: "underlined",
                                                rules: state.rutRules,
                                                modelValue: state.searchQuery.rut,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event
                                              }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                clearable: "",
                                                label: "Empresa",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.empresa,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                                items: state.list.empresa,
                                                "item-title": "descripcion",
                                                "item-value": "id"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                clearable: "",
                                                label: "Unidad",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.unidad,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                                items: state.list.unidad,
                                                "item-title": "descripcion",
                                                "item-value": "id"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                clearable: "",
                                                label: "Area",
                                                modelValue: state.searchQuery.area,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                                variant: "underlined",
                                                items: state.list.area,
                                                "item-title": "descripcion",
                                                "item-value": "id"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                clearable: "",
                                                label: "Area (cecos)",
                                                modelValue: state.searchQuery.ceco,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                                variant: "underlined",
                                                items: state.list.ceco,
                                                "item-title": "descripcion",
                                                "item-value": "id"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                clearable: "",
                                                label: "Fecha emision (desde)",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.fecha_emision.desde,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.desde = $event,
                                                type: "date"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                clearable: "",
                                                label: "Fecha emisión (hasta)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_emision.hasta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.hasta = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                clearable: "",
                                                label: "Fecha recepción (desde)",
                                                variant: "underlined",
                                                modelValue: state.searchQuery.fecha_recepcion.desde,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                                type: "date"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                clearable: "",
                                                label: "Fecha recepción (hasta)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_recepcion.hasta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.searchQuery.activo,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                                "hide-details": "",
                                                class: "ml-4 mb-4",
                                                variant: "underlined",
                                                color: "green-darken-3",
                                                inset: "",
                                                label: "Activo"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                clearable: "",
                                                label: "Fecha inicio (desde)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_inicio.desde,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.desde = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                clearable: "",
                                                label: "Fecha inicio (hasta)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_inicio.hasta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.hasta = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                clearable: "",
                                                label: "Fecha termino (desde)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_termino.desde,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.desde = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                clearable: "",
                                                label: "Fecha termino (hasta)",
                                                variant: "underlined",
                                                type: "date",
                                                modelValue: state.searchQuery.fecha_termino.hasta,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.hasta = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                modelValue: state.searchQuery.caract_reposo,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.caract_reposo = $event,
                                                label: "Características del reposo",
                                                variant: "underlined",
                                                items: state.caract_reposo,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.searchQuery.lugar_reposo,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.lugar_reposo = $event,
                                                label: "Lugar del reposo",
                                                variant: "underlined",
                                                items: state.lugar_reposo,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.searchQuery.tipo_licencia,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.tipo_licencia = $event,
                                                label: "Tipo de Licencia",
                                                variant: "underlined",
                                                items: state.tipo_licencia,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.searchQuery.recuperabilidad_laboral,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.recuperabilidad_laboral = $event,
                                                "hide-details": "",
                                                class: "ml-4",
                                                variant: "underlined",
                                                color: "primary",
                                                inset: "",
                                                label: "Recuperabilidad Laboral"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.searchQuery.inicio_invalidez,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.inicio_invalidez = $event,
                                                "hide-details": "",
                                                class: "ml-4",
                                                variant: "underlined",
                                                color: "primary",
                                                inset: "",
                                                label: "Inicio Invalidez"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.searchQuery.nombre_profesional,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.nombre_profesional = $event,
                                                label: "Nombre del Profesional",
                                                type: "text",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.searchQuery.titulo_profesional,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.titulo_profesional = $event,
                                                label: "Titulo profesional",
                                                variant: "underlined",
                                                items: state.titulo_profesional,
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                            name: "consulta_licencias.xls"
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
                                            color: "#662D91",
                                            class: "mr-2 ml-2",
                                            icon: "mdi-eye",
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
                            createVNode(_component_v_container, { fluid: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              clearable: "",
                                              label: "Rut",
                                              variant: "underlined",
                                              rules: state.rutRules,
                                              modelValue: state.searchQuery.rut,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event
                                            }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_select, {
                                              clearable: "",
                                              label: "Empresa",
                                              variant: "underlined",
                                              modelValue: state.searchQuery.empresa,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                              items: state.list.empresa,
                                              "item-title": "descripcion",
                                              "item-value": "id"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_select, {
                                              clearable: "",
                                              label: "Unidad",
                                              variant: "underlined",
                                              modelValue: state.searchQuery.unidad,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                              items: state.list.unidad,
                                              "item-title": "descripcion",
                                              "item-value": "id"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_select, {
                                              clearable: "",
                                              label: "Area",
                                              modelValue: state.searchQuery.area,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                              variant: "underlined",
                                              items: state.list.area,
                                              "item-title": "descripcion",
                                              "item-value": "id"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_select, {
                                              clearable: "",
                                              label: "Area (cecos)",
                                              modelValue: state.searchQuery.ceco,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                              variant: "underlined",
                                              items: state.list.ceco,
                                              "item-title": "descripcion",
                                              "item-value": "id"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              clearable: "",
                                              label: "Fecha emision (desde)",
                                              variant: "underlined",
                                              modelValue: state.searchQuery.fecha_emision.desde,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.desde = $event,
                                              type: "date"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              clearable: "",
                                              label: "Fecha emisión (hasta)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_emision.hasta,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.hasta = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              clearable: "",
                                              label: "Fecha recepción (desde)",
                                              variant: "underlined",
                                              modelValue: state.searchQuery.fecha_recepcion.desde,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                              type: "date"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              clearable: "",
                                              label: "Fecha recepción (hasta)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_recepcion.hasta,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_switch, {
                                              modelValue: state.searchQuery.activo,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                              "hide-details": "",
                                              class: "ml-4 mb-4",
                                              variant: "underlined",
                                              color: "green-darken-3",
                                              inset: "",
                                              label: "Activo"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              clearable: "",
                                              label: "Fecha inicio (desde)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_inicio.desde,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.desde = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              clearable: "",
                                              label: "Fecha inicio (hasta)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_inicio.hasta,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.hasta = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              clearable: "",
                                              label: "Fecha termino (desde)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_termino.desde,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.desde = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              clearable: "",
                                              label: "Fecha termino (hasta)",
                                              variant: "underlined",
                                              type: "date",
                                              modelValue: state.searchQuery.fecha_termino.hasta,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.hasta = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              modelValue: state.searchQuery.caract_reposo,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.caract_reposo = $event,
                                              label: "Características del reposo",
                                              variant: "underlined",
                                              items: state.caract_reposo,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_select, {
                                              modelValue: state.searchQuery.lugar_reposo,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.lugar_reposo = $event,
                                              label: "Lugar del reposo",
                                              variant: "underlined",
                                              items: state.lugar_reposo,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_select, {
                                              modelValue: state.searchQuery.tipo_licencia,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.tipo_licencia = $event,
                                              label: "Tipo de Licencia",
                                              variant: "underlined",
                                              items: state.tipo_licencia,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_switch, {
                                              modelValue: state.searchQuery.recuperabilidad_laboral,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.recuperabilidad_laboral = $event,
                                              "hide-details": "",
                                              class: "ml-4",
                                              variant: "underlined",
                                              color: "primary",
                                              inset: "",
                                              label: "Recuperabilidad Laboral"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_switch, {
                                              modelValue: state.searchQuery.inicio_invalidez,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.inicio_invalidez = $event,
                                              "hide-details": "",
                                              class: "ml-4",
                                              variant: "underlined",
                                              color: "primary",
                                              inset: "",
                                              label: "Inicio Invalidez"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              modelValue: state.searchQuery.nombre_profesional,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.nombre_profesional = $event,
                                              label: "Nombre del Profesional",
                                              type: "text",
                                              variant: "underlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_select, {
                                              modelValue: state.searchQuery.titulo_profesional,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.titulo_profesional = $event,
                                              label: "Titulo profesional",
                                              variant: "underlined",
                                              items: state.titulo_profesional,
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                          name: "consulta_licencias.xls"
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
                                          color: "#662D91",
                                          class: "mr-2 ml-2",
                                          icon: "mdi-eye",
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
                                                _push8(ssrRenderComponent(_component_v_row, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_col, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.folio,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                              label: "Folio",
                                                              type: "number",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_emision,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                              label: "Fecha emisión",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_recepcion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                              label: "Fecha recepción",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.folio,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                                label: "Folio",
                                                                type: "number",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.fecha_emision,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                                label: "Fecha emisión",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.fecha_recepcion,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                                label: "Fecha recepción",
                                                                type: "date",
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
                                                              modelValue: state.itemsView.fecha_inicio,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                              label: "Fecha inicio",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_termino,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                              label: "Fecha de término",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.comentario,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                              label: "Comentario",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.fecha_inicio,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                                label: "Fecha inicio",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.fecha_termino,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                                label: "Fecha de término",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.comentario,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                                label: "Comentario",
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
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.caract_reposo,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                              label: "Características del reposo",
                                                              variant: "underlined",
                                                              items: state.caract_reposo
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.lugar_reposo,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                              label: "Lugar del reposo",
                                                              variant: "underlined",
                                                              items: state.lugar_reposo
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.tipo_licencia,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                              label: "Tipo de Licencia",
                                                              variant: "underlined",
                                                              items: state.tipo_licencia
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.caract_reposo,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                                label: "Características del reposo",
                                                                variant: "underlined",
                                                                items: state.caract_reposo
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.lugar_reposo,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                                label: "Lugar del reposo",
                                                                variant: "underlined",
                                                                items: state.lugar_reposo
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.tipo_licencia,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                                label: "Tipo de Licencia",
                                                                variant: "underlined",
                                                                items: state.tipo_licencia
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_switch, {
                                                              modelValue: state.itemsView.recuperabilidad_laboral,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                              "hide-details": "",
                                                              class: "ml-4",
                                                              variant: "underlined",
                                                              color: "primary",
                                                              inset: "",
                                                              label: "Recuperabilidad Laboral"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_switch, {
                                                              modelValue: state.itemsView.inicio_invalidez,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                              "hide-details": "",
                                                              class: "ml-4",
                                                              variant: "underlined",
                                                              color: "primary",
                                                              inset: "",
                                                              label: "Inicio Invalidez"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_text_field, {
                                                              modelValue: state.itemsView.nombre_profesional,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                              label: "Nombre del Profesional",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_select, {
                                                              modelValue: state.itemsView.titulo_profesional,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                              label: "Titulo profesional",
                                                              variant: "underlined",
                                                              items: state.titulo_profesional
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.itemsView.recuperabilidad_laboral,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                                "hide-details": "",
                                                                class: "ml-4",
                                                                variant: "underlined",
                                                                color: "primary",
                                                                inset: "",
                                                                label: "Recuperabilidad Laboral"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.itemsView.inicio_invalidez,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                                "hide-details": "",
                                                                class: "ml-4",
                                                                variant: "underlined",
                                                                color: "primary",
                                                                inset: "",
                                                                label: "Inicio Invalidez"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.itemsView.nombre_profesional,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                                label: "Nombre del Profesional",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.itemsView.titulo_profesional,
                                                                "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                                label: "Titulo profesional",
                                                                variant: "underlined",
                                                                items: state.titulo_profesional
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                              modelValue: state.itemsView.folio,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                              label: "Folio",
                                                              type: "number",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_emision,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                              label: "Fecha emisión",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_recepcion,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                              label: "Fecha recepción",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_inicio,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                              label: "Fecha inicio",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.fecha_termino,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                              label: "Fecha de término",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.comentario,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                              label: "Comentario",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.caract_reposo,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                              label: "Características del reposo",
                                                              variant: "underlined",
                                                              items: state.caract_reposo
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.lugar_reposo,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                              label: "Lugar del reposo",
                                                              variant: "underlined",
                                                              items: state.lugar_reposo
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.tipo_licencia,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                              label: "Tipo de Licencia",
                                                              variant: "underlined",
                                                              items: state.tipo_licencia
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.itemsView.recuperabilidad_laboral,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                              "hide-details": "",
                                                              class: "ml-4",
                                                              variant: "underlined",
                                                              color: "primary",
                                                              inset: "",
                                                              label: "Recuperabilidad Laboral"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.itemsView.inicio_invalidez,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                              "hide-details": "",
                                                              class: "ml-4",
                                                              variant: "underlined",
                                                              color: "primary",
                                                              inset: "",
                                                              label: "Inicio Invalidez"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.itemsView.nombre_profesional,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                              label: "Nombre del Profesional",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.itemsView.titulo_profesional,
                                                              "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                              label: "Titulo profesional",
                                                              variant: "underlined",
                                                              items: state.titulo_profesional
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                            modelValue: state.itemsView.folio,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                            label: "Folio",
                                                            type: "number",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.fecha_emision,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                            label: "Fecha emisión",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.fecha_recepcion,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                            label: "Fecha recepción",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.fecha_inicio,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                            label: "Fecha inicio",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.fecha_termino,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                            label: "Fecha de término",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.comentario,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                            label: "Comentario",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.caract_reposo,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                            label: "Características del reposo",
                                                            variant: "underlined",
                                                            items: state.caract_reposo
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.lugar_reposo,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                            label: "Lugar del reposo",
                                                            variant: "underlined",
                                                            items: state.lugar_reposo
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.tipo_licencia,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                            label: "Tipo de Licencia",
                                                            variant: "underlined",
                                                            items: state.tipo_licencia
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.itemsView.recuperabilidad_laboral,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                            "hide-details": "",
                                                            class: "ml-4",
                                                            variant: "underlined",
                                                            color: "primary",
                                                            inset: "",
                                                            label: "Recuperabilidad Laboral"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.itemsView.inicio_invalidez,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                            "hide-details": "",
                                                            class: "ml-4",
                                                            variant: "underlined",
                                                            color: "primary",
                                                            inset: "",
                                                            label: "Inicio Invalidez"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.itemsView.nombre_profesional,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                            label: "Nombre del Profesional",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.itemsView.titulo_profesional,
                                                            "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                            label: "Titulo profesional",
                                                            variant: "underlined",
                                                            items: state.titulo_profesional
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                        color: "#662D91",
                                                        text: "Cerrar",
                                                        variant: "tonal",
                                                        onClick: ($event) => close()
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_btn, {
                                                          class: "mr-2 ml-2",
                                                          color: "#662D91",
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
                                                        color: "#662D91",
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
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.folio,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                          label: "Folio",
                                                          type: "number",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.fecha_emision,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                          label: "Fecha emisión",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.fecha_recepcion,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                          label: "Fecha recepción",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.fecha_inicio,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                          label: "Fecha inicio",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.fecha_termino,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                          label: "Fecha de término",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.comentario,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                          label: "Comentario",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.caract_reposo,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                          label: "Características del reposo",
                                                          variant: "underlined",
                                                          items: state.caract_reposo
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.lugar_reposo,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                          label: "Lugar del reposo",
                                                          variant: "underlined",
                                                          items: state.lugar_reposo
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.tipo_licencia,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                          label: "Tipo de Licencia",
                                                          variant: "underlined",
                                                          items: state.tipo_licencia
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.itemsView.recuperabilidad_laboral,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                          "hide-details": "",
                                                          class: "ml-4",
                                                          variant: "underlined",
                                                          color: "primary",
                                                          inset: "",
                                                          label: "Recuperabilidad Laboral"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.itemsView.inicio_invalidez,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                          "hide-details": "",
                                                          class: "ml-4",
                                                          variant: "underlined",
                                                          color: "primary",
                                                          inset: "",
                                                          label: "Inicio Invalidez"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.itemsView.nombre_profesional,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                          label: "Nombre del Profesional",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.itemsView.titulo_profesional,
                                                          "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                          label: "Titulo profesional",
                                                          variant: "underlined",
                                                          items: state.titulo_profesional
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                      color: "#662D91",
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
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.folio,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                        label: "Folio",
                                                        type: "number",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.fecha_emision,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                        label: "Fecha emisión",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.fecha_recepcion,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                        label: "Fecha recepción",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.fecha_inicio,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                        label: "Fecha inicio",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.fecha_termino,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                        label: "Fecha de término",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.comentario,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                        label: "Comentario",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.caract_reposo,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                        label: "Características del reposo",
                                                        variant: "underlined",
                                                        items: state.caract_reposo
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.lugar_reposo,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                        label: "Lugar del reposo",
                                                        variant: "underlined",
                                                        items: state.lugar_reposo
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.tipo_licencia,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                        label: "Tipo de Licencia",
                                                        variant: "underlined",
                                                        items: state.tipo_licencia
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.itemsView.recuperabilidad_laboral,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                        "hide-details": "",
                                                        class: "ml-4",
                                                        variant: "underlined",
                                                        color: "primary",
                                                        inset: "",
                                                        label: "Recuperabilidad Laboral"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.itemsView.inicio_invalidez,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                        "hide-details": "",
                                                        class: "ml-4",
                                                        variant: "underlined",
                                                        color: "primary",
                                                        inset: "",
                                                        label: "Inicio Invalidez"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.itemsView.nombre_profesional,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                        label: "Nombre del Profesional",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.itemsView.titulo_profesional,
                                                        "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                        label: "Titulo profesional",
                                                        variant: "underlined",
                                                        items: state.titulo_profesional
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                    color: "#662D91",
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
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.folio,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                      label: "Folio",
                                                      type: "number",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.fecha_emision,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                      label: "Fecha emisión",
                                                      type: "date",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.fecha_recepcion,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                      label: "Fecha recepción",
                                                      type: "date",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.fecha_inicio,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                      label: "Fecha inicio",
                                                      type: "date",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.fecha_termino,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                      label: "Fecha de término",
                                                      type: "date",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.comentario,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                      label: "Comentario",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.caract_reposo,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                      label: "Características del reposo",
                                                      variant: "underlined",
                                                      items: state.caract_reposo
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.lugar_reposo,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                      label: "Lugar del reposo",
                                                      variant: "underlined",
                                                      items: state.lugar_reposo
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.tipo_licencia,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                      label: "Tipo de Licencia",
                                                      variant: "underlined",
                                                      items: state.tipo_licencia
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.itemsView.recuperabilidad_laboral,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                      "hide-details": "",
                                                      class: "ml-4",
                                                      variant: "underlined",
                                                      color: "primary",
                                                      inset: "",
                                                      label: "Recuperabilidad Laboral"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.itemsView.inicio_invalidez,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                      "hide-details": "",
                                                      class: "ml-4",
                                                      variant: "underlined",
                                                      color: "primary",
                                                      inset: "",
                                                      label: "Inicio Invalidez"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.itemsView.nombre_profesional,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                      label: "Nombre del Profesional",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.itemsView.titulo_profesional,
                                                      "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                      label: "Titulo profesional",
                                                      variant: "underlined",
                                                      items: state.titulo_profesional
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                  color: "#662D91",
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
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.folio,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                    label: "Folio",
                                                    type: "number",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.fecha_emision,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                    label: "Fecha emisión",
                                                    type: "date",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.fecha_recepcion,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                    label: "Fecha recepción",
                                                    type: "date",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.fecha_inicio,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                    label: "Fecha inicio",
                                                    type: "date",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.fecha_termino,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                    label: "Fecha de término",
                                                    type: "date",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.comentario,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                    label: "Comentario",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.caract_reposo,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                    label: "Características del reposo",
                                                    variant: "underlined",
                                                    items: state.caract_reposo
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.lugar_reposo,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                    label: "Lugar del reposo",
                                                    variant: "underlined",
                                                    items: state.lugar_reposo
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.tipo_licencia,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                    label: "Tipo de Licencia",
                                                    variant: "underlined",
                                                    items: state.tipo_licencia
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.itemsView.recuperabilidad_laboral,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                    "hide-details": "",
                                                    class: "ml-4",
                                                    variant: "underlined",
                                                    color: "primary",
                                                    inset: "",
                                                    label: "Recuperabilidad Laboral"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.itemsView.inicio_invalidez,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                    "hide-details": "",
                                                    class: "ml-4",
                                                    variant: "underlined",
                                                    color: "primary",
                                                    inset: "",
                                                    label: "Inicio Invalidez"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.itemsView.nombre_profesional,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                    label: "Nombre del Profesional",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.itemsView.titulo_profesional,
                                                    "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                    label: "Titulo profesional",
                                                    variant: "underlined",
                                                    items: state.titulo_profesional
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                                color: "#662D91",
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
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.folio,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                  label: "Folio",
                                                  type: "number",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.fecha_emision,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                  label: "Fecha emisión",
                                                  type: "date",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.fecha_recepcion,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                  label: "Fecha recepción",
                                                  type: "date",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.fecha_inicio,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                  label: "Fecha inicio",
                                                  type: "date",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.fecha_termino,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                  label: "Fecha de término",
                                                  type: "date",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.comentario,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                  label: "Comentario",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.caract_reposo,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                  label: "Características del reposo",
                                                  variant: "underlined",
                                                  items: state.caract_reposo
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.lugar_reposo,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                  label: "Lugar del reposo",
                                                  variant: "underlined",
                                                  items: state.lugar_reposo
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.tipo_licencia,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                  label: "Tipo de Licencia",
                                                  variant: "underlined",
                                                  items: state.tipo_licencia
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.itemsView.recuperabilidad_laboral,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                  "hide-details": "",
                                                  class: "ml-4",
                                                  variant: "underlined",
                                                  color: "primary",
                                                  inset: "",
                                                  label: "Recuperabilidad Laboral"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_switch, {
                                                  modelValue: state.itemsView.inicio_invalidez,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                  "hide-details": "",
                                                  class: "ml-4",
                                                  variant: "underlined",
                                                  color: "primary",
                                                  inset: "",
                                                  label: "Inicio Invalidez"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.itemsView.nombre_profesional,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                  label: "Nombre del Profesional",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_v_select, {
                                                  modelValue: state.itemsView.titulo_profesional,
                                                  "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                  label: "Titulo profesional",
                                                  variant: "underlined",
                                                  items: state.titulo_profesional
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                              color: "#662D91",
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
                                            clearable: "",
                                            label: "Rut",
                                            variant: "underlined",
                                            rules: state.rutRules,
                                            modelValue: state.searchQuery.rut,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event
                                          }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_select, {
                                            clearable: "",
                                            label: "Empresa",
                                            variant: "underlined",
                                            modelValue: state.searchQuery.empresa,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.empresa = $event,
                                            items: state.list.empresa,
                                            "item-title": "descripcion",
                                            "item-value": "id"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_select, {
                                            clearable: "",
                                            label: "Unidad",
                                            variant: "underlined",
                                            modelValue: state.searchQuery.unidad,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.unidad = $event,
                                            items: state.list.unidad,
                                            "item-title": "descripcion",
                                            "item-value": "id"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_select, {
                                            clearable: "",
                                            label: "Area",
                                            modelValue: state.searchQuery.area,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.area = $event,
                                            variant: "underlined",
                                            items: state.list.area,
                                            "item-title": "descripcion",
                                            "item-value": "id"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_select, {
                                            clearable: "",
                                            label: "Area (cecos)",
                                            modelValue: state.searchQuery.ceco,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.ceco = $event,
                                            variant: "underlined",
                                            items: state.list.ceco,
                                            "item-title": "descripcion",
                                            "item-value": "id"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            clearable: "",
                                            label: "Fecha emision (desde)",
                                            variant: "underlined",
                                            modelValue: state.searchQuery.fecha_emision.desde,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.desde = $event,
                                            type: "date"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            clearable: "",
                                            label: "Fecha emisión (hasta)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_emision.hasta,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_emision.hasta = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            clearable: "",
                                            label: "Fecha recepción (desde)",
                                            variant: "underlined",
                                            modelValue: state.searchQuery.fecha_recepcion.desde,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.desde = $event,
                                            type: "date"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            clearable: "",
                                            label: "Fecha recepción (hasta)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_recepcion.hasta,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_recepcion.hasta = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_switch, {
                                            modelValue: state.searchQuery.activo,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.activo = $event,
                                            "hide-details": "",
                                            class: "ml-4 mb-4",
                                            variant: "underlined",
                                            color: "green-darken-3",
                                            inset: "",
                                            label: "Activo"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            clearable: "",
                                            label: "Fecha inicio (desde)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_inicio.desde,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.desde = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            clearable: "",
                                            label: "Fecha inicio (hasta)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_inicio.hasta,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_inicio.hasta = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            clearable: "",
                                            label: "Fecha termino (desde)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_termino.desde,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.desde = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            clearable: "",
                                            label: "Fecha termino (hasta)",
                                            variant: "underlined",
                                            type: "date",
                                            modelValue: state.searchQuery.fecha_termino.hasta,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.fecha_termino.hasta = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            modelValue: state.searchQuery.caract_reposo,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.caract_reposo = $event,
                                            label: "Características del reposo",
                                            variant: "underlined",
                                            items: state.caract_reposo,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_select, {
                                            modelValue: state.searchQuery.lugar_reposo,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.lugar_reposo = $event,
                                            label: "Lugar del reposo",
                                            variant: "underlined",
                                            items: state.lugar_reposo,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_select, {
                                            modelValue: state.searchQuery.tipo_licencia,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.tipo_licencia = $event,
                                            label: "Tipo de Licencia",
                                            variant: "underlined",
                                            items: state.tipo_licencia,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_switch, {
                                            modelValue: state.searchQuery.recuperabilidad_laboral,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.recuperabilidad_laboral = $event,
                                            "hide-details": "",
                                            class: "ml-4",
                                            variant: "underlined",
                                            color: "primary",
                                            inset: "",
                                            label: "Recuperabilidad Laboral"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_switch, {
                                            modelValue: state.searchQuery.inicio_invalidez,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.inicio_invalidez = $event,
                                            "hide-details": "",
                                            class: "ml-4",
                                            variant: "underlined",
                                            color: "primary",
                                            inset: "",
                                            label: "Inicio Invalidez"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            modelValue: state.searchQuery.nombre_profesional,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.nombre_profesional = $event,
                                            label: "Nombre del Profesional",
                                            type: "text",
                                            variant: "underlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_select, {
                                            modelValue: state.searchQuery.titulo_profesional,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.titulo_profesional = $event,
                                            label: "Titulo profesional",
                                            variant: "underlined",
                                            items: state.titulo_profesional,
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                        name: "consulta_licencias.xls"
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
                                        color: "#662D91",
                                        class: "mr-2 ml-2",
                                        icon: "mdi-eye",
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
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.folio,
                                                "onUpdate:modelValue": ($event) => state.itemsView.folio = $event,
                                                label: "Folio",
                                                type: "number",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.fecha_emision,
                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_emision = $event,
                                                label: "Fecha emisión",
                                                type: "date",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.fecha_recepcion,
                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_recepcion = $event,
                                                label: "Fecha recepción",
                                                type: "date",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.fecha_inicio,
                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_inicio = $event,
                                                label: "Fecha inicio",
                                                type: "date",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.fecha_termino,
                                                "onUpdate:modelValue": ($event) => state.itemsView.fecha_termino = $event,
                                                label: "Fecha de término",
                                                type: "date",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.comentario,
                                                "onUpdate:modelValue": ($event) => state.itemsView.comentario = $event,
                                                label: "Comentario",
                                                type: "text",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.caract_reposo,
                                                "onUpdate:modelValue": ($event) => state.itemsView.caract_reposo = $event,
                                                label: "Características del reposo",
                                                variant: "underlined",
                                                items: state.caract_reposo
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.lugar_reposo,
                                                "onUpdate:modelValue": ($event) => state.itemsView.lugar_reposo = $event,
                                                label: "Lugar del reposo",
                                                variant: "underlined",
                                                items: state.lugar_reposo
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.tipo_licencia,
                                                "onUpdate:modelValue": ($event) => state.itemsView.tipo_licencia = $event,
                                                label: "Tipo de Licencia",
                                                variant: "underlined",
                                                items: state.tipo_licencia
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_switch, {
                                                modelValue: state.itemsView.recuperabilidad_laboral,
                                                "onUpdate:modelValue": ($event) => state.itemsView.recuperabilidad_laboral = $event,
                                                "hide-details": "",
                                                class: "ml-4",
                                                variant: "underlined",
                                                color: "primary",
                                                inset: "",
                                                label: "Recuperabilidad Laboral"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_switch, {
                                                modelValue: state.itemsView.inicio_invalidez,
                                                "onUpdate:modelValue": ($event) => state.itemsView.inicio_invalidez = $event,
                                                "hide-details": "",
                                                class: "ml-4",
                                                variant: "underlined",
                                                color: "primary",
                                                inset: "",
                                                label: "Inicio Invalidez"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.itemsView.nombre_profesional,
                                                "onUpdate:modelValue": ($event) => state.itemsView.nombre_profesional = $event,
                                                label: "Nombre del Profesional",
                                                type: "text",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_select, {
                                                modelValue: state.itemsView.titulo_profesional,
                                                "onUpdate:modelValue": ($event) => state.itemsView.titulo_profesional = $event,
                                                label: "Titulo profesional",
                                                variant: "underlined",
                                                items: state.titulo_profesional
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                            color: "#662D91",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Consultas/ConsultaLicenciaMedica.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ConsultaLicenciaMedica = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/Consultas/ConsultaLicenciaMedica.vue"]]);
export {
  ConsultaLicenciaMedica as default
};
//# sourceMappingURL=ConsultaLicenciaMedica-Bj_hP6Lb.js.map
