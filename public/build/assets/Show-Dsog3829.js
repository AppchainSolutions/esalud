import{o as t,c as l,w as p,a as m,d as r,b as o,e as s,F as c}from"./app-Cw_Vz0lM.js";import{A as u}from"./AppLayout-BVSZgQ1N.js";import d from"./DeleteUserForm-uCIMw9XZ.js";import f from"./LogoutOtherBrowserSessionsForm-fQl0bUbX.js";import{S as a}from"./SectionBorder-BZZiGE0s.js";import h from"./TwoFactorAuthenticationForm-BtYWLLti.js";import w from"./UpdatePasswordForm-DsXNuMmu.js";import g from"./UpdateProfileInformationForm-Dms62Q5s.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Qy8_SUSD.js";import"./SectionTitle-BZN5zDmp.js";import"./DangerButton-Bq8eQ79F.js";import"./DialogModal-DZVR1_el.js";import"./TextInput-D-onQaAI.js";import"./SecondaryButton-3u9MPLRG.js";import"./ActionMessage-BGMDBOuK.js";import"./PrimaryButton-C9zaW2Lz.js";import"./InputLabel-Dy14SKzV.js";import"./FormSection-5ZSKA29J.js";const _={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},y={key:0},A={key:1},P={key:2},k={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(e,n)=>(t(),l(u,{title:"Profile"},{header:p(()=>n[0]||(n[0]=[m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1)])),default:p(()=>[m("div",null,[m("div",_,[e.$page.props.jetstream.canUpdateProfileInformation?(t(),r("div",y,[o(g,{user:e.$page.props.auth.user},null,8,["user"]),o(a)])):s("",!0),e.$page.props.jetstream.canUpdatePassword?(t(),r("div",A,[o(w,{class:"mt-10 sm:mt-0"}),o(a)])):s("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(t(),r("div",P,[o(h,{"requires-confirmation":i.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),o(a)])):s("",!0),o(f,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(t(),r(c,{key:3},[o(a),o(d,{class:"mt-10 sm:mt-0"})],64)):s("",!0)])])]),_:1}))}},z=F(k,[["__file","/home/blueshadows/www/esalud/resources/js/Pages/Profile/Show.vue"]]);export{z as default};
//# sourceMappingURL=Show-Dsog3829.js.map