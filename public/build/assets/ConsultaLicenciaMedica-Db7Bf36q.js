import{x as I,y as M,j as n,o as P,c as D,w as i,b as o,f as y,t as g,n as E,m as N,a as j}from"./app-CmmVjTXO.js";import{A as R}from"./AppLayout-BHf8mxR6.js";import{f as S,h as B}from"./helper-FW47krof.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-DIp7Rf8v.js";import"./store-CMjr-ERy.js";const O={class:"text-h5"},H=Object.assign({layout:R},{__name:"ConsultaLicenciaMedica",setup(K){const e=I({endpoints:["area","ceco","empresa","planta","unidad"],headers:[{title:"RUT",align:"center",sortable:!0,key:"rut"},{title:"Nombre",align:"center",sortable:!0,key:"nombre"},{title:"Apellidos",sortable:!0,align:"center",key:"apellidos"},{title:"Empresa",sortable:!0,align:"center",key:"empresa.descripcion"},{title:"Fecha de inicio",sortable:!0,align:"center",key:"fecha_inicio"},{title:"Fecha de término",sortable:!0,align:"center",key:"fecha_termino"},{title:"Fecha de emisión",sortable:!0,align:"center",key:"fecha_emision"},{title:"Fecha de recepción",sortable:!0,align:"center",key:"fecha_recepcion"},{title:"Acciones",align:"center",key:"actions"}],rutRules:[s=>{if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(s))return!1;let c=s.split("-"),u=c[0],v=c[1].toLowerCase(),p=0,t=1;for(;u;u=Math.floor(u/10))t=(t+u%10*(9-p++%6))%11;let r=t?t-1:"k";return v==r?!0:"El rut es incorrecto"}],itemsView:{paciente_id:null,fecha_emision:null,fecha_inicio:null,fecha_recepcion:null,fecha_termino:null,caract_reposo:null,lugar_reposo:null,tipo_licencia:null,recuperabilidad_laboral:!1,inicio_invalidez:!1,titulo_profesional:null,nombre_profesional:null,comentario:null},searchQuery:{activo:!0,area:null,ceco:null,empresa:null,planta:null,rut:null,unidad:null,fecha_emision:{desde:null,hasta:null},fecha_recepcion:{desde:null,hasta:null},fecha_inicio:{desde:null,hasta:null},fecha_termino:{desde:null,hasta:null},caract_reposo:null,lugar_reposo:null,tipo_licencia:null,recuperabilidad_laboral:!1,inicio_invalidez:!1,titulo_profesional:null,nombre_profesional:null},caract_reposo:["Total","Parcial - Mañana","Parcial - Tarde","Parcial - Noche"],lugar_reposo:["Domicilio","Hospital","Otro domicilio"],tipo_licencia:["Accidente del trabajo o trayecto","Enfermedad grave hijo menor de 1 año","Enfermedad o accidente común","Enfermedad profesional","Licencia maternal pre y post natal","Patología del embarazo","Prorroga medicina preventiva"],titulo_profesional:["Médico","Dentista","Matrona"],dialog:!1,tableItems:[],formItems:[],editedIndex:-1,list:[],loadingSearch:!1,valid:null,formTitle:"Consulta de Licencias Médicas",urlSearch:"/consulta/licencia/search"});M(async()=>{e.list=await S(e.endpoints)});function U(s){e.dialog=!0,e.itemsView={...s}}function x(){e.dialog=!1}const k=async()=>{await B(e)};return(s,l)=>{const c=n("v-toolbar-title"),u=n("v-spacer"),v=n("v-toolbar"),p=n("v-card-title"),t=n("v-text-field"),r=n("v-select"),d=n("v-col"),m=n("v-switch"),h=n("v-row"),b=n("v-card-text"),V=n("v-btn"),C=n("download-excel"),w=n("v-card-actions"),_=n("v-container"),F=n("v-tooltip"),L=n("v-data-table"),f=n("v-sheet"),Q=n("v-card"),A=n("v-form"),T=n("v-dialog");return P(),D(_,{fluid:""},{default:i(()=>[o(Q,null,{default:i(()=>[o(p,null,{default:i(()=>[o(v,{flat:""},{default:i(()=>[o(c,null,{default:i(()=>[y(g(e.formTitle),1)]),_:1}),o(u)]),_:1})]),_:1}),o(b,null,{default:i(()=>[o(f,{color:"white",elevation:4,class:E("rounded-lg ma-2 pa-2")},{default:i(()=>[o(_,{fluid:""},{default:i(()=>[o(b,null,{default:i(()=>[o(h,null,{default:i(()=>[o(d,null,{default:i(()=>[o(t,{clearable:"",label:"Rut",variant:"underlined",rules:e.rutRules,modelValue:e.searchQuery.rut,"onUpdate:modelValue":l[0]||(l[0]=a=>e.searchQuery.rut=a)},null,8,["rules","modelValue"]),o(r,{clearable:"",label:"Empresa",variant:"underlined",modelValue:e.searchQuery.empresa,"onUpdate:modelValue":l[1]||(l[1]=a=>e.searchQuery.empresa=a),items:e.list.empresa,"item-title":"descripcion","item-value":"id"},null,8,["modelValue","items"]),o(r,{clearable:"",label:"Unidad",variant:"underlined",modelValue:e.searchQuery.unidad,"onUpdate:modelValue":l[2]||(l[2]=a=>e.searchQuery.unidad=a),items:e.list.unidad,"item-title":"descripcion","item-value":"id"},null,8,["modelValue","items"]),o(r,{clearable:"",label:"Area",modelValue:e.searchQuery.area,"onUpdate:modelValue":l[3]||(l[3]=a=>e.searchQuery.area=a),variant:"underlined",items:e.list.area,"item-title":"descripcion","item-value":"id"},null,8,["modelValue","items"]),o(r,{clearable:"",label:"Area (cecos)",modelValue:e.searchQuery.ceco,"onUpdate:modelValue":l[4]||(l[4]=a=>e.searchQuery.ceco=a),variant:"underlined",items:e.list.ceco,"item-title":"descripcion","item-value":"id"},null,8,["modelValue","items"])]),_:1}),o(d,null,{default:i(()=>[o(t,{clearable:"",label:"Fecha emision (desde)",variant:"underlined",modelValue:e.searchQuery.fecha_emision.desde,"onUpdate:modelValue":l[5]||(l[5]=a=>e.searchQuery.fecha_emision.desde=a),type:"date"},null,8,["modelValue"]),o(t,{clearable:"",label:"Fecha emisión (hasta)",variant:"underlined",type:"date",modelValue:e.searchQuery.fecha_emision.hasta,"onUpdate:modelValue":l[6]||(l[6]=a=>e.searchQuery.fecha_emision.hasta=a)},null,8,["modelValue"]),o(t,{clearable:"",label:"Fecha recepción (desde)",variant:"underlined",modelValue:e.searchQuery.fecha_recepcion.desde,"onUpdate:modelValue":l[7]||(l[7]=a=>e.searchQuery.fecha_recepcion.desde=a),type:"date"},null,8,["modelValue"]),o(t,{clearable:"",label:"Fecha recepción (hasta)",variant:"underlined",type:"date",modelValue:e.searchQuery.fecha_recepcion.hasta,"onUpdate:modelValue":l[8]||(l[8]=a=>e.searchQuery.fecha_recepcion.hasta=a)},null,8,["modelValue"]),o(m,{modelValue:e.searchQuery.activo,"onUpdate:modelValue":l[9]||(l[9]=a=>e.searchQuery.activo=a),"hide-details":"",class:"ml-4 mb-4",variant:"underlined",color:"green-darken-3",inset:"",label:"Activo"},null,8,["modelValue"])]),_:1}),o(d,null,{default:i(()=>[o(t,{clearable:"",label:"Fecha inicio (desde)",variant:"underlined",type:"date",modelValue:e.searchQuery.fecha_inicio.desde,"onUpdate:modelValue":l[10]||(l[10]=a=>e.searchQuery.fecha_inicio.desde=a)},null,8,["modelValue"]),o(t,{clearable:"",label:"Fecha inicio (hasta)",variant:"underlined",type:"date",modelValue:e.searchQuery.fecha_inicio.hasta,"onUpdate:modelValue":l[11]||(l[11]=a=>e.searchQuery.fecha_inicio.hasta=a)},null,8,["modelValue"]),o(t,{clearable:"",label:"Fecha termino (desde)",variant:"underlined",type:"date",modelValue:e.searchQuery.fecha_termino.desde,"onUpdate:modelValue":l[12]||(l[12]=a=>e.searchQuery.fecha_termino.desde=a)},null,8,["modelValue"]),o(t,{clearable:"",label:"Fecha termino (hasta)",variant:"underlined",type:"date",modelValue:e.searchQuery.fecha_termino.hasta,"onUpdate:modelValue":l[13]||(l[13]=a=>e.searchQuery.fecha_termino.hasta=a)},null,8,["modelValue"])]),_:1}),o(d,null,{default:i(()=>[o(r,{modelValue:e.searchQuery.caract_reposo,"onUpdate:modelValue":l[14]||(l[14]=a=>e.searchQuery.caract_reposo=a),label:"Características del reposo",variant:"underlined",items:e.caract_reposo,clearable:""},null,8,["modelValue","items"]),o(r,{modelValue:e.searchQuery.lugar_reposo,"onUpdate:modelValue":l[15]||(l[15]=a=>e.searchQuery.lugar_reposo=a),label:"Lugar del reposo",variant:"underlined",items:e.lugar_reposo,clearable:""},null,8,["modelValue","items"]),o(r,{modelValue:e.searchQuery.tipo_licencia,"onUpdate:modelValue":l[16]||(l[16]=a=>e.searchQuery.tipo_licencia=a),label:"Tipo de Licencia",variant:"underlined",items:e.tipo_licencia,clearable:""},null,8,["modelValue","items"]),o(m,{modelValue:e.searchQuery.recuperabilidad_laboral,"onUpdate:modelValue":l[17]||(l[17]=a=>e.searchQuery.recuperabilidad_laboral=a),"hide-details":"",class:"ml-4",variant:"underlined",color:"primary",inset:"",label:"Recuperabilidad Laboral"},null,8,["modelValue"]),o(m,{modelValue:e.searchQuery.inicio_invalidez,"onUpdate:modelValue":l[18]||(l[18]=a=>e.searchQuery.inicio_invalidez=a),"hide-details":"",class:"ml-4",variant:"underlined",color:"primary",inset:"",label:"Inicio Invalidez"},null,8,["modelValue"]),o(t,{modelValue:e.searchQuery.nombre_profesional,"onUpdate:modelValue":l[19]||(l[19]=a=>e.searchQuery.nombre_profesional=a),label:"Nombre del Profesional",type:"text",variant:"underlined"},null,8,["modelValue"]),o(r,{modelValue:e.searchQuery.titulo_profesional,"onUpdate:modelValue":l[20]||(l[20]=a=>e.searchQuery.titulo_profesional=a),label:"Titulo profesional",variant:"underlined",items:e.titulo_profesional,clearable:""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),o(w,null,{default:i(()=>[o(V,{"prepend-icon":"mdi-file-search",variant:"tonal",color:"#009AA4",loading:e.loadingSearch,onClick:k},{default:i(()=>[y(" Buscar ")]),_:1},8,["loading"]),o(V,{"prepend-icon":"mdi-microsoft-excel",variant:"tonal",color:"#009AA4"},{default:i(()=>[o(C,{data:e.tableItems,name:"consulta_licencias.xls"},{default:i(()=>[y(" Bajar archivo ")]),_:1},8,["data"])]),_:1})]),_:1})]),_:1}),o(_,{fluid:""},{default:i(()=>[o(L,{headers:e.headers,items:e.tableItems,"sort-by":[{key:"apellidos",order:"asc"}]},{"item.actions":i(({item:a})=>[o(F,{text:"Ver detalles",location:"top"},{activator:i(({props:z})=>[o(V,N(z,{density:"compact",color:"#662D91",class:"mr-2 ml-2",icon:"mdi-eye",onClick:q=>U(a)}),null,16,["onClick"])]),_:2},1024)]),_:1},8,["headers","items"])]),_:1})]),_:1})]),_:1})]),_:1}),o(_,null,{default:i(()=>[o(T,{modelValue:e.dialog,"onUpdate:modelValue":l[35]||(l[35]=a=>e.dialog=a)},{default:i(()=>[o(f,{elevation:"4",class:"ma-4 pa-4"},{default:i(()=>[o(Q,null,{default:i(()=>[o(A,{readonly:""},{default:i(()=>[o(f,{elevation:"2",class:"ma-2 pa-2"},{default:i(()=>[o(p,null,{default:i(()=>[j("span",O,g(e.formTitle),1)]),_:1})]),_:1}),o(b,null,{default:i(()=>[o(h,null,{default:i(()=>[o(d,null,{default:i(()=>[o(t,{modelValue:e.itemsView.folio,"onUpdate:modelValue":l[21]||(l[21]=a=>e.itemsView.folio=a),label:"Folio",type:"number",variant:"underlined"},null,8,["modelValue"]),o(t,{modelValue:e.itemsView.fecha_emision,"onUpdate:modelValue":l[22]||(l[22]=a=>e.itemsView.fecha_emision=a),label:"Fecha emisión",type:"date",variant:"underlined"},null,8,["modelValue"]),o(t,{modelValue:e.itemsView.fecha_recepcion,"onUpdate:modelValue":l[23]||(l[23]=a=>e.itemsView.fecha_recepcion=a),label:"Fecha recepción",type:"date",variant:"underlined"},null,8,["modelValue"])]),_:1}),o(d,null,{default:i(()=>[o(t,{modelValue:e.itemsView.fecha_inicio,"onUpdate:modelValue":l[24]||(l[24]=a=>e.itemsView.fecha_inicio=a),label:"Fecha inicio",type:"date",variant:"underlined"},null,8,["modelValue"]),o(t,{modelValue:e.itemsView.fecha_termino,"onUpdate:modelValue":l[25]||(l[25]=a=>e.itemsView.fecha_termino=a),label:"Fecha de término",type:"date",variant:"underlined"},null,8,["modelValue"]),o(t,{modelValue:e.itemsView.comentario,"onUpdate:modelValue":l[26]||(l[26]=a=>e.itemsView.comentario=a),label:"Comentario",type:"text",variant:"underlined"},null,8,["modelValue"])]),_:1}),o(d,null,{default:i(()=>[o(r,{modelValue:e.itemsView.caract_reposo,"onUpdate:modelValue":l[27]||(l[27]=a=>e.itemsView.caract_reposo=a),label:"Características del reposo",variant:"underlined",items:e.caract_reposo,clearable:""},null,8,["modelValue","items"]),o(r,{modelValue:e.itemsView.lugar_reposo,"onUpdate:modelValue":l[28]||(l[28]=a=>e.itemsView.lugar_reposo=a),label:"Lugar del reposo",variant:"underlined",items:e.lugar_reposo,clearable:""},null,8,["modelValue","items"]),o(r,{modelValue:e.itemsView.tipo_licencia,"onUpdate:modelValue":l[29]||(l[29]=a=>e.itemsView.tipo_licencia=a),label:"Tipo de Licencia",variant:"underlined",items:e.tipo_licencia,clearable:""},null,8,["modelValue","items"])]),_:1}),o(d,null,{default:i(()=>[o(m,{modelValue:e.itemsView.recuperabilidad_laboral,"onUpdate:modelValue":l[30]||(l[30]=a=>e.itemsView.recuperabilidad_laboral=a),"hide-details":"",class:"ml-4",variant:"underlined",color:"primary",inset:"",label:"Recuperabilidad Laboral"},null,8,["modelValue"]),o(m,{modelValue:e.itemsView.inicio_invalidez,"onUpdate:modelValue":l[31]||(l[31]=a=>e.itemsView.inicio_invalidez=a),"hide-details":"",class:"ml-4",variant:"underlined",color:"primary",inset:"",label:"Inicio Invalidez"},null,8,["modelValue"]),o(t,{modelValue:e.itemsView.nombre_profesional,"onUpdate:modelValue":l[32]||(l[32]=a=>e.itemsView.nombre_profesional=a),label:"Nombre del Profesional",type:"text",variant:"underlined"},null,8,["modelValue"]),o(r,{modelValue:e.itemsView.titulo_profesional,"onUpdate:modelValue":l[33]||(l[33]=a=>e.itemsView.titulo_profesional=a),label:"Titulo profesional",variant:"underlined",items:e.titulo_profesional,clearable:""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),o(f,{elevation:"2",class:"ma-2 pa-2"},{default:i(()=>[o(w,null,{default:i(()=>[o(V,{class:"mr-2 ml-2",color:"#662D91",text:"Cerrar",variant:"tonal",onClick:l[34]||(l[34]=a=>x())})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),ee=$(H,[["__file","/home/blueshadows/www/vulco/resources/js/Pages/Consultas/ConsultaLicenciaMedica.vue"]]);export{ee as default};
//# sourceMappingURL=ConsultaLicenciaMedica-Db7Bf36q.js.map