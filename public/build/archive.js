var archive=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function r(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,o;function c(e,t){return s||(s=document.createElement("a")),s.href=t,e===s.href}function l(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function f(){return p(" ")}function g(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e,t){e.value=null==t?"":t}function y(e){o=e}const I=[],v=[],E=[],D=[],C=Promise.resolve();let S=!1;function _(e){E.push(e)}let $=!1;const T=new Set;function A(){if(!$){$=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];y(t),k(t.$$)}for(y(null),I.length=0;v.length;)v.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];T.has(t)||(T.add(t),t())}E.length=0}while(I.length);for(;D.length;)D.pop()();S=!1,$=!1,T.clear()}}function k(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const M=new Set;function O(e,t){e&&e.i&&(M.delete(e),e.i(t))}function j(e,n,i,s){const{fragment:o,on_mount:c,on_destroy:l,after_update:u}=e.$$;o&&o.m(n,i),s||_((()=>{const n=c.map(t).filter(r);l?l.push(...n):a(n),e.$$.on_mount=[]})),u.forEach(_)}function x(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t){-1===e.$$.dirty[0]&&(I.push(e),S||(S=!0,C.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function N(t,r,i,s,c,l,u,h=[-1]){const p=o;y(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:r.target||p.$$.root};u&&u(f.root);let g=!1;if(f.ctx=i?i(t,r.props||{},((e,n,...a)=>{const r=a.length?a[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),g&&L(t,e)),n})):[],f.update(),g=!0,a(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(d)}else f.fragment&&f.fragment.c();r.intro&&O(t.$$.fragment),j(t,r.target,r.anchor,r.customElement),A()}y(p)}class P{$destroy(){x(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function B(t){let n;return{c(){n=h("header"),n.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',m(n,"class","my-8 flex")},m(e,t){u(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class F extends P{constructor(e){super(),N(this,e,null,B,i,{})}}function H(e,t,n){const a=e.slice();return a[16]=t[n],a}function R(e){let t,n,a,r,i,s,o,g,b,w,y,I=e[16].split("-").reverse().join("/")+"",v=e[9](e[16])&&function(e){let t;return{c(){t=p("(Sneak peek)")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}();return{c(){t=h("tr"),n=h("td"),a=p(I),r=f(),i=h("br"),s=f(),v&&v.c(),o=f(),g=h("td"),b=h("img"),y=f(),m(n,"class","text-center border-2 p-4"),m(b,"class","max-w-sm mx-auto w-1/2 sm:w-auto"),c(b.src,w=`memes/${e[0].otd[e[16]]}`)||m(b,"src",w),m(b,"alt","Meme"),m(g,"class","border-2 p-4")},m(e,c){u(e,t,c),l(t,n),l(n,a),l(n,r),l(n,i),l(n,s),v&&v.m(n,null),l(t,o),l(t,g),l(g,b),l(t,y)},p(e,t){1&t&&!c(b.src,w=`memes/${e[0].otd[e[16]]}`)&&m(b,"src",w)},d(e){e&&d(t),v&&v.d()}}}function z(e){let t,n=e[8](e[16],e[1],e[2])||e[9](e[16])&&!e[4],a=n&&R(e);return{c(){a&&a.c(),t=p("")},m(e,n){a&&a.m(e,n),u(e,t,n)},p(e,r){22&r&&(n=e[8](e[16],e[1],e[2])||e[9](e[16])&&!e[4]),n?a?a.p(e,r):(a=R(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&d(t)}}}function V(t){let n;return{c(){n=h("p"),n.textContent="No memes that day :(",m(n,"class","w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto text-center")},m(e,t){u(e,n,t)},p:e,d(e){e&&d(n)}}}function U(e){let t,n;return{c(){t=h("img"),m(t,"class","max-w-sm mx-auto w-1/2 sm:w-auto"),c(t.src,n=`memes/${e[0].otd[e[6][0]]}`)||m(t,"src",n),m(t,"alt","Meme")},m(e,n){u(e,t,n)},p(e,a){65&a&&!c(t.src,n=`memes/${e[0].otd[e[6][0]]}`)&&m(t,"src",n)},d(e){e&&d(t)}}}function W(e){let t,n,r,i,s,o,c,y,I,v,E,D,C,S,_,$,T,A,k,L,N,P,B,R,W,q,G,K,X,J,Y,Z,Q,ee,te,ne,ae,re,ie=`${e[1]}`.padStart(2,"0")+"";t=new F({});let se=e[7],oe=[];for(let t=0;t<se.length;t+=1)oe[t]=z(H(e,se,t));function ce(e,t){return e[6].length?U:V}let le=ce(e),ue=le(e);return{c(){var a;(a=t.$$.fragment)&&a.c(),n=f(),r=h("main"),i=h("h2"),i.textContent="Meme archive",s=f(),o=h("div"),c=h("div"),y=h("div"),I=h("span"),I.textContent="<",E=f(),D=h("p"),C=p(ie),S=p("/"),_=p(e[2]),$=f(),T=h("div"),A=h("div"),k=h("span"),k.textContent=">",N=f(),P=h("table"),B=h("thead"),B.innerHTML='<tr><th class="border-2">Date</th> \n        <th class="border-2">Meme</th></tr>',R=f(),W=h("tbody");for(let e=0;e<oe.length;e+=1)oe[e].c();q=f(),G=h("section"),K=h("h2"),K.textContent="Specify a date",X=f(),J=h("input"),Y=f(),ue.c(),Z=f(),Q=h("p"),Q.textContent="DVS-style dates accepted",ee=f(),te=h("footer"),m(I,"class","-mt-1.5"),m(y,"class","flex-1 btn"),m(y,"disabled",v=!e[5]),m(c,"class","w-1/4"),m(D,"class","flex-1 my-2 text-lg text-center"),m(k,"class","-mt-1.5"),m(A,"class","flex-1 btn"),m(A,"disabled",L=!e[4]),m(T,"class","w-1/4"),m(o,"class","flex sm:w-1/4 mx-auto my-4"),m(P,"class","table-auto w-full max-w-4xl mx-auto border-white border-2"),m(J,"type","text"),m(Q,"class","mt-4"),m(G,"class","mt-48")},m(a,d){j(t,a,d),u(a,n,d),u(a,r,d),l(r,i),l(r,s),l(r,o),l(o,c),l(c,y),l(y,I),l(o,E),l(o,D),l(D,C),l(D,S),l(D,_),l(o,$),l(o,T),l(T,A),l(A,k),l(r,N),l(r,P),l(P,B),l(P,R),l(P,W);for(let e=0;e<oe.length;e+=1)oe[e].m(W,null);u(a,q,d),u(a,G,d),l(G,K),l(G,X),l(G,J),w(J,e[3]),l(G,Y),ue.m(G,null),l(G,Z),l(G,Q),u(a,ee,d),u(a,te,d),ne=!0,ae||(re=[g(y,"click",e[12]),g(A,"click",e[13]),g(J,"input",e[14])],ae=!0)},p(e,[t]){if((!ne||32&t&&v!==(v=!e[5]))&&m(y,"disabled",v),(!ne||2&t)&&ie!==(ie=`${e[1]}`.padStart(2,"0")+"")&&b(C,ie),(!ne||4&t)&&b(_,e[2]),(!ne||16&t&&L!==(L=!e[4]))&&m(A,"disabled",L),919&t){let n;for(se=e[7],n=0;n<se.length;n+=1){const a=H(e,se,n);oe[n]?oe[n].p(a,t):(oe[n]=z(a),oe[n].c(),oe[n].m(W,null))}for(;n<oe.length;n+=1)oe[n].d(1);oe.length=se.length}8&t&&J.value!==e[3]&&w(J,e[3]),le===(le=ce(e))&&ue?ue.p(e,t):(ue.d(1),ue=le(e),ue&&(ue.c(),ue.m(G,Z)))},i(e){ne||(O(t.$$.fragment,e),ne=!0)},o(e){!function(e,t,n,a){if(e&&e.o){if(M.has(e))return;M.add(e),(void 0).c.push((()=>{M.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}(t.$$.fragment,e),ne=!1},d(e){x(t,e),e&&d(n),e&&d(r),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(oe,e),e&&d(q),e&&d(G),ue.d(),e&&d(ee),e&&d(te),ae=!1,a(re)}}}function q(e,t,n){let a,{memes:r}=t,{dateToString:i}=t,{stringToDate:s}=t;const o=new Date,c=Object.keys(r.otd);let l=o.getMonth()+1,u=o.getFullYear(),d=i(o),h=!0,p=!0;return e.$$set=e=>{"memes"in e&&n(0,r=e.memes),"dateToString"in e&&n(10,i=e.dateToString),"stringToDate"in e&&n(11,s=e.stringToDate)},e.$$.update=()=>{6&e.$$.dirty&&(l<1?(n(1,l=12),n(2,u--,u)):l>12&&(n(1,l=1),n(2,u++,u))),6&e.$$.dirty&&n(4,h=!(o.getMonth()+1===l&&o.getFullYear()===u)),6&e.$$.dirty&&n(5,p=new Date(2021,8,1)<new Date(u,l-1,1)),3080&e.$$.dirty&&n(6,a=c.filter((e=>i(new Date(e))===i(s(d)))))},[r,l,u,d,h,p,a,c,(e,t,n)=>{const a=new Date(e),r=a<=o,i=a.getMonth()+1===t,s=a.getFullYear()===n;return r&&i&&s},e=>{const t=(Number(new Date(e))-Number(o))/Math.pow(10,3)/Math.pow(60,2);return 0<t&&t<=24},i,s,()=>p&&n(1,l--,l),()=>h&&n(1,l++,l),function(){d=this.value,n(3,d)}]}
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
const G=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&a+1<e.length&&56320==(64512&e.charCodeAt(a+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++a)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},K={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let t=0;t<e.length;t+=3){const r=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,l=r>>2,u=(3&r)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;o||(h=64,i||(d=64)),a.push(n[l],n[u],n[d],n[h])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(G(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[a++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[a++]=String.fromCharCode(55296+(i>>10)),t[a++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[a++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==i||null==s||null==o)throw Error();const c=r<<2|i>>4;if(a.push(c),64!==s){const e=i<<4&240|s>>2;if(a.push(e),64!==o){const e=s<<6&192|o;a.push(e)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},X=function(e){return function(e){const t=G(e);return K.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
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
class J{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function Y(){return"object"==typeof indexedDB}function Z(){return new Promise(((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class Q extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ee.prototype.create)}}class ee{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},a=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(te,((e,n)=>{const a=t[n];return null!=a?String(a):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${i} (${a}).`;return new Q(a,s,n)}}const te=/\{\$([^}]+)}/g;function ne(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const r of n){if(!a.includes(r))return!1;const n=e[r],i=t[r];if(ae(n)&&ae(i)){if(!ne(n,i))return!1}else if(n!==i)return!1}for(const e of a)if(!n.includes(e))return!1;return!0}function ae(e){return null!==e&&"object"==typeof e}
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
     */function re(e,t=1e3,n=2){const a=t*Math.pow(n,e),r=Math.round(.5*a*(Math.random()-.5)*2);return Math.min(144e5,a+r)}
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
     */function ie(e){return e&&e._delegate?e._delegate:e}class se{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const oe="[DEFAULT]";
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
     */class ce{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new J;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),a=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(a)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:oe})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(a)}return a}onInit(e,t){var n;const a=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&e(i,a),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const a of n)try{a(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(a=e,a===oe?void 0:a),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var a;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:oe:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class le{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ce(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var ue;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(ue||(ue={}));const de={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},he=ue.INFO,pe={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},fe=(e,t,...n)=>{if(t<e.logLevel)return;const a=(new Date).toISOString(),r=pe[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${a}]  ${e.name}:`,...n)};class ge{constructor(e){this.name=e,this._logLevel=he,this._logHandler=fe,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?de[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}let me,be;const we=new WeakMap,ye=new WeakMap,Ie=new WeakMap,ve=new WeakMap,Ee=new WeakMap;let De={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ye.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ie.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _e(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ce(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(be||(be=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply($e(this),t),_e(we.get(this))}:function(...t){return _e(e.apply($e(this),t))}:function(t,...n){const a=e.call($e(this),t,...n);return Ie.set(a,t.sort?t.sort():[t]),_e(a)}}function Se(e){return"function"==typeof e?Ce(e):(e instanceof IDBTransaction&&function(e){if(ye.has(e))return;const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));ye.set(e,t)}(e),t=e,(me||(me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,De):e);var t}function _e(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(_e(e.result)),a()},i=()=>{n(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&we.set(t,e)})).catch((()=>{})),Ee.set(t,e),t}(e);if(ve.has(e))return ve.get(e);const t=Se(e);return t!==e&&(ve.set(e,t),Ee.set(t,e)),t}const $e=e=>Ee.get(e);function Te(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const s=indexedDB.open(e,t),o=_e(s);return a&&s.addEventListener("upgradeneeded",(e=>{a(_e(s.result),e.oldVersion,e.newVersion,_e(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),o.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}const Ae=["get","getKey","getAll","getAllKeys","count"],ke=["put","add","delete","clear"],Me=new Map;function Oe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Me.get(t))return Me.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=ke.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!Ae.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let s=i.store;return a&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&i.done]))[0]};return Me.set(t,i),i}De=(e=>({...e,get:(t,n,a)=>Oe(t,n)||e.get(t,n,a),has:(t,n)=>!!Oe(t,n)||e.has(t,n)}))(De);
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
class je{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const xe="@firebase/app",Le="0.7.24",Ne=new ge("@firebase/app"),Pe="[DEFAULT]",Be={[xe]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Fe=new Map,He=new Map;function Re(e,t){try{e.container.addComponent(t)}catch(n){Ne.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ze(e){const t=e.name;if(He.has(t))return Ne.debug(`There were multiple attempts to register component ${t}.`),!1;He.set(t,e);for(const t of Fe.values())Re(t,e);return!0}function Ve(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
     */const Ue=new ee("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class We{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new se("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}function qe(e,t,n){var a;let r=null!==(a=Be[e])&&void 0!==a?a:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ne.warn(e.join(" "))}ze(new se(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
     */const Ge="firebase-heartbeat-store";let Ke=null;function Xe(){return Ke||(Ke=Te("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Ge)}}).catch((e=>{throw Ue.create("storage-open",{originalErrorMessage:e.message})}))),Ke}async function Je(e,t){try{const n=(await Xe()).transaction(Ge,"readwrite"),a=n.objectStore(Ge);return await a.put(t,Ye(e)),n.done}catch(e){throw Ue.create("storage-set",{originalErrorMessage:e.message})}}function Ye(e){return`${e.name}!${e.options.appId}`}
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
     */class Ze{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new et(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Qe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Qe(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let a=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),tt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tt(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}(this._heartbeatsCache.heartbeats),a=X(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Qe(){return(new Date).toISOString().substring(0,10)}class et{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Y()&&Z().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await Xe()).transaction(Ge).objectStore(Ge).get(Ye(e))}catch(e){throw Ue.create("storage-get",{originalErrorMessage:e.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tt(e){return X(JSON.stringify({version:2,heartbeats:e})).length}
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
     */var nt;nt="",ze(new se("platform-logger",(e=>new je(e)),"PRIVATE")),ze(new se("heartbeat",(e=>new Ze(e)),"PRIVATE")),qe(xe,Le,nt),qe(xe,Le,"esm2017"),qe("fire-js","");const at="@firebase/installations",rt="0.5.9",it=1e4,st="w:0.5.9",ot="FIS_v2",ct=36e5,lt=new ee("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function ut(e){return e instanceof Q&&e.code.includes("request-failed")}
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
     */function dt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function ht(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function pt(e,t){const n=(await t.json()).error;return lt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ft({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function gt(e,{refreshToken:t}){const n=ft(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function mt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function bt(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const wt=/^[cdef][\w-]{21}$/;function yt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return wt.test(t)?t:""}catch(e){return""}}function It(e){return`${e.appName}!${e.appId}`}
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
     */const vt=new Map;function Et(e,t){const n=It(e);Dt(n,t),function(e,t){const n=function(){!Ct&&"BroadcastChannel"in self&&(Ct=new BroadcastChannel("[Firebase] FID Change"),Ct.onmessage=e=>{Dt(e.data.key,e.data.fid)});return Ct}();n&&n.postMessage({key:e,fid:t});0===vt.size&&Ct&&(Ct.close(),Ct=null)}(n,t)}function Dt(e,t){const n=vt.get(e);if(n)for(const e of n)e(t)}let Ct=null;
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
const St="firebase-installations-store";let _t=null;function $t(){return _t||(_t=Te("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(St)}})),_t}async function Tt(e,t){const n=It(e),a=(await $t()).transaction(St,"readwrite"),r=a.objectStore(St),i=await r.get(n);return await r.put(t,n),await a.done,i&&i.fid===t.fid||Et(e,t.fid),t}async function At(e){const t=It(e),n=(await $t()).transaction(St,"readwrite");await n.objectStore(St).delete(t),await n.done}async function kt(e,t){const n=It(e),a=(await $t()).transaction(St,"readwrite"),r=a.objectStore(St),i=await r.get(n),s=t(i);return void 0===s?await r.delete(n):await r.put(s,n),await a.done,!s||i&&i.fid===s.fid||Et(e,s.fid),s}
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
     */async function Mt(e){let t;const n=await kt(e.appConfig,(n=>{const a=function(e){return xt(e||{fid:yt(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(lt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=dt(e),r=ft(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={fid:n,authVersion:ot,appId:e.appId,sdkVersion:st},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await mt((()=>fetch(a,o)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:ht(e.authToken)}}throw await pt("Create Installation",c)}(e,t);return Tt(e.appConfig,n)}catch(n){throw ut(n)&&409===n.customData.serverCode?await At(e.appConfig):await Tt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ot(e)}:{installationEntry:t}}(e,a);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Ot(e){let t=await jt(e.appConfig);for(;1===t.registrationStatus;)await bt(100),t=await jt(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Mt(e);return n||t}return t}function jt(e){return kt(e,(e=>{if(!e)throw lt.create("installation-not-found");return xt(e)}))}function xt(e){return 1===(t=e).registrationStatus&&t.registrationTime+it<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function Lt({appConfig:e,heartbeatServiceProvider:t},n){const a=function(e,{fid:t}){return`${dt(e)}/${t}/authTokens:generate`}
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
     */(e,n),r=gt(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={installation:{sdkVersion:st,appId:e.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await mt((()=>fetch(a,o)));if(c.ok){return ht(await c.json())}throw await pt("Generate Auth Token",c)}async function Nt(e,t=!1){let n;const a=await kt(e.appConfig,(a=>{if(!Bt(a))throw lt.create("not-registered");const r=a.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ct}(e)}(r))return a;if(1===r.requestStatus)return n=async function(e,t){let n=await Pt(e.appConfig);for(;1===n.authToken.requestStatus;)await bt(100),n=await Pt(e.appConfig);const a=n.authToken;return 0===a.requestStatus?Nt(e,t):a}(e,t),a;{if(!navigator.onLine)throw lt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(a);return n=async function(e,t){try{const n=await Lt(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await Tt(e.appConfig,a),n}catch(n){if(!ut(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Tt(e.appConfig,n)}else await At(e.appConfig);throw n}}(e,t),t}}));return n?await n:a.authToken}function Pt(e){return kt(e,(e=>{if(!Bt(e))throw lt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+it<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function Bt(e){return void 0!==e&&2===e.registrationStatus}
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
async function Ft(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Mt(e);t&&await t}
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
     */(n);return(await Nt(n,t)).token}function Ht(e){return lt.create("missing-app-config-values",{valueName:e})}
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
     */const Rt="installations",zt=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Ht("App Configuration");if(!e.name)throw Ht("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ht(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Ve(t,"heartbeat"),_delete:()=>Promise.resolve()}},Vt=e=>{const t=Ve(e.getProvider("app").getImmediate(),Rt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:a}=await Mt(t);return a?a.catch(console.error):Nt(t).catch(console.error),n.fid}(t),getToken:e=>Ft(t,e)}};ze(new se(Rt,zt,"PUBLIC")),ze(new se("installations-internal",Vt,"PRIVATE")),qe(at,rt),qe(at,rt,"esm2017");
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
const Ut="analytics",Wt="https://www.googletagmanager.com/gtag/js",qt=new ge("@firebase/analytics");
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
function Gt(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Kt(e,t,n,a){return async function(r,i,s){try{"event"===r?await async function(e,t,n,a,r){try{let i=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const a=await Gt(n);for(const n of e){const e=a.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){i=[];break}i.push(r)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",a,r||{})}catch(e){qt.error(e)}}(e,t,n,i,s):"config"===r?await async function(e,t,n,a,r,i){const s=a[r];try{if(s)await t[s];else{const e=(await Gt(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){qt.error(e)}e("config",r,i)}(e,t,n,a,i,s):e("set",i)}catch(e){qt.error(e)}}}
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
const Xt=new ee("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Jt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Yt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Zt(e,t=Jt,n){const{appId:a,apiKey:r,measurementId:i}=e.options;if(!a)throw Xt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:a};throw Xt.create("no-api-key")}const s=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new en;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),Qt({appId:a,apiKey:r,measurementId:i},s,o,t)}async function Qt(e,{throttleEndTimeMillis:t,backoffCount:n},a,r=Jt){const{appId:i,measurementId:s}=e;try{await function(e,t){return new Promise(((n,a)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(i),a(Xt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(a,t)}catch(e){if(s)return qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:i,measurementId:s};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:a}=e,r={method:"GET",headers:Yt(a)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(i,r);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Xt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return r.deleteThrottleMetadata(i),t}catch(t){if(!function(e){if(!(e instanceof Q&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(i),s)return qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:i,measurementId:s};throw t}const o=503===Number(t.customData.httpStatus)?re(n,r.intervalMillis,30):re(n,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return r.setThrottleMetadata(i,c),qt.debug(`Calling attemptFetch again in ${o} millis`),Qt(e,c,a,r)}}class en{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
     */async function tn(e,t,n,a,r,i,s){var o;const c=Zt(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&qt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>qt.error(e))),t.push(c);const l=async function(){if(!Y())return qt.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Z()}catch(e){return qt.warn(Xt.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then((e=>e?a.getId():void 0)),[u,d]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Wt))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Wt}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(i,u.measurementId),r("js",new Date);const h=null!==(o=null==s?void 0:s.config)&&void 0!==o?o:{};return h.origin="firebase",h.update=!0,null!=d&&(h.firebase_id=d),r("config",u.measurementId,h),u.measurementId}
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
     */class nn{constructor(e){this.app=e}_delete(){return delete an[this.app.options.appId],Promise.resolve()}}let an={},rn=[];const sn={};let on,cn,ln="dataLayer",un=!1;function dn(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Xt.create("invalid-analytics-context",{errorInfo:t});qt.warn(n.message)}}function hn(e,t,n){dn();const a=e.options.appId;if(!a)throw Xt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Xt.create("no-api-key");qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=an[a])throw Xt.create("already-exists",{id:a});if(!un){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(ln);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,a,r){let i=function(...e){window[a].push(arguments)};return window[r]&&"function"==typeof window[r]&&(i=window[r]),window[r]=Kt(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}(an,rn,sn,ln,"gtag");cn=e,on=t,un=!0}an[a]=tn(e,rn,sn,t,on,ln,n);return new nn(e)}
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
     */function pn(e,t,n,a){e=ie(e),async function(e,t,n,a,r){if(r&&r.global)e("event",n,a);else{const r=await t;e("event",n,Object.assign(Object.assign({},a),{send_to:r}))}}(cn,an[e.app.options.appId],t,n,a).catch((e=>qt.error(e)))}const fn="@firebase/analytics",gn="0.7.9";ze(new se(Ut,((e,{options:t})=>hn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),ze(new se("analytics-internal",(function(e){try{const t=e.getProvider(Ut).getImmediate();return{logEvent:(e,n,a)=>pn(t,e,n,a)}}catch(e){throw Xt.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),qe(fn,gn),qe(fn,gn,"esm2017");
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
qe("firebase","9.8.1","app");const mn=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Pe,automaticDataCollectionEnabled:!1},t),a=n.name;if("string"!=typeof a||!a)throw Ue.create("bad-app-name",{appName:String(a)});const r=Fe.get(a);if(r){if(ne(e,r.options)&&ne(n,r.config))return r;throw Ue.create("duplicate-app",{appName:a})}const i=new le(a);for(const e of He.values())i.addComponent(e);const s=new We(e,n,i);return Fe.set(a,s),s}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});!function(e=function(e="[DEFAULT]"){const t=Fe.get(e);if(!t)throw Ue.create("no-app",{appName:e});return t}()){const t=Ve(e=ie(e),Ut);t.isInitialized()?t.getImmediate():function(e,t={}){const n=Ve(e,Ut);if(n.isInitialized()){const e=n.getImmediate();if(ne(t,n.getOptions()))return e;throw Xt.create("already-initialized")}n.initialize({options:t})}(e)}(mn);const bn=e=>{const t=parseInt(e);if(!isNaN(t))return t;return["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].indexOf(e)+1};var wn={otd:{"2021-10-12":"mugs.png","2021-10-13":"you three.jpg","2021-10-14":"Gebreamlak.png","2021-10-15":"integration.png","2021-10-16":"slaps.png","2021-10-17":"trains.jpg","2021-10-18":"engineers.jpg","2021-10-19":"uncertainty.jpg","2021-10-20":"LHC.jpg","2021-10-21":"xi.jpg","2021-10-22":"crossover.jpg","2021-10-23":"HDMI.jpg","2021-11-05":"drink.png","2021-11-06":"boxes.png","2021-11-09":"F1.png","2021-11-10":"dates.png","2021-11-11":"interviews.png","2021-11-15":"planes.jpg","2021-11-16":"1i.jpg","2021-11-17":"pure 2.png","2021-11-24":"air resistance.jpg","2021-11-25":"obvious.jpg","2021-12-25":"xmas.jpg","2022-01-09":"Coulomb.png","2022-01-13":"bon appetit.png","2022-01-14":"Friday.png","2022-01-17":"speed.png","2022-01-25":"stability.png","2022-02-01":"ethane.png","2022-02-02":"birthday.png","2022-02-03":"k.jpg","2022-02-04":"Le Chatelier.png","2022-02-05":"2nd order ODE.png","2022-02-07":"expansion.png","2022-02-08":"cuts.png","2022-03-03":"spin.png","2022-03-08":"physics mark.png","2022-03-16":"core prac..png","2022-03-23":"copper.png","2022-05-04":"A level.png","2022-05-05":"studying.png","2022-05-06":"Newton's III.png","2022-05-26":"physics 1 flashbacks.png","2022-05-27":"capacitors.jpg","2022-05-28":"diodes.jpg","2022-06-07":"cheese.png","2022-06-10":"wrapped.png","2022-06-11":"USB.png"}};return new class extends P{constructor(e){super(),N(this,e,q,W,i,{memes:0,dateToString:10,stringToDate:11})}}({target:document.body,props:{memes:wn,dateToString:(e,t="/",n=!1)=>{const a=[`${e.getDate()}`.padStart(2,"0"),`${e.getMonth()+1}`.padStart(2,"0"),e.getFullYear()];return(n?a.reverse():a).join(t)},stringToDate:e=>{const t=new Date,n=["/","-","."];for(const t of n){const[n,a,r]=e.split(t).map(bn),i=new Date(r,a-1,n);if(n<=31&&"Invalid Date"!=`${i}`)return i}for(const t of n){const[n,a,r]=e.split(t).map(bn),i=new Date(n,a-1,r);if("Invalid Date"!=`${i}`)return i}return t}}})}();
//# sourceMappingURL=archive.js.map
