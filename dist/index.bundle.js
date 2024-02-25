(()=>{"use strict";var e,n,t,r,o,a,i,c,s,d,u,l,p,f,h,m={208:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(334),t.b),u=i()(o()),l=s()(d);u.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: rgb(63, 19, 19);\n    text-align: center;\n    background-image: url(${l});\n\n    background-position: center;\n    background-repeat: no-repeat; \n    background-size: cover; \n    height: 500px;\n}\n\nheader {\n    margin: 0 auto;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 20px;\n    width: 500px;\n    \n}\n\nbutton {\n    background-color:rgb(63, 19, 19);\n    color: white;\n    font-weight:bold;\n    padding: 20px;\n    border-radius: 20px 20px;\n    border: 1px solid black;\n}\n\n#content {\n    background: rgba(87, 42, 16, 0.9);\n    color: rgba(169, 173, 113, 0.9);\n    width: 600px;\n    padding: 10px;\n    margin: 0 auto;\n    border: 1px solid rgb(11, 36, 11);\n    border-radius: 20px 20px;\n    font-weight: bold;\n}\n\nfooter {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    color: rgb(63, 19, 19);\n    font-weight: bold;\n    \n}`,""]);const p=u},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},997:(e,n,t)=>{t.d(n,{q:()=>i,O:()=>a});var r=t(334);const o=t.p+"5f318402b1866255b870.jpg";function a(){const e=document.getElementById("content"),n=document.createElement("h1"),t=document.createTextNode("Alighieri's Pizzeria");n.appendChild(t),e.appendChild(n);const a=document.createElement("h4"),i=document.createTextNode("Fanciest pizzeria of the city!");a.appendChild(i),e.appendChild(a),a.style.margin="20px";const c=new Image;c.src=o,e.appendChild(c),c.style.width="200px",c.style.height="200px",c.style.marginBottom="10px",c.style.border="1px solid rgba(11, 36, 11)",c.style.borderRadius="50%";const s=document.createElement("p"),d=document.createTextNode("Welcome to Alighieri's – where passion meets flavor! \n    Step into a world of delicious indulgence, where every slice tells a story of craftsmanship and love for the art of pizza-making.");s.appendChild(d),e.appendChild(s),s.style.width="500px",s.style.margin="0 auto",(new Image).src=r}function i(){const e=document.querySelector("#content"),n=document.createElement("h1"),t=document.createTextNode("Alighieri's Pizzeria");n.appendChild(t),e.appendChild(n)}},334:(e,n,t)=>{e.exports=t.p+"990517e9fb2db861e617.jpg"}},g={};function b(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,exports:{}};return m[e](t,t.exports,b),t.exports}b.m=m,b.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return b.d(n,{a:n}),n},b.d=(e,n)=>{for(var t in n)b.o(n,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var n=b.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),b.b=document.baseURI||self.location.href,b.nc=void 0,e=b(997),n=b(72),t=b.n(n),r=b(825),o=b.n(r),a=b(659),i=b.n(a),c=b(56),s=b.n(c),d=b(540),u=b.n(d),l=b(113),p=b.n(l),f=b(208),(h={}).styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(f.A,h),f.A&&f.A.locals&&f.A.locals,(0,e.O)(),console.log("Hello World!"),document.querySelector(".home").addEventListener("click",(function(){const n=document.querySelector("#content");return n.innerHTML="",(0,e.O)(),n})),document.querySelector(".menu").addEventListener("click",(function(){document.querySelector("#content").innerHTML="",(0,e.q)()})),document.querySelector(".about").addEventListener("click",(function(){}))})();