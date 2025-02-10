import { reactive, ref, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, toHandlers, createBlock, createCommentVNode, openBlock, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Activacion",
  __ssrInlineRender: true,
  props: {
    token: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    error: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const form = reactive({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const passwordStrength = computed(() => {
      const password = form.password;
      let strength = 0;
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[@$!%*?&]/.test(password);
      const minLength = password.length >= 12;
      if (hasLowercase) strength++;
      if (hasUppercase) strength++;
      if (hasNumber) strength++;
      if (hasSpecialChar) strength++;
      if (minLength) strength++;
      return {
        strength,
        message: strength < 3 ? "Contraseña débil" : strength < 5 ? "Contraseña moderada" : "Contraseña fuerte"
      };
    });
    const passwordRequirements = reactive([
      {
        text: "Mínimo 12 caracteres",
        met: computed(() => form.password.length >= 12)
      },
      {
        text: "Incluir mayúsculas y minúsculas",
        met: computed(
          () => /[A-Z]/.test(form.password) && /[a-z]/.test(form.password)
        )
      },
      {
        text: "Contener números",
        met: computed(() => /[0-9]/.test(form.password))
      },
      {
        text: "Usar caracteres especiales",
        met: computed(
          () => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(form.password)
        )
      }
    ]);
    const passwordStrengthColor = computed(() => {
      switch (passwordStrength.value.strength) {
        case 0:
          return "error";
        case 1:
          return "warning";
        case 2:
          return "warning";
        case 3:
          return "success";
        case 4:
          return "success";
        case 5:
          return "success";
        default:
          return "error";
      }
    });
    const validatePassword = () => {
      const password = form.password;
      let strength = 0;
      if (password.length >= 12) strength++;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumbers = /[0-9]/.test(password);
      const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
        password
      );
      if (hasUppercase && hasLowercase) strength++;
      if (hasNumbers && hasSpecialChars) strength++;
      passwordStrength.value = strength;
    };
    const passwordRules = [
      (v) => !!v || "La contraseña es requerida",
      (v) => v.length >= 12 || "La contraseña debe tener al menos 12 caracteres"
    ];
    const confirmPasswordRules = [
      (v) => !!v || "Confirmar contraseña es requerido",
      (v) => v === form.password || "Las contraseñas no coinciden"
    ];
    const isFormValid = computed(() => {
      return form.password === form.password_confirmation && form.password.length >= 12 && passwordStrength.value.strength >= 3;
    });
    const submit = () => {
      console.log(form);
      router.post(route("paciente.activacion.completar"), form, {
        onSuccess: () => {
          console.log("Cuenta activada exitosamente");
        },
        onError: (errors) => {
          console.error("Errores de activación:", errors);
          if (errors.password) {
            console.error(errors.password);
          }
          if (errors.token) {
            console.error(errors.token);
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_expand_transition = resolveComponent("v-expand-transition");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_content = resolveComponent("v-list-item-content");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        fluid: "",
        "fill-height": "",
        class: "login-container"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              align: "center",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "8",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, {
                          elevation: "12",
                          class: "pa-6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_title, { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h2 class="text-h4 font-weight-bold primary--text" data-v-1a12e9d6${_scopeId5}> Activación de Cuenta </h2>`);
                                  } else {
                                    return [
                                      createVNode("h2", { class: "text-h4 font-weight-bold primary--text" }, " Activación de Cuenta ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Configura tu contraseña para acceder a tu cuenta `);
                                  } else {
                                    return [
                                      createTextVNode(" Configura tu contraseña para acceder a tu cuenta ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (props.error) {
                                _push5(ssrRenderComponent(_component_v_alert, {
                                  type: "error",
                                  class: "mb-4",
                                  closable: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(props.error)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(props.error), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_v_form, {
                                onSubmit: submit,
                                ref: "activacionForm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.password,
                                      "onUpdate:modelValue": ($event) => form.password = $event,
                                      "append-icon": showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                      type: showPassword.value ? "text" : "password",
                                      "onClick:append": ($event) => showPassword.value = !showPassword.value,
                                      rules: passwordRules,
                                      label: "Contraseña",
                                      required: "",
                                      onInput: validatePassword
                                    }, {
                                      append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_tooltip, { bottom: "" }, {
                                            activator: withCtx(({ on, attrs }, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, mergeProps(attrs, toHandlers(on)), {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` mdi-help-circle `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" mdi-help-circle ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, mergeProps(attrs, toHandlers(on)), {
                                                    default: withCtx(() => [
                                                      createTextVNode(" mdi-help-circle ")
                                                    ]),
                                                    _: 2
                                                  }, 1040)
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div data-v-1a12e9d6${_scopeId7}><strong data-v-1a12e9d6${_scopeId7}>Requisitos de Contraseña:</strong><ul class="pl-4" data-v-1a12e9d6${_scopeId7}><li data-v-1a12e9d6${_scopeId7}>Mínimo 12 caracteres</li><li data-v-1a12e9d6${_scopeId7}> Incluir mayúsculas y minúsculas </li><li data-v-1a12e9d6${_scopeId7}>Contener números</li><li data-v-1a12e9d6${_scopeId7}>Usar caracteres especiales</li></ul><p class="mt-2 text-caption" data-v-1a12e9d6${_scopeId7}> Una contraseña fuerte protege tu información personal </p></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("strong", null, "Requisitos de Contraseña:"),
                                                    createVNode("ul", { class: "pl-4" }, [
                                                      createVNode("li", null, "Mínimo 12 caracteres"),
                                                      createVNode("li", null, " Incluir mayúsculas y minúsculas "),
                                                      createVNode("li", null, "Contener números"),
                                                      createVNode("li", null, "Usar caracteres especiales")
                                                    ]),
                                                    createVNode("p", { class: "mt-2 text-caption" }, " Una contraseña fuerte protege tu información personal ")
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_tooltip, { bottom: "" }, {
                                              activator: withCtx(({ on, attrs }) => [
                                                createVNode(_component_v_icon, mergeProps(attrs, toHandlers(on)), {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-help-circle ")
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ]),
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode("strong", null, "Requisitos de Contraseña:"),
                                                  createVNode("ul", { class: "pl-4" }, [
                                                    createVNode("li", null, "Mínimo 12 caracteres"),
                                                    createVNode("li", null, " Incluir mayúsculas y minúsculas "),
                                                    createVNode("li", null, "Contener números"),
                                                    createVNode("li", null, "Usar caracteres especiales")
                                                  ]),
                                                  createVNode("p", { class: "mt-2 text-caption" }, " Una contraseña fuerte protege tu información personal ")
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: form.password_confirmation,
                                      "onUpdate:modelValue": ($event) => form.password_confirmation = $event,
                                      "append-icon": showConfirmPassword.value ? "mdi-eye" : "mdi-eye-off",
                                      type: showConfirmPassword.value ? "text" : "password",
                                      "onClick:append": ($event) => showConfirmPassword.value = !showConfirmPassword.value,
                                      rules: confirmPasswordRules,
                                      label: "Confirmar Contraseña",
                                      required: "",
                                      clearable: "",
                                      onInput: validatePassword
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_progress_linear, {
                                      value: passwordStrength.value.strength * 20,
                                      color: passwordStrengthColor.value,
                                      height: "7",
                                      class: "my-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_expand_transition, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (passwordStrength.value.strength < 3) {
                                            _push7(ssrRenderComponent(_component_v_alert, {
                                              type: "warning",
                                              dense: "",
                                              outlined: "",
                                              class: "mb-4"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(passwordStrength.value.message)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(passwordStrength.value.message), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            passwordStrength.value.strength < 3 ? (openBlock(), createBlock(_component_v_alert, {
                                              key: 0,
                                              type: "warning",
                                              dense: "",
                                              outlined: "",
                                              class: "mb-4"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(passwordStrength.value.message), 1)
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (passwordStrength.value.strength < 5) {
                                      _push6(ssrRenderComponent(_component_v_list, {
                                        dense: "",
                                        class: "py-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(passwordRequirements, (requirement, index) => {
                                              _push7(ssrRenderComponent(_component_v_list_item, {
                                                key: index,
                                                color: requirement.met ? "success" : "error",
                                                class: "px-0"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_v_list_item_title, { class: "d-flex justify-space-between align-center" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(requirement.text)} `);
                                                                _push10(ssrRenderComponent(_component_v_icon, {
                                                                  color: requirement.met ? "success" : "error",
                                                                  class: "ml-2"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`${ssrInterpolate(requirement.met ? "mdi-check-circle" : "mdi-close-circle")}`);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(requirement.text) + " ", 1),
                                                                  createVNode(_component_v_icon, {
                                                                    color: requirement.met ? "success" : "error",
                                                                    class: "ml-2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["color"])
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_v_list_item_title, { class: "d-flex justify-space-between align-center" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(requirement.text) + " ", 1),
                                                                createVNode(_component_v_icon, {
                                                                  color: requirement.met ? "success" : "error",
                                                                  class: "ml-2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_list_item_content, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_list_item_title, { class: "d-flex justify-space-between align-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(requirement.text) + " ", 1),
                                                              createVNode(_component_v_icon, {
                                                                color: requirement.met ? "success" : "error",
                                                                class: "ml-2"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(passwordRequirements, (requirement, index) => {
                                                return openBlock(), createBlock(_component_v_list_item, {
                                                  key: index,
                                                  color: requirement.met ? "success" : "error",
                                                  class: "px-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_content, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_list_item_title, { class: "d-flex justify-space-between align-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(requirement.text) + " ", 1),
                                                            createVNode(_component_v_icon, {
                                                              color: requirement.met ? "success" : "error",
                                                              class: "ml-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(ssrRenderComponent(_component_v_card_actions, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_spacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            type: "submit",
                                            color: "primary",
                                            disabled: !isFormValid.value,
                                            block: "",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Activar Cuenta `);
                                              } else {
                                                return [
                                                  createTextVNode(" Activar Cuenta ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_spacer),
                                            createVNode(_component_v_btn, {
                                              type: "submit",
                                              color: "primary",
                                              disabled: !isFormValid.value,
                                              block: "",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Activar Cuenta ")
                                              ]),
                                              _: 1
                                            }, 8, ["disabled"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.password,
                                        "onUpdate:modelValue": ($event) => form.password = $event,
                                        "append-icon": showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                        type: showPassword.value ? "text" : "password",
                                        "onClick:append": ($event) => showPassword.value = !showPassword.value,
                                        rules: passwordRules,
                                        label: "Contraseña",
                                        required: "",
                                        onInput: validatePassword
                                      }, {
                                        append: withCtx(() => [
                                          createVNode(_component_v_tooltip, { bottom: "" }, {
                                            activator: withCtx(({ on, attrs }) => [
                                              createVNode(_component_v_icon, mergeProps(attrs, toHandlers(on)), {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-help-circle ")
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode("strong", null, "Requisitos de Contraseña:"),
                                                createVNode("ul", { class: "pl-4" }, [
                                                  createVNode("li", null, "Mínimo 12 caracteres"),
                                                  createVNode("li", null, " Incluir mayúsculas y minúsculas "),
                                                  createVNode("li", null, "Contener números"),
                                                  createVNode("li", null, "Usar caracteres especiales")
                                                ]),
                                                createVNode("p", { class: "mt-2 text-caption" }, " Una contraseña fuerte protege tu información personal ")
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: form.password_confirmation,
                                        "onUpdate:modelValue": ($event) => form.password_confirmation = $event,
                                        "append-icon": showConfirmPassword.value ? "mdi-eye" : "mdi-eye-off",
                                        type: showConfirmPassword.value ? "text" : "password",
                                        "onClick:append": ($event) => showConfirmPassword.value = !showConfirmPassword.value,
                                        rules: confirmPasswordRules,
                                        label: "Confirmar Contraseña",
                                        required: "",
                                        clearable: "",
                                        onInput: validatePassword
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                                      createVNode(_component_v_progress_linear, {
                                        value: passwordStrength.value.strength * 20,
                                        color: passwordStrengthColor.value,
                                        height: "7",
                                        class: "my-3"
                                      }, null, 8, ["value", "color"]),
                                      createVNode(_component_v_expand_transition, null, {
                                        default: withCtx(() => [
                                          passwordStrength.value.strength < 3 ? (openBlock(), createBlock(_component_v_alert, {
                                            key: 0,
                                            type: "warning",
                                            dense: "",
                                            outlined: "",
                                            class: "mb-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(passwordStrength.value.message), 1)
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      passwordStrength.value.strength < 5 ? (openBlock(), createBlock(_component_v_list, {
                                        key: 0,
                                        dense: "",
                                        class: "py-0"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(passwordRequirements, (requirement, index) => {
                                            return openBlock(), createBlock(_component_v_list_item, {
                                              key: index,
                                              color: requirement.met ? "success" : "error",
                                              class: "px-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_content, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_title, { class: "d-flex justify-space-between align-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(requirement.text) + " ", 1),
                                                        createVNode(_component_v_icon, {
                                                          color: requirement.met ? "success" : "error",
                                                          class: "ml-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_spacer),
                                          createVNode(_component_v_btn, {
                                            type: "submit",
                                            color: "primary",
                                            disabled: !isFormValid.value,
                                            block: "",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Activar Cuenta ")
                                            ]),
                                            _: 1
                                          }, 8, ["disabled"])
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
                                createVNode(_component_v_card_title, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h4 font-weight-bold primary--text" }, " Activación de Cuenta ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Configura tu contraseña para acceder a tu cuenta ")
                                  ]),
                                  _: 1
                                }),
                                props.error ? (openBlock(), createBlock(_component_v_alert, {
                                  key: 0,
                                  type: "error",
                                  class: "mb-4",
                                  closable: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(props.error), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_v_form, {
                                  onSubmit: withModifiers(submit, ["prevent"]),
                                  ref: "activacionForm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.password,
                                      "onUpdate:modelValue": ($event) => form.password = $event,
                                      "append-icon": showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                      type: showPassword.value ? "text" : "password",
                                      "onClick:append": ($event) => showPassword.value = !showPassword.value,
                                      rules: passwordRules,
                                      label: "Contraseña",
                                      required: "",
                                      onInput: validatePassword
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(_component_v_tooltip, { bottom: "" }, {
                                          activator: withCtx(({ on, attrs }) => [
                                            createVNode(_component_v_icon, mergeProps(attrs, toHandlers(on)), {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-help-circle ")
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("strong", null, "Requisitos de Contraseña:"),
                                              createVNode("ul", { class: "pl-4" }, [
                                                createVNode("li", null, "Mínimo 12 caracteres"),
                                                createVNode("li", null, " Incluir mayúsculas y minúsculas "),
                                                createVNode("li", null, "Contener números"),
                                                createVNode("li", null, "Usar caracteres especiales")
                                              ]),
                                              createVNode("p", { class: "mt-2 text-caption" }, " Una contraseña fuerte protege tu información personal ")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.password_confirmation,
                                      "onUpdate:modelValue": ($event) => form.password_confirmation = $event,
                                      "append-icon": showConfirmPassword.value ? "mdi-eye" : "mdi-eye-off",
                                      type: showConfirmPassword.value ? "text" : "password",
                                      "onClick:append": ($event) => showConfirmPassword.value = !showConfirmPassword.value,
                                      rules: confirmPasswordRules,
                                      label: "Confirmar Contraseña",
                                      required: "",
                                      clearable: "",
                                      onInput: validatePassword
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                                    createVNode(_component_v_progress_linear, {
                                      value: passwordStrength.value.strength * 20,
                                      color: passwordStrengthColor.value,
                                      height: "7",
                                      class: "my-3"
                                    }, null, 8, ["value", "color"]),
                                    createVNode(_component_v_expand_transition, null, {
                                      default: withCtx(() => [
                                        passwordStrength.value.strength < 3 ? (openBlock(), createBlock(_component_v_alert, {
                                          key: 0,
                                          type: "warning",
                                          dense: "",
                                          outlined: "",
                                          class: "mb-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(passwordStrength.value.message), 1)
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    passwordStrength.value.strength < 5 ? (openBlock(), createBlock(_component_v_list, {
                                      key: 0,
                                      dense: "",
                                      class: "py-0"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(passwordRequirements, (requirement, index) => {
                                          return openBlock(), createBlock(_component_v_list_item, {
                                            key: index,
                                            color: requirement.met ? "success" : "error",
                                            class: "px-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_title, { class: "d-flex justify-space-between align-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(requirement.text) + " ", 1),
                                                      createVNode(_component_v_icon, {
                                                        color: requirement.met ? "success" : "error",
                                                        class: "ml-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_v_card_actions, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_spacer),
                                        createVNode(_component_v_btn, {
                                          type: "submit",
                                          color: "primary",
                                          disabled: !isFormValid.value,
                                          block: "",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Activar Cuenta ")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 512)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, {
                            elevation: "12",
                            class: "pa-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h4 font-weight-bold primary--text" }, " Activación de Cuenta ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Configura tu contraseña para acceder a tu cuenta ")
                                ]),
                                _: 1
                              }),
                              props.error ? (openBlock(), createBlock(_component_v_alert, {
                                key: 0,
                                type: "error",
                                class: "mb-4",
                                closable: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(props.error), 1)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_v_form, {
                                onSubmit: withModifiers(submit, ["prevent"]),
                                ref: "activacionForm"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.password,
                                    "onUpdate:modelValue": ($event) => form.password = $event,
                                    "append-icon": showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                    type: showPassword.value ? "text" : "password",
                                    "onClick:append": ($event) => showPassword.value = !showPassword.value,
                                    rules: passwordRules,
                                    label: "Contraseña",
                                    required: "",
                                    onInput: validatePassword
                                  }, {
                                    append: withCtx(() => [
                                      createVNode(_component_v_tooltip, { bottom: "" }, {
                                        activator: withCtx(({ on, attrs }) => [
                                          createVNode(_component_v_icon, mergeProps(attrs, toHandlers(on)), {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi-help-circle ")
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Requisitos de Contraseña:"),
                                            createVNode("ul", { class: "pl-4" }, [
                                              createVNode("li", null, "Mínimo 12 caracteres"),
                                              createVNode("li", null, " Incluir mayúsculas y minúsculas "),
                                              createVNode("li", null, "Contener números"),
                                              createVNode("li", null, "Usar caracteres especiales")
                                            ]),
                                            createVNode("p", { class: "mt-2 text-caption" }, " Una contraseña fuerte protege tu información personal ")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: form.password_confirmation,
                                    "onUpdate:modelValue": ($event) => form.password_confirmation = $event,
                                    "append-icon": showConfirmPassword.value ? "mdi-eye" : "mdi-eye-off",
                                    type: showConfirmPassword.value ? "text" : "password",
                                    "onClick:append": ($event) => showConfirmPassword.value = !showConfirmPassword.value,
                                    rules: confirmPasswordRules,
                                    label: "Confirmar Contraseña",
                                    required: "",
                                    clearable: "",
                                    onInput: validatePassword
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                                  createVNode(_component_v_progress_linear, {
                                    value: passwordStrength.value.strength * 20,
                                    color: passwordStrengthColor.value,
                                    height: "7",
                                    class: "my-3"
                                  }, null, 8, ["value", "color"]),
                                  createVNode(_component_v_expand_transition, null, {
                                    default: withCtx(() => [
                                      passwordStrength.value.strength < 3 ? (openBlock(), createBlock(_component_v_alert, {
                                        key: 0,
                                        type: "warning",
                                        dense: "",
                                        outlined: "",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(passwordStrength.value.message), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  passwordStrength.value.strength < 5 ? (openBlock(), createBlock(_component_v_list, {
                                    key: 0,
                                    dense: "",
                                    class: "py-0"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(passwordRequirements, (requirement, index) => {
                                        return openBlock(), createBlock(_component_v_list_item, {
                                          key: index,
                                          color: requirement.met ? "success" : "error",
                                          class: "px-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, { class: "d-flex justify-space-between align-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(requirement.text) + " ", 1),
                                                    createVNode(_component_v_icon, {
                                                      color: requirement.met ? "success" : "error",
                                                      class: "ml-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_btn, {
                                        type: "submit",
                                        color: "primary",
                                        disabled: !isFormValid.value,
                                        block: "",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Activar Cuenta ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 512)
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
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "8",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          elevation: "12",
                          class: "pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "text-center" }, {
                              default: withCtx(() => [
                                createVNode("h2", { class: "text-h4 font-weight-bold primary--text" }, " Activación de Cuenta ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                              default: withCtx(() => [
                                createTextVNode(" Configura tu contraseña para acceder a tu cuenta ")
                              ]),
                              _: 1
                            }),
                            props.error ? (openBlock(), createBlock(_component_v_alert, {
                              key: 0,
                              type: "error",
                              class: "mb-4",
                              closable: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(props.error), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_v_form, {
                              onSubmit: withModifiers(submit, ["prevent"]),
                              ref: "activacionForm"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: form.password,
                                  "onUpdate:modelValue": ($event) => form.password = $event,
                                  "append-icon": showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                  type: showPassword.value ? "text" : "password",
                                  "onClick:append": ($event) => showPassword.value = !showPassword.value,
                                  rules: passwordRules,
                                  label: "Contraseña",
                                  required: "",
                                  onInput: validatePassword
                                }, {
                                  append: withCtx(() => [
                                    createVNode(_component_v_tooltip, { bottom: "" }, {
                                      activator: withCtx(({ on, attrs }) => [
                                        createVNode(_component_v_icon, mergeProps(attrs, toHandlers(on)), {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi-help-circle ")
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Requisitos de Contraseña:"),
                                          createVNode("ul", { class: "pl-4" }, [
                                            createVNode("li", null, "Mínimo 12 caracteres"),
                                            createVNode("li", null, " Incluir mayúsculas y minúsculas "),
                                            createVNode("li", null, "Contener números"),
                                            createVNode("li", null, "Usar caracteres especiales")
                                          ]),
                                          createVNode("p", { class: "mt-2 text-caption" }, " Una contraseña fuerte protege tu información personal ")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: form.password_confirmation,
                                  "onUpdate:modelValue": ($event) => form.password_confirmation = $event,
                                  "append-icon": showConfirmPassword.value ? "mdi-eye" : "mdi-eye-off",
                                  type: showConfirmPassword.value ? "text" : "password",
                                  "onClick:append": ($event) => showConfirmPassword.value = !showConfirmPassword.value,
                                  rules: confirmPasswordRules,
                                  label: "Confirmar Contraseña",
                                  required: "",
                                  clearable: "",
                                  onInput: validatePassword
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                                createVNode(_component_v_progress_linear, {
                                  value: passwordStrength.value.strength * 20,
                                  color: passwordStrengthColor.value,
                                  height: "7",
                                  class: "my-3"
                                }, null, 8, ["value", "color"]),
                                createVNode(_component_v_expand_transition, null, {
                                  default: withCtx(() => [
                                    passwordStrength.value.strength < 3 ? (openBlock(), createBlock(_component_v_alert, {
                                      key: 0,
                                      type: "warning",
                                      dense: "",
                                      outlined: "",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(passwordStrength.value.message), 1)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                passwordStrength.value.strength < 5 ? (openBlock(), createBlock(_component_v_list, {
                                  key: 0,
                                  dense: "",
                                  class: "py-0"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(passwordRequirements, (requirement, index) => {
                                      return openBlock(), createBlock(_component_v_list_item, {
                                        key: index,
                                        color: requirement.met ? "success" : "error",
                                        class: "px-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, { class: "d-flex justify-space-between align-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(requirement.text) + " ", 1),
                                                  createVNode(_component_v_icon, {
                                                    color: requirement.met ? "success" : "error",
                                                    class: "ml-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_btn, {
                                      type: "submit",
                                      color: "primary",
                                      disabled: !isFormValid.value,
                                      block: "",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Activar Cuenta ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512)
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
          } else {
            return [
              createVNode(_component_v_row, {
                align: "center",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "8",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        elevation: "12",
                        class: "pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-h4 font-weight-bold primary--text" }, " Activación de Cuenta ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                            default: withCtx(() => [
                              createTextVNode(" Configura tu contraseña para acceder a tu cuenta ")
                            ]),
                            _: 1
                          }),
                          props.error ? (openBlock(), createBlock(_component_v_alert, {
                            key: 0,
                            type: "error",
                            class: "mb-4",
                            closable: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.error), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_v_form, {
                            onSubmit: withModifiers(submit, ["prevent"]),
                            ref: "activacionForm"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: form.password,
                                "onUpdate:modelValue": ($event) => form.password = $event,
                                "append-icon": showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                type: showPassword.value ? "text" : "password",
                                "onClick:append": ($event) => showPassword.value = !showPassword.value,
                                rules: passwordRules,
                                label: "Contraseña",
                                required: "",
                                onInput: validatePassword
                              }, {
                                append: withCtx(() => [
                                  createVNode(_component_v_tooltip, { bottom: "" }, {
                                    activator: withCtx(({ on, attrs }) => [
                                      createVNode(_component_v_icon, mergeProps(attrs, toHandlers(on)), {
                                        default: withCtx(() => [
                                          createTextVNode(" mdi-help-circle ")
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Requisitos de Contraseña:"),
                                        createVNode("ul", { class: "pl-4" }, [
                                          createVNode("li", null, "Mínimo 12 caracteres"),
                                          createVNode("li", null, " Incluir mayúsculas y minúsculas "),
                                          createVNode("li", null, "Contener números"),
                                          createVNode("li", null, "Usar caracteres especiales")
                                        ]),
                                        createVNode("p", { class: "mt-2 text-caption" }, " Una contraseña fuerte protege tu información personal ")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                              createVNode(_component_v_text_field, {
                                modelValue: form.password_confirmation,
                                "onUpdate:modelValue": ($event) => form.password_confirmation = $event,
                                "append-icon": showConfirmPassword.value ? "mdi-eye" : "mdi-eye-off",
                                type: showConfirmPassword.value ? "text" : "password",
                                "onClick:append": ($event) => showConfirmPassword.value = !showConfirmPassword.value,
                                rules: confirmPasswordRules,
                                label: "Confirmar Contraseña",
                                required: "",
                                clearable: "",
                                onInput: validatePassword
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "type", "onClick:append"]),
                              createVNode(_component_v_progress_linear, {
                                value: passwordStrength.value.strength * 20,
                                color: passwordStrengthColor.value,
                                height: "7",
                                class: "my-3"
                              }, null, 8, ["value", "color"]),
                              createVNode(_component_v_expand_transition, null, {
                                default: withCtx(() => [
                                  passwordStrength.value.strength < 3 ? (openBlock(), createBlock(_component_v_alert, {
                                    key: 0,
                                    type: "warning",
                                    dense: "",
                                    outlined: "",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(passwordStrength.value.message), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              passwordStrength.value.strength < 5 ? (openBlock(), createBlock(_component_v_list, {
                                key: 0,
                                dense: "",
                                class: "py-0"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(passwordRequirements, (requirement, index) => {
                                    return openBlock(), createBlock(_component_v_list_item, {
                                      key: index,
                                      color: requirement.met ? "success" : "error",
                                      class: "px-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, { class: "d-flex justify-space-between align-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(requirement.text) + " ", 1),
                                                createVNode(_component_v_icon, {
                                                  color: requirement.met ? "success" : "error",
                                                  class: "ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(requirement.met ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]);
                                  }), 128))
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_btn, {
                                    type: "submit",
                                    color: "primary",
                                    disabled: !isFormValid.value,
                                    block: "",
                                    variant: "tonal"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Activar Cuenta ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Paciente/Activacion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Activacion = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a12e9d6"], ["__file", "/home/omar/www/esalud/resources/js/Pages/Paciente/Activacion.vue"]]);
export {
  Activacion as default
};
//# sourceMappingURL=Activacion-CLnI68oV.js.map
