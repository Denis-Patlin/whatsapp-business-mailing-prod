"use strict";(self["webpackChunkwork_project_v3"]=self["webpackChunkwork_project_v3"]||[]).push([[735],{1675:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var i=s(4562),r=s(266),n=s(2118),a=s(5125),l=s(1713),o=s(7808),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("section",{staticClass:"dashboard__section"},[e(a.Z,{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e(n.Z,{staticClass:"pa-10"},[e(l.Z,[e(r.Z,{attrs:{cols:"12"}},[e(o.Z,{attrs:{rules:t.rules,label:"Логин",required:""},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"]))return null;e.preventDefault()}},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username","string"===typeof e?e.trim():e)},expression:"user.username"}}),e("div",{attrs:{id:"general-fields"}},[e(o.Z,{attrs:{rules:t.rules,label:"Название компании",required:""},model:{value:t.user.company_name,callback:function(e){t.$set(t.user,"company_name","string"===typeof e?e.trim():e)},expression:"user.company_name"}}),e(o.Z,{attrs:{rules:t.rules,label:"БИН компании",required:""},model:{value:t.user.bin,callback:function(e){t.$set(t.user,"bin","string"===typeof e?e.trim():e)},expression:"user.bin"}}),e(o.Z,{attrs:{rules:t.rules,label:"Имя отправителя",required:""},model:{value:t.user.sender_name,callback:function(e){t.$set(t.user,"sender_name","string"===typeof e?e.trim():e)},expression:"user.sender_name"}})],1)],1)],1),e(l.Z,[e(r.Z,{attrs:{cols:"12"}},[e(i.Z,{attrs:{type:"submit",color:"primary"}},[t._v(" Сохранить ")])],1)],1)],1)],1)],1),e("vue-element-loading",{attrs:{active:t.isLoading,"background-color":"rgba(255, 255, 255, .2)",color:"blue"}})],1)},d=[],h=(s(7658),s(4402)),c={data(){return{user:{},rules:[t=>!!t||"*Обязательное поле"],isLoading:!1}},created(){h.t.get(`user/${this.$route.params.clientId}`).then((t=>{const{Data:e}=t.data;this.user=e})).catch((t=>{this.$toast.error(t.message,{timeout:2e3})}))},methods:{validate(){return this.$refs.form.validate()},submit(){if(this.validate()){const t={username:this.user.username,bin:this.user.bin,company_name:this.user.company_name,sender_name:this.user.sender_name};this.isLoading=!0,h.t.put("user/edit",t).then((()=>{this.$toast.success("Клиент успешно отредактирован!",{timeout:2e3}),this.$router.push("/clients")})).catch((t=>{this.$toast.error(t.message,{timeout:2e3})})).finally((()=>{this.isLoading=!1}))}}}},p=c,f=s(1001),v=(0,f.Z)(p,u,d,!1,null,"6edebe0a",null),g=v.exports},1884:function(){},9027:function(){},4562:function(t,e,s){s.d(e,{Z:function(){return v}});var i=s(3434),r=s(3305),n=r.Z,a=s(3037),l=s(1444),o=s(4390),u=s(4263),d=s(8860),h=s(4338),c=s(7678),p=s(4101);const f=(0,c.Z)(i.Z,d.Z,u.Z,h.Z,(0,a.d)("btnToggle"),(0,l.d)("inputValue"));var v=f.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...d.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return o.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(n,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:s,data:i}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(s,this.disabled?i:r(this.color,i),e)}})},5125:function(t,e,s){s(7658);var i=s(7678),r=s(2500),n=s(4712);e["Z"]=(0,i.Z)(r.Z,(0,n.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))})):s.valid=e(t),s},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const s=this.watchers.find((t=>t._uid===e._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},266:function(t,e,s){s(7658),s(1884);var i=s(144),r=s(1767),n=s(5352);const a=["sm","md","lg","xl"],l=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),o=(()=>a.reduce(((t,e)=>(t["offset"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u=(()=>a.reduce(((t,e)=>(t["order"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(u)};function h(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const c=new Map;e["Z"]=i["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:n}){let a="";for(const r in e)a+=String(e[r]);let l=c.get(a);if(!l){let t;for(t in l=[],d)d[t].forEach((s=>{const i=e[s],r=h(t,s,i);r&&l.push(r)}));const s=l.some((t=>t.startsWith("col-")));l.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),c.set(a,l)}return t(e.tag,(0,r.ZP)(s,{class:l}),i)}})},2118:function(t,e,s){s.d(e,{Z:function(){return a}});s(9027),s(1884);var i=s(144);function r(t){return i["default"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,r)}})}var n=s(1767),a=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let r;const{attrs:a}=s;return a&&(s.attrs={},r=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,n.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},1713:function(t,e,s){s(7658),s(1884);var i=s(144),r=s(1767),n=s(5352);const a=["sm","md","lg","xl"],l=["start","end","center"];function o(t,e){return a.reduce(((s,i)=>(s[t+(0,n.jC)(i)]=e(),s)),{})}const u=t=>[...l,"baseline","stretch"].includes(t),d=o("align",(()=>({type:String,default:null,validator:u}))),h=t=>[...l,"space-between","space-around"].includes(t),c=o("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...l,"space-between","space-around","stretch"].includes(t),f=o("alignContent",(()=>({type:String,default:null,validator:p}))),v={align:Object.keys(d),justify:Object.keys(c),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,s){let i=g[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const b=new Map;e["Z"]=i["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...d,justify:{type:String,default:null,validator:h},...c,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:s,children:i}){let n="";for(const r in e)n+=String(e[r]);let a=b.get(n);if(!a){let t;for(t in a=[],v)v[t].forEach((s=>{const i=e[s],r=m(t,s,i);r&&a.push(r)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(n,a)}return t(e.tag,(0,r.ZP)(s,{staticClass:"row",class:a}),i)}})},3305:function(t,e,s){s.d(e,{Z:function(){return a}});var i=s(6750),r=s(6878),n=s(5352),a=r.Z.extend({name:"v-progress-circular",directives:{intersect:i.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,n.kb)(this.calculatedSize),width:(0,n.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},7423:function(t,e,s){s.d(e,{Z:function(){return d}});var i=s(2500),r=s(6878),n=s(4390),a=s(8846),l=s(2637),o=s(6669),u=s(7678),d=(0,u.Z)(i.Z,r.Z,n.Z,a.Z,l.Z,o.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},3434:function(t,e,s){var i=s(7423);e["Z"]=i.Z},4390:function(t,e,s){var i=s(144);e["Z"]=i["default"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},3037:function(t,e,s){s.d(e,{d:function(){return r}});var i=s(4712);function r(t,e,s){return(0,i.f)(t,e,s).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}r("itemGroup")},8860:function(t,e,s){var i=s(144),r=s(7069),n=s(5352);e["Z"]=i["default"].extend({name:"routable",directives:{Ripple:r.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const s={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,r=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:r,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,s="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,n.vO)(this.$refs.link,s)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},1444:function(t,e,s){s.d(e,{d:function(){return r}});var i=s(144);function r(t="value",e="input"){return i["default"].extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(s){!!s!==this[t]&&this.$emit(e,s)}}})}const n=r();e["Z"]=n}}]);
//# sourceMappingURL=ClientEdit.89ce519d.js.map