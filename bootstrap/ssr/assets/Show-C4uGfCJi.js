import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout-S2vtq-1z.js";
import DeleteTeamForm from "./DeleteTeamForm-C71x3Dn4.js";
import { S as SectionBorder } from "./SectionBorder-CcascqG5.js";
import TeamMemberManager from "./TeamMemberManager-D3E6Guj_.js";
import UpdateTeamNameForm from "./UpdateTeamNameForm-QErdWRpI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "vuetify/lib/components/VApp/index.mjs";
import "vuetify/lib/components/VAppBar/index.mjs";
import "vuetify/lib/components/VBtn/index.mjs";
import "vuetify/lib/components/VCard/index.mjs";
import "vuetify/lib/components/VDivider/index.mjs";
import "vuetify/lib/components/VGrid/index.mjs";
import "vuetify/lib/components/VIcon/index.mjs";
import "vuetify/lib/components/VImg/index.mjs";
import "vuetify/lib/components/VList/index.mjs";
import "vuetify/lib/components/VMain/index.mjs";
import "vuetify/lib/components/VNavigationDrawer/index.mjs";
import "./Modal-D4iRFUMm.js";
import "./SectionTitle-CQjLXQs1.js";
import "./ConfirmationModal-Cl69OsP3.js";
import "./DangerButton-B6hcN5I_.js";
import "./SecondaryButton-CzCjsfE-.js";
import "./ActionMessage-BYDGQXum.js";
import "./DialogModal-B6enyRN3.js";
import "./FormSection-DPuySD-8.js";
import "./TextInput-DLuNCjdH.js";
import "./InputLabel-CpyISeFF.js";
import "./PrimaryButton-Ck_wnII2.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    team: Object,
    availableRoles: Array,
    permissions: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Team Settings" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Team Settings </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Team Settings ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(UpdateTeamNameForm, {
              team: __props.team,
              permissions: __props.permissions
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TeamMemberManager, {
              class: "mt-10 sm:mt-0",
              team: __props.team,
              "available-roles": __props.availableRoles,
              "user-permissions": __props.permissions
            }, null, _parent2, _scopeId));
            if (__props.permissions.canDeleteTeam && !__props.team.personal_team) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(DeleteTeamForm, {
                class: "mt-10 sm:mt-0",
                team: __props.team
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  createVNode(UpdateTeamNameForm, {
                    team: __props.team,
                    permissions: __props.permissions
                  }, null, 8, ["team", "permissions"]),
                  createVNode(TeamMemberManager, {
                    class: "mt-10 sm:mt-0",
                    team: __props.team,
                    "available-roles": __props.availableRoles,
                    "user-permissions": __props.permissions
                  }, null, 8, ["team", "available-roles", "user-permissions"]),
                  __props.permissions.canDeleteTeam && !__props.team.personal_team ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(SectionBorder),
                    createVNode(DeleteTeamForm, {
                      class: "mt-10 sm:mt-0",
                      team: __props.team
                    }, null, 8, ["team"])
                  ], 64)) : createCommentVNode("", true)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/blueshadows/www/esalud/resources/js/Pages/Teams/Show.vue"]]);
export {
  Show as default
};
//# sourceMappingURL=Show-C4uGfCJi.js.map
