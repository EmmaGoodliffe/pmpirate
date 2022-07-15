var archive=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function r(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,o;function c(e,t){return s||(s=document.createElement("a")),s.href=t,e===s.href}function l(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function f(){return p(" ")}function g(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e,t){e.value=null==t?"":t}function y(e){o=e}const v=[],I=[],E=[],D=[],C=Promise.resolve();let S=!1;function _(e){E.push(e)}let $=!1;const A=new Set;function T(){if(!$){$=!0;do{for(let e=0;e<v.length;e+=1){const t=v[e];y(t),k(t.$$)}for(y(null),v.length=0;I.length;)I.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];A.has(t)||(A.add(t),t())}E.length=0}while(v.length);for(;D.length;)D.pop()();S=!1,$=!1,A.clear()}}function k(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const M=new Set;function O(e,t){e&&e.i&&(M.delete(e),e.i(t))}function x(e,n,i,s){const{fragment:o,on_mount:c,on_destroy:l,after_update:u}=e.$$;o&&o.m(n,i),s||_((()=>{const n=c.map(t).filter(r);l?l.push(...n):a(n),e.$$.on_mount=[]})),u.forEach(_)}function j(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t){-1===e.$$.dirty[0]&&(v.push(e),S||(S=!0,C.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function N(t,r,i,s,c,l,u,h=[-1]){const p=o;y(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:r.target||p.$$.root};u&&u(f.root);let g=!1;if(f.ctx=i?i(t,r.props||{},((e,n,...a)=>{const r=a.length?a[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),g&&L(t,e)),n})):[],f.update(),g=!0,a(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(d)}else f.fragment&&f.fragment.c();r.intro&&O(t.$$.fragment),x(t,r.target,r.anchor,r.customElement),T()}y(p)}class B{$destroy(){j(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const P=e=>{const t=parseInt(e);if(!isNaN(t))return t;return["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].indexOf(e)+1},F=e=>[e.getDate(),e.getMonth()+1,e.getFullYear()],H=(e,t,n)=>new Date(n,t-1,e),R=(e,t="/",n=!1)=>{const[a,r,i]=F(e).map((e=>`${e}`)),s=[a.padStart(2,"0"),r.padStart(2,"0"),i];return(n?s.reverse():s).join(t)},z=e=>{const t=`${e}`;return t.length<=2?z("20"+t.padStart(2,"0")):3===t.length?null:parseInt(t)},V=e=>{const t=new Date,n=["/","-","."];for(const t of n){const[n,a,r]=e.split(t).map(P),i=H(n,a,z(r));if(n<=31&&"Invalid Date"!=`${i}`)return i}for(const t of n){const[n,a,r]=e.split(t).map(P),i=H(r,a,z(n));if("Invalid Date"!=`${i}`)return i}const a=new Date(e);return"Invalid Date"!=`${a}`?a:t};var U={otd:{"2021-10-12":"mugs.png","2021-10-13":"you three.jpg","2021-10-14":"Gebreamlak.png","2021-10-15":"integration.png","2021-10-16":"slaps.png","2021-10-17":"trains.jpg","2021-10-18":"engineers.jpg","2021-10-19":"uncertainty.jpg","2021-10-20":"LHC.jpg","2021-10-21":"xi.jpg","2021-10-22":"crossover.jpg","2021-10-23":"HDMI.jpg","2021-11-05":"drink.png","2021-11-06":"boxes.png","2021-11-09":"F1.png","2021-11-10":"dates.png","2021-11-11":"interviews.png","2021-11-15":"planes.jpg","2021-11-16":"1i.jpg","2021-11-17":"pure 2.png","2021-11-24":"air resistance.jpg","2021-11-25":"obvious.jpg","2021-12-25":"xmas.jpg","2022-01-09":"Coulomb.png","2022-01-13":"bon appetit.png","2022-01-14":"Friday.png","2022-01-17":"speed.png","2022-01-25":"stability.png","2022-02-01":"ethane.png","2022-02-02":"birthday.png","2022-02-03":"k.jpg","2022-02-04":"Le Chatelier.png","2022-02-05":"2nd order ODE.png","2022-02-07":"expansion.png","2022-02-08":"cuts.png","2022-03-03":"spin.png","2022-03-08":"physics mark.png","2022-03-16":"core prac..png","2022-03-23":"copper.png","2022-05-04":"A level.png","2022-05-05":"studying.png","2022-05-06":"Newton's III.png","2022-05-26":"physics 1 flashbacks.png","2022-05-27":"capacitors.jpg","2022-05-28":"diodes.jpg","2022-06-07":"cheese.png","2022-06-10":"wrapped.png","2022-06-11":"USB.png","2022-06-14":"Ferris.png","2022-06-16":"chicken.png"}};const q={},W=H(1,9,2021),G=(e,t,n)=>{const a=V(e),r=a<=new Date,[,i,s]=F(a);return r&&i===t&&s===n},K=(e,t)=>{const n=H(1,t,e),a=F(new Date)[2];return W<=n&&e<=a},X=(e,t)=>{if(!K(e,t))return null;console.count(`${e}-${t}`),console.count("DB reads");const n=new Array(((e,t)=>new Date(e,t,0).getDate())(e,t)).fill(null).map(((n,a)=>{const r=H(a+1,t,e),i=R(r,"-",!0),s=U.otd[i]&&`memes/${U.otd[i]}`;return{date:r,meme:G(i,t,e)&&s?s:null}}));return(e=>{const[,t,n]=F(e[0].date);q[n]||(q[n]={});const a=e.map((e=>{const[a,r,i]=F(e.date);if(r!==t||i!==n)throw new Error(`Expected ${r} and ${t} to be equal, as well as ${i} and ${n}`);return a})),r=e.map((e=>e.meme)),i={};for(let e=0;e<a.length;e++){const t=a[e],n=r[e];i[t]=n}q[n][t]=i})(n),n},J=(e,t)=>{var n;return null!==(n=((e,t)=>{try{const n=q[e][t];if(n)return Object.keys(n).map((a=>{const r=parseInt(a),i=n[r];return{date:H(r,t,e),meme:i}}))}catch(e){console.log("Quelled cache error")}})(e,t))&&void 0!==n?n:X(e,t)},Y=e=>{const[t,n,a]=F(e);if(!K(a,n))return null;try{const e=q[a][n][t];if(void 0!==e)return e}catch(e){console.log("Quelled cache error")}return J(a,n),Y(e)};function Q(t){let n;return{c(){n=h("header"),n.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',m(n,"class","my-8 flex")},m(e,t){u(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class Z extends B{constructor(e){super(),N(this,e,null,Q,i,{})}}function ee(e,t,n){const a=e.slice();return a[14]=t[n],a}function te(e){let t,n;return{c(){t=h("br"),n=p("\n              (Sneak peek)")},m(e,a){u(e,t,a),u(e,n,a)},d(e){e&&d(t),e&&d(n)}}}function ne(e){let t,n,a,r,i,s,o,g,w,y=R(e[14].date,"/")+"",v=e[7](e[14].date),I=v&&te();return{c(){t=h("tr"),n=h("td"),a=p(y),r=f(),I&&I.c(),i=f(),s=h("td"),o=h("img"),w=f(),m(n,"class","text-center"),m(o,"class","max-w-sm mx-auto w-1/2 sm:w-auto"),c(o.src,g=e[14].meme)||m(o,"src",g),m(o,"alt","Meme")},m(e,c){u(e,t,c),l(t,n),l(n,a),l(n,r),I&&I.m(n,null),l(t,i),l(t,s),l(s,o),l(t,w)},p(e,t){64&t&&y!==(y=R(e[14].date,"/")+"")&&b(a,y),64&t&&(v=e[7](e[14].date)),v?I||(I=te(),I.c(),I.m(n,null)):I&&(I.d(1),I=null),64&t&&!c(o.src,g=e[14].meme)&&m(o,"src",g)},d(e){e&&d(t),I&&I.d()}}}function ae(e){let t;return{c(){t=h("tfoot"),t.textContent="No memes that month :(",m(t,"class","p-4 inline-block text-center")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function re(t){let n;return{c(){n=h("p"),n.textContent="No memes that day :(",m(n,"class","w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto text-center")},m(e,t){u(e,n,t)},p:e,d(e){e&&d(n)}}}function ie(e){let t,n;return{c(){t=h("img"),m(t,"class","max-w-sm mx-auto w-1/2 sm:w-auto"),c(t.src,n=e[5])||m(t,"src",n),m(t,"alt","Meme")},m(e,n){u(e,t,n)},p(e,a){32&a&&!c(t.src,n=e[5])&&m(t,"src",n)},d(e){e&&d(t)}}}function se(e){let t,n,r,i,s,o,c,y,v,I,E,D,C,S,_,$,A,T,k,L,N,B,P,F,H,R,z,V,U,q,W,G,K,X,J,Y,Q,te,se,oe=`${e[0]}`.padStart(2,"0")+"";t=new Z({});let ce=e[6],le=[];for(let t=0;t<ce.length;t+=1)le[t]=ne(ee(e,ce,t));let ue=!e[6].length&&ae();function de(e,t){return e[5]?ie:re}let he=de(e),pe=he(e);return{c(){var a;(a=t.$$.fragment)&&a.c(),n=f(),r=h("main"),i=h("h2"),i.textContent="Meme archive",s=f(),o=h("div"),c=h("div"),y=h("div"),v=h("span"),v.textContent="<",E=f(),D=h("p"),C=p(oe),S=p("/"),_=p(e[1]),$=f(),A=h("div"),T=h("div"),k=h("span"),k.textContent=">",N=f(),B=h("table"),P=h("thead"),P.innerHTML='<tr><th class="border-2">Date</th> \n        <th class="border-2">Meme</th></tr>',F=f(),H=h("tbody");for(let e=0;e<le.length;e+=1)le[e].c();R=f(),ue&&ue.c(),z=f(),V=h("section"),U=h("h2"),U.textContent="Specify a date",q=f(),W=h("input"),G=f(),pe.c(),K=f(),X=h("p"),X.textContent="DVS-style dates accepted",J=f(),Y=h("footer"),m(v,"class","-mt-1.5"),m(y,"class","flex-1 btn"),m(y,"disabled",I=!e[4]),m(c,"class","w-1/4"),m(D,"class","flex-1 my-2 text-lg text-center"),m(k,"class","-mt-1.5"),m(T,"class","flex-1 btn"),m(T,"disabled",L=!e[3]),m(A,"class","w-1/4"),m(o,"class","flex sm:w-1/4 mx-auto my-4"),m(B,"class","table-auto w-full max-w-4xl mx-auto border-white border-2"),m(W,"type","text"),m(X,"class","mt-4"),m(V,"class","mt-48")},m(a,d){x(t,a,d),u(a,n,d),u(a,r,d),l(r,i),l(r,s),l(r,o),l(o,c),l(c,y),l(y,v),l(o,E),l(o,D),l(D,C),l(D,S),l(D,_),l(o,$),l(o,A),l(A,T),l(T,k),l(r,N),l(r,B),l(B,P),l(B,F),l(B,H);for(let e=0;e<le.length;e+=1)le[e].m(H,null);l(B,R),ue&&ue.m(B,null),u(a,z,d),u(a,V,d),l(V,U),l(V,q),l(V,W),w(W,e[2]),l(V,G),pe.m(V,null),l(V,K),l(V,X),u(a,J,d),u(a,Y,d),Q=!0,te||(se=[g(y,"click",e[9]),g(T,"click",e[10]),g(W,"input",e[11])],te=!0)},p(e,[t]){if((!Q||16&t&&I!==(I=!e[4]))&&m(y,"disabled",I),(!Q||1&t)&&oe!==(oe=`${e[0]}`.padStart(2,"0")+"")&&b(C,oe),(!Q||2&t)&&b(_,e[1]),(!Q||8&t&&L!==(L=!e[3]))&&m(T,"disabled",L),192&t){let n;for(ce=e[6],n=0;n<ce.length;n+=1){const a=ee(e,ce,n);le[n]?le[n].p(a,t):(le[n]=ne(a),le[n].c(),le[n].m(H,null))}for(;n<le.length;n+=1)le[n].d(1);le.length=ce.length}e[6].length?ue&&(ue.d(1),ue=null):ue||(ue=ae(),ue.c(),ue.m(B,null)),4&t&&W.value!==e[2]&&w(W,e[2]),he===(he=de(e))&&pe?pe.p(e,t):(pe.d(1),pe=he(e),pe&&(pe.c(),pe.m(V,K)))},i(e){Q||(O(t.$$.fragment,e),Q=!0)},o(e){!function(e,t,n,a){if(e&&e.o){if(M.has(e))return;M.add(e),(void 0).c.push((()=>{M.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}(t.$$.fragment,e),Q=!1},d(e){j(t,e),e&&d(n),e&&d(r),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(le,e),ue&&ue.d(),e&&d(z),e&&d(V),pe.d(),e&&d(J),e&&d(Y),te=!1,a(se)}}}function oe(e,t,n){let a,r,i;const s=new Date,o=new Date(Number(s)+24*Math.pow(60,2)*Math.pow(10,3));let c=s.getMonth()+1,l=s.getFullYear(),u=R(s),d=!0,h=!0;return e.$$.update=()=>{3&e.$$.dirty&&(c<1?(n(0,c=12),n(1,l--,l)):c>12&&(n(0,c=1),n(1,l++,l))),3&e.$$.dirty&&n(3,d=!(s.getMonth()+1===c&&s.getFullYear()===l)),3&e.$$.dirty&&n(4,h=W<H(1,c,l)),259&e.$$.dirty&&n(6,r=[...J(l,c),{date:o,meme:a}].filter((e=>!!e.meme))),4&e.$$.dirty&&n(5,i=Y(V(u)))},n(8,a=Y(o)),[c,l,u,d,h,i,r,e=>{const t=(Number(e)-Number(s))/Math.pow(10,3)/Math.pow(60,2);return 0<t&&t<=24},a,()=>h&&n(0,c--,c),()=>d&&n(0,c++,c),function(){u=this.value,n(2,u)}]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ce=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&a+1<e.length&&56320==(64512&e.charCodeAt(a+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++a)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},le={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let t=0;t<e.length;t+=3){const r=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,l=r>>2,u=(3&r)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;o||(h=64,i||(d=64)),a.push(n[l],n[u],n[d],n[h])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ce(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[a++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[a++]=String.fromCharCode(55296+(i>>10)),t[a++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[a++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==i||null==s||null==o)throw Error();const c=r<<2|i>>4;if(a.push(c),64!==s){const e=i<<4&240|s>>2;if(a.push(e),64!==o){const e=s<<6&192|o;a.push(e)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ue=function(e){return function(e){const t=ce(e);return le.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class de{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function he(){return"object"==typeof indexedDB}function pe(){return new Promise(((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class fe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ge.prototype.create)}}class ge{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},a=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(me,((e,n)=>{const a=t[n];return null!=a?String(a):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${i} (${a}).`;return new fe(a,s,n)}}const me=/\{\$([^}]+)}/g;function be(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const r of n){if(!a.includes(r))return!1;const n=e[r],i=t[r];if(we(n)&&we(i)){if(!be(n,i))return!1}else if(n!==i)return!1}for(const e of a)if(!n.includes(e))return!1;return!0}function we(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ye(e,t=1e3,n=2){const a=t*Math.pow(n,e),r=Math.round(.5*a*(Math.random()-.5)*2);return Math.min(144e5,a+r)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ve(e){return e&&e._delegate?e._delegate:e}class Ie{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ee="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class De{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new de;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),a=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(a)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:Ee})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(a)}return a}onInit(e,t){var n;const a=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&e(i,a),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const a of n)try{a(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(a=e,a===Ee?void 0:a),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var a;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:Ee:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ce{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new De(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Se;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Se||(Se={}));const _e={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},$e=Se.INFO,Ae={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Te=(e,t,...n)=>{if(t<e.logLevel)return;const a=(new Date).toISOString(),r=Ae[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${a}]  ${e.name}:`,...n)};class ke{constructor(e){this.name=e,this._logLevel=$e,this._logHandler=Te,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?_e[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}let Me,Oe;const xe=new WeakMap,je=new WeakMap,Le=new WeakMap,Ne=new WeakMap,Be=new WeakMap;let Pe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return je.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Le.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Re(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Oe||(Oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ze(this),t),Re(xe.get(this))}:function(...t){return Re(e.apply(ze(this),t))}:function(t,...n){const a=e.call(ze(this),t,...n);return Le.set(a,t.sort?t.sort():[t]),Re(a)}}function He(e){return"function"==typeof e?Fe(e):(e instanceof IDBTransaction&&function(e){if(je.has(e))return;const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));je.set(e,t)}(e),t=e,(Me||(Me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Pe):e);var t}function Re(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(Re(e.result)),a()},i=()=>{n(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&xe.set(t,e)})).catch((()=>{})),Be.set(t,e),t}(e);if(Ne.has(e))return Ne.get(e);const t=He(e);return t!==e&&(Ne.set(e,t),Be.set(t,e)),t}const ze=e=>Be.get(e);function Ve(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const s=indexedDB.open(e,t),o=Re(s);return a&&s.addEventListener("upgradeneeded",(e=>{a(Re(s.result),e.oldVersion,e.newVersion,Re(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),o.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}const Ue=["get","getKey","getAll","getAllKeys","count"],qe=["put","add","delete","clear"],We=new Map;function Ge(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(We.get(t))return We.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=qe.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!Ue.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let s=i.store;return a&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&i.done]))[0]};return We.set(t,i),i}Pe=(e=>({...e,get:(t,n,a)=>Ge(t,n)||e.get(t,n,a),has:(t,n)=>!!Ge(t,n)||e.has(t,n)}))(Pe);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ke{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Xe="@firebase/app",Je="0.7.28",Ye=new ke("@firebase/app"),Qe="[DEFAULT]",Ze={[Xe]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},et=new Map,tt=new Map;function nt(e,t){try{e.container.addComponent(t)}catch(n){Ye.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function at(e){const t=e.name;if(tt.has(t))return Ye.debug(`There were multiple attempts to register component ${t}.`),!1;tt.set(t,e);for(const t of et.values())nt(t,e);return!0}function rt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const it=new ge("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class st{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ie("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}}function ot(e,t,n){var a;let r=null!==(a=Ze[e])&&void 0!==a?a:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ye.warn(e.join(" "))}at(new Ie(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ct="firebase-heartbeat-store";let lt=null;function ut(){return lt||(lt=Ve("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(ct)}}).catch((e=>{throw it.create("storage-open",{originalErrorMessage:e.message})}))),lt}async function dt(e,t){var n;try{const n=(await ut()).transaction(ct,"readwrite"),a=n.objectStore(ct);return await a.put(t,ht(e)),n.done}catch(e){throw it.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function ht(e){return`${e.name}!${e.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ft();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ft(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let a=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),mt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),mt(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}(this._heartbeatsCache.heartbeats),a=ue(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function ft(){return(new Date).toISOString().substring(0,10)}class gt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!he()&&pe().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await ut()).transaction(ct).objectStore(ct).get(ht(e))}catch(e){throw it.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return dt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return dt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function mt(e){return ue(JSON.stringify({version:2,heartbeats:e})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var bt;bt="",at(new Ie("platform-logger",(e=>new Ke(e)),"PRIVATE")),at(new Ie("heartbeat",(e=>new pt(e)),"PRIVATE")),ot(Xe,Je,bt),ot(Xe,Je,"esm2017"),ot("fire-js","");const wt="@firebase/installations",yt="0.5.12",vt=1e4,It="w:0.5.12",Et="FIS_v2",Dt=36e5,Ct=new ge("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function St(e){return e instanceof fe&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _t({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function $t(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function At(e,t){const n=(await t.json()).error;return Ct.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Tt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function kt(e,{refreshToken:t}){const n=Tt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function Mt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ot(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const xt=/^[cdef][\w-]{21}$/;function jt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return xt.test(t)?t:""}catch(e){return""}}function Lt(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Nt=new Map;function Bt(e,t){const n=Lt(e);Pt(n,t),function(e,t){const n=function(){!Ft&&"BroadcastChannel"in self&&(Ft=new BroadcastChannel("[Firebase] FID Change"),Ft.onmessage=e=>{Pt(e.data.key,e.data.fid)});return Ft}();n&&n.postMessage({key:e,fid:t});0===Nt.size&&Ft&&(Ft.close(),Ft=null)}(n,t)}function Pt(e,t){const n=Nt.get(e);if(n)for(const e of n)e(t)}let Ft=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ht="firebase-installations-store";let Rt=null;function zt(){return Rt||(Rt=Ve("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Ht)}})),Rt}async function Vt(e,t){const n=Lt(e),a=(await zt()).transaction(Ht,"readwrite"),r=a.objectStore(Ht),i=await r.get(n);return await r.put(t,n),await a.done,i&&i.fid===t.fid||Bt(e,t.fid),t}async function Ut(e){const t=Lt(e),n=(await zt()).transaction(Ht,"readwrite");await n.objectStore(Ht).delete(t),await n.done}async function qt(e,t){const n=Lt(e),a=(await zt()).transaction(Ht,"readwrite"),r=a.objectStore(Ht),i=await r.get(n),s=t(i);return void 0===s?await r.delete(n):await r.put(s,n),await a.done,!s||i&&i.fid===s.fid||Bt(e,s.fid),s}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Wt(e){let t;const n=await qt(e.appConfig,(n=>{const a=function(e){return Xt(e||{fid:jt(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Ct.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=_t(e),r=Tt(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={fid:n,authVersion:Et,appId:e.appId,sdkVersion:It},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await Mt((()=>fetch(a,o)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:$t(e.authToken)}}throw await At("Create Installation",c)}(e,t);return Vt(e.appConfig,n)}catch(n){throw St(n)&&409===n.customData.serverCode?await Ut(e.appConfig):await Vt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Gt(e)}:{installationEntry:t}}(e,a);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Gt(e){let t=await Kt(e.appConfig);for(;1===t.registrationStatus;)await Ot(100),t=await Kt(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Wt(e);return n||t}return t}function Kt(e){return qt(e,(e=>{if(!e)throw Ct.create("installation-not-found");return Xt(e)}))}function Xt(e){return 1===(t=e).registrationStatus&&t.registrationTime+vt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function Jt({appConfig:e,heartbeatServiceProvider:t},n){const a=function(e,{fid:t}){return`${_t(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),r=kt(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={installation:{sdkVersion:It,appId:e.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await Mt((()=>fetch(a,o)));if(c.ok){return $t(await c.json())}throw await At("Generate Auth Token",c)}async function Yt(e,t=!1){let n;const a=await qt(e.appConfig,(a=>{if(!Zt(a))throw Ct.create("not-registered");const r=a.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Dt}(e)}(r))return a;if(1===r.requestStatus)return n=async function(e,t){let n=await Qt(e.appConfig);for(;1===n.authToken.requestStatus;)await Ot(100),n=await Qt(e.appConfig);const a=n.authToken;return 0===a.requestStatus?Yt(e,t):a}(e,t),a;{if(!navigator.onLine)throw Ct.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(a);return n=async function(e,t){try{const n=await Jt(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await Vt(e.appConfig,a),n}catch(n){if(!St(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Vt(e.appConfig,n)}else await Ut(e.appConfig);throw n}}(e,t),t}}));return n?await n:a.authToken}function Qt(e){return qt(e,(e=>{if(!Zt(e))throw Ct.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+vt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function Zt(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function en(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Wt(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n);return(await Yt(n,t)).token}function tn(e){return Ct.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const nn="installations",an=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw tn("App Configuration");if(!e.name)throw tn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw tn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:rt(t,"heartbeat"),_delete:()=>Promise.resolve()}},rn=e=>{const t=rt(e.getProvider("app").getImmediate(),nn).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:a}=await Wt(t);return a?a.catch(console.error):Yt(t).catch(console.error),n.fid}(t),getToken:e=>en(t,e)}};at(new Ie(nn,an,"PUBLIC")),at(new Ie("installations-internal",rn,"PRIVATE")),ot(wt,yt),ot(wt,yt,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const sn="analytics",on="https://www.googletagmanager.com/gtag/js",cn=new ke("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ln(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function un(e,t,n,a){return async function(r,i,s){try{"event"===r?await async function(e,t,n,a,r){try{let i=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const a=await ln(n);for(const n of e){const e=a.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){i=[];break}i.push(r)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",a,r||{})}catch(e){cn.error(e)}}(e,t,n,i,s):"config"===r?await async function(e,t,n,a,r,i){const s=a[r];try{if(s)await t[s];else{const e=(await ln(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){cn.error(e)}e("config",r,i)}(e,t,n,a,i,s):"consent"===r?e("consent","update",s):e("set",i)}catch(e){cn.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const dn=new ge("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const hn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function pn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function fn(e,t=hn,n){const{appId:a,apiKey:r,measurementId:i}=e.options;if(!a)throw dn.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:a};throw dn.create("no-api-key")}const s=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new mn;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),gn({appId:a,apiKey:r,measurementId:i},s,o,t)}async function gn(e,{throttleEndTimeMillis:t,backoffCount:n},a,r=hn){var i,s;const{appId:o,measurementId:c}=e;try{await function(e,t){return new Promise(((n,a)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(i),a(dn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(a,t)}catch(e){if(c)return cn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===(i=e)||void 0===i?void 0:i.message}]`),{appId:o,measurementId:c};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:a}=e,r={method:"GET",headers:pn(a)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(i,r);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw dn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return r.deleteThrottleMetadata(o),t}catch(t){const i=t;if(!function(e){if(!(e instanceof fe&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(i)){if(r.deleteThrottleMetadata(o),c)return cn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==i?void 0:i.message}]`),{appId:o,measurementId:c};throw t}const l=503===Number(null===(s=null==i?void 0:i.customData)||void 0===s?void 0:s.httpStatus)?ye(n,r.intervalMillis,30):ye(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,u),cn.debug(`Calling attemptFetch again in ${l} millis`),gn(e,u,a,r)}}class mn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function bn(e,t,n,a,r,i,s){var o;const c=fn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&cn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>cn.error(e))),t.push(c);const l=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(){var e;if(!he())return cn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await pe()}catch(t){return cn.warn(dn.create("indexeddb-unavailable",{errorInfo:null===(e=t)||void 0===e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?a.getId():void 0)),[u,d]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(on))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${on}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(i,u.measurementId),r("js",new Date);const h=null!==(o=null==s?void 0:s.config)&&void 0!==o?o:{};return h.origin="firebase",h.update=!0,null!=d&&(h.firebase_id=d),r("config",u.measurementId,h),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wn{constructor(e){this.app=e}_delete(){return delete yn[this.app.options.appId],Promise.resolve()}}let yn={},vn=[];const In={};let En,Dn,Cn="dataLayer",Sn=!1;function _n(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=dn.create("invalid-analytics-context",{errorInfo:t});cn.warn(n.message)}}function $n(e,t,n){_n();const a=e.options.appId;if(!a)throw dn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw dn.create("no-api-key");cn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=yn[a])throw dn.create("already-exists",{id:a});if(!Sn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Cn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,a,r){let i=function(...e){window[a].push(arguments)};return window[r]&&"function"==typeof window[r]&&(i=window[r]),window[r]=un(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}(yn,vn,In,Cn,"gtag");Dn=e,En=t,Sn=!0}yn[a]=bn(e,vn,In,t,En,Cn,n);return new wn(e)}function An(e,t,n,a){e=ve(e),async function(e,t,n,a,r){if(r&&r.global)e("event",n,a);else{const r=await t;e("event",n,Object.assign(Object.assign({},a),{send_to:r}))}}(Dn,yn[e.app.options.appId],t,n,a).catch((e=>cn.error(e)))}const Tn="@firebase/analytics",kn="0.8.0";at(new Ie(sn,((e,{options:t})=>$n(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),at(new Ie("analytics-internal",(function(e){try{const t=e.getProvider(sn).getImmediate();return{logEvent:(e,n,a)=>An(t,e,n,a)}}catch(e){throw dn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),ot(Tn,kn),ot(Tn,kn,"esm2017");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
ot("firebase","9.9.0","app");const Mn=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Qe,automaticDataCollectionEnabled:!1},t),a=n.name;if("string"!=typeof a||!a)throw it.create("bad-app-name",{appName:String(a)});const r=et.get(a);if(r){if(be(e,r.options)&&be(n,r.config))return r;throw it.create("duplicate-app",{appName:a})}const i=new Ce(a);for(const e of tt.values())i.addComponent(e);const s=new st(e,n,i);return et.set(a,s),s}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});!function(e=function(e="[DEFAULT]"){const t=et.get(e);if(!t)throw it.create("no-app",{appName:e});return t}()){const t=rt(e=ve(e),sn);t.isInitialized()?t.getImmediate():function(e,t={}){const n=rt(e,sn);if(n.isInitialized()){const e=n.getImmediate();if(be(t,n.getOptions()))return e;throw dn.create("already-initialized")}n.initialize({options:t})}(e)}(Mn);return new class extends B{constructor(e){super(),N(this,e,oe,se,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=archive.js.map
