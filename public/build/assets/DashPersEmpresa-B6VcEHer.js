import{z as u,r as m,A as _,o as r,d as h,u as n,c as g,e as f}from"./app-DivcrGOD.js";import{C as b,p as w,a as y,b as D,A as E,c as v,L as P,i as x,D as C}from"./chartjs-plugin-autocolors.esm-SaWCXcXx.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const A={style:{width:"80%"}},B={__name:"DashPersEmpresa",setup(S){b.register(w,y,D,E,v,P,x);const e=u({labels:[],datasets:[{label:"Cantidad",data:[]}]}),c={responsive:!0,maintainAspectRatio:!0,plugins:{autocolors:{mode:"data"}}};let t=m(!1);const l=async()=>{try{const{data:a}=await axios.get("/dashboard/personasPorEmpresa"),{descripcion:o,total:i}=a.reduce((s,{descripcion:d,total:p})=>(s.descripcion.push(d),s.total.push(p),s),{descripcion:[],total:[]});e.labels=o,e.datasets[0].data=i}catch(a){console.log("Error al obtener los datos."+a)}};return _(async()=>{try{await l(),t.value=!0}catch(a){console.log(a)}}),(a,o)=>(r(),h("div",A,[n(t)?(r(),g(n(C),{key:0,options:c,data:e},null,8,["data"])):f("",!0)]))}},M=k(B,[["__file","/home/blueshadows/www/vulco/resources/js/Pages/SubPages/DashPersEmpresa.vue"]]);export{M as default};
//# sourceMappingURL=DashPersEmpresa-B6VcEHer.js.map