import{x as n,y as p,j as u,o as r,d as m,b as _,c as g,u as f,e as h,I as v}from"./app-CmmVjTXO.js";import{C as b,p as x,a as y,b as w,A as D,c as C,L as E,i as P,D as V}from"./chartjs-plugin-autocolors.esm-BtiX3FmY.js";import{f as j}from"./helper-FW47krof.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./store-CMjr-ERy.js";const A={style:{width:"80%"}},B={__name:"DashExpoPlanta",setup(S){b.register(x,y,w,D,C,E,P);const a=n({endpoints:["planta"],list:[],planta:null,loaded:!1}),o=n({labels:[],datasets:[{data:[]}]}),i={responsive:!0,maintainAspectRatio:!0,plugins:{autocolors:{mode:"data"}}},c=async e=>{await d(a.planta),console.log(a.planta),a.loaded=!0},d=async e=>{try{a.loaded=!1;let t=e;const{data:l}=await v.get("/dashboard/expo_planta",{params:{id:t}}),s=Object.values(l);o.labels=s[0],o.datasets[0].data=s[1]}catch(t){console.log("Error al obtener los datos."+t)}};return p(async()=>{try{a.list=await j(a.endpoints)}catch(e){console.log(e)}}),(e,t)=>{const l=u("v-select");return r(),m("div",A,[_(l,{items:a.list.planta,"item-title":"descripcion","item-value":"id",modelValue:a.planta,"onUpdate:modelValue":[t[0]||(t[0]=s=>a.planta=s),t[1]||(t[1]=s=>c())],label:"Planta",clearable:"",class:"ma-4 mt-8",variant:"underlined",single:""},null,8,["items","modelValue"]),a.loaded?(r(),g(f(V),{key:0,options:i,data:o},null,8,["data"])):h("",!0)])}}},R=k(B,[["__file","/home/blueshadows/www/vulco/resources/js/Pages/SubPages/DashExpoPlanta.vue"]]);export{R as default};
//# sourceMappingURL=DashExpoPlanta-BJH0qzrb.js.map