(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="881c")})({1627:function(e,t,n){"use strict";n.r(t);var r=n("df9b"),o=n("c14e");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("1eef");var a,u=n("f0c5"),s=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=s.exports},"1eef":function(e,t,n){"use strict";var r=n("7a1e"),o=n.n(r);o.a},"24fb":function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"===typeof btoa){var i=o(r),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=r(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},"2ae9":function(e,t,n){var r=n("9c0b");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("7f7e").default;o("1d0e5cb4",r,!0,{sourceMap:!1,shadowMode:!1})},3748:function(e,t,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("1627").default)}))},"4faf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};t.default=r},"529d":function(e,t,n){"use strict";n.r(t);var r=n("2ae9"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"7a1e":function(e,t,n){var r=n("ed6c");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("7f7e").default;o("2929c8f7",r,!0,{sourceMap:!1,shadowMode:!1})},"7f7e":function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],u=i[1],s=i[2],c=i[3],f={id:e+":"+o,css:u,media:s,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}n.r(t),n.d(t,"default",(function(){return v}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,s=0,c=!1,f=function(){},d=null,l="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,o){c=n,d=o||{};var a=r(e,t);return h(a),function(t){for(var n=[],o=0;o<a.length;o++){var u=a[o],s=i[u.id];s.refs--,n.push(s)}t?(a=r(e,t),h(a)):a=[];for(o=0;o<n.length;o++){s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(g(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function _(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+l+'~="'+e.id+'"]');if(r){if(c)return f;r.parentNode.removeChild(r)}if(p){var o=s++;r=u||(u=_()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=_(),t=y.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var o=n?"":j(r.css);if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function y(e,t){var n=j(t.css),r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(l,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var x=/([+-]?\d+(\.\d+)?)[r|u]px/g,w=/var\(--status-bar-height\)/gi,C=/var\(--window-top\)/gi,O=/var\(--window-bottom\)/gi,S=!1;function j(e){if(!uni.canIUse("css.var")){!1===S&&(S=plus.navigator.getStatusbarHeight());var t={statusBarHeight:S,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};e=e.replace(w,t.statusBarHeight+"px").replace(C,t.top+"px").replace(O,t.bottom+"px")}return e.replace(x,(function(e,t){return uni.upx2px(t)+"px"}))}},"881c":function(e,t,n){"use strict";function r(){function e(e){var t=n("529d");t.__inject__&&t.__inject__(e)}"function"===typeof e&&e(),UniViewJSBridge.publishHandler("webviewReady")}n("3748"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},"9c0b":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 解决头条小程序组件内引入字体不生效的问题 */\r\n\r\n",""]),e.exports=t},c14e:function(e,t,n){"use strict";n.r(t);var r=n("4faf"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},df9b:function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:e._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-button",{attrs:{type:"default",_i:1},on:{click:function(t){return e.$handleViewEvent(t)}}},[e._v("分享qq空间")]),n("v-uni-button",{attrs:{type:"default",_i:2},on:{click:function(t){return e.$handleViewEvent(t)}}},[e._v("qq登录")]),n("v-uni-button",{attrs:{type:"default",_i:3},on:{click:function(t){return e.$handleViewEvent(t)}}},[e._v("qq分享朋友圈")]),n("v-uni-button",{attrs:{type:"default",_i:4},on:{click:function(t){return e.$handleViewEvent(t)}}},[e._v("安卓分享")]),n("v-uni-image",{attrs:{src:e._$g(5,"a-src"),mode:"",_i:5}}),n("v-uni-text",{attrs:{_i:6}},[e._v(e._$g(6,"t0-0"))]),n("h1",{attrs:{_i:7}},[e._v(e._$g(7,"t0-0"))]),n("v-uni-image",{attrs:{src:e._$g(8,"a-src"),_i:8}}),n("v-uni-image",{attrs:{src:e._$g(9,"a-src"),_i:9}}),n("v-uni-image",{attrs:{src:e._$g(10,"a-src"),_i:10}}),n("v-uni-image",{attrs:{src:e._$g(11,"a-src"),_i:11}})],1)},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}))},ed6c:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".container{padding:20px;font-size:14px;line-height:24px}uni-image{width:100px;height:100px;border-radius:50%}h1{border-bottom:3px solid #dd524d}",""]),e.exports=t},f0c5:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,u,s,c){var f,d="function"===typeof e?e.options:e;if(s){d.components||(d.components={});var l=Object.prototype.hasOwnProperty;for(var p in s)l.call(s,p)&&!l.call(d.components,p)&&(d.components[p]=s[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(d.mixins||(d.mixins=[])).push(c)),t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(d.functional){d._injectStyles=f;var v=d.render;d.render=function(e,t){return f.call(t),v(e,t)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,f):[f]}return{exports:e,options:d}}n.d(t,"a",(function(){return r}))}});