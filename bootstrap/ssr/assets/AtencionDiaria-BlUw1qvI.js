import { reactive, onMounted, computed, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-9lGv6sW_.js";
import { u as useDataStore } from "./store-45BLaymI.js";
import { f as fetchData, a as handleShowItem, o as openToEdit, b as handleRemoveItem, d as openToCreate, c as closeForm, g as handleEditItem, e as handleStoreItem } from "./helper-wNjokA2D.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./logo-DLUxz0ei.js";
import "vue-loading-overlay";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "AtencionDiaria",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDataStore();
    const nombre = store.getSelected.nombre;
    const apellidos = store.getSelected.apellidos;
    const state = reactive({
      endpoints: [
        "accidente",
        "accidente_condicion",
        "calificacion",
        "derivacion",
        "lugar_atencion",
        "medio_derivacion",
        "error_critico",
        "estado_mental",
        "fuente_incidente",
        "responsable",
        "sistema_afectado",
        "tipo_atencion",
        "tipo_licencia",
        "religion",
        "unidad",
        "turno"
      ],
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
      editedItem: {
        paciente_id: null,
        accidente_condicion: null,
        accidente: null,
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
      formTitle: "Atención diaria de Pacientes",
      formCrear: "Nueva Atención",
      formEdit: "Editar datos del atención diaria",
      urlShow: "/atencion_diaria/show",
      urlUpdate: "/atencion_diaria/update",
      urlDelete: "/atencion_diaria/delete",
      urlStore: "/atencion_diaria"
    });
    onMounted(async () => {
      state.list = await fetchData(state.endpoints);
    });
    const editedItemTitle = computed(
      () => state.editedIndex === -1 ? state.formCrear : state.formEdit
    );
    function volver() {
      window.history.back();
    }
    function close() {
      closeForm(state);
    }
    const handleShow = async () => {
      state.searchQuery.paciente_id = store.getSelected.id;
      await handleShowItem(state);
    };
    function openFormCreate() {
      openToCreate(state);
    }
    function storeItems() {
      return state.editedIndex > -1 ? update() : create();
    }
    const create = async () => {
      await handleStoreItem(state, "create");
      closeForm(state);
    };
    function openFormEdit(item) {
      openToEdit(state, item);
    }
    const update = async () => {
      await handleEditItem();
      closeForm(state);
    };
    const remove = async (item) => {
      await handleRemoveItem(state, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      _push(ssrRenderComponent(_component_v_container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, {
              color: "white",
              elevation: 6,
              class: "rounded-lg ma-2 pa-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar_title, { class: "ma-4 pa-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Información del Paciente: ${ssrInterpolate(unref(apellidos))}, ${ssrInterpolate(unref(nombre))}`);
                      } else {
                        return [
                          createTextVNode(" Información del Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_data_table, {
                    headers: state.headers,
                    items: state.tableItems
                  }, {
                    top: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_toolbar, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                variant: "tonal",
                                color: "#009AA4",
                                onClick: volver
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Volver `);
                                  } else {
                                    return [
                                      createTextVNode(" Volver ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
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
                              _push5(ssrRenderComponent(_component_v_btn, {
                                icon: "mdi-update",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: handleShow
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_dialog, {
                                modelValue: state.dialog,
                                "onUpdate:modelValue": ($event) => state.dialog = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card_title, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span class="text-h5"${_scopeId7}>${ssrInterpolate(editedItemTitle.value)}</span>`);
                                              } else {
                                                return [
                                                  createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_card_text, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_container, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_row, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_col, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.fecha_atencion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                                    label: "Fecha de atención",
                                                                    clearable: "",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.turno,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                                    items: state.list.turno,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Turno",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.sistema_afectado,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                                    items: state.list.sistema_afectado,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Sistema afectado",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.derivacion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                                    items: state.list.derivacion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Derivación",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.medio_derivacion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                                    items: state.list.medio_derivacion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Medio de derivación",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.fuente_incidente,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                                    items: state.list.fuente_incidente,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Fuente de incidente",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.fecha_atencion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                                      label: "Fecha de atención",
                                                                      clearable: "",
                                                                      type: "date",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.turno,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                                      items: state.list.turno,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Turno",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.sistema_afectado,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                                      items: state.list.sistema_afectado,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Sistema afectado",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.derivacion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                                      items: state.list.derivacion,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Derivación",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.medio_derivacion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                                      items: state.list.medio_derivacion,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Medio de derivación",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.fuente_incidente,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                                      items: state.list.fuente_incidente,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Fuente de incidente",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_col, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.motivo_consulta,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                                    label: "Motivo de consulta",
                                                                    clearable: "",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_switch, {
                                                                    modelValue: state.editedItem.acompanado,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                                    "hide-details": "",
                                                                    class: "ml-4",
                                                                    variant: "underlined",
                                                                    color: "green-darken-3",
                                                                    inset: "",
                                                                    label: "Acompañado"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.accidente,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                                    items: state.list.accidente,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Accidente",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.medicamentos,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                                    label: "Medicamento suministrados",
                                                                    clearable: "",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.accidente_condicion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                                    items: state.list.accidente_condicion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    label: "Accidente ocurre por una acción o condición insegura",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                                    items: state.list.responsable,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Responsable",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.motivo_consulta,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                                      label: "Motivo de consulta",
                                                                      clearable: "",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.acompanado,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                                      "hide-details": "",
                                                                      class: "ml-4",
                                                                      variant: "underlined",
                                                                      color: "green-darken-3",
                                                                      inset: "",
                                                                      label: "Acompañado"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.accidente,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                                      items: state.list.accidente,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Accidente",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.medicamentos,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                                      label: "Medicamento suministrados",
                                                                      clearable: "",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.accidente_condicion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                                      items: state.list.accidente_condicion,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      label: "Accidente ocurre por una acción o condición insegura",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                                      items: state.list.responsable,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Responsable",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_col, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.hora_inicio,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                                    label: "Hora de inicio",
                                                                    clearable: "",
                                                                    type: "time",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.nombre_supervisor,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                                    label: "Nombre supervisor",
                                                                    clearable: "",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.dias_descanso,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                                    label: "Días de descanso",
                                                                    clearable: "",
                                                                    type: "number",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.at_realizada_por,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                                    label: "Atención realizada por",
                                                                    clearable: "",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.calificacion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                                    items: state.list.calificacion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Calificación",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.lugar_atencion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                                    items: state.list.lugar_atencion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Lugar atención",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.hora_inicio,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                                      label: "Hora de inicio",
                                                                      clearable: "",
                                                                      type: "time",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.nombre_supervisor,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                                      label: "Nombre supervisor",
                                                                      clearable: "",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.dias_descanso,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                                      label: "Días de descanso",
                                                                      clearable: "",
                                                                      type: "number",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.at_realizada_por,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                                      label: "Atención realizada por",
                                                                      clearable: "",
                                                                      type: "text",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.calificacion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                                      items: state.list.calificacion,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Calificación",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.lugar_atencion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                                      items: state.list.lugar_atencion,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Lugar atención",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_col, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.hora_termino,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                                    label: "Hora de termino",
                                                                    clearable: "",
                                                                    type: "time",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.tipo_atencion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                                    items: state.list.tipo_atencion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Tipo de atención",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.tipo_licencia,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                    items: state.list.tipo_licencia,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Tipo de Licencia",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.descripcion_breve,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                                    label: "Descripción breve",
                                                                    type: "text",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.estado_mental,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                                    items: state.list.estado_mental,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Estado Mental",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
                                                                    modelValue: state.editedItem.error_critico,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                                    items: state.list.error_critico,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Error crítico",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.hora_termino,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                                      label: "Hora de termino",
                                                                      clearable: "",
                                                                      type: "time",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.tipo_atencion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                                      items: state.list.tipo_atencion,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Tipo de atención",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.tipo_licencia,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                      items: state.list.tipo_licencia,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Tipo de Licencia",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.descripcion_breve,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                                      label: "Descripción breve",
                                                                      type: "text",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.estado_mental,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                                      items: state.list.estado_mental,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Estado Mental",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                    createVNode(_component_v_select, {
                                                                      modelValue: state.editedItem.error_critico,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                                      items: state.list.error_critico,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      clearable: "",
                                                                      label: "Error crítico",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_col, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_switch, {
                                                                    modelValue: state.editedItem.alerta_she,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Alerta SHE",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    clearable: "",
                                                                    inset: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_switch, {
                                                                    modelValue: state.editedItem.cuenta_acr,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Cuenta ACR",
                                                                    clearable: "",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_switch, {
                                                                    modelValue: state.editedItem.derivacion_inmediata,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Derivación inmediata",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    clearable: "",
                                                                    inset: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_switch, {
                                                                    modelValue: state.editedItem.declaracion_completa,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Declaración completa",
                                                                    clearable: "",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_switch, {
                                                                    modelValue: state.editedItem.puede_reintegrarse,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Puede reintegrarse",
                                                                    clearable: "",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.alerta_she,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                                      class: "mt-2 mb-4",
                                                                      label: "Alerta SHE",
                                                                      color: "success",
                                                                      "hide-details": "",
                                                                      clearable: "",
                                                                      inset: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.cuenta_acr,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                                      class: "mt-2 mb-4",
                                                                      label: "Cuenta ACR",
                                                                      clearable: "",
                                                                      color: "success",
                                                                      "hide-details": "",
                                                                      inset: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.derivacion_inmediata,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                                      class: "mt-2 mb-4",
                                                                      label: "Derivación inmediata",
                                                                      color: "success",
                                                                      "hide-details": "",
                                                                      clearable: "",
                                                                      inset: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.declaracion_completa,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                                      class: "mt-2 mb-4",
                                                                      label: "Declaración completa",
                                                                      clearable: "",
                                                                      color: "success",
                                                                      "hide-details": "",
                                                                      inset: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.puede_reintegrarse,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                                      class: "mt-2 mb-4",
                                                                      label: "Puede reintegrarse",
                                                                      clearable: "",
                                                                      color: "success",
                                                                      "hide-details": "",
                                                                      inset: "",
                                                                      variant: "underlined"
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
                                                                    modelValue: state.editedItem.fecha_atencion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                                    label: "Fecha de atención",
                                                                    clearable: "",
                                                                    type: "date",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.turno,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                                    items: state.list.turno,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Turno",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.sistema_afectado,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                                    items: state.list.sistema_afectado,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Sistema afectado",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.derivacion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                                    items: state.list.derivacion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Derivación",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.medio_derivacion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                                    items: state.list.medio_derivacion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Medio de derivación",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.fuente_incidente,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                                    items: state.list.fuente_incidente,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Fuente de incidente",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.motivo_consulta,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                                    label: "Motivo de consulta",
                                                                    clearable: "",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.acompanado,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                                    "hide-details": "",
                                                                    class: "ml-4",
                                                                    variant: "underlined",
                                                                    color: "green-darken-3",
                                                                    inset: "",
                                                                    label: "Acompañado"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.accidente,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                                    items: state.list.accidente,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Accidente",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.medicamentos,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                                    label: "Medicamento suministrados",
                                                                    clearable: "",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.accidente_condicion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                                    items: state.list.accidente_condicion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    label: "Accidente ocurre por una acción o condición insegura",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                                    items: state.list.responsable,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Responsable",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.hora_inicio,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                                    label: "Hora de inicio",
                                                                    clearable: "",
                                                                    type: "time",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.nombre_supervisor,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                                    label: "Nombre supervisor",
                                                                    clearable: "",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.dias_descanso,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                                    label: "Días de descanso",
                                                                    clearable: "",
                                                                    type: "number",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.at_realizada_por,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                                    label: "Atención realizada por",
                                                                    clearable: "",
                                                                    type: "text",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.calificacion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                                    items: state.list.calificacion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Calificación",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.lugar_atencion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                                    items: state.list.lugar_atencion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Lugar atención",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.hora_termino,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                                    label: "Hora de termino",
                                                                    clearable: "",
                                                                    type: "time",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.tipo_atencion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                                    items: state.list.tipo_atencion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Tipo de atención",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.tipo_licencia,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                    items: state.list.tipo_licencia,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Tipo de Licencia",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.descripcion_breve,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                                    label: "Descripción breve",
                                                                    type: "text",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.estado_mental,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                                    items: state.list.estado_mental,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Estado Mental",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                  createVNode(_component_v_select, {
                                                                    modelValue: state.editedItem.error_critico,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                                    items: state.list.error_critico,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    clearable: "",
                                                                    label: "Error crítico",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.alerta_she,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Alerta SHE",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    clearable: "",
                                                                    inset: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.cuenta_acr,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Cuenta ACR",
                                                                    clearable: "",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.derivacion_inmediata,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Derivación inmediata",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    clearable: "",
                                                                    inset: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.declaracion_completa,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Declaración completa",
                                                                    clearable: "",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.puede_reintegrarse,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                                    class: "mt-2 mb-4",
                                                                    label: "Puede reintegrarse",
                                                                    clearable: "",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    variant: "underlined"
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
                                                                  modelValue: state.editedItem.fecha_atencion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                                  label: "Fecha de atención",
                                                                  clearable: "",
                                                                  type: "date",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.turno,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                                  items: state.list.turno,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Turno",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.sistema_afectado,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                                  items: state.list.sistema_afectado,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Sistema afectado",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.derivacion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                                  items: state.list.derivacion,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Derivación",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.medio_derivacion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                                  items: state.list.medio_derivacion,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Medio de derivación",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.fuente_incidente,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                                  items: state.list.fuente_incidente,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Fuente de incidente",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.motivo_consulta,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                                  label: "Motivo de consulta",
                                                                  clearable: "",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.acompanado,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                                  "hide-details": "",
                                                                  class: "ml-4",
                                                                  variant: "underlined",
                                                                  color: "green-darken-3",
                                                                  inset: "",
                                                                  label: "Acompañado"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.accidente,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                                  items: state.list.accidente,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Accidente",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.medicamentos,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                                  label: "Medicamento suministrados",
                                                                  clearable: "",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.accidente_condicion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                                  items: state.list.accidente_condicion,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  label: "Accidente ocurre por una acción o condición insegura",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                                  items: state.list.responsable,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Responsable",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.hora_inicio,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                                  label: "Hora de inicio",
                                                                  clearable: "",
                                                                  type: "time",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.nombre_supervisor,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                                  label: "Nombre supervisor",
                                                                  clearable: "",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.dias_descanso,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                                  label: "Días de descanso",
                                                                  clearable: "",
                                                                  type: "number",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.at_realizada_por,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                                  label: "Atención realizada por",
                                                                  clearable: "",
                                                                  type: "text",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.calificacion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                                  items: state.list.calificacion,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Calificación",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.lugar_atencion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                                  items: state.list.lugar_atencion,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Lugar atención",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.hora_termino,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                                  label: "Hora de termino",
                                                                  clearable: "",
                                                                  type: "time",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.tipo_atencion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                                  items: state.list.tipo_atencion,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Tipo de atención",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.tipo_licencia,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                  items: state.list.tipo_licencia,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Tipo de Licencia",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.descripcion_breve,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                                  label: "Descripción breve",
                                                                  type: "text",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.estado_mental,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                                  items: state.list.estado_mental,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Estado Mental",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                                createVNode(_component_v_select, {
                                                                  modelValue: state.editedItem.error_critico,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                                  items: state.list.error_critico,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  clearable: "",
                                                                  label: "Error crítico",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.alerta_she,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                                  class: "mt-2 mb-4",
                                                                  label: "Alerta SHE",
                                                                  color: "success",
                                                                  "hide-details": "",
                                                                  clearable: "",
                                                                  inset: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.cuenta_acr,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                                  class: "mt-2 mb-4",
                                                                  label: "Cuenta ACR",
                                                                  clearable: "",
                                                                  color: "success",
                                                                  "hide-details": "",
                                                                  inset: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.derivacion_inmediata,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                                  class: "mt-2 mb-4",
                                                                  label: "Derivación inmediata",
                                                                  color: "success",
                                                                  "hide-details": "",
                                                                  clearable: "",
                                                                  inset: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.declaracion_completa,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                                  class: "mt-2 mb-4",
                                                                  label: "Declaración completa",
                                                                  clearable: "",
                                                                  color: "success",
                                                                  "hide-details": "",
                                                                  inset: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.puede_reintegrarse,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                                  class: "mt-2 mb-4",
                                                                  label: "Puede reintegrarse",
                                                                  clearable: "",
                                                                  color: "success",
                                                                  "hide-details": "",
                                                                  inset: "",
                                                                  variant: "underlined"
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
                                                  createVNode(_component_v_container, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.fecha_atencion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                                label: "Fecha de atención",
                                                                clearable: "",
                                                                type: "date",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.turno,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                                items: state.list.turno,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Turno",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.sistema_afectado,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                                items: state.list.sistema_afectado,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Sistema afectado",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.derivacion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                                items: state.list.derivacion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Derivación",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.medio_derivacion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                                items: state.list.medio_derivacion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Medio de derivación",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.fuente_incidente,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                                items: state.list.fuente_incidente,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Fuente de incidente",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.motivo_consulta,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                                label: "Motivo de consulta",
                                                                clearable: "",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.acompanado,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                                "hide-details": "",
                                                                class: "ml-4",
                                                                variant: "underlined",
                                                                color: "green-darken-3",
                                                                inset: "",
                                                                label: "Acompañado"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.accidente,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                                items: state.list.accidente,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Accidente",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.medicamentos,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                                label: "Medicamento suministrados",
                                                                clearable: "",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.accidente_condicion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                                items: state.list.accidente_condicion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Accidente ocurre por una acción o condición insegura",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                                items: state.list.responsable,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Responsable",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.hora_inicio,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                                label: "Hora de inicio",
                                                                clearable: "",
                                                                type: "time",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.nombre_supervisor,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                                label: "Nombre supervisor",
                                                                clearable: "",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.dias_descanso,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                                label: "Días de descanso",
                                                                clearable: "",
                                                                type: "number",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.at_realizada_por,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                                label: "Atención realizada por",
                                                                clearable: "",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.calificacion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                                items: state.list.calificacion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Calificación",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.lugar_atencion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                                items: state.list.lugar_atencion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Lugar atención",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.hora_termino,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                                label: "Hora de termino",
                                                                clearable: "",
                                                                type: "time",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.tipo_atencion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                                items: state.list.tipo_atencion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Tipo de atención",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.tipo_licencia,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                                items: state.list.tipo_licencia,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Tipo de Licencia",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.descripcion_breve,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                                label: "Descripción breve",
                                                                type: "text",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.estado_mental,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                                items: state.list.estado_mental,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Estado Mental",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                              createVNode(_component_v_select, {
                                                                modelValue: state.editedItem.error_critico,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                                items: state.list.error_critico,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                clearable: "",
                                                                label: "Error crítico",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.alerta_she,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Alerta SHE",
                                                                color: "success",
                                                                "hide-details": "",
                                                                clearable: "",
                                                                inset: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.cuenta_acr,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Cuenta ACR",
                                                                clearable: "",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.derivacion_inmediata,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Derivación inmediata",
                                                                color: "success",
                                                                "hide-details": "",
                                                                clearable: "",
                                                                inset: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.declaracion_completa,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Declaración completa",
                                                                clearable: "",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.puede_reintegrarse,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                                class: "mt-2 mb-4",
                                                                label: "Puede reintegrarse",
                                                                clearable: "",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                variant: "underlined"
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
                                          _push7(ssrRenderComponent(_component_v_card_actions, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_spacer, null, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  color: "#009AA4",
                                                  variant: "tonal",
                                                  onClick: close
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
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  color: "#009AA4",
                                                  variant: "tonal",
                                                  onClick: storeItems
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Guardar `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Guardar ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_spacer),
                                                  createVNode(_component_v_btn, {
                                                    color: "#009AA4",
                                                    variant: "tonal",
                                                    onClick: close
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Cancelar ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_btn, {
                                                    color: "#009AA4",
                                                    variant: "tonal",
                                                    onClick: storeItems
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Guardar ")
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
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_container, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.fecha_atencion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                              label: "Fecha de atención",
                                                              clearable: "",
                                                              type: "date",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.turno,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                              items: state.list.turno,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Turno",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.sistema_afectado,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                              items: state.list.sistema_afectado,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Sistema afectado",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.derivacion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                              items: state.list.derivacion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Derivación",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.medio_derivacion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                              items: state.list.medio_derivacion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Medio de derivación",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.fuente_incidente,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                              items: state.list.fuente_incidente,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Fuente de incidente",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.motivo_consulta,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                              label: "Motivo de consulta",
                                                              clearable: "",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.acompanado,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                              "hide-details": "",
                                                              class: "ml-4",
                                                              variant: "underlined",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Acompañado"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.accidente,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                              items: state.list.accidente,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Accidente",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.medicamentos,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                              label: "Medicamento suministrados",
                                                              clearable: "",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.accidente_condicion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                              items: state.list.accidente_condicion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Accidente ocurre por una acción o condición insegura",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                              items: state.list.responsable,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Responsable",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.hora_inicio,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                              label: "Hora de inicio",
                                                              clearable: "",
                                                              type: "time",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.nombre_supervisor,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                              label: "Nombre supervisor",
                                                              clearable: "",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.dias_descanso,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                              label: "Días de descanso",
                                                              clearable: "",
                                                              type: "number",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.at_realizada_por,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                              label: "Atención realizada por",
                                                              clearable: "",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.calificacion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                              items: state.list.calificacion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Calificación",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.lugar_atencion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                              items: state.list.lugar_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Lugar atención",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.hora_termino,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                              label: "Hora de termino",
                                                              clearable: "",
                                                              type: "time",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.tipo_atencion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                              items: state.list.tipo_atencion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Tipo de atención",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.tipo_licencia,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                              items: state.list.tipo_licencia,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Tipo de Licencia",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.descripcion_breve,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                              label: "Descripción breve",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.estado_mental,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                              items: state.list.estado_mental,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Estado Mental",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                            createVNode(_component_v_select, {
                                                              modelValue: state.editedItem.error_critico,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                              items: state.list.error_critico,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              clearable: "",
                                                              label: "Error crítico",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.alerta_she,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Alerta SHE",
                                                              color: "success",
                                                              "hide-details": "",
                                                              clearable: "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.cuenta_acr,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Cuenta ACR",
                                                              clearable: "",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.derivacion_inmediata,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Derivación inmediata",
                                                              color: "success",
                                                              "hide-details": "",
                                                              clearable: "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.declaracion_completa,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Declaración completa",
                                                              clearable: "",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.puede_reintegrarse,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                              class: "mt-2 mb-4",
                                                              label: "Puede reintegrarse",
                                                              clearable: "",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              variant: "underlined"
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
                                            createVNode(_component_v_card_actions, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_spacer),
                                                createVNode(_component_v_btn, {
                                                  color: "#009AA4",
                                                  variant: "tonal",
                                                  onClick: close
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Cancelar ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_btn, {
                                                  color: "#009AA4",
                                                  variant: "tonal",
                                                  onClick: storeItems
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Guardar ")
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
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_container, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.fecha_atencion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                            label: "Fecha de atención",
                                                            clearable: "",
                                                            type: "date",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.turno,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                            items: state.list.turno,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Turno",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.sistema_afectado,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                            items: state.list.sistema_afectado,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Sistema afectado",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.derivacion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                            items: state.list.derivacion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Derivación",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.medio_derivacion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                            items: state.list.medio_derivacion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Medio de derivación",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.fuente_incidente,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                            items: state.list.fuente_incidente,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Fuente de incidente",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.motivo_consulta,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                            label: "Motivo de consulta",
                                                            clearable: "",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.acompanado,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                            "hide-details": "",
                                                            class: "ml-4",
                                                            variant: "underlined",
                                                            color: "green-darken-3",
                                                            inset: "",
                                                            label: "Acompañado"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.accidente,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                            items: state.list.accidente,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Accidente",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.medicamentos,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                            label: "Medicamento suministrados",
                                                            clearable: "",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.accidente_condicion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                            items: state.list.accidente_condicion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Accidente ocurre por una acción o condición insegura",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                            items: state.list.responsable,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Responsable",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.hora_inicio,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                            label: "Hora de inicio",
                                                            clearable: "",
                                                            type: "time",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.nombre_supervisor,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                            label: "Nombre supervisor",
                                                            clearable: "",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.dias_descanso,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                            label: "Días de descanso",
                                                            clearable: "",
                                                            type: "number",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.at_realizada_por,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                            label: "Atención realizada por",
                                                            clearable: "",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.calificacion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                            items: state.list.calificacion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Calificación",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.lugar_atencion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                            items: state.list.lugar_atencion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Lugar atención",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.hora_termino,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                            label: "Hora de termino",
                                                            clearable: "",
                                                            type: "time",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.tipo_atencion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                            items: state.list.tipo_atencion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Tipo de atención",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.tipo_licencia,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                            items: state.list.tipo_licencia,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Tipo de Licencia",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.descripcion_breve,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                            label: "Descripción breve",
                                                            type: "text",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.estado_mental,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                            items: state.list.estado_mental,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Estado Mental",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                          createVNode(_component_v_select, {
                                                            modelValue: state.editedItem.error_critico,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                            items: state.list.error_critico,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            clearable: "",
                                                            label: "Error crítico",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.alerta_she,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Alerta SHE",
                                                            color: "success",
                                                            "hide-details": "",
                                                            clearable: "",
                                                            inset: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.cuenta_acr,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Cuenta ACR",
                                                            clearable: "",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.derivacion_inmediata,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Derivación inmediata",
                                                            color: "success",
                                                            "hide-details": "",
                                                            clearable: "",
                                                            inset: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.declaracion_completa,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Declaración completa",
                                                            clearable: "",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.puede_reintegrarse,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                            class: "mt-2 mb-4",
                                                            label: "Puede reintegrarse",
                                                            clearable: "",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            variant: "underlined"
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
                                          createVNode(_component_v_card_actions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_spacer),
                                              createVNode(_component_v_btn, {
                                                color: "#009AA4",
                                                variant: "tonal",
                                                onClick: close
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Cancelar ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_btn, {
                                                color: "#009AA4",
                                                variant: "tonal",
                                                onClick: storeItems
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Guardar ")
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
                                createVNode(_component_v_btn, {
                                  variant: "tonal",
                                  color: "#009AA4",
                                  onClick: volver
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Volver ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_toolbar_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(state.formTitle), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_btn, {
                                  icon: "mdi-update",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  onClick: handleShow
                                }),
                                createVNode(_component_v_btn, {
                                  icon: "mdi-account-multiple-plus",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  onClick: openFormCreate
                                }),
                                createVNode(_component_v_dialog, {
                                  modelValue: state.dialog,
                                  "onUpdate:modelValue": ($event) => state.dialog = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_container, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.fecha_atencion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                          label: "Fecha de atención",
                                                          clearable: "",
                                                          type: "date",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.turno,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                          items: state.list.turno,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Turno",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.sistema_afectado,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                          items: state.list.sistema_afectado,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Sistema afectado",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.derivacion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                          items: state.list.derivacion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Derivación",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.medio_derivacion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                          items: state.list.medio_derivacion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Medio de derivación",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.fuente_incidente,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                          items: state.list.fuente_incidente,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Fuente de incidente",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.motivo_consulta,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                          label: "Motivo de consulta",
                                                          clearable: "",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.acompanado,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                          "hide-details": "",
                                                          class: "ml-4",
                                                          variant: "underlined",
                                                          color: "green-darken-3",
                                                          inset: "",
                                                          label: "Acompañado"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.accidente,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                          items: state.list.accidente,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Accidente",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.medicamentos,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                          label: "Medicamento suministrados",
                                                          clearable: "",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.accidente_condicion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                          items: state.list.accidente_condicion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Accidente ocurre por una acción o condición insegura",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                          items: state.list.responsable,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Responsable",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.hora_inicio,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                          label: "Hora de inicio",
                                                          clearable: "",
                                                          type: "time",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.nombre_supervisor,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                          label: "Nombre supervisor",
                                                          clearable: "",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.dias_descanso,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                          label: "Días de descanso",
                                                          clearable: "",
                                                          type: "number",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.at_realizada_por,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                          label: "Atención realizada por",
                                                          clearable: "",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.calificacion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                          items: state.list.calificacion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Calificación",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.lugar_atencion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                          items: state.list.lugar_atencion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Lugar atención",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.hora_termino,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                          label: "Hora de termino",
                                                          clearable: "",
                                                          type: "time",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.tipo_atencion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                          items: state.list.tipo_atencion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Tipo de atención",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.tipo_licencia,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                          items: state.list.tipo_licencia,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Tipo de Licencia",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.descripcion_breve,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                          label: "Descripción breve",
                                                          type: "text",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.estado_mental,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                          items: state.list.estado_mental,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Estado Mental",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                        createVNode(_component_v_select, {
                                                          modelValue: state.editedItem.error_critico,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                          items: state.list.error_critico,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          clearable: "",
                                                          label: "Error crítico",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.alerta_she,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Alerta SHE",
                                                          color: "success",
                                                          "hide-details": "",
                                                          clearable: "",
                                                          inset: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.cuenta_acr,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Cuenta ACR",
                                                          clearable: "",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.derivacion_inmediata,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Derivación inmediata",
                                                          color: "success",
                                                          "hide-details": "",
                                                          clearable: "",
                                                          inset: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.declaracion_completa,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Declaración completa",
                                                          clearable: "",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.puede_reintegrarse,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                          class: "mt-2 mb-4",
                                                          label: "Puede reintegrarse",
                                                          clearable: "",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          variant: "underlined"
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
                                        createVNode(_component_v_card_actions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_spacer),
                                            createVNode(_component_v_btn, {
                                              color: "#009AA4",
                                              variant: "tonal",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancelar ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              color: "#009AA4",
                                              variant: "tonal",
                                              onClick: storeItems
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Guardar ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_toolbar, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                variant: "tonal",
                                color: "#009AA4",
                                onClick: volver
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Volver ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_toolbar_title, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(state.formTitle), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_btn, {
                                icon: "mdi-update",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: handleShow
                              }),
                              createVNode(_component_v_btn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              }),
                              createVNode(_component_v_dialog, {
                                modelValue: state.dialog,
                                "onUpdate:modelValue": ($event) => state.dialog = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_container, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.fecha_atencion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                        label: "Fecha de atención",
                                                        clearable: "",
                                                        type: "date",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.turno,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                        items: state.list.turno,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Turno",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.sistema_afectado,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                        items: state.list.sistema_afectado,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Sistema afectado",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.derivacion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                        items: state.list.derivacion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Derivación",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.medio_derivacion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                        items: state.list.medio_derivacion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Medio de derivación",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.fuente_incidente,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                        items: state.list.fuente_incidente,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Fuente de incidente",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.motivo_consulta,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                        label: "Motivo de consulta",
                                                        clearable: "",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.acompanado,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                        "hide-details": "",
                                                        class: "ml-4",
                                                        variant: "underlined",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        label: "Acompañado"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.accidente,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                        items: state.list.accidente,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Accidente",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.medicamentos,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                        label: "Medicamento suministrados",
                                                        clearable: "",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.accidente_condicion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                        items: state.list.accidente_condicion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Accidente ocurre por una acción o condición insegura",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                        items: state.list.responsable,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Responsable",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.hora_inicio,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                        label: "Hora de inicio",
                                                        clearable: "",
                                                        type: "time",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.nombre_supervisor,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                        label: "Nombre supervisor",
                                                        clearable: "",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.dias_descanso,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                        label: "Días de descanso",
                                                        clearable: "",
                                                        type: "number",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.at_realizada_por,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                        label: "Atención realizada por",
                                                        clearable: "",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.calificacion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                        items: state.list.calificacion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Calificación",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.lugar_atencion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                        items: state.list.lugar_atencion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Lugar atención",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.hora_termino,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                        label: "Hora de termino",
                                                        clearable: "",
                                                        type: "time",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.tipo_atencion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                        items: state.list.tipo_atencion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Tipo de atención",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.tipo_licencia,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                        items: state.list.tipo_licencia,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Tipo de Licencia",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.descripcion_breve,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                        label: "Descripción breve",
                                                        type: "text",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.estado_mental,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                        items: state.list.estado_mental,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Estado Mental",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                      createVNode(_component_v_select, {
                                                        modelValue: state.editedItem.error_critico,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                        items: state.list.error_critico,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        clearable: "",
                                                        label: "Error crítico",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.alerta_she,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Alerta SHE",
                                                        color: "success",
                                                        "hide-details": "",
                                                        clearable: "",
                                                        inset: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.cuenta_acr,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Cuenta ACR",
                                                        clearable: "",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.derivacion_inmediata,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Derivación inmediata",
                                                        color: "success",
                                                        "hide-details": "",
                                                        clearable: "",
                                                        inset: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.declaracion_completa,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Declaración completa",
                                                        clearable: "",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.puede_reintegrarse,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                        class: "mt-2 mb-4",
                                                        label: "Puede reintegrarse",
                                                        clearable: "",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        variant: "underlined"
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
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_spacer),
                                          createVNode(_component_v_btn, {
                                            color: "#009AA4",
                                            variant: "tonal",
                                            onClick: close
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancelar ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
                                            color: "#009AA4",
                                            variant: "tonal",
                                            onClick: storeItems
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Guardar ")
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
                    "item.actions": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_tooltip, {
                          text: "Editar ",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-account-edit",
                                onClick: ($event) => openFormEdit(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps(props, {
                                  density: "compact",
                                  class: "mr-2 ml-2",
                                  color: "#009AA4",
                                  variant: "tonal",
                                  icon: "mdi-account-edit",
                                  onClick: ($event) => openFormEdit(item)
                                }), null, 16, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_tooltip, {
                          text: "Eliminar",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-delete",
                                onClick: ($event) => remove(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps(props, {
                                  density: "compact",
                                  class: "mr-2 ml-2",
                                  color: "#009AA4",
                                  variant: "tonal",
                                  icon: "mdi-delete",
                                  onClick: ($event) => remove(item)
                                }), null, 16, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_tooltip, {
                            text: "Editar ",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-account-edit",
                                onClick: ($event) => openFormEdit(item)
                              }), null, 16, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_tooltip, {
                            text: "Eliminar",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-delete",
                                onClick: ($event) => remove(item)
                              }), null, 16, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    "no-data": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          variant: "tonal",
                          onClick: handleShow
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Iniciar `);
                            } else {
                              return [
                                createTextVNode(" Iniciar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            variant: "tonal",
                            onClick: handleShow
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Iniciar ")
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
                    createVNode(_component_v_toolbar_title, { class: "ma-4 pa-4" }, {
                      default: withCtx(() => [
                        createTextVNode(" Información del Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_data_table, {
                      headers: state.headers,
                      items: state.tableItems
                    }, {
                      top: withCtx(() => [
                        createVNode(_component_v_toolbar, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              variant: "tonal",
                              color: "#009AA4",
                              onClick: volver
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Volver ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_toolbar_title, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(state.formTitle), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              icon: "mdi-update",
                              variant: "tonal",
                              class: "ma-2",
                              color: "#009AA4",
                              onClick: handleShow
                            }),
                            createVNode(_component_v_btn, {
                              icon: "mdi-account-multiple-plus",
                              variant: "tonal",
                              class: "ma-2",
                              color: "#009AA4",
                              onClick: openFormCreate
                            }),
                            createVNode(_component_v_dialog, {
                              modelValue: state.dialog,
                              "onUpdate:modelValue": ($event) => state.dialog = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_container, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.fecha_atencion,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                      label: "Fecha de atención",
                                                      clearable: "",
                                                      type: "date",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.turno,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                      items: state.list.turno,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Turno",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.sistema_afectado,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                      items: state.list.sistema_afectado,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Sistema afectado",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.derivacion,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                      items: state.list.derivacion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Derivación",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.medio_derivacion,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                      items: state.list.medio_derivacion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Medio de derivación",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.fuente_incidente,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                      items: state.list.fuente_incidente,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Fuente de incidente",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.motivo_consulta,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                      label: "Motivo de consulta",
                                                      clearable: "",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.editedItem.acompanado,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                      "hide-details": "",
                                                      class: "ml-4",
                                                      variant: "underlined",
                                                      color: "green-darken-3",
                                                      inset: "",
                                                      label: "Acompañado"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.accidente,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                      items: state.list.accidente,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Accidente",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.medicamentos,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                      label: "Medicamento suministrados",
                                                      clearable: "",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.accidente_condicion,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                      items: state.list.accidente_condicion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Accidente ocurre por una acción o condición insegura",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                      items: state.list.responsable,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Responsable",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.hora_inicio,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                      label: "Hora de inicio",
                                                      clearable: "",
                                                      type: "time",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.nombre_supervisor,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                      label: "Nombre supervisor",
                                                      clearable: "",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.dias_descanso,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                      label: "Días de descanso",
                                                      clearable: "",
                                                      type: "number",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.at_realizada_por,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                      label: "Atención realizada por",
                                                      clearable: "",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.calificacion,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                      items: state.list.calificacion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Calificación",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.lugar_atencion,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                      items: state.list.lugar_atencion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Lugar atención",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.hora_termino,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                      label: "Hora de termino",
                                                      clearable: "",
                                                      type: "time",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.tipo_atencion,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                      items: state.list.tipo_atencion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Tipo de atención",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.tipo_licencia,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                      items: state.list.tipo_licencia,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Tipo de Licencia",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.descripcion_breve,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                      label: "Descripción breve",
                                                      type: "text",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.estado_mental,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                      items: state.list.estado_mental,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Estado Mental",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                    createVNode(_component_v_select, {
                                                      modelValue: state.editedItem.error_critico,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                      items: state.list.error_critico,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      clearable: "",
                                                      label: "Error crítico",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.editedItem.alerta_she,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Alerta SHE",
                                                      color: "success",
                                                      "hide-details": "",
                                                      clearable: "",
                                                      inset: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.editedItem.cuenta_acr,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Cuenta ACR",
                                                      clearable: "",
                                                      color: "success",
                                                      "hide-details": "",
                                                      inset: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.editedItem.derivacion_inmediata,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Derivación inmediata",
                                                      color: "success",
                                                      "hide-details": "",
                                                      clearable: "",
                                                      inset: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.editedItem.declaracion_completa,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Declaración completa",
                                                      clearable: "",
                                                      color: "success",
                                                      "hide-details": "",
                                                      inset: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_switch, {
                                                      modelValue: state.editedItem.puede_reintegrarse,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                      class: "mt-2 mb-4",
                                                      label: "Puede reintegrarse",
                                                      clearable: "",
                                                      color: "success",
                                                      "hide-details": "",
                                                      inset: "",
                                                      variant: "underlined"
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
                                    createVNode(_component_v_card_actions, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_spacer),
                                        createVNode(_component_v_btn, {
                                          color: "#009AA4",
                                          variant: "tonal",
                                          onClick: close
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancelar ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
                                          color: "#009AA4",
                                          variant: "tonal",
                                          onClick: storeItems
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Guardar ")
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
                      "item.actions": withCtx(({ item }) => [
                        createVNode(_component_v_tooltip, {
                          text: "Editar ",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps(props, {
                              density: "compact",
                              class: "mr-2 ml-2",
                              color: "#009AA4",
                              variant: "tonal",
                              icon: "mdi-account-edit",
                              onClick: ($event) => openFormEdit(item)
                            }), null, 16, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_tooltip, {
                          text: "Eliminar",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps(props, {
                              density: "compact",
                              class: "mr-2 ml-2",
                              color: "#009AA4",
                              variant: "tonal",
                              icon: "mdi-delete",
                              onClick: ($event) => remove(item)
                            }), null, 16, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      "no-data": withCtx(() => [
                        createVNode(_component_v_btn, {
                          variant: "tonal",
                          onClick: handleShow
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Iniciar ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["headers", "items"])
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
                class: "rounded-lg ma-2 pa-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar_title, { class: "ma-4 pa-4" }, {
                    default: withCtx(() => [
                      createTextVNode(" Información del Paciente: " + toDisplayString(unref(apellidos)) + ", " + toDisplayString(unref(nombre)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_data_table, {
                    headers: state.headers,
                    items: state.tableItems
                  }, {
                    top: withCtx(() => [
                      createVNode(_component_v_toolbar, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            variant: "tonal",
                            color: "#009AA4",
                            onClick: volver
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Volver ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_toolbar_title, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(state.formTitle), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            icon: "mdi-update",
                            variant: "tonal",
                            class: "ma-2",
                            color: "#009AA4",
                            onClick: handleShow
                          }),
                          createVNode(_component_v_btn, {
                            icon: "mdi-account-multiple-plus",
                            variant: "tonal",
                            class: "ma-2",
                            color: "#009AA4",
                            onClick: openFormCreate
                          }),
                          createVNode(_component_v_dialog, {
                            modelValue: state.dialog,
                            "onUpdate:modelValue": ($event) => state.dialog = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_container, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.fecha_atencion,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_atencion = $event,
                                                    label: "Fecha de atención",
                                                    clearable: "",
                                                    type: "date",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.turno,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.turno = $event,
                                                    items: state.list.turno,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Turno",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.sistema_afectado,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.sistema_afectado = $event,
                                                    items: state.list.sistema_afectado,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Sistema afectado",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.derivacion,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.derivacion = $event,
                                                    items: state.list.derivacion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Derivación",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.medio_derivacion,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.medio_derivacion = $event,
                                                    items: state.list.medio_derivacion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Medio de derivación",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.fuente_incidente,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.fuente_incidente = $event,
                                                    items: state.list.fuente_incidente,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Fuente de incidente",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.motivo_consulta,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.motivo_consulta = $event,
                                                    label: "Motivo de consulta",
                                                    clearable: "",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.editedItem.acompanado,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.acompanado = $event,
                                                    "hide-details": "",
                                                    class: "ml-4",
                                                    variant: "underlined",
                                                    color: "green-darken-3",
                                                    inset: "",
                                                    label: "Acompañado"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.accidente,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.accidente = $event,
                                                    items: state.list.accidente,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Accidente",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.medicamentos,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.medicamentos = $event,
                                                    label: "Medicamento suministrados",
                                                    clearable: "",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.accidente_condicion,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.accidente_condicion = $event,
                                                    items: state.list.accidente_condicion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Accidente ocurre por una acción o condición insegura",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.responsable = $event,
                                                    items: state.list.responsable,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Responsable",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.hora_inicio,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.hora_inicio = $event,
                                                    label: "Hora de inicio",
                                                    clearable: "",
                                                    type: "time",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.nombre_supervisor,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre_supervisor = $event,
                                                    label: "Nombre supervisor",
                                                    clearable: "",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.dias_descanso,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.dias_descanso = $event,
                                                    label: "Días de descanso",
                                                    clearable: "",
                                                    type: "number",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.at_realizada_por,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.at_realizada_por = $event,
                                                    label: "Atención realizada por",
                                                    clearable: "",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.calificacion,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.calificacion = $event,
                                                    items: state.list.calificacion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Calificación",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.lugar_atencion,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.lugar_atencion = $event,
                                                    items: state.list.lugar_atencion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Lugar atención",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.hora_termino,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.hora_termino = $event,
                                                    label: "Hora de termino",
                                                    clearable: "",
                                                    type: "time",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.tipo_atencion,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.tipo_atencion = $event,
                                                    items: state.list.tipo_atencion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Tipo de atención",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.tipo_licencia,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.tipo_licencia = $event,
                                                    items: state.list.tipo_licencia,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Tipo de Licencia",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.descripcion_breve,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.descripcion_breve = $event,
                                                    label: "Descripción breve",
                                                    type: "text",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.estado_mental,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.estado_mental = $event,
                                                    items: state.list.estado_mental,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Estado Mental",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                                  createVNode(_component_v_select, {
                                                    modelValue: state.editedItem.error_critico,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.error_critico = $event,
                                                    items: state.list.error_critico,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    clearable: "",
                                                    label: "Error crítico",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.editedItem.alerta_she,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.alerta_she = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Alerta SHE",
                                                    color: "success",
                                                    "hide-details": "",
                                                    clearable: "",
                                                    inset: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.editedItem.cuenta_acr,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.cuenta_acr = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Cuenta ACR",
                                                    clearable: "",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.editedItem.derivacion_inmediata,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.derivacion_inmediata = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Derivación inmediata",
                                                    color: "success",
                                                    "hide-details": "",
                                                    clearable: "",
                                                    inset: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.editedItem.declaracion_completa,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.declaracion_completa = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Declaración completa",
                                                    clearable: "",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_switch, {
                                                    modelValue: state.editedItem.puede_reintegrarse,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.puede_reintegrarse = $event,
                                                    class: "mt-2 mb-4",
                                                    label: "Puede reintegrarse",
                                                    clearable: "",
                                                    color: "success",
                                                    "hide-details": "",
                                                    inset: "",
                                                    variant: "underlined"
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
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_btn, {
                                        color: "#009AA4",
                                        variant: "tonal",
                                        onClick: close
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancelar ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        color: "#009AA4",
                                        variant: "tonal",
                                        onClick: storeItems
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Guardar ")
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
                    "item.actions": withCtx(({ item }) => [
                      createVNode(_component_v_tooltip, {
                        text: "Editar ",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps(props, {
                            density: "compact",
                            class: "mr-2 ml-2",
                            color: "#009AA4",
                            variant: "tonal",
                            icon: "mdi-account-edit",
                            onClick: ($event) => openFormEdit(item)
                          }), null, 16, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_v_tooltip, {
                        text: "Eliminar",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps(props, {
                            density: "compact",
                            class: "mr-2 ml-2",
                            color: "#009AA4",
                            variant: "tonal",
                            icon: "mdi-delete",
                            onClick: ($event) => remove(item)
                          }), null, 16, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    "no-data": withCtx(() => [
                      createVNode(_component_v_btn, {
                        variant: "tonal",
                        onClick: handleShow
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Iniciar ")
                        ]),
                        _: 1
                      })
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/AtencionDiaria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AtencionDiaria = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/SubPages/AtencionDiaria.vue"]]);
export {
  AtencionDiaria as default
};
//# sourceMappingURL=AtencionDiaria-BlUw1qvI.js.map
