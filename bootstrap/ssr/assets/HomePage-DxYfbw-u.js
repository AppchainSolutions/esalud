import { resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, unref, createBlock, createCommentVNode, openBlock, Fragment, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-9lGv6sW_.js";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./logo-DLUxz0ei.js";
import "vue-loading-overlay";
const _sfc_main = {
  __name: "HomePage",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      default: null
    },
    // Mensajes de estado
    status: {
      type: String,
      default: null
    },
    error: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container mx-auto px-4 py-8"${_scopeId}>`);
            if (props.status) {
              _push2(ssrRenderComponent(_component_v_alert, {
                type: "success",
                variant: "tonal",
                closable: "",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(props.status)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(props.status), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (props.error) {
              _push2(ssrRenderComponent(_component_v_alert, {
                type: "error",
                variant: "tonal",
                closable: "",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(props.error)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(props.error), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="text-3xl font-bold mb-6"${_scopeId}>Bienvenido a eSalud</h1>`);
            if (__props.user) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}><div class="bg-white shadow-md rounded-lg p-6"${_scopeId}><nav${_scopeId}>`);
              if (__props.user.rol === "paciente") {
                _push2(`<!--[--><div class="grid grid-cols-[1fr,2fr] gap-6"${_scopeId}><div${_scopeId}><h2 class="text-xl font-semibold mb-4"${_scopeId}> Información General de Salud: </h2>`);
                _push2(ssrRenderComponent(_component_v_row, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_v_col, { cols: "2" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<img src="https://picsum.photos/id/11/200/300" alt="" class="w-full object-cover rounded-lg shadow-md"${_scopeId3}>`);
                          } else {
                            return [
                              createVNode("img", {
                                src: "https://picsum.photos/id/11/200/300",
                                alt: "",
                                class: "w-full object-cover rounded-lg shadow-md"
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_v_col, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<p${_scopeId3}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. </p><p${_scopeId3}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. </p><p${_scopeId3}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. </p>`);
                          } else {
                            return [
                              createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                              createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                              createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_v_col, { cols: "2" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: "https://picsum.photos/id/11/200/300",
                              alt: "",
                              class: "w-full object-cover rounded-lg shadow-md"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, null, {
                          default: withCtx(() => [
                            createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                            createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                            createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div><h2 class="text-xl font-semibold mb-4 mt-6"${_scopeId}> Fechas importantes </h2><ul${_scopeId}><li${_scopeId}>Próximo Control 1</li><li${_scopeId}>Exámenes próximos a vencer</li></ul><br${_scopeId}><div class="bg-white shadow-md rounded-lg p-6"${_scopeId}><h2 class="text-xl font-semibold mb-4"${_scopeId}> Notificaciones importantes </h2><p class="text-gray-600"${_scopeId}> No hay notificaciones nuevas. </p></div><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.user.rol === "admin") {
                _push2(`<!--[--><div class="grid grid-cols-[1fr,2fr] gap-6"${_scopeId}><div${_scopeId}><h2 class="text-xl font-semibold mb-4"${_scopeId}> Información General: </h2>`);
                _push2(ssrRenderComponent(_component_v_row, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_v_col, { cols: "2" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<img src="https://picsum.photos/seed/picsum/200/300" alt="" class="w-full object-cover rounded-lg shadow-md"${_scopeId3}>`);
                          } else {
                            return [
                              createVNode("img", {
                                src: "https://picsum.photos/seed/picsum/200/300",
                                alt: "",
                                class: "w-full object-cover rounded-lg shadow-md"
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_v_col, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<p${_scopeId3}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. </p><p${_scopeId3}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. </p><p${_scopeId3}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. </p>`);
                          } else {
                            return [
                              createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                              createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                              createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_v_col, { cols: "2" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: "https://picsum.photos/seed/picsum/200/300",
                              alt: "",
                              class: "w-full object-cover rounded-lg shadow-md"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, null, {
                          default: withCtx(() => [
                            createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                            createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                            createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div><h2 class="text-xl font-semibold mb-4 mt-6"${_scopeId}> Mis Tareas </h2><ul${_scopeId}><li${_scopeId}>tarea 1</li><li${_scopeId}>tarea 2</li></ul><br${_scopeId}><div class="bg-white shadow-md rounded-lg p-6"${_scopeId}><h2 class="text-xl font-semibold mb-4"${_scopeId}> Notificaciones importantes </h2><p class="text-gray-600"${_scopeId}> No hay notificaciones nuevas. </p></div><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.user.rol === "staff") {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("staff.dashboard"),
                  class: "block py-2 px-4 hover:bg-gray-100 rounded"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Panel de Staff `);
                    } else {
                      return [
                        createTextVNode(" Panel de Staff ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</nav></div></div>`);
            } else {
              _push2(`<div class="text-center"${_scopeId}><p class="text-xl mb-4"${_scopeId}> Bienvenido a la plataforma de gestión de salud </p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("login"),
                class: "bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Iniciar Sesión `);
                  } else {
                    return [
                      createTextVNode(" Iniciar Sesión ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "container mx-auto px-4 py-8" }, [
                props.status ? (openBlock(), createBlock(_component_v_alert, {
                  key: 0,
                  type: "success",
                  variant: "tonal",
                  closable: "",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.status), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                props.error ? (openBlock(), createBlock(_component_v_alert, {
                  key: 1,
                  type: "error",
                  variant: "tonal",
                  closable: "",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.error), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode("h1", { class: "text-3xl font-bold mb-6" }, "Bienvenido a eSalud"),
                __props.user ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "grid grid-cols-1 md:grid-cols-3 gap-6"
                }, [
                  createVNode("div", { class: "bg-white shadow-md rounded-lg p-6" }, [
                    createVNode("nav", null, [
                      __props.user.rol === "paciente" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("div", { class: "grid grid-cols-[1fr,2fr] gap-6" }, [
                          createVNode("div", null, [
                            createVNode("h2", { class: "text-xl font-semibold mb-4" }, " Información General de Salud: "),
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: "https://picsum.photos/id/11/200/300",
                                      alt: "",
                                      class: "w-full object-cover rounded-lg shadow-md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                                    createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                                    createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("h2", { class: "text-xl font-semibold mb-4 mt-6" }, " Fechas importantes "),
                        createVNode("ul", null, [
                          createVNode("li", null, "Próximo Control 1"),
                          createVNode("li", null, "Exámenes próximos a vencer")
                        ]),
                        createVNode("br"),
                        createVNode("div", { class: "bg-white shadow-md rounded-lg p-6" }, [
                          createVNode("h2", { class: "text-xl font-semibold mb-4" }, " Notificaciones importantes "),
                          createVNode("p", { class: "text-gray-600" }, " No hay notificaciones nuevas. ")
                        ])
                      ], 64)) : createCommentVNode("", true),
                      __props.user.rol === "admin" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createVNode("div", { class: "grid grid-cols-[1fr,2fr] gap-6" }, [
                          createVNode("div", null, [
                            createVNode("h2", { class: "text-xl font-semibold mb-4" }, " Información General: "),
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: "https://picsum.photos/seed/picsum/200/300",
                                      alt: "",
                                      class: "w-full object-cover rounded-lg shadow-md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                                    createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. "),
                                    createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. Explicabo voluptate dolorum, consectetur repellendus nesciunt aut enim, accusamus architecto mollitia maxime sapiente perspiciatis, officiis nisi ratione reprehenderit cumque. Dolorum, quaerat. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("h2", { class: "text-xl font-semibold mb-4 mt-6" }, " Mis Tareas "),
                        createVNode("ul", null, [
                          createVNode("li", null, "tarea 1"),
                          createVNode("li", null, "tarea 2")
                        ]),
                        createVNode("br"),
                        createVNode("div", { class: "bg-white shadow-md rounded-lg p-6" }, [
                          createVNode("h2", { class: "text-xl font-semibold mb-4" }, " Notificaciones importantes "),
                          createVNode("p", { class: "text-gray-600" }, " No hay notificaciones nuevas. ")
                        ])
                      ], 64)) : createCommentVNode("", true),
                      __props.user.rol === "staff" ? (openBlock(), createBlock(unref(Link), {
                        key: 2,
                        href: _ctx.route("staff.dashboard"),
                        class: "block py-2 px-4 hover:bg-gray-100 rounded"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Panel de Staff ")
                        ]),
                        _: 1
                      }, 8, ["href"])) : createCommentVNode("", true)
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "text-center"
                }, [
                  createVNode("p", { class: "text-xl mb-4" }, " Bienvenido a la plataforma de gestión de salud "),
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Iniciar Sesión ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/HomePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/HomePage.vue"]]);
export {
  HomePage as default
};
//# sourceMappingURL=HomePage-DxYfbw-u.js.map
