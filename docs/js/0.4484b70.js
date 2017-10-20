webpackJsonp([0],[,,,,,,,,,,,,function(t,e){t.exports={}},,,,,,,,function(t,e,a){t.exports={default:a(64),__esModule:!0}},,,,,,,,,,,,,function(t,e){"use strict";function a(t,e,a,s){return o[t]&&!s?void console.error("Rule already exists"):void(e instanceof RegExp?o[t]=[function(t,a,s){return e.test(t)},a]:l(e)&&(o[t]=[function(t,a,s){return e.call(null,t,a,s)},a]))}function s(t){return o[t]?o[t][0]:null}function n(t){return o[t]?o[t][1]:""}function r(t,e){o[t]&&(o[t][1]=e)}function i(t){return(t||"").toString().trim()}function l(t){return"[object Function]"===Object.prototype.toString.call(t)}Object.defineProperty(e,"__esModule",{value:!0});var o={};a("mobile",/^1\d{10}$/,"{{name}}的格式不正确"),a("email",/^\s*([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,20})\s*$/,"{{name}}的格式不正确"),a("url",/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,"{{name}}的格式不正确"),a("date",/^\d{4}\-[01]?\d\-[0-3]?\d$|^[01]\d\/[0-3]\d\/\d{4}$|^\d{4}年[01]?\d月[0-3]?\d[日号]$/,"{{name}}的格式不正确"),a("number",/^[+-]?[1-9][0-9]*(\.[0-9]+)?([eE][+-][1-9][0-9]*)?$|^[+-]?0?\.[0-9]+([eE][+-][1-9][0-9]*)?$|^0$/,"{{name}}的格式不正确"),a("required",function(t,e,a){var s=null;switch(s="input"===e.tagName.toLowerCase()?e.type:e.tagName.toLowerCase()){case"radio":return Boolean(t);case"checkbox":return Array.isArray(t)?Boolean(t.length):Boolean(t);case"select":return Boolean(t.indexOf("请选择")===-1);default:return Boolean(i(t))}},"请输入{{name}}"),a("min",function(t,e,a){return Number(t)>=Number(a)},"{{name}}必须大于或等于{{min}}"),a("max",function(t,e,a){return Number(t)<=Number(a)},"{{name}}必须小于或等于{{max}}"),a("minlength",function(t,e,a){return(t||"").toString().length>=Number(a)},"{{name}}的长度必须大于或等于{{minlength}}"),a("maxlength",function(t,e,a){return(t||"").toString().length<=Number(a)},"{{name}}的长度必须小于或等于{{maxlength}}"),e.getRule=s,e.addRule=a,e.getMessage=n,e.setMessage=r},function(t,e,a){t.exports={default:a(65),__esModule:!0}},,,,,,function(t,e,a){"use strict";var s=a(24),n=a(11),r=a(44),i=a(9),l=a(4),o=a(12),v=a(79),u=a(26),c=a(87),_=a(1)("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",m="keys",h="values",f=function(){return this};t.exports=function(t,e,a,g,C,j,y){v(a,e,g);var b,x,A,R=function(t){if(!p&&t in L)return L[t];switch(t){case m:return function(){return new a(this,t)};case h:return function(){return new a(this,t)}}return function(){return new a(this,t)}},S=e+" Iterator",M=C==h,E=!1,L=t.prototype,w=L[_]||L[d]||C&&L[C],k=w||R(C),$=C?M?R("entries"):k:void 0,V="Array"==e?L.entries||w:w;if(V&&(A=c(V.call(new t)),A!==Object.prototype&&A.next&&(u(A,S,!0),s||l(A,_)||i(A,_,f))),M&&w&&w.name!==h&&(E=!0,k=function(){return w.call(this)}),s&&!y||!p&&!E&&L[_]||i(L,_,k),o[e]=k,o[S]=f,C)if(b={values:M?k:R(h),keys:j?k:R(m),entries:$},y)for(x in b)x in L||r(L,x,b[x]);else n(n.P+n.F*(p||E),e,b);return b}},,,,,,,function(t,e,a){var s=a(72),n=a(1)("iterator"),r=a(12);t.exports=a(2).getIteratorMethod=function(t){if(void 0!=t)return t[n]||t["@@iterator"]||r[s(t)]}},function(t,e,a){"use strict";var s=a(89)(!0);a(40)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=s(e,a),this._i+=t.length,{value:t,done:!1})})},,function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.definition=e.refs=void 0;var n=a(34),r=s(n),i=a(20),l=s(i),o=void 0,v=void 0;e.refs=o={},e.definition=v={bind:function(t,e,a){t.binding=e,t.setAttribute("novalidate","novalidate"),t.callback=function(e){e.preventDefault();var a=void 0,s=void 0,n=void 0,i=void 0;a=0,s=(0,l.default)(t.querySelectorAll('[data-key="validator"]'));var v=!0,u=!1,c=void 0;try{for(var _,p=(0,r.default)(s);!(v=(_=p.next()).done)&&(n=_.value,(i=o[n.dataset.uuid].execute())===!0);v=!0)a+=1}catch(t){u=!0,c=t}finally{try{!v&&p.return&&p.return()}finally{if(u)throw c}}t.binding.value(a===s.length?null:i,e)},t.addEventListener("submit",t.callback,!1)},componentUpdated:function(t,e,a){t.binding=e},unbind:function(t,e,a){t.removeEventListener("submit",t.callback,!1),delete t.binding,delete t.callback}},e.refs=o,e.definition=v},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return""+t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}function r(t,e){var a=[],s=!0,n=!1,r=void 0;try{for(var i,l=(0,p.default)((0,c.default)(t.attributes));!(s=(i=l.next()).done);s=!0){var o=i.value;o.name.indexOf("data-")===-1&&"class"!==o.name&&(e&&e[o.name]||(0,d.getRule)(o.name))&&(a=[].concat((0,v.default)(a),[o.name,o.value]),t.removeAttribute(o.name))}}catch(t){n=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(n)throw r}}return a}function i(t){if(t.tagName)return"FORM"===t.tagName.toUpperCase()?t:i(t.parentNode)}function l(t){return t.querySelector("input")||t.querySelector("select")||t.querySelector("textarea")}Object.defineProperty(e,"__esModule",{value:!0}),e.getElementByInput=e.getElementByForm=e.parseRules=e.guid=void 0;var o=a(63),v=s(o),u=a(20),c=s(u),_=a(34),p=s(_),d=a(33);e.guid=n,e.parseRules=r,e.getElementByForm=i,e.getElementByInput=l},,,function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(112),r=s(n);r.default.addRule("email",/^\s*([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,20})\s*$/,"{{name}}的格式不正确",!0),r.default.addRule("mobile",function(t,e,a){return/^1\d{10}$/.test(t)},"{{name}}的格式不正确",!0),e.default={validators:{text:{message:"{{name}}不能有空格",handler:function(t,e,a){return!/\s/g.test(t)}}},methods:{done:function(t){if(t)return void alert(t.message)}},components:{Validator:r.default}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(116),r=s(n);e.default={components:{README:r.default}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(15),r=s(n),i=a(50),l=a(33),o=a(51);r.default.directive("submit",i.definition),e.default={props:{name:{type:String,required:!0}},data:function(){return{rules:{},element:null}},computed:{uuid:function(){return(0,o.guid)()},validators:function(){return this.$vnode.context.$options.validators}},methods:{execute:function(){var t=!0;this.$emit("validate",this.$el);for(var e=0;e<this.rules.length;e++){var a=void 0,s=void 0,n=void 0;if(a=this.rules[e],s=this.getRule(a),!s(this.element.value,this.element,n=this.rules[++e])){t={rule:a,name:this.name,element:this.element,value:this.element.value,message:this.getMessage(a,this.name,n)};break}}return"boolean"==typeof t?this.$emit("validated",{rule:"",message:"",name:this.name,element:this.element,value:this.element.value},this.$el):this.$emit("validated",t,this.$el),t},getRule:function(t){return this.validators&&this.validators[t]?this.validators[t].handler:(0,l.getRule)(t)},getMessage:function(t,e,a){var s=(0,l.getMessage)(t);return this.validators&&this.validators[t]&&(s=this.validators[t].message||""),s.replace("{{name}}",e).replace("{{"+t+"}}",a)},mountedEvents:function(){var t=void 0,e=void 0,a=void 0;a="blur",e=this.element.type,t=this.element.tagName.toUpperCase(),"SELECT"!==t&&"RADIO"!==e&&"CHECKBOX"!==e&&"FILE"!==e||(a="change"),this.element.addEventListener(a,this.execute)},unmountedEvents:function(){var t=void 0,e=void 0,a=void 0;a="blur",e=this.element.type,t=this.element.tagName.toUpperCase(),"SELECT"!==t&&"RADIO"!==e&&"CHECKBOX"!==e&&"FILE"!==e||(a="change"),this.element.removeEventListener(a,this.execute)}},mounted:function(){return(0,o.getElementByForm)(this.$el)?(this.element=(0,o.getElementByInput)(this.$el))?(this.mountedEvents(),i.refs[this.uuid]=this,void(this.rules=(0,o.parseRules)(this.$el,this.validators))):void console.error("Validator component must contain the input element"):void console.error("Validator component must within the form element")},beforeDestroy:function(){delete i.refs[this.uuid],this.unmountedEvents()},getRule:l.getRule,addRule:l.addRule,setMessage:l.setMessage}},,,,,,,function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var n=a(20),r=s(n);e.default=function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return(0,r.default)(t)}},function(t,e,a){a(48),a(92),t.exports=a(2).Array.from},function(t,e,a){a(100),a(48),t.exports=a(91)},,,,,function(t,e){t.exports=function(){}},,function(t,e,a){var s=a(21),n=a(1)("toStringTag"),r="Arguments"==s(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,a,l;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(a=i(e=Object(t),n))?a:r?s(e):"Object"==(l=s(e))&&"function"==typeof e.callee?"Arguments":l}},function(t,e,a){"use strict";var s=a(5),n=a(14);t.exports=function(t,e,a){e in t?s.f(t,e,n(0,a)):t[e]=a}},,,function(t,e,a){var s=a(12),n=a(1)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(s.Array===t||r[n]===t)}},,function(t,e,a){var s=a(6);t.exports=function(t,e,a,n){try{return n?e(s(a)[0],a[1]):e(a)}catch(e){var r=t.return;throw void 0!==r&&s(r.call(t)),e}}},function(t,e,a){"use strict";var s=a(41),n=a(14),r=a(26),i={};a(9)(i,a(1)("iterator"),function(){return this}),t.exports=function(t,e,a){t.prototype=s(i,{next:n(1,a)}),r(t,e+" Iterator")}},function(t,e,a){var s=a(1)("iterator"),n=!1;try{var r=[7][s]();r.return=function(){n=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!n)return!1;var a=!1;try{var r=[7],i=r[s]();i.next=function(){return{done:a=!0}},r[s]=function(){return i},t(r)}catch(t){}return a}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},,,,,,function(t,e,a){var s=a(4),n=a(18),r=a(27)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),s(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},,function(t,e,a){var s=a(29),n=a(22);t.exports=function(t){return function(e,a){var r,i,l=String(n(e)),o=s(a),v=l.length;return o<0||o>=v?t?"":void 0:(r=l.charCodeAt(o),r<55296||r>56319||o+1===v||(i=l.charCodeAt(o+1))<56320||i>57343?t?l.charAt(o):r:t?l.slice(o,o+2):(r-55296<<10)+(i-56320)+65536)}}},,function(t,e,a){var s=a(6),n=a(47);t.exports=a(2).getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}},function(t,e,a){"use strict";var s=a(36),n=a(11),r=a(18),i=a(78),l=a(76),o=a(45),v=a(73),u=a(47);n(n.S+n.F*!a(80)(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,n,c,_=r(t),p="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,h=void 0!==m,f=0,g=u(_);if(h&&(m=s(m,d>2?arguments[2]:void 0,2)),void 0==g||p==Array&&l(g))for(e=o(_.length),a=new p(e);e>f;f++)v(a,f,h?m(_[f],f):_[f]);else for(c=g.call(_),a=new p;!(n=c.next()).done;f++)v(a,f,h?i(c,m,[n.value,f],!0):n.value);return a.length=f,a}})},function(t,e,a){"use strict";var s=a(70),n=a(81),r=a(12),i=a(10);t.exports=a(40)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,a=this._i++;return!t||a>=t.length?(this._t=void 0,n(1)):"keys"==e?n(0,a):"values"==e?n(0,t[a]):n(0,[a,t[a]])},"values"),r.Arguments=r.Array,s("keys"),s("values"),s("entries")},,,,,,,function(t,e,a){a(93);for(var s=a(3),n=a(9),r=a(12),i=a(1)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),o=0;o<l.length;o++){var v=l[o],u=s[v],c=u&&u.prototype;c&&!c[i]&&n(c,i,v),r[v]=r.Array}},,,,,,,,,,,,function(t,e,a){var s,n;s=a(56);var r=a(126);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},,,,function(t,e,a){var s,n;s=a(54);var r=a(118);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;s=a(55);var r=a(122);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h1",{attrs:{id:"vt-validator"}},[t._v("vt-validator")]),t._v(" "),a("p",[t._v("基于 vue 2.x 封装的 validator 组件，内置了基本的检查规则。")]),t._v(" "),a("h2",{attrs:{id:"install"}},[t._v("Install")]),t._v(" "),t._m(0),a("h2",{attrs:{id:"warning"}},[t._v("Warning")]),t._v(" "),a("p",[t._v("validator 组件必须放在 Form 标签内，validator 组件的具名插槽(slot)内必须有且仅有一个 Input|Select|Textarea 标签。")]),t._v(" "),a("p",[t._v("validator 组件只有在触发表单的 submit 事件时才执行规则验证，所以 validator 组件内置了一个指令 v-submit，必须配合 v-submit 指令才能达到检查表单的值同时给予提示的效果。")]),t._v(" "),a("p",[t._v("validator 允许添加自定义规则，添加的规则分为全局生效和局部生效，全局生效在整个应用内都可以使用，局部生效只能在此页面内使用。")]),t._v(" "),a("h2",{attrs:{id:"api"}},[t._v("API")]),t._v(" "),a("h3",{attrs:{id:"getrule"}},[t._v("getRule")]),t._v(" "),a("p",[t._v("根据规则名，获得一个规则的实现(Function)。")]),t._v(" "),a("p",[t._v("Validator.getRule('mobile'); // 获得手机号规则的实现")]),t._v(" "),a("h3",{attrs:{id:"addrule"}},[t._v("addRule")]),t._v(" "),a("p",[t._v("根据规则名，添加一个规则。")]),t._v(" "),t._m(1),a("p",[t._v("Validator.addRule('text', /\\s/g, '"+t._s(t.name)+"不能有空格'); // 添加一个名为 text 的规则")]),t._v(" "),a("h3",{attrs:{id:"setmessage"}},[t._v("setMessage")]),t._v(" "),a("p",[t._v("根据规则名，设置规则的提示信息，一般用于修改 validator 内置规则的提示信息。")]),t._v(" "),a("p",[t._v("Validator.setMessage('mobile', '手机号格式不正确'); // 修改手机号规则的提示信息")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[t._v("Usage")]),t._v(" "),[a("form",{directives:[{name:"submit",rawName:"v-submit.prevent",value:t.done,expression:"done",modifiers:{prevent:!0}}]},[a("Validator",{attrs:{name:"用户名",required:"",text:"",email:"",minlength:"6"}},[a("input",{attrs:{type:"text"}})]),t._v(" "),a("Validator",{attrs:{name:"手机号",required:"",mobile:""}},[a("input",{attrs:{type:"tel"}})]),t._v(" "),a("input",{attrs:{type:"submit",value:"提交"}})],1)],t._v(" "),t._m(2),a("h2",{attrs:{id:"rules"}},[t._v("Rules")]),t._v(" "),a("vue-doc-tabs",{attrs:{data:{props:{mobile:{type:"Boolean",default:"",description:"判断手机号"},email:{type:"Boolean",default:"",description:"判断邮箱"},url:{type:"Boolean",default:"",description:"判断链接"},date:{type:"Boolean",default:"",description:"判断日期"},number:{type:"Boolean",default:"",description:"判断纯数字"},required:{type:"Boolean",default:"",description:"判断是否填写"},min:{type:"Number",default:"",description:"判断最小值"},max:{type:"Number",default:"",description:"判断最大值"},minlength:{type:"Number",default:"",description:"判断最小长度"},maxlength:{type:"Number",default:"",description:"判断最大长度"}}}}})],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"lang-javascript"},[a("code",[a("span",{staticClass:"hljs-built_in"},[t._v("npm")]),t._v(" i vt-validator -S\n\n"),a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" Validator "),a("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v("'vt-validator'")]),t._v("\n\n"),a("span",{staticClass:"hljs-regexp"},[t._v("//")]),t._v(" "),a("span",{staticClass:"hljs-built_in"},[t._v("global")]),t._v(" install\nVue.component("),a("span",{staticClass:"hljs-string"},[t._v("'Validator'")]),t._v(", Validator)\n\n"),a("span",{staticClass:"hljs-regexp"},[t._v("//")]),t._v(" scope install\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    components: {\n        Validator\n    }\n}")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("参数:\n    name: 规则名\n    operator: 规则实现，正则表达式或返回值为Boolean的函数\n    message: 规则的提示信息\n    silent: 如果该规则名对应的实现已经存在，是否强制覆盖实现，默认值 false")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"lang-example"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-comment"},[t._v("<!-- v-submit 指令，用于检测规表单值是否适配规则 -->")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("form")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-submit.prevent")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"done"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-comment"},[t._v("<!-- 使用 required, text, email, minlength规则 -->")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("Validator")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"用户名"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("required")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("email")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("minlength")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"6"')]),t._v(">")]),t._v("\n            "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("input")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"text"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("Validator")]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-comment"},[t._v("<!-- 使用 required 和 mobile 规则 -->")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("Validator")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"手机号"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("required")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mobile")]),t._v(">")]),t._v("\n            "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("input")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tel"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("Validator")]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("input")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"submit"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"提交"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("form")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" Validator "),a("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v("'vt-validator'")]),t._v("\n\n    "),a("span",{staticClass:"hljs-comment"},[t._v("// 添加一个 email 规则，全局生效")]),t._v("\n    Validator.addRule("),a("span",{staticClass:"hljs-string"},[t._v("'email'")]),t._v(", /^\\s*([a-zA-Z0"),a("span",{staticClass:"hljs-number"},[t._v("-9")]),t._v("_\\.\\-\\+])+\\@(([a-zA-Z0"),a("span",{staticClass:"hljs-number"},[t._v("-9")]),t._v("\\-])+\\.)+([a-zA-Z0"),a("span",{staticClass:"hljs-number"},[t._v("-9")]),t._v("]"),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),a("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(","),a("span",{staticClass:"hljs-number"},[t._v("20")]),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v(")\\s*$/, "),a("span",{staticClass:"hljs-string"},[t._v("'"),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("name"),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("的格式不正确'")]),t._v(", "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(");\n\n    "),a("span",{staticClass:"hljs-comment"},[t._v("// 添加一个 mobile 规则，全局生效")]),t._v("\n    Validator.addRule("),a("span",{staticClass:"hljs-string"},[t._v("'mobile'")]),t._v(", (val, element, rule) => "),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("\n        "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"hljs-regexp"},[t._v("/^1\\d"),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("10"),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("$/")]),t._v(".test(val)\n    "),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v("'"),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("name"),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("的格式不正确'")]),t._v(", "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(");\n\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("\n        "),a("span",{staticClass:"hljs-comment"},[t._v("// 添加一个 text 规则，局部生效")]),t._v("\n        validators: "),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("\n            "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("\n                "),a("span",{staticClass:"hljs-attr"},[t._v("message")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'"),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("name"),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("不能有空格'")]),t._v(",\n                handler(val, element, rule) "),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("\n                    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" !"),a("span",{staticClass:"hljs-regexp"},[t._v("/\\s/g")]),t._v(".test(val)\n                "),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("\n            "),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("\n        "),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": "),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("\n            "),a("span",{staticClass:"hljs-comment"},[t._v("// 如果规则都通过，那么 err 的值为 null，如果某一个规则不通过，那么 err 的值为此规则的详情，它是一个对象，包含了 rule, name, element, message 等字段。")]),t._v("\n            done(err) "),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("\n                "),a("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (err) "),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("\n                    alert(err.message);\n                    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(";\n                "),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("\n\n                "),a("span",{staticClass:"hljs-comment"},[t._v("// your code")]),t._v("\n            "),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("\n        "),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": "),a("span",{staticClass:"hljs-template-variable"},[t._v("{")]),t._v("\n            Validator\n        "),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("\n    "),a("span",{staticClass:"hljs-template-variable"},[t._v("}")]),t._v("\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])])}]}},,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("README")],1)},staticRenderFns:[]}},,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-key":"validator","data-uuid":t.uuid}},[t._t("default")],2)},staticRenderFns:[]}}]);