import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-9lGv6sW_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "./logo-DLUxz0ei.js";
import "vue-loading-overlay";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: AppLayout }, {
  __name: "MiDashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      _push(ssrRenderComponent(_component_v_container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Mi Resumen Médico</h1>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "mt-4 pt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul${_scopeId2}><li${_scopeId2}>Peso:</li><li${_scopeId2}>Estatura:</li><li${_scopeId2}>Presión arterial:</li><li${_scopeId2}>FC:</li><li${_scopeId2}>Fracción de O2:</li><li${_scopeId2}>Glucosa:</li></ul>`);
                } else {
                  return [
                    createVNode("ul", null, [
                      createVNode("li", null, "Peso:"),
                      createVNode("li", null, "Estatura:"),
                      createVNode("li", null, "Presión arterial:"),
                      createVNode("li", null, "FC:"),
                      createVNode("li", null, "Fracción de O2:"),
                      createVNode("li", null, "Glucosa:")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br${_scopeId}><h2${_scopeId}>Tabla evolucion trastorno crónico</h2>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "mt-4 pt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<br${_scopeId2}><ul${_scopeId2}><li${_scopeId2}>Enfermedad diagnosticada en el paciente (fecha)</li><li${_scopeId2}>Resultados de las pruebas de diagnóstico</li></ul>`);
                } else {
                  return [
                    createVNode("br"),
                    createVNode("ul", null, [
                      createVNode("li", null, "Enfermedad diagnosticada en el paciente (fecha)"),
                      createVNode("li", null, "Resultados de las pruebas de diagnóstico")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br${_scopeId}><h2${_scopeId}>Resultados de las pruebas de diagnóstico</h2>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "mt-4 pt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<br${_scopeId2}><ul${_scopeId2}><li${_scopeId2}>Principales recomendaciones</li><li${_scopeId2}>Próximo Control</li></ul>`);
                } else {
                  return [
                    createVNode("br"),
                    createVNode("ul", null, [
                      createVNode("li", null, "Principales recomendaciones"),
                      createVNode("li", null, "Próximo Control")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", null, "Mi Resumen Médico"),
              createVNode(_component_v_row, { class: "mt-4 pt-4" }, {
                default: withCtx(() => [
                  createVNode("ul", null, [
                    createVNode("li", null, "Peso:"),
                    createVNode("li", null, "Estatura:"),
                    createVNode("li", null, "Presión arterial:"),
                    createVNode("li", null, "FC:"),
                    createVNode("li", null, "Fracción de O2:"),
                    createVNode("li", null, "Glucosa:")
                  ])
                ]),
                _: 1
              }),
              createVNode("br"),
              createVNode("h2", null, "Tabla evolucion trastorno crónico"),
              createVNode(_component_v_row, { class: "mt-4 pt-4" }, {
                default: withCtx(() => [
                  createVNode("br"),
                  createVNode("ul", null, [
                    createVNode("li", null, "Enfermedad diagnosticada en el paciente (fecha)"),
                    createVNode("li", null, "Resultados de las pruebas de diagnóstico")
                  ])
                ]),
                _: 1
              }),
              createVNode("br"),
              createVNode("h2", null, "Resultados de las pruebas de diagnóstico"),
              createVNode(_component_v_row, { class: "mt-4 pt-4" }, {
                default: withCtx(() => [
                  createVNode("br"),
                  createVNode("ul", null, [
                    createVNode("li", null, "Principales recomendaciones"),
                    createVNode("li", null, "Próximo Control")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Paciente/MiDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MiDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/omar/www/esalud/resources/js/Pages/Paciente/MiDashboard.vue"]]);
export {
  MiDashboard as default
};
//# sourceMappingURL=MiDashboard-D8ubPqwD.js.map
