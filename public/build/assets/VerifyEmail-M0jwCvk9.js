import{T as p,h as y,o as u,d as l,b as t,u as o,Z as h,w as s,F as v,a as i,e as x,n as w,f as n,p as d,k as b}from"./app-Cw_Vz0lM.js";import{A as k}from"./AuthenticationCard-BddwVEqz.js";import{A as V}from"./AuthenticationCardLogo-u1OzuAjW.js";import{P as _}from"./PrimaryButton-C9zaW2Lz.js";/* empty css            */import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const A={key:0,class:"mb-4 font-medium text-sm text-green-600"},B={class:"mt-4 flex items-center justify-between"},C={__name:"VerifyEmail",props:{status:String},setup(f){const m=f,r=p({}),c=()=>{r.post(route("verification.send"))},g=y(()=>m.status==="verification-link-sent");return(a,e)=>(u(),l(v,null,[t(o(h),{title:"Email Verification"}),t(k,null,{logo:s(()=>[t(V)]),default:s(()=>[e[3]||(e[3]=i("div",{class:"mb-4 text-sm text-gray-600"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),g.value?(u(),l("div",A," A new verification link has been sent to the email address you provided in your profile settings. ")):x("",!0),i("form",{onSubmit:b(c,["prevent"])},[i("div",B,[t(_,{class:w({"opacity-25":o(r).processing}),disabled:o(r).processing},{default:s(()=>e[0]||(e[0]=[n(" Resend Verification Email ")])),_:1},8,["class","disabled"]),i("div",null,[t(o(d),{href:a.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:s(()=>e[1]||(e[1]=[n(" Edit Profile")])),_:1},8,["href"]),t(o(d),{href:a.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ms-2"},{default:s(()=>e[2]||(e[2]=[n(" Log Out ")])),_:1},8,["href"])])])],32)]),_:1})],64))}},T=E(C,[["__file","/home/blueshadows/www/esalud/resources/js/Pages/Auth/VerifyEmail.vue"]]);export{T as default};
//# sourceMappingURL=VerifyEmail-M0jwCvk9.js.map