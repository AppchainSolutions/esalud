import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useLogger } from "vue-logger-plugin";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VTooltip } from "vuetify/lib/components/VTooltip/index.mjs";
const _sfc_main = {
  __name: "TableAction",
  __ssrInlineRender: true,
  props: {
    state: Object,
    title: String,
    items: Object,
    icon: String,
    actionType: String
  },
  setup(__props) {
    const logger = useLogger();
    const props = __props;
    const handleAction = () => {
      switch (props.actionType) {
        case "editarFichaPersonal":
          logger.info("Ficha Personal", props.items.id);
          break;
        case "editarFichaMedica":
          logger.info("Ficha Medica", props.items.id);
          break;
        case "eliminarRegistro":
          logger.info("Eliminar Registro:", props.items.id);
          break;
        default:
          logger.warn("Acción no reconocida");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTooltip, mergeProps({
        text: props.title,
        location: "top"
      }, _attrs), {
        activator: withCtx(({ items }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              density: "compact",
              color: "#009AA4",
              class: "mr-2 ml-2",
              variant: "tonal",
              icon: __props.icon,
              onClick: handleAction
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                density: "compact",
                color: "#009AA4",
                class: "mr-2 ml-2",
                variant: "tonal",
                icon: __props.icon,
                onClick: handleAction
              }, null, 8, ["icon"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/SubPages/Componentes/TableAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TableAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/SubPages/Componentes/TableAction.vue"]]);
export {
  TableAction as default
};
//# sourceMappingURL=TableAction-DdFl1Q_g.js.map
