import{x as G,h as M,j as a,o as R,c as q,w as o,b as e,f as d,t as f,a as b,k as z,m as g}from"./app-Cw_Vz0lM.js";import{u as H}from"./store-BZuqkbyQ.js";import{c,h as J,o as K,a as L,b as O,d as W,e as X}from"./helper-CRDvS7nw.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Z={class:"text-h5"},ee={__name:"AntecedenteFamiliarPage",setup(te){const w=H(),t=G({headers:[{title:"Parentesco",align:"start",sortable:!0,key:"parentesco"},{title:"Patología",key:"patologia",sortable:!1},{title:"Acciones",align:"center",key:"actions"}],editedItem:{parentesco:null,patologia:null,comentario:null},defaultItem:{paciente_id:null,parentesco:null,patologia:null,comentario:null},searchQuery:{paciente_id:null},dialog:!1,tableItems:[],editedIndex:-1,list:[],loading:!1,valid:null,formTitle:"Antecedentes Familiares",formCrear:"Nuevo Antecedente Familiar",formEdit:"Editar Antecedentes Familiares",urlShow:"/familiar/show",urlUpdate:"/familiar/update",urlDelete:"/familiar/delete",urlStore:"/familiar"}),x=M(()=>t.editedIndex===-1?t.formCrear:t.formEdit);function I(){c(t)}const m=async()=>{t.searchQuery.paciente_id=w.getSelected.id,await J(t)};function k(){K(t)}function y(){return t.editedIndex>-1?h():C()}const C=async()=>{await L(t),c(t)};function V(r){O(t,r)}const h=async()=>{await W(t),c(t)},S=async r=>{await X(t,r)};return(r,n)=>{const F=a("v-toolbar-title"),P=a("v-divider"),u=a("v-spacer"),i=a("v-btn"),E=a("v-card-title"),p=a("v-text-field"),A=a("v-col"),D=a("v-row"),_=a("v-container"),T=a("v-card-text"),N=a("v-card-actions"),U=a("v-card"),B=a("v-dialog"),j=a("v-toolbar"),v=a("v-tooltip"),Q=a("v-data-table");return R(),q(_,null,{default:o(()=>[e(Q,{headers:t.headers,items:t.tableItems,class:"elevation-1",style:{"min-width":"850px"}},{top:o(()=>[e(j,{flat:""},{default:o(()=>[e(F,null,{default:o(()=>[d(f(t.formTitle),1)]),_:1}),e(P,{class:"mx-4",inset:"",vertical:""}),e(u),e(B,{modelValue:t.dialog,"onUpdate:modelValue":n[3]||(n[3]=l=>t.dialog=l)},{activator:o(({props:l})=>[e(i,{icon:"mdi-update",variant:"underlined",class:"ma-2",color:"#662D91",onClick:m}),e(i,{icon:"mdi-account-multiple-plus",variant:"underlined",class:"ma-2",color:"#662D91",onClick:k})]),default:o(()=>[e(U,null,{default:o(()=>[b("form",{onSubmit:n[2]||(n[2]=z((...l)=>r.submit&&r.submit(...l),["prevent"]))},[e(E,null,{default:o(()=>[b("span",Z,f(x.value),1)]),_:1}),e(T,null,{default:o(()=>[e(_,null,{default:o(()=>[e(D,null,{default:o(()=>[e(A,null,{default:o(()=>[e(p,{modelValue:t.editedItem.parentesco,"onUpdate:modelValue":n[0]||(n[0]=l=>t.editedItem.parentesco=l),label:"Parentesco",type:"text",variant:"underlined"},null,8,["modelValue"]),e(p,{modelValue:t.editedItem.patologia,"onUpdate:modelValue":n[1]||(n[1]=l=>t.editedItem.patologia=l),label:"Patologia",type:"text",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(N,null,{default:o(()=>[e(u),e(i,{color:"blue-darken-1",variant:"underlined",onClick:I},{default:o(()=>n[4]||(n[4]=[d(" Cancelar ")])),_:1}),e(i,{color:"blue-darken-1",variant:"underlined",onClick:y},{default:o(()=>n[5]||(n[5]=[d(" Guardar ")])),_:1})]),_:1})],32)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":o(({item:l})=>[e(v,{text:"Editar",location:"top"},{activator:o(({props:s})=>[e(i,g(s,{density:"compact",class:"mr-2 ml-2",color:"#662D91",icon:"mdi-account-edit",onClick:$=>V(l)}),null,16,["onClick"])]),_:2},1024),e(v,{text:"Eliminar",location:"top"},{activator:o(({props:s})=>[e(i,g(s,{density:"compact",class:"mr-2 ml-2",color:"#662D91",icon:"mdi-delete",onClick:$=>S(l)}),null,16,["onClick"])]),_:2},1024)]),"no-data":o(()=>[e(i,{type:"solo",onClick:m},{default:o(()=>n[6]||(n[6]=[d(" Iniciar ")])),_:1})]),_:1},8,["headers","items"])]),_:1})}}},ie=Y(ee,[["__file","/home/blueshadows/www/esalud/resources/js/Pages/SubPages/AntecedenteFamiliarPage.vue"]]);export{ie as default};
//# sourceMappingURL=AntecedenteFamiliarPage-CwhRaKlE.js.map