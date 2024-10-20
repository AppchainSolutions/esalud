import { reactive, onMounted, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext, ref } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-DOexpPir.js";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { router } from "@inertiajs/vue3";
import { u as useDataStore } from "./store-CHGALank.js";
import moment from "moment";
import { useDate } from "vuetify";
import { f as fetchAllData, c as closeForm, o as openToCreate, a as handleStoreItem, b as openToEdit, d as handleEditItem, e as handleRemoveItem } from "./helper-DlyAxSqm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
import "axios";
import "@kyvg/vue3-notification";
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
      const _component_v_container = resolveComponent("v-container");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_divider = resolveComponent("v-divider");
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
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, {
              color: "white",
              elevation: 6,
              class: "rounded-lg ma-2 pa-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h6 ma-2"${_scopeId2}>${ssrInterpolate(state.formTitle)}</div>`);
                  _push3(ssrRenderComponent(_component_v_divider, {
                    thickness: "4px",
                    color: "#009AA4"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_form, {
                    "fast-fail": "",
                    onSubmit: () => {
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: state.searchQuery.rut,
                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                      rules: state.validation.rutRules,
                                      label: "Rut* (12345678-9)",
                                      class: "ma-2",
                                      type: "text",
                                      variant: "underlined",
                                      clearable: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      items: state.list.especialidad,
                                      clearable: "",
                                      label: "Especialidad",
                                      class: "ma-2",
                                      variant: "underlined",
                                      single: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: state.searchQuery.rut,
                                        "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                        rules: state.validation.rutRules,
                                        label: "Rut* (12345678-9)",
                                        class: "ma-2",
                                        type: "text",
                                        variant: "underlined",
                                        clearable: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_v_select, {
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
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: state.searchQuery.rut,
                                      "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                      rules: state.validation.rutRules,
                                      label: "Rut* (12345678-9)",
                                      class: "ma-2",
                                      type: "text",
                                      variant: "underlined",
                                      clearable: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(_component_v_select, {
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
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
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
                              _push5(ssrRenderComponent(_component_v_btn, {
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
                                createVNode(_component_v_btn, {
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: state.searchQuery.rut,
                                    "onUpdate:modelValue": ($event) => state.searchQuery.rut = $event,
                                    rules: state.validation.rutRules,
                                    label: "Rut* (12345678-9)",
                                    class: "ma-2",
                                    type: "text",
                                    variant: "underlined",
                                    clearable: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(_component_v_select, {
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
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(state.formTitle), 1),
                    createVNode(_component_v_divider, {
                      thickness: "4px",
                      color: "#009AA4"
                    }),
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
                                  rules: state.validation.rutRules,
                                  label: "Rut* (12345678-9)",
                                  class: "ma-2",
                                  type: "text",
                                  variant: "underlined",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_select, {
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
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
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
                                          _push7(ssrRenderComponent(_component_v_card, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="text-h6 ma-2"${_scopeId8}>${ssrInterpolate(editedItemTitle.value)}</div>`);
                                                      _push9(ssrRenderComponent(_component_v_divider, {
                                                        thickness: "4px",
                                                        color: "#662d91"
                                                      }, null, _parent9, _scopeId8));
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
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_text, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="text-h6"${_scopeId8}> Datos Personales </div>`);
                                                      _push9(ssrRenderComponent(_component_v_spacer, null, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_row, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.rut,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                    label: "Rut* (12345678-9)",
                                                                    type: "text",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.nombre,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.nombre = $event,
                                                                    label: "Nombre*",
                                                                    type: "text",
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.apellidos,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                    label: "Apellidos*",
                                                                    required: "",
                                                                    type: "text",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
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
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.rut,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                      label: "Rut* (12345678-9)",
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
                                                                      required: "",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: state.editedItem.apellidos,
                                                                      "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                      label: "Apellidos*",
                                                                      required: "",
                                                                      type: "text",
                                                                      clearable: "",
                                                                      variant: "underlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_text_field, {
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
                                                            _push10(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.direccion,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.direccion = $event,
                                                                    label: "Dirección",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    label: "teléfono 1",
                                                                    modelValue: state.editedItem.telefono1,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono1 = $event,
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_text_field, {
                                                                    modelValue: state.editedItem.telefono2,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.telefono2 = $event,
                                                                    label: "teléfono 2",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_select, {
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
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                    createVNode(_component_v_select, {
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
                                                            _push10(ssrRenderComponent(_component_v_col, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_data_table, {
                                                                    headers: state.horario.headers,
                                                                    items: state.horario.items,
                                                                    class: "elevation-1"
                                                                  }, {
                                                                    top: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_toolbar, { flat: "" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(ssrRenderComponent(_component_v_toolbar_title, null, {
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
                                                                              _push13(ssrRenderComponent(_component_v_divider, {
                                                                                class: "mx-4",
                                                                                inset: "",
                                                                                vertical: ""
                                                                              }, null, _parent13, _scopeId12));
                                                                            } else {
                                                                              return [
                                                                                createVNode(_component_v_toolbar_title, null, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode("Disponibilidad horaria")
                                                                                  ]),
                                                                                  _: 1
                                                                                }),
                                                                                createVNode(_component_v_divider, {
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
                                                                          createVNode(_component_v_toolbar, { flat: "" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_toolbar_title, null, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode("Disponibilidad horaria")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createVNode(_component_v_divider, {
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
                                                                        _push12(ssrRenderComponent(_component_v_chip, {
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
                                                                          createVNode(_component_v_chip, {
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
                                                                    createVNode(_component_v_data_table, {
                                                                      headers: state.horario.headers,
                                                                      items: state.horario.items,
                                                                      class: "elevation-1"
                                                                    }, {
                                                                      top: withCtx(() => [
                                                                        createVNode(_component_v_toolbar, { flat: "" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_toolbar_title, null, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode("Disponibilidad horaria")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createVNode(_component_v_divider, {
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
                                                                        createVNode(_component_v_chip, {
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
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.rut,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                    label: "Rut* (12345678-9)",
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
                                                                    required: "",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: state.editedItem.apellidos,
                                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                    label: "Apellidos*",
                                                                    required: "",
                                                                    type: "text",
                                                                    clearable: "",
                                                                    variant: "underlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_text_field, {
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
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
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
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                  createVNode(_component_v_select, {
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
                                                              createVNode(_component_v_col, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_data_table, {
                                                                    headers: state.horario.headers,
                                                                    items: state.horario.items,
                                                                    class: "elevation-1"
                                                                  }, {
                                                                    top: withCtx(() => [
                                                                      createVNode(_component_v_toolbar, { flat: "" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_toolbar_title, null, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Disponibilidad horaria")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_v_divider, {
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
                                                                      createVNode(_component_v_chip, {
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
                                                        createVNode(_component_v_spacer),
                                                        createVNode(_component_v_row, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.rut,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                  label: "Rut* (12345678-9)",
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
                                                                  required: "",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: state.editedItem.apellidos,
                                                                  "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                  label: "Apellidos*",
                                                                  required: "",
                                                                  type: "text",
                                                                  clearable: "",
                                                                  variant: "underlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_text_field, {
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
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
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
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                                createVNode(_component_v_select, {
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
                                                            createVNode(_component_v_col, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_data_table, {
                                                                  headers: state.horario.headers,
                                                                  items: state.horario.items,
                                                                  class: "elevation-1"
                                                                }, {
                                                                  top: withCtx(() => [
                                                                    createVNode(_component_v_toolbar, { flat: "" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_toolbar_title, null, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Disponibilidad horaria")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_v_divider, {
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
                                                                    createVNode(_component_v_chip, {
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
                                                _push8(ssrRenderComponent(_component_v_card_actions, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_spacer, null, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_btn, {
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
                                                      _push9(ssrRenderComponent(_component_v_btn, {
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
                                                }, _parent8, _scopeId7));
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
                                                      createVNode(_component_v_spacer),
                                                      createVNode(_component_v_row, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.rut,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                                label: "Rut* (12345678-9)",
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
                                                                required: "",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: state.editedItem.apellidos,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                                label: "Apellidos*",
                                                                required: "",
                                                                type: "text",
                                                                clearable: "",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_text_field, {
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
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
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
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(_component_v_select, {
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
                                                          createVNode(_component_v_col, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_data_table, {
                                                                headers: state.horario.headers,
                                                                items: state.horario.items,
                                                                class: "elevation-1"
                                                              }, {
                                                                top: withCtx(() => [
                                                                  createVNode(_component_v_toolbar, { flat: "" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_toolbar_title, null, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Disponibilidad horaria")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_v_divider, {
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
                                                                  createVNode(_component_v_chip, {
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
                                          }, _parent7, _scopeId6));
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
                                                    createVNode(_component_v_spacer),
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.rut,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                              label: "Rut* (12345678-9)",
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
                                                              required: "",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: state.editedItem.apellidos,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                              label: "Apellidos*",
                                                              required: "",
                                                              type: "text",
                                                              clearable: "",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_text_field, {
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
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
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
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(_component_v_select, {
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
                                                        createVNode(_component_v_col, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_data_table, {
                                                              headers: state.horario.headers,
                                                              items: state.horario.items,
                                                              class: "elevation-1"
                                                            }, {
                                                              top: withCtx(() => [
                                                                createVNode(_component_v_toolbar, { flat: "" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_toolbar_title, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Disponibilidad horaria")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_divider, {
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
                                                                createVNode(_component_v_chip, {
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_form, {
                                        "fast-fail": "",
                                        onSubmit: withModifiers(() => {
                                        }, ["prevent"])
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
                                                  createVNode(_component_v_spacer),
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.rut,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                            label: "Rut* (12345678-9)",
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
                                                            required: "",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: state.editedItem.apellidos,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                            label: "Apellidos*",
                                                            required: "",
                                                            type: "text",
                                                            clearable: "",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_text_field, {
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
                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                        default: withCtx(() => [
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
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(_component_v_select, {
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
                                                      createVNode(_component_v_col, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_data_table, {
                                                            headers: state.horario.headers,
                                                            items: state.horario.items,
                                                            class: "elevation-1"
                                                          }, {
                                                            top: withCtx(() => [
                                                              createVNode(_component_v_toolbar, { flat: "" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_toolbar_title, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Disponibilidad horaria")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_divider, {
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
                                                              createVNode(_component_v_chip, {
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
                                                createVNode(_component_v_spacer),
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.rut,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                          label: "Rut* (12345678-9)",
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
                                                          required: "",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: state.editedItem.apellidos,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                          label: "Apellidos*",
                                                          required: "",
                                                          type: "text",
                                                          clearable: "",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_text_field, {
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
                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                      default: withCtx(() => [
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
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(_component_v_select, {
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
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_data_table, {
                                                          headers: state.horario.headers,
                                                          items: state.horario.items,
                                                          class: "elevation-1"
                                                        }, {
                                                          top: withCtx(() => [
                                                            createVNode(_component_v_toolbar, { flat: "" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_toolbar_title, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Disponibilidad horaria")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_divider, {
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
                                                            createVNode(_component_v_chip, {
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
                                              createVNode(_component_v_spacer),
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.rut,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                        label: "Rut* (12345678-9)",
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
                                                        required: "",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: state.editedItem.apellidos,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                        label: "Apellidos*",
                                                        required: "",
                                                        type: "text",
                                                        clearable: "",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_text_field, {
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
                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                    default: withCtx(() => [
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
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(_component_v_select, {
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
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_data_table, {
                                                        headers: state.horario.headers,
                                                        items: state.horario.items,
                                                        class: "elevation-1"
                                                      }, {
                                                        top: withCtx(() => [
                                                          createVNode(_component_v_toolbar, { flat: "" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_toolbar_title, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Disponibilidad horaria")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_divider, {
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
                                                          createVNode(_component_v_chip, {
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
                          text: "Asignacion de Servicio",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                                density: "compact",
                                color: "#009AA4",
                                class: "mr-2 ml-2",
                                icon: "mdi-medical-bag",
                                variant: "tonal",
                                onClick: ($event) => asignacion(item)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps(props, {
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
                            text: "Asignacion de Servicio",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps(props, {
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
                                            createVNode(_component_v_spacer),
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "3" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.rut,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                      label: "Rut* (12345678-9)",
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
                                                      required: "",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: state.editedItem.apellidos,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                      label: "Apellidos*",
                                                      required: "",
                                                      type: "text",
                                                      clearable: "",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_text_field, {
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
                                                createVNode(_component_v_col, { cols: "3" }, {
                                                  default: withCtx(() => [
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
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_v_select, {
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
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_data_table, {
                                                      headers: state.horario.headers,
                                                      items: state.horario.items,
                                                      class: "elevation-1"
                                                    }, {
                                                      top: withCtx(() => [
                                                        createVNode(_component_v_toolbar, { flat: "" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_toolbar_title, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Disponibilidad horaria")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_divider, {
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
                                                        createVNode(_component_v_chip, {
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
                          text: "Asignacion de Servicio",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps(props, {
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
                color: "white",
                elevation: 6,
                class: "rounded-lg ma-2 pa-2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-h6 ma-2" }, toDisplayString(state.formTitle), 1),
                  createVNode(_component_v_divider, {
                    thickness: "4px",
                    color: "#009AA4"
                  }),
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
                                rules: state.validation.rutRules,
                                label: "Rut* (12345678-9)",
                                class: "ma-2",
                                type: "text",
                                variant: "underlined",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_select, {
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
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
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
                                          createVNode(_component_v_spacer),
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "3" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.rut,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.rut = $event,
                                                    label: "Rut* (12345678-9)",
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
                                                    required: "",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: state.editedItem.apellidos,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.apellidos = $event,
                                                    label: "Apellidos*",
                                                    required: "",
                                                    type: "text",
                                                    clearable: "",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_text_field, {
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
                                              createVNode(_component_v_col, { cols: "3" }, {
                                                default: withCtx(() => [
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
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_v_select, {
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
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_data_table, {
                                                    headers: state.horario.headers,
                                                    items: state.horario.items,
                                                    class: "elevation-1"
                                                  }, {
                                                    top: withCtx(() => [
                                                      createVNode(_component_v_toolbar, { flat: "" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_toolbar_title, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Disponibilidad horaria")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_divider, {
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
                                                      createVNode(_component_v_chip, {
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
                        text: "Asignacion de Servicio",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps(props, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/ProfesionalPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProfesionalPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/ProfesionalPage.vue"]]);
export {
  ProfesionalPage as default
};
//# sourceMappingURL=ProfesionalPage-DO6do8O4.js.map
