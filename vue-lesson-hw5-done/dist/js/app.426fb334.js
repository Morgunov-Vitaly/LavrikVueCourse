(function(t){function n(n){for(var a,o,u=n[0],s=n[1],l=n[2],f=0,d=[];f<u.length;f++)o=u[f],i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,u=1;u<e.length;u++){var s=e[u];0!==i[s]&&(a=!1)}a&&(r.splice(n--,1),t=o(o.s=e[0]))}return t}var a={},i={app:0},r=[];function o(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var c=s;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"3aca":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[t.formSend?e("div",[e("h2",[t._v("All done!")])]):[e("form",{staticClass:"form",on:{submit:function(n){return n.preventDefault(),t.confirm(n)}}},[e("b-progress",{attrs:{value:t.fieldsValid,max:t.info.length}}),e("div",t._l(t.info,function(n,a){return e("app-input",{key:a,attrs:{name:n.name,value:n.value,pattern:n.pattern},on:{change:function(n){return t.onInput(a,n)},valid:function(n){return t.onValid(a,n)}}})}),1),e("h2",[t._v("Guests")]),e("transition-group",{attrs:{tag:"div",name:"slide"}},t._l(t.guests,function(n,a){return e("div",{key:n.id,staticClass:"form-group"},[e("label",{on:{dblclick:function(n){return t.removeGuest(a)}}},[t._v("Guest "+t._s(a+1))]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:n.value,expression:"guest.value",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:n.value},on:{input:function(e){e.target.composing||t.$set(n,"value",e.target.value.trim())},blur:function(n){return t.$forceUpdate()}}})])}),0),e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.addGuest}},[t._v("\n\t\t\t\tAdd guest\n\t\t\t")]),e("hr"),e("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.formDone}},[t._v("\n\t\t\t\tSend Data\n\t\t\t")])],1)],e("b-modal",{attrs:{title:"Check data"},on:{ok:t.send},model:{value:t.formConfirmation,callback:function(n){t.formConfirmation=n},expression:"formConfirmation"}},[e("table",{staticClass:"table table-bordered"},[e("tr",[e("td"),e("td")])])])],2)},r=[],o=e("49f5"),u=e("6aac"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t"+t._s(t.name)+"\n\t\t"),e("transition",{attrs:{name:"flipY",mode:"out-in"}},[t.activated?e("app-icon",{key:t.iconName,class:t.iconClasses,attrs:{name:t.iconName}}):t._e()],1)],1),e("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value},on:{input:t.onInput}})])},l=[],c=(e("3b2b"),e("0874")),f=(e("d88a"),e("fb39"),{components:{AppIcon:c["a"]},props:{pattern:RegExp,name:String,value:String},data:function(){return{activated:!1}},created:function(){""!==this.value&&(this.activated=!0,this.onValidChange())},computed:{valid:function(){return this.pattern.test(this.value)},iconName:function(){return this.valid?"check-circle":"exclamation-circle"},iconClasses:function(){return this.valid?"text-success":"text-danger"}},methods:{onInput:function(t){this.activated=!0,this.$emit("change",{value:t.target.value})},onValidChange:function(){this.$emit("valid",{valid:this.valid})}},watch:{valid:function(){this.onValidChange()}}}),d=f,p=(e("9639"),e("2877")),m=Object(p["a"])(d,s,l,!1,null,"8847d88c",null),v=m.exports,h={components:{AppInput:v,BProgress:o["a"],BModal:u["a"]},data:function(){return{formConfirmation:!1,formSend:!1,info:[{name:"Name",value:"Dmitry",pattern:/^[a-zA-Z ]{2,30}$/},{name:"Phone",value:"",pattern:/^[0-9]{7,14}$/},{name:"Email",value:"",pattern:/.+/},{name:"Some Field 1",value:"",pattern:/.+/},{name:"Some Field 2",value:"",pattern:/.+/}],guests:[],guestsAI:0}},created:function(){var t=this;this.info.map(function(n){t.$set(n,"valid",!1)})},methods:{onInput:function(t,n){this.info[t].value=n.value.trim()},onValid:function(t,n){this.info[t].valid=n.valid},addGuest:function(){this.guests.push({id:++this.guestsAI,value:""})},removeGuest:function(t){this.guests.splice(t,1)},confirm:function(){this.formDone&&(this.formConfirmation=!0)},send:function(){this.formConfirmation=!1,this.formSend=!0}},computed:{fieldsValid:function(){return this.info.reduce(function(t,n){return t+(n.valid?1:0)},0)},formDone:function(){return this.fieldsValid===this.info.length}}},b=h,g=(e("9e9b"),Object(p["a"])(b,i,r,!1,null,"8d7a1430",null)),y=g.exports;e("f9e3"),e("2dd8");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(y)}}).$mount("#app")},7901:function(t,n,e){},9639:function(t,n,e){"use strict";var a=e("7901"),i=e.n(a);i.a},"9e9b":function(t,n,e){"use strict";var a=e("3aca"),i=e.n(a);i.a}});
//# sourceMappingURL=app.426fb334.js.map