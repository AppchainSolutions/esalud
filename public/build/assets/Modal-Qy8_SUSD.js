import{o as p,d as h,b as l,w as a,l as n,a as t,B as x,z as _,G as b,h as g,c as k,q as i,E as r,C as d,n as C,e as S,H as B}from"./app-Cw_Vz0lM.js";import{S as E}from"./SectionTitle-BZN5zDmp.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const $={class:"md:grid md:grid-cols-3 md:gap-6"},M={class:"mt-5 md:mt-0 md:col-span-2"},A={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},z={__name:"ActionSection",setup(e){return(o,s)=>(p(),h("div",$,[l(E,null,{title:a(()=>[n(o.$slots,"title")]),description:a(()=>[n(o.$slots,"description")]),_:3}),t("div",M,[t("div",A,[n(o.$slots,"content")])])]))}},L=f(z,[["__file","/home/blueshadows/www/esalud/resources/js/Components/ActionSection.vue"]]),N={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},T={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:o}){const s=e,y=o;x(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const m=()=>{s.closeable&&y("close")},u=c=>{c.key==="Escape"&&s.show&&m()};_(()=>document.addEventListener("keydown",u)),b(()=>{document.removeEventListener("keydown",u),document.body.style.overflow=null});const v=g(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(c,w)=>(p(),k(B,{to:"body"},[l(r,{"leave-active-class":"duration-200"},{default:a(()=>[i(t("div",N,[l(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[i(t("div",{class:"fixed inset-0 transform transition-all",onClick:m},w[0]||(w[0]=[t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)]),512),[[d,e.show]])]),_:1}),l(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[i(t("div",{class:C(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",v.value])},[e.show?n(c.$slots,"default",{key:0}):S("",!0)],2),[[d,e.show]])]),_:3})],512),[[d,e.show]])]),_:3})]))}},q=f(T,[["__file","/home/blueshadows/www/esalud/resources/js/Components/Modal.vue"]]);export{L as A,q as M};
//# sourceMappingURL=Modal-Qy8_SUSD.js.map