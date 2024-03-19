"use strict";(self["webpackChunkwork_project_v3"]=self["webpackChunkwork_project_v3"]||[]).push([[177],{7978:function(t,e,a){a.d(e,{Z:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("button",t._g({staticClass:"button",class:[t.colors[t.color]],attrs:{active:t.active}},t.$listeners),[t._t("default")],2)},r=[],s={props:{active:{type:Boolean,default:!1},color:{type:String,default:"transparent"}},data(){return{colors:{transparent:"button__transparent",white:"button__white",gray:"button__gray"}}}},n=s,i=a(1001),u=(0,i.Z)(n,o,r,!1,null,"70d46d69",null),c=u.exports},4309:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var o=function(){var t=this,e=t._self._c;return e("div",[t.isLoading?e("div",{attrs:{id:"loader"}},[e("vue-element-loading",{attrs:{active:t.isLoading,"background-color":"rgba(255, 255, 255, 1)",color:"blue"}})],1):e("div",{attrs:{id:"home-page"}},[e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("navigation-vue",{ref:"navigation"})],1),e("div",{staticClass:"header__separator"})]),e("router-view")],1)])},r=[],s=(a(7658),a(4135)),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav"},[e("img",{staticClass:"nav__logo",attrs:{src:a(6949),alt:"Logo"}}),e("nav",{staticClass:"nav__menu"},[e("ul",{staticClass:"nav__links"},["user"===t.role?e("li",[e("button-vue",{on:{click:function(e){return t.switchDashboard("templates")}}},[t._v(" Шаблоны ")])],1):t._e(),e("li",[e("button-vue",{on:{click:function(e){return t.switchDashboard("reports")}}},[t._v(" Отчеты ")])],1),e("li",[e("button-vue",{on:{click:()=>t.$router.push({name:"contacts"})}},[t._v(" Написать менеджеру ")])],1),"admin"===t.role?e("li",[e("button-vue",{attrs:{active:"clients"===t.activeDashboard||"user"===t.activeDashboard},on:{click:function(e){return t.switchDashboard("clients")}}},[t._v(" Клиенты ")])],1):t._e()]),e("button-vue",{on:{click:function(e){return t.logout()}}},[t._v(" Выйти из системы ")])],1)])},i=[],u=a(7978),c=a(629),l={components:{ButtonVue:u.Z},computed:{...(0,c.Se)(["getActiveDashboard","getMyRole"]),activeDashboard(){return this.getActiveDashboard},role(){return this.getMyRole}},methods:{switchDashboard(t){this.$store.commit("setActiveNestedDashboard",""),this.$store.commit("setActiveDashboard",t),this.$router.push({name:t})},logout(){this.$router.push({name:"Login",query:{}}),(0,s.d)("_token",""),(0,s.d)("user_state",""),this.$store.commit("resetStore")}}},d=l,v=a(1001),h=(0,v.Z)(d,n,i,!1,null,"599e7ef2",null),_=h.exports,g={name:"Home",components:{"navigation-vue":_},data(){return{isLoading:!1}},created(){const t=(0,s.e)("user_state");"logged_in"!==t&&((0,s.d)("_token","",-1),(0,s.d)("user_state","",-1),this.$router.push({name:"Login",query:{}}))}},p=g,b=(0,v.Z)(p,o,r,!1,null,"2eabf71a",null),f=b.exports},6949:function(t,e,a){t.exports=a.p+"img/logo.70c025c5.png"}}]);
//# sourceMappingURL=home.0e2d5656.js.map