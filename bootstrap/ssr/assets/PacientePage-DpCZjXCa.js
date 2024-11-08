import { reactive, onMounted, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-BxRGP7A1.js";
import { useLogger } from "vue-logger-plugin";
import "./store-CHGALank.js";
import _sfc_main$1 from "./DataTable-B-MPa3aY.js";
import { f as fetchAllData, h as handleSearchItem } from "./helper-BPJLKrkF.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VExpansionPanels, VExpansionPanel, VExpansionPanelText } from "vuetify/lib/components/VExpansionPanel/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VSheet } from "vuetify/lib/components/VSheet/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VCard/index.mjs";
import "vuetify/lib/components/VDivider/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
import "pinia";
import "vuetify/lib/components/VDataTable/index.mjs";
import "vuetify/lib/components/VToolbar/index.mjs";
import "vuetify/lib/components/VTooltip/index.mjs";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "PacientePage",
  __ssrInlineRender: true,
  setup(__props) {
    const logger = useLogger();
    const state = reactive({
      endpoints: [
        "calles",
        "estados_civiles",
        "establecimientos_educacionales",
        "generos",
        "grupos_sanguineos",
        "nacionalidades",
        "niveles_instruccion",
        "previsiones",
        "pueblos_originarios",
        "religiones"
      ],
      headers: [
        { title: "Rut", align: "center", sortable: true, key: "rut" },
        { title: "Nombre", align: "center", sortable: true, key: "nombre" },
        {
          title: "Apellidos",
          align: "center",
          sortable: true,
          key: "apellidos"
        },
        {
          title: "Edad",
          align: "center",
          sortable: true,
          key: "edad"
        },
        {
          title: "Telefono contacto",
          align: "center",
          sortable: true,
          key: "telefono1"
        },
        { title: "Acciones", sortable: false, align: "center", key: "actions" }
      ],
      tableItems: [],
      formFields: [
        {
          name: "field1",
          label: "Field 1",
          rules: [(v) => !!v || "Field 1 is required"]
        }
        //  { name: 'field2', label: 'Field 2', rules: [(v) => !!v || 'Field 2 is required'] },
        //  { name: 'field3', label: 'Field 3', rules: [(v) => !!v || 'Field 3 is required'] },
        // Add all fields that should be checked
      ],
      /*   'apellidos',
        'apellidos_responsable',
        'calle_id',
        'calle_responsable_id',
        'ciudad_responsable',
        'ciudad',
        'comunidad_lgbtq',
        'comunidad_lgbtq_responsable',
        'credencial_discapacidad_responsable',
        'credencial_discapacidad',
        'direccion_responsable',
        'direccion',
        'donante_responsable',
        'donante',
        'edad_responsable',
        'edad',
        'email_responsable',
        'email',
        'establecimiento_educacional_id',
        'estado_civil_id',
        'estado_civil_responsable_id',
        'fecha_nacimiento_responsable',
        'fecha_nacimiento',
        'genero_id',
        'genero_responsable_id',
        'grupo_sanguineo_id',
        'grupo_sanguineo_responsable_id',
        'nacionalidad_id',
        'nacionalidad_responsable_id',
        'nivel_instruccion_id',
        'nivel_instruccion_responsable_id',
        'nombre_responsable',
        'nombre',
        'ocupacion_responsable',
        'ocupacion',
        'parentesco_responsable',
        'password',
        'pertenece_pie',
        'prevision_id',
        'prevision_responsable_id',
        'profesor',
        'pueblo_originario_id',
        'pueblo_originario_responsable_id',
        'religion_id',
        'religion_responsable_id',
        'rut_responsable',
        'rut',
        'telefono_responsable',
        'telefono1',
        'telefono2',*/
      editedItem: {
        apellidos: null,
        apellidos_responsable: null,
        calles_id: null,
        calles_responsable_id: null,
        ciudad_responsable: null,
        ciudad: null,
        comunidad_lgbtq: null,
        comunidad_lgbtq_responsable: null,
        credencial_discapacidad_responsable: null,
        credencial_discapacidad: null,
        direccion_responsable: null,
        direccion: null,
        donante_responsable: null,
        donante: null,
        edad_responsable: null,
        edad: null,
        email_responsable: null,
        email: null,
        establecimiento_educacional_id: null,
        estado_civil_id: null,
        estado_civil_responsable_id: null,
        fecha_nacimiento_responsable: null,
        fecha_nacimiento: null,
        genero_id: null,
        genero_responsable_id: null,
        grupo_sanguineo_id: null,
        grupo_sanguineo_responsable_id: null,
        nacionalidad_id: null,
        nacionalidad_responsable_id: null,
        nivel_instruccion_id: null,
        nivel_instruccion_responsable_id: null,
        nombre_responsable: null,
        nombre: null,
        ocupacion_responsable: null,
        ocupacion: null,
        parentesco_responsable: null,
        password: null,
        pertenece_pie: null,
        prevision_id: null,
        prevision_responsable_id: null,
        profesor: null,
        pueblo_originario_id: null,
        pueblo_originario_responsable_id: null,
        religion_id: null,
        religion_responsable_id: null,
        rut_responsable: null,
        rut: null,
        telefono_responsable: null,
        telefono1: null,
        telefono2: null
      },
      searchQuery: {
        id: null,
        rut: null,
        rut_responsable: null,
        establecimiento_educacional_id: null
      },
      config: {
        editedIndex: -1,
        dialog: false,
        loading: false,
        editedIndex: -1,
        formCrear: "Nuevo Paciente",
        formEdit: "Editar datos del Paciente",
        formItems: [],
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
      const result = await handleSearchItem(state.searchQuery, state.config.route);
      logger.info(result);
      state.tableItems = result;
      state.config.loading = false;
    }
    computed(
      () => state.config.editedIndex === -1 ? state.formCrear : state.formEdit
    );
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
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    headers: state.headers,
                    items: state.tableItems
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      headers: state.headers,
                      items: state.tableItems
                    }, null, 8, ["headers", "items"])
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
                  createVNode(_sfc_main$1, {
                    headers: state.headers,
                    items: state.tableItems
                  }, null, 8, ["headers", "items"])
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
export {
  _sfc_main as default
};
//# sourceMappingURL=PacientePage-DpCZjXCa.js.map
