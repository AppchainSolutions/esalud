import{x as Q,h as $,j as o,o as G,c as q,w as a,b as e,f as s,t as x,a as z,m as b}from"./app-CmmVjTXO.js";import{u as H}from"./store-CMjr-ERy.js";import{c as m,a as J,o as K,b as L,d as O,e as W,g as X}from"./helper-FW47krof.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Z={class:"text-h5"},ee={__name:"ExamenRespirador",setup(te){const I=H(),t=Q({headers:[{title:"Fecha exámen",align:"start",sortable:!0,key:"fecha_examen"},{title:"Prueba de ajuste",align:"start",sortable:!0,key:"prueba_ajuste"},{title:"Talla respirador",align:"start",sortable:!0,key:"talla_respirador"},{title:"Modelo",align:"start",sortable:!0,key:"modelo_marca"},{title:"Acciones",align:"center",key:"actions"}],editedItem:{paciente_id:null,fecha_examen:null,prueba_ajuste:null,talla_respirador:null,modelo_marca:null,comentario:null},defaultItem:{paciente_id:null,fecha_examen:null,prueba_ajuste:null,talla_respirador:null,modelo_marca:null,comentario:null},searchQuery:{paciente_id:null},dialog:!1,tableItems:[],editedIndex:-1,list:[],loading:!1,valid:null,formTitle:"Respirador",formCrear:"Nuevo exámen de Respirador",formEdit:"Editar exámen de Respirador",urlShow:"/examen/respirador/show",urlUpdate:"/examen/respirador/update",urlDelete:"/examen/respirador/delete",urlStore:"/examen/respirador"}),V=$(()=>t.editedIndex===-1?t.formCrear:t.formEdit);function y(){m(t)}const u=async()=>{t.searchQuery.paciente_id=I.getSelected.id,await J(t)};function k(){K(t)}function h(){return t.editedIndex>-1?w():C()}const C=async()=>{await L(t),m(t)};function g(i){O(t,i)}const w=async()=>{await W(t),m(t)},E=async i=>{await X(t,i)};return(i,n)=>{const A=o("v-toolbar-title"),j=o("v-divider"),_=o("v-spacer"),r=o("v-btn"),S=o("v-card-title"),d=o("v-text-field"),p=o("v-col"),T=o("v-row"),v=o("v-container"),R=o("v-card-text"),U=o("v-card-actions"),F=o("v-form"),N=o("v-card"),P=o("v-dialog"),B=o("v-toolbar"),f=o("v-tooltip"),D=o("v-data-table");return G(),q(v,null,{default:a(()=>[e(D,{headers:t.headers,items:t.tableItems},{top:a(()=>[e(B,{flat:""},{default:a(()=>[e(A,null,{default:a(()=>[s(x(t.formTitle),1)]),_:1}),e(j,{class:"mx-4",inset:"",vertical:""}),e(_),e(P,{modelValue:t.dialog,"onUpdate:modelValue":n[5]||(n[5]=l=>t.dialog=l)},{activator:a(({props:l})=>[e(r,{icon:"mdi-update",variant:"tonal",class:"ma-2",color:"#009AA4",onClick:u}),e(r,{icon:"mdi-account-multiple-plus",variant:"tonal",class:"ma-2",color:"#009AA4",onClick:k})]),default:a(()=>[e(N,null,{default:a(()=>[e(F,null,{default:a(()=>[e(S,null,{default:a(()=>[z("span",Z,x(V.value),1)]),_:1}),e(R,null,{default:a(()=>[e(v,null,{default:a(()=>[e(T,null,{default:a(()=>[e(p,null,{default:a(()=>[e(d,{modelValue:t.editedItem.fecha_examen,"onUpdate:modelValue":n[0]||(n[0]=l=>t.editedItem.fecha_examen=l),label:"Fecha exámen",type:"date",variant:"underlined"},null,8,["modelValue"]),e(d,{modelValue:t.editedItem.prueba_ajuste,"onUpdate:modelValue":n[1]||(n[1]=l=>t.editedItem.prueba_ajuste=l),label:"Prueba ajuste",type:"text",variant:"underlined"},null,8,["modelValue"]),e(d,{modelValue:t.editedItem.talla_respirador,"onUpdate:modelValue":n[2]||(n[2]=l=>t.editedItem.talla_respirador=l),label:"Talla",type:"text",variant:"underlined"},null,8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(d,{modelValue:t.editedItem.modelo_marca,"onUpdate:modelValue":n[3]||(n[3]=l=>t.editedItem.modelo_marca=l),label:"Modelo / Marca",type:"text",variant:"underlined"},null,8,["modelValue"]),e(d,{modelValue:t.editedItem.comentario,"onUpdate:modelValue":n[4]||(n[4]=l=>t.editedItem.comentario=l),label:"Comentario",type:"text",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(U,null,{default:a(()=>[e(_),e(r,{color:"blue-darken-1",variant:"tonal",onClick:y},{default:a(()=>[s(" Cancelar ")]),_:1}),e(r,{color:"blue-darken-1",variant:"tonal",onClick:h},{default:a(()=>[s(" Guardar ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":a(({item:l})=>[e(f,{text:"Editar",location:"top"},{activator:a(({props:c})=>[e(r,b(c,{density:"compact",class:"mr-2 ml-2",color:"#009AA4",variant:"tonal",icon:"mdi-account-edit",onClick:M=>g(l)}),null,16,["onClick"])]),_:2},1024),e(f,{text:"Eliminar",location:"top"},{activator:a(({props:c})=>[e(r,b(c,{density:"compact",class:"mr-2 ml-2",color:"#009AA4",variant:"tonal",icon:"mdi-delete",onClick:M=>E(l)}),null,16,["onClick"])]),_:2},1024)]),"no-data":a(()=>[e(r,{color:"#009AA4",variant:"tonal",onClick:u},{default:a(()=>[s(" Iniciar ")]),_:1})]),_:1},8,["headers","items"])]),_:1})}}},re=Y(ee,[["__file","/home/blueshadows/www/vulco/resources/js/Pages/Examenes/ExamenRespirador.vue"]]);export{re as default};
//# sourceMappingURL=ExamenRespirador-nJHNNqNO.js.map