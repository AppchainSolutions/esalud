import{x as o,y as r,j as c,o as n,c as l}from"./app-D2OY3JKk.js";const _={__name:"DashCecos",setup(d){const e=o({headers:[{title:"Centro de Costo",align:"start",sortable:!0,key:"descripcion"},{title:"#",key:"total"}],tableItems:[],loaded:!1}),a=async()=>{const t=await axios.get("/dashboard/personasPorCeco");e.tableItems=t.data};return r(async()=>{try{await a(),e.loaded=!0}catch(t){console.log(t)}}),(t,i)=>{const s=c("v-data-table");return n(),l(s,{headers:e.headers,items:e.tableItems,"sort-by":[{key:"descripcion",order:"asc"}]},null,8,["headers","items"])}}};export{_ as default};
//# sourceMappingURL=DashCecos-BzkUjfxY.js.map