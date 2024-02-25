(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),c=n(417),d=n.n(c),s=new URL(n(334),n.b),p=i()(o()),l=d()(s);p.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: rgb(39, 18, 5);\n    text-align: center;\n    background-image: url(${l});\n\n    background-position: center;\n    background-repeat: no-repeat; \n    background-size: cover; \n    height: 500px;\n}\n\nheader {\n    margin: 0 auto;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 20px;\n    width: 500px;\n    \n}\n\nbutton {\n    background-color:rgb(39, 18, 5);\n    color: white;\n    font-weight:bold;\n    padding: 20px;\n    border-radius: 20px 20px;\n    border: 1px solid black;\n}\n\n#content {\n    background: rgba(39, 18, 5, 0.9);\n    color: rgba(197, 201, 152, 0.9);\n    width: 600px;\n    padding: 10px;\n    margin: 0 auto;\n    border: 1px solid rgb(66, 44, 19);\n    border-radius: 20px 20px;\n    font-weight: bold;\n}\n\nfooter {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    \n    color: rgb(0, 0, 0);\n    font-weight: bold;    \n}`,""]);const u=p},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var p=n(a[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},531:(e,t,n)=>{n.d(t,{qx:()=>l,qH:()=>p,O$:()=>s});const r=n.p+"f88a5d86892db44d3ab9.jpg",o=n.p+"c152e7c4e86ae2d0e072.jpg",a=n.p+"6608c5d8e8a7ac5d7e7a.jpg",i=n.p+"42b8c36241e20585c3c2.jpg",c=n.p+"bb19a968750500fe2a91.jpg",d=document.getElementById("content");function s(){const e=document.createElement("h4"),t=document.createTextNode("Since 1265");e.appendChild(t),d.appendChild(e),e.style.marginBottom="20px";const n=new Image;n.src=r,d.appendChild(n),n.style.width="200px",n.style.height="200px",n.style.marginBottom="10px",n.style.marginTop="20px",n.style.border="1px solid rgba(66, 44, 19)",n.style.borderRadius="50%";const o=document.createElement("h1"),a=document.createTextNode("Alighieri's Pizzeria");o.appendChild(a),d.appendChild(o),o.style.marginBottom="20px";const i=document.createElement("p"),c=document.createTextNode("Welcome to Alighieri's – where passion meets flavor! \n    Step into a world of delicious indulgence, where every slice tells a story of craftsmanship and love for the art of pizza-making!");i.appendChild(c),d.appendChild(i),i.style.width="500px",i.style.margin="0 auto"}function p(){const e=document.createElement("h1"),t=document.createTextNode("Alighieri's Pizzeria");e.appendChild(t),d.appendChild(e),e.style.marginBottom="20px";const n=document.createElement("h3"),r=document.createTextNode("Menu");n.appendChild(r),d.appendChild(n),n.style.marginBottom="20px";const s=new Image;s.src=o,d.appendChild(s),s.style.height="150px",s.style.width="150px",s.style.border="1px solid rgb(66, 44, 19)",s.style.borderRadius="50%",s.style.marginBottom="10px";const p=document.createElement("p"),l=document.createTextNode("Pepperoni - $20,00");p.appendChild(l),d.appendChild(p),p.style.marginBottom="20px";const u=new Image;u.src=a,d.appendChild(u),u.style.height="150px",u.style.width="150px",u.style.border="1px solid rgb(66, 44, 19)",u.style.borderRadius="50%",u.style.marginBottom="10px";const m=document.createElement("p"),h=document.createTextNode("Neapolitan (and Margherita) - $20,00");m.appendChild(h),d.appendChild(m),m.style.marginBottom="20px";const g=new Image;g.src=i,d.appendChild(g),g.style.height="150px",g.style.width="150px",g.style.border="1px solid rgb(66, 44, 19)",g.style.borderRadius="50%",g.style.marginBottom="10px";const f=document.createElement("p"),y=document.createTextNode("Double cheese - $25,00");f.appendChild(y),d.appendChild(f),f.style.marginBottom="20px";const b=new Image;b.src=c,d.appendChild(b),b.style.height="150px",b.style.width="150px",b.style.border="1px solid rgb(66, 44, 19)",b.style.borderRadius="50%",b.style.marginBottom="10px";const x=document.createElement("p"),v=document.createTextNode("California style - $30,00");x.appendChild(v),d.appendChild(x)}function l(){const e=document.createElement("h1"),t=document.createTextNode("About us");e.appendChild(t),d.appendChild(e),e.style.marginBottom="20px";const n=document.createElement("p");n.innerHTML="\n    Welcome to Alighieri's, where our philosophy revolves around the artistry of crafting exceptional pizzas that transcend the ordinary.\n    We believe that a great pizza is not just a dish; it's an experience that brings people together, creating moments of joy and connection.\n    At Alighieri's, we are driven by a passion for quality ingredients, meticulous craftsmanship, and a commitment to delivering flavors that ignite the senses. \n    Our philosophy is rooted in the belief that every pizza should tell a story – a story of authenticity, creativity, and the pursuit of culinary excellence.",n.style.marginBottom="20px",d.appendChild(n);const r=document.createElement("h1"),o=document.createTextNode("Contact information");r.appendChild(o),d.appendChild(r),r.style.marginBottom="20px";const a=document.createElement("p");a.innerHTML="9th Circle, Hells Kitchen, USA\n    <br>\n    (555) 555-1234\n    <br>\n    example@email.co.us",a.style.marginBottom="20px",d.appendChild(a);const i=document.createElement("h1"),c=document.createTextNode("Opening hours");i.appendChild(c),d.appendChild(i),i.style.marginBottom="20px";const s=document.createElement("p");s.innerHTML="Monday\n    09:30-18:00\n    <br>\n    Tuesday\n    09:30-18:00\n    <br>\n    Wednesday\n    09:30-18:00\n    <br>\n    Thursday\n    09:30-18:00\n    <br>\n    Friday\n    09:30-17:30\n    <br>\n    Saturday\n    10:00-16:00\n    <br>\n    Sunday\n    Closed",d.appendChild(s)}},334:(e,t,n)=>{e.exports=n.p+"990517e9fb2db861e617.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(531),t=n(72),r=n.n(t),o=n(825),a=n.n(o),i=n(659),c=n.n(i),d=n(56),s=n.n(d),p=n(540),l=n.n(p),u=n(113),m=n.n(u),h=n(208),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals,(0,e.O$)(),console.log("Hello World!");const f=document.querySelector("#content");document.querySelector(".home").addEventListener("click",(function(){return f.innerHTML="",(0,e.O$)(),f})),document.querySelector(".menu").addEventListener("click",(function(){f.innerHTML="",(0,e.qH)()})),document.querySelector(".about").addEventListener("click",(function(){f.innerHTML="",(0,e.qx)()}))})()})();