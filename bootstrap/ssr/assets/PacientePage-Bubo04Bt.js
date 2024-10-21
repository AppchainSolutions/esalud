import { reactive, onMounted, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, toDisplayString, useSSRContext, ref } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-DOexpPir.js";
import { router } from "@inertiajs/vue3";
import { u as useDataStore } from "./store-CHGALank.js";
import moment from "moment";
import { useDate } from "vuetify";
import { f as fetchAllData, c as closeForm, h as handleShowItem, o as openToCreate, a as handleStoreItem, b as openToEdit, d as handleEditItem, e as handleRemoveItem } from "./helper-DlyAxSqm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "PacientePage",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDataStore();
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
      validationSchema: {
        rutRules: [
          (value) => {
            const regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
            if (!regex.test(value)) {
              return false;
            }
            let splitidRut = value.split("-");
            let num = splitidRut[0];
            let dv = splitidRut[1].toLowerCase();
            let m = 0, s = 1;
            for (; num; num = Math.floor(num / 10)) {
              s = (s + num % 10 * (9 - m++ % 6)) % 11;
            }
            let dvEsperado = s ? s - 1 : "k";
            const validate = dv === dvEsperado;
            return validate ? true : "El rut no es válido. Por favor, verifique el formato y los dígitos.";
          }
        ],
        emailRules: [
          (value) => {
            if (value) return true;
            return "Se necesita un email.";
          },
          (value) => {
            if (/.+@.+\..+/.test(value)) return true;
            return "El email debe ser válido.";
          }
        ]
      },
      searchQuery: {
        id: null,
        rut: null,
        rut_responsable: null,
        establecimiento_educacional_id: null
      },
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
        remember_token: null,
        rut_responsable: null,
        rut: null,
        telefono_responsable: null,
        telefono1: null,
        telefono2: null
      },
      defaultItem: {
        apellidos: null,
        apellidos_responsable: null,
        calles_id: null,
        calles_responsable_id: null,
        ciudad_responsable: null,
        ciudad: null,
        comunidad_lgbtq: null,
        comunidad_lgtbq_responsable: null,
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
        remember_token: null,
        rut_responsable: null,
        rut: null,
        telefono_responsable: null,
        telefono1: null,
        telefono2: null
      },
      dialog: false,
      editedIndex: -1,
      formCrear: "Nuevo Paciente",
      formEdit: "Editar datos del Paciente",
      formItems: [],
      formTitle: "Gestión de Pacientes",
      list: [],
      loadingSearch: false,
      tableItems: [],
      urlDelete: "/paciente/delete",
      urlShow: "/paciente/show",
      urlStore: "/paciente",
      urlUpdate: "/paciente/update"
    });
    useDate();
    onMounted(async () => {
      const result = await fetchAllData(state.endpoints);
      console.log(result);
    });
    const editedItemTitle = computed(
      () => state.editedIndex === -1 ? state.formCrear : state.formEdit
    );
    const formatDate = computed(() => {
      let formatted = moment(state.editedItem.fecha_nacimiento).format(
        "DD/MM/YYYY"
      );
      return formatted;
    });
    function fichaMedica(item) {
      store.selected = item;
      try {
        router.get("ficha-medica");
      } catch (error) {
        console.error(
          '"An error occurred while fetching daily attention data."'
        );
      }
    }
    function close() {
      closeForm(state);
    }
    function calcEdad(fecNac) {
      let now = /* @__PURE__ */ new Date();
      let birthDate = new Date(fecNac);
      let age = now.getFullYear() - birthDate.getFullYear();
      return age;
    }
    const handleInputChange = () => {
      let fecNac = state.editedItem.fecha_nacimiento;
      let age = calcEdad(fecNac);
      state.editedItem.edad = ref(age);
    };
    const show = async () => {
      await handleShowItem(state);
    };
    function openFormCreate() {
      openToCreate(state);
    }
    function storeItems() {
      return state.editedIndex > -1 ? update() : create();
    }
    const create = async () => {
      await handleStoreItem(state);
      closeForm(state);
    };
    function fichaPersonal(item) {
      openToEdit(state, item);
      handleInputChange();
    }
    const update = async () => {
      await handleEditItem(state);
      closeForm(state);
    };
    const remove = async (item) => {
      handleRemoveItem(state, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_download_excel = resolveComponent("download-excel");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, {
              elevation: 6,
              class: "rounded-lg ma-2 pa-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panels, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_expansion_panel, {
                          title: "Ficha de Pacientes",
                          color: "#009AA4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_form, {
                                      "fast-fail": "",
                                      onSubmit: () => {
                                      }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        modelValue: state.searchQuery.rut,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                        rules: state.validationSchema.rutRules,
                                                        label: "Rut del paciente * (12345678-9)",
                                                        class: "ma-2",
                                                        type: "text",
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        modelValue: state.searchQuery.rut_responsable,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                        rules: state.validationSchema.rutRules,
                                                        label: "Rut persona encargada",
                                                        class: "ma-2",
                                                        type: "text",
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.searchQuery.rut,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                          rules: state.validationSchema.rutRules,
                                                          label: "Rut del paciente * (12345678-9)",
                                                          class: "ma-2",
                                                          type: "text",
                                                          variant: "underlined",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.searchQuery.rut_responsable,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                          rules: state.validationSchema.rutRules,
                                                          label: "Rut persona encargada",
                                                          class: "ma-2",
                                                          type: "text",
                                                          variant: "underlined",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        items: state.list.establecimiento_educacional,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.searchQuery.establecimiento_educacional_id,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.establecimiento_educacional_id = $event,
                                                        clearable: "",
                                                        label: "Establecimiento Educacional",
                                                        class: "ma-2",
                                                        variant: "underlined",
                                                        single: ""
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_select, {
                                                          items: state.list.establecimiento_educacional,
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.searchQuery.rut,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                        rules: state.validationSchema.rutRules,
                                                        label: "Rut del paciente * (12345678-9)",
                                                        class: "ma-2",
                                                        type: "text",
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.searchQuery.rut_responsable,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                        rules: state.validationSchema.rutRules,
                                                        label: "Rut persona encargada",
                                                        class: "ma-2",
                                                        type: "text",
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        items: state.list.establecimiento_educacional,
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  "prepend-icon": "mdi-file-search",
                                                  variant: "tonal",
                                                  class: "ma-4",
                                                  color: "#009AA4",
                                                  type: "submit",
                                                  onClick: show
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
                                                  "prepend-icon": "mdi-cloud-download",
                                                  variant: "tonal",
                                                  class: "ma-4",
                                                  color: "#009AA4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_download_excel, {
                                                        data: state.tableItems,
                                                        name: "consulta_paciente.xls"
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_btn, {
                                                    "prepend-icon": "mdi-file-search",
                                                    variant: "tonal",
                                                    class: "ma-4",
                                                    color: "#009AA4",
                                                    type: "submit",
                                                    onClick: show
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Buscar ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_btn, {
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.searchQuery.rut,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                      rules: state.validationSchema.rutRules,
                                                      label: "Rut del paciente * (12345678-9)",
                                                      class: "ma-2",
                                                      type: "text",
                                                      variant: "underlined",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.searchQuery.rut_responsable,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                      rules: state.validationSchema.rutRules,
                                                      label: "Rut persona encargada",
                                                      class: "ma-2",
                                                      type: "text",
                                                      variant: "underlined",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_select, {
                                                      items: state.list.establecimiento_educacional,
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
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  "prepend-icon": "mdi-file-search",
                                                  variant: "tonal",
                                                  class: "ma-4",
                                                  color: "#009AA4",
                                                  type: "submit",
                                                  onClick: show
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Buscar ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_btn, {
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_form, {
                                        "fast-fail": "",
                                        onSubmit: withModifiers(() => {
                                        }, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.searchQuery.rut,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                    rules: state.validationSchema.rutRules,
                                                    label: "Rut del paciente * (12345678-9)",
                                                    class: "ma-2",
                                                    type: "text",
                                                    variant: "underlined",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.searchQuery.rut_responsable,
                                                    "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                    rules: state.validationSchema.rutRules,
                                                    label: "Rut persona encargada",
                                                    class: "ma-2",
                                                    type: "text",
                                                    variant: "underlined",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_select, {
                                                    items: state.list.establecimiento_educacional,
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
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                "prepend-icon": "mdi-file-search",
                                                variant: "tonal",
                                                class: "ma-4",
                                                color: "#009AA4",
                                                type: "submit",
                                                onClick: show
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Buscar ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_btn, {
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_expansion_panel_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_form, {
                                      "fast-fail": "",
                                      onSubmit: withModifiers(() => {
                                      }, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.searchQuery.rut,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                  rules: state.validationSchema.rutRules,
                                                  label: "Rut del paciente * (12345678-9)",
                                                  class: "ma-2",
                                                  type: "text",
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: state.searchQuery.rut_responsable,
                                                  "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                  rules: state.validationSchema.rutRules,
                                                  label: "Rut persona encargada",
                                                  class: "ma-2",
                                                  type: "text",
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  items: state.list.establecimiento_educacional,
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
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              "prepend-icon": "mdi-file-search",
                                              variant: "tonal",
                                              class: "ma-4",
                                              color: "#009AA4",
                                              type: "submit",
                                              onClick: show
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Buscar ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_expansion_panel, {
                            title: "Ficha de Pacientes",
                            color: "#009AA4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel_text, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_form, {
                                    "fast-fail": "",
                                    onSubmit: withModifiers(() => {
                                    }, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.searchQuery.rut,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                rules: state.validationSchema.rutRules,
                                                label: "Rut del paciente * (12345678-9)",
                                                class: "ma-2",
                                                type: "text",
                                                variant: "underlined",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: state.searchQuery.rut_responsable,
                                                "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                                rules: state.validationSchema.rutRules,
                                                label: "Rut persona encargada",
                                                class: "ma-2",
                                                type: "text",
                                                variant: "underlined",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                items: state.list.establecimiento_educacional,
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
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            "prepend-icon": "mdi-file-search",
                                            variant: "tonal",
                                            class: "ma-4",
                                            color: "#009AA4",
                                            type: "submit",
                                            onClick: show
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Buscar ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_expansion_panels, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_expansion_panel, {
                          title: "Ficha de Pacientes",
                          color: "#009AA4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel_text, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_form, {
                                  "fast-fail": "",
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: state.searchQuery.rut,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                              rules: state.validationSchema.rutRules,
                                              label: "Rut del paciente * (12345678-9)",
                                              class: "ma-2",
                                              type: "text",
                                              variant: "underlined",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(_component_v_text_field, {
                                              modelValue: state.searchQuery.rut_responsable,
                                              "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                              rules: state.validationSchema.rutRules,
                                              label: "Rut persona encargada",
                                              class: "ma-2",
                                              type: "text",
                                              variant: "underlined",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              items: state.list.establecimiento_educacional,
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
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          "prepend-icon": "mdi-file-search",
                                          variant: "tonal",
                                          class: "ma-4",
                                          color: "#009AA4",
                                          type: "submit",
                                          onClick: show
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Buscar ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_sheet, {
              color: "white",
              elevation: 6,
              class: "rounded-lg ma-2 pa-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_data_table, {
                    headers: state.headers,
                    items: state.tableItems,
                    "sort-by": [{ key: "apellidos", order: "asc" }]
                  }, {
                    top: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_toolbar, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_dialog, {
                                modelValue: state.dialog,
                                "onUpdate:modelValue": ($event) => state.dialog = $event,
                                persistent: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_form, {
                                      "fast-fail": "",
                                      onSubmit: () => {
                                      }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_sheet, {
                                            color: "white",
                                            elevation: 6,
                                            class: "rounded-lg ma-4 pa-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_card_title, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<div class="text-h6 ma-2"${_scopeId9}>${ssrInterpolate(editedItemTitle.value)}</div>`);
                                                            _push10(ssrRenderComponent(_component_v_divider, {
                                                              thickness: "4px",
                                                              color: "#662d91"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                              createVNode(_component_v_divider, {
                                                                thickness: "4px",
                                                                color: "#662d91"
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_card_text, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<div class="text-h6"${_scopeId9}> Datos Personales </div>`);
                                                            _push10(ssrRenderComponent(_component_v_row, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.rut,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                          label: "Rut* (12345678-9)",
                                                                          id: "rut",
                                                                          type: "text",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.nombre,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                          label: "Nombre*",
                                                                          type: "text",
                                                                          id: "nombre",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.apellidos,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                          label: "Apellidos*",
                                                                          id: "apellidos",
                                                                          required: "",
                                                                          type: "text",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_switch, {
                                                                          modelValue: state.editedItem.comunidad_lgbtq,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-2",
                                                                          color: "green-darken-3",
                                                                          inset: "",
                                                                          label: "Comunidad LGTB+"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_switch, {
                                                                          modelValue: state.editedItem.donante,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                                          class: "ml-2",
                                                                          label: "Donante",
                                                                          color: "success",
                                                                          "hide-details": "",
                                                                          inset: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_switch, {
                                                                          modelValue: state.editedItem.credencial_discapacidad,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                                          class: "ml-2",
                                                                          label: "Credencial discapacidad",
                                                                          color: "success",
                                                                          "hide-details": "",
                                                                          inset: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.rut,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                            label: "Rut* (12345678-9)",
                                                                            id: "rut",
                                                                            type: "text",
                                                                            required: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.nombre,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                            label: "Nombre*",
                                                                            type: "text",
                                                                            id: "nombre",
                                                                            required: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.apellidos,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                            label: "Apellidos*",
                                                                            id: "apellidos",
                                                                            required: "",
                                                                            type: "text",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_switch, {
                                                                            modelValue: state.editedItem.comunidad_lgbtq,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                                            "hide-details": "",
                                                                            class: "ml-2",
                                                                            color: "green-darken-3",
                                                                            inset: "",
                                                                            label: "Comunidad LGTB+"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_switch, {
                                                                            modelValue: state.editedItem.donante,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                                            class: "ml-2",
                                                                            label: "Donante",
                                                                            color: "success",
                                                                            "hide-details": "",
                                                                            inset: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_switch, {
                                                                            modelValue: state.editedItem.credencial_discapacidad,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                                            class: "ml-2",
                                                                            label: "Credencial discapacidad",
                                                                            color: "success",
                                                                            "hide-details": "",
                                                                            inset: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.email,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                          rules: state.validationSchema.emailRules,
                                                                          label: "Email",
                                                                          type: "email",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_nacimiento,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                                          label: "Fecha de nacimiento",
                                                                          clearable: "",
                                                                          variant: "underlined",
                                                                          type: "date",
                                                                          format: formatDate.value,
                                                                          onInput: handleInputChange
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.edad,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                                          label: "Edad*",
                                                                          type: "text",
                                                                          variant: "underlined",
                                                                          readonly: ""
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.direccion,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                          label: "Dirección",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          label: "teléfono 1",
                                                                          modelValue: state.editedItem.telefono1,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.telefono2,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                          label: "teléfono 2",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.email,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                            rules: state.validationSchema.emailRules,
                                                                            label: "Email",
                                                                            type: "email",
                                                                            required: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.fecha_nacimiento,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                                            label: "Fecha de nacimiento",
                                                                            clearable: "",
                                                                            variant: "underlined",
                                                                            type: "date",
                                                                            format: formatDate.value,
                                                                            onInput: handleInputChange
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.edad,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                                            label: "Edad*",
                                                                            type: "text",
                                                                            variant: "underlined",
                                                                            readonly: ""
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.direccion,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                            label: "Dirección",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            label: "teléfono 1",
                                                                            modelValue: state.editedItem.telefono1,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.telefono2,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                            label: "teléfono 2",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.grupo_sanguineo,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.grupo_sanguineo_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                                          label: "Grupo sanguíneo",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.estado_civil,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.estado_civil_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                                          label: "Estado civil",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.nacionalidad,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.nacionalidad_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                                          label: "Nacionalidad",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.religion,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          label: "Religion / Culto",
                                                                          modelValue: state.editedItem.religion_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.genero,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          label: "Género",
                                                                          modelValue: state.editedItem.genero_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          label: "Ciudad",
                                                                          modelValue: state.editedItem.ciudad,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.grupo_sanguineo,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.grupo_sanguineo_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                                            label: "Grupo sanguíneo",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.estado_civil,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.estado_civil_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                                            label: "Estado civil",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.nacionalidad,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.nacionalidad_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                                            label: "Nacionalidad",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.religion,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            label: "Religion / Culto",
                                                                            modelValue: state.editedItem.religion_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.genero,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            label: "Género",
                                                                            modelValue: state.editedItem.genero_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            label: "Ciudad",
                                                                            modelValue: state.editedItem.ciudad,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.prevision,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.prevision_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                                          label: "Previsión de Salud",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.pueblo,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.pueblo_originario_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                                          label: "Pueblo originario",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.nivel_instruccion_id,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.instruccion,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                                          label: "Nivel de Instruccion",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, { label: "Diagnóstico NNE Transitoria" }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, { label: "Diagnóstico NNE Permanentes" }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.prevision,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.prevision_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                                            label: "Previsión de Salud",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.pueblo,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.pueblo_originario_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                                            label: "Pueblo originario",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.nivel_instruccion_id,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.instruccion,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                                            label: "Nivel de Instruccion",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                                          createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.rut,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                          label: "Rut* (12345678-9)",
                                                                          id: "rut",
                                                                          type: "text",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.nombre,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                          label: "Nombre*",
                                                                          type: "text",
                                                                          id: "nombre",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.apellidos,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                          label: "Apellidos*",
                                                                          id: "apellidos",
                                                                          required: "",
                                                                          type: "text",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_switch, {
                                                                          modelValue: state.editedItem.comunidad_lgbtq,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-2",
                                                                          color: "green-darken-3",
                                                                          inset: "",
                                                                          label: "Comunidad LGTB+"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_switch, {
                                                                          modelValue: state.editedItem.donante,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                                          class: "ml-2",
                                                                          label: "Donante",
                                                                          color: "success",
                                                                          "hide-details": "",
                                                                          inset: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_switch, {
                                                                          modelValue: state.editedItem.credencial_discapacidad,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                                          class: "ml-2",
                                                                          label: "Credencial discapacidad",
                                                                          color: "success",
                                                                          "hide-details": "",
                                                                          inset: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.email,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                          rules: state.validationSchema.emailRules,
                                                                          label: "Email",
                                                                          type: "email",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_nacimiento,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                                          label: "Fecha de nacimiento",
                                                                          clearable: "",
                                                                          variant: "underlined",
                                                                          type: "date",
                                                                          format: formatDate.value,
                                                                          onInput: handleInputChange
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.edad,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                                          label: "Edad*",
                                                                          type: "text",
                                                                          variant: "underlined",
                                                                          readonly: ""
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.direccion,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                          label: "Dirección",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          label: "teléfono 1",
                                                                          modelValue: state.editedItem.telefono1,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.telefono2,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                          label: "teléfono 2",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.grupo_sanguineo,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.grupo_sanguineo_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                                          label: "Grupo sanguíneo",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.estado_civil,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.estado_civil_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                                          label: "Estado civil",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.nacionalidad,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.nacionalidad_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                                          label: "Nacionalidad",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.religion,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          label: "Religion / Culto",
                                                                          modelValue: state.editedItem.religion_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.genero,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          label: "Género",
                                                                          modelValue: state.editedItem.genero_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          label: "Ciudad",
                                                                          modelValue: state.editedItem.ciudad,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.prevision,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.prevision_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                                          label: "Previsión de Salud",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.pueblo,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.pueblo_originario_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                                          label: "Pueblo originario",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.nivel_instruccion_id,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.instruccion,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                                          label: "Nivel de Instruccion",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                                        createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(`<div class="text-h6"${_scopeId9}> Datos Educacionales </div>`);
                                                            _push10(ssrRenderComponent(_component_v_row, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          label: "Establecimiento educacional",
                                                                          modelValue: state.editedItem.establecimiento_educacional_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_select, {
                                                                            label: "Establecimiento educacional",
                                                                            modelValue: state.editedItem.establecimiento_educacional_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_select, { label: "Profesor/a Jefe" }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_switch, {
                                                                          modelValue: state.editedItem.pertenece_pie,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-2",
                                                                          color: "green-darken-3",
                                                                          inset: "",
                                                                          label: "Pertenece PIE"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_switch, {
                                                                            modelValue: state.editedItem.pertenece_pie,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                                            "hide-details": "",
                                                                            class: "ml-2",
                                                                            color: "green-darken-3",
                                                                            inset: "",
                                                                            label: "Pertenece PIE"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_select, {
                                                                          label: "Establecimiento educacional",
                                                                          modelValue: state.editedItem.establecimiento_educacional_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_switch, {
                                                                          modelValue: state.editedItem.pertenece_pie,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-2",
                                                                          color: "green-darken-3",
                                                                          inset: "",
                                                                          label: "Pertenece PIE"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(`<div class="text-h6"${_scopeId9}> Datos Persona Responsable </div>`);
                                                            _push10(ssrRenderComponent(_component_v_row, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.rut_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                                          label: "Rut* (12345678-9)",
                                                                          id: "rut",
                                                                          type: "text",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.nombre_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                                          label: "Nombre*",
                                                                          type: "text",
                                                                          id: "nombre",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.apellidos_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                                          label: "Apellidos*",
                                                                          id: "apellidos",
                                                                          required: "",
                                                                          type: "text",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_switch, {
                                                                          modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-2",
                                                                          color: "green-darken-3",
                                                                          inset: "",
                                                                          label: "Comunidad LGTB+"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_switch, {
                                                                          modelValue: state.editedItem.donante_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                                          class: "ml-2",
                                                                          label: "Donante",
                                                                          color: "success",
                                                                          "hide-details": "",
                                                                          inset: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_switch, {
                                                                          modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                                          class: "ml-2",
                                                                          label: "Credencial discapacidad",
                                                                          color: "success",
                                                                          "hide-details": "",
                                                                          inset: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.rut_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                                            label: "Rut* (12345678-9)",
                                                                            id: "rut",
                                                                            type: "text",
                                                                            required: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.nombre_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                                            label: "Nombre*",
                                                                            type: "text",
                                                                            id: "nombre",
                                                                            required: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.apellidos_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                                            label: "Apellidos*",
                                                                            id: "apellidos",
                                                                            required: "",
                                                                            type: "text",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_switch, {
                                                                            modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                                            "hide-details": "",
                                                                            class: "ml-2",
                                                                            color: "green-darken-3",
                                                                            inset: "",
                                                                            label: "Comunidad LGTB+"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_switch, {
                                                                            modelValue: state.editedItem.donante_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                                            class: "ml-2",
                                                                            label: "Donante",
                                                                            color: "success",
                                                                            "hide-details": "",
                                                                            inset: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_switch, {
                                                                            modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                                            class: "ml-2",
                                                                            label: "Credencial discapacidad",
                                                                            color: "success",
                                                                            "hide-details": "",
                                                                            inset: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.email_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                                          rules: state.validationSchema.emailRules,
                                                                          label: "Email",
                                                                          type: "email",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                                          label: "Fecha de nacimientoX",
                                                                          clearable: "",
                                                                          variant: "underlined",
                                                                          type: "date",
                                                                          format: formatDate.value,
                                                                          onInput: handleInputChange
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.edad_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                                          label: "Edad*",
                                                                          type: "text",
                                                                          variant: "underlined",
                                                                          readonly: ""
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: state.editedItem.direccion_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                                          label: "Dirección",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          label: "teléfono 1X",
                                                                          modelValue: state.editedItem.telefono_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.email_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                                            rules: state.validationSchema.emailRules,
                                                                            label: "Email",
                                                                            type: "email",
                                                                            required: "",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                                            label: "Fecha de nacimientoX",
                                                                            clearable: "",
                                                                            variant: "underlined",
                                                                            type: "date",
                                                                            format: formatDate.value,
                                                                            onInput: handleInputChange
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.edad_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                                            label: "Edad*",
                                                                            type: "text",
                                                                            variant: "underlined",
                                                                            readonly: ""
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: state.editedItem.direccion_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                                            label: "Dirección",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            label: "teléfono 1X",
                                                                            modelValue: state.editedItem.telefono_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.grupo_sanguineo,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                                          label: "Grupo sanguíneo",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.estado_civil,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.estado_civil_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                                          label: "Estado civil",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.nacionalidad,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.nacionalidad_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                                          label: "Nacionalidad",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.religion,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          label: "Religion / Culto",
                                                                          modelValue: state.editedItem.religion_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.genero,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          label: "Género",
                                                                          modelValue: state.editedItem.genero_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          label: "Ciudad",
                                                                          modelValue: state.editedItem.ciudad_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.grupo_sanguineo,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                                            label: "Grupo sanguíneo",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.estado_civil,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.estado_civil_responsable_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                                            label: "Estado civil",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.nacionalidad,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.nacionalidad_responsable_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                                            label: "Nacionalidad",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.religion,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            label: "Religion / Culto",
                                                                            modelValue: state.editedItem.religion_responsable_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.genero,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            label: "Género",
                                                                            modelValue: state.editedItem.genero_responsable_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_text_field, {
                                                                            label: "Ciudad",
                                                                            modelValue: state.editedItem.ciudad_responsable,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.prevision,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.prevision_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                                          label: "Previsión de Salud",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.pueblo,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                                          label: "Pueblo originario",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          items: state.list.nivel_instruccion_id,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                                          label: "Nivel de Instruccion",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.prevision,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.prevision_responsable_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                                            label: "Previsión de Salud",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.pueblo,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                                            label: "Pueblo originario",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                          createVNode(_component_v_select, {
                                                                            items: state.list.nivel_instruccion_id,
                                                                            "item-title": "descripcion",
                                                                            "item-value": "id",
                                                                            modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                                            "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                                            label: "Nivel de Instruccion",
                                                                            clearable: "",
                                                                            variant: "underlined"
                                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.rut_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                                          label: "Rut* (12345678-9)",
                                                                          id: "rut",
                                                                          type: "text",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.nombre_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                                          label: "Nombre*",
                                                                          type: "text",
                                                                          id: "nombre",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.apellidos_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                                          label: "Apellidos*",
                                                                          id: "apellidos",
                                                                          required: "",
                                                                          type: "text",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_switch, {
                                                                          modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                                          "hide-details": "",
                                                                          class: "ml-2",
                                                                          color: "green-darken-3",
                                                                          inset: "",
                                                                          label: "Comunidad LGTB+"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_switch, {
                                                                          modelValue: state.editedItem.donante_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                                          class: "ml-2",
                                                                          label: "Donante",
                                                                          color: "success",
                                                                          "hide-details": "",
                                                                          inset: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_switch, {
                                                                          modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                                          class: "ml-2",
                                                                          label: "Credencial discapacidad",
                                                                          color: "success",
                                                                          "hide-details": "",
                                                                          inset: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.email_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                                          rules: state.validationSchema.emailRules,
                                                                          label: "Email",
                                                                          type: "email",
                                                                          required: "",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                                          label: "Fecha de nacimientoX",
                                                                          clearable: "",
                                                                          variant: "underlined",
                                                                          type: "date",
                                                                          format: formatDate.value,
                                                                          onInput: handleInputChange
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.edad_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                                          label: "Edad*",
                                                                          type: "text",
                                                                          variant: "underlined",
                                                                          readonly: ""
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: state.editedItem.direccion_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                                          label: "Dirección",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          label: "teléfono 1X",
                                                                          modelValue: state.editedItem.telefono_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.grupo_sanguineo,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                                          label: "Grupo sanguíneo",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.estado_civil,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.estado_civil_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                                          label: "Estado civil",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.nacionalidad,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.nacionalidad_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                                          label: "Nacionalidad",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.religion,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          label: "Religion / Culto",
                                                                          modelValue: state.editedItem.religion_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.genero,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          label: "Género",
                                                                          modelValue: state.editedItem.genero_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_text_field, {
                                                                          label: "Ciudad",
                                                                          modelValue: state.editedItem.ciudad_responsable,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.prevision,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.prevision_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                                          label: "Previsión de Salud",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.pueblo,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                                          label: "Pueblo originario",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                        createVNode(_component_v_select, {
                                                                          items: state.list.nivel_instruccion_id,
                                                                          "item-title": "descripcion",
                                                                          "item-value": "id",
                                                                          modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                                          "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                                          label: "Nivel de Instruccion",
                                                                          clearable: "",
                                                                          variant: "underlined"
                                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                              createVNode(_component_v_row, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.rut,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                        label: "Rut* (12345678-9)",
                                                                        id: "rut",
                                                                        type: "text",
                                                                        required: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.nombre,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                        label: "Nombre*",
                                                                        type: "text",
                                                                        id: "nombre",
                                                                        required: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.apellidos,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                        label: "Apellidos*",
                                                                        id: "apellidos",
                                                                        required: "",
                                                                        type: "text",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_switch, {
                                                                        modelValue: state.editedItem.comunidad_lgbtq,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                                        "hide-details": "",
                                                                        class: "ml-2",
                                                                        color: "green-darken-3",
                                                                        inset: "",
                                                                        label: "Comunidad LGTB+"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_switch, {
                                                                        modelValue: state.editedItem.donante,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                                        class: "ml-2",
                                                                        label: "Donante",
                                                                        color: "success",
                                                                        "hide-details": "",
                                                                        inset: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_switch, {
                                                                        modelValue: state.editedItem.credencial_discapacidad,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                                        class: "ml-2",
                                                                        label: "Credencial discapacidad",
                                                                        color: "success",
                                                                        "hide-details": "",
                                                                        inset: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.email,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                        rules: state.validationSchema.emailRules,
                                                                        label: "Email",
                                                                        type: "email",
                                                                        required: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.fecha_nacimiento,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                                        label: "Fecha de nacimiento",
                                                                        clearable: "",
                                                                        variant: "underlined",
                                                                        type: "date",
                                                                        format: formatDate.value,
                                                                        onInput: handleInputChange
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.edad,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                                        label: "Edad*",
                                                                        type: "text",
                                                                        variant: "underlined",
                                                                        readonly: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.direccion,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                        label: "Dirección",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        label: "teléfono 1",
                                                                        modelValue: state.editedItem.telefono1,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.telefono2,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                        label: "teléfono 2",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.grupo_sanguineo,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.grupo_sanguineo_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                                        label: "Grupo sanguíneo",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.estado_civil,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.estado_civil_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                                        label: "Estado civil",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.nacionalidad,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.nacionalidad_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                                        label: "Nacionalidad",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.religion,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        label: "Religion / Culto",
                                                                        modelValue: state.editedItem.religion_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.genero,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        label: "Género",
                                                                        modelValue: state.editedItem.genero_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        label: "Ciudad",
                                                                        modelValue: state.editedItem.ciudad,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.prevision,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.prevision_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                                        label: "Previsión de Salud",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.pueblo,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.pueblo_originario_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                                        label: "Pueblo originario",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.nivel_instruccion_id,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.instruccion,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                                        label: "Nivel de Instruccion",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                                      createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                              createVNode(_component_v_row, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_select, {
                                                                        label: "Establecimiento educacional",
                                                                        modelValue: state.editedItem.establecimiento_educacional_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_switch, {
                                                                        modelValue: state.editedItem.pertenece_pie,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                                        "hide-details": "",
                                                                        class: "ml-2",
                                                                        color: "green-darken-3",
                                                                        inset: "",
                                                                        label: "Pertenece PIE"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode("div", { class: "text-h6" }, " Datos Persona Responsable "),
                                                              createVNode(_component_v_row, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.rut_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                                        label: "Rut* (12345678-9)",
                                                                        id: "rut",
                                                                        type: "text",
                                                                        required: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.nombre_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                                        label: "Nombre*",
                                                                        type: "text",
                                                                        id: "nombre",
                                                                        required: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.apellidos_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                                        label: "Apellidos*",
                                                                        id: "apellidos",
                                                                        required: "",
                                                                        type: "text",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_switch, {
                                                                        modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                                        "hide-details": "",
                                                                        class: "ml-2",
                                                                        color: "green-darken-3",
                                                                        inset: "",
                                                                        label: "Comunidad LGTB+"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_switch, {
                                                                        modelValue: state.editedItem.donante_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                                        class: "ml-2",
                                                                        label: "Donante",
                                                                        color: "success",
                                                                        "hide-details": "",
                                                                        inset: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_switch, {
                                                                        modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                                        class: "ml-2",
                                                                        label: "Credencial discapacidad",
                                                                        color: "success",
                                                                        "hide-details": "",
                                                                        inset: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.email_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                                        rules: state.validationSchema.emailRules,
                                                                        label: "Email",
                                                                        type: "email",
                                                                        required: "",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                                        label: "Fecha de nacimientoX",
                                                                        clearable: "",
                                                                        variant: "underlined",
                                                                        type: "date",
                                                                        format: formatDate.value,
                                                                        onInput: handleInputChange
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.edad_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                                        label: "Edad*",
                                                                        type: "text",
                                                                        variant: "underlined",
                                                                        readonly: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: state.editedItem.direccion_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                                        label: "Dirección",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        label: "teléfono 1X",
                                                                        modelValue: state.editedItem.telefono_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.grupo_sanguineo,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                                        label: "Grupo sanguíneo",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.estado_civil,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.estado_civil_responsable_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                                        label: "Estado civil",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.nacionalidad,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.nacionalidad_responsable_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                                        label: "Nacionalidad",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.religion,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        label: "Religion / Culto",
                                                                        modelValue: state.editedItem.religion_responsable_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.genero,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        label: "Género",
                                                                        modelValue: state.editedItem.genero_responsable_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        label: "Ciudad",
                                                                        modelValue: state.editedItem.ciudad_responsable,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.prevision,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.prevision_responsable_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                                        label: "Previsión de Salud",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.pueblo,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                                        label: "Pueblo originario",
                                                                        clearable: "",
                                                                        variant: "underlined"
                                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                      createVNode(_component_v_select, {
                                                                        items: state.list.nivel_instruccion_id,
                                                                        "item-title": "descripcion",
                                                                        "item-value": "id",
                                                                        modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                                        "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                                        label: "Nivel de Instruccion",
                                                                        clearable: "",
                                                                        variant: "underlined"
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_card_actions, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_spacer, null, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_btn, {
                                                              color: "#009AA4",
                                                              variant: "tonal",
                                                              onClick: close
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Cancelar `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Cancelar ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_btn, {
                                                              color: "#009AA4",
                                                              variant: "tonal",
                                                              onClick: storeItems
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Guardar `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Guardar ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_card_title, null, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                            createVNode(_component_v_divider, {
                                                              thickness: "4px",
                                                              color: "#662d91"
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                            createVNode(_component_v_row, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.rut,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                      label: "Rut* (12345678-9)",
                                                                      id: "rut",
                                                                      type: "text",
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.nombre,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                      label: "Nombre*",
                                                                      type: "text",
                                                                      id: "nombre",
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.apellidos,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                      label: "Apellidos*",
                                                                      id: "apellidos",
                                                                      required: "",
                                                                      type: "text",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.comunidad_lgbtq,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                                      "hide-details": "",
                                                                      class: "ml-2",
                                                                      color: "green-darken-3",
                                                                      inset: "",
                                                                      label: "Comunidad LGTB+"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.donante,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                                      class: "ml-2",
                                                                      label: "Donante",
                                                                      color: "success",
                                                                      "hide-details": "",
                                                                      inset: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.credencial_discapacidad,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                                      class: "ml-2",
                                                                      label: "Credencial discapacidad",
                                                                      color: "success",
                                                                      "hide-details": "",
                                                                      inset: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.email,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                      rules: state.validationSchema.emailRules,
                                                                      label: "Email",
                                                                      type: "email",
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.fecha_nacimiento,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                                      label: "Fecha de nacimiento",
                                                                      clearable: "",
                                                                      variant: "underlined",
                                                                      type: "date",
                                                                      format: formatDate.value,
                                                                      onInput: handleInputChange
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.edad,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                                      label: "Edad*",
                                                                      type: "text",
                                                                      variant: "underlined",
                                                                      readonly: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.direccion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                      label: "Dirección",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      label: "teléfono 1",
                                                                      modelValue: state.editedItem.telefono1,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.telefono2,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                      label: "teléfono 2",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.grupo_sanguineo,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.grupo_sanguineo_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                                      label: "Grupo sanguíneo",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.estado_civil,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.estado_civil_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                                      label: "Estado civil",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.nacionalidad,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.nacionalidad_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                                      label: "Nacionalidad",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.religion,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      label: "Religion / Culto",
                                                                      modelValue: state.editedItem.religion_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.genero,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      label: "Género",
                                                                      modelValue: state.editedItem.genero_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      label: "Ciudad",
                                                                      modelValue: state.editedItem.ciudad,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.prevision,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.prevision_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                                      label: "Previsión de Salud",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.pueblo,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.pueblo_originario_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                                      label: "Pueblo originario",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.nivel_instruccion_id,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.instruccion,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                                      label: "Nivel de Instruccion",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                                    createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                            createVNode(_component_v_row, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_select, {
                                                                      label: "Establecimiento educacional",
                                                                      modelValue: state.editedItem.establecimiento_educacional_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.pertenece_pie,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                                      "hide-details": "",
                                                                      class: "ml-2",
                                                                      color: "green-darken-3",
                                                                      inset: "",
                                                                      label: "Pertenece PIE"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("div", { class: "text-h6" }, " Datos Persona Responsable "),
                                                            createVNode(_component_v_row, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.rut_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                                      label: "Rut* (12345678-9)",
                                                                      id: "rut",
                                                                      type: "text",
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.nombre_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                                      label: "Nombre*",
                                                                      type: "text",
                                                                      id: "nombre",
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.apellidos_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                                      label: "Apellidos*",
                                                                      id: "apellidos",
                                                                      required: "",
                                                                      type: "text",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                                      "hide-details": "",
                                                                      class: "ml-2",
                                                                      color: "green-darken-3",
                                                                      inset: "",
                                                                      label: "Comunidad LGTB+"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.donante_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                                      class: "ml-2",
                                                                      label: "Donante",
                                                                      color: "success",
                                                                      "hide-details": "",
                                                                      inset: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_switch, {
                                                                      modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                                      class: "ml-2",
                                                                      label: "Credencial discapacidad",
                                                                      color: "success",
                                                                      "hide-details": "",
                                                                      inset: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.email_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                                      rules: state.validationSchema.emailRules,
                                                                      label: "Email",
                                                                      type: "email",
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                                      label: "Fecha de nacimientoX",
                                                                      clearable: "",
                                                                      variant: "underlined",
                                                                      type: "date",
                                                                      format: formatDate.value,
                                                                      onInput: handleInputChange
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.edad_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                                      label: "Edad*",
                                                                      type: "text",
                                                                      variant: "underlined",
                                                                      readonly: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.direccion_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                                      label: "Dirección",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      label: "teléfono 1X",
                                                                      modelValue: state.editedItem.telefono_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.grupo_sanguineo,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                                      label: "Grupo sanguíneo",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.estado_civil,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.estado_civil_responsable_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                                      label: "Estado civil",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.nacionalidad,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.nacionalidad_responsable_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                                      label: "Nacionalidad",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.religion,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      label: "Religion / Culto",
                                                                      modelValue: state.editedItem.religion_responsable_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.genero,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      label: "Género",
                                                                      modelValue: state.editedItem.genero_responsable_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      label: "Ciudad",
                                                                      modelValue: state.editedItem.ciudad_responsable,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.prevision,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.prevision_responsable_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                                      label: "Previsión de Salud",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.pueblo,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                                      label: "Pueblo originario",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
                                                                      items: state.list.nivel_instruccion_id,
                                                                      "item-title": "descripcion",
                                                                      "item-value": "id",
                                                                      modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                                      label: "Nivel de Instruccion",
                                                                      clearable: "",
                                                                      variant: "underlined"
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, null, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                          createVNode(_component_v_divider, {
                                                            thickness: "4px",
                                                            color: "#662d91"
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                          createVNode(_component_v_row, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.rut,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                    label: "Rut* (12345678-9)",
                                                                    id: "rut",
                                                                    type: "text",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.nombre,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                    label: "Nombre*",
                                                                    type: "text",
                                                                    id: "nombre",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.apellidos,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                    label: "Apellidos*",
                                                                    id: "apellidos",
                                                                    required: "",
                                                                    type: "text",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.comunidad_lgbtq,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                                    "hide-details": "",
                                                                    class: "ml-2",
                                                                    color: "green-darken-3",
                                                                    inset: "",
                                                                    label: "Comunidad LGTB+"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.donante,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                                    class: "ml-2",
                                                                    label: "Donante",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.credencial_discapacidad,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                                    class: "ml-2",
                                                                    label: "Credencial discapacidad",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.email,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                    rules: state.validationSchema.emailRules,
                                                                    label: "Email",
                                                                    type: "email",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.fecha_nacimiento,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                                    label: "Fecha de nacimiento",
                                                                    clearable: "",
                                                                    variant: "underlined",
                                                                    type: "date",
                                                                    format: formatDate.value,
                                                                    onInput: handleInputChange
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.edad,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                                    label: "Edad*",
                                                                    type: "text",
                                                                    variant: "underlined",
                                                                    readonly: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.direccion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                    label: "Dirección",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    label: "teléfono 1",
                                                                    modelValue: state.editedItem.telefono1,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.telefono2,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                    label: "teléfono 2",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.grupo_sanguineo,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.grupo_sanguineo_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                                    label: "Grupo sanguíneo",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.estado_civil,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.estado_civil_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                                    label: "Estado civil",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.nacionalidad,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.nacionalidad_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                                    label: "Nacionalidad",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.religion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    label: "Religion / Culto",
                                                                    modelValue: state.editedItem.religion_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.genero,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    label: "Género",
                                                                    modelValue: state.editedItem.genero_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    label: "Ciudad",
                                                                    modelValue: state.editedItem.ciudad,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.prevision,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.prevision_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                                    label: "Previsión de Salud",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.pueblo,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.pueblo_originario_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                                    label: "Pueblo originario",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.nivel_instruccion_id,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.instruccion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                                    label: "Nivel de Instruccion",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                                  createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                          createVNode(_component_v_row, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_select, {
                                                                    label: "Establecimiento educacional",
                                                                    modelValue: state.editedItem.establecimiento_educacional_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.pertenece_pie,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                                    "hide-details": "",
                                                                    class: "ml-2",
                                                                    color: "green-darken-3",
                                                                    inset: "",
                                                                    label: "Pertenece PIE"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode("div", { class: "text-h6" }, " Datos Persona Responsable "),
                                                          createVNode(_component_v_row, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.rut_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                                    label: "Rut* (12345678-9)",
                                                                    id: "rut",
                                                                    type: "text",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.nombre_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                                    label: "Nombre*",
                                                                    type: "text",
                                                                    id: "nombre",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.apellidos_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                                    label: "Apellidos*",
                                                                    id: "apellidos",
                                                                    required: "",
                                                                    type: "text",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                                    "hide-details": "",
                                                                    class: "ml-2",
                                                                    color: "green-darken-3",
                                                                    inset: "",
                                                                    label: "Comunidad LGTB+"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.donante_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                                    class: "ml-2",
                                                                    label: "Donante",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_switch, {
                                                                    modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                                    class: "ml-2",
                                                                    label: "Credencial discapacidad",
                                                                    color: "success",
                                                                    "hide-details": "",
                                                                    inset: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.email_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                                    rules: state.validationSchema.emailRules,
                                                                    label: "Email",
                                                                    type: "email",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                                    label: "Fecha de nacimientoX",
                                                                    clearable: "",
                                                                    variant: "underlined",
                                                                    type: "date",
                                                                    format: formatDate.value,
                                                                    onInput: handleInputChange
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.edad_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                                    label: "Edad*",
                                                                    type: "text",
                                                                    variant: "underlined",
                                                                    readonly: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.direccion_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                                    label: "Dirección",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    label: "teléfono 1X",
                                                                    modelValue: state.editedItem.telefono_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.grupo_sanguineo,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                                    label: "Grupo sanguíneo",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.estado_civil,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.estado_civil_responsable_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                                    label: "Estado civil",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.nacionalidad,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.nacionalidad_responsable_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                                    label: "Nacionalidad",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.religion,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    label: "Religion / Culto",
                                                                    modelValue: state.editedItem.religion_responsable_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.genero,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    label: "Género",
                                                                    modelValue: state.editedItem.genero_responsable_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    label: "Ciudad",
                                                                    modelValue: state.editedItem.ciudad_responsable,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.prevision,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.prevision_responsable_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                                    label: "Previsión de Salud",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.pueblo,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                                    label: "Pueblo originario",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
                                                                    items: state.list.nivel_instruccion_id,
                                                                    "item-title": "descripcion",
                                                                    "item-value": "id",
                                                                    modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                                    label: "Nivel de Instruccion",
                                                                    clearable: "",
                                                                    variant: "underlined"
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_sheet, {
                                              color: "white",
                                              elevation: 6,
                                              class: "rounded-lg ma-4 pa-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                        createVNode(_component_v_divider, {
                                                          thickness: "4px",
                                                          color: "#662d91"
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                        createVNode(_component_v_row, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.rut,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                  label: "Rut* (12345678-9)",
                                                                  id: "rut",
                                                                  type: "text",
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.nombre,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                  label: "Nombre*",
                                                                  type: "text",
                                                                  id: "nombre",
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.apellidos,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                  label: "Apellidos*",
                                                                  id: "apellidos",
                                                                  required: "",
                                                                  type: "text",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.comunidad_lgbtq,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                                  "hide-details": "",
                                                                  class: "ml-2",
                                                                  color: "green-darken-3",
                                                                  inset: "",
                                                                  label: "Comunidad LGTB+"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.donante,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                                  class: "ml-2",
                                                                  label: "Donante",
                                                                  color: "success",
                                                                  "hide-details": "",
                                                                  inset: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.credencial_discapacidad,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                                  class: "ml-2",
                                                                  label: "Credencial discapacidad",
                                                                  color: "success",
                                                                  "hide-details": "",
                                                                  inset: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.email,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                  rules: state.validationSchema.emailRules,
                                                                  label: "Email",
                                                                  type: "email",
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.fecha_nacimiento,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                                  label: "Fecha de nacimiento",
                                                                  clearable: "",
                                                                  variant: "underlined",
                                                                  type: "date",
                                                                  format: formatDate.value,
                                                                  onInput: handleInputChange
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.edad,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                                  label: "Edad*",
                                                                  type: "text",
                                                                  variant: "underlined",
                                                                  readonly: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.direccion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                  label: "Dirección",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  label: "teléfono 1",
                                                                  modelValue: state.editedItem.telefono1,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.telefono2,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                  label: "teléfono 2",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.grupo_sanguineo,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.grupo_sanguineo_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                                  label: "Grupo sanguíneo",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.estado_civil,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.estado_civil_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                                  label: "Estado civil",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.nacionalidad,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.nacionalidad_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                                  label: "Nacionalidad",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.religion,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  label: "Religion / Culto",
                                                                  modelValue: state.editedItem.religion_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.genero,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  label: "Género",
                                                                  modelValue: state.editedItem.genero_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  label: "Ciudad",
                                                                  modelValue: state.editedItem.ciudad,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.prevision,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.prevision_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                                  label: "Previsión de Salud",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.pueblo,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.pueblo_originario_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                                  label: "Pueblo originario",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.nivel_instruccion_id,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.instruccion,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                                  label: "Nivel de Instruccion",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                                createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                        createVNode(_component_v_row, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_select, {
                                                                  label: "Establecimiento educacional",
                                                                  modelValue: state.editedItem.establecimiento_educacional_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.pertenece_pie,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                                  "hide-details": "",
                                                                  class: "ml-2",
                                                                  color: "green-darken-3",
                                                                  inset: "",
                                                                  label: "Pertenece PIE"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("div", { class: "text-h6" }, " Datos Persona Responsable "),
                                                        createVNode(_component_v_row, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.rut_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                                  label: "Rut* (12345678-9)",
                                                                  id: "rut",
                                                                  type: "text",
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.nombre_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                                  label: "Nombre*",
                                                                  type: "text",
                                                                  id: "nombre",
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.apellidos_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                                  label: "Apellidos*",
                                                                  id: "apellidos",
                                                                  required: "",
                                                                  type: "text",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                                  "hide-details": "",
                                                                  class: "ml-2",
                                                                  color: "green-darken-3",
                                                                  inset: "",
                                                                  label: "Comunidad LGTB+"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.donante_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                                  class: "ml-2",
                                                                  label: "Donante",
                                                                  color: "success",
                                                                  "hide-details": "",
                                                                  inset: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_switch, {
                                                                  modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                                  class: "ml-2",
                                                                  label: "Credencial discapacidad",
                                                                  color: "success",
                                                                  "hide-details": "",
                                                                  inset: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.email_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                                  rules: state.validationSchema.emailRules,
                                                                  label: "Email",
                                                                  type: "email",
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                                  label: "Fecha de nacimientoX",
                                                                  clearable: "",
                                                                  variant: "underlined",
                                                                  type: "date",
                                                                  format: formatDate.value,
                                                                  onInput: handleInputChange
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.edad_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                                  label: "Edad*",
                                                                  type: "text",
                                                                  variant: "underlined",
                                                                  readonly: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.direccion_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                                  label: "Dirección",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  label: "teléfono 1X",
                                                                  modelValue: state.editedItem.telefono_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.grupo_sanguineo,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                                  label: "Grupo sanguíneo",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.estado_civil,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.estado_civil_responsable_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                                  label: "Estado civil",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.nacionalidad,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.nacionalidad_responsable_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                                  label: "Nacionalidad",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.religion,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  label: "Religion / Culto",
                                                                  modelValue: state.editedItem.religion_responsable_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.genero,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  label: "Género",
                                                                  modelValue: state.editedItem.genero_responsable_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  label: "Ciudad",
                                                                  modelValue: state.editedItem.ciudad_responsable,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.prevision,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.prevision_responsable_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                                  label: "Previsión de Salud",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.pueblo,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                                  label: "Pueblo originario",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
                                                                  items: state.list.nivel_instruccion_id,
                                                                  "item-title": "descripcion",
                                                                  "item-value": "id",
                                                                  modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                                  label: "Nivel de Instruccion",
                                                                  clearable: "",
                                                                  variant: "underlined"
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
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_form, {
                                        "fast-fail": "",
                                        onSubmit: withModifiers(() => {
                                        }, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_sheet, {
                                            color: "white",
                                            elevation: 6,
                                            class: "rounded-lg ma-4 pa-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                      createVNode(_component_v_divider, {
                                                        thickness: "4px",
                                                        color: "#662d91"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                      createVNode(_component_v_row, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.rut,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                label: "Rut* (12345678-9)",
                                                                id: "rut",
                                                                type: "text",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.nombre,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                label: "Nombre*",
                                                                type: "text",
                                                                id: "nombre",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.apellidos,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                label: "Apellidos*",
                                                                id: "apellidos",
                                                                required: "",
                                                                type: "text",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.comunidad_lgbtq,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                                "hide-details": "",
                                                                class: "ml-2",
                                                                color: "green-darken-3",
                                                                inset: "",
                                                                label: "Comunidad LGTB+"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.donante,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                                class: "ml-2",
                                                                label: "Donante",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.credencial_discapacidad,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                                class: "ml-2",
                                                                label: "Credencial discapacidad",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.email,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                rules: state.validationSchema.emailRules,
                                                                label: "Email",
                                                                type: "email",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.fecha_nacimiento,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                                label: "Fecha de nacimiento",
                                                                clearable: "",
                                                                variant: "underlined",
                                                                type: "date",
                                                                format: formatDate.value,
                                                                onInput: handleInputChange
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.edad,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                                label: "Edad*",
                                                                type: "text",
                                                                variant: "underlined",
                                                                readonly: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.direccion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                label: "Dirección",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                label: "teléfono 1",
                                                                modelValue: state.editedItem.telefono1,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.telefono2,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                label: "teléfono 2",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_select, {
                                                                items: state.list.grupo_sanguineo,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.grupo_sanguineo_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                                label: "Grupo sanguíneo",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.estado_civil,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.estado_civil_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                                label: "Estado civil",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.nacionalidad,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.nacionalidad_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                                label: "Nacionalidad",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.religion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Religion / Culto",
                                                                modelValue: state.editedItem.religion_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.genero,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Género",
                                                                modelValue: state.editedItem.genero_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                label: "Ciudad",
                                                                modelValue: state.editedItem.ciudad,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_select, {
                                                                items: state.list.prevision,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.prevision_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                                label: "Previsión de Salud",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.pueblo,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.pueblo_originario_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                                label: "Pueblo originario",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.nivel_instruccion_id,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.instruccion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                                label: "Nivel de Instruccion",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                              createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                      createVNode(_component_v_row, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_select, {
                                                                label: "Establecimiento educacional",
                                                                modelValue: state.editedItem.establecimiento_educacional_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.pertenece_pie,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                                "hide-details": "",
                                                                class: "ml-2",
                                                                color: "green-darken-3",
                                                                inset: "",
                                                                label: "Pertenece PIE"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("div", { class: "text-h6" }, " Datos Persona Responsable "),
                                                      createVNode(_component_v_row, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.rut_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                                label: "Rut* (12345678-9)",
                                                                id: "rut",
                                                                type: "text",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.nombre_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                                label: "Nombre*",
                                                                type: "text",
                                                                id: "nombre",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.apellidos_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                                label: "Apellidos*",
                                                                id: "apellidos",
                                                                required: "",
                                                                type: "text",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                                "hide-details": "",
                                                                class: "ml-2",
                                                                color: "green-darken-3",
                                                                inset: "",
                                                                label: "Comunidad LGTB+"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.donante_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                                class: "ml-2",
                                                                label: "Donante",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_switch, {
                                                                modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                                class: "ml-2",
                                                                label: "Credencial discapacidad",
                                                                color: "success",
                                                                "hide-details": "",
                                                                inset: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.email_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                                rules: state.validationSchema.emailRules,
                                                                label: "Email",
                                                                type: "email",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                                label: "Fecha de nacimientoX",
                                                                clearable: "",
                                                                variant: "underlined",
                                                                type: "date",
                                                                format: formatDate.value,
                                                                onInput: handleInputChange
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.edad_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                                label: "Edad*",
                                                                type: "text",
                                                                variant: "underlined",
                                                                readonly: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.direccion_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                                label: "Dirección",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                label: "teléfono 1X",
                                                                modelValue: state.editedItem.telefono_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_select, {
                                                                items: state.list.grupo_sanguineo,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                                label: "Grupo sanguíneo",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.estado_civil,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.estado_civil_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                                label: "Estado civil",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.nacionalidad,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.nacionalidad_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                                label: "Nacionalidad",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.religion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Religion / Culto",
                                                                modelValue: state.editedItem.religion_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.genero,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Género",
                                                                modelValue: state.editedItem.genero_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                label: "Ciudad",
                                                                modelValue: state.editedItem.ciudad_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_select, {
                                                                items: state.list.prevision,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.prevision_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                                label: "Previsión de Salud",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.pueblo,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                                label: "Pueblo originario",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
                                                                items: state.list.nivel_instruccion_id,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                                label: "Nivel de Instruccion",
                                                                clearable: "",
                                                                variant: "underlined"
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
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onSubmit"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  icon: "mdi-account-multiple-plus",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  onClick: openFormCreate
                                }),
                                createVNode(_component_v_dialog, {
                                  modelValue: state.dialog,
                                  "onUpdate:modelValue": ($event) => state.dialog = $event,
                                  persistent: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_form, {
                                      "fast-fail": "",
                                      onSubmit: withModifiers(() => {
                                      }, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_sheet, {
                                          color: "white",
                                          elevation: 6,
                                          class: "rounded-lg ma-4 pa-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                    createVNode(_component_v_divider, {
                                                      thickness: "4px",
                                                      color: "#662d91"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.rut,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                              label: "Rut* (12345678-9)",
                                                              id: "rut",
                                                              type: "text",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.nombre,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                              label: "Nombre*",
                                                              type: "text",
                                                              id: "nombre",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.apellidos,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                              label: "Apellidos*",
                                                              id: "apellidos",
                                                              required: "",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.comunidad_lgbtq,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                              "hide-details": "",
                                                              class: "ml-2",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Comunidad LGTB+"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.donante,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                              class: "ml-2",
                                                              label: "Donante",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.credencial_discapacidad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                              class: "ml-2",
                                                              label: "Credencial discapacidad",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.email,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                              rules: state.validationSchema.emailRules,
                                                              label: "Email",
                                                              type: "email",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.fecha_nacimiento,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                              label: "Fecha de nacimiento",
                                                              clearable: "",
                                                              variant: "underlined",
                                                              type: "date",
                                                              format: formatDate.value,
                                                              onInput: handleInputChange
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.edad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                              label: "Edad*",
                                                              type: "text",
                                                              variant: "underlined",
                                                              readonly: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.direccion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                              label: "Dirección",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              label: "teléfono 1",
                                                              modelValue: state.editedItem.telefono1,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.telefono2,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                              label: "teléfono 2",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, {
                                                              items: state.list.grupo_sanguineo,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.grupo_sanguineo_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                              label: "Grupo sanguíneo",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.estado_civil,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.estado_civil_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                              label: "Estado civil",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.nacionalidad,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nacionalidad_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                              label: "Nacionalidad",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.religion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Religion / Culto",
                                                              modelValue: state.editedItem.religion_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.genero,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Género",
                                                              modelValue: state.editedItem.genero_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              label: "Ciudad",
                                                              modelValue: state.editedItem.ciudad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, {
                                                              items: state.list.prevision,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.prevision_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                              label: "Previsión de Salud",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.pueblo,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.pueblo_originario_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                              label: "Pueblo originario",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.nivel_instruccion_id,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.instruccion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                              label: "Nivel de Instruccion",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                            createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, {
                                                              label: "Establecimiento educacional",
                                                              modelValue: state.editedItem.establecimiento_educacional_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.pertenece_pie,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                              "hide-details": "",
                                                              class: "ml-2",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Pertenece PIE"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("div", { class: "text-h6" }, " Datos Persona Responsable "),
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.rut_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                              label: "Rut* (12345678-9)",
                                                              id: "rut",
                                                              type: "text",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.nombre_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                              label: "Nombre*",
                                                              type: "text",
                                                              id: "nombre",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.apellidos_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                              label: "Apellidos*",
                                                              id: "apellidos",
                                                              required: "",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                              "hide-details": "",
                                                              class: "ml-2",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Comunidad LGTB+"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.donante_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                              class: "ml-2",
                                                              label: "Donante",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_switch, {
                                                              modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                              class: "ml-2",
                                                              label: "Credencial discapacidad",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.email_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                              rules: state.validationSchema.emailRules,
                                                              label: "Email",
                                                              type: "email",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                              label: "Fecha de nacimientoX",
                                                              clearable: "",
                                                              variant: "underlined",
                                                              type: "date",
                                                              format: formatDate.value,
                                                              onInput: handleInputChange
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.edad_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                              label: "Edad*",
                                                              type: "text",
                                                              variant: "underlined",
                                                              readonly: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.direccion_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                              label: "Dirección",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              label: "teléfono 1X",
                                                              modelValue: state.editedItem.telefono_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, {
                                                              items: state.list.grupo_sanguineo,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                              label: "Grupo sanguíneo",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.estado_civil,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.estado_civil_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                              label: "Estado civil",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.nacionalidad,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nacionalidad_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                              label: "Nacionalidad",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.religion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Religion / Culto",
                                                              modelValue: state.editedItem.religion_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.genero,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Género",
                                                              modelValue: state.editedItem.genero_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              label: "Ciudad",
                                                              modelValue: state.editedItem.ciudad_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, {
                                                              items: state.list.prevision,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.prevision_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                              label: "Previsión de Salud",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.pueblo,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                              label: "Pueblo originario",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
                                                              items: state.list.nivel_instruccion_id,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                              label: "Nivel de Instruccion",
                                                              clearable: "",
                                                              variant: "underlined"
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
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onSubmit"])
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
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              }),
                              createVNode(_component_v_dialog, {
                                modelValue: state.dialog,
                                "onUpdate:modelValue": ($event) => state.dialog = $event,
                                persistent: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_form, {
                                    "fast-fail": "",
                                    onSubmit: withModifiers(() => {
                                    }, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_sheet, {
                                        color: "white",
                                        elevation: 6,
                                        class: "rounded-lg ma-4 pa-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                  createVNode(_component_v_divider, {
                                                    thickness: "4px",
                                                    color: "#662d91"
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.rut,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                            label: "Rut* (12345678-9)",
                                                            id: "rut",
                                                            type: "text",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.nombre,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                            label: "Nombre*",
                                                            type: "text",
                                                            id: "nombre",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.apellidos,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                            label: "Apellidos*",
                                                            id: "apellidos",
                                                            required: "",
                                                            type: "text",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.comunidad_lgbtq,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                            "hide-details": "",
                                                            class: "ml-2",
                                                            color: "green-darken-3",
                                                            inset: "",
                                                            label: "Comunidad LGTB+"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.donante,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                            class: "ml-2",
                                                            label: "Donante",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.credencial_discapacidad,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                            class: "ml-2",
                                                            label: "Credencial discapacidad",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.email,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                            rules: state.validationSchema.emailRules,
                                                            label: "Email",
                                                            type: "email",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.fecha_nacimiento,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                            label: "Fecha de nacimiento",
                                                            clearable: "",
                                                            variant: "underlined",
                                                            type: "date",
                                                            format: formatDate.value,
                                                            onInput: handleInputChange
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.edad,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                            label: "Edad*",
                                                            type: "text",
                                                            variant: "underlined",
                                                            readonly: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.direccion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                            label: "Dirección",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            label: "teléfono 1",
                                                            modelValue: state.editedItem.telefono1,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.telefono2,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                            label: "teléfono 2",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, {
                                                            items: state.list.grupo_sanguineo,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.grupo_sanguineo_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                            label: "Grupo sanguíneo",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.estado_civil,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.estado_civil_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                            label: "Estado civil",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.nacionalidad,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.nacionalidad_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                            label: "Nacionalidad",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.religion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Religion / Culto",
                                                            modelValue: state.editedItem.religion_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.genero,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Género",
                                                            modelValue: state.editedItem.genero_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            label: "Ciudad",
                                                            modelValue: state.editedItem.ciudad,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, {
                                                            items: state.list.prevision,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.prevision_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                            label: "Previsión de Salud",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.pueblo,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.pueblo_originario_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                            label: "Pueblo originario",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.nivel_instruccion_id,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.instruccion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                            label: "Nivel de Instruccion",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                          createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, {
                                                            label: "Establecimiento educacional",
                                                            modelValue: state.editedItem.establecimiento_educacional_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.pertenece_pie,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                            "hide-details": "",
                                                            class: "ml-2",
                                                            color: "green-darken-3",
                                                            inset: "",
                                                            label: "Pertenece PIE"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("div", { class: "text-h6" }, " Datos Persona Responsable "),
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.rut_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                            label: "Rut* (12345678-9)",
                                                            id: "rut",
                                                            type: "text",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.nombre_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                            label: "Nombre*",
                                                            type: "text",
                                                            id: "nombre",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.apellidos_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                            label: "Apellidos*",
                                                            id: "apellidos",
                                                            required: "",
                                                            type: "text",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                            "hide-details": "",
                                                            class: "ml-2",
                                                            color: "green-darken-3",
                                                            inset: "",
                                                            label: "Comunidad LGTB+"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.donante_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                            class: "ml-2",
                                                            label: "Donante",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_switch, {
                                                            modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                            class: "ml-2",
                                                            label: "Credencial discapacidad",
                                                            color: "success",
                                                            "hide-details": "",
                                                            inset: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.email_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                            rules: state.validationSchema.emailRules,
                                                            label: "Email",
                                                            type: "email",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                            label: "Fecha de nacimientoX",
                                                            clearable: "",
                                                            variant: "underlined",
                                                            type: "date",
                                                            format: formatDate.value,
                                                            onInput: handleInputChange
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.edad_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                            label: "Edad*",
                                                            type: "text",
                                                            variant: "underlined",
                                                            readonly: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.direccion_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                            label: "Dirección",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            label: "teléfono 1X",
                                                            modelValue: state.editedItem.telefono_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, {
                                                            items: state.list.grupo_sanguineo,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                            label: "Grupo sanguíneo",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.estado_civil,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.estado_civil_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                            label: "Estado civil",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.nacionalidad,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.nacionalidad_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                            label: "Nacionalidad",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.religion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Religion / Culto",
                                                            modelValue: state.editedItem.religion_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.genero,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Género",
                                                            modelValue: state.editedItem.genero_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            label: "Ciudad",
                                                            modelValue: state.editedItem.ciudad_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, {
                                                            items: state.list.prevision,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.prevision_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                            label: "Previsión de Salud",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.pueblo,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                            label: "Pueblo originario",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
                                                            items: state.list.nivel_instruccion_id,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                            label: "Nivel de Instruccion",
                                                            clearable: "",
                                                            variant: "underlined"
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
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onSubmit"])
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
                          text: "Ficha Médica",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                                density: "compact",
                                color: "#009AA4",
                                class: "mr-2 ml-2",
                                variant: "tonal",
                                icon: "mdi-stethoscope",
                                onClick: ($event) => fichaMedica(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps(props, {
                                  density: "compact",
                                  color: "#009AA4",
                                  class: "mr-2 ml-2",
                                  variant: "tonal",
                                  icon: "mdi-stethoscope",
                                  onClick: ($event) => fichaMedica(item)
                                }), null, 16, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_tooltip, {
                          text: "Datos Personales",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-account-edit-outline",
                                onClick: ($event) => fichaPersonal(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps(props, {
                                  density: "compact",
                                  class: "mr-2 ml-2",
                                  color: "#009AA4",
                                  variant: "tonal",
                                  icon: "mdi-account-edit-outline",
                                  onClick: ($event) => fichaPersonal(item)
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
                                icon: "mdi-delete-outline",
                                onClick: ($event) => remove(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps(props, {
                                  density: "compact",
                                  class: "mr-2 ml-2",
                                  color: "#009AA4",
                                  variant: "tonal",
                                  icon: "mdi-delete-outline",
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
                            text: "Ficha Médica",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps(props, {
                                density: "compact",
                                color: "#009AA4",
                                class: "mr-2 ml-2",
                                variant: "tonal",
                                icon: "mdi-stethoscope",
                                onClick: ($event) => fichaMedica(item)
                              }), null, 16, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_tooltip, {
                            text: "Datos Personales",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-account-edit-outline",
                                onClick: ($event) => fichaPersonal(item)
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
                                icon: "mdi-delete-outline",
                                onClick: ($event) => remove(item)
                              }), null, 16, ["onClick"])
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
                    createVNode(_component_v_data_table, {
                      headers: state.headers,
                      items: state.tableItems,
                      "sort-by": [{ key: "apellidos", order: "asc" }]
                    }, {
                      top: withCtx(() => [
                        createVNode(_component_v_toolbar, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              icon: "mdi-account-multiple-plus",
                              variant: "tonal",
                              class: "ma-2",
                              color: "#009AA4",
                              onClick: openFormCreate
                            }),
                            createVNode(_component_v_dialog, {
                              modelValue: state.dialog,
                              "onUpdate:modelValue": ($event) => state.dialog = $event,
                              persistent: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_form, {
                                  "fast-fail": "",
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_sheet, {
                                      color: "white",
                                      elevation: 6,
                                      class: "rounded-lg ma-4 pa-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                createVNode(_component_v_divider, {
                                                  thickness: "4px",
                                                  color: "#662d91"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.rut,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                          label: "Rut* (12345678-9)",
                                                          id: "rut",
                                                          type: "text",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.nombre,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                          label: "Nombre*",
                                                          type: "text",
                                                          id: "nombre",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.apellidos,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                          label: "Apellidos*",
                                                          id: "apellidos",
                                                          required: "",
                                                          type: "text",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.comunidad_lgbtq,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                          "hide-details": "",
                                                          class: "ml-2",
                                                          color: "green-darken-3",
                                                          inset: "",
                                                          label: "Comunidad LGTB+"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.donante,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                          class: "ml-2",
                                                          label: "Donante",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.credencial_discapacidad,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                          class: "ml-2",
                                                          label: "Credencial discapacidad",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.email,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                          rules: state.validationSchema.emailRules,
                                                          label: "Email",
                                                          type: "email",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.fecha_nacimiento,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                          label: "Fecha de nacimiento",
                                                          clearable: "",
                                                          variant: "underlined",
                                                          type: "date",
                                                          format: formatDate.value,
                                                          onInput: handleInputChange
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.edad,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                          label: "Edad*",
                                                          type: "text",
                                                          variant: "underlined",
                                                          readonly: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.direccion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                          label: "Dirección",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "teléfono 1",
                                                          modelValue: state.editedItem.telefono1,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.telefono2,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                          label: "teléfono 2",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, {
                                                          items: state.list.grupo_sanguineo,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.grupo_sanguineo_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                          label: "Grupo sanguíneo",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.estado_civil,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.estado_civil_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                          label: "Estado civil",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.nacionalidad,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.nacionalidad_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                          label: "Nacionalidad",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.religion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Religion / Culto",
                                                          modelValue: state.editedItem.religion_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.genero,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Género",
                                                          modelValue: state.editedItem.genero_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Ciudad",
                                                          modelValue: state.editedItem.ciudad,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, {
                                                          items: state.list.prevision,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.prevision_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                          label: "Previsión de Salud",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.pueblo,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.pueblo_originario_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                          label: "Pueblo originario",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.nivel_instruccion_id,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.instruccion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                          label: "Nivel de Instruccion",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                        createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, {
                                                          label: "Establecimiento educacional",
                                                          modelValue: state.editedItem.establecimiento_educacional_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.pertenece_pie,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                          "hide-details": "",
                                                          class: "ml-2",
                                                          color: "green-darken-3",
                                                          inset: "",
                                                          label: "Pertenece PIE"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("div", { class: "text-h6" }, " Datos Persona Responsable "),
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.rut_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                          label: "Rut* (12345678-9)",
                                                          id: "rut",
                                                          type: "text",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.nombre_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                          label: "Nombre*",
                                                          type: "text",
                                                          id: "nombre",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.apellidos_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                          label: "Apellidos*",
                                                          id: "apellidos",
                                                          required: "",
                                                          type: "text",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                          "hide-details": "",
                                                          class: "ml-2",
                                                          color: "green-darken-3",
                                                          inset: "",
                                                          label: "Comunidad LGTB+"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.donante_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                          class: "ml-2",
                                                          label: "Donante",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_switch, {
                                                          modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                          class: "ml-2",
                                                          label: "Credencial discapacidad",
                                                          color: "success",
                                                          "hide-details": "",
                                                          inset: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.email_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                          rules: state.validationSchema.emailRules,
                                                          label: "Email",
                                                          type: "email",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                          label: "Fecha de nacimientoX",
                                                          clearable: "",
                                                          variant: "underlined",
                                                          type: "date",
                                                          format: formatDate.value,
                                                          onInput: handleInputChange
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.edad_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                          label: "Edad*",
                                                          type: "text",
                                                          variant: "underlined",
                                                          readonly: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.direccion_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                          label: "Dirección",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "teléfono 1X",
                                                          modelValue: state.editedItem.telefono_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, {
                                                          items: state.list.grupo_sanguineo,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                          label: "Grupo sanguíneo",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.estado_civil,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.estado_civil_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                          label: "Estado civil",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.nacionalidad,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.nacionalidad_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                          label: "Nacionalidad",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.religion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Religion / Culto",
                                                          modelValue: state.editedItem.religion_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.genero,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Género",
                                                          modelValue: state.editedItem.genero_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          label: "Ciudad",
                                                          modelValue: state.editedItem.ciudad_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, {
                                                          items: state.list.prevision,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.prevision_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                          label: "Previsión de Salud",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.pueblo,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                          label: "Pueblo originario",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
                                                          items: state.list.nivel_instruccion_id,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                          label: "Nivel de Instruccion",
                                                          clearable: "",
                                                          variant: "underlined"
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
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      "item.actions": withCtx(({ item }) => [
                        createVNode(_component_v_tooltip, {
                          text: "Ficha Médica",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps(props, {
                              density: "compact",
                              color: "#009AA4",
                              class: "mr-2 ml-2",
                              variant: "tonal",
                              icon: "mdi-stethoscope",
                              onClick: ($event) => fichaMedica(item)
                            }), null, 16, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_tooltip, {
                          text: "Datos Personales",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps(props, {
                              density: "compact",
                              class: "mr-2 ml-2",
                              color: "#009AA4",
                              variant: "tonal",
                              icon: "mdi-account-edit-outline",
                              onClick: ($event) => fichaPersonal(item)
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
                              icon: "mdi-delete-outline",
                              onClick: ($event) => remove(item)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, {
                elevation: 6,
                class: "rounded-lg ma-2 pa-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panels, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_expansion_panel, {
                        title: "Ficha de Pacientes",
                        color: "#009AA4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_expansion_panel_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_form, {
                                "fast-fail": "",
                                onSubmit: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: state.searchQuery.rut,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                            rules: state.validationSchema.rutRules,
                                            label: "Rut del paciente * (12345678-9)",
                                            class: "ma-2",
                                            type: "text",
                                            variant: "underlined",
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_v_text_field, {
                                            modelValue: state.searchQuery.rut_responsable,
                                            "onUpdate:modelValue": ($event) => state.searchQuery.rut_responsable = $event,
                                            rules: state.validationSchema.rutRules,
                                            label: "Rut persona encargada",
                                            class: "ma-2",
                                            type: "text",
                                            variant: "underlined",
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: state.list.establecimiento_educacional,
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
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        "prepend-icon": "mdi-file-search",
                                        variant: "tonal",
                                        class: "ma-4",
                                        color: "#009AA4",
                                        type: "submit",
                                        onClick: show
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Buscar ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
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
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_sheet, {
                color: "white",
                elevation: 6,
                class: "rounded-lg ma-2 pa-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_data_table, {
                    headers: state.headers,
                    items: state.tableItems,
                    "sort-by": [{ key: "apellidos", order: "asc" }]
                  }, {
                    top: withCtx(() => [
                      createVNode(_component_v_toolbar, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            icon: "mdi-account-multiple-plus",
                            variant: "tonal",
                            class: "ma-2",
                            color: "#009AA4",
                            onClick: openFormCreate
                          }),
                          createVNode(_component_v_dialog, {
                            modelValue: state.dialog,
                            "onUpdate:modelValue": ($event) => state.dialog = $event,
                            persistent: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_form, {
                                "fast-fail": "",
                                onSubmit: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, {
                                    color: "white",
                                    elevation: 6,
                                    class: "rounded-lg ma-4 pa-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                              createVNode(_component_v_divider, {
                                                thickness: "4px",
                                                color: "#662d91"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.rut,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                        label: "Rut* (12345678-9)",
                                                        id: "rut",
                                                        type: "text",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.nombre,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                        label: "Nombre*",
                                                        type: "text",
                                                        id: "nombre",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.apellidos,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                        label: "Apellidos*",
                                                        id: "apellidos",
                                                        required: "",
                                                        type: "text",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.comunidad_lgbtq,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                        "hide-details": "",
                                                        class: "ml-2",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        label: "Comunidad LGTB+"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.donante,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                        class: "ml-2",
                                                        label: "Donante",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.credencial_discapacidad,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                        class: "ml-2",
                                                        label: "Credencial discapacidad",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.email,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                        rules: state.validationSchema.emailRules,
                                                        label: "Email",
                                                        type: "email",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.fecha_nacimiento,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                        label: "Fecha de nacimiento",
                                                        clearable: "",
                                                        variant: "underlined",
                                                        type: "date",
                                                        format: formatDate.value,
                                                        onInput: handleInputChange
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.edad,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                        label: "Edad*",
                                                        type: "text",
                                                        variant: "underlined",
                                                        readonly: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.direccion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                        label: "Dirección",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "teléfono 1",
                                                        modelValue: state.editedItem.telefono1,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.telefono2,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                        label: "teléfono 2",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        items: state.list.grupo_sanguineo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.grupo_sanguineo_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                        label: "Grupo sanguíneo",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.estado_civil,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.estado_civil_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                        label: "Estado civil",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.nacionalidad,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.nacionalidad_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                        label: "Nacionalidad",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.religion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Religion / Culto",
                                                        modelValue: state.editedItem.religion_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.genero,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Género",
                                                        modelValue: state.editedItem.genero_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Ciudad",
                                                        modelValue: state.editedItem.ciudad,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        items: state.list.prevision,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.prevision_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                        label: "Previsión de Salud",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.pueblo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.pueblo_originario_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                        label: "Pueblo originario",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.nivel_instruccion_id,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.instruccion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.instruccion = $event,
                                                        label: "Nivel de Instruccion",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, { label: "Diagnóstico NNE Transitoria" }),
                                                      createVNode(_component_v_select, { label: "Diagnóstico NNE Permanentes" })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        label: "Establecimiento educacional",
                                                        modelValue: state.editedItem.establecimiento_educacional_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, { label: "Profesor/a Jefe" })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.pertenece_pie,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                        "hide-details": "",
                                                        class: "ml-2",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        label: "Pertenece PIE"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "text-h6" }, " Datos Persona Responsable "),
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.rut_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                        label: "Rut* (12345678-9)",
                                                        id: "rut",
                                                        type: "text",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.nombre_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                        label: "Nombre*",
                                                        type: "text",
                                                        id: "nombre",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.apellidos_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                        label: "Apellidos*",
                                                        id: "apellidos",
                                                        required: "",
                                                        type: "text",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                        "hide-details": "",
                                                        class: "ml-2",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        label: "Comunidad LGTB+"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.donante_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                        class: "ml-2",
                                                        label: "Donante",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_switch, {
                                                        modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                        class: "ml-2",
                                                        label: "Credencial discapacidad",
                                                        color: "success",
                                                        "hide-details": "",
                                                        inset: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.email_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                        rules: state.validationSchema.emailRules,
                                                        label: "Email",
                                                        type: "email",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                        label: "Fecha de nacimientoX",
                                                        clearable: "",
                                                        variant: "underlined",
                                                        type: "date",
                                                        format: formatDate.value,
                                                        onInput: handleInputChange
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.edad_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                        label: "Edad*",
                                                        type: "text",
                                                        variant: "underlined",
                                                        readonly: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.direccion_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                        label: "Dirección",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "teléfono 1X",
                                                        modelValue: state.editedItem.telefono_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        items: state.list.grupo_sanguineo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.grupo_sanguineo_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable = $event,
                                                        label: "Grupo sanguíneo",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.estado_civil,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.estado_civil_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                        label: "Estado civil",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.nacionalidad,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.nacionalidad_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                        label: "Nacionalidad",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.religion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Religion / Culto",
                                                        modelValue: state.editedItem.religion_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.genero,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Género",
                                                        modelValue: state.editedItem.genero_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        label: "Ciudad",
                                                        modelValue: state.editedItem.ciudad_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        items: state.list.prevision,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.prevision_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                        label: "Previsión de Salud",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.pueblo,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                        label: "Pueblo originario",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
                                                        items: state.list.nivel_instruccion_id,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                        label: "Nivel de Instruccion",
                                                        clearable: "",
                                                        variant: "underlined"
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
                                  })
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    "item.actions": withCtx(({ item }) => [
                      createVNode(_component_v_tooltip, {
                        text: "Ficha Médica",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps(props, {
                            density: "compact",
                            color: "#009AA4",
                            class: "mr-2 ml-2",
                            variant: "tonal",
                            icon: "mdi-stethoscope",
                            onClick: ($event) => fichaMedica(item)
                          }), null, 16, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_v_tooltip, {
                        text: "Datos Personales",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps(props, {
                            density: "compact",
                            class: "mr-2 ml-2",
                            color: "#009AA4",
                            variant: "tonal",
                            icon: "mdi-account-edit-outline",
                            onClick: ($event) => fichaPersonal(item)
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
                            icon: "mdi-delete-outline",
                            onClick: ($event) => remove(item)
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
//# sourceMappingURL=PacientePage-Bubo04Bt.js.map
