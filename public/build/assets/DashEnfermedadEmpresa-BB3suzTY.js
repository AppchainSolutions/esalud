import{x as l,y as m,j as p,o as n,d as u,b as _,c as f,u as g,e as h,I as v}from"./app-UBUjgHQn.js";import{C as b,p as E,a as y,b as w,A as D,c as C,L as x,i as V,D as k}from"./chartjs-plugin-autocolors.esm-BZYL-CLj.js";import{f as A}from"./helper-ZoZpxMxp.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./store-MBdYnbZm.js";const S={style:{width:"80%"}},j={__name:"DashEnfermedadEmpresa",setup(L){b.register(E,y,w,D,C,x,V);const e=l({endpoints:["empresa"],list:[],empresa:null,loaded:!1}),o=l({labels:["A","b","C"],datasets:[{data:[2,3,5]}]}),d={responsive:!0,maintainAspectRatio:!0,plugins:{autocolors:{mode:"data"}}},i=async s=>{await c(e.empresa),e.loaded=!0},c=async s=>{try{e.loaded=!1;let a=s;const{data:t}=await v.get("/dashboard/enfermedad_empresa",{params:{id:a}});console.log(t.descripcion),o.labels=t.descripcion,o.datasets[0].data=t.total}catch(a){console.log("Error al obtener los datos."+a)}};return m(async()=>{try{e.list=await A(e.endpoints)}catch(s){console.log(s)}}),(s,a)=>{const t=p("v-select");return n(),u("div",S,[_(t,{items:e.list.empresa,"item-title":"descripcion","item-value":"id",modelValue:e.empresa,"onUpdate:modelValue":[a[0]||(a[0]=r=>e.empresa=r),a[1]||(a[1]=r=>i())],label:"Empresa",clearable:"",class:"ma-4 mt-8",variant:"underlined",single:""},null,8,["items","modelValue"]),e.loaded?(n(),f(g(k),{key:0,options:d,data:o},null,8,["data"])):h("",!0)])}}},R=B(j,[["__file","/home/blueshadows/www/vulco/resources/js/Pages/SubPages/DashEnfermedadEmpresa.vue"]]);export{R as default};
//# sourceMappingURL=DashEnfermedadEmpresa-BB3suzTY.js.map