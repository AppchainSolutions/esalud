import{T as A,r as P,o as i,d as a,b as o,w as s,a as r,e as c,f as n,u as l,F as C,g as x,t as g,n as T}from"./app-Cw_Vz0lM.js";import{A as j}from"./ActionMessage-BGMDBOuK.js";import{A as L}from"./Modal-Qy8_SUSD.js";import{C as S}from"./Checkbox-VgxZg2Cz.js";import{C as U}from"./ConfirmationModal-CjR7tdl1.js";import{D as E}from"./DangerButton-Bq8eQ79F.js";import{D as I}from"./DialogModal-DZVR1_el.js";import{F as z}from"./FormSection-5ZSKA29J.js";import{T as Y,I as q}from"./TextInput-D-onQaAI.js";import{I as D}from"./InputLabel-Dy14SKzV.js";import{P as $}from"./PrimaryButton-C9zaW2Lz.js";import{S as w}from"./SecondaryButton-3u9MPLRG.js";import{S as G}from"./SectionBorder-BZZiGE0s.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SectionTitle-BZN5zDmp.js";const J={class:"col-span-6 sm:col-span-4"},K={key:0,class:"col-span-6"},O={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},Q={class:"flex items-center"},R={class:"ms-2 text-sm text-gray-600"},W={key:0},X={class:"mt-10 sm:mt-0"},Z={class:"space-y-6"},_={class:"break-all"},h={class:"flex items-center ms-2"},ee={key:0,class:"text-sm text-gray-400"},se=["onClick"],te=["onClick"],oe={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"},ne={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},le={class:"flex items-center"},re={class:"ms-2 text-sm text-gray-600"},ie={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(d){const u=A({name:"",permissions:d.defaultPermissions}),p=A({permissions:[]}),b=A({}),y=P(!1),v=P(null),f=P(null),F=()=>{u.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{y.value=!0,u.reset()}})},B=m=>{p.permissions=m.abilities,v.value=m},M=()=>{p.put(route("api-tokens.update",v.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>v.value=null})},V=m=>{f.value=m},N=()=>{b.delete(route("api-tokens.delete",f.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>f.value=null})};return(m,e)=>(i(),a("div",null,[o(z,{onSubmitted:F},{title:s(()=>e[9]||(e[9]=[n(" Create API Token ")])),description:s(()=>e[10]||(e[10]=[n(" API tokens allow third-party services to authenticate with our application on your behalf. ")])),form:s(()=>[r("div",J,[o(D,{for:"name",value:"Name"}),o(Y,{id:"name",modelValue:l(u).name,"onUpdate:modelValue":e[0]||(e[0]=t=>l(u).name=t),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),o(q,{message:l(u).errors.name,class:"mt-2"},null,8,["message"])]),d.availablePermissions.length>0?(i(),a("div",K,[o(D,{for:"permissions",value:"Permissions"}),r("div",O,[(i(!0),a(C,null,x(d.availablePermissions,t=>(i(),a("div",{key:t},[r("label",Q,[o(S,{checked:l(u).permissions,"onUpdate:checked":e[1]||(e[1]=k=>l(u).permissions=k),value:t},null,8,["checked","value"]),r("span",R,g(t),1)])]))),128))])])):c("",!0)]),actions:s(()=>[o(j,{on:l(u).recentlySuccessful,class:"me-3"},{default:s(()=>e[11]||(e[11]=[n(" Created. ")])),_:1},8,["on"]),o($,{class:T({"opacity-25":l(u).processing}),disabled:l(u).processing},{default:s(()=>e[12]||(e[12]=[n(" Create ")])),_:1},8,["class","disabled"])]),_:1}),d.tokens.length>0?(i(),a("div",W,[o(G),r("div",X,[o(L,null,{title:s(()=>e[13]||(e[13]=[n(" Manage API Tokens ")])),description:s(()=>e[14]||(e[14]=[n(" You may delete any of your existing tokens if they are no longer needed. ")])),content:s(()=>[r("div",Z,[(i(!0),a(C,null,x(d.tokens,t=>(i(),a("div",{key:t.id,class:"flex items-center justify-between"},[r("div",_,g(t.name),1),r("div",h,[t.last_used_ago?(i(),a("div",ee," Last used "+g(t.last_used_ago),1)):c("",!0),d.availablePermissions.length>0?(i(),a("button",{key:1,class:"cursor-pointer ms-6 text-sm text-gray-400 underline",onClick:k=>B(t)}," Permissions ",8,se)):c("",!0),r("button",{class:"cursor-pointer ms-6 text-sm text-red-500",onClick:k=>V(t)}," Delete ",8,te)])]))),128))])]),_:1})])])):c("",!0),o(I,{show:y.value,onClose:e[3]||(e[3]=t=>y.value=!1)},{title:s(()=>e[15]||(e[15]=[n(" API Token ")])),content:s(()=>[e[16]||(e[16]=r("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1)),m.$page.props.jetstream.flash.token?(i(),a("div",oe,g(m.$page.props.jetstream.flash.token),1)):c("",!0)]),footer:s(()=>[o(w,{onClick:e[2]||(e[2]=t=>y.value=!1)},{default:s(()=>e[17]||(e[17]=[n(" Close ")])),_:1})]),_:1},8,["show"]),o(I,{show:v.value!=null,onClose:e[6]||(e[6]=t=>v.value=null)},{title:s(()=>e[18]||(e[18]=[n(" API Token Permissions ")])),content:s(()=>[r("div",ne,[(i(!0),a(C,null,x(d.availablePermissions,t=>(i(),a("div",{key:t},[r("label",le,[o(S,{checked:l(p).permissions,"onUpdate:checked":e[4]||(e[4]=k=>l(p).permissions=k),value:t},null,8,["checked","value"]),r("span",re,g(t),1)])]))),128))])]),footer:s(()=>[o(w,{onClick:e[5]||(e[5]=t=>v.value=null)},{default:s(()=>e[19]||(e[19]=[n(" Cancel ")])),_:1}),o($,{class:T(["ms-3",{"opacity-25":l(p).processing}]),disabled:l(p).processing,onClick:M},{default:s(()=>e[20]||(e[20]=[n(" Save ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),o(U,{show:f.value!=null,onClose:e[8]||(e[8]=t=>f.value=null)},{title:s(()=>e[21]||(e[21]=[n(" Delete API Token ")])),content:s(()=>e[22]||(e[22]=[n(" Are you sure you would like to delete this API token? ")])),footer:s(()=>[o(w,{onClick:e[7]||(e[7]=t=>f.value=null)},{default:s(()=>e[23]||(e[23]=[n(" Cancel ")])),_:1}),o(E,{class:T(["ms-3",{"opacity-25":l(b).processing}]),disabled:l(b).processing,onClick:N},{default:s(()=>e[24]||(e[24]=[n(" Delete ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},Te=H(ie,[["__file","/home/blueshadows/www/esalud/resources/js/Pages/API/Partials/ApiTokenManager.vue"]]);export{Te as default};
//# sourceMappingURL=ApiTokenManager-DvfOvN4E.js.map