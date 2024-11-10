import { reactive, onMounted, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext, ref } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-D5Ml9-dY.js";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { router } from "@inertiajs/vue3";
import { u as useDataStore } from "./store-CHGALank.js";
import moment from "moment";
import { useDate } from "vuetify";
import { f as fetchAllData, c as closeForm, o as openToCreate, a as handleStoreItem, b as openToEdit, d as handleEditItem, e as handleRemoveItem } from "./helper-C0cF_F2S.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VChip } from "vuetify/lib/components/VChip/index.mjs";
import { VDataTable } from "vuetify/lib/components/VDataTable/index.mjs";
import { VDialog } from "vuetify/lib/components/VDialog/index.mjs";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VContainer, VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VSheet } from "vuetify/lib/components/VSheet/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import { VToolbar, VToolbarTitle } from "vuetify/lib/components/VToolbar/index.mjs";
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
import "axios";
import "@kyvg/vue3-notification";
import "vue-logger-plugin";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "ProfesionalPage",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDataStore();
    const state = reactive({
      endpoints: ["especialidades"],
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
          title: "Especialidad",
          align: "center",
          sortable: true,
          key: "especialidad_id"
        },
        { title: "Acciones", sortable: false, align: "center", key: "actions" }
      ],
      validation: {
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
      horario: {
        headers: [
          {
            text: "Día de la semana",
            align: "center",
            sortable: true,
            value: "dia"
          },
          {
            text: "Hora inicio",
            align: "center",
            sortable: true,
            value: "horaInicio"
          },
          {
            text: "Hora término",
            align: "center",
            sortable: true,
            value: "horaTermino"
          },
          {
            text: "Disponible (S/N)",
            align: "center",
            sortable: true,
            value: "disponible"
          }
        ],
        items: [
          {
            dia: "Lunes",
            horaInicio: "08:00",
            horaTermino: "17:00",
            disponible: "S"
          },
          {
            dia: "Martes",
            horaInicio: "08:00",
            horaTermino: "17:00",
            disponible: "N"
          }
        ]
      },
      searchQuery: {
        rut: null,
        especialidad_id: null
      },
      editedItem: {
        rut: null,
        nombre: null,
        apellidos: null,
        dirección: null,
        email: null,
        fecha_nacimiento: null,
        especialidad_id: null,
        telefono: null,
        vigente: true
      },
      defaultItem: {
        rut: null,
        nombre: null,
        apellidos: null,
        dirección: null,
        email: null,
        fecha_nacimiento: null,
        especialidad_id: null,
        telefono: null,
        vigente: true
      },
      dialog: false,
      editedIndex: -1,
      formCrear: "Nuevo profesional",
      formEdit: "Editar datos del profesional",
      formItems: [],
      formTitle: "Gestión de Profesionales",
      list: [],
      loadingSearch: false,
      tableItems: []
    });
    useDate();
    onMounted(async () => {
      state.list = await fetchAllData(state.endpoints);
    });
    const editedItemTitle = computed(
      () => state.editedIndex === -1 ? state.formCrear : state.formEdit
    );
    computed(() => {
      let formatted = moment(state.editedItem.fecha_nacimiento).format(
        "DD/MM/YYYY"
      );
      return formatted;
    });
    function fichaMedica(item) {
      store.selected = item;
      try {
        router.get("/ficha");
      } catch (error) {
        console.error(
          //  '"An error occurred while fetching daily attention data."'
        );
      }
    }
    function asignacion(item) {
      store.selected = item;
      try {
        router.get("/asignacion");
      } catch (error) {
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
    const isObjectNullOrEmpty = (obj) => {
      return Object.values(obj).every((value) => value === null || value === "");
    };
    const show = () => {
      if (isObjectNullOrEmpty(state.searchQuery)) {
        Swal.fire({
          title: "¿Quieres desplegar todos los registros?",
          text: "Esta acción puede tardar un poco.",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("Desplegando todos los registros...");
          } else {
            console.log("Acción cancelada.");
          }
        });
      } else {
        console.log(state.searchQuery);
      }
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
      const _component_download_excel = resolveComponent("download-excel");
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSheet, {
              color: "white",
              elevation: 6,
              class: "rounded-lg ma-2 pa-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h6 ma-2"${_scopeId2}>${ssrInterpolate(state.formTitle)}</div>`);
                  _push3(ssrRenderComponent(VDivider, {
                    thickness: "4px",
                    color: "#009AA4"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VForm, {
                    "fast-fail": "",
                    onSubmit: () => {
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: state.searchQuery.rut,
                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                      rules: state.validation.rutRules,
                                      label: "Rut* (12345678-9)",
                                      class: "ma-2",
                                      type: "text",
                                      variant: "underlined",
                                      clearable: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VSelect, {
                                      items: state.list.especialidad,
                                      clearable: "",
                                      label: "Especialidad",
                                      class: "ma-2",
                                      variant: "underlined",
                                      single: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: state.searchQuery.rut,
                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                        rules: state.validation.rutRules,
                                        label: "Rut* (12345678-9)",
                                        class: "ma-2",
                                        type: "text",
                                        variant: "underlined",
                                        clearable: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VSelect, {
                                        items: state.list.especialidad,
                                        clearable: "",
                                        label: "Especialidad",
                                        class: "ma-2",
                                        variant: "underlined",
                                        single: ""
                                      }, null, 8, ["items"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: state.searchQuery.rut,
                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                      rules: state.validation.rutRules,
                                      label: "Rut* (12345678-9)",
                                      class: "ma-2",
                                      type: "text",
                                      variant: "underlined",
                                      clearable: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VSelect, {
                                      items: state.list.especialidad,
                                      clearable: "",
                                      label: "Especialidad",
                                      class: "ma-2",
                                      variant: "underlined",
                                      single: ""
                                    }, null, 8, ["items"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                "prepend-icon": "mdi-file-search",
                                variant: "tonal",
                                class: "ma-4",
                                color: "#009AA4",
                                loading: state.loadingSearch,
                                type: "submit",
                                onClick: show
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Buscar `);
                                  } else {
                                    return [
                                      createTextVNode(" Buscar ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                "prepend-icon": "mdi-cloud-download",
                                variant: "tonal",
                                class: "ma-4",
                                color: "#009AA4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_download_excel, {
                                      data: state.tableItems,
                                      name: "consulta_paciente.xls"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Bajar archivo `);
                                        } else {
                                          return [
                                            createTextVNode(" Bajar archivo ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  "prepend-icon": "mdi-file-search",
                                  variant: "tonal",
                                  class: "ma-4",
                                  color: "#009AA4",
                                  loading: state.loadingSearch,
                                  type: "submit",
                                  onClick: show
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: state.searchQuery.rut,
                                    "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                    rules: state.validation.rutRules,
                                    label: "Rut* (12345678-9)",
                                    class: "ma-2",
                                    type: "text",
                                    variant: "underlined",
                                    clearable: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VSelect, {
                                    items: state.list.especialidad,
                                    clearable: "",
                                    label: "Especialidad",
                                    class: "ma-2",
                                    variant: "underlined",
                                    single: ""
                                  }, null, 8, ["items"])
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
                                loading: state.loadingSearch,
                                type: "submit",
                                onClick: show
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(state.formTitle), 1),
                    createVNode(VDivider, {
                      thickness: "4px",
                      color: "#009AA4"
                    }),
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
                                  rules: state.validation.rutRules,
                                  label: "Rut* (12345678-9)",
                                  class: "ma-2",
                                  type: "text",
                                  variant: "underlined",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VSelect, {
                                  items: state.list.especialidad,
                                  clearable: "",
                                  label: "Especialidad",
                                  class: "ma-2",
                                  variant: "underlined",
                                  single: ""
                                }, null, 8, ["items"])
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
                              loading: state.loadingSearch,
                              type: "submit",
                              onClick: show
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
                              _push5(ssrRenderComponent(VDialog, {
                                modelValue: state.dialog,
                                "onUpdate:modelValue": ($event) => state.dialog = $event,
                                persistent: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VForm, {
                                      "fast-fail": "",
                                      onSubmit: () => {
                                      }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCard, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCardTitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="text-h6 ma-2"${_scopeId8}>${ssrInterpolate(editedItemTitle.value)}</div>`);
                                                      _push9(ssrRenderComponent(VDivider, {
                                                        thickness: "4px",
                                                        color: "#662d91"
                                                      }, null, _parent9, _scopeId8));
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
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCardText, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="text-h6"${_scopeId8}> Datos Personales </div>`);
                                                      _push9(ssrRenderComponent(VSpacer, null, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VRow, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCol, { cols: "3" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: state.editedItem.rut,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                    label: "Rut* (12345678-9)",
                                                                    type: "text",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: state.editedItem.nombre,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                    label: "Nombre*",
                                                                    type: "text",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: state.editedItem.apellidos,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                    label: "Apellidos*",
                                                                    required: "",
                                                                    type: "text",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: state.editedItem.email,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                    rules: state.validationSchema.emailRules,
                                                                    label: "Email",
                                                                    type: "email",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VTextField, {
                                                                      modelValue: state.editedItem.rut,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                      label: "Rut* (12345678-9)",
                                                                      type: "text",
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(VTextField, {
                                                                      modelValue: state.editedItem.nombre,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                      label: "Nombre*",
                                                                      type: "text",
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(VTextField, {
                                                                      modelValue: state.editedItem.apellidos,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                      label: "Apellidos*",
                                                                      required: "",
                                                                      type: "text",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(VTextField, {
                                                                      modelValue: state.editedItem.email,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                      rules: state.validationSchema.emailRules,
                                                                      label: "Email",
                                                                      type: "email",
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VCol, { cols: "3" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: state.editedItem.direccion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                    label: "Dirección",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    label: "teléfono 1",
                                                                    modelValue: state.editedItem.telefono1,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: state.editedItem.telefono2,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                    label: "teléfono 2",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VSelect, {
                                                                    items: [
                                                                      "Psicologia",
                                                                      "Kine",
                                                                      "Terapia Ocupacional"
                                                                    ],
                                                                    clearable: "",
                                                                    label: "Especialidad",
                                                                    variant: "underlined",
                                                                    single: ""
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
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
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(VSelect, {
                                                                      items: [
                                                                        "Psicologia",
                                                                        "Kine",
                                                                        "Terapia Ocupacional"
                                                                      ],
                                                                      clearable: "",
                                                                      label: "Especialidad",
                                                                      variant: "underlined",
                                                                      single: ""
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VCol, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VDataTable, {
                                                                    headers: state.horario.headers,
                                                                    items: state.horario.items,
                                                                    class: "elevation-1"
                                                                  }, {
                                                                    top: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VToolbar, { flat: "" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(ssrRenderComponent(VToolbarTitle, null, {
                                                                                default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                  if (_push14) {
                                                                                    _push14(`Disponibilidad horaria`);
                                                                                  } else {
                                                                                    return [
                                                                                      createTextVNode("Disponibilidad horaria")
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 1
                                                                              }, _parent13, _scopeId12));
                                                                              _push13(ssrRenderComponent(VDivider, {
                                                                                class: "mx-4",
                                                                                inset: "",
                                                                                vertical: ""
                                                                              }, null, _parent13, _scopeId12));
                                                                            } else {
                                                                              return [
                                                                                createVNode(VToolbarTitle, null, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode("Disponibilidad horaria")
                                                                                  ]),
                                                                                  _: 1
                                                                                }),
                                                                                createVNode(VDivider, {
                                                                                  class: "mx-4",
                                                                                  inset: "",
                                                                                  vertical: ""
                                                                                })
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VToolbar, { flat: "" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(VToolbarTitle, null, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("Disponibilidad horaria")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createVNode(VDivider, {
                                                                                class: "mx-4",
                                                                                inset: "",
                                                                                vertical: ""
                                                                              })
                                                                            ]),
                                                                            _: 1
                                                                          })
                                                                        ];
                                                                      }
                                                                    }),
                                                                    "item.disponible": withCtx(({
                                                                      item
                                                                    }, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VChip, {
                                                                          color: item.disponible === "S" ? "green" : "red",
                                                                          dark: ""
                                                                        }, {
                                                                          default: withCtx((_11, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`${ssrInterpolate(item.disponible)}`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode(toDisplayString(item.disponible), 1)
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 2
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VChip, {
                                                                            color: item.disponible === "S" ? "green" : "red",
                                                                            dark: ""
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(toDisplayString(item.disponible), 1)
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["color"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VDataTable, {
                                                                      headers: state.horario.headers,
                                                                      items: state.horario.items,
                                                                      class: "elevation-1"
                                                                    }, {
                                                                      top: withCtx(() => [
                                                                        createVNode(VToolbar, { flat: "" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(VToolbarTitle, null, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("Disponibilidad horaria")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createVNode(VDivider, {
                                                                              class: "mx-4",
                                                                              inset: "",
                                                                              vertical: ""
                                                                            })
                                                                          ]),
                                                                          _: 1
                                                                        })
                                                                      ]),
                                                                      "item.disponible": withCtx(({
                                                                        item
                                                                      }) => [
                                                                        createVNode(VChip, {
                                                                          color: item.disponible === "S" ? "green" : "red",
                                                                          dark: ""
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(item.disponible), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1032, ["color"])
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["headers", "items"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCol, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    modelValue: state.editedItem.rut,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                    label: "Rut* (12345678-9)",
                                                                    type: "text",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(VTextField, {
                                                                    modelValue: state.editedItem.nombre,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                    label: "Nombre*",
                                                                    type: "text",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(VTextField, {
                                                                    modelValue: state.editedItem.apellidos,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                    label: "Apellidos*",
                                                                    required: "",
                                                                    type: "text",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(VTextField, {
                                                                    modelValue: state.editedItem.email,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                    rules: state.validationSchema.emailRules,
                                                                    label: "Email",
                                                                    type: "email",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, { cols: "3" }, {
                                                                default: withCtx(() => [
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
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(VSelect, {
                                                                    items: [
                                                                      "Psicologia",
                                                                      "Kine",
                                                                      "Terapia Ocupacional"
                                                                    ],
                                                                    clearable: "",
                                                                    label: "Especialidad",
                                                                    variant: "underlined",
                                                                    single: ""
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VDataTable, {
                                                                    headers: state.horario.headers,
                                                                    items: state.horario.items,
                                                                    class: "elevation-1"
                                                                  }, {
                                                                    top: withCtx(() => [
                                                                      createVNode(VToolbar, { flat: "" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(VToolbarTitle, null, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Disponibilidad horaria")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(VDivider, {
                                                                            class: "mx-4",
                                                                            inset: "",
                                                                            vertical: ""
                                                                          })
                                                                        ]),
                                                                        _: 1
                                                                      })
                                                                    ]),
                                                                    "item.disponible": withCtx(({
                                                                      item
                                                                    }) => [
                                                                      createVNode(VChip, {
                                                                        color: item.disponible === "S" ? "green" : "red",
                                                                        dark: ""
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(item.disponible), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["color"])
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "text-h6" }, " Datos Personales "),
                                                        createVNode(VSpacer),
                                                        createVNode(VRow, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VCol, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  modelValue: state.editedItem.rut,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                  label: "Rut* (12345678-9)",
                                                                  type: "text",
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(VTextField, {
                                                                  modelValue: state.editedItem.nombre,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                  label: "Nombre*",
                                                                  type: "text",
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(VTextField, {
                                                                  modelValue: state.editedItem.apellidos,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                  label: "Apellidos*",
                                                                  required: "",
                                                                  type: "text",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(VTextField, {
                                                                  modelValue: state.editedItem.email,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                  rules: state.validationSchema.emailRules,
                                                                  label: "Email",
                                                                  type: "email",
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, { cols: "3" }, {
                                                              default: withCtx(() => [
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
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(VSelect, {
                                                                  items: [
                                                                    "Psicologia",
                                                                    "Kine",
                                                                    "Terapia Ocupacional"
                                                                  ],
                                                                  clearable: "",
                                                                  label: "Especialidad",
                                                                  variant: "underlined",
                                                                  single: ""
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VDataTable, {
                                                                  headers: state.horario.headers,
                                                                  items: state.horario.items,
                                                                  class: "elevation-1"
                                                                }, {
                                                                  top: withCtx(() => [
                                                                    createVNode(VToolbar, { flat: "" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VToolbarTitle, null, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Disponibilidad horaria")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(VDivider, {
                                                                          class: "mx-4",
                                                                          inset: "",
                                                                          vertical: ""
                                                                        })
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ]),
                                                                  "item.disponible": withCtx(({
                                                                    item
                                                                  }) => [
                                                                    createVNode(VChip, {
                                                                      color: item.disponible === "S" ? "green" : "red",
                                                                      dark: ""
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(item.disponible), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["color"])
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
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCardActions, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VSpacer, null, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VBtn, {
                                                        color: "#009AA4",
                                                        variant: "tonal",
                                                        onClick: close
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` Cancelar `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Cancelar ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VBtn, {
                                                        color: "#009AA4",
                                                        variant: "tonal",
                                                        onClick: storeItems
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` Guardar `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Guardar ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
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
                                                }, _parent8, _scopeId7));
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
                                                      createVNode(VSpacer),
                                                      createVNode(VRow, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VCol, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.rut,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                label: "Rut* (12345678-9)",
                                                                type: "text",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.nombre,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                label: "Nombre*",
                                                                type: "text",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.apellidos,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                label: "Apellidos*",
                                                                required: "",
                                                                type: "text",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.email,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                                rules: state.validationSchema.emailRules,
                                                                label: "Email",
                                                                type: "email",
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, { cols: "3" }, {
                                                            default: withCtx(() => [
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
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VSelect, {
                                                                items: [
                                                                  "Psicologia",
                                                                  "Kine",
                                                                  "Terapia Ocupacional"
                                                                ],
                                                                clearable: "",
                                                                label: "Especialidad",
                                                                variant: "underlined",
                                                                single: ""
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VDataTable, {
                                                                headers: state.horario.headers,
                                                                items: state.horario.items,
                                                                class: "elevation-1"
                                                              }, {
                                                                top: withCtx(() => [
                                                                  createVNode(VToolbar, { flat: "" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VToolbarTitle, null, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Disponibilidad horaria")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(VDivider, {
                                                                        class: "mx-4",
                                                                        inset: "",
                                                                        vertical: ""
                                                                      })
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                "item.disponible": withCtx(({
                                                                  item
                                                                }) => [
                                                                  createVNode(VChip, {
                                                                    color: item.disponible === "S" ? "green" : "red",
                                                                    dark: ""
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(item.disponible), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["color"])
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
                                          }, _parent7, _scopeId6));
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
                                                    createVNode(VSpacer),
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.rut,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                              label: "Rut* (12345678-9)",
                                                              type: "text",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.nombre,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                              label: "Nombre*",
                                                              type: "text",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.apellidos,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                              label: "Apellidos*",
                                                              required: "",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.email,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                              rules: state.validationSchema.emailRules,
                                                              label: "Email",
                                                              type: "email",
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "3" }, {
                                                          default: withCtx(() => [
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
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VSelect, {
                                                              items: [
                                                                "Psicologia",
                                                                "Kine",
                                                                "Terapia Ocupacional"
                                                              ],
                                                              clearable: "",
                                                              label: "Especialidad",
                                                              variant: "underlined",
                                                              single: ""
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VDataTable, {
                                                              headers: state.horario.headers,
                                                              items: state.horario.items,
                                                              class: "elevation-1"
                                                            }, {
                                                              top: withCtx(() => [
                                                                createVNode(VToolbar, { flat: "" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VToolbarTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Disponibilidad horaria")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(VDivider, {
                                                                      class: "mx-4",
                                                                      inset: "",
                                                                      vertical: ""
                                                                    })
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              "item.disponible": withCtx(({
                                                                item
                                                              }) => [
                                                                createVNode(VChip, {
                                                                  color: item.disponible === "S" ? "green" : "red",
                                                                  dark: ""
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(item.disponible), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VForm, {
                                        "fast-fail": "",
                                        onSubmit: withModifiers(() => {
                                        }, ["prevent"])
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
                                                  createVNode(VSpacer),
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "3" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.rut,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                            label: "Rut* (12345678-9)",
                                                            type: "text",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.nombre,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                            label: "Nombre*",
                                                            type: "text",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.apellidos,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                            label: "Apellidos*",
                                                            required: "",
                                                            type: "text",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.email,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                            rules: state.validationSchema.emailRules,
                                                            label: "Email",
                                                            type: "email",
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "3" }, {
                                                        default: withCtx(() => [
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
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VSelect, {
                                                            items: [
                                                              "Psicologia",
                                                              "Kine",
                                                              "Terapia Ocupacional"
                                                            ],
                                                            clearable: "",
                                                            label: "Especialidad",
                                                            variant: "underlined",
                                                            single: ""
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VDataTable, {
                                                            headers: state.horario.headers,
                                                            items: state.horario.items,
                                                            class: "elevation-1"
                                                          }, {
                                                            top: withCtx(() => [
                                                              createVNode(VToolbar, { flat: "" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VToolbarTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Disponibilidad horaria")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(VDivider, {
                                                                    class: "mx-4",
                                                                    inset: "",
                                                                    vertical: ""
                                                                  })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            "item.disponible": withCtx(({
                                                              item
                                                            }) => [
                                                              createVNode(VChip, {
                                                                color: item.disponible === "S" ? "green" : "red",
                                                                dark: ""
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(item.disponible), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"])
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
                                      }, 8, ["onSubmit"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  icon: "mdi-account-multiple-plus",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  onClick: openFormCreate
                                }),
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
                                                createVNode(VSpacer),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "3" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.rut,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                          label: "Rut* (12345678-9)",
                                                          type: "text",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.nombre,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                          label: "Nombre*",
                                                          type: "text",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.apellidos,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                          label: "Apellidos*",
                                                          required: "",
                                                          type: "text",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.email,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                          rules: state.validationSchema.emailRules,
                                                          label: "Email",
                                                          type: "email",
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "3" }, {
                                                      default: withCtx(() => [
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
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VSelect, {
                                                          items: [
                                                            "Psicologia",
                                                            "Kine",
                                                            "Terapia Ocupacional"
                                                          ],
                                                          clearable: "",
                                                          label: "Especialidad",
                                                          variant: "underlined",
                                                          single: ""
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VDataTable, {
                                                          headers: state.horario.headers,
                                                          items: state.horario.items,
                                                          class: "elevation-1"
                                                        }, {
                                                          top: withCtx(() => [
                                                            createVNode(VToolbar, { flat: "" }, {
                                                              default: withCtx(() => [
                                                                createVNode(VToolbarTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Disponibilidad horaria")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(VDivider, {
                                                                  class: "mx-4",
                                                                  inset: "",
                                                                  vertical: ""
                                                                })
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          "item.disponible": withCtx(({
                                                            item
                                                          }) => [
                                                            createVNode(VChip, {
                                                              color: item.disponible === "S" ? "green" : "red",
                                                              dark: ""
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(item.disponible), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
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
                          createVNode(VToolbar, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              }),
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
                                              createVNode(VSpacer),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "3" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.rut,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                        label: "Rut* (12345678-9)",
                                                        type: "text",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.nombre,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                        label: "Nombre*",
                                                        type: "text",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.apellidos,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                        label: "Apellidos*",
                                                        required: "",
                                                        type: "text",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.email,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                        rules: state.validationSchema.emailRules,
                                                        label: "Email",
                                                        type: "email",
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "3" }, {
                                                    default: withCtx(() => [
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
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VSelect, {
                                                        items: [
                                                          "Psicologia",
                                                          "Kine",
                                                          "Terapia Ocupacional"
                                                        ],
                                                        clearable: "",
                                                        label: "Especialidad",
                                                        variant: "underlined",
                                                        single: ""
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VDataTable, {
                                                        headers: state.horario.headers,
                                                        items: state.horario.items,
                                                        class: "elevation-1"
                                                      }, {
                                                        top: withCtx(() => [
                                                          createVNode(VToolbar, { flat: "" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VToolbarTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Disponibilidad horaria")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VDivider, {
                                                                class: "mx-4",
                                                                inset: "",
                                                                vertical: ""
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        "item.disponible": withCtx(({
                                                          item
                                                        }) => [
                                                          createVNode(VChip, {
                                                            color: item.disponible === "S" ? "green" : "red",
                                                            dark: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.disponible), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
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
                        _push4(ssrRenderComponent(VTooltip, {
                          text: "Asignacion de Servicio",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps(props, {
                                density: "compact",
                                color: "#009AA4",
                                class: "mr-2 ml-2",
                                icon: "mdi-medical-bag",
                                variant: "tonal",
                                onClick: ($event) => asignacion(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
                                  density: "compact",
                                  color: "#009AA4",
                                  class: "mr-2 ml-2",
                                  icon: "mdi-medical-bag",
                                  variant: "tonal",
                                  onClick: ($event) => asignacion(item)
                                }), null, 16, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
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
                            text: "Asignacion de Servicio",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
                                density: "compact",
                                color: "#009AA4",
                                class: "mr-2 ml-2",
                                icon: "mdi-medical-bag",
                                variant: "tonal",
                                onClick: ($event) => asignacion(item)
                              }), null, 16, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
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
                            }),
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
                                            createVNode(VSpacer),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "3" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.rut,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                      label: "Rut* (12345678-9)",
                                                      type: "text",
                                                      required: "",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.nombre,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                      label: "Nombre*",
                                                      type: "text",
                                                      required: "",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.apellidos,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                      label: "Apellidos*",
                                                      required: "",
                                                      type: "text",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.email,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                      rules: state.validationSchema.emailRules,
                                                      label: "Email",
                                                      type: "email",
                                                      required: "",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "3" }, {
                                                  default: withCtx(() => [
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
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VSelect, {
                                                      items: [
                                                        "Psicologia",
                                                        "Kine",
                                                        "Terapia Ocupacional"
                                                      ],
                                                      clearable: "",
                                                      label: "Especialidad",
                                                      variant: "underlined",
                                                      single: ""
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VDataTable, {
                                                      headers: state.horario.headers,
                                                      items: state.horario.items,
                                                      class: "elevation-1"
                                                    }, {
                                                      top: withCtx(() => [
                                                        createVNode(VToolbar, { flat: "" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VToolbarTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Disponibilidad horaria")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VDivider, {
                                                              class: "mx-4",
                                                              inset: "",
                                                              vertical: ""
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      "item.disponible": withCtx(({
                                                        item
                                                      }) => [
                                                        createVNode(VChip, {
                                                          color: item.disponible === "S" ? "green" : "red",
                                                          dark: ""
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.disponible), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
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
                                }, 8, ["onSubmit"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      "item.actions": withCtx(({ item }) => [
                        createVNode(VTooltip, {
                          text: "Asignacion de Servicio",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
                              density: "compact",
                              color: "#009AA4",
                              class: "mr-2 ml-2",
                              icon: "mdi-medical-bag",
                              variant: "tonal",
                              onClick: ($event) => asignacion(item)
                            }), null, 16, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
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
                    }, 8, ["headers", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VSheet, {
                color: "white",
                elevation: 6,
                class: "rounded-lg ma-2 pa-2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(state.formTitle), 1),
                  createVNode(VDivider, {
                    thickness: "4px",
                    color: "#009AA4"
                  }),
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
                                rules: state.validation.rutRules,
                                label: "Rut* (12345678-9)",
                                class: "ma-2",
                                type: "text",
                                variant: "underlined",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VSelect, {
                                items: state.list.especialidad,
                                clearable: "",
                                label: "Especialidad",
                                class: "ma-2",
                                variant: "underlined",
                                single: ""
                              }, null, 8, ["items"])
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
                            loading: state.loadingSearch,
                            type: "submit",
                            onClick: show
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
                          }),
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
                                          createVNode(VSpacer),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "3" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.rut,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                    label: "Rut* (12345678-9)",
                                                    type: "text",
                                                    required: "",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.nombre,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                    label: "Nombre*",
                                                    type: "text",
                                                    required: "",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.apellidos,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                    label: "Apellidos*",
                                                    required: "",
                                                    type: "text",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.email,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.email = $event,
                                                    rules: state.validationSchema.emailRules,
                                                    label: "Email",
                                                    type: "email",
                                                    required: "",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "3" }, {
                                                default: withCtx(() => [
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
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VSelect, {
                                                    items: [
                                                      "Psicologia",
                                                      "Kine",
                                                      "Terapia Ocupacional"
                                                    ],
                                                    clearable: "",
                                                    label: "Especialidad",
                                                    variant: "underlined",
                                                    single: ""
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VDataTable, {
                                                    headers: state.horario.headers,
                                                    items: state.horario.items,
                                                    class: "elevation-1"
                                                  }, {
                                                    top: withCtx(() => [
                                                      createVNode(VToolbar, { flat: "" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VToolbarTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Disponibilidad horaria")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VDivider, {
                                                            class: "mx-4",
                                                            inset: "",
                                                            vertical: ""
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    "item.disponible": withCtx(({
                                                      item
                                                    }) => [
                                                      createVNode(VChip, {
                                                        color: item.disponible === "S" ? "green" : "red",
                                                        dark: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.disponible), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
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
                              }, 8, ["onSubmit"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    "item.actions": withCtx(({ item }) => [
                      createVNode(VTooltip, {
                        text: "Asignacion de Servicio",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
                            density: "compact",
                            color: "#009AA4",
                            class: "mr-2 ml-2",
                            icon: "mdi-medical-bag",
                            variant: "tonal",
                            onClick: ($event) => asignacion(item)
                          }), null, 16, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/ProfesionalPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProfesionalPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/SubPages/ProfesionalPage.vue"]]);
export {
  ProfesionalPage as default
};
//# sourceMappingURL=ProfesionalPage-CP5TDp5j.js.map
