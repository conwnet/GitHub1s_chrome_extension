(()=>{var t={8926:t=>{function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}},1553:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new K(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",y="completed",d={};function v(){}function g(){}function m(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(C([])));x&&x!==r&&n.call(x,i)&&(w=x);var k=m.prototype=v.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function K(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=k.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),u(k,c,"Generator"),k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,K.prototype={constructor:K,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},7757:(t,e,r)=>{t.exports=r(1553)}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(7757),e=r.n(t),n=r(8926),o=r.n(n),i="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function a(t,e,r){t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent&&t.attachEvent("on".concat(e),(function(){r(window.event)}))}function c(t,e){for(var r=e.slice(0,e.length-1),n=0;n<r.length;n++)r[n]=t[r[n].toLowerCase()];return r}function u(t){"string"!=typeof t&&(t="");for(var e=(t=t.replace(/\s/g,"")).split(","),r=e.lastIndexOf("");r>=0;)e[r-1]+=",",e.splice(r,1),r=e.lastIndexOf("");return e}for(var s={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":i?173:189,"=":i?61:187,";":i?59:186,"'":222,"[":219,"]":221,"\\":220},f={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},l={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},h={16:!1,18:!1,17:!1,91:!1},p={},y=1;y<20;y++)s["f".concat(y)]=111+y;var d=[],v="all",g=[],m=function(t){return s[t.toLowerCase()]||f[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)};function w(t){v=t||"all"}function b(){return v||"all"}var x=function(t){var e=t.key,r=t.scope,n=t.method,o=t.splitKey,i=void 0===o?"+":o;u(e).forEach((function(t){var e=t.split(i),o=e.length,a=e[o-1],u="*"===a?"*":m(a);if(p[u]){r||(r=b());var s=o>1?c(f,e):[];p[u]=p[u].map((function(t){return(!n||t.method===n)&&t.scope===r&&function(t,e){for(var r=t.length>=e.length?t:e,n=t.length>=e.length?e:t,o=!0,i=0;i<r.length;i++)-1===n.indexOf(r[i])&&(o=!1);return o}(t.mods,s)?{}:t}))}}))};function k(t,e,r){var n;if(e.scope===r||"all"===e.scope){for(var o in n=e.mods.length>0,h)Object.prototype.hasOwnProperty.call(h,o)&&(!h[o]&&e.mods.indexOf(+o)>-1||h[o]&&-1===e.mods.indexOf(+o))&&(n=!1);(0!==e.mods.length||h[16]||h[18]||h[17]||h[91])&&!n&&"*"!==e.shortcut||!1===e.method(t,e)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}function _(t){var e=p["*"],r=t.keyCode||t.which||t.charCode;if(O.filter.call(this,t)){if(93!==r&&224!==r||(r=91),-1===d.indexOf(r)&&229!==r&&d.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(e){var r=l[e];t[e]&&-1===d.indexOf(r)?d.push(r):!t[e]&&d.indexOf(r)>-1?d.splice(d.indexOf(r),1):"metaKey"===e&&t[e]&&3===d.length&&(t.ctrlKey||t.shiftKey||t.altKey||(d=d.slice(d.indexOf(r))))})),r in h){for(var n in h[r]=!0,f)f[n]===r&&(O[n]=!0);if(!e)return}for(var o in h)Object.prototype.hasOwnProperty.call(h,o)&&(h[o]=t[l[o]]);t.getModifierState&&(!t.altKey||t.ctrlKey)&&t.getModifierState("AltGraph")&&(-1===d.indexOf(17)&&d.push(17),-1===d.indexOf(18)&&d.push(18),h[17]=!0,h[18]=!0);var i=b();if(e)for(var a=0;a<e.length;a++)e[a].scope===i&&("keydown"===t.type&&e[a].keydown||"keyup"===t.type&&e[a].keyup)&&k(t,e[a],i);if(r in p)for(var c=0;c<p[r].length;c++)if(("keydown"===t.type&&p[r][c].keydown||"keyup"===t.type&&p[r][c].keyup)&&p[r][c].key){for(var u=p[r][c],s=u.splitKey,y=u.key.split(s),v=[],g=0;g<y.length;g++)v.push(m(y[g]));v.sort().join("")===d.sort().join("")&&k(t,u,i)}}}function O(t,e,r){d=[];var n=u(t),o=[],i="all",s=document,l=0,y=!1,v=!0,w="+";for(void 0===r&&"function"==typeof e&&(r=e),"[object Object]"===Object.prototype.toString.call(e)&&(e.scope&&(i=e.scope),e.element&&(s=e.element),e.keyup&&(y=e.keyup),void 0!==e.keydown&&(v=e.keydown),"string"==typeof e.splitKey&&(w=e.splitKey)),"string"==typeof e&&(i=e);l<n.length;l++)o=[],(t=n[l].split(w)).length>1&&(o=c(f,t)),(t="*"===(t=t[t.length-1])?"*":m(t))in p||(p[t]=[]),p[t].push({keyup:y,keydown:v,scope:i,mods:o,shortcut:n[l],method:r,key:n[l],splitKey:w});void 0!==s&&!function(t){return g.indexOf(t)>-1}(s)&&window&&(g.push(s),a(s,"keydown",(function(t){_(t)})),a(window,"focus",(function(){d=[]})),a(s,"keyup",(function(t){_(t),function(t){var e=t.keyCode||t.which||t.charCode,r=d.indexOf(e);if(r>=0&&d.splice(r,1),t.key&&"meta"===t.key.toLowerCase()&&d.splice(0,d.length),93!==e&&224!==e||(e=91),e in h)for(var n in h[e]=!1,f)f[n]===e&&(O[n]=!1)}(t)})))}var L={setScope:w,getScope:b,deleteScope:function(t,e){var r,n;for(var o in t||(t=b()),p)if(Object.prototype.hasOwnProperty.call(p,o))for(r=p[o],n=0;n<r.length;)r[n].scope===t?r.splice(n,1):n++;b()===t&&w(e||"all")},getPressedKeyCodes:function(){return d.slice(0)},isPressed:function(t){return"string"==typeof t&&(t=m(t)),-1!==d.indexOf(t)},filter:function(t){var e=t.target||t.srcElement,r=e.tagName,n=!0;return!e.isContentEditable&&("INPUT"!==r&&"TEXTAREA"!==r&&"SELECT"!==r||e.readOnly)||(n=!1),n},unbind:function(t){if(t){if(Array.isArray(t))t.forEach((function(t){t.key&&x(t)}));else if("object"==typeof t)t.key&&x(t);else if("string"==typeof t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var o=r[0],i=r[1];"function"==typeof o&&(i=o,o=""),x({key:t,scope:o,method:i,splitKey:"+"})}}else Object.keys(p).forEach((function(t){return delete p[t]}))}};for(var E in L)Object.prototype.hasOwnProperty.call(L,E)&&(O[E]=L[E]);if("undefined"!=typeof window){var j=window.hotkeys;O.noConflict=function(t){return t&&window.hotkeys===O&&(window.hotkeys=j),O},window.hotkeys=O}const K=O;var C=[{name:"CodeSandbox",url:"https://codesandbox.io/s/github/",index:0},{name:"Github1s",url:"https://github1s.com/",index:1},{name:"Gitpod",url:"https://gitpod.io/#https://github.com/",index:2},{name:"Repl.it",url:"https://repl.it/github/",index:3},{name:"Vscode",url:"vscode://vscode.git/clone?url=https://github.com/",index:4}],P={input_url:"https://github1s.com",button_title:"Github1s",button_title_color:"#ffffff",button_background_color:"#2ea44f",check_box:{new_tab:1,right_menu:0,is_private:0,use_keyboard:0},web_service:1,keyboard_shortcuts:"alt+shift+g"};function S(t,e){var r={};r[t]=e,chrome.storage.sync.set(r),chrome.storage.local.set(r)}function A(t){return new Promise((function(e,r){chrome.storage.sync.get(t,(function(n){n&&e(n[t]),r(!1)}))}))}function G(){return N.apply(this,arguments)}function N(){return(N=o()(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A("form");case 2:if(null!=(r=t.sent)){t.next=6;break}return T(),t.abrupt("return",P);case 6:return t.abrupt("return",Object.assign({},P,r));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){S("form",P),S("right_menu_create",0)}function I(t,e,r){var n,o=new URL(e).pathname.split("/").slice(1,3).join("/"),i=t.web_service;switch(i){case 1:n="".concat(r,"/").concat(o);break;case 0:case 2:case 3:case 4:case 5:n="".concat(C[i].url).concat(o)}return n}function R(){return(R=o()(e().mark((function t(){var r,n,o,i,a,c,u,s,f,l,h,p,y,d;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:if(r=t.sent,n=window.location.href,o=r.input_url,i=r.button_title,a=r.button_title_color,c=r.button_background_color,u=r.check_box,r.web_service,s=r.keyboard_shortcuts,f=I(r,n,o),l=document.querySelectorAll("#js-repo-pjax-container .Label"),!1,!Array.from(l).some((function(t){return"private"==t.textContent.trim().toLowerCase()}))){t.next=14;break}if(0!=u.is_private){t.next=14;break}return t.abrupt("return");case 14:if(h=1==u.new_tab?"_blank":"_self",p='\n  <a class="btn ml-2 d-none d-md-block" style="background: '.concat(c,"; color: ").concat(a,';" target="').concat(h,'" href="').concat(f,'">').concat(i,"</a>\n  "),(y=document.querySelector(".btn.ml-2.d-none.d-md-block"))&&y.insertAdjacentHTML("beforeBegin",p),u.use_keyboard&&(d=s.replace(/\s/gi,"").toLowerCase(),K(d,(function(t,e){t.preventDefault(),chrome.extension.sendRequest({action:"keyboard",href:f,key:d})}))),!u.right_menu){t.next=29;break}return t.next=23,A("right_menu_create");case 23:if(1!=t.sent){t.next=28;break}return t.abrupt("return");case 28:chrome.extension.sendRequest({action:"createContextMenuItem",href:f,button_title:i});case 29:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){R.apply(this,arguments)}()})()})();