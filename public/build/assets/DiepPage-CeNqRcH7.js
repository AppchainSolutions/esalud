import{u as R}from"./store-DaKE2WGm.js";import{f as q,c,a as z,o as H,b as J,d as K,e as L,g as W}from"./helper-CDlv6Sjb.js";import{x as X,y as Y,h as Z,j as n,o as ee,c as te,w as o,b as t,f as u,t as I,a as le,m as V}from"./app-D2OY3JKk.js";const oe={class:"text-h5"},re={__name:"DiepPage",setup(ae){const g=R(),e=X({endpoints:["cie10","seguro","tipo_enfermedad"],headers:[{title:"Folio",align:"start",sortable:!0,key:"folio"},{title:"Tipo de enfermedad",align:"start",sortable:!0,key:"tipo_enfermedad.descripcion"},{title:"Fecha de admision",align:"start",sortable:!0,key:"fecha_admision"},{title:"Estado",align:"start",sortable:!0,key:"estado_diep"},{title:"Acciones",align:"center",key:"actions"}],editedItem:{comentario:null,enfermedad:null,estado_diep:"No Aprobado",fecha_admision:null,folio:null,idpgp:null,numero_resolucion:null,origen_denuncia:null,paciente_id:null,seguro:null,sucursal:null,tipo_enfermedad:null,validado_por:null},defaultItem:{comentario:null,enfermedad:null,estado_diep:"No Aprobado",fecha_admision:null,folio:null,idpgp:null,numero_resolucion:null,origen_denuncia:null,paciente_id:null,seguro:null,sucursal:null,tipo_enfermedad:null,validado_por:null},searchQuery:{paciente_id:null},dialog:!1,tableItems:[],editedIndex:-1,list:[],loading:!1,valid:null,formTitle:"DIEP",formCrear:"Nueva DIEP",formEdit:"Editar DIEP",urlShow:"/diep/show",urlUpdate:"/diep/update",urlDelete:"/diep/delete",urlStore:"/diep"});Y(async()=>{e.list=await q(e.endpoints)});const y=Z(()=>e.editedIndex===-1?e.formCrear:e.formEdit);function A(){c(e)}const p=async()=>{e.searchQuery.paciente_id=g.getSelected.id,await z(e)};function x(){H(e)}function k(){return e.editedIndex>-1?E():C()}const C=async()=>{await J(e),c(e)};function w(r){K(e,r)}const E=async()=>{await L(e),c(e)},U=async r=>{await W(e,r)};return(r,a)=>{const D=n("v-toolbar-title"),h=n("v-divider"),_=n("v-spacer"),d=n("v-btn"),N=n("v-card-title"),i=n("v-text-field"),S=n("v-combobox"),v=n("v-select"),s=n("v-col"),T=n("v-switch"),P=n("v-row"),f=n("v-container"),F=n("v-card-text"),B=n("v-card-actions"),$=n("v-form"),G=n("v-card"),Q=n("v-dialog"),j=n("v-toolbar"),b=n("v-tooltip"),M=n("v-data-table");return ee(),te(f,null,{default:o(()=>[t(M,{headers:e.headers,items:e.tableItems},{top:o(()=>[t(j,{flat:""},{default:o(()=>[t(D,null,{default:o(()=>[u(I(e.formTitle),1)]),_:1}),t(h,{class:"mx-4",inset:"",vertical:""}),t(_),t(Q,{modelValue:e.dialog,"onUpdate:modelValue":a[10]||(a[10]=l=>e.dialog=l)},{activator:o(({props:l})=>[t(d,{icon:"mdi-update",color:"#009AA4",variant:"tonal",class:"ma-2",onClick:p}),t(d,{icon:"mdi-account-multiple-plus",class:"ma-2",color:"#009AA4",variant:"tonal",onClick:x})]),default:o(()=>[t(G,null,{default:o(()=>[t($,null,{default:o(()=>[t(N,null,{default:o(()=>[le("span",oe,I(y.value),1)]),_:1}),t(F,null,{default:o(()=>[t(f,null,{default:o(()=>[t(P,null,{default:o(()=>[t(s,null,{default:o(()=>[t(i,{modelValue:e.editedItem.folio,"onUpdate:modelValue":a[0]||(a[0]=l=>e.editedItem.folio=l),label:"Folio",type:"number",variant:"underlined",clearable:""},null,8,["modelValue"]),t(i,{modelValue:e.editedItem.idpgp,"onUpdate:modelValue":a[1]||(a[1]=l=>e.editedItem.idpgp=l),label:"IDPGP",type:"number",variant:"underlined",clearable:""},null,8,["modelValue"]),t(S,{modelValue:e.editedItem.enfermedad,"onUpdate:modelValue":a[2]||(a[2]=l=>e.editedItem.enfermedad=l),items:e.list.cie10,"item-title":"descripcion","item-value":"id",label:"Enfermedad",variant:"underlined",clearable:"",single:""},null,8,["modelValue","items"]),t(v,{modelValue:e.editedItem.seguro,"onUpdate:modelValue":a[3]||(a[3]=l=>e.editedItem.seguro=l),items:e.list.seguro,"item-title":"descripcion","item-value":"id",label:"Adm. Seguro de Vida",variant:"underlined",clearable:""},null,8,["modelValue","items"])]),_:1}),t(s,null,{default:o(()=>[t(T,{modelValue:e.editedItem.estado_diep,"onUpdate:modelValue":a[4]||(a[4]=l=>e.editedItem.estado_diep=l),"hide-details":"","true-value":"Aprobado","false-value":"No Aprobado",variant:"underlined",color:"green-darken-3",value:"No Aprobado",inset:!0,label:`Estatus Diep ${e.editedItem.estado_diep}`},null,8,["modelValue","label"]),t(i,{modelValue:e.editedItem.fecha_admision,"onUpdate:modelValue":a[5]||(a[5]=l=>e.editedItem.fecha_admision=l),label:"fecha_admision",type:"date",variant:"underlined",class:"mt-6",clearable:""},null,8,["modelValue"]),t(i,{modelValue:e.editedItem.numero_resolucion,"onUpdate:modelValue":a[6]||(a[6]=l=>e.editedItem.numero_resolucion=l),label:"Número de resolución",type:"number",variant:"underlined",clearable:""},null,8,["modelValue"]),t(i,{modelValue:e.editedItem.origen_denuncia,"onUpdate:modelValue":a[7]||(a[7]=l=>e.editedItem.origen_denuncia=l),label:"Origen denuncia",type:"text",variant:"underlined",clearable:""},null,8,["modelValue"])]),_:1}),t(s,null,{default:o(()=>[t(v,{modelValue:e.editedItem.tipo_enfermedad,"onUpdate:modelValue":a[8]||(a[8]=l=>e.editedItem.tipo_enfermedad=l),label:"Tipo de enfermedad",variant:"underlined",items:e.list.tipo_enfermedad,"item-title":"descripcion","item-value":"id",clearable:""},null,8,["modelValue","items"]),t(i,{modelValue:e.editedItem.validado_por,"onUpdate:modelValue":a[9]||(a[9]=l=>e.editedItem.validado_por=l),label:"Validado por",type:"text",variant:"underlined",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(B,null,{default:o(()=>[t(_),t(d,{color:"#009AA4",variant:"tonal",onClick:A},{default:o(()=>[u(" Cancelar ")]),_:1}),t(d,{color:"#009AA4",variant:"tonal",onClick:k},{default:o(()=>[u(" Guardar ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":o(({item:l})=>[t(b,{text:"Editar",location:"top"},{activator:o(({props:m})=>[t(d,V(m,{density:"compact",class:"mr-2 ml-2",color:"#009AA4",icon:"mdi-account-edit",onClick:O=>w(l)}),null,16,["onClick"])]),_:2},1024),t(b,{text:"Eliminar",location:"top"},{activator:o(({props:m})=>[t(d,V(m,{density:"compact",class:"mr-2 ml-2",color:"#009AA4",icon:"mdi-delete",onClick:O=>U(l)}),null,16,["onClick"])]),_:2},1024)]),"no-data":o(()=>[t(d,{color:"#009AA4",variant:"tonal",onClick:p},{default:o(()=>[u(" Iniciar ")]),_:1})]),_:1},8,["headers","items"])]),_:1})}}};export{re as default};
//# sourceMappingURL=DiepPage-CeNqRcH7.js.map