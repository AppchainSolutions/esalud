import { reactive, onMounted, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BSqGFl1_.js";
import { useLogger } from "vue-logger-plugin";
import DataTable from "./DataTableComponente-D19k9FRl.js";
import { f as fetchAllData, h as handleSearchItem } from "./helper-zbPMJdu3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VExpansionPanels, VExpansionPanel, VExpansionPanelText } from "vuetify/lib/components/VExpansionPanel/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VSheet } from "vuetify/lib/components/VSheet/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import "@inertiajs/vue3";
import "vue-loading-overlay";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VCard/index.mjs";
import "vuetify/lib/components/VDivider/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
import "./TableAction-DdFl1Q_g.js";
import "vuetify/lib/components/VTooltip/index.mjs";
import "vuetify/lib/components/VDataTable/index.mjs";
import "vuetify/lib/components/VDialog/index.mjs";
import "vuetify/lib/components/VToolbar/index.mjs";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "PacientePage",
  __ssrInlineRender: true,
  setup(__props) {
    const logger = useLogger();
    const state = reactive({
      /*   endpoints: [
              "calles",
              "estados_civiles",
              "establecimientos_educacionales",
              "generos",
              "grupos_sanguineos",
              "nacionalidades",
              "niveles_instruccion",
              "previsiones",
              "pueblos_originarios",
              "religiones",
          ],
      
          */
      /* 
          headers: [
              { title: "Rut", align: "center", sortable: true, key: "rut" },
              { title: "Nombre", align: "center", sortable: true, key: "nombre" },
              {
                  title: "Apellidos",
                  align: "center",
                  sortable: true,
                  key: "apellidos",
              },
              {
                  title: "Edad",
                  align: "center",
                  sortable: true,
                  key: "edad",
              },
              {
                  title: "Telefono contacto",
                  align: "center",
                  sortable: true,
                  key: "telefono1",
              },
              { title: "Acciones", sortable: false, align: "center", key: "actions" },
          ],
      
          formItems: [
              {
                  name: "rut",
                  label: "RUT",
                  type: "text",
                  required: true,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  endpoint: null,
                  md: 4,
                  sm: 2,
                  row: 1,
                  order: 1,
              },
              {
                  name: "nombre",
                  label: "Nombre",
                  type: "text",
                  required: true,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
                  order: 2,
              },
              {
                  name: "apellidos",
                  label: "Apellidos",
                  type: "text",
                  required: true,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
                  order: 3,
              },
              {
                  name: "apellidos_responsable",
                  label: "Apellidos Responsable",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "calles_id",
                  label: "Calles",
                  type: "select",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  items: ["calle 1", "calle 2", "calle 3"],
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "calles_responsable_id",
                  label: "Calles Responsable",
                  type: "select",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  items: [],
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "ciudad_responsable",
                  label: "Ciudad Responsable",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "ciudad",
                  label: "Ciudad",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "comunidad_lgbtq",
                  label: "Comunidad LGBTQ",
                  type: "switch",
                  color: "green-darken-3",
                  inset: true,
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "comunidad_lgbtq_responsable",
                  label: "Comunidad LGBTQ Responsable",
                  type: "switch",
                  color: "green-darken-3",
                  inset: true,
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "credencial_discapacidad_responsable",
                  label: "Credencial Discapacidad Responsable",
                  type: "switch",
                  color: "green-darken-3",
                  inset: true,
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "credencial_discapacidad",
                  label: "Credencial Discapacidad",
                  type: "switch",
                  color: "green-darken-3",
                  inset: true,
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "direccion_responsable",
                  label: "Dirección Responsable",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "direccion",
                  label: "Dirección",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "donante_responsable",
                  label: "Donante Responsable",
                  type: "switch",
                  required: false,
                  color: "green-darken-3",
                  inset: true,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "donante",
                  label: "Donante",
                  type: "switch",
                  color: "green-darken-3",
                  inset: true,
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "edad_responsable",
                  label: "Edad Responsable",
                  type: "number",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "edad",
                  label: "Edad",
                  type:"number",
                  inputType: "number",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "email_responsable",
                  label: "Email Responsable",
                  type: "email",
                  inputType: "email",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "email",
                  label: "Email",
                  type: "email",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "establecimiento_educacional_id",
                  label: "Establecimiento Educacional",
                  type: "select",
                  inputType: "email",
                  required: false,
                  clearable: true,
                  items: endpoints.establecimientos_educacionales,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "estado_civil_id",
                  label: "Estado Civil ID",
                  type: "select",
                  required: false,
                  clearable: true,
                  items: endpoints.estados_civiles,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "estado_civil_responsable_id",
                  label: "Estado Civil Responsable ID",
                  type: "select",
                  required: false,
                  clearable: true,
                  items: ["Soltero", "Casado", "Divorciado"],
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "fecha_nacimiento_responsable",
                  label: "Fecha Nacimiento Responsable",
                  type: "text",
                  inputType: "date",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "fecha_nacimiento",
                  label: "Fecha Nacimiento",
                  type: "text",
                  inputType: "date",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "genero_id",
                  label: "Género ID",
                  type: "select",
                  required: false,
                  clearable: true,
                  items: ["Masculino", "Femenino", "Otro"],
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "genero_responsable_id",
                  label: "Género Responsable ID",
                  type: "select",
                  required: false,
                  clearable: true,
                  items: ["Masculino", "Femenino", "Otro"],
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "grupo_sanguineo_id",
                  label: "Grupo Sanguíneo ID",
                  type: "select",
                  required: false,
                  clearable: true,
                  items: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "grupo_sanguineo_responsable_id",
                  label: "Grupo Sanguíneo Responsable ID",
                  type: "select",
                  required: false,
                  clearable: true,
                  items: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "nacionalidad_id",
                  label: "Nacionalidad",
                  type: "select",
                  items: [],
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "nacionalidad_responsable_id",
                  label: "Nacionalidad Responsable ID",
                  type: "select",
                  items: [],
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "nivel_instruccion_id",
                  label: "Nivel Instrucción ID",
                  type: "text",
                  items: [],
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "nivel_instruccion_responsable_id",
                  label: "Nivel Instrucción Responsable ID",
                  type: "select",
                  items: [],
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "nombre_responsable",
                  label: "Nombre Responsable",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
      
              {
                  name: "ocupacion_responsable",
                  label: "Ocupación Responsable",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "ocupacion",
                  label: "Ocupación",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "parentesco_responsable",
                  label: "Parentesco Responsable",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
      
              {
                  name: "pertenece_pie",
                  label: "Pertenece PIE",
                  type: "switch",
                  required: false,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "prevision_id",
                  label: "Previsión",
                  type: "select",
                  items: [],
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "prevision_responsable_id",
                  label: "Previsión Responsable ID",
                  type: "select",
                  items: [],
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "profesor",
                  label: "Profesor",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "pueblo_originario_id",
                  label: "Pueblo Originario ID",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "pueblo_originario_responsable_id",
                  label: "Pueblo Originario Responsable ID",
                  type: "select",
                  items: [],
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "religion_id",
                  label: "Religión ID",
                  type: "select",
                  items: [],
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "religion_responsable_id",
                  label: "Religión Responsable ID",
                  type: "select",
                  items: [],
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "rut_responsable",
                  label: "RUT Responsable",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
      
              {
                  name: "telefono_responsable",
                  label: "Teléfono Responsable",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 2,
              },
              {
                  name: "telefono1",
                  label: "Teléfono 1",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
              {
                  name: "telefono2",
                  label: "Teléfono 2",
                  type: "text",
                  required: false,
                  clearable: true,
                  variant: "underlined",
                  cols: 12,
                  md: 4,
                  sm: 2,
                  row: 1,
              },
          ],
      
          searchQuery: {
              id: null,
              rut: null,
              rut_responsable: null,
              establecimiento_educacional_id: null,
          },
       */
      config: {
        editedIndex: -1,
        loading: false,
        tableItems: [],
        editedIndex: -1,
        formCrear: "Nuevo Paciente",
        formEdit: "Editar datos del Paciente",
        formTitle: "Gestión de Pacientes",
        list: [],
        route: "paciente"
      }
    });
    onMounted(async () => {
      const result = await fetchAllData(state.endpoints);
      state.config.list = result;
    });
    async function buscar() {
      state.config.loading = true;
      logger.info("Buscar", state.searchQuery);
      const data = await handleSearchItem(state.searchQuery, state.config.route);
      logger.info("Table Items", data);
      state.config.tableItems = data;
      state.config.loading = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_download_excel = resolveComponent("download-excel");
      _push(ssrRenderComponent(VSheet, mergeProps({
        elevation: 4,
        class: "rounded-lg ma-2 pa-2"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VExpansionPanels, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VExpansionPanel, {
                    title: "Ficha de Pacientes",
                    id: "ficha",
                    color: "#009AA4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VExpansionPanelText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, {
                                "fast-fail": "",
                                onSubmit: () => {
                                }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: state.searchQuery.rut,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                  label: "Rut del paciente * (12345678-9)",
                                                  class: "ma-2",
                                                  type: "text",
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: state.searchQuery.rut_responsable,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                  label: "Rut persona encargada",
                                                  class: "ma-2",
                                                  type: "text",
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: state.searchQuery.rut,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                    label: "Rut del paciente * (12345678-9)",
                                                    class: "ma-2",
                                                    type: "text",
                                                    variant: "underlined",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.searchQuery.rut_responsable,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                    label: "Rut persona encargada",
                                                    class: "ma-2",
                                                    type: "text",
                                                    variant: "underlined",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  items: state.config.list.establecimientos_educacionales,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.searchQuery.establecimiento_educacional_id,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.establecimiento_educacional_id = $event,
                                                  clearable: "",
                                                  label: "Establecimiento Educacional",
                                                  class: "ma-2",
                                                  variant: "underlined",
                                                  single: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    items: state.config.list.establecimientos_educacionales,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.searchQuery.establecimiento_educacional_id,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.establecimiento_educacional_id = $event,
                                                    clearable: "",
                                                    label: "Establecimiento Educacional",
                                                    class: "ma-2",
                                                    variant: "underlined",
                                                    single: ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: state.searchQuery.rut,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                  label: "Rut del paciente * (12345678-9)",
                                                  class: "ma-2",
                                                  type: "text",
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.searchQuery.rut_responsable,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                  label: "Rut persona encargada",
                                                  class: "ma-2",
                                                  type: "text",
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  items: state.config.list.establecimientos_educacionales,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.searchQuery.establecimiento_educacional_id,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.establecimiento_educacional_id = $event,
                                                  clearable: "",
                                                  label: "Establecimiento Educacional",
                                                  class: "ma-2",
                                                  variant: "underlined",
                                                  single: ""
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            "prepend-icon": "mdi-file-search",
                                            variant: "tonal",
                                            class: "ma-4",
                                            color: "#009AA4",
                                            type: "submit",
                                            onClick: buscar,
                                            loading: state.config.loading
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
                                          _push7(ssrRenderComponent(VBtn, {
                                            "prepend-icon": "mdi-cloud-download",
                                            variant: "tonal",
                                            class: "ma-4",
                                            color: "#009AA4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_download_excel, {
                                                  data: state.tableItems,
                                                  name: "consulta_paciente.xls"
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
                                                    name: "consulta_paciente.xls"
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
                                            createVNode(VBtn, {
                                              "prepend-icon": "mdi-file-search",
                                              variant: "tonal",
                                              class: "ma-4",
                                              color: "#009AA4",
                                              type: "submit",
                                              onClick: buscar,
                                              loading: state.config.loading
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Buscar ")
                                              ]),
                                              _: 1
                                            }, 8, ["loading"]),
                                            createVNode(VBtn, {
                                              "prepend-icon": "mdi-cloud-download",
                                              variant: "tonal",
                                              class: "ma-4",
                                              color: "#009AA4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_download_excel, {
                                                  data: state.tableItems,
                                                  name: "consulta_paciente.xls"
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
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: state.searchQuery.rut,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                label: "Rut del paciente * (12345678-9)",
                                                class: "ma-2",
                                                type: "text",
                                                variant: "underlined",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                modelValue: state.searchQuery.rut_responsable,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                label: "Rut persona encargada",
                                                class: "ma-2",
                                                type: "text",
                                                variant: "underlined",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                items: state.config.list.establecimientos_educacionales,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.searchQuery.establecimiento_educacional_id,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.establecimiento_educacional_id = $event,
                                                clearable: "",
                                                label: "Establecimiento Educacional",
                                                class: "ma-2",
                                                variant: "underlined",
                                                single: ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            "prepend-icon": "mdi-file-search",
                                            variant: "tonal",
                                            class: "ma-4",
                                            color: "#009AA4",
                                            type: "submit",
                                            onClick: buscar,
                                            loading: state.config.loading
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Buscar ")
                                            ]),
                                            _: 1
                                          }, 8, ["loading"]),
                                          createVNode(VBtn, {
                                            "prepend-icon": "mdi-cloud-download",
                                            variant: "tonal",
                                            class: "ma-4",
                                            color: "#009AA4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_download_excel, {
                                                data: state.tableItems,
                                                name: "consulta_paciente.xls"
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
                            } else {
                              return [
                                createVNode(VForm, {
                                  "fast-fail": "",
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: state.searchQuery.rut,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                              label: "Rut del paciente * (12345678-9)",
                                              class: "ma-2",
                                              type: "text",
                                              variant: "underlined",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VTextField, {
                                              modelValue: state.searchQuery.rut_responsable,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                              label: "Rut persona encargada",
                                              class: "ma-2",
                                              type: "text",
                                              variant: "underlined",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              items: state.config.list.establecimientos_educacionales,
                                              "item-title": "descripcion",
                                              "item-value": "id",
                                              modelValue: state.searchQuery.establecimiento_educacional_id,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.establecimiento_educacional_id = $event,
                                              clearable: "",
                                              label: "Establecimiento Educacional",
                                              class: "ma-2",
                                              variant: "underlined",
                                              single: ""
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          "prepend-icon": "mdi-file-search",
                                          variant: "tonal",
                                          class: "ma-4",
                                          color: "#009AA4",
                                          type: "submit",
                                          onClick: buscar,
                                          loading: state.config.loading
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Buscar ")
                                          ]),
                                          _: 1
                                        }, 8, ["loading"]),
                                        createVNode(VBtn, {
                                          "prepend-icon": "mdi-cloud-download",
                                          variant: "tonal",
                                          class: "ma-4",
                                          color: "#009AA4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_download_excel, {
                                              data: state.tableItems,
                                              name: "consulta_paciente.xls"
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
                                }, 8, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VExpansionPanelText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                "fast-fail": "",
                                onSubmit: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: state.searchQuery.rut,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                            label: "Rut del paciente * (12345678-9)",
                                            class: "ma-2",
                                            type: "text",
                                            variant: "underlined",
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VTextField, {
                                            modelValue: state.searchQuery.rut_responsable,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                            label: "Rut persona encargada",
                                            class: "ma-2",
                                            type: "text",
                                            variant: "underlined",
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            items: state.config.list.establecimientos_educacionales,
                                            "item-title": "descripcion",
                                            "item-value": "id",
                                            modelValue: state.searchQuery.establecimiento_educacional_id,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.establecimiento_educacional_id = $event,
                                            clearable: "",
                                            label: "Establecimiento Educacional",
                                            class: "ma-2",
                                            variant: "underlined",
                                            single: ""
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        "prepend-icon": "mdi-file-search",
                                        variant: "tonal",
                                        class: "ma-4",
                                        color: "#009AA4",
                                        type: "submit",
                                        onClick: buscar,
                                        loading: state.config.loading
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Buscar ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"]),
                                      createVNode(VBtn, {
                                        "prepend-icon": "mdi-cloud-download",
                                        variant: "tonal",
                                        class: "ma-4",
                                        color: "#009AA4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_download_excel, {
                                            data: state.tableItems,
                                            name: "consulta_paciente.xls"
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
                              }, 8, ["onSubmit"])
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
                    createVNode(VExpansionPanel, {
                      title: "Ficha de Pacientes",
                      id: "ficha",
                      color: "#009AA4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VExpansionPanelText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              "fast-fail": "",
                              onSubmit: withModifiers(() => {
                              }, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: state.searchQuery.rut,
                                          "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                          label: "Rut del paciente * (12345678-9)",
                                          class: "ma-2",
                                          type: "text",
                                          variant: "underlined",
                                          clearable: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: state.searchQuery.rut_responsable,
                                          "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                          label: "Rut persona encargada",
                                          class: "ma-2",
                                          type: "text",
                                          variant: "underlined",
                                          clearable: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          items: state.config.list.establecimientos_educacionales,
                                          "item-title": "descripcion",
                                          "item-value": "id",
                                          modelValue: state.searchQuery.establecimiento_educacional_id,
                                          "onUpdate:modelValue": ($event) => state.searchQuery.establecimiento_educacional_id = $event,
                                          clearable: "",
                                          label: "Establecimiento Educacional",
                                          class: "ma-2",
                                          variant: "underlined",
                                          single: ""
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      "prepend-icon": "mdi-file-search",
                                      variant: "tonal",
                                      class: "ma-4",
                                      color: "#009AA4",
                                      type: "submit",
                                      onClick: buscar,
                                      loading: state.config.loading
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Buscar ")
                                      ]),
                                      _: 1
                                    }, 8, ["loading"]),
                                    createVNode(VBtn, {
                                      "prepend-icon": "mdi-cloud-download",
                                      variant: "tonal",
                                      class: "ma-4",
                                      color: "#009AA4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_download_excel, {
                                          data: state.tableItems,
                                          name: "consulta_paciente.xls"
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
                            }, 8, ["onSubmit"])
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
            _push2(ssrRenderComponent(VSheet, {
              color: "white",
              elevation: 4,
              class: "rounded-lg mt-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(DataTable, { state }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(DataTable, { state }, null, 8, ["state"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VExpansionPanels, null, {
                default: withCtx(() => [
                  createVNode(VExpansionPanel, {
                    title: "Ficha de Pacientes",
                    id: "ficha",
                    color: "#009AA4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VExpansionPanelText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            "fast-fail": "",
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: state.searchQuery.rut,
                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                        label: "Rut del paciente * (12345678-9)",
                                        class: "ma-2",
                                        type: "text",
                                        variant: "underlined",
                                        clearable: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: state.searchQuery.rut_responsable,
                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                        label: "Rut persona encargada",
                                        class: "ma-2",
                                        type: "text",
                                        variant: "underlined",
                                        clearable: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        items: state.config.list.establecimientos_educacionales,
                                        "item-title": "descripcion",
                                        "item-value": "id",
                                        modelValue: state.searchQuery.establecimiento_educacional_id,
                                        "onUpdate:modelValue": ($event) => state.searchQuery.establecimiento_educacional_id = $event,
                                        clearable: "",
                                        label: "Establecimiento Educacional",
                                        class: "ma-2",
                                        variant: "underlined",
                                        single: ""
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    "prepend-icon": "mdi-file-search",
                                    variant: "tonal",
                                    class: "ma-4",
                                    color: "#009AA4",
                                    type: "submit",
                                    onClick: buscar,
                                    loading: state.config.loading
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Buscar ")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"]),
                                  createVNode(VBtn, {
                                    "prepend-icon": "mdi-cloud-download",
                                    variant: "tonal",
                                    class: "ma-4",
                                    color: "#009AA4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_download_excel, {
                                        data: state.tableItems,
                                        name: "consulta_paciente.xls"
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
                          }, 8, ["onSubmit"])
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
                color: "white",
                elevation: 4,
                class: "rounded-lg mt-4"
              }, {
                default: withCtx(() => [
                  createVNode(DataTable, { state }, null, 8, ["state"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PacientePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PacientePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/PacientePage.vue"]]);
export {
  PacientePage as default
};
//# sourceMappingURL=PacientePage-CiWW4Blj.js.map
