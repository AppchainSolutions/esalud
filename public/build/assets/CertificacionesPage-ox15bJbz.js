import{u as O}from"./store-BZuqkbyQ.js";import{Q as A,h as M,i as m,j as o,o as j,c as E,w as l,b as e,f as n,m as u,a as N,t as P}from"./app-Cw_Vz0lM.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const U=A(),f=O(),z=M(()=>U.props.responseData),B={data:()=>({dialog:!1,dialogDelete:!1,headers:[{title:"Certificación",align:"start",sortable:!0,key:"certificacion"},{title:"Comentario",key:"comentario",sortable:!1},{title:"",key:"actions",sortable:!1}],lista:[{}],editedIndex:-1,editedItem:{idpersonal:f.userSelected,AlergiaModel:"",comentario:0},defaultItem:{idpersonal:f.userSelected,AlergiaModel:"",comentario:""}}),computed:{formTitle(){return this.editedIndex===-1?"Agregar registro":"Editar registro"}},watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},methods:{initialize(){let t=f.userSelected;m.get("/AlergiaModel",{rut:t}),this.lista=z.value},editItem(t){this.editedIndex=this.lista.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem(t){this.editedIndex=this.lista.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm(){this.lista.splice(this.editedIndex,1),this.closeDelete()},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){if(this.editedIndex>-1){let t=[];Object.assign(this.lista[this.editedIndex],this.editedItem),t=JSON.parse(JSON.stringify(this.editedItem)),console.log("🚀 ~ file: alergiaes.vue:137 ~ save ~ edited:",t),this.saveEdit(t)}else this.lista.push(this.editedItem),this.saveSave(this.lista);this.close()},saveEdit(t){m.put("/AlergiaModel/edit",{AlergiaModel:t})},saveSave(t){m.put("/AlergiaModel/store",{AlergiaModel:t})}}},q={class:"text-h5"};function J(t,i,F,G,K,d){const b=o("v-toolbar-title"),x=o("v-divider"),r=o("v-spacer"),s=o("v-btn"),v=o("v-card-title"),_=o("v-text-field"),p=o("v-col"),D=o("v-row"),g=o("v-container"),V=o("v-card-text"),h=o("v-card-actions"),I=o("v-card"),C=o("v-dialog"),S=o("v-toolbar"),k=o("v-tooltip"),w=o("v-data-table");return j(),E(g,null,{default:l(()=>[e(w,{headers:t.headers,items:t.lista,"sort-by":[{key:"AlergiaModel",order:"asc"}]},{top:l(()=>[e(S,{flat:""},{default:l(()=>[e(b,null,{default:l(()=>i[4]||(i[4]=[n("Certificaciones")])),_:1}),e(x,{class:"mx-4",inset:"",vertical:""}),e(r),e(C,{modelValue:t.dialog,"onUpdate:modelValue":i[2]||(i[2]=a=>t.dialog=a)},{activator:l(({props:a})=>[e(s,{icon:"mdi-update",variant:"underlined",ligth:"",class:"ma-2",color:"#662D91",onClick:d.initialize},null,8,["onClick"]),e(s,u({icon:"mdi-account-multiple-plus",variant:"underlined",ligth:"",class:"ma-2",color:"#662D91"},a),null,16)]),default:l(()=>[e(I,null,{default:l(()=>[e(v,null,{default:l(()=>[N("span",q,P(d.formTitle),1)]),_:1}),e(V,null,{default:l(()=>[e(g,null,{default:l(()=>[e(D,null,{default:l(()=>[e(p,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(_,{modelValue:t.editedItem.certificacion,"onUpdate:modelValue":i[0]||(i[0]=a=>t.editedItem.certificacion=a),label:"Certificación"},null,8,["modelValue"])]),_:1}),e(p,{cols:"6",sm:"6",md:"4"},{default:l(()=>[e(_,{modelValue:t.editedItem.comentario,"onUpdate:modelValue":i[1]||(i[1]=a=>t.editedItem.comentario=a),label:"Comentario"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(h,null,{default:l(()=>[e(r),e(s,{color:"blue-darken-1",variant:"text",onClick:d.close},{default:l(()=>i[5]||(i[5]=[n(" Cancelar ")])),_:1},8,["onClick"]),e(s,{color:"blue-darken-1",variant:"text",onClick:d.save},{default:l(()=>i[6]||(i[6]=[n(" Guardar ")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(C,{modelValue:t.dialogDelete,"onUpdate:modelValue":i[3]||(i[3]=a=>t.dialogDelete=a),"max-width":"500px"},{default:l(()=>[e(I,null,{default:l(()=>[e(v,{class:"text-h5"},{default:l(()=>i[7]||(i[7]=[n("Seguro que quiere borrar el registro?")])),_:1}),e(h,null,{default:l(()=>[e(r),e(s,{color:"blue-darken-1",variant:"text",onClick:d.closeDelete},{default:l(()=>i[8]||(i[8]=[n("Cancel")])),_:1},8,["onClick"]),e(s,{color:"blue-darken-1",variant:"text",onClick:d.deleteItemConfirm},{default:l(()=>i[9]||(i[9]=[n("OK")])),_:1},8,["onClick"]),e(r)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":l(({item:a})=>[e(k,{text:"Editar",location:"top"},{activator:l(({props:c})=>[e(s,u(c,{density:"compact",class:"mr-2 ml-2",color:"#662D91",icon:"mdi-account-edit",onClick:y=>d.editItem(a)}),null,16,["onClick"])]),_:2},1024),e(k,{text:"Eliminar",location:"top"},{activator:l(({props:c})=>[e(s,u(c,{density:"compact",class:"mr-2 ml-2",color:"#662D91",icon:"mdi-delete",onClick:y=>d.deleteItem(a)}),null,16,["onClick"])]),_:2},1024)]),"no-data":l(()=>[e(s,{type:"valiant",onClick:d.initialize},{default:l(()=>i[10]||(i[10]=[n(" Iniciar ")])),_:1},8,["onClick"])]),_:1},8,["headers","items"])]),_:1})}const L=T(B,[["render",J],["__file","/home/blueshadows/www/esalud/resources/js/Pages/SubPages/CertificacionesPage.vue"]]);export{L as default};
//# sourceMappingURL=CertificacionesPage-ox15bJbz.js.map