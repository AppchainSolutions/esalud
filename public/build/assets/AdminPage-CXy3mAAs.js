import{Q as q,h as N,i as a,j as o,o as u,c as p,w as t,b as e,m as S,e as z,k as L,f as m,t as D,l as F,a as d}from"./app-DivcrGOD.js";import{l as H}from"./logo-DIp7Rf8v.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I=q(),M=N(()=>I.props.auth.user),O={inheritAttrs:!1,data(){return{logo:H,drawer:!0,rail:!1,isAdmin:!0,approved:0,user:M,props:null}},computed:{icon(){return this.rail?"mdi-chevron-right-circle-outline":"mdi-chevron-left-circle-outline"}},methods:{toggleBtn(){this.rail=!this.rail},crear_equipo(){a.get("admin/equipo/crear")},configurar_equipo(){a.get("admin/equipo/config")},perfil_usuario(){a.get("admin/usuario/perfil")},mantencion(){a.get("/mantencion")},salir(){localStorage.removeItem("auth_token"),a.post("/logout")}}},Q=d("b",null,[d("i",{class:"mdi mdi-location-exit",style:{"font-size":"24px",color:"white"}})],-1);function R(r,i,f,E,n,s){const g=o("notifications"),h=o("v-img"),c=o("v-list-item"),w=o("v-divider"),b=o("v-list-group"),k=o("v-list"),A=o("v-btn"),C=o("v-navigation-drawer"),V=o("v-card"),y=o("v-icon"),x=o("v-app-bar-title"),B=o("v-app-bar"),_=o("v-container"),P=o("v-main"),j=o("v-app");return u(),p(j,null,{default:t(()=>[e(_,{fluid:""},{default:t(()=>[e(g,{position:"bottom right",width:"40%"}),e(V,null,{default:t(()=>[e(C,{modelValue:n.drawer,"onUpdate:modelValue":i[0]||(i[0]=l=>n.drawer=l),rail:n.rail,permanent:"",onClick:i[1]||(i[1]=l=>n.rail=!1),color:"white"},{append:t(()=>[e(A,{block:"",color:"#662d91",onClick:s.salir},{default:t(()=>[Q]),_:1},8,["onClick"])]),default:t(()=>[e(c,{nav:"",class:"mt-0"},{default:t(()=>[e(h,{src:n.logo,id:"logo"},null,8,["src"])]),_:1}),e(w),e(k,{density:"compact",nav:""},{default:t(()=>[n.isAdmin?(u(),p(b,{key:0,value:"admin"},{activator:t(({props:l})=>[e(c,S(l,{title:"Administración","prepend-icon":"mdi-cog-outline"}),null,16)]),default:t(()=>[e(c,{"prepend-icon":"mdi-family-tree",title:"Roles",value:"roles",onClick:r.roles},null,8,["onClick"])]),_:1})):z("",!0)]),_:1})]),_:1},8,["modelValue","rail"])]),_:1}),e(B,{color:"#009AA4"},{default:t(()=>[e(x,null,{default:t(()=>[e(y,{onClick:L(s.toggleBtn,["stop"]),class:"ma-auto",size:"x-large"},{default:t(()=>[m(D(s.icon),1)]),_:1},8,["onClick"]),m(" Vulco - VitamHC ")]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(_,{fluid:""},{default:t(()=>[F(r.$slots,"default")]),_:3})]),_:3})]),_:3})]),_:3})}const T=v(O,[["render",R],["__file","/home/blueshadows/www/vulco/resources/js/Layouts/AppAdmin.vue"]]),U=Object.assign({layout:T},{__name:"AdminPage",setup(r){return(i,f)=>null}}),W=v(U,[["__file","/home/blueshadows/www/vulco/resources/js/Pages/Admin/AdminPage.vue"]]);export{W as default};
//# sourceMappingURL=AdminPage-CXy3mAAs.js.map