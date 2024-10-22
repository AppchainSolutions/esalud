import { reactive, computed, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useDataStore } from "./store-CHGALank.js";
import { c as closeForm, h as handleShowItem, o as openToCreate, a as handleStoreItem, b as openToEdit, d as handleEditItem, e as handleRemoveItem } from "./helper-LjE-4-65.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText, VCardActions } from "vuetify/lib/components/VCard/index.mjs";
import { VDataTable } from "vuetify/lib/components/VDataTable/index.mjs";
import { VDialog } from "vuetify/lib/components/VDialog/index.mjs";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VContainer, VSpacer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import { VToolbar, VToolbarTitle } from "vuetify/lib/components/VToolbar/index.mjs";
import { VTooltip } from "vuetify/lib/components/VTooltip/index.mjs";
import "pinia";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
import "vue-logger-plugin";
const _sfc_main = {
  __name: "VacunaPage",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDataStore();
    const state = reactive({
      headers: [
        {
          title: "Vacuna",
          align: "start",
          sortable: true,
          key: "vacuna"
        },
        {
          title: "Fecha de la vacuna (escriba una fecha aproximada)",
          align: "start",
          sortable: true,
          key: "fecha_vacuna"
        },
        {
          title: "Tipo de vacuna",
          align: "start",
          sortable: true,
          key: "tipo_vacuna"
        },
        { title: "Comentario", key: "comentario", sortable: false },
        { title: "Acciones", align: "center", key: "actions" }
      ],
      editedItem: {
        paciente_id: null,
        vacuna: null,
        fecha_vacuna: null,
        tipo_vacuna: null,
        comentario: null
      },
      defaultItem: {
        paciente_id: null,
        vacuna: null,
        fecha_vacuna: null,
        tipo_vacuna: null,
        comentario: null
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
      formTitle: "Vacunas",
      formCrear: "Nueva Vacuna",
      formEdit: "Editar Vacuna",
      urlShow: "/vacuna/show",
      urlUpdate: "/vacuna/update",
      urlDelete: "/vacuna/delete",
      urlStore: "/vacuna"
    });
    const editedItemTitle = computed(
      () => state.editedIndex === -1 ? state.formCrear : state.formEdit
    );
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
      await handleStoreItem(state);
      closeForm(state);
    };
    function openFormEdit(item) {
      openToEdit(state, item);
    }
    const update = async () => {
      await handleEditItem(state);
      closeForm(state);
    };
    const remove = async (item) => {
      await handleRemoveItem(state, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDataTable, {
              headers: state.headers,
              items: state.tableItems
            }, {
              top: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VToolbar, { flat: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VToolbarTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(state.formTitle)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(state.formTitle), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, {
                          class: "mx-4",
                          inset: "",
                          vertical: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDialog, {
                          modelValue: state.dialog,
                          "onUpdate:modelValue": ($event) => state.dialog = $event
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-update",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: handleShow
                              }, null, _parent5, _scopeId4));
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
                                  icon: "mdi-update",
                                  variant: "tonal",
                                  class: "ma-2",
                                  color: "#009AA4",
                                  onClick: handleShow
                                }),
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
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<form${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VCardTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="text-h5"${_scopeId6}>${ssrInterpolate(editedItemTitle.value)}</span>`);
                                        } else {
                                          return [
                                            createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VContainer, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.vacuna,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                              label: "Vacuna",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.fecha_vacuna,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                              label: "Fecha aprox.",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.tipo_vacuna,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                              label: "Tipo de vacuna",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: state.editedItem.comentario,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                              label: "Comentario",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.vacuna,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                                label: "Vacuna",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.fecha_vacuna,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                                label: "Fecha aprox.",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.tipo_vacuna,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                                label: "Tipo de vacuna",
                                                                type: "text",
                                                                variant: "underlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                              createVNode(VTextField, {
                                                                modelValue: state.editedItem.comentario,
                                                                "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                                label: "Comentario",
                                                                type: "text",
                                                                variant: "underlined"
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
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.vacuna,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                              label: "Vacuna",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.fecha_vacuna,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                              label: "Fecha aprox.",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.tipo_vacuna,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                              label: "Tipo de vacuna",
                                                              type: "text",
                                                              variant: "underlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VTextField, {
                                                              modelValue: state.editedItem.comentario,
                                                              "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                              label: "Comentario",
                                                              type: "text",
                                                              variant: "underlined"
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
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.vacuna,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                            label: "Vacuna",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.fecha_vacuna,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                            label: "Fecha aprox.",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.tipo_vacuna,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                            label: "Tipo de vacuna",
                                                            type: "text",
                                                            variant: "underlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VTextField, {
                                                            modelValue: state.editedItem.comentario,
                                                            "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                            label: "Comentario",
                                                            type: "text",
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VContainer, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.vacuna,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                          label: "Vacuna",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.fecha_vacuna,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                          label: "Fecha aprox.",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.tipo_vacuna,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                          label: "Tipo de vacuna",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.comentario,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                          label: "Comentario",
                                                          type: "text",
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardActions, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            onClick: close
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Cancelar `);
                                              } else {
                                                return [
                                                  createTextVNode(" Cancelar ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            onClick: storeItems
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Guardar `);
                                              } else {
                                                return [
                                                  createTextVNode(" Guardar ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSpacer),
                                            createVNode(VBtn, {
                                              color: "blue-darken-1",
                                              variant: "tonal",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancelar ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "blue-darken-1",
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
                                    }, _parent6, _scopeId5));
                                    _push6(`</form>`);
                                  } else {
                                    return [
                                      createVNode("form", {
                                        onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                      }, [
                                        createVNode(VCardTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createVNode(VContainer, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.vacuna,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                          label: "Vacuna",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.fecha_vacuna,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                          label: "Fecha aprox.",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.tipo_vacuna,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                          label: "Tipo de vacuna",
                                                          type: "text",
                                                          variant: "underlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VTextField, {
                                                          modelValue: state.editedItem.comentario,
                                                          "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                          label: "Comentario",
                                                          type: "text",
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
                                        createVNode(VCardActions, null, {
                                          default: withCtx(() => [
                                            createVNode(VSpacer),
                                            createVNode(VBtn, {
                                              color: "blue-darken-1",
                                              variant: "tonal",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancelar ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "blue-darken-1",
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
                                      ], 40, ["onSubmit"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, null, {
                                  default: withCtx(() => [
                                    createVNode("form", {
                                      onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                    }, [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(VContainer, null, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.vacuna,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                        label: "Vacuna",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.fecha_vacuna,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                        label: "Fecha aprox.",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.tipo_vacuna,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                        label: "Tipo de vacuna",
                                                        type: "text",
                                                        variant: "underlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VTextField, {
                                                        modelValue: state.editedItem.comentario,
                                                        "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                        label: "Comentario",
                                                        type: "text",
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
                                      createVNode(VCardActions, null, {
                                        default: withCtx(() => [
                                          createVNode(VSpacer),
                                          createVNode(VBtn, {
                                            color: "blue-darken-1",
                                            variant: "tonal",
                                            onClick: close
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancelar ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "blue-darken-1",
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
                                    ], 40, ["onSubmit"])
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
                          createVNode(VToolbarTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(state.formTitle), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, {
                            class: "mx-4",
                            inset: "",
                            vertical: ""
                          }),
                          createVNode(VSpacer),
                          createVNode(VDialog, {
                            modelValue: state.dialog,
                            "onUpdate:modelValue": ($event) => state.dialog = $event
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, {
                                icon: "mdi-update",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: handleShow
                              }),
                              createVNode(VBtn, {
                                icon: "mdi-account-multiple-plus",
                                variant: "tonal",
                                class: "ma-2",
                                color: "#009AA4",
                                onClick: openFormCreate
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VCard, null, {
                                default: withCtx(() => [
                                  createVNode("form", {
                                    onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                  }, [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(VContainer, null, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.vacuna,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                      label: "Vacuna",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.fecha_vacuna,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                      label: "Fecha aprox.",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.tipo_vacuna,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                      label: "Tipo de vacuna",
                                                      type: "text",
                                                      variant: "underlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VTextField, {
                                                      modelValue: state.editedItem.comentario,
                                                      "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                      label: "Comentario",
                                                      type: "text",
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
                                    createVNode(VCardActions, null, {
                                      default: withCtx(() => [
                                        createVNode(VSpacer),
                                        createVNode(VBtn, {
                                          color: "blue-darken-1",
                                          variant: "tonal",
                                          onClick: close
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancelar ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "blue-darken-1",
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
                                  ], 40, ["onSubmit"])
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
                    createVNode(VToolbar, { flat: "" }, {
                      default: withCtx(() => [
                        createVNode(VToolbarTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(state.formTitle), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, {
                          class: "mx-4",
                          inset: "",
                          vertical: ""
                        }),
                        createVNode(VSpacer),
                        createVNode(VDialog, {
                          modelValue: state.dialog,
                          "onUpdate:modelValue": ($event) => state.dialog = $event
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, {
                              icon: "mdi-update",
                              variant: "tonal",
                              class: "ma-2",
                              color: "#009AA4",
                              onClick: handleShow
                            }),
                            createVNode(VBtn, {
                              icon: "mdi-account-multiple-plus",
                              variant: "tonal",
                              class: "ma-2",
                              color: "#009AA4",
                              onClick: openFormCreate
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VCard, null, {
                              default: withCtx(() => [
                                createVNode("form", {
                                  onSubmit: withModifiers(_ctx.submit, ["prevent"])
                                }, [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VContainer, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.vacuna,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                    label: "Vacuna",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.fecha_vacuna,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                    label: "Fecha aprox.",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.tipo_vacuna,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                    label: "Tipo de vacuna",
                                                    type: "text",
                                                    variant: "underlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextField, {
                                                    modelValue: state.editedItem.comentario,
                                                    "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                    label: "Comentario",
                                                    type: "text",
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
                                  createVNode(VCardActions, null, {
                                    default: withCtx(() => [
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        color: "blue-darken-1",
                                        variant: "tonal",
                                        onClick: close
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancelar ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "blue-darken-1",
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
                                ], 40, ["onSubmit"])
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
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTooltip, {
                    text: "Editar",
                    location: "top"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                          density: "compact",
                          class: "mr-2 ml-2",
                          color: "#009AA4",
                          variant: "tonal",
                          icon: "mdi-account-edit",
                          onClick: ($event) => openFormEdit(item)
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, mergeProps(props, {
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTooltip, {
                    text: "Eliminar",
                    location: "top"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                          density: "compact",
                          class: "mr-2 ml-2",
                          color: "#009AA4",
                          variant: "tonal",
                          icon: "mdi-delete",
                          onClick: ($event) => remove(item)
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, mergeProps(props, {
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTooltip, {
                      text: "Editar",
                      location: "top"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VBtn, mergeProps(props, {
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
                          icon: "mdi-delete",
                          onClick: ($event) => remove(item)
                        }), null, 16, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    onClick: handleShow
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Iniciar `);
                      } else {
                        return [
                          createTextVNode(" Iniciar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VDataTable, {
                headers: state.headers,
                items: state.tableItems
              }, {
                top: withCtx(() => [
                  createVNode(VToolbar, { flat: "" }, {
                    default: withCtx(() => [
                      createVNode(VToolbarTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(state.formTitle), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, {
                        class: "mx-4",
                        inset: "",
                        vertical: ""
                      }),
                      createVNode(VSpacer),
                      createVNode(VDialog, {
                        modelValue: state.dialog,
                        "onUpdate:modelValue": ($event) => state.dialog = $event
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, {
                            icon: "mdi-update",
                            variant: "tonal",
                            class: "ma-2",
                            color: "#009AA4",
                            onClick: handleShow
                          }),
                          createVNode(VBtn, {
                            icon: "mdi-account-multiple-plus",
                            variant: "tonal",
                            class: "ma-2",
                            color: "#009AA4",
                            onClick: openFormCreate
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(VCard, null, {
                            default: withCtx(() => [
                              createVNode("form", {
                                onSubmit: withModifiers(_ctx.submit, ["prevent"])
                              }, [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-h5" }, toDisplayString(editedItemTitle.value), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VContainer, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.vacuna,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.vacuna = $event,
                                                  label: "Vacuna",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.fecha_vacuna,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.fecha_vacuna = $event,
                                                  label: "Fecha aprox.",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.tipo_vacuna,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.tipo_vacuna = $event,
                                                  label: "Tipo de vacuna",
                                                  type: "text",
                                                  variant: "underlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  modelValue: state.editedItem.comentario,
                                                  "onUpdate:modelValue": ($event) => state.editedItem.comentario = $event,
                                                  label: "Comentario",
                                                  type: "text",
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
                                createVNode(VCardActions, null, {
                                  default: withCtx(() => [
                                    createVNode(VSpacer),
                                    createVNode(VBtn, {
                                      color: "blue-darken-1",
                                      variant: "tonal",
                                      onClick: close
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Cancelar ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "blue-darken-1",
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
                              ], 40, ["onSubmit"])
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
                  createVNode(VTooltip, {
                    text: "Editar",
                    location: "top"
                  }, {
                    activator: withCtx(({ props }) => [
                      createVNode(VBtn, mergeProps(props, {
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
                        icon: "mdi-delete",
                        onClick: ($event) => remove(item)
                      }), null, 16, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                "no-data": withCtx(() => [
                  createVNode(VBtn, {
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/VacunaPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Vacuna = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/VacunaPage.vue"]]);
export {
  Vacuna as default
};
//# sourceMappingURL=VacunaPage-CN5dHIJ2.js.map
