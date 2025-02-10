import ExAlcohol from "./ExamenAlcohol-DkD9IbG4.js";
import ExAldehido from "./ExamenAldehido-CCCtpAHW.js";
import ExAsma from "./ExamenAsma-D5FGgOtN.js";
import ExEpo from "./ExamenEPO-BVFCXc1C.js";
import ExEquilibrio from "./ExamenEquilibrio-B43h-s7h.js";
import ExHumoNegro from "./ExamenHumoNegro-CTbDIKYG.js";
import ExMetales from "./ExamenMetales-CZPdSC3Y.js";
import ExPsico from "./ExamenPsico-oGtWJw9V.js";
import ExPvtmert from "./ExamenPVTMERT-CfxrqBAb.js";
import ExRespirador from "./ExamenRespirador-DVxFwfWo.js";
import ExRuido from "./ExamenRuido-9WIKTZHo.js";
import ExSalud from "./ExamenSalud-BobJGi6B.js";
import ExSilice from "./ExamenSilice-CGu-sMPn.js";
import ExSolvente from "./ExamenSolvente-AwHmh2m3.js";
import ExSomnolencia from "./ExamenSomnolencia-cVWz9mcG.js";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./store-45BLaymI.js";
import "pinia";
import "./helper-wNjokA2D.js";
import "sweetalert2/dist/sweetalert2.js";
import "axios";
import "@kyvg/vue3-notification";
const _sfc_main = {
  components: {
    ExAlcohol,
    ExAldehido,
    ExAsma,
    ExEpo,
    ExEquilibrio,
    ExHumoNegro,
    ExMetales,
    ExPsico,
    ExPvtmert,
    ExRespirador,
    ExRuido,
    ExSalud,
    ExSilice,
    ExSolvente,
    ExSomnolencia
  },
  data() {
    return {
      tab: "option-1"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_ex_asma = resolveComponent("ex-asma");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_ex_alcohol = resolveComponent("ex-alcohol");
  const _component_ex_aldehido = resolveComponent("ex-aldehido");
  const _component_ex_epo = resolveComponent("ex-epo");
  const _component_ex_equilibrio = resolveComponent("ex-equilibrio");
  const _component_ex_humo_negro = resolveComponent("ex-humo-negro");
  const _component_ex_metales = resolveComponent("ex-metales");
  const _component_ex_psico = resolveComponent("ex-psico");
  const _component_ex_pvtmert = resolveComponent("ex-pvtmert");
  const _component_ex_respirador = resolveComponent("ex-respirador");
  const _component_ex_ruido = resolveComponent("ex-ruido");
  const _component_ex_salud = resolveComponent("ex-salud");
  const _component_ex_silice = resolveComponent("ex-silice");
  const _component_ex_solvente = resolveComponent("ex-solvente");
  const _component_ex_somnolencia = resolveComponent("ex-somnolencia");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ class: "mt-2" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ex_asma, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_alcohol, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_aldehido, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_epo, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_equilibrio, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_humo_negro, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_metales, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_psico, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_pvtmert, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_respirador, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_ruido, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_salud, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_silice, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_solvente, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ex_somnolencia, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ex_asma),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_alcohol),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_aldehido),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_epo),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_equilibrio),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_humo_negro),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_metales),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_psico),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_pvtmert),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_respirador),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_ruido),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_salud),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_silice),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_solvente),
                createVNode(_component_v_divider, {
                  thickness: 3,
                  class: "border-opacity-100",
                  color: "info"
                }),
                createVNode(_component_ex_somnolencia)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_col, null, {
            default: withCtx(() => [
              createVNode(_component_ex_asma),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_alcohol),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_aldehido),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_epo),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_equilibrio),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_humo_negro),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_metales),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_psico),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_pvtmert),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_respirador),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_ruido),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_salud),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_silice),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_solvente),
              createVNode(_component_v_divider, {
                thickness: 3,
                class: "border-opacity-100",
                color: "info"
              }),
              createVNode(_component_ex_somnolencia)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Paciente/Componentes/Examenes/Examenes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Examenes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/omar/www/esalud/resources/js/Pages/Paciente/Componentes/Examenes/Examenes.vue"]]);
export {
  Examenes as default
};
//# sourceMappingURL=Examenes-BUBV9xAY.js.map
