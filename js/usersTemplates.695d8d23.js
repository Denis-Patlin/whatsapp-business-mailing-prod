"use strict";(self["webpackChunkwork_project_v3"]=self["webpackChunkwork_project_v3"]||[]).push([[166],{7978:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("button",t._g({staticClass:"button",class:[t.colors[t.color]],attrs:{active:t.active}},t.$listeners),[t._t("default")],2)},i=[],o={props:{active:{type:Boolean,default:!1},color:{type:String,default:"transparent"}},data(){return{colors:{transparent:"button__transparent",white:"button__white",gray:"button__gray"}}}},r=o,n=a(1001),c=(0,n.Z)(r,s,i,!1,null,"70d46d69",null),d=c.exports},9463:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"dashboard__header"},[e("div",{staticClass:"dashboard__title"},[t._v(" "+t._s(t.activeDashboardTitle)+" ")]),e("div",{staticClass:"dashboard__control"},[e("button-vue",{attrs:{color:"gray",active:"create"===t.activeNestedDashboardCategory},on:{click:function(e){return t.switchView("create")}}},[t._v(" Создать ")]),e("button-vue",{attrs:{color:"gray",active:"list"===t.activeNestedDashboardCategory},on:{click:function(e){return t.switchView("list")}}},[t._v(" Список ")])],1)]),e("section",{staticClass:"dashboard__section"},[e("keep-alive",[e(t.activeComponent,{ref:"componentRef",tag:"component",staticClass:"animate__animated animate__fadeIn"})],1),e("vue-element-loading",{attrs:{active:t.isLoading,"background-color":"rgba(255, 255, 255, .2)",color:"blue"}})],1)])},i=[],o=a(7978),r=a(2467),n={components:{ButtonVue:o.Z},mixins:[r.Z],data(){return{isLoading:!1}},watch:{activeNestedDashboardCategory(){this.setActiveComponent(!0)}},created(){this.setActiveComponent(!0)},methods:{switchView(t){this.$store.commit("setActiveNestedDashboardCategory",t)}}},c=n,d=a(1001),l=(0,d.Z)(c,s,i,!1,null,"72b2ffee",null),h=l.exports},2467:function(t,e,a){var s=a(629);e["Z"]={data(){return{activeComponent:null,activeDashboardTitle:"",componentsImports:{templates:{create:()=>Promise.all([a.e(941),a.e(36),a.e(877),a.e(138),a.e(493)]).then(a.bind(a,1003)),list:()=>Promise.all([a.e(941),a.e(36),a.e(877),a.e(173),a.e(110),a.e(646),a.e(216),a.e(578)]).then(a.bind(a,8216))},reports:{list:()=>Promise.all([a.e(941),a.e(877),a.e(173),a.e(110),a.e(393)]).then(a.bind(a,1009))},clients:{create:()=>Promise.all([a.e(941),a.e(36),a.e(877),a.e(362)]).then(a.bind(a,2362)),list:()=>Promise.all([a.e(941),a.e(36),a.e(110),a.e(384)]).then(a.bind(a,7384)),clientsTemplates:{create:()=>Promise.all([a.e(941),a.e(36),a.e(877),a.e(138),a.e(493)]).then(a.bind(a,1003)),list:()=>Promise.all([a.e(941),a.e(36),a.e(877),a.e(173),a.e(110),a.e(646),a.e(216),a.e(578)]).then(a.bind(a,8216))}}},componentsTitles:{templates:{create:"Создание шаблона",list:"Список шаблонов"},reports:{create:"Создание отчета",list:"Список отчетов"},clients:{create:"Создание клиента",list:"Список клиентов",clientsTemplates:{create:`Создание шаблона ${this.$route.params.userId}`,list:`Список шаблонов ${this.$route.params.userId}`}}}}},computed:{...(0,s.Se)(["getActiveDashboard","getActiveDashboardCategory","getActiveNestedDashboard","getActiveNestedDashboardCategory"]),activeDashboard(){return this.getActiveDashboard},activeDashboardCategory(){return this.getActiveDashboardCategory},activeNestedDashboard(){return this.getActiveNestedDashboard},activeNestedDashboardCategory(){return this.getActiveNestedDashboardCategory}},methods:{setActiveComponent(t=!1){if(!this.activeDashboard)return;this.isLoading=!0;let e=null;e=t?this.componentsImports[this.activeDashboard][this.activeNestedDashboard][this.activeNestedDashboardCategory]:this.componentsImports[this.activeDashboard][this.activeDashboardCategory],e().then((e=>{this.activeComponent=e.default||e,this.isLoading=!1,this.setActiveComponentTitle(t)}))},setActiveComponentTitle(t=!1){this.activeDashboardTitle=t?this.componentsTitles[this.activeDashboard][this.activeNestedDashboard][this.activeNestedDashboardCategory]:this.componentsTitles[this.activeDashboard][this.activeDashboardCategory]}}}}}]);
//# sourceMappingURL=usersTemplates.695d8d23.js.map