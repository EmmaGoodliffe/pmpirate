var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,s;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function m(){return h(" ")}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e){s=e}const b=[],w=[],v=[],I=[],$=Promise.resolve();let _=!1;function E(e){v.push(e)}let D=!1;const S=new Set;function C(){if(!D){D=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];y(t),x(t.$$)}for(y(null),b.length=0;w.length;)w.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];S.has(t)||(S.add(t),t())}v.length=0}while(b.length);for(;I.length;)I.pop()();_=!1,D=!1,S.clear()}}function x(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const k=new Set;let j;function T(){j={r:0,c:[],p:j}}function A(){j.r||r(j.c),j=j.p}function O(e,t){e&&e.i&&(k.delete(e),e.i(t))}function P(e,t,n,r){if(e&&e.o){if(k.has(e))return;k.add(e),j.c.push((()=>{k.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function M(e){e&&e.c()}function F(e,n,o,a){const{fragment:s,on_mount:c,on_destroy:l,after_update:u}=e.$$;s&&s.m(n,o),a||E((()=>{const n=c.map(t).filter(i);l?l.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(E)}function N(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t){-1===e.$$.dirty[0]&&(b.push(e),_||(_=!0,$.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,i,o,a,c,l,u,p=[-1]){const d=s;y(t);const h=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:i.target||d.$$.root};u&&u(h.root);let m=!1;if(h.ctx=o?o(t,i.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return h.ctx&&c(h.ctx[e],h.ctx[e]=i)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](i),m&&L(t,e)),n})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!a&&a(h.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);h.fragment&&h.fragment.l(e),e.forEach(f)}else h.fragment&&h.fragment.c();i.intro&&O(t.$$.fragment),F(t,i.target,i.anchor,i.customElement),C()}y(d)}class z{$destroy(){N(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function R(t){let n,r,i,o;return{c(){n=d("span"),r=d("a"),i=h(t[0]),g(r,"class","hover:underline"),g(r,"href",o=`pdf/${t[1]}.pdf`),g(n,"class","flex-1 basis-1/4 pt-2 pb-8")},m(e,t){u(e,n,t),l(n,r),l(r,i)},p(e,[t]){1&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(i,e[0]),2&t&&o!==(o=`pdf/${e[1]}.pdf`)&&g(r,"href",o)},i:e,o:e,d(e){e&&f(n)}}}function q(e,t,n){let{name:r}=t,{path:i}=t;return e.$$set=e=>{"name"in e&&n(0,r=e.name),"path"in e&&n(1,i=e.path)},[r,i]}class H extends z{constructor(e){super(),B(this,e,q,R,o,{name:0,path:1})}}function K(t){let n;return{c(){n=d("header"),n.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',g(n,"class","my-8 flex")},m(e,t){u(e,n,t)},p:e,i:e,o:e,d(e){e&&f(n)}}}class V extends z{constructor(e){super(),B(this,e,null,K,o,{})}}function G(e){let t,n;return{c(){t=d("img"),g(t,"class",W),c(t.src,n=e[0])||g(t,"src",n),g(t,"alt","Meme")},m(e,n){u(e,t,n)},p(e,r){1&r&&!c(t.src,n=e[0])&&g(t,"src",n)},d(e){e&&f(t)}}}function U(t){let n,r;return{c(){n=d("p"),r=h("No meme today :( ... Send suggestions"),g(n,"class",`${W} text-center`)},m(e,t){u(e,n,t),l(n,r)},p:e,d(e){e&&f(n)}}}function Y(t){let n,r,i;function o(e,t){return void 0===e[0]?U:G}let a=o(t),s=a(t);return{c(){n=d("h2"),n.textContent="Meme of the Day",r=m(),s.c(),i=h("")},m(e,t){u(e,n,t),u(e,r,t),s.m(e,t),u(e,i,t)},p(e,[t]){a===(a=o(e))&&s?s.p(e,t):(s.d(1),s=a(e),s&&(s.c(),s.m(i.parentNode,i)))},i:e,o:e,d(e){e&&f(n),e&&f(r),s.d(e),e&&f(i)}}}const W="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";function J(e,t,n){let{src:r}=t;return e.$$set=e=>{"src"in e&&n(0,r=e.src)},[r]}class X extends z{constructor(e){super(),B(this,e,J,Y,o,{src:0})}}function Z(e,t,n){const r=e.slice();return r[8]=t[n],r}function Q(e,t,n){const r=e.slice();return r[11]=t[n],r}function ee(e,t,n){const r=e.slice();return r[11]=t[n],r}function te(t){let n,r;return n=new H({props:{name:t[11],path:`maths/${t[11]}`}}),{c(){M(n.$$.fragment)},m(e,t){F(n,e,t),r=!0},p:e,i(e){r||(O(n.$$.fragment,e),r=!0)},o(e){P(n.$$.fragment,e),r=!1},d(e){N(n,e)}}}function ne(t){let n,r;return n=new H({props:{name:t[11],path:`maths/${t[11]}`}}),{c(){M(n.$$.fragment)},m(e,t){F(n,e,t),r=!0},p:e,i(e){r||(O(n.$$.fragment,e),r=!0)},o(e){P(n.$$.fragment,e),r=!1},d(e){N(n,e)}}}function re(t){let n,r;return n=new H({props:{name:t[8],path:`physics/${t[8].toLowerCase().split(" ").join("_")}_GBD`}}),{c(){M(n.$$.fragment)},m(e,t){F(n,e,t),r=!0},p:e,i(e){r||(O(n.$$.fragment,e),r=!0)},o(e){P(n.$$.fragment,e),r=!1},d(e){N(n,e)}}}function ie(e){let t,n,r,i,o,a,s,c,h,y,b,w,v,I,$,_,E,D,S,C,x,k,j,L,B,z,R,q,K,G,U,Y,W,J,ie,oe,ae,se,ce;t=new V({});let le=e[1],ue=[];for(let t=0;t<le.length;t+=1)ue[t]=te(ee(e,le,t));const fe=e=>P(ue[e],1,1,(()=>{ue[e]=null}));let pe=e[2],de=[];for(let t=0;t<pe.length;t+=1)de[t]=ne(Q(e,pe,t));const he=e=>P(de[e],1,1,(()=>{de[e]=null}));let me=e[3],ge=[];for(let t=0;t<me.length;t+=1)ge[t]=re(Z(e,me,t));const ye=e=>P(ge[e],1,1,(()=>{ge[e]=null}));return R=new H({props:{name:"Physics Year 2",path:"physics/Physics Year 2"}}),K=new H({props:{name:"PiP",path:"physics/PiP"}}),J=new X({props:{src:e[0]}}),{c(){M(t.$$.fragment),n=m(),r=d("main"),i=d("h2"),i.textContent="Maths",o=m(),a=d("div");for(let e=0;e<ue.length;e+=1)ue[e].c();s=m(),c=d("hr"),h=m(),y=d("h2"),y.textContent="Further Maths",b=m(),w=d("div");for(let e=0;e<de.length;e+=1)de[e].c();v=m(),I=d("p"),I.textContent="The year 1 pure and stats are dodgy older versions but I'll fix them soon.",$=m(),_=d("hr"),E=m(),D=d("h2"),D.textContent="GBD Booklets",S=m(),C=d("div");for(let e=0;e<ge.length;e+=1)ge[e].c();x=m(),k=d("hr"),j=m(),L=d("h2"),L.textContent="Physics",B=m(),z=d("div"),M(R.$$.fragment),q=m(),M(K.$$.fragment),G=m(),U=d("hr"),Y=m(),W=d("section"),M(J.$$.fragment),ie=m(),oe=d("p"),oe.innerHTML='<a class="hover:underline" href="archive.html">Meme Archive</a>',ae=m(),se=d("footer"),g(a,"class","book-section"),g(w,"class","book-section"),g(I,"class","epilogue"),g(C,"class","book-section"),g(z,"class","book-section"),g(oe,"class","epilogue")},m(e,f){F(t,e,f),u(e,n,f),u(e,r,f),l(r,i),l(r,o),l(r,a);for(let e=0;e<ue.length;e+=1)ue[e].m(a,null);l(r,s),l(r,c),l(r,h),l(r,y),l(r,b),l(r,w);for(let e=0;e<de.length;e+=1)de[e].m(w,null);l(r,v),l(r,I),l(r,$),l(r,_),l(r,E),l(r,D),l(r,S),l(r,C);for(let e=0;e<ge.length;e+=1)ge[e].m(C,null);l(r,x),l(r,k),l(r,j),l(r,L),l(r,B),l(r,z),F(R,z,null),l(z,q),F(K,z,null),u(e,G,f),u(e,U,f),u(e,Y,f),u(e,W,f),F(J,W,null),l(W,ie),l(W,oe),u(e,ae,f),u(e,se,f),ce=!0},p(e,[t]){if(2&t){let n;for(le=e[1],n=0;n<le.length;n+=1){const r=ee(e,le,n);ue[n]?(ue[n].p(r,t),O(ue[n],1)):(ue[n]=te(r),ue[n].c(),O(ue[n],1),ue[n].m(a,null))}for(T(),n=le.length;n<ue.length;n+=1)fe(n);A()}if(4&t){let n;for(pe=e[2],n=0;n<pe.length;n+=1){const r=Q(e,pe,n);de[n]?(de[n].p(r,t),O(de[n],1)):(de[n]=ne(r),de[n].c(),O(de[n],1),de[n].m(w,null))}for(T(),n=pe.length;n<de.length;n+=1)he(n);A()}if(8&t){let n;for(me=e[3],n=0;n<me.length;n+=1){const r=Z(e,me,n);ge[n]?(ge[n].p(r,t),O(ge[n],1)):(ge[n]=re(r),ge[n].c(),O(ge[n],1),ge[n].m(C,null))}for(T(),n=me.length;n<ge.length;n+=1)ye(n);A()}},i(e){if(!ce){O(t.$$.fragment,e);for(let e=0;e<le.length;e+=1)O(ue[e]);for(let e=0;e<pe.length;e+=1)O(de[e]);for(let e=0;e<me.length;e+=1)O(ge[e]);O(R.$$.fragment,e),O(K.$$.fragment,e),O(J.$$.fragment,e),ce=!0}},o(e){P(t.$$.fragment,e),ue=ue.filter(Boolean);for(let e=0;e<ue.length;e+=1)P(ue[e]);de=de.filter(Boolean);for(let e=0;e<de.length;e+=1)P(de[e]);ge=ge.filter(Boolean);for(let e=0;e<ge.length;e+=1)P(ge[e]);P(R.$$.fragment,e),P(K.$$.fragment,e),P(J.$$.fragment,e),ce=!1},d(e){N(t,e),e&&f(n),e&&f(r),p(ue,e),p(de,e),p(ge,e),N(R),N(K),e&&f(G),e&&f(U),e&&f(Y),e&&f(W),N(J),e&&f(ae),e&&f(se)}}}function oe(e,t,n){let{memes:r}=t,{dateToString:i}=t;const o=new Date,a=i(o,"-",!0),s=r.otd[a]?`memes/${r.otd[a]}`:void 0;return e.$$set=e=>{"memes"in e&&n(4,r=e.memes),"dateToString"in e&&n(5,i=e.dateToString)},[s,["Pure Year 1","Pure Year 2","Applied Year 1","Applied Year 2"],["Further Mech","Further Pure Year 1","Further Pure Year 2","Further Stats"],["Gravitational Fields","Circular Motion","Electric Fields","Simple Harmonic Motion","Capacitors","Thermal Physics","Magnetism","Nuclear Physics","Radioactivity","Astrophysics"],r,i]}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
function ae(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function se(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function ce(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function le(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function ue(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
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
     */class fe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}class pe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,de.prototype.create)}}class de{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(he,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new pe(r,a,n)}}const he=/\{\$([^}]+)}/g;function me(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(ge(n)&&ge(o)){if(!me(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function ge(e){return null!==e&&"object"==typeof e}
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
     */function ye(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
     */function be(e){return e&&e._delegate?e._delegate:e}var we=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),ve="[DEFAULT]",Ie=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new fe;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:ve})}catch(e){}try{for(var r=ce(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=le(i.value,2),a=o[0],s=o[1],c=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService({instanceIdentifier:c});s.resolve(l)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=ve),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return ae(this,void 0,void 0,(function(){var e;return se(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(ue(ue([],le(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),le(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=ve),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=ve),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var s=ce(this.instancesDeferred.entries()),c=s.next();!c.done;c=s.next()){var l=le(c.value,2),u=l[0],f=l[1];o===this.normalizeInstanceIdentifier(u)&&f.resolve(a)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var o=ce(i),a=o.next();!a.done;a=o.next()){var s=a.value;try{s(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===ve?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=ve),this.component?this.component.multipleInstances?e:ve:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
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
     */var $e,_e=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ie(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
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
     */!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}($e||($e={}));const Ee={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},De=$e.INFO,Se={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},Ce=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Se[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class xe{constructor(e){this.name=e,this._logLevel=De,this._logHandler=Ce,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ee[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}
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
     */class ke{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const je="@firebase/app",Te=new xe("@firebase/app"),Ae="[DEFAULT]",Oe={[je]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Pe=new Map,Me=new Map;function Fe(e,t){try{e.container.addComponent(t)}catch(n){Te.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ne(e){const t=e.name;if(Me.has(t))return Te.debug(`There were multiple attempts to register component ${t}.`),!1;Me.set(t,e);for(const t of Pe.values())Fe(t,e);return!0}function Le(e,t){return e.container.getProvider(t)}
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
     */const Be=new de("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class ze{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new we("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Be.create("app-deleted",{appName:this._name})}}function Re(e,t,n){var r;let i=null!==(r=Oe[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Te.warn(e.join(" "))}Ne(new we(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var qe;Ne(new we("platform-logger",(e=>new ke(e)),"PRIVATE")),Re(je,"0.7.1",qe),Re("fire-js","");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var He,Ke,Ve,Ge=(He=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,o=new Promise((function(o,a){n(i=e[t].apply(e,r)).then(o,a)}));return o.request=i,o}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new u(e,i.request)}))}function o(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function f(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function d(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function h(e){this._db=e}function m(e,t,n){var i=r(indexedDB,"open",[e,t]),o=i.request;return o&&(o.onupgradeneeded=function(e){n&&n(new d(o.result,e.oldVersion,o.transaction))}),i.then((function(e){return new h(e)}))}function g(e){return r(indexedDB,"deleteDatabase",[e])}o(l,"_index",["name","keyPath","multiEntry","unique"]),a(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(u,"_cursor",["direction","key","primaryKey","value"]),a(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),f.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},f.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},o(f,"_store",["name","keyPath","indexNames","autoIncrement"]),a(f,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(f,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(f,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new f(this._tx.objectStore.apply(this._tx,arguments))},o(p,"_tx",["objectStoreNames","mode"]),s(p,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new f(this._db.createObjectStore.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},o(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[f,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,o=i[e].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[l,f].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=m,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)},He(Ve={path:Ke,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&Ve.path)}},Ve.exports),Ve.exports);const Ue="0.5.1",Ye=1e4,We="w:0.5.1",Je="FIS_v2",Xe=36e5,Ze=new de("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Qe(e){return e instanceof pe&&e.code.includes("request-failed")}
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
     */function et({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function tt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function nt(e,t){const n=(await t.json()).error;return Ze.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function rt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function it(e,{refreshToken:t}){const n=rt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function ot(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function at(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const st=/^[cdef][\w-]{21}$/;function ct(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return st.test(t)?t:""}catch(e){return""}}function lt(e){return`${e.appName}!${e.appId}`}
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
     */const ut=new Map;function ft(e,t){const n=lt(e);pt(n,t),function(e,t){const n=function(){!dt&&"BroadcastChannel"in self&&(dt=new BroadcastChannel("[Firebase] FID Change"),dt.onmessage=e=>{pt(e.data.key,e.data.fid)});return dt}();n&&n.postMessage({key:e,fid:t});0===ut.size&&dt&&(dt.close(),dt=null)}(n,t)}function pt(e,t){const n=ut.get(e);if(n)for(const e of n)e(t)}let dt=null;
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
const ht="firebase-installations-store";let mt=null;function gt(){return mt||(mt=Ge.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(ht)}))),mt}async function yt(e,t){const n=lt(e),r=(await gt()).transaction(ht,"readwrite"),i=r.objectStore(ht),o=await i.get(n);return await i.put(t,n),await r.complete,o&&o.fid===t.fid||ft(e,t.fid),t}async function bt(e){const t=lt(e),n=(await gt()).transaction(ht,"readwrite");await n.objectStore(ht).delete(t),await n.complete}async function wt(e,t){const n=lt(e),r=(await gt()).transaction(ht,"readwrite"),i=r.objectStore(ht),o=await i.get(n),a=t(o);return void 0===a?await i.delete(n):await i.put(a,n),await r.complete,!a||o&&o.fid===a.fid||ft(e,a.fid),a}
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
     */async function vt(e){let t;const n=await wt(e,(n=>{const r=function(e){return _t(e||{fid:ct(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Ze.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=et(e),r=rt(e),i={fid:t,authVersion:Je,appId:e.appId,sdkVersion:We},o={method:"POST",headers:r,body:JSON.stringify(i)},a=await ot((()=>fetch(n,o)));if(a.ok){const e=await a.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:tt(e.authToken)}}throw await nt("Create Installation",a)}(e,t);return yt(e,n)}catch(n){throw Qe(n)&&409===n.customData.serverCode?await bt(e):await yt(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:It(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function It(e){let t=await $t(e);for(;1===t.registrationStatus;)await at(100),t=await $t(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await vt(e);return n||t}return t}function $t(e){return wt(e,(e=>{if(!e)throw Ze.create("installation-not-found");return _t(e)}))}function _t(e){return 1===(t=e).registrationStatus&&t.registrationTime+Ye<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function Et({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${et(e)}/${t}/authTokens:generate`}
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
     */(e,n),i=it(e,n),o=t.getImmediate({optional:!0});o&&i.append("x-firebase-client",o.getPlatformInfoString());const a={installation:{sdkVersion:We}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await ot((()=>fetch(r,s)));if(c.ok){return tt(await c.json())}throw await nt("Generate Auth Token",c)}async function Dt(e,t=!1){let n;const r=await wt(e.appConfig,(r=>{if(!Ct(r))throw Ze.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Xe}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await St(e.appConfig);for(;1===n.authToken.requestStatus;)await at(100),n=await St(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Dt(e,t):r}(e,t),r;{if(!navigator.onLine)throw Ze.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Et(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await yt(e.appConfig,r),n}catch(n){if(!Qe(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await yt(e.appConfig,n)}else await bt(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function St(e){return wt(e,(e=>{if(!Ct(e))throw Ze.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Ye<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function Ct(e){return void 0!==e&&2===e.registrationStatus}
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
async function xt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await vt(e);t&&await t}
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
     */(n.appConfig);return(await Dt(n,t)).token}function kt(e){return Ze.create("missing-app-config-values",{valueName:e})}
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
     */const jt="installations",Tt=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw kt("App Configuration");if(!e.name)throw kt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw kt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Le(t,"platform-logger"),_delete:()=>Promise.resolve()}},At=e=>{const t=Le(e.getProvider("app").getImmediate(),jt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await vt(t.appConfig);return r?r.catch(console.error):Dt(t).catch(console.error),n.fid}(t),getToken:e=>xt(t,e)}};Ne(new we(jt,Tt,"PUBLIC")),Ne(new we("installations-internal",At,"PRIVATE")),Re("@firebase/installations",Ue);
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
const Ot="analytics",Pt="https://www.googletagmanager.com/gtag/js",Mt=new xe("@firebase/analytics");
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
function Ft(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Nt(e,t,n,r){return async function(i,o,a){try{"event"===i?await async function(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Ft(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(e){Mt.error(e)}}(e,t,n,o,a):"config"===i?await async function(e,t,n,r,i,o){const a=r[i];try{if(a)await t[a];else{const e=(await Ft(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){Mt.error(e)}e("config",i,o)}(e,t,n,r,o,a):e("set",o)}catch(e){Mt.error(e)}}}
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
const Lt=new de("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Bt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function zt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Rt(e,t=Bt,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Lt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Lt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Ht;return setTimeout((async()=>{s.abort()}),void 0!==n?n:6e4),qt({appId:r,apiKey:i,measurementId:o},a,s,t)}async function qt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Bt){const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(Lt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(a)return Mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:o,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:zt(r)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(o,i);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Lt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return i.deleteThrottleMetadata(o),t}catch(t){if(!function(e){if(!(e instanceof pe&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(o),a)return Mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:o,measurementId:a};throw t}const s=503===Number(t.customData.httpStatus)?ye(n,i.intervalMillis,30):ye(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+s,backoffCount:n+1};return i.setThrottleMetadata(o,c),Mt.debug(`Calling attemptFetch again in ${s} millis`),qt(e,c,r,i)}}class Ht{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
     */async function Kt(){if("object"!=typeof indexedDB)return Mt.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return Mt.warn(Lt.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function Vt(e,t,n,r,i,o,a){var s;const c=Rt(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Mt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Mt.error(e))),t.push(c);const l=Kt().then((e=>e?r.getId():void 0)),[u,f]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Pt))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Pt}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(o,u.measurementId),i("js",new Date);const p=null!==(s=null==a?void 0:a.config)&&void 0!==s?s:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),i("config",u.measurementId,p),u.measurementId}
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
     */class Gt{constructor(e){this.app=e}_delete(){return delete Ut[this.app.options.appId],Promise.resolve()}}let Ut={},Yt=[];const Wt={};let Jt,Xt,Zt="dataLayer",Qt=!1;function en(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:t});Mt.warn(n.message)}}function tn(e,t,n){en();const r=e.options.appId;if(!r)throw Lt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Lt.create("no-api-key");Mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Ut[r])throw Lt.create("already-exists",{id:r});if(!Qt){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Zt);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=Nt(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}(Ut,Yt,Wt,Zt,"gtag");Xt=e,Jt=t,Qt=!0}Ut[r]=Vt(e,Yt,Wt,t,Jt,Zt,n);return new Gt(e)}
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
     */function nn(e,t,n,r){e=be(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(Xt,Ut[e.app.options.appId],t,n,r).catch((e=>Mt.error(e)))}Ne(new we(Ot,((e,{options:t})=>tn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Ne(new we("analytics-internal",(function(e){try{const t=e.getProvider(Ot).getImmediate();return{logEvent:(e,n,r)=>nn(t,e,n,r)}}catch(e){throw Lt.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Re("@firebase/analytics","0.7.1");
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
Re("firebase","9.1.0","app");const rn=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Ae,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Be.create("bad-app-name",{appName:String(r)});const i=Pe.get(r);if(i){if(me(e,i.options)&&me(n,i.config))return i;throw Be.create("duplicate-app",{appName:r})}const o=new _e(r);for(const e of Me.values())o.addComponent(e);const a=new ze(e,n,o);return Pe.set(r,a),a}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});!function(e=function(e="[DEFAULT]"){const t=Pe.get(e);if(!t)throw Be.create("no-app",{appName:e});return t}()){const t=Le(e=be(e),Ot);t.isInitialized()?t.getImmediate():function(e,t={}){const n=Le(e,Ot);if(n.isInitialized()){const e=n.getImmediate();if(me(t,n.getOptions()))return e;throw Lt.create("already-initialized")}n.initialize({options:t})}(e)}(rn);var on={otd:{"2021-10-12":"mugs.png","2021-10-13":"you three.jpg","2021-10-14":"Gebreamlak.png","2021-10-15":"integration.png","2021-10-16":"slaps.png","2021-10-17":"trains.jpg","2021-10-18":"engineers.jpg","2021-10-19":"uncertainty.jpg","2021-10-20":"LHC.jpg","2021-10-21":"xi.jpg","2021-10-22":"crossover.jpg","2021-10-23":"HDMI.jpg","2021-11-05":"drink.png","2021-11-06":"boxes.png","2021-11-09":"F1.png","2021-11-10":"dates.png","2021-11-11":"interviews.png","2021-11-15":"planes.jpg","2021-11-16":"1i.jpg","2021-11-17":"pure 2.png","2021-11-24":"air resistance.jpg","2021-11-25":"obvious.jpg","2021-12-25":"xmas.jpg","2022-01-09":"Coulomb.png","2022-01-13":"bon appetit.png","2022-01-14":"Friday.png","2022-01-17":"speed.png","2022-01-25":"stability.png","2022-02-01":"ethane.png","2022-02-02":"birthday.png","2022-02-03":"k.jpg","2022-02-04":"Le Chatelier.png","2022-02-05":"2nd order ODE.png","2022-02-07":"expansion.png","2022-02-08":"cuts.png"}};return new class extends z{constructor(e){super(),B(this,e,oe,ie,o,{memes:4,dateToString:5})}}({target:document.body,props:{memes:on,dateToString:(e,t="/",n=!1)=>{const r=[`${e.getDate()}`.padStart(2,"0"),`${e.getMonth()+1}`.padStart(2,"0"),e.getFullYear()];return(n?r.reverse():r).join(t)}}})}();
//# sourceMappingURL=index.js.map
