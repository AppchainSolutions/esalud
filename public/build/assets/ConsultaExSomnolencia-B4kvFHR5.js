import{x as A,y as R,j as o,o as D,c as I,w as n,b as l,f as y,t as B,n as $,m as j,a as L}from"./app-CmmVjTXO.js";import{A as M}from"./AppLayout-BHf8mxR6.js";import{f as O,h as P}from"./helper-FW47krof.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-DIp7Rf8v.js";import"./store-CMjr-ERy.js";const z=L("span",{class:"text-h5"}," Consulta exámenes SOMNOLENCIA ",-1),K=Object.assign({layout:M},{__name:"ConsultaExSomnolencia",setup(q){const e=A({endpoints:["area","ceco","empresa","planta","unidad","nivel_riesgo"],headers:[{title:"Rut",align:"start",sortable:!0,key:"rut"},{title:"Nombre",align:"start",sortable:!0,key:"nombre"},{title:"Apellidos",align:"start",sortable:!0,key:"apellidos"},{title:"Empresa",align:"start",sortable:!0,key:"empresa.descripcion"},{title:"Nivel de riesgo",align:"start",sortable:!0,key:"nivel_riesgo.descripcion"},{title:"Resultado",align:"start",sortable:!0,key:"resultado"},{title:"Fecha exámen",align:"start",sortable:!0,key:"fecha_examen"},{title:"Acciones",align:"center",key:"actions"}],searchQuery:{activo:!0,area:null,ceco:null,empresa:null,planta:null,rut:null,unidad:null,resultado:"No apto",nivel_riesgo:null,fecha_examen:{desde:null,hasta:null},fecha_primer:{desde:null,hasta:null},fecha_segundo:{desde:null,hasta:null}},rutRules:[u=>{if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(u))return!1;let i=u.split("-"),s=i[0],f=i[1].toLowerCase(),m=0,r=1;for(;s;s=Math.floor(s/10))r=(r+s%10*(9-m++%6))%11;let d=r?r-1:"k";return f===d?!0:"El rut es incorrecto"}],itemsView:{paciente_id:null,fecha_examen:null,fecha_primer:null,fecha_segundo:null,nivel_riesgo:null,resultado:"No Apto",comentario:null},dialog:!1,tableItems:[],formItems:[],editedIndex:-1,list:[],valid:null,formTitle:"Exámenes de Somnolencia",urlSearch:"/consulta/exsomnolencia/search"});R(async()=>{e.list=await O(e.endpoints)});function Q(u){e.dialog=!0,e.itemsView={...u}}function w(){e.dialog=!1}const U=async()=>{await P(e)};return(u,a)=>{const i=o("v-toolbar-title"),s=o("v-spacer"),f=o("v-toolbar"),m=o("v-card-title"),r=o("v-text-field"),d=o("v-select"),V=o("v-switch"),c=o("v-col"),g=o("v-row"),h=o("v-card-text"),p=o("v-btn"),k=o("download-excel"),b=o("v-card-actions"),_=o("v-container"),C=o("v-tooltip"),N=o("v-data-table"),v=o("v-sheet"),x=o("v-card"),S=o("v-form"),E=o("v-dialog");return D(),I(_,{fluid:""},{default:n(()=>[l(x,null,{default:n(()=>[l(m,null,{default:n(()=>[l(f,{flat:""},{default:n(()=>[l(i,null,{default:n(()=>[y(B(e.formTitle),1)]),_:1}),l(s)]),_:1})]),_:1}),l(h,null,{default:n(()=>[l(v,{color:"white",elevation:4,class:$("rounded-lg ma-2 pa-2")},{default:n(()=>[l(_,{fluid:""},{default:n(()=>[l(h,null,{default:n(()=>[l(g,null,{default:n(()=>[l(c,null,{default:n(()=>[l(r,{label:"Rut",variant:"underlined",rules:e.rutRules,modelValue:e.searchQuery.rut,"onUpdate:modelValue":a[0]||(a[0]=t=>e.searchQuery.rut=t)},null,8,["rules","modelValue"]),l(d,{items:e.list.empresa,"item-title":"descripcion","item-value":"id",label:"Empresa",modelValue:e.searchQuery.empresa,"onUpdate:modelValue":a[1]||(a[1]=t=>e.searchQuery.empresa=t),variant:"underlined",clearable:""},null,8,["items","modelValue"]),l(d,{label:"Unidad",variant:"underlined",modelValue:e.searchQuery.unidad,"onUpdate:modelValue":a[2]||(a[2]=t=>e.searchQuery.unidad=t),items:e.list.unidad,"item-title":"descripcion","item-value":"id"},null,8,["modelValue","items"]),l(d,{label:"Area",modelValue:e.searchQuery.area,"onUpdate:modelValue":a[3]||(a[3]=t=>e.searchQuery.area=t),variant:"underlined",items:e.list.area,"item-title":"descripcion","item-value":"id"},null,8,["modelValue","items"]),l(d,{label:"Area (cecos)",modelValue:e.searchQuery.ceco,"onUpdate:modelValue":a[4]||(a[4]=t=>e.searchQuery.ceco=t),variant:"underlined",items:e.list.ceco,"item-title":"descripcion","item-value":"id"},null,8,["modelValue","items"]),l(V,{modelValue:e.searchQuery.activo,"onUpdate:modelValue":a[5]||(a[5]=t=>e.searchQuery.activo=t),"hide-details":"","true-value":"true","false-value":"false",class:"ml-4 mb-4",variant:"underlined",color:"green-darken-3",value:"true",inset:!0,label:`Paciente: ${e.searchQuery.activo.toString()}`},null,8,["modelValue","label"]),l(V,{modelValue:e.searchQuery.resultado,"onUpdate:modelValue":a[6]||(a[6]=t=>e.searchQuery.resultado=t),"hide-details":"","true-value":"Apto","false-value":"No apto",class:"ml-4 mb-4",variant:"underlined",color:"green-darken-3",value:"No apto",inset:!0,label:`Resultado: ${e.searchQuery.resultado.toString()}`},null,8,["modelValue","label"])]),_:1}),l(c,null,{default:n(()=>[l(d,{label:"Nivel de Riesgo",modelValue:e.searchQuery.nivel_riesgo,"onUpdate:modelValue":a[7]||(a[7]=t=>e.searchQuery.nivel_riesgo=t),variant:"underlined",items:e.list.nivel_riesgo,"item-title":"descripcion","item-value":"id"},null,8,["modelValue","items"]),l(r,{label:"Fecha exámen (desde)",variant:"underlined",modelValue:e.searchQuery.fecha_examen.desde,"onUpdate:modelValue":a[8]||(a[8]=t=>e.searchQuery.fecha_examen.desde=t),type:"date"},null,8,["modelValue"]),l(r,{label:"Fecha exámen (hasta)",variant:"underlined",type:"date",modelValue:e.searchQuery.fecha_examen.hasta,"onUpdate:modelValue":a[9]||(a[9]=t=>e.searchQuery.fecha_examen.hasta=t)},null,8,["modelValue"]),l(r,{label:"Fecha primer exámen (desde)",variant:"underlined",modelValue:e.searchQuery.fecha_primer.desde,"onUpdate:modelValue":a[10]||(a[10]=t=>e.searchQuery.fecha_primer.desde=t),type:"date"},null,8,["modelValue"]),l(r,{label:"Fecha primer exámen (hasta)",variant:"underlined",type:"date",modelValue:e.searchQuery.fecha_primer.hasta,"onUpdate:modelValue":a[11]||(a[11]=t=>e.searchQuery.fecha_primer.hasta=t)},null,8,["modelValue"]),l(r,{label:"Fecha segundo exámen (desde)",variant:"underlined",modelValue:e.searchQuery.fecha_segundo.desde,"onUpdate:modelValue":a[12]||(a[12]=t=>e.searchQuery.fecha_segundo.desde=t),type:"date"},null,8,["modelValue"]),l(r,{label:"Fecha segundo exámen (hasta)",variant:"underlined",type:"date",modelValue:e.searchQuery.fecha_segundo.hasta,"onUpdate:modelValue":a[13]||(a[13]=t=>e.searchQuery.fecha_segundo.hasta=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(b,null,{default:n(()=>[l(p,{"prepend-icon":"mdi-file-search",variant:"underlined",color:"#662D91",loading:e.loading,onClick:U},{default:n(()=>[y(" Buscar ")]),_:1},8,["loading"]),l(p,{"prepend-icon":"mdi-microsoft-excel",variant:"underlined",color:"#662D91"},{default:n(()=>[l(k,{data:e.tableItems,name:"consulta_somnolencia.xls"},{default:n(()=>[y(" Bajar archivo ")]),_:1},8,["data"])]),_:1})]),_:1})]),_:1}),l(_,{fluid:""},{default:n(()=>[l(N,{headers:e.headers,items:e.tableItems,"sort-by":[{key:"apellidos",order:"asc"}]},{"item.actions":n(({item:t})=>[l(C,{text:"Ver detalles",location:"top"},{activator:n(({props:F})=>[l(p,j(F,{density:"compact",color:"#662D91",class:"mr-2 ml-2",icon:"mdi-eye",onClick:G=>Q(t)}),null,16,["onClick"])]),_:2},1024)]),_:1},8,["headers","items"])]),_:1})]),_:1})]),_:1})]),_:1}),l(_,null,{default:n(()=>[l(E,{modelValue:e.dialog,"onUpdate:modelValue":a[21]||(a[21]=t=>e.dialog=t)},{default:n(()=>[l(v,{elevation:"4",class:"ma-4 pa-4"},{default:n(()=>[l(x,null,{default:n(()=>[l(S,{readonly:""},{default:n(()=>[l(v,{elevation:"2",class:"ma-2 pa-2"},{default:n(()=>[l(m,null,{default:n(()=>[z]),_:1})]),_:1}),l(h,null,{default:n(()=>[l(g,null,{default:n(()=>[l(c,null,{default:n(()=>[l(r,{modelValue:e.itemsView.nivel_riesgo,"onUpdate:modelValue":a[14]||(a[14]=t=>e.itemsView.nivel_riesgo=t),label:"Nivel de Riesgo",type:"text",variant:"underlined"},null,8,["modelValue"]),l(r,{modelValue:e.itemsView.resultado,"onUpdate:modelValue":a[15]||(a[15]=t=>e.itemsView.resultado=t),label:"Resultado",type:"text",variant:"underlined"},null,8,["modelValue"]),l(r,{modelValue:e.itemsView.comentario,"onUpdate:modelValue":a[16]||(a[16]=t=>e.itemsView.comentario=t),label:"Comentario",type:"text",variant:"underlined"},null,8,["modelValue"])]),_:1}),l(c,null,{default:n(()=>[l(r,{modelValue:e.itemsView.fecha_examen,"onUpdate:modelValue":a[17]||(a[17]=t=>e.itemsView.fecha_examen=t),label:"Fecha Examen",type:"date",variant:"underlined"},null,8,["modelValue"]),l(r,{modelValue:e.itemsView.fecha_primer,"onUpdate:modelValue":a[18]||(a[18]=t=>e.itemsView.fecha_primer=t),label:"Fecha primer",type:"date",variant:"underlined"},null,8,["modelValue"]),l(r,{modelValue:e.itemsView.fecha_segundo,"onUpdate:modelValue":a[19]||(a[19]=t=>e.itemsView.fecha_segundo=t),label:"Fecha segundo",type:"date",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(v,{elevation:"2",class:"ma-2 pa-2"},{default:n(()=>[l(b,null,{default:n(()=>[l(p,{class:"mr-2 ml-2",color:"#662D91",text:"Cerrar",variant:"underlined",onClick:a[20]||(a[20]=t=>w())})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),ee=T(K,[["__file","/home/blueshadows/www/vulco/resources/js/Pages/Consultas/ConsultaExSomnolencia.vue"]]);export{ee as default};
//# sourceMappingURL=ConsultaExSomnolencia-B4kvFHR5.js.map