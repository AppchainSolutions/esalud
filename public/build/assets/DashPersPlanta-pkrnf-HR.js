import{x as p,r as u,y as _,o as r,d as m,u as n,c as h,e as g}from"./app-UBUjgHQn.js";import{C as P,p as f,a as w,b as y,A as b,c as v,i as x,P as D}from"./chartjs-plugin-autocolors.esm-BZYL-CLj.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C={style:{width:"80%"}},A={__name:"DashPersPlanta",setup(B){P.register(f,w,y,b,v,x);const t=p({labels:[],datasets:[{data:[]}]}),c={responsive:!0,maintainAspectRatio:!0,plugins:{autocolors:{mode:"data"}}};let o=u(!1);const l=async()=>{const a=await axios.get("/dashboard/personasPorPlanta"),{data:e}=a,i=e.map(s=>s.descripcion),d=e.map(s=>s.total);t.labels=i,t.datasets[0].data=d};return _(async()=>{try{await l(),o.value=!0}catch(a){console.log(a)}}),(a,e)=>(r(),m("div",C,[n(o)?(r(),h(n(D),{key:0,options:c,data:t},null,8,["data"])):g("",!0)]))}},M=k(A,[["__file","/home/blueshadows/www/vulco/resources/js/Pages/SubPages/DashPersPlanta.vue"]]);export{M as default};
//# sourceMappingURL=DashPersPlanta-pkrnf-HR.js.map