import{u as $}from"./store-DaKE2WGm.js";import{c as u,a as j,o as R,b as q,d as z,e as H,g as J}from"./helper-CDlv6Sjb.js";import{x as K,h as L,j as a,o as O,c as W,w as l,b as t,f as c,t as x,a as X,m as I}from"./app-D2OY3JKk.js";const Y={class:"text-h5"},oe={__name:"ExamenMetales",setup(Z){const h=$(),e=K({headers:[{title:"IDPGP",align:"start",sortable:!0,key:"idpgp"},{title:"Estatus",align:"start",sortable:!0,key:"estatus"},{title:"Fecha Ingreso",align:"start",sortable:!0,key:"fecha_ingreso"},{title:"Fecha Control",align:"start",sortable:!0,key:"fecha_control"},{title:"Fecha Próx. Control",align:"start",sortable:!0,key:"fecha_prox_control"},{title:"Fecha Últ. Control",align:"start",sortable:!0,key:"fecha_ult_control"},{title:"Acciones",align:"center",key:"actions"}],editedItem:{paciente_id:null,idpgp:null,fecha_ingreso:null,fecha_control:null,fecha_prox_control:null,fecha_ult_control:null,comentario:null},defaultItem:{paciente_id:null,idpgp:null,fecha_ingreso:null,fecha_control:null,fecha_prox_control:null,fecha_ult_control:null,comentario:null},searchQuery:{paciente_id:null},dialog:!1,tableItems:[],editedIndex:-1,list:[],loading:!1,valid:null,formTitle:"Metales",formCrear:"Nuevo exámen de Metales",formEdit:"Editar exámen de Metales",urlShow:"/examen/metal/show",urlUpdate:"/examen/metal/update",urlDelete:"/examen/metal/delete",urlStore:"/examen/metal"}),g=L(()=>e.editedIndex===-1?e.formCrear:e.formEdit);function V(){u(e)}const m=async()=>{e.searchQuery.paciente_id=h.getSelected.id,await j(e)};function b(){R(e)}function y(){return e.editedIndex>-1?A():C()}const C=async()=>{await q(e),u(e)};function k(i){z(e,i)}const A=async()=>{await H(e),u(e)},w=async i=>{await J(e,i)};return(i,n)=>{const E=a("v-toolbar-title"),F=a("v-divider"),_=a("v-spacer"),d=a("v-btn"),U=a("v-card-title"),r=a("v-text-field"),p=a("v-col"),S=a("v-row"),v=a("v-container"),P=a("v-card-text"),T=a("v-card-actions"),D=a("v-form"),M=a("v-card"),N=a("v-dialog"),B=a("v-toolbar"),f=a("v-tooltip"),G=a("v-data-table");return O(),W(v,null,{default:l(()=>[t(G,{headers:e.headers,items:e.tableItems},{top:l(()=>[t(B,{flat:""},{default:l(()=>[t(E,null,{default:l(()=>[c(x(e.formTitle),1)]),_:1}),t(F,{class:"mx-4",inset:"",vertical:""}),t(_),t(N,{modelValue:e.dialog,"onUpdate:modelValue":n[7]||(n[7]=o=>e.dialog=o)},{activator:l(({props:o})=>[t(d,{icon:"mdi-update",class:"ma-2",color:"#009AA4",variant:"tonal",onClick:m}),t(d,{icon:"mdi-account-multiple-plus",class:"ma-2",color:"#009AA4",variant:"tonal",onClick:b})]),default:l(()=>[t(M,null,{default:l(()=>[t(D,null,{default:l(()=>[t(U,null,{default:l(()=>[X("span",Y,x(g.value),1)]),_:1}),t(P,null,{default:l(()=>[t(v,null,{default:l(()=>[t(S,null,{default:l(()=>[t(p,null,{default:l(()=>[t(r,{modelValue:e.editedItem.idpgp,"onUpdate:modelValue":n[0]||(n[0]=o=>e.editedItem.idpgp=o),label:"IDPGP",type:"number",variant:"underlined"},null,8,["modelValue"]),t(r,{modelValue:e.editedItem.estatus,"onUpdate:modelValue":n[1]||(n[1]=o=>e.editedItem.estatus=o),label:"Estatus",type:"text",variant:"underlined"},null,8,["modelValue"]),t(r,{modelValue:e.editedItem.fecha_ingreso,"onUpdate:modelValue":n[2]||(n[2]=o=>e.editedItem.fecha_ingreso=o),label:"Ingreso",type:"date",variant:"underlined"},null,8,["modelValue"]),t(r,{modelValue:e.editedItem.fecha_control,"onUpdate:modelValue":n[3]||(n[3]=o=>e.editedItem.fecha_control=o),label:"Fecha control",type:"date",variant:"underlined"},null,8,["modelValue"])]),_:1}),t(p,null,{default:l(()=>[t(r,{modelValue:e.editedItem.fecha_prox_control,"onUpdate:modelValue":n[4]||(n[4]=o=>e.editedItem.fecha_prox_control=o),label:"Fecha prox. control",type:"date",variant:"underlined"},null,8,["modelValue"]),t(r,{modelValue:e.editedItem.fecha_ult_control,"onUpdate:modelValue":n[5]||(n[5]=o=>e.editedItem.fecha_ult_control=o),label:"Fecha ult. control",type:"date",variant:"underlined"},null,8,["modelValue"]),t(r,{modelValue:e.editedItem.comentario,"onUpdate:modelValue":n[6]||(n[6]=o=>e.editedItem.comentario=o),label:"Comentario",type:"text",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(T,null,{default:l(()=>[t(_),t(d,{color:"#009AA4",variant:"tonal",onClick:V},{default:l(()=>[c(" Cancelar ")]),_:1}),t(d,{color:"#009AA4",variant:"tonal",onClick:y},{default:l(()=>[c(" Guardar ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":l(({item:o})=>[t(f,{text:"Editar",location:"top"},{activator:l(({props:s})=>[t(d,I(s,{density:"compact",class:"mr-2 ml-2",color:"#009AA4",variant:"tonal",icon:"mdi-account-edit",onClick:Q=>k(o)}),null,16,["onClick"])]),_:2},1024),t(f,{text:"Eliminar",location:"top"},{activator:l(({props:s})=>[t(d,I(s,{density:"compact",class:"mr-2 ml-2",color:"#009AA4",variant:"tonal",icon:"mdi-delete",onClick:Q=>w(o)}),null,16,["onClick"])]),_:2},1024)]),"no-data":l(()=>[t(d,{color:"#009AA4",variant:"tonal",onClick:m},{default:l(()=>[c(" Iniciar ")]),_:1})]),_:1},8,["headers","items"])]),_:1})}}};export{oe as default};
//# sourceMappingURL=ExamenMetales-Cx0lx6n3.js.map