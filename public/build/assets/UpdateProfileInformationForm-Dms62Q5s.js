import{T as N,r as p,o as c,c as S,w as l,f as n,d as I,a as r,b as t,q as f,C as v,D as j,k as h,e as g,u as s,p as A,n as E,i as T}from"./app-Cw_Vz0lM.js";import{A as q}from"./ActionMessage-BGMDBOuK.js";import{F as D}from"./FormSection-5ZSKA29J.js";import{I as P,T as V}from"./TextInput-D-onQaAI.js";import{I as b}from"./InputLabel-Dy14SKzV.js";import{P as L}from"./PrimaryButton-C9zaW2Lz.js";import{S as _}from"./SecondaryButton-3u9MPLRG.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SectionTitle-BZN5zDmp.js";const z={key:0,class:"col-span-6 sm:col-span-4"},M={class:"mt-2"},$=["src","alt"],O={class:"mt-2"},Y={class:"col-span-6 sm:col-span-4"},G={class:"col-span-6 sm:col-span-4"},H={key:0},J={class:"text-sm mt-2"},K={class:"mt-2 font-medium text-sm text-green-600"},Q={__name:"UpdateProfileInformationForm",props:{user:Object},setup(u){const k=u,o=N({_method:"PUT",name:k.user.name,email:k.user.email,photo:null}),w=p(null),m=p(null),i=p(null),x=()=>{i.value&&(o.photo=i.value.files[0]),o.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>y()})},C=()=>{w.value=!0},F=()=>{i.value.click()},U=()=>{const a=i.value.files[0];if(!a)return;const e=new FileReader;e.onload=d=>{m.value=d.target.result},e.readAsDataURL(a)},B=()=>{T.delete(route("current-user-photo.delete"),{preserveScroll:!0,onSuccess:()=>{m.value=null,y()}})},y=()=>{var a;(a=i.value)!=null&&a.value&&(i.value.value=null)};return(a,e)=>(c(),S(D,{onSubmitted:x},{title:l(()=>e[2]||(e[2]=[n(" Profile Information ")])),description:l(()=>e[3]||(e[3]=[n(" Update your account's profile information and email address. ")])),form:l(()=>[a.$page.props.jetstream.managesProfilePhotos?(c(),I("div",z,[r("input",{id:"photo",ref_key:"photoInput",ref:i,type:"file",class:"hidden",onChange:U},null,544),t(b,{for:"photo",value:"Photo"}),f(r("div",M,[r("img",{src:u.user.profile_photo_url,alt:u.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,$)],512),[[v,!m.value]]),f(r("div",O,[r("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:j("background-image: url('"+m.value+"');")},null,4)],512),[[v,m.value]]),t(_,{class:"mt-2 me-2",type:"button",onClick:h(F,["prevent"])},{default:l(()=>e[4]||(e[4]=[n(" Select A New Photo ")])),_:1}),u.user.profile_photo_path?(c(),S(_,{key:0,type:"button",class:"mt-2",onClick:h(B,["prevent"])},{default:l(()=>e[5]||(e[5]=[n(" Remove Photo ")])),_:1})):g("",!0),t(P,{message:s(o).errors.photo,class:"mt-2"},null,8,["message"])])):g("",!0),r("div",Y,[t(b,{for:"name",value:"Name"}),t(V,{id:"name",modelValue:s(o).name,"onUpdate:modelValue":e[0]||(e[0]=d=>s(o).name=d),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),t(P,{message:s(o).errors.name,class:"mt-2"},null,8,["message"])]),r("div",G,[t(b,{for:"email",value:"Email"}),t(V,{id:"email",modelValue:s(o).email,"onUpdate:modelValue":e[1]||(e[1]=d=>s(o).email=d),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),t(P,{message:s(o).errors.email,class:"mt-2"},null,8,["message"]),a.$page.props.jetstream.hasEmailVerification&&u.user.email_verified_at===null?(c(),I("div",H,[r("p",J,[e[7]||(e[7]=n(" Your email address is unverified. ")),t(s(A),{href:a.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:h(C,["prevent"])},{default:l(()=>e[6]||(e[6]=[n(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),f(r("div",K," A new verification link has been sent to your email address. ",512),[[v,w.value]])])):g("",!0)])]),actions:l(()=>[t(q,{on:s(o).recentlySuccessful,class:"me-3"},{default:l(()=>e[8]||(e[8]=[n(" Saved. ")])),_:1},8,["on"]),t(L,{class:E({"opacity-25":s(o).processing}),disabled:s(o).processing},{default:l(()=>e[9]||(e[9]=[n(" Save ")])),_:1},8,["class","disabled"])]),_:1}))}},re=R(Q,[["__file","/home/blueshadows/www/esalud/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue"]]);export{re as default};
//# sourceMappingURL=UpdateProfileInformationForm-Dms62Q5s.js.map