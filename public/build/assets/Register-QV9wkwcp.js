import{T as g,o as c,d as f,b as s,u as o,Z as _,w as u,F as w,a as l,f as d,e as v,p as V,n as y,k as h}from"./app-D2OY3JKk.js";import{A as k}from"./AuthenticationCard-B2m5MvRg.js";import{_ as b}from"./Checkbox-CuvPu7Rb.js";import{_ as n,a as r}from"./TextInput-Cxei8YZp.js";import{_ as m}from"./InputLabel-CsSe-Ly-.js";import{_ as x}from"./PrimaryButton-DoKDHXMu.js";/* empty css            */import"./_plugin-vue_export-helper-DlAUqK2U.js";const U={class:"mt-4"},q={class:"mt-4"},$={class:"mt-4"},C={key:0,class:"mt-4"},N={class:"flex items-center"},R={class:"ms-2"},T=["href"],A=["href"],F={class:"flex items-center justify-end mt-4"},Z={__name:"Register",setup(P){const e=g({name:"",lastname:"",rut:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(i,a)=>(c(),f(w,null,[s(o(_),{title:"Register"}),s(k,null,{default:u(()=>[l("form",{onSubmit:h(p,["prevent"])},[l("div",null,[s(m,{for:"name",value:"Nombre"}),s(n,{id:"name",modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=t=>o(e).name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(r,{class:"mt-2",message:o(e).errors.name},null,8,["message"])]),l("div",null,[s(m,{for:"lastname",value:"Apellidos"}),s(n,{id:"lastname",modelValue:o(e).lastname,"onUpdate:modelValue":a[1]||(a[1]=t=>o(e).lastname=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"lastname"},null,8,["modelValue"]),s(r,{class:"mt-2",message:o(e).errors.lastname},null,8,["message"])]),l("div",null,[s(m,{for:"rut",value:"RUT"}),s(n,{id:"rut",modelValue:o(e).rut,"onUpdate:modelValue":a[2]||(a[2]=t=>o(e).rut=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"rut"},null,8,["modelValue"]),s(r,{class:"mt-2",message:o(e).errors.rut},null,8,["message"])]),l("div",U,[s(m,{for:"email",value:"Email"}),s(n,{id:"email",modelValue:o(e).email,"onUpdate:modelValue":a[3]||(a[3]=t=>o(e).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),s(r,{class:"mt-2",message:o(e).errors.email},null,8,["message"])]),l("div",q,[s(m,{for:"password",value:"Contraseña"}),s(n,{id:"password",modelValue:o(e).password,"onUpdate:modelValue":a[4]||(a[4]=t=>o(e).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(r,{class:"mt-2",message:o(e).errors.password},null,8,["message"])]),l("div",$,[s(m,{for:"password_confirmation",value:"Reingrese su clave"}),s(n,{id:"password_confirmation",modelValue:o(e).password_confirmation,"onUpdate:modelValue":a[5]||(a[5]=t=>o(e).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(r,{class:"mt-2",message:o(e).errors.password_confirmation},null,8,["message"])]),i.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",C,[s(m,{for:"terms"},{default:u(()=>[l("div",N,[s(b,{id:"terms",checked:o(e).terms,"onUpdate:checked":a[6]||(a[6]=t=>o(e).terms=t),name:"terms",required:""},null,8,["checked"]),l("div",R,[d(" I agree to the "),l("a",{target:"_blank",href:i.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,T),d(" and "),l("a",{target:"_blank",href:i.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,A)])]),s(r,{class:"mt-2",message:o(e).errors.terms},null,8,["message"])]),_:1})])):v("",!0),l("div",F,[s(o(V),{href:i.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:u(()=>[d(" Dispone de una cuenta? ")]),_:1},8,["href"]),s(x,{class:y(["ms-4",{"opacity-25":o(e).processing}]),disabled:o(e).processing},{default:u(()=>[d(" Registro ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{Z as default};
//# sourceMappingURL=Register-QV9wkwcp.js.map