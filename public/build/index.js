var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function a(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,o;function c(e,t){return s||(s=document.createElement("a")),s.href=t,e===s.href}function l(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function g(){return f(" ")}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e){o=e}const w=[],y=[],v=[],I=[],$=Promise.resolve();let E=!1;function C(e){v.push(e)}let S=!1;const _=new Set;function D(){if(!S){S=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];b(t),T(t.$$)}for(b(null),w.length=0;y.length;)y.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];_.has(t)||(_.add(t),t())}v.length=0}while(w.length);for(;I.length;)I.pop()();E=!1,S=!1,_.clear()}}function T(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const A=new Set;let k;function M(){k={r:0,c:[],p:k}}function O(){k.r||r(k.c),k=k.p}function j(e,t){e&&e.i&&(A.delete(e),e.i(t))}function P(e,t,n,r){if(e&&e.o){if(A.has(e))return;A.add(e),k.c.push((()=>{A.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function L(e){e&&e.c()}function B(e,n,i,s){const{fragment:o,on_mount:c,on_destroy:l,after_update:h}=e.$$;o&&o.m(n,i),s||C((()=>{const n=c.map(t).filter(a);l?l.push(...n):r(n),e.$$.on_mount=[]})),h.forEach(C)}function x(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function N(e,t){-1===e.$$.dirty[0]&&(w.push(e),E||(E=!0,$.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,a,i,s,c,l,h,p=[-1]){const d=o;b(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(d?d.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:a.target||d.$$.root};h&&h(f.root);let g=!1;if(f.ctx=i?i(t,a.props||{},((e,n,...r)=>{const a=r.length?r[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=a)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](a),g&&N(t,e)),n})):[],f.update(),g=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);f.fragment&&f.fragment.l(e),e.forEach(u)}else f.fragment&&f.fragment.c();a.intro&&j(t.$$.fragment),B(t,a.target,a.anchor,a.customElement),D()}b(d)}class H{$destroy(){x(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function R(t){let n,r,a,i;return{c(){n=d("span"),r=d("a"),a=f(t[0]),m(r,"class","hover:underline"),m(r,"href",i=`pdf/${t[1]}.pdf`),m(n,"class","flex-1 basis-1/4 pt-2 pb-8")},m(e,t){h(e,n,t),l(n,r),l(r,a)},p(e,[t]){1&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(a,e[0]),2&t&&i!==(i=`pdf/${e[1]}.pdf`)&&m(r,"href",i)},i:e,o:e,d(e){e&&u(n)}}}function z(e,t,n){let{name:r}=t,{path:a}=t;return e.$$set=e=>{"name"in e&&n(0,r=e.name),"path"in e&&n(1,a=e.path)},[r,a]}class V extends H{constructor(e){super(),F(this,e,z,R,i,{name:0,path:1})}}function U(t){let n;return{c(){n=d("header"),n.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',m(n,"class","my-8 flex")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class W extends H{constructor(e){super(),F(this,e,null,U,i,{})}}function q(e){let t,n;return{c(){t=d("img"),m(t,"class",Y),c(t.src,n=e[0])||m(t,"src",n),m(t,"alt","Meme")},m(e,n){h(e,t,n)},p(e,r){1&r&&!c(t.src,n=e[0])&&m(t,"src",n)},d(e){e&&u(t)}}}function G(t){let n,r;return{c(){n=d("p"),r=f("No meme today :( ... Send suggestions"),m(n,"class",`${Y} text-center`)},m(e,t){h(e,n,t),l(n,r)},p:e,d(e){e&&u(n)}}}function K(t){let n,r,a;function i(e,t){return void 0===e[0]?G:q}let s=i(t),o=s(t);return{c(){n=d("h2"),n.textContent="Meme of the Day",r=g(),o.c(),a=f("")},m(e,t){h(e,n,t),h(e,r,t),o.m(e,t),h(e,a,t)},p(e,[t]){s===(s=i(e))&&o?o.p(e,t):(o.d(1),o=s(e),o&&(o.c(),o.m(a.parentNode,a)))},i:e,o:e,d(e){e&&u(n),e&&u(r),o.d(e),e&&u(a)}}}const Y="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";function J(e,t,n){let{src:r}=t;return e.$$set=e=>{"src"in e&&n(0,r=e.src)},[r]}class X extends H{constructor(e){super(),F(this,e,J,K,i,{src:0})}}function Z(e,t,n){const r=e.slice();return r[8]=t[n],r}function Q(e,t,n){const r=e.slice();return r[11]=t[n],r}function ee(e,t,n){const r=e.slice();return r[11]=t[n],r}function te(t){let n,r;return n=new V({props:{name:t[11],path:`maths/${t[11]}`}}),{c(){L(n.$$.fragment)},m(e,t){B(n,e,t),r=!0},p:e,i(e){r||(j(n.$$.fragment,e),r=!0)},o(e){P(n.$$.fragment,e),r=!1},d(e){x(n,e)}}}function ne(t){let n,r;return n=new V({props:{name:t[11],path:`maths/${t[11]}`}}),{c(){L(n.$$.fragment)},m(e,t){B(n,e,t),r=!0},p:e,i(e){r||(j(n.$$.fragment,e),r=!0)},o(e){P(n.$$.fragment,e),r=!1},d(e){x(n,e)}}}function re(t){let n,r;return n=new V({props:{name:t[8],path:`physics/${t[8].toLowerCase().split(" ").join("_")}_GBD`}}),{c(){L(n.$$.fragment)},m(e,t){B(n,e,t),r=!0},p:e,i(e){r||(j(n.$$.fragment,e),r=!0)},o(e){P(n.$$.fragment,e),r=!1},d(e){x(n,e)}}}function ae(e){let t,n,r,a,i,s,o,c,f,b,w,y,v,I,$,E,C,S,_,D,T,A,k,N,F,H,R,z,U,q,G,K,Y,J,ae,ie,se,oe,ce;t=new W({});let le=e[1],he=[];for(let t=0;t<le.length;t+=1)he[t]=te(ee(e,le,t));const ue=e=>P(he[e],1,1,(()=>{he[e]=null}));let pe=e[2],de=[];for(let t=0;t<pe.length;t+=1)de[t]=ne(Q(e,pe,t));const fe=e=>P(de[e],1,1,(()=>{de[e]=null}));let ge=e[3],me=[];for(let t=0;t<ge.length;t+=1)me[t]=re(Z(e,ge,t));const be=e=>P(me[e],1,1,(()=>{me[e]=null}));return R=new V({props:{name:"Physics Year 2",path:"physics/Physics Year 2"}}),U=new V({props:{name:"PiP",path:"physics/PiP"}}),J=new X({props:{src:e[0]}}),{c(){L(t.$$.fragment),n=g(),r=d("main"),a=d("h2"),a.textContent="Maths",i=g(),s=d("div");for(let e=0;e<he.length;e+=1)he[e].c();o=g(),c=d("hr"),f=g(),b=d("h2"),b.textContent="Further Maths",w=g(),y=d("div");for(let e=0;e<de.length;e+=1)de[e].c();v=g(),I=d("p"),I.textContent="The year 1 pure and stats are dodgy older versions but I'll fix them soon.",$=g(),E=d("hr"),C=g(),S=d("h2"),S.textContent="GBD Booklets",_=g(),D=d("div");for(let e=0;e<me.length;e+=1)me[e].c();T=g(),A=d("hr"),k=g(),N=d("h2"),N.textContent="Physics",F=g(),H=d("div"),L(R.$$.fragment),z=g(),L(U.$$.fragment),q=g(),G=d("hr"),K=g(),Y=d("section"),L(J.$$.fragment),ae=g(),ie=d("p"),ie.innerHTML='<a class="hover:underline" href="archive.html">Meme Archive</a>',se=g(),oe=d("footer"),m(s,"class","book-section"),m(y,"class","book-section"),m(I,"class","epilogue"),m(D,"class","book-section"),m(H,"class","book-section"),m(ie,"class","epilogue")},m(e,u){B(t,e,u),h(e,n,u),h(e,r,u),l(r,a),l(r,i),l(r,s);for(let e=0;e<he.length;e+=1)he[e].m(s,null);l(r,o),l(r,c),l(r,f),l(r,b),l(r,w),l(r,y);for(let e=0;e<de.length;e+=1)de[e].m(y,null);l(r,v),l(r,I),l(r,$),l(r,E),l(r,C),l(r,S),l(r,_),l(r,D);for(let e=0;e<me.length;e+=1)me[e].m(D,null);l(r,T),l(r,A),l(r,k),l(r,N),l(r,F),l(r,H),B(R,H,null),l(H,z),B(U,H,null),h(e,q,u),h(e,G,u),h(e,K,u),h(e,Y,u),B(J,Y,null),l(Y,ae),l(Y,ie),h(e,se,u),h(e,oe,u),ce=!0},p(e,[t]){if(2&t){let n;for(le=e[1],n=0;n<le.length;n+=1){const r=ee(e,le,n);he[n]?(he[n].p(r,t),j(he[n],1)):(he[n]=te(r),he[n].c(),j(he[n],1),he[n].m(s,null))}for(M(),n=le.length;n<he.length;n+=1)ue(n);O()}if(4&t){let n;for(pe=e[2],n=0;n<pe.length;n+=1){const r=Q(e,pe,n);de[n]?(de[n].p(r,t),j(de[n],1)):(de[n]=ne(r),de[n].c(),j(de[n],1),de[n].m(y,null))}for(M(),n=pe.length;n<de.length;n+=1)fe(n);O()}if(8&t){let n;for(ge=e[3],n=0;n<ge.length;n+=1){const r=Z(e,ge,n);me[n]?(me[n].p(r,t),j(me[n],1)):(me[n]=re(r),me[n].c(),j(me[n],1),me[n].m(D,null))}for(M(),n=ge.length;n<me.length;n+=1)be(n);O()}},i(e){if(!ce){j(t.$$.fragment,e);for(let e=0;e<le.length;e+=1)j(he[e]);for(let e=0;e<pe.length;e+=1)j(de[e]);for(let e=0;e<ge.length;e+=1)j(me[e]);j(R.$$.fragment,e),j(U.$$.fragment,e),j(J.$$.fragment,e),ce=!0}},o(e){P(t.$$.fragment,e),he=he.filter(Boolean);for(let e=0;e<he.length;e+=1)P(he[e]);de=de.filter(Boolean);for(let e=0;e<de.length;e+=1)P(de[e]);me=me.filter(Boolean);for(let e=0;e<me.length;e+=1)P(me[e]);P(R.$$.fragment,e),P(U.$$.fragment,e),P(J.$$.fragment,e),ce=!1},d(e){x(t,e),e&&u(n),e&&u(r),p(he,e),p(de,e),p(me,e),x(R),x(U),e&&u(q),e&&u(G),e&&u(K),e&&u(Y),x(J),e&&u(se),e&&u(oe)}}}function ie(e,t,n){let{memes:r}=t,{dateToString:a}=t;const i=new Date,s=a(i,"-",!0),o=r.otd[s]?`memes/${r.otd[s]}`:void 0;return e.$$set=e=>{"memes"in e&&n(4,r=e.memes),"dateToString"in e&&n(5,a=e.dateToString)},[o,["Pure Year 1","Pure Year 2","Applied Year 1","Applied Year 2"],["Further Mech","Further Pure Year 1","Further Pure Year 2","Further Stats"],["Gravitational Fields","Circular Motion","Electric Fields","Simple Harmonic Motion","Capacitors","Thermal Physics","Magnetism","Nuclear Physics","Radioactivity","Astrophysics"],r,a]}
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
const se=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},oe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const a=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,l=a>>2,h=(3&a)<<4|s>>4;let u=(15&s)<<2|c>>6,p=63&c;o||(p=64,i||(u=64)),r.push(n[l],n[h],n[u],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(se(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const a=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==a||null==i||null==s||null==o)throw Error();const c=a<<2|i>>4;if(r.push(c),64!==s){const e=i<<4&240|s>>2;if(r.push(e),64!==o){const e=s<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ce=function(e){return function(e){const t=se(e);return oe.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
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
class le{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function he(){return"object"==typeof indexedDB}function ue(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class pe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,de.prototype.create)}}class de{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?function(e,t){return e.replace(fe,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(a,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new pe(r,s,n)}}const fe=/\{\$([^}]+)}/g;function ge(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const n=e[a],i=t[a];if(me(n)&&me(i)){if(!ge(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function me(e){return null!==e&&"object"==typeof e}
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
     */function be(e,t=1e3,n=2){const r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+a)}
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
     */function we(e){return e&&e._delegate?e._delegate:e}class ye{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const ve="[DEFAULT]";
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
     */class Ie{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new le;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:ve})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);const i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===ve?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:ve:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class $e{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ie(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var Ee;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ee||(Ee={}));const Ce={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Se=Ee.INFO,_e={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},De=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=_e[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};class Te{constructor(e){this.name=e,this._logLevel=Se,this._logHandler=De,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ce[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}let Ae,ke;const Me=new WeakMap,Oe=new WeakMap,je=new WeakMap,Pe=new WeakMap,Le=new WeakMap;let Be={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Oe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||je.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function xe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ke||(ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(He(this),t),Fe(Me.get(this))}:function(...t){return Fe(e.apply(He(this),t))}:function(t,...n){const r=e.call(He(this),t,...n);return je.set(r,t.sort?t.sort():[t]),Fe(r)}}function Ne(e){return"function"==typeof e?xe(e):(e instanceof IDBTransaction&&function(e){if(Oe.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));Oe.set(e,t)}(e),t=e,(Ae||(Ae=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Be):e);var t}function Fe(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(Fe(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Me.set(t,e)})).catch((()=>{})),Le.set(t,e),t}(e);if(Pe.has(e))return Pe.get(e);const t=Ne(e);return t!==e&&(Pe.set(e,t),Le.set(t,e)),t}const He=e=>Le.get(e);function Re(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const s=indexedDB.open(e,t),o=Fe(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(Fe(s.result),e.oldVersion,e.newVersion,Fe(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),o.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),o}const ze=["get","getKey","getAll","getAllKeys","count"],Ve=["put","add","delete","clear"],Ue=new Map;function We(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ue.get(t))return Ue.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=Ve.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!ze.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),a&&i.done]))[0]};return Ue.set(t,i),i}Be=(e=>({...e,get:(t,n,r)=>We(t,n)||e.get(t,n,r),has:(t,n)=>!!We(t,n)||e.has(t,n)}))(Be);
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
class qe{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ge="@firebase/app",Ke="0.7.24",Ye=new Te("@firebase/app"),Je="[DEFAULT]",Xe={[Ge]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ze=new Map,Qe=new Map;function et(e,t){try{e.container.addComponent(t)}catch(n){Ye.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tt(e){const t=e.name;if(Qe.has(t))return Ye.debug(`There were multiple attempts to register component ${t}.`),!1;Qe.set(t,e);for(const t of Ze.values())et(t,e);return!0}function nt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
     */const rt=new de("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class at{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ye("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}}function it(e,t,n){var r;let a=null!==(r=Xe[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${a}" with version "${t}":`];return i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ye.warn(e.join(" "))}tt(new ye(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}
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
     */const st="firebase-heartbeat-store";let ot=null;function ct(){return ot||(ot=Re("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(st)}}).catch((e=>{throw rt.create("storage-open",{originalErrorMessage:e.message})}))),ot}async function lt(e,t){try{const n=(await ct()).transaction(st,"readwrite"),r=n.objectStore(st);return await r.put(t,ht(e)),n.done}catch(e){throw rt.create("storage-set",{originalErrorMessage:e.message})}}function ht(e){return`${e.name}!${e.options.appId}`}
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
     */class ut{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=pt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=pt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const a of e){const e=n.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),ft(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),ft(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=ce(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pt(){return(new Date).toISOString().substring(0,10)}class dt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!he()&&ue().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await ct()).transaction(st).objectStore(st).get(ht(e))}catch(e){throw rt.create("storage-get",{originalErrorMessage:e.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return lt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return lt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ft(e){return ce(JSON.stringify({version:2,heartbeats:e})).length}
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
     */var gt;gt="",tt(new ye("platform-logger",(e=>new qe(e)),"PRIVATE")),tt(new ye("heartbeat",(e=>new ut(e)),"PRIVATE")),it(Ge,Ke,gt),it(Ge,Ke,"esm2017"),it("fire-js","");const mt="@firebase/installations",bt="0.5.9",wt=1e4,yt="w:0.5.9",vt="FIS_v2",It=36e5,$t=new de("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Et(e){return e instanceof pe&&e.code.includes("request-failed")}
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
     */function Ct({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function St(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function _t(e,t){const n=(await t.json()).error;return $t.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Dt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Tt(e,{refreshToken:t}){const n=Dt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function At(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function kt(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const Mt=/^[cdef][\w-]{21}$/;function Ot(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return Mt.test(t)?t:""}catch(e){return""}}function jt(e){return`${e.appName}!${e.appId}`}
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
     */const Pt=new Map;function Lt(e,t){const n=jt(e);Bt(n,t),function(e,t){const n=function(){!xt&&"BroadcastChannel"in self&&(xt=new BroadcastChannel("[Firebase] FID Change"),xt.onmessage=e=>{Bt(e.data.key,e.data.fid)});return xt}();n&&n.postMessage({key:e,fid:t});0===Pt.size&&xt&&(xt.close(),xt=null)}(n,t)}function Bt(e,t){const n=Pt.get(e);if(n)for(const e of n)e(t)}let xt=null;
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
const Nt="firebase-installations-store";let Ft=null;function Ht(){return Ft||(Ft=Re("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Nt)}})),Ft}async function Rt(e,t){const n=jt(e),r=(await Ht()).transaction(Nt,"readwrite"),a=r.objectStore(Nt),i=await a.get(n);return await a.put(t,n),await r.done,i&&i.fid===t.fid||Lt(e,t.fid),t}async function zt(e){const t=jt(e),n=(await Ht()).transaction(Nt,"readwrite");await n.objectStore(Nt).delete(t),await n.done}async function Vt(e,t){const n=jt(e),r=(await Ht()).transaction(Nt,"readwrite"),a=r.objectStore(Nt),i=await a.get(n),s=t(i);return void 0===s?await a.delete(n):await a.put(s,n),await r.done,!s||i&&i.fid===s.fid||Lt(e,s.fid),s}
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
     */async function Ut(e){let t;const n=await Vt(e.appConfig,(n=>{const r=function(e){return Gt(e||{fid:Ot(),registrationStatus:0})}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject($t.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ct(e),a=Dt(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={fid:n,authVersion:vt,appId:e.appId,sdkVersion:yt},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await At((()=>fetch(r,o)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:St(e.authToken)}}throw await _t("Create Installation",c)}(e,t);return Rt(e.appConfig,n)}catch(n){throw Et(n)&&409===n.customData.serverCode?await zt(e.appConfig):await Rt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Wt(e)}:{installationEntry:t}}(e,r);return t=a.registrationPromise,a.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Wt(e){let t=await qt(e.appConfig);for(;1===t.registrationStatus;)await kt(100),t=await qt(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Ut(e);return n||t}return t}function qt(e){return Vt(e,(e=>{if(!e)throw $t.create("installation-not-found");return Gt(e)}))}function Gt(e){return 1===(t=e).registrationStatus&&t.registrationTime+wt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function Kt({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Ct(e)}/${t}/authTokens:generate`}
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
     */(e,n),a=Tt(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={installation:{sdkVersion:yt,appId:e.appId}},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await At((()=>fetch(r,o)));if(c.ok){return St(await c.json())}throw await _t("Generate Auth Token",c)}async function Yt(e,t=!1){let n;const r=await Vt(e.appConfig,(r=>{if(!Xt(r))throw $t.create("not-registered");const a=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+It}(e)}(a))return r;if(1===a.requestStatus)return n=async function(e,t){let n=await Jt(e.appConfig);for(;1===n.authToken.requestStatus;)await kt(100),n=await Jt(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Yt(e,t):r}(e,t),r;{if(!navigator.onLine)throw $t.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Kt(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Rt(e.appConfig,r),n}catch(n){if(!Et(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Rt(e.appConfig,n)}else await zt(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Jt(e){return Vt(e,(e=>{if(!Xt(e))throw $t.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+wt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function Xt(e){return void 0!==e&&2===e.registrationStatus}
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
async function Zt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Ut(e);t&&await t}
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
     */(n);return(await Yt(n,t)).token}function Qt(e){return $t.create("missing-app-config-values",{valueName:e})}
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
     */const en="installations",tn=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Qt("App Configuration");if(!e.name)throw Qt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Qt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:nt(t,"heartbeat"),_delete:()=>Promise.resolve()}},nn=e=>{const t=nt(e.getProvider("app").getImmediate(),en).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ut(t);return r?r.catch(console.error):Yt(t).catch(console.error),n.fid}(t),getToken:e=>Zt(t,e)}};tt(new ye(en,tn,"PUBLIC")),tt(new ye("installations-internal",nn,"PRIVATE")),it(mt,bt),it(mt,bt,"esm2017");
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
const rn="analytics",an="https://www.googletagmanager.com/gtag/js",sn=new Te("@firebase/analytics");
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
function on(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function cn(e,t,n,r){return async function(a,i,s){try{"event"===a?await async function(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let e=a.send_to;Array.isArray(e)||(e=[e]);const r=await on(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),a=e&&t[e.appId];if(!a){i=[];break}i.push(a)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(e){sn.error(e)}}(e,t,n,i,s):"config"===a?await async function(e,t,n,r,a,i){const s=r[a];try{if(s)await t[s];else{const e=(await on(n)).find((e=>e.measurementId===a));e&&await t[e.appId]}}catch(e){sn.error(e)}e("config",a,i)}(e,t,n,r,i,s):e("set",i)}catch(e){sn.error(e)}}}
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
const ln=new de("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const hn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function un(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function pn(e,t=hn,n){const{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw ln.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw ln.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new fn;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),dn({appId:r,apiKey:a,measurementId:i},s,o,t)}async function dn(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=hn){const{appId:i,measurementId:s}=e;try{await function(e,t){return new Promise(((n,r)=>{const a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener((()=>{clearTimeout(i),r(ln.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(s)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:i,measurementId:s};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,a={method:"GET",headers:un(r)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(i,a);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw ln.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return a.deleteThrottleMetadata(i),t}catch(t){if(!function(e){if(!(e instanceof pe&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(a.deleteThrottleMetadata(i),s)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:i,measurementId:s};throw t}const o=503===Number(t.customData.httpStatus)?be(n,a.intervalMillis,30):be(n,a.intervalMillis),c={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return a.setThrottleMetadata(i,c),sn.debug(`Calling attemptFetch again in ${o} millis`),dn(e,c,r,a)}}class fn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
     */async function gn(e,t,n,r,a,i,s){var o;const c=pn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>sn.error(e))),t.push(c);const l=async function(){if(!he())return sn.warn(ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await ue()}catch(e){return sn.warn(ln.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[h,u]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(an))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${an}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(i,h.measurementId),a("js",new Date);const p=null!==(o=null==s?void 0:s.config)&&void 0!==o?o:{};return p.origin="firebase",p.update=!0,null!=u&&(p.firebase_id=u),a("config",h.measurementId,p),h.measurementId}
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
     */class mn{constructor(e){this.app=e}_delete(){return delete bn[this.app.options.appId],Promise.resolve()}}let bn={},wn=[];const yn={};let vn,In,$n="dataLayer",En=!1;function Cn(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=ln.create("invalid-analytics-context",{errorInfo:t});sn.warn(n.message)}}function Sn(e,t,n){Cn();const r=e.options.appId;if(!r)throw ln.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw ln.create("no-api-key");sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=bn[r])throw ln.create("already-exists",{id:r});if(!En){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}($n);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,a){let i=function(...e){window[r].push(arguments)};return window[a]&&"function"==typeof window[a]&&(i=window[a]),window[a]=cn(i,e,t,n),{gtagCore:i,wrappedGtag:window[a]}}(bn,wn,yn,$n,"gtag");In=e,vn=t,En=!0}bn[r]=gn(e,wn,yn,t,vn,$n,n);return new mn(e)}
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
     */function _n(e,t,n,r){e=we(e),async function(e,t,n,r,a){if(a&&a.global)e("event",n,r);else{const a=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:a}))}}(In,bn[e.app.options.appId],t,n,r).catch((e=>sn.error(e)))}const Dn="@firebase/analytics",Tn="0.7.9";tt(new ye(rn,((e,{options:t})=>Sn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),tt(new ye("analytics-internal",(function(e){try{const t=e.getProvider(rn).getImmediate();return{logEvent:(e,n,r)=>_n(t,e,n,r)}}catch(e){throw ln.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),it(Dn,Tn),it(Dn,Tn,"esm2017");
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
it("firebase","9.8.1","app");const An=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Je,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw rt.create("bad-app-name",{appName:String(r)});const a=Ze.get(r);if(a){if(ge(e,a.options)&&ge(n,a.config))return a;throw rt.create("duplicate-app",{appName:r})}const i=new $e(r);for(const e of Qe.values())i.addComponent(e);const s=new at(e,n,i);return Ze.set(r,s),s}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});!function(e=function(e="[DEFAULT]"){const t=Ze.get(e);if(!t)throw rt.create("no-app",{appName:e});return t}()){const t=nt(e=we(e),rn);t.isInitialized()?t.getImmediate():function(e,t={}){const n=nt(e,rn);if(n.isInitialized()){const e=n.getImmediate();if(ge(t,n.getOptions()))return e;throw ln.create("already-initialized")}n.initialize({options:t})}(e)}(An);var kn={otd:{"2021-10-12":"mugs.png","2021-10-13":"you three.jpg","2021-10-14":"Gebreamlak.png","2021-10-15":"integration.png","2021-10-16":"slaps.png","2021-10-17":"trains.jpg","2021-10-18":"engineers.jpg","2021-10-19":"uncertainty.jpg","2021-10-20":"LHC.jpg","2021-10-21":"xi.jpg","2021-10-22":"crossover.jpg","2021-10-23":"HDMI.jpg","2021-11-05":"drink.png","2021-11-06":"boxes.png","2021-11-09":"F1.png","2021-11-10":"dates.png","2021-11-11":"interviews.png","2021-11-15":"planes.jpg","2021-11-16":"1i.jpg","2021-11-17":"pure 2.png","2021-11-24":"air resistance.jpg","2021-11-25":"obvious.jpg","2021-12-25":"xmas.jpg","2022-01-09":"Coulomb.png","2022-01-13":"bon appetit.png","2022-01-14":"Friday.png","2022-01-17":"speed.png","2022-01-25":"stability.png","2022-02-01":"ethane.png","2022-02-02":"birthday.png","2022-02-03":"k.jpg","2022-02-04":"Le Chatelier.png","2022-02-05":"2nd order ODE.png","2022-02-07":"expansion.png","2022-02-08":"cuts.png","2022-03-03":"spin.png","2022-03-08":"physics mark.png","2022-03-16":"core prac..png","2022-03-23":"copper.png","2022-05-04":"A level.png","2022-05-05":"studying.png","2022-05-06":"Newton's III.png","2022-05-26":"physics 1 flashbacks.png","2022-05-27":"capacitors.jpg","2022-05-28":"diodes.jpg","2022-06-07":"cheese.png","2022-06-10":"wrapped.png","2022-06-11":"USB.png","2022-06-14":"Ferris.png","2022-06-16":"chicken.png"}};return new class extends H{constructor(e){super(),F(this,e,ie,ae,i,{memes:4,dateToString:5})}}({target:document.body,props:{memes:kn,dateToString:(e,t="/",n=!1)=>{const r=[`${e.getDate()}`.padStart(2,"0"),`${e.getMonth()+1}`.padStart(2,"0"),e.getFullYear()];return(n?r.reverse():r).join(t)}}})}();
//# sourceMappingURL=index.js.map
