import{x as Q,h as $,j as a,o as R,c as q,w as o,b as t,f as c,t as g,a as z,m as h}from"./app-CmmVjTXO.js";import{u as J}from"./store-CMjr-ERy.js";import{c as u,a as K,o as L,b as M,d as O,e as W,g as X}from"./helper-FW47krof.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Z={class:"text-h5"},ee={__name:"ExamenHumoNegro",setup(te){const x=J(),e=Q({headers:[{title:"IDPGP",align:"start",sortable:!0,key:"idpgp"},{title:"Estatus",align:"start",sortable:!0,key:"estatus"},{title:"Fecha Ingreso",align:"start",sortable:!0,key:"fecha_ingreso"},{title:"Fecha Control",align:"start",sortable:!0,key:"fecha_control"},{title:"Fecha Próx. Control",align:"start",sortable:!0,key:"fecha_prox_control"},{title:"Fecha Últ. Control",align:"start",sortable:!0,key:"fecha_ult_control"},{title:"Acciones",align:"center",key:"actions"}],editedItem:{paciente_id:null,idpgp:null,fecha_ingreso:null,fecha_control:null,fecha_prox_control:null,fecha_ult_control:null,comentario:null},defaultItem:{paciente_id:null,idpgp:null,fecha_ingreso:null,fecha_control:null,fecha_prox_control:null,fecha_ult_control:null,comentario:null},searchQuery:{paciente_id:null},dialog:!1,tableItems:[],editedIndex:-1,list:[],loading:!1,valid:null,formTitle:"Humos Negros",formCrear:"Nuevo exámen de Humos Negros",formEdit:"Editar exámen de Humos Negros",urlShow:"/examen/humonegro/show",urlUpdate:"/examen/humonegro/update",urlDelete:"/examen/humonegro/delete",urlStore:"/examen/humonegro"}),I=$(()=>e.editedIndex===-1?e.formCrear:e.formEdit);function b(){u(e)}const m=async()=>{e.searchQuery.paciente_id=x.getSelected.id,await K(e)};function V(){L(e)}function y(){return e.editedIndex>-1?w():C()}const C=async()=>{await M(e),u(e)};function k(i){O(e,i)}const w=async()=>{await W(e),u(e)},A=async i=>{await X(e,i)};return(i,n)=>{const E=a("v-toolbar-title"),F=a("v-divider"),_=a("v-spacer"),r=a("v-btn"),N=a("v-card-title"),d=a("v-text-field"),p=a("v-col"),U=a("v-row"),v=a("v-container"),S=a("v-card-text"),P=a("v-card-actions"),H=a("v-form"),T=a("v-card"),D=a("v-dialog"),B=a("v-toolbar"),f=a("v-tooltip"),G=a("v-data-table");return R(),q(v,null,{default:o(()=>[t(G,{headers:e.headers,items:e.tableItems},{top:o(()=>[t(B,{flat:""},{default:o(()=>[t(E,null,{default:o(()=>[c(g(e.formTitle),1)]),_:1}),t(F,{class:"mx-4",inset:"",vertical:""}),t(_),t(D,{modelValue:e.dialog,"onUpdate:modelValue":n[7]||(n[7]=l=>e.dialog=l)},{activator:o(({props:l})=>[t(r,{icon:"mdi-update",class:"ma-2",color:"#009AA4",variant:"tonal",onClick:m}),t(r,{icon:"mdi-account-multiple-plus",class:"ma-2",color:"#009AA4",variant:"tonal",onClick:V})]),default:o(()=>[t(T,null,{default:o(()=>[t(H,null,{default:o(()=>[t(N,null,{default:o(()=>[z("span",Z,g(I.value),1)]),_:1}),t(S,null,{default:o(()=>[t(v,null,{default:o(()=>[t(U,null,{default:o(()=>[t(p,null,{default:o(()=>[t(d,{modelValue:e.editedItem.idpgp,"onUpdate:modelValue":n[0]||(n[0]=l=>e.editedItem.idpgp=l),label:"IDPGP",type:"number",variant:"underlined"},null,8,["modelValue"]),t(d,{modelValue:e.editedItem.estatus,"onUpdate:modelValue":n[1]||(n[1]=l=>e.editedItem.estatus=l),label:"Estatus",type:"text",variant:"underlined"},null,8,["modelValue"]),t(d,{modelValue:e.editedItem.fecha_ingreso,"onUpdate:modelValue":n[2]||(n[2]=l=>e.editedItem.fecha_ingreso=l),label:"Ingreso",type:"date",variant:"underlined"},null,8,["modelValue"]),t(d,{modelValue:e.editedItem.fecha_control,"onUpdate:modelValue":n[3]||(n[3]=l=>e.editedItem.fecha_control=l),label:"Fecha control",type:"date",variant:"underlined"},null,8,["modelValue"])]),_:1}),t(p,null,{default:o(()=>[t(d,{modelValue:e.editedItem.fecha_prox_control,"onUpdate:modelValue":n[4]||(n[4]=l=>e.editedItem.fecha_prox_control=l),label:"Fecha prox. control",type:"date",variant:"underlined"},null,8,["modelValue"]),t(d,{modelValue:e.editedItem.fecha_ult_control,"onUpdate:modelValue":n[5]||(n[5]=l=>e.editedItem.fecha_ult_control=l),label:"Fecha ult. control",type:"date",variant:"underlined"},null,8,["modelValue"]),t(d,{modelValue:e.editedItem.comentario,"onUpdate:modelValue":n[6]||(n[6]=l=>e.editedItem.comentario=l),label:"Comentario",type:"text",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(P,null,{default:o(()=>[t(_),t(r,{color:"#009AA4",variant:"tonal",onClick:b},{default:o(()=>[c(" Cancelar ")]),_:1}),t(r,{color:"#009AA4",variant:"tonal",onClick:y},{default:o(()=>[c(" Guardar ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":o(({item:l})=>[t(f,{text:"Editar",location:"top"},{activator:o(({props:s})=>[t(r,h(s,{density:"compact",class:"mr-2 ml-2",color:"#009AA4",variant:"tonal",icon:"mdi-account-edit",onClick:j=>k(l)}),null,16,["onClick"])]),_:2},1024),t(f,{text:"Eliminar",location:"top"},{activator:o(({props:s})=>[t(r,h(s,{density:"compact",class:"mr-2 ml-2",color:"#009AA4",variant:"tonal",icon:"mdi-delete",onClick:j=>A(l)}),null,16,["onClick"])]),_:2},1024)]),"no-data":o(()=>[t(r,{color:"#009AA4",variant:"tonal",onClick:m},{default:o(()=>[c(" Iniciar ")]),_:1})]),_:1},8,["headers","items"])]),_:1})}}},re=Y(ee,[["__file","/home/blueshadows/www/vulco/resources/js/Pages/Examenes/ExamenHumoNegro.vue"]]);export{re as default};
//# sourceMappingURL=ExamenHumoNegro-BPOa7cng.js.map