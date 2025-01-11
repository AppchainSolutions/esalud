import { reactive, onMounted, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, toDisplayString, useSSRContext, ref } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-CPH0Fv3Z.js";
import { router } from "@inertiajs/vue3";
import { useLogger } from "vue-logger-plugin";
import { u as useDataStore } from "./store-Dwa255xy.js";
import moment from "moment";
import { useDate } from "vuetify";
import { f as fetchAllData, c as closeForm, h as handleSearchItem, o as openToCreate, a as handleStoreItem, b as openToEdit, d as handleEditItem, e as handleRemoveItem } from "./helper-BVkQOSvY.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VDataTable } from "vuetify/lib/components/VDataTable/index.mjs";
import { VDialog } from "vuetify/lib/components/VDialog/index.mjs";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VExpansionPanels, VExpansionPanel, VExpansionPanelText } from "vuetify/lib/components/VExpansionPanel/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VContainer, VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VSheet } from "vuetify/lib/components/VSheet/index.mjs";
import { VSwitch } from "vuetify/lib/components/VSwitch/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import { VToolbar } from "vuetify/lib/components/VToolbar/index.mjs";
import { VTooltip } from "vuetify/lib/components/VTooltip/index.mjs";
import "vue-loading-overlay";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
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
      urlCreate: "/paciente/create",
      urlUpdate: "/paciente/update"
    });
    useDate();
    const log = useLogger();
    onMounted(async () => {
      const result = await fetchAllData(state.endpoints);
      state.list = result;
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
      await handleSearchItem(state);
    };
    function openFormCreate() {
      log.info("state:", state);
      openToCreate(state);
    }
    function storeItems() {
      return state.editedIndex > -1 ? update() : create();
    }
    const create = async () => {
      console.log("create", state);
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
      const _component_download_excel = resolveComponent("download-excel");
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSheet, {
              elevation: 6,
              class: "rounded-lg ma-2 pa-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VExpansionPanels, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VExpansionPanel, {
                          title: "Ficha de Pacientes",
                          color: "#009AA4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VExpansionPanelText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VForm, {
                                      "fast-fail": "",
                                      onSubmit: () => {
                                      }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: state.searchQuery.rut,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                        rules: state.validationSchema.rutRules,
                                                        label: "Rut del paciente * (12345678-9)",
                                                        class: "ma-2",
                                                        type: "text",
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VTextField, {
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
                                                        createVNode(VTextField, {
                                                          modelValue: state.searchQuery.rut,
                                                          "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                          rules: state.validationSchema.rutRules,
                                                          label: "Rut del paciente * (12345678-9)",
                                                          class: "ma-2",
                                                          type: "text",
                                                          variant: "underlined",
                                                          clearable: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(VTextField, {
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
                                                _push8(ssrRenderComponent(VCol, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VSelect, {
                                                        items: state.list.establecimientos_educacionales,
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
                                                        createVNode(VSelect, {
                                                          items: state.list.establecimientos_educacionales,
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
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: state.searchQuery.rut,
                                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                        rules: state.validationSchema.rutRules,
                                                        label: "Rut del paciente * (12345678-9)",
                                                        class: "ma-2",
                                                        type: "text",
                                                        variant: "underlined",
                                                        clearable: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(VTextField, {
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
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        items: state.list.establecimientos_educacionales,
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
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, {
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
                                                _push8(ssrRenderComponent(VBtn, {
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
                                                  createVNode(VBtn, {
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: state.searchQuery.rut,
                                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                                      rules: state.validationSchema.rutRules,
                                                      label: "Rut del paciente * (12345678-9)",
                                                      class: "ma-2",
                                                      type: "text",
                                                      variant: "underlined",
                                                      clearable: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(VTextField, {
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
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      items: state.list.establecimientos_educacionales,
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
                                                  onClick: show
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Buscar ")
                                                  ]),
                                                  _: 1
                                                }),
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
                                    }, _parent6, _scopeId5));
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
                                                    rules: state.validationSchema.rutRules,
                                                    label: "Rut del paciente * (12345678-9)",
                                                    class: "ma-2",
                                                    type: "text",
                                                    variant: "underlined",
                                                    clearable: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(VTextField, {
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
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    items: state.list.establecimientos_educacionales,
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
                                                onClick: show
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Buscar ")
                                                ]),
                                                _: 1
                                              }),
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
                              }, _parent5, _scopeId4));
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
                                                  rules: state.validationSchema.rutRules,
                                                  label: "Rut del paciente * (12345678-9)",
                                                  class: "ma-2",
                                                  type: "text",
                                                  variant: "underlined",
                                                  clearable: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(VTextField, {
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
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  items: state.list.establecimientos_educacionales,
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
                                              onClick: show
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Buscar ")
                                              ]),
                                              _: 1
                                            }),
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
                        }, _parent4, _scopeId3));
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
                                                rules: state.validationSchema.rutRules,
                                                label: "Rut del paciente * (12345678-9)",
                                                class: "ma-2",
                                                type: "text",
                                                variant: "underlined",
                                                clearable: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(VTextField, {
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
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                items: state.list.establecimientos_educacionales,
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
                                            onClick: show
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Buscar ")
                                            ]),
                                            _: 1
                                          }),
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
                  }, _parent3, _scopeId2));
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
                                              rules: state.validationSchema.rutRules,
                                              label: "Rut del paciente * (12345678-9)",
                                              class: "ma-2",
                                              type: "text",
                                              variant: "underlined",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(VTextField, {
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
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              items: state.list.establecimientos_educacionales,
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
                                          onClick: show
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Buscar ")
                                          ]),
                                          _: 1
                                        }),
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSheet, {
              color: "white",
              elevation: 6,
              class: "rounded-lg ma-2 pa-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDataTable, {
                    headers: state.headers,
                    items: state.tableItems,
                    "sort-by": [{ key: "apellidos", order: "asc" }]
                  }, {
                    top: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VToolbar, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  icon: "mdi-account-multiple-plus",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  onClick: openFormCreate
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VToolbar, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    "item.actions": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTooltip, {
                          text: "Ficha Médica",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps(props, {
                                density: "compact",
                                color: "#009AA4",
                                class: "mr-2 ml-2",
                                variant: "tonal",
                                icon: "mdi-stethoscope",
                                onClick: ($event) => fichaMedica(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
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
                        _push4(ssrRenderComponent(VTooltip, {
                          text: "Datos Personales",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-account-edit-outline",
                                onClick: ($event) => fichaPersonal(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
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
                        _push4(ssrRenderComponent(VTooltip, {
                          text: "Eliminar",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps(props, {
                                density: "compact",
                                class: "mr-2 ml-2",
                                color: "#009AA4",
                                variant: "tonal",
                                icon: "mdi-delete-outline",
                                onClick: ($event) => remove(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
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
                          createVNode(VTooltip, {
                            text: "Ficha Médica",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
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
                          createVNode(VTooltip, {
                            text: "Datos Personales",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
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
                          createVNode(VTooltip, {
                            text: "Eliminar",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
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
                  _push3(ssrRenderComponent(VDialog, {
                    modelValue: state.dialog,
                    "onUpdate:modelValue": ($event) => state.dialog = $event,
                    persistent: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          "fast-fail": "",
                          onSubmit: () => {
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSheet, {
                                color: "white",
                                elevation: 6,
                                class: "rounded-lg ma-4 pa-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-h6 ma-2"${_scopeId7}>${ssrInterpolate(editedItemTitle.value)}</div>`);
                                                _push8(ssrRenderComponent(VDivider, {
                                                  thickness: "4px",
                                                  color: "#662d91"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                  createVNode(VDivider, {
                                                    thickness: "4px",
                                                    color: "#662d91"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-h6"${_scopeId7}> Datos Personales </div>`);
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.rut,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                              label: "Rut* (12345678-9)",
                                                              id: "rut",
                                                              type: "text",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(` ${ssrInterpolate(state.editedItem.rut)} `);
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.nombre,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                              label: "Nombre*",
                                                              type: "text",
                                                              id: "nombre",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.apellidos,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                              label: "Apellidos*",
                                                              id: "apellidos",
                                                              required: "",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSwitch, {
                                                              modelValue: state.editedItem.comunidad_lgbtq,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                              "hide-details": "",
                                                              class: "ml-2",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Comunidad LGTB+"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSwitch, {
                                                              modelValue: state.editedItem.donante,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.donante = $event,
                                                              class: "ml-2",
                                                              label: "Donante",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSwitch, {
                                                              modelValue: state.editedItem.credencial_discapacidad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad = $event,
                                                              class: "ml-2",
                                                              label: "Credencial discapacidad",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.rut,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                label: "Rut* (12345678-9)",
                                                                id: "rut",
                                                                type: "text",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createTextVNode(" " + toDisplayString(state.editedItem.rut) + " ", 1),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.nombre,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                label: "Nombre*",
                                                                type: "text",
                                                                id: "nombre",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.apellidos,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                label: "Apellidos*",
                                                                id: "apellidos",
                                                                required: "",
                                                                type: "text",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSwitch, {
                                                                modelValue: state.editedItem.comunidad_lgbtq,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                                "hide-details": "",
                                                                class: "ml-2",
                                                                color: "green-darken-3",
                                                                inset: "",
                                                                label: "Comunidad LGTB+"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSwitch, {
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
                                                              createVNode(VSwitch, {
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.email,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                              label: "Email",
                                                              type: "email",
                                                              id: "email",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.fecha_nacimiento,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                              label: "Fecha de nacimiento",
                                                              clearable: "",
                                                              variant: "underlined",
                                                              type: "date",
                                                              format: formatDate.value,
                                                              onInput: handleInputChange
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.edad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                              label: "Edad*",
                                                              type: "text",
                                                              variant: "underlined",
                                                              readonly: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.direccion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                              label: "Dirección",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              label: "teléfono 1",
                                                              modelValue: state.editedItem.telefono1,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.telefono2,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                              label: "teléfono 2",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.email,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                label: "Email",
                                                                type: "email",
                                                                id: "email",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.fecha_nacimiento,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                                label: "Fecha de nacimiento",
                                                                clearable: "",
                                                                variant: "underlined",
                                                                type: "date",
                                                                format: formatDate.value,
                                                                onInput: handleInputChange
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.edad,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                                label: "Edad*",
                                                                type: "text",
                                                                variant: "underlined",
                                                                readonly: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.direccion,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                label: "Dirección",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                label: "teléfono 1",
                                                                modelValue: state.editedItem.telefono1,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.grupos_sanguineos,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.grupo_sanguineo_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                              label: "Grupo sanguíneo",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.estados_civiles,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.estado_civil_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                              label: "Estado civil",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.nacionalidades,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nacionalidad_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                              label: "Nacionalidad",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.religiones,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Religion / Culto",
                                                              modelValue: state.editedItem.religion_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.generos,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Género",
                                                              modelValue: state.editedItem.genero_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              label: "Ciudad",
                                                              modelValue: state.editedItem.ciudad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                items: state.list.grupos_sanguineos,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.grupo_sanguineo_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                                label: "Grupo sanguíneo",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.estados_civiles,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.estado_civil_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                                label: "Estado civil",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.nacionalidades,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.nacionalidad_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                                label: "Nacionalidad",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.religiones,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Religion / Culto",
                                                                modelValue: state.editedItem.religion_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.generos,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Género",
                                                                modelValue: state.editedItem.genero_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.previsiones,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.prevision_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                              label: "Previsión de Salud",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.pueblos_originarios,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.pueblo_originario_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                              label: "Pueblo originario",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.niveles_instruccion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nivel_instruccion_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                              label: "Nivel de Instruccion",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, { label: "Diagnóstico NNE Transitoria" }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, { label: "Diagnóstico NNE Permanentes" }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                items: state.list.previsiones,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.prevision_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                                label: "Previsión de Salud",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.pueblos_originarios,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.pueblo_originario_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                                label: "Pueblo originario",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.niveles_instruccion,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.nivel_instruccion_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                                label: "Nivel de Instruccion",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, { label: "Diagnóstico NNE Transitoria" }),
                                                              createVNode(VSelect, { label: "Diagnóstico NNE Permanentes" })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.rut,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                              label: "Rut* (12345678-9)",
                                                              id: "rut",
                                                              type: "text",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createTextVNode(" " + toDisplayString(state.editedItem.rut) + " ", 1),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.nombre,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                              label: "Nombre*",
                                                              type: "text",
                                                              id: "nombre",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.apellidos,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                              label: "Apellidos*",
                                                              id: "apellidos",
                                                              required: "",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSwitch, {
                                                              modelValue: state.editedItem.comunidad_lgbtq,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                              "hide-details": "",
                                                              class: "ml-2",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Comunidad LGTB+"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSwitch, {
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
                                                            createVNode(VSwitch, {
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
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.email,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                              label: "Email",
                                                              type: "email",
                                                              id: "email",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.fecha_nacimiento,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                              label: "Fecha de nacimiento",
                                                              clearable: "",
                                                              variant: "underlined",
                                                              type: "date",
                                                              format: formatDate.value,
                                                              onInput: handleInputChange
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.edad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                              label: "Edad*",
                                                              type: "text",
                                                              variant: "underlined",
                                                              readonly: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.direccion,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                              label: "Dirección",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              label: "teléfono 1",
                                                              modelValue: state.editedItem.telefono1,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.telefono2,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                              label: "teléfono 2",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              items: state.list.grupos_sanguineos,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.grupo_sanguineo_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                              label: "Grupo sanguíneo",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.estados_civiles,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.estado_civil_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                              label: "Estado civil",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.nacionalidades,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nacionalidad_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                              label: "Nacionalidad",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.religiones,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Religion / Culto",
                                                              modelValue: state.editedItem.religion_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.generos,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Género",
                                                              modelValue: state.editedItem.genero_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              label: "Ciudad",
                                                              modelValue: state.editedItem.ciudad,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              items: state.list.previsiones,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.prevision_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                              label: "Previsión de Salud",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.pueblos_originarios,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.pueblo_originario_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                              label: "Pueblo originario",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.niveles_instruccion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nivel_instruccion_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                              label: "Nivel de Instruccion",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, { label: "Diagnóstico NNE Transitoria" }),
                                                            createVNode(VSelect, { label: "Diagnóstico NNE Permanentes" })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<div class="text-h6"${_scopeId7}> Datos Educacionales </div>`);
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              label: "Establecimiento educacional",
                                                              items: state.list.establecimientos_educacionales,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.establecimiento_educacional_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                label: "Establecimiento educacional",
                                                                items: state.list.establecimientos_educacionales,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.establecimiento_educacional_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              label: "Profesor/a Jefe",
                                                              modelValue: state.editedItem.profesor,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                label: "Profesor/a Jefe",
                                                                modelValue: state.editedItem.profesor,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSwitch, {
                                                              modelValue: state.editedItem.pertenece_pie,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.pertenece_pie = $event,
                                                              "hide-details": "",
                                                              class: "ml-2",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Pertenece PIE"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSwitch, {
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              label: "Establecimiento educacional",
                                                              items: state.list.establecimientos_educacionales,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.establecimiento_educacional_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              label: "Profesor/a Jefe",
                                                              modelValue: state.editedItem.profesor,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VSwitch, {
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
                                                }, _parent8, _scopeId7));
                                                _push8(`<div class="text-h6"${_scopeId7}> Datos Persona Responsable </div>`);
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.rut_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                              label: "Rut* (12345678-9)",
                                                              id: "rut_responsable",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.nombre_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                              label: "Nombre persona responsable",
                                                              type: "text",
                                                              id: "nombre_responsable",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.apellidos_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                              label: "Apellidos persona responsable*",
                                                              id: "apellidos_responsable",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSwitch, {
                                                              modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                              "hide-details": "",
                                                              class: "ml-2",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Comunidad LGTB+"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSwitch, {
                                                              modelValue: state.editedItem.donante_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.donante_responsable = $event,
                                                              class: "ml-2",
                                                              label: "Donante",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSwitch, {
                                                              modelValue: state.editedItem.credencial_discapacidad_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.credencial_discapacidad_responsable = $event,
                                                              class: "ml-2",
                                                              label: "Credencial discapacidad",
                                                              color: "success",
                                                              "hide-details": "",
                                                              inset: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.rut_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                                label: "Rut* (12345678-9)",
                                                                id: "rut_responsable",
                                                                type: "text",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.nombre_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                                label: "Nombre persona responsable",
                                                                type: "text",
                                                                id: "nombre_responsable",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.apellidos_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                                label: "Apellidos persona responsable*",
                                                                id: "apellidos_responsable",
                                                                type: "text",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSwitch, {
                                                                modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                                "hide-details": "",
                                                                class: "ml-2",
                                                                color: "green-darken-3",
                                                                inset: "",
                                                                label: "Comunidad LGTB+"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSwitch, {
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
                                                              createVNode(VSwitch, {
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.email_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                              rules: state.validationSchema.emailRules,
                                                              label: "Email",
                                                              type: "email",
                                                              id: "emai_responsable",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                              label: "Fecha de nacimientoX",
                                                              clearable: "",
                                                              variant: "underlined",
                                                              type: "date",
                                                              format: formatDate.value,
                                                              onInput: handleInputChange
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.edad_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                              label: "Edad*",
                                                              type: "text",
                                                              variant: "underlined",
                                                              readonly: ""
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.direccion_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                              label: "Dirección",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              label: "teléfono 1X",
                                                              modelValue: state.editedItem.telefono_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.email_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                                rules: state.validationSchema.emailRules,
                                                                label: "Email",
                                                                type: "email",
                                                                id: "emai_responsable",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                                label: "Fecha de nacimientoX",
                                                                clearable: "",
                                                                variant: "underlined",
                                                                type: "date",
                                                                format: formatDate.value,
                                                                onInput: handleInputChange
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.edad_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                                label: "Edad*",
                                                                type: "text",
                                                                variant: "underlined",
                                                                readonly: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.direccion_responsable,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                                label: "Dirección",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.grupos_sanguineos,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                              label: "Grupo sanguíneo",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.estados_civiles,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.estado_civil_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                              label: "Estado civil",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.nacionalidades,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nacionalidad_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                              label: "Nacionalidad",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.religiones,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Religion / Culto",
                                                              modelValue: state.editedItem.religion_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.generos,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Género",
                                                              modelValue: state.editedItem.genero_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              label: "Ciudad",
                                                              modelValue: state.editedItem.ciudad_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                items: state.list.grupos_sanguineos,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                                label: "Grupo sanguíneo",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.estados_civiles,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.estado_civil_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                                label: "Estado civil",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.nacionalidades,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.nacionalidad_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                                label: "Nacionalidad",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.religiones,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Religion / Culto",
                                                                modelValue: state.editedItem.religion_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.generos,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                label: "Género",
                                                                modelValue: state.editedItem.genero_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.previsiones,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.prevision_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                              label: "Previsión de Salud",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.pueblos_originarios,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                              label: "Pueblo originario",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              items: state.list.niveles_instruccion,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nivel_instruccion_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_responsable_id = $event,
                                                              label: "Nivel de Instruccion",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                items: state.list.previsiones,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.prevision_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                                label: "Previsión de Salud",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.pueblos_originarios,
                                                                "item-title": "descripcion",
                                                                "item-value": "id",
                                                                modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                                label: "Pueblo originario",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: state.list.niveles_instruccion,
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.rut_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                              label: "Rut* (12345678-9)",
                                                              id: "rut_responsable",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.nombre_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                              label: "Nombre persona responsable",
                                                              type: "text",
                                                              id: "nombre_responsable",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.apellidos_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                              label: "Apellidos persona responsable*",
                                                              id: "apellidos_responsable",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSwitch, {
                                                              modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                              "hide-details": "",
                                                              class: "ml-2",
                                                              color: "green-darken-3",
                                                              inset: "",
                                                              label: "Comunidad LGTB+"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSwitch, {
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
                                                            createVNode(VSwitch, {
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
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.email_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                              rules: state.validationSchema.emailRules,
                                                              label: "Email",
                                                              type: "email",
                                                              id: "emai_responsable",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                              label: "Fecha de nacimientoX",
                                                              clearable: "",
                                                              variant: "underlined",
                                                              type: "date",
                                                              format: formatDate.value,
                                                              onInput: handleInputChange
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.edad_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                              label: "Edad*",
                                                              type: "text",
                                                              variant: "underlined",
                                                              readonly: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.direccion_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                              label: "Dirección",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              label: "teléfono 1X",
                                                              modelValue: state.editedItem.telefono_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              items: state.list.grupos_sanguineos,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                              label: "Grupo sanguíneo",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.estados_civiles,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.estado_civil_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                              label: "Estado civil",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.nacionalidades,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.nacionalidad_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                              label: "Nacionalidad",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.religiones,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Religion / Culto",
                                                              modelValue: state.editedItem.religion_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.generos,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              label: "Género",
                                                              modelValue: state.editedItem.genero_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              label: "Ciudad",
                                                              modelValue: state.editedItem.ciudad_responsable,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              items: state.list.previsiones,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.prevision_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                              label: "Previsión de Salud",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.pueblos_originarios,
                                                              "item-title": "descripcion",
                                                              "item-value": "id",
                                                              modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                              label: "Pueblo originario",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: state.list.niveles_instruccion,
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.rut,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                            label: "Rut* (12345678-9)",
                                                            id: "rut",
                                                            type: "text",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createTextVNode(" " + toDisplayString(state.editedItem.rut) + " ", 1),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.nombre,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                            label: "Nombre*",
                                                            type: "text",
                                                            id: "nombre",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.apellidos,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                            label: "Apellidos*",
                                                            id: "apellidos",
                                                            required: "",
                                                            type: "text",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSwitch, {
                                                            modelValue: state.editedItem.comunidad_lgbtq,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                            "hide-details": "",
                                                            class: "ml-2",
                                                            color: "green-darken-3",
                                                            inset: "",
                                                            label: "Comunidad LGTB+"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSwitch, {
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
                                                          createVNode(VSwitch, {
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
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.email,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                            label: "Email",
                                                            type: "email",
                                                            id: "email",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.fecha_nacimiento,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                            label: "Fecha de nacimiento",
                                                            clearable: "",
                                                            variant: "underlined",
                                                            type: "date",
                                                            format: formatDate.value,
                                                            onInput: handleInputChange
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.edad,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                            label: "Edad*",
                                                            type: "text",
                                                            variant: "underlined",
                                                            readonly: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.direccion,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                            label: "Dirección",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            label: "teléfono 1",
                                                            modelValue: state.editedItem.telefono1,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.telefono2,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                            label: "teléfono 2",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            items: state.list.grupos_sanguineos,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.grupo_sanguineo_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                            label: "Grupo sanguíneo",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.estados_civiles,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.estado_civil_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                            label: "Estado civil",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.nacionalidades,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.nacionalidad_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                            label: "Nacionalidad",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.religiones,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Religion / Culto",
                                                            modelValue: state.editedItem.religion_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.generos,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Género",
                                                            modelValue: state.editedItem.genero_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            label: "Ciudad",
                                                            modelValue: state.editedItem.ciudad,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            items: state.list.previsiones,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.prevision_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                            label: "Previsión de Salud",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.pueblos_originarios,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.pueblo_originario_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                            label: "Pueblo originario",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.niveles_instruccion,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.nivel_instruccion_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                            label: "Nivel de Instruccion",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, { label: "Diagnóstico NNE Transitoria" }),
                                                          createVNode(VSelect, { label: "Diagnóstico NNE Permanentes" })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            label: "Establecimiento educacional",
                                                            items: state.list.establecimientos_educacionales,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.establecimiento_educacional_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            label: "Profesor/a Jefe",
                                                            modelValue: state.editedItem.profesor,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VSwitch, {
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
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.rut_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                            label: "Rut* (12345678-9)",
                                                            id: "rut_responsable",
                                                            type: "text",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.nombre_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                            label: "Nombre persona responsable",
                                                            type: "text",
                                                            id: "nombre_responsable",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.apellidos_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                            label: "Apellidos persona responsable*",
                                                            id: "apellidos_responsable",
                                                            type: "text",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSwitch, {
                                                            modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                            "hide-details": "",
                                                            class: "ml-2",
                                                            color: "green-darken-3",
                                                            inset: "",
                                                            label: "Comunidad LGTB+"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSwitch, {
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
                                                          createVNode(VSwitch, {
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
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.email_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                            rules: state.validationSchema.emailRules,
                                                            label: "Email",
                                                            type: "email",
                                                            id: "emai_responsable",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                            label: "Fecha de nacimientoX",
                                                            clearable: "",
                                                            variant: "underlined",
                                                            type: "date",
                                                            format: formatDate.value,
                                                            onInput: handleInputChange
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.edad_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                            label: "Edad*",
                                                            type: "text",
                                                            variant: "underlined",
                                                            readonly: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.direccion_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                            label: "Dirección",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            label: "teléfono 1X",
                                                            modelValue: state.editedItem.telefono_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            items: state.list.grupos_sanguineos,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                            label: "Grupo sanguíneo",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.estados_civiles,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.estado_civil_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                            label: "Estado civil",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.nacionalidades,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.nacionalidad_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                            label: "Nacionalidad",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.religiones,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Religion / Culto",
                                                            modelValue: state.editedItem.religion_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.generos,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            label: "Género",
                                                            modelValue: state.editedItem.genero_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            label: "Ciudad",
                                                            modelValue: state.editedItem.ciudad_responsable,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            items: state.list.previsiones,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.prevision_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                            label: "Previsión de Salud",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.pueblos_originarios,
                                                            "item-title": "descripcion",
                                                            "item-value": "id",
                                                            modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                            label: "Pueblo originario",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: state.list.niveles_instruccion,
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardActions, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSpacer, null, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
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
                                                _push8(ssrRenderComponent(VBtn, {
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
                                                  createVNode(VSpacer),
                                                  createVNode(VBtn, {
                                                    color: "#009AA4",
                                                    variant: "tonal",
                                                    onClick: close
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Cancelar ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
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
                                            createVNode(VCardTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                                createVNode(VDivider, {
                                                  thickness: "4px",
                                                  color: "#662d91"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.rut,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                          label: "Rut* (12345678-9)",
                                                          id: "rut",
                                                          type: "text",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createTextVNode(" " + toDisplayString(state.editedItem.rut) + " ", 1),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.nombre,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                          label: "Nombre*",
                                                          type: "text",
                                                          id: "nombre",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.apellidos,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                          label: "Apellidos*",
                                                          id: "apellidos",
                                                          required: "",
                                                          type: "text",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSwitch, {
                                                          modelValue: state.editedItem.comunidad_lgbtq,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                          "hide-details": "",
                                                          class: "ml-2",
                                                          color: "green-darken-3",
                                                          inset: "",
                                                          label: "Comunidad LGTB+"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSwitch, {
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
                                                        createVNode(VSwitch, {
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
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.email,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                          label: "Email",
                                                          type: "email",
                                                          id: "email",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.fecha_nacimiento,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                          label: "Fecha de nacimiento",
                                                          clearable: "",
                                                          variant: "underlined",
                                                          type: "date",
                                                          format: formatDate.value,
                                                          onInput: handleInputChange
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.edad,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                          label: "Edad*",
                                                          type: "text",
                                                          variant: "underlined",
                                                          readonly: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.direccion,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                          label: "Dirección",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          label: "teléfono 1",
                                                          modelValue: state.editedItem.telefono1,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.telefono2,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                          label: "teléfono 2",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          items: state.list.grupos_sanguineos,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.grupo_sanguineo_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                          label: "Grupo sanguíneo",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.estados_civiles,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.estado_civil_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                          label: "Estado civil",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.nacionalidades,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.nacionalidad_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                          label: "Nacionalidad",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.religiones,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Religion / Culto",
                                                          modelValue: state.editedItem.religion_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.generos,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Género",
                                                          modelValue: state.editedItem.genero_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          label: "Ciudad",
                                                          modelValue: state.editedItem.ciudad,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          items: state.list.previsiones,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.prevision_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                          label: "Previsión de Salud",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.pueblos_originarios,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.pueblo_originario_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                          label: "Pueblo originario",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.niveles_instruccion,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.nivel_instruccion_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                          label: "Nivel de Instruccion",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, { label: "Diagnóstico NNE Transitoria" }),
                                                        createVNode(VSelect, { label: "Diagnóstico NNE Permanentes" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          label: "Establecimiento educacional",
                                                          items: state.list.establecimientos_educacionales,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.establecimiento_educacional_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          label: "Profesor/a Jefe",
                                                          modelValue: state.editedItem.profesor,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VSwitch, {
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
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.rut_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                          label: "Rut* (12345678-9)",
                                                          id: "rut_responsable",
                                                          type: "text",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.nombre_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                          label: "Nombre persona responsable",
                                                          type: "text",
                                                          id: "nombre_responsable",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.apellidos_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                          label: "Apellidos persona responsable*",
                                                          id: "apellidos_responsable",
                                                          type: "text",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSwitch, {
                                                          modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                          "hide-details": "",
                                                          class: "ml-2",
                                                          color: "green-darken-3",
                                                          inset: "",
                                                          label: "Comunidad LGTB+"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSwitch, {
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
                                                        createVNode(VSwitch, {
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
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.email_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                          rules: state.validationSchema.emailRules,
                                                          label: "Email",
                                                          type: "email",
                                                          id: "emai_responsable",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                          label: "Fecha de nacimientoX",
                                                          clearable: "",
                                                          variant: "underlined",
                                                          type: "date",
                                                          format: formatDate.value,
                                                          onInput: handleInputChange
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.edad_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                          label: "Edad*",
                                                          type: "text",
                                                          variant: "underlined",
                                                          readonly: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.direccion_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                          label: "Dirección",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          label: "teléfono 1X",
                                                          modelValue: state.editedItem.telefono_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          items: state.list.grupos_sanguineos,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                          label: "Grupo sanguíneo",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.estados_civiles,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.estado_civil_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                          label: "Estado civil",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.nacionalidades,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.nacionalidad_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                          label: "Nacionalidad",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.religiones,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Religion / Culto",
                                                          modelValue: state.editedItem.religion_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.generos,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          label: "Género",
                                                          modelValue: state.editedItem.genero_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          label: "Ciudad",
                                                          modelValue: state.editedItem.ciudad_responsable,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          items: state.list.previsiones,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.prevision_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                          label: "Previsión de Salud",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.pueblos_originarios,
                                                          "item-title": "descripcion",
                                                          "item-value": "id",
                                                          modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                          label: "Pueblo originario",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: state.list.niveles_instruccion,
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
                                            createVNode(VCardActions, null, {
                                              default: withCtx(() => [
                                                createVNode(VSpacer),
                                                createVNode(VBtn, {
                                                  color: "#009AA4",
                                                  variant: "tonal",
                                                  onClick: close
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Cancelar ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
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
                                      createVNode(VCard, null, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                              createVNode(VDivider, {
                                                thickness: "4px",
                                                color: "#662d91"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.rut,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                        label: "Rut* (12345678-9)",
                                                        id: "rut",
                                                        type: "text",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createTextVNode(" " + toDisplayString(state.editedItem.rut) + " ", 1),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.nombre,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                        label: "Nombre*",
                                                        type: "text",
                                                        id: "nombre",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.apellidos,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                        label: "Apellidos*",
                                                        id: "apellidos",
                                                        required: "",
                                                        type: "text",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSwitch, {
                                                        modelValue: state.editedItem.comunidad_lgbtq,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                        "hide-details": "",
                                                        class: "ml-2",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        label: "Comunidad LGTB+"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSwitch, {
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
                                                      createVNode(VSwitch, {
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
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.email,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                        label: "Email",
                                                        type: "email",
                                                        id: "email",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.fecha_nacimiento,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                        label: "Fecha de nacimiento",
                                                        clearable: "",
                                                        variant: "underlined",
                                                        type: "date",
                                                        format: formatDate.value,
                                                        onInput: handleInputChange
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.edad,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                        label: "Edad*",
                                                        type: "text",
                                                        variant: "underlined",
                                                        readonly: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.direccion,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                        label: "Dirección",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        label: "teléfono 1",
                                                        modelValue: state.editedItem.telefono1,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.telefono2,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                        label: "teléfono 2",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        items: state.list.grupos_sanguineos,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.grupo_sanguineo_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                        label: "Grupo sanguíneo",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.estados_civiles,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.estado_civil_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                        label: "Estado civil",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.nacionalidades,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.nacionalidad_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                        label: "Nacionalidad",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.religiones,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Religion / Culto",
                                                        modelValue: state.editedItem.religion_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.generos,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Género",
                                                        modelValue: state.editedItem.genero_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        label: "Ciudad",
                                                        modelValue: state.editedItem.ciudad,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        items: state.list.previsiones,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.prevision_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                        label: "Previsión de Salud",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.pueblos_originarios,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.pueblo_originario_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                        label: "Pueblo originario",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.niveles_instruccion,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.nivel_instruccion_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                        label: "Nivel de Instruccion",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, { label: "Diagnóstico NNE Transitoria" }),
                                                      createVNode(VSelect, { label: "Diagnóstico NNE Permanentes" })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        label: "Establecimiento educacional",
                                                        items: state.list.establecimientos_educacionales,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.establecimiento_educacional_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        label: "Profesor/a Jefe",
                                                        modelValue: state.editedItem.profesor,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VSwitch, {
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
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.rut_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                        label: "Rut* (12345678-9)",
                                                        id: "rut_responsable",
                                                        type: "text",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.nombre_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                        label: "Nombre persona responsable",
                                                        type: "text",
                                                        id: "nombre_responsable",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.apellidos_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                        label: "Apellidos persona responsable*",
                                                        id: "apellidos_responsable",
                                                        type: "text",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSwitch, {
                                                        modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                        "hide-details": "",
                                                        class: "ml-2",
                                                        color: "green-darken-3",
                                                        inset: "",
                                                        label: "Comunidad LGTB+"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSwitch, {
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
                                                      createVNode(VSwitch, {
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
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.email_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                        rules: state.validationSchema.emailRules,
                                                        label: "Email",
                                                        type: "email",
                                                        id: "emai_responsable",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                        label: "Fecha de nacimientoX",
                                                        clearable: "",
                                                        variant: "underlined",
                                                        type: "date",
                                                        format: formatDate.value,
                                                        onInput: handleInputChange
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.edad_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                        label: "Edad*",
                                                        type: "text",
                                                        variant: "underlined",
                                                        readonly: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.direccion_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                        label: "Dirección",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        label: "teléfono 1X",
                                                        modelValue: state.editedItem.telefono_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        items: state.list.grupos_sanguineos,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                        label: "Grupo sanguíneo",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.estados_civiles,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.estado_civil_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                        label: "Estado civil",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.nacionalidades,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.nacionalidad_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                        label: "Nacionalidad",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.religiones,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Religion / Culto",
                                                        modelValue: state.editedItem.religion_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.generos,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        label: "Género",
                                                        modelValue: state.editedItem.genero_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        label: "Ciudad",
                                                        modelValue: state.editedItem.ciudad_responsable,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        items: state.list.previsiones,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.prevision_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                        label: "Previsión de Salud",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.pueblos_originarios,
                                                        "item-title": "descripcion",
                                                        "item-value": "id",
                                                        modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                        label: "Pueblo originario",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: state.list.niveles_instruccion,
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
                                          createVNode(VCardActions, null, {
                                            default: withCtx(() => [
                                              createVNode(VSpacer),
                                              createVNode(VBtn, {
                                                color: "#009AA4",
                                                variant: "tonal",
                                                onClick: close
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Cancelar ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
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
                                createVNode(VSheet, {
                                  color: "white",
                                  elevation: 6,
                                  class: "rounded-lg ma-4 pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, null, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                            createVNode(VDivider, {
                                              thickness: "4px",
                                              color: "#662d91"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.rut,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                      label: "Rut* (12345678-9)",
                                                      id: "rut",
                                                      type: "text",
                                                      required: "",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createTextVNode(" " + toDisplayString(state.editedItem.rut) + " ", 1),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.nombre,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                      label: "Nombre*",
                                                      type: "text",
                                                      id: "nombre",
                                                      required: "",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.apellidos,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                      label: "Apellidos*",
                                                      id: "apellidos",
                                                      required: "",
                                                      type: "text",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSwitch, {
                                                      modelValue: state.editedItem.comunidad_lgbtq,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                      "hide-details": "",
                                                      class: "ml-2",
                                                      color: "green-darken-3",
                                                      inset: "",
                                                      label: "Comunidad LGTB+"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSwitch, {
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
                                                    createVNode(VSwitch, {
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
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.email,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                      label: "Email",
                                                      type: "email",
                                                      id: "email",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.fecha_nacimiento,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                      label: "Fecha de nacimiento",
                                                      clearable: "",
                                                      variant: "underlined",
                                                      type: "date",
                                                      format: formatDate.value,
                                                      onInput: handleInputChange
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.edad,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                      label: "Edad*",
                                                      type: "text",
                                                      variant: "underlined",
                                                      readonly: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.direccion,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                      label: "Dirección",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      label: "teléfono 1",
                                                      modelValue: state.editedItem.telefono1,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.telefono2,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                      label: "teléfono 2",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      items: state.list.grupos_sanguineos,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.grupo_sanguineo_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                      label: "Grupo sanguíneo",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.estados_civiles,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.estado_civil_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                      label: "Estado civil",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.nacionalidades,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.nacionalidad_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                      label: "Nacionalidad",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.religiones,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Religion / Culto",
                                                      modelValue: state.editedItem.religion_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.generos,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Género",
                                                      modelValue: state.editedItem.genero_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      label: "Ciudad",
                                                      modelValue: state.editedItem.ciudad,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      items: state.list.previsiones,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.prevision_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                      label: "Previsión de Salud",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.pueblos_originarios,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.pueblo_originario_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                      label: "Pueblo originario",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.niveles_instruccion,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.nivel_instruccion_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                      label: "Nivel de Instruccion",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, { label: "Diagnóstico NNE Transitoria" }),
                                                    createVNode(VSelect, { label: "Diagnóstico NNE Permanentes" })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      label: "Establecimiento educacional",
                                                      items: state.list.establecimientos_educacionales,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.establecimiento_educacional_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      label: "Profesor/a Jefe",
                                                      modelValue: state.editedItem.profesor,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VSwitch, {
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
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.rut_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                      label: "Rut* (12345678-9)",
                                                      id: "rut_responsable",
                                                      type: "text",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.nombre_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                      label: "Nombre persona responsable",
                                                      type: "text",
                                                      id: "nombre_responsable",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.apellidos_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                      label: "Apellidos persona responsable*",
                                                      id: "apellidos_responsable",
                                                      type: "text",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSwitch, {
                                                      modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                      "hide-details": "",
                                                      class: "ml-2",
                                                      color: "green-darken-3",
                                                      inset: "",
                                                      label: "Comunidad LGTB+"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSwitch, {
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
                                                    createVNode(VSwitch, {
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
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.email_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                      rules: state.validationSchema.emailRules,
                                                      label: "Email",
                                                      type: "email",
                                                      id: "emai_responsable",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                      label: "Fecha de nacimientoX",
                                                      clearable: "",
                                                      variant: "underlined",
                                                      type: "date",
                                                      format: formatDate.value,
                                                      onInput: handleInputChange
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.edad_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                      label: "Edad*",
                                                      type: "text",
                                                      variant: "underlined",
                                                      readonly: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.direccion_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                      label: "Dirección",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      label: "teléfono 1X",
                                                      modelValue: state.editedItem.telefono_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      items: state.list.grupos_sanguineos,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                      label: "Grupo sanguíneo",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.estados_civiles,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.estado_civil_responsable_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                      label: "Estado civil",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.nacionalidades,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.nacionalidad_responsable_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                      label: "Nacionalidad",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.religiones,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Religion / Culto",
                                                      modelValue: state.editedItem.religion_responsable_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.generos,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      label: "Género",
                                                      modelValue: state.editedItem.genero_responsable_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      label: "Ciudad",
                                                      modelValue: state.editedItem.ciudad_responsable,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      items: state.list.previsiones,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.prevision_responsable_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                      label: "Previsión de Salud",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.pueblos_originarios,
                                                      "item-title": "descripcion",
                                                      "item-value": "id",
                                                      modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                      label: "Pueblo originario",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: state.list.niveles_instruccion,
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
                                        createVNode(VCardActions, null, {
                                          default: withCtx(() => [
                                            createVNode(VSpacer),
                                            createVNode(VBtn, {
                                              color: "#009AA4",
                                              variant: "tonal",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancelar ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            "fast-fail": "",
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VSheet, {
                                color: "white",
                                elevation: 6,
                                class: "rounded-lg ma-4 pa-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                          createVNode(VDivider, {
                                            thickness: "4px",
                                            color: "#662d91"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.rut,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                    label: "Rut* (12345678-9)",
                                                    id: "rut",
                                                    type: "text",
                                                    required: "",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createTextVNode(" " + toDisplayString(state.editedItem.rut) + " ", 1),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.nombre,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                    label: "Nombre*",
                                                    type: "text",
                                                    id: "nombre",
                                                    required: "",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.apellidos,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                    label: "Apellidos*",
                                                    id: "apellidos",
                                                    required: "",
                                                    type: "text",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSwitch, {
                                                    modelValue: state.editedItem.comunidad_lgbtq,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                    "hide-details": "",
                                                    class: "ml-2",
                                                    color: "green-darken-3",
                                                    inset: "",
                                                    label: "Comunidad LGTB+"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSwitch, {
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
                                                  createVNode(VSwitch, {
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
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.email,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                    label: "Email",
                                                    type: "email",
                                                    id: "email",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.fecha_nacimiento,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                    label: "Fecha de nacimiento",
                                                    clearable: "",
                                                    variant: "underlined",
                                                    type: "date",
                                                    format: formatDate.value,
                                                    onInput: handleInputChange
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.edad,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                    label: "Edad*",
                                                    type: "text",
                                                    variant: "underlined",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.direccion,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                    label: "Dirección",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    label: "teléfono 1",
                                                    modelValue: state.editedItem.telefono1,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.telefono2,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                    label: "teléfono 2",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    items: state.list.grupos_sanguineos,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.grupo_sanguineo_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                    label: "Grupo sanguíneo",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.estados_civiles,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.estado_civil_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                    label: "Estado civil",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.nacionalidades,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.nacionalidad_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                    label: "Nacionalidad",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.religiones,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Religion / Culto",
                                                    modelValue: state.editedItem.religion_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.generos,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Género",
                                                    modelValue: state.editedItem.genero_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    label: "Ciudad",
                                                    modelValue: state.editedItem.ciudad,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    items: state.list.previsiones,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.prevision_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                    label: "Previsión de Salud",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.pueblos_originarios,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.pueblo_originario_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                    label: "Pueblo originario",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.niveles_instruccion,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.nivel_instruccion_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                    label: "Nivel de Instruccion",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, { label: "Diagnóstico NNE Transitoria" }),
                                                  createVNode(VSelect, { label: "Diagnóstico NNE Permanentes" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    label: "Establecimiento educacional",
                                                    items: state.list.establecimientos_educacionales,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.establecimiento_educacional_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    label: "Profesor/a Jefe",
                                                    modelValue: state.editedItem.profesor,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSwitch, {
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
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.rut_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                    label: "Rut* (12345678-9)",
                                                    id: "rut_responsable",
                                                    type: "text",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.nombre_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                    label: "Nombre persona responsable",
                                                    type: "text",
                                                    id: "nombre_responsable",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.apellidos_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                    label: "Apellidos persona responsable*",
                                                    id: "apellidos_responsable",
                                                    type: "text",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSwitch, {
                                                    modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                    "hide-details": "",
                                                    class: "ml-2",
                                                    color: "green-darken-3",
                                                    inset: "",
                                                    label: "Comunidad LGTB+"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSwitch, {
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
                                                  createVNode(VSwitch, {
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
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.email_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                    rules: state.validationSchema.emailRules,
                                                    label: "Email",
                                                    type: "email",
                                                    id: "emai_responsable",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                    label: "Fecha de nacimientoX",
                                                    clearable: "",
                                                    variant: "underlined",
                                                    type: "date",
                                                    format: formatDate.value,
                                                    onInput: handleInputChange
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.edad_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                    label: "Edad*",
                                                    type: "text",
                                                    variant: "underlined",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.direccion_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                    label: "Dirección",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    label: "teléfono 1X",
                                                    modelValue: state.editedItem.telefono_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    items: state.list.grupos_sanguineos,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                    label: "Grupo sanguíneo",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.estados_civiles,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.estado_civil_responsable_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                    label: "Estado civil",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.nacionalidades,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.nacionalidad_responsable_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                    label: "Nacionalidad",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.religiones,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Religion / Culto",
                                                    modelValue: state.editedItem.religion_responsable_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.generos,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    label: "Género",
                                                    modelValue: state.editedItem.genero_responsable_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    label: "Ciudad",
                                                    modelValue: state.editedItem.ciudad_responsable,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    items: state.list.previsiones,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.prevision_responsable_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                    label: "Previsión de Salud",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.pueblos_originarios,
                                                    "item-title": "descripcion",
                                                    "item-value": "id",
                                                    modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                    label: "Pueblo originario",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: state.list.niveles_instruccion,
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
                                      createVNode(VCardActions, null, {
                                        default: withCtx(() => [
                                          createVNode(VSpacer),
                                          createVNode(VBtn, {
                                            color: "#009AA4",
                                            variant: "tonal",
                                            onClick: close
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancelar ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDataTable, {
                      headers: state.headers,
                      items: state.tableItems,
                      "sort-by": [{ key: "apellidos", order: "asc" }]
                    }, {
                      top: withCtx(() => [
                        createVNode(VToolbar, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              icon: "mdi-account-multiple-plus",
                              variant: "tonal",
                              class: "ma-2",
                              color: "#009AA4",
                              onClick: openFormCreate
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      "item.actions": withCtx(({ item }) => [
                        createVNode(VTooltip, {
                          text: "Ficha Médica",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
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
                        createVNode(VTooltip, {
                          text: "Datos Personales",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
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
                        createVNode(VTooltip, {
                          text: "Eliminar",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
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
                    }, 8, ["headers", "items"]),
                    createVNode(VDialog, {
                      modelValue: state.dialog,
                      "onUpdate:modelValue": ($event) => state.dialog = $event,
                      persistent: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          "fast-fail": "",
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VSheet, {
                              color: "white",
                              elevation: 6,
                              class: "rounded-lg ma-4 pa-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, null, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                        createVNode(VDivider, {
                                          thickness: "4px",
                                          color: "#662d91"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.rut,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                  label: "Rut* (12345678-9)",
                                                  id: "rut",
                                                  type: "text",
                                                  required: "",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createTextVNode(" " + toDisplayString(state.editedItem.rut) + " ", 1),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.nombre,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                  label: "Nombre*",
                                                  type: "text",
                                                  id: "nombre",
                                                  required: "",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.apellidos,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                  label: "Apellidos*",
                                                  id: "apellidos",
                                                  required: "",
                                                  type: "text",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSwitch, {
                                                  modelValue: state.editedItem.comunidad_lgbtq,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                  "hide-details": "",
                                                  class: "ml-2",
                                                  color: "green-darken-3",
                                                  inset: "",
                                                  label: "Comunidad LGTB+"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSwitch, {
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
                                                createVNode(VSwitch, {
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
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.email,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                  label: "Email",
                                                  type: "email",
                                                  id: "email",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.fecha_nacimiento,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                  label: "Fecha de nacimiento",
                                                  clearable: "",
                                                  variant: "underlined",
                                                  type: "date",
                                                  format: formatDate.value,
                                                  onInput: handleInputChange
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.edad,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                  label: "Edad*",
                                                  type: "text",
                                                  variant: "underlined",
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.direccion,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                  label: "Dirección",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  label: "teléfono 1",
                                                  modelValue: state.editedItem.telefono1,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.telefono2,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                  label: "teléfono 2",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  items: state.list.grupos_sanguineos,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.grupo_sanguineo_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                  label: "Grupo sanguíneo",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.estados_civiles,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.estado_civil_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                  label: "Estado civil",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.nacionalidades,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.nacionalidad_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                  label: "Nacionalidad",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.religiones,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Religion / Culto",
                                                  modelValue: state.editedItem.religion_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.generos,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Género",
                                                  modelValue: state.editedItem.genero_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  label: "Ciudad",
                                                  modelValue: state.editedItem.ciudad,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  items: state.list.previsiones,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.prevision_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                  label: "Previsión de Salud",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.pueblos_originarios,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.pueblo_originario_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                  label: "Pueblo originario",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.niveles_instruccion,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.nivel_instruccion_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                  label: "Nivel de Instruccion",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, { label: "Diagnóstico NNE Transitoria" }),
                                                createVNode(VSelect, { label: "Diagnóstico NNE Permanentes" })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  label: "Establecimiento educacional",
                                                  items: state.list.establecimientos_educacionales,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.establecimiento_educacional_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Profesor/a Jefe",
                                                  modelValue: state.editedItem.profesor,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VSwitch, {
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
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.rut_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                  label: "Rut* (12345678-9)",
                                                  id: "rut_responsable",
                                                  type: "text",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.nombre_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                  label: "Nombre persona responsable",
                                                  type: "text",
                                                  id: "nombre_responsable",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.apellidos_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                  label: "Apellidos persona responsable*",
                                                  id: "apellidos_responsable",
                                                  type: "text",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSwitch, {
                                                  modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                  "hide-details": "",
                                                  class: "ml-2",
                                                  color: "green-darken-3",
                                                  inset: "",
                                                  label: "Comunidad LGTB+"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSwitch, {
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
                                                createVNode(VSwitch, {
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
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.email_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                  rules: state.validationSchema.emailRules,
                                                  label: "Email",
                                                  type: "email",
                                                  id: "emai_responsable",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                  label: "Fecha de nacimientoX",
                                                  clearable: "",
                                                  variant: "underlined",
                                                  type: "date",
                                                  format: formatDate.value,
                                                  onInput: handleInputChange
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.edad_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                  label: "Edad*",
                                                  type: "text",
                                                  variant: "underlined",
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.direccion_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                  label: "Dirección",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  label: "teléfono 1X",
                                                  modelValue: state.editedItem.telefono_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  items: state.list.grupos_sanguineos,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                  label: "Grupo sanguíneo",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.estados_civiles,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.estado_civil_responsable_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                  label: "Estado civil",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.nacionalidades,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.nacionalidad_responsable_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                  label: "Nacionalidad",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.religiones,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Religion / Culto",
                                                  modelValue: state.editedItem.religion_responsable_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.generos,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  label: "Género",
                                                  modelValue: state.editedItem.genero_responsable_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  label: "Ciudad",
                                                  modelValue: state.editedItem.ciudad_responsable,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  items: state.list.previsiones,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.prevision_responsable_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                  label: "Previsión de Salud",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.pueblos_originarios,
                                                  "item-title": "descripcion",
                                                  "item-value": "id",
                                                  modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                  label: "Pueblo originario",
                                                  clearable: "",
                                                  variant: "underlined"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                                createVNode(VSelect, {
                                                  items: state.list.niveles_instruccion,
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
                                    createVNode(VCardActions, null, {
                                      default: withCtx(() => [
                                        createVNode(VSpacer),
                                        createVNode(VBtn, {
                                          color: "#009AA4",
                                          variant: "tonal",
                                          onClick: close
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancelar ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VSheet, {
                elevation: 6,
                class: "rounded-lg ma-2 pa-2"
              }, {
                default: withCtx(() => [
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
                                            rules: state.validationSchema.rutRules,
                                            label: "Rut del paciente * (12345678-9)",
                                            class: "ma-2",
                                            type: "text",
                                            variant: "underlined",
                                            clearable: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(VTextField, {
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
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            items: state.list.establecimientos_educacionales,
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
                                        onClick: show
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Buscar ")
                                        ]),
                                        _: 1
                                      }),
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
                  })
                ]),
                _: 1
              }),
              createVNode(VSheet, {
                color: "white",
                elevation: 6,
                class: "rounded-lg ma-2 pa-2"
              }, {
                default: withCtx(() => [
                  createVNode(VDataTable, {
                    headers: state.headers,
                    items: state.tableItems,
                    "sort-by": [{ key: "apellidos", order: "asc" }]
                  }, {
                    top: withCtx(() => [
                      createVNode(VToolbar, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            icon: "mdi-account-multiple-plus",
                            variant: "tonal",
                            class: "ma-2",
                            color: "#009AA4",
                            onClick: openFormCreate
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    "item.actions": withCtx(({ item }) => [
                      createVNode(VTooltip, {
                        text: "Ficha Médica",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
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
                      createVNode(VTooltip, {
                        text: "Datos Personales",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
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
                      createVNode(VTooltip, {
                        text: "Eliminar",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
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
                  }, 8, ["headers", "items"]),
                  createVNode(VDialog, {
                    modelValue: state.dialog,
                    "onUpdate:modelValue": ($event) => state.dialog = $event,
                    persistent: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        "fast-fail": "",
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VSheet, {
                            color: "white",
                            elevation: 6,
                            class: "rounded-lg ma-4 pa-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, null, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(editedItemTitle.value), 1),
                                      createVNode(VDivider, {
                                        thickness: "4px",
                                        color: "#662d91"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.rut,
                                                "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                label: "Rut* (12345678-9)",
                                                id: "rut",
                                                type: "text",
                                                required: "",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createTextVNode(" " + toDisplayString(state.editedItem.rut) + " ", 1),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.nombre,
                                                "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                label: "Nombre*",
                                                type: "text",
                                                id: "nombre",
                                                required: "",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.apellidos,
                                                "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                label: "Apellidos*",
                                                id: "apellidos",
                                                required: "",
                                                type: "text",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSwitch, {
                                                modelValue: state.editedItem.comunidad_lgbtq,
                                                "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq = $event,
                                                "hide-details": "",
                                                class: "ml-2",
                                                color: "green-darken-3",
                                                inset: "",
                                                label: "Comunidad LGTB+"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSwitch, {
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
                                              createVNode(VSwitch, {
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
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.email,
                                                "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                label: "Email",
                                                type: "email",
                                                id: "email",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.fecha_nacimiento,
                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento = $event,
                                                label: "Fecha de nacimiento",
                                                clearable: "",
                                                variant: "underlined",
                                                type: "date",
                                                format: formatDate.value,
                                                onInput: handleInputChange
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.edad,
                                                "onUpdate:modelValue": ($event) => state.editedItem.edad = $event,
                                                label: "Edad*",
                                                type: "text",
                                                variant: "underlined",
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.direccion,
                                                "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                label: "Dirección",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                label: "teléfono 1",
                                                modelValue: state.editedItem.telefono1,
                                                "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.telefono2,
                                                "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                label: "teléfono 2",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                items: state.list.grupos_sanguineos,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.grupo_sanguineo_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_id = $event,
                                                label: "Grupo sanguíneo",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.estados_civiles,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.estado_civil_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_id = $event,
                                                label: "Estado civil",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.nacionalidades,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.nacionalidad_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_id = $event,
                                                label: "Nacionalidad",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.religiones,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Religion / Culto",
                                                modelValue: state.editedItem.religion_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.religion_id = $event,
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.generos,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Género",
                                                modelValue: state.editedItem.genero_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.genero_id = $event,
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                label: "Ciudad",
                                                modelValue: state.editedItem.ciudad,
                                                "onUpdate:modelValue": ($event) => state.editedItem.ciudad = $event,
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                items: state.list.previsiones,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.prevision_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.prevision_id = $event,
                                                label: "Previsión de Salud",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.pueblos_originarios,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.pueblo_originario_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_id = $event,
                                                label: "Pueblo originario",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.niveles_instruccion,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.nivel_instruccion_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.nivel_instruccion_id = $event,
                                                label: "Nivel de Instruccion",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, { label: "Diagnóstico NNE Transitoria" }),
                                              createVNode(VSelect, { label: "Diagnóstico NNE Permanentes" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "text-h6" }, " Datos Educacionales "),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                label: "Establecimiento educacional",
                                                items: state.list.establecimientos_educacionales,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.establecimiento_educacional_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.establecimiento_educacional_id = $event
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Profesor/a Jefe",
                                                modelValue: state.editedItem.profesor,
                                                "onUpdate:modelValue": ($event) => state.editedItem.profesor = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VSwitch, {
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
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.rut_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.rut_responsable = $event,
                                                label: "Rut* (12345678-9)",
                                                id: "rut_responsable",
                                                type: "text",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.nombre_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.nombre_responsable = $event,
                                                label: "Nombre persona responsable",
                                                type: "text",
                                                id: "nombre_responsable",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.apellidos_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.apellidos_responsable = $event,
                                                label: "Apellidos persona responsable*",
                                                id: "apellidos_responsable",
                                                type: "text",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSwitch, {
                                                modelValue: state.editedItem.comunidad_lgbtq_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.comunidad_lgbtq_responsable = $event,
                                                "hide-details": "",
                                                class: "ml-2",
                                                color: "green-darken-3",
                                                inset: "",
                                                label: "Comunidad LGTB+"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSwitch, {
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
                                              createVNode(VSwitch, {
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
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.email_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.email_responsable = $event,
                                                rules: state.validationSchema.emailRules,
                                                label: "Email",
                                                type: "email",
                                                id: "emai_responsable",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.fecha_nacimiento_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_nacimiento_responsable = $event,
                                                label: "Fecha de nacimientoX",
                                                clearable: "",
                                                variant: "underlined",
                                                type: "date",
                                                format: formatDate.value,
                                                onInput: handleInputChange
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "onInput"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.edad_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.edad_responsable = $event,
                                                label: "Edad*",
                                                type: "text",
                                                variant: "underlined",
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                modelValue: state.editedItem.direccion_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.direccion_responsable = $event,
                                                label: "Dirección",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                label: "teléfono 1X",
                                                modelValue: state.editedItem.telefono_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.telefono_responsable = $event,
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                items: state.list.grupos_sanguineos,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.grupo_sanguineo_responsable_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.grupo_sanguineo_responsable_id = $event,
                                                label: "Grupo sanguíneo",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.estados_civiles,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.estado_civil_responsable_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.estado_civil_responsable_id = $event,
                                                label: "Estado civil",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.nacionalidades,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.nacionalidad_responsable_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.nacionalidad_responsable_id = $event,
                                                label: "Nacionalidad",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.religiones,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Religion / Culto",
                                                modelValue: state.editedItem.religion_responsable_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.religion_responsable_id = $event,
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.generos,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                label: "Género",
                                                modelValue: state.editedItem.genero_responsable_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.genero_responsable_id = $event,
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                label: "Ciudad",
                                                modelValue: state.editedItem.ciudad_responsable,
                                                "onUpdate:modelValue": ($event) => state.editedItem.ciudad_responsable = $event,
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                items: state.list.previsiones,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.prevision_responsable_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.prevision_responsable_id = $event,
                                                label: "Previsión de Salud",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.pueblos_originarios,
                                                "item-title": "descripcion",
                                                "item-value": "id",
                                                modelValue: state.editedItem.pueblo_originario_responsable_id,
                                                "onUpdate:modelValue": ($event) => state.editedItem.pueblo_originario_responsable_id = $event,
                                                label: "Pueblo originario",
                                                clearable: "",
                                                variant: "underlined"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                items: state.list.niveles_instruccion,
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
                                  createVNode(VCardActions, null, {
                                    default: withCtx(() => [
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        color: "#009AA4",
                                        variant: "tonal",
                                        onClick: close
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancelar ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
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
const PacientePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/PacientePage.vue"]]);
export {
  PacientePage as default
};
//# sourceMappingURL=PacientePage-Dlr4jrOo.js.map
